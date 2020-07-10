import { HashCalculator } from "./hash-calculator";

function createMockHash(): {
  updates: Buffer[];
  update: (data: Buffer) => void;
  digest: () => Promise<Uint8Array>;
} {
  const mockHash: any = {
    updates: [] as Buffer[],
  };
  mockHash.update = (data: Buffer) => {
    mockHash.updates.push(data);
  };
  mockHash.digest = async () => {
    return Uint8Array.from([102, 111, 111]); // foo
  };
  return mockHash;
}

describe("HashCalculator", () => {
  const writePromise = (calculator: HashCalculator, chunk: Buffer, encoding?: string): Promise<void> => {
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
    expect(mockHash.updates[0]).toBe(listOfBuffers[0]);
    expect(mockHash.updates[1]).toBe(listOfBuffers[1]);
    expect(mockHash.updates[2]).toBe(listOfBuffers[2]);
  });
});
