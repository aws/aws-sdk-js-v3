import {StreamCollector} from '@aws/types';
import {readBlob} from './read-blob';

export const blobCollector: StreamCollector<Blob> = async function blobCollector(
    blob
): Promise<Uint8Array> {
    const size = blob.size;
    let totalBytesRead = 0;
    const payload = new Uint8Array(size);

    await readBlob(
        blob,
        (chunk) => {
            payload.set(chunk, totalBytesRead);
            totalBytesRead += chunk.byteLength;
        }
    );

    return payload;
}