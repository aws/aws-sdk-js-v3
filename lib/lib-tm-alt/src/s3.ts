// @ts-nocheck
/**
 * S3 client factory tuned for high-throughput parallel transfers.
 *
 * Features:
 * - Connection-spreading DNS (round-robin across all resolved S3 IPs)
 * - Custom agents with per-socket IP capture (onConnect)
 * - Undici HTTP handler support (lazy-loaded)
 * - Socket stamping for connection ID tracking
 * - TLS info capture (protocol + cipher)
 * - Benchmark middleware for capturing serving socket per request
 * - Configurable cipher pinning
 */

import { Agent as HttpsAgent } from "node:https";
import { Agent as HttpAgent } from "node:http";
import dns from "node:dns";
import { S3Client } from "@aws-sdk/client-s3";
import { NodeHttpHandler } from "@smithy/node-http-handler";

/**
 * Build an undici-backed request handler (@smithy/undici-http-handler). Loaded
 * lazily so the default node handler path doesn't pull in undici.
 */
function makeUndiciHandler({ maxSockets, onConnect, lookup, connectionTimeout, stampConn, ciphers, onTls }: any) {
  const { UndiciHttpHandler } = require("@smithy/undici-http-handler");
  const { buildConnector } = require("undici");
  const base = buildConnector({ timeout: connectionTimeout || 10_000, ...(ciphers ? { ciphers } : {}) });

  let connect: any;
  if (onConnect || lookup || stampConn || onTls) {
    const finish = (o: any, cb: any) =>
      base(o, (err: any, socket: any) => {
        if (!err && socket) {
          if (stampConn) {
            stampConn(socket);
          }
          if (onTls && typeof socket.getProtocol === "function") {
            try {
              onTls({ protocol: socket.getProtocol(), cipher: socket.getCipher?.()?.name ?? null });
            } catch {
              /* ignore */
            }
          }
          if (onConnect) {
            if (socket.remoteAddress) {
              onConnect(socket.remoteAddress, socket);
            } else {
              socket.once("connect", () => socket.remoteAddress && onConnect(socket.remoteAddress, socket));
            }
          }
        }
        cb(err, socket);
      });

    connect = (opts: any, cb: any) => {
      if (lookup && opts.hostname) {
        const original = opts.hostname;
        lookup(original, {}, (err: any, address: any) => {
          if (err || !address) {
            return finish(opts, cb);
          }
          finish({ ...opts, hostname: address, host: address, servername: opts.servername || original }, cb);
        });
      } else {
        finish(opts, cb);
      }
    };
  }

  const dispatcher: any = {
    connections: maxSockets,
    pipelining: 1,
    headersTimeout: 0,
    bodyTimeout: 0,
  };
  if (connect) {
    dispatcher.connect = connect;
  }
  return new UndiciHttpHandler({ dispatcher });
}

/**
 * Connection-spreading DNS lookup.
 *
 * Node's default dns.lookup() returns a single address, so every socket to an S3
 * endpoint concentrates on one front-end IP. This custom lookup resolves ALL of
 * the endpoint's A-records and round-robins connections across them.
 */
const DNS_TTL_MS = 1000;
const dnsCache = new Map<string, { ips: string[]; ts: number; idx: number }>();

function spreadLookup(hostname: string, options: any, callback: any): void {
  if (options && options.family === 6) {
    return dns.lookup(hostname, options, callback);
  }

  const deliver = (entry: { ips: string[]; idx: number }) => {
    const ip = entry.ips[entry.idx % entry.ips.length];
    entry.idx += 1;
    if (options && options.all) {
      callback(null, [{ address: ip, family: 4 }]);
    } else {
      callback(null, ip, 4);
    }
  };

  const cached = dnsCache.get(hostname);
  if (cached && cached.ips.length && Date.now() - cached.ts < DNS_TTL_MS) {
    return deliver(cached);
  }

  dns.resolve4(hostname, (err, ips) => {
    if (err || !ips || !ips.length) {
      return dns.lookup(hostname, options, callback);
    }
    const entry = { ips, ts: Date.now(), idx: cached ? cached.idx : 0 };
    dnsCache.set(hostname, entry);
    deliver(entry);
  });
}

/**
 * Build an agent that reports the remote IP of each new socket it opens.
 */
