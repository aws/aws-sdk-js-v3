import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 */
export interface TooManyBucketsException
  extends __ServiceException__<_TooManyBucketsExceptionDetails> {
  name: "TooManyBucketsException";
}

export interface _TooManyBucketsExceptionDetails {}
