import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot create more cache behaviors for the distribution.</p>
 */
export interface TooManyCacheBehaviors
  extends __ServiceException__<_TooManyCacheBehaviorsDetails> {
  name: "TooManyCacheBehaviors";
}

export interface _TooManyCacheBehaviorsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
