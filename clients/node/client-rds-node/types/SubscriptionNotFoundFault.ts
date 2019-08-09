import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The subscription name does not exist.</p>
 */
export interface SubscriptionNotFoundFault
  extends __ServiceException__<_SubscriptionNotFoundFaultDetails> {
  name: "SubscriptionNotFoundFault";
}

export interface _SubscriptionNotFoundFaultDetails {}
