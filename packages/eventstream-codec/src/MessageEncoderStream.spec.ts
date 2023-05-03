import { MessageEncoderStream } from "./MessageEncoderStream";

describe("MessageEncoderStream", () => {
  it("returns encoded stream with end frame", async () => {
    const message1 = {
      headers: {},
      body: new Uint8Array(1),
    };

    const message2 = {
      headers: {},
      body: new Uint8Array(2),
    };

    const messageEncoderMock = {
      encode: jest.fn().mockReturnValueOnce(new Uint8Array(1)).mockReturnValueOnce(new Uint8Array(2)),
    };

    const inputStream = async function* () {
      yield message1;
      yield message2;
    };

    const messageEncoderStream = new MessageEncoderStream({
      encoder: messageEncoderMock,
      messageStream: inputStream(),
      includeEndFrame: true,
    });

    const messages: Array<Uint8Array> = [];
    for await (const encoded of messageEncoderStream) {
      messages.push(encoded);
    }
    expect(messages.length).toEqual(3);
    expect(messages[0]).toEqual(new Uint8Array(1));
    expect(messages[1]).toEqual(new Uint8Array(2));
    expect(messages[2]).toEqual(new Uint8Array(0));
  });

  it("returns encoded stream without end frame", async () => {
    const message1 = {
      headers: {},
      body: new Uint8Array(1),
    };

    const message2 = {
      headers: {},
      body: new Uint8Array(2),
    };

    const messageEncoderMock = {
      encode: jest.fn().mockReturnValueOnce(new Uint8Array(1)).mockReturnValueOnce(new Uint8Array(2)),
    };

    const inputStream = async function* () {
      yield message1;
      yield message2;
    };

    const messageEncoderStream = new MessageEncoderStream({
      encoder: messageEncoderMock,
      messageStream: inputStream(),
    });

    const messages: Array<Uint8Array> = [];
    for await (const encoded of messageEncoderStream) {
      messages.push(encoded);
    }
    expect(messages.length).toEqual(2);
    expect(messages[0]).toEqual(new Uint8Array(1));
    expect(messages[1]).toEqual(new Uint8Array(2));
  });
});
