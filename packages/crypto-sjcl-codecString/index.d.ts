import {BitArray} from '@aws/crypto-sjcl-bitArray';

/** Convert from a bitArray to a UTF-8 string. */
export function fromBits(arr: BitArray): string;

/** Convert from a UTF-8 string to a bitArray. */
export function toBits(str: string): BitArray;
