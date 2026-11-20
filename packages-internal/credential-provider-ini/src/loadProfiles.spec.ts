import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import { loadProfiles } from "./loadProfiles";

describe(loadProfiles.name, () => {
  let dir: string;
  let configFilepath: string;
  let filepath: string;

  const load = (config: string, credentials: string) => {
    writeFileSync(configFilepath, config);
    writeFileSync(filepath, credentials);
    return loadProfiles({ configFilepath, filepath, ignoreCache: true });
  };

  beforeEach(() => {
    dir = mkdtempSync(join(tmpdir(), "ini-"));
    configFilepath = join(dir, "config");
    filepath = join(dir, "credentials");
  });

  afterEach(() => {
    rmSync(dir, { recursive: true, force: true });
  });

  it("merges both files with the credentials file taking precedence, like parseKnownFiles", async () => {
    expect(
      await load(
        "[profile a]\nregion = us-west-2\noutput = json\n[sso-session s]\nsso_region = us-east-1\n",
        "[a]\nregion = eu-west-1\naws_access_key_id = AKID\n[b]\naws_access_key_id = B\n"
      )
    ).toEqual({
      a: { region: "eu-west-1", output: "json", aws_access_key_id: "AKID" },
      b: { aws_access_key_id: "B" },
      "sso-session.s": { sso_region: "us-east-1" },
    });
  });

  it("takes credential_daemon from the config file", async () => {
    expect(await load("[profile dev]\ncredential_daemon = dev\n", "")).toEqual({ dev: { credential_daemon: "dev" } });
  });

  it("ignores credential_daemon that is only in the credentials file", async () => {
    expect(
      await load(
        "[profile dev]\nregion = us-west-2\n",
        "[dev]\ncredential_daemon = dev\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n" +
          "[other]\ncredential_daemon = other\n"
      )
    ).toEqual({
      dev: { region: "us-west-2", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
      other: {},
    });
  });

  it("keeps the config file's credential_daemon over the credentials file's", async () => {
    expect(
      await load("[profile dev]\ncredential_daemon = from-config\n", "[dev]\ncredential_daemon = from-creds\n")
    ).toEqual({
      dev: { credential_daemon: "from-config" },
    });
  });

  it("gives an empty credential_daemon in the config file as an empty string", async () => {
    expect(
      await load(
        "[profile dev]\ncredential_daemon =\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n",
        "[dev]\ncredential_daemon = from-creds\n"
      )
    ).toEqual({
      dev: { credential_daemon: "", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
    });
  });

  it("gives an indented empty credential_daemon as an empty string", async () => {
    expect(
      await load("[profile dev]\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n  credential_daemon =\n", "")
    ).toEqual({
      dev: { credential_daemon: "", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
    });
  });

  it("adds a profile that has only an empty credential_daemon", async () => {
    expect(await load("[profile dev]\ncredential_daemon =\n", "")).toEqual({ dev: { credential_daemon: "" } });
  });

  it.each(["[default]", "[profile default]"])("reads an empty credential_daemon under %s", async (header) => {
    expect(await load(`${header}\ncredential_daemon =\n`, "")).toEqual({ default: { credential_daemon: "" } });
  });

  it("does not change the profile objects of the shared file cache", async () => {
    writeFileSync(configFilepath, "[profile dev]\nregion = us-west-2\n");
    writeFileSync(filepath, "[dev]\ncredential_daemon = x\n");
    const first = await loadProfiles({ configFilepath, filepath, ignoreCache: true });
    first.dev.region = "changed";
    const second = await loadProfiles({ configFilepath, filepath });
    expect(second).toEqual({ dev: { region: "us-west-2" } });
  });

  it("works when the files do not exist", async () => {
    expect(await loadProfiles({ configFilepath: join(dir, "nope"), filepath: join(dir, "nope2") })).toEqual({});
  });
});
