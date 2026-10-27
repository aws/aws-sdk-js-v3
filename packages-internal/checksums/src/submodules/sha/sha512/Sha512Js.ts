import { toUint8Array } from "@smithy/core/serde";
import type { Checksum, SourceData } from "@smithy/types";

const BLOCK = 128;
const DIGEST_LENGTH = 64;
const MAX_HASHABLE_LENGTH = 2 ** 53 - 1;

// SHA-512 initial hash values (FIPS 180-4 §5.3.5), as [hi, lo] u32 pairs.
const INIT = new Uint32Array([
  0x6a09e667, 0xf3bcc908, 0xbb67ae85, 0x84caa73b, 0x3c6ef372, 0xfe94f82b, 0xa54ff53a, 0x5f1d36f1, 0x510e527f,
  0xade682d1, 0x9b05688c, 0x2b3e6c1f, 0x1f83d9ab, 0xfb41bd6b, 0x5be0cd19, 0x137e2179,
]);

// SHA-512 round constants (FIPS 180-4 §4.2.3), 80 words as [hi, lo] u32 pairs.
// prettier-ignore
const K = new Uint32Array([
  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd, 0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019, 0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe, 0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1, 0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3, 0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483, 0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210, 0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725, 0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926, 0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8, 0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001, 0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910, 0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53, 0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb, 0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60, 0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9, 0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207, 0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6, 0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493, 0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a, 0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817,
]);

/**
 * Pure JS SHA-512 implementation with HMAC support.
 * 64-bit words are held as [hi, lo] u32 pairs; all arithmetic is split accordingly.
 * Non-destructive digest for plain hash — safe to call digest() multiple times.
 * @see https://csrc.nist.gov/pubs/fips/180-4/upd1/final
 * @public
 */
export class Sha512Js implements Checksum {
  public readonly digestLength = DIGEST_LENGTH;

  private state: Uint32Array = Uint32Array.from(INIT);
  private w?: Uint32Array;
  private buffer: Uint8Array = new Uint8Array(BLOCK);
  private bufferLength = 0;
  private bytesHashed = 0;
  private finished = false;
  private readonly inner?: Sha512Js;
  private readonly outer?: Sha512Js;

  public constructor(secret?: SourceData) {
    if (secret) {
      const key = Sha512Js.normalizeKey(secret);
      this.inner = new Sha512Js();
      this.outer = new Sha512Js();
      const pad = new Uint8Array(BLOCK * 2);
      for (let i = 0; i < BLOCK; ++i) {
        pad[i] = 0x36 ^ key[i];
        pad[i + BLOCK] = 0x5c ^ key[i];
      }
      this.inner.update(pad.subarray(0, BLOCK));
      this.outer.update(pad.subarray(BLOCK));
    }
  }

  public update(data: Uint8Array): void {
    if (this.finished) {
      throw new Error("Attempted to update an already finished HMAC.");
    }
    if (this.inner) {
      this.inner.update(data);
      return;
    }

    const chunk = toUint8Array(data);
    let position = 0;
    let { byteLength } = chunk;
    this.bytesHashed += byteLength;
    if (this.bytesHashed * 8 > MAX_HASHABLE_LENGTH) {
      throw new Error("Cannot hash more than 2^53 - 1 bits");
    }

    while (byteLength > 0) {
      this.buffer[this.bufferLength++] = chunk[position++];
      byteLength--;
      if (this.bufferLength === BLOCK) {
        this.hashBuffer();
        this.bufferLength = 0;
      }
    }
  }

  public async digest(): Promise<Uint8Array> {
    if (this.inner && this.outer) {
      if (this.finished) {
        throw new Error("Attempted to digest an already finished HMAC.");
      }
      this.finished = true;
      const innerDigest = this.inner.digestSync();
      this.outer.update(innerDigest);
      return this.outer.digestSync();
    }
    return this.digestSync();
  }

  public reset(): void {
    this.state = Uint32Array.from(INIT);
    this.buffer = new Uint8Array(BLOCK);
    this.bufferLength = 0;
    this.bytesHashed = 0;
  }

  private digestSync(): Uint8Array {
    // Non-destructive: operate on copies.
    const state = this.state.slice();
    const buffer = this.buffer.slice();
    let bufferLength = this.bufferLength;
    // WHY: 128-bit length field; only the low 64 bits (really <= 2^53 bits) are populated.
    const bitsHashed = this.bytesHashed * 8;
    const bitsHi = Math.floor(bitsHashed / 0x100000000);
    const bitsLo = bitsHashed >>> 0;

    buffer[bufferLength++] = 0x80;

    if (bufferLength > BLOCK - 16) {
      for (let i = bufferLength; i < BLOCK; ++i) {
        buffer[i] = 0;
      }
      this.hashBufferWith(state, buffer);
      bufferLength = 0;
    }

    for (let i = bufferLength; i < BLOCK - 8; ++i) {
      buffer[i] = 0;
    }
    const v = new DataView(buffer.buffer, buffer.byteOffset, BLOCK);
    v.setUint32(BLOCK - 8, bitsHi, false);
    v.setUint32(BLOCK - 4, bitsLo, false);
    this.hashBufferWith(state, buffer);

    const out = new Uint8Array(DIGEST_LENGTH);
    const dv = new DataView(out.buffer);
    for (let i = 0; i < 16; ++i) {
      dv.setUint32(i * 4, state[i], false);
    }
    return out;
  }

