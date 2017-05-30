import {BitArray} from '@aws/crypto-sjcl-bitArray';

declare class aes {
    constructor(key: BitArray);

    /**
     * Encrypt an array of 4 big-endian words.
     * @param data The plaintext.
     * @return The ciphertext.
     */
    encrypt(data: BitArray): BitArray;

    /**
     * Decrypt an array of 4 big-endian words.
     * @param data The ciphertext.
     * @return The plaintext.
     */
    decrypt(data: BitArray): BitArray;
}

export = aes;
