import { _UserBucket, _UnmarshalledUserBucket } from "./_UserBucket";

/**
 * <p>The disk container object for the import snapshot request.</p>
 */
export interface _SnapshotDiskContainer {
  /**
   * <p>The description of the disk image being imported.</p>
   */
  Description?: string;

  /**
   * <p>The format of the disk image being imported.</p> <p>Valid values: <code>VHD</code> | <code>VMDK</code> </p>
   */
  Format?: string;

  /**
   * <p>The URL to the Amazon S3-based disk image being imported. It can either be a https URL (https://..) or an Amazon S3 URL (s3://..).</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UserBucket;
}

export interface _UnmarshalledSnapshotDiskContainer
  extends _SnapshotDiskContainer {
  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UnmarshalledUserBucket;
}
