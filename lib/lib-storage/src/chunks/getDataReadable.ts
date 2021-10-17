import { Buffer } from "buffer";
import { Readable } from "stream";

export async function* getDataReadable(data: Readable): AsyncGenerator<Buffer> {
  for await (const chunk of data) {
    yield Buffer.from(chunk);
  }
}
