import { Crc32 } from "@aws-crypto/crc32";
import {
  AvailableMessage,
  AvailableMessages,
  Message,
  MessageDecoder,
  MessageEncoder,
  MessageHeaders,
} from "@aws-sdk/types";
import { Decoder, Encoder } from "@aws-sdk/types";

import { HeaderMarshaller } from "./HeaderMarshaller";
import { splitMessage } from "./splitMessage";

/**
 * A Codec that can convert binary-packed event stream messages into
 * JavaScript objects and back again into their binary format.
 */
export class EventStreamCodec implements MessageEncoder, MessageDecoder {
  private readonly headerMarshaller: HeaderMarshaller;
  private messageBuffer: Message[];

  private isEndOfStream: boolean;

  constructor(toUtf8: Encoder, fromUtf8: Decoder) {
    this.headerMarshaller = new HeaderMarshaller(toUtf8, fromUtf8);
    this.messageBuffer = [];
    this.isEndOfStream = false;
  }

  feed(message: ArrayBufferView): void {
    this.messageBuffer.push(this.decode(message));
  }

  endOfStream(): void {
    this.isEndOfStream = true;
  }

  getMessage(): AvailableMessage {
    const message = this.messageBuffer.pop();
    const isEndOfStream = this.isEndOfStream;

    return {
      getMessage(): Message | undefined {
        return message;
      },
      isEndOfStream(): boolean {
        return isEndOfStream;
      },
    };
  }

  getAvailableMessages(): AvailableMessages {
    const messages = this.messageBuffer;
    this.messageBuffer = [];
    const isEndOfStream = this.isEndOfStream;

    return {
      getMessages(): Message[] {
        return messages;
      },
      isEndOfStream(): boolean {
        return isEndOfStream;
      },
    };
  }

  /**
   * Convert a structured JavaScript object with tagged headers into a binary
   * event stream message.
   */
  encode({ headers: rawHeaders, body }: Message): Uint8Array {
    const headers = this.headerMarshaller.format(rawHeaders);
    const length = headers.byteLength + body.byteLength + 16;

    const out = new Uint8Array(length);
    const view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    const checksum = new Crc32();

    // Format message
    view.setUint32(0, length, false);
    view.setUint32(4, headers.byteLength, false);
    view.setUint32(8, checksum.update(out.subarray(0, 8)).digest(), false);
    out.set(headers, 12);
    out.set(body, headers.byteLength + 12);

    // Write trailing message checksum
    view.setUint32(length - 4, checksum.update(out.subarray(8, length - 4)).digest(), false);

    return out;
  }

  /**
   * Convert a binary event stream message into a JavaScript object with an
   * opaque, binary body and tagged, parsed headers.
   */
  decode(message: ArrayBufferView): Message {
    const { headers, body } = splitMessage(message);

    return { headers: this.headerMarshaller.parse(headers), body };
  }

  /**
   * Convert a structured JavaScript object with tagged headers into a binary
   * event stream message header.
   */
  formatHeaders(rawHeaders: MessageHeaders): Uint8Array {
    return this.headerMarshaller.format(rawHeaders);
  }
}
