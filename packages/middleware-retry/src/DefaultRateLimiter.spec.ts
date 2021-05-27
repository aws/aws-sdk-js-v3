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
