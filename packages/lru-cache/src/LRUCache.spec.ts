import { LRUCache } from "./LRUCache";
import { getPointerArrayConstructor } from "./utils/getPointerArrayConstructor";

jest.mock("./utils/getPointerArrayConstructor");

describe(LRUCache.name, () => {
  beforeEach(() => {
    (getPointerArrayConstructor as jest.Mock).mockReturnValue(Array);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("should throw if given an invalid capacity", () => {
    [undefined, {}, -1, true, 1.01, Infinity].forEach((capacity) => {
      it(`invalid capacity: ${capacity}`, () => {
        expect(() => {
          // @ts-ignore
          new LRUCache(capacity);
        }).toThrow("@aws-sdk/lru-cache: capacity should be a finite positive integer.");
      });
    });
  });

  describe("should create LRUCache for valid capacity", () => {
    it.each([1, 5, 1000, Math.pow(2, 8) - 1, Math.pow(2, 16) - 1, Math.pow(2, 32) - 1])(
      "valid capacity: %d",
      (capacity) => {
        const cache = new LRUCache<string, number>(capacity);
        expect(cache.capacity).toStrictEqual(capacity);
      }
    );
  });

  it("drops least recently used value when LRUCache is full", () => {
    const cache = new LRUCache<string, number>(2);
    expect(cache.capacity).toStrictEqual(2);

    cache.set("one", 1);
    expect(cache.size).toStrictEqual(1);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(false);
    expect(cache.has("three")).toStrictEqual(false);

    cache.set("two", 2);
    expect(cache.size).toStrictEqual(2);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(true);
    expect(cache.has("three")).toStrictEqual(false);

    cache.set("three", 3);
    expect(cache.size).toStrictEqual(2);
    expect(cache.has("one")).toStrictEqual(false);
    expect(cache.has("two")).toStrictEqual(true);
    expect(cache.has("three")).toStrictEqual(true);
  });

  it("clears LRUCache", () => {
    const cache = new LRUCache<string, number>(2);
    expect(cache.capacity).toStrictEqual(2);

    cache.set("one", 1);
    cache.set("two", 2);
    expect(cache.size).toStrictEqual(2);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(true);

    cache.clear();
    expect(cache.size).toStrictEqual(0);
    expect(cache.has("one")).toStrictEqual(false);
    expect(cache.has("two")).toStrictEqual(false);
  });

  it("peek does not modify ordering of the key", () => {
    const cache = new LRUCache<string, number>(2);
    expect(cache.capacity).toStrictEqual(2);

    cache.set("one", 1);
    cache.set("two", 2);

    // Does not modify ordering of the key, and will be evicted when cache is full.
    cache.peek("one");

    cache.set("three", 3);
    expect(cache.has("one")).toStrictEqual(false);
    expect(cache.has("two")).toStrictEqual(true);
    expect(cache.has("three")).toStrictEqual(true);
  });

  it("get splays key to the top", () => {
    const cache = new LRUCache<string, number>(2);
    expect(cache.capacity).toStrictEqual(2);

    cache.set("one", 1);
    cache.set("two", 2);

    // Does modify ordering of the key, and "two" will be evicted when cache is full.
    cache.get("one");

    cache.set("three", 3);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(false);
    expect(cache.has("three")).toStrictEqual(true);
  });

  it("delete removes key from cache", () => {
    const cache = new LRUCache<string, number>(3);
    expect(cache.capacity).toStrictEqual(3);

    cache.set("one", 1);
    cache.set("two", 2);
    cache.set("three", 3);
    expect(cache.size).toStrictEqual(3);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(true);
    expect(cache.has("three")).toStrictEqual(true);

    // Delete head
    cache.delete("three");
    expect(cache.size).toStrictEqual(2);
    expect(cache.has("three")).toStrictEqual(false);

    cache.set("three", 3);
    expect(cache.has("three")).toStrictEqual(true);

    // Delete node which is neither head or tail
    cache.delete("two");
    expect(cache.size).toStrictEqual(2);
    expect(cache.has("two")).toStrictEqual(false);

    // Delete tail
    cache.delete("one");
    expect(cache.size).toStrictEqual(1);
    expect(cache.has("one")).toStrictEqual(false);

    // Delete the only key
    cache.delete("three");
    expect(cache.size).toStrictEqual(0);

    cache.set("one", 1);
    cache.set("two", 2);
    cache.set("three", 3);
    expect(cache.size).toStrictEqual(3);
    expect(cache.has("one")).toStrictEqual(true);
    expect(cache.has("two")).toStrictEqual(true);
    expect(cache.has("three")).toStrictEqual(true);
  });
});
