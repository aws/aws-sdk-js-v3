import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 */
export interface PolicyLengthExceededException
  extends __ServiceException__<_PolicyLengthExceededExceptionDetails> {
  name: "PolicyLengthExceededException";
}

export interface _PolicyLengthExceededExceptionDetails {}
