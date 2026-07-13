import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getUpdatedSystemClockOffset } from "./getUpdatedSystemClockOffset";
import { isClockSkewed } from "./isClockSkewed";

vi.mock("./isClockSkewed");

describe(getUpdatedSystemClockOffset.name, () => {
  // Mock ServerTime is accurate to last second, to remove milliseconds information.
  const mockClockTime = new Date(Math.floor(Date.now() / 1000) * 1000);
  const mockSystemClockOffset = 100;

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("returns passed systemClockOffset when clock is not skewed", () => {
    vi.mocked(isClockSkewed).mockReturnValue(false);
    expect(getUpdatedSystemClockOffset(mockClockTime.toString(), mockSystemClockOffset)).toEqual(mockSystemClockOffset);
  });

  describe("legacy path (no timeRequestSent): returns serverTime - timeResponseReceived when clock is skewed", () => {
    beforeEach(() => {
      vi.mocked(isClockSkewed).mockReturnValue(true);
      vi.spyOn(Date, "now").mockReturnValue(mockClockTime.getTime());
    });

    it.each([1000, 100000])("difference: %d", (difference) => {
      const updatedClockTime = new Date(mockClockTime.getTime() + difference);
      expect(getUpdatedSystemClockOffset(updatedClockTime.toString(), mockSystemClockOffset)).toEqual(difference);
    });
  });

  describe("midpoint path (with timeRequestSent): returns serverTime - midpoint when clock is skewed", () => {
    beforeEach(() => {
      vi.mocked(isClockSkewed).mockReturnValue(true);
    });

    it("computes candidateSkew using NTP midpoint formula", () => {
      // timeRequestSent = T, timeResponseReceived = T + 2000 (2s round trip)
      // serverTime = T + 1000 (server time halfway through round trip = zero drift)
      // midpoint = (T + T+2000) / 2 = T + 1000
      // candidateSkew = (T+1000) - (T+1000) = 0
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 2000); // timeResponseReceived
      const serverTime = new Date(T + 1000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(0);
    });

    it("computes positive candidateSkew when server is ahead of midpoint", () => {
      // timeRequestSent = T, timeResponseReceived = T + 2000
      // serverTime = T + 5 * 60 * 1000 (5 minutes ahead)
      // midpoint = T + 1000
      // candidateSkew = (T + 300000) - (T + 1000) = 299000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 2000);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(299000);
    });
  });
});
