import { fromIni as coreProvider } from "@aws-sdk/credential-provider-ini";
import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients/sts";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";

const mockRoleAssumer = vi.fn().mockResolvedValue("ROLE_ASSUMER");
const mockRoleAssumerWithWebIdentity = vi.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

vi.mock("@aws-sdk/nested-clients/sts", () => ({
  getDefaultRoleAssumer: vi.fn().mockImplementation(() => mockRoleAssumer),
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

vi.mock("@aws-sdk/credential-provider-ini", () => ({
  fromIni: vi.fn().mockReturnValue(vi.fn()),
}));

describe("fromIni", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not inject default role assumers", async () => {
    // these role assumers are now dynamically loaded.
    const profile = "profile";
    const provider = fromIni({ profile });
    await provider({});
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should use supplied role assumers", async () => {
    const profile = "profile";
    const roleAssumer = vi.fn();
    const roleAssumerWithWebIdentity = vi.fn();
    const provider = fromIni({ profile, roleAssumer, roleAssumerWithWebIdentity });
    await provider({});
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("defers to @aws-sdk/credential-provider-ini", async () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    const provider = fromIni({ profile, clientConfig, clientPlugins: [plugin] });
    await provider({});
    expect(coreProvider).toHaveBeenCalledWith({ profile, clientConfig, clientPlugins: [plugin] });
  });
});
