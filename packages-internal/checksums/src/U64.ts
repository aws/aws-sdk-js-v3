/**
 * @internal
 */
export type u32 = number;

/**
 * Larger (left) 32 bits of a u64.
 * @internal
 */
export type u64_l = u32;

/**
 * Low (right) 32 bits of a u64.
 * @internal
 */
export type u64_r = u32;

/**
 * @internal
 */
export type index = number;
/**
 * @internal
 */
export type distance = number;
/**
 * @internal
 */
export type size = number;

const l16 = 0b1_0000_0000_0000_0000;

/**
 * 8-bit mask.
 * @internal
 */
export const m8 = 0b1111_1111;
/**
 * 16-bit mask.
 * @internal
 */
export const m16 = 0b1111_1111_1111_1111;
/**
 * 32-bit mask.
 * @internal
 */
export const m32 = 0b11111111_11111111_11111111_11111111;

/**
 * Fixed-length allocation of u64 values stored as pairs of u32 in a Uint32Array.
 * Slot i occupies indices [i*2, i*2+1] where [0]=high bits, [1]=low bits.
 *
 * @internal
 */
export class U64 extends Uint32Array {
  private constructor(buffer: ArrayBuffer) {
    super(buffer);
  }

  /**
   * Creates a U64
   *
   * @param size - number of U32 pairs.
   */
  public static create(size: index): U64 {
    return new U64(new ArrayBuffer(size * 2 * 4));
  }

  /**
   * Set pair at slot i.
   */
  public write(i: index, v0: u64_l, v1: u64_r): U64 {
    i *= 2;
    this[i] = v0;
    this[i + 1] = v1;
    return this;
  }

  /**
   * Copy pair from slot source to target.
   */
  public copy(source: index, target: index): U64 {
    source *= 2;
    target *= 2;

    this[target] = this[source];
    this[target + 1] = this[source + 1];
    return this;
  }

  /**
   * Add in-place at [i].
   */
  public add(i: index, v0: u64_l, v1: u64_r): U64 {
    i *= 2;
    const j = i + 1;

    const j0 = this[j];
    const j1 = (j0 + v1) >>> 0;

    this[i] = (this[i] + v0 + (j1 < j0 ? 1 : 0)) >>> 0;
    this[j] = j1;
    return this;
  }

  /**
   * Multiply in-place at [i].
   */
  public multiply(i: index, v0: u64_l, v1: u64_r): U64 {
    i *= 2;
    const i0 = this[i];
    const i1 = this[i + 1];

    // 16-bit components.
    const a0 = i1 & m16;
    const a1 = i1 >>> 16;
    const a2 = i0 & m16;
    const a3 = i0 >>> 16;

    const b0 = v1 & m16;
    const b1 = v1 >>> 16;
    const b2 = v0 & m16;
    const b3 = v0 >>> 16;

    const c0 = a0 * b0;
    const c1 = ((c0 / l16) | 0) + a1 * b0 + a0 * b1;
    const c2 = ((c1 / l16) | 0) + a2 * b0 + a1 * b1 + a0 * b2;
    const c3 = ((c2 / l16) | 0) + a3 * b0 + a2 * b1 + a1 * b2 + a0 * b3;

    this[i] = (((c3 & m16) << 16) | (c2 & m16)) >>> 0;
    this[i + 1] = (((c1 & m16) << 16) | (c0 & m16)) >>> 0;
    return this;
  }

  /**
   * [i] += a * b.
   */
  public addProduct(i: index, a: u32, b: u32): U64 {
    i *= 2;
    const a0 = b & m16;
    const a1 = b >>> 16;
    const b0 = a & m16;
    const b1 = a >>> 16;

    const c0 = a0 * b0;
    const c1 = ((c0 / l16) | 0) + a1 * b0 + a0 * b1;
    const c2 = ((c1 / l16) | 0) + a1 * b1;

    const lo = (((c1 & m16) << 16) | (c0 & m16)) >>> 0;
    const hi = c2 >>> 0;

    const prev = this[i + 1];
    const newLo = (prev + lo) >>> 0;
    this[i] = (this[i] + hi + (newLo < prev ? 1 : 0)) >>> 0;
    this[i + 1] = newLo;
    return this;
  }

