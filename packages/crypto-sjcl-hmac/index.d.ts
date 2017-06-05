import {BitArray} from '@aws/crypto-sjcl-bitArray';

/**
 * HMAC with the specified hash function.
 */
declare class hmac {

    /**
     * @param key the key for HMAC.
     * @param Hash The hash function to use.
     */
    constructor(key: BitArray, Hash?: any);

    /**
     * HMAC with the specified hash function. Alias of this::mac
     * @param data The data to mac.
     */
    encrypt(data: BitArray|string): BitArray;

    /**
     * HMAC with the specified hash function.
     * @param data The data to mac.
     */
    mac(data: BitArray|string): BitArray;

    /**
     * Discard any incremental hash and reset the HMAC to its original state.
     */
    reset(): void;

    /**
     * Updates an incremental hash with the provided data.
     * @param data The data to hash.
     */
    update(data: BitArray|string): void;

    /**
     * Finalize the hash and return the calculated value.
     */
    digest(): BitArray;
}

export = hmac;
