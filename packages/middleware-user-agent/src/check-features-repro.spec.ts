import { AwsHandlerExecutionContext } from "@aws-sdk/types";
import { describe, expect, test as it, vi } from "vitest";

import { checkFeatures } from "./check-features";

describe("checkFeatures reproduction for pre-SRA retries", () => {
  it("should return 'E' (RETRY_MODE_STANDARD) for pre-SRA standard retry", async () => {
    const config = {
      retryStrategy: async () =>
        ({
          // Mocking a pre-SRA retry strategy (no acquireInitialRetryToken)
          retry: vi.fn(),
        } as any),
    };

    const context = {
      __aws_sdk_context: { features: {} },
    } as AwsHandlerExecutionContext;

    await checkFeatures(context, config, {
      request: undefined,
      input: undefined,
    });

    // Should return "E" (Standard), NOT "D" (Legacy)
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_STANDARD).toBe("E");
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_LEGACY).toBeUndefined();
  });

  it("should return 'F' (RETRY_MODE_ADAPTIVE) for pre-SRA adaptive retry", async () => {
    const adaptiveMock = {
      retry: vi.fn(),
    };
    // Force the constructor name to identify as Adaptive
    Object.defineProperty(adaptiveMock, "constructor", {
      value: { name: "AdaptiveRetryStrategy" },
    });

    const config = {
      retryStrategy: async () => adaptiveMock as any,
    };

    const context = {
      __aws_sdk_context: { features: {} },
    } as AwsHandlerExecutionContext;

    await checkFeatures(context, config, {
      request: undefined,
      input: undefined,
    });

    // Should return "F" (Adaptive), NOT "D" (Legacy)
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_ADAPTIVE).toBe("F");
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_LEGACY).toBeUndefined();
  });
});
