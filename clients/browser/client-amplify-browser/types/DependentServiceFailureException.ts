import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Exception thrown when an operation fails due to a dependent service throwing an exception. </p>
 */
export interface DependentServiceFailureException
  extends __ServiceException__<_DependentServiceFailureExceptionDetails> {
  name: "DependentServiceFailureException";
}

export interface _DependentServiceFailureExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
