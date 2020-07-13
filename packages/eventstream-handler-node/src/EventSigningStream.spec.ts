import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
import { Message, MessageHeaders } from "@aws-sdk/types";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";

import { EventSigningStream } from "./EventSigningStream";

describe("EventSigningStream", () => {
  const originalDate = Date;
  afterEach(() => {
    Date = originalDate;
  });
  it("should sign a eventstream payload properly", (done) => {
    const marshaller = new EventStreamMarshaller(toUtf8, fromUtf8);
    const inputChunks: Array<Uint8Array> = ([
      {
        headers: {},
        body: fromUtf8("foo"),
      },
      {
        headers: {},
        body: fromUtf8("bar"),
      },
    ] as Array<Message>).map((event) => marshaller.marshall(event));
    const expected: Array<MessageHeaders> = [
      {
        ":date": { type: "timestamp", value: new Date(1546045446000) },
        ":chunk-signature": {
          type: "binary",
          value: Uint8Array.from([115, 105, 103, 110, 97, 116, 117, 114, 101, 49]),
        },
      },
      {
        ":date": { type: "timestamp", value: new Date(1546045447000) },
        ":chunk-signature": {
          type: "binary",
          value: Uint8Array.from([115, 105, 103, 110, 97, 116, 117, 114, 101, 50]),
        },
      },
    ];
    const mockEventSigner = jest
      .fn()
      .mockReturnValueOnce("7369676e617475726531") //'signature1'
      .mockReturnValueOnce("7369676e617475726532"); //'signature2'
    // mock 'new Date()'
    let mockDateCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mockDate = jest
      .spyOn(global, "Date")
      //@ts-ignore: https://stackoverflow.com/questions/60912023/jest-typescript-mock-date-constructor/60918716#60918716
      .mockImplementation((input) => {
        if (input) return new originalDate(input);
        mockDateCount += 1;
        return expected[mockDateCount - 1][":date"].value;
      });
    const signingStream = new EventSigningStream({
      priorSignature: "initial",
      eventSigner: { sign: mockEventSigner },
      eventMarshaller: marshaller,
    });
    const output: Array<MessageHeaders> = [];
    signingStream.on("data", (chunk) => {
      output.push(marshaller.unmarshall(chunk).headers);
    });
    signingStream.on("end", () => {
      expect(output).toEqual(expected);
      expect(mockEventSigner.mock.calls[0][1].priorSignature).toBe("initial");
      expect(mockEventSigner.mock.calls[0][1].signingDate.getTime()).toBe(
        (expected[0][":date"].value as Date).getTime()
      );
      expect(mockEventSigner.mock.calls[1][1].priorSignature).toBe("7369676e617475726531");
      expect(mockEventSigner.mock.calls[1][1].signingDate.getTime()).toBe(
        (expected[1][":date"].value as Date).getTime()
      );
      done();
    });
    signingStream.on("error", (err) => {
      throw err;
    });
    for (const input of inputChunks) {
      signingStream.write(input);
    }
    signingStream.end();
  });
});
