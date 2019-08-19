import {
  _AccessControlTranslation,
  _UnmarshalledAccessControlTranslation
} from "./_AccessControlTranslation";
import {
  _EncryptionConfiguration,
  _UnmarshalledEncryptionConfiguration
} from "./_EncryptionConfiguration";

/**
 * <p>Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket.</p>
 */
export interface _Destination {
  /**
   * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store replicas of the object identified by the rule.</p> <p>A replication configuration can replicate objects to only one destination bucket. If there are multiple rules in your replication configuration, all rules must specify the same destination bucket.</p>
   */
  Bucket: string;

  /**
   * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by specifying the <code>AccessControlTranslation</code> property, this is the account ID of the destination bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html">Cross-Region Replication Additional Configuration: Change Replica Owner</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Account?: string;

  /**
   * <p> The storage class to use when replicating objects, such as standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica. </p> <p>For valid values, see the <code>StorageClass</code> element of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket replication</a> action in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  StorageClass?:
    | "STANDARD"
    | "REDUCED_REDUNDANCY"
    | "STANDARD_IA"
    | "ONEZONE_IA"
    | "INTELLIGENT_TIERING"
    | "GLACIER"
    | "DEEP_ARCHIVE"
    | string;

  /**
   * <p>Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.</p>
   */
  AccessControlTranslation?: _AccessControlTranslation;

  /**
   * <p>A container that provides information about encryption. If <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledDestination extends _Destination {
  /**
   * <p>Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.</p>
   */
  AccessControlTranslation?: _UnmarshalledAccessControlTranslation;

  /**
   * <p>A container that provides information about encryption. If <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}
