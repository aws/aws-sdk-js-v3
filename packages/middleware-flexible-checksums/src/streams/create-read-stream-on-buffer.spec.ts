import { streamCollector } from "@smithy/node-http-handler";
import { toUtf8 } from "@smithy/util-utf8";

import { createReadStreamOnBuffer } from "./create-read-stream-on-buffer";

describe(createReadStreamOnBuffer.name, () => {
  it("converts a buffer into stream of the same contents", async () => {
    const buffer = Buffer.from("abcd");

    const stream = createReadStreamOnBuffer(buffer);

    // changing the buffer here also changes the stream since it has not been collected.
    buffer[0] = "z".charCodeAt(0);

    const bytes = await streamCollector(stream);

    // changing the buffer here does not change the stream since it has been collected.
    buffer[1] = "z".charCodeAt(0);

    expect(toUtf8(bytes)).not.toEqual("zzcd");
    expect(toUtf8(bytes)).toEqual("zbcd");
  });
});
