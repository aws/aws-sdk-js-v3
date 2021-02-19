const sendMock = jest.fn().mockImplementation((x) => x);
const createMultipartMock = jest.fn().mockResolvedValue({
  UploadId: "mockuploadId",
});
const uploadPartMock = jest.fn().mockResolvedValue({
  ETag: "mockEtag",
});
const completeMultipartMock = jest.fn().mockResolvedValue({
  Success: "This actually works!",
});

const putObjectTaggingMock = jest.fn().mockResolvedValue({
  Success: "Tags have been applied!",
});

jest.mock("@aws-sdk/client-s3", () => ({
  ...jest.requireActual("@aws-sdk/client-s3"),
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
}));

import { S3 } from "@aws-sdk/client-s3";
import { Upload, Progress } from "../src/index";

describe(Upload.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
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

  it("should call multipart upload parts correctly", async (done) => {
    const upload = new Upload({
      params,
      client: new S3({}),
    });

    await upload.done();

    expect(sendMock).toHaveBeenCalledTimes(3);

    // create multipartMock is called correctly.
    expect(createMultipartMock).toHaveBeenCalledTimes(1);
    expect(createMultipartMock).toHaveBeenCalledWith(params);

    // upload parts is called correctly.
    expect(uploadPartMock).toHaveBeenCalledTimes(1);
    expect(uploadPartMock).toHaveBeenCalledWith({
      ...params,
      Body: Buffer.from(params.Body),
      PartNumber: 1,
      UploadId: "mockuploadId",
    });

    // complete multipart upload is called correctly.
    expect(completeMultipartMock).toHaveBeenCalledTimes(1);
    expect(completeMultipartMock).toHaveBeenLastCalledWith({
      ...params,
      UploadId: "mockuploadId",
      MultipartUpload: {
        Parts: [
          {
            ETag: "mockEtag",
            PartNumber: 1,
          },
        ],
      },
    });

    // no tags were passed.
    expect(putObjectTaggingMock).toHaveBeenCalledTimes(0);

    done();
  });

  it("should add tags to the object if tags have been added", async (done) => {
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

    expect(sendMock).toHaveBeenCalledTimes(4);

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
});
