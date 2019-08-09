import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The snapshot copy grant that grants Amazon Redshift permission to encrypt copied snapshots with the specified customer master key (CMK) from AWS KMS in the destination region.</p> <p> For more information about managing snapshot copy grants, go to <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-db-encryption.html">Amazon Redshift Database Encryption</a> in the <i>Amazon Redshift Cluster Management Guide</i>. </p>
 */
export interface _SnapshotCopyGrant {
  /**
   * <p>The name of the snapshot copy grant.</p>
   */
  SnapshotCopyGrantName?: string;

  /**
   * <p>The unique identifier of the customer master key (CMK) in AWS KMS to which Amazon Redshift is granted permission.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledSnapshotCopyGrant extends _SnapshotCopyGrant {
  /**
   * <p>A list of tag instances.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
