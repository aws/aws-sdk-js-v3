import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The version of the document schema is not supported.</p>
 */
export interface InvalidDocumentSchemaVersion
  extends __ServiceException__<_InvalidDocumentSchemaVersionDetails> {
  name: "InvalidDocumentSchemaVersion";
}

export interface _InvalidDocumentSchemaVersionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
