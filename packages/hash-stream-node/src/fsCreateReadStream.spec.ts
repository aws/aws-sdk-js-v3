import * as fs from "fs";

import { fsCreateReadStream } from "./fsCreateReadStream";

jest.setTimeout(30000);

describe(fsCreateReadStream.name, () => {
  const mockFileContents = fs.readFileSync(__filename, "utf8");

  it.skip("uses file descriptor if defined", (done) => {
    fs.promises.open(__filename, "r").then((fd) => {
      if ((fd as any).createReadStream) {
        const readStream = (fd as any).createReadStream();
        const readStreamCopy = fsCreateReadStream(readStream);

        const chunks: Array<Buffer> = [];
        readStreamCopy.on("data", (chunk) => {
          chunks.push(chunk);
        });
        readStreamCopy.on("end", () => {
          const outputFileContents = Buffer.concat(chunks).toString();
          expect(outputFileContents).toEqual(mockFileContents);
          done();
        });
      } else {
        console.log(`Skipping createReadStream test as it's not available.`);
        done();
      }
    });
  });

  it("uses start and end if file descriptor is not defined", (done) => {
    const readStream = fs.createReadStream(__filename);
    const readStreamCopy = fsCreateReadStream(readStream);

    const chunks: Array<Buffer> = [];
    readStreamCopy.on("data", (chunk) => {
      chunks.push(chunk);
    });
    readStreamCopy.on("end", () => {
      const outputFileContents = Buffer.concat(chunks).toString();
      expect(outputFileContents).toEqual(mockFileContents);
      done();
    });
  });
});
