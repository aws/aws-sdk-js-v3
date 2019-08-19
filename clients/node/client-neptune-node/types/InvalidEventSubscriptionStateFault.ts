import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The event subscription is in an invalid state.</p>
 */
export interface InvalidEventSubscriptionStateFault
  extends __ServiceException__<_InvalidEventSubscriptionStateFaultDetails> {
  name: "InvalidEventSubscriptionStateFault";
}

export interface _InvalidEventSubscriptionStateFaultDetails {}
