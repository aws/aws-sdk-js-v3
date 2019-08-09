import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The bucket name either doesn't exist or was specified in an invalid format.</p>
 */
export interface InvalidBucketNameFilterException
  extends __ServiceException__<_InvalidBucketNameFilterExceptionDetails> {
  name: "InvalidBucketNameFilterException";
}

export interface _InvalidBucketNameFilterExceptionDetails {}
