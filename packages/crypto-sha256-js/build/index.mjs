import { fromUtf8 } from '@aws/util-utf8-browser';

/**
 * @internal
 */
const BLOCK_SIZE = 64;
/**
 * @internal
 */
const DIGEST_LENGTH = 32;
/**
 * @internal
 */
const KEY = new Uint32Array([
    0x428a2f98,
    0x71374491,
    0xb5c0fbcf,
    0xe9b5dba5,
    0x3956c25b,
    0x59f111f1,
    0x923f82a4,
    0xab1c5ed5,
    0xd807aa98,
    0x12835b01,
    0x243185be,
    0x550c7dc3,
    0x72be5d74,
    0x80deb1fe,
    0x9bdc06a7,
    0xc19bf174,
    0xe49b69c1,
    0xefbe4786,
    0x0fc19dc6,
    0x240ca1cc,
    0x2de92c6f,
    0x4a7484aa,
    0x5cb0a9dc,
    0x76f988da,
    0x983e5152,
    0xa831c66d,
    0xb00327c8,
    0xbf597fc7,
    0xc6e00bf3,
    0xd5a79147,
    0x06ca6351,
    0x14292967,
    0x27b70a85,
    0x2e1b2138,
    0x4d2c6dfc,
    0x53380d13,
    0x650a7354,
    0x766a0abb,
    0x81c2c92e,
    0x92722c85,
    0xa2bfe8a1,
    0xa81a664b,
    0xc24b8b70,
    0xc76c51a3,
    0xd192e819,
    0xd6990624,
    0xf40e3585,
    0x106aa070,
    0x19a4c116,
    0x1e376c08,
    0x2748774c,
    0x34b0bcb5,
    0x391c0cb3,
    0x4ed8aa4a,
    0x5b9cca4f,
    0x682e6ff3,
    0x748f82ee,
    0x78a5636f,
    0x84c87814,
    0x8cc70208,
    0x90befffa,
    0xa4506ceb,
    0xbef9a3f7,
    0xc67178f2
]);
/**
 * @internal
 */
const INIT = [
    0x6a09e667,
    0xbb67ae85,
    0x3c6ef372,
    0xa54ff53a,
    0x510e527f,
    0x9b05688c,
    0x1f83d9ab,
    0x5be0cd19,
];
/**
 * @internal
 */
const MAX_HASHABLE_LENGTH = 2 ** 53 - 1;

/**
 * @internal
 */
