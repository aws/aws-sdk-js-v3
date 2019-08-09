import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of target groups for your AWS account.</p>
 */
export interface TooManyTargetGroupsException
  extends __ServiceException__<_TooManyTargetGroupsExceptionDetails> {
  name: "TooManyTargetGroupsException";
}

export interface _TooManyTargetGroupsExceptionDetails {}
