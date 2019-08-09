import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the of the storage volume that was deleted</p>
 */
export interface DeleteVolumeOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume that was deleted. It is the same ARN you provided in the request.</p>
   */
  VolumeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
