import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided Amazon S3 key prefix is invalid. Please provide a valid S3 object key name.</p>
 */
export interface InvalidS3KeyException
  extends __ServiceException__<_InvalidS3KeyExceptionDetails> {
  name: "InvalidS3KeyException";
}

export interface _InvalidS3KeyExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
