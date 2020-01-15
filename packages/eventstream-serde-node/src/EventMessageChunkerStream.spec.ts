import { EventMessageChunkerStream } from "./EventMessageChunkerStream";
import {
  recordEventMessage,
  statsEventMessage,
  endEventMessage
} from "./fixtures/event.fixture";
import { MockEventMessageSource } from "./fixtures/MockEventMessageSource.fixture";

describe("EventMessageChunkerStream", () => {
  it("splits payloads into individual messages", done => {
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
    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("data", msg => {
      messages.push(msg);
    });
    chunkerStream.on("end", function() {
      expect(messages.length).toBe(3);
      done();
    });
  });

  it("splits payloads in correct order", done => {
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
    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("data", msg => {
      messages.push(msg);
    });
    chunkerStream.on("end", function() {
      expect(messages.length).toBe(4);
      for (let i = 0; i < mockMessages.length; i++) {
        expect(messages[i].toString("base64")).toEqual(
          mockMessages[i].toString("base64")
        );
      }
      done();
    });
  });

  it("splits payloads when received all at once", done => {
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
    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("data", msg => {
      messages.push(msg);
    });
    chunkerStream.on("end", function() {
      expect(messages.length).toBe(3);
      done();
    });
  });

  it("splits payloads when total event message length spans multiple chunks", done => {
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
    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("data", msg => {
      messages.push(msg);
    });
    chunkerStream.on("end", function() {
      expect(messages.length).toBe(3);
      done();
    });
  });

  it("splits payloads when total event message length spans 2 chunks", done => {
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
    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("data", msg => {
      messages.push(msg);
    });
    chunkerStream.on("end", function() {
      expect(messages.length).toBe(3);
      done();
    });
  });

  it("sends an error if an event message is truncated", done => {
    const responseMessage = Buffer.concat([
      recordEventMessage,
      statsEventMessage,
      endEventMessage
    ]);
    const mockStream = new MockEventMessageSource({
      messages: [responseMessage.slice(0, responseMessage.length - 4)],
      emitSize: 10
    });

    const chunkerStream = new EventMessageChunkerStream();
    mockStream.pipe(chunkerStream);
    chunkerStream.on("error", err => {
      expect(err.message).toEqual("Truncated event message received.");
      done();
    });
  });
});
