import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested content range is not valid.</p>
 */
export interface RequestedRangeNotSatisfiableException
  extends __ServiceException__<_RequestedRangeNotSatisfiableExceptionDetails> {
  name: "RequestedRangeNotSatisfiableException";
}

export interface _RequestedRangeNotSatisfiableExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
