import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InitiateLayerUploadOutput shape
 */
export interface InitiateLayerUploadOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The upload ID for the layer upload. This parameter is passed to further <a>UploadLayerPart</a> and <a>CompleteLayerUpload</a> operations.</p>
   */
  uploadId?: string;

  /**
   * <p>The size, in bytes, that Amazon ECR expects future layer part uploads to be.</p>
   */
  partSize?: number;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
