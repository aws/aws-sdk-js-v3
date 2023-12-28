export const compressStream = async (body: ReadableStream): Promise<ReadableStream> =>
  body.pipeThrough(new CompressionStream("gzip"));
