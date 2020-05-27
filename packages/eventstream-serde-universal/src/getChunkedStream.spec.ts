import { getChunkedStream } from "./getChunkedStream";
import {
  recordEventMessage,
  statsEventMessage,
  endEventMessage
} from "./fixtures/event.fixture";
import { MockEventMessageSource } from "./fixtures/MockEventMessageSource.fixture";

describe("getChunkedStream", () => {
  it("splits payloads into individual messages", async () => {
    const messages = [];
    const mockMessages = [
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ];
    const mockStream = new MockEventMessageSource({
      messages: mockMessages,
      emitSize: 100
    });
    const chunkerStream = getChunkedStream(mockStream);
    for await (const msg of chunkerStream) {
      messages.push(msg);
    }
    expect(messages.length).toBe(3);
  });

  it("splits payloads in correct order", async () => {
    const messages: Array<any> = [];
    const mockMessages = [
      recordEventMessage,
      statsEventMessage,
      recordEventMessage,
      endEventMessage
    ];
    const mockStream = new MockEventMessageSource({
      messages: mockMessages,
      emitSize: 100
    });
    const chunkerStream = getChunkedStream(mockStream);
    for await (const msg of chunkerStream) {
      messages.push(msg);
    }
    expect(messages.length).toBe(4);
    for (let i = 0; i < mockMessages.length; i++) {
      expect(Buffer.from(messages[i]).toString("base64")).toEqual(
        mockMessages[i].toString("base64")
      );
    }
  });

  it("splits payloads when received all at once", async () => {
    const messages = [];
    const mockMessages = [
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ];
    const mockStream = new MockEventMessageSource({
      messages: mockMessages,
      emitSize: mockMessages.reduce((prev, cur) => {
        return prev + cur.length;
      }, 0)
    });
    const chunkerStream = getChunkedStream(mockStream);
    for await (const msg of chunkerStream) {
      messages.push(msg);
    }
    expect(messages.length).toBe(3);
  });

  it("splits payloads when total event message length spans multiple chunks", async () => {
    const messages = [];
    const mockMessages = [
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ];
    const mockStream = new MockEventMessageSource({
      messages: mockMessages,
      emitSize: 1
    });
    const chunkerStream = getChunkedStream(mockStream);
    for await (const msg of chunkerStream) {
      messages.push(msg);
    }
    expect(messages.length).toBe(3);
  });

  it("splits payloads when total event message length spans 2 chunks", async () => {
    const messages = [];
    const mockMessages = [
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ];
    const mockStream = new MockEventMessageSource({
      messages: mockMessages,
      emitSize: recordEventMessage.length + 2
    });
    const chunkerStream = getChunkedStream(mockStream);
    for await (const msg of chunkerStream) {
      messages.push(msg);
    }
    expect(messages.length).toBe(3);
  });

  it("sends an error if an event message is truncated", async () => {
    const responseMessage = Buffer.concat([
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ]);
    const mockStream = new MockEventMessageSource({
      messages: [responseMessage.slice(0, responseMessage.length - 4)],
      emitSize: 10
    });

    const chunkerStream = getChunkedStream(mockStream);
    let error: Error | undefined = undefined;
    try {
      for await (const msg of chunkerStream) {
        //Pass
      }
    } catch (err) {
      error = err;
    }
    expect(error!.message).toEqual("Truncated event message received.");
  });
});
