import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The Amazon S3 Glacier response to your request.</p>
 */
export interface InitiateMultipartUploadOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The relative URI path of the multipart upload ID Amazon S3 Glacier created.</p>
   */
  location?: string;

  /**
   * <p>The ID of the multipart upload. This value is also included as part of the location.</p>
   */
  uploadId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
