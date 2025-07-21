import { S3, S3Client } from "@aws-sdk/client-s3";
import { TransferCompleteEvent, TransferEvent } from "@aws-sdk/lib-storage/dist-types/s3-transfer-manager/types";
import { StreamingBlobPayloadOutputTypes } from "@smithy/types";
import { Readable } from "stream";
import { beforeAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getIntegTestResources } from "../../../../tests/e2e/get-integ-test-resources";
import { iterateStreams, joinStreams } from "./join-streams";
import { S3TransferManager } from "./S3TransferManager";

/**
 * Unit Tests:
 * - addEventListener()
 * - dispatchEvent()
 * - removeEventListener()
 * - TM Constructor
 * - *iterateListeners()
 * - joinStreams()
 * - iterateStreams()
 * - validateExpectedRanges()
 */

describe("S3TransferManager Unit Tests", () => {
  let client: S3;
  let Bucket: string;
  let region: string;

  beforeAll(async () => {
    const integTestResourcesEnv = await getIntegTestResources();
    Object.assign(process.env, integTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;
    Bucket = process?.env?.AWS_SMOKE_TEST_BUCKET as string;
    void getIntegTestResources;

    // region = "us-west-1";
    // Bucket = "lukachad-us-west-2";

    client = new S3({
      region,
      responseChecksumValidation: "WHEN_REQUIRED",
    });
  });
  describe("S3TransferManager Constructor", () => {
    it("Should create an instance of S3TransferManager with defaults given no parameters", () => {
      const tm = new S3TransferManager() as any;

      expect(tm.s3ClientInstance).toBeInstanceOf(S3Client);
      expect(tm.targetPartSizeBytes).toBe(8 * 1024 * 1024);
      expect(tm.multipartUploadThresholdBytes).toBe(16 * 1024 * 1024);
      expect(tm.checksumValidationEnabled).toBe(true);
      expect(tm.checksumAlgorithm).toBe("CRC32");
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
        s3ClientInstance: client,
        targetPartSizeBytes: 8 * 1024 * 1024,
        checksumValidationEnabled: true,
        checksumAlgorithm: "CRC32",
        multipartDownloadType: "RANGE",
        eventListeners: eventListeners,
      }) as any;

      expect(tm.s3ClientInstance).toBe(client);
      expect(tm.targetPartSizeBytes).toBe(8 * 1024 * 1024);
      expect(tm.checksumValidationEnabled).toBe(true);
      expect(tm.checksumAlgorithm).toBe("CRC32");
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
        s3ClientInstance: client,
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
        s3ClientInstance: client,
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

    it("Should handle event lisetners with duplicate callbacks in the same event type", () => {
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

  describe("validatePartRange()", () => {
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
          tm.validatePartRange(partNumber, range, partSize);
        }).not.toThrow();
      }
    });

    it("Should throw error for incorrect start position", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartRange(2, "bytes 5242881-10485759/13631488", partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 5242881");

      expect(() => {
        tm.validatePartRange(2, "bytes 5242879-10485759/13631488", partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 5242879");

      expect(() => {
        tm.validatePartRange(2, "bytes 0-5242879/13631488", partSize);
      }).toThrow("Expected part 2 to start at 5242880 but got 0");
    });

    it("Should throw error for incorrect end position", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartRange(2, "bytes 5242880-10485760/13631488", partSize);
      }).toThrow("Expected part 2 to end at 10485759 but got 10485760");

      expect(() => {
        tm.validatePartRange(3, "bytes 10485760-13631480/13631488", partSize);
      }).toThrow("Expected part 3 to end at 13631487 but got 13631480");
    });

    it("Should handle last part correctly when not a full part size", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartRange(3, "bytes 10485760-13631487/13631488", partSize);
      }).not.toThrow();
    });

    it("Should throw error for invalid ContentRange format", () => {
      const partSize = 5242880;

      expect(() => {
        tm.validatePartRange(2, "invalid-format", partSize);
      }).toThrow("Invalid ContentRange format: invalid-format");
    });
  });
});

// describe("join-streams tests", () => {
//   const streamTypes = [
//     {
//       name: "Readable",
//       createStream: () => new Readable({ read() {} }),
//       supported: true,
//       streamType: Readable,
//     },
//     {
//       name: "ReadableStream",
//       createStream: () => new ReadableStream(),
//       supported: false,
//       streamType: ReadableStream,
//     },
//     {
//       name: "Blob",
//       createStream: () => new Blob(["test"]),
//       supported: false,
//       streamType: Blob,
//     },
//   ];

//   streamTypes.forEach(({ name, createStream, supported, streamType }) => {
//     describe.skipIf(!supported)(`${name} streams`, () => {
//       describe("joinStreams()", () => {
//         it(`Should return single ${name} when only one stream is provided`, () => {
//           const stream = createStream();
//           const result = joinStreams([stream as unknown as StreamingBlobPayloadOutputTypes]);

//           expect(result).toBeDefined();
//           expect(result).toBe(stream);
//         });
//         it(`Should handle empty ${name} streams array`, () => {
//           const result = joinStreams([] as unknown as StreamingBlobPayloadOutputTypes[]);
//           expect(result).toBeDefined();
//           expect(result).toBeInstanceOf(streamType);
//         });
//         it(`Should join multiple ${name} streams into a single stream`, async () => {
//           const content1 = Buffer.from("Chunk 1");
//           const content2 = Buffer.from("Chunk 2");
//           const content3 = Buffer.from("Chunk 3");

//           if (name === "Readable") {
//             const stream1 = new Readable({
//               read() {
//                 this.push(content1);
//                 this.push(null);
//               },
//             });
//             const stream2 = new Readable({
//               read() {
//                 this.push(content2);
//                 this.push(null);
//               },
//             });
//             const stream3 = new Readable({
//               read() {
//                 this.push(content3);
//                 this.push(null);
//               },
//             });

