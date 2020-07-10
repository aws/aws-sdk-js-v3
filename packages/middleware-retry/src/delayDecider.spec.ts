import { MAXIMUM_RETRY_DELAY } from "./constants";
import { defaultDelayDecider } from "./delayDecider";

describe("defaultDelayDecider", () => {
  const mathDotRandom = Math.random;

  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(1);
  });

  afterEach(() => {
    Math.random = mathDotRandom;
  });

  describe(`retry delay increases exponentially with attempt number`, () => {
    [0, 1, 2, 3].forEach((attempts) => {
      const mockDelayBase = 100;
      const expectedDelay = Math.floor(2 ** attempts * mockDelayBase);
      it(`(${mockDelayBase}, ${attempts}) returns ${expectedDelay}`, () => {
        expect(defaultDelayDecider(mockDelayBase, attempts)).toBe(expectedDelay);
      });
    });
  });

  describe(`caps retry delay at ${MAXIMUM_RETRY_DELAY / 1000} seconds`, () => {
    it("when value exceeded because of high delayBase", () => {
      expect(defaultDelayDecider(MAXIMUM_RETRY_DELAY + 1, 0)).toBe(MAXIMUM_RETRY_DELAY);
      expect(defaultDelayDecider(MAXIMUM_RETRY_DELAY + 2, 0)).toBe(MAXIMUM_RETRY_DELAY);
    });

    it("when value exceeded because of high attempts number", () => {
      const largeAttemptsNumber = Math.ceil(Math.log2(MAXIMUM_RETRY_DELAY));
      expect(defaultDelayDecider(1, largeAttemptsNumber)).toBe(MAXIMUM_RETRY_DELAY);
      expect(defaultDelayDecider(1, largeAttemptsNumber + 1)).toBe(MAXIMUM_RETRY_DELAY);
    });
  });

  describe("randomizes the retry delay value", () => {
    Array.from({ length: 3 }, () => Math.random()).forEach((mockRandomValue) => {
      const attempts = 0;
      const delayBase = 100;
      const expectedDelay = Math.floor(mockRandomValue * 2 ** attempts * delayBase);
      it(`(${delayBase}, ${attempts}) with mock Math.random=${mockRandomValue} returns ${expectedDelay}`, () => {
        Math.random = jest.fn().mockReturnValue(mockRandomValue);
        expect(defaultDelayDecider(delayBase, attempts)).toBe(expectedDelay);
      });
    });
  });
});
