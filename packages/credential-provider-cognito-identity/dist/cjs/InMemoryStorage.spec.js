"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InMemoryStorage_1 = require("./InMemoryStorage");
describe("InMemoryStorage", () => {
    it("should remember key-value pairs", () => {
        const storage = new InMemoryStorage_1.InMemoryStorage();
        storage.setItem("foo", "bar");
        expect(storage.getItem("foo")).toBe("bar");
    });
    it("should return `null` when no item is found for a key", () => {
        const storage = new InMemoryStorage_1.InMemoryStorage();
        expect(storage.getItem("foo")).toBe(null);
    });
    it("should allow keys to be removed from storage", () => {
        const storage = new InMemoryStorage_1.InMemoryStorage();
        storage.setItem("foo", "bar");
        storage.removeItem("foo");
        expect(storage.getItem("foo")).toBe(null);
    });
    it("should allow the injection of pre-populated storage", () => {
        const storage = new InMemoryStorage_1.InMemoryStorage({ foo: "bar" });
        expect(storage.getItem("foo")).toBe("bar");
    });
});
//# sourceMappingURL=InMemoryStorage.spec.js.map