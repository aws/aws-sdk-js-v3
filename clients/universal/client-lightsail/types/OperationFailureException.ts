import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Lightsail throws this exception when an operation fails to execute.</p>
 */
export interface OperationFailureException
  extends __ServiceException__<_OperationFailureExceptionDetails> {
  name: "OperationFailureException";
}

export interface _OperationFailureExceptionDetails {
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
