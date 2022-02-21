import { ReadStream } from "fs";
import { Readable } from "stream";

export const isFileStream = (stream: Readable): stream is ReadStream =>
  typeof (stream as ReadStream).path === "string" ||
  Buffer.isBuffer((stream as ReadStream).path) ||
  typeof (stream as any).fd === "number";
