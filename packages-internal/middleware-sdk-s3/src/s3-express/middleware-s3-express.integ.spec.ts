import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { AwsCredentialIdentity, AwsSdkFeatures } from "@aws-sdk/types";
import { describe, expect, test as it } from "vitest";

import { S3ExpressIdentity, S3ExpressIdentityProvider } from "./index";

describe("middleware-s3-express", () => {
  const s3ExpressIdentityProvider: S3ExpressIdentityProvider = {
    async getS3ExpressIdentity(
      awsIdentity: AwsCredentialIdentity,
      identityProperties: Record<string, string>
    ): Promise<S3ExpressIdentity> {
      return {
        accessKeyId: "S3_EXPRESS_ACCESS_KEY_ID",
        secretAccessKey: "S3_EXPRESS_SECRET_ACCESS_KEY",
        sessionToken: "S3_EXPRESS_SESSION_TOKEN",
      };
    },
  };

  describe(S3.name, () => {
    it("should not send the x-amz-create-session-mode header", async () => {
      const client = new S3({ region: "us-west-2", s3ExpressIdentityProvider });

      requireRequestsFrom(client).toMatch({
        headers: {
          "x-amz-create-session-mode": /undefined/,
        },
      });

      await client.getObject({
        Bucket: "aws-sdk-js-v3-test--usw2-az1--x-s3",
        Key: "1",
      });

      expect.hasAssertions();
    });

    it("should default to CRC32 checksum when the request requires a checksum and none is specified", async () => {
      const client = new S3({ region: "us-west-2", s3ExpressIdentityProvider });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-md5": /undefined/,
          "x-amz-checksum-crc32": /b9SZTg==/,
        },
      });

      await client.deleteObjects({
        Bucket: "aws-sdk-js-v3-test--usw2-az1--x-s3",
        Delete: {
          Objects: [],
        },
      });

      expect.hasAssertions();
    });

    it("does not fill a default CreateBucketConfiguration.LocationConstraint", async () => {
      const client = new S3({ region: "us-west-2", s3ExpressIdentityProvider });

      requireRequestsFrom(client).toMatch({
        headers: {
          "content-md5": /undefined/,
        },
        body(val = "") {
          expect(val).not.toContain("LocationConstraint");
        },
      });

      await client.createBucket({
        Bucket: "aws-sdk-js-v3-test--usw2-az1--x-s3",
        CreateBucketConfiguration: {
          Location: {
            Type: "AvailabilityZone",
            Name: "usw2-az1",
          },
        },
      });

      expect.hasAssertions();
    });

    it("should use the session token header instead of the security token header", async () => {
      const client = new S3({ region: "us-west-2", s3ExpressIdentityProvider });

      const SESSION_TOKEN_QUERY_PARAM = "X-Amz-S3session-Token";

      requireRequestsFrom(client).toMatch({
        headers: {
          [SESSION_TOKEN_QUERY_PARAM.toLowerCase()]: /S3_EXPRESS_SESSION_TOKEN/,
          "x-amz-security-token": /undefined/,
        },
      });

      await client.putObject({
        Bucket: "aws-sdk-js-v3-test--usw2-az1--x-s3",
        Key: "test.json",
        Body: Buffer.from("{}"),
      });

      expect.hasAssertions();
    });

    it("should feature-detect S3 express bucket", async () => {
      const client = new S3({
        region: "us-west-2",
        s3ExpressIdentityProvider,
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          ["user-agent"](ua) {
            const metadata = ua.match(/(.*?) m\/(.*?)$/)[2];
            expect(metadata).toContain("J" as AwsSdkFeatures["S3_EXPRESS_BUCKET"]);
          },
        },
      });

      await client.headBucket({
        Bucket: "aws-sdk-js-v3-test--usw2-az1--x-s3",
      });
    });
  });
});
