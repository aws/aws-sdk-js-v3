import zlib from 'zlib';
import { promisify } from 'util';
import { CompressionAlgorithm } from './constants';

// zlib.gzip( buffer, options, callback ) 

// reject stream if it goes into compress function 
export const compress = async (body: Uint8Array, algorithm: CompressionAlgorithm): Promise<Uint8Array> => {
  // switch-case for algorithms: default -> unsupported 
  if (algorithm !== "gzip") {
    throw new Error('Unsupported compression algorithm');
  }
  try {
    const compressedData = zlib.gzipSync(body);
    return compressedData as Uint8Array; // should it be returned as buffer?
  } catch (err) {
    throw new Error('Compression failed: ' + err.message);
  }
};

// type should be --> import type readable from stream and use readable as the type 
// export const compressStream = (body: NodeJS.ReadableStream, algorithm: string): NodeJS.ReadableStream => {

