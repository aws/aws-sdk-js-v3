import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The role ID was not specified.</p>
 */
export interface RoleRequiredException
  extends __ServiceException__<_RoleRequiredExceptionDetails> {
  name: "RoleRequiredException";
}

export interface _RoleRequiredExceptionDetails {}
