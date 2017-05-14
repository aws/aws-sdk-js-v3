import {Hash, SourceData} from '@aws/types';
import {Buffer} from 'buffer';
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
        if (typeof toHash === 'string') {
            this.hash.update(toHash, encoding || 'utf8');
        } else {
            this.hash.update(castSourceData(toHash));
        }
    }

    digest(): Promise<Uint8Array> {
        return Promise.resolve(this.hash.digest());
    }
}

function castSourceData(toCast: SourceData): Buffer|string {
    if (typeof toCast === 'string' || Buffer.isBuffer(toCast)) {
        return toCast;
    }

    if (toCast instanceof ArrayBuffer) {
        return Buffer.from(toCast);
    }

    return Buffer.from(toCast.buffer);
}
