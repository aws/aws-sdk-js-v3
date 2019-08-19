import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Can't perform multiple operations on a tag simultaneously. Perform the operations sequentially.</p>
 */
export interface ConcurrentAccessException
  extends __ServiceException__<_ConcurrentAccessExceptionDetails> {
  name: "ConcurrentAccessException";
}

export interface _ConcurrentAccessExceptionDetails {
  /**
   * __string shape
   */
  message?: string;
}
