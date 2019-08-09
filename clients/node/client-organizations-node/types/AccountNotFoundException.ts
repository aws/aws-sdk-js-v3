import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> We can't find an AWS account with the <code>AccountId</code> that you specified, or the account whose credentials you used to make this request isn't a member of an organization.</p>
 */
export interface AccountNotFoundException
  extends __ServiceException__<_AccountNotFoundExceptionDetails> {
  name: "AccountNotFoundException";
}

export interface _AccountNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
