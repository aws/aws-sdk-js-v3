import { SageMaker } from "@aws-sdk/client-sagemaker";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

describe("middleware-host-header", () => {
  describe(SageMaker.name, () => {
    it("should set the host header", async () => {
      const client = new SageMaker({ region: "us-west-2" });

      requireRequestsFrom(client).toMatch({
        hostname: "api.sagemaker.us-west-2.amazonaws.com",
        headers: {
          host: "api.sagemaker.us-west-2.amazonaws.com",
        },
      });

      await client.describeCompilationJob({
        CompilationJobName: "compile-something",
      });

      expect.hasAssertions();
    });
  });
});