  /**
   * 64×64→128-bit multiplication.
   * Multiplies slot `i` by slot `j`, stores high 64 bits in `t` and low 64 bits in `u`.
   */
  public multiply128(i: index, j: index, t: index, u: index): U64 {
    i *= 2;
    j *= 2;
    t *= 2;
    u *= 2;

    const a0 = this[i + 1] & m16;
    const a1 = this[i + 1] >>> 16;
    const a2 = this[i] & m16;
    const a3 = this[i] >>> 16;

    const b0 = this[j + 1] & m16;
    const b1 = this[j + 1] >>> 16;
    const b2 = this[j] & m16;
    const b3 = this[j] >>> 16;

    const c0 = a0 * b0;
    const c1 = ((c0 / l16) | 0) + a1 * b0 + a0 * b1;
    const c2 = ((c1 / l16) | 0) + a2 * b0 + a1 * b1 + a0 * b2;
    const c3 = ((c2 / l16) | 0) + a3 * b0 + a2 * b1 + a1 * b2 + a0 * b3;
    const c4 = ((c3 / l16) | 0) + a3 * b1 + a2 * b2 + a1 * b3;
    const c5 = ((c4 / l16) | 0) + a3 * b2 + a2 * b3;
    const c6 = ((c5 / l16) | 0) + a3 * b3;
    const c7 = (c6 / l16) | 0;

    this[u] = (((c3 & m16) << 16) | (c2 & m16)) >>> 0;
    this[u + 1] = (((c1 & m16) << 16) | (c0 & m16)) >>> 0;

    this[t] = (((c7 & m16) << 16) | (c6 & m16)) >>> 0;
    this[t + 1] = (((c5 & m16) << 16) | (c4 & m16)) >>> 0;
    return this;
  }

  /**
   * Subtract in-place at [i].
   */
  public subtract(i: index, v0: u64_l, v1: u64_r): U64 {
    i *= 2;
    const i1 = this[i + 1];
    this[i] = (this[i] - v0 - (i1 < v1 ? 1 : 0)) >>> 0;
    this[i + 1] = (i1 - v1) >>> 0;
    return this;
  }

  /**
   * Left shift in-place at [i].
   */
  public left(i: index, places: distance): U64 {
    i *= 2;
    if (places <= 0) {
    } else if (places < 32) {
      const v0 = this[i];
      this[i] = ((v0 << places) >>> 0) | (this[i + 1] >>> (32 - places));
      this[i + 1] = (this[i + 1] << places) >>> 0;
    } else if (places === 32) {
      this[i] = this[i + 1];
      this[i + 1] = 0;
    } else if (places > 32) {
      this[i] = (this[i + 1] << (places - 32)) >>> 0;
      this[i + 1] = 0;
    }
    return this;
  }

  /**
   * Rotate left (circular shift) at [i].
   */
  public rotateLeft(i: index, places: distance): U64 {
    i *= 2;
    const i0 = this[i];
    const i1 = this[i + 1];
    if (places === 0 || places === 64) {
    } else if (places < 32) {
      this[i] = ((i0 << places) >>> 0) | (i1 >>> (32 - places));
      this[i + 1] = ((i1 << places) >>> 0) | (i0 >>> (32 - places));
    } else if (places === 32) {
      this[i] = i1;
      this[i + 1] = i0;
    } else {
      const p = places - 32;
      this[i] = ((i1 << p) >>> 0) | (i0 >>> (32 - p));
      this[i + 1] = ((i0 << p) >>> 0) | (i1 >>> (32 - p));
    }
    return this;
  }

  /**
   * Right shift in-place at [i].
   */
  public right(i: index, places: distance): U64 {
    i *= 2;
    if (places <= 0) {
    } else if (places < 32) {
      this[i + 1] = (this[i + 1] >>> places) | ((this[i] << (32 - places)) >>> 0);
      this[i] = this[i] >>> places;
    } else if (places === 32) {
      this[i + 1] = this[i];
      this[i] = 0;
    } else if (places > 32) {
      this[i + 1] = this[i] >>> (places - 32);
      this[i] = 0;
    }
    return this;
  }

  /**
   * XOR in-place at [i].
   */
  public xor(i: index, v0: u64_l, v1: u64_r): U64 {
    i *= 2;
    this[i] ^= v0;
    this[i + 1] ^= v1;
    return this;
  }

  public toBytes(i: index): Uint8Array {
    i *= 2;
    const i0 = this[i];
    const i1 = this[i + 1];

    return new Uint8Array([
      i0 >>> 24,
      (i0 >>> 16) & m8,
      (i0 >>> 8) & m8,
      i0 & m8,
      i1 >>> 24,
      (i1 >>> 16) & m8,
      (i1 >>> 8) & m8,
      i1 & m8,
    ]);
  }

  /**
   * Read the high 32 bits of slot i.
   */
  public hi(i: index): u64_l {
    return this[i * 2];
  }

  /**
   * Read the low 32 bits of slot i.
   */
  public lo(i: index): u64_r {
    return this[i * 2 + 1];
  }
}
