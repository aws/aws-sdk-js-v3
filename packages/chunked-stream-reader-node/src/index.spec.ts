import { PassThrough } from "stream";

import { streamReader } from "./index";
import { ReadFromBuffers } from "./readable.fixture";

describe("streamReader", () => {
  it('calls onChunk on a stream every "chunkSize" bytes', async () => {
    const buffers = [Buffer.alloc(1024, 0), Buffer.alloc(1024, 1), Buffer.alloc(1024, 2), Buffer.alloc(1024, 3)];
    const mockStream = new ReadFromBuffers({ buffers });

    const mockChunkReader = jest.fn();

    await streamReader(mockStream, mockChunkReader, 1024);
    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(4);
    for (let i = 0; i < buffers.length; i++) {
      expect(Buffer.compare(buffers[i], Buffer.from(mockChunkCalls[i][0]))).toBe(0);
      expect(mockChunkCalls[i][0].byteLength).toBe(1024);
    }
  });

  it("has a default chunkSize of 1 MiB", async () => {
    const buffers = [
      Buffer.alloc(1048576, 0),
      Buffer.alloc(1048576, 1),
      Buffer.alloc(1048576, 2),
      Buffer.alloc(1048576, 3),
    ];
    const mockStream = new ReadFromBuffers({ buffers });

    const mockChunkReader = jest.fn();

    await streamReader(mockStream, mockChunkReader);
    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(4);
    for (let i = 0; i < buffers.length; i++) {
      expect(Buffer.compare(buffers[i], Buffer.from(mockChunkCalls[i][0]))).toBe(0);
      expect(mockChunkCalls[i][0].byteLength).toBe(1048576);
    }
  });

  it("calls onChunk with remaining bytes during last call", async () => {
    const buffers = [Buffer.alloc(1000, 0), Buffer.alloc(1000, 1), Buffer.alloc(1000, 2), Buffer.alloc(600, 3)];
    const mockStream = new ReadFromBuffers({ buffers });

    const mockChunkReader = jest.fn();

    await streamReader(mockStream, mockChunkReader, 500);

    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(8);
    // loop through the first 7 500-byte chunks
    for (let i = 0; i < mockChunkCalls.length - 1; i++) {
      const bufferIdx = Math.floor(i / 2);
      expect(mockChunkCalls[i][0].byteLength).toBe(500);
      expect(Buffer.compare(Buffer.from(buffers[bufferIdx].slice(0, 500)), Buffer.from(mockChunkCalls[i][0]))).toBe(0);
    }
    expect(mockChunkCalls[7][0].byteLength).toBe(100);
    expect(Buffer.compare(Buffer.from(buffers[3].slice(500)), Buffer.from(mockChunkCalls[7][0]))).toBe(0);
  });

  it('buffers "data" chunks until the chunkSize is reached', async () => {
    const buffers = [
      Buffer.alloc(100, 0),
      Buffer.alloc(100, 1),
      Buffer.alloc(100, 2),
      Buffer.alloc(100, 3),
      Buffer.alloc(100, 4),
    ];
    const mockStream = new ReadFromBuffers({ buffers });

    const mockChunkReader = jest.fn();

    await streamReader(mockStream, mockChunkReader, 500);

    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(1);
    expect(mockChunkCalls[0][0].byteLength).toBe(500);
    expect(Buffer.compare(Buffer.concat(buffers), Buffer.from(mockChunkCalls[0][0]))).toBe(0);
  });

  it("calls onChunk if end of stream is reached before chunkSize is reached", async () => {
    const buffers = [Buffer.alloc(100, 0), Buffer.alloc(100, 1), Buffer.alloc(100, 2)];
    const mockStream = new ReadFromBuffers({ buffers });

    const mockChunkReader = jest.fn();

    await streamReader(mockStream, mockChunkReader, 500);

    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(1);
    expect(mockChunkCalls[0][0].byteLength).toBe(300);
    expect(Buffer.compare(Buffer.concat(buffers), Buffer.from(mockChunkCalls[0][0]))).toBe(0);
  });

  it('calls onChunk on stream end every "chunkSize" bytes', async () => {
    const mockStream = new PassThrough();
    const payload = Buffer.alloc(700, 0);
    mockStream.end(payload);

    const mockChunkReader = jest.fn();
    await streamReader(mockStream, mockChunkReader, 500);

    const mockChunkCalls = mockChunkReader.mock.calls;
    expect(mockChunkCalls.length).toBe(2);
    expect(mockChunkCalls[0][0].byteLength).toBe(500);
    expect(mockChunkCalls[1][0].byteLength).toBe(200);
    expect(
      Buffer.compare(Buffer.concat([Buffer.from(mockChunkCalls[0][0]), Buffer.from(mockChunkCalls[1][0])]), payload)
    ).toBe(0);
  });

  it("rejects if an error is encountered in the read stream", async () => {
    const buffers = [
      Buffer.alloc(100, 0),
      Buffer.alloc(100, 1),
      Buffer.alloc(100, 2),
      Buffer.alloc(100, 3),
      Buffer.alloc(100, 4),
    ];
    const mockStream = new ReadFromBuffers({
      buffers,
      errorAfter: 2, // throw error after 2 chunks have been read
    });

    const mockChunkReader = jest.fn();

    await expect(streamReader(mockStream, mockChunkReader, 500)).rejects.toHaveProperty("message");
  });
});
