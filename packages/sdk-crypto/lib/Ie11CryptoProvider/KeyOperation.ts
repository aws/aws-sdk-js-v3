import {Key} from "./Key";

type EventHandler = (event: Event) => void;

export interface KeyOperation {
    oncomplete: EventHandler;
    onerror: EventHandler;
    readonly result: Key|undefined;
}
