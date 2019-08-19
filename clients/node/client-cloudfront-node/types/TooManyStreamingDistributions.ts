import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
 */
export interface TooManyStreamingDistributions
  extends __ServiceException__<_TooManyStreamingDistributionsDetails> {
  name: "TooManyStreamingDistributions";
}

export interface _TooManyStreamingDistributionsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
