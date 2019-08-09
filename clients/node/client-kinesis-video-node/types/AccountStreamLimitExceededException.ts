import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The number of streams created for the account is too high.</p>
 */
export interface AccountStreamLimitExceededException
  extends __ServiceException__<_AccountStreamLimitExceededExceptionDetails> {
  name: "AccountStreamLimitExceededException";
}

export interface _AccountStreamLimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
