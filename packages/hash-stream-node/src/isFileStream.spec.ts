import { createReadStream } from "fs";
import { Readable } from "stream";

import { isFileStream } from "./isFileStream";

describe(isFileStream.name, () => {
  it("returns true if readablestream is fs.ReadStream", () => {
    const readStream = createReadStream(__filename);
    expect(isFileStream(readStream)).toStrictEqual(true);
  });

  it("returns false if readablestream is not an fs.ReadStream", () => {
    const readableStream = new Readable({ read: (size) => {} });
    expect(isFileStream(readableStream)).toStrictEqual(false);
  });
});
