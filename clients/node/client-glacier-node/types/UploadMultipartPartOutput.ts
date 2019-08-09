import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface UploadMultipartPartOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SHA256 tree hash that Amazon S3 Glacier computed for the uploaded part.</p>
   */
  checksum?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
