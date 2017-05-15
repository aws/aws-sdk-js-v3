import {Hash, SourceData} from "@aws/types";
import {isEmptyData} from './isEmptyData';
import {SHA_256_HASH, SHA_256_HMAC_ALGO} from './constants';

export class Sha256 implements Hash {
    private readonly key: Promise<CryptoKey>|undefined;
    private toHash: Promise<ArrayBuffer>;

    constructor(secret?: SourceData) {
        if (secret !== void 0) {
            this.key = convertToBuffer(secret)
                .then(keyData => window.crypto.subtle.importKey(
                    'raw',
                    keyData,
                    SHA_256_HMAC_ALGO,
                    false,
                    ['sign']
                ));
            this.key.catch(() => {});
        }

        this.toHash = Promise.resolve(new Uint8Array(0));
    }

    update(data: SourceData, encoding?: 'utf8' | 'ascii' | 'latin1'): void {
        if (isEmptyData(data)) {
            return;
        }

        this.toHash = Promise.all([this.toHash, convertToBuffer(data, encoding)])
            .then(([carry, update]) => {
                const typedArray = new Uint8Array(
                    carry.byteLength + update.byteLength
                );
                typedArray.set(new Uint8Array(carry), 0);
                typedArray.set(new Uint8Array(update), carry.byteLength);

                return typedArray.buffer;
            });
    }

    digest(): Promise<Uint8Array> {
        if (this.key) {
            return Promise.all([this.key, this.toHash])
                .then(([key, toHash]) => window.crypto.subtle.sign(
                    SHA_256_HMAC_ALGO,
                    key,
                    toHash
                ))
                .then(data => new Uint8Array(data));
        }

        return this.toHash.then(toHash => {
            return window.crypto.subtle.digest(SHA_256_HASH, toHash)
                .then(data => new Uint8Array(data));
        });
    }
}

function convertToBuffer(
    data: SourceData,
    encoding: string = 'utf8'
): Promise<ArrayBuffer> {
    if (typeof data === 'string') {
        if (data.length === 0) {
            return Promise.resolve(new ArrayBuffer(0));
        }

        if ('TextEncoder' in window) {
            const encoder = new TextEncoder(encoding);
            return Promise.resolve(encoder.encode(data).buffer);
        }

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsArrayBuffer(new Blob([data]));
        });
    }

    if (ArrayBuffer.isView(data)) {
        return Promise.resolve(data.buffer);
    }

    return Promise.resolve(data);
}
