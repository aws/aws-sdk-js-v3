import { ReadStream } from "fs";
import { Readable } from "stream";

export const isFileStream = (stream: Readable): stream is ReadStream =>
  typeof (stream as ReadStream).path === "string" ||
  Buffer.isBuffer((stream as ReadStream).path) ||
  // @ts-expect-error fd is not defined in @types/node
  typeof (stream as ReadStream).fd === "number";
