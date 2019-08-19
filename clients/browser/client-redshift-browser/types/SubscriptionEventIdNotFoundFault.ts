import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An Amazon Redshift event with the specified event ID does not exist.</p>
 */
export interface SubscriptionEventIdNotFoundFault
  extends __ServiceException__<_SubscriptionEventIdNotFoundFaultDetails> {
  name: "SubscriptionEventIdNotFoundFault";
}

export interface _SubscriptionEventIdNotFoundFaultDetails {}
