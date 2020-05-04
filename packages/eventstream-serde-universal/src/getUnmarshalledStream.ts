import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Message } from "@aws-sdk/types";

export type UnmarshalledStreamOptions = {
  eventMarshaller: EventMarshaller;
};

export function getUnmarshalledStream(
  source: AsyncIterable<Uint8Array>,
  options: UnmarshalledStreamOptions
): AsyncIterable<{ [name: string]: Message }> {
  return {
    [Symbol.asyncIterator]: async function* () {
      for await (const chunk of source) {
        const message = options.eventMarshaller.unmarshall(chunk);
        const { value: messageType } = message.headers[":message-type"];
        if (messageType === "error") {
          // Unmodeled exception in event
          const unmodeledError = new Error(
            (message.headers[":error-message"].value as string) ||
              "UnknownError"
          );
          unmodeledError.name = message.headers[":error-code"].value as string;
          throw unmodeledError;
        } else if (messageType === "exception") {
          // For modeled exception, push it to deserializer and throw after deserializing
          yield {
            [message.headers[":exception-type"].value as string]: message
          };
        } else if (messageType === "event") {
          yield {
            [message.headers[":event-type"].value as string]: message
          };
        } else {
          throw Error(
            `Unrecognizable event type: ${message.headers[":event-type"].value}`
          );
        }
      }
    }
  };
}
