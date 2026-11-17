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

  it("takes daemon_credential from the config file", async () => {
    expect(await load("[profile dev]\ndaemon_credential = dev\n", "")).toEqual({ dev: { daemon_credential: "dev" } });
  });

  it("ignores daemon_credential that is only in the credentials file", async () => {
    expect(
      await load(
        "[profile dev]\nregion = us-west-2\n",
        "[dev]\ndaemon_credential = dev\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n" +
          "[other]\ndaemon_credential = other\n"
      )
    ).toEqual({
      dev: { region: "us-west-2", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
      other: {},
    });
  });

  it("keeps the config file's daemon_credential over the credentials file's", async () => {
    expect(
      await load("[profile dev]\ndaemon_credential = from-config\n", "[dev]\ndaemon_credential = from-creds\n")
    ).toEqual({
      dev: { daemon_credential: "from-config" },
    });
  });

  it("gives an empty daemon_credential in the config file as an empty string", async () => {
    expect(
      await load(
        "[profile dev]\ndaemon_credential =\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n",
        "[dev]\ndaemon_credential = from-creds\n"
      )
    ).toEqual({
      dev: { daemon_credential: "", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
    });
  });

  it("gives an indented empty daemon_credential as an empty string", async () => {
    expect(
      await load("[profile dev]\naws_access_key_id = AKID\naws_secret_access_key = SECRET\n  daemon_credential =\n", "")
    ).toEqual({
      dev: { daemon_credential: "", aws_access_key_id: "AKID", aws_secret_access_key: "SECRET" },
    });
  });

  it("adds a profile that has only an empty daemon_credential", async () => {
    expect(await load("[profile dev]\ndaemon_credential =\n", "")).toEqual({ dev: { daemon_credential: "" } });
  });

  it.each(["[default]", "[profile default]"])("reads an empty daemon_credential under %s", async (header) => {
    expect(await load(`${header}\ndaemon_credential =\n`, "")).toEqual({ default: { daemon_credential: "" } });
  });

  it("does not change the profile objects of the shared file cache", async () => {
    writeFileSync(configFilepath, "[profile dev]\nregion = us-west-2\n");
    writeFileSync(filepath, "[dev]\ndaemon_credential = x\n");
    const first = await loadProfiles({ configFilepath, filepath, ignoreCache: true });
    first.dev.region = "changed";
    const second = await loadProfiles({ configFilepath, filepath });
    expect(second).toEqual({ dev: { region: "us-west-2" } });
  });

  it("works when the files do not exist", async () => {
    expect(await loadProfiles({ configFilepath: join(dir, "nope"), filepath: join(dir, "nope2") })).toEqual({});
  });
});
