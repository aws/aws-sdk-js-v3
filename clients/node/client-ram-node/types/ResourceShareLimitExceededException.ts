import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested resource share exceeds the limit for your account.</p>
 */
export interface ResourceShareLimitExceededException
  extends __ServiceException__<_ResourceShareLimitExceededExceptionDetails> {
  name: "ResourceShareLimitExceededException";
}

export interface _ResourceShareLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
