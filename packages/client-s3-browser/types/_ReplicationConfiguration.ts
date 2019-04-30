import {
  _ReplicationRule,
  _UnmarshalledReplicationRule
} from "./_ReplicationRule";

/**
 * <p>Container for replication rules. You can add as many as 1,000 rules. Total replication configuration size can be up to 2 MB.</p>
 */
export interface _ReplicationConfiguration {
  /**
   * <p>Amazon Resource Name (ARN) of an IAM role for Amazon S3 to assume when replicating the objects.</p>
   */
  Role: string;

  /**
   * <p>Container for one or more replication rules. Replication configuration must have at least one rule and can contain up to 1,000 rules. </p>
   */
  Rules: Array<_ReplicationRule> | Iterable<_ReplicationRule>;
}

export interface _UnmarshalledReplicationConfiguration
  extends _ReplicationConfiguration {
  /**
   * <p>Container for one or more replication rules. Replication configuration must have at least one rule and can contain up to 1,000 rules. </p>
   */
  Rules: Array<_UnmarshalledReplicationRule>;
}
