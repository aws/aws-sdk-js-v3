import {_AccessControlTranslation, _UnmarshalledAccessControlTranslation} from './_AccessControlTranslation';
import {_EncryptionConfiguration, _UnmarshalledEncryptionConfiguration} from './_EncryptionConfiguration';

/**
 * <p>Container for replication destination information.</p>
 */
export interface _Destination {
    /**
     * <p> Amazon resource name (ARN) of the bucket where you want Amazon S3 to store replicas of the object identified by the rule. </p> <p> If you have multiple rules in your replication configuration, all rules must specify the same bucket as the destination. A replication configuration can replicate objects only to one destination bucket. </p>
     */
    Bucket: string;

    /**
     * <p> Account ID of the destination bucket. Currently Amazon S3 verifies this value only if Access Control Translation is enabled. </p> <p> In a cross-account scenario, if you tell Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by adding the <code>AccessControlTranslation</code> element, this is the account ID of the destination bucket owner. </p>
     */
    Account?: string;

    /**
     * <p>The class of storage used to store the object.</p>
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'STANDARD_IA'|'ONEZONE_IA'|string;

    /**
     * <p> Container for information regarding the access control for replicas. </p> <p> Use only in a cross-account scenario, where source and destination bucket owners are not the same, when you want to change replica ownership to the AWS account that owns the destination bucket. If you don't add this element to the replication configuration, the replicas are owned by same AWS account that owns the source object. </p>
     */
    AccessControlTranslation?: _AccessControlTranslation;

    /**
     * <p> Container that provides encryption-related information. You must specify this element if the <code>SourceSelectionCriteria</code> is specified. </p>
     */
    EncryptionConfiguration?: _EncryptionConfiguration;
}

export interface _UnmarshalledDestination extends _Destination {
    /**
     * <p> Container for information regarding the access control for replicas. </p> <p> Use only in a cross-account scenario, where source and destination bucket owners are not the same, when you want to change replica ownership to the AWS account that owns the destination bucket. If you don't add this element to the replication configuration, the replicas are owned by same AWS account that owns the source object. </p>
     */
    AccessControlTranslation?: _UnmarshalledAccessControlTranslation;

    /**
     * <p> Container that provides encryption-related information. You must specify this element if the <code>SourceSelectionCriteria</code> is specified. </p>
     */
    EncryptionConfiguration?: _UnmarshalledEncryptionConfiguration;
}