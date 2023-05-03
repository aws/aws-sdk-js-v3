import { Message } from "@aws-sdk/types";

/**
 * @internal
 */
export interface SmithyMessageEncoderStreamOptions<T> {
  inputStream: AsyncIterable<T>;
  serializer: (event: T) => Message;
}

/**
 * @internal
 */
export class SmithyMessageEncoderStream<T> implements AsyncIterable<Message> {
  constructor(private readonly options: SmithyMessageEncoderStreamOptions<T>) {}

  [Symbol.asyncIterator](): AsyncIterator<Message> {
    return this.asyncIterator();
  }

  private async *asyncIterator() {
    for await (const chunk of this.options.inputStream) {
      const payloadBuf = this.options.serializer(chunk);
      yield payloadBuf;
    }
  }
}
