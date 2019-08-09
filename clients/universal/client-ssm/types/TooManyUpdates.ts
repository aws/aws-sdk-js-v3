import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are concurrent updates for a resource that supports one update at a time.</p>
 */
export interface TooManyUpdates
  extends __ServiceException__<_TooManyUpdatesDetails> {
  name: "TooManyUpdates";
}

export interface _TooManyUpdatesDetails {
  /**
   * _String shape
   */
  Message?: string;
}
