import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the number of events you can subscribe to.</p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __ServiceException__<_EventSubscriptionQuotaExceededFaultDetails> {
  name: "EventSubscriptionQuotaExceededFault";
}

export interface _EventSubscriptionQuotaExceededFaultDetails {}
