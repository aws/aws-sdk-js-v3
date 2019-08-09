import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> Account Action is required in order to continue the request. </p>
 */
export interface AccountActionRequiredException
  extends __ServiceException__<_AccountActionRequiredExceptionDetails> {
  name: "AccountActionRequiredException";
}

export interface _AccountActionRequiredExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
