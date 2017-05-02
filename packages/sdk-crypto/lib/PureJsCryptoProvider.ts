import {CryptoProvider, SourceData} from '@aws/types';
import {ProviderOptions} from "./ProviderOptions";
import * as sjcl from '../vendor/sjcl';

export class PureJsCryptoProvider implements CryptoProvider {
    constructor(options: ProviderOptions = {}) {}

    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array> {
        const hmac = new sjcl.misc.hmac(toBitArray(secret));
        hmac.update(toBitArray(toHash));
        return Promise.resolve(new Uint8Array(
            sjcl.codec.arrayBuffer.fromBits(hmac.digest())
        ));
    }

    sha256Digest(toHash: SourceData): Promise<Uint8Array> {
        const digest = sjcl.hash.sha256.hash(toBitArray(toHash));
        return Promise.resolve(new Uint8Array(
            sjcl.codec.arrayBuffer.fromBits(digest)
        ));
    }

    randomValues(length: number): Promise<Uint8Array> {
        if (!sjcl.random.isReady()) {
            sjcl.random.startCollectors();

            return new Promise(resolve => {
                setTimeout(() => {
                    this.randomValues(length)
                        .then(resolve);
                }, 0);
            });
        }

        const words = sjcl.random.randomWords(Math.ceil(length / 4));
        sjcl.random.stopCollectors();
        return Promise.resolve<Uint8Array>(new Uint8Array(
            sjcl.codec.arrayBuffer.fromBits(words)
        ));
    }
}

function toBitArray(data: SourceData): sjcl.BitArray {
    if (typeof data === 'string') {
        return sjcl.codec.utf8String.toBits(data);
    }

    const buffer = data instanceof ArrayBuffer ? data : data.buffer;
    return sjcl.codec.arrayBuffer.toBits(buffer);
}
