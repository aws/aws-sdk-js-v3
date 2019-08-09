import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The policy type is not supported. Parameter Store supports the following policy types: Expiration, ExpirationNotification, and NoChangeNotification.</p>
 */
export interface InvalidPolicyTypeException
  extends __ServiceException__<_InvalidPolicyTypeExceptionDetails> {
  name: "InvalidPolicyTypeException";
}

export interface _InvalidPolicyTypeExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
