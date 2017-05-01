import {CryptoProvider, ProviderOptions, SourceData} from './CryptoProvider';
import {
    createHash,
    createHmac,
    randomBytes,
    Utf8AsciiLatin1Encoding,
} from 'crypto';

const SHA256 = 'sha256';

export class NodeCryptoProvider implements CryptoProvider {
    private readonly encoding: Utf8AsciiLatin1Encoding;

    constructor(options: ProviderOptions = {}) {
        this.encoding = convertInputEncoding(options.inputEncoding);
    }

    sha256Digest(toHash: SourceData): Promise<Buffer> {
        return new Promise<Buffer>(resolve => {
            const hash = createHash(SHA256);
            if (typeof toHash === 'string') {
                hash.update(toHash, this.encoding);
            } else {
                hash.update(castToBuffer(toHash));
            }

            resolve(hash.digest());
        });
    }

    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Buffer> {
        return new Promise<Buffer>(resolve => {
            const hmac = createHmac(SHA256, convertToStringOrBuffer(secret));
            if (typeof toHash === 'string') {
                hmac.update(toHash, this.encoding);
            } else {
                hmac.update(castToBuffer(toHash));
            }

            resolve(hmac.digest());
        });
    }

    randomValues(length: number): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject) => {
            randomBytes(length, (error: any, buffer: Buffer) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(buffer);
                }
            });
        });
    }
}

function convertInputEncoding(
    encoding: string|undefined
): Utf8AsciiLatin1Encoding {
    switch (encoding) {
        case 'ascii':
            return 'ascii';
        case 'latin1':
            return 'latin1';
        case 'utf8':
        default:
            return 'utf8';
    }
}

function convertToStringOrBuffer(toHash: SourceData): string|Buffer {
    if (typeof toHash === 'string') {
        return toHash;
    }

    return castToBuffer(toHash);
}

function castToBuffer(toHash: ArrayBuffer|ArrayBufferView): Buffer {
    if (toHash instanceof ArrayBuffer) {
        return Buffer.from(toHash);
    }

    return Buffer.from(toHash.buffer);
}
