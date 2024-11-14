import { memoize } from "@smithy/property-provider";
import { normalizeProvider } from "@smithy/util-middleware";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { normalizeTokenProvider } from "./normalizeTokenProvider";

vi.mock("@smithy/property-provider");
vi.mock("@smithy/util-middleware");

const ONE_SECOND_IN_MS = 1000;
const ONE_HOUR_IN_MS = 3600 * ONE_SECOND_IN_MS;

describe(normalizeTokenProvider.name, () => {
  const mockToken = {
    token: "mockAccessToken",
    expiration: new Date(Date.now() + ONE_HOUR_IN_MS),
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe("if token is a function", () => {
    const mockInputToken = vi.fn();
    const mockMemoizeFn = vi.fn().mockResolvedValue(mockToken);
    vi.mocked(memoize).mockReturnValue(mockMemoizeFn);

    afterEach(() => {
      expect(memoize).toHaveBeenCalledWith(mockInputToken, expect.any(Function), expect.any(Function));
    });

    it("returns memoized function", async () => {
      const normalizedTokenProvider = normalizeTokenProvider(mockInputToken);
      expect(normalizedTokenProvider).toEqual(mockMemoizeFn);
      expect(mockMemoizeFn()).resolves.toEqual(mockToken);
    });

    describe("memoize isExpired", () => {
      const mockDateNow = Date.now();

      beforeEach(async () => {
        vi.spyOn(Date, "now").mockReturnValueOnce(mockDateNow);
        normalizeTokenProvider(mockInputToken);
      });

      it("returns true if expiration is defined, and token has expired", () => {
        const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
        const expiration = new Date(mockDateNow - 24 * ONE_HOUR_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(true);
      });

      it("returns true if expiration is defined, and token expires in <5 mins", () => {
        const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
        const expiration = new Date(mockDateNow + 299 * ONE_SECOND_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(true);
      });

      it("returns false if expiration is defined, but token expires in >5 mins", () => {
        const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
        const expiration = new Date(mockDateNow + 301 * ONE_SECOND_IN_MS);
        expect(memoizeExpiredFn({ expiration })).toEqual(false);
      });

      it("returns false if expiration is not defined", () => {
        const memoizeExpiredFn = vi.mocked(memoize).mock.calls[0][1];
        expect(memoizeExpiredFn({})).toEqual(false);
      });
    });

    describe("memoize requiresRefresh", () => {
      beforeEach(async () => {
        normalizeTokenProvider(mockInputToken);
      });

      it("returns true if expiration is not defined", () => {
        const memoizeRefreshFn = vi.mocked(memoize).mock.calls[0][2]!;
        const expiration = Date.now();
        expect(memoizeRefreshFn({ expiration })).toEqual(true);
      });

      it("returns false if expiration is not defined", () => {
        const memoizeRefreshFn = vi.mocked(memoize).mock.calls[0][2]!;
        expect(memoizeRefreshFn({})).toEqual(false);
      });
    });
  });

  it("returns normalized token if token is not a function", () => {
    const normalizedTokenProvider = normalizeTokenProvider(mockToken);
    expect(normalizedTokenProvider).toEqual(normalizeProvider(mockToken));
    expect(memoize).not.toHaveBeenCalled();
  });
});
