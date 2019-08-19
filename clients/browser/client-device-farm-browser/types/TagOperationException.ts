import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation was not successful. Try again.</p>
 */
export interface TagOperationException
  extends __ServiceException__<_TagOperationExceptionDetails> {
  name: "TagOperationException";
}

export interface _TagOperationExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;

  /**
   * _AmazonResourceName shape
   */
  resourceName?: string;
}
