import { getUpdatedSystemClockOffset } from "./getUpdatedSystemClockOffset";
import { isClockSkewed } from "./isClockSkewed";

jest.mock("./isClockSkewed");

describe(getUpdatedSystemClockOffset.name, () => {
  // Mock ServerTime is accurate to last second, to remove milliseconds information.
  const mockServerTime = new Date(Math.floor(Date.now() / 1000) * 1000);
  const mockSystemClockOffset = 100;

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns passed systemClockOffset when clock is not skewed", () => {
    (isClockSkewed as jest.Mock).mockReturnValue(false);
    expect(getUpdatedSystemClockOffset(mockServerTime.toString(), mockSystemClockOffset)).toEqual(
      mockSystemClockOffset
    );
  });

  describe("returns difference between serverTime and current time when clock is skewed", () => {
    const dateDotNowFn = Date.now;

    beforeEach(() => {
      (isClockSkewed as jest.Mock).mockReturnValue(true);
      jest.spyOn(Date, "now").mockReturnValueOnce(mockServerTime.getTime());
    });

    afterEach(() => {
      Date.now = dateDotNowFn;
    });

    it.each([1000, 100000])("difference: %d", (difference) => {
      const updatedServerTime = new Date(mockServerTime.getTime() + difference);
      expect(getUpdatedSystemClockOffset(updatedServerTime.toString(), mockSystemClockOffset)).toEqual(difference);
    });
  });
});
