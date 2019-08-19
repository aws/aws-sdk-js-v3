import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified target does not exist, is not in the same VPC as the target group, or has an unsupported instance type.</p>
 */
export interface InvalidTargetException
  extends __ServiceException__<_InvalidTargetExceptionDetails> {
  name: "InvalidTargetException";
}

export interface _InvalidTargetExceptionDetails {}
