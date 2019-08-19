import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified delivery channel name is not valid.</p>
 */
export interface InvalidDeliveryChannelNameException
  extends __ServiceException__<_InvalidDeliveryChannelNameExceptionDetails> {
  name: "InvalidDeliveryChannelNameException";
}

export interface _InvalidDeliveryChannelNameExceptionDetails {}
