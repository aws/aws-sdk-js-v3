import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You don't have access to this. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Ensure that your account is authorized to use the Amazon QuickSight service, that your policies have the correct permissions, and that you are using the correct access keys.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;

  /**
   * <p>The AWS request id for this request.</p>
   */
  RequestId?: string;
}
