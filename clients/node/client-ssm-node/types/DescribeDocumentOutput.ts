import { _UnmarshalledDocumentDescription } from "./_DocumentDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentOutput shape
 */
export interface DescribeDocumentOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Systems Manager document.</p>
   */
  Document?: _UnmarshalledDocumentDescription;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
