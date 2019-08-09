import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Can occur for multiple reasons such as when you tag a resource that doesn’t exist or if you specify a higher number of tags for a resource than the allowed limit. Allowed limit is 50 tags per resource.</p>
 */
export interface InvalidTaggingRequestException
  extends __ServiceException__<_InvalidTaggingRequestExceptionDetails> {
  name: "InvalidTaggingRequestException";
}

export interface _InvalidTaggingRequestExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
