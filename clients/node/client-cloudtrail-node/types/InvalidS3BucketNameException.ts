import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 */
export interface InvalidS3BucketNameException
  extends __ServiceException__<_InvalidS3BucketNameExceptionDetails> {
  name: "InvalidS3BucketNameException";
}

export interface _InvalidS3BucketNameExceptionDetails {}
