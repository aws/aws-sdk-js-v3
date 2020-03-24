import { Storage } from "./Storage";
export declare class InMemoryStorage implements Storage {
    private store;
    constructor(store?: {
        [key: string]: string;
    });
    getItem(key: string): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
