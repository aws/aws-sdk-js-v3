import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the document is locked for comments and user tries to create or delete a comment on that document.</p>
 */
export interface DocumentLockedForCommentsException
  extends __ServiceException__<_DocumentLockedForCommentsExceptionDetails> {
  name: "DocumentLockedForCommentsException";
}

export interface _DocumentLockedForCommentsExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
