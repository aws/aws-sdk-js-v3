import { localStorage } from "./localStorage";
import { IndexedDbStorage } from "./IndexedDbStorage";
describe("localStorage", function () {
    var storageAtInit = window === null || window === void 0 ? void 0 : window.localStorage;
    var idbAtInit = self === null || self === void 0 ? void 0 : self.indexedDB;
    beforeEach(function () {
        if (window) {
            window.localStorage = undefined;
        }
        if (self) {
            self.indexedDB = undefined;
        }
    });
    afterEach(function () {
        if (window) {
            window.localStorage = storageAtInit;
        }
        if (self) {
            self.indexedDB = idbAtInit;
        }
    });
    it("should return an IndexedDB-backed cache if possible", function () {
        if (!self) {
            self = {};
        }
        self.indexedDB = {
            open: function () {
                return {};
            }
        };
        expect(localStorage()).toBeInstanceOf(IndexedDbStorage);
    });
    it("should return window.localStorage if IndexedDB is undefined but localStorage is available", function () {
        if (!window) {
            window = {};
        }
        window.localStorage = {};
        expect(localStorage()).toBe(window.localStorage);
    });
});
//# sourceMappingURL=localStorage.spec.js.map