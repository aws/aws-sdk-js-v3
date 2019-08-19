import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.</p>
 */
export interface InvalidCrossAccountRoleException
  extends __ServiceException__<_InvalidCrossAccountRoleExceptionDetails> {
  name: "InvalidCrossAccountRoleException";
}

export interface _InvalidCrossAccountRoleExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode:
    | "ROLE_DOES_NOT_EXIST_OR_INVALID_TRUST_RELATIONSHIP"
    | "ROLE_DOES_NOT_HAVE_CORRECT_POLICY"
    | string;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
