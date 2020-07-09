import { EventStreamMarshaller } from "./EventStreamMarshaller";
import { vectors } from "./TestVectors.fixture";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";

describe("eventstream parsing", () => {
  const marshaller = new EventStreamMarshaller(toUtf8, fromUtf8);

  for (const vectorName of Object.keys(vectors)) {
    const vector = vectors[vectorName];
    it(`should handle the ${vectorName} test case`, () => {
      if (vector.expectation === "failure") {
        expect(() => marshaller.unmarshall(vector.encoded)).toThrow();
      } else {
        expect(marshaller.marshall(vector.decoded)).toEqual(vector.encoded);
        expect(marshaller.unmarshall(vector.encoded)).toEqual(vector.decoded);
      }
    });
  }
});
