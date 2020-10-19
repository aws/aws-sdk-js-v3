import { Buffer } from "buffer";
import { DataPart, yieldChunk } from "../../src/data-chunk/yield-chunk";
import { Readable } from "stream";
import { ReadableStream } from "web-streams-polyfill";

describe(yieldChunk.name, () => {
  const INPUT_STRING = "Farmer jack realized that big yellow quilts were expensive";
  const fs = require("fs");
  const fileStream = fs.createReadStream(__dirname + "/sample.file");

  const standardChunkTest = async (input: any) => {
    const chunker = yieldChunk(input, 30);
    let chunks: IteratorResult<DataPart>[] = [];
    chunks.push(await chunker.next());
    chunks.push(await chunker.next());
    chunks.push(await chunker.next());

    // test full, first chunk
    expect(chunks[0].done).toEqual(false);
    expect(chunks[0].value.Body.toString()).toEqual("Farmer jack realized that big ");
    expect(chunks[0].value.Body.length).toEqual(30);
    expect(chunks[0].value.PartNumber).toEqual(1);

    // test small, final chunk
    expect(chunks[1].done).toEqual(false);
    expect(chunks[1].value.Body.toString()).toEqual("yellow quilts were expensive");
    expect(chunks[1].value.Body.length).toEqual(28);
    expect(chunks[1].value.PartNumber).toEqual(2);

    // test chunk ends
    expect(chunks[2].done).toEqual(true);
    expect(chunks[2].value).toEqual(undefined);
  };

  it(`Readable: ${yieldChunk.name}`, async (done) => {
    standardChunkTest(Readable.from(INPUT_STRING));
    done();
  });

  it(`File Stream: ${yieldChunk.name}`, async (done) => {
    standardChunkTest(fileStream);
    done();
  });

  it(`ReadableStream: ${yieldChunk.name}`, async (done) => {
    const customStringStream = new ReadableStream({
      start(controller) {
        let string = INPUT_STRING;
        controller.enqueue(string);
      },
      pull(controller) {
        controller.close();
      },
      cancel() {},
    });

    standardChunkTest(customStringStream);
    done();
  });

  it(`Buffer: ${yieldChunk.name}`, async (done) => {
    standardChunkTest(Buffer.from(INPUT_STRING));
    done();
  });

  it(`String: ${yieldChunk.name}`, async (done) => {
    standardChunkTest(INPUT_STRING);
    done();
  });
});
