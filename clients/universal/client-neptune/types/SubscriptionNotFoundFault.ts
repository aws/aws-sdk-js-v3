import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The designated subscription could not be found.</p>
 */
export interface SubscriptionNotFoundFault
  extends __ServiceException__<_SubscriptionNotFoundFaultDetails> {
  name: "SubscriptionNotFoundFault";
}

export interface _SubscriptionNotFoundFaultDetails {}
