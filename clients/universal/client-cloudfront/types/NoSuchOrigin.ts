import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No origin exists with the specified <code>Origin Id</code>. </p>
 */
export interface NoSuchOrigin
  extends __ServiceException__<_NoSuchOriginDetails> {
  name: "NoSuchOrigin";
}

export interface _NoSuchOriginDetails {
  /**
   * _string shape
   */
  Message?: string;
}