//             const joinedStream = joinStreams([
//               stream1,
//               stream2,
//               stream3,
//             ] as unknown as StreamingBlobPayloadOutputTypes[]);

//             const chunks: Buffer[] = [];
//             for await (const chunk of joinedStream as any) {
//               chunks.push(Buffer.from(chunk));
//             }

//             const joinedContent = Buffer.concat(chunks).toString();
//             expect(joinedContent).toContain(content1.toString());
//             expect(joinedContent).toContain(content2.toString());
//             expect(joinedContent).toContain(content3.toString());
//           }
//         });
//         it(`Should handle ${name} streams with different chunk sizes`, async () => {
//           const content1 = Buffer.from("Chunk 1 Chunk 1 Chunk 1");
//           const content2 = Buffer.from("Chunk 2");
//           const content3 = Buffer.from("Chunk 3 Chunk 3");

//           if (name === "Readable") {
//             const stream1 = new Readable({
//               read() {
//                 this.push(content1);
//                 this.push(null);
//               },
//             });
//             const stream2 = new Readable({
//               read() {
//                 this.push(content2);
//                 this.push(null);
//               },
//             });
//             const stream3 = new Readable({
//               read() {
//                 this.push(content3);
//                 this.push(null);
//               },
//             });

//             const joinedStream = joinStreams([
//               stream1,
//               stream2,
//               stream3,
//             ] as unknown as StreamingBlobPayloadOutputTypes[]);

//             const chunks: Buffer[] = [];
//             for await (const chunk of joinedStream as any) {
//               chunks.push(Buffer.from(chunk));
//             }

//             const joinedContent = Buffer.concat(chunks).toString();
//             expect(joinedContent).toContain(content1.toString());
//             expect(joinedContent).toContain(content2.toString());
//             expect(joinedContent).toContain(content3.toString());
//           }
//         });
//         it(`Should handle ${name} streams with no data`, async () => {
//           if (name === "Readable") {
//             const emptyStream1 = new Readable({
//               read() {
//                 this.push(null);
//               },
//             });
//             const emptyStream2 = new Readable({
//               read() {
//                 this.push(null);
//               },
//             });

//             const joinedStream = joinStreams([
//               emptyStream1,
//               emptyStream2,
//             ] as unknown as StreamingBlobPayloadOutputTypes[]);

//             const chunks: Buffer[] = [];
//             for await (const chunk of joinedStream as any) {
//               chunks.push(Buffer.from(chunk));
//             }
//             expect(chunks.length).toBe(0);
//             expect(Buffer.concat(chunks).length).toBe(0);
//           }
//         });
//         it(`Should properly close/cleanup ${name} streams after processing`, async () => {
//           if (name === "Readable") {
//             const stream1 = new Readable({
//               read() {
//                 this.push(Buffer.from("data"));
//                 this.push(null);
//               },
//             });
//             const stream2 = new Readable({
//               read() {
//                 this.push(Buffer.from("more"));
//                 this.push(null);
//               },
//             });

//             const destroySpy1 = vi.spyOn(stream1, "destroy");
//             const destroySpy2 = vi.spyOn(stream2, "destroy");

//             const joinedStream = joinStreams([stream1, stream2] as unknown as StreamingBlobPayloadOutputTypes[]);

//             for await (const chunk of joinedStream as any) {
//               // consume the data
//             }

//             expect(destroySpy1).toHaveBeenCalled();
//             expect(destroySpy2).toHaveBeenCalled();
//           }
//         });
//       });

//       describe("iterateStreams()", () => {
//         it(`Should iterate through single ${name} stream`, async () => {
//           if (name === "Readable") {
//             const stream1 = new Readable({
//               read() {
//                 this.push(Buffer.from("stream 1"));
//                 this.push(null);
//               },
//             });
//             const iterator = iterateStreams([stream1] as unknown as StreamingBlobPayloadOutputTypes[]);

//             const chunks: string[] = [];
//             for await (const chunk of iterator) {
//               chunks.push(chunk.toString());
//             }
//             expect(chunks).toEqual(["stream 1"]);
//           }
//         });
//         it(`Should iterate through multiple ${name} streams in order`, async () => {
//           if (name === "Readable") {
//             const stream1 = new Readable({
//               read() {
//                 this.push(Buffer.from("stream 1"));
//                 this.push(null);
//               },
//             });
//             const stream2 = new Readable({
//               read() {
//                 this.push(Buffer.from("stream 2"));
//                 this.push(null);
//               },
//             });
//             const stream3 = new Readable({
//               read() {
//                 this.push(Buffer.from("stream 3"));
//                 this.push(null);
//               },
//             });
//             const iterator = iterateStreams([
//               stream1,
//               stream2,
//               stream3,
//             ] as unknown as StreamingBlobPayloadOutputTypes[]);

//             const chunks: string[] = [];
//             for await (const chunk of iterator) {
//               chunks.push(chunk.toString());
//             }
//             expect(chunks).toEqual(["stream 1", "stream 2", "stream 3"]);
//           }
//         });
//         it(`Should call onBytes callback during ${name} iteration`, () => {});
//         it(`Should call onCompletion callback after ${name} iteration completes`, () => {});
//         it(`Should call onFailure callback when ${name} iteration fails`, () => {});
//         it(`Should handle empty ${name} streams during iteration`, () => {});
//         it(`Should track correct byte count across ${name} streams`, () => {});
//         it(`Should maintain correct index during ${name} stream iteration`, () => {});
//       });
//     });
//   });
// });
