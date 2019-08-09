import { _VmServer, _UnmarshalledVmServer } from "./_VmServer";
import {
  _ReplicationRun,
  _UnmarshalledReplicationRun
} from "./_ReplicationRun";

/**
 * <p>Represents a replication job.</p>
 */
export interface _ReplicationJob {
  /**
   * <p>The identifier of the replication job.</p>
   */
  replicationJobId?: string;

  /**
   * <p>The identifier of the server.</p>
   */
  serverId?: string;

  /**
   * <p>The type of server.</p>
   */
  serverType?: "VIRTUAL_MACHINE" | string;

  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: _VmServer;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime?: Date | string | number;

  /**
   * <p>The time between consecutive replication runs, in hours.</p>
   */
  frequency?: number;

  /**
   * <p/>
   */
  runOnce?: boolean;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date | string | number;

  /**
   * <p>The license type to be used for the AMI created by a successful replication run.</p>
   */
  licenseType?: "AWS" | "BYOL" | string;

  /**
   * <p>The name of the IAM role to be used by the Server Migration Service.</p>
   */
  roleName?: string;

  /**
   * <p>The ID of the latest Amazon Machine Image (AMI).</p>
   */
  latestAmiId?: string;

  /**
   * <p>The state of the replication job.</p>
   */
  state?:
    | "PENDING"
    | "ACTIVE"
    | "FAILED"
    | "DELETING"
    | "DELETED"
    | "COMPLETED"
    | "PAUSED_ON_FAILURE"
    | "FAILING"
    | string;

  /**
   * <p>The description of the current status of the replication job.</p>
   */
  statusMessage?: string;

  /**
   * <p>The description of the replication job.</p>
   */
  description?: string;

  /**
   * <p>Number of recent AMIs to keep in the customer's account for a replication job. By default the value is set to zero, meaning that all AMIs are kept.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>Whether the replication job should produce encrypted AMIs or not. See also <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following: </p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to KMS key ID</p> </li> <li> <p>ARN referring to KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key id is not specified, the customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: Array<_ReplicationRun> | Iterable<_ReplicationRun>;
}

export interface _UnmarshalledReplicationJob extends _ReplicationJob {
  /**
   * <p>Information about the VM server.</p>
   */
  vmServer?: _UnmarshalledVmServer;

  /**
   * <p>The seed replication time.</p>
   */
  seedReplicationTime?: Date;

  /**
   * <p>The start time of the next replication run.</p>
   */
  nextReplicationRunStartTime?: Date;

  /**
   * <p>Information about the replication runs.</p>
   */
  replicationRunList?: Array<_UnmarshalledReplicationRun>;
}
