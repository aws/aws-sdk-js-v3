import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A resource such as a private CA, S3 bucket, certificate, or audit report cannot be found.</p>
 */
export interface ResourceNotFoundException
  extends __ServiceException__<_ResourceNotFoundExceptionDetails> {
  name: "ResourceNotFoundException";
}

export interface _ResourceNotFoundExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
