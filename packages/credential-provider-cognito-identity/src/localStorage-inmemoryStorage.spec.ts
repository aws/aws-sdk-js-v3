import { InMemoryStorage } from "./InMemoryStorage";
import { localStorage as storage } from "./localStorage";

describe("localStorage", () => {
  // set store and restore indexedDB and localStorage before and after the test
  let indexDB: any = undefined;
  let localStorage: any = undefined;
  beforeEach(() => {
    if (typeof self === "object") indexDB = self.indexedDB;
    if (typeof window === "object") localStorage = window.localStorage;
  });
  afterEach(() => {
    if (typeof self === "object") defineProperty(self, "indexedDB", indexDB);
    if (typeof window === "object") defineProperty(window, "localStorage", localStorage);
  });
  it("should return an in-memory storage implementation when indexDB or localStorage is not available", () => {
    defineProperty(self, "indexedDB", null);
    defineProperty(window, "localStorage", null);
    expect(storage()).toBeInstanceOf(InMemoryStorage);
  });
});

const defineProperty = (object: any, name: string, value: any) => {
  Object.defineProperty(object, name, {
    value,
    configurable: true,
  });
};
