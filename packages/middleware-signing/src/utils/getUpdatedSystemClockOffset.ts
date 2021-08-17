import { isClockSkewed } from "./isClockSkewed";

export const getUpdatedSystemClockOffset = (serverTime: string, currentSystemClockOffset: number): number => {
  const serverTimeMs = Date.parse(serverTime);
  if (isClockSkewed(serverTimeMs, currentSystemClockOffset)) {
    return serverTimeMs - Date.now();
  }
  return currentSystemClockOffset;
};
