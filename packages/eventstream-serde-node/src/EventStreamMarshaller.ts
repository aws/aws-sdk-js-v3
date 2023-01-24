import { EventStreamMarshaller as UniversalEventStreamMarshaller } from "@aws-sdk/eventstream-serde-universal";
import { Decoder, Encoder, EventStreamMarshaller as IEventStreamMarshaller, Message } from "@aws-sdk/types";
import { Readable } from "stream";

import { readabletoIterable } from "./utils";

export interface EventStreamMarshaller extends IEventStreamMarshaller {}

export interface EventStreamMarshallerOptions {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

export class EventStreamMarshaller {
  private readonly universalMarshaller: UniversalEventStreamMarshaller;
  constructor({ utf8Encoder, utf8Decoder }: EventStreamMarshallerOptions) {
    this.universalMarshaller = new UniversalEventStreamMarshaller({
      utf8Decoder,
      utf8Encoder,
    });
  }

  deserialize<T>(body: Readable, deserializer: (input: Record<string, Message>) => Promise<T>): AsyncIterable<T> {
    //should use stream[Symbol.asyncIterable] when the api is stable
    //reference: https://nodejs.org/docs/latest-v11.x/api/stream.html#stream_readable_symbol_asynciterator
    const bodyIterable: AsyncIterable<Uint8Array> =
      typeof body[Symbol.asyncIterator] === "function" ? body : readabletoIterable(body);
    return this.universalMarshaller.deserialize(bodyIterable, deserializer);
  }

  serialize<T>(input: AsyncIterable<T>, serializer: (event: T) => Message): Readable {
    return Readable.from(this.universalMarshaller.serialize(input, serializer));
  }
}
