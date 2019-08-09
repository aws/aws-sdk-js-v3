import { _UnmarshalledDocumentClassifierProperties } from "./_DocumentClassifierProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentClassifierOutput shape
 */
export interface DescribeDocumentClassifierOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that contains the properties associated with a document classifier.</p>
   */
  DocumentClassifierProperties?: _UnmarshalledDocumentClassifierProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
