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

  it("should inject default role assumers", () => {
    const profile = "profile";
    fromIni({ profile });
    expect(coreProvider).toBeCalledWith({
      profile,
      roleAssumer: mockRoleAssumer,
      roleAssumerWithWebIdentity: mockRoleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).toBeCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalled();
  });

  it("should use supplied role assumers", () => {
    const profile = "profile";
    const roleAssumer = jest.fn();
    const roleAssumerWithWebIdentity = jest.fn();
    fromIni({ profile, roleAssumer, roleAssumerWithWebIdentity });
    expect(coreProvider).toBeCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toBeCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toBeCalled();
  });

  it("should use supplied sts and plugins options", () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    fromIni({ profile, clientConfig, clientPlugins: [plugin] });
    expect(getDefaultRoleAssumer).toBeCalledWith(clientConfig, [plugin]);
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(clientConfig, [plugin]);
  });
});
