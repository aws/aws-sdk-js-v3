import { isThrottlingError } from "@aws-sdk/service-error-classification";

import { RateLimiter } from "./types";

const SMOOTH = 0.8;
const currentTimeInSeconds = () => Date.now() / 1000;

export const getDefaultRateLimiter = (): RateLimiter => {
  const fillRate = undefined;
  const maxCapacity = undefined;
  let currentCapacity = 0;
  let lastTimestamp = undefined;
  const enabled = false;
  let measuredTxRate = 0;
  let lastTxRateBucket = Math.floor(currentTimeInSeconds());
  let requestCount = 0;
  let lastMaxRate = 0;
  let lastThrottleTime = currentTimeInSeconds();

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

  const updateMeasuredRate = () => {
    const t = currentTimeInSeconds();
    const timeBucket = Math.floor(t * 2) / 2;
    requestCount++;

    if (timeBucket > lastTxRateBucket) {
      const currentRate = requestCount / (timeBucket - lastTxRateBucket);
      measuredTxRate = currentRate * SMOOTH + measuredTxRate * (1 - SMOOTH);
      requestCount = 0;
      lastTxRateBucket = timeBucket;
    }
  };

  const calculateTimeWindow = () => {};

  const updateClientSendingRate = (response: any) => {
    let rateToUse;
    let calculatedRate;
    updateMeasuredRate();

    if (isThrottlingError(response)) {
      if (!enabled) {
        rateToUse = measuredTxRate;
      } else {
        rateToUse = Math.min(measuredTxRate, fillRate);
      }

      lastMaxRate = rateToUse;
      calculateTimeWindow();
      lastThrottleTime = currentTimeInSeconds();
      calculatedRate = cubicThrottle(rateToUse);
      tokenBucketEnable();
    } else {
      calculateTimeWindow();
      calculatedRate = cubicSuccess(currentTimeInSeconds());
    }

    const newRate = Math.min(calculatedRate, 2 * measuredTxRate);
    tokenBucketUpdateRate(newRate);
  };

  return Object.freeze({
    getSendToken,
    updateClientSendingRate,
  });
};
