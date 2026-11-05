# @aws-sdk/lib-sqs

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-sqs/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-sqs)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-sqs.svg)](https://www.npmjs.com/package/@aws-sdk/lib-sqs)

An SQS poller with long polling, concurrency limits, automatic deletion, visibility timeout extension, error backoff, and graceful shutdown.

```sh
npm install @aws-sdk/lib-sqs @aws-sdk/client-sqs
```

`@aws-sdk/client-sqs` is a peer dependency.

## Usage

### Event-based

```js
import { SQSPoller } from "@aws-sdk/lib-sqs";

const poller = new SQSPoller({ queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789/my-queue" });

// Deleted once the handler resolves. If it throws, the message is redelivered after the visibility timeout.
const unsubscribe = poller.on("message", async (message) => {
  console.log(message.body);
});
poller.on("error", (error) => console.error(error));

poller.start();
```

Messages are only auto-deleted while at least one `message` listener is registered. `on()` returns a function that removes the listener, and `off(event)` removes all listeners for an event.

### Async iteration

```js
for await (const message of poller) {
  console.log(message.body);
  if (done) {
    message.enqueueDelete(); // breaking out skips auto-delete for the current message
    break;
  }
}
```

Each message is deleted when the loop moves on to the next one. Only one mode can run at a time.

### Stopping

```js
await poller.stop(); // waits for in-flight work, flushes pending deletes, then resolves with stats
await poller.stop(false); // returns right away. Running handlers keep going and their messages are still deleted
```

Don't `await poller.stop()` inside a `message` handler or a `for await` body. Shutdown waits for that work, so the call waits the full `shutdownTimeoutMs` and then emits a `TimeoutError`. Use `void poller.stop()` or `break` instead. Passing an `abortSignal` also stops the poller gracefully, e.g. on `SIGTERM`.

## Options

Timing options are in milliseconds.

| Option                                           | Default            | Notes                                                                                                  |
| ------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------ |
| `queueUrl`                                       | required           |                                                                                                        |
| `client` / `clientConfig`                        |                    | An `SQSClient`, or config for a new one. `client` wins if both are set.                                |
| `receiveWaitTimeMs`                              | `20_000`           | Long-poll wait (0–20,000). Rounded down to whole seconds, so values under 1,000 short poll.            |
| `receiveBatchSize`                               | `10`               | Messages per receive (1–10).                                                                           |
| `maxConcurrency`                                 | `10`               | Max messages in flight. Event mode only. Use `1` to keep FIFO ordering within a message group.         |
| `activePollIntervalMs` / `idlePollIntervalMs`    | `0`                | Delay after a poll with or without messages. The idle delay is 100 ms when `receiveWaitTimeMs` is `0`. |
| `idleTimeoutMs`                                  |                    | Stop after this long without a message.                                                                |
| `systemAttributeNames` / `messageAttributeNames` |                    | Attributes to request, e.g. `["All"]`.                                                                 |
| `deleteMessages`                                 | `true`             | Set `false` to delete manually with `message.enqueueDelete()`.                                         |
| `deleteBatchSize` / `deleteWaitMs`               | `10` / `2_000`     | Deletes are batched until full or until the wait elapses.                                              |
| `visibilityTimeoutMs`                            | queue default      |                                                                                                        |
| `extendTimeout`                                  | `false`            | Keep extending visibility while a message is processed. Requires `visibilityTimeoutMs`.                |
| `extendTimeoutAdvanceMs`                         | `5_000`            | How early to extend. Must be less than `visibilityTimeoutMs`.                                          |
| `maxTimeoutExtensionMs`                          | 12 hours           | Then extension stops and `heartbeatExpired` fires.                                                     |
| `backoffMs` / `maxBackoffMs`                     | `1_000` / `30_000` | Backoff after receive errors, doubling up to the max.                                                  |
| `shutdownTimeoutMs`                              | `30_000`           | Max wait for in-flight work on a graceful stop.                                                        |
| `abortSignal`                                    |                    | Aborting stops gracefully.                                                                             |
| `beforeRequest`                                  |                    | Called before each receive. May be async. Throwing stops polling.                                      |

## Events

- `message`: a message was received.
- `error`: any error, including failed receives, deletes and extensions, handlers that throw, shutdown timeouts, and `beforeRequest` throwing. Without an `error` listener, errors are dropped silently.
- `stopped`: shutdown finished, with the final stats. Fires once per run.
- `empty`: a poll returned nothing. `idle`: `idleTimeoutMs` elapsed and the poller is stopping.
- `timeoutExtended` and `heartbeatExpired`: a visibility extension happened, or `maxTimeoutExtensionMs` was reached.

## Messages

Each message has `body`, `messageId`, `receiptHandle`, `attributes`, `messageAttributes`, `receivedAt`, and the underlying `raw` SQS message, plus:

- `enqueueDelete()`: delete it (batched).
- `keep()`: leave it on the queue. It reappears after the visibility timeout.
- `release()`: make it visible again immediately, e.g. to retry sooner after a failure.
- `changeVisibility(timeoutMs)`: set a new visibility timeout. This stops automatic extension, and the message is still auto-deleted.

## Stats and errors

`poller.running`, `poller.inFlight` (event mode only), `poller.getStats()`, and `poller.toJSON()` report state. Counters accumulate across runs, since a poller can be restarted after `stop()`. Errors extend `PollerError`: `TimeoutError` (shutdown took longer than `shutdownTimeoutMs`), `DeleteError` (with `failures` and the failed `messageIds`), and `VisibilityExtensionError` (with `messageId`).
