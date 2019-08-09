import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of load balancers per target group.</p>
 */
export interface TargetGroupAssociationLimitException
  extends __ServiceException__<_TargetGroupAssociationLimitExceptionDetails> {
  name: "TargetGroupAssociationLimitException";
}

export interface _TargetGroupAssociationLimitExceptionDetails {}
