import { rmSync } from "node:fs";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import type { FakeDaemon, SocketRole, SocketRoleSetup } from "./fakeDaemon.spec";
import { makeStaleSocket, makeTempDir, sessionReply, setUpSocketRole, startFakeDaemon } from "./fakeDaemon.spec";
import { CREDENTIAL_DAEMON_DOC } from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";
import { fromCredentialDaemon } from "./fromCredentialDaemon";
import { requestCredentialDaemon } from "./requestCredentialDaemon";

// wraps the real requestCredentialDaemon in a mock that still calls it, so a test can check whether the
// daemon was dialed.
vi.mock("./requestCredentialDaemon", async (importOriginal) => {
  const original = await importOriginal<{ requestCredentialDaemon: typeof requestCredentialDaemon }>();
  return { ...original, requestCredentialDaemon: vi.fn(original.requestCredentialDaemon) };
});

describe(fromCredentialDaemon.name, () => {
  const ENV = "AWS_CREDENTIAL_DAEMON_SOCKET";
  let originalSocketEnv: string | undefined;
  let originalHome: string | undefined;
  let dir: string;
  let daemon: FakeDaemon | undefined;

  const start = async (behavior: Parameters<typeof startFakeDaemon>[0]) => {
    daemon = await startFakeDaemon(behavior, dir);
    process.env[ENV] = daemon.socketPath;
    return daemon;
  };

  beforeEach(() => {
    originalSocketEnv = process.env[ENV];
    originalHome = process.env.HOME;
    dir = makeTempDir();
  });

  afterEach(async () => {
    if (originalSocketEnv === undefined) {
      delete process.env[ENV];
    } else {
      process.env[ENV] = originalSocketEnv;
    }
    if (originalHome === undefined) {
      delete process.env.HOME;
    } else {
      process.env.HOME = originalHome;
    }
    await daemon?.close();
    daemon = undefined;
    rmSync(dir, { recursive: true, force: true });
  });

  it("sends the exact request line and returns the credentials with the feature id", async () => {
    await start(sessionReply());
    const credentials = await fromCredentialDaemon({ credential: "dev" })();
    expect(daemon!.requests).toEqual([
      `{"jsonrpc":"2.0","id":1,"method":"credential/get","params":{"credential":"dev"}}\n`,
    ]);
    expect(credentials).toEqual({
      accessKeyId: "ASIADAEMON",
      secretAccessKey: "SECRET",
      sessionToken: "TOKEN",
      expiration: new Date("3000-01-01T00:00:00.000Z"),
      $source: { CREDENTIAL_DAEMON: "Aq" },
    });
  });

  it("sends account_id and role_name when both are given", async () => {
    await start(sessionReply());
    await fromCredentialDaemon({ credential: "sso", accountId: "123456789012", roleName: "Admin" })();
    expect(JSON.parse(daemon!.requests[0])).toEqual({
      jsonrpc: "2.0",
      id: 1,
      method: "credential/get",
      params: { credential: "sso", account_id: "123456789012", role_name: "Admin" },
    });
  });

  it("sends neither account_id nor role_name when only one is given", async () => {
    await start(sessionReply());
    await fromCredentialDaemon({ credential: "sso", accountId: "123456789012" })();
    expect(JSON.parse(daemon!.requests[0]).params).toEqual({ credential: "sso" });
  });

  it("opens a new connection and resolves the socket path again on every call", async () => {
    const first = await start(sessionReply());
    const provider = fromCredentialDaemon({ credential: "dev" });
    await provider();
    await provider();
    expect(first.requests).toHaveLength(2);
    expect(first.sockets).toHaveLength(2);

    const second = await startFakeDaemon(sessionReply({ material: { access_key_id: "SECOND" } }), dir, "second.sock");
    try {
      process.env[ENV] = second.socketPath;
      expect((await provider()).accessKeyId).toBe("SECOND");
    } finally {
      await second.close();
    }
  });

  describe("daemon_credential validation", () => {
    it.each([
      ["empty", ""],
      ["65 characters", "a".repeat(65)],
      ["a leading dot", ".dev"],
      ["a space", "my dev"],
      ["a slash", "a/b"],
      ["non-ASCII", "dév"],
    ])("rejects %s with INVALID_CONFIG without dialing", async (_, credential) => {
      await start(sessionReply());
      await expect(fromCredentialDaemon({ credential })()).rejects.toMatchObject({
        name: "CredentialDaemonProviderError",
        code: "INVALID_CONFIG",
        tryNextLink: false,
        message: expect.stringContaining("is invalid"),
      });
      expect(daemon!.requests).toEqual([]);
    });

    it("strips control characters from the name in the message", async () => {
      await expect(fromCredentialDaemon({ credential: "a\nb" })()).rejects.toMatchObject({
        code: "INVALID_CONFIG",
        message: expect.stringContaining("daemon_credential 'ab' is invalid"),
      });
    });

    it.each(["a".repeat(64), "_x", "-x", "Dev.Prod_1-2", "x."])(
      "accepts %s and preserves its case",
      async (credential) => {
        await start(sessionReply());
        await fromCredentialDaemon({ credential })();
        expect(JSON.parse(daemon!.requests[0]).params.credential).toBe(credential);
      }
    );
  });

  describe("errors", () => {
    it("gives NOT_RUNNING with ENOENT when the socket does not exist", async () => {
      const path = join(dir, "missing.sock");
      process.env[ENV] = path;
      const error = await fromCredentialDaemon({ credential: "dev" })().catch((e) => e);
      expect(error).toBeInstanceOf(CredentialDaemonProviderError);
      expect(error).toMatchObject({
        code: "NOT_RUNNING",
        tryNextLink: false,
        message:
          `Unable to connect to the credential daemon at ${path}: ENOENT. ` +
          `Start the credential daemon, see ${CREDENTIAL_DAEMON_DOC}.`,
      });
    });

    it("gives NOT_RUNNING with ECONNREFUSED for a stale socket", async () => {
      const path = join(dir, "stale.sock");
      await makeStaleSocket(path);
      process.env[ENV] = path;
      await expect(fromCredentialDaemon({ credential: "dev" })()).rejects.toMatchObject({
        code: "NOT_RUNNING",
        message: expect.stringContaining("ECONNREFUSED"),
      });
    });

    // each case maps its sockets to temporary paths with HOME set to a temporary folder, and sets
    // process.platform, so the test resolves the same paths on every host and never dials a real socket.
    const withRole = async (
      role: SocketRole,
      platformName: string,
      run: (setup: SocketRoleSetup) => Promise<void>,
      behavior?: Parameters<typeof startFakeDaemon>[0]
    ) => {
      const setup = await setUpSocketRole(role, dir, behavior);
      const platform = Object.getOwnPropertyDescriptor(process, "platform")!;
      try {
        delete process.env[ENV];
        Object.assign(process.env, setup.env);
        Object.defineProperty(process, "platform", { value: platformName });
        await run(setup);
      } finally {
        Object.defineProperty(process, "platform", platform);
        await setup.daemon?.close();
      }
    };

    describe.each(["linux", "darwin"])("on %s", (platformName) => {
      it.each(["link", "home-socket"] as const)("%s: gets credentials from location 2", async (role) => {
        await withRole(role, platformName, async ({ daemon }) => {
          await expect(fromCredentialDaemon({ credential: "dev" })()).resolves.toMatchObject({
            accessKeyId: "ASIADAEMON",
          });
          expect(daemon!.requests).toHaveLength(1);
        });
      });

      it("not-running (link-stale): gives NOT_RUNNING naming the link's path, not its target", async () => {
        await withRole("link-stale", platformName, async ({ path, target }) => {
          const error = await fromCredentialDaemon({ credential: "dev" })().catch((e) => e);
          expect(error).toMatchObject({
            code: "NOT_RUNNING",
            tryNextLink: false,
            message: expect.stringContaining(`at ${path}: ECONNREFUSED`),
          });
          expect(error.message).not.toContain(target);
        });
      });

      it("link-dangling: gives NOT_RUNNING naming the link and its target", async () => {
        await withRole("link-dangling", platformName, async ({ path, target }) => {
          vi.mocked(requestCredentialDaemon).mockClear();
          const error = await fromCredentialDaemon({ credential: "dev" })().catch((e) => e);
          expect(error).toMatchObject({ code: "NOT_RUNNING", tryNextLink: false });
          expect(error.message).toContain(`${path} is a link to ${target}`);
          expect(requestCredentialDaemon).not.toHaveBeenCalled();
        });
      });

      it("no-link: gives NOT_RUNNING without dialing", async () => {
        const home = join(dir, "home");
        const platform = Object.getOwnPropertyDescriptor(process, "platform")!;
        try {
          delete process.env[ENV];
          process.env.HOME = home;
          Object.defineProperty(process, "platform", { value: platformName });
          vi.mocked(requestCredentialDaemon).mockClear();
          await expect(fromCredentialDaemon({ credential: "dev" })()).rejects.toMatchObject({
            code: "NOT_RUNNING",
            tryNextLink: false,
            message: expect.stringContaining("link its socket to $HOME/.aws/credential-daemon.sock"),
          });
          expect(requestCredentialDaemon).not.toHaveBeenCalled();
        } finally {
          Object.defineProperty(process, "platform", platform);
        }
      });

      it("env-socket-regular-file: gives NOT_RUNNING for a regular file and does not dial location 2", async () => {
        await withRole("env-file", platformName, async ({ env, path }) => {
          const homeDaemon = await startFakeDaemon(sessionReply(), join(env.HOME, ".aws"), "credential-daemon.sock");
          try {
            await expect(fromCredentialDaemon({ credential: "dev" })()).rejects.toMatchObject({
              code: "NOT_RUNNING",
              tryNextLink: false,
              message: expect.stringContaining(`at ${path}:`),
            });
            expect(homeDaemon.requests).toEqual([]);
          } finally {
            await homeDaemon.close();
          }
        });
      });
    });

    it("gives NOT_RUNNING naming the call timeout when the daemon never replies", async () => {
      await start("hang");
      await expect(fromCredentialDaemon({ credential: "dev", timeout: 200 })()).rejects.toMatchObject({
        code: "NOT_RUNNING",
        message: expect.stringContaining("the call timeout (200 ms) elapsed"),
      });
    });

    it.each([0, -1, NaN, Infinity])("falls back to the default timeout for %s", async (timeout) => {
      await start(sessionReply());
      await expect(
        fromCredentialDaemon({ credential: "dev", timeout, connectTimeout: timeout })()
      ).resolves.toMatchObject({ accessKeyId: "ASIADAEMON" });
    });

    it("gives the daemon's mapped error", async () => {
      await start(
        JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          error: { code: -1, message: "x", data: { code: "REAUTH_REQUIRED" } },
        }) + "\n"
      );
      await expect(fromCredentialDaemon({ credential: "dev" })()).rejects.toMatchObject({
        code: "REAUTH_REQUIRED",
      });
    });

    it("gives UNSUPPORTED_PLATFORM on other platforms", async () => {
      await start(sessionReply());
      const platform = Object.getOwnPropertyDescriptor(process, "platform")!;
      Object.defineProperty(process, "platform", { value: "win32" });
      try {
        await expect(fromCredentialDaemon({ credential: "dev" })()).rejects.toMatchObject({
          code: "UNSUPPORTED_PLATFORM",
          tryNextLink: false,
          message: expect.stringContaining(CREDENTIAL_DAEMON_DOC),
        });
      } finally {
        Object.defineProperty(process, "platform", platform);
      }
      expect(daemon!.requests).toEqual([]);
    });
  });
});
