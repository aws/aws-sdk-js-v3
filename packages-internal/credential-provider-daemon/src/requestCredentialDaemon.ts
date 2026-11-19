import { concatBytes } from "@smithy/core/serde";
import type { Logger } from "@smithy/types";
import { createConnection } from "node:net";
import type { Socket } from "node:net";

import { CREDENTIAL_DAEMON_DOC, MAX_REPLY_LINE_BYTES } from "./constants";
import { CredentialDaemonProviderError } from "./CredentialDaemonProviderError";

/**
 * @internal
 */
export interface RequestCredentialDaemonOptions {
  /**
   * Milliseconds to wait for the connection.
   */
  connectTimeout: number;
  /**
   * Milliseconds to wait for the whole call, connection included.
   */
  timeout: number;
  logger?: Logger;
}

/**
 * @internal
 */
export type ConnectFunction = (path: string) => Socket;

const NEWLINE = 0x0a;

/**
 * Sends one JSON-RPC request line to the credential daemon over a new connection,
 * and returns the parsed JSON of the first reply line.
 * @internal
 */
export const requestCredentialDaemon = (
  socketPath: string,
  request: unknown,
  { connectTimeout, timeout, logger }: RequestCredentialDaemonOptions,
  connect: ConnectFunction = (path) => createConnection({ path })
): Promise<unknown> =>
  new Promise<unknown>((resolve, reject) => {
    let settled = false;
    let connected = false;
    let buffered = 0;
    const chunks: Uint8Array[] = [];
    let socket: Socket | undefined = undefined;
    let connectTimer: ReturnType<typeof setTimeout> | undefined = undefined;
    let callTimer: ReturnType<typeof setTimeout> | undefined = undefined;

    const settle = (error: CredentialDaemonProviderError | undefined, value?: unknown) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(connectTimer);
      clearTimeout(callTimer);
      socket?.destroy();
      if (error) {
        reject(error);
      } else {
        resolve(value);
      }
    };

    const notRunning = (reason: string) =>
      new CredentialDaemonProviderError(
        `Unable to connect to the credential daemon at ${socketPath}: ${reason}. ` +
          `Start the credential daemon, see ${CREDENTIAL_DAEMON_DOC}.`,
        "NOT_RUNNING",
        { logger }
      );

    const protocolError = (reason: string) =>
      new CredentialDaemonProviderError(
        `The credential daemon at ${socketPath} sent an invalid reply: ${reason}.`,
        "PROTOCOL_ERROR",
        { logger }
      );

    const onLine = (line: Uint8Array) => {
      if (line.length > MAX_REPLY_LINE_BYTES) {
        return settle(protocolError(`reply line exceeds ${MAX_REPLY_LINE_BYTES} bytes`));
      }
      let text: string;
      try {
        text = new TextDecoder("utf-8", { fatal: true }).decode(line);
      } catch {
        return settle(protocolError("reply is not valid UTF-8"));
      }
      let parsed: unknown;
      try {
        parsed = JSON.parse(text);
      } catch {
        return settle(protocolError("reply is not valid JSON"));
      }
      settle(undefined, parsed);
    };

    connectTimer = setTimeout(() => {
      settle(notRunning(`the connect timeout (${connectTimeout} ms) elapsed`));
    }, connectTimeout);
    callTimer = setTimeout(() => {
      settle(notRunning(`the call timeout (${timeout} ms) elapsed`));
    }, timeout);

    try {
      socket = connect(socketPath);
    } catch (e) {
      return settle(notRunning(e?.code ?? e?.message ?? String(e)));
    }

    socket.on("connect", () => {
      connected = true;
      clearTimeout(connectTimer);
      socket!.write(JSON.stringify(request) + "\n");
    });

    socket.on("data", (chunk: Uint8Array) => {
      if (settled) {
        return;
      }
      const newlineIndex = chunk.indexOf(NEWLINE);
      if (newlineIndex >= 0) {
        chunks.push(chunk.subarray(0, newlineIndex));
        return onLine(concatBytes(chunks, buffered + newlineIndex));
      }
      chunks.push(chunk);
      buffered += chunk.length;
      if (buffered > MAX_REPLY_LINE_BYTES) {
        settle(protocolError(`reply line exceeds ${MAX_REPLY_LINE_BYTES} bytes`));
      }
    });

    const onClosed = () => {
      settle(protocolError("connection closed before a complete reply line"));
    };
    socket.on("end", onClosed);
    socket.on("close", onClosed);

    socket.on("error", (error: NodeJS.ErrnoException) => {
      if (connected) {
        settle(protocolError(`connection closed before a complete reply line (${error.code ?? error.message})`));
      } else {
        settle(notRunning(error.code ?? error.message));
      }
    });
  });
