import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSnapshotScheduleOutput shape
 */
export interface DescribeSnapshotScheduleOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the volume that was specified in the request.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The hour of the day at which the snapshot schedule begins represented as <i>hh</i>, where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</p>
   */
  StartAt?: number;

  /**
   * <p>The number of hours between snapshots.</p>
   */
  RecurrenceInHours?: number;

  /**
   * <p>The snapshot description.</p>
   */
  Description?: string;

  /**
   * <p>A value that indicates the time zone of the gateway.</p>
   */
  Timezone?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
