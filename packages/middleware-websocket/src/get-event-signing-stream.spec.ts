/**
 * @jest-environment jsdom
 */
import { EventStreamCodec } from "@smithy/eventstream-codec";
import { Message, MessageHeaders, SignedMessage } from "@smithy/types";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
import { TransformStream } from "web-streams-polyfill";

import { getEventSigningTransformStream } from "./get-event-signing-stream";

describe(getEventSigningTransformStream.name, () => {
  const originalDate = Date;
  const originalTransformStreamCtor = window.TransformStream;

  beforeEach(() => {
    window.TransformStream = TransformStream;
  });
  afterEach(() => {
    Date = originalDate;
    window.TransformStream = originalTransformStreamCtor;
  });

  it("should sign a eventstream payload properly", async () => {
    const eventStreamCodec = new EventStreamCodec(toUtf8, fromUtf8);
    const inputChunks: Array<Uint8Array> = (
      [
        {
          headers: {},
          body: fromUtf8("foo"),
        },
        {
          headers: {},
          body: fromUtf8("bar"),
        },
      ] as Array<Message>
    ).map((event) => eventStreamCodec.encode(event));
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
    const message1: Message = {
      headers: {},
      body: fromUtf8("foo"),
    };
    const message2: Message = {
      headers: {},
      body: fromUtf8("bar"),
    };
    const mockMessageSigner = jest
      .fn()
      .mockReturnValueOnce({ message: message1, signature: "7369676e617475726531" } as SignedMessage) //'signature1'
      .mockReturnValueOnce({ message: message2, signature: "7369676e617475726532" } as SignedMessage); //'signature2'

    // mock 'new Date()'
    let mockDateCount = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mockDate = jest
      .spyOn(window, "Date")
      //@ts-ignore: https://stackoverflow.com/questions/60912023/jest-typescript-mock-date-constructor/60918716#60918716
      .mockImplementation((input) => {
        if (input) return new originalDate(input);
        mockDateCount += 1;
        return expected[mockDateCount - 1][":date"].value;
      });
    const signingStream = getEventSigningTransformStream(
      "initial",
      {
        sign: mockMessageSigner,
        signMessage: mockMessageSigner,
      },
      eventStreamCodec
    );
    const output: Array<MessageHeaders> = [];

    const reader = signingStream.readable.getReader();
    const push = () => {
      reader.read().then(({ done, value }) => {
        if (!done) {
          output.push(eventStreamCodec.decode(value!).headers);
          push();
        }
      });
    };
    push();

    const writer = signingStream.writable.getWriter();
    inputChunks.forEach((chunk) => {
      writer.ready.then(() => writer.write(chunk));
    });
    await writer.ready;
    await writer.close();
    await writer.closed;
    expect(output).toEqual(expected);
    expect(mockMessageSigner.mock.calls[0][0].priorSignature).toBe("initial");
    expect(mockMessageSigner.mock.calls[0][1].signingDate.getTime()).toBe(
      (expected[0][":date"].value as Date).getTime()
    );
    expect(mockMessageSigner.mock.calls[1][0].priorSignature).toBe("7369676e617475726531");
    expect(mockMessageSigner.mock.calls[1][1].signingDate.getTime()).toBe(
      (expected[1][":date"].value as Date).getTime()
    );
  });
});
