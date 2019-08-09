import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
 */
export interface TooManyDistributions
  extends __ServiceException__<_TooManyDistributionsDetails> {
  name: "TooManyDistributions";
}

export interface _TooManyDistributionsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
