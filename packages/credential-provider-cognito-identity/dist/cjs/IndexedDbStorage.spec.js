"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IndexedDbStorage_1 = require("./IndexedDbStorage");
describe("IndexedDbStorage", () => {
    const testFunc = typeof indexedDB !== "undefined" ? it : xit;
    testFunc("should remember key-value pairs", async () => {
        const storage = new IndexedDbStorage_1.IndexedDbStorage();
        await storage.setItem("foo", "bar");
        expect(await storage.getItem("foo")).toBe("bar");
    });
    testFunc("should return `null` when no item is found for a key", async () => {
        const storage = new IndexedDbStorage_1.IndexedDbStorage();
        expect(await storage.getItem("foo")).toBe(null);
    });
    testFunc("should allow keys to be removed from storage", async () => {
        const storage = new IndexedDbStorage_1.IndexedDbStorage();
        await storage.setItem("foo", "bar");
        await storage.removeItem("foo");
        expect(await storage.getItem("foo")).toBe(null);
    });
});
//# sourceMappingURL=IndexedDbStorage.spec.js.map