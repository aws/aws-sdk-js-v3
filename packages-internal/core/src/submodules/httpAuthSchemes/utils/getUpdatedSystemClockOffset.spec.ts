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
      // T = timeRequestSent, timeResponseReceived = T + 2000 (2s round trip)
      // serverTime = T + 1000 (server time at midpoint of round trip = zero drift)
      // midpoint = (T + T+2000) / 2 = T+1000
      // candidateSkew = (T+1000) - (T+1000) = 0
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 2000);
      const serverTime = new Date(T + 1000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(0);
    });

    it("computes positive candidateSkew when server is ahead of midpoint", () => {
      // T = timeRequestSent, timeResponseReceived = T + 2000
      // serverTime = T + 300000 (5 minutes ahead)
      // midpoint = (T + T+2000) / 2 = T+1000
      // candidateSkew = (T+300000) - (T+1000) = 299000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 2000);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(299000);
    });
  });

  describe("Age header guard", () => {
    it("returns currentSystemClockOffset unchanged when Age header is present", () => {
      // Age header present (value "17280") → candidate discarded regardless of skew
      vi.mocked(isClockSkewed).mockReturnValue(true);
      expect(
        getUpdatedSystemClockOffset(mockClockTime.toString(), mockSystemClockOffset, undefined, "17280")
      ).toEqual(mockSystemClockOffset);
    });

    it("updates offset normally when Age header is absent", () => {
      // legacy path: candidateSkew = serverTime - timeResponseReceived = (T+300000) - T = 300000
      vi.mocked(isClockSkewed).mockReturnValue(true);
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const serverTime = new Date(T + 300000);
      expect(
        getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, undefined, undefined)
      ).toEqual(300000);
    });
  });

  describe("elapsed > 15 min guard", () => {
    it("returns currentSystemClockOffset unchanged when elapsed exceeds 15 minutes", () => {
      // T = timeRequestSent, timeResponseReceived = T + 16 min → elapsed = 960000 > 900000 → discard
      vi.mocked(isClockSkewed).mockReturnValue(true);
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 16 * 60 * 1000);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(
        mockSystemClockOffset
      );
    });

    it("updates offset when elapsed is exactly 15 minutes (boundary: not discarded)", () => {
      // T = timeRequestSent, timeResponseReceived = T + 900000 (exactly 15 min)
      // elapsed = 900000, NOT > 900000 so NOT discarded
      // serverTime = T + 1000000 (server is ahead)
      // midpoint = (T + T+900000) / 2 = T+450000
      // candidateSkew = (T+1000000) - (T+450000) = 550000
      vi.mocked(isClockSkewed).mockReturnValue(true);
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 900_000);
      const serverTime = new Date(T + 1_000_000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(550000);
    });

    it("does not apply elapsed guard when timeRequestSent is absent", () => {
      // legacy callers: no timeRequestSent, elapsed guard must not fire
      // candidateSkew = serverTime - timeResponseReceived = (T+300000) - T = 300000
      vi.mocked(isClockSkewed).mockReturnValue(true);
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset)).toEqual(300000);
    });
  });
});
