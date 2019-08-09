import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteCollectionOutput shape
 */
export interface DeleteCollectionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>HTTP status code that indicates the result of the operation.</p>
   */
  StatusCode?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
