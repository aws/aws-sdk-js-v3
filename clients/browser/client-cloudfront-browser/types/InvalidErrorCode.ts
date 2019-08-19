import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid error code was specified.</p>
 */
export interface InvalidErrorCode
  extends __ServiceException__<_InvalidErrorCodeDetails> {
  name: "InvalidErrorCode";
}

export interface _InvalidErrorCodeDetails {
  /**
   * _string shape
   */
  Message?: string;
}
