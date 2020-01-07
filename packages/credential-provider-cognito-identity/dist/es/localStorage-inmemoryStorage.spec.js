import { localStorage as storage } from "./localStorage";
import { InMemoryStorage } from "./InMemoryStorage";
describe("localStorage", function () {
    // set store and restore indexedDB and localStorage before and after the test
    var indexDB = undefined;
    var localStorage = undefined;
    beforeEach(function () {
        if (typeof self === "object")
            indexDB = self.indexedDB;
        if (typeof window === "object")
            localStorage = window.localStorage;
    });
    afterEach(function () {
        if (typeof self === "object")
            defineProperty(self, "indexedDB", indexDB);
        if (typeof window === "object")
            defineProperty(window, "localStorage", localStorage);
    });
    it("should return an in-memory storage implementation when indexDB or localStorage is not available", function () {
        defineProperty(self, "indexedDB", null);
        defineProperty(window, "localStorage", null);
        expect(storage()).toBeInstanceOf(InMemoryStorage);
    });
});
var defineProperty = function (object, name, value) {
    Object.defineProperty(object, name, {
        value: value,
        configurable: true
    });
};
//# sourceMappingURL=localStorage-inmemoryStorage.spec.js.map