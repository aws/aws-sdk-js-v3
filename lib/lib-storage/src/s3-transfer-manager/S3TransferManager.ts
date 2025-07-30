import type {
  _Object as S3Object,
  ChecksumAlgorithm,
  GetObjectCommandInput,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { type StreamingBlobPayloadOutputTypes } from "@smithy/types";

import type { AddEventListenerOptions, EventListener, RemoveEventListenerOptions } from "./event-listener-types";
import { joinStreams } from "./join-streams";
import type {
  DownloadRequest,
  DownloadResponse,
  IS3TransferManager,
  S3TransferManagerConfig,
  TransferCompleteEvent,
  TransferEvent,
  TransferEventListeners,
  TransferOptions,
  UploadRequest,
  UploadResponse,
} from "./types";

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
  private static DEFAULT_PART_SIZE = 8 * 1024 * 1024; // 8MB
  private static MIN_UPLOAD_THRESHOLD = 16 * 1024 * 1024; // 16MB

  private readonly s3ClientInstance: S3Client;
  private readonly targetPartSizeBytes: number;
  private readonly multipartUploadThresholdBytes: number;
  private readonly checksumValidationEnabled: boolean;
  private readonly checksumAlgorithm: ChecksumAlgorithm;
  private readonly multipartDownloadType: "PART" | "RANGE";
  private readonly eventListeners: TransferEventListeners;
  private readonly abortCleanupFunctions = new WeakMap<AbortSignal, () => void>();

  public constructor(config: S3TransferManagerConfig = {}) {
    this.checksumValidationEnabled = config.checksumValidationEnabled ?? true;

    const checksumMode = this.checksumValidationEnabled ? "WHEN_SUPPORTED" : "WHEN_REQUIRED";

    this.s3ClientInstance =
      config.s3ClientInstance ??
      new S3Client({
        requestChecksumCalculation: checksumMode,
        responseChecksumValidation: checksumMode,
      });

    this.targetPartSizeBytes = config.targetPartSizeBytes ?? S3TransferManager.DEFAULT_PART_SIZE;
    this.multipartUploadThresholdBytes = config.multipartUploadThresholdBytes ?? S3TransferManager.MIN_UPLOAD_THRESHOLD;

    this.checksumAlgorithm = config.checksumAlgorithm ?? "CRC32";
    this.multipartDownloadType = config.multipartDownloadType ?? "PART";
    this.eventListeners = {
      transferInitiated: config.eventListeners?.transferInitiated ?? [],
      bytesTransferred: config.eventListeners?.bytesTransferred ?? [],
      transferComplete: config.eventListeners?.transferComplete ?? [],
      transferFailed: config.eventListeners?.transferFailed ?? [],
    };

    this.validateConfig();
  }

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

  public dispatchEvent(event: Event & TransferEvent): boolean;
  public dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  public dispatchEvent(event: Event): boolean;
  /**
   * Dispatches an event to the registered event listeners.
   * Triggers callbacks registered via addEventListener with matching event types.
   *
   * @param event - The event object to dispatch.
   * @returns whether the event ran to completion
   *
   * @alpha
   */
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
   * @alpha
   */
  public upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse> {
    throw new Error("Method not implemented.");
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

    if (this.multipartDownloadType === "PART") {
      const responseMetadata = await this.downloadByPart(request, transferOptions ?? {}, streams, requests, metadata);
      totalSize = responseMetadata.totalSize;
    } else if (this.multipartDownloadType === "RANGE") {
      const responseMetadata = await this.downloadByRange(request, transferOptions ?? {}, streams, requests, metadata);
      totalSize = responseMetadata.totalSize;
    }

    const removeLocalEventListeners = () => {
      this.removeEventListeners(transferOptions?.eventListeners);

      // remove any local abort() listeners after request completes.
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
      }),
    };

    return response;
  }

  /**
   * Uploads all files in a directory recursively to an S3 bucket.
   * Automatically maps local file paths to S3 object keys using prefix and delimiter configuration.
   *
   * @param options - Configuration including bucket, source directory, filtering, failure handling, and transfer settings.
   *
   * @returns the number of objects that have been uploaded and the number of objects that have failed
   *
   * @alpha
   */
  public uploadAll(options: {
    bucket: string;
    source: string;
    followSymbolicLinks?: boolean;
    recursive?: boolean;
    s3Prefix?: string;
    filter?: (filepath: string) => boolean;
    s3Delimiter?: string;
    putObjectRequestCallback?: (putObjectRequest: PutObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{ objectsUploaded: number; objectsFailed: number }> {
    throw new Error("Method not implemented.");
  }

  /**
   * Downloads all objects in a bucket to a local directory.
   * Uses ListObjectsV2 to retrieve objects and automatically maps S3 object keys to local file paths.
   *
   * @param options - Configuration including bucket, destination directory, filtering, failure handling, and transfer settings.
   *
   * @returns The number of objects that have been downloaded and the number of objects that have failed
   *
   * @alpha
   */
  public downloadAll(options: {
    bucket: string;
    destination: string;
    s3Prefix?: string;
    s3Delimiter?: string;
    recursive?: boolean;
    filter?: (object?: S3Object) => boolean;
    getObjectRequestCallback?: (getObjectRequest: GetObjectCommandInput) => Promise<void>;
    failurePolicy?: (error?: unknown) => Promise<void>;
    transferOptions?: TransferOptions;
  }): Promise<{ objectsDownloaded: number; objectsFailed: number }> {
    throw new Error("Method not implemented.");
  }

  /**
   * Downloads object using part-based strategy with concurrent part requests.
   *
   * @internal
   */
  protected async downloadByPart(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">
  ): Promise<{ totalSize: number | undefined }> {
    let totalSize: number | undefined;
    this.checkAborted(transferOptions);

    if (request.Range == null) {
      const initialPartRequest = {
        ...request,
        PartNumber: 1,
      };
      try {
        const initialPart = await this.s3ClientInstance.send(new GetObjectCommand(initialPartRequest), transferOptions);
        const initialETag = initialPart.ETag ?? undefined;
        await internalEventHandler.afterInitialGetObject();
        const partSize = initialPart.ContentLength;
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
          const concurrentRequests = [];
          const concurrentRequestInputs = [];

          for (let part = 2; part <= initialPart.PartsCount!; part++) {
            this.checkAborted(transferOptions);
            const getObjectRequest = {
              ...request,
              PartNumber: part,
              IfMatch: initialETag,
            };

            const getObject = this.s3ClientInstance
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
              });

            concurrentRequests.push(getObject);
            concurrentRequestInputs.push(getObjectRequest);
            partCount++;
          }

          try {
            // Add promise streams to streams array ONLY if all are resolved
            const responses = await Promise.all(concurrentRequests);
            for (let i = 0; i < responses.length; i++) {
              streams.push(Promise.resolve(responses[i]));
              requests.push(concurrentRequestInputs[i]);
            }
          } catch (error) {
            this.dispatchTransferFailedEvent(request, totalSize, error as Error);
            throw error;
          }

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
        };

        const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
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
    };
  }

  /**
   * Downloads object using range-based strategy with concurrent range requests.
   *
   * @internal
   */
  protected async downloadByRange(
    request: DownloadRequest,
    transferOptions: TransferOptions,
    streams: Promise<StreamingBlobPayloadOutputTypes>[],
    requests: GetObjectCommandInput[],
    metadata: Omit<DownloadResponse, "Body">
  ): Promise<{ totalSize: number | undefined }> {
    this.checkAborted(transferOptions);

    const headResponse = await this.s3ClientInstance.send(
      new HeadObjectCommand({ Bucket: request.Bucket, Key: request.Key }),
      transferOptions
    );

    if (headResponse.ContentLength === 0) {
      const getObjectRequest = { ...request };
      const response = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);

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
      };
      const initialRangeGet = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
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
    let actualRequestCount = 1;

    const concurrentRequests = [];
    const concurrentRequestInputs = [];

    while (remainingLength > 0) {
      this.checkAborted(transferOptions);

      const range = `bytes=${left}-${right}`;
      const getObjectRequest: GetObjectCommandInput = {
        ...request,
        Range: range,
        IfMatch: initialETag,
      };

      const getObject = this.s3ClientInstance
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
        });

      concurrentRequests.push(getObject);
      concurrentRequestInputs.push(getObjectRequest);
      actualRequestCount++;

      left = right + 1;
      right = Math.min(left + S3TransferManager.MIN_PART_SIZE - 1, maxRange);
      remainingLength = totalSize ? Math.min(right - left + 1, Math.max(0, totalSize - left)) : 0;
    }

    if (concurrentRequests.length > 0) {
      try {
        // Add promise streams to streams array ONLY if all are resolved
        const responses = await Promise.all(concurrentRequests);
        for (let i = 0; i < responses.length; i++) {
          streams.push(Promise.resolve(responses[i]));
          requests.push(concurrentRequestInputs[i]);
        }
      } catch (error) {
        this.dispatchTransferFailedEvent(request, totalSize, error as Error);
        throw error;
      }
    }

    if (expectedRequestCount !== actualRequestCount) {
      throw new Error(
        `The number of ranged GET requests sent (${actualRequestCount}) does not match the expected number (${expectedRequestCount})`
      );
    }

    return {
      totalSize,
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
   * Throws AbortError if transfer has been aborted via signal.
   *
   * @internal
   */
  private checkAborted(transferOptions?: TransferOptions): void {
    if (transferOptions?.abortSignal?.aborted) {
      throw Object.assign(new Error("Download aborted."), { name: "AbortError" });
    }
  }

  /**
   * Validates configuration parameters meet minimum requirements.
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
}

/**
 * Internal event handler for download lifecycle hooks.
 *
 * @internal
 */
export const internalEventHandler = {
  async afterInitialGetObject() {},
};
