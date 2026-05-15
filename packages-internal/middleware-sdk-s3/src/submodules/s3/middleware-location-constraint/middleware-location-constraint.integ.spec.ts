import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { S3 } from "@aws-sdk/client-s3";
import { describe, expect, test as it } from "vitest";

describe("middleware-location-constraint", () => {
  describe(S3.name, () => {
    it("should set on input CreateBucketConfiguration and LocationConstraint", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        body: /<CreateBucketConfiguration (.*)?><LocationConstraint>us-west-2<\/LocationConstraint><\/CreateBucketConfiguration>/,
      });

      await client.createBucket({
        Bucket: "b",
      });

      expect.hasAssertions();
    });

    it("except for us-east-1 for some reason", async () => {
      const client = new S3({ region: "us-east-1" });

      requireRequestsFrom(client).toMatch({
        body(body = "") {
          expect(body).not.toContain("LocationConstraint");
        },
      });

      await client.createBucket({
        Bucket: "b",
      });

      expect.hasAssertions();
    });

    it("should populate other elements of the CreateBucketConfiguration regardless of Location or LocationConstraint", async () => {
      const client = new S3({ region: "us-east-1" });

      requireRequestsFrom(client).toMatch({
        body(body = "") {
          expect(body).toContain(
            `<CreateBucketConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/"><Tags><Tag><Key>my-tag-key</Key><Value>my-tag-value</Value></Tag></Tags></CreateBucketConfiguration>`
          );
        },
      });

      await client.createBucket({
        Bucket: "b",
        CreateBucketConfiguration: {
          Tags: [
            {
              Key: "my-tag-key",
              Value: "my-tag-value",
            },
          ],
        },
      });

      expect.hasAssertions();
    });

    it("also not for S3 Express buckets", async () => {
      const client = new S3({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        hostname: /-control.us-west-2.amazonaws.com$/,
        body(body = "") {
          expect(body).not.toContain("LocationConstraint");
        },
      });

      await client.createBucket({
        Bucket: "s3-express-1234--usw2-az2--x-s3",
        CreateBucketConfiguration: {
          Location: {
            Type: "AvailabilityZone",
            Name: "usw2-az2",
          },
        },
      });

      expect.hasAssertions();
    });
  });
});
