import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An AWS service limit was exceeded for the calling AWS account.</p>
 */
export interface AccountLimitExceededException
  extends __ServiceException__<_AccountLimitExceededExceptionDetails> {
  name: "AccountLimitExceededException";
}

export interface _AccountLimitExceededExceptionDetails {}
