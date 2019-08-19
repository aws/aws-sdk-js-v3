import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The content for the document is not valid.</p>
 */
export interface InvalidDocumentContent
  extends __ServiceException__<_InvalidDocumentContentDetails> {
  name: "InvalidDocumentContent";
}

export interface _InvalidDocumentContentDetails {
  /**
   * <p>A description of the validation error.</p>
   */
  Message?: string;
}