class RawSha256 {
    constructor() {
        this.state = Int32Array.from(INIT);
        this.temp = new Int32Array(64);
        this.buffer = new Uint8Array(64);
        this.bufferLength = 0;
        this.bytesHashed = 0;
        /**
         * @internal
         */
        this.finished = false;
    }
    update(data) {
        if (this.finished) {
            throw new Error("Attempted to update an already finished hash.");
        }
        let position = 0;
        let { byteLength } = data;
        this.bytesHashed += byteLength;
        if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
            throw new Error("Cannot hash more than 2^53 - 1 bits");
        }
        while (byteLength > 0) {
            this.buffer[this.bufferLength++] = data[position++];
            byteLength--;
            if (this.bufferLength === BLOCK_SIZE) {
                this.hashBuffer();
                this.bufferLength = 0;
            }
        }
    }
    digest() {
        if (!this.finished) {
            const bitsHashed = this.bytesHashed * 8;
            const bufferView = new DataView(this.buffer.buffer, this.buffer.byteOffset, this.buffer.byteLength);
            const undecoratedLength = this.bufferLength;
            bufferView.setUint8(this.bufferLength++, 0x80);
            // Ensure the final block has enough room for the hashed length
            if (undecoratedLength % BLOCK_SIZE >= BLOCK_SIZE - 8) {
                for (let i = this.bufferLength; i < BLOCK_SIZE; i++) {
                    bufferView.setUint8(i, 0);
                }
                this.hashBuffer();
                this.bufferLength = 0;
            }
            for (let i = this.bufferLength; i < BLOCK_SIZE - 8; i++) {
                bufferView.setUint8(i, 0);
            }
            bufferView.setUint32(BLOCK_SIZE - 8, Math.floor(bitsHashed / 0x100000000), true);
            bufferView.setUint32(BLOCK_SIZE - 4, bitsHashed);
            this.hashBuffer();
            this.finished = true;
        }
        // The value in state is little-endian rather than big-endian, so flip
        // each word into a new Uint8Array
        const out = new Uint8Array(DIGEST_LENGTH);
        for (let i = 0; i < 8; i++) {
            out[i * 4] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return out;
    }
    hashBuffer() {
        const { buffer, state } = this;
        let state0 = state[0], state1 = state[1], state2 = state[2], state3 = state[3], state4 = state[4], state5 = state[5], state6 = state[6], state7 = state[7];
        for (let i = 0; i < BLOCK_SIZE; i++) {
            if (i < 16) {
                this.temp[i] = (((buffer[i * 4] & 0xff) << 24) |
                    ((buffer[(i * 4) + 1] & 0xff) << 16) |
                    ((buffer[(i * 4) + 2] & 0xff) << 8) |
                    (buffer[(i * 4) + 3] & 0xff));
            }
            else {
                let u = this.temp[i - 2];
                const t1 = (u >>> 17 | u << 15) ^
                    (u >>> 19 | u << 13) ^
                    (u >>> 10);
                u = this.temp[i - 15];
                const t2 = (u >>> 7 | u << 25) ^
                    (u >>> 18 | u << 14) ^
                    (u >>> 3);
                this.temp[i] = (t1 + this.temp[i - 7] | 0) +
                    (t2 + this.temp[i - 16] | 0);
            }
            const t1 = (((((state4 >>> 6 | state4 << 26) ^
                (state4 >>> 11 | state4 << 21) ^
                (state4 >>> 25 | state4 << 7))
                + ((state4 & state5) ^ (~state4 & state6))) | 0)
                + ((state7 + ((KEY[i] + this.temp[i]) | 0)) | 0)) | 0;
            const t2 = (((state0 >>> 2 | state0 << 30) ^
                (state0 >>> 13 | state0 << 19) ^
                (state0 >>> 22 | state0 << 10)) + ((state0 & state1) ^ (state0 & state2) ^ (state1 & state2))) | 0;
            state7 = state6;
            state6 = state5;
            state5 = state4;
            state4 = (state3 + t1) | 0;
            state3 = state2;
            state2 = state1;
            state1 = state0;
            state0 = (t1 + t2) | 0;
        }
        state[0] += state0;
        state[1] += state1;
        state[2] += state2;
        state[3] += state3;
        state[4] += state4;
        state[5] += state5;
        state[6] += state6;
        state[7] += state7;
    }
}

class Sha256 {
    constructor(secret) {
        this.hash = new RawSha256;
        if (secret) {
            this.outer = new RawSha256;
            const inner = bufferFromSecret(secret);
            const outer = new Uint8Array(BLOCK_SIZE);
            outer.set(inner);
            for (let i = 0; i < BLOCK_SIZE; i++) {
                inner[i] ^= 0x36;
                outer[i] ^= 0x5c;
            }
            this.hash.update(inner);
            this.outer.update(outer);
            // overwrite the copied key in memory
            for (let i = 0; i < inner.byteLength; i++) {
                inner[i] = 0;
            }
        }
    }
    update(toHash) {
        if (isEmptyData(toHash) || this.error) {
            return;
        }
        try {
            this.hash.update(convertToBuffer(toHash));
        }
        catch (e) {
            this.error = e;
        }
    }
    async digest() {
        if (this.error) {
            throw this.error;
        }
        if (this.outer) {
            if (!this.outer.finished) {
                this.outer.update(this.hash.digest());
            }
            return this.outer.digest();
        }
        return this.hash.digest();
    }
}
function bufferFromSecret(secret) {
    let input = convertToBuffer(secret);
    if (input.byteLength > BLOCK_SIZE) {
        const bufferHash = new RawSha256;
        bufferHash.update(input);
        input = bufferHash.digest();
    }
    const buffer = new Uint8Array(BLOCK_SIZE);
    buffer.set(input);
    return buffer;
}
function isEmptyData(data) {
    if (typeof data === 'string') {
        return data.length === 0;
    }
    return data.byteLength === 0;
}
function convertToBuffer(data) {
    if (typeof data === 'string') {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
}

export { Sha256 };
