import { isThrottlingError } from "@aws-sdk/service-error-classification";

import { DefaultRateLimiter } from "./DefaultRateLimiter";

jest.mock("@aws-sdk/service-error-classification");

describe(DefaultRateLimiter.name, () => {
  beforeEach(() => {
    (isThrottlingError as jest.Mock).mockReturnValue(false);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getSendToken", () => {
    beforeEach(() => {
      jest.useFakeTimers("legacy");
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it.each([
      [0.5, 892.8571428571428],
      [1, 1785.7142857142856],
      [2, 2000],
    ])("timestamp: %d, delay: %d", async (timestamp, delay) => {
      jest.spyOn(Date, "now").mockImplementation(() => 0);
      const rateLimiter = new DefaultRateLimiter();

      (isThrottlingError as jest.Mock).mockReturnValueOnce(true);
      jest.spyOn(Date, "now").mockImplementation(() => timestamp * 1000);
      rateLimiter.updateClientSendingRate({});

      rateLimiter.getSendToken();
      jest.runAllTimers();
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), delay);
    });
  });

  describe("cubicSuccess", () => {
    it.each([
      [5, 7],
      [6, 9.64893601],
      [7, 10.00003085],
      [8, 10.45328452],
      [9, 13.40869703],
      [10, 21.26626836],
      [11, 36.42599853],
    ])("timestamp: %d, calculatedRate: %d", (timestamp, calculatedRate) => {
      jest.spyOn(Date, "now").mockImplementation(() => 0);
      const rateLimiter = new DefaultRateLimiter();
      rateLimiter["lastMaxRate"] = 10;
      rateLimiter["lastThrottleTime"] = 5;

      jest.spyOn(Date, "now").mockImplementation(() => timestamp * 1000);

      const cubicSuccessSpy = jest.spyOn(DefaultRateLimiter.prototype as any, "cubicSuccess");
      rateLimiter.updateClientSendingRate({});
      expect(cubicSuccessSpy).toHaveLastReturnedWith(calculatedRate);
    });
  });

  describe("cubicThrottle", () => {
    it.each([
      [5, 0.112],
      [6, 0.09333333],
      [7, 0.08],
      [8, 0.07],
      [9, 0.06222222],
    ])("timestamp: %d, calculatedRate: %d", (timestamp, calculatedRate) => {
      jest.spyOn(Date, "now").mockImplementation(() => 0);
      const rateLimiter = new DefaultRateLimiter();
      rateLimiter["lastMaxRate"] = 10;
      rateLimiter["lastThrottleTime"] = 5;

      (isThrottlingError as jest.Mock).mockReturnValueOnce(true);
      jest.spyOn(Date, "now").mockImplementation(() => timestamp * 1000);
      const cubicThrottleSpy = jest.spyOn(DefaultRateLimiter.prototype as any, "cubicThrottle");
      rateLimiter.updateClientSendingRate({});
      expect(cubicThrottleSpy).toHaveLastReturnedWith(calculatedRate);
    });
  });

  it("updateClientSendingRate", () => {
    jest.spyOn(Date, "now").mockImplementation(() => 0);
    const rateLimiter = new DefaultRateLimiter();

    const testCases: [boolean, number, number, number][] = [
      [false, 0.2, 0, 0.5],
      [false, 0.4, 0, 0.5],
      [false, 0.6, 4.8, 0.5],
      [false, 0.8, 4.8, 0.5],
      [false, 1, 4.16, 0.5],
      [false, 1.2, 4.16, 0.6912],
      [false, 1.4, 4.16, 1.0976],
      [false, 1.6, 5.632, 1.6384],
      [false, 1.8, 5.632, 2.3328],
      [true, 2, 4.3264, 3.02848],
      [false, 2.2, 4.3264, 3.486639],
      [false, 2.4, 4.3264, 3.821874],
      [false, 2.6, 5.66528, 4.053386],
      [false, 2.8, 5.66528, 4.200373],
      [false, 3.0, 4.333056, 4.282037],
      [true, 3.2, 4.333056, 2.997426],
      [false, 3.4, 4.333056, 3.452226],
    ];

    testCases.forEach(([isThrottlingErrorReturn, timestamp, measuredTxRate, fillRate]) => {
      (isThrottlingError as jest.Mock).mockReturnValue(isThrottlingErrorReturn);
      jest.spyOn(Date, "now").mockImplementation(() => timestamp * 1000);

      rateLimiter.updateClientSendingRate({});
      expect(rateLimiter["measuredTxRate"]).toEqual(measuredTxRate);
      expect(parseFloat(rateLimiter["fillRate"].toFixed(6))).toEqual(fillRate);
    });
  });
});
