import { ReadableStream } from "web-streams-polyfill";
import { chunkFromReadableStream } from "../../src/data-chunk/readable-stream-helper";
import { DataPart } from "../../src/data-chunk/yield-chunk";

describe(chunkFromReadableStream.name, () => {
  const INPUT_STRING = "Farmer jack realized that big yellow quilts were expensive";

  describe("Proper chunk creation", () => {
    let chunks: IteratorResult<DataPart>[] = [];
    const CHUNK_SIZE = 30;

    const setup = async () => {
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

      let chunk: IteratorResult<DataPart>[] = [];
      let interation = chunkFromReadableStream(customStringStream, CHUNK_SIZE);
      chunk.push(await interation.next());
      chunk.push(await interation.next());
      chunk.push(await interation.next());
      return chunk;
    };

    beforeAll(async (done) => {
      chunks = await setup();
      done();
    });

    it("should properly give the first chunk", async (done) => {
      expect(chunks[0].done).toEqual(false);
      expect(chunks[0].value.Body.toString()).toEqual("Farmer jack realized that big ");
      expect(chunks[0].value.Body.length).toEqual(30);
      expect(chunks[0].value.PartNumber).toEqual(1);
      done();
    });

    it("should properly give the second (smaller) chunk", async (done) => {
      expect(chunks[1].done).toEqual(false);
      expect(chunks[1].value.Body.toString()).toEqual("yellow quilts were expensive");
      expect(chunks[1].value.Body.length).toEqual(28);
      expect(chunks[1].value.PartNumber).toEqual(2);
      done();
    });

    it("should properly end the interation", async (done) => {
      expect(chunks[2].done).toEqual(true);
      expect(chunks[2].value).toEqual(undefined);
      done();
    });
  });
});
