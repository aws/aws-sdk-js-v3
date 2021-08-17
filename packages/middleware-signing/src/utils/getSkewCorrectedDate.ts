export const getSkewCorrectedDate = (systemClockOffset: number) => new Date(Date.now() + systemClockOffset);
