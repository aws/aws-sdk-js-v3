import { EventStreamCodec } from "@aws-sdk/eventstream-codec";
import { Message } from "@aws-sdk/types";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

import { endEventMessage, exception, recordEventMessage, statsEventMessage } from "./fixtures/event.fixture";
import { getUnmarshalledStream } from "./getUnmarshalledStream";

describe("getUnmarshalledStream", () => {
  it("emits parsed payload on data", async () => {
    const expectedMessages: Array<Message> = [
      {
        headers: {
          ":content-type": {
            type: "string",
            value: "application/octet-stream",
          },
          ":event-type": { type: "string", value: "Records" },
          ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(
          Buffer.from(
            `1,Foo,When life gives you foo...\n2,Bar,make Bar!\n3,Fizz,Sometimes paired with...\n4,Buzz,the infamous Buzz!\n`
          )
        ),
      },
      {
        headers: {
          ":content-type": {
            type: "string",
            value: "text/xml",
          },
          ":event-type": { type: "string", value: "Stats" },
          ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(
          Buffer.from(
            '<Stats xmlns=""><BytesScanned>126</BytesScanned><BytesProcessed>126</BytesProcessed><BytesReturned>107</BytesReturned></Stats>'
          )
        ),
      },
      {
        headers: {
          ":event-type": { type: "string", value: "End" },
          ":message-type": { type: "string", value: "event" },
        },
        body: new Uint8Array(),
      },
    ];

    const source = async function* () {
      yield recordEventMessage;
      yield statsEventMessage;
      yield endEventMessage;
    };
    const unmarshallerStream = getUnmarshalledStream(source(), {
      eventStreamCodec: new EventStreamCodec(toUtf8, fromUtf8),
      deserializer: (message) => Promise.resolve(message),
      toUtf8,
    });
    const messages: Array<Message> = [];
    for await (const message of unmarshallerStream) {
      messages.push(message[Object.keys(message)[0]]);
    }
    for (let i = 1; i < messages.length; i++) {
      expect(messages[i]).toEqual(expectedMessages[i]);
    }
  });

  it("throws when deserializer throws an error", async () => {
    const source = {
      [Symbol.asyncIterator]: async function* () {
        yield exception;
      },
    };
    const deserStream = getUnmarshalledStream(source, {
      eventStreamCodec: new EventStreamCodec(toUtf8, fromUtf8),
      deserializer: () => {
        throw new Error("error event");
      },
      toUtf8,
    });
    let error: Error | undefined = undefined;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const event of deserStream) {
        //pass.
      }
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error!.message).toEqual("error event");
  });

  it("throws on exception event if deserializer doesn't throw", async () => {
    //This could happened if client-side SDK is not up-to-date
    const source = {
      [Symbol.asyncIterator]: async function* () {
        yield exception;
      },
    };
    const deserStream = getUnmarshalledStream(source, {
      eventStreamCodec: new EventStreamCodec(toUtf8, fromUtf8),
      deserializer: (message) =>
        Promise.resolve({
          $unknown: message,
        }),
      toUtf8,
    });
    let error: Error | undefined = undefined;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for await (const event of deserStream) {
        //pass.
      }
    } catch (e) {
      error = e;
    }
    expect(error).toBeDefined();
    expect(error?.name).toEqual("Exception");
    expect(error?.message).toEqual("This is a modeled exception event that would be thrown in deserializer.");
  });

  it("omit the unknown event type", async () => {
    const source = async function* () {
      yield recordEventMessage;
    };
    const unmarshallerStream = getUnmarshalledStream(source(), {
      eventStreamCodec: new EventStreamCodec(toUtf8, fromUtf8),
      deserializer: (message) =>
        Promise.resolve({
          $unknown: message,
        } as any), //deserializer that parse anything into unknown event
      toUtf8,
    });
    const messages: Array<Message> = [];
    for await (const message of unmarshallerStream) {
      messages.push(message[Object.keys(message)[0]]);
    }
    expect(messages.length).toEqual(0);
  });
});
