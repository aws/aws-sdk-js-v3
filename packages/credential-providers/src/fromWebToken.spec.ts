import { fromWebToken as coreProvider } from "@aws-sdk/credential-provider-web-identity";
import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromWebToken } from "./fromWebToken";

const mockRoleAssumerWithWebIdentity = vi.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

vi.mock("@aws-sdk/nested-clients", () => ({
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
  fromWebToken: vi.fn(),
}));

describe("fromWebToken", () => {
  const roleArn = "ROLE_ARN";
  const webIdentityToken = "WEB_IDENTITY_TOKEN";

  beforeEach(() => {
    vi.clearAllMocks();
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
