import { S3, S3Client } from "@aws-sdk/client-s3";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { Readable } from "node:stream";
import { beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { S3TransferManager } from "./S3TransferManager";
import type { TransferCompleteEvent, TransferEvent } from "./types";
import { CannedFailurePolicy } from "./types";
import { WorkerHttpHandler } from "./worker-http-handler";

describe("S3TransferManager Unit Tests", () => {
  let client: S3;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    region = "us-west-2";
    Bucket = `S3TransferManager-test-${Date.now()}`;

    client = new S3({
      region,
      responseChecksumValidation: "WHEN_REQUIRED",
    });
  });

  describe("S3TransferManager Constructor", () => {
    it("Should create an instance of S3TransferManager with defaults given no parameters", () => {
      const tm = new S3TransferManager() as any;

      expect(tm.s3).toBeInstanceOf(S3Client);
      expect(tm.targetPartSizeBytes).toBe(8 * 1024 * 1024);
      expect(tm.multipartUploadThresholdBytes).toBe(16 * 1024 * 1024);
      expect(tm.requestChecksumCalculation).toBe("WHEN_SUPPORTED");
      expect(tm.responseChecksumValidation).toBe("WHEN_SUPPORTED");
      expect(tm.multipartDownloadType).toBe("PART");
      expect(tm.eventListeners).toEqual({
        transferInitiated: [],
        bytesTransferred: [],
        transferComplete: [],
        transferFailed: [],
      });
    });

    it("Should create an instance of S3TransferManager with all given parameters", () => {
      const eventListeners = {
        transferInitiated: [() => console.log("transferInitiated")],
        bytesTransferred: [() => console.log("bytesTransferred")],
        transferComplete: [() => console.log("transferComplete")],
        transferFailed: [() => console.log("transferFailed")],
      };
      const tm = new S3TransferManager({
        s3: client,
        targetPartSizeBytes: 8 * 1024 * 1024,
        requestChecksumCalculation: "WHEN_SUPPORTED",
        responseChecksumValidation: "WHEN_REQUIRED",
        multipartDownloadType: "RANGE",
        eventListeners: eventListeners,
      }) as any;

      expect(tm.s3).toBe(client);
      expect(tm.targetPartSizeBytes).toBe(8 * 1024 * 1024);
      expect(tm.requestChecksumCalculation).toBe("WHEN_SUPPORTED");
      expect(tm.responseChecksumValidation).toBe("WHEN_REQUIRED");
      expect(tm.multipartDownloadType).toBe("RANGE");
      expect(tm.eventListeners).toEqual(eventListeners);
    });

    it("Should throw an error given targetPartSizeBytes smaller than minimum", () => {
      expect(() => {
        new S3TransferManager({
          targetPartSizeBytes: 2 * 1024 * 1024,
        });
      }).toThrow(`targetPartSizeBytes must be at least ${5 * 1024 * 1024} bytes`);
    });
  });

  describe("EventListener functions", () => {
    let tm: S3TransferManager;

    function initiated(event: TransferEvent) {
      return {
        request: event.request,
        snapshot: event.snapshot,
      };
    }
    function transferring(event: TransferEvent) {
      return {
        request: event.request,
        snapshot: event.snapshot,
      };
    }
    function completed(event: TransferCompleteEvent) {
      return {
        request: event.request,
        snapshot: event.snapshot,
        response: event.response,
      };
    }
    function failed(event: TransferEvent) {
      return {
        request: event.request,
        snapshot: event.snapshot,
      };
    }

    beforeEach(async () => {
      tm = new S3TransferManager({
        s3: client,
      });
    });

    describe("addEventListener()", () => {
      it("Should register callbacks for all supported event types", () => {
        tm.addEventListener("transferInitiated", initiated);
        tm.addEventListener("bytesTransferred", transferring);
        tm.addEventListener("transferComplete", completed);
        tm.addEventListener("transferFailed", failed);

        expect((tm as any).eventListeners).toEqual({
          transferInitiated: [initiated],
          bytesTransferred: [transferring],
          transferComplete: [completed],
          transferFailed: [failed],
        });
      });

      it("Should handle registering the same listener multiple times", () => {
        const callback1 = vi.fn();
        tm.addEventListener("transferInitiated", callback1);
        tm.addEventListener("transferInitiated", callback1);

        expect((tm as any).eventListeners.transferInitiated).toEqual([callback1, callback1]);
      });

      it("Should handle different callbacks for the same event type", () => {
        const callback1 = vi.fn();
        const callback2 = vi.fn();

        tm.addEventListener("bytesTransferred", callback1);
        tm.addEventListener("bytesTransferred", callback2);

        expect((tm as any).eventListeners.bytesTransferred).toEqual([callback1, callback2]);
      });

      it("Should handle object-style callbacks", () => {
        const objectCallback = {
          handleEvent: vi.fn(),
        };
        tm.addEventListener("transferInitiated", objectCallback as any);

        expect((tm as any).eventListeners.transferInitiated).toEqual([objectCallback]);
      });

      it("Should handle a mix of object-style callbacks and function for the same event", () => {
        const callback = vi.fn();
        const objectCallback = {
          handleEvent: vi.fn(),
        };
        tm.addEventListener("transferInitiated", objectCallback as any);
        tm.addEventListener("transferInitiated", callback);

        expect((tm as any).eventListeners.transferInitiated).toEqual([objectCallback, callback]);
      });

      it("Should throw an error for an invalid event type", () => {
        expect(() => {
          (tm as any).addEventListener("invalidEvent", initiated);
        }).toThrow("Unknown event type: invalidEvent");
      });

      it("Should handle options.once correctly, running the listener at most once.", () => {
        const mockCallback = vi.fn();
        tm.addEventListener("transferInitiated", mockCallback, { once: true });

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);
        tm.dispatchEvent(event);

        expect(mockCallback).toHaveBeenCalledTimes(1);
      });

      it("Should not add listener if included AbortSignal is aborted", () => {
        const controller = new AbortController();
        const callback = vi.fn();
        controller.abort();
        tm.addEventListener("transferInitiated", callback, { signal: controller.signal });
        expect((tm as any).eventListeners.transferInitiated).toEqual([]);
      });

      it("Should remove listener after included AbortSignal was aborted", () => {
        const controller = new AbortController();
        const callback = vi.fn();
        tm.addEventListener("transferInitiated", callback, { signal: controller.signal });

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });
        tm.dispatchEvent(event);

        expect(callback).toHaveBeenCalledTimes(1);
        expect((tm as any).eventListeners.transferInitiated).toEqual([callback]);

        controller.abort();
        expect((tm as any).eventListeners.transferInitiated).toEqual([]);
      });

      it("Should clean up abort listeners and store cleanup functions in WeakMap", () => {
        const controller = new AbortController();
        const callback = vi.fn();

        tm.addEventListener("transferInitiated", callback, { signal: controller.signal });

        expect((tm as any).eventListeners.transferInitiated).toEqual([callback]);
        expect((tm as any).abortCleanupFunctions.has(controller.signal)).toBe(true);

        const cleanupFn = (tm as any).abortCleanupFunctions.get(controller.signal);
        cleanupFn();
        (tm as any).abortCleanupFunctions.delete(controller.signal);

        expect((tm as any).abortCleanupFunctions.has(controller.signal)).toBe(false);
        controller.abort();
        expect((tm as any).eventListeners.transferInitiated).toEqual([callback]);
      });

      it("Should handle boolean options parameter", () => {
        tm.addEventListener("transferInitiated", initiated, true);
        expect((tm as any).eventListeners.transferInitiated).toContain(initiated);
      });

      it("Should handle null callback", () => {
        expect(() => {
          (tm as any).addEventListener("transferInitiated", null);
        }).not.toThrow();
      });

      it("Should handle object-style callback with handleEvent", () => {
        const objectCallback = { handleEvent: vi.fn() };
        tm.addEventListener("transferInitiated", objectCallback as any);
        expect((tm as any).eventListeners.transferInitiated).toContain(objectCallback);
      });
    });

    describe("dispatchEvent()", () => {
      it("Should dispatch an event", () => {
        const mockCallback = vi.fn();
        tm.addEventListener("bytesTransferred", mockCallback);

        const event = Object.assign(new Event("bytesTransferred"), {
          request: {},
          snapshot: {},
        });

        const result = tm.dispatchEvent(event);

        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(event);
        expect(result).toBe(true);
      });

      it("Should dispatch an event with request, snapshot, and response information", () => {
        const mockCompleted = vi.fn().mockImplementation(completed);
        tm.addEventListener("transferComplete", mockCompleted);

        const event = Object.assign(new Event("transferComplete"), {
          request: { bucket: "test" },
          snapshot: { bytes: 100 },
          response: { status: "success" },
        });

        tm.dispatchEvent(event);

        expect(mockCompleted).toHaveBeenCalledWith(event);
        expect(mockCompleted).toHaveReturnedWith({
          request: { bucket: "test" },
          snapshot: { bytes: 100 },
          response: { status: "success" },
        });
      });

      it("Should call multiple listeners for the same event type", () => {
        const mockCallback = vi.fn();
        tm.addEventListener("transferInitiated", mockCallback);
        tm.addEventListener("transferInitiated", mockCallback);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        const result = tm.dispatchEvent(event);

        expect(mockCallback).toHaveBeenCalledTimes(2);
        expect(mockCallback).toHaveBeenCalledWith(event);
        expect(result).toBe(true);
      });

      it("Should call listeners in the order they were added", () => {
        const callOrder: number[] = [];
        const mockCallback1 = vi.fn(() => callOrder.push(1));
        const mockCallback2 = vi.fn(() => callOrder.push(2));
        const mockCallback3 = vi.fn(() => callOrder.push(3));

        tm.addEventListener("transferInitiated", mockCallback1);
        tm.addEventListener("transferInitiated", mockCallback2);
        tm.addEventListener("transferInitiated", mockCallback3);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(callOrder).toEqual([1, 2, 3]);
      });

      it("Should handle object-style callbacks with handleEvent method", () => {
        const mockCallback = vi.fn();
        const objectCallback = {
          handleEvent: mockCallback,
        };
        tm.addEventListener("transferInitiated", objectCallback as any);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(event);
      });

      it("Should handle events with no registered listeners", () => {
        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });
        const result = tm.dispatchEvent(event);

        expect(result).toBe(true);
      });

      it("Should handle unknown event types", () => {
        const event = Object.assign(new Event("unknownEvent"), {
          request: {},
          snapshot: {},
        });

        const results = tm.dispatchEvent(event);
        expect(results).toBe(true);
      });

      it("Should handle a mix of object-style callbacks and functions", () => {
        const callback = vi.fn();
        const objectCallback = {
          handleEvent: vi.fn(),
        };
        tm.addEventListener("transferInitiated", objectCallback as any);
        tm.addEventListener("transferInitiated", callback);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(objectCallback.handleEvent).toHaveBeenCalledTimes(1);
        expect(objectCallback.handleEvent).toHaveBeenCalledWith(event);
        expect(callback).toHaveBeenCalledTimes(1);
        expect(callback).toHaveBeenCalledWith(event);
      });
    });

    describe("removeEventListener()", () => {
      it("Should remove only the specified listener, leaving other intact", () => {
        const callback1 = vi.fn();
        const callback2 = vi.fn();
        tm.addEventListener("transferInitiated", callback1);
        tm.addEventListener("transferInitiated", callback2);

        tm.removeEventListener("transferInitiated", callback1);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).toHaveBeenCalledTimes(1);
      });

      it("Should remove object-style callback with handleEvent", () => {
        const objectCallback = { handleEvent: vi.fn() };
        tm.addEventListener("transferInitiated", objectCallback as any);
        tm.removeEventListener("transferInitiated", objectCallback as any);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);
        expect(objectCallback.handleEvent).not.toHaveBeenCalled();
      });

      it("Should remove all instance of the same callback", () => {
        const callback = vi.fn();
        tm.addEventListener("transferInitiated", callback);
        tm.addEventListener("transferInitiated", callback);

        tm.removeEventListener("transferInitiated", callback);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(callback).not.toHaveBeenCalled();
      });

      it("Should handle removing non-existing listener gracefully", () => {
        const callback = vi.fn();
        expect(() => {
          tm.removeEventListener("transferInitiated", callback);
        }).not.toThrow();
      });

      it("Should handle removing from an event type with no listeners gracefully", () => {
        const callback = vi.fn();
        tm.removeEventListener("transferInitiated", callback);

        const event = Object.assign(new Event("transferInitiated"), {
          request: {},
          snapshot: {},
        });

        tm.dispatchEvent(event);

        expect(callback).not.toHaveBeenCalled();
      });

      it("Should handle null callback parameter", () => {
        expect(() => {
          tm.removeEventListener("transferInitiated", null as any);
        }).not.toThrow();
      });
    });
  });

  describe("iterateListeners()", () => {
    let tm: S3TransferManager;

    beforeEach(async () => {
      tm = new S3TransferManager({
        s3: client,
      });
    });

    it("Should iterate over all listeners given a TransferManager's object of event listeners", () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();
      const callback3 = vi.fn();

      const eventListeners = {
        transferInitiated: [callback1],
        bytesTransferred: [callback2, callback3],
        transferComplete: [],
        transferFailed: [],
      };

      const results = Array.from((tm as any).iterateListeners(eventListeners)) as any[];

      expect(results).toHaveLength(3);
      expect(results[0][0]).toEqual({ eventType: "transferInitiated", callback: callback1 });
      expect(results[1][0]).toEqual({ eventType: "bytesTransferred", callback: callback2 });
      expect(results[2][0]).toEqual({ eventType: "bytesTransferred", callback: callback3 });
    });

    it("Should handle empty event listeners object", () => {
      const eventListeners = {
        transferInitiated: [],
        bytesTransferred: [],
        transferComplete: [],
        transferFailed: [],
      };

      const results = Array.from((tm as any).iterateListeners(eventListeners)) as any[];

      expect(results).toHaveLength(0);
    });

    it("Should iterate over a mix of functions and objects with handleEvent callback types.", () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();
      const objectCallback = {
        handleEvent: vi.fn(),
      };

      const eventListeners = {
        transferInitiated: [callback1],
        bytesTransferred: [],
        transferComplete: [],
        transferFailed: [callback2, objectCallback],
      };

      const results = Array.from((tm as any).iterateListeners(eventListeners)) as any[];

      expect(results).toHaveLength(3);
      expect(results[0][0]).toEqual({ eventType: "transferInitiated", callback: callback1 });
      expect(results[1][0]).toEqual({ eventType: "transferFailed", callback: callback2 });
      expect(results[2][0]).toEqual({ eventType: "transferFailed", callback: objectCallback });
    });

    it("Should handle event listeners with duplicate callbacks in the same event type", () => {
      const callback = vi.fn();

      const eventListeners = {
        transferInitiated: [callback, callback],
        bytesTransferred: [],
        transferComplete: [callback, callback],
        transferFailed: [],
      };

      const results = Array.from((tm as any).iterateListeners(eventListeners)) as any[];

      expect(results).toHaveLength(4);
      for (let i = 0; i < results.length; i++) {
        expect(results[i][0]).toEqual({ eventType: results[i][0].eventType, callback });
      }
    });

    it("Should return empty iterator when no callbacks are present", () => {
      const eventListeners = {};

      const results = Array.from((tm as any).iterateListeners(eventListeners)) as any[];

      expect(results).toHaveLength(0);
    });
  });

  describe("validatePartDownload()", () => {
    let tm: any;
    beforeAll(async () => {
      tm = new S3TransferManager() as any;
    }, 120_000);

    it("Should pass correct ranges based on part number without throwing an error", () => {
      const partSize = 5242880;
      const ranges = [
        { partNumber: 1, range: "bytes 0-5242879/13631488" },
        { partNumber: 2, range: "bytes 5242880-10485759/13631488" },
        { partNumber: 3, range: "bytes 10485760-13631487/13631488" },
      ];

      for (const { partNumber, range } of ranges) {
        expect(() => {
          tm.validatePartDownload(range, partNumber, partSize);
        }).not.toThrow();
      }
    });

    it("Should throw error for incorrect start position", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartDownload("bytes 5242881-10485759/13631488", 2, partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 5242881");

      expect(() => {
        tm.validatePartDownload("bytes 5242879-10485759/13631488", 2, partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 5242879");

      expect(() => {
        tm.validatePartDownload("bytes 0-5242879/13631488", 2, partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 0");
    });

    it("Should throw error for incorrect end position", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartDownload("bytes 5242880-10485760/13631488", 2, partSize);
      }).toThrow("Expected part 2 to end at 10485759 but got 10485760");

      expect(() => {
        tm.validatePartDownload("bytes 10485760-13631480/13631488", 3, partSize);
      }).toThrow("Expected part 3 to end at 13631487 but got 13631480");
    });

    it("Should handle last part correctly when not a full part size", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartDownload("bytes 10485760-13631487/13631488", 3, partSize);
      }).not.toThrow();
    });

    it("Should throw error for invalid ContentRange format", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartDownload("invalid-format", 2, partSize);
      }).toThrow("Invalid ContentRange format: invalid-format");
    });

    it("Should throw error for missing ContentRange", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartDownload(undefined, 2, partSize);
      }).toThrow("Missing ContentRange for part 2.");
    });
  });

  describe("validateRangeDownload()", () => {
    let tm: any;
    beforeAll(async () => {
      tm = new S3TransferManager() as any;
    }, 120_000);

    it("Should pass when response range matches request range", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=0-5242879", "bytes 0-5242879/13631488");
      }).not.toThrow();
    });

    it("Should pass when response range ends at total size", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=10485760-13631500", "bytes 10485760-13631487/13631488");
      }).not.toThrow();
    });

    it("Should throw error for missing response range", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=0-5242879", undefined);
      }).toThrow("Missing ContentRange for range bytes=0-5242879.");
    });

    it("Should throw error for invalid response range format", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=0-5242879", "invalid-format");
      }).toThrow("Invalid ContentRange format: invalid-format");
    });

    it("Should throw error for invalid request range format", () => {
      expect(() => {
        tm.validateRangeDownload("invalid-format", "bytes 0-5242879/13631488");
      }).toThrow("Invalid Range format: invalid-format");
    });

    it("Should throw error for incorrect start position", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=0-5242879", "bytes 1-5242879/13631488");
      }).toThrow("Expected range to start at 0 but got 1");
    });

    it("Should throw error for incorrect end position", () => {
      expect(() => {
        tm.validateRangeDownload("bytes=0-5242879", "bytes 0-5242878/13631488");
      }).toThrow("Expected range to end at 5242879 but got 5242878");
    });
  });

  describe("validateUploadPart()", () => {
    let tm: any;
    beforeAll(async () => {
      tm = new S3TransferManager() as any;
    });

    it("should pass for valid non-last part with correct size", () => {
      const partSize = 8 * 1024 * 1024; // 8MB
      const dataPart = {
        data: Buffer.alloc(partSize),
        partNumber: 2,
        lastPart: false,
      };

      expect(() => {
        tm.validateUploadPart(dataPart, partSize);
      }).not.toThrow();
    });

    it("should skip validation for single-part uploads", () => {
      const partSize = 8 * 1024 * 1024;
      const dataPart = {
        data: Buffer.alloc(1024), // Small size
        partNumber: 1,
        lastPart: true,
      };

      expect(() => {
        tm.validateUploadPart(dataPart, partSize);
      }).not.toThrow();
    });

    it("should allow smaller size for last part", () => {
      const partSize = 8 * 1024 * 1024;
      const dataPart = {
        data: Buffer.alloc(1024 * 1024), // 1MB (smaller than partSize)
        partNumber: 5,
        lastPart: true,
      };

      expect(() => {
        tm.validateUploadPart(dataPart, partSize);
      }).not.toThrow();
    });

    it("should throw error when part size doesn't match expected size except for last part", () => {
      const partSize = 8 * 1024 * 1024;
      const dataPart = {
        data: Buffer.alloc(7 * 1024 * 1024), // 7MB (less than expected)
        partNumber: 2,
        lastPart: false,
      };

      expect(() => {
        tm.validateUploadPart(dataPart, partSize);
      }).toThrow(`The byte size for part number 2, size ${7 * 1024 * 1024} does not match expected size ${partSize}`);
    });

    it("should throw error when part has zero content length", () => {
      const partSize = 8 * 1024 * 1024;
      const dataPart = {
        data: Buffer.alloc(0), // Empty buffer
        partNumber: 2,
        lastPart: false,
      };

      expect(() => {
        tm.validateUploadPart(dataPart, partSize);
      }).toThrow(`The byte size for part number 2, size 0 does not match expected size ${partSize}`);
    });
  });

  describe("calculatePartSize()", () => {
    let tm: any;
    beforeAll(async () => {
      tm = new S3TransferManager() as any;
    });

    it("should use targetPartSizeBytes for small files", () => {
      const contentLength = 50 * 1024 * 1024; // 50MB
      const { partSize, expectedPartsCount } = tm.calculatePartSize(contentLength);

      expect(partSize).toBe(8 * 1024 * 1024); // Default 8MB
      expect(expectedPartsCount).toBe(7); // ceil(50/8) = 7
    });

    it("should calculate larger part size for files approaching 10,000 parts limit", () => {
      const contentLength = 100 * 1024 * 1024 * 1024; // 100GB
      const { partSize, expectedPartsCount } = tm.calculatePartSize(contentLength);

      expect(partSize).toBeGreaterThan(8 * 1024 * 1024);
      expect(partSize).toBe(Math.ceil(contentLength / 10_000));
      //expectedPartsCount can be 10,001 due to Math.ceil(contentLength / partSize)
      expect(expectedPartsCount).toBeGreaterThanOrEqual(10_000);
      expect(expectedPartsCount).toBeLessThanOrEqual(10_001);
    });

    it("should handle very large files correctly", () => {
      const contentLength = 5 * 1024 * 1024 * 1024 * 1024; // 5TB
      const { partSize, expectedPartsCount } = tm.calculatePartSize(contentLength);

      expect(partSize).toBe(Math.ceil(contentLength / 10_000));
      expect(expectedPartsCount).toBe(Math.ceil(contentLength / partSize));
      // Note: expectedPartsCount can be 10,001 due to Math.ceil(contentLength / partSize)
      expect(expectedPartsCount).toBeGreaterThanOrEqual(10_000);
      expect(expectedPartsCount).toBeLessThanOrEqual(10_001);
    });

    it("should return correct values for minimum size file", () => {
      const contentLength = 8 * 1024 * 1024; // 8MB (one part)
      const { partSize, expectedPartsCount } = tm.calculatePartSize(contentLength);

      expect(partSize).toBe(8 * 1024 * 1024);
      expect(expectedPartsCount).toBe(1);
    });

    it("should calculate expectedPartsCount correctly when totalBytes is known", () => {
      const contentLength = 15 * 1024 * 1024; // 15MB
      const customPartSize = 5 * 1024 * 1024; // 5MB
      const tm = new S3TransferManager({
        targetPartSizeBytes: customPartSize,
      }) as any;

      const { partSize, expectedPartsCount } = tm.calculatePartSize(contentLength);

      expect(partSize).toBe(customPartSize);
      expect(expectedPartsCount).toBe(3); // 15MB / 5MB = 3 parts
    });
  });

  describe("createConcurrentTaskPool() concurrency", () => {
    it("should default maxConcurrentDownloads to 8 when not provided", () => {
      const tm = new S3TransferManager() as any;
      expect(tm.maxConcurrentDownloads).toBe(8);
    });

    it("should use user-provided maxConcurrentDownloads", () => {
      const tm = new S3TransferManager({ maxConcurrentDownloads: 3 }) as any;
      expect(tm.maxConcurrentDownloads).toBe(3);
    });

    it("should only launch up to maxConcurrent tasks initially", () => {
      const tm = new S3TransferManager({ maxConcurrentDownloads: 3 }) as any;
      let launched = 0;
      const tasks = Array.from({ length: 5 }, () => () => {
        launched++;
        return new Promise(() => {}); // never resolves
      });

      tm.createConcurrentTaskPool(tasks, 3);
      expect(launched).toBe(3);
    });

    it("should launch next task when onStreamConsumed is called", async () => {
      const tm = new S3TransferManager({ maxConcurrentDownloads: 2 }) as any;
      let launched = 0;
      const resolvers: ((v: string) => void)[] = [];
      const tasks = Array.from({ length: 4 }, (_, i) => () => {
        launched++;
        return new Promise<string>((resolve) => {
          resolvers[i] = resolve;
        });
      });

      const { promises, onStreamConsumed } = tm.createConcurrentTaskPool(tasks, 2);
      expect(launched).toBe(2);

      // Resolve first task and signal stream consumed
      resolvers[0]("a");
      await promises[0];
      onStreamConsumed(0);
      expect(launched).toBe(3);

      // Resolve second task and signal stream consumed
      resolvers[1]("b");
      await promises[1];
      onStreamConsumed(1);
      expect(launched).toBe(4);
    });

    it("should stop launching after a task failure", async () => {
      const tm = new S3TransferManager({ maxConcurrentDownloads: 2 }) as any;
      let launched = 0;
      const tasks: (() => Promise<string>)[] = [
        () => {
          launched++;
          return Promise.reject(new Error("fail"));
        },
        () => {
          launched++;
          return new Promise(() => {});
        },
        () => {
          launched++;
          return Promise.resolve("c");
        },
      ];

      const { promises, onStreamConsumed } = tm.createConcurrentTaskPool(tasks, 2);
      expect(launched).toBe(2);

      // Wait for the rejection to propagate
      await promises[0].catch(() => {});

      // After failure, onStreamConsumed should not launch more
      onStreamConsumed(0);
      expect(launched).toBe(2);
    });
  });

  describe("Client-level vs Request-level listeners with mocked uploads", () => {
    let tm: S3TransferManager;
    let mockSend: any;

    beforeEach(() => {
      mockSend = vi.fn().mockResolvedValue({
        ETag: '"mock-etag"',
        $metadata: { httpStatusCode: 200 },
      });

      const mockClient = {
        send: mockSend,
      } as any;

      tm = new S3TransferManager({
        s3: mockClient,
      });
    });

    it("Should fire client-level listener for every upload request", async () => {
      const clientLevelCallback = vi.fn();
      tm.addEventListener("transferComplete", clientLevelCallback);

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content1" });
      await tm.upload({ Bucket: "test-bucket", Key: "file2.txt", Body: "content2" });
      await tm.upload({ Bucket: "test-bucket", Key: "file3.txt", Body: "content3" });

      expect(clientLevelCallback).toHaveBeenCalledTimes(3);
    });

    it("Should fire request-level listener only for that specific request", async () => {
      const requestLevelCallback = vi.fn();

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content1" });

      await tm.upload(
        { Bucket: "test-bucket", Key: "file2.txt", Body: "content2" },
        { eventListeners: { transferComplete: [requestLevelCallback] } }
      );

      await tm.upload({ Bucket: "test-bucket", Key: "file3.txt", Body: "content3" });

      expect(requestLevelCallback).toHaveBeenCalledTimes(1);
    });

    it("Should fire both client-level and request-level listeners when both are registered", async () => {
      const clientCallback = vi.fn();
      const requestCallback = vi.fn();

      tm.addEventListener("transferComplete", clientCallback);

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "a" });
      await tm.upload(
        { Bucket: "test-bucket", Key: "file2.txt", Body: "b" },
        { eventListeners: { transferComplete: [requestCallback] } }
      );
      await tm.upload({ Bucket: "test-bucket", Key: "file3.txt", Body: "c" });

      expect(clientCallback).toHaveBeenCalledTimes(3);
      expect(requestCallback).toHaveBeenCalledTimes(1);
    });

    it("Should fire transferInitiated exactly once per upload", async () => {
      const initiatedCallback = vi.fn();
      tm.addEventListener("transferInitiated", initiatedCallback);

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content" });

      expect(initiatedCallback).toHaveBeenCalledTimes(1);
    });

    it("Should fire transferComplete exactly once per successful upload", async () => {
      const completeCallback = vi.fn();
      tm.addEventListener("transferComplete", completeCallback);

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content" });

      expect(completeCallback).toHaveBeenCalledTimes(1);
    });

    it("Should fire transferFailed exactly once when upload fails", async () => {
      const failedCallback = vi.fn();
      tm.addEventListener("transferFailed", failedCallback);

      mockSend.mockRejectedValueOnce(new Error("Upload failed"));

      await expect(tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content" })).rejects.toThrow(
        "Upload failed"
      );

      expect(failedCallback).toHaveBeenCalledTimes(1);
    });

    it("Should fire bytesTransferred at least once for successful upload", async () => {
      const bytesCallback = vi.fn();
      tm.addEventListener("bytesTransferred", bytesCallback);

      await tm.upload({ Bucket: "test-bucket", Key: "file1.txt", Body: "content" });

      expect(bytesCallback.mock.calls.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe("Threaded multipart upload", () => {
    let sendCallCount = 0;
    let sendCalls: any[] = [];
    let mockSend: any;

    function createMockClient() {
      sendCalls = [];
      mockSend = vi.fn().mockImplementation((command: any) => {
        sendCallCount++;
        sendCalls.push(command);
        const commandName = command.constructor?.name ?? "";
        if (commandName === "CreateMultipartUploadCommand") {
          return Promise.resolve({ UploadId: "test-upload-id", $metadata: {} });
        }
        if (commandName === "UploadPartCommand") {
          return Promise.resolve({
            ETag: `"etag-${command.input?.PartNumber}"`,
            ChecksumCRC32: "abc123==",
            $metadata: {},
          });
        }
        if (commandName === "CompleteMultipartUploadCommand") {
          return Promise.resolve({ ETag: '"final-etag"', $metadata: {} });
        }
        if (commandName === "AbortMultipartUploadCommand") {
          return Promise.resolve({ $metadata: {} });
        }
        return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
      });
      return { send: mockSend, config: {} } as any;
    }

    it("should use explicit workerThreadCount and create WorkerHttpHandler", () => {
      const tm = new S3TransferManager({ workerThreadCount: 4 }) as any;
      expect(tm.workerThreadCount).toBe(4);
      expect(tm.workerHttpHandler).toBeInstanceOf(WorkerHttpHandler);
    });

    it("should not create WorkerHttpHandler when workerThreadCount is 1", () => {
      const tm = new S3TransferManager({ workerThreadCount: 1 }) as any;
      expect(tm.workerThreadCount).toBe(1);
      expect(tm.workerHttpHandler).toBeUndefined();
    });

    it("should route in-memory Buffer body to threadedUploadInParts when workerThreadCount > 1", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      // 20MB buffer - above threshold, triggers multipart
      const body = Buffer.alloc(20 * 1024 * 1024, "x");

      await tm.upload({ Bucket: "test-bucket", Key: "buffer-upload.bin", Body: body });

      // Should have called CreateMPU, UploadPart (x3), CompleteMPU
      const commandNames = sendCalls.map((c: any) => c.constructor?.name);
      expect(commandNames).toContain("CreateMultipartUploadCommand");
      expect(commandNames).toContain("UploadPartCommand");
      expect(commandNames).toContain("CompleteMultipartUploadCommand");
      expect(commandNames.filter((n: string) => n === "UploadPartCommand").length).toBe(3);
    });

    it("should route string body to threadedUploadInParts when workerThreadCount > 1", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      }) as any;

      const body = "x".repeat(20 * 1024 * 1024);

      await tm.upload({ Bucket: "test-bucket", Key: "string-upload.txt", Body: body });

      const commandNames = sendCalls.map((c: any) => c.constructor?.name);
      expect(commandNames).toContain("CreateMultipartUploadCommand");
      expect(commandNames).toContain("UploadPartCommand");
      expect(commandNames).toContain("CompleteMultipartUploadCommand");
    });

    it("should route file body (Readable with .path) to threadedUploadInPartsFromFile when workerThreadCount > 1", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      }) as any;

      // Create a Readable with .path to simulate fs.createReadStream
      const fileStream = new Readable({
        read() {
          this.push(null);
        },
      }) as Readable & { path: string };
      fileStream.path = "/tmp/test-file.bin";

      const contentLength = 20 * 1024 * 1024;

      await tm.upload({
        Bucket: "test-bucket",
        Key: "file-upload.bin",
        Body: fileStream,
        ContentLength: contentLength,
      });

      const commandNames = sendCalls.map((c: any) => c.constructor?.name);
      expect(commandNames).toContain("CreateMultipartUploadCommand");
      expect(commandNames).toContain("UploadPartCommand");
      expect(commandNames).toContain("CompleteMultipartUploadCommand");
    });

    it("should abort multipart upload when abortSignal is triggered mid-upload", async () => {
      const controller = new AbortController();
      let uploadPartCallCount = 0;

      const mockClient = {
        send: vi.fn().mockImplementation((command: any) => {
          const commandName = command.constructor?.name ?? "";
          if (commandName === "CreateMultipartUploadCommand") {
            return Promise.resolve({ UploadId: "abort-test-id", $metadata: {} });
          }
          if (commandName === "UploadPartCommand") {
            uploadPartCallCount++;
            // Abort after first part
            if (uploadPartCallCount === 1) {
              controller.abort();
            }
            return Promise.resolve({ ETag: `"etag-${uploadPartCallCount}"`, ChecksumCRC32: "abc==", $metadata: {} });
          }
          if (commandName === "AbortMultipartUploadCommand") {
            return Promise.resolve({ $metadata: {} });
          }
          return Promise.resolve({ $metadata: {} });
        }),
        config: {},
      } as any;

      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const body = Buffer.alloc(24 * 1024 * 1024, "a");

      await expect(
        tm.upload({ Bucket: "test-bucket", Key: "abort-test.bin", Body: body }, { abortSignal: controller.signal })
      ).rejects.toThrow("Transfer aborted.");

      // Verify AbortMultipartUpload was called
      const abortCalls = mockClient.send.mock.calls.filter(
        (c: any) => c[0].constructor?.name === "AbortMultipartUploadCommand"
      );
      expect(abortCalls.length).toBe(1);
      expect(abortCalls[0][0].input.UploadId).toBe("abort-test-id");
    });

    it("should call AbortMultipartUpload when a part upload fails", async () => {
      const mockClient = {
        send: vi.fn().mockImplementation((command: any) => {
          const commandName = command.constructor?.name ?? "";
          if (commandName === "CreateMultipartUploadCommand") {
            return Promise.resolve({ UploadId: "fail-test-id", $metadata: {} });
          }
          if (commandName === "UploadPartCommand") {
            return Promise.reject(new Error("Network error on part upload"));
          }
          if (commandName === "AbortMultipartUploadCommand") {
            return Promise.resolve({ $metadata: {} });
          }
          return Promise.resolve({ $metadata: {} });
        }),
        config: {},
      } as any;

      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const body = Buffer.alloc(20 * 1024 * 1024, "b");

      await expect(tm.upload({ Bucket: "test-bucket", Key: "fail-test.bin", Body: body })).rejects.toThrow(
        "Network error on part upload"
      );

      const abortCalls = mockClient.send.mock.calls.filter(
        (c: any) => c[0].constructor?.name === "AbortMultipartUploadCommand"
      );
      expect(abortCalls.length).toBe(1);
      expect(abortCalls[0][0].input.UploadId).toBe("fail-test-id");
    });

    it("should fire bytesTransferred event for each part in threaded upload", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const bytesEvents: number[] = [];
      tm.addEventListener("bytesTransferred", (event: any) => {
        bytesEvents.push(event.snapshot.transferredBytes);
      });

      const contentLength = 24 * 1024 * 1024; // 3 parts of 8MB
      const body = Buffer.alloc(contentLength, "c");

      await tm.upload({ Bucket: "test-bucket", Key: "progress-test.bin", Body: body });

      // Should have 3 bytesTransferred events (one per part)
      expect(bytesEvents.length).toBe(3);
      // Final event should report all bytes transferred
      expect(Math.max(...bytesEvents)).toBe(contentLength);
    });

    it("should fire transferFailed event when threaded upload fails", async () => {
      const mockClient = {
        send: vi.fn().mockImplementation((command: any) => {
          const commandName = command.constructor?.name ?? "";
          if (commandName === "CreateMultipartUploadCommand") {
            return Promise.resolve({ UploadId: "event-fail-id", $metadata: {} });
          }
          if (commandName === "UploadPartCommand") {
            return Promise.reject(new Error("Part failed"));
          }
          if (commandName === "AbortMultipartUploadCommand") {
            return Promise.resolve({ $metadata: {} });
          }
          return Promise.resolve({ $metadata: {} });
        }),
        config: {},
      } as any;

      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const failedCallback = vi.fn();
      tm.addEventListener("transferFailed", failedCallback);

      const body = Buffer.alloc(20 * 1024 * 1024, "d");

      await expect(tm.upload({ Bucket: "test-bucket", Key: "event-fail.bin", Body: body })).rejects.toThrow(
        "Part failed"
      );

      expect(failedCallback).toHaveBeenCalledTimes(1);
    });

    it("should use non-threaded uploadInParts when workerThreadCount is 1", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 1,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      }) as any;

      expect(tm.workerHttpHandler).toBeUndefined();

      const body = Buffer.alloc(20 * 1024 * 1024, "e");
      await tm.upload({ Bucket: "test-bucket", Key: "no-thread.bin", Body: body });

      // Still completes multipart upload successfully via non-threaded path
      const commandNames = sendCalls.map((c: any) => c.constructor?.name);
      expect(commandNames).toContain("CreateMultipartUploadCommand");
      expect(commandNames).toContain("UploadPartCommand");
      expect(commandNames).toContain("CompleteMultipartUploadCommand");
    });

    it("should respect maxConcurrentUploads for threaded upload", () => {
      const tm = new S3TransferManager({
        workerThreadCount: 4,
        maxConcurrentUploads: 16,
      }) as any;

      expect(tm.maxConcurrentUploads).toBe(16);
      expect(tm.workerThreadCount).toBe(4);
      expect(tm.workerHttpHandler).toBeInstanceOf(WorkerHttpHandler);
    });

    it("should sort completed parts by PartNumber before calling CompleteMPU", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const body = Buffer.alloc(24 * 1024 * 1024, "f"); // 3 parts
      await tm.upload({ Bucket: "test-bucket", Key: "sort-test.bin", Body: body });

      const completeCalls = sendCalls.filter((c: any) => c.constructor?.name === "CompleteMultipartUploadCommand");
      expect(completeCalls.length).toBe(1);

      const parts = completeCalls[0].input.MultipartUpload.Parts;
      for (let i = 1; i < parts.length; i++) {
        expect(parts[i].PartNumber).toBeGreaterThan(parts[i - 1].PartNumber);
      }
    });

    it("should set ChecksumAlgorithm on CreateMPU when requestChecksumCalculation is WHEN_SUPPORTED", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({
        s3: mockClient,
        workerThreadCount: 2,
        requestChecksumCalculation: "WHEN_SUPPORTED",
        targetPartSizeBytes: 8 * 1024 * 1024,
        multipartUploadThresholdBytes: 8 * 1024 * 1024,
      });

      const body = Buffer.alloc(20 * 1024 * 1024, "g");
      await tm.upload({ Bucket: "test-bucket", Key: "checksum-test.bin", Body: body });

      const createCalls = sendCalls.filter((c: any) => c.constructor?.name === "CreateMultipartUploadCommand");
      expect(createCalls[0].input.ChecksumAlgorithm).toBe("CRC32");
    });
  });

  describe("uploadDirectory", () => {
    let mockSend: any;
    let sendCalls: any[];

    function createMockClient() {
      sendCalls = [];
      mockSend = vi.fn().mockImplementation((command: any) => {
        sendCalls.push(command);
        return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
      });
      return { send: mockSend, config: {} } as any;
    }

    it("should upload only root-level files when recursive is false", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "hello");
      await writeFile(join(tmpDir, "file2.txt"), "world");
      await mkdir(join(tmpDir, "subdir"));
      await writeFile(join(tmpDir, "subdir", "nested1.txt"), "nested1");
      await writeFile(join(tmpDir, "subdir", "nested2.txt"), "nested2");

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient});

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          recursive: false,
        });

        expect(result.objectsUploaded).toBe(2);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should upload all files including nested directories when recursive is true", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "hello");
      await writeFile(join(tmpDir, "file2.txt"), "world");
      await mkdir(join(tmpDir, "subdir"));
      await writeFile(join(tmpDir, "subdir", "nested1.txt"), "nested1");
      await writeFile(join(tmpDir, "subdir", "nested2.txt"), "nested2");

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient});

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          recursive: true,
        });

        expect(result.objectsUploaded).toBe(4);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should apply filter to skip files", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "file to include 1");
      await writeFile(join(tmpDir, "file2.log"), "don't include this file");
      await writeFile(join(tmpDir, "file3.txt"), "file to include 2"); 
      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          filter: (filePath: string) => filePath.endsWith(".txt"),
        });

        expect(result.objectsUploaded).toBe(2);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should prepend s3Prefix to keys", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "root.txt"), "root content");
      await mkdir(join(tmpDir, "subdir"));
      await writeFile(join(tmpDir, "subdir", "nested.txt"), "nested content");

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          s3Prefix: "uploadAll-prefix",
          recursive: true,
        });

        expect(result.objectsUploaded).toBe(2);
        const keys = sendCalls.map((c: any) => c.input.Key);
        expect(keys).toContain("uploadAll-prefix/root.txt");
        expect(keys).toContain("uploadAll-prefix/subdir/nested.txt");
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should terminate on failure with terminate policy", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");
      await writeFile(join(tmpDir, "file2.txt"), "content2");
      await writeFile(join(tmpDir, "file3.txt"), "content3");
      await writeFile(join(tmpDir, "file3.txt"), "content4");

      try {
        const mockClient = {
          send: vi.fn().mockRejectedValue(new Error("S3 error")),
          config: {},
        } as any;
        const tm = new S3TransferManager({ s3: mockClient });

        await expect(
          tm.uploadDirectory({
            bucket: "test-bucket",
            source: tmpDir,
            failurePolicy: CannedFailurePolicy.Terminate,
            maxConcurrency: 2,
          })
        ).rejects.toThrow("S3 error");

        // With maxConcurrency=2, at most 2 files are dispatched before terminate stops picking up new files.
        expect(mockClient.send.mock.calls.length).toBeLessThanOrEqual(2);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should continue on failure with continue policy", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");
      await writeFile(join(tmpDir, "file2.txt"), "content2");

      try {
        let callCount = 0;
        const mockClient = {
          send: vi.fn().mockImplementation(() => {
            callCount++;
            if (callCount === 1) return Promise.reject(new Error("S3 error"));
            return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
          }),
          config: {},
        } as any;
        const tm = new S3TransferManager({ s3: mockClient });

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          failurePolicy: CannedFailurePolicy.Continue,
        });

        expect(result.objectsFailed).toBe(1);
        expect(result.objectsUploaded).toBe(1);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should continue on transient errors and terminate on non-retryable errors with custom policy", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");
      await writeFile(join(tmpDir, "file2.txt"), "content2");
      await writeFile(join(tmpDir, "file3.txt"), "content3");
      await writeFile(join(tmpDir, "file4.txt"), "content4");

      try {
        let callCount = 0;
        const mockClient = {
          send: vi.fn().mockImplementation(() => {
            callCount++;
            if (callCount === 1) {
              const err = new Error("Request timed out");
              err.name = "TimeoutError";
              return Promise.reject(err);
            }
            if (callCount === 2) {
              return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
            }
            if (callCount === 3) {
              const err = new Error("Service unavailable");
              err.name = "ServiceUnavailable";
              return Promise.reject(err);
            }
            return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
          }),
          config: {},
        } as any;
        const tm = new S3TransferManager({ s3: mockClient });

        const customPolicy = async (context: any) => {
          const errorName = context.error?.name;
          if (errorName === "TimeoutError" || errorName === "ServiceUnavailable" || errorName === "ThrottlingException") {
            return "continue" as const;
          }
          return "terminate" as const;
        };

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          failurePolicy: customPolicy,
          maxConcurrency: 1,
        });

        expect(result.objectsFailed).toBe(2);
        expect(result.objectsUploaded).toBe(2);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should terminate when custom policy encounters non-retryable error", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");
      await writeFile(join(tmpDir, "file2.txt"), "content2");
      await writeFile(join(tmpDir, "file3.txt"), "content3");
      await writeFile(join(tmpDir, "file4.txt"), "content4");
      await writeFile(join(tmpDir, "file5.txt"), "content5");

      try {
        let callCount = 0;
        const mockClient = {
          send: vi.fn().mockImplementation(() => {
            callCount++;
            if (callCount === 1) {
              return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
            }
            if (callCount === 2) {
              return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
            }
            if (callCount === 3) {
              const err = new Error("Access Denied");
              err.name = "AccessDenied";
              return Promise.reject(err);
            }
            return Promise.resolve({ ETag: '"mock-etag"', $metadata: {} });
          }),
          config: {},
        } as any;
        const tm = new S3TransferManager({ s3: mockClient });

        const customPolicy = async (context: any) => {
          const errorName = context.error?.name;
          if (errorName === "TimeoutError" || errorName === "ServiceUnavailable" || errorName === "ThrottlingException") {
            return "continue" as const;
          }
          return "terminate" as const;
        };

        await expect(
          tm.uploadDirectory({
            bucket: "test-bucket",
            source: tmpDir,
            failurePolicy: customPolicy,
            maxConcurrency: 1,
          })
        ).rejects.toThrow("Access Denied");

        // file1 and file2 succeeded, file3 failed with AccessDenied → terminate
        // file4 and file5 should not have been attempted
        expect(mockClient.send.mock.calls.length).toBeLessThanOrEqual(3);
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should apply uploadObjectRequestModifier to override request fields", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");
      await writeFile(join(tmpDir, "file2.txt"), "content2");

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          uploadObjectRequestModifier: (req) => ({
            ...req,
            Bucket: "override-bucket"
          }),
        });

        for (const call of sendCalls) {
          expect(call.input.Bucket).toBe("override-bucket");
        }
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should propagate exceptions thrown in uploadObjectRequestModifier", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file1.txt"), "content1");

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        await expect(
          tm.uploadDirectory({
            bucket: "test-bucket",
            source: tmpDir,
            uploadObjectRequestModifier: () => {
              throw new Error("uploadObjectRequestModifier failed");
            },
          })
        ).rejects.toThrow("uploadObjectRequestModifier failed");

        expect(mockClient.send).not.toHaveBeenCalled();
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should throw when source directory does not exist", async () => {
      const mockClient = createMockClient();
      const tm = new S3TransferManager({ s3: mockClient });

      await expect(
        tm.uploadDirectory({
          bucket: "test-bucket",
          source: "/nonexistent/path/abc123",
        })
      ).rejects.toThrow("Directory does not exist");
    });

    it("should abort when transferOptions.abortSignal is triggered", async () => {

      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));
      await writeFile(join(tmpDir, "file.txt"), "content");

      try {
        const ac = new AbortController();
        ac.abort();

        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        await expect(
          tm.uploadDirectory({
            bucket: "test-bucket",
            source: tmpDir,
          }, { abortSignal: ac.signal })
        ).rejects.toThrow("Transfer aborted");
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

    it("should return zero counts for empty directory", async () => {
      const tmpDir = await mkdtemp(join(tmpdir(), "tm-uploadDir-test-"));

      try {
        const mockClient = createMockClient();
        const tm = new S3TransferManager({ s3: mockClient });

        const result = await tm.uploadDirectory({
          bucket: "test-bucket",
          source: tmpDir,
          recursive: true,
        });

        expect(result.objectsUploaded).toBe(0);
        expect(result.objectsFailed).toBe(0);
        expect(mockClient.send).not.toHaveBeenCalled();
      } finally {
        await rm(tmpDir, { recursive: true });
      }
    });

  });

});
