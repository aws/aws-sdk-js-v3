import { LRUCache } from "mnemonist";

import { Endpoint } from "./Endpoint";
import { EndpointCache } from "./EndpointCache";

jest.mock("mnemonist");

describe(EndpointCache.name, () => {
  let endpointCache;
  const capacity = 100;
  const key = "key";

  const now = Date.now();
  const set = jest.fn();
  const get = jest.fn();
  const peek = jest.fn();
  const has = jest.fn();
  const clear = jest.fn();

  const mockEndpoints = [
    { Address: "addressA", CachePeriodInMinutes: 1 },
    { Address: "addressB", CachePeriodInMinutes: 2 },
  ];

  const getEndpointsWithExpiry = (endpoints: Endpoint[]) =>
    endpoints.map(({ Address = "", CachePeriodInMinutes = 1 }) => ({
      Address,
      Expires: now + CachePeriodInMinutes * 60 * 1000,
    }));

  beforeEach(() => {
    ((LRUCache as unknown) as jest.Mock).mockReturnValueOnce({
      set,
      get,
      peek,
      has,
      clear,
    });
    endpointCache = new EndpointCache(capacity);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("passes capacity to LRUCache", () => {
    expect(LRUCache).toHaveBeenCalledTimes(1);
    expect(LRUCache).toHaveBeenCalledWith(capacity);
  });

  describe("get", () => {
    beforeEach(() => {
      has.mockReturnValue(true);
      const endpointsWithExpiry = getEndpointsWithExpiry(mockEndpoints);
      peek.mockReturnValue(endpointsWithExpiry);
      get.mockReturnValue(endpointsWithExpiry);
      jest.spyOn(Date, "now").mockImplementation(() => now);
    });

    describe("returns undefined", () => {
      it("if cache doesn't have key", () => {
        has.mockReturnValueOnce(false);
        expect(endpointCache.get(key)).toBeUndefined();
        expect(has).toHaveBeenCalledWith(key);
        expect(peek).not.toHaveBeenCalled();
        expect(get).not.toHaveBeenCalled();
        expect(set).not.toHaveBeenCalled();
      });

      it("if cache has empty array", () => {
        peek.mockReturnValueOnce([]);
        expect(endpointCache.get(key)).toBeUndefined();
        expect(has).toHaveBeenCalledWith(key);
        expect(peek).toHaveBeenCalledWith(key);
        expect(get).not.toHaveBeenCalled();
        expect(set).not.toHaveBeenCalled();
      });

      it("if cache returns undefined for key", () => {
        get.mockReturnValueOnce(undefined);
        expect(endpointCache.get(key)).toBeUndefined();
        expect(has).toHaveBeenCalledWith(key);
        expect(peek).toHaveBeenCalledWith(key);
        expect(get).toHaveBeenCalledWith(key);
        expect(set).not.toHaveBeenCalled();
      });
    });

    it("returns endpoints if available", () => {
      expect(endpointCache.get(key)).toEqual(getEndpointsWithExpiry(mockEndpoints));
      expect(has).toHaveBeenCalledWith(key);
      expect(peek).toHaveBeenCalledWith(key);
      expect(get).toHaveBeenCalledWith(key);
      expect(set).not.toHaveBeenCalled();
    });
  });

  describe("set", () => {
    beforeEach(() => {
      jest.spyOn(Date, "now").mockImplementation(() => now);
    });

    it("converts CachePeriodInMinutes to Expires before caching", () => {
      endpointCache.set(key, mockEndpoints);
      expect(set).toHaveBeenCalledTimes(1);
      expect(set).toHaveBeenCalledWith(
        key,
        mockEndpoints.map(({ Address, CachePeriodInMinutes }) => ({
          Address,
          Expires: now + CachePeriodInMinutes * 60 * 1000,
        }))
      );
    });

    it("sets Address to empty string if not passed", () => {
      const mockEnpointsNoAddr = [{ CachePeriodInMinutes: 1 }];
      endpointCache.set(key, mockEnpointsNoAddr);
      expect(set).toHaveBeenCalledTimes(1);
      expect(set).toHaveBeenCalledWith(key, [{ Address: "", Expires: now + 60 * 1000 }]);
    });

    it("sets Expires in one minute if CachePeriodInMinutes is not passed", () => {
      const mockEnpointsNoAddr = [{ Address: "address" }];
      endpointCache.set(key, mockEnpointsNoAddr);
      expect(set).toHaveBeenCalledTimes(1);
      expect(set).toHaveBeenCalledWith(key, [{ Address: "address", Expires: now + 60 * 1000 }]);
    });
  });

  it("delete", () => {
    endpointCache.delete(key);
    expect(set).toHaveBeenCalledTimes(1);
    expect(set).toHaveBeenCalledWith(key, []);
  });

  describe("has", () => {
    describe("returns false", () => {
      it("when key is not present", () => {
        has.mockReturnValueOnce(false);
        expect(endpointCache.has(key)).toEqual(false);
        expect(has).toHaveBeenCalledTimes(1);
        expect(has).toHaveBeenCalledWith(key);
      });

      it("when key is present and value is empty", () => {
        has.mockReturnValueOnce(true);
        peek.mockReturnValueOnce([]);
        expect(endpointCache.has(key)).toEqual(false);
        expect(has).toHaveBeenCalledTimes(1);
        expect(has).toHaveBeenCalledWith(key);
      });

      it("when key is present and value is undefined", () => {
        has.mockReturnValueOnce(true);
        peek.mockReturnValueOnce(undefined);
        expect(endpointCache.has(key)).toEqual(false);
        expect(has).toHaveBeenCalledTimes(1);
        expect(has).toHaveBeenCalledWith(key);
      });
    });

    it("returns true when key is present and value is non-empty", () => {
      has.mockReturnValueOnce(true);
      peek.mockReturnValueOnce(getEndpointsWithExpiry(mockEndpoints));
      expect(endpointCache.has(key)).toEqual(true);
      expect(has).toHaveBeenCalledTimes(1);
      expect(has).toHaveBeenCalledWith(key);
    });
  });

  it("clear", () => {
    endpointCache.clear();
    expect(clear).toHaveBeenCalledTimes(1);
  });
});
