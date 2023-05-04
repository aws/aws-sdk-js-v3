import { MachineLearning } from "@aws-sdk/client-machine-learning";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-sdk-machine-learning", () => {
  describe(MachineLearning.name, () => {
    it("should use the input predict endpoint", async () => {
      const client = new MachineLearning({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        hostname: "predict-custom-endpoint.us-west-2.amazonaws.com",
        protocol: "https:",
        path: "/my-path",
        query: {
          apples: "oranges",
        },
      });

      await client.predict({
        PredictEndpoint: `https://predict-custom-endpoint.us-west-2.amazonaws.com/my-path?apples=oranges`,
        MLModelId: "1",
        Record: {
          hello: "world",
        },
      });

      expect.hasAssertions();
    });
  });
});
