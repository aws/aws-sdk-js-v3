import {Hash, SourceData} from '@aws/types';
import {Buffer} from 'buffer';
import {fromArrayBuffer, fromString} from '@aws/util-buffer-from';
import {
    createHash,
    createHmac,
    Hash as NodeHash,
    Hmac
} from "crypto";

const algo = 'sha256';

export class Sha256 implements Hash {
    private readonly hash: NodeHash|Hmac;

    constructor(secret?: SourceData) {
        this.hash = secret
            ? createHmac(algo, castSourceData(secret))
            : createHash(algo);
    }

    update(toHash: SourceData, encoding?: 'utf8'|'ascii'|'latin1'): void {
        this.hash.update(castSourceData(toHash, encoding));
    }

    digest(): Promise<Uint8Array> {
        return Promise.resolve(this.hash.digest());
    }
}

function castSourceData(toCast: SourceData, encoding?: string): Buffer {
    if (Buffer.isBuffer(toCast)) {
        return toCast;
    }

    if (typeof toCast === 'string') {
        return fromString(toCast, encoding);
    }

    if (toCast instanceof ArrayBuffer) {
        return fromArrayBuffer(toCast);
    }

    return fromArrayBuffer(
        toCast.buffer,
        toCast.byteOffset,
        toCast.byteLength
    );
}
