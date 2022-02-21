import { Hash } from "@aws-sdk/types";
import { createReadStream } from "fs";
import { Readable, Writable } from "stream";

import { fsCreateReadStream } from "./fsCreateReadStream";
import { HashCalculator } from "./HashCalculator";
import { isFileStream } from "./isFileStream";
import { readableStreamHasher } from "./readableStreamHasher";

jest.mock("./fsCreateReadStream");
jest.mock("./HashCalculator");
jest.mock("./isFileStream");
jest.mock("fs");

describe(readableStreamHasher.name, () => {
  const mockDigest = jest.fn();
  const mockHashCtor = jest.fn().mockImplementation(() => ({
    update: jest.fn(),
    digest: mockDigest,
  }));

  const mockHashCalculatorWrite = jest.fn();
  const mockHashCalculatorEnd = jest.fn();

  const mockHash = new Uint8Array(Buffer.from("mockHash"));

  class MockHashCalculator extends Writable {
    constructor(public readonly hash: Hash, public readonly mockWrite, public readonly mockEnd) {
      super();
    }

    _write(chunk: Buffer, encoding: string, callback: (err?: Error) => void) {
      this.mockWrite(chunk);
      callback();
    }

    end() {
      this.mockEnd();
      super.end();
    }
  }

  beforeEach(() => {
    (HashCalculator as unknown as jest.Mock).mockImplementation(
      (hash) => new MockHashCalculator(hash, mockHashCalculatorWrite, mockHashCalculatorEnd)
    );
    (isFileStream as unknown as jest.Mock).mockReturnValue(false);
    mockDigest.mockResolvedValue(mockHash);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("creates a copy in case of fileStream", () => {
    (fsCreateReadStream as jest.Mock).mockReturnValue(
      new Readable({
        read: (size) => {},
      })
    );
    (isFileStream as unknown as jest.Mock).mockReturnValue(true);

    const fsReadStream = createReadStream(__filename);
    readableStreamHasher(mockHashCtor, fsReadStream);

    expect(isFileStream).toHaveBeenCalledWith(fsReadStream);
    expect(fsCreateReadStream).toHaveBeenCalledWith(fsReadStream);
  });

  it("computes hash for a readable stream", async () => {
    const readableStream = new Readable({
      read: (size) => {},
    });
    const hashPromise = readableStreamHasher(mockHashCtor, readableStream);

    // @ts-ignore Property '_readableState' does not exist on type 'Readable'.
    const { pipesCount } = readableStream._readableState;
    expect(pipesCount).toEqual(1);

    const mockDataChunks = ["Hello", "World"];
    setTimeout(() => {
      mockDataChunks.forEach((chunk) => readableStream.emit("data", chunk));
      readableStream.emit("end");
    }, 100);

    expect(await hashPromise).toEqual(mockHash);
    expect(mockHashCalculatorWrite).toHaveBeenCalledTimes(mockDataChunks.length);
    mockDataChunks.forEach((chunk, index) =>
      expect(mockHashCalculatorWrite).toHaveBeenNthCalledWith(index + 1, Buffer.from(chunk))
    );
    expect(mockDigest).toHaveBeenCalledTimes(1);
    expect(mockHashCalculatorEnd).toHaveBeenCalledTimes(1);
  });

  it("throws error if readable stream throws error", async () => {
    const readableStream = new Readable({
      read: (size) => {},
    });
    const hashPromise = readableStreamHasher(mockHashCtor, readableStream);

    const mockError = new Error("error");
    setTimeout(() => {
      readableStream.emit("error", mockError);
    }, 100);

    try {
      await hashPromise;
      fail(`should throw error ${mockError}`);
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mockHashCalculatorEnd).toHaveBeenCalledTimes(1);
    }
  });

  it("throws error if HashCalculator throws error", async () => {
    const mockHashCalculator = new MockHashCalculator(
      mockHashCtor as any,
      mockHashCalculatorWrite,
      mockHashCalculatorEnd
    );
    (HashCalculator as unknown as jest.Mock).mockImplementation((hash) => mockHashCalculator);

    const readableStream = new Readable({
      read: (size) => {},
    });
    const hashPromise = readableStreamHasher(mockHashCtor, readableStream);

    const mockError = new Error("error");
    setTimeout(() => {
      mockHashCalculator.emit("error", mockError);
    }, 100);

    try {
      await hashPromise;
      fail(`should throw error ${mockError}`);
    } catch (error) {
      expect(error).toEqual(mockError);
    }
  });

  it("throws error if hash.digest() throws error", async () => {
    const readableStream = new Readable({
      read: (size) => {},
    });
    const hashPromise = readableStreamHasher(mockHashCtor, readableStream);

    setTimeout(() => {
      readableStream.emit("end");
    }, 100);

    const mockError = new Error("error");
    mockDigest.mockRejectedValue(mockError);

    try {
      await hashPromise;
      fail(`should throw error ${mockError}`);
    } catch (error) {
      expect(error).toEqual(mockError);
      expect(mockHashCalculatorEnd).toHaveBeenCalledTimes(1);
    }
  });
});
