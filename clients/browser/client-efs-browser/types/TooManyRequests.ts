import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if you don’t wait at least 24 hours before changing the throughput mode, or decreasing the Provisioned Throughput value.</p>
 */
export interface TooManyRequests
  extends __ServiceException__<_TooManyRequestsDetails> {
  name: "TooManyRequests";
}

export interface _TooManyRequestsDetails {
  /**
   * _ErrorCode shape
   */
  ErrorCode: string;

  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
