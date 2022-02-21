import { createReadStream } from "fs";
import { Readable } from "stream";

import { isFileStream } from "./isFileStream";

describe(isFileStream.name, () => {
  describe("returns true if readablestream is fs.ReadStream", () => {
    it("with string path", () => {
      const readStream = createReadStream(__filename);
      expect(isFileStream(readStream)).toStrictEqual(true);
    });

    it("with buffer path", () => {
      const readStream = createReadStream(Buffer.from(__filename, "utf-8"));
      expect(isFileStream(readStream)).toStrictEqual(true);
    });

    it("with filehandle", async () => {
      const { promises } = await import("fs");
      const fd = await promises.open(__filename, "r");
      // @ts-expect-error createReadStream is added in v16.11.0
      if (fd.createReadStream) {
        // @ts-expect-error createReadStream is added in v16.11.0
        const readStream = fd.createReadStream();
        expect(isFileStream(readStream)).toStrictEqual(true);
      }
    });
  });

  it("returns false if readablestream is not an fs.ReadStream", () => {
    const readableStream = new Readable({ read: (size) => {} });
    expect(isFileStream(readableStream)).toStrictEqual(false);
  });
});
