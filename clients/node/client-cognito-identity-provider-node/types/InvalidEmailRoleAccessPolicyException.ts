import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when Amazon Cognito is not allowed to use your email identity. HTTP status code: 400.</p>
 */
export interface InvalidEmailRoleAccessPolicyException
  extends __ServiceException__<_InvalidEmailRoleAccessPolicyExceptionDetails> {
  name: "InvalidEmailRoleAccessPolicyException";
}

export interface _InvalidEmailRoleAccessPolicyExceptionDetails {
  /**
   * <p>The message returned when you have an unverified email address or the identity policy is not set on an email address that Amazon Cognito can access.</p>
   */
  message?: string;
}
