import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified limit is outside the allowable range.</p>
 */
export interface InvalidLimitException
  extends __ServiceException__<_InvalidLimitExceptionDetails> {
  name: "InvalidLimitException";
}

export interface _InvalidLimitExceptionDetails {}