  private static normalizeKey(secret: SourceData): Uint8Array {
    const key = toUint8Array(secret);
    if (key.byteLength > BLOCK) {
      const h = new Sha512Js();
      h.update(key);
      const padded = new Uint8Array(BLOCK);
      padded.set(h.digestSync());
      return padded;
    }
    const padded = new Uint8Array(BLOCK);
    padded.set(key);
    return padded;
  }

  private hashBuffer(): void {
    this.hashBufferWith(this.state, this.buffer);
  }

  private hashBufferWith(state: Uint32Array, buffer: Uint8Array): void {
    const w = (this.w ??= new Uint32Array(160));

    // Working variables a..h as [hi, lo] pairs (indices 0..15).
    const v = new Uint32Array(16);
    for (let i = 0; i < 16; ++i) {
      v[i] = state[i];
    }

    for (let i = 0; i < 16; ++i) {
      const o = i * 8;
      w[i * 2] = ((buffer[o] << 24) | (buffer[o + 1] << 16) | (buffer[o + 2] << 8) | buffer[o + 3]) >>> 0;
      w[i * 2 + 1] = ((buffer[o + 4] << 24) | (buffer[o + 5] << 16) | (buffer[o + 6] << 8) | buffer[o + 7]) >>> 0;
    }

    for (let i = 16; i < 80; ++i) {
      // s0 = ROTR(w[i-15],1) ^ ROTR(w[i-15],8) ^ SHR(w[i-15],7)
      const g15h = w[(i - 15) * 2];
      const g15l = w[(i - 15) * 2 + 1];
      const s0h = rotrH(g15h, g15l, 1) ^ rotrH(g15h, g15l, 8) ^ shrH(g15h, 7);
      const s0l = rotrL(g15h, g15l, 1) ^ rotrL(g15h, g15l, 8) ^ shrL(g15h, g15l, 7);
      // s1 = ROTR(w[i-2],19) ^ ROTR(w[i-2],61) ^ SHR(w[i-2],6)
      const g2h = w[(i - 2) * 2];
      const g2l = w[(i - 2) * 2 + 1];
      const s1h = rotrH(g2h, g2l, 19) ^ rotrH(g2h, g2l, 61) ^ shrH(g2h, 6);
      const s1l = rotrL(g2h, g2l, 19) ^ rotrL(g2h, g2l, 61) ^ shrL(g2h, g2l, 6);

      // w[i] = w[i-16] + s0 + w[i-7] + s1
      const w7h = w[(i - 7) * 2];
      const w7l = w[(i - 7) * 2 + 1];
      const w16h = w[(i - 16) * 2];
      const w16l = w[(i - 16) * 2 + 1];

      let lo = (w16l >>> 0) + (s0l >>> 0);
      let hi = (w16h >>> 0) + (s0h >>> 0) + (lo > 0xffffffff ? 1 : 0);
      lo = (lo >>> 0) + (w7l >>> 0);
      hi = (hi >>> 0) + (w7h >>> 0) + (lo > 0xffffffff ? 1 : 0);
      lo = (lo >>> 0) + (s1l >>> 0);
      hi = (hi >>> 0) + (s1h >>> 0) + (lo > 0xffffffff ? 1 : 0);
      w[i * 2] = hi >>> 0;
      w[i * 2 + 1] = lo >>> 0;
    }

    let ah = v[0],
      al = v[1],
      bh = v[2],
      bl = v[3],
      ch = v[4],
      cl = v[5],
      dh = v[6],
      dl = v[7],
      eh = v[8],
      el = v[9],
      fh = v[10],
      fl = v[11],
      gh = v[12],
      gl = v[13],
      hh = v[14],
      hl = v[15];

    for (let i = 0; i < 80; ++i) {
      // S1 = ROTR(e,14) ^ ROTR(e,18) ^ ROTR(e,41)
      const s1h = rotrH(eh, el, 14) ^ rotrH(eh, el, 18) ^ rotrH(eh, el, 41);
      const s1l = rotrL(eh, el, 14) ^ rotrL(eh, el, 18) ^ rotrL(eh, el, 41);
      // ch = (e & f) ^ (~e & g)
      const chh = (eh & fh) ^ (~eh & gh);
      const chl = (el & fl) ^ (~el & gl);

      // temp1 = h + S1 + ch + K[i] + w[i]
      let t1l = (hl >>> 0) + (s1l >>> 0);
      let t1h = (hh >>> 0) + (s1h >>> 0) + (t1l > 0xffffffff ? 1 : 0);
      t1l = (t1l >>> 0) + (chl >>> 0);
      t1h = (t1h >>> 0) + (chh >>> 0) + (t1l > 0xffffffff ? 1 : 0);
      t1l = (t1l >>> 0) + (K[i * 2 + 1] >>> 0);
      t1h = (t1h >>> 0) + (K[i * 2] >>> 0) + (t1l > 0xffffffff ? 1 : 0);
      t1l = (t1l >>> 0) + (w[i * 2 + 1] >>> 0);
      t1h = (t1h >>> 0) + (w[i * 2] >>> 0) + (t1l > 0xffffffff ? 1 : 0);

      // S0 = ROTR(a,28) ^ ROTR(a,34) ^ ROTR(a,39)
      const s0h = rotrH(ah, al, 28) ^ rotrH(ah, al, 34) ^ rotrH(ah, al, 39);
      const s0l = rotrL(ah, al, 28) ^ rotrL(ah, al, 34) ^ rotrL(ah, al, 39);
      // maj = (a & b) ^ (a & c) ^ (b & c)
      const majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
      const majl = (al & bl) ^ (al & cl) ^ (bl & cl);

      // temp2 = S0 + maj
      let t2l = (s0l >>> 0) + (majl >>> 0);
      let t2h = (s0h >>> 0) + (majh >>> 0) + (t2l > 0xffffffff ? 1 : 0);
      t2l = t2l >>> 0;
      t2h = t2h >>> 0;

      hh = gh;
      hl = gl;
      gh = fh;
      gl = fl;
      fh = eh;
      fl = el;
      // e = d + temp1
      let el2 = (dl >>> 0) + (t1l >>> 0);
      let eh2 = (dh >>> 0) + (t1h >>> 0) + (el2 > 0xffffffff ? 1 : 0);
      eh = eh2 >>> 0;
      el = el2 >>> 0;
      dh = ch;
      dl = cl;
      ch = bh;
      cl = bl;
      bh = ah;
      bl = al;
      // a = temp1 + temp2
      let al2 = (t1l >>> 0) + (t2l >>> 0);
      let ah2 = (t1h >>> 0) + (t2h >>> 0) + (al2 > 0xffffffff ? 1 : 0);
      ah = ah2 >>> 0;
      al = al2 >>> 0;
    }

    addInto(state, 0, ah, al);
    addInto(state, 1, bh, bl);
    addInto(state, 2, ch, cl);
    addInto(state, 3, dh, dl);
    addInto(state, 4, eh, el);
    addInto(state, 5, fh, fl);
    addInto(state, 6, gh, gl);
    addInto(state, 7, hh, hl);
  }
}

