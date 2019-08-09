import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The read timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginReadTimeout
  extends __ServiceException__<_InvalidOriginReadTimeoutDetails> {
  name: "InvalidOriginReadTimeout";
}

export interface _InvalidOriginReadTimeoutDetails {
  /**
   * _string shape
   */
  Message?: string;
}
