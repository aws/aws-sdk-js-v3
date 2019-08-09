import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Something went wrong. </p>
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
