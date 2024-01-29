import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromWebToken as coreProvider } from "@aws-sdk/credential-provider-web-identity";

import { fromWebToken } from "./fromWebToken";

const mockRoleAssumerWithWebIdentity = jest.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

jest.mock("@aws-sdk/credential-provider-web-identity", () => ({
  fromWebToken: jest.fn(),
}));

describe("fromWebToken", () => {
  const roleArn = "ROLE_ARN";
  const webIdentityToken = "WEB_IDENTITY_TOKEN";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should not inject default role assumer", () => {
    fromWebToken({
      roleArn,
      webIdentityToken,
    });
    expect(coreProvider).toHaveBeenCalledWith({
      roleArn,
      webIdentityToken,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("defers to @aws-sdk/credential-provider-web-identity", () => {
    const clientConfig = {
      region: "US_FOO_0",
    };
    const plugin = { applyToStack: () => {} };
    fromWebToken({
      roleArn,
      webIdentityToken,
      clientConfig,
      clientPlugins: [plugin],
    });
    expect(coreProvider).toHaveBeenCalledWith({
      roleArn,
      webIdentityToken,
      clientConfig,
      clientPlugins: [plugin],
    });
  });
});
