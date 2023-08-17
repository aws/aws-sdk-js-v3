import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/client-sts";
import { fromTokenFile as coreProvider } from "@aws-sdk/credential-provider-web-identity";

import { fromTokenFile } from "./fromTokenFile";

const mockRoleAssumerWithWebIdentity = jest.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

jest.mock("@aws-sdk/client-sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: jest.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

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
      roleAssumerWithWebIdentity: mockRoleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalled();
  });

  it("should supply sts config and plugins to role assumer", () => {
    const clientConfig = {
      region: "US_FOO_0",
    };
    const plugin = { applyToStack: () => {} };
    fromTokenFile({
      clientConfig,
      clientPlugins: [plugin],
    });
    expect((coreProvider as jest.Mock).mock.calls[0][0]).toMatchObject({
      roleAssumerWithWebIdentity: mockRoleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumerWithWebIdentity).toBeCalledWith(clientConfig, [plugin]);
  });
});
