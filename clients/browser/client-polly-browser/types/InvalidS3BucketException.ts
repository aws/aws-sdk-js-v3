import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided Amazon S3 bucket name is invalid. Please check your input with S3 bucket naming requirements and try again.</p>
 */
export interface InvalidS3BucketException
  extends __ServiceException__<_InvalidS3BucketExceptionDetails> {
  name: "InvalidS3BucketException";
}

export interface _InvalidS3BucketExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
