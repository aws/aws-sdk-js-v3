import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 */
export interface InvalidEventSubscriptionStateFault
  extends __ServiceException__<_InvalidEventSubscriptionStateFaultDetails> {
  name: "InvalidEventSubscriptionStateFault";
}

export interface _InvalidEventSubscriptionStateFaultDetails {}
