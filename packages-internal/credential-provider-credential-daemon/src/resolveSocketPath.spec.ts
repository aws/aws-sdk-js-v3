import { mkdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import type { FakeDaemon, SocketRole } from "../tests/fakeDaemon";
import { homeSocketPath, makeTempDir, setUpSocketRole, startFakeDaemon } from "../tests/fakeDaemon";
import { CREDENTIAL_DAEMON_DOC } from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";
import { resolveSocketPath } from "./resolveSocketPath";

describe(resolveSocketPath.name, () => {
  let dir: string;
  const daemons: FakeDaemon[] = [];

  // every case maps its sockets to temporary paths, with HOME set to a temporary folder.
  const setUp = async (role: SocketRole) => {
    const setup = await setUpSocketRole(role, dir, "");
    if (setup.daemon) {
      daemons.push(setup.daemon);
    }
    return setup;
  };

  const notRunning = async (env: Record<string, string | undefined>) => {
    const error = await resolveSocketPath(env).catch((e) => e);
    expect(error).toBeInstanceOf(CredentialDaemonProviderError);
    expect(error).toMatchObject({ code: "NOT_RUNNING", tryNextLink: false });
    return error.message as string;
  };

  beforeEach(() => {
    dir = makeTempDir();
  });

  afterEach(async () => {
    while (daemons.length) {
      await daemons.pop()!.close();
    }
    rmSync(dir, { recursive: true, force: true });
  });

  it("env: uses an absolute AWS_CREDENTIAL_DAEMON_SOCKET before the home path", async () => {
    const { env, path } = await setUp("env");
    await startFakeDaemon("", join(env.HOME, ".aws"), "credential-daemon.sock").then((d) => daemons.push(d));
    expect(await resolveSocketPath(env)).toBe(path);
  });

  it("env-file: returns AWS_CREDENTIAL_DAEMON_SOCKET even when it names a regular file", async () => {
    const { env, path } = await setUp("env-file");
    expect(await resolveSocketPath(env)).toBe(path);
  });

  it.each(["", "relative/path.sock"])("treats AWS_CREDENTIAL_DAEMON_SOCKET=%j as unset", async (value) => {
    const { env, path } = await setUp("link");
    expect(await resolveSocketPath({ ...env, AWS_CREDENTIAL_DAEMON_SOCKET: value })).toBe(path);
    await notRunning({ AWS_CREDENTIAL_DAEMON_SOCKET: value, HOME: join(dir, "empty-home") });
  });

  it("link: returns the link's path, not its target", async () => {
    const { env, path, target } = await setUp("link");
    expect(path).toBe(homeSocketPath(env.HOME));
    expect(await resolveSocketPath(env)).toBe(path);
    expect(path).not.toBe(target);
  });

  it("link-stale: returns the link to a stale socket, with no fallback", async () => {
    const { env, path } = await setUp("link-stale");
    expect(await resolveSocketPath(env)).toBe(path);
  });

  it("link-is-a-socket (home-socket): returns a socket at the home path", async () => {
    const { env, path } = await setUp("home-socket");
    expect(statSync(path).isSocket()).toBe(true);
    expect(await resolveSocketPath(env)).toBe(path);
  });

  it("returns the home path when it is a regular file", async () => {
    const home = join(dir, "home");
    mkdirSync(join(home, ".aws"), { recursive: true });
    writeFileSync(homeSocketPath(home), "");
    expect(await resolveSocketPath({ HOME: home })).toBe(homeSocketPath(home));
  });

  it("link-dangling: raises NOT_RUNNING naming the link and its target", async () => {
    const { env, path, target } = await setUp("link-dangling");
    const message = await notRunning(env);
    expect(message).toContain(path);
    expect(message).toContain(target!);
    expect(message).toContain(CREDENTIAL_DAEMON_DOC);
  });

  it("no-link: raises NOT_RUNNING saying to install or link the daemon, or to set the env var", async () => {
    const home = join(dir, "home");
    mkdirSync(join(home, ".aws"), { recursive: true });
    const message = await notRunning({ HOME: home });
    expect(message).toContain(homeSocketPath(home));
    expect(message).toContain("Install the credential daemon or link its socket to $HOME/.aws/credential-daemon.sock");
    expect(message).toContain("or set AWS_CREDENTIAL_DAEMON_SOCKET");
  });

  it.each([undefined, ""])("no-link-home-unset: raises NOT_RUNNING when HOME is %j", async (home) => {
    const message = await notRunning(home === undefined ? {} : { HOME: home });
    expect(message).toContain("HOME is unset, empty or relative");
    expect(message).toContain("$HOME/.aws/credential-daemon.sock");
  });

  // HOME=relative is resolved against the working directory, so the test moves there and puts a real
  // socket at the relative home path. The vitest forks pool lets a test call process.chdir.
  it("no-link-home-relative: skips a socket that is there under a relative HOME", async () => {
    const cwd = process.cwd();
    try {
      process.chdir(dir);
      mkdirSync(join("relative", ".aws"), { recursive: true });
      daemons.push(await startFakeDaemon("", join("relative", ".aws"), "credential-daemon.sock"));
      expect(statSync(homeSocketPath("relative")).isSocket()).toBe(true);
      const message = await notRunning({ HOME: "relative" });
      expect(message).toContain("HOME is unset, empty or relative");
    } finally {
      process.chdir(cwd);
    }
  });

  it("reads the default env on every call", async () => {
    const original = process.env.AWS_CREDENTIAL_DAEMON_SOCKET;
    try {
      process.env.AWS_CREDENTIAL_DAEMON_SOCKET = "/first.sock";
      expect(await resolveSocketPath()).toBe("/first.sock");
      process.env.AWS_CREDENTIAL_DAEMON_SOCKET = "/second.sock";
      expect(await resolveSocketPath()).toBe("/second.sock");
    } finally {
      if (original === undefined) {
        delete process.env.AWS_CREDENTIAL_DAEMON_SOCKET;
      } else {
        process.env.AWS_CREDENTIAL_DAEMON_SOCKET = original;
      }
    }
  });

  it("checks the home path again on every call", async () => {
    const home = join(dir, "home");
    mkdirSync(join(home, ".aws"), { recursive: true });
    await notRunning({ HOME: home });
    daemons.push(await startFakeDaemon("", join(home, ".aws"), "credential-daemon.sock"));
    expect(await resolveSocketPath({ HOME: home })).toBe(homeSocketPath(home));
  });
});
