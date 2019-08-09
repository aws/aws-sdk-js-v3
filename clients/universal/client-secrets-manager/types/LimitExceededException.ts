import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because it would exceed one of the Secrets Manager internal limits.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
