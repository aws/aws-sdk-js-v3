import { InMemoryStorage } from "./InMemoryStorage";
describe("InMemoryStorage", function () {
    it("should remember key-value pairs", function () {
        var storage = new InMemoryStorage();
        storage.setItem("foo", "bar");
        expect(storage.getItem("foo")).toBe("bar");
    });
    it("should return `null` when no item is found for a key", function () {
        var storage = new InMemoryStorage();
        expect(storage.getItem("foo")).toBe(null);
    });
    it("should allow keys to be removed from storage", function () {
        var storage = new InMemoryStorage();
        storage.setItem("foo", "bar");
        storage.removeItem("foo");
        expect(storage.getItem("foo")).toBe(null);
    });
    it("should allow the injection of pre-populated storage", function () {
        var storage = new InMemoryStorage({ foo: "bar" });
        expect(storage.getItem("foo")).toBe("bar");
    });
});
//# sourceMappingURL=InMemoryStorage.spec.js.map