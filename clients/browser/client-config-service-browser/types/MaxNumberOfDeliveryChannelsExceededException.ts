import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have reached the limit of the number of delivery channels you can create.</p>
 */
export interface MaxNumberOfDeliveryChannelsExceededException
  extends __ServiceException__<
    _MaxNumberOfDeliveryChannelsExceededExceptionDetails
  > {
  name: "MaxNumberOfDeliveryChannelsExceededException";
}

export interface _MaxNumberOfDeliveryChannelsExceededExceptionDetails {}
