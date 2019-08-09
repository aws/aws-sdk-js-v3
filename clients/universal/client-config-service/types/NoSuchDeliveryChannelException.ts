import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a delivery channel that does not exist.</p>
 */
export interface NoSuchDeliveryChannelException
  extends __ServiceException__<_NoSuchDeliveryChannelExceptionDetails> {
  name: "NoSuchDeliveryChannelException";
}

export interface _NoSuchDeliveryChannelExceptionDetails {}
