import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when a valid checkout ID is not presented on document version upload calls for a document that has been checked out from Web client.</p>
 */
export interface DraftUploadOutOfSyncException
  extends __ServiceException__<_DraftUploadOutOfSyncExceptionDetails> {
  name: "DraftUploadOutOfSyncException";
}

export interface _DraftUploadOutOfSyncExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
