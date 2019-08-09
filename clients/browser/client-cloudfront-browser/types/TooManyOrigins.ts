import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot create more origins for the distribution.</p>
 */
export interface TooManyOrigins
  extends __ServiceException__<_TooManyOriginsDetails> {
  name: "TooManyOrigins";
}

export interface _TooManyOriginsDetails {
  /**
   * _string shape
   */
  Message?: string;
}
