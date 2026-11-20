import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test as it } from "vitest";

import {
  findEmptyDaemonCredentialProfiles,
  loadEmptyDaemonCredentialProfiles,
} from "./findEmptyDaemonCredentialProfiles";

describe(findEmptyDaemonCredentialProfiles.name, () => {
  it("finds profiles with an empty credential_daemon", () => {
    expect(
      findEmptyDaemonCredentialProfiles(
        [
          "[default]",
          "credential_daemon =",
          "[profile a]",
          "credential_daemon=   ",
          "[profile 'b']",
          "credential_daemon = ; a comment",
          "[profile c]",
          "credential_daemon = c",
          "[profile d]",
          "  credential_daemon =",
          "[profile e]",
          "# credential_daemon =",
          "[sso-session f]",
          "credential_daemon =",
          "[g]",
          "credential_daemon =",
          "[profile h] ; comment",
          "credential_daemon = # comment",
        ].join("\r\n")
      )
    ).toEqual(new Set(["default", "a", "b", "d", "h"]));
  });

  it("follows the parser's subsections", () => {
    expect(
      findEmptyDaemonCredentialProfiles(
        [
          "[profile in-subsection]",
          "s3 =",
          "  credential_daemon =",
          "[profile after-subsection]",
          "s3 =",
          "  addressing_style = path",
          "credential_daemon =",
          "[profile indented-after-subsection]",
          "s3 =",
          "  addressing_style = path",
          "region = us-east-1",
          "  credential_daemon =",
        ].join("\n")
      )
    ).toEqual(new Set(["after-subsection", "indented-after-subsection"]));
  });

  it("finds nothing in a file the ini parser rejects", () => {
    expect(findEmptyDaemonCredentialProfiles("[profile a]\ncredential_daemon =\n[profile __proto__]\n")).toEqual(
      new Set()
    );
  });
});

describe(loadEmptyDaemonCredentialProfiles.name, () => {
  it("reads the config file", async () => {
    const dir = mkdtempSync(join(tmpdir(), "daemon-empty-"));
    try {
      const configFilepath = join(dir, "config");
      writeFileSync(configFilepath, "[profile dev]\ncredential_daemon =\n");
      await expect(loadEmptyDaemonCredentialProfiles({ configFilepath, ignoreCache: true })).resolves.toEqual(
        new Set(["dev"])
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("finds nothing when the config file does not exist", async () => {
    await expect(
      loadEmptyDaemonCredentialProfiles({ configFilepath: join(tmpdir(), "missing-config"), ignoreCache: true })
    ).resolves.toEqual(new Set());
  });
});
