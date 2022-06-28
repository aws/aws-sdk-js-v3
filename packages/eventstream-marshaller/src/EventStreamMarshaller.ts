import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { Message, MessageHeaders } from "@aws-sdk/types";
import { Decoder, Encoder } from "@aws-sdk/types";

/**
 * A marshaller that can convert binary-packed event stream messages into
 * JavaScript objects and back again into their binary format.
 *
 * @deprecated Use EventStreamCodec from @aws-sdk/eventstream-codec instead.
 */
export class EventStreamMarshaller {
  private readonly codec: EventStreamCodec;

  constructor(toUtf8: Encoder, fromUtf8: Decoder) {
    this.codec = new EventStreamCodec(toUtf8, fromUtf8);
  }

  marshall(message: Message): Uint8Array {
    return this.codec.encode(message);
  }

  unmarshall(message: ArrayBufferView): Message {
    return this.codec.decode(message);
  }

  formatHeaders(rawHeaders: MessageHeaders): Uint8Array {
    return this.codec.formatHeaders(rawHeaders);
  }
}
