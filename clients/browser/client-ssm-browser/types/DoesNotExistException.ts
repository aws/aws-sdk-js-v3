import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error returned when the ID specified for a resource, such as a maintenance window or Patch baseline, doesn't exist.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
 */
export interface DoesNotExistException
  extends __ServiceException__<_DoesNotExistExceptionDetails> {
  name: "DoesNotExistException";
}

export interface _DoesNotExistExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
