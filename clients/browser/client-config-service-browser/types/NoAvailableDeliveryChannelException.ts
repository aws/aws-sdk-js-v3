import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no delivery channel available to record configurations.</p>
 */
export interface NoAvailableDeliveryChannelException
  extends __ServiceException__<_NoAvailableDeliveryChannelExceptionDetails> {
  name: "NoAvailableDeliveryChannelException";
}

export interface _NoAvailableDeliveryChannelExceptionDetails {}
