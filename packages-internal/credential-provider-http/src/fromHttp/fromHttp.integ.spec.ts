import fs from "node:fs";
import http from "node:http";
import type { AddressInfo, Socket } from "node:net";
import os from "node:os";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { fromHttp } from "./fromHttp";

describe("fromHttp socket cleanup", () => {
  let server: http.Server;
  let port: number;
  let activeConnections: Set<Socket>;

  let tokenServer: http.Server;
  let tmpDir: string;

  beforeAll(async () => {
    activeConnections = new Set();

    server = http.createServer((req, res) => {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          AccessKeyId: "AKID",
          SecretAccessKey: "SECRET",
          Token: "TOKEN",
          Expiration: new Date(Date.now() + 3600_000).toISOString(),
        })
      );
    });

    server.on("connection", (socket) => {
      activeConnections.add(socket);
      socket.on("close", () => activeConnections.delete(socket));
    });

    await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
    port = (server.address() as AddressInfo).port;
  });

  afterAll(async () => {
    for (const socket of activeConnections) {
      socket.destroy();
    }
    await new Promise<void>((resolve) => server.close(() => resolve()));

    if (tokenServer) {
      await new Promise<void>((resolve) => tokenServer.close(() => resolve()));
    }
    if (tmpDir) {
      fs.rmSync(tmpDir, { recursive: true });
    }
  });

  it("destroys sockets after each credential fetch", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: `http://127.0.0.1:${port}/creds`,
    });

    // Call the provider multiple times to simulate repeated credential refreshes.
    for (let i = 0; i < 10; i++) {
      await provider();
    }

    // Allow time for socket close events to propagate.
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(activeConnections.size).toBe(0);
  });

  it("rejects when the server accepts the connection but never answers", async () => {
    const hangServer = http.createServer(() => {
      // Accept the request and never answer it.
    });
    const hangConnections = new Set<Socket>();
    hangServer.on("connection", (socket) => {
      hangConnections.add(socket);
      socket.on("close", () => hangConnections.delete(socket));
    });
    await new Promise<void>((resolve) => hangServer.listen(0, "127.0.0.1", resolve));
    const hangPort = (hangServer.address() as AddressInfo).port;

    const provider = fromHttp({
      awsContainerCredentialsFullUri: `http://127.0.0.1:${hangPort}/creds`,
      maxRetries: 1,
      timeout: 200,
    });

    const start = Date.now();
    const result = await Promise.race([
      provider().then(
        () => "resolved",
        (e: Error) => e.name
      ),
      new Promise((resolve) => setTimeout(() => resolve("still pending"), 5_000)),
    ]);

    // Two attempts of 200 ms plus one 200 ms delay between them.
    expect(result).toBe("CredentialsProviderError");
    expect(Date.now() - start).toBeLessThan(2_000);

    await new Promise((resolve) => setTimeout(resolve, 50));
    expect(hangConnections.size).toBe(0);

    for (const socket of hangConnections) {
      socket.destroy();
    }
    await new Promise<void>((resolve) => hangServer.close(() => resolve()));
  });

  it("re-reads token file on each request", async () => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "fromHttp-integ-"));
    const tokenFile = path.join(tmpDir, "token");
    fs.writeFileSync(tokenFile, "token-v1");

    const receivedAuths: string[] = [];
    tokenServer = http.createServer((req, res) => {
      receivedAuths.push(req.headers.authorization ?? "");
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          AccessKeyId: "AKID",
          SecretAccessKey: "SECRET",
          Token: "TOKEN",
          Expiration: new Date(Date.now() + 3600_000).toISOString(),
        })
      );
    });

    await new Promise<void>((resolve) => tokenServer.listen(0, "127.0.0.1", resolve));
    const tokenPort = (tokenServer.address() as AddressInfo).port;

    const provider = fromHttp({
      awsContainerCredentialsFullUri: `http://127.0.0.1:${tokenPort}/creds`,
      awsContainerCredentialsRelativeUri: "",
      awsContainerAuthorizationTokenFile: tokenFile,
    });

    await provider();
    fs.writeFileSync(tokenFile, "token-v2");
    await provider();

    expect(receivedAuths[0]).toBe("token-v1");
    expect(receivedAuths[1]).toBe("token-v2");
  });

  it("destroys sockets even when requests fail", async () => {
    // Use a server that always returns 500 to trigger retries and failure.
    const failServer = http.createServer((_, res) => {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Internal Server Error");
    });
    const failConnections = new Set<Socket>();
    failServer.on("connection", (socket) => {
      failConnections.add(socket);
      socket.on("close", () => failConnections.delete(socket));
    });
    await new Promise<void>((resolve) => failServer.listen(0, "127.0.0.1", resolve));
    const failPort = (failServer.address() as AddressInfo).port;

    const provider = fromHttp({
      awsContainerCredentialsFullUri: `http://127.0.0.1:${failPort}/creds`,
      maxRetries: 1,
      timeout: 500,
    });

    for (let i = 0; i < 5; i++) {
      await provider().catch(() => {});
    }

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(failConnections.size).toBe(0);

    for (const socket of failConnections) {
      socket.destroy();
    }
    await new Promise<void>((resolve) => failServer.close(() => resolve()));
  });
});
