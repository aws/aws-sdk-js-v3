import {BitArray} from '@aws/crypto-sjcl-bitArray';

declare class sha256 {
    /**
     * Reset the hash state.
     * @return this
     */
    reset(): this;

    /**
     * Input several words to the hash.
     * @param data the data to hash.
     * @return this
     */
    update(data: BitArray|string): void;

    /**
     * Complete hashing and output the hash value.
     * @return The hash value, an array of 8 big-endian words.
     */
    finalize(): BitArray;

    /**
     * Hash a string or an array of words.
     * @param data the data to hash.
     * @return The hash value, an array of 16 big-endian words.
     */
    static hash(data: BitArray|string): BitArray;
}

export = sha256;
