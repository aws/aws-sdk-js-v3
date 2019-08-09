import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The filter specified for the operation is invalid. Specify a different filter.</p>
 */
export interface InvalidFilterException
  extends __ServiceException__<_InvalidFilterExceptionDetails> {
  name: "InvalidFilterException";
}

export interface _InvalidFilterExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
