import { Message, MessageDecoder } from "@aws-sdk/types";

/**
 * @internal
 */
export interface MessageDecoderStreamOptions {
  inputStream: AsyncIterable<Uint8Array>;
  decoder: MessageDecoder;
}

/**
 * @internal
 */
export class MessageDecoderStream implements AsyncIterable<Message> {
  constructor(private readonly options: MessageDecoderStreamOptions) {}

  [Symbol.asyncIterator](): AsyncIterator<Message> {
    return this.asyncIterator();
  }

  private async *asyncIterator() {
    for await (const bytes of this.options.inputStream) {
      const decoded = this.options.decoder.decode(bytes);
      yield decoded;
    }
  }
}
