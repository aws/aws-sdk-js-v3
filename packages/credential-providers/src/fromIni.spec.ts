import { fromIni as coreProvider } from "@aws-sdk/credential-provider-ini";
import { getDefaultRoleAssumer, getDefaultRoleAssumerWithWebIdentity } from "@aws-sdk/nested-clients";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromIni } from "./fromIni";

const mockRoleAssumer = vi.fn().mockResolvedValue("ROLE_ASSUMER");
const mockRoleAssumerWithWebIdentity = vi.fn().mockResolvedValue("ROLE_ASSUMER_WITH_WEB_IDENTITY");

vi.mock("@aws-sdk/nested-clients", () => ({
  getDefaultRoleAssumer: vi.fn().mockImplementation(() => mockRoleAssumer),
  getDefaultRoleAssumerWithWebIdentity: vi.fn().mockImplementation(() => mockRoleAssumerWithWebIdentity),
}));

vi.mock("@aws-sdk/credential-provider-ini", () => ({
  fromIni: vi.fn(),
}));

describe("fromIni", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should not inject default role assumers", () => {
    // these role assumers are now dynamically loaded.
    const profile = "profile";
    fromIni({ profile });
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("should use supplied role assumers", () => {
    const profile = "profile";
    const roleAssumer = vi.fn();
    const roleAssumerWithWebIdentity = vi.fn();
    fromIni({ profile, roleAssumer, roleAssumerWithWebIdentity });
    expect(coreProvider).toHaveBeenCalledWith({
      profile,
      roleAssumer,
      roleAssumerWithWebIdentity,
    });
    expect(getDefaultRoleAssumer).not.toHaveBeenCalled();
    expect(getDefaultRoleAssumerWithWebIdentity).not.toHaveBeenCalled();
  });

  it("defers to @aws-sdk/credential-provider-ini", () => {
    const profile = "profile";
    const clientConfig = {
      region: "US_BAR_1",
    };
    const plugin = { applyToStack: () => {} };
    fromIni({ profile, clientConfig, clientPlugins: [plugin] });
    expect(coreProvider).toHaveBeenCalledWith({ profile, clientConfig, clientPlugins: [plugin] });
  });
});
