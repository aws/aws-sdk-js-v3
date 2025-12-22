import { Lambda } from "@aws-sdk/client-lambda";
import { beforeAll, describe, expect, test as it } from "vitest";

describe(Lambda.name, () => {
  let client: Lambda;

  beforeAll(async () => {
    client = new Lambda({ region: "us-west-2" });
  });

  describe("Listing functions", () => {
    it("should successfully list functions", async () => {
      const result = await client.listFunctions({});

      expect(result.$metadata?.httpStatusCode).toBe(200);
      expect(Array.isArray(result.Functions)).toBe(true);
    });
  });

  describe("Error handling", () => {
    it("should contain resource not found error for non-existent function", async () => {
      await expect(
        client.invoke({
          FunctionName: "non-exist",
        })
      ).rejects.toThrow(
        expect.objectContaining({
          name: "ResourceNotFoundException",
        })
      );
    });
  });
});
