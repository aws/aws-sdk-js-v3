import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 */
export interface S3BucketDoesNotExistException
  extends __ServiceException__<_S3BucketDoesNotExistExceptionDetails> {
  name: "S3BucketDoesNotExistException";
}

export interface _S3BucketDoesNotExistExceptionDetails {}
