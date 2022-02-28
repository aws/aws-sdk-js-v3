import { createReadStream, ReadStream } from "fs";

export const fsCreateReadStream = (readStream: ReadStream) =>
  typeof readStream.path !== "undefined"
    ? createReadStream(readStream.path, {
        start: (readStream as any).start,
        end: (readStream as any).end,
      })
    : // if there is an fd option, filename is ignored by createReadStream
      createReadStream("", { fd: (readStream as any).fd });
