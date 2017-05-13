import {Key} from "./Key";

export interface KeyOperation {
    oncomplete: (event: Event) => void;
    onerror: (event: Event) => void;
    readonly result: Key|undefined;
}
