import {
  EventStreamCodec,
  MessageDecoderStream,
  MessageEncoderStream,
  SmithyMessageDecoderStream,
  SmithyMessageEncoderStream,
} from "@aws-sdk/eventstream-codec";
import { Decoder, Encoder, EventStreamMarshaller as IEventStreamMarshaller, Message } from "@aws-sdk/types";

import { getChunkedStream } from "./getChunkedStream";
import { getMessageUnmarshaller } from "./getUnmarshalledStream";

/**
 * @internal
 */
export interface EventStreamMarshaller extends IEventStreamMarshaller {}

/**
 * @internal
 */
export interface EventStreamMarshallerOptions {
  utf8Encoder: Encoder;
  utf8Decoder: Decoder;
}

/**
 * @internal
 */
export class EventStreamMarshaller {
  private readonly eventStreamCodec: EventStreamCodec;
  private readonly utfEncoder: Encoder;

  constructor({ utf8Encoder, utf8Decoder }: EventStreamMarshallerOptions) {
    this.eventStreamCodec = new EventStreamCodec(utf8Encoder, utf8Decoder);
    this.utfEncoder = utf8Encoder;
  }

  deserialize<T>(
    body: AsyncIterable<Uint8Array>,
    deserializer: (input: Record<string, Message>) => Promise<T>
  ): AsyncIterable<T> {
    const inputStream = getChunkedStream(body);
    // @ts-expect-error Type 'SmithyMessageDecoderStream<Record<string, any>>' is not assignable to type 'AsyncIterable<T>'
    return new SmithyMessageDecoderStream({
      messageStream: new MessageDecoderStream({ inputStream, decoder: this.eventStreamCodec }),
      // @ts-expect-error Type 'T' is not assignable to type 'Record<string, any>'
      deserializer: getMessageUnmarshaller(deserializer, this.utfEncoder),
    });
  }

  serialize<T>(inputStream: AsyncIterable<T>, serializer: (event: T) => Message): AsyncIterable<Uint8Array> {
    return new MessageEncoderStream({
      messageStream: new SmithyMessageEncoderStream({ inputStream, serializer }),
      encoder: this.eventStreamCodec,
      includeEndFrame: true,
    });
  }
}
