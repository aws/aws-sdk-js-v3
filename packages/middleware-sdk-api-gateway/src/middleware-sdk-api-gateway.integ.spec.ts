jest.mock("@aws-sdk/credential-provider-node", () => ({
  defaultProvider: async () => {
    return {
      secretAccessKey: "integration-test",
      accessKeyId: "integration-test",
      sessionToken: "integration-test",
    };
  },
}));
import { APIGateway } from "@aws-sdk/client-api-gateway";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-sdk-api-gateway", () => {
  describe(APIGateway.name, () => {
    it("should add accept header", async () => {
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
  });
});
