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

  it("should not inject default role assumer", () => {
    fromTokenFile();
    expect(coreProvider).toHaveBeenCalledWith({});
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("defers to @aws-sdk/credential-provider-web-identity", () => {
    const clientConfig = {
      region: "US_FOO_0",
    };
    const plugin = { applyToStack: () => {} };
    fromTokenFile({
      clientConfig,
      clientPlugins: [plugin],
    });
    expect(coreProvider).toHaveBeenCalledWith({
      clientConfig,
      clientPlugins: [plugin],
    });
  });
});
