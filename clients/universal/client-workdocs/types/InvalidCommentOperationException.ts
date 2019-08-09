import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation is not allowed on the specified comment object.</p>
 */
export interface InvalidCommentOperationException
  extends __ServiceException__<_InvalidCommentOperationExceptionDetails> {
  name: "InvalidCommentOperationException";
}

export interface _InvalidCommentOperationExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
