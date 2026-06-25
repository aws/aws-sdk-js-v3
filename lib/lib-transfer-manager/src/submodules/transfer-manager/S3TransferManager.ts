import type {
  AbortMultipartUploadCommandInput,
  CompletedPart,
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommandInput,
  GetObjectCommandInput,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  UploadPartCommandInput,
} from "@aws-sdk/client-s3";
import {
  AbortMultipartUploadCommand,
  CompleteMultipartUploadCommand,
  CreateMultipartUploadCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import type { Logger } from "@smithy/types";
import { type StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { createReadStream } from "node:fs";
import { opendir, realpath, stat } from "node:fs/promises";
import { join, relative, sep } from "node:path";

import { type RawDataPart, byteLength, getChunk } from "./chunker";
import { handleFailure, Semaphore, validateDirectory } from "./directory-transfer-utils";
import type { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";
import { joinStreams } from "./join-streams";
import { LogLevel } from "./log-level";
import type {
  CannedFailurePolicy,
  DirectoryTransferFailureContext,
  DownloadDirectoryRequest,
  DownloadDirectoryResponse,
  DownloadRequest,
  DownloadResponse,
  IS3TransferManager,
  S3TransferManagerConfig,
  TransferCompleteEvent,
  TransferEvent,
  TransferEventListeners,
  TransferOptions,
  UploadDirectoryRequest,
  UploadDirectoryResponse,
  UploadRequest,
  UploadResponse,
} from "./types";
import { type DataSource, createEmptyReadable, defaultWorkerCount, WorkerHttpHandler } from "./worker-http-handler";

/**
 * Client for efficient transfer of objects to and from Amazon S3.
 * Provides methods to optimize uploading and downloading individual objects
 * as well as entire directories, with support for multipart operations,
 * concurrency control, and request cancellation.
 * Implements an eventTarget-based progress tracking system with methods to register,
 * dispatch, and remove listeners for transfer lifecycle events.
 *
 * @alpha
 */

export class S3TransferManager implements IS3TransferManager {
  private static MIN_PART_SIZE = 5 * 1024 * 1024; // 5MB

  private readonly s3: S3Client;
  private readonly targetPartSizeBytes: number;
  private readonly multipartUploadThresholdBytes: number;
  private readonly requestChecksumCalculation: "WHEN_SUPPORTED" | "WHEN_REQUIRED";
  private readonly responseChecksumValidation: "WHEN_SUPPORTED" | "WHEN_REQUIRED";
  private readonly multipartDownloadType: "PART" | "RANGE";
  private readonly eventListeners: TransferEventListeners;
  private readonly abortCleanupFunctions = new WeakMap<AbortSignal, () => void>();
  private readonly maxConcurrentDownloads: number;
  private readonly maxConcurrentUploads: number;
  private readonly workerThreadCount: number;
  private readonly workerHttpHandler: WorkerHttpHandler | undefined;
  private readonly logger: Logger;

  public constructor(config: S3TransferManagerConfig = {}) {
    this.requestChecksumCalculation = config.requestChecksumCalculation ?? "WHEN_SUPPORTED";
    this.responseChecksumValidation = config.responseChecksumValidation ?? "WHEN_SUPPORTED";
    this.maxConcurrentUploads = config.maxConcurrentUploads ?? 32;
    this.workerThreadCount = config.workerThreadCount ?? defaultWorkerCount();

    this.s3 =
      config.s3 ??
      new S3Client({
        requestChecksumCalculation: this.requestChecksumCalculation,
        responseChecksumValidation: this.responseChecksumValidation,
      });

    if (this.workerThreadCount > 1) {
      this.workerHttpHandler = new WorkerHttpHandler({
        workerThreadCount: this.workerThreadCount,
        maxConcurrentUploads: this.maxConcurrentUploads,
      });
      if (this.s3.config) {
        this.s3.config.requestHandler = this.workerHttpHandler as any;
      }
    }

    this.targetPartSizeBytes = config.targetPartSizeBytes ?? 8 * 1024 * 1024; // 8 MB
    this.multipartUploadThresholdBytes = config.multipartUploadThresholdBytes ?? 16 * 1024 * 1024; // 16 MB

    this.multipartDownloadType = config.multipartDownloadType ?? "PART";
    this.maxConcurrentDownloads = config.maxConcurrentDownloads ?? 8;
    this.logger = config.logger ?? new LogLevel("warn");
    this.eventListeners = {
      transferInitiated: config.eventListeners?.transferInitiated ?? [],
      bytesTransferred: config.eventListeners?.bytesTransferred ?? [],
      transferComplete: config.eventListeners?.transferComplete ?? [],
      transferFailed: config.eventListeners?.transferFailed ?? [],
    };

    this.validateConfig();
  }

  /**
   * Registers a callback function to be executed when a specific transfer event occurs.
   * Supports monitoring the full lifecycle of transfers.
   *
   * @param type - The type of event to listen for.
   * @param callback - Function to execute when the specified event occurs.
   * @param options - Optional configuration for event listener behavior.
   *
   * @alpha
   */
  public addEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void;
  public addEventListener(type: string, callback: EventListener, options?: AddEventListenerOptions | boolean): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (!listeners) {
      throw new Error(`Unknown event type: ${eventType}`);
    }

    const once = typeof options !== "boolean" && options?.once;
    const signal = typeof options !== "boolean" ? options?.signal : undefined;
    let updatedCallback = callback;

    if (signal?.aborted) {
      return;
    }

    if (signal) {
      const removeListenerAfterAbort = () => {
        this.removeEventListener(eventType, updatedCallback);
        this.abortCleanupFunctions.delete(signal);
      };

      this.abortCleanupFunctions.set(signal, () => signal.removeEventListener("abort", removeListenerAfterAbort));
      signal.addEventListener("abort", removeListenerAfterAbort, { once: true });
    }

    if (once) {
      updatedCallback = (event: Event) => {
        if (typeof callback === "function") {
          callback(event);
        } else {
          callback.handleEvent(event);
        }
        this.removeEventListener(eventType, updatedCallback);
      };
    }
    listeners.push(updatedCallback);
  }

  /**
   * Dispatches an event to the registered event listeners.
   * Triggers callbacks registered via addEventListener with matching event types.
   *
   * @param event - The event object to dispatch.
   * @returns whether the event ran to completion
   *
   * @alpha
   */
  public dispatchEvent(event: Event & TransferEvent): boolean;
  public dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  public dispatchEvent(event: Event): boolean;
  public dispatchEvent(event: Event): boolean {
    const eventType = event.type;
    const listeners = this.eventListeners[eventType as keyof TransferEventListeners] as EventListener[];

    if (listeners) {
      for (const listener of listeners) {
        if (typeof listener === "function") {
          listener(event);
        } else {
          listener.handleEvent(event);
        }
      }
    }
    return true;
  }

  /**
   * Removes a previously registered event listener from the specified event type.
   * Stops the callback from being invoked when the event occurs.
   *
   * @param type - The type of event to stop listening for.
   * @param callback - The function that was previously registered.
   * @param options - Optional configuration for the event listener.
   *
   * @alpha
   */
  public removeEventListener(
    type: "transferInitiated",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "bytesTransferred",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "transferComplete",
    callback: EventListener<TransferCompleteEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: "transferFailed",
    callback: EventListener<TransferEvent>,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: string,
    callback: EventListener,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(
    type: string,
    callback: EventListener,
    options?: RemoveEventListenerOptions | boolean
  ): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (listeners) {
      if (
        eventType === "transferInitiated" ||
        eventType === "bytesTransferred" ||
        eventType === "transferFailed" ||
        eventType === "transferComplete"
      ) {
        const eventListener = callback as EventListener<TransferEvent>;
        let index = listeners.indexOf(eventListener);
        while (index !== -1) {
          listeners.splice(index, 1);
          index = listeners.indexOf(eventListener);
        }
      } else {
        throw new Error(`Unknown event type: ${type}`);
      }
    }
  }

  /**
   * Uploads objects to S3 with automatic multipart upload handling.
   * Automatically chooses between single object upload or multipart upload based on content length threshold.
   *
   * @param request - PutObjectCommandInput and CreateMultipartUploadCommandInput parameters for single or multipart uploads.
   * @param transferOptions - Optional abort signal and event listeners for transfer lifecycle monitoring.
   *
   * @returns S3 PutObject or CompleteMultipartUpload response with transfer event dispatching.
   *
   */
  public async upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse> {
    const totalContentLength = request.ContentLength ?? byteLength(request.Body);

    if (totalContentLength === undefined) {
      throw new Error("Unable to determine content length for upload");
    }

    this.checkAborted(transferOptions);
    this.addEventListeners(transferOptions?.eventListeners);
    this.dispatchTransferInitiatedEvent(request, totalContentLength);

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);
      if (transferOptions?.abortSignal) {
        this.abortCleanupFunctions.get(transferOptions.abortSignal as AbortSignal)?.();
        this.abortCleanupFunctions.delete(transferOptions.abortSignal as AbortSignal);
      }
    };

    try {
      let response: UploadResponse;

      if (totalContentLength < this.multipartUploadThresholdBytes) {
        response = await this.uploadSinglePart(request, totalContentLength, transferOptions);
      } else if (this.workerThreadCount > 1 && this.isFileBody(request.Body)) {
        response = await this.threadedUploadInPartsFromFile(request, totalContentLength, transferOptions);
      } else if (this.workerThreadCount > 1 && this.isInMemoryBody(request.Body)) {
        if (typeof request.Body === "string") {
          request = { ...request, Body: new TextEncoder().encode(request.Body) };
        }
        response = await this.threadedUploadInParts(request, totalContentLength, transferOptions);
      } else {
        response = await this.uploadInParts(request, totalContentLength, transferOptions);
      }

      this.dispatchEvent(
        Object.assign(new Event("transferComplete"), {
          request,
          response,
          snapshot: {
            transferredBytes: totalContentLength,
            totalBytes: totalContentLength,
          },
        })
      );
      removeLocalEventListeners();
      return response;
    } catch (error) {
      this.dispatchTransferFailedEvent(request, totalContentLength, error as Error);
      removeLocalEventListeners();
      throw error;
    }
  }

  /**
   * Downloads single objects from S3 with automatic multipart handling.
   * Automatically chooses between PART or RANGE download strategies and joins streams into a single response.
   *
   * @param request - GetObjectCommandInput parameters. PartNumber is not supported - use GetObjectCommand directly for specific parts.
   * @param transferOptions - Optional abort signal and event listeners for transfer lifecycle monitoring.
   *
   * @returns S3 GetObject response with joined Body stream and transfer event dispatching.
   *
   * @alpha
   */
  public async download(request: DownloadRequest, transferOptions?: TransferOptions): Promise<DownloadResponse> {
    const partNumber = request.PartNumber;
    if (typeof partNumber === "number") {
      throw new Error(
        "partNumber included: S3 Transfer Manager does not support downloads for specific parts. Use GetObjectCommand instead"
      );
    }

    const metadata = {} as Omit<DownloadResponse, "Body">;
    const streams = [] as Promise<StreamingBlobPayloadOutputTypes>[];
    const requests = [] as GetObjectCommandInput[];

    let totalSize: number | undefined;

    this.checkAborted(transferOptions);
    this.addEventListeners(transferOptions?.eventListeners);

    const checksumValidationEnabled =
      request.ChecksumMode === "ENABLED" || this.responseChecksumValidation === "WHEN_SUPPORTED";

    let onStreamConsumed: ((index: number) => void) | undefined;

    if (this.multipartDownloadType === "PART") {
      const responseMetadata = await this.downloadByPart(
        request,
        transferOptions ?? {},
        streams,
        requests,
        metadata,
        checksumValidationEnabled
      );
      totalSize = responseMetadata.totalSize;
      onStreamConsumed = responseMetadata.onStreamConsumed;
    } else if (this.multipartDownloadType === "RANGE") {
      const responseMetadata = await this.downloadByRange(
        request,
        transferOptions ?? {},
        streams,
        requests,
        metadata,
        checksumValidationEnabled
      );
      totalSize = responseMetadata.totalSize;
      onStreamConsumed = responseMetadata.onStreamConsumed;
    }

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);
      if (transferOptions?.abortSignal) {
        this.abortCleanupFunctions.get(transferOptions.abortSignal as AbortSignal)?.();
        this.abortCleanupFunctions.delete(transferOptions.abortSignal as AbortSignal);
      }
    };

    const response = {
      ...metadata,
      Body: await joinStreams(streams, {
        onBytes: (byteLength: number, index) => {
          this.dispatchEvent(
            Object.assign(new Event("bytesTransferred"), {
              request: requests[index],
              snapshot: {
                transferredBytes: byteLength,
                totalBytes: totalSize,
              },
            })
          );
        },
        onCompletion: (byteLength: number, index) => {
          this.dispatchEvent(
            Object.assign(new Event("transferComplete"), {
              request: requests[index],
              response,
              snapshot: {
                transferredBytes: byteLength,
                totalBytes: totalSize,
              },
            })
          );
          removeLocalEventListeners();
        },
        onFailure: (error: unknown, index) => {
          this.dispatchEvent(
            Object.assign(new Event("transferFailed"), {
              request: requests[index],
              snapshot: {
                transferredBytes: error,
                totalBytes: totalSize,
              },
            })
          );
          removeLocalEventListeners();
        },
        onStreamConsumed,
      }),
    };

    return response;
  }

  /**
   * Uploads files in a directory to an S3 bucket.
   * By default, it does not recurse into subdirectories. To upload recursively, set recursive: true.
   *
   * @param request - Configuration including bucket, source directory, filtering, failure handling, and transfer settings.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events.
   *
   * @returns the number of objects that have been uploaded and the number of objects that have failed.
   *
   * @alpha
   */
  public async uploadDirectory(request: UploadDirectoryRequest, transferOptions?: TransferOptions): Promise<UploadDirectoryResponse> {
    const absoluteSource = await validateDirectory(request.source);
    const maxConcurrency = request.maxConcurrency ?? 100;
    const failurePolicy = request.failurePolicy ?? ("terminate" as CannedFailurePolicy);
    const semaphore = new Semaphore(maxConcurrency);
    const abortController = new AbortController();
    const inFlight = new Set<Promise<void>>();

    let objectsUploaded = 0;
    let objectsFailed = 0;
    let terminated = false;
    let terminationError: unknown;

    this.checkAborted(transferOptions);
    this.addEventListeners(transferOptions?.eventListeners);

    let transferredBytes = 0;
    let transferredFiles = 0;
    let totalFiles: number | undefined = undefined;
    let totalBytes: number | undefined = undefined;
    let traversalComplete = false;

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);
    };

    this.dispatchEvent(
      Object.assign(new Event("transferInitiated"), {
        request,
        snapshot: { transferredBytes: 0, totalBytes: undefined, transferredFiles: 0, totalFiles: undefined },
      })
    );

    const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
    if (userSignal) {
      userSignal.addEventListener("abort", () => abortController.abort(), { once: true });
    }

    let discoveredFiles = 0;
    let discoveredBytes = 0;

    for await (const filePath of this.traverseDirectory(absoluteSource, {
      recursive: request.recursive ?? false,
      followSymbolicLinks: request.followSymbolicLinks ?? false,
    })) {
      if (terminated || abortController.signal.aborted) break;
      this.checkAborted(transferOptions);

      if (request.filter && !request.filter(filePath)) continue;

      const fileStat = await stat(filePath);
      discoveredFiles++;
      discoveredBytes += fileStat.size;

      await semaphore.acquire();

      if (terminated || abortController.signal.aborted) {
        semaphore.release();
        break;
      }

      const task = (async () => {
        try {
          const key = this.deriveS3Key(absoluteSource, filePath, request.s3Prefix);

          let putRequest: PutObjectCommandInput = {
            Bucket: request.bucket,
            Key: key,
            Body: createReadStream(filePath),
            ContentLength: fileStat.size,
          };

          if (request.uploadObjectRequestModifier) {
            putRequest = request.uploadObjectRequestModifier(putRequest);
          }

          await this.upload(putRequest, { abortSignal: abortController.signal });
          objectsUploaded++;
          transferredFiles++;
          transferredBytes += fileStat.size;

          this.dispatchEvent(
            Object.assign(new Event("bytesTransferred"), {
              request,
              snapshot: {
                transferredBytes,
                totalBytes: traversalComplete ? totalBytes : undefined,
                transferredFiles,
                totalFiles: traversalComplete ? totalFiles : undefined,
              },
            })
          );
        } catch (error) {
          if (terminated || abortController.signal.aborted) {
            objectsFailed++;
            return;
          }
          const context: DirectoryTransferFailureContext = {
            request,
            objectRequest: { Bucket: request.bucket, Key: this.deriveS3Key(absoluteSource, filePath, request.s3Prefix) },
            error,
          };
          const result = await handleFailure(failurePolicy, context, abortController);
          if (result === "terminate") {
            terminated = true;
            if (!terminationError) {
              terminationError = error;
            }
          }
          objectsFailed++;
        } finally {
          semaphore.release();
        }
      })();

      inFlight.add(task);
      task.finally(() => inFlight.delete(task));
    }

    traversalComplete = true;
    totalFiles = discoveredFiles;
    totalBytes = discoveredBytes;

    await Promise.allSettled([...inFlight]);

    if (terminated && terminationError) {
      this.dispatchEvent(
        Object.assign(new Event("transferFailed"), {
          request,
          snapshot: { transferredBytes, totalBytes, transferredFiles, totalFiles },
        })
      );
      removeLocalEventListeners();
      throw terminationError;
    }

    this.dispatchEvent(
      Object.assign(new Event("transferComplete"), {
        request,
        response: { objectsUploaded, objectsFailed },
        snapshot: { transferredBytes, totalBytes, transferredFiles, totalFiles },
      })
    );
    removeLocalEventListeners();
    return { objectsUploaded, objectsFailed };
  }

  /**
   * Downloads all objects in a bucket to a local directory.
   * Uses ListObjectsV2 to retrieve objects and automatically maps S3 object keys to local file paths.
   *
   * @param options - Configuration including bucket, destination directory, filtering, failure handling, and transfer settings.
   *
   * @returns The number of objects that have been downloaded and the number of objects that have failed.
   *
   * @alpha
   */
  public downloadDirectory(request: DownloadDirectoryRequest, transferOptions?: TransferOptions): Promise<DownloadDirectoryResponse> {
    throw new Error("Method not implemented.");
  }

  /**
   * Downloads object using part-based strategy with concurrent part requests.
   * Only initiates up to maxConcurrentDownloads requests in-flight, with new
   * requests triggered as previous ones complete.
   *
   * @internal
   */
  protected async downloadByPart(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">,
    checksumValidationEnabled: boolean
  ): Promise<{ totalSize: number | undefined; onStreamConsumed?: (index: number) => void }> {
    let totalSize: number | undefined;
    let streamConsumedCallback: ((index: number) => void) | undefined;
    this.checkAborted(transferOptions);

    if (request.Range == null) {
      const initialPartRequest = {
        ...request,
        PartNumber: 1,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };
      try {
        const initialPart = await this.s3.send(new GetObjectCommand(initialPartRequest), transferOptions);
        await internalEventHandler.afterInitialGetObject();
        const partSize = initialPart.ContentLength;
        const initialETag = initialPart.ETag ?? undefined;
        totalSize = initialPart.ContentRange ? Number.parseInt(initialPart.ContentRange.split("/")[1]) : 0;
        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (initialPart.Body) {
          if (initialPart.Body && typeof (initialPart.Body as any).getReader === "function") {
            const reader = (initialPart.Body as any).getReader();
            (initialPart.Body as any).getReader = function () {
              return reader;
            };
          }
          streams.push(Promise.resolve(initialPart.Body));
          requests.push(initialPartRequest);
        }

        this.processResponseMetadata(initialPart, metadata, totalSize);

        let partCount = 1;
        if (initialPart.PartsCount! > 1) {
          const partTasks: (() => Promise<StreamingBlobPayloadOutputTypes>)[] = [];
          const partRequests: GetObjectCommandInput[] = [];

          for (let part = 2; part <= initialPart.PartsCount!; part++) {
            const getObjectRequest = {
              ...request,
              PartNumber: part,
              IfMatch: initialETag,
              ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
            };
            partRequests.push(getObjectRequest);

            partTasks.push(() => {
              this.checkAborted(transferOptions);
              return this.s3
                .send(new GetObjectCommand(getObjectRequest), transferOptions)
                .then((response) => {
                  this.validatePartDownload(response.ContentRange, part, partSize ?? 0);
                  if (response.Body && typeof (response.Body as any).getReader === "function") {
                    const reader = (response.Body as any).getReader();
                    (response.Body as any).getReader = function () {
                      return reader;
                    };
                  }
                  return response.Body!;
                })
                .catch((error) => {
                  this.dispatchTransferFailedEvent(getObjectRequest, totalSize, error as Error);
                  throw error;
                });
            });
          }

          // Lazily prefetch streams — only maxConcurrentDownloads requests in-flight.
          // New requests fire as previous ones complete, and joinStreams can start
          // consuming immediately without waiting for all parts to be fetched.
          const { promises: pendingStreams, onStreamConsumed } = this.createConcurrentTaskPool(
            partTasks,
            this.maxConcurrentDownloads
          );
          streams.push(...pendingStreams);
          requests.push(...partRequests);
          streamConsumedCallback = onStreamConsumed;
          partCount += partTasks.length;

          if (partCount !== initialPart.PartsCount) {
            throw new Error(
              `The number of parts downloaded (${partCount}) does not match the expected number (${initialPart.PartsCount})`
            );
          }
        }
      } catch (error) {
        this.dispatchTransferFailedEvent(request, totalSize, error);
        throw error;
      }
    } else {
      this.checkAborted(transferOptions);

      try {
        const getObjectRequest = {
          ...request,
          ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
        };

        const getObject = await this.s3.send(new GetObjectCommand(getObjectRequest), transferOptions);
        totalSize = getObject.ContentRange ? Number.parseInt(getObject.ContentRange.split("/")[1]) : 0;

        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (getObject.Body) {
          streams.push(Promise.resolve(getObject.Body));
          requests.push(getObjectRequest);
        }
        this.processResponseMetadata(getObject, metadata, totalSize);
      } catch (error) {
        this.dispatchTransferFailedEvent(request, undefined, error);
        throw error;
      }
    }

    return {
      totalSize,
      onStreamConsumed: streamConsumedCallback,
    };
  }

  /**
   * Downloads object using range-based strategy with lazy concurrent range requests.
   * Only initiates up to maxConcurrentDownloads requests in-flight, with new
   * requests triggered as previous ones complete — preventing idle connection timeouts.
   *
   * @internal
   */
  protected async downloadByRange(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">,
    checksumValidationEnabled: boolean
  ): Promise<{ totalSize: number | undefined; onStreamConsumed?: (index: number) => void }> {
    let streamConsumedCallback: ((index: number) => void) | undefined;
    this.checkAborted(transferOptions);

    const headResponse = await this.s3.send(
      new HeadObjectCommand({ Bucket: request.Bucket, Key: request.Key }),
      transferOptions
    );

    if (headResponse.ContentLength === 0) {
      const getObjectRequest = { ...request, ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }) };
      const response = await this.s3.send(new GetObjectCommand(getObjectRequest), transferOptions);

      this.dispatchTransferInitiatedEvent(request, 0);
      if (response.Body) streams.push(Promise.resolve(response.Body));
      requests.push(getObjectRequest);

      this.processResponseMetadata(response, metadata, 0);
      return { totalSize: 0 };
    }

    let left = 0;
    let right = this.targetPartSizeBytes - 1;
    let maxRange = Number.POSITIVE_INFINITY;
    let remainingLength = 1;
    let totalSize: number | undefined;
    let initialETag: string | undefined;

    if (request.Range != null) {
      const [userRangeLeft, userRangeRight] = request.Range.replace("bytes=", "").split("-").map(Number);
      maxRange = userRangeRight;
      left = userRangeLeft;
      right = Math.min(userRangeRight, left + S3TransferManager.MIN_PART_SIZE - 1);
      totalSize = userRangeRight + 1;
    }

    try {
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: `bytes=${left}-${right}`,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };
      const initialRangeGet = await this.s3.send(new GetObjectCommand(getObjectRequest), transferOptions);
      await internalEventHandler.afterInitialGetObject();
      this.validateRangeDownload(`bytes=${left}-${right}`, initialRangeGet.ContentRange);
      initialETag = initialRangeGet.ETag ?? undefined;
      if (!totalSize) {
        totalSize = initialRangeGet.ContentRange
          ? Number.parseInt(initialRangeGet.ContentRange.split("/")[1])
          : undefined;
      }

      if (initialRangeGet.Body && typeof (initialRangeGet.Body as any).getReader === "function") {
        const reader = (initialRangeGet.Body as any).getReader();
        (initialRangeGet.Body as any).getReader = function () {
          return reader;
        };
      }

      this.dispatchTransferInitiatedEvent(request, totalSize);
      streams.push(Promise.resolve(initialRangeGet.Body!));
      requests.push(getObjectRequest);
      this.processResponseMetadata(initialRangeGet, metadata, totalSize);
    } catch (error) {
      this.dispatchTransferFailedEvent(request, totalSize, error as Error);
      throw error;
    }

    let expectedRequestCount = 1;
    if (totalSize) {
      const contentLength = totalSize;
      const remainingBytes = Math.max(0, contentLength - (right - left + 1));
      const additionalRequests = Math.ceil(remainingBytes / S3TransferManager.MIN_PART_SIZE);
      expectedRequestCount += additionalRequests;
    }

    left = right + 1;
    right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
    remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
    const rangeTasks: (() => Promise<StreamingBlobPayloadOutputTypes>)[] = [];
    const rangeRequests: GetObjectCommandInput[] = [];

    while (remainingLength > 0) {
      const range = `bytes=${left}-${right}`;
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: range,
        IfMatch: initialETag,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };
      rangeRequests.push(getObjectRequest);

      rangeTasks.push(() => {
        this.checkAborted(transferOptions);
        return this.s3
          .send(new GetObjectCommand(getObjectRequest), transferOptions)
          .then((response) => {
            this.validateRangeDownload(range, response.ContentRange);
            if (response.Body && typeof (response.Body as any).getReader === "function") {
              const reader = (response.Body as any).getReader();
              (response.Body as any).getReader = function () {
                return reader;
              };
            }
            return response.Body!;
          })
          .catch((error) => {
            this.dispatchTransferFailedEvent(getObjectRequest, totalSize, error);
            throw error;
          });
      });

      left = right + 1;
      right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
      remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
    }

    if (rangeTasks.length > 0) {
      // Lazily prefetch streams — only maxConcurrentDownloads requests in-flight.
      // New requests fire as previous ones complete, and joinStreams can start
      // consuming immediately without waiting for all ranges to be fetched.
      const { promises: pendingStreams, onStreamConsumed } = this.createConcurrentTaskPool(
        rangeTasks,
        this.maxConcurrentDownloads
      );
      streams.push(...pendingStreams);
      requests.push(...rangeRequests);
      streamConsumedCallback = onStreamConsumed;
    }

    const actualRequestCount = 1 + rangeTasks.length;
    if (expectedRequestCount !== actualRequestCount) {
      throw new Error(
        `The number of ranged GET requests sent (${actualRequestCount}) does not match the expected number (${expectedRequestCount})`
      );
    }

    return {
      totalSize,
      onStreamConsumed: streamConsumedCallback,
    };
  }

  /**
   * Adds all event listeners from provided collection to the transfer manager.
   *
   * @internal
   */
  private addEventListeners(eventListeners?: TransferEventListeners): void {
    for (const listeners of this.iterateListeners(eventListeners)) {
      for (const listener of listeners) {
        this.addEventListener(listener.eventType, listener.callback as EventListener);
      }
    }
  }

  /**
   * Removes event listeners from provided collection from the transfer manager.
   *
   * @internal
   */
  private removeEventListeners(eventListeners?: TransferEventListeners): void {
    for (const listeners of this.iterateListeners(eventListeners)) {
      for (const listener of listeners) {
        this.removeEventListener(listener.eventType, listener.callback as EventListener);
      }
    }
  }

  /**
   * Copies all response properties except Body to the container object.
   *
   * @internal
   */
  private assignMetadata(container: any, response: any) {
    for (const key in response) {
      if (key === "Body") {
        continue;
      }
      container[key] = response[key];
    }
  }

  /**
   * Updates response ContentLength and ContentRange based on total object size.
   *
   * @internal
   */
  private updateResponseLengthAndRange(response: DownloadResponse, totalSize: number | undefined): void {
    if (totalSize !== undefined) {
      response.ContentLength = totalSize;
      response.ContentRange = `bytes 0-${totalSize - 1}/${totalSize}`;
    }
  }

  /**
   * Clears checksum values for composite multipart downloads.
   *
   * @internal
   */
  private updateChecksumValues(initialPart: DownloadResponse, metadata: Omit<DownloadResponse, "Body">) {
    if (initialPart.ChecksumType === "COMPOSITE") {
      metadata.ChecksumCRC32 = undefined;
      metadata.ChecksumCRC32C = undefined;
      metadata.ChecksumSHA1 = undefined;
      metadata.ChecksumSHA256 = undefined;
    }
  }

  /**
   * Processes response metadata by updating length, copying properties, and handling checksums.
   *
   * @internal
   */
  private processResponseMetadata(
    response: DownloadResponse,
    metadata: Omit<DownloadResponse, "Body">,
    totalSize: number | undefined
  ): void {
    this.updateResponseLengthAndRange(response, totalSize);
    this.assignMetadata(metadata, response);
    this.updateChecksumValues(response, metadata);
  }

  /**
   * Throws AbortError if the transfer has been aborted via signal.
   *
   * @internal
   */
  private checkAborted(transferOptions?: TransferOptions): void {
    if (transferOptions?.abortSignal?.aborted) {
      throw Object.assign(new Error("Transfer aborted."), { name: "AbortError" });
    }
  }

  /**
   * Validates if configuration parameters meets minimum requirements.
   *
   * @internal
   */
  private validateConfig(): void {
    if (this.targetPartSizeBytes < S3TransferManager.MIN_PART_SIZE) {
      throw new Error(`targetPartSizeBytes must be at least ${S3TransferManager.MIN_PART_SIZE} bytes`);
    }
  }

  /**
   * Dispatches transferInitiated event with initial progress snapshot.
   *
   * @internal
   */
  private dispatchTransferInitiatedEvent(request: DownloadRequest | UploadRequest, totalSize?: number): boolean {
    this.dispatchEvent(
      Object.assign(new Event("transferInitiated"), {
        request,
        snapshot: {
          transferredBytes: 0,
          totalBytes: totalSize,
        },
      })
    );
    return true;
  }

  /**
   * Dispatches transferFailed event with error details and progress snapshot.
   *
   * @internal
   */
  private dispatchTransferFailedEvent(
    request: DownloadRequest | UploadRequest,
    totalSize?: number,
    error?: Error
  ): boolean {
    this.dispatchEvent(
      Object.assign(new Event("transferFailed"), {
        request,
        error,
        snapshot: {
          transferredBytes: 0,
          totalBytes: totalSize,
        },
      })
    );
    return true;
  }

  /**
   * Generator that yields event listeners from the provided collection for iteration.
   *
   * @internal
   */
  private *iterateListeners(eventListeners: TransferEventListeners = {}) {
    for (const key in eventListeners) {
      const eventType = key as keyof TransferEventListeners;
      const listeners = eventListeners[eventType as keyof TransferEventListeners];
      if (Array.isArray(listeners)) {
        for (const callback of listeners) {
          yield [
            {
              eventType: eventType,
              callback: callback,
            },
          ];
        }
      }
    }
  }

  /**
   * Creates a concurrent task pool using a sliding window concurrency model.
   * Each task is a deferred S3 request (e.g., GetObject for part/range downloads) that returns a promise.
   * It seeds up to `maxConcurrent` tasks initially. When a stream is fully consumed by the caller,
   * the `onStreamConsumed` callback launches the next pending task, keeping at most `maxConcurrent`
   * requests in-flight at any time.
   *
   * @param tasks - Array of deferred task functions, each returning a promise.
   * @param maxConcurrent - Maximum number of HTTP requests in-flight at any time.
   * @returns An object containing the array of promises (one per task) and an `onStreamConsumed` callback
   *          to signal that a stream has been consumed and the next task can be launched.
   *
   * @internal
   */
  private createConcurrentTaskPool<T>(
    tasks: (() => Promise<T>)[],
    maxConcurrent: number
  ): {
    promises: Promise<T>[];
    onStreamConsumed: (index: number) => void;
  } {
    if (tasks.length === 0) return { promises: [], onStreamConsumed: () => {} };

    const resolvers: Array<{ resolve: (value: T) => void; reject: (error: unknown) => void }> = [];
    const promises: Promise<T>[] = tasks.map(() => {
      let resolve!: (value: T) => void;
      let reject!: (error: unknown) => void;
      const promise = new Promise<T>((res, rej) => {
        resolve = res;
        reject = rej;
      });
      resolvers.push({ resolve, reject });
      return promise;
    });

    let nextToLaunch = 0;
    let failed = false;

    const launchTask = (index: number): void => {
      tasks[index]().then(
        (result) => {
          resolvers[index].resolve(result);
        },
        (error) => {
          failed = true;
          resolvers[index].reject(error);
        }
      );
    };

    // Seed initial batch
    const initialBatch = Math.min(maxConcurrent, tasks.length);
    for (let i = 0; i < initialBatch; i++) {
      launchTask(nextToLaunch++);
    }

    const onStreamConsumed = (_index: number): void => {
      if (failed || nextToLaunch >= tasks.length) return;
      launchTask(nextToLaunch++);
    };

    return { promises, onStreamConsumed };
  }

  /**
   * Validates part download ContentRange matches expected part boundaries.
   *
   * @internal
   */
  private validatePartDownload(contentRange: string | undefined, partNumber: number, partSize: number) {
    if (!contentRange) {
      throw new Error(`Missing ContentRange for part ${partNumber}.`);
    }

    const match = contentRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error(`Invalid ContentRange format: ${contentRange}`);

    const start = Number.parseInt(match[1]);
    const end = Number.parseInt(match[2]);
    const total = Number.parseInt(match[3]) - 1;

    const expectedStart = (partNumber - 1) * partSize;
    const expectedEnd = Math.min(expectedStart + partSize - 1, total);

    if (start !== expectedStart) {
      throw new Error(`Expected part ${partNumber} to start at ${expectedStart} but got ${start}`);
    }

    if (end !== expectedEnd) {
      throw new Error(`Expected part ${partNumber} to end at ${expectedEnd} but got ${end}`);
    }
  }

  /**
   * Validates range download ContentRange matches requested byte range.
   *
   * @internal
   */
  private validateRangeDownload(requestRange: string, responseRange: string | undefined) {
    if (!responseRange) {
      throw new Error(`Missing ContentRange for range ${requestRange}.`);
    }

    const match = responseRange.match(/bytes (\d+)-(\d+)\/(\d+)/);
    if (!match) throw new Error(`Invalid ContentRange format: ${responseRange}`);

    const start = Number.parseInt(match[1]);
    const end = Number.parseInt(match[2]);
    const total = Number.parseInt(match[3]) - 1;

    const rangeMatch = requestRange.match(/bytes=(\d+)-(\d+)/);
    if (!rangeMatch) throw new Error(`Invalid Range format: ${requestRange}`);

    const expectedStart = Number.parseInt(rangeMatch[1]);
    const expectedEnd = Number.parseInt(rangeMatch[2]);

    if (start !== expectedStart) {
      throw new Error(`Expected range to start at ${expectedStart} but got ${start}`);
    }

    if (end === expectedEnd) {
      return;
    }

    if (end === total) {
      return;
    }

    throw new Error(`Expected range to end at ${expectedEnd} but got ${end}`);
  }

  /**
   * Uploads a single object to S3 using PutObject operation.
   * Used when content length is below the multipart upload threshold.
   *
   * @internal
   */
  private async uploadSinglePart(
    request: UploadRequest,
    contentLength: number,
    transferOptions?: TransferOptions
  ): Promise<PutObjectCommandOutput> {
    const putObjectRequest: PutObjectCommandInput = { ...request };

    this.checkAborted(transferOptions);
    const response = await this.s3.send(new PutObjectCommand(putObjectRequest), transferOptions);

    this.dispatchEvent(
      Object.assign(new Event("bytesTransferred"), {
        request,
        snapshot: {
          transferredBytes: contentLength,
          totalBytes: contentLength,
        },
      })
    );

    return response;
  }

  /**
   * Calculates part size and expected parts count.
   *
   * @internal
   */
  private calculatePartSize(contentLength: number): { partSize: number; expectedPartsCount: number } {
    const partSize = Math.max(this.targetPartSizeBytes, Math.ceil(contentLength / 10_000));
    const expectedPartsCount = Math.ceil(contentLength / partSize);
    return { partSize, expectedPartsCount };
  }

  /**
   * Checks if the body is a file read stream with a .path property.
   * @internal
   */
  private isFileBody(body: any): boolean {
    return typeof body?.pipe === "function" && typeof (body as any).path === "string";
  }

  /**
   * Checks if the body is fully in memory (Buffer, Uint8Array, or string).
   * @internal
   */
  private isInMemoryBody(body: any): body is Uint8Array | string {
    return body instanceof Uint8Array || typeof body === "string";
  }

  /**
   * Uploads using worker threads from a file source. Workers read file slices
   * directly from disk, compute checksum, and send data in aws-chunked format
   * with trailing checksums.
   *
   * @internal
   */
  private async threadedUploadInPartsFromFile(
    request: UploadRequest,
    contentLength: number,
    transferOptions?: TransferOptions
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { partSize } = this.calculatePartSize(contentLength);
    const filePath = (request.Body as any).path as string;

    const buildDataSource = (checksumAlgorithm?: string, checksumHeader?: string): DataSource => ({
      type: "file",
      filePath,
      partSize,
      totalFileSize: contentLength,
      checksumAlgorithm,
      checksumHeader,
    });

    return this.threadedMultipartUpload(request, contentLength, buildDataSource, transferOptions);
  }

  /**
   * Uploads using worker threads with in-memory data. Copies the user's Buffer
   * into a SharedArrayBuffer once, then workers read slices by offset —
   * zero-copy per part.
   *
   * @internal
   */
  private async threadedUploadInParts(
    request: UploadRequest,
    contentLength: number,
    transferOptions?: TransferOptions
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { partSize } = this.calculatePartSize(contentLength);
    const body = request.Body as Uint8Array;

    // One-time copy into SharedArrayBuffer so all workers can read by offset.
    const sharedBuffer = new SharedArrayBuffer(body.byteLength);
    new Uint8Array(sharedBuffer).set(body);

    const buildDataSource = (checksumAlgorithm?: string, checksumHeader?: string): DataSource => ({
      type: "sharedBuffer",
      sharedBuffer,
      partSize,
      totalSize: contentLength,
      checksumAlgorithm,
      checksumHeader,
    });

    return this.threadedMultipartUpload(request, contentLength, buildDataSource, transferOptions);
  }

  /**
   * Common implementation for threaded multipart uploads.
   * Handles CreateMPU, concurrent UploadPart dispatch, and CompleteMPU/AbortMPU.
   * The buildDataSource factory is called with checksum info to produce the
   * per-request data source passed to the WorkerHttpHandler.
   *
   * @internal
   */
  private async threadedMultipartUpload(
    request: UploadRequest,
    contentLength: number,
    buildDataSource: (checksumAlgorithm?: string, checksumHeader?: string) => DataSource,
    transferOptions?: TransferOptions
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { partSize, expectedPartsCount } = this.calculatePartSize(contentLength);

    this.checkAborted(transferOptions);

    const createMpuRequest: CreateMultipartUploadCommandInput = { ...request };
    const hasFullObjectChecksum =
      request.ContentMD5 ||
      request.ChecksumCRC32 ||
      request.ChecksumCRC32C ||
      request.ChecksumCRC64NVME ||
      request.ChecksumSHA1 ||
      request.ChecksumSHA256;

    if (hasFullObjectChecksum) {
      createMpuRequest.ChecksumType = "FULL_OBJECT";
    }
    if (!createMpuRequest.ChecksumAlgorithm && this.requestChecksumCalculation === "WHEN_SUPPORTED") {
      createMpuRequest.ChecksumAlgorithm = request.ChecksumAlgorithm ?? "CRC32";
    }

    const createMpuResponse = await this.s3.send(new CreateMultipartUploadCommand(createMpuRequest), transferOptions);
    const uploadId = createMpuResponse.UploadId!;

    const checksumAlgorithm = createMpuRequest.ChecksumAlgorithm;
    const checksumHeader = checksumAlgorithm ? `x-amz-checksum-${checksumAlgorithm.toLowerCase()}` : undefined;
    const dataSource = buildDataSource(checksumAlgorithm, checksumHeader);

    const abortController = new AbortController();
    const uploadAbortSignal = abortController.signal;

    try {
      const completedParts: CompletedPart[] = [];
      let bytesUploaded = 0;
      let nextPartNumber = 1;

      const uploadPart = async (): Promise<void> => {
        while (true) {
          const partNumber = nextPartNumber++;
          if (partNumber > expectedPartsCount) return;

          if (uploadAbortSignal.aborted) {
            throw Object.assign(new Error("Upload aborted due to part failure."), { name: "AbortError" });
          }
          this.checkAborted(transferOptions);

          const offset = (partNumber - 1) * partSize;
          const length = Math.min(partSize, contentLength - offset);

          // Readable placeholder — the checksum middleware sees a stream,
          // sets up aws-chunked headers, and the signer signs them.
          // The worker fulfills this contract by sending aws-chunked framed data.
          const placeholderBody = createEmptyReadable();

          const partRequest: UploadPartCommandInput = {
            ...request,
            Body: placeholderBody,
            UploadId: uploadId,
            PartNumber: partNumber,
            ContentLength: length,
            ...(checksumAlgorithm && { ChecksumAlgorithm: checksumAlgorithm as any }),
          };

          const partResponse = await this.s3.send(new UploadPartCommand(partRequest), {
            ...transferOptions,
            dataSource,
          } as any);

          const completedPart: CompletedPart = {
            PartNumber: partNumber,
            ETag: partResponse.ETag,
          };
          if (partResponse.ChecksumCRC32) completedPart.ChecksumCRC32 = partResponse.ChecksumCRC32;
          if (partResponse.ChecksumCRC32C) completedPart.ChecksumCRC32C = partResponse.ChecksumCRC32C;
          if (partResponse.ChecksumCRC64NVME) completedPart.ChecksumCRC64NVME = partResponse.ChecksumCRC64NVME;
          if (partResponse.ChecksumSHA1) completedPart.ChecksumSHA1 = partResponse.ChecksumSHA1;
          if (partResponse.ChecksumSHA256) completedPart.ChecksumSHA256 = partResponse.ChecksumSHA256;

          completedParts.push(completedPart);
          bytesUploaded += length;

          this.dispatchEvent(
            Object.assign(new Event("bytesTransferred"), {
              request,
              snapshot: {
                transferredBytes: bytesUploaded,
                totalBytes: contentLength,
              },
            })
          );
        }
      };

      const partUploads: Promise<void>[] = [];
      for (let i = 0; i < this.maxConcurrentUploads; i++) {
        partUploads.push(
          uploadPart().catch((error) => {
            abortController.abort();
            throw error;
          })
        );
      }

      await Promise.all(partUploads);

      if (completedParts.length !== expectedPartsCount) {
        throw new Error(`Expected ${expectedPartsCount} parts but uploaded ${completedParts.length} parts`);
      }

      completedParts.sort((a, b) => a.PartNumber! - b.PartNumber!);
      this.checkAborted(transferOptions);

      const { Body: _body, ...completeRequestFields } = request;
      const completeRequest: CompleteMultipartUploadCommandInput = {
        ...completeRequestFields,
        UploadId: uploadId,
        MultipartUpload: { Parts: completedParts },
        MpuObjectSize: contentLength,
      };

      if (hasFullObjectChecksum) {
        completeRequest.ChecksumType = "FULL_OBJECT";
        if (request.ChecksumCRC32) completeRequest.ChecksumCRC32 = request.ChecksumCRC32;
        if (request.ChecksumCRC32C) completeRequest.ChecksumCRC32C = request.ChecksumCRC32C;
        if (request.ChecksumCRC64NVME) completeRequest.ChecksumCRC64NVME = request.ChecksumCRC64NVME;
      }

      try {
        return await this.s3.send(new CompleteMultipartUploadCommand(completeRequest), transferOptions);
      } catch (completeMpuError) {
        this.logger.warn(
          `CompleteMultipartUpload failed for upload ID ${uploadId}: ${(completeMpuError as Error).message}`
        );
        throw completeMpuError;
      }
    } catch (error) {
      const { Body: _abortBody, ...abortRequestFields } = request;
      const abortRequest: AbortMultipartUploadCommandInput = {
        ...abortRequestFields,
        UploadId: uploadId,
      };

      try {
        await this.s3.send(new AbortMultipartUploadCommand(abortRequest), transferOptions);
      } catch (abortError) {
        this.logger.warn(`Failed to abort multipart upload ${uploadId}:`, abortError);
      }
      throw error;
    }
  }

  /**
   * Uploads an object to S3 using multipart upload operation.
   * Used when content length exceeds the multipart upload threshold.
   * Streams the body chunk-by-chunk via getChunk without buffering
   * the entire content into memory.
   *
   * @internal
   */
  private async uploadInParts(
    request: UploadRequest,
    contentLength: number,
    transferOptions?: TransferOptions
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { partSize, expectedPartsCount } = this.calculatePartSize(contentLength);

    this.checkAborted(transferOptions);

    const createMpuRequest: CreateMultipartUploadCommandInput = { ...request };

    const hasFullObjectChecksum =
      request.ContentMD5 ||
      request.ChecksumCRC32 ||
      request.ChecksumCRC32C ||
      request.ChecksumCRC64NVME ||
      request.ChecksumSHA1 ||
      request.ChecksumSHA256;

    if (hasFullObjectChecksum) {
      createMpuRequest.ChecksumType = "FULL_OBJECT";
    }
    if (!createMpuRequest.ChecksumAlgorithm && this.requestChecksumCalculation === "WHEN_SUPPORTED") {
      createMpuRequest.ChecksumAlgorithm = request.ChecksumAlgorithm ?? "CRC32";
    }
    const createMpuResponse = await this.s3.send(new CreateMultipartUploadCommand(createMpuRequest), transferOptions);
    const uploadId = createMpuResponse.UploadId!;

    const abortController = new AbortController();
    const uploadAbortSignal = abortController.signal;

    try {
      const completedParts: CompletedPart[] = [];
      const dataFeeder = getChunk(request.Body, partSize);
      let bytesUploaded = 0;

      const uploadPart = async (dataFeeder: AsyncGenerator<RawDataPart, void, undefined>) => {
        for await (const dataPart of dataFeeder) {
          if (uploadAbortSignal.aborted) {
            throw Object.assign(new Error("Upload aborted due to part failure."), { name: "AbortError" });
          }
          this.checkAborted(transferOptions);

          this.validateUploadPart(dataPart, partSize);

          const partRequest: UploadPartCommandInput = {
            ...request,
            Body: dataPart.data,
            UploadId: uploadId,
            PartNumber: dataPart.partNumber,
            ContentLength: byteLength(dataPart.data),
            ...(this.requestChecksumCalculation === "WHEN_SUPPORTED" && {
              ChecksumAlgorithm: request.ChecksumAlgorithm,
            }),
          };

          const partResponse = await this.s3.send(new UploadPartCommand(partRequest), transferOptions);

          const checksumAlgorithm = partRequest.ChecksumAlgorithm;
          if (
            checksumAlgorithm &&
            !partResponse.ChecksumCRC32 &&
            !partResponse.ChecksumCRC32C &&
            !partResponse.ChecksumCRC64NVME &&
            !partResponse.ChecksumSHA1 &&
            !partResponse.ChecksumSHA256
          ) {
            throw new Error(
              `Checksum was requested for part ${dataPart.partNumber} using ${checksumAlgorithm}, but no checksum was returned in the response. ` +
                `If running in a browser, ensure your S3 bucket CORS configuration is enabled. `
            );
          }

          const completedPart: CompletedPart = {
            PartNumber: dataPart.partNumber,
            ETag: partResponse.ETag,
          };
          if (partResponse.ChecksumCRC32) completedPart.ChecksumCRC32 = partResponse.ChecksumCRC32;
          if (partResponse.ChecksumCRC32C) completedPart.ChecksumCRC32C = partResponse.ChecksumCRC32C;
          if (partResponse.ChecksumCRC64NVME) completedPart.ChecksumCRC64NVME = partResponse.ChecksumCRC64NVME;
          if (partResponse.ChecksumSHA1) completedPart.ChecksumSHA1 = partResponse.ChecksumSHA1;
          if (partResponse.ChecksumSHA256) completedPart.ChecksumSHA256 = partResponse.ChecksumSHA256;

          completedParts.push(completedPart);

          const partLength = byteLength(dataPart.data)!;
          bytesUploaded += partLength;

          this.dispatchEvent(
            Object.assign(new Event("bytesTransferred"), {
              request,
              snapshot: {
                transferredBytes: bytesUploaded,
                totalBytes: contentLength,
              },
            })
          );
        }
      };

      const partUploads: Promise<void>[] = [];
      for (let i = 0; i < this.maxConcurrentUploads; i++) {
        partUploads.push(
          uploadPart(dataFeeder).catch((error) => {
            abortController.abort();
            throw error;
          })
        );
      }

      await Promise.all(partUploads);

      if (completedParts.length !== expectedPartsCount) {
        throw new Error(`Expected ${expectedPartsCount} parts but uploaded ${completedParts.length} parts`);
      }

      completedParts.sort((a, b) => a.PartNumber! - b.PartNumber!);

      this.checkAborted(transferOptions);
      const { Body: _body, ...completeRequestFields } = request;
      const completeRequest: CompleteMultipartUploadCommandInput = {
        ...completeRequestFields,
        UploadId: uploadId,
        MultipartUpload: { Parts: completedParts },
        MpuObjectSize: contentLength,
      };

      if (hasFullObjectChecksum) {
        completeRequest.ChecksumType = "FULL_OBJECT";
        if (request.ChecksumCRC32) completeRequest.ChecksumCRC32 = request.ChecksumCRC32;
        if (request.ChecksumCRC32C) completeRequest.ChecksumCRC32C = request.ChecksumCRC32C;
        if (request.ChecksumCRC64NVME) completeRequest.ChecksumCRC64NVME = request.ChecksumCRC64NVME;
      }

      try {
        return await this.s3.send(new CompleteMultipartUploadCommand(completeRequest), transferOptions);
      } catch (completeMpuError) {
        this.logger.warn(
          `CompleteMultipartUpload failed for upload ID ${uploadId}: ${(completeMpuError as Error).message}`
        );
        throw completeMpuError;
      }
    } catch (error) {
      const { Body: _abortBody, ...abortRequestFields } = request;
      const abortRequest: AbortMultipartUploadCommandInput = {
        ...abortRequestFields,
        UploadId: uploadId,
      };

      try {
        await this.s3.send(new AbortMultipartUploadCommand(abortRequest), transferOptions);
      } catch (abortError) {
        this.logger.warn(`Failed to abort multipart upload ${uploadId}:`, abortError);
      }
      throw error;
    }
  }

  /**
   * Async generator that yields file paths from the source directory.
   * Uses fs.opendir with recursive option (Node 20+).
   * Handles symlink cycle detection when followSymbolicLinks is true.
   *
   * @internal
   */
  private async *traverseDirectory(
    source: string,
    options: { recursive: boolean; followSymbolicLinks: boolean }
  ): AsyncGenerator<string> {
    const visited = new Set<string>();
    const dir = await opendir(source, { recursive: options.recursive });
    for await (const entry of dir) {
      const fullPath = join((entry as any).parentPath ?? (entry as any).path ?? source, entry.name);

      if (entry.isSymbolicLink()) {
        if (!options.followSymbolicLinks) continue;
        const realPath = await realpath(fullPath);
        const linkStat = await stat(realPath);
        if (linkStat.isDirectory()) {
          if (visited.has(realPath)) {
            throw new Error(`Circular symbolic link detected: ${fullPath} -> ${realPath}`);
          }
          visited.add(realPath);
          yield* this.traverseDirectory(realPath, options);
          continue;
        }
        if (!linkStat.isFile()) continue;
      } else if (!entry.isFile()) {
        continue;
      }

      yield fullPath;
    }
  }

  /**
   * Derives the S3 object key from local file path.
   * Computes relative path from source, normalizes separators to "/",
   * and prepends s3Prefix if provided.
   *
   * @internal
   */
  private deriveS3Key(source: string, filePath: string, s3Prefix?: string): string {
    let relativePath = relative(source, filePath);
    if (sep !== "/") {
      relativePath = relativePath.split(sep).join("/");
    }
    if (!s3Prefix) return relativePath;
    const normalizedPrefix = s3Prefix.endsWith("/") ? s3Prefix : s3Prefix + "/";
    return normalizedPrefix + relativePath;
  }

  /**
   * Validates that a data part has a measurable size and matches the expected part size.
   *
   * @internal
   */
  private validateUploadPart(dataPart: RawDataPart, partSize: number): void {
    const actualPartSize = byteLength(dataPart.data);

    if (actualPartSize === undefined) {
      throw new Error(
        `A dataPart was generated without a measurable data chunk size for part number ${dataPart.partNumber}`
      );
    }

    if (dataPart.partNumber === 1 && dataPart.lastPart) {
      return;
    }

    if (!dataPart.lastPart && actualPartSize !== partSize) {
      throw new Error(
        `The byte size for part number ${dataPart.partNumber}, size ${actualPartSize} does not match expected size ${partSize}`
      );
    }
  }
}

/**
 * Internal event handler for download lifecycle hooks.
 *
 * @internal
 */
export const internalEventHandler = {
  async afterInitialGetObject() {},
};
