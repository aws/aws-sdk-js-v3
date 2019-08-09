import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The supplied category does not exist.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __ServiceException__<_SubscriptionCategoryNotFoundFaultDetails> {
  name: "SubscriptionCategoryNotFoundFault";
}

export interface _SubscriptionCategoryNotFoundFaultDetails {}
