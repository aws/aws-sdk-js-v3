import { EventStreamMarshaller as EventMarshaller } from "@aws-sdk/eventstream-marshaller";
import {
  Encoder,
  Decoder,
  Message,
  EventStreamMarshaller as IEventStreamMarshaller
} from "@aws-sdk/types";
import { ReadableStreamtoIterable } from "./utils";
import { getChunkedStream } from "./getChunkedStream";
import { getEventMessageStream } from "./getEventMessageStream";
import { getDeserializingStream } from "./getDeserializingStream";

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
    body: ReadableStream,
    deserializer: (input: { [event: string]: Message }) => T
  ): AsyncIterable<T> {
    const chunkedStream = getChunkedStream(body);
    const messageStream = getEventMessageStream(
      chunkedStream,
      this.eventMarshaller
    );
    const deserialingStream = getDeserializingStream(
      messageStream,
      deserializer
    );
    return ReadableStreamtoIterable(deserialingStream);
  }

  /**
   * Generate a ReadableStream that serialize events
   * to event stream binary chunks; Use a pull stream
   * here to support low connection speed.
   *
   * This doesn't work on browser currently because
   * browser doesn't support upload streaming.
   * reference:
   * * https://bugs.chromium.org/p/chromium/issues/detail?id=688906
   * * https://bugzilla.mozilla.org/show_bug.cgi?id=1387483
   *
   */
  serialize<T>(
    input: AsyncIterable<T>,
    serializer: (event: T) => Message
  ): ReadableStream {
    throw new Error(`event stream request in browser is not supported
Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=688906`);
  }
}
