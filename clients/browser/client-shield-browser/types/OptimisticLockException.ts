import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the protection state has been modified by another client. You can retry the request.</p>
 */
export interface OptimisticLockException
  extends __ServiceException__<_OptimisticLockExceptionDetails> {
  name: "OptimisticLockException";
}

export interface _OptimisticLockExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
