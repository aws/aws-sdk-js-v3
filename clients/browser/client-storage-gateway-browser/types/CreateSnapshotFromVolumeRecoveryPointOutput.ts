import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSnapshotFromVolumeRecoveryPointOutput shape
 */
export interface CreateSnapshotFromVolumeRecoveryPointOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the iSCSI volume target. Use the <a>DescribeStorediSCSIVolumes</a> operation to return to retrieve the TargetARN for specified VolumeARN.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The time the volume was created from the recovery point.</p>
   */
  VolumeRecoveryPointTime?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
