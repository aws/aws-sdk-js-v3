import { _UserBucket, _UnmarshalledUserBucket } from "./_UserBucket";

/**
 * <p>Describes the disk container object for an import image task.</p>
 */
export interface _ImageDiskContainer {
  /**
   * <p>The description of the disk image.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the disk.</p>
   */
  DeviceName?: string;

  /**
   * <p>The format of the disk image being imported.</p> <p>Valid values: <code>VHD</code> | <code>VMDK</code> | <code>OVA</code> </p>
   */
  Format?: string;

  /**
   * <p>The ID of the EBS snapshot to be used for importing the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. The URL can either be a https URL (https://..) or an Amazon S3 URL (s3://..)</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UserBucket;
}

export interface _UnmarshalledImageDiskContainer extends _ImageDiskContainer {
  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UnmarshalledUserBucket;
}
