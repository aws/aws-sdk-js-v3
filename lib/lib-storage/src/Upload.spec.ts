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

jest.mock("@aws-sdk/client-s3", () => ({
  ...(jest.requireActual("@aws-sdk/client-s3") as {}),
  S3: jest.fn().mockReturnValue({
    send: sendMock,
  }),
  S3Client: jest.fn().mockReturnValue({
    send: sendMock,
  }),
  CreateMultipartUploadCommand: createMultipartMock,
  UploadPartCommand: uploadPartMock,
  CompleteMultipartUploadCommand: completeMultipartMock,
  PutObjectTaggingCommand: putObjectTaggingMock,
  PutObjectCommand: putObjectMock,
}));

import { S3 } from "@aws-sdk/client-s3";
import { Upload, Progress } from "./index";
import { Readable } from "stream";

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

  it("correctly exposes the event emitter API", (done) => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });
    expect(upload.addListener).toBeDefined();
    expect(upload.getMaxListeners).toBeDefined();
    expect(upload.eventNames).toBeDefined();
    expect(upload.off).toBeDefined();
    expect(upload.on).toBeDefined();

    done();
  });

  it("should upload using PUT when empty buffer", async (done) => {
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

    done();
  });

  it("should upload using PUT when empty stream", async (done) => {
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

    done();
  });

  it("should upload using PUT when parts are smaller than one part", async (done) => {
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

    done();
  });

  it("should upload using PUT when parts are smaller than one part stream", async (done) => {
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

    done();
  });

  it("should upload using multi-part when parts are larger than part size", async (done) => {
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
      Body: firstBuffer,
      PartNumber: 1,
      UploadId: "mockuploadId",
    });

    expect(uploadPartMock).toHaveBeenNthCalledWith(2, {
      ...actionParams,
      Body: secondBuffer,
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
    done();
  });

  it("should upload using multi-part when parts are larger than part size stream", async (done) => {
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
      Body: firstBuffer,
      PartNumber: 1,
      UploadId: "mockuploadId",
    });

    expect(uploadPartMock).toHaveBeenNthCalledWith(2, {
      ...actionParams,
      Body: secondBuffer,
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
    done();
  });

  it("should add tags to the object if tags have been added PUT", async (done) => {
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

    done();
  });

  it("should add tags to the object if tags have been added multi-part", async (done) => {
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
      Tagging: {
        TagSet: tags,
      },
    });

    done();
  });

  it("should validate partsize", async (done) => {
    try {
      const upload = new Upload({
        params,
        partSize: 6,
        client: new S3({}),
      });

      //should not get here.
      expect(1).toEqual(0);
    } catch (error) {
      expect(error).toBeDefined();
      done();
    }
  });

  it("should validate queue size", (done) => {
    try {
      const upload = new Upload({
        params,
        queueSize: -1,
        client: new S3({}),
      });

      //should not get here.
      expect(1).toEqual(0);
    } catch (error) {
      expect(error).toBeDefined();
      done();
    }
    done();
  });

  it("should provide progress updates", async (done) => {
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
      done();
    });
    await upload.done();
  });

  it("should provide progress updates multi-part buffer", async (done) => {
    const partSize = 1024 * 1024 * 5;
    const largeBuffer = Buffer.from("#".repeat(partSize + 10));
    const firstBuffer = largeBuffer.subarray(0, partSize);
    const actionParams = { ...params, Body: largeBuffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    let received = [];
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
    done();
  });

  it("should provide progress updates multi-part stream", async (done) => {
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

    let received = [];
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
    done();
  });

  it("should provide progress updates empty buffer", async (done) => {
    const buffer = Buffer.from("");
    const actionParams = { ...params, Body: buffer };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    let received = [];
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
    done();
  });

  it("should provide progress updates empty stream", async (done) => {
    const stream = Readable.from((function* () {})());
    const actionParams = { ...params, Body: stream };
    const upload = new Upload({
      params: actionParams,
      client: new S3({}),
    });

    let received = [];
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
    done();
  });
});
