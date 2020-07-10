import { Readable } from "stream";
export function streamReader(
  stream: Readable,
  onChunk: (chunk: Uint8Array) => void,
  chunkSize = 1048576 // 1 MiB
): Promise<void> {
  return new Promise((resolve, reject) => {
    let temporaryBuffer: Uint8Array | undefined;

    stream.on("error", reject);
    stream.on("end", () => {
      if (temporaryBuffer?.byteLength) {
        for (let i = 0; i < temporaryBuffer.byteLength; i += chunkSize) {
          onChunk(temporaryBuffer.subarray(i, Math.min(i + chunkSize, temporaryBuffer.byteLength)));
        }
        // clear the temporaryBuffer
        temporaryBuffer = void 0;
      }
      resolve();
    });
    stream.on("data", (chunk: Buffer) => {
      if (!temporaryBuffer) {
        temporaryBuffer = chunk;
      } else {
        temporaryBuffer = mergeUint8Arrays(temporaryBuffer, chunk);
      }

      let pointer = 0;
      while (temporaryBuffer.byteLength - pointer >= chunkSize) {
        onChunk(temporaryBuffer.subarray(pointer, pointer + chunkSize));
        pointer += chunkSize;
      }
      temporaryBuffer = temporaryBuffer.subarray(pointer);
    });

    // ensure the stream isn't paused
    stream.resume();
  });
}

function mergeUint8Arrays(a: Uint8Array, b: Uint8Array): Uint8Array {
  const result = new Uint8Array(a.byteLength + b.byteLength);
  result.set(a);
  result.set(b, a.byteLength);
  return result;
}
