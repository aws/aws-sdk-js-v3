import { Message, MessageEncoder } from "@aws-sdk/types";

/**
 * @internal
 */
export interface MessageEncoderStreamOptions {
  messageStream: AsyncIterable<Message>;
  encoder: MessageEncoder;
  includeEndFrame?: Boolean;
}

/**
 * @internal
 */
export class MessageEncoderStream implements AsyncIterable<Uint8Array> {
  constructor(private readonly options: MessageEncoderStreamOptions) {}

  [Symbol.asyncIterator](): AsyncIterator<Uint8Array> {
    return this.asyncIterator();
  }

  private async *asyncIterator() {
    for await (const msg of this.options.messageStream) {
      const encoded = this.options.encoder.encode(msg);
      yield encoded;
    }
    if (this.options.includeEndFrame) {
      yield new Uint8Array(0);
    }
  }
}
