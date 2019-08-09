import { _UnmarshalledStorediSCSIVolume } from "./_StorediSCSIVolume";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeStorediSCSIVolumesOutput shape
 */
export interface DescribeStorediSCSIVolumesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Describes a single unit of output from <a>DescribeStorediSCSIVolumes</a>. The following fields are returned:</p> <ul> <li> <p> <b>ChapEnabled</b>: Indicates whether mutual CHAP is enabled for the iSCSI target.</p> </li> <li> <p> <b>LunNumber</b>: The logical disk number.</p> </li> <li> <p> <b>NetworkInterfaceId</b>: The network interface ID of the stored volume that initiator use to map the stored volume as an iSCSI target.</p> </li> <li> <p> <b>NetworkInterfacePort</b>: The port used to communicate with iSCSI targets.</p> </li> <li> <p> <b>PreservedExistingData</b>: Indicates if when the stored volume was created, existing data on the underlying local disk was preserved.</p> </li> <li> <p> <b>SourceSnapshotId</b>: If the stored volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-1122aabb. Otherwise, this field is not included.</p> </li> <li> <p> <b>StorediSCSIVolumes</b>: An array of StorediSCSIVolume objects where each object contains metadata about one stored volume.</p> </li> <li> <p> <b>TargetARN</b>: The Amazon Resource Name (ARN) of the volume target.</p> </li> <li> <p> <b>VolumeARN</b>: The Amazon Resource Name (ARN) of the stored volume.</p> </li> <li> <p> <b>VolumeDiskId</b>: The disk ID of the local disk that was specified in the <a>CreateStorediSCSIVolume</a> operation.</p> </li> <li> <p> <b>VolumeId</b>: The unique identifier of the storage volume, e.g. vol-1122AABB.</p> </li> <li> <p> <b>VolumeiSCSIAttributes</b>: An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p> </li> <li> <p> <b>VolumeProgress</b>: Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the stored volume is not restoring or bootstrapping.</p> </li> <li> <p> <b>VolumeSizeInBytes</b>: The size of the volume in bytes.</p> </li> <li> <p> <b>VolumeStatus</b>: One of the <code>VolumeStatus</code> values that indicates the state of the volume.</p> </li> <li> <p> <b>VolumeType</b>: One of the enumeration values describing the type of the volume. Currently, on STORED volumes are supported.</p> </li> </ul>
   */
  StorediSCSIVolumes?: Array<_UnmarshalledStorediSCSIVolume>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
