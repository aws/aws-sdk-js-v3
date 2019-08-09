import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is already an existing event notification subscription with the specified name.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __ServiceException__<_SubscriptionAlreadyExistFaultDetails> {
  name: "SubscriptionAlreadyExistFault";
}

export interface _SubscriptionAlreadyExistFaultDetails {}
