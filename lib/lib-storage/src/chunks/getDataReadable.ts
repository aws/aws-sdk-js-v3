import { Readable } from "stream";
import { Buffer } from "buffer";

export async function* getDataReadable(data: Readable): AsyncGenerator<Buffer> {
  for await (const chunk of data) {
    yield Buffer.from(chunk);
  }
}
