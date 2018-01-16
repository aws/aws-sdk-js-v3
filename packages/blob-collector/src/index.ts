import {StreamCollector} from '@aws/types';

export const blobCollector: StreamCollector<Blob> = function blobCollector(
    blob
): Promise<Uint8Array> {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        
        fileReader.addEventListener('error', reject);
        fileReader.addEventListener('abort', reject);

        const size = blob.size;
        let totalBytesRead = 0;
        const bufferSize = 1024 * 1024;
        const payload: Uint8Array = new Uint8Array(size);

        function read() {
            if (totalBytesRead >= size) {
                resolve(payload);
                return;
            }
            fileReader.readAsArrayBuffer(
                blob.slice(
                    totalBytesRead,
                    Math.min(size, totalBytesRead + bufferSize)
                )
            );
        }

        fileReader.addEventListener('load', (event) => {
            const result = <ArrayBuffer>(event.target as any).result;
            payload.set(new Uint8Array(result), totalBytesRead);
            totalBytesRead += result.byteLength;
            // read the next block
            read();
        });

        // kick off the read
        read();
    });
}