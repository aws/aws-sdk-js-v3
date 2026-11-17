import { CredentialDaemonProviderError, fromCredentialDaemon } from "@aws-sdk/credential-provider-credential-daemon";
import { CredentialsProviderError } from "@smithy/core/config";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromCredentialDaemonProfile } from "./fromCredentialDaemonProfile";

vi.mock("@aws-sdk/credential-provider-credential-daemon", async (importActual) => ({
  ...(await importActual<any>()),
  fromCredentialDaemon: vi.fn(),
}));

describe(fromCredentialDaemonProfile.name, () => {
  const daemonCreds = { accessKeyId: "DAEMON_AKID", secretAccessKey: "DAEMON_SECRET" };
  const daemonProvider = vi.fn();
  let dir: string;
  let configFilepath: string;
  let filepath: string;

  const provider = (config: string, credentials = "", init: object = {}) => {
    writeFileSync(configFilepath, config);
    writeFileSync(filepath, credentials);
    return fromCredentialDaemonProfile({ configFilepath, filepath, ignoreCache: true, ...init });
  };

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "ini-daemon-"));
    configFilepath = join(dir, "config");
    filepath = join(dir, "credentials");
    daemonProvider.mockResolvedValue(daemonCreds);
    vi.mocked(fromCredentialDaemon).mockReturnValue(daemonProvider);
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
    vi.clearAllMocks();
  });

  it("gets the profile's credential from the credential daemon", async () => {
    const credentials = await provider("[profile dev]\ndaemon_credential = dev\n", "", {
      profile: "dev",
      credentialDaemon: { connectTimeout: 250, timeout: 2000 },
    })();

    expect(credentials).toBe(daemonCreds);
    expect(fromCredentialDaemon).toHaveBeenCalledWith(
      expect.objectContaining({ credential: "dev", connectTimeout: 250, timeout: 2000 })
    );
  });

  it("sends the SSO account and role of an SSO profile", async () => {
    await provider(
      "[profile dev]\nsso_session = corp\nsso_account_id = 111122223333\nsso_role_name = Admin\n" +
        "daemon_credential = corp\n[sso-session corp]\nsso_start_url = https://corp.awsapps.com/start\n" +
        "sso_region = us-east-1\n",
      "",
      { profile: "dev" }
    )();

    expect(fromCredentialDaemon).toHaveBeenCalledWith(
      expect.objectContaining({ credential: "corp", accountId: "111122223333", roleName: "Admin" })
    );
  });

  it("uses the client's profile when none is given", async () => {
    await provider("[profile client-profile]\ndaemon_credential = from-client\n")({
      callerClientConfig: { profile: "client-profile" } as any,
    });

    expect(fromCredentialDaemon).toHaveBeenCalledWith(expect.objectContaining({ credential: "from-client" }));
  });

  it.each([
    ["has no daemon_credential", "[profile dev]\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n", ""],
    ["has daemon_credential only in the credentials file", "", "[dev]\ndaemon_credential = dev\n"],
    [
      "is an SSO profile with neither sso_account_id nor sso_role_name",
      "[profile dev]\nsso_session = corp\ndaemon_credential = corp\n[sso-session corp]\n" +
        "sso_start_url = https://corp.awsapps.com/start\nsso_region = us-east-1\n",
      "",
    ],
  ])("rejects a profile that %s", async (_, config, credentials) => {
    const error = await provider(config, credentials, { profile: "dev" })().catch((e) => e);

    expect(error).toBeInstanceOf(CredentialsProviderError);
    expect(error).not.toBeInstanceOf(CredentialDaemonProviderError);
    expect(error.message).toBe("Profile dev does not use a credential daemon.");
    expect(fromCredentialDaemon).not.toHaveBeenCalled();
  });

  it("follows fromIni's rules for a daemon profile, such as role_arn being a configuration error", async () => {
    const error = await provider(
      "[profile dev]\ndaemon_credential = dev\nrole_arn = arn:aws:iam::123456789012:role/r\n",
      "",
      { profile: "dev" }
    )().catch((e) => e);

    expect(error).toBeInstanceOf(CredentialDaemonProviderError);
    expect(error.code).toBe("INVALID_CONFIG");
    expect(fromCredentialDaemon).not.toHaveBeenCalled();
  });
});
