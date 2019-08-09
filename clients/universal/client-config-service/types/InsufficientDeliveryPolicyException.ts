import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your Amazon S3 bucket policy does not permit AWS Config to write to it.</p>
 */
export interface InsufficientDeliveryPolicyException
  extends __ServiceException__<_InsufficientDeliveryPolicyExceptionDetails> {
  name: "InsufficientDeliveryPolicyException";
}

export interface _InsufficientDeliveryPolicyExceptionDetails {}
