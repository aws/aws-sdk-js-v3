import { linkSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import type { Server, Socket } from "node:net";
import { tmpdir } from "node:os";
import { join } from "node:path";

/**
 * What the fake daemon does with a connection after it reads the request line:
 * - a string is written as is and the connection is ended,
 * - "hang" writes nothing and keeps the connection open,
 * - a function gets the socket and the request line.
 */
export type FakeDaemonBehavior = string | "hang" | ((socket: Socket, requestLine: string) => void);

export interface FakeDaemon {
  dir: string;
  socketPath: string;
  requests: string[];
  sockets: Socket[];
  behavior: FakeDaemonBehavior;
  close(): Promise<void>;
}

export const makeTempDir = () => mkdtempSync(join(tmpdir(), "cd-"));

export const startFakeDaemon = async (
  behavior: FakeDaemonBehavior,
  dir: string = makeTempDir(),
  socketName = "d.sock"
): Promise<FakeDaemon> => {
  const socketPath = join(dir, socketName);
  const daemon: FakeDaemon = {
    dir,
    socketPath,
    requests: [],
    sockets: [],
    behavior,
    close: async () => {
      for (const socket of daemon.sockets) {
        socket.destroy();
      }
      await new Promise((resolve) => server.close(resolve));
    },
  };
  const server: Server = createServer((socket) => {
    daemon.sockets.push(socket);
    socket.on("error", () => {});
    let buffer = "";
    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8");
      const nl = buffer.indexOf("\n");
      if (nl < 0) {
        return;
      }
      const line = buffer.slice(0, nl + 1);
      buffer = "";
      daemon.requests.push(line);
      const current = daemon.behavior;
      if (typeof current === "function") {
        current(socket, line);
      } else if (current !== "hang") {
        socket.end(current);
      }
    });
  });
  await new Promise<void>((resolve, reject) => {
    server.once("error", reject);
    server.listen(socketPath, resolve);
  });
  return daemon;
};

/**
 * Leaves a socket file at `path` with nothing listening on it.
 * Node unlinks the listening path on close, but a hard link to it stays a socket.
 */
export const makeStaleSocket = async (path: string): Promise<void> => {
  const dir = makeTempDir();
  const daemon = await startFakeDaemon("", dir);
  linkSync(daemon.socketPath, path);
  await daemon.close();
  rmSync(dir, { recursive: true, force: true });
};

export const sessionReply = (
  overrides: { material?: Record<string, unknown>; result?: Record<string, unknown> } = {}
) =>
  JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    result: {
      credential: "dev",
      material: {
        type: "session_credentials",
        access_key_id: "ASIADAEMON",
        secret_access_key: "SECRET",
        session_token: "TOKEN",
        ...overrides.material,
      },
      expires_at: "3000-01-01T00:00:00.000Z",
      ...overrides.result,
    },
  }) + "\n";

/**
 * The home path, `.aws/credential-daemon.sock`, under a HOME folder.
 */
export const homeSocketPath = (home: string) => join(home, ".aws", "credential-daemon.sock");

/**
 * The socket roles of the shared credential daemon test cases. Each maps to temporary paths under one
 * folder, with HOME set to a temporary folder, so no test touches a real socket.
 */
export type SocketRole = "link" | "link-stale" | "link-dangling" | "home-socket" | "env" | "env-file";

export interface SocketRoleSetup {
  /**
   * The environment for the case: HOME, and AWS_CREDENTIAL_DAEMON_SOCKET for the env roles.
   */
  env: Record<string, string>;
  /**
   * The path the provider dials, or names in its error.
   */
  path: string;
  /**
   * The link target, for the link roles.
   */
  target?: string;
  /**
   * The daemon that listens, for link, home-socket and env.
   */
  daemon?: FakeDaemon;
}

export const setUpSocketRole = async (
  role: SocketRole,
  dir: string,
  behavior: FakeDaemonBehavior = sessionReply()
): Promise<SocketRoleSetup> => {
  const home = join(dir, "home");
  mkdirSync(join(home, ".aws"), { recursive: true });
  const link = homeSocketPath(home);
  switch (role) {
    case "link": {
      const daemon = await startFakeDaemon(behavior, dir);
      symlinkSync(daemon.socketPath, link);
      return { env: { HOME: home }, path: link, target: daemon.socketPath, daemon };
    }
    case "link-stale": {
      const target = join(dir, "stale.sock");
      await makeStaleSocket(target);
      symlinkSync(target, link);
      return { env: { HOME: home }, path: link, target };
    }
    case "link-dangling": {
      const target = join(dir, "missing-daemon.sock");
      symlinkSync(target, link);
      return { env: { HOME: home }, path: link, target };
    }
    case "home-socket": {
      const daemon = await startFakeDaemon(behavior, join(home, ".aws"), "credential-daemon.sock");
      return { env: { HOME: home }, path: link, daemon };
    }
    case "env": {
      const daemon = await startFakeDaemon(behavior, dir);
      return { env: { HOME: home, AWS_CREDENTIAL_DAEMON_SOCKET: daemon.socketPath }, path: daemon.socketPath, daemon };
    }
    case "env-file": {
      const file = join(dir, "env-file");
      writeFileSync(file, "");
      return { env: { HOME: home, AWS_CREDENTIAL_DAEMON_SOCKET: file }, path: file };
    }
  }
};
