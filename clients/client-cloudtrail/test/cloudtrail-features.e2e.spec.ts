import { CloudTrail } from "@aws-sdk/client-cloudtrail";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(CloudTrail.name, () => {
  let client: CloudTrail;

  beforeAll(async () => {
    client = new CloudTrail({ region: "us-west-2" });
  });

  describe("Describe trails", () => {
    it("should return trails list when describe trails is called", async () => {
      const result = await client.describeTrails({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
    });
  });

  describe("Error handling", () => {
    it("should handle InvalidTrailNameException for invalid trail name", async () => {
      await expect(
        client.createTrail({
          Name: "", // Empty name should cause InvalidTrailNameException
          S3BucketName: "test-bucket",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "InvalidTrailNameException",
          message: expect.stringContaining("cannot be blank"),
        })
      );
    });
  });
});
