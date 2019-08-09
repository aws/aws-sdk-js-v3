import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that provided delivery option is invalid.</p>
 */
export interface InvalidDeliveryOptionsException
  extends __ServiceException__<_InvalidDeliveryOptionsExceptionDetails> {
  name: "InvalidDeliveryOptionsException";
}

export interface _InvalidDeliveryOptionsExceptionDetails {}
