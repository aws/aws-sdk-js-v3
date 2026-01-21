import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getSkewCorrectedDate } from "./getSkewCorrectedDate";

describe(getSkewCorrectedDate.name, () => {
  const mockDateNow = Date.now();

  beforeEach(() => {
    vi.spyOn(Date, "now").mockReturnValue(mockDateNow);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it.each([-100000, -100, 0, 100, 100000])("systemClockOffset: %d", (systemClockOffset) => {
    expect(getSkewCorrectedDate(systemClockOffset)).toStrictEqual(new Date(mockDateNow + systemClockOffset));
  });
});
