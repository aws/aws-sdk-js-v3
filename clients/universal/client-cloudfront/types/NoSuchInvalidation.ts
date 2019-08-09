import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified invalidation does not exist.</p>
 */
export interface NoSuchInvalidation
  extends __ServiceException__<_NoSuchInvalidationDetails> {
  name: "NoSuchInvalidation";
}

export interface _NoSuchInvalidationDetails {
  /**
   * _string shape
   */
  Message?: string;
}
