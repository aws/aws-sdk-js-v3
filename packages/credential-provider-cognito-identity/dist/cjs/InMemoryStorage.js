"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InMemoryStorage {
    constructor(store = {}) {
        this.store = store;
    }
    getItem(key) {
        if (key in this.store) {
            return this.store[key];
        }
        return null;
    }
    removeItem(key) {
        delete this.store[key];
    }
    setItem(key, value) {
        this.store[key] = value;
    }
}
exports.InMemoryStorage = InMemoryStorage;
//# sourceMappingURL=InMemoryStorage.js.map