import { RateLimiter } from "./types";

const currentTimeInSeconds = () => Date.now() / 1000;

export const getDefaultRateLimiter = (): RateLimiter => {
  const fillRate = undefined;
  const maxCapacity = undefined;
  let currentCapacity = 0;
  let lastTimestamp = undefined;
  const enabled = false;
  const measuredTxRate = 0;
  const last_tx_rate_bucket = Math.floor(currentTimeInSeconds());
  const requestCount = 0;
  const lastMaxRate = 0;
  const lastThrottleTime = currentTimeInSeconds();

  const tokenBucketRefill = () => {
    const timestamp = currentTimeInSeconds();
    if (!lastTimestamp) {
      lastTimestamp = timestamp;
      return;
    }

    const fillAmount = (timestamp - lastTimestamp) * fillRate;
    currentCapacity = Math.min(maxCapacity, currentCapacity + fillAmount);
    lastTimestamp = timestamp;
  };

  const tokenBucketAcquire = async (amount: number) => {
    // Client side throttling is not enabled until we see a throttling error.
    if (!enabled) {
      return;
    }

    tokenBucketRefill();
    if (amount > currentCapacity) {
      const delay = (amount - currentCapacity) / fillRate;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
    currentCapacity = currentCapacity - amount;
  };

  const getSendToken = async () => tokenBucketAcquire(1);

  const updateClientSendingRate = (response: any) => {
    // Code to updaye client sending rate.
    // Updates fillRate and maxCapacity.
  };

  return Object.freeze({
    getSendToken,
    updateClientSendingRate,
  });
};
