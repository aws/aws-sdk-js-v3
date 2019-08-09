import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import { _UnmarshalledBlock } from "./_Block";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DetectDocumentTextOutput shape
 */
export interface DetectDocumentTextOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Metadata about the document. Contains the number of pages that are detected in the document.</p>
   */
  DocumentMetadata?: _UnmarshalledDocumentMetadata;

  /**
   * <p>An array of Block objects containing the text detected in the document.</p>
   */
  Blocks?: Array<_UnmarshalledBlock>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
