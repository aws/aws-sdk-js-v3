import { Readable } from 'stream';

/**
 * Streams the contents of a Uint8Array in chunks of random sizes
 */
export class RandomSizeChunkStream extends Readable {
    private position = 0;

    constructor(private readonly bytes: Uint8Array) {
        super();
    }

    _read(size: number) {
        let shouldContinue = true;
        while (shouldContinue && this.position < this.bytes.byteLength) {
            const toRead = Math.round(
                Math.random() * Math.min(size, this.bytes.byteLength - this.position)
            )
            shouldContinue = this.push(
                this.bytes.subarray(this.position, this.position + toRead)
            )
            this.position += toRead
        }

        if (this.position === this.bytes.byteLength) {
            this.push(null)
        }
    }
}
