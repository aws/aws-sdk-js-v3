import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You don't have permissions to perform this action.</p>
 */
export interface ForbiddenException
  extends __ServiceException__<_ForbiddenExceptionDetails> {
  name: "ForbiddenException";
}

export interface _ForbiddenExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
