import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A target group with the specified name already exists.</p>
 */
export interface DuplicateTargetGroupNameException
  extends __ServiceException__<_DuplicateTargetGroupNameExceptionDetails> {
  name: "DuplicateTargetGroupNameException";
}

export interface _DuplicateTargetGroupNameExceptionDetails {}
