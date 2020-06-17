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
      expect.assertions(repeatTimes * 2);

      const memoized = memoize(provider);

      for (const index in [...Array(repeatTimes).keys()]) {
        expect(await memoized()).toStrictEqual(mockReturn);
        expect(provider).toHaveBeenCalledTimes(1);
      }
    });

    it("should always return the same promise", () => {
      expect.assertions(repeatTimes * 2);

      const memoized = memoize(provider);
      const result = memoized();

      for (const index in [...Array(repeatTimes).keys()]) {
        expect(memoized()).toStrictEqual(result);
        expect(provider).toHaveBeenCalledTimes(1);
      }
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

    describe("should return the same promise for invocations 2-infinity if `requiresRefresh` returns `false`", () => {
      const requiresRefreshFalseTest = async () => {
        const memoized = memoize(provider, isExpired, requiresRefresh);
        const result = memoized();
        expect(await result).toBe(mockReturn);

        for (const index in [...Array(repeatTimes).keys()]) {
          expect(memoized()).toStrictEqual(result);
          expect(provider).toHaveBeenCalledTimes(1);
        }

        expect(requiresRefresh).toHaveBeenCalledTimes(1);
        expect(isExpired).not.toHaveBeenCalled();
      };

      it("when isExpired returns true", () => {
        return requiresRefreshFalseTest();
      });

      it("when isExpired returns false", () => {
        isExpired.mockReturnValue(false);
        return requiresRefreshFalseTest();
      });
    });
  });
});
