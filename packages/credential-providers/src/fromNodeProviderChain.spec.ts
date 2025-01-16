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
  defaultProvider: vi.fn(),
}));

describe(fromNodeProviderChain.name, () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not inject default role assumers", () => {
    const profile = "profile";
    fromNodeProviderChain({ profile });
    expect(defaultProvider).toHaveBeenCalledWith({
      profile,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should use supplied role assumers", () => {
    const profile = "profile";
    const roleAssumer = vi.fn();
    const roleAssumerWithWebIdentity = vi.fn();
    fromNodeProviderChain({ profile, roleAssumer, roleAssumerWithWebIdentity });
    expect(defaultProvider).toHaveBeenCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should defer to @aws-sdk/credential-provider-node", () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    fromNodeProviderChain({ profile, clientConfig, clientPlugins: [plugin] });
    expect(defaultProvider).toHaveBeenCalledWith({ profile, clientConfig, clientPlugins: [plugin] });
  });
});
