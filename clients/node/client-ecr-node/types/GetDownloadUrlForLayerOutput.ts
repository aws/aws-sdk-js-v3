import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDownloadUrlForLayerOutput shape
 */
export interface GetDownloadUrlForLayerOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The pre-signed Amazon S3 download URL for the requested layer.</p>
   */
  downloadUrl?: string;

  /**
   * <p>The digest of the image layer to download.</p>
   */
  layerDigest?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
