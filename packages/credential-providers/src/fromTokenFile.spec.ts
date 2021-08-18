const ROLE_ASSUMER_WITH_WEB_IDENTITY = "ROLE_ASSUMER_WITH_WEB_IDENTITY";

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockReturnValue(ROLE_ASSUMER_WITH_WEB_IDENTITY),
}));

import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromTokenFile as coreProvider } from "@aws-sdk/credential-provider-web-identity";

import { fromTokenFile } from "./fromTokenFile";

jest.mock("@aws-sdk/credential-provider-web-identity", () => ({
  fromTokenFile: jest.fn(),
}));

describe("fromTokenFile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should inject default role assumer", () => {
    fromTokenFile();
    expect(coreProvider).toBeCalledWith({
      roleAssumerWithWebIdentity: ROLE_ASSUMER_WITH_WEB_IDENTITY,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalled();
  });

  it("should supply sts config to role assumer", () => {
    const clientConfig = {
      region: "US_FOO_0",
    };
    fromTokenFile({
      clientConfig,
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]).toMatchObject({
      roleAssumerWithWebIdentity: ROLE_ASSUMER_WITH_WEB_IDENTITY,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(clientConfig);
  });
});
