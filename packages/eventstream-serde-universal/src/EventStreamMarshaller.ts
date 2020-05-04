import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { getChunkedStream } from "./getChunkedStream";
import { getUnmarshalledStream } from "./getUnmarshalledStream";
import { getDeserializedStream } from "./getDeserializedStream";

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
    body: AsyncIterable<Uint8Array>,
    deserializer: (input: { [event: string]: Message }) => T
  ): AsyncIterable<T> {
    const chunkedStream = getChunkedStream(body);
    const unmarshalledStream = getUnmarshalledStream(chunkedStream, {
      eventMarshaller: this.eventMarshaller
    });
    const deserializedStream = getDeserializedStream(unmarshalledStream, {
      deserializer
    });
    return deserializedStream;
  }

  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): AsyncIterable<Uint8Array> {
    const self = this;
    const serializedIterator = async function* () {
      for await (const chunk of input) {
        const payloadBuf = self.eventMarshaller.marshall(serializer(chunk));
        yield payloadBuf;
      }
      // Ending frame
      yield new Uint8Array(0);
    };
    return {
      [Symbol.asyncIterator]: serializedIterator
    };
  }
}
