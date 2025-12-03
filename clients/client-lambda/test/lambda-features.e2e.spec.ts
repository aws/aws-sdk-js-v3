import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { Lambda } from "@aws-sdk/client-lambda";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("Amazon Lambda Features", () => {
  let client: Lambda;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new Lambda({ region });
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
