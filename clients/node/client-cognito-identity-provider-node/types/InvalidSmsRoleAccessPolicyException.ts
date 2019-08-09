import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is returned when the role provided for SMS configuration does not have permission to publish using Amazon SNS.</p>
 */
export interface InvalidSmsRoleAccessPolicyException
  extends __ServiceException__<_InvalidSmsRoleAccessPolicyExceptionDetails> {
  name: "InvalidSmsRoleAccessPolicyException";
}

export interface _InvalidSmsRoleAccessPolicyExceptionDetails {
  /**
   * <p>The message retuned when the invalid SMS role access policy exception is thrown.</p>
   */
  message?: string;
}
