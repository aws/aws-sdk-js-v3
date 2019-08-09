import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service role is not valid.</p>
 */
export interface InvalidServiceRoleException
  extends __ServiceException__<_InvalidServiceRoleExceptionDetails> {
  name: "InvalidServiceRoleException";
}

export interface _InvalidServiceRoleExceptionDetails {}
