import type {
  AbortMultipartUploadCommandInput,
  ChecksumAlgorithm,
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
import type { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { createReadStream, existsSync } from "node:fs";
import { open, opendir, realpath, stat } from "node:fs/promises";
import { join, relative, resolve, sep } from "node:path";
import { Readable } from "node:stream";

import { type RawDataPart, byteLength, getChunk } from "./chunker";
import { handleFailure, Semaphore, validateDirectory } from "./directory-transfer-utils";
import type { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";
import { FileManager } from "./file-manager";
import { destroyStreams, joinStreams } from "./join-streams";
import { LogLevel } from "./log-level";
import type {
  CannedFailurePolicy,
  DirectoryTransferFailureContext,
  DownloadDirectoryRequest,
  DownloadDirectoryResponse,
  DownloadRequest,
  DownloadResponse,
  DownloadToFileRequest,
  DownloadToFileResponse,
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
import {
  type DataSource,
  type DownloadDataToFile,
  type DownloadStreamOptions,
  createEmptyReadable,
  defaultWorkerCount,
  WorkerHttpHandler,
} from "./worker-http-handler";
import { OrderedPartQueue } from "./ordered-part-queue";

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
    this.maxConcurrentDownloads = config.maxConcurrentDownloads ?? 32;
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
      signal.addEventListener("abort", removeListenerAfterAbort, {
        once: true,
      });
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
          request = {
            ...request,
            Body: new TextEncoder().encode(request.Body),
          };
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

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);
      if (transferOptions?.abortSignal) {
        this.abortCleanupFunctions.get(transferOptions.abortSignal as AbortSignal)?.();
        this.abortCleanupFunctions.delete(transferOptions.abortSignal as AbortSignal);
      }
    };

    const resolvedTransferOptions = transferOptions ?? {};
    const downloadArgs = [
      request,
      resolvedTransferOptions,
      streams,
      requests,
      metadata,
      checksumValidationEnabled,
    ] as const;

    try {
      let responseMetadata: { totalSize: number | undefined; onStreamConsumed?: (index: number) => void };

      if (this.multipartDownloadType === "PART") {
        if (this.workerHttpHandler) {
          responseMetadata = await this.downloadByPartWithWorkers(...downloadArgs);
        } else {
          responseMetadata = await this.downloadByPart(...downloadArgs);
        }
      } else if (this.multipartDownloadType === "RANGE") {
        if (this.workerHttpHandler && !request.Range) {
          responseMetadata = await this.downloadByRangeWithWorkers(...downloadArgs);
        } else {
          responseMetadata = await this.downloadByRange(...downloadArgs);
        }
      }

      totalSize = responseMetadata!.totalSize;
      onStreamConsumed = responseMetadata!.onStreamConsumed;
    } catch (error) {
      // On failure or abort, response bodies that were already received but not
      // yet handed to joinStreams are orphaned. Destroy them (attaching a no-op
      // error handler) so their underlying sockets don't raise an uncaught
      // "aborted"/ECONNRESET error when torn down.
      await destroyStreams(streams);
      removeLocalEventListeners();
      throw error;
    }

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
   * Downloads an S3 object to a local file.
   *
   * @param request - Download request including the local file destination path.
   * @param transferOptions - Allows users to specify cancel functions for the request and a collection of callbacks for monitoring transfer lifecycle events.
   *
   * @returns the response containing bytes written, and object metadata.
   *
   * @alpha
   */
  public async downloadToFile(
    request: DownloadToFileRequest,
    transferOptions?: TransferOptions
  ): Promise<DownloadToFileResponse> {
    if (!request.destination || request.destination === "") {
      throw new Error("destination must be a non-empty string");
    }

    const resolvedDestination = resolve(request.destination);

    if (request.failIfExists && existsSync(resolvedDestination)) {
      throw new Error(`File already exists at destination: ${resolvedDestination}`);
    }

    this.checkAborted(transferOptions);
    this.addEventListeners(transferOptions?.eventListeners);

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);
      if (transferOptions?.abortSignal) {
        this.abortCleanupFunctions.get(transferOptions.abortSignal as AbortSignal)?.();
        this.abortCleanupFunctions.delete(transferOptions.abortSignal as AbortSignal);
      }
    };

    const checksumValidationEnabled =
      request.ChecksumMode === "ENABLED" || this.responseChecksumValidation === "WHEN_SUPPORTED";

    const { destination, failIfExists, ...getObjectFields } = request;

    if (this.multipartDownloadType === "RANGE") {
      try {
        const result = await this.downloadToFileByRange(request, resolvedDestination, transferOptions);
        removeLocalEventListeners();
        return result;
      } catch (error) {
        removeLocalEventListeners();
        throw error;
      }
    }

    const initialPartRequest: GetObjectCommandInput = {
      ...getObjectFields,
      PartNumber: 1,
      ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
    };

    let initialResponse: DownloadResponse;
    try {
      initialResponse = await this.s3.send(new GetObjectCommand(initialPartRequest), transferOptions);
    } catch (error) {
      removeLocalEventListeners();
      throw error;
    }

    // Attach a no-op error handler to the initial response body to prevent
    // uncaught socket teardown errors if abort fires before the body is consumed.
    if (initialResponse.Body && initialResponse.Body instanceof Readable) {
      initialResponse.Body.on("error", () => {});
    }

    const totalSize = initialResponse.ContentRange
      ? Number.parseInt(initialResponse.ContentRange.split("/")[1])
      : (initialResponse.ContentLength ?? 0);
    const partsCount = initialResponse.PartsCount ?? 1;
    const eTag = initialResponse.ETag ?? undefined;

    this.dispatchTransferInitiatedEvent(request, totalSize);

    const fileManager = new FileManager();
    let tempFilePath: string | undefined;

    try {
      if (partsCount === 1) {
        tempFilePath = await fileManager.createTempFile(resolvedDestination, totalSize);
        fileManager.registerCleanupHandler(tempFilePath);

        // Write the whole object body, which starts at byte 0.
        await this.writeResponseBodyToFile(initialResponse.Body, tempFilePath, initialResponse.ContentRange, 0);

        this.dispatchEvent(
          Object.assign(new Event("bytesTransferred"), {
            request,
            snapshot: {
              transferredBytes: totalSize,
              totalBytes: totalSize,
            },
          })
        );

        // Atomic rename
        await fileManager.atomicRename(tempFilePath, resolvedDestination);
        fileManager.unregisterCleanupHandler(tempFilePath);

        const response = this.buildDownloadToFileResponse(initialResponse, totalSize, request);
        removeLocalEventListeners();
        return response;
      }

      // Multipart download path when PartsCount > 1.
      tempFilePath = await fileManager.createTempFile(resolvedDestination, totalSize);
      fileManager.registerCleanupHandler(tempFilePath);

      // Write Part 1 body, which starts at byte 0.
      const partSize = initialResponse.ContentLength ?? 0;
      await this.writeResponseBodyToFile(initialResponse.Body, tempFilePath, initialResponse.ContentRange, 0);

      this.dispatchEvent(
        Object.assign(new Event("bytesTransferred"), {
          request,
          snapshot: {
            transferredBytes: partSize,
            totalBytes: totalSize,
          },
        })
      );

      // TODO: Full-object CRC validation via CRC combination.
      // S3 currently only returns full-object checksums in part GET responses for objects
      // uploaded via single PutObject, making this path effectively unreachable for multipart
      // downloads. Once S3 ships support for returning full-object checksums on MPU-uploaded
      // objects (tracking: P320750170), implement CRC combination here to validate the
      // combined per-part CRCs against the full-object checksum.

      const partResults: Array<{ partNumber: number; bytesWritten: number }> = [];
      partResults.push({ partNumber: 1, bytesWritten: partSize });

      // Dispatch remaining Part GET requests with concurrency bounding
      const semaphore = new Semaphore(this.maxConcurrentDownloads);
      const abortController = new AbortController();
      let failed = false;
      let failureError: unknown;

      // Listen to user abort
      const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
      if (userSignal) {
        const onUserAbort = () => abortController.abort();
        userSignal.addEventListener("abort", onUserAbort, { once: true });
      }

      const remainingPartTasks: Promise<void>[] = [];

      for (let part = 2; part <= partsCount; part++) {
        if (failed || abortController.signal.aborted) break;
        this.checkAborted(transferOptions);

        await semaphore.acquire();

        if (failed || abortController.signal.aborted) {
          semaphore.release();
          break;
        }

        const partNumber = part;
        // Calculate the expected offset and length from part boundaries
        const partOffset = (partNumber - 1) * partSize;
        // Last part might be smaller
        const expectedLength = Math.min(partSize, totalSize - partOffset);

        const partGetRequest: GetObjectCommandInput = {
          ...getObjectFields,
          PartNumber: partNumber,
          IfMatch: eTag,
          ...(checksumValidationEnabled && {
            ChecksumMode: "ENABLED" as const,
          }),
        };

        const task = (async () => {
          try {
            if (this.workerHttpHandler) {
              // Worker-thread path: dispatch via WorkerHttpHandler for direct file-offset write
              const resultToken = `download-${partNumber}-${Date.now()}`;
              const downloadOptions: DownloadDataToFile = {
                filePath: tempFilePath!,
                offset: partOffset,
                expectedLength,
                resultToken,
              };

              // Send through S3Client with downloadDataToFile options.
              // The WorkerHttpHandler intercepts requests with downloadDataToFile
              // and dispatches them to worker threads for direct file writes.
              // The handler returns a proper HttpResponse (with body omitted since
              // it was written to disk) so the SDK middleware pipeline processes
              // the response normally.
              await this.s3.send(new GetObjectCommand(partGetRequest), {
                ...transferOptions,
                downloadDataToFile: downloadOptions,
              } as any);

              // Retrieve the download result from the WorkerHttpHandler's side-channel.
              const downloadResult = (this.s3.config.requestHandler as unknown as WorkerHttpHandler).getDownloadResult(
                resultToken
              );
              if (!downloadResult) {
                throw new Error(`Missing download result for part ${partNumber}`);
              }

              partResults.push({
                partNumber,
                bytesWritten: downloadResult.bytesWritten,
              });
            } else {
              // Main-thread fallback (workerThreadCount === 1)
              const partResponse = await this.s3.send(new GetObjectCommand(partGetRequest), transferOptions);
              if (partResponse.Body && partResponse.Body instanceof Readable) {
                partResponse.Body.on("error", () => {});
              }
              // Validate ContentRange aligns with expected part boundaries
              this.validatePartDownload(partResponse.ContentRange, partNumber, partSize);
              await this.writeResponseBodyToFile(
                partResponse.Body,
                tempFilePath!,
                partResponse.ContentRange,
                partOffset
              );

              partResults.push({
                partNumber,
                bytesWritten: partResponse.ContentLength ?? expectedLength,
              });
            }

            // Dispatch bytesTransferred event
            this.dispatchEvent(
              Object.assign(new Event("bytesTransferred"), {
                request: partGetRequest,
                snapshot: {
                  transferredBytes: expectedLength,
                  totalBytes: totalSize,
                },
              })
            );
          } catch (error) {
            if (!failed) {
              failed = true;
              failureError = error;
              abortController.abort();
            }
          } finally {
            semaphore.release();
          }
        })();

        remainingPartTasks.push(task);
      }

      await Promise.allSettled(remainingPartTasks);

      // Handle abort: if the abort signal was triggered (either user or internal),
      // reject with AbortError regardless of whether tasks have already failed.
      if (abortController.signal.aborted && !failed) {
        const abortError = Object.assign(new Error("Transfer aborted."), {
          name: "AbortError",
        });
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalSize, abortError);
        removeLocalEventListeners();
        throw abortError;
      }

      // Handle failure
      if (failed) {
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalSize, failureError);
        removeLocalEventListeners();
        throw failureError;
      }

      // Verify request count
      if (partResults.length !== partsCount) {
        const error = new Error(
          `The number of parts downloaded (${partResults.length}) does not match the expected number (${partsCount})`
        );
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalSize, error);
        removeLocalEventListeners();
        throw error;
      }

      // Verify total bytes written matches expected object size
      const totalBytesWritten = partResults.reduce((sum, p) => sum + p.bytesWritten, 0);
      if (totalBytesWritten !== totalSize) {
        const error = new Error(
          `Total bytes written (${totalBytesWritten}) does not match expected object size (${totalSize})`
        );
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalSize, error);
        removeLocalEventListeners();
        throw error;
      }

      // Atomic rename
      await fileManager.atomicRename(tempFilePath, resolvedDestination);
      fileManager.unregisterCleanupHandler(tempFilePath);

      const response = this.buildDownloadToFileResponse(initialResponse, totalSize, request);
      removeLocalEventListeners();
      return response;
    } catch (error) {
      // Ensure temp file cleanup on any unexpected error
      if (tempFilePath) {
        await fileManager.deleteTempFile(tempFilePath).catch(() => {});
        fileManager.unregisterCleanupHandler(tempFilePath);
      }
      removeLocalEventListeners();
      throw error;
    }
  }

  /**
   * Downloads an S3 object to a local file using Range-based GET requests.
   */
  private async downloadToFileByRange(
    request: DownloadToFileRequest,
    resolvedDestination: string,
    transferOptions?: TransferOptions
  ): Promise<DownloadToFileResponse> {
    const { destination, failIfExists, ...getObjectFields } = request;
    const checksumValidationEnabled =
      request.ChecksumMode === "ENABLED" || this.responseChecksumValidation === "WHEN_SUPPORTED";

    const fileManager = new FileManager();
    let tempFilePath: string | undefined;

    try {
      // Create initial GetObject request with Range bytes=0-{targetPartSizeBytes-1}
      const rangeSize = this.targetPartSizeBytes;
      const initialRangeRequest: GetObjectCommandInput = {
        ...getObjectFields,
        Range: `bytes=0-${rangeSize - 1}`,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };

      const initialResponse = await this.s3.send(new GetObjectCommand(initialRangeRequest), transferOptions);

      // Attach a no-op error handler to the initial response body to prevent
      // uncaught socket teardown errors if abort fires before the body is consumed.
      if (initialResponse.Body && initialResponse.Body instanceof Readable) {
        initialResponse.Body.on("error", () => {});
      }

      // Validate ContentRange matches the requested range (also validates presence and format)
      this.validateRangeDownload(`bytes=0-${rangeSize - 1}`, initialResponse.ContentRange);

      // Parse total content length from ContentRange: "bytes 0-N/TOTAL"
      const totalContentLength = Number.parseInt(initialResponse.ContentRange!.split("/")[1]);
      const responseContentLength = initialResponse.ContentLength ?? 0;

      // Compare parsed total content length with ContentLength
      if (responseContentLength === totalContentLength) {
        // Single-part object — this response contains all the data
        tempFilePath = await fileManager.createTempFile(resolvedDestination, totalContentLength);
        fileManager.registerCleanupHandler(tempFilePath);

        await this.writeResponseBodyToFile(initialResponse.Body, tempFilePath, initialResponse.ContentRange, 0);

        await fileManager.atomicRename(tempFilePath, resolvedDestination);
        fileManager.unregisterCleanupHandler(tempFilePath);

        this.dispatchTransferInitiatedEvent(request, totalContentLength);
        this.dispatchEvent(
          Object.assign(new Event("bytesTransferred"), {
            request,
            snapshot: {
              transferredBytes: totalContentLength,
              totalBytes: totalContentLength,
            },
          })
        );
        return this.buildDownloadToFileResponse(initialResponse, totalContentLength, request);
      }

      // Save ETag and calculate expected number of ranged GET requests
      const eTag = initialResponse.ETag ?? undefined;
      const expectedRequestCount = Math.ceil(totalContentLength / rangeSize);

      this.dispatchTransferInitiatedEvent(request, totalContentLength);

      // Create temp file and write initial part
      tempFilePath = await fileManager.createTempFile(resolvedDestination, totalContentLength);
      fileManager.registerCleanupHandler(tempFilePath);

      await this.writeResponseBodyToFile(initialResponse.Body, tempFilePath, initialResponse.ContentRange, 0);

      const rangeResults: Array<{ index: number; bytesWritten: number }> = [];
      rangeResults.push({ index: 0, bytesWritten: responseContentLength });

      this.dispatchEvent(
        Object.assign(new Event("bytesTransferred"), {
          request: initialRangeRequest,
          snapshot: {
            transferredBytes: responseContentLength,
            totalBytes: totalContentLength,
          },
        })
      );

      // Construct and dispatch remaining range GET requests concurrently
      const semaphore = new Semaphore(this.maxConcurrentDownloads);
      const abortController = new AbortController();
      let failed = false;
      let failureError: unknown;

      const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
      if (userSignal) {
        userSignal.addEventListener("abort", () => abortController.abort(), {
          once: true,
        });
      }

      const rangeTasks: Promise<void>[] = [];
      let rangeIndex = 1;

      for (let offset = rangeSize; offset < totalContentLength; offset += rangeSize) {
        if (failed || abortController.signal.aborted) break;
        this.checkAborted(transferOptions);

        await semaphore.acquire();

        if (failed || abortController.signal.aborted) {
          semaphore.release();
          break;
        }

        const start = offset;
        const end = Math.min(offset + rangeSize - 1, totalContentLength - 1);
        const currentIndex = rangeIndex++;

        const rangeGetRequest: GetObjectCommandInput = {
          ...getObjectFields,
          Range: `bytes=${start}-${end}`,
          IfMatch: eTag,
          ...(checksumValidationEnabled && {
            ChecksumMode: "ENABLED" as const,
          }),
        };

        const task = (async () => {
          try {
            const expectedLength = end - start + 1;

            if (this.workerHttpHandler) {
              // Worker-thread path: dispatch via WorkerHttpHandler for direct file-offset write
              const resultToken = `download-range-${currentIndex}-${Date.now()}`;
              const downloadOptions: DownloadDataToFile = {
                filePath: tempFilePath!,
                offset: start,
                expectedLength,
                resultToken,
              };

              const rangeResponse = await this.s3.send(new GetObjectCommand(rangeGetRequest), {
                ...transferOptions,
                downloadDataToFile: downloadOptions,
              } as any);

              // Validate ContentRange matches the requested range
              this.validateRangeDownload(`bytes=${start}-${end}`, rangeResponse.ContentRange);

              // Retrieve the download result from the WorkerHttpHandler's side-channel.
              const downloadResult = (this.s3.config.requestHandler as unknown as WorkerHttpHandler).getDownloadResult(
                resultToken
              );
              if (!downloadResult) {
                throw new Error(`Missing download result for range ${start}-${end}`);
              }

              rangeResults.push({
                index: currentIndex,
                bytesWritten: downloadResult.bytesWritten,
              });
            } else {
              // Main-thread fallback (workerThreadCount === 1)
              const rangeResponse = await this.s3.send(new GetObjectCommand(rangeGetRequest), transferOptions);

              // Validate ContentRange matches the requested range
              this.validateRangeDownload(`bytes=${start}-${end}`, rangeResponse.ContentRange);

              if (rangeResponse.Body && rangeResponse.Body instanceof Readable) {
                rangeResponse.Body.on("error", () => {});
              }
              await this.writeResponseBodyToFile(rangeResponse.Body, tempFilePath!, rangeResponse.ContentRange, start);

              rangeResults.push({
                index: currentIndex,
                bytesWritten: rangeResponse.ContentLength ?? expectedLength,
              });
            }

            this.dispatchEvent(
              Object.assign(new Event("bytesTransferred"), {
                request: rangeGetRequest,
                snapshot: {
                  transferredBytes: end - start + 1,
                  totalBytes: totalContentLength,
                },
              })
            );
          } catch (error) {
            if (!failed) {
              failed = true;
              failureError = error;
              abortController.abort();
            }
          } finally {
            semaphore.release();
          }
        })();

        rangeTasks.push(task);
      }

      await Promise.allSettled(rangeTasks);

      if (abortController.signal.aborted && !failed) {
        const abortError = Object.assign(new Error("Transfer aborted."), {
          name: "AbortError",
        });
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalContentLength, abortError);
        throw abortError;
      }

      if (failed) {
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalContentLength, failureError);
        throw failureError;
      }

      // Validate total number of ranged GET requests matches expected count
      const actualRequestCount = rangeResults.length; // includes initial request
      if (actualRequestCount !== expectedRequestCount) {
        const error = new Error(`Expected ${expectedRequestCount} ranged GET requests but sent ${actualRequestCount}`);
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalContentLength, error);
        throw error;
      }

      // Verify total bytes written matches expected object size
      const totalBytesWritten = rangeResults.reduce((sum, r) => sum + r.bytesWritten, 0);
      if (totalBytesWritten !== totalContentLength) {
        const error = new Error(
          `Total bytes written (${totalBytesWritten}) does not match expected object size (${totalContentLength})`
        );
        await this.handleDownloadCleanup(fileManager, tempFilePath, request, totalContentLength, error);
        throw error;
      }

      await fileManager.atomicRename(tempFilePath, resolvedDestination);
      fileManager.unregisterCleanupHandler(tempFilePath);

      return this.buildDownloadToFileResponse(initialResponse, totalContentLength, request);
    } catch (error) {
      if (tempFilePath) {
        await fileManager.deleteTempFile(tempFilePath).catch(() => {});
        fileManager.unregisterCleanupHandler(tempFilePath);
      }
      throw error;
    }
  }

  /**
   * Streams a GetObject response body into an already-created file, positioning
   * each write explicitly at the offsets.
   *
   * The starting offset comes from the response's ContentRange header, which is
   * authoritative: S3 permits multipart objects whose parts differ in size, so a
   * caller-computed offset is only usable as a fallback when the header is
   * absent or unparseable.
   *
   * @param body - The response body. A no-op when absent.
   * @param filePath - Path to the existing file to write into.
   * @param contentRange - The response's ContentRange header value, if any.
   * @param fallbackOffset - Offset to use when ContentRange is unavailable.
   * @returns The number of bytes written.
   *
   */
  private async writeResponseBodyToFile(
    body: DownloadResponse["Body"],
    filePath: string,
    contentRange: string | undefined,
    fallbackOffset: number
  ): Promise<number> {
    const start = parseContentRangeStart(contentRange) ?? fallbackOffset;
    const fd = await open(filePath, "r+");
    try {
      let offset = start;
      if (typeof (body as any)[Symbol.asyncIterator] === "function") {
        for await (const chunk of body as AsyncIterable<Uint8Array>) {
          await fd.write(chunk, 0, chunk.length, offset);
          offset += chunk.length;
        }
      } else if (typeof (body as any).transformToByteArray === "function") {
        const bytes: Uint8Array = await (body as any).transformToByteArray();
        await fd.write(bytes, 0, bytes.length, offset);
        offset += bytes.length;
      }
      return offset - start;
    } finally {
      await fd.close();
    }
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
  public async uploadDirectory(
    request: UploadDirectoryRequest,
    transferOptions?: TransferOptions
  ): Promise<UploadDirectoryResponse> {
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
        snapshot: {
          transferredBytes: 0,
          totalBytes: undefined,
          transferredFiles: 0,
          totalFiles: undefined,
        },
      })
    );

    const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
    if (userSignal) {
      userSignal.addEventListener("abort", () => abortController.abort(), {
        once: true,
      });
    }

    let discoveredFiles = 0;
    let discoveredBytes = 0;

    for await (const filePath of this.traverseDirectory(absoluteSource, {
      recursive: request.recursive ?? false,
      followSymbolicLinks: request.followSymbolicLinks ?? false,
    })) {
      if (terminated || abortController.signal.aborted) break;
      this.checkAborted(transferOptions);

      if (request.filter) {
        const include = request.filter instanceof RegExp ? request.filter.test(filePath) : request.filter(filePath);
        if (!include) continue;
      }

      const fileStat = await stat(filePath);
      discoveredFiles++;
      discoveredBytes += fileStat.size;

      const count =
        fileStat.size >= this.multipartUploadThresholdBytes
          ? Math.min(Math.ceil(fileStat.size / this.targetPartSizeBytes), this.maxConcurrentUploads)
          : 1;

      await semaphore.acquire(count);

      if (terminated || abortController.signal.aborted) {
        semaphore.release(count);
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

          await this.upload(putRequest, {
            abortSignal: abortController.signal,
          });
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
            objectRequest: {
              Bucket: request.bucket,
              Key: this.deriveS3Key(absoluteSource, filePath, request.s3Prefix),
            },
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
          semaphore.release(count);
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
          snapshot: {
            transferredBytes,
            totalBytes,
            transferredFiles,
            totalFiles,
          },
        })
      );
      removeLocalEventListeners();
      throw terminationError;
    }

    this.dispatchEvent(
      Object.assign(new Event("transferComplete"), {
        request,
        response: { objectsUploaded, objectsFailed },
        snapshot: {
          transferredBytes,
          totalBytes,
          transferredFiles,
          totalFiles,
        },
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
  public downloadDirectory(
    request: DownloadDirectoryRequest,
    transferOptions?: TransferOptions
  ): Promise<DownloadDirectoryResponse> {
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
  ): Promise<{
    totalSize: number | undefined;
    onStreamConsumed?: (index: number) => void;
  }> {
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
              ...(checksumValidationEnabled && {
                ChecksumMode: "ENABLED" as const,
              }),
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
          ...(checksumValidationEnabled && {
            ChecksumMode: "ENABLED" as const,
          }),
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
  ): Promise<{
    totalSize: number | undefined;
    onStreamConsumed?: (index: number) => void;
  }> {
    let streamConsumedCallback: ((index: number) => void) | undefined;
    this.checkAborted(transferOptions);

    const headResponse = await this.s3.send(
      new HeadObjectCommand({ Bucket: request.Bucket, Key: request.Key }),
      transferOptions
    );

    if (headResponse.ContentLength === 0) {
      const getObjectRequest = {
        ...request,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };
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
   * Downloads object using part-based strategy with worker threads and ArrayBuffer transfer.
   *
   * Fetches PartNumber=1 on the main thread to discover object metadata (PartsCount,
   * part size, ETag, total size); its body is returned directly as the first stream.
   * Remaining parts are sent through the SDK pipeline where WorkerHttpHandler routes
   * them to worker threads, which assemble response bytes into dedicated ArrayBuffers
   * and transfer ownership back to main (zero-copy). The OrderedPartQueue delivers
   * parts sequentially to the consumer stream regardless of arrival order.
   *
   */
  private async downloadByPartWithWorkers(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">,
    checksumValidationEnabled: boolean
  ): Promise<{
    totalSize: number | undefined;
    onStreamConsumed?: (index: number) => void;
  }> {
    this.checkAborted(transferOptions);

    // Fetch Part 1 to discover metadata: PartsCount, part size, ETag, total object size.
    // Strip Range — S3 doesn't allow both Range and PartNumber in the same request.
    const { Range: _range, ...requestWithoutRange } = request;
    const initialPartRequest: GetObjectCommandInput = {
      ...requestWithoutRange,
      PartNumber: 1,
      ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
    };

    const initialPart = await this.s3.send(new GetObjectCommand(initialPartRequest), transferOptions);
    await internalEventHandler.afterInitialGetObject();

    const partSize = initialPart.ContentLength!;
    const initialETag = initialPart.ETag ?? undefined;
    const totalSize = initialPart.ContentRange
      ? Number.parseInt(initialPart.ContentRange.split("/")[1])
      : (initialPart.ContentLength ?? 0);
    const partsCount = initialPart.PartsCount ?? 1;

    this.dispatchTransferInitiatedEvent(request, totalSize);

    // Stream part 1 body directly (no buffer copy needed for the first part).
    if (initialPart.Body) {
      if (typeof (initialPart.Body as any).getReader === "function") {
        const reader = (initialPart.Body as any).getReader();
        (initialPart.Body as any).getReader = function () {
          return reader;
        };
      }
      streams.push(Promise.resolve(initialPart.Body));
      requests.push(initialPartRequest);
    }

    this.processResponseMetadata(initialPart, metadata, totalSize);

    // Single-part object: nothing more to do.
    if (partsCount <= 1) {
      return { totalSize };
    }

    // Check abort after events have fired (listeners may trigger abort).
    this.checkAborted(transferOptions);

    // Multipart: dispatch remaining parts (2..N) via ArrayBuffer transfer + worker threads.
    // Workers assemble each part into a dedicated ArrayBuffer and transfer ownership to main
    // (zero-copy). The OrderedPartQueue delivers parts sequentially to the consumer stream.
    const remainingParts = partsCount - 1;
    const queue = new OrderedPartQueue(remainingParts);

    const abortController = new AbortController();
    const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
    if (userSignal) {
      userSignal.addEventListener("abort", () => abortController.abort(), {
        once: true,
      });
    }

    // Concurrency limiter: bound in-flight requests to maxConcurrentDownloads.
    // This provides backpressure — waitForSlot blocks when all slots are in use.
    let inFlight = 0;
    let nextDispatchResolve: (() => void) | null = null;

    const waitForSlot = (): Promise<void> => {
      if (inFlight < this.maxConcurrentDownloads) {
        return Promise.resolve();
      }
      return new Promise<void>((resolve) => {
        nextDispatchResolve = resolve;
      });
    };

    const releaseSlot = (): void => {
      if (inFlight <= 0) {
        throw new Error("releaseSlot called with no in-flight requests");
      }
      inFlight--;
      if (nextDispatchResolve && inFlight < this.maxConcurrentDownloads) {
        const resolve = nextDispatchResolve;
        nextDispatchResolve = null;
        resolve();
      }
    };
    const dispatchPromise = (async () => {
      for (let partNumber = 2; partNumber <= partsCount; partNumber++) {
        if (abortController.signal.aborted || queue.hasError()) break;
        this.checkAborted(transferOptions);

        // Wait for a slot — blocks if all slots are in use (backpressure)
        await waitForSlot();
        if (abortController.signal.aborted || queue.hasError()) break;

        inFlight++;
        const rangeIndex = partNumber - 2;
        const partGetRequest: GetObjectCommandInput = {
          ...requestWithoutRange,
          PartNumber: partNumber,
          IfMatch: initialETag,
          ...(checksumValidationEnabled && {
            ChecksumMode: "ENABLED" as const,
          }),
        };

        requests.push(partGetRequest);

        const resultToken = `download-transfer-part-${rangeIndex}-${Date.now()}`;
        const transferOptions_: DownloadStreamOptions = {
          expectedSize: partSize,
          rangeIndex,
          checksumAlgorithm: checksumValidationEnabled ? "CRC32" : undefined,
          resultToken,
        };

        // Send through SDK pipeline — WorkerHttpHandler.handle() intercepts downloadStream
        // and dispatches to a worker. The worker assembles data into an ArrayBuffer and transfers
        // ownership back to main (zero-copy). Fire-and-forget; completion tracked via queue.
        this.s3
          .send(new GetObjectCommand(partGetRequest), {
            ...transferOptions,
            downloadStream: transferOptions_,
          } as any)
          .then(() => {
            const transferResult = (
              this.s3.config.requestHandler as unknown as WorkerHttpHandler
            ).getStreamDownloadResult(resultToken);
            if (!transferResult) {
              queue.setError(new Error(`Missing download result for part ${partNumber}`));
              abortController.abort();
              return;
            }

            // Validate ContentRange matches expected part boundaries
            this.validatePartDownload(transferResult.headers["content-range"], partNumber, partSize);

            queue.enqueue(rangeIndex, transferResult.buffer, transferResult.byteLength);

            this.dispatchEvent(
              Object.assign(new Event("bytesTransferred"), {
                request: partGetRequest,
                snapshot: {
                  transferredBytes: transferResult.byteLength,
                  totalBytes: totalSize,
                },
              })
            );
          })
          .catch((error) => {
            queue.setError(error);
            abortController.abort();
          })
          .finally(() => {
            releaseSlot();
          });
      }
    })().catch((err) => {
      // Dispatch loop threw (e.g. abort signal triggered checkAborted).
      // Signal the queue so the consumer stream surfaces the error.
      if (!queue.hasError()) {
        queue.setError(err);
      }
    });

    // Create a Readable stream that pulls parts sequentially from the ordered queue.
    // Each chunk is a zero-copy Buffer view into the transferred ArrayBuffer.
    let reading = false;
    const transferStream = new Readable({
      read() {
        if (reading) return;
        reading = true;
        queue
          .dequeue()
          .then((item) => {
            reading = false;
            if (item === null) {
              // null means either all parts delivered OR an error was set.
              // If an error was set, destroy the stream with that error so
              // joinStreams calls onFailure instead of onCompletion.
              if (queue.hasError()) {
                this.destroy(queue.getError() as Error);
                return;
              }
              this.push(null); // EOF — all parts delivered
              return;
            }

            // Buffer.from(ArrayBuffer, offset, length) creates a VIEW — no copy.
            // The consumer reads directly from the transferred memory.
            const buf = Buffer.from(item.buffer, 0, item.byteLength);
            this.push(buf);
          })
          .catch((err) => {
            reading = false;
            this.destroy(err as Error);
          });
      },
      destroy(err, callback) {
        // On stream destruction (abort/error), signal the queue to stop
        if (err) {
          queue.setError(err);
          abortController.abort();
        }
        callback(err);
      },
    });

    streams.push(Promise.resolve(transferStream as unknown as StreamingBlobPayloadOutputTypes));

    return { totalSize };
  }

  /**
   * Downloads an S3 object using Range GETs dispatched to worker threads.
   * Workers download each range into a dedicated ArrayBuffer and transfer
   * ownership to main (zero-copy). The OrderedPartQueue delivers ranges
   * sequentially to the consumer Readable stream regardless of arrival order.
   *
   * Memory is bounded by maxConcurrentDownloads in-flight buffers plus the
   * reorder window in the queue. Backpressure is applied via a concurrency
   * limiter — dispatch blocks when all slots are in use.
   */
  private async downloadByRangeWithWorkers(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">,
    checksumValidationEnabled: boolean
  ): Promise<{
    totalSize: number | undefined;
    onStreamConsumed?: (index: number) => void;
  }> {
    this.checkAborted(transferOptions);

    const headResponse = await this.s3.send(
      new HeadObjectCommand({ Bucket: request.Bucket, Key: request.Key }),
      transferOptions
    );
    await internalEventHandler.afterInitialGetObject();

    if (headResponse.ContentLength === 0) {
      const getObjectRequest = {
        ...request,
        ...(checksumValidationEnabled && { ChecksumMode: "ENABLED" as const }),
      };
      const response = await this.s3.send(new GetObjectCommand(getObjectRequest), transferOptions);

      this.dispatchTransferInitiatedEvent(request, 0);
      if (response.Body) streams.push(Promise.resolve(response.Body));
      requests.push(getObjectRequest);

      this.processResponseMetadata(response, metadata, 0);
      return { totalSize: 0 };
    }

    const totalSize = headResponse.ContentLength!;
    const partSize = this.targetPartSizeBytes;
    const totalParts = Math.ceil(totalSize / partSize);

    // Use the initial HeadObject to extract metadata (ETag, etc.)
    const eTag = headResponse.ETag ?? undefined;
    this.dispatchTransferInitiatedEvent(request, totalSize);

    // Assign metadata from HeadObject response
    Object.assign(metadata, {
      ContentLength: totalSize,
      ContentRange: `bytes 0-${totalSize - 1}/${totalSize}`,
      ContentType: headResponse.ContentType,
      ETag: headResponse.ETag,
      LastModified: headResponse.LastModified,
      $metadata: headResponse.$metadata,
    });

    // OrderedPartQueue delivers parts sequentially regardless of arrival order.
    const queue = new OrderedPartQueue(totalParts);

    const abortController = new AbortController();
    const userSignal = transferOptions?.abortSignal as AbortSignal | undefined;
    if (userSignal) {
      userSignal.addEventListener("abort", () => abortController.abort(), {
        once: true,
      });
    }

    // Concurrency limiter: bound in-flight requests to maxConcurrentDownloads.
    let inFlight = 0;
    let nextDispatchResolve: (() => void) | null = null;

    const waitForSlot = (): Promise<void> => {
      if (inFlight < this.maxConcurrentDownloads) {
        return Promise.resolve();
      }
      return new Promise<void>((resolve) => {
        nextDispatchResolve = resolve;
      });
    };

    const releaseSlot = (): void => {
      if (inFlight <= 0) {
        throw new Error("releaseSlot called with no in-flight requests");
      }
      inFlight--;
      if (nextDispatchResolve && inFlight < this.maxConcurrentDownloads) {
        const resolve = nextDispatchResolve;
        nextDispatchResolve = null;
        resolve();
      }
    };

    // Dispatch remaining range requests via the SDK pipeline (WorkerHttpHandler intercepts them).
    // Concurrency limiter provides backpressure — waitForSlot blocks when all slots are in use.
    const dispatchPromise = (async () => {
      for (let rangeIndex = 0; rangeIndex < totalParts; rangeIndex++) {
        if (abortController.signal.aborted || queue.hasError()) break;
        this.checkAborted(transferOptions);

        // Wait for a slot — blocks if all slots are in use (backpressure)
        await waitForSlot();
        if (abortController.signal.aborted || queue.hasError()) break;

        inFlight++;
        const start = rangeIndex * partSize;
        const end = Math.min(start + partSize - 1, totalSize - 1);
        const expectedLength = end - start + 1;

        const rangeGetRequest: GetObjectCommandInput = {
          ...request,
          Range: `bytes=${start}-${end}`,
          IfMatch: eTag,
          ...(checksumValidationEnabled && {
            ChecksumMode: "ENABLED" as const,
          }),
        };

        requests.push(rangeGetRequest);

        const resultToken = `download-transfer-range-${rangeIndex}-${Date.now()}`;
        const transferOpts: DownloadStreamOptions = {
          expectedSize: expectedLength,
          rangeIndex,
          checksumAlgorithm: checksumValidationEnabled ? "CRC32" : undefined,
          resultToken,
        };

        // Send through SDK pipeline — WorkerHttpHandler.handle() intercepts downloadStream
        // and dispatches to a worker. The worker assembles data into an ArrayBuffer and transfers
        // ownership back to main (zero-copy). Fire-and-forget; completion tracked via queue.
        this.s3
          .send(new GetObjectCommand(rangeGetRequest), {
            ...transferOptions,
            downloadStream: transferOpts,
          } as any)
          .then(() => {
            const transferResult = (
              this.s3.config.requestHandler as unknown as WorkerHttpHandler
            ).getStreamDownloadResult(resultToken);
            if (!transferResult) {
              queue.setError(new Error(`Missing download result for range ${start}-${end}`));
              abortController.abort();
              return;
            }

            // Validate ContentRange matches the requested byte range
            this.validateRangeDownload(`bytes=${start}-${end}`, transferResult.headers["content-range"]);

            queue.enqueue(rangeIndex, transferResult.buffer, transferResult.byteLength);

            this.dispatchEvent(
              Object.assign(new Event("bytesTransferred"), {
                request: rangeGetRequest,
                snapshot: {
                  transferredBytes: transferResult.byteLength,
                  totalBytes: totalSize,
                },
              })
            );
          })
          .catch((error) => {
            queue.setError(error);
            abortController.abort();
          })
          .finally(() => {
            releaseSlot();
          });
      }
    })().catch((err) => {
      if (!queue.hasError()) {
        queue.setError(err);
      }
    });

    // Create a Readable stream that pulls ranges sequentially from the ordered queue.
    // Each chunk is a zero-copy Buffer view into the transferred ArrayBuffer.
    let reading = false;
    const transferStream = new Readable({
      read() {
        if (reading) return;
        reading = true;
        queue
          .dequeue()
          .then((item) => {
            reading = false;
            if (item === null) {
              if (queue.hasError()) {
                this.destroy(queue.getError() as Error);
                return;
              }
              this.push(null); // EOF — all ranges delivered
              return;
            }

            // Buffer.from(ArrayBuffer, offset, length) creates a VIEW — no copy.
            // The consumer reads directly from the transferred memory.
            const buf = Buffer.from(item.buffer, 0, item.byteLength);
            this.push(buf);
          })
          .catch((err) => {
            reading = false;
            this.destroy(err as Error);
          });
      },
      destroy(err, callback) {
        // On stream destruction (abort/error), signal the queue to stop
        if (err) {
          queue.setError(err);
          abortController.abort();
        }
        callback(err);
      },
    });

    streams.push(Promise.resolve(transferStream as unknown as StreamingBlobPayloadOutputTypes));

    return { totalSize };
  }

  /**
   * Adds all event listeners from provided collection to the transfer manager.
   */
  private addEventListeners(eventListeners?: TransferEventListeners): void {
    for (const listeners of this.iterateListeners(eventListeners)) {
      for (const listener of listeners) {
        this.addEventListener(listener.eventType, listener.callback as EventListener);
      }
    }
  }

  /**
   *
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
   * Builds the final DownloadToFileResponse from the initial response metadata.
   * nulls checksum fields for COMPOSITE types, and dispatches the transferComplete event.
   *
   */
  private buildDownloadToFileResponse(
    initialResponse: DownloadResponse,
    totalSize: number,
    request: DownloadToFileRequest
  ): DownloadToFileResponse {
    const metadata: Record<string, any> = {};
    this.assignMetadata(metadata, initialResponse);
    metadata.ContentLength = totalSize;
    metadata.ContentRange = `bytes 0-${totalSize - 1}/${totalSize}`;

    if (initialResponse.ChecksumType === "COMPOSITE") {
      metadata.ChecksumCRC32 = undefined;
      metadata.ChecksumCRC32C = undefined;
      metadata.ChecksumSHA1 = undefined;
      metadata.ChecksumSHA256 = undefined;
    }

    const response: DownloadToFileResponse = {
      ...metadata,
      bytesWritten: totalSize,
    } as DownloadToFileResponse;

    this.dispatchEvent(
      Object.assign(new Event("transferComplete"), {
        request,
        response,
        snapshot: {
          transferredBytes: totalSize,
          totalBytes: totalSize,
        },
      })
    );

    return response;
  }

  /**
   * unregisters process handlers, and dispatches transferFailed event.
   *
   */
  private async handleDownloadCleanup(
    fileManager: FileManager,
    tempFilePath: string,
    request: DownloadToFileRequest,
    totalSize: number,
    error: unknown
  ): Promise<void> {
    await fileManager.deleteTempFile(tempFilePath);
    fileManager.unregisterCleanupHandler(tempFilePath);
    this.dispatchTransferFailedEvent(request, totalSize, error as Error);
  }

  /**
   * Updates response ContentLength and ContentRange based on total object size.
   *
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
   */
  private checkAborted(transferOptions?: TransferOptions): void {
    if (transferOptions?.abortSignal?.aborted) {
      throw Object.assign(new Error("Transfer aborted."), {
        name: "AbortError",
      });
    }
  }

  /**
   * Validates if configuration parameters meets minimum requirements.
   *
   */
  private validateConfig(): void {
    if (this.targetPartSizeBytes < S3TransferManager.MIN_PART_SIZE) {
      throw new Error(`targetPartSizeBytes must be at least ${S3TransferManager.MIN_PART_SIZE} bytes`);
    }
  }

  /**
   * Dispatches transferInitiated event with initial progress snapshot.
   *
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
   *          to signal that a stream has been consumed and the next task can be launched.
   *
   */
  private createConcurrentTaskPool<T>(
    tasks: (() => Promise<T>)[],
    maxConcurrent: number
  ): {
    promises: Promise<T>[];
    onStreamConsumed: (index: number) => void;
  } {
    if (tasks.length === 0) return { promises: [], onStreamConsumed: () => {} };

    const resolvers: Array<{
      resolve: (value: T) => void;
      reject: (error: unknown) => void;
    }> = [];
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
   * Used when content length is below the multipart upload threshold.
   *
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
   */
  private calculatePartSize(contentLength: number): {
    partSize: number;
    expectedPartsCount: number;
  } {
    const partSize = Math.max(this.targetPartSizeBytes, Math.ceil(contentLength / 10_000));
    const expectedPartsCount = Math.ceil(contentLength / partSize);
    return { partSize, expectedPartsCount };
  }
  /**
   * Checks if the body is a file read stream with a .path property.
   */
  private isFileBody(body: any): boolean {
    return typeof body?.pipe === "function" && typeof (body as any).path === "string";
  }
  /**
   * Checks if the body is fully in memory (Buffer, Uint8Array, or string).
   */
  private isInMemoryBody(body: any): body is Uint8Array | string {
    return body instanceof Uint8Array || typeof body === "string";
  }

  /**
   * Uploads using worker threads from a file source. Workers read file slices
   * with trailing checksums.
   *
   */
  private async threadedUploadInPartsFromFile(
    request: UploadRequest,
    contentLength: number,
    transferOptions?: TransferOptions
  ): Promise<CompleteMultipartUploadCommandOutput> {
    const { partSize } = this.calculatePartSize(contentLength);
    const filePath = (request.Body as any).path as string;

    const buildDataSource = (checksumAlgorithm?: ChecksumAlgorithm, checksumHeader?: string): DataSource => ({
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
   * zero-copy per part.
   *
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

    const buildDataSource = (checksumAlgorithm?: ChecksumAlgorithm, checksumHeader?: string): DataSource => ({
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
   * per-request data source passed to the WorkerHttpHandler.
   *
   */
  private async threadedMultipartUpload(
    request: UploadRequest,
    contentLength: number,
    buildDataSource: (checksumAlgorithm?: ChecksumAlgorithm, checksumHeader?: string) => DataSource,
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
            ...(checksumAlgorithm && {
              ChecksumAlgorithm: checksumAlgorithm as any,
            }),
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
   * the entire content into memory.
   *
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
   * Handles symlink cycle detection when followSymbolicLinks is true.
   *
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
   * and prepends s3Prefix if provided.
   *
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
 * Parses the starting byte offset from a ContentRange header value.
 * Expected format: "bytes START-END/TOTAL".
 *
 * @param contentRange - The ContentRange header value.
 * @returns The numeric START value, or undefined if absent or unparseable.
 *
 * @internal
 */
function parseContentRangeStart(contentRange: string | undefined): number | undefined {
  if (!contentRange) return undefined;
  const match = contentRange.match(/^bytes\s+(\d+)-/);
  return match ? Number(match[1]) : undefined;
}

/**
 * Internal event handler for download lifecycle hooks.
 *
 * @internal
 */
export const internalEventHandler = {
  async afterInitialGetObject() {},
};
