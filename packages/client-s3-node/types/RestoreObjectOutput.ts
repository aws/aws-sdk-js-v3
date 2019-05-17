import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RestoreObjectOutput shape
 */
export interface RestoreObjectOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If present, indicates that the requester was successfully charged for the request.</p>
   */
  RequestCharged?: "requester" | string;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be restored to.</p>
   */
  RestoreOutputPath?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
