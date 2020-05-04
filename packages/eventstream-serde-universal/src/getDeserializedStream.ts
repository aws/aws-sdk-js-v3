import { Message } from "@aws-sdk/types";
export type DeserializedStreamOptions = {
  deserializer: (input: any) => any;
};

export function getDeserializedStream(
  source: AsyncIterable<{ [name: string]: Message }>,
  options: DeserializedStreamOptions
): AsyncIterable<any> {
  return {
    [Symbol.asyncIterator]: async function* () {
      for await (const message of source) {
        yield await options.deserializer(message);
      }
    }
  };
}
