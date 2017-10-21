import {Hash, SourceData} from "@aws/types";
import {BitArray} from '@aws/crypto-sjcl-bitArray';
import {toBits as stringToBitArray} from '@aws/crypto-sjcl-codecString';
import {
    fromBits as bitArrayToBuffer,
    toBits as bufferToBitArray,
} from '@aws/crypto-sjcl-codecArrayBuffer';

import SjclSha256 = require('@aws/crypto-sjcl-sha256');
import SjclHmac = require('@aws/crypto-sjcl-hmac');

export class Sha256 implements Hash {
    private readonly hash: SjclHmac|SjclSha256;
    private error: any;

    constructor(secret?: SourceData) {
        if (secret) {
            this.hash = new SjclHmac(toBitArray(secret));
        } else {
            this.hash = new SjclSha256();
        }
    }

    update(toHash: SourceData): void {
        if (isEmptyData(toHash) || this.error) {
            return;
        }

        try {
            this.hash.update(toBitArray(toHash));
        } catch (e) {
            this.error = e;
        }
    }

    digest(): Promise<Uint8Array> {
        if (this.error) {
            return Promise.reject(this.error);
        }

        try {
            const finalized = this.hash instanceof SjclHmac
                ? this.hash.digest()
                : this.hash.finalize();

            return Promise.resolve(
                new Uint8Array(bitArrayToBuffer(finalized, 0, 0))
            );
        } catch (e) {
            return Promise.reject(e);
        }
    }
}

function isEmptyData(data: SourceData): boolean {
    if (typeof data === 'string') {
        return data.length === 0;
    }

    return data.byteLength === 0;
}

function toBitArray(data: SourceData): BitArray {
    if (typeof data === 'string') {
        return stringToBitArray(data);
    }

    if (ArrayBuffer.isView(data)) {
        return bufferToBitArray(data.buffer);
    }

    return bufferToBitArray(data);
}
