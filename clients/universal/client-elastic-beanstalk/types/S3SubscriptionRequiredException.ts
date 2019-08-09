import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account does not have a subscription to Amazon S3.</p>
 */
export interface S3SubscriptionRequiredException
  extends __ServiceException__<_S3SubscriptionRequiredExceptionDetails> {
  name: "S3SubscriptionRequiredException";
}

export interface _S3SubscriptionRequiredExceptionDetails {}
