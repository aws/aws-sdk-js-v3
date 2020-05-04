import { getDeserializedStream } from "./getDeserializedStream";

describe("getDeserializedStream", () => {
  it("throws when deserializer throws an error", async () => {
    const source = {
      [Symbol.asyncIterator]: async function* () {
        yield {} as any;
      }
    };
    const deserStream = getDeserializedStream(source, {
      deserializer: message => {
        throw new Error("error event");
      }
    });
    let error: Error | undefined = undefined;
    try {
      for await (const event of deserStream) {
        //pass.
      }
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error!.message).toEqual("error event");
  });
});
