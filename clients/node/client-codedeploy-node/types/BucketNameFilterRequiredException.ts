import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A bucket name is required, but was not provided.</p>
 */
export interface BucketNameFilterRequiredException
  extends __ServiceException__<_BucketNameFilterRequiredExceptionDetails> {
  name: "BucketNameFilterRequiredException";
}

export interface _BucketNameFilterRequiredExceptionDetails {}
