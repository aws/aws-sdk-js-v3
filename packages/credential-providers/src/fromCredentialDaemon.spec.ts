import { beforeEach, describe, expect, it, vi } from "vitest";

const credentials = { accessKeyId: "ASIADAEMON", secretAccessKey: "secret" };
const innerProvider = vi.fn().mockResolvedValue(credentials);

vi.mock("@aws-sdk/credential-provider-daemon", () => ({
  fromCredentialDaemon: vi.fn(() => innerProvider),
}));
vi.mock("@aws-sdk/credential-provider-ini", () => ({
  fromCredentialDaemonProfile: vi.fn(() => innerProvider),
}));

import { fromCredentialDaemon as mockFromCredentialDaemon } from "@aws-sdk/credential-provider-daemon";
import { fromCredentialDaemonProfile as mockFromCredentialDaemonProfile } from "@aws-sdk/credential-provider-ini";

import { fromCredentialDaemon } from "./fromCredentialDaemon";

describe("fromCredentialDaemon", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("passes init, including the timeouts, to the underlying fromCredentialDaemon", async () => {
    const init = { credential: "my-credential", connectTimeout: 250, timeout: 2000 };
    const args = { callerClientConfig: { region: async () => "us-east-1" } };
    const provider = fromCredentialDaemon(init);

    await expect(provider(args)).resolves.toBe(credentials);
    expect(mockFromCredentialDaemon).toHaveBeenCalledWith(init);
    expect(innerProvider).toHaveBeenCalledWith(args);
  });

  it("does not load the underlying provider until it is called", () => {
    fromCredentialDaemon({ credential: "my-credential" });
    fromCredentialDaemon({ profile: "dev" });
    expect(mockFromCredentialDaemon).not.toHaveBeenCalled();
    expect(mockFromCredentialDaemonProfile).not.toHaveBeenCalled();
  });

  it("reads the profile when no credential is given, ignoring accountId and roleName", async () => {
    const args = { callerClientConfig: { profile: "client-profile" } };
    const provider = fromCredentialDaemon({
      profile: "dev",
      configFilepath: "/tmp/config",
      accountId: "111122223333",
      roleName: "Admin",
      connectTimeout: 250,
      timeout: 2000,
    });

    await expect(provider(args)).resolves.toBe(credentials);
    expect(mockFromCredentialDaemonProfile).toHaveBeenCalledWith({
      profile: "dev",
      configFilepath: "/tmp/config",
      credentialDaemon: { connectTimeout: 250, timeout: 2000 },
    });
    expect(innerProvider).toHaveBeenCalledWith(args);
    expect(mockFromCredentialDaemon).not.toHaveBeenCalled();
  });

  it("uses the client's profile when called with no options", async () => {
    await fromCredentialDaemon()();
    expect(mockFromCredentialDaemonProfile).toHaveBeenCalledWith({ credentialDaemon: {} });
  });
});
