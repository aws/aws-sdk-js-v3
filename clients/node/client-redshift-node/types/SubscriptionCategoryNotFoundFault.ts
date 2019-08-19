import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value specified for the event category was not one of the allowed values, or it specified a category that does not apply to the specified source type. The allowed values are Configuration, Management, Monitoring, and Security.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __ServiceException__<_SubscriptionCategoryNotFoundFaultDetails> {
  name: "SubscriptionCategoryNotFoundFault";
}

export interface _SubscriptionCategoryNotFoundFaultDetails {}
