import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { describe, expect, test as it, vi } from "vitest";

describe("middleware-sdk-s3", () => {
  describe(S3.name, () => {
    it("validates bucket names", async () => {
      const client = new S3({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          bucket: "not-reached",
        },
      });

      await client
        .headBucket({
          Bucket: "/my-bucket/a",
        })
        .then(() => {
          throw new Error("this should not be reached");
        })
        .catch((err) => {
          expect(err.name).toBe("InvalidBucketName");
        });

      expect.hasAssertions();
    });

    it("warns on input streams of unknown length", async () => {
      const client = new S3({
        region: "us-west-2",
        logger: Object.assign({
          trace: vi.fn(),
          debug: vi.fn(),
          info: vi.fn(),
          warn: vi.fn(),
          error: vi.fn(),
        }),
      });

      requireRequestsFrom(client).toMatch({
        query: { "x-id": "PutObject" },
      });

      await client.putObject({
        Bucket: "my-bucket",
        Key: "k",
        Body: "", // use empty body to leave content-length unset.
      });

      expect(client.config.logger.warn).toHaveBeenCalledWith(
        "Are you using a Stream of unknown length as the Body of a PutObject request? Consider using Upload instead from @aws-sdk/lib-storage."
      );

      expect.hasAssertions();
    });

    it("allows using a bucket input value as the endpoint", async () => {
      const client = new S3({
        region: "us-west-2",
        bucketEndpoint: true,
      });

      requireRequestsFrom(client).toMatch({
        query: { "x-id": "PutObject" },
        protocol: "https:",
        hostname: "mybucket.com",
        port: 8888,
        path: "/my-bucket-path/my-key",
        headers: {
          host: "mybucket.com:8888",
        },
      });

      await client.putObject({
        Bucket: "https://mybucket.com:8888/my-bucket-path",
        Key: "my-key",
        Body: "abcd",
      });

      expect.hasAssertions();
    });
  });
});
