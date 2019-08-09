import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Organizations can't complete your request because of an internal service error. Try again later.</p>
 */
export interface ServiceException
  extends __ServiceException__<_ServiceExceptionDetails> {
  name: "ServiceException";
}

export interface _ServiceExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
