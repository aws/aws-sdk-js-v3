import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The size limit of a document is 64 KB.</p>
 */
export interface MaxDocumentSizeExceeded
  extends __ServiceException__<_MaxDocumentSizeExceededDetails> {
  name: "MaxDocumentSizeExceeded";
}

export interface _MaxDocumentSizeExceededDetails {
  /**
   * _String shape
   */
  Message?: string;
}
