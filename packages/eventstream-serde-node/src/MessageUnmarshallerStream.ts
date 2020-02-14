import { Transform, TransformOptions, TransformCallback } from "stream";
import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";

export type MessageUnmarshallerStreamOptions = TransformOptions & {
  eventMarshaller: EventMarshaller;
};

export class MessageUnmarshallerStream extends Transform {
  private readonly eventMarshaller: EventMarshaller;
  constructor(options: MessageUnmarshallerStreamOptions) {
    super({
      readableObjectMode: true,
      writableObjectMode: true,
      ...options
    });
    this.eventMarshaller = options.eventMarshaller;
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    this.on("error", () => {
      this.destroy();
    });
    this.on("end", () => {
      this.destroy();
    });
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback) {
    try {
      const message = this.eventMarshaller.unmarshall(chunk);
      const { value: messageType } = message.headers[":message-type"];
      if (messageType === "error") {
        // Unmodeled exception in event
        const unmodeledError = new Error(
          (message.headers[":error-message"].value as string) || "UnknownError"
        );
        unmodeledError.name = message.headers[":error-code"].value as string;
        throw unmodeledError;
      } else if (messageType === "exception") {
        // For modeled exception, push it to deserializer and throw after deserializing
        this.push({
          [message.headers[":exception-type"].value as string]: message
        });
      } else if (messageType === "event") {
        this.push({
          [message.headers[":event-type"].value as string]: message
        });
      } else {
        throw Error(
          `Unrecognizable event type: ${message.headers[":event-type"].value}`
        );
      }
      return callback();
    } catch (err) {
      callback(err);
    }
  }
}
