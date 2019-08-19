import { _UnmarshalledDocumentDescription } from "./_DocumentDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDocumentOutput shape
 */
export interface UpdateDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A description of the document that was updated.</p>
   */
  DocumentDescription?: _UnmarshalledDocumentDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
