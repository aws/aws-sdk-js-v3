import { Message } from "@aws-sdk/types";

export function getDeserializingStream(
  messageStream: ReadableStream<{ [name: string]: Message }>,
  deserializer: (input: any) => any
): ReadableStream<{ [name: string]: any }> {
  const messageReader = messageStream.getReader();
  const deserializedStream = new ReadableStream<{ [name: string]: any }>({
    start(controller) {
      function push() {
        messageReader.read().then(async ({ done, value }) => {
          if (done) {
            controller.close();
            return;
          }

          try {
            controller.enqueue(await deserializer(value));
            push();
          } catch (e) {
            controller.error(e);
          }
        });
      }

      push();
    }
  });
  return deserializedStream;
}
