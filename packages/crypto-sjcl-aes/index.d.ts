import {BitArray} from '@aws/crypto-sjcl-bitArray';

declare class aes {
    /**
     * Schedule out an AES key for both encryption and decryption.  This
     * is a low-level class.  Use a cipher mode to do bulk encryption.
     *
     * @constructor
     * @param key The key as an array of 4, 6 or 8 words.
     */
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
