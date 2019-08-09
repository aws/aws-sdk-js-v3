import { _UnmarshalledDocumentMetadata } from "./_DocumentMetadata";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDocumentOutput shape
 */
export interface GetDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata details of the document.</p>
   */
  Metadata?: _UnmarshalledDocumentMetadata;

  /**
   * <p>The custom metadata on the document.</p>
   */
  CustomMetadata?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
