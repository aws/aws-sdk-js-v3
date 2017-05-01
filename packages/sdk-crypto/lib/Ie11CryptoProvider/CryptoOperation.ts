import {Key} from "./Key";

type EventHandler = (event: Event) => void;

export interface CryptoOperation {
    readonly algorithm: string;
    readonly key: Key;
    onabort: EventHandler;
    oncomplete: EventHandler;
    onerror: EventHandler;
    onprogress: EventHandler;
    readonly result: ArrayBuffer|undefined;

    abort(): void;
    finish(): void;
    process(buffer: ArrayBufferView): void;
}
