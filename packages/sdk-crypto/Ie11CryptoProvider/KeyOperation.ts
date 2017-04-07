import Key from "./Key";

type EventHandler = (event: Event) => void;

interface KeyOperation {
    oncomplete: EventHandler;
    onerror: EventHandler;
    readonly result: Key|undefined;
}

export default KeyOperation;
