import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more of the specified security groups do not exist.</p>
 */
export interface InvalidSecurityGroupException
  extends __ServiceException__<_InvalidSecurityGroupExceptionDetails> {
  name: "InvalidSecurityGroupException";
}

export interface _InvalidSecurityGroupExceptionDetails {}
