import { InvokeStore } from "@aws/lambda-invoke-store";
import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { Lambda } from "@aws-sdk/client-lambda";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";

describe("middleware-recursion-detection", () => {
  const originEnv = process.env;

  beforeEach(() => {
    vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue(undefined as any);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    process.env = originEnv;
  });

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

    it("should propagate baggage header from InvokeStore", async () => {
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          baggage: new RegExp(`^${mockBaggage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should propagate both X-Amzn-Trace-Id and baggage when in Lambda", async () => {
      const mockXRayTraceId = "Root=1-abc-def;Parent=123;Sampled=1";
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      process.env[ENV_LAMBDA_FUNCTION_NAME] = "MyLambdaFunction";

      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockXRayTraceId,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "X-Amzn-Trace-Id": /^Root=1-abc-def;Parent=123;Sampled=1$/,
          baggage: new RegExp(`^${mockBaggage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should NOT overwrite existing baggage from InvokeStore when baggage is already set", async () => {
      const existingBaggage = "key1=value1";
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      // Set baggage before recursion detection runs.
      // recursionDetectionMiddleware runs at build step with low priority,
      // so we add at build step with high priority to run first.
      client.middlewareStack.add(
        (next) => async (args: any) => {
          args.request.headers["baggage"] = existingBaggage;
          return next(args);
        },
        { step: "build", priority: "high", name: "testSetBaggage", override: true }
      );

      requireRequestsFrom(client).toMatch({
        headers: {
          baggage: new RegExp(`^${existingBaggage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should NOT set baggage when InvokeStore does not provide it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          baggage: (value: any) => expect(value).toBeUndefined(),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });
  });
});
