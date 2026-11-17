import { rmSync } from "node:fs";
import { Socket } from "node:net";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, test as it } from "vitest";

import type { FakeDaemon } from "../tests/fakeDaemon";
import { makeStaleSocket, makeTempDir, startFakeDaemon } from "../tests/fakeDaemon";
import { CREDENTIAL_DAEMON_DOC, MAX_REPLY_LINE_BYTES } from "./constants";
import { requestCredentialDaemon } from "./requestCredentialDaemon";

describe(requestCredentialDaemon.name, () => {
  const options = { connectTimeout: 1000, timeout: 5000 };
  const request = { jsonrpc: "2.0", id: 1, method: "credential/get", params: { credential: "dev" } };
  let dir: string;
  let daemon: FakeDaemon | undefined;

  beforeEach(() => {
    dir = makeTempDir();
  });

  afterEach(async () => {
    await daemon?.close();
    daemon = undefined;
    rmSync(dir, { recursive: true, force: true });
  });

  const start = async (behavior: Parameters<typeof startFakeDaemon>[0]) => {
    daemon = await startFakeDaemon(behavior, dir);
    return daemon.socketPath;
  };

  it("writes one request line and returns the parsed reply line", async () => {
    const path = await start(`{"jsonrpc":"2.0","id":1,"result":{}}\n`);
    await expect(requestCredentialDaemon(path, request, options)).resolves.toEqual({
      jsonrpc: "2.0",
      id: 1,
      result: {},
    });
    expect(daemon!.requests).toEqual([
      `{"jsonrpc":"2.0","id":1,"method":"credential/get","params":{"credential":"dev"}}\n`,
    ]);
  });

  it("reads a reply that arrives in several chunks and ignores bytes after the newline", async () => {
    const path = await start((socket) => {
      socket.write(`{"jsonrpc":`);
      setTimeout(() => socket.end(`"2.0"}\ntrailing garbage`), 20);
    });
    await expect(requestCredentialDaemon(path, request, options)).resolves.toEqual({ jsonrpc: "2.0" });
  });

  it(`accepts a reply line of exactly ${MAX_REPLY_LINE_BYTES} bytes`, async () => {
    const json = `{"jsonrpc":"2.0"}`;
    const line = json + " ".repeat(MAX_REPLY_LINE_BYTES - json.length);
    expect(Buffer.byteLength(line)).toBe(MAX_REPLY_LINE_BYTES);
    const path = await start(line + "\n");
    await expect(requestCredentialDaemon(path, request, options)).resolves.toEqual({ jsonrpc: "2.0" });
  });

  it(`rejects a reply line of ${MAX_REPLY_LINE_BYTES + 1} bytes`, async () => {
    const json = `{"jsonrpc":"2.0"}`;
    const line = json + " ".repeat(MAX_REPLY_LINE_BYTES + 1 - json.length);
    const path = await start(line + "\n");
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining(`reply line exceeds ${MAX_REPLY_LINE_BYTES} bytes`),
    });
  });

  it("stops reading at the limit without waiting for a newline or EOF", async () => {
    const path = await start((socket) => {
      socket.write("x".repeat(MAX_REPLY_LINE_BYTES + 10));
    });
    const start_ = Date.now();
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining(`reply line exceeds ${MAX_REPLY_LINE_BYTES} bytes`),
    });
    expect(Date.now() - start_).toBeLessThan(options.timeout);
  });

  it.each([
    ["no reply", ""],
    ["a partial line", `{"jsonrpc":"2.0"`],
  ])("rejects EOF with %s", async (_, reply) => {
    const path = await start(reply);
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining("connection closed before a complete reply line"),
    });
  });

  it("reply-not-json: rejects a reply line that is not JSON and leaves its secret out of the message", async () => {
    const path = await start(`{"jsonrpc":"2.0","id":1,"result":{"material":{"secret_access_key":"s3cr3t"\n`);
    const error = (await requestCredentialDaemon(path, request, options).catch((e) => e)) as Error;
    expect(error).toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining("reply is not valid JSON"),
    });
    expect(error.message).not.toContain("s3cr3t");
  });

  it("leaves the secret of a partial line out of the EOF message", async () => {
    const path = await start(`{"jsonrpc":"2.0","id":1,"result":{"material":{"secret_access_key":"s3cr3t"`);
    const error = (await requestCredentialDaemon(path, request, options).catch((e) => e)) as Error;
    expect(error).toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining("connection closed before a complete reply line"),
    });
    expect(error.message).not.toContain("s3cr3t");
  });

  it("rejects a reply line that is not UTF-8", async () => {
    const path = await start((socket) => {
      socket.end(Buffer.from([0x22, 0xff, 0x22, 0x0a]));
    });
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      code: "PROTOCOL_ERROR",
      message: expect.stringContaining("not valid UTF-8"),
    });
  });

  it("gives NOT_RUNNING with ENOENT when nothing is at the path", async () => {
    const path = join(dir, "missing.sock");
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      name: "CredentialDaemonProviderError",
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
    await expect(requestCredentialDaemon(path, request, options)).rejects.toMatchObject({
      code: "NOT_RUNNING",
      message: expect.stringContaining(`${path}: ECONNREFUSED`),
    });
  });

  it("gives NOT_RUNNING naming the connect timeout and destroys the socket", async () => {
    let socket: Socket | undefined;
    const path = join(dir, "never.sock");
    await expect(
      requestCredentialDaemon(path, request, { connectTimeout: 50, timeout: 5000 }, () => {
        socket = new Socket();
        return socket;
      })
    ).rejects.toMatchObject({
      code: "NOT_RUNNING",
      message:
        `Unable to connect to the credential daemon at ${path}: the connect timeout (50 ms) elapsed. ` +
        `Start the credential daemon, see ${CREDENTIAL_DAEMON_DOC}.`,
    });
    expect(socket!.destroyed).toBe(true);
  });

  it("gives NOT_RUNNING naming the call timeout when the daemon never replies, and closes the socket", async () => {
    const path = await start("hang");
    await expect(requestCredentialDaemon(path, request, { connectTimeout: 1000, timeout: 200 })).rejects.toMatchObject({
      code: "NOT_RUNNING",
      message:
        `Unable to connect to the credential daemon at ${path}: the call timeout (200 ms) elapsed. ` +
        `Start the credential daemon, see ${CREDENTIAL_DAEMON_DOC}.`,
    });
    await new Promise((r) => setTimeout(r, 50));
    expect(daemon!.sockets).toHaveLength(1);
    expect(daemon!.sockets[0].readableEnded || daemon!.sockets[0].destroyed).toBe(true);
  });
});
