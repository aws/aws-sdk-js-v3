/**
 * @jest-environment jsdom
 */
import { IndexedDbStorage } from "./IndexedDbStorage";
import { localStorage } from "./localStorage";

describe("localStorage", () => {
  const storageAtInit: Storage | undefined = window?.localStorage;
  const idbAtInit: IDBFactory | undefined = self?.indexedDB;

  beforeEach(() => {
    if (window) {
      Object.defineProperty(window, "localStorage", {
        writable: true,
        configurable: true,
        enumerable: true,
        value: undefined,
      });
    }

    if (self) {
      (self.indexedDB as any) = undefined;
    }
  });

  afterEach(() => {
    if (window) {
      Object.defineProperty(window, "localStorage", {
        writable: true,
        configurable: true,
        enumerable: true,
        value: storageAtInit,
      });
    }

    if (self) {
      (self.indexedDB as any) = idbAtInit;
    }
  });

  it("should return an IndexedDB-backed cache if possible", () => {
    if (!self) {
      (self as any) = {};
    }
    (self.indexedDB as any) = {
      open() {
        return {};
      },
    };

    expect(localStorage()).toBeInstanceOf(IndexedDbStorage);
  });

  it("should return window.localStorage if IndexedDB is undefined but localStorage is available", () => {
    if (!window) {
      (window as any) = {};
    }
    (window.localStorage as any) = {};

    expect(localStorage()).toBe(window.localStorage);
  });
});
