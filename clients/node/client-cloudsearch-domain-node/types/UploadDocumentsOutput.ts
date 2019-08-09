import { _UnmarshalledDocumentServiceWarning } from "./_DocumentServiceWarning";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to an <code>UploadDocuments</code> request.</p>
 */
export interface UploadDocumentsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of an <code>UploadDocumentsRequest</code>.</p>
   */
  status?: string;

  /**
   * <p>The number of documents that were added to the search domain.</p>
   */
  adds?: number;

  /**
   * <p>The number of documents that were deleted from the search domain.</p>
   */
  deletes?: number;

  /**
   * <p>Any warnings returned by the document service about the documents being uploaded.</p>
   */
  warnings?: Array<_UnmarshalledDocumentServiceWarning>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
