import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The ARN of the role that you specifed does not exist.</p>
 */
export interface NoAssociatedRoleException
  extends __ServiceException__<_NoAssociatedRoleExceptionDetails> {
  name: "NoAssociatedRoleException";
}

export interface _NoAssociatedRoleExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
