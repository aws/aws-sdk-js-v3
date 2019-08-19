import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Amazon Textract is unable to access the S3 object that's specified in the request.</p>
 */
export interface InvalidS3ObjectException
  extends __ServiceException__<_InvalidS3ObjectExceptionDetails> {
  name: "InvalidS3ObjectException";
}

export interface _InvalidS3ObjectExceptionDetails {}
