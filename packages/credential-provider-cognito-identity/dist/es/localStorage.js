import { IndexedDbStorage } from "./IndexedDbStorage";
import { InMemoryStorage } from "./InMemoryStorage";
var inMemoryStorage = new InMemoryStorage();
export function localStorage() {
    if (typeof self === "object" && self.indexedDB) {
        return new IndexedDbStorage();
    }
    if (typeof window === "object" && window.localStorage) {
        return window.localStorage;
    }
    return inMemoryStorage;
}
//# sourceMappingURL=localStorage.js.map