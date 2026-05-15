import type { AwsHandlerExecutionContext } from "@aws-sdk/types";
import { describe, expect, test as it, vi } from "vitest";

import { checkFeatures } from "./check-features";

describe(checkFeatures.name, () => {
  it("should not call the credentials provider to retrieve the identity", async () => {
    const config = {
      credentials: vi.fn(),
    };

    const context = {
      __smithy_context: {
        selectedHttpAuthScheme: {
          identity: {
            accountId: "123456789012",
            $source: {},
          } as any,
        },
      },
    } as AwsHandlerExecutionContext;

    await checkFeatures(context, config, {
      request: undefined,
      input: undefined,
    });

    expect(config.credentials).not.toHaveBeenCalled();
    expect(context.__aws_sdk_context?.features?.RESOLVED_ACCOUNT_ID).toBe("T");
  });

  it("should not throw an error if no fields are present", async () => {
    await checkFeatures({}, {}, {} as any);
  });

  it.each([
    ["standard", "RETRY_MODE_STANDARD", "E"],
    ["adaptive", "RETRY_MODE_ADAPTIVE", "F"],
  ] as const)("should set %s retry mode feature", async (mode, featureKey, featureValue) => {
    const context = {} as AwsHandlerExecutionContext;
    const config = { retryStrategy: async () => ({ mode }) };
    await checkFeatures(context, config, { request: undefined, input: undefined });
    expect(context.__aws_sdk_context?.features?.[featureKey]).toBe(featureValue);
  });

  it.each([["unknown"], [undefined]])("should not set any retry mode feature when mode is %s", async (mode) => {
    const context = {} as AwsHandlerExecutionContext;
    const config = { retryStrategy: async () => ({ ...(mode !== undefined && { mode }) }) };
    await checkFeatures(context, config, { request: undefined, input: undefined });
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_STANDARD).toBeUndefined();
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_ADAPTIVE).toBeUndefined();
    expect(context.__aws_sdk_context?.features?.RETRY_MODE_LEGACY).toBeUndefined();
  });
});
