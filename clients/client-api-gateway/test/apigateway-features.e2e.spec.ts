import { APIGateway } from "@aws-sdk/client-api-gateway";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(APIGateway.name, () => {
  let client: APIGateway;

  beforeAll(async () => {
    client = new APIGateway({ region: "us-west-2" });
  });

  describe("Making a request", () => {
    it("should successfully get REST APIs", async () => {
      const result = await client.getRestApis({});

      expect(Array.isArray(result.items)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should handle NotFoundException for invalid REST API ID", async () => {
      await expect(
        client.getRestApi({
          restApiId: "fake_id",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "NotFoundException",
        })
      );
    });
  });
});
