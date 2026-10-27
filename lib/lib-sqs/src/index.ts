/**
 * SQS message poller with auto-delete, backoff, and graceful shutdown.
 *
 * @example Event-based
 * ```typescript
 * const poller = new SQSPoller({ queueUrl: "https://sqs.us-east-1.amazonaws.com/1/q" });
 * const unsub = poller.on("message", async (msg) => console.log(msg.body));
 * poller.on("error", (err) => console.error(err));
 * poller.start();
 * ```
 *
 * @example Async iteration
 * ```typescript
 * for await (const msg of poller) {
 *   console.log(msg.body);
 *   if (msg.body === "last") {
 *     msg.enqueueDelete(); // exiting early skips auto-delete for this message
 *     break;
 *   }
 * }
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
