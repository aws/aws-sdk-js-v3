import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { CloudTrail } from "@aws-sdk/client-cloudtrail";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-cloudtrail", () => {
  let client: CloudTrail;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new CloudTrail({ region });
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
