import { HashConstructor, StreamHasher } from "@aws-sdk/types";
import { createReadStream } from "fs";
import { Readable } from "stream";

import { HashCalculator } from "./HashCalculator";
import { isFileStream } from "./isFileStream";

export const readableStreamHasher: StreamHasher<Readable> = (hashCtor: HashConstructor, readableStream: Readable) => {
  const streamToPipe = isFileStream(readableStream)
    ? createReadStream(readableStream.path, {
        start: (readableStream as any).start,
        end: (readableStream as any).end,
      })
    : readableStream;

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
