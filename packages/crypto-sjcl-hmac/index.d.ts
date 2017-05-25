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

    reset(): void;

    update(data: BitArray|string): void;

    digest(): BitArray;
}

export = hmac;
