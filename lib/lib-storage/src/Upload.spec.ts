const sendMock = jest.fn().mockImplementation((x) => x);
const createMultipartMock = jest.fn().mockResolvedValue({
  UploadId: "mockuploadId",
});
const uploadPartMock = jest
  .fn()
  .mockResolvedValueOnce({
    ETag: "mock-upload-Etag",
  })
  .mockResolvedValueOnce({
    ETag: "mock-upload-Etag-2",
  });
const putObjectMock = jest.fn().mockResolvedValue({
  ETag: "mockEtag",
});
const completeMultipartMock = jest.fn().mockResolvedValue({
  Success: "This actually works!",
});

const putObjectTaggingMock = jest.fn().mockResolvedValue({
  Success: "Tags have been applied!",
});

let hostname = "s3.region.amazonaws.com";
const endpointMock = jest.fn().mockImplementation(() => ({
  hostname,
  port: undefined,
  protocol: "https:",
  path: "/",
  query: undefined,
}));

import { EventEmitter, Readable } from "stream";

const mockAddListener = jest.fn();
const mockRemoveListener = jest.fn();
const requestHandlerMock = (() => {
  const mock = {
    on: mockAddListener,
    off: mockRemoveListener,
  };
  Object.setPrototypeOf(mock, EventEmitter.prototype);
  return mock;
})();

jest.mock("@aws-sdk/client-s3", () => ({
  ...(jest.requireActual("@aws-sdk/client-s3") as {}),
  S3: jest.fn().mockReturnValue({
    send: sendMock,
    config: {
      endpoint: endpointMock,
    },
  }),
  S3Client: jest.fn().mockReturnValue({
    send: sendMock,
    config: {
      endpoint: endpointMock,
      requestHandler: requestHandlerMock,
    },
  }),
  CreateMultipartUploadCommand: createMultipartMock,
  UploadPartCommand: uploadPartMock,
  CompleteMultipartUploadCommand: completeMultipartMock,
  PutObjectTaggingCommand: putObjectTaggingMock,
  PutObjectCommand: putObjectMock,
}));

import { CompleteMultipartUploadCommandOutput, S3, S3Client } from "@aws-sdk/client-s3";
import { AbortController } from "@smithy/abort-controller";
import { createHash } from "crypto";

import { Progress, Upload } from "./index";

const DEFAULT_PART_SIZE = 1024 * 1024 * 5;

