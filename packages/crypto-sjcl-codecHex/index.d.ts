import {BitArray} from '@aws/crypto-sjcl-bitArray';

/** Convert from a bitArray to a hex string. */
export function fromBits(arr: BitArray): string;

/** Convert from a hex string to a bitArray. */
export function toBits(str: string): BitArray;
