import { afterAll, afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

/* eslint-disable no-var */
var hostname = "s3.region.amazonaws.com";
var port: number | undefined;

import { EventEmitter, Readable } from "stream";

vi.mock("@aws-sdk/client-s3", async () => {
  const sendMock = vi.fn().mockImplementation(async (x) => x);
  const endpointMock = vi.fn().mockImplementation(() => ({
    hostname,
    port,
    protocol: "https:",
    path: "/",
    query: undefined,
  }));

  const mockRequestHandler = new (class MockRequestHandler extends EventEmitter {
    on = vi.fn();
    off = vi.fn();
  })();

  return {
    ...((await vi.importActual("@aws-sdk/client-s3")) as {}),
    S3: vi.fn().mockReturnValue({
      send: sendMock,
      config: {
        endpoint: endpointMock,
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    }),
    S3Client: vi.fn().mockReturnValue({
      send: sendMock,
      config: {
        endpoint: endpointMock,
        requestHandler: mockRequestHandler,
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    }),
    CreateMultipartUploadCommand: vi.fn().mockReturnValue({
      UploadId: "mockuploadId",
    }),
    UploadPartCommand: vi
      .fn()
      .mockReturnValueOnce({
        ETag: "mock-upload-Etag",
      })
      .mockReturnValueOnce({
        ETag: "mock-upload-Etag-2",
      }),
    CompleteMultipartUploadCommand: vi.fn().mockReturnValue({
      Success: "This actually works!",
    }),
    PutObjectTaggingCommand: vi.fn().mockReturnValue({
      Success: "Tags have been applied!",
    }),
    PutObjectCommand: vi.fn().mockReturnValue({
      ETag: "mockEtag",
    }),
  };
});

import {
  CompleteMultipartUploadCommand,
  CompleteMultipartUploadCommandOutput,
  CreateMultipartUploadCommand,
  PutObjectCommand,
  PutObjectTaggingCommand,
  S3,
  S3Client,
  UploadPartCommand,
} from "@aws-sdk/client-s3";
import { RequestChecksumCalculation } from "@aws-sdk/middleware-flexible-checksums";
import { AbortController } from "@smithy/abort-controller";

import { Progress, Upload } from "./index";

const DEFAULT_PART_SIZE = 1024 * 1024 * 5;

describe(Upload.name, () => {
  const s3MockInstance = new S3Client();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(UploadPartCommand as any)
      .mockReturnValueOnce({
        ETag: "mock-upload-Etag",
      })
      .mockReturnValueOnce({
        ETag: "mock-upload-Etag-2",
      });
    vi.mocked(CreateMultipartUploadCommand as any)
      .mockReset()
      .mockReturnValueOnce({
        UploadId: "mockuploadId",
        ETag: "mock-upload-Etag",
      })
      .mockReturnValueOnce({
        UploadId: "mockuploadId",
        ETag: "mock-upload-Etag-2",
      });
  });

  const params = {
    Key: "example-key",
    Bucket: "example-bucket",
    Body: "this-is-a-sample-payload",
  };

  it("correctly exposes the event emitter API", () => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });
    expect(upload.addListener).toBeDefined();
    expect(upload.getMaxListeners).toBeDefined();
    expect(upload.eventNames).toBeDefined();
    expect(upload.off).toBeDefined();
    expect(upload.on).toBeDefined();
  });

  it("should upload using PUT when empty buffer", async () => {
    const buffer = Buffer.from("");
    const actionParams = { ...params, Body: buffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(1);

    expect(PutObjectCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectCommand).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(""),
    });
    // create multipartMock is not called.
    expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(UploadPartCommand).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
  });

  it("should upload using PUT when empty stream", async () => {
    const stream = new Readable({});
    stream.push(null);
    const actionParams = { ...params, Body: stream };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(1);

    expect(PutObjectCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectCommand).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(""),
    });
    // create multipartMock is not called.
    expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(UploadPartCommand).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
  });

  it("should upload using PUT when parts are smaller than one part", async () => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(1);

    expect(PutObjectCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectCommand).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(params.Body),
    });
    // create multipartMock is not called.
    expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(UploadPartCommand).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
  });

  it("should upload using PUT when parts are smaller than one part stream", async () => {
    const streamBody = Readable.from(
      (function* () {
        yield params.Body;
      })()
    );
    const upload = new Upload({
      params: { ...params, Body: streamBody },
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(1);

    expect(PutObjectCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectCommand).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(params.Body),
    });
    // create multipartMock is not called.
    expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(UploadPartCommand).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
  });

  it("should return a Bucket, Key and Location fields when upload uses a PUT", async () => {
    const buffer = Buffer.from("");
    const actionParams = { ...params, Body: buffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
    expect(result.Key).toEqual("example-key");
    expect(result.Bucket).toEqual("example-bucket");
    expect(result.Location).toEqual("https://example-bucket.s3.region.amazonaws.com/example-key");
  });

  describe("bucket hostname deduplication", () => {
    afterEach(() => {
      hostname = "s3.region.amazonaws.com";
      port = undefined;
    });
    it("should dedupe bucket in endpoint hostname when forcePathStyle = false", async () => {
      hostname = "example-bucket.example-host.com";
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const upload = new Upload({
        params: actionParams,
        client: new S3({
          forcePathStyle: false,
        }),
      });
      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Key).toEqual("example-key");
      expect(result.Bucket).toEqual("example-bucket");
      expect(result.Location).toEqual("https://example-bucket.example-host.com/example-key");
    });
    it("should prepend bucket in endpoint hostname when it does not already contain it and forcePathStyle = false", async () => {
      hostname = "example-host.com";
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const upload = new Upload({
        params: actionParams,
        client: new S3({
          forcePathStyle: false,
        }),
      });
      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Key).toEqual("example-key");
      expect(result.Bucket).toEqual("example-bucket");
      expect(result.Location).toEqual("https://example-bucket.example-host.com/example-key");
    });
    it("should dedupe bucket in endpoint hostname and port when forcePathStyle = false and explicit port is provided", async () => {
      hostname = "example-bucket.example-host.com";
      port = 8443;
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const upload = new Upload({
        params: actionParams,
        client: new S3({
          forcePathStyle: false,
        }),
      });
      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Key).toEqual("example-key");
      expect(result.Bucket).toEqual("example-bucket");
      expect(result.Location).toEqual("https://example-bucket.example-host.com:8443/example-key");
    });
    it("should prepend bucket in endpoint hostname and port when it does not already contain it and forcePathStyle = false and explicit port is provided", async () => {
      hostname = "example-host.com";
      port = 8443;
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const upload = new Upload({
        params: actionParams,
        client: new S3({
          forcePathStyle: false,
        }),
      });
      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Key).toEqual("example-key");
      expect(result.Bucket).toEqual("example-bucket");
      expect(result.Location).toEqual("https://example-bucket.example-host.com:8443/example-key");
    });
  });

  describe("forcePathStyle support", () => {
    afterEach(() => {
      port = undefined;
    });
    it("should return a Location field formatted in path style when forcePathStyle is true", async () => {
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const s3Client = new S3({});
      s3Client.config.forcePathStyle = true;
      const upload = new Upload({
        params: actionParams,
        client: s3Client,
      });

      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Location).toEqual("https://s3.region.amazonaws.com/example-bucket/example-key");
    });

    it("should return a Location field with explicit port and formatted in path style when forcePathStyle is true and explicit port is provided", async () => {
      port = 8443;
      const buffer = Buffer.from("");
      const actionParams = { ...params, Body: buffer };
      const s3Client = new S3({});
      s3Client.config.forcePathStyle = true;
      const upload = new Upload({
        params: actionParams,
        client: s3Client,
      });

      const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
      expect(result.Location).toEqual("https://s3.region.amazonaws.com:8443/example-bucket/example-key");
    });
  });

  it("should return a Location field with decoded slash symbols", async () => {
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const actionParams = { ...params, Body: largeBuffer };
    const CompleteMultipartUploadCommandWithLocation = vi
      .mocked(CompleteMultipartUploadCommand as any)
      .mockResolvedValueOnce({
        Location: "https://example-bucket.example-host.com/folder%2Fexample-key",
      });
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });
    const result = (await upload.done()) as CompleteMultipartUploadCommandOutput;
    expect(CompleteMultipartUploadCommandWithLocation).toHaveBeenCalledTimes(1);
    expect(result.Location).toEqual("https://example-bucket.example-host.com/folder/example-key");
  });

  describe("large buffers", () => {
    const MOCK_PART_SIZE = 24;
    beforeEach(() => {
      (Upload as any).MIN_PART_SIZE = MOCK_PART_SIZE;
    });

    afterAll(() => {
      (Upload as any).MIN_PART_SIZE = 1024 * 1024 * 5;
    });

    [
      { type: "buffer", largeBuffer: Buffer.from("#".repeat(MOCK_PART_SIZE + 10)) },
      { type: "Uint8array", largeBuffer: Uint8Array.from(Buffer.from("#".repeat(MOCK_PART_SIZE + 10))) },
    ].forEach(({ type, largeBuffer }) => {
      it(`should upload using multi-part when parts are larger than part size ${type}`, async () => {
        const firstBuffer = largeBuffer.subarray(0, MOCK_PART_SIZE);
        const secondBuffer = largeBuffer.subarray(MOCK_PART_SIZE);
        const actionParams = { ...params, Body: largeBuffer };
        const upload = new Upload({
          params: actionParams,
          partSize: MOCK_PART_SIZE,
          client: new S3({}),
        });
        await upload.done();
        expect(s3MockInstance.send).toHaveBeenCalledTimes(4);
        // create multipartMock is called correctly.
        expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(1);
        expect(CreateMultipartUploadCommand).toHaveBeenCalledWith({
          ...actionParams,
          Body: undefined,
          ChecksumAlgorithm: "CRC32",
        });
        // upload parts is called correctly.
        expect(UploadPartCommand).toHaveBeenCalledTimes(2);
        expect(UploadPartCommand).toHaveBeenNthCalledWith(1, {
          ...actionParams,
          Body: firstBuffer,
          PartNumber: 1,
          UploadId: "mockuploadId",
        });
        expect(UploadPartCommand).toHaveBeenNthCalledWith(2, {
          ...actionParams,
          Body: secondBuffer,
          PartNumber: 2,
          UploadId: "mockuploadId",
        });
        // complete multipart upload is called correctly.
        expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(1);
        expect(CompleteMultipartUploadCommand).toHaveBeenLastCalledWith({
          ...actionParams,
          Body: undefined,
          UploadId: "mockuploadId",
          MultipartUpload: {
            Parts: [
              {
                ETag: "mock-upload-Etag",
                PartNumber: 1,
              },
              {
                ETag: "mock-upload-Etag-2",
                PartNumber: 2,
              },
            ],
          },
        });

        // no tags were passed.
        expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
        // put was not called
        expect(PutObjectCommand).toHaveBeenCalledTimes(0);
      });

      it("should upload using multi-part when parts are larger than part size stream", async () => {
        // create a string that's larger than 5MB.
        const firstBuffer = largeBuffer.subarray(0, MOCK_PART_SIZE);
        const secondBuffer = largeBuffer.subarray(MOCK_PART_SIZE);
        const streamBody = Readable.from(
          (function* () {
            yield largeBuffer;
          })()
        );
        const actionParams = { ...params, Body: streamBody };
        const upload = new Upload({
          params: actionParams,
          partSize: MOCK_PART_SIZE,
          client: new S3({}),
        });

        await upload.done();

        expect(s3MockInstance.send).toHaveBeenCalledTimes(4);
        // create multipartMock is called correctly.
        expect(CreateMultipartUploadCommand).toHaveBeenCalledTimes(1);
        expect(CreateMultipartUploadCommand).toHaveBeenCalledWith({
          ...actionParams,
          Body: undefined,
          ChecksumAlgorithm: "CRC32",
        });

        // upload parts is called correctly.
        expect(UploadPartCommand).toHaveBeenCalledTimes(2);

        expect(UploadPartCommand).toHaveBeenNthCalledWith(1, {
          ...actionParams,
          Body: firstBuffer,
          PartNumber: 1,
          UploadId: "mockuploadId",
        });
        expect(UploadPartCommand).toHaveBeenNthCalledWith(2, {
          ...actionParams,
          // @ts-ignore
          Body: secondBuffer,
          PartNumber: 2,
          UploadId: "mockuploadId",
        });
        // complete multipart upload is called correctly.
        expect(CompleteMultipartUploadCommand).toHaveBeenCalledTimes(1);
        expect(CompleteMultipartUploadCommand).toHaveBeenLastCalledWith({
          ...actionParams,
          Body: undefined,
          UploadId: "mockuploadId",
          MultipartUpload: {
            Parts: [
              {
                ETag: "mock-upload-Etag",
                PartNumber: 1,
              },
              {
                ETag: "mock-upload-Etag-2",
                PartNumber: 2,
              },
            ],
          },
        });
        // no tags were passed.
        expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(0);
        // put was not called
        expect(PutObjectCommand).toHaveBeenCalledTimes(0);
      });
    });
  });

  it("should add tags to the object if tags have been added PUT", async () => {
    const tags = [
      {
        Key: "k1",
        Value: "v1",
      },
      {
        Key: "k2",
        Value: "v2",
      },
    ];

    const upload = new Upload({
      params,
      tags,
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(2);

    // tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectTaggingCommand).toHaveBeenCalledWith({
      ...params,
      Tagging: {
        TagSet: tags,
      },
    });
  });

  it("should add tags to the object if tags have been added multi-part", async () => {
    const largeBuffer = Buffer.from("#".repeat(DEFAULT_PART_SIZE + 10));
    const actionParams = { ...params, Body: largeBuffer };
    const tags = [
      {
        Key: "k1",
        Value: "v1",
      },
      {
        Key: "k2",
        Value: "v2",
      },
    ];

    const upload = new Upload({
      params: actionParams,
      tags,
      client: new S3({}),
    });

    await upload.done();

    expect(s3MockInstance.send).toHaveBeenCalledTimes(5);

    // tags were passed.
    expect(PutObjectTaggingCommand).toHaveBeenCalledTimes(1);
    expect(PutObjectTaggingCommand).toHaveBeenCalledWith({
      ...actionParams,
      Body: largeBuffer,
      Tagging: {
        TagSet: tags,
      },
    });
  });

  it("should validate partsize", () => {
    try {
      new Upload({
        params,
        partSize: 6,
        client: new S3({}),
      });
      fail();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should validate queue size", () => {
    try {
      new Upload({
        params,
        queueSize: -1,
        client: new S3({}),
      });
      fail();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should provide progress updates", async () => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });

    upload.on("httpUploadProgress", (progress: Progress) => {
      expect(progress).toEqual({
        Key: params.Key,
        Bucket: params.Bucket,
        loaded: 24,
        part: 1,
        total: 24,
      });
    });
    await upload.done();
  });

  it("should provide progress updates multi-part buffer", async () => {
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const firstBuffer = largeBuffer.subarray(0, partSize);
    const actionParams = { ...params, Body: largeBuffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    const received: Progress[] = [];
    upload.on("httpUploadProgress", (progress: Progress) => {
      received.push(progress);
    });
    await upload.done();
    expect(received).toEqual([
      {
        Key: params.Key,
        Bucket: params.Bucket,
        loaded: firstBuffer.byteLength,
        part: 1,
        total: largeBuffer.byteLength,
      },
      {
        Key: params.Key,
        Bucket: params.Bucket,
        loaded: largeBuffer.byteLength,
        part: 2,
        total: largeBuffer.byteLength,
      },
    ]);
  });

  it("should provide progress updates multi-part stream", async () => {
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const streamBody = Readable.from(
      (function* () {
        yield largeBuffer;
      })()
    );
    const actionParams = { ...params, Body: streamBody };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    const received: Progress[] = [];
    upload.on("httpUploadProgress", (progress: Progress) => {
      received.push(progress);
    });
    await upload.done();
    expect(received).toEqual([
      {
        Key: params.Key,
        Bucket: params.Bucket,
        loaded: partSize,
        part: 1,
        total: undefined,
      },
      {
        Key: params.Key,
        Bucket: params.Bucket,
        loaded: partSize + 10,
        part: 2,
        total: undefined,
      },
    ]);
  });

  it("should provide progress updates empty buffer", async () => {
    const buffer = Buffer.from("");
    const actionParams = { ...params, Body: buffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    const received: Progress[] = [];
    upload.on("httpUploadProgress", (progress: Progress) => {
      received.push(progress);
    });
    await upload.done();
    expect(received[0]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: 0,
      part: 1,
      total: 0,
    });
    expect(received.length).toBe(1);
  });

  it("should provide progress updates empty stream", async () => {
    const stream = Readable.from((function* () {})());
    const actionParams = { ...params, Body: stream };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    const received: Progress[] = [];
    upload.on("httpUploadProgress", (progress: Progress) => {
      received.push(progress);
    });
    await upload.done();
    expect(received[0]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: 0,
      part: 1,
      total: 0,
    });
    expect(received.length).toBe(1);
  });

  it("listens to the requestHandler for updates if it is an EventEmitter", async () => {
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const streamBody = Readable.from(
      (function* () {
        yield largeBuffer;
      })()
    );
    const actionParams = { ...params, Body: streamBody };
    const upload = new Upload({
      params: actionParams,
      client: new S3Client({}),
    });

    const received: Progress[] = [];
    upload.on("httpUploadProgress", (progress: Progress) => {
      received.push(progress);
    });
    await upload.done();
    expect(received.length).toBe(2);
    expect((s3MockInstance.config.requestHandler as unknown as EventEmitter).on).toHaveBeenCalledWith(
      "xhr.upload.progress",
      expect.any(Function)
    );
    expect((s3MockInstance.config.requestHandler as unknown as EventEmitter).off).toHaveBeenCalledWith(
      "xhr.upload.progress",
      expect.any(Function)
    );
  });

  it("should respect external abort signal", async () => {
    const abortController = new AbortController();

    try {
      const upload = new Upload({
        params,
        client: new S3({}),
        abortController,
      });

      abortController.abort();

      await upload.done();
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should reject calling .done() more than once on an instance", async () => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });

    await upload.done();
    expect(() => upload.done()).rejects.toEqual(
      new Error("@aws-sdk/lib-storage: this instance of Upload has already executed .done(). Create a new instance.")
    );
  });
});
