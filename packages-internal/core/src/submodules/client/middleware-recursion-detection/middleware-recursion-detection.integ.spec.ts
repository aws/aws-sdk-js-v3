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

    it("should propagate W3C traceparent header from InvokeStore", async () => {
      const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: new RegExp(`^${mockTraceparent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should propagate all W3C trace context headers from InvokeStore", async () => {
      const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
      const mockTracestate = "congo=t61rcWkgMzE";
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: /^00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01$/,
          tracestate: /^congo=t61rcWkgMzE$/,
          baggage: /^userId=alice,serverNode=DF%2028$/,
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should propagate both X-Amzn-Trace-Id and W3C headers when in Lambda", async () => {
      const mockXRayTraceId = "Root=1-abc-def;Parent=123;Sampled=1";
      const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
      const mockTracestate = "congo=t61rcWkgMzE";
      process.env[ENV_LAMBDA_FUNCTION_NAME] = "MyLambdaFunction";

      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockXRayTraceId,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => undefined,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          "X-Amzn-Trace-Id": /^Root=1-abc-def;Parent=123;Sampled=1$/,
          traceparent: /^00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01$/,
          tracestate: /^congo=t61rcWkgMzE$/,
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should NOT overwrite existing traceparent or add tracestate/baggage from InvokeStore when traceparent is already set", async () => {
      const existingTraceparent = "00-abcdef1234567890abcdef1234567890-1234567890abcdef-01";
      const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
      const mockTracestate = "congo=t61rcWkgMzE";
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      // Add middleware that sets traceparent before recursion detection runs.
      // recursionDetectionMiddleware runs at build step with low priority,
      // so we add at build step with high priority to run first.
      client.middlewareStack.add(
        (next) => async (args: any) => {
          args.request.headers["traceparent"] = existingTraceparent;
          return next(args);
        },
        { step: "build", priority: "high", name: "testSetTraceparent", override: true }
      );

      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: new RegExp(`^${existingTraceparent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
          tracestate: (value: any) => expect(value).toBeUndefined(),
          baggage: (value: any) => expect(value).toBeUndefined(),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should preserve existing traceparent, tracestate, and baggage without overwriting from InvokeStore", async () => {
      const existingTraceparent = "00-abcdef1234567890abcdef1234567890-1234567890abcdef-01";
      const existingTracestate = "vendor1=opaqueValue1";
      const existingBaggage = "key1=value1";
      const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
      const mockTracestate = "congo=t61rcWkgMzE";
      const mockBaggage = "userId=alice,serverNode=DF%2028";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      client.middlewareStack.add(
        (next) => async (args: any) => {
          args.request.headers["traceparent"] = existingTraceparent;
          args.request.headers["tracestate"] = existingTracestate;
          args.request.headers["baggage"] = existingBaggage;
          return next(args);
        },
        { step: "build", priority: "high", name: "testSetTraceHeaders", override: true }
      );

      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: new RegExp(`^${existingTraceparent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
          tracestate: new RegExp(`^${existingTracestate.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
          baggage: new RegExp(`^${existingBaggage.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });

    it("should NOT add W3C headers when InvokeStore has no traceparent", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => undefined,
        getTracestate: () => "congo=t61rcWkgMzE",
        getBaggage: () => "userId=alice",
      } as any);

      const client = new Lambda({
        region: "us-west-2",
      });

      requireRequestsFrom(client).toMatch({
        headers: {
          traceparent: (value: any) => expect(value).toBeUndefined(),
        },
      });

      await client.invoke({
        FunctionName: "my-function",
      });

      expect.hasAssertions();
    });
  });
});
