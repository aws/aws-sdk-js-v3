import { Collector } from "./collector";

describe("Collector", () => {
  const writePromise = (
    collector: Collector,
    chunk: any,
    encoding?: string
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      collector.write(chunk, encoding, err => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };

  const listOfBuffers: Buffer[] = [
    Buffer.from("foo"),
    Buffer.from("bar"),
    Buffer.from("buzz")
  ];

  it("stores a collection of buffers internally", async () => {
    const collector = new Collector();

    await writePromise(collector, listOfBuffers[0]);
    await writePromise(collector, listOfBuffers[1]);
    await writePromise(collector, listOfBuffers[2]);
    collector.end();

    expect(collector.bufferedBytes.length).toBe(3);
    expect(collector.bufferedBytes[0]).toBe(listOfBuffers[0]);
    expect(collector.bufferedBytes[1]).toBe(listOfBuffers[1]);
    expect(collector.bufferedBytes[2]).toBe(listOfBuffers[2]);
  });
});
