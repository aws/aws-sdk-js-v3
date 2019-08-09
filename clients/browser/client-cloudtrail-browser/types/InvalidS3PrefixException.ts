import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 */
export interface InvalidS3PrefixException
  extends __ServiceException__<_InvalidS3PrefixExceptionDetails> {
  name: "InvalidS3PrefixException";
}

export interface _InvalidS3PrefixExceptionDetails {}
