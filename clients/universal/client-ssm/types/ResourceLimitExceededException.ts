import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error returned when the caller has exceeded the default resource limits. For example, too many maintenance windows or patch baselines have been created.</p> <p>For information about resource limits in Systems Manager, see <a href="http://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_ssm">AWS Systems Manager Limits</a>.</p>
 */
export interface ResourceLimitExceededException
  extends __ServiceException__<_ResourceLimitExceededExceptionDetails> {
  name: "ResourceLimitExceededException";
}

export interface _ResourceLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
