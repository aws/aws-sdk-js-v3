import { SageMaker } from "@aws-sdk/client-sagemaker";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(SageMaker.name, () => {
  let client: SageMaker;

  beforeAll(async () => {
    client = new SageMaker({ region: "us-west-2" });
  });

  describe("List Endpoints", () => {
    it("should successfully list endpoints", async () => {
      const result = await client.listEndpoints({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Endpoints)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain validation error for non-existent endpoint", async () => {
      await expect(
        client.describeEndpoint({
          EndpointName: "non-existent",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ValidationException",
        })
      );
    });
  });
});
