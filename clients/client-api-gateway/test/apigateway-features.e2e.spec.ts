import { getE2eTestResources } from "@aws-sdk/aws-util-test/src";
import { APIGateway } from "@aws-sdk/client-api-gateway";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("@aws-sdk/client-api-gateway", () => {
  let client: APIGateway;
  let region: string;

  beforeAll(async () => {
    const e2eTestResourcesEnv = await getE2eTestResources();
    Object.assign(process.env, e2eTestResourcesEnv);

    region = process?.env?.AWS_SMOKE_TEST_REGION as string;

    client = new APIGateway({ region });
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
