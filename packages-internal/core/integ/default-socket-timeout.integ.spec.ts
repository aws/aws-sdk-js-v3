import { CloudTrailClient } from "@aws-sdk/client-cloudtrail";
import { KinesisClient, ListStreamsCommand } from "@aws-sdk/client-kinesis";
import { S3Client } from "@aws-sdk/client-s3";
import { ListQueuesCommand, SQSClient } from "@aws-sdk/client-sqs";
import { NodeHttpHandler } from "@smithy/node-http-handler";
import http from "node:http";
import http2 from "node:http2";
import net from "node:net";
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, test as it } from "vitest";

const ENV = "AWS_ENABLE_DEFAULT_SOCKET_TIMEOUT_2026";

/**
 * Scales idle timers of 60s or more down 1000x, so the 300000 and 900000 ms service defaults
 * fire within seconds. Error messages still report the unscaled value.
 */
const scale = (ms: number) => (ms >= 60_000 ? Math.round(ms / 1000) : ms);
const socketSetTimeout = net.Socket.prototype.setTimeout;
const requestSetTimeout = http.ClientRequest.prototype.setTimeout;
const http2Connect = http2.connect;

describe("default socket timeout", () => {
  const savedEnv = process.env[ENV];
  let mode: "hang" | "stall" | "trickle" = "hang";
  let h1: http.Server;
  let h2: http2.Http2Server;
  let h1Endpoint: string;
  let h2Endpoint: string;

  const respond = (write: (chunk: string) => void, end: (chunk: string) => void, headers: () => void) => {
    if (mode === "hang") {
      return;
    }
    headers();
    if (mode === "stall") {
      return write(" ");
    }
    let n = 0;
    const interval = setInterval(() => (++n > 10 ? (clearInterval(interval), end("{}")) : write(" ")), 200);
  };

  beforeAll(async () => {
    net.Socket.prototype.setTimeout = function (this: net.Socket, ms: number, ...rest: any[]) {
      return socketSetTimeout.call(this, scale(ms), ...rest);
    } as typeof socketSetTimeout;
    http.ClientRequest.prototype.setTimeout = function (this: http.ClientRequest, ms: number, ...rest: any[]) {
      return requestSetTimeout.call(this, scale(ms), ...rest);
    } as typeof requestSetTimeout;
    http2.connect = ((...args: Parameters<typeof http2.connect>) => {
      const session = http2Connect(...args);
      const request = session.request.bind(session);
      session.request = (...rargs: Parameters<typeof session.request>) => {
        const stream = request(...rargs);
        const set = stream.setTimeout.bind(stream);
        stream.setTimeout = (ms: number, cb?: () => void) => set(scale(ms), cb);
        return stream;
      };
      return session;
    }) as typeof http2.connect;

    h1 = http.createServer((req, res) =>
      respond(
        (c) => res.write(c),
        (c) => res.end(c),
        () => res.writeHead(200, { "content-type": "application/x-amz-json-1.0" })
      )
    );
    h2 = http2.createServer();
    h2.on("stream", (stream) =>
      respond(
        (c) => stream.write(c),
        (c) => stream.end(c),
        () => stream.respond({ ":status": 200, "content-type": "application/x-amz-json-1.1" })
      )
    );
    await new Promise<void>((r) => h1.listen(0, "127.0.0.1", r));
    await new Promise<void>((r) => h2.listen(0, "127.0.0.1", r));
    h1Endpoint = `http://127.0.0.1:${(h1.address() as net.AddressInfo).port}`;
    h2Endpoint = `http://127.0.0.1:${(h2.address() as net.AddressInfo).port}`;
  });

  afterAll(() => {
    net.Socket.prototype.setTimeout = socketSetTimeout;
    http.ClientRequest.prototype.setTimeout = requestSetTimeout;
    http2.connect = http2Connect;
    h1.closeAllConnections();
    h1.close();
    h2.close();
  });

  beforeEach(() => {
    delete process.env[ENV];
    mode = "hang";
  });

  afterEach(() => {
    if (savedEnv === undefined) {
      delete process.env[ENV];
    } else {
      process.env[ENV] = savedEnv;
    }
  });

  const shared = {
    region: "us-east-1",
    credentials: { accessKeyId: "INTEG", secretAccessKey: "INTEG" },
    maxAttempts: 1,
  };

  const resolvedDefault = async (client: { config: { requestHandler: unknown }; destroy(): void }) => {
    const config = await (
      client.config.requestHandler as { configProvider: Promise<{ defaultSocketTimeout?: number }> }
    ).configProvider;
    client.destroy();
    return config.defaultSocketTimeout;
  };

  /**
   * Sends one request and reports which timer ended it, or "pending" if none fired within capMs.
   */
  const outcome = async (send: () => Promise<unknown>, capMs: number) => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const result = await Promise.race([
      send().then(
        () => "ok",
        (e: Error) => e.message.match(/(?:after|for) (\d+) ms/)?.[1] ?? `error: ${e.message}`
      ),
      new Promise<string>((r) => (timer = setTimeout(() => r("pending"), capMs))),
    ]);
    clearTimeout(timer);
    return result;
  };

  describe("generated client config", () => {
    it("adds no default when the env var is not exactly 'true'", async () => {
      for (const value of [undefined, "false", "TRUE", "1"]) {
        if (value === undefined) {
          delete process.env[ENV];
        } else {
          process.env[ENV] = value;
        }
        expect(await resolvedDefault(new SQSClient(shared))).toBeUndefined();
      }
    });

    it("applies each service's tier when enabled", async () => {
      process.env[ENV] = "true";
      expect(await resolvedDefault(new SQSClient(shared))).toBe(900_000);
      expect(await resolvedDefault(new CloudTrailClient(shared))).toBe(300_000);
      expect(await resolvedDefault(new S3Client(shared))).toBeUndefined();
      expect(await resolvedDefault(new KinesisClient(shared))).toBe(900_000);
    });

    it("keeps HTTP/2 defaults alongside the timeout", async () => {
      process.env[ENV] = "true";
      const client = new KinesisClient(shared);
      expect(client.config.requestHandler.constructor.name).toBe("NodeHttp2Handler");
      const config = await (client.config.requestHandler as unknown as { configProvider: Promise<object> })
        .configProvider;
      expect(config).toMatchObject({ disableConcurrentStreams: true, defaultSocketTimeout: 900_000 });
      client.destroy();
    });

    it("adds the default under caller options without mutating them", async () => {
      process.env[ENV] = "true";
      const options = { connectionTimeout: 1000 };
      const client = new SQSClient({ ...shared, requestHandler: options });
      const config = await (client.config.requestHandler as unknown as { configProvider: Promise<object> })
        .configProvider;
      expect(config).toMatchObject({ connectionTimeout: 1000, defaultSocketTimeout: 900_000 });
      expect(options).toEqual({ connectionTimeout: 1000 });
      client.destroy();
    });

    it("leaves a caller's handler instance unchanged", async () => {
      process.env[ENV] = "true";
      const handler = new NodeHttpHandler();
      const client = new SQSClient({ ...shared, requestHandler: handler });
      expect(client.config.requestHandler).toBe(handler);
      expect(await resolvedDefault(client)).toBeUndefined();
    });

    it("leaves a handler instance shared with an exempt service without a default", async () => {
      process.env[ENV] = "true";
      const handler = new NodeHttpHandler();
      const sqs = new SQSClient({ ...shared, requestHandler: handler });
      const s3 = new S3Client({ ...shared, requestHandler: handler });
      expect(await resolvedDefault(s3)).toBeUndefined();
      sqs.destroy();
    });
  });

  describe("requests to an unresponsive server", () => {
    const sqs = () => new SQSClient({ ...shared, endpoint: h1Endpoint });
    const kinesis = () => new KinesisClient({ ...shared, endpoint: h2Endpoint });

    it("HTTP/1: does not time out when disabled", async () => {
      const client = sqs();
      expect(await outcome(() => client.send(new ListQueuesCommand({})), 5000)).toBe("pending");
      client.destroy();
    });

    it("HTTP/1: times out a stalled response body at the service default", async () => {
      process.env[ENV] = "true";
      mode = "stall";
      const client = sqs();
      expect(await outcome(() => client.send(new ListQueuesCommand({})), 10_000)).toBe("900000");
      client.destroy();
    });

    it("HTTP/1: keeps the default under an overall requestTimeout", async () => {
      process.env[ENV] = "true";
      const client = sqs();
      expect(await outcome(() => client.send(new ListQueuesCommand({}), { requestTimeout: 30_000 }), 10_000)).toBe(
        "900000"
      );
      client.destroy();
    });

    it("HTTP/2: times out a stalled stream at the service default", async () => {
      process.env[ENV] = "true";
      mode = "stall";
      const client = kinesis();
      expect(await outcome(() => client.send(new ListStreamsCommand({})), 5000)).toBe("900000");
      client.destroy();
    });

    it("does not time out a slow response that keeps sending data", async () => {
      process.env[ENV] = "true";
      mode = "trickle";
      const h1Client = sqs();
      const h2Client = kinesis();
      const [r1, r2] = await Promise.all([
        outcome(() => h1Client.send(new ListQueuesCommand({})), 10_000),
        outcome(() => h2Client.send(new ListStreamsCommand({})), 10_000),
      ]);
      expect([r1, r2]).toEqual(["ok", "ok"]);
      h1Client.destroy();
      h2Client.destroy();
    });
  });
}, 60_000);
