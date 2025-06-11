import type {
  _Object as S3Object,
  ChecksumAlgorithm,
  GetObjectCommandInput,
  PutObjectCommandInput,
} from "@aws-sdk/client-s3";
import { GetObjectCommand, HeadObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getChecksum } from "@aws-sdk/middleware-flexible-checksums/dist-types/getChecksum";
import { ChecksumConstructor, StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { Checksum } from "@smithy/types";

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
  public addEventListener(
    type: string,
    callback: EventListener | null,
    options?: AddEventListenerOptions | boolean
  ): void;
  public addEventListener(
    type: unknown,
    callback: EventListener<Event>,
    options?: AddEventListenerOptions | boolean
  ): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (!listeners) {
      throw new Error(`Unknown event type: ${eventType}`);
    }

    // TODO: Add support for AbortSignal

    const once = typeof options !== "boolean" && options?.once;
    let updatedCallback = callback;
    if (once) {
      updatedCallback = (event: any) => {
        if (typeof callback === "function") {
          callback(event);
        } else {
          callback.handleEvent(event);
        }
        this.removeEventListener(eventType, updatedCallback);
      };
    }

    if (eventType === "transferInitiated" || eventType === "bytesTransferred" || eventType === "transferFailed") {
      listeners.push(updatedCallback as EventListener<TransferEvent>);
    } else if (eventType === "transferComplete") {
      (listeners as EventListener<TransferCompleteEvent>[]).push(
        updatedCallback as EventListener<TransferCompleteEvent>
      );
    }
  }

  public dispatchEvent(event: Event & TransferEvent): boolean;
  public dispatchEvent(event: Event & TransferCompleteEvent): boolean;
  public dispatchEvent(event: Event): boolean;
  public dispatchEvent(event: any): boolean {
    const eventType = event.type;
    const listeners = this.eventListeners[eventType as keyof TransferEventListeners];

    if (listeners) {
      for (const callback of listeners) {
        if (typeof callback === "function") {
          callback(event);
        } else {
          callback.handleEvent?.(event);
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
    callback: EventListener | null,
    options?: RemoveEventListenerOptions | boolean
  ): void;
  public removeEventListener(type: unknown, callback: unknown, options?: unknown): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    if (listeners) {
      if (eventType === "transferInitiated" || eventType === "bytesTransferred" || eventType === "transferFailed") {
        const eventListener = callback as EventListener<TransferEvent>;
        const index = listeners.indexOf(eventListener);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      } else if (eventType === "transferComplete") {
        const eventListener = callback as EventListener<TransferCompleteEvent>;
        const index = (listeners as EventListener<TransferCompleteEvent>[]).indexOf(eventListener);
        if (index !== -1) {
          (listeners as EventListener<TransferCompleteEvent>[]).splice(index, 1);
        }
      } else {
        throw new Error(`Unknown event type: ${type}`);
      }
    }
  }

  public upload(request: UploadRequest, transferOptions?: TransferOptions): Promise<UploadResponse> {
    throw new Error("Method not implemented.");
  }

  public async download(request: DownloadRequest, transferOptions?: TransferOptions): Promise<DownloadResponse> {
    const metadata = {} as Omit<DownloadResponse, "Body">;
    const streams = [] as StreamingBlobPayloadOutputTypes[];
    const requests = [] as GetObjectCommandInput[];

    const partNumber = request.PartNumber;
    const range = request.Range;
    let totalSize: number | undefined;

    if (transferOptions?.eventListeners) {
      for await (const listeners of this.iterateListeners(transferOptions?.eventListeners)) {
        for (const listener of listeners) {
          this.addEventListener(listener.eventType, listener.callback as EventListener);
        }
      }
    }

    // TODO: Ensure download operation is treated as single object download when partNumber is provided regardless of multipartDownloadType setting
    if (typeof partNumber === "number") {
      const getObjectRequest = {
        ...request,
        PartNumber: partNumber,
      };
      const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);

      this.dispatchEvent(
        Object.assign(new Event("transferInitiated"), {
          request,
          snapshot: {
            transferredBytes: 0,
            totalBytes: getObject.ContentLength,
          },
        })
      );

      if (getObject.Body) {
        streams.push(getObject.Body);
        requests.push(getObjectRequest);
      }
      this.assignMetadata(metadata, getObject);
    } else if (this.multipartDownloadType === "PART") {
      if (range == null) {
        const initialPartRequest = {
          ...request,
          PartNumber: 1,
        };
        const initialPart = await this.s3ClientInstance.send(new GetObjectCommand(initialPartRequest), transferOptions);
        const initialETag = initialPart.ETag ?? undefined;
        totalSize = initialPart.ContentRange ? parseInt(initialPart.ContentRange.split("/")[1]) : undefined;

        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (initialPart.Body) {
          streams.push(initialPart.Body);
          requests.push(initialPartRequest);
        }
        this.assignMetadata(metadata, initialPart);

        if (initialPart.PartsCount! > 1) {
          let previousPart = initialPart;
          for (let part = 2; part <= initialPart.PartsCount!; part++) {
            const getObjectRequest = {
              ...request,
              PartNumber: part,
              IfMatch: !request.VersionId ? initialETag : undefined,
            };
            const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);

            if (getObject.ContentRange && previousPart.ContentRange) {
              this.validateExpectedRanges(previousPart.ContentRange, getObject.ContentRange, part);
            }

            if (getObject.Body) {
              streams.push(getObject.Body);
              requests.push(getObjectRequest);
            }
            this.assignMetadata(metadata, getObject);
            previousPart = getObject;
          }
        }
      } else {
        const getObjectRequest = {
          ...request,
        };
        const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);
        totalSize = getObject.ContentRange ? parseInt(getObject.ContentRange.split("/")[1]) : undefined;

        this.dispatchTransferInitiatedEvent(request, totalSize);
        if (getObject.Body) {
          streams.push(getObject.Body);
          requests.push(getObjectRequest);
        }
        this.assignMetadata(metadata, getObject);
      }
    } else if (this.multipartDownloadType === "RANGE") {
      let initialETag = undefined;
      let left = 0;
      let right = S3TransferManager.MIN_PART_SIZE;
      let maxRange = Infinity;

      if (range != null) {
        const [userRangeLeft, userRangeRight] = range.replace("bytes=", "").split("-").map(Number);

        maxRange = userRangeRight;
        left = userRangeLeft;
        right = Math.min(userRangeRight, left + S3TransferManager.MIN_PART_SIZE);
      }

      let remainingLength = 1;
      let transferInitiatedEventDispatched = false;

      // TODO: Validate ranges for if multipartDownloadType === "RANGE"
      while (remainingLength > 0) {
        const range = `bytes=${left}-${right}`;
        const getObjectRequest: GetObjectCommandInput = {
          ...request,
          Range: range,
          IfMatch: transferInitiatedEventDispatched && !request.VersionId ? initialETag : undefined,
        };
        const getObject = await this.s3ClientInstance.send(new GetObjectCommand(getObjectRequest), transferOptions);

        if (!transferInitiatedEventDispatched) {
          totalSize = getObject.ContentRange ? parseInt(getObject.ContentRange.split("/")[1]) : undefined;

          this.dispatchTransferInitiatedEvent(request, totalSize);
          initialETag = getObject.ETag ?? undefined;
          transferInitiatedEventDispatched = true;
        }

        if (getObject.Body) {
          streams.push(getObject.Body);
          requests.push(getObjectRequest);

          // TODO:
          // after completing SEP requirements:
          // - acquire lock on webstreams in the same
          // -  synchronous frame as they are opened or else
          // - the connection might be closed too early.
          if (typeof (getObject.Body as ReadableStream).getReader === "function") {
            const reader = (getObject.Body as any).getReader();
            (getObject.Body as any).getReader = function () {
              return reader;
            };
          }
        }
        this.assignMetadata(metadata, getObject);

        left = right + 1;
        right = Math.min(left + S3TransferManager.MIN_PART_SIZE, maxRange);

        remainingLength = Math.min(
          right - left,
          Math.max(0, (getObject.ContentLength ?? 0) - S3TransferManager.MIN_PART_SIZE)
        );
      }
    }

    const responseBody = joinStreams(streams, {
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
            response: {
              ...metadata,
              Body: responseBody,
            },
            snapshot: {
              transferredBytes: byteLength,
              totalBytes: totalSize,
            },
          })
        );
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
      },
    });

    const response = {
      ...metadata,
      Body: responseBody,
    };

    return response;
  }

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

  private assignMetadata(container: any, response: any) {
    for (const key in response) {
      if (key === "Body") {
        continue;
      }
      container[key] = response[key];
    }
  }

  private validateConfig(): void {
    if (this.targetPartSizeBytes < S3TransferManager.MIN_PART_SIZE) {
      throw new Error(`targetPartSizeBytes must be at least ${S3TransferManager.MIN_PART_SIZE} bytes`);
    }
  }

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
   * For debugging purposes
   *
   * @internal
   */
  private logCallbackCount(type: unknown): void {
    const eventType = type as keyof TransferEventListeners;
    const listeners = this.eventListeners[eventType];

    console.log(`Callback count for ${eventType}: `);
    let count = 0;
    if (listeners) {
      for (const callbacks of listeners) {
        count++;
      }
    }
    console.log(count);
  }

  private async *iterateListeners(eventListeners: TransferEventListeners) {
    for (const eventType in eventListeners) {
      const listeners = eventListeners[eventType as keyof TransferEventListeners];
      if (listeners) {
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

  private validateExpectedRanges(previousPart: string, currentPart: string, partNum: number) {
    const parseContentRange = (range: string) => {
      const match = range.match(/bytes (\d+)-(\d+)\/(\d+)/);
      if (!match) throw new Error(`Invalid ContentRange format: ${range}`);
      return {
        start: parseInt(match[1]),
        end: parseInt(match[2]),
        total: parseInt(match[3]),
      };
    };

    // TODO: throw error for incomplete download.
    // Ex: final part and 8 bytes short should throw error -> "bytes 10485760-13631480/13631488"

    try {
      const previous = parseContentRange(previousPart);
      const current = parseContentRange(currentPart);

      const expectedStart = previous.end + 1;
      const prevPartSize = previous.end - previous.start + 1;
      const currPartSize = current.end - current.start + 1;

      if (current.start !== expectedStart) {
        throw new Error(`Expected part ${partNum} to start at ${expectedStart} but got ${current.start}`);
      }

      // console.log(currPartSize < prevPartSize);
      // console.log(current.end !== current.total - 1);
      if (currPartSize < prevPartSize && current.end !== current.total - 1) {
        throw new Error(
          `Final part did not cover total range of ${current.total}. Expected range of bytes ${current.start}-${
            currPartSize - 1
          }`
        );
      }
    } catch (error) {
      throw new Error(`Range validation failed: ${error.message}`);
    }
  }
}
