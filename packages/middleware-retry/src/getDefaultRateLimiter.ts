import { RateLimiter } from "./types";

const currentTimeInSeconds = () => Date.now() / 1000;

export const getDefaultRateLimiter = (): RateLimiter => {
  const fillRate = undefined;
  const maxCapacity = undefined;
  const currentCapacity = 0;
  const lastTimestamp = undefined;
  const enabled = false;
  const measuredTxRate = 0;
  const last_tx_rate_bucket = Math.floor(currentTimeInSeconds());
  const requestCount = 0;
  const lastMaxRate = 0;
  const lastThrottleTime = currentTimeInSeconds();

  const getSendToken = async () => {
    // Code to throttle if enabled === true.
  };

  const updateClientSendingRate = (response: any) => {
    // Code to updaye client sending rate.
    // Updates fillRate and maxCapacity.
  };

  return Object.freeze({
    getSendToken,
    updateClientSendingRate,
  });
};