describe(Upload.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    uploadPartMock
      .mockReset()
      .mockResolvedValueOnce({
        ETag: "mock-upload-Etag",
      })
      .mockResolvedValueOnce({
        ETag: "mock-upload-Etag-2",
      });
  });

  const params = {
    Key: "example-key",
    Bucket: "example-bucket",
    Body: "this-is-a-sample-payload",
  };

  expect.extend({
    toHaveSameHashAsBuffer: (received: Uint8Array, expected: Uint8Array) => {
      const receivedHash = createHash("sha256").update(received).digest("hex");
      const expectHash = createHash("sha256").update(expected).digest("hex");
      if (expectHash === receivedHash) {
        return {
          message: () => "received buffer has the correct hash",
          pass: true,
        };
      } else {
        return {
          message: () => `received buffer hash is incorrect, expect ${expectHash}, got ${receivedHash}.`,
          pass: false,
        };
      }
    },
  });

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

    expect(sendMock).toHaveBeenCalledTimes(1);

    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(""),
    });
    // create multipartMock is not called.
    expect(createMultipartMock).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(uploadPartMock).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(completeMultipartMock).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
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

    expect(sendMock).toHaveBeenCalledTimes(1);

    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(""),
    });
    // create multipartMock is not called.
    expect(createMultipartMock).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(uploadPartMock).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(completeMultipartMock).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
  });

  it("should upload using PUT when parts are smaller than one part", async () => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });

    await upload.done();

    expect(sendMock).toHaveBeenCalledTimes(1);

    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(params.Body),
    });
    // create multipartMock is not called.
    expect(createMultipartMock).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(uploadPartMock).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(completeMultipartMock).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
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

    expect(sendMock).toHaveBeenCalledTimes(1);

    expect(putObjectMock).toHaveBeenCalledTimes(1);
    expect(putObjectMock).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(params.Body),
    });
    // create multipartMock is not called.
    expect(createMultipartMock).toHaveBeenCalledTimes(0);
    // upload parts is not called.
    expect(uploadPartMock).toHaveBeenCalledTimes(0);
    // complete multipart upload is not called.
    expect(completeMultipartMock).toHaveBeenCalledTimes(0);
    // no tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
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

  it("should upload using multi-part when parts are larger than part size", async () => {
    // create a string that's larger than 5MB.
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const firstBuffer = largeBuffer.subarray(0, partSize);
    const secondBuffer = largeBuffer.subarray(partSize);
    const actionParams = { ...params, Body: largeBuffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });
    await upload.done();
    expect(sendMock).toHaveBeenCalledTimes(4);
    // create multipartMock is called correctly.
    expect(createMultipartMock).toHaveBeenCalledTimes(1);
    expect(createMultipartMock).toHaveBeenCalledWith({
      ...actionParams,
      Body: undefined,
    });
    // upload parts is called correctly.
    expect(uploadPartMock).toHaveBeenCalledTimes(2);
    expect(uploadPartMock).toHaveBeenNthCalledWith(1, {
      ...actionParams,
      // @ts-ignore extended custom matcher
      Body: expect.toHaveSameHashAsBuffer(firstBuffer),
      PartNumber: 1,
      UploadId: "mockuploadId",
    });
    expect(uploadPartMock).toHaveBeenNthCalledWith(2, {
      ...actionParams,
      // @ts-ignore extended custom matcher
      Body: expect.toHaveSameHashAsBuffer(secondBuffer),
      PartNumber: 2,
      UploadId: "mockuploadId",
    });
    // complete multipart upload is called correctly.
    expect(completeMultipartMock).toHaveBeenCalledTimes(1);
    expect(completeMultipartMock).toHaveBeenLastCalledWith({
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
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
    // put was not called
    expect(putObjectMock).toHaveBeenCalledTimes(0);
  });

  it("should upload using multi-part when parts are larger than part size stream", async () => {
    // create a string that's larger than 5MB.
    const largeBuffer = Buffer.from("#".repeat(DEFAULT_PART_SIZE + 10));
    const firstBuffer = largeBuffer.subarray(0, DEFAULT_PART_SIZE);
    const secondBuffer = largeBuffer.subarray(DEFAULT_PART_SIZE);
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

    await upload.done();

    expect(sendMock).toHaveBeenCalledTimes(4);
    // create multipartMock is called correctly.
    expect(createMultipartMock).toHaveBeenCalledTimes(1);
    expect(createMultipartMock).toHaveBeenCalledWith({
      ...actionParams,
      Body: undefined,
    });

    // upload parts is called correctly.
    expect(uploadPartMock).toHaveBeenCalledTimes(2);
    expect(uploadPartMock).toHaveBeenNthCalledWith(1, {
      ...actionParams,
      // @ts-ignore extended custom matcher
      Body: expect.toHaveSameHashAsBuffer(firstBuffer),
      PartNumber: 1,
      UploadId: "mockuploadId",
    });

    expect(uploadPartMock).toHaveBeenNthCalledWith(2, {
      ...actionParams,
      // @ts-ignore extended custom matcher
      Body: expect.toHaveSameHashAsBuffer(secondBuffer),
      PartNumber: 2,
      UploadId: "mockuploadId",
    });

    // complete multipart upload is called correctly.
    expect(completeMultipartMock).toHaveBeenCalledTimes(1);
    expect(completeMultipartMock).toHaveBeenLastCalledWith({
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
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);
    // put was not called
    expect(putObjectMock).toHaveBeenCalledTimes(0);
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

    expect(sendMock).toHaveBeenCalledTimes(2);

    // tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(1);
    expect(putObjectTaggingMock).toHaveBeenCalledWith({
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

    expect(sendMock).toHaveBeenCalledTimes(5);

    // tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(1);
    expect(putObjectTaggingMock).toHaveBeenCalledWith({
      ...actionParams,
      // @ts-ignore extended custom matcher
      Body: expect.toHaveSameHashAsBuffer(largeBuffer),
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
    expect(received[0]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: firstBuffer.byteLength,
      part: 1,
      total: largeBuffer.byteLength,
    });
    expect(received[1]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: largeBuffer.byteLength,
      part: 2,
      total: largeBuffer.byteLength,
    });
    expect(received.length).toBe(2);
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
    expect(received[0]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: partSize,
      part: 1,
      total: undefined,
    });
    expect(received[1]).toEqual({
      Key: params.Key,
      Bucket: params.Bucket,
      loaded: partSize + 10,
      part: 2,
      total: undefined,
    });
    expect(received.length).toBe(2);
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
    expect(mockAddListener).toHaveBeenCalledWith("xhr.upload.progress", expect.any(Function));
    expect(mockRemoveListener).toHaveBeenCalledWith("xhr.upload.progress", expect.any(Function));
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
});
