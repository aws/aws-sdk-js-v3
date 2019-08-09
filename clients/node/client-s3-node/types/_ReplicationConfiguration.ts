import {
  _ReplicationRule,
  _UnmarshalledReplicationRule
} from "./_ReplicationRule";

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB.</p>
 */
export interface _ReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-how-setup.html">How to Set Up Cross-Region Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Role: string;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: Array<_ReplicationRule> | Iterable<_ReplicationRule>;
}

export interface _UnmarshalledReplicationConfiguration
  extends _ReplicationConfiguration {
  /**
   * <p>A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: Array<_UnmarshalledReplicationRule>;
}
