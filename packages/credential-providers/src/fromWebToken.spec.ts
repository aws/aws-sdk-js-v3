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

  it("should inject default role assumer", () => {
    fromWebToken({
      roleArn,
      webIdentityToken,
    });
    expect(coreProvider).toBeCalledWith({
      roleArn,
      webIdentityToken,
      roleAssumerWithWebIdentity: mockRoleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalled();
  });

  it("should supply sts config and plugins to role assumer", () => {
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
    expect((coreProvider as jest.Mock).mock.calls[0][0]).toMatchObject({
      roleAssumerWithWebIdentity: mockRoleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(clientConfig, [plugin]);
  });
});
