import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The document version is not valid or does not exist.</p>
 */
export interface InvalidDocumentVersion
  extends __ServiceException__<_InvalidDocumentVersionDetails> {
  name: "InvalidDocumentVersion";
}

export interface _InvalidDocumentVersionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
