import { beforeEach, describe, expect, test as it, vi } from "vitest";

vi.mock("@aws-sdk/util-arn-parser", () => ({ validate: vi.fn() }));

import { validate } from "@aws-sdk/util-arn-parser";

import { validateBucketNameMiddleware } from "./validate-bucket-name";

describe("validateBucketNameMiddleware", () => {
  const mockNextHandler = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(validate).mockReturnValue(false);
  });

  it("throws error if Bucket parameter contains '/'", async () => {
    const handler = validateBucketNameMiddleware({} as any)(mockNextHandler, {} as any);
    const bucket = "bucket/part/of/key";
    let error;
    try {
      await handler({
        input: {
          Bucket: bucket,
        },
      });
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error.message).toEqual(`Bucket name shouldn't contain '/', received '${bucket}'`);
    expect(error.name).toEqual("InvalidBucketName");
  });

  it("doesn't throw error if Bucket parameter has no '/'", async () => {
    const handler = validateBucketNameMiddleware({} as any)(mockNextHandler, {} as any);
    const args = {
      input: {
        Bucket: "bucket",
      },
    };
    await handler(args);
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0]).toEqual(args);
  });

  it("should not validate bucket name if the bucket name is an ARN", async () => {
    vi.mocked(validate).mockReturnValue(true);
    const handler = validateBucketNameMiddleware({} as any)(mockNextHandler, {} as any);
    const args = {
      input: {
        Bucket: "arn:aws:s3:us-east-1:123456789012:accesspoint/myendpoint",
      },
    };
    await handler(args);
    expect(mockNextHandler.mock.calls.length).toBe(1);
    expect(mockNextHandler.mock.calls[0][0]).toEqual(args);
  });
});
