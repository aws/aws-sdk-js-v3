import { EMR } from "@aws-sdk/client-emr";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(EMR.name, () => {
  let client: EMR;

  beforeAll(async () => {
    client = new EMR({ region: "us-west-2" });
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
