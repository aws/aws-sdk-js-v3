import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { Readable, pipeline } from "stream";
import { readabletoIterable } from "./utils";
import { EventMessageChunkerStream } from "./EventMessageChunkerStream";
import { MessageUnmarshallerStream } from "./MessageUnmarshallerStream";
import { EventDeserializerStream } from "./EventDeserializerStream";

export interface EventStreamMarshaller extends IEventStreamMarshaller {}

export interface EventStreamMarshallerOptions {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

export class EventStreamMarshaller {
  private readonly eventMarshaller: EventMarshaller;
  constructor({ utf8Encoder, utf8Decoder }: EventStreamMarshallerOptions) {
    this.eventMarshaller = new EventMarshaller(utf8Encoder, utf8Decoder);
  }

  deserialize<T>(
    body: Readable,
    deserializer: (input: { [event: string]: Message }) => T
  ): AsyncIterable<T> {
    const eventDeserializerStream = new EventDeserializerStream({
      deserializer
    });
    pipeline(
      body,
      new EventMessageChunkerStream(), //frame the body
      new MessageUnmarshallerStream({
        eventMarshaller: this.eventMarshaller
      }),
      eventDeserializerStream,
      err => {
        if (err) throw err;
      }
    );
    //should use stream[Symbol.asyncIterable] when the api is stable
    //reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
    if (typeof eventDeserializerStream[Symbol.asyncIterator] === "function") {
      // use the experimental feature if available.
      return eventDeserializerStream;
    }
    return readabletoIterable(eventDeserializerStream);
  }

  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): Readable {
    //will use Readable.from(Iterable) in Node12
    const inputIterator = input[Symbol.asyncIterator]();
    const self = this;
    let generatorDone = false;
    const stream = new Readable({
      objectMode: true,
      async read() {
        try {
          const result = await inputIterator.next();
          if (result.done && generatorDone) {
            this.push(null);
            return;
          }
          const payloadBuf = result.done
            ? new Uint8Array(0)
            : self.eventMarshaller.marshall(serializer(result.value));
          this.push(payloadBuf);
          if (result.done && !generatorDone) generatorDone = true;
        } catch (e) {
          this.destroy(e);
        }
      }
    });
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    stream.on("error", () => {
      stream.destroy();
    });
    stream.on("end", () => {
      stream.destroy();
    });
    return stream;
  }
}
