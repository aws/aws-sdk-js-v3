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
    // Even when skew is small (below detection threshold), it's still returned.
    const T = mockClockTime.getTime();
    vi.spyOn(Date, "now").mockReturnValue(T);
    const serverTime = new Date(T + 1000); // 1 second ahead
    expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset)).toEqual(1000);
  });

  describe("returns serverTime - timeResponseReceived", () => {
    it.each([1000, 100000])("difference: %d", (difference) => {
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const updatedClockTime = new Date(T + difference);
      expect(getUpdatedSystemClockOffset(updatedClockTime.toString(), mockSystemClockOffset)).toEqual(difference);
    });

    it("includes response latency", () => {
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 2000);
      const serverTime = new Date(T + 1000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(-1000);
    });

    it("does not include server processing time", () => {
      const T = mockClockTime.getTime();
      const responseTime = T + 620_000;
      vi.spyOn(Date, "now").mockReturnValue(responseTime);
      expect(getUpdatedSystemClockOffset(new Date(responseTime).toUTCString(), mockSystemClockOffset, T)).toEqual(0);
    });
  });

  describe("Age header guard", () => {
    it("returns currentSystemClockOffset unchanged when Age header is present", () => {
      expect(getUpdatedSystemClockOffset(mockClockTime.toString(), mockSystemClockOffset, undefined, "17280")).toEqual(
        mockSystemClockOffset
      );
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
      // candidateSkew = (T+1000000) - (T+900000) = 100000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T + 900_000);
      const serverTime = new Date(T + 1_000_000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset, T)).toEqual(100000);
    });

    it("does not apply elapsed guard when timeRequestSent is absent", () => {
      // candidateSkew = serverTime - timeResponseReceived = (T+300000) - T = 300000
      const T = mockClockTime.getTime();
      vi.spyOn(Date, "now").mockReturnValue(T);
      const serverTime = new Date(T + 300000);
      expect(getUpdatedSystemClockOffset(serverTime.toUTCString(), mockSystemClockOffset)).toEqual(300000);
    });
  });
});
