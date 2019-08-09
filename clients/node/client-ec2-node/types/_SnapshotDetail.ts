import {
  _UserBucketDetails,
  _UnmarshalledUserBucketDetails
} from "./_UserBucketDetails";

/**
 * <p>Describes the snapshot created from the imported disk.</p>
 */
export interface _SnapshotDetail {
  /**
   * <p>A description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The block device mapping for the snapshot.</p>
   */
  DeviceName?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The percentage of progress for the task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status of the snapshot creation.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the snapshot creation.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL used to access the disk image.</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UserBucketDetails;
}

export interface _UnmarshalledSnapshotDetail extends _SnapshotDetail {
  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UnmarshalledUserBucketDetails;
}
