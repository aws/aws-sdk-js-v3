import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8-node";
import { EventStreamMarshaller } from "@aws-sdk/eventstream-marshaller";
import { MessageUnmarshallerStream } from "./MessageUnmarshallerStream";
import {
  recordEventMessage,
  statsEventMessage,
  endEventMessage
} from "./fixtures/event.fixture";
import { Message } from "@aws-sdk/types";

describe("MessageUnmarshallerStream", () => {
  it("emits parsed message on data", done => {
    const expectedMessages: Array<Message> = [
      {
        headers: {
          ":content-type": {
            type: "string",
            value: "application/octet-stream"
          },
          ":event-type": { type: "string", value: "Records" },
          ":message-type": { type: "string", value: "event" }
        },
        body: new Uint8Array(
          Buffer.from(
            `1,Foo,When life gives you foo...\n2,Bar,make Bar!\n3,Fizz,Sometimes paired with...\n4,Buzz,the infamous Buzz!\n`
          )
        )
      },
      {
        headers: {
          ":content-type": {
            type: "string",
            value: "text/xml"
          },
          ":event-type": { type: "string", value: "Stats" },
          ":message-type": { type: "string", value: "event" }
        },
        body: new Uint8Array(
          Buffer.from(
            '<Stats xmlns=""><BytesScanned>126</BytesScanned><BytesProcessed>126</BytesProcessed><BytesReturned>107</BytesReturned></Stats>'
          )
        )
      },
      {
        headers: {
          ":event-type": { type: "string", value: "End" },
          ":message-type": { type: "string", value: "event" }
        },
        body: new Uint8Array()
      }
    ];

    const unmarshallerStream = new MessageUnmarshallerStream({
      eventMarshaller: new EventStreamMarshaller(toUtf8, fromUtf8)
    });

    const messages: Array<Message> = [];
    unmarshallerStream.on("data", msg => {
      messages.push(msg[Object.keys(msg)[0]]);
    });
    unmarshallerStream.on("end", () => {
      for (let i = 1; i < messages.length; i++) {
        expect(messages[i]).toEqual(expectedMessages[i]);
      }
      done();
    });

    unmarshallerStream.write(recordEventMessage);
    unmarshallerStream.write(statsEventMessage);
    unmarshallerStream.write(endEventMessage);
    unmarshallerStream.end();
  });
});
