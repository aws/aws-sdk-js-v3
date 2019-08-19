import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified Amazon S3 key prefix is not valid.</p>
 */
export interface InvalidS3KeyPrefixException
  extends __ServiceException__<_InvalidS3KeyPrefixExceptionDetails> {
  name: "InvalidS3KeyPrefixException";
}

export interface _InvalidS3KeyPrefixExceptionDetails {}
