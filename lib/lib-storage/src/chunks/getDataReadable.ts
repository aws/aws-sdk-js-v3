import { Buffer } from "buffer";
import { Readable } from "stream";

export async function* getDataReadable(data: Readable): AsyncGenerator<Buffer | Uint8Array> {
  for await (const chunk of data) {
    // check if is Buffer/Unit8Array
    if (Buffer.isBuffer(chunk) || chunk instanceof Uint8Array) {
      yield chunk;
    } else {
      yield Buffer.from(chunk);
    }
  }
}
