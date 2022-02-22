import { HashConstructor, StreamHasher } from "@aws-sdk/types";
import { Readable } from "stream";

import { fsCreateReadStream } from "./fsCreateReadStream";
import { HashCalculator } from "./HashCalculator";
import { isFileStream } from "./isFileStream";

export const readableStreamHasher: StreamHasher<Readable> = (hashCtor: HashConstructor, readableStream: Readable) => {
  // Throw if readableStream is already flowing and it's not a file stream.
  if (!isFileStream(readableStream) && readableStream.readableFlowing !== null) {
    throw new Error("Unable to calculate hash for flowing readable stream");
  }

  const streamToPipe = isFileStream(readableStream) ? fsCreateReadStream(readableStream) : readableStream;

  const hash = new hashCtor();
  const hashCalculator = new HashCalculator(hash);
  streamToPipe.pipe(hashCalculator);

  return new Promise((resolve, reject) => {
    streamToPipe.on("error", (err: Error) => {
      // if the source errors, the destination stream needs to manually end
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", () => {
      hash.digest().then(resolve).catch(reject);
    });
  });
};
