import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 */
export interface InvalidOrigin
  extends __ServiceException__<_InvalidOriginDetails> {
  name: "InvalidOrigin";
}

export interface _InvalidOriginDetails {
  /**
   * _string shape
   */
  Message?: string;
}