function makeAgent(Base: any, opts: any, { onConnect, lookup, stampConn, onTls }: any = {}): any {
  if (!onConnect && !lookup && !stampConn && !onTls) {
    return new Base(opts);
  }
  class CustomAgent extends Base {
    createConnection(options: any, cb: any) {
      const connOpts = lookup ? { ...options, lookup } : options;
      const socket = super.createConnection(connOpts, cb);
      if (stampConn) {
        stampConn(socket);
      }
      if (onTls) {
        socket.once("secureConnect", () => {
          try {
            onTls({ protocol: socket.getProtocol?.() ?? null, cipher: socket.getCipher?.()?.name ?? null });
          } catch {
            /* ignore */
          }
        });
      }
      if (onConnect) {
        let recorded = false;
        const record = () => {
          if (!recorded && socket.remoteAddress) {
            recorded = true;
            onConnect(socket.remoteAddress, socket);
          }
        };
        socket.once("connect", record);
        socket.once("secureConnect", record);
      }
      return socket;
    }
  }
  return new CustomAgent(opts);
}

export interface MakeClientOptions {
  region?: string;
  maxSockets?: number;
  connectionTimeout?: number;
  requestTimeout?: number;
  validateChecksum?: boolean;
  onConnect?: ((remoteAddress: string, socket: any) => void) | null;
  spreadConnections?: boolean;
  tls?: boolean;
  httpHandler?: "node" | "undici";
  captureSocket?: boolean;
  connIdPrefix?: string;
  ciphers?: string | null;
  onTls?: ((info: { protocol: string | null; cipher: string | null }) => void) | null;
}

export function makeClient({
  region = process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION,
  maxSockets = 256,
  connectionTimeout = 5_000,
  requestTimeout = 0,
  validateChecksum = true,
  onConnect = null,
  spreadConnections = false,
  tls = true,
  httpHandler = "node",
  captureSocket = false,
  connIdPrefix = "",
  ciphers = null,
  onTls = null,
}: MakeClientOptions = {}): S3Client {
  const agentOpts: any = { keepAlive: true, maxSockets, ...(ciphers ? { ciphers } : {}) };
  const lookup = spreadConnections ? spreadLookup : undefined;

  let connCounter = 0;
  const stampConn = captureSocket
    ? (socket: any) => {
        if (socket && socket.__benchConnId === undefined) {
          socket.__benchConnId = `${connIdPrefix}c${++connCounter}`;
        }
      }
    : null;

  const requestHandler =
    httpHandler === "undici"
      ? makeUndiciHandler({ maxSockets, onConnect, lookup, connectionTimeout, stampConn, ciphers, onTls })
      : new NodeHttpHandler({
          httpsAgent: makeAgent(HttpsAgent, agentOpts, { onConnect, lookup, stampConn, onTls }),
          httpAgent: makeAgent(HttpAgent, agentOpts, { onConnect, lookup, stampConn }),
          connectionTimeout,
          requestTimeout,
        });

  const config: any = {
    region,
    responseChecksumValidation: validateChecksum ? "WHEN_SUPPORTED" : "WHEN_REQUIRED",
    maxAttempts: 3,
    requestHandler,
  };

  if (!tls) {
    config.endpoint = region ? `http://s3.${region}.amazonaws.com` : "http://s3.amazonaws.com";
  }

  const client = new S3Client(config);

  // Capture the serving socket's remote IP + connection id per request.
  if (captureSocket) {
    client.middlewareStack.add(
      (next: any) => async (args: any) => {
        const result = await next(args);
        try {
          const sock = result?.response?.body?.socket;
          if (sock) {
            stampConn!(sock);
            result.response.$benchSocket = {
              vip: sock.remoteAddress ?? null,
              connId: sock.__benchConnId ?? null,
            };
          }
        } catch {
          /* best-effort */
        }
        return result;
      },
      { step: "deserialize", priority: "low", name: "benchSocketGrab" }
    );
    client.middlewareStack.add(
      (next: any) => async (args: any) => {
        const result = await next(args);
        if (result?.response?.$benchSocket && result.output) {
          result.output.$benchConn = result.response.$benchSocket;
        }
        return result;
      },
      { step: "build", priority: "low", name: "benchSocketAttach" }
    );
  }

  return client;
}
