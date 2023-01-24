import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

import { EventStreamCodec } from "./EventStreamCodec";
import { vectors } from "./TestVectors.fixture";

describe("eventstream parsing", () => {
  const eventStreamCodec = new EventStreamCodec(toUtf8, fromUtf8);

  for (const vectorName of Object.keys(vectors)) {
    const vector = vectors[vectorName];
    it(`should handle the ${vectorName} test case`, () => {
      if (vector.expectation === "failure") {
        expect(() => eventStreamCodec.decode(vector.encoded)).toThrow();
      } else {
        expect(eventStreamCodec.encode(vector.decoded)).toEqual(vector.encoded);
        expect(eventStreamCodec.decode(vector.encoded)).toEqual(vector.decoded);
      }
    });
  }
});
