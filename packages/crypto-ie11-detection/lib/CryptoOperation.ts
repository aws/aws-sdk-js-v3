import {Key} from "./Key";

export interface CryptoOperation {
    readonly algorithm: string;
    readonly key: Key;
    onabort: (event: Event) => void;
    oncomplete: (event: Event) => void;
    onerror: (event: Event) => void;
    onprogress: (event: Event) => void;
    readonly result: ArrayBuffer|undefined;

    abort(): void;
    finish(): void;
    process(buffer: ArrayBufferView): void;
}
