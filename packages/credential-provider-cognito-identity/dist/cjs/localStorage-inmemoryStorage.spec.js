"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localStorage_1 = require("./localStorage");
const InMemoryStorage_1 = require("./InMemoryStorage");
describe("localStorage", () => {
    // set store and restore indexedDB and localStorage before and after the test
    let indexDB = undefined;
    let localStorage = undefined;
    beforeEach(() => {
        if (typeof self === "object")
            indexDB = self.indexedDB;
        if (typeof window === "object")
            localStorage = window.localStorage;
    });
    afterEach(() => {
        if (typeof self === "object")
            defineProperty(self, "indexedDB", indexDB);
        if (typeof window === "object")
            defineProperty(window, "localStorage", localStorage);
    });
    it("should return an in-memory storage implementation when indexDB or localStorage is not available", () => {
        defineProperty(self, "indexedDB", null);
        defineProperty(window, "localStorage", null);
        expect(localStorage_1.localStorage()).toBeInstanceOf(InMemoryStorage_1.InMemoryStorage);
    });
});
const defineProperty = (object, name, value) => {
    Object.defineProperty(object, name, {
        value,
        configurable: true
    });
};
//# sourceMappingURL=localStorage-inmemoryStorage.spec.js.map