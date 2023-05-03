import { Message } from "@aws-sdk/types";

import { SmithyMessageEncoderStream } from "./SmithyMessageEncoderStream";

describe("SmithyMessageEncoderStream", () => {
  it("returns encoded stream", async () => {
    const message1 = {
      headers: {},
      body: new Uint8Array(1),
    };

    const message2 = {
      headers: {},
      body: new Uint8Array(2),
    };

    const serializer = jest.fn().mockReturnValueOnce(message1).mockReturnValueOnce(message2);

    const inputStream = async function* () {
      yield "first";
      yield "second";
    };

    const stream = new SmithyMessageEncoderStream<String>({
      inputStream: inputStream(),
      serializer: serializer,
    });

    const messages: Array<Message> = [];
    for await (const str of stream) {
      messages.push(str);
    }
    expect(messages.length).toEqual(2);
    expect(messages[0]).toEqual(message1);
    expect(messages[1]).toEqual(message2);
  });
});
