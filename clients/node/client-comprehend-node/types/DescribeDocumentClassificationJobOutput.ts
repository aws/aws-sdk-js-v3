import { _UnmarshalledDocumentClassificationJobProperties } from "./_DocumentClassificationJobProperties";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDocumentClassificationJobOutput shape
 */
export interface DescribeDocumentClassificationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An object that describes the properties associated with the document classification job.</p>
   */
  DocumentClassificationJobProperties?: _UnmarshalledDocumentClassificationJobProperties;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
