import { toUint8Array } from "@smithy/util-utf8";

import { compressStream } from "./compressStream.browser";

export const compressString = async (body: any): Promise<Uint8Array> => {
  // Only gzip shall be supported initial release.

  const inputUint8Array = toUint8Array(body);
  const inputStream = new ReadableStream({
    start(controller) {
      controller.enqueue(inputUint8Array);
      controller.close();
    },
  });

  const outputStream = await compressStream(inputStream);

  const reader = outputStream.getReader();
  const chunks = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    chunks.push(...value);
  }

  return new Uint8Array(chunks);
};
