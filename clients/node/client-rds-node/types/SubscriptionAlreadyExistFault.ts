import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The supplied subscription name already exists.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __ServiceException__<_SubscriptionAlreadyExistFaultDetails> {
  name: "SubscriptionAlreadyExistFault";
}

export interface _SubscriptionAlreadyExistFaultDetails {}
