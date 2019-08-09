import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified document does not exist.</p>
 */
export interface InvalidDocument
  extends __ServiceException__<_InvalidDocumentDetails> {
  name: "InvalidDocument";
}

export interface _InvalidDocumentDetails {
  /**
   * <p>The document does not exist or the document is not available to the user. This exception can be issued by CreateAssociation, CreateAssociationBatch, DeleteAssociation, DeleteDocument, DescribeAssociation, DescribeDocument, GetDocument, SendCommand, or UpdateAssociationStatus. </p>
   */
  Message?: string;
}
