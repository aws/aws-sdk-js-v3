const ROLE_ASSUMER_WITH_WEB_IDENTITY = "ROLE_ASSUMER_WITH_WEB_IDENTITY";

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockReturnValue(ROLE_ASSUMER_WITH_WEB_IDENTITY),
}));

import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromWebToken as coreProvider } from "@aws-sdk/credential-provider-web-identity";

import { fromWebToken } from "./fromWebToken";

jest.mock("@aws-sdk/credential-provider-web-identity", () => ({
  fromWebToken: jest.fn(),
}));

describe("fromWebToken", () => {
  const roleArn = "ROLE_ARN";
  const webIdentityToken = "WEB_IDENTITY_TOKEN";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should inject default role assumer", () => {
    fromWebToken({
      roleArn,
      webIdentityToken,
    });
    expect(coreProvider).toBeCalledWith({
      roleArn,
      webIdentityToken,
      roleAssumerWithWebIdentity: ROLE_ASSUMER_WITH_WEB_IDENTITY,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalled();
  });

  it("should supply sts config to role assumer", () => {
    const stsConfig = {
      region: "US_FOO_0",
    };
    fromWebToken({
      roleArn,
      webIdentityToken,
      stsConfig,
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]).toMatchObject({
      roleAssumerWithWebIdentity: ROLE_ASSUMER_WITH_WEB_IDENTITY,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(stsConfig);
  });
});
