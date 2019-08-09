import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This subscription already exists.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __ServiceException__<_SubscriptionAlreadyExistFaultDetails> {
  name: "SubscriptionAlreadyExistFault";
}

export interface _SubscriptionAlreadyExistFaultDetails {}
