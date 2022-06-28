import { splitMessage } from "./splitMessage";

describe("splitMessage", () => {
  it("should throw when given a message under 16 bytes", () => {
    for (let i = 0; i < 16; i++) {
      const emptyMessage = new Uint8Array(i);
      expect(() => splitMessage(emptyMessage)).toThrowError("too short");
    }
  });

  it("should throw if the specified length does not match the length of the received message", () => {
    const message = new DataView(new ArrayBuffer(17));
    message.setUint32(0, 16, false);

    expect(() => splitMessage(message)).toThrowError("length does not match");
  });

  it("should throw if the prelude checksum does not match the calculated prelude checksum", () => {
    const message = new DataView(new ArrayBuffer(16));
    message.setUint32(0, 16, false);
    message.setUint32(8, 0x05c248ec, false);

    expect(() => splitMessage(message)).toThrowError("prelude checksum");
  });

  it("should throw if the message checksum does not match the calculated message checksum", () => {
    const message = new DataView(new ArrayBuffer(16));
    message.setUint32(0, 16, false);
    message.setUint32(8, 0x05c248eb, false);
    message.setUint32(12, 0x7d98c8fe, false);

    expect(() => splitMessage(message)).toThrowError("message checksum");
  });

  it("should return header and body buffers for messages with well-formed metadata", () => {
    const message = new DataView(new ArrayBuffer(16));
    message.setUint32(0, 16, false);
    message.setUint32(8, 0x05c248eb, false);
    message.setUint32(12, 0x7d98c8ff, false);

    expect(splitMessage(message)).toEqual({
      headers: new DataView(new ArrayBuffer(0)),
      body: new Uint8Array(0),
    });
  });
});
