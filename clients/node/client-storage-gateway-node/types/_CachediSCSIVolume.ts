import {
  _VolumeiSCSIAttributes,
  _UnmarshalledVolumeiSCSIAttributes
} from "./_VolumeiSCSIAttributes";

/**
 * <p>Describes an iSCSI cached volume.</p>
 */
export interface _CachediSCSIVolume {
  /**
   * <p>The Amazon Resource Name (ARN) of the storage volume.</p>
   */
  VolumeARN?: string;

  /**
   * <p>The unique identifier of the volume, e.g. vol-AE4B946D.</p>
   */
  VolumeId?: string;

  /**
   * <p>One of the VolumeType enumeration values that describes the type of the volume.</p>
   */
  VolumeType?: string;

  /**
   * <p>One of the VolumeStatus values that indicates the state of the storage volume.</p>
   */
  VolumeStatus?: string;

  /**
   * <p>A value that indicates whether a storage volume is attached to or detached from a gateway. For more information, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/managing-volumes.html#attach-detach-volume">Moving Your Volumes to a Different Gateway</a>.</p>
   */
  VolumeAttachmentStatus?: string;

  /**
   * <p>The size, in bytes, of the volume capacity.</p>
   */
  VolumeSizeInBytes?: number;

  /**
   * <p>Represents the percentage complete if the volume is restoring or bootstrapping that represents the percent of data transferred. This field does not appear in the response if the cached volume is not restoring or bootstrapping.</p>
   */
  VolumeProgress?: number;

  /**
   * <p>If the cached volume was created from a snapshot, this field contains the snapshot ID used, e.g. snap-78e22663. Otherwise, this field is not included.</p>
   */
  SourceSnapshotId?: string;

  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: _VolumeiSCSIAttributes;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.</p>
   */
  CreatedDate?: Date | string | number;

  /**
   * <p>The size of the data stored on the volume in bytes. This value is calculated based on the number of blocks that are touched, instead of the actual amount of data written. This value can be useful for sequential write patterns but less accurate for random write patterns. <code>VolumeUsedInBytes</code> is different from the compressed size of the volume, which is the value that is used to calculate your bill.</p> <note> <p>This value is not available for volumes created prior to May 13, 2015, until you store data on the volume.</p> </note>
   */
  VolumeUsedInBytes?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when KMSEncrypted is true. Optional.</p>
   */
  KMSKey?: string;

  /**
   * <p>The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. For example, specifying <code>TargetName</code> as <i>myvolume</i> results in the target ARN of <code>arn:aws:storagegateway:us-east-2:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume</code>. The target name must be unique across all volumes on a gateway.</p> <p>If you don't specify a value, Storage Gateway uses the value that was previously used for this volume as the new target name.</p>
   */
  TargetName?: string;
}

export interface _UnmarshalledCachediSCSIVolume extends _CachediSCSIVolume {
  /**
   * <p>An <a>VolumeiSCSIAttributes</a> object that represents a collection of iSCSI attributes for one stored volume.</p>
   */
  VolumeiSCSIAttributes?: _UnmarshalledVolumeiSCSIAttributes;

  /**
   * <p>The date the volume was created. Volumes created prior to March 28, 2017 don’t have this time stamp.</p>
   */
  CreatedDate?: Date;
}
