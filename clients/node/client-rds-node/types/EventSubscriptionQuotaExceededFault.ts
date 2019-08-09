import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the maximum number of event subscriptions.</p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __ServiceException__<_EventSubscriptionQuotaExceededFaultDetails> {
  name: "EventSubscriptionQuotaExceededFault";
}

export interface _EventSubscriptionQuotaExceededFaultDetails {}
