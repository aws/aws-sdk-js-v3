import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The content of the association document matches another document. Change the content of the document and try again.</p>
 */
export interface DuplicateDocumentContent
  extends __ServiceException__<_DuplicateDocumentContentDetails> {
  name: "DuplicateDocumentContent";
}

export interface _DuplicateDocumentContentDetails {
  /**
   * _String shape
   */
  Message?: string;
}
