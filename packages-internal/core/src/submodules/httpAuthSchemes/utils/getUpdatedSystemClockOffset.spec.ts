import { afterEach, describe, expect, test as it, vi } from "vitest";

import { getUpdatedSystemClockOffset } from "./getUpdatedSystemClockOffset";

describe(getUpdatedSystemClockOffset.name, () => {
  // Mock ServerTime is accurate to last second, to remove milliseconds information.
  const mockClockTime = new Date(Math.floor(Date.now() / 1000) * 1000);
  const mockSystemClockOffset = 100;

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns candidateSkew unconditionally (no threshold gating)", () => {
    // legacy path: serverTime - timeResponseReceived
    // Even when skew is small (below detection threshold), it's still returned.
    const T = mockClockTime.getTime();
    vi.spyOn(Date, "now").mockReturnValue(T);
    const serverTime = new Date(T + 1000); // 1 second ahead
    expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset)).toEqual(1000);
  });

  describe("legacy path (no timeRequestSent): returns serverTime - timeResponseReceived", () => {
    it.each([1000, 100000])("difference: %d", (difference) => {
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const updatedClockTime = new Date(T + difference);
      expect(getUpdatedSystemClockOffset(updatedClockTime.toString(), mockSystemClockOffset)).toEqual(difference);
    });
  });

  describe("midpoint path (with timeRequestSent): returns serverTime - midpoint", () => {
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
      expect(
        getUpdatedSystemClockOffset(mockClockTime.toString(), mockSystemClockOffset, undefined, "17280")
      ).toEqual(mockSystemClockOffset);
    });

    it("updates offset normally when Age header is absent", () => {
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
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 16 * 60 * 1000);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(
        mockSystemClockOffset
      );
    });

    it("updates offset when elapsed is exactly 15 minutes (boundary: not discarded)", () => {
      // elapsed = 900000, NOT > 900000 so NOT discarded
      // serverTime = T + 1000000, midpoint = T+450000
      // candidateSkew = (T+1000000) - (T+450000) = 550000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 900_000);
      const serverTime = new Date(T + 1_000_000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(550000);
    });

    it("does not apply elapsed guard when timeRequestSent is absent", () => {
      // legacy callers: no timeRequestSent, elapsed guard must not fire
      // candidateSkew = serverTime - timeResponseReceived = (T+300000) - T = 300000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset)).toEqual(300000);
    });
  });
});
