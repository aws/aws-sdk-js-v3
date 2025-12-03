import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { EMR } from "@aws-sdk/client-emr";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Elastic MapReduce Features", () => {
  let client: EMR;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new EMR({ region });
  });

  describe("Making a request", () => {
    it("should successfully list clusters", async () => {
      const result = await client.listClusters({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Clusters)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for invalid parameters", async () => {
      await expect(
        client.runJobFlow({
          Name: "", // Empty name should cause ValidationException
          Instances: {}, // Empty instances config
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
