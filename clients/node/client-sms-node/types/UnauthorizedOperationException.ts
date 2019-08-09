import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You lack permissions needed to perform this operation. Check your IAM policies, and ensure that you are using the correct access keys.</p>
 */
export interface UnauthorizedOperationException
  extends __ServiceException__<_UnauthorizedOperationExceptionDetails> {
  name: "UnauthorizedOperationException";
}

export interface _UnauthorizedOperationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
