export = sjcl;
export as namespace sjcl;

declare namespace sjcl {
    export type BitArray = Array<number>;

    export let random: Random;

    export namespace codec {
        interface Codec<T> {
            fromBits(bits: BitArray): T;
            toBits(value: T): BitArray;
        }

        export let arrayBuffer: Codec<ArrayBuffer>;
        export let utf8String: Codec<string>;
    }

    export namespace hash {
        interface Hash {
            hash(data: BitArray): BitArray;
        }

        export let sha256: Hash;
    }

    export namespace misc {
        export class hmac {
            constructor(key: BitArray);
            update(data: string): void;
            update(data: BitArray): void;
            digest(): BitArray;
        }
    }

    interface Random {
        randomWords(words: number, paranoia?: number): BitArray;
        isReady(paranoia?: number): boolean;
        getProgress(paranoia?: number): number;
        startCollectors(): void;
        stopCollectors(): void;
    }
}