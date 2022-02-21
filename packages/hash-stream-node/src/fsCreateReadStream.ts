import { createReadStream, ReadStream } from "fs";

export const fsCreateReadStream = (readStream: ReadStream) =>
  createReadStream(readStream.path, {
    fd: (readStream as any).fd,
    start: (readStream as any).start,
    end: (readStream as any).end,
  });
