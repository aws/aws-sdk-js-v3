import { HashConstructor, StreamHasher } from "@aws-sdk/types";
import { Readable } from "stream";

import { HashCalculator } from "./HashCalculator";

export const readableStreamHasher: StreamHasher<Readable> = (hashCtor: HashConstructor, readableStream: Readable) => {
  // Throw if readableStream is already flowing.
  if (readableStream.readableFlowing !== null) {
    throw new Error("Unable to calculate hash for flowing readable stream");
  }

  const hash = new hashCtor();
  const hashCalculator = new HashCalculator(hash);
  readableStream.pipe(hashCalculator);

  return new Promise((resolve, reject) => {
    readableStream.on("error", (err: Error) => {
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
