import { Readable } from "stream";
import { createGzip } from "zlib";

export const compressStream = async (body: Readable): Promise<Readable> => body.pipe(createGzip());
