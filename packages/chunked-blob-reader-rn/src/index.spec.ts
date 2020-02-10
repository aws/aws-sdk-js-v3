import { blobReader } from "./index";

describe("blobReader", () => {
  it("reads an entire blob", async () => {
    const longMessage: number[] = [];
    for (let i = 0; i < 1024 * 1024 * 5; i += 4) {
      longMessage.push(102, 111, 111, 32); // 'foo '
    }
    const blob = new Blob([Uint8Array.from(longMessage)]);

    let totalBytes = 0;

    await blobReader(blob, chunk => {
      totalBytes += chunk.byteLength;
    });

    expect(totalBytes).toBe(1024 * 1024 * 5);
  });

  it("respects the chunk size", async () => {
    const message = new Uint8Array(100);
    message.fill(0);

    const blob = new Blob([message]);

    const chunkSizes: number[] = [];

    await blobReader(
      blob,
      chunk => {
        chunkSizes.push(chunk.byteLength);
      },
      12 // chunk size in bytes
    );

    expect(chunkSizes.length).toBe(9);

    for (let i = 0; i < chunkSizes.length; i++) {
      if (i < chunkSizes.length - 1) {
        expect(chunkSizes[i]).toBe(12);
      } else {
        expect(chunkSizes[i]).toBe(4);
      }
    }
  });
});
