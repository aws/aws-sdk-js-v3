import {
  _ReplicationRunStageDetails,
  _UnmarshalledReplicationRunStageDetails
} from "./_ReplicationRunStageDetails";

/**
 * <p>Represents a replication run.</p>
 */
export interface _ReplicationRun {
  /**
   * <p>The identifier of the replication run.</p>
   */
  replicationRunId?: string;

  /**
   * <p>The state of the replication run.</p>
   */
  state?:
    | "PENDING"
    | "MISSED"
    | "ACTIVE"
    | "FAILED"
    | "COMPLETED"
    | "DELETING"
    | "DELETED"
    | string;

  /**
   * <p>The type of replication run.</p>
   */
  type?: "ON_DEMAND" | "AUTOMATIC" | string;

  /**
   * <p>Details of the current stage of the replication run.</p>
   */
  stageDetails?: _ReplicationRunStageDetails;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * <p>The identifier of the Amazon Machine Image (AMI) from the replication run.</p>
   */
  amiId?: string;

  /**
   * <p>The start time of the next replication run.</p>
   */
  scheduledStartTime?: Date | string | number;

  /**
   * <p>The completion time of the last replication run.</p>
   */
  completedTime?: Date | string | number;

  /**
   * <p>The description of the replication run.</p>
   */
  description?: string;

  /**
   * <p>Whether the replication run should produce encrypted AMI or not. See also <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following: </p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to KMS key ID</p> </li> <li> <p>ARN referring to KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key id is not specified, the customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;
}

export interface _UnmarshalledReplicationRun extends _ReplicationRun {
  /**
   * <p>Details of the current stage of the replication run.</p>
   */
  stageDetails?: _UnmarshalledReplicationRunStageDetails;

  /**
   * <p>The start time of the next replication run.</p>
   */
  scheduledStartTime?: Date;

  /**
   * <p>The completion time of the last replication run.</p>
   */
  completedTime?: Date;
}
