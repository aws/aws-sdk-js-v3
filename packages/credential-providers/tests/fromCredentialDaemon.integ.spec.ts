import { S3 } from "@aws-sdk/client-s3";
import type * as CredentialDaemonPackage from "@aws-sdk/credential-provider-daemon";
import { fromCredentialDaemon } from "@aws-sdk/credential-providers";
import { rmSync } from "node:fs";
import { createRequire } from "node:module";
import type * as NodeNet from "node:net";
import type { Socket } from "node:net";
import { afterAll, afterEach, beforeAll, describe, expect, test as it } from "vitest";

import type { FakeDaemon } from "../../../packages-internal/credential-provider-daemon/src/fakeDaemon.spec";
import {
  sessionReply,
  startFakeDaemon,
} from "../../../packages-internal/credential-provider-daemon/src/fakeDaemon.spec";
import { CTest } from "./_test-lib";

const nodeRequire = createRequire(import.meta.url);
const net = nodeRequire("node:net") as typeof NodeNet;
const originalCreateConnection = net.createConnection;

/**
 * The daemon package reads createConnection from node:net when it first loads,
 * and both fromCredentialDaemon and fromIni load it on their first call.
 * This wrapper is in place before that, so it sees every dial.
 * When holdConnect is true, it returns a socket that never connects.
 */
const dialed: string[] = [];
let holdConnect = false;
const heldSockets: Socket[] = [];

describe(fromCredentialDaemon.name, () => {
  new CTest({ credentialProvider: fromCredentialDaemon });

  let daemon: FakeDaemon | undefined;

  beforeAll(() => {
    (net as any).createConnection = (options: any, ...rest: any[]) => {
      dialed.push(typeof options === "object" ? options.path : String(options));
      if (holdConnect) {
        const socket = new net.Socket();
        heldSockets.push(socket);
        return socket;
      }
      return (originalCreateConnection as any)(options, ...rest);
    };
  });

  afterEach(async () => {
    holdConnect = false;
    dialed.length = 0;
    for (const socket of heldSockets.splice(0)) {
      socket.destroy();
    }
    if (daemon) {
      await daemon.close();
      rmSync(daemon.dir, { recursive: true, force: true });
      daemon = undefined;
    }
  });

  afterAll(() => {
    (net as any).createConnection = originalCreateConnection;
  });

  const getErrorClass = () =>
    (nodeRequire("@aws-sdk/credential-provider-daemon") as typeof CredentialDaemonPackage)
      .CredentialDaemonProviderError;

  const s3WithSigningCapture = (credentials: ReturnType<typeof fromCredentialDaemon>) => {
    const s3 = new S3({ region: "us-east-1", credentials });
    const signedHeaders: Record<string, string>[] = [];
    s3.middlewareStack.add(
      (next) => async (args: any) => {
        signedHeaders.push({ ...args.request.headers });
        return next(args);
      },
      { step: "deserialize", name: "captureSignedRequest" }
    );
    return { s3, signedHeaders };
  };

  it("signs an S3 request with the daemon's credentials", async () => {
    daemon = await startFakeDaemon(sessionReply());
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = daemon.socketPath;

    const { s3, signedHeaders } = s3WithSigningCapture(
      fromCredentialDaemon({ credential: "dev", connectTimeout: 1000, timeout: 5000 })
    );
    await s3.listBuckets({});

    expect(daemon.requests).toHaveLength(1);
    expect(JSON.parse(daemon.requests[0])).toEqual({
      jsonrpc: "2.0",
      id: 1,
      method: "credential/get",
      params: { credential: "dev" },
    });
    expect(dialed).toEqual([daemon.socketPath]);
    expect(signedHeaders).toHaveLength(1);
    expect(signedHeaders[0].authorization).toContain("Credential=ASIADAEMON/");
    expect(signedHeaders[0]["x-amz-security-token"]).toBe("TOKEN");
    expect(await s3.config.credentials()).toEqual({
      $source: { CREDENTIAL_DAEMON: "Aq" },
      accessKeyId: "ASIADAEMON",
      secretAccessKey: "SECRET",
      sessionToken: "TOKEN",
      expiration: new Date("3000-01-01T00:00:00.000Z"),
    });
  });

  it("passes connectTimeout through to the connection", async () => {
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = "/tmp/fromCredentialDaemon-integ-held.sock";
    holdConnect = true;

    const { s3, signedHeaders } = s3WithSigningCapture(
      fromCredentialDaemon({ credential: "dev", connectTimeout: 150, timeout: 5000 })
    );
    const start = Date.now();
    const error = await s3.listBuckets({}).catch((e) => e);

    expect(Date.now() - start).toBeLessThan(4000);
    expect(error).toBeInstanceOf(getErrorClass());
    expect(error.code).toBe("NOT_RUNNING");
    expect(error.message).toContain("the connect timeout (150 ms) elapsed");
    expect(dialed).toEqual(["/tmp/fromCredentialDaemon-integ-held.sock"]);
    expect(signedHeaders).toHaveLength(0);
  });

  it("passes timeout through to the call", async () => {
    daemon = await startFakeDaemon("hang");
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = daemon.socketPath;

    const { s3, signedHeaders } = s3WithSigningCapture(
      fromCredentialDaemon({ credential: "dev", connectTimeout: 1000, timeout: 200 })
    );
    const error = await s3.listBuckets({}).catch((e) => e);

    expect(error).toBeInstanceOf(getErrorClass());
    expect(error.code).toBe("NOT_RUNNING");
    expect(error.message).toContain("the call timeout (200 ms) elapsed");
    expect(daemon.requests).toHaveLength(1);
    expect(signedHeaders).toHaveLength(0);
  });

  it("gives the caller a daemon error as a CredentialDaemonProviderError with its code", async () => {
    daemon = await startFakeDaemon(
      JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        error: { code: -32000, message: "sign in again", data: { code: "REAUTH_REQUIRED" } },
      }) + "\n"
    );
    process.env.AWS_CREDENTIAL_DAEMON_SOCKET = daemon.socketPath;

    const { s3, signedHeaders } = s3WithSigningCapture(
      fromCredentialDaemon({ credential: "dev", connectTimeout: 1000, timeout: 5000 })
    );
    const error = await s3.listBuckets({}).catch((e) => e);

    expect(error).toBeInstanceOf(getErrorClass());
    expect(error.name).toBe("CredentialDaemonProviderError");
    expect(error.code).toBe("REAUTH_REQUIRED");
    expect(error.tryNextLink).toBe(false);
    expect(daemon.requests).toHaveLength(1);
    expect(signedHeaders).toHaveLength(0);
  });
});
