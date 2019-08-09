import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The version name has already been used in this document. Specify a different version name, and then try again.</p>
 */
export interface DuplicateDocumentVersionName
  extends __ServiceException__<_DuplicateDocumentVersionNameDetails> {
  name: "DuplicateDocumentVersionName";
}

export interface _DuplicateDocumentVersionNameDetails {
  /**
   * _String shape
   */
  Message?: string;
}
