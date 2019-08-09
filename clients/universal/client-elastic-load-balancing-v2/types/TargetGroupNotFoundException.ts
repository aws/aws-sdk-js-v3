import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified target group does not exist.</p>
 */
export interface TargetGroupNotFoundException
  extends __ServiceException__<_TargetGroupNotFoundExceptionDetails> {
  name: "TargetGroupNotFoundException";
}

export interface _TargetGroupNotFoundExceptionDetails {}
