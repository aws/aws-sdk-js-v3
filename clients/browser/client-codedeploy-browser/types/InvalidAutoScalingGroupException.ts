import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The Auto Scaling group was specified in an invalid format or does not exist.</p>
 */
export interface InvalidAutoScalingGroupException
  extends __ServiceException__<_InvalidAutoScalingGroupExceptionDetails> {
  name: "InvalidAutoScalingGroupException";
}

export interface _InvalidAutoScalingGroupExceptionDetails {}
