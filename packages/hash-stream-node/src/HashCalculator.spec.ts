import { toUint8Array } from "@aws-sdk/util-utf8/src";

import { HashCalculator } from "./HashCalculator";

function createMockHash(): {
  updates: Uint8Array[];
  update: (data: Uint8Array) => void;
  digest: () => Promise<Uint8Array>;
  reset: () => void;
} {
  const mockHash: any = {
    updates: [] as Uint8Array[],
  };
  mockHash.update = (data: Uint8Array) => {
    mockHash.updates.push(data);
  };
  mockHash.digest = async () => {
    return Uint8Array.from([102, 111, 111]); // foo
  };
  mockHash.reset = () => {};
  return mockHash;
}

describe("HashCalculator", () => {
  const writePromise = (
    calculator: HashCalculator,
    chunk: Buffer,
    encoding: BufferEncoding = "utf-8"
  ): Promise<void> => {
    return new Promise((resolve, reject) => {
      calculator.write(chunk, encoding, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  };

  const listOfBuffers: Buffer[] = [Buffer.from("foo"), Buffer.from("bar"), Buffer.from("buzz")];

  it("updates a hash from upstream stream", async () => {
    const mockHash = createMockHash();
    const calculator = new HashCalculator(mockHash);

    await writePromise(calculator, listOfBuffers[0]);
    await writePromise(calculator, listOfBuffers[1]);
    await writePromise(calculator, listOfBuffers[2]);
    calculator.end();

    // verify that update was called the correct number of times
    expect(mockHash.updates.length).toBe(3);
    expect(mockHash.updates[0]).toEqual(toUint8Array(listOfBuffers[0]));
    expect(mockHash.updates[1]).toEqual(toUint8Array(listOfBuffers[1]));
    expect(mockHash.updates[2]).toEqual(toUint8Array(listOfBuffers[2]));
  });
});
