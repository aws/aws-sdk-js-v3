const ROLE_ASSUMER = "ROLE_ASSUMER";
const ROLE_ASSUMER_WITH_WEB_IDENTITY = "ROLE_ASSUMER_WITH_WEB_IDENTITY";

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumer: jest.fn().mockReturnValue(ROLE_ASSUMER),
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockReturnValue(ROLE_ASSUMER_WITH_WEB_IDENTITY),
}));

import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromIni as coreProvider } from "@aws-sdk/credential-provider-ini";

import { fromIni } from "./fromIni";

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
      roleAssumer: ROLE_ASSUMER,
      roleAssumerWithWebIdentity: ROLE_ASSUMER_WITH_WEB_IDENTITY,
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

  it("should use supplied sts options", () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    fromIni({ profile, clientConfig });
    expect(getDefaultRoleAssumer).toBeCalledWith(clientConfig);
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(clientConfig);
  });
});
