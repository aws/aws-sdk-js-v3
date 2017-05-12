import {randomBytes} from 'crypto';

export function randomValues(byteLength: number): Promise<Uint8Array> {
    return new Promise<Buffer>((resolve, reject) => {
        randomBytes(byteLength, (err: Error, buf: Buffer) => {
            if (err) {
                reject(err);
            } else {
                resolve(buf);
            }
        });
    });
}
