var InMemoryStorage = /** @class */ (function () {
    function InMemoryStorage(store) {
        if (store === void 0) { store = {}; }
        this.store = store;
    }
    InMemoryStorage.prototype.getItem = function (key) {
        if (key in this.store) {
            return this.store[key];
        }
        return null;
    };
    InMemoryStorage.prototype.removeItem = function (key) {
        delete this.store[key];
    };
    InMemoryStorage.prototype.setItem = function (key, value) {
        this.store[key] = value;
    };
    return InMemoryStorage;
}());
export { InMemoryStorage };
//# sourceMappingURL=InMemoryStorage.js.map