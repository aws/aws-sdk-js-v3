import { memoize } from "./memoize";

describe("memoize", () => {
  let provider: jest.Mock;
  const mockReturn = "foo";
  const repeatTimes = 10;

  beforeEach(() => {
    provider = jest.fn().mockResolvedValue(mockReturn);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("static memoization", () => {
    it("should cache the resolved provider", async () => {
      expect.assertions(repeatTimes * 2 + 1);

      const memoized = memoize(provider);
      expect(provider).toHaveBeenCalledTimes(0);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      for (const _ in [...Array(repeatTimes).keys()]) {
        expect(await memoized()).toStrictEqual(mockReturn);
        expect(provider).toHaveBeenCalledTimes(1);
      }
    });

    it("should not make extra request for concurrent calls", async () => {
      const memoized = memoize(provider);
      const results = await Promise.all([...Array(repeatTimes).keys()].map(() => memoized()));
      expect(provider).toHaveBeenCalledTimes(1);
      for (const res of results) {
        expect(res).toStrictEqual(mockReturn);
      }
    });

    it("should retry provider if previous provider is failed", async () => {
      provider
        .mockReset()
        .mockRejectedValueOnce("Error")
        .mockResolvedValueOnce("Retry")
        .mockRejectedValueOnce("Should not call 3rd time");
      const memoized = memoize(provider);
      try {
        await memoized();
        fail();
      } catch (e) {
        expect(e).toBe("Error");
      }
      expect(await memoized()).toBe("Retry");
      expect(await memoized()).toBe("Retry");
      expect(provider).toBeCalledTimes(2);
    });

    it("should retry provider if forceRefresh parameter is used", async () => {
      provider
        .mockReset()
        .mockResolvedValueOnce("1st")
        .mockResolvedValueOnce("2nd")
        .mockRejectedValueOnce("Should not call 3rd time");
      const memoized = memoize(provider);
      expect(await memoized()).toBe("1st");
      expect(await memoized()).toBe("1st");
      expect(await memoized({ forceRefresh: true })).toBe("2nd");
      expect(await memoized()).toBe("2nd");
      expect(provider).toBeCalledTimes(2);
    });
  });

  describe("refreshing memoization", () => {
    let isExpired: jest.Mock;
    let requiresRefresh: jest.Mock;

    beforeEach(() => {
      isExpired = jest.fn().mockReturnValue(true);
      requiresRefresh = jest.fn().mockReturnValue(false);
    });

    describe("should not reinvoke the underlying provider while isExpired returns `false`", () => {
      const isExpiredFalseTest = async (requiresRefresh?: any) => {
        isExpired.mockReturnValue(false);
        const memoized = memoize(provider, isExpired, requiresRefresh);
        expect(provider).toHaveBeenCalledTimes(0);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const index in [...Array(repeatTimes).keys()]) {
          expect(await memoized()).toEqual(mockReturn);
        }

        expect(isExpired).toHaveBeenCalledTimes(repeatTimes);
        if (requiresRefresh) {
          expect(requiresRefresh).toHaveBeenCalledTimes(repeatTimes);
        }
        expect(provider).toHaveBeenCalledTimes(1);
      };

      it("when requiresRefresh is not passed", async () => {
        return isExpiredFalseTest();
      });

      it("when requiresRefresh returns true", () => {
        requiresRefresh.mockReturnValue(true);
        return isExpiredFalseTest(requiresRefresh);
      });
    });

    describe("should reinvoke the underlying provider when isExpired returns `true`", () => {
      const isExpiredTrueTest = async (requiresRefresh?: any) => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const index in [...Array(repeatTimes).keys()]) {
          expect(await memoized()).toEqual(mockReturn);
        }

        expect(isExpired).toHaveBeenCalledTimes(repeatTimes);
        if (requiresRefresh) {
          expect(requiresRefresh).toHaveBeenCalledTimes(repeatTimes);
        }
        expect(provider).toHaveBeenCalledTimes(repeatTimes + 1);
      };

      it("when requiresRefresh is not passed", () => {
        return isExpiredTrueTest();
      });

      it("when requiresRefresh returns true", () => {
        requiresRefresh.mockReturnValue(true);
        return isExpiredTrueTest(requiresRefresh);
      });
    });

    describe("when called with forceRefresh set to `true`", () => {
      it("should reinvoke the underlying provider even if isExpired returns false", async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        isExpired.mockReturnValue(false);
        for (const _ in [...Array(repeatTimes).keys()]) {
          expect(await memoized({ forceRefresh: true })).toEqual(mockReturn);
        }
        expect(provider).toHaveBeenCalledTimes(repeatTimes);
      });

      it("should reinvoke the underlying provider even if requiresRefresh returns false", async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        requiresRefresh.mockReturnValue(false);
        for (const _ in [...Array(repeatTimes).keys()]) {
          expect(await memoized({ forceRefresh: true })).toEqual(mockReturn);
        }
        expect(provider).toHaveBeenCalledTimes(repeatTimes);
      });
    });

    describe("when `requiresRefresh` returns `false`", () => {
      const requiresRefreshFalseTest = async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        const result = memoized();
        expect(await result).toBe(mockReturn);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const index in [...Array(repeatTimes).keys()]) {
          expect(memoized()).toStrictEqual(result);
          expect(provider).toHaveBeenCalledTimes(1);
        }

        expect(requiresRefresh).toHaveBeenCalledTimes(1);
        expect(isExpired).not.toHaveBeenCalled();
      };

      it("should return the same promise for invocations 2-infinity if isExpired returns true", () => {
        return requiresRefreshFalseTest();
      });

      it("should return the same promise for invocations 2-infinity if isExpired returns false", () => {
        isExpired.mockReturnValue(false);
        return requiresRefreshFalseTest();
      });

      it("should re-evaluate `requiresRefresh` after force refresh", async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        for (const _ in [...Array(repeatTimes).keys()]) {
          expect(await memoized({ forceRefresh: true })).toStrictEqual(mockReturn);
        }
        expect(requiresRefresh).toBeCalledTimes(repeatTimes);
      });
    });

    describe("should not make extra request for concurrent calls", () => {
      const requiresRefreshFalseTest = async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        const results = await Promise.all([...Array(repeatTimes).keys()].map(() => memoized()));
        expect(provider).toHaveBeenCalledTimes(1);
        for (const res of results) {
          expect(res).toStrictEqual(mockReturn);
        }
      };

      it("when isExpired returns true", () => {
        return requiresRefreshFalseTest();
      });

      it("when isExpired returns false", () => {
        isExpired.mockReturnValue(false);
        return requiresRefreshFalseTest();
      });
    });

    it("should retry provider if previous provider is failed", async () => {
      provider
        .mockReset()
        .mockRejectedValueOnce("Error")
        .mockResolvedValueOnce("Retry")
        .mockRejectedValueOnce("Should not call 3rd time");
      isExpired.mockReset().mockReturnValue(false);
      const memoized = memoize(provider, isExpired);
      try {
        await memoized();
        fail();
      } catch (e) {
        expect(e).toBe("Error");
      }
      expect(await memoized()).toBe("Retry");
      expect(await memoized()).toBe("Retry");
      expect(provider).toBeCalledTimes(2);
    });
  });
});
