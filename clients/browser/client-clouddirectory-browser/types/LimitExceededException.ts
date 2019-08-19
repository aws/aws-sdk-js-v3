import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that limits are exceeded. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Limits</a> for more information.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