/**
 * state[slot] (as a [hi,lo] pair at indices 2*slot, 2*slot+1) += [vh, vl].
 */
function addInto(state: Uint32Array, slot: number, vh: number, vl: number): void {
  const i = slot * 2;
  const lo = (state[i + 1] >>> 0) + (vl >>> 0);
  const hi = (state[i] >>> 0) + (vh >>> 0) + (lo > 0xffffffff ? 1 : 0);
  state[i] = hi >>> 0;
  state[i + 1] = lo >>> 0;
}

/** High word of ROTR([hi,lo], n), 1 <= n <= 63. */
function rotrH(hi: number, lo: number, n: number): number {
  if (n < 32) {
    return ((hi >>> n) | (lo << (32 - n))) >>> 0;
  }
  if (n === 32) {
    return lo >>> 0;
  }
  return ((lo >>> (n - 32)) | (hi << (64 - n))) >>> 0;
}

/** Low word of ROTR([hi,lo], n), 1 <= n <= 63. */
function rotrL(hi: number, lo: number, n: number): number {
  if (n < 32) {
    return ((lo >>> n) | (hi << (32 - n))) >>> 0;
  }
  if (n === 32) {
    return hi >>> 0;
  }
  return ((hi >>> (n - 32)) | (lo << (64 - n))) >>> 0;
}

/** High word of SHR([hi,lo], n), 1 <= n <= 63. */
function shrH(hi: number, n: number): number {
  if (n < 32) {
    return hi >>> n;
  }
  return 0;
}

/** Low word of SHR([hi,lo], n), 1 <= n <= 63. */
function shrL(hi: number, lo: number, n: number): number {
  if (n < 32) {
    return ((lo >>> n) | (hi << (32 - n))) >>> 0;
  }
  if (n === 32) {
    return hi >>> 0;
  }
  return hi >>> (n - 32);
}
