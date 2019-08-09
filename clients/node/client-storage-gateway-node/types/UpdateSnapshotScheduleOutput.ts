import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the of the updated storage volume.</p>
 */
export interface UpdateSnapshotScheduleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume. Use the <a>ListVolumes</a> operation to return a list of gateway volumes.</p>
   */
  VolumeARN?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
