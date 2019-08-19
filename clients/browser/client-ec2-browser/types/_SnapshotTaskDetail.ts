import {
  _UserBucketDetails,
  _UnmarshalledUserBucketDetails
} from "./_UserBucketDetails";

/**
 * <p>Details about the import snapshot task.</p>
 */
export interface _SnapshotTaskDetail {
  /**
   * <p>The description of the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>The size of the disk in the snapshot, in GiB.</p>
   */
  DiskImageSize?: number;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The format of the disk image from which the snapshot is created.</p>
   */
  Format?: string;

  /**
   * <p>The identifier for the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to create the encrypted snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The percentage of completion for the import snapshot task.</p>
   */
  Progress?: string;

  /**
   * <p>The snapshot ID of the disk being imported.</p>
   */
  SnapshotId?: string;

  /**
   * <p>A brief status for the import snapshot task.</p>
   */
  Status?: string;

  /**
   * <p>A detailed status message for the import snapshot task.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The URL of the disk image from which the snapshot is created.</p>
   */
  Url?: string;

  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UserBucketDetails;
}

export interface _UnmarshalledSnapshotTaskDetail extends _SnapshotTaskDetail {
  /**
   * <p>The S3 bucket for the disk image.</p>
   */
  UserBucket?: _UnmarshalledUserBucketDetails;
}
