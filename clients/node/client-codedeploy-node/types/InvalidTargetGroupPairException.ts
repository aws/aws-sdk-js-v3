import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> A target group pair associated with this deployment is not valid. </p>
 */
export interface InvalidTargetGroupPairException
  extends __ServiceException__<_InvalidTargetGroupPairExceptionDetails> {
  name: "InvalidTargetGroupPairException";
}

export interface _InvalidTargetGroupPairExceptionDetails {}
