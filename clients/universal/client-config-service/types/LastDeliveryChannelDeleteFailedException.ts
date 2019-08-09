import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot delete the delivery channel you specified because the configuration recorder is running.</p>
 */
export interface LastDeliveryChannelDeleteFailedException
  extends __ServiceException__<
    _LastDeliveryChannelDeleteFailedExceptionDetails
  > {
  name: "LastDeliveryChannelDeleteFailedException";
}

export interface _LastDeliveryChannelDeleteFailedExceptionDetails {}
