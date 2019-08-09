import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The designated subscription category could not be found.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __ServiceException__<_SubscriptionCategoryNotFoundFaultDetails> {
  name: "SubscriptionCategoryNotFoundFault";
}

export interface _SubscriptionCategoryNotFoundFaultDetails {}
