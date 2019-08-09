import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Invalidation batch specified is too large.</p>
 */
export interface BatchTooLarge
  extends __ServiceException__<_BatchTooLargeDetails> {
  name: "BatchTooLarge";
}

export interface _BatchTooLargeDetails {
  /**
   * _string shape
   */
  Message?: string;
}
