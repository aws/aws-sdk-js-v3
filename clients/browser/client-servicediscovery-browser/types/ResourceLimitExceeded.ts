import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource can't be created because you've reached the limit on the number of resources.</p>
 */
export interface ResourceLimitExceeded
  extends __ServiceException__<_ResourceLimitExceededDetails> {
  name: "ResourceLimitExceeded";
}

export interface _ResourceLimitExceededDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
