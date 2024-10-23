import { Lambda } from "@aws-sdk/client-lambda";
import { describe, expect, test as it } from "vitest";

import { requireRequestsFrom } from "../../../private/aws-util-test/src";

const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";

describe("middleware-recursion-detection", () => {
  describe(Lambda.name, () => {
    it("should create recursion detection headers", async () => {
      process.env[ENV_LAMBDA_FUNCTION_NAME] = "MyLambdaFunction";
      process.env[ENV_TRACE_ID] = "trace-1234";

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "X-Amzn-Trace-Id": /^trace-1234$/,
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });
  });
});
