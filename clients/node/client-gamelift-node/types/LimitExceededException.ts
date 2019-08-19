import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation would cause the resource to exceed the allowed service limit. Resolve the issue before retrying.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
