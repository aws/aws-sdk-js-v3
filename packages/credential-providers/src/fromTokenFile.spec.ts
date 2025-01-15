import { fromTokenFile as coreProvider } from "@aws-sdk/credential-provider-web-identity";
import { getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients/sts";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromTokenFile } from "./fromTokenFile";

const mockRoleAssumerWithWebIdentity = vi.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

vi.mock("@aws-sdk/nested-clients/sts", () => ({
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

vi.mock("@aws-sdk/credential-provider-web-identity", () => ({
  fromTokenFile: vi.fn(),
}));

describe("fromTokenFile", () => {
  beforeEach(() => {
    vi.clearAllMocks();
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
