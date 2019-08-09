import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a snapshot.</p>
 */
export interface _Snapshot {
  /**
   * <p>The data encryption key identifier for the snapshot. This value is a unique identifier that corresponds to the data encryption key that was used to encrypt the original volume or snapshot copy. Because data encryption keys are inherited by volumes created from snapshots, and vice versa, if snapshots share the same data encryption key identifier, then they belong to the same volume/snapshot lineage. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  DataEncryptionKeyId?: string;

  /**
   * <p>The description for the snapshot.</p>
   */
  Description?: string;

  /**
   * <p>Indicates whether the snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS) customer master key (CMK) that was used to protect the volume encryption key for the parent volume.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The AWS account ID of the EBS snapshot owner.</p>
   */
  OwnerId?: string;

  /**
   * <p>The progress of the snapshot, as a percentage.</p>
   */
  Progress?: string;

  /**
   * <p>The ID of the snapshot. Each snapshot receives a unique identifier when it is created.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The snapshot state.</p>
   */
  State?: "pending" | "completed" | "error" | string;

  /**
   * <p>Encrypted Amazon EBS snapshots are copied asynchronously. If a snapshot copy operation fails (for example, if the proper AWS Key Management Service (AWS KMS) permissions are not obtained) this field displays error state details to help you diagnose why the error occurred. This parameter is only returned by <a>DescribeSnapshots</a>.</p>
   */
  StateMessage?: string;

  /**
   * <p>The ID of the volume that was used to create the snapshot. Snapshots created by the <a>CopySnapshot</a> action have an arbitrary volume ID that should not be used for any purpose.</p>
   */
  VolumeId?: string;

  /**
   * <p>The size of the volume, in GiB.</p>
   */
  VolumeSize?: number;

  /**
   * <p> Value from an Amazon-maintained list (<code>amazon</code> | <code>self</code> | <code>all</code> | <code>aws-marketplace</code> | <code>microsoft</code>) of snapshot owners. Not to be confused with the user-configured AWS account alias, which is set from the IAM console. </p>
   */
  OwnerAlias?: string;

  /**
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledSnapshot extends _Snapshot {
  /**
   * <p>The time stamp when the snapshot was initiated.</p>
   */
  StartTime?: Date;

  /**
   * <p>Any tags assigned to the snapshot.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
