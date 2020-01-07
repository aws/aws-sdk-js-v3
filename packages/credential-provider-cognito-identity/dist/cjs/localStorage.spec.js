"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const localStorage_1 = require("./localStorage");
const IndexedDbStorage_1 = require("./IndexedDbStorage");
describe("localStorage", () => {
    const storageAtInit = window === null || window === void 0 ? void 0 : window.localStorage;
    const idbAtInit = self === null || self === void 0 ? void 0 : self.indexedDB;
    beforeEach(() => {
        if (window) {
            window.localStorage = undefined;
        }
        if (self) {
            self.indexedDB = undefined;
        }
    });
    afterEach(() => {
        if (window) {
            window.localStorage = storageAtInit;
        }
        if (self) {
            self.indexedDB = idbAtInit;
        }
    });
    it("should return an IndexedDB-backed cache if possible", () => {
        if (!self) {
            self = {};
        }
        self.indexedDB = {
            open() {
                return {};
            }
        };
        expect(localStorage_1.localStorage()).toBeInstanceOf(IndexedDbStorage_1.IndexedDbStorage);
    });
    it("should return window.localStorage if IndexedDB is undefined but localStorage is available", () => {
        if (!window) {
            window = {};
        }
        window.localStorage = {};
        expect(localStorage_1.localStorage()).toBe(window.localStorage);
    });
});
//# sourceMappingURL=localStorage.spec.js.map