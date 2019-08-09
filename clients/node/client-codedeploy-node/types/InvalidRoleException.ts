import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service role ARN was specified in an invalid format. Or, if an Auto Scaling group was specified, the specified service role does not grant the appropriate permissions to Amazon EC2 Auto Scaling.</p>
 */
export interface InvalidRoleException
  extends __ServiceException__<_InvalidRoleExceptionDetails> {
  name: "InvalidRoleException";
}

export interface _InvalidRoleExceptionDetails {}
