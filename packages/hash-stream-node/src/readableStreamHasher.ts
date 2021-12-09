import { HashConstructor, StreamHasher } from "@aws-sdk/types";
import { Readable } from "stream";

import { HashCalculator } from "./HashCalculator";

export const readableStreamHasher: StreamHasher<Readable> = (hashCtor: HashConstructor, readableStream: Readable) =>
  new Promise((resolve, reject) => {
    const hash = new hashCtor();
    const hashCalculator = new HashCalculator(hash);

    readableStream.pipe(hashCalculator);
    readableStream.on("error", (err: any) => {
      // if the source errors, the destination stream needs to manually end
      hashCalculator.end();
      reject(err);
    });
    hashCalculator.on("error", reject);
    hashCalculator.on("finish", function (this: HashCalculator) {
      hash.digest().then(resolve).catch(reject);
    });
  });
