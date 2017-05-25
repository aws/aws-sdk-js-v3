import {BitArray} from '@aws/crypto-sjcl-bitArray';

/** Convert from a bitArray to an ArrayBuffer.
 * Will default to 8byte padding if padding is undefined*/
export function fromBits(
    arr: BitArray,
    padding?: number,
    padding_count?: number
): ArrayBuffer;

/** Convert from an ArrayBuffer to a bitArray. */
export function toBits(buffer: ArrayBuffer): BitArray;
