import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The subscription request is invalid because it is a duplicate request. This subscription request is already in progress.</p>
 */
export interface InvalidSubscriptionStateFault
  extends __ServiceException__<_InvalidSubscriptionStateFaultDetails> {
  name: "InvalidSubscriptionStateFault";
}

export interface _InvalidSubscriptionStateFaultDetails {}
