import { EventStreamCodec } from "@smithy/eventstream-codec";
import { Message, MessageHeaders, SignedMessage } from "@smithy/types";
import { fromUtf8, toUtf8 } from "@smithy/util-utf8";
import { afterEach, describe, expect, test as it, vi } from "vitest";

import { EventSigningStream } from "./EventSigningStream";

describe("EventSigningStream", () => {
  const originalDate = Date;

  afterEach(() => {
    Date = originalDate;
  });

  it("should sign an eventstream payload properly", async () => {
    const eventStreamCodec = new EventStreamCodec(toUtf8, fromUtf8);
    const message1: Message = {
      headers: {},
      body: fromUtf8("foo"),
    };
    const message2: Message = {
      headers: {},
      body: fromUtf8("bar"),
    };
    const inputChunks: Array<Uint8Array> = ([message1, message2] as Array<Message>).map((event) =>
      eventStreamCodec.encode(event)
    );
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
    const mockMessageSigner = vi
      .fn()
      .mockReturnValueOnce({ message: message1, signature: "7369676e617475726531" } as SignedMessage) //'signature1'
      .mockReturnValueOnce({ message: message2, signature: "7369676e617475726532" } as SignedMessage); //'signature2'

    let mockDateCount = 0;
    function MockDate(input?: any): Date {
      return input ? new originalDate(input) : (expected[mockDateCount++][":date"].value as Date);
    }
    MockDate.now = () => MockDate().getTime();
    global.Date = MockDate as any;

    const signingStream = new EventSigningStream({
      priorSignature: "initial",
      messageSigner: {
        sign: mockMessageSigner,
        signMessage: mockMessageSigner,
      },
      eventStreamCodec,
      systemClockOffsetProvider: async () => 0,
    });
    const output: Array<MessageHeaders> = [];
    signingStream.on("data", (chunk) => {
      output.push(eventStreamCodec.decode(chunk).headers);
    });

    let resolve: (value?: unknown) => void;
    const done = new Promise((r) => (resolve = r));

    signingStream.on("end", () => {
      expect(output).toEqual(expected);
      expect(mockMessageSigner.mock.calls[0][0].priorSignature).toBe("initial");
      expect(mockMessageSigner.mock.calls[0][1].signingDate.getTime()).toBe(
        (expected[0][":date"].value as Date).getTime()
      );
      expect(mockMessageSigner.mock.calls[1][0].priorSignature).toBe("7369676e617475726531");
      expect(mockMessageSigner.mock.calls[1][1].signingDate.getTime()).toBe(
        (expected[1][":date"].value as Date).getTime()
      );
      resolve();
    });
    signingStream.on("error", (err) => {
      throw err;
    });
    for (const input of inputChunks) {
      signingStream.write(input);
    }
    signingStream.end();

    await done;
  });
});
