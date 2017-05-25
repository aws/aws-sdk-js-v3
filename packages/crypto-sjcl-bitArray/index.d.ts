export type BitArray = Array<number>;

/**
 * Array slices in units of bits.
 * @param a The array to slice.
 * @param bstart The offset to the start of the slice, in bits.
 * @param bend The offset to the end of the slice, in bits.  If this is undefined,
 * slice until the end of the array.
 * @return The requested slice.
 */
export function bitSlice(a: BitArray, bstart: number, bend?: number): BitArray;

/**
 * Extract a number packed into a bit array.
 * @param a The array to slice.
 * @param bstart The offset to the start of the slice, in bits.
 * @param blength The length of the number to extract.
 * @return The requested slice.
 */
export function extract(a: BitArray, bstart: number, blength: number): number;

/**
 * Concatenate two bit arrays.
 * @param a1 The first array.
 * @param a2 The second array.
 * @return The concatenation of a1 and a2.
 */
export function concat(a1: BitArray, a2: BitArray): BitArray;

/**
 * Find the length of an array of bits.
 * @param a The array.
 * @return The length of a, in bits.
 */
export function bitLength(a: BitArray): number;

/**
 * Truncate an array.
 * @param a The array.
 * @param len The length to truncate to, in bits.
 * @return A new array, truncated to len bits.
 */
export function clamp(a: BitArray, len: number): BitArray;

/**
 * Make a partial word for a bit array.
 * @param len The number of bits in the word.
 * @param x The bits.
 * @param _end Pass 1 if x has already been shifted to the high side.
 * @return The partial word.
 */
export function partial(len: number, x: number, _end?: number): number;

/**
 * Get the number of bits used by a partial word.
 * @param x The partial word.
 * @return The number of bits used by the partial word.
 */
export function getPartial(x: number): number;

/**
 * Compare two arrays for equality in a predictable amount of time.
 * @param a The first array.
 * @param b The second array.
 * @return true if a == b; false otherwise.
 */
export function equal(a: BitArray, b: BitArray): boolean;

/** Shift an array right.
 * @param a The array to shift.
 * @param shift The number of bits to shift.
 * @param carry A byte to carry in
 * @param out An array to prepend to the output.
 * @private
 */
export function _shiftRight(
    a: BitArray,
    shift: number,
    carry?: number,
    out?: BitArray
): BitArray;

/** xor a block of 4 words together.
 * @private
 */
export function _xor4(x: BitArray, y: BitArray): BitArray;

/** byteswap a word array inplace.
 * (does not handle partial words)
 * @param a word array
 * @return byteswapped array
 */
export function byteswapM(a: BitArray): BitArray;
