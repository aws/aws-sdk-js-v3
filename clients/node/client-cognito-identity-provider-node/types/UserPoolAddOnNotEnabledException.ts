import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when user pool add-ons are not enabled.</p>
 */
export interface UserPoolAddOnNotEnabledException
  extends __ServiceException__<_UserPoolAddOnNotEnabledExceptionDetails> {
  name: "UserPoolAddOnNotEnabledException";
}

export interface _UserPoolAddOnNotEnabledExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
