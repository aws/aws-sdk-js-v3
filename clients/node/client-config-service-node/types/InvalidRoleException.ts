import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have provided a null or empty role ARN.</p>
 */
export interface InvalidRoleException
  extends __ServiceException__<_InvalidRoleExceptionDetails> {
  name: "InvalidRoleException";
}

export interface _InvalidRoleExceptionDetails {}
