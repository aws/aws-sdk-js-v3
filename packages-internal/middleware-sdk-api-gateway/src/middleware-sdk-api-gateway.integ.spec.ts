import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { APIGateway } from "@aws-sdk/client-api-gateway";
import { describe, expect, test as it } from "vitest";

describe("middleware-sdk-api-gateway", () => {
  describe(APIGateway.name, () => {
    it("should add default accept header", async () => {
      const client = new APIGateway({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          accept: "application/json",
        },
      });

      await client.getApiKeys({});

      expect.hasAssertions();
    });

    it("should not override accept header", async () => {
      const client = new APIGateway({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          accept: "application/yaml",
        },
      });

      await client.getExport({
        restApiId: "rest-api-id",
        stageName: "stage-name",
        exportType: "oas30",
        accepts: "application/yaml",
      });

      expect.hasAssertions();
    });
  });
});
