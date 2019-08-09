import {
  _VolumeAttachment,
  _UnmarshalledVolumeAttachment
} from "./_VolumeAttachment";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a volume.</p>
 */
export interface _Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: Array<_VolumeAttachment> | Iterable<_VolumeAttachment>;

  /**
   * <p>The Availability Zone for the volume.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>Indicates whether the volume is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the volume encryption key for the volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The size of the volume, in GiBs.</p>
   */
  Size?: number;

  /**
   * <p>The snapshot from which the volume was created, if applicable.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume state.</p>
   */
  State?:
    | "creating"
    | "available"
    | "in-use"
    | "deleting"
    | "deleted"
    | "error"
    | string;

  /**
   * <p>The ID of the volume.</p>
   */
  VolumeId?: string;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports. For Provisioned IOPS SSD volumes, this represents the number of IOPS that are provisioned for the volume. For General Purpose SSD volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS Volume Types</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Constraints: Range is 100-16,000 IOPS for <code>gp2</code> volumes and 100 to 64,000IOPS for <code>io1</code> volumes, in most Regions. The maximum IOPS for <code>io1</code> of 64,000 is guaranteed only on <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Nitro-based instances</a>. Other instance families guarantee performance up to 32,000 IOPS.</p> <p>Condition: This parameter is required for requests to create <code>io1</code> volumes; it is not used in requests to create <code>gp2</code>, <code>st1</code>, <code>sc1</code>, or <code>standard</code> volumes.</p>
   */
  Iops?: number;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The volume type. This can be <code>gp2</code> for General Purpose SSD, <code>io1</code> for Provisioned IOPS SSD, <code>st1</code> for Throughput Optimized HDD, <code>sc1</code> for Cold HDD, or <code>standard</code> for Magnetic volumes.</p>
   */
  VolumeType?: "standard" | "io1" | "gp2" | "sc1" | "st1" | string;
}

export interface _UnmarshalledVolume extends _Volume {
  /**
   * <p>Information about the volume attachments.</p>
   */
  Attachments?: Array<_UnmarshalledVolumeAttachment>;

  /**
   * <p>The time stamp when volume creation was initiated.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Any tags assigned to the volume.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
