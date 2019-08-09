import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A general service exception.</p>
 */
export interface ServiceException
  extends __ServiceException__<_ServiceExceptionDetails> {
  name: "ServiceException";
}

export interface _ServiceExceptionDetails {
  /**
   * _string shape
   */
  code?: string;

  /**
   * _string shape
   */
  docs?: string;

  /**
   * _string shape
   */
  message?: string;

  /**
   * _string shape
   */
  tip?: string;
}
