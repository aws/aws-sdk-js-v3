import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value specified for the event severity was not one of the allowed values, or it specified a severity that does not apply to the specified source type. The allowed values are ERROR and INFO.</p>
 */
export interface SubscriptionSeverityNotFoundFault
  extends __ServiceException__<_SubscriptionSeverityNotFoundFaultDetails> {
  name: "SubscriptionSeverityNotFoundFault";
}

export interface _SubscriptionSeverityNotFoundFaultDetails {}
