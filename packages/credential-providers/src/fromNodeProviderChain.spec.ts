import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { defaultProvider } from "@aws-sdk/credential-provider-node";

import { fromNodeProviderChain } from "./fromNodeProviderChain";

const mockRoleAssumer = jest.fn().mockResolvedValue("ROLE_ASSUMER");
const mockRoleAssumerWithWebIdentity = jest.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumer: jest.fn().mockImplementation(() => mockRoleAssumer),
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

jest.mock("@aws-sdk/credential-provider-node", () => ({
  defaultProvider: jest.fn(),
}));

describe(fromNodeProviderChain.name, () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    const roleAssumer = jest.fn();
    const roleAssumerWithWebIdentity = jest.fn();
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
