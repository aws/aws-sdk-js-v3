import { defaultProvider } from "@aws-sdk/credential-provider-node";
import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients/sts";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromNodeProviderChain } from "./fromNodeProviderChain";

const mockRoleAssumer = vi.fn().mockResolvedValue("ROLE_ASSUMER");
const mockRoleAssumerWithWebIdentity = vi.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

vi.mock("@aws-sdk/nested-clients/sts", () => ({
  getDefaultRoleAssumer: vi.fn().mockImplementation(() => mockRoleAssumer),
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

vi.mock("@aws-sdk/credential-provider-node", () => ({
  defaultProvider: vi.fn().mockReturnValue(vi.fn()),
}));

describe(fromNodeProviderChain.name, () => {
  const mockInnerProvider = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    // After clearAllMocks, restore the mock return value for defaultProvider.
    mockInnerProvider.mockResolvedValue({
      accessKeyId: "MOCK_ACCESS_KEY",
      secretAccessKey: "MOCK_SECRET_KEY",
    });
    vi.mocked(defaultProvider).mockReturnValue(mockInnerProvider);
  });

  it("should not inject default role assumers", async () => {
    const profile = "profile";
    const provider = fromNodeProviderChain({ profile });
    await provider({});
    expect(defaultProvider).toHaveBeenCalledWith({
      profile,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should use supplied role assumers", async () => {
    const profile = "profile";
    const roleAssumer = vi.fn();
    const roleAssumerWithWebIdentity = vi.fn();
    const provider = fromNodeProviderChain({ profile, roleAssumer, roleAssumerWithWebIdentity });
    await provider({});
    expect(defaultProvider).toHaveBeenCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should defer to @aws-sdk/credential-provider-node", async () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    const provider = fromNodeProviderChain({ profile, clientConfig, clientPlugins: [plugin] });
    await provider({});
    expect(defaultProvider).toHaveBeenCalledWith({ profile, clientConfig, clientPlugins: [plugin] });
  });

  it("should construct defaultProvider only once across multiple invocations (memoization)", async () => {
    // Regression test for https://github.com/aws/aws-sdk-js-v3/issues/8184
    // Before the fix, defaultProvider({ ...init }) was called inside the per-invocation
    // closure, creating a new chain (with fresh memoization state) on every call.
    const provider = fromNodeProviderChain({ profile: "test" });

    await provider({});
    await provider({});
    await provider({});

    // defaultProvider should only be constructed once — the same chain instance
    // should be reused across invocations to preserve memoization.
    expect(defaultProvider).toHaveBeenCalledTimes(1);
  });

  it("should forward per-call args to the cached chain on each invocation", async () => {
    // Ensures the cached inner provider receives the per-call args (e.g. callerClientConfig)
    const provider = fromNodeProviderChain({ profile: "test" });

    const args1 = { callerClientConfig: { region: async () => "us-east-1" } };
    const args2 = { callerClientConfig: { region: async () => "eu-west-1" } };

    await provider(args1);
    await provider(args2);

    expect(defaultProvider).toHaveBeenCalledTimes(1);
    expect(mockInnerProvider).toHaveBeenCalledTimes(2);
    expect(mockInnerProvider).toHaveBeenNthCalledWith(1, args1);
    expect(mockInnerProvider).toHaveBeenNthCalledWith(2, args2);
  });

  it("should forward forceRefresh to the cached chain", async () => {
    const provider = fromNodeProviderChain({ profile: "test" });

    await provider({ forceRefresh: true });

    expect(defaultProvider).toHaveBeenCalledTimes(1);
    expect(mockInnerProvider).toHaveBeenCalledWith({ forceRefresh: true });
  });

  it("should create independent chains for separate fromNodeProviderChain() calls", async () => {
    // Each call to fromNodeProviderChain() should produce its own cached chain
    // with its own init params.
    const provider1 = fromNodeProviderChain({ profile: "profile-a" });
    const provider2 = fromNodeProviderChain({ profile: "profile-b" });

    await provider1({});
    await provider2({});

    expect(defaultProvider).toHaveBeenCalledTimes(2);
    expect(defaultProvider).toHaveBeenNthCalledWith(1, { profile: "profile-a" });
    expect(defaultProvider).toHaveBeenNthCalledWith(2, { profile: "profile-b" });
  });
});
