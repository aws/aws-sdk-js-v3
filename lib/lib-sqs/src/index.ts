/**
 * SQS message poller with auto-delete, backoff, and graceful shutdown.
 *
 * @example Event-based. Messages are deleted once the handler resolves.
 * ```typescript
 * import { SQSPoller } from "@aws-sdk/lib-sqs";
 *
 * const poller = new SQSPoller({ queueUrl: "https://sqs.us-east-1.amazonaws.com/1/q" });
 * poller.on("message", async (message) => console.log(message.body));
 * poller.on("error", (err) => console.error(err));
 * poller.start();
 * ```
 *
 * @example Async iteration
 * ```typescript
 * for await (const message of poller) {
 *   console.log(message.body);
 * }
 * ```
 *
 * @example Graceful shutdown. Drains in-flight handlers and flushes pending deletes.
 * ```typescript
 * const ac = new AbortController();
 * process.on("SIGTERM", () => ac.abort());
 * const poller = new SQSPoller({ queueUrl: "...", abortSignal: ac.signal });
 * poller.start();
 * ```
 *
 * @packageDocumentation
 */

export { SQSPoller } from "./SQSPoller";
export { Message } from "./Message";
export { PollerError, DeleteError, TimeoutError, VisibilityExtensionError } from "./errors";
export type {
  PollerConfig,
  PollerStats,
  SerializablePollerStats,
  SQSPollerEvents,
  SQSPollerEventName,
  PollerMessage,
} from "./types";
