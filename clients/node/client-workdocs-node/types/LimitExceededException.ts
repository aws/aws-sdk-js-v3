import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum of 100,000 folders under the parent folder has been exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
