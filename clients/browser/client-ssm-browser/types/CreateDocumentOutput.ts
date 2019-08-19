import { _UnmarshalledDocumentDescription } from "./_DocumentDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDocumentOutput shape
 */
export interface CreateDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  DocumentDescription?: _UnmarshalledDocumentDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
