import { streamCollector } from "./index";
import { ReadFromBuffers } from "./readable.mock";

describe("streamCollector", () => {
  it("returns a Uint8Array containing all data from a stream", async () => {
    const mockData = [
      Buffer.from("foo"),
      Buffer.from("bar"),
      Buffer.from("buzz")
    ];
    const mockReadStream = new ReadFromBuffers({
      buffers: mockData
    });
    const expected = new Uint8Array([
      102,
      111,
      111,
      98,
      97,
      114,
      98,
      117,
      122,
      122
    ]);
    const collectedData = await streamCollector(mockReadStream);
    expect(collectedData).toEqual(expected);
  });

  it("will propagate errors from the stream", async () => {
    // stream should emit an error right away
    const mockReadStream = new ReadFromBuffers({
      buffers: [],
      errorAfter: 0
    });

    try {
      await streamCollector(mockReadStream);
    } catch (err) {
      expect(err).toBeDefined();
    }
  });
});
