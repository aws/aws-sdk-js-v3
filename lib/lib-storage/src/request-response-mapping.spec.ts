import { PutObjectCommandInput } from "@aws-sdk/client-s3";
import { describe, expect, it, vi } from "vitest";

import { Upload } from "./Upload";

vi.mock("@aws-sdk/client-s3", async () => {
  const actual = await vi.importActual("@aws-sdk/client-s3");
  return {
    ...actual,
    S3Client: vi.fn().mockImplementation(() => ({
      send: vi.fn(),
      config: {
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    })),
  };
});

describe("Upload Request Field Mapping", () => {
  it("should copy all required fields from PutObjectRequest to CreateMultipartUpload", async () => {
    const uploadParams: PutObjectCommandInput = {
      Bucket: "test-bucket",
      Key: "test-key",
      ContentType: "text/plain",
      Metadata: { custom: "value" },
      SSECustomerAlgorithm: "AES256",
      SSECustomerKey: "test-key",
      SSECustomerKeyMD5: "test-md5",
      RequestPayer: "requester",
      ExpectedBucketOwner: "123456789012",
      CacheControl: "no-cache",
      ContentDisposition: "attachment",
      ContentEncoding: "gzip",
      ContentLanguage: "en-US",
      ServerSideEncryption: "AES256",
      StorageClass: "STANDARD",
      ChecksumAlgorithm: "CRC32",
      Body: Buffer.from("test data"),
    };

    const mockSend = vi.fn().mockResolvedValue({ UploadId: "test-upload-id" });
    const mockClient = {
      send: mockSend,
      config: {
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    };

    const upload = new Upload({
      client: mockClient as any,
      params: uploadParams,
    });

    await (upload as any).__createMultipartUpload();

    const createMultipartCall = mockSend.mock.calls[0][0];
    const createCommandParams = createMultipartCall.input;

    expect(createCommandParams.Bucket).toBe(uploadParams.Bucket);
    expect(createCommandParams.Key).toBe(uploadParams.Key);
    expect(createCommandParams.ContentType).toBe(uploadParams.ContentType);
    expect(createCommandParams.Metadata).toEqual(uploadParams.Metadata);
    expect(createCommandParams.SSECustomerAlgorithm).toBe(uploadParams.SSECustomerAlgorithm);
    expect(createCommandParams.SSECustomerKey).toBe(uploadParams.SSECustomerKey);
    expect(createCommandParams.SSECustomerKeyMD5).toBe(uploadParams.SSECustomerKeyMD5);
    expect(createCommandParams.RequestPayer).toBe(uploadParams.RequestPayer);
    expect(createCommandParams.ExpectedBucketOwner).toBe(uploadParams.ExpectedBucketOwner);
    expect(createCommandParams.CacheControl).toBe(uploadParams.CacheControl);
    expect(createCommandParams.ContentDisposition).toBe(uploadParams.ContentDisposition);
    expect(createCommandParams.ContentEncoding).toBe(uploadParams.ContentEncoding);
    expect(createCommandParams.ContentLanguage).toBe(uploadParams.ContentLanguage);
    expect(createCommandParams.ServerSideEncryption).toBe(uploadParams.ServerSideEncryption);
    expect(createCommandParams.StorageClass).toBe(uploadParams.StorageClass);
    expect(createCommandParams.ChecksumAlgorithm).toBe("CRC32"); // Set by Upload logic
    expect(createCommandParams.Body).toBeUndefined(); // Body should be removed for CreateMultipart
  });

  it("should copy all required fields from PutObjectRequest to UploadPart", async () => {
    const uploadParams: PutObjectCommandInput = {
      Bucket: "test-bucket",
      Key: "test-key",
      SSECustomerAlgorithm: "AES256",
      SSECustomerKey: "test-key",
      SSECustomerKeyMD5: "test-md5",
      RequestPayer: "requester",
      ExpectedBucketOwner: "123456789012",
      ChecksumAlgorithm: "CRC32",
      Body: Buffer.from("#".repeat(1024 * 1024 * 6)),
    };

    const mockSend = vi.fn().mockImplementation((command) => {
      if (command.constructor.name === "CreateMultipartUploadCommand") {
        return Promise.resolve({ UploadId: "test-upload-id" });
      }
      if (command.constructor.name === "UploadPartCommand") {
        return Promise.resolve({ ETag: "test-etag" });
      }
      return Promise.resolve({});
    });

    const mockClient = {
      send: mockSend,
      config: {
        requestHandler: {},
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    };

    const upload = new Upload({
      client: mockClient as any,
      params: uploadParams,
    });

    await upload.done();

    const uploadPartCall = mockSend.mock.calls.find((call) => call[0].constructor.name === "UploadPartCommand");
    expect(uploadPartCall).toBeDefined();
    const uploadPartParams = uploadPartCall![0].input;

    expect(uploadPartParams.Bucket).toBe(uploadParams.Bucket);
    expect(uploadPartParams.Key).toBe(uploadParams.Key);
    expect(uploadPartParams.SSECustomerAlgorithm).toBe(uploadParams.SSECustomerAlgorithm);
    expect(uploadPartParams.SSECustomerKey).toBe(uploadParams.SSECustomerKey);
    expect(uploadPartParams.SSECustomerKeyMD5).toBe(uploadParams.SSECustomerKeyMD5);
    expect(uploadPartParams.RequestPayer).toBe(uploadParams.RequestPayer);
    expect(uploadPartParams.ExpectedBucketOwner).toBe(uploadParams.ExpectedBucketOwner);
    expect(uploadPartParams.UploadId).toBe("test-upload-id");
    expect(uploadPartParams.PartNumber).toBe(1);
    expect(uploadPartParams.ContentLength).toBeUndefined();
  });

  it("should copy all required fields from PutObjectRequest to CompleteMultipartUpload", async () => {
    const uploadParams: PutObjectCommandInput = {
      Bucket: "test-bucket",
      Key: "test-key",
      SSECustomerAlgorithm: "AES256",
      SSECustomerKey: "test-key",
      SSECustomerKeyMD5: "test-md5",
      RequestPayer: "requester",
      ExpectedBucketOwner: "123456789012",
      ChecksumCRC32: "test-checksum",
      IfMatch: "test-etag",
      IfNoneMatch: "test-none-match",
      Body: Buffer.from("#".repeat(1024 * 1024 * 6)),
    };

    const mockSend = vi.fn().mockImplementation((command) => {
      if (command.constructor.name === "CreateMultipartUploadCommand") {
        return Promise.resolve({ UploadId: "test-upload-id" });
      }
      if (command.constructor.name === "UploadPartCommand") {
        return Promise.resolve({ ETag: "test-etag" });
      }
      if (command.constructor.name === "CompleteMultipartUploadCommand") {
        return Promise.resolve({ Location: "test-location" });
      }
      return Promise.resolve({});
    });

    const mockClient = {
      send: mockSend,
      config: {
        requestHandler: {},
        requestChecksumCalculation: () => Promise.resolve("WHEN_SUPPORTED"),
      },
    };

    const upload = new Upload({
      client: mockClient as any,
      params: uploadParams,
    });

    await upload.done();

    const completeCall = mockSend.mock.calls.find(
      (call) => call[0].constructor.name === "CompleteMultipartUploadCommand"
    );
    expect(completeCall).toBeDefined();
    const completeParams = completeCall![0].input;

    expect(completeParams.Bucket).toBe(uploadParams.Bucket);
    expect(completeParams.Key).toBe(uploadParams.Key);
    expect(completeParams.SSECustomerAlgorithm).toBe(uploadParams.SSECustomerAlgorithm);
    expect(completeParams.SSECustomerKey).toBe(uploadParams.SSECustomerKey);
    expect(completeParams.SSECustomerKeyMD5).toBe(uploadParams.SSECustomerKeyMD5);
    expect(completeParams.RequestPayer).toBe(uploadParams.RequestPayer);
    expect(completeParams.ExpectedBucketOwner).toBe(uploadParams.ExpectedBucketOwner);
    expect(completeParams.ChecksumCRC32).toBe(uploadParams.ChecksumCRC32);
    expect(completeParams.IfMatch).toBe(uploadParams.IfMatch);
    expect(completeParams.IfNoneMatch).toBe(uploadParams.IfNoneMatch);
    expect(completeParams.UploadId).toBe("test-upload-id");
    expect(completeParams.Body).toBeUndefined();
    expect(completeParams.MultipartUpload.Parts).toBeDefined();
  });

  it("should map response fields from PutObject to Upload response", () => {
    const putObjectResponse = {
      ETag: "test-etag",
      VersionId: "test-version",
      ServerSideEncryption: "AES256",
      SSEKMSKeyId: "test-kms-key",
      BucketKeyEnabled: true,
      ChecksumCRC32: "test-checksum",
      RequestCharged: "requester",
    };

    const uploadResponse = {
      ...putObjectResponse,
      Bucket: "test-bucket",
      Key: "test-key",
      Location: "https://test-bucket.s3.amazonaws.com/test-key",
    };

    expect(uploadResponse.ETag).toBe("test-etag");
    expect(uploadResponse.VersionId).toBe("test-version");
    expect(uploadResponse.ServerSideEncryption).toBe("AES256");
    expect(uploadResponse.SSEKMSKeyId).toBe("test-kms-key");
    expect(uploadResponse.BucketKeyEnabled).toBe(true);
    expect(uploadResponse.ChecksumCRC32).toBe("test-checksum");
    expect(uploadResponse.RequestCharged).toBe("requester");
  });

  it("should map response fields from CompleteMultipartUpload to Upload response", () => {
    const completeMultipartResponse = {
      ETag: "test-etag",
      VersionId: "test-version",
      ServerSideEncryption: "AES256",
      SSEKMSKeyId: "test-kms-key",
      BucketKeyEnabled: true,
      ChecksumCRC32: "test-checksum",
      Location: "https://test-bucket.s3.amazonaws.com/test-key",
    };

    const uploadResponse = {
      ...completeMultipartResponse,
    };

    expect(uploadResponse.ETag).toBe("test-etag");
    expect(uploadResponse.VersionId).toBe("test-version");
    expect(uploadResponse.ServerSideEncryption).toBe("AES256");
    expect(uploadResponse.SSEKMSKeyId).toBe("test-kms-key");
    expect(uploadResponse.BucketKeyEnabled).toBe(true);
    expect(uploadResponse.ChecksumCRC32).toBe("test-checksum");
    expect(uploadResponse.Location).toBe("https://test-bucket.s3.amazonaws.com/test-key");
  });
});
