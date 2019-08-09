import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CompleteLayerUploadOutput shape
 */
export interface CompleteLayerUploadOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The registry ID associated with the request.</p>
   */
  registryId?: string;

  /**
   * <p>The repository name associated with the request.</p>
   */
  repositoryName?: string;

  /**
   * <p>The upload ID associated with the layer.</p>
   */
  uploadId?: string;

  /**
   * <p>The <code>sha256</code> digest of the image layer.</p>
   */
  layerDigest?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
