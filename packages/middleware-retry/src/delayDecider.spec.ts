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

  it("should return a value that increases exponentially with the number of retries", () => {
    for (const [retryCount, expectedDelay] of [
      [0, 100],
      [1, 200],
      [2, 400],
      [3, 800],
      [7, 12800]
    ]) {
      expect(defaultDelayDecider(100, retryCount)).toBe(expectedDelay);
    }
  });

  it("should cap the retry delay at 20 seconds", () => {
    for (const retryCount of [10, 100, 100000]) {
      expect(defaultDelayDecider(100, retryCount)).toBe(MAXIMUM_RETRY_DELAY);
    }
  });

  it("should randomize the delay value", () => {
    Math.random = jest.fn().mockReturnValueOnce(0.25);
    expect(defaultDelayDecider(100, 0)).toBe(25);

    Math.random = jest.fn().mockReturnValueOnce(0.5);
    expect(defaultDelayDecider(100, 0)).toBe(50);

    Math.random = jest.fn().mockReturnValueOnce(0.75);
    expect(defaultDelayDecider(100, 0)).toBe(75);

    Math.random = jest.fn().mockReturnValueOnce(1);
    expect(defaultDelayDecider(100, 0)).toBe(100);
  });
});
