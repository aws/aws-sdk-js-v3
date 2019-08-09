import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You attempted to delete a document while it is still shared. You must stop sharing the document before you can delete it.</p>
 */
export interface InvalidDocumentOperation
  extends __ServiceException__<_InvalidDocumentOperationDetails> {
  name: "InvalidDocumentOperation";
}

export interface _InvalidDocumentOperationDetails {
  /**
   * _String shape
   */
  Message?: string;
}
