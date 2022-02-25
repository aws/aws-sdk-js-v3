import { createReadStream, ReadStream } from "fs";

export const fsCreateReadStream = (readStream: ReadStream) =>
  createReadStream(readStream.path, {
    // ToDo: Removed to fix https://github.com/aws/aws-sdk-js-v3/issues/3368
    // fd: (readStream as any).fd,
    start: (readStream as any).start,
    end: (readStream as any).end,
  });
