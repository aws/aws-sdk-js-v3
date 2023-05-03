import { Message } from "@aws-sdk/types";

/**
 * @internal
 */
export interface SmithyMessageDecoderStreamOptions<T> {
  readonly messageStream: AsyncIterable<Message>;
  readonly deserializer: (input: Message) => Promise<T | undefined>;
}

/**
 * @internal
 */
export class SmithyMessageDecoderStream<T> implements AsyncIterable<T> {
  constructor(private readonly options: SmithyMessageDecoderStreamOptions<T>) {}

  [Symbol.asyncIterator](): AsyncIterator<T> {
    return this.asyncIterator();
  }

  private async *asyncIterator() {
    for await (const message of this.options.messageStream) {
      const deserialized = await this.options.deserializer(message);
      if (deserialized === undefined) continue;
      yield deserialized;
    }
  }
}
