import { EventDeserializerStream } from "./EventDeserializerStream";

describe("EventDeserializerStream", () => {
  it("throws when deserializer throws an error", done => {
    const deserStream = new EventDeserializerStream({
      deserializer: message => {
        throw new Error("error event");
      }
    });
    deserStream.on("error", error => {
      expect(error).toBeDefined();
      expect(error.message).toEqual("error event");
      done();
    });
    deserStream.write({});
  });
});
