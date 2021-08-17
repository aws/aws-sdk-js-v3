import { getSkewCorrectedDate } from "./getSkewCorrectedDate";

export const isClockSkewed = (newServerTime: number, systemClockOffset: number) =>
  Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - newServerTime) >= 300000;
