import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
 */
export interface TooManyInvalidationsInProgress
  extends __ServiceException__<_TooManyInvalidationsInProgressDetails> {
  name: "TooManyInvalidationsInProgress";
}

export interface _TooManyInvalidationsInProgressDetails {
  /**
   * _string shape
   */
  Message?: string;
}
