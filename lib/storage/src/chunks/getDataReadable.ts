import Stream from "stream";
import { Buffer } from "buffer";

export async function* getNextData(data: Stream.Readable): AsyncGenerator<Buffer> {
  for await (const chunk of data) {
    yield Buffer.from(chunk);
  }
}
