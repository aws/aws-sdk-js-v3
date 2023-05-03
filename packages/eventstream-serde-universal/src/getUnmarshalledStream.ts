import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { Encoder, Message } from "@aws-sdk/types";

/**
 * @internal
 */
export type UnmarshalledStreamOptions<T> = {
  eventStreamCodec: EventStreamCodec;
  deserializer: (input: Record<string, Message>) => Promise<T>;
  toUtf8: Encoder;
};

/**
 * @internal
 */
export function getUnmarshalledStream<T extends Record<string, any>>(
  source: AsyncIterable<Uint8Array>,
  options: UnmarshalledStreamOptions<T>
): AsyncIterable<T> {
  const messageUnmarshaller = getMessageUnmarshaller(options.deserializer, options.toUtf8);
  return {
    [Symbol.asyncIterator]: async function* () {
      for await (const chunk of source) {
        const message = options.eventStreamCodec.decode(chunk);
        const type = await messageUnmarshaller(message);
        if (type === undefined) continue;
        yield type;
      }
    },
  };
}

/**
 * @internal
 */
export function getMessageUnmarshaller<T extends Record<string, any>>(
  deserializer: (input: Record<string, Message>) => Promise<T>,
  toUtf8: Encoder
): (input: Message) => Promise<T | undefined> {
  return async function (message: Message): Promise<T | undefined> {
    const { value: messageType } = message.headers[":message-type"];
    if (messageType === "error") {
      // Unmodeled exception in event
      const unmodeledError = new Error((message.headers[":error-message"].value as string) || "UnknownError");
      unmodeledError.name = message.headers[":error-code"].value as string;
      throw unmodeledError;
    } else if (messageType === "exception") {
      // For modeled exception, push it to deserializer and throw after deserializing
      const code = message.headers[":exception-type"].value as string;
      const exception = { [code]: message };
      // Get parsed exception event in key(error code) value(structured error) pair.
      const deserializedException = await deserializer(exception);
      if (deserializedException.$unknown) {
        //this is an unmodeled exception then try parsing it with best effort
        const error = new Error(toUtf8(message.body));
        error.name = code;
        throw error;
      }
      throw deserializedException[code];
    } else if (messageType === "event") {
      const event = {
        [message.headers[":event-type"].value as string]: message,
      };
      const deserialized = await deserializer(event);
      if (deserialized.$unknown) return;
      return deserialized;
    } else {
      throw Error(`Unrecognizable event type: ${message.headers[":event-type"].value}`);
    }
  };
}
