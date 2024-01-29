import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromIni as coreProvider } from "@aws-sdk/credential-provider-ini";

import { fromIni } from "./fromIni";

const mockRoleAssumer = jest.fn().mockResolvedValue("ROLE_ASSUMER");
const mockRoleAssumerWithWebIdentity = jest.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumer: jest.fn().mockImplementation(() => mockRoleAssumer),
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

jest.mock("@aws-sdk/credential-provider-ini", () => ({
  fromIni: jest.fn(),
}));

describe("fromIni", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not inject default role assumers", () => {
    // these role assumers are now dynamically loaded.
    const profile = "profile";
    fromIni({ profile });
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should use supplied role assumers", () => {
    const profile = "profile";
    const roleAssumer = jest.fn();
    const roleAssumerWithWebIdentity = jest.fn();
    fromIni({ profile, roleAssumer, roleAssumerWithWebIdentity });
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("defers to @aws-sdk/credential-provider-ini", () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    fromIni({ profile, clientConfig, clientPlugins: [plugin] });
    expect(coreProvider).toHaveBeenCalledWith({ profile, clientConfig, clientPlugins: [plugin] });
  });
});
