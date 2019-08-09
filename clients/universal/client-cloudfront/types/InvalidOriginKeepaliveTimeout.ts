import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The keep alive timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginKeepaliveTimeout
  extends __ServiceException__<_InvalidOriginKeepaliveTimeoutDetails> {
  name: "InvalidOriginKeepaliveTimeout";
}

export interface _InvalidOriginKeepaliveTimeoutDetails {
  /**
   * _string shape
   */
  Message?: string;
}
