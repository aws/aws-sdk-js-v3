import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A tag has been added to a resource with the same ARN as a deleted resource. Wait a short while and then retry the operation.</p>
 */
export interface StaleTagException
  extends __ServiceException__<_StaleTagExceptionDetails> {
  name: "StaleTagException";
}

export interface _StaleTagExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
