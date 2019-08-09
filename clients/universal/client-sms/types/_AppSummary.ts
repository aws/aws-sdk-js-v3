import { _LaunchDetails, _UnmarshalledLaunchDetails } from "./_LaunchDetails";

/**
 * <p>Information about the application.</p>
 */
export interface _AppSummary {
  /**
   * <p>Unique ID of the application.</p>
   */
  appId?: string;

  /**
   * <p>Name of the application.</p>
   */
  name?: string;

  /**
   * <p>Description of the application.</p>
   */
  description?: string;

  /**
   * <p>Status of the application.</p>
   */
  status?:
    | "CREATING"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "DELETED"
    | "DELETE_FAILED"
    | string;

  /**
   * <p>A message related to the status of the application</p>
   */
  statusMessage?: string;

  /**
   * <p>Replication status of the application.</p>
   */
  replicationStatus?:
    | "READY_FOR_CONFIGURATION"
    | "CONFIGURATION_IN_PROGRESS"
    | "CONFIGURATION_INVALID"
    | "READY_FOR_REPLICATION"
    | "VALIDATION_IN_PROGRESS"
    | "REPLICATION_PENDING"
    | "REPLICATION_IN_PROGRESS"
    | "REPLICATED"
    | "DELTA_REPLICATION_IN_PROGRESS"
    | "DELTA_REPLICATED"
    | "DELTA_REPLICATION_FAILED"
    | "REPLICATION_FAILED"
    | "REPLICATION_STOPPING"
    | "REPLICATION_STOP_FAILED"
    | "REPLICATION_STOPPED"
    | string;

  /**
   * <p>A message related to the replication status of the application.</p>
   */
  replicationStatusMessage?: string;

  /**
   * <p>Timestamp of the application's most recent successful replication.</p>
   */
  latestReplicationTime?: Date | string | number;

  /**
   * <p>Launch status of the application.</p>
   */
  launchStatus?:
    | "READY_FOR_CONFIGURATION"
    | "CONFIGURATION_IN_PROGRESS"
    | "CONFIGURATION_INVALID"
    | "READY_FOR_LAUNCH"
    | "VALIDATION_IN_PROGRESS"
    | "LAUNCH_PENDING"
    | "LAUNCH_IN_PROGRESS"
    | "LAUNCHED"
    | "DELTA_LAUNCH_IN_PROGRESS"
    | "DELTA_LAUNCH_FAILED"
    | "LAUNCH_FAILED"
    | "TERMINATE_IN_PROGRESS"
    | "TERMINATE_FAILED"
    | "TERMINATED"
    | string;

  /**
   * <p>A message related to the launch status of the application.</p>
   */
  launchStatusMessage?: string;

  /**
   * <p>Details about the latest launch of the application.</p>
   */
  launchDetails?: _LaunchDetails;

  /**
   * <p>Time of creation of this application.</p>
   */
  creationTime?: Date | string | number;

  /**
   * <p>Timestamp of the application's creation.</p>
   */
  lastModified?: Date | string | number;

  /**
   * <p>Name of the service role in the customer's account used by AWS SMS.</p>
   */
  roleName?: string;

  /**
   * <p>Number of server groups present in the application.</p>
   */
  totalServerGroups?: number;

  /**
   * <p>Number of servers present in the application.</p>
   */
  totalServers?: number;
}

export interface _UnmarshalledAppSummary extends _AppSummary {
  /**
   * <p>Timestamp of the application's most recent successful replication.</p>
   */
  latestReplicationTime?: Date;

  /**
   * <p>Details about the latest launch of the application.</p>
   */
  launchDetails?: _UnmarshalledLaunchDetails;

  /**
   * <p>Time of creation of this application.</p>
   */
  creationTime?: Date;

  /**
   * <p>Timestamp of the application's creation.</p>
   */
  lastModified?: Date;
}
