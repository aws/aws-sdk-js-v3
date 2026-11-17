import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, test as it } from "vitest";

import {
  findEmptyDaemonCredentialProfiles,
  loadEmptyDaemonCredentialProfiles,
} from "./findEmptyDaemonCredentialProfiles";

describe(findEmptyDaemonCredentialProfiles.name, () => {
  it("finds profiles with an empty daemon_credential", () => {
    expect(
      findEmptyDaemonCredentialProfiles(
        [
          "[default]",
          "daemon_credential =",
          "[profile a]",
          "daemon_credential=   ",
          "[profile 'b']",
          "daemon_credential = ; a comment",
          "[profile c]",
          "daemon_credential = c",
          "[profile d]",
          "  daemon_credential =",
          "[profile e]",
          "# daemon_credential =",
          "[sso-session f]",
          "daemon_credential =",
          "[g]",
          "daemon_credential =",
          "[profile h] ; comment",
          "daemon_credential = # comment",
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
          "  daemon_credential =",
          "[profile after-subsection]",
          "s3 =",
          "  addressing_style = path",
          "daemon_credential =",
          "[profile indented-after-subsection]",
          "s3 =",
          "  addressing_style = path",
          "region = us-east-1",
          "  daemon_credential =",
        ].join("\n")
      )
    ).toEqual(new Set(["after-subsection", "indented-after-subsection"]));
  });

  it("finds nothing in a file the ini parser rejects", () => {
    expect(findEmptyDaemonCredentialProfiles("[profile a]\ndaemon_credential =\n[profile __proto__]\n")).toEqual(
      new Set()
    );
  });
});

describe(loadEmptyDaemonCredentialProfiles.name, () => {
  it("reads the config file", async () => {
    const dir = mkdtempSync(join(tmpdir(), "daemon-empty-"));
    try {
      const configFilepath = join(dir, "config");
      writeFileSync(configFilepath, "[profile dev]\ndaemon_credential =\n");
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
