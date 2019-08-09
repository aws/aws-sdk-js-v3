import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified role is invalid.</p>
 */
export interface InvalidRoleException
  extends __ServiceException__<_InvalidRoleExceptionDetails> {
  name: "InvalidRoleException";
}

export interface _InvalidRoleExceptionDetails {
  /**
   * <p>The error message in the exception.</p>
   */
  Message?: string;
}
