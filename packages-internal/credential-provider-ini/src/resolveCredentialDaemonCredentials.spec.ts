import { CredentialDaemonProviderError, fromCredentialDaemon } from "@aws-sdk/credential-provider-daemon";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { CredentialsProviderError } from "@smithy/core/config";
import type { AttributedAwsCredentialIdentity } from "@aws-sdk/types";
import type { ParsedIniData } from "@smithy/types";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import {
  isCredentialDaemonProfile,
  isSsoProfileWithoutAccountOrRole,
  resolveCredentialDaemonCredentials,
} from "./resolveCredentialDaemonCredentials";
import { resolveProfileData } from "./resolveProfileData";

vi.mock("@aws-sdk/credential-provider-daemon", async (importActual) => ({
  ...(await importActual<any>()),
  fromCredentialDaemon: vi.fn(),
}));
vi.mock("@aws-sdk/credential-provider-process", () => ({ fromProcess: vi.fn() }));
vi.mock("@aws-sdk/credential-provider-sso", async (importActual) => ({
  ...(await importActual<any>()),
  fromSSO: vi.fn(),
}));

describe("credential daemon profiles", () => {
  const daemonCreds = {
    accessKeyId: "DAEMON_AKID",
    secretAccessKey: "DAEMON_SECRET",
    sessionToken: "DAEMON_TOKEN",
    expiration: new Date("3000-01-01T00:00:00.000Z"),
  };
  const daemonProvider = vi.fn();
  const roleCreds = { accessKeyId: "ROLE_AKID", secretAccessKey: "ROLE_SECRET" };
  let options: { roleAssumer: ReturnType<typeof vi.fn>; credentialDaemon?: object };

  beforeEach(() => {
    daemonProvider.mockResolvedValue(daemonCreds);
    vi.mocked(fromCredentialDaemon).mockReturnValue(daemonProvider);
    vi.mocked(fromProcess).mockReturnValue(async () => ({ accessKeyId: "PROCESS", secretAccessKey: "PROCESS" }));
    vi.mocked(fromSSO).mockReturnValue(async () => ({ accessKeyId: "SSO", secretAccessKey: "SSO" }));
    options = { roleAssumer: vi.fn().mockResolvedValue(roleCreds) };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  const resolve = (profiles: ParsedIniData, name = "dev") => resolveProfileData(name, profiles, options as any);

  describe("rule 1: the daemon is the only source", () => {
    it.each([
      ["static keys", { aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" }],
      ["credential_process", { credential_process: "some-command" }],
      ["sso legacy fields", { sso_region: "us-east-1" }],
      ["credential_source", { credential_source: "Environment" }],
      ["source_profile without role_arn", { source_profile: "other" }],
      ["login_session", { login_session: "arn:aws:iam::123456789012:user/x" }],
    ])("uses the daemon over %s", async (_, settings) => {
      const credentials = await resolve({
        dev: { daemon_credential: "dev", ...settings },
        other: { aws_access_key_id: "OTHER", aws_secret_access_key: "OTHER" },
      });
      expect(credentials).toBe(daemonCreds);
      expect(fromCredentialDaemon).toHaveBeenCalledWith({
        credential: "dev",
        logger: undefined,
        connectTimeout: undefined,
        timeout: undefined,
      });
      expect(fromProcess).not.toHaveBeenCalled();
      expect(fromSSO).not.toHaveBeenCalled();
      expect(options.roleAssumer).not.toHaveBeenCalled();
    });

    it("does not fall back to the profile's other settings when the daemon fails", async () => {
      const error = new CredentialDaemonProviderError("not running", "NOT_RUNNING");
      daemonProvider.mockRejectedValue(error);
      await expect(
        resolve({
          dev: {
            daemon_credential: "dev",
            aws_access_key_id: "AKID",
            aws_secret_access_key: "SECRET",
            credential_process: "some-command",
          },
        })
      ).rejects.toBe(error);
      expect(fromProcess).not.toHaveBeenCalled();
    });

    it("passes an empty daemon_credential to the daemon provider for validation", async () => {
      await resolve({ dev: { daemon_credential: "", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" } });
      expect(fromCredentialDaemon).toHaveBeenCalledWith(expect.objectContaining({ credential: "" }));
    });

    it("passes the credentialDaemon timeouts", async () => {
      options.credentialDaemon = { connectTimeout: 10, timeout: 20 };
      await resolve({ dev: { daemon_credential: "dev" } });
      expect(fromCredentialDaemon).toHaveBeenCalledWith(expect.objectContaining({ connectTimeout: 10, timeout: 20 }));
    });
  });

  describe("rule 2: no role settings on a daemon profile", () => {
    it.each([
      ["source_profile", { role_arn: "arn:aws:iam::123456789012:role/r", source_profile: "other" }],
      ["credential_source", { role_arn: "arn:aws:iam::123456789012:role/r", credential_source: "Environment" }],
      ["no other key", { role_arn: "arn:aws:iam::123456789012:role/r" }],
    ])("conflict-role-arn: gives INVALID_CONFIG for role_arn with %s", async (_, settings) => {
      const profile = { daemon_credential: "dev", ...settings } as Record<string, string>;
      await expect(resolve({ dev: profile, other: {} })).rejects.toMatchObject({
        name: "CredentialDaemonProviderError",
        code: "INVALID_CONFIG",
        tryNextLink: false,
        message:
          `Profile dev sets both daemon_credential and role_arn. ` +
          `Move the role to its own profile that uses source_profile = dev.`,
      });
      expect(fromCredentialDaemon).not.toHaveBeenCalled();
      expect(options.roleAssumer).not.toHaveBeenCalled();
    });

    it.each([
      ["conflict-web-identity", { web_identity_token_file: "/token" }],
      [
        "conflict-web-identity with role_arn",
        { web_identity_token_file: "/token", role_arn: "arn:aws:iam::123456789012:role/r" },
      ],
    ])("%s: gives INVALID_CONFIG naming both credential sources", async (_, settings) => {
      const profile = { daemon_credential: "dev", ...settings } as Record<string, string>;
      const error = await resolve({ dev: profile }).catch((e) => e);
      expect(error).toMatchObject({
        name: "CredentialDaemonProviderError",
        code: "INVALID_CONFIG",
        tryNextLink: false,
        message:
          "Profile dev has two credential sources, daemon_credential and web_identity_token_file. " +
          "Remove one of them.",
      });
      expect(error.message).toContain("web_identity_token_file");
      expect(error.message).toContain("daemon_credential");
      expect(error.message).not.toContain("source_profile");
      expect(fromCredentialDaemon).not.toHaveBeenCalled();
      expect(options.roleAssumer).not.toHaveBeenCalled();
    });
  });

  describe("source_profile chains", () => {
    it("assumes a role with daemon credentials from the source profile", async () => {
      const credentials = await resolve({
        dev: { role_arn: "arn:aws:iam::123456789012:role/r", source_profile: "base" },
        base: { daemon_credential: "base", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
      });
      expect(credentials).toEqual({ ...roleCreds, $source: { CREDENTIALS_PROFILE_SOURCE_PROFILE: "o" } });
      expect(fromCredentialDaemon).toHaveBeenCalledWith(expect.objectContaining({ credential: "base" }));
      expect(options.roleAssumer).toHaveBeenCalledWith(
        daemonCreds,
        expect.objectContaining({ RoleArn: "arn:aws:iam::123456789012:role/r" })
      );
    });

    it("uses the daemon for a profile reached as a later hop", async () => {
      await resolve({
        dev: { role_arn: "arn:aws:iam::123456789012:role/a", source_profile: "middle" },
        middle: { role_arn: "arn:aws:iam::123456789012:role/b", source_profile: "base" },
        base: { daemon_credential: "base" },
      });
      expect(fromCredentialDaemon).toHaveBeenCalledTimes(1);
      expect(fromCredentialDaemon).toHaveBeenCalledWith(expect.objectContaining({ credential: "base" }));
      expect(options.roleAssumer).toHaveBeenCalledTimes(2);
      expect(options.roleAssumer.mock.calls[0][0]).toBe(daemonCreds);
    });
    it("keeps the daemon's feature ID on credentials assumed with daemon credentials, through every hop", async () => {
      daemonProvider.mockResolvedValue({ ...daemonCreds, $source: { CREDENTIAL_DAEMON: "Aq" } });
      options.roleAssumer.mockImplementation(async () => ({
        accessKeyId: "ROLE_AKID",
        secretAccessKey: "ROLE_SECRET",
      }));
      const credentials: AttributedAwsCredentialIdentity = await resolve({
        dev: { role_arn: "arn:aws:iam::123456789012:role/a", source_profile: "middle" },
        middle: { role_arn: "arn:aws:iam::123456789012:role/b", source_profile: "base" },
        base: { daemon_credential: "base" },
      });
      expect(credentials.$source).toEqual({ CREDENTIAL_DAEMON: "Aq", CREDENTIALS_PROFILE_SOURCE_PROFILE: "o" });
    });

    it("does not add the daemon's feature ID for other source credentials", async () => {
      options.roleAssumer.mockImplementation(async () => ({
        accessKeyId: "ROLE_AKID",
        secretAccessKey: "ROLE_SECRET",
      }));
      const credentials: AttributedAwsCredentialIdentity = await resolve({
        dev: { role_arn: "arn:aws:iam::123456789012:role/r", source_profile: "base" },
        base: { aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
      });
      expect(credentials.$source).toEqual({ CREDENTIALS_PROFILE_SOURCE_PROFILE: "o" });
    });
  });

  describe("rule 3: SSO profiles", () => {
    const sso = { sso_session: "s", sso_region: "us-east-1" };

    it.each([
      ["sso_session", sso],
      ["sso_start_url", { sso_start_url: "https://example.awsapps.com/start", sso_region: "us-east-1" }],
    ])("sends sso_account_id and sso_role_name with %s", async (_, settings) => {
      await resolve({
        dev: { daemon_credential: "dev", ...settings, sso_account_id: "123456789012", sso_role_name: "Admin" },
      });
      expect(fromCredentialDaemon).toHaveBeenCalledWith(
        expect.objectContaining({ credential: "dev", accountId: "123456789012", roleName: "Admin" })
      );
      expect(fromSSO).not.toHaveBeenCalled();
    });

    it.each([
      ["sso_account_id", { sso_account_id: "123456789012" }],
      ["sso_role_name", { sso_role_name: "Admin" }],
    ])("gives the SSO validation error with only %s, without calling the daemon", async (_, settings) => {
      const error = await resolve({ dev: { daemon_credential: "dev", ...sso, ...settings } }).catch((e) => e);
      expect(error).toBeInstanceOf(CredentialsProviderError);
      expect(error.tryNextLink).toBe(false);
      expect(error.message).toContain("Profile is configured with invalid SSO credentials");
      expect(fromCredentialDaemon).not.toHaveBeenCalled();
      expect(fromSSO).not.toHaveBeenCalled();
    });

    it("resolves as a normal SSO profile with neither, and allows role_arn", async () => {
      expect(await resolve({ dev: { daemon_credential: "dev", ...sso } })).toMatchObject({ accessKeyId: "SSO" });
      expect(fromSSO).toHaveBeenCalledTimes(1);

      const credentials = await resolve({
        dev: { role_arn: "arn:aws:iam::123456789012:role/r", source_profile: "base" },
        base: { daemon_credential: "base", ...sso, role_arn: "arn:aws:iam::123456789012:role/x" },
      });
      expect(fromCredentialDaemon).not.toHaveBeenCalled();
      expect(credentials).toMatchObject({ accessKeyId: "ROLE_AKID" });
    });

    it("sends no SSO fields for a daemon profile without sso_session or sso_start_url", async () => {
      await resolve({ dev: { daemon_credential: "dev", sso_account_id: "123456789012", sso_role_name: "Admin" } });
      expect(fromCredentialDaemon).toHaveBeenCalledWith({
        credential: "dev",
        logger: undefined,
        connectTimeout: undefined,
        timeout: undefined,
      });
    });
  });

  describe("helpers", () => {
    it(isCredentialDaemonProfile.name, () => {
      expect(isCredentialDaemonProfile({ daemon_credential: "" })).toBe(true);
      expect(isCredentialDaemonProfile({ daemon_credential: "x" })).toBe(true);
      expect(isCredentialDaemonProfile({})).toBe(false);
      expect(isCredentialDaemonProfile(undefined)).toBe(false);
    });

    it(isSsoProfileWithoutAccountOrRole.name, () => {
      expect(isSsoProfileWithoutAccountOrRole({ sso_session: "s" })).toBe(true);
      expect(isSsoProfileWithoutAccountOrRole({ sso_start_url: "u" })).toBe(true);
      expect(isSsoProfileWithoutAccountOrRole({ sso_session: "s", sso_role_name: "r" })).toBe(false);
      expect(isSsoProfileWithoutAccountOrRole({ sso_region: "us-east-1" })).toBe(false);
    });

    it("can be called directly", async () => {
      await expect(resolveCredentialDaemonCredentials("dev", { daemon_credential: "dev" }, {})).resolves.toBe(
        daemonCreds
      );
    });
  });
});
