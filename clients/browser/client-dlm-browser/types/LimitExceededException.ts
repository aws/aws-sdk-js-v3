import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request failed because a limit was exceeded.</p>
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

  /**
   * _ErrorCode shape
   */
  Code?: string;

  /**
   * <p>Value is the type of resource for which a limit was exceeded.</p>
   */
  ResourceType?: string;
}
