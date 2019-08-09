import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified security group does not exist.</p>
 */
export interface InvalidSecurityGroupException
  extends __ServiceException__<_InvalidSecurityGroupExceptionDetails> {
  name: "InvalidSecurityGroupException";
}

export interface _InvalidSecurityGroupExceptionDetails {}
