import type { Exact } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  AwsCliV2CompatibleProviderOptions,
  fromAwsCliV2CompatibleProviderChain,
} from "./fromAwsCliV2CompatibleProviderChain";

// the options type should have no required fields.
type Assert = Exact<AwsCliV2CompatibleProviderOptions, Partial<AwsCliV2CompatibleProviderOptions>>;
const typeAssertion: Assert = true as const;
void typeAssertion;

describe("fromAwsCliV2CompatibleProviderChain", () => {
  let mockFromIni: any;
  let mockFromNodeProviderChain: any;

  const mockLogger = {
    debug: vi.fn(),
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.resetModules();

    mockFromIni = vi.fn(() =>
      vi.fn(async () => ({
        accessKeyId: "PROFILE_ACCESS_KEY",
        secretAccessKey: "PROFILE_SECRET_KEY",
      }))
    );
    vi.doMock("@aws-sdk/credential-provider-ini", () => ({
      fromIni: mockFromIni,
    }));

    mockFromNodeProviderChain = vi.fn(() =>
      vi.fn(async () => ({
        accessKeyId: "AWS_SDK_CHAIN_AK",
        secretAccessKey: "AWS_SDK_CHAIN_SK",
      }))
    );
    vi.doMock("@aws-sdk/credential-provider-node", () => ({
      defaultProvider: mockFromNodeProviderChain,
    }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should use profile credentials when profile is specified", async () => {
    const provider = fromAwsCliV2CompatibleProviderChain({
      profile: "test-profile",
      logger: mockLogger,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "PROFILE_ACCESS_KEY",
      secretAccessKey: "PROFILE_SECRET_KEY",
    });

    expect(mockFromIni).toHaveBeenCalled();
    expect(mockLogger.debug).toHaveBeenCalledWith(
      `@aws-sdk/credential-providers - fromAwsCliV2CompatibleProviderChain - Using fromIni with profile: test-profile`
    );
  });

  it.only("should fall back to fromNodeProviderChain when no profile is specified", async () => {
    const provider = fromAwsCliV2CompatibleProviderChain({
      logger: console,
    });

    const result = await provider();

    expect(result).toEqual({
      accessKeyId: "AWS_SDK_CHAIN_AK",
      secretAccessKey: "AWS_SDK_CHAIN_SK",
    });
    expect(mockFromNodeProviderChain).toHaveBeenCalled();
  });
});
