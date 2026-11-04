// smithy-typescript generated code
import type {
  AutomatedDbBackupType,
  ClusterDeploymentType,
  ClusterStatus,
  DataFusionRuntimeType,
  DbBackupStatus,
  DbBackupType,
  DbInstanceType,
  DbStorageType,
  DeploymentType,
  DurationType,
  EngineType,
  FailoverMode,
  InstanceMode,
  LogFormats,
  LogLevel,
  NetworkType,
  ResourceDeploymentType,
  ResourceType,
  RestoreMode,
  RestoreStatus,
  Status,
  TracingType,
} from "./enums";

/**
 * @public
 */
export interface CreateDbBackupInput {
  /**
   * The name of the backup. Must be unique within the account and region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The id of the DB instance or DB cluster to back up.
   *
   * @public
   */
  dbResourceId: string | undefined;

  /**
   * The number of days to retain the backup. Valid values are 1 to 3650.
   *
   * @public
   */
  retentionDays?: number | undefined;

  /**
   * A list of key-value pairs to associate with the backup.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Configuration for node modes in the DbCluster.
 *
 * Deprecated. Use deploymentConfiguration to define the cluster topology instead.
 *
 * @public
 */
export interface ClusterConfiguration {
  /**
   * The number of instances in the DbCluster which can both ingest and query.
   *
   * @public
   */
  ingestQueryInstances?: number | undefined;

  /**
   * The number of instances in the DbCluster which can only query.
   *
   * @public
   */
  queryOnlyInstances?: number | undefined;

  /**
   * Indicates if the compactor instance is a standalone instance or not.
   *
   * @public
   */
  dedicatedCompactor?: boolean | undefined;
}

/**
 * A group of one or more nodes in a Timestream for InfluxDB cluster that share the same instance modes and instance type. A cluster's compute topology is defined as a list of node groups.
 *
 * @public
 */
export interface NodeGroup {
  /**
   * The functions that the nodes in this group perform. Provide from 1 to 4 unique modes. Valid modes:
   *
   * - INGEST – Nodes in this mode ingest data. Across all node groups, INGEST nodes must total between 1 and 4.
   * - QUERY – Nodes in this mode query data. Across all node groups, QUERY nodes must total between 0 and 14.
   * - COMPACT – Nodes in this mode compact data. Exactly one node across all node groups must have this mode. If the cluster has more than three non-compaction nodes, place the COMPACT node in its own dedicated node group.
   * - PROCESS – Nodes in this mode process data with the processing engine.
   *
   * @public
   */
  instanceModes: InstanceMode[] | undefined;

  /**
   * The Timestream for InfluxDB DB instance type to run InfluxDB on for the nodes in this group.
   *
   * @public
   */
  instanceType: DbInstanceType | undefined;

  /**
   * The number of nodes in this group. Valid values are 1 to 13.
   *
   * @public
   */
  count: number | undefined;
}

/**
 * The compute topology for an InfluxDB 3 Enterprise cluster, expressed as a list of node groups.
 *
 * @public
 */
export interface InfluxDBv3EnterpriseDeploymentConfiguration {
  /**
   * The node groups that make up the cluster. Across all node groups, the cluster must include 1 to 4 nodes with the INGEST mode, 0 to 14 nodes with the QUERY mode, and exactly one node with the COMPACT mode.
   *
   * @public
   */
  nodeGroups: NodeGroup[] | undefined;
}

/**
 * Defines the compute topology of a Timestream for InfluxDB cluster as a set of node groups for a specific database engine. For InfluxDB 3 Enterprise, use the InfluxDBv3Enterprise member to allocate compute per function: ingest, query, compaction, and processing.
 *
 * @public
 */
export type DeploymentConfiguration =
  | DeploymentConfiguration.InfluxDBv3EnterpriseMember
  | DeploymentConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace DeploymentConfiguration {
  /**
   * The deployment configuration for an InfluxDB 3 Enterprise cluster.
   *
   * @public
   */
  export interface InfluxDBv3EnterpriseMember {
    InfluxDBv3Enterprise: InfluxDBv3EnterpriseDeploymentConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InfluxDBv3Enterprise?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    InfluxDBv3Enterprise: (value: InfluxDBv3EnterpriseDeploymentConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for S3 bucket log delivery.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The name of the S3 bucket to deliver logs to.
   *
   * @public
   */
  bucketName: string | undefined;

  /**
   * Indicates whether log delivery to the S3 bucket is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
 *
 * @public
 */
export interface LogDeliveryConfiguration {
  /**
   * Configuration for S3 bucket log delivery.
   *
   * @public
   */
  s3Configuration: S3Configuration | undefined;
}

/**
 * Specifies the maintenance schedule for a DB instance or cluster, defining when maintenance operations such as patching can be performed.
 *
 * @public
 */
export interface MaintenanceSchedule {
  /**
   * The IANA timezone identifier for the maintenance window. Format: Region/City or UTC. For example, America/New_York or UTC.
   *
   * @public
   */
  timezone: string | undefined;

  /**
   * The preferred maintenance window in the format ddd:HH:MM-ddd:HH:MM (UTC). Day must be one of: Mon, Tue, Wed, Thu, Fri, Sat, Sun. For example, Sun:02:00-Sun:06:00. Provide an empty string to let the system choose a window.
   *
   * @public
   */
  preferredMaintenanceWindow: string | undefined;
}

/**
 * @public
 */
export interface CreateDbBackupOutput {
  /**
   * Service-generated unique identifier of the backup.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-provided name of the backup.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the backup.
   *
   * @public
   */
  status?: DbBackupStatus | undefined;

  /**
   * The time when the backup was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date after which the backup will be automatically deleted.
   *
   * @public
   */
  expiresAfter?: string | undefined;

  /**
   * The identifier of the DB resource that the backup was created from.
   *
   * @public
   */
  dbResourceId?: string | undefined;

  /**
   * The type of backup.
   *
   * @public
   */
  type?: DbBackupType | undefined;

  /**
   * The engine type of the resource that the backup was created from.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * The deployment type of the resource that the backup was created from.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The cluster configuration of the resource at the time of backup.
   *
   * Deprecated. Use deploymentConfiguration to view the cluster topology instead.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  clusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * The deployment configuration of the resource at the time of backup.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The identifier of the DB parameter group associated with the backup.
   *
   * @public
   */
  dbParameterGroupId?: string | undefined;

  /**
   * The DB instance type of the resource at the time of backup.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The log delivery configuration of the resource at the time of backup.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The failover mode of the resource at the time of backup.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * The storage type of the resource at the time of backup.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The allocated storage of the resource at the time of backup, in GiB.
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The VPC subnet IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * The VPC security group IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the resource was publicly accessible at the time of backup.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The port number of the resource at the time of backup.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The network type of the resource at the time of backup.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the InfluxDB auth parameters.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * The maintenance schedule of the resource at the time of backup.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface DeleteDbBackupInput {
  /**
   * The identifier of the backup to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDbBackupOutput {
  /**
   * Service-generated unique identifier of the deleted backup.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-provided name of the deleted backup.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted backup.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the backup.
   *
   * @public
   */
  status?: DbBackupStatus | undefined;

  /**
   * The time when the backup was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date after which the backup was set to be automatically deleted.
   *
   * @public
   */
  expiresAfter?: string | undefined;

  /**
   * The identifier of the DB resource that the backup was created from.
   *
   * @public
   */
  dbResourceId?: string | undefined;

  /**
   * The type of backup.
   *
   * @public
   */
  type?: DbBackupType | undefined;

  /**
   * The engine type of the resource that the backup was created from.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * The deployment type of the resource that the backup was created from.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The cluster configuration of the resource at the time of backup.
   *
   * Deprecated. Use deploymentConfiguration to view the cluster topology instead.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  clusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * The deployment configuration of the resource at the time of backup.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The identifier of the DB parameter group associated with the backup.
   *
   * @public
   */
  dbParameterGroupId?: string | undefined;

  /**
   * The DB instance type of the resource at the time of backup.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The log delivery configuration of the resource at the time of backup.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The failover mode of the resource at the time of backup.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * The storage type of the resource at the time of backup.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The allocated storage of the resource at the time of backup, in GiB.
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The VPC subnet IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * The VPC security group IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the resource was publicly accessible at the time of backup.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The port number of the resource at the time of backup.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The network type of the resource at the time of backup.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the InfluxDB auth parameters.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * The maintenance schedule of the resource at the time of backup.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface GetDbBackupInput {
  /**
   * The identifier of the backup to retrieve information for.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbBackupOutput {
  /**
   * Service-generated unique identifier of the backup.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-provided name of the backup.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the backup.
   *
   * @public
   */
  status?: DbBackupStatus | undefined;

  /**
   * The time when the backup was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date after which the backup will be automatically deleted.
   *
   * @public
   */
  expiresAfter?: string | undefined;

  /**
   * The identifier of the DB resource that the backup was created from.
   *
   * @public
   */
  dbResourceId?: string | undefined;

  /**
   * The type of backup.
   *
   * @public
   */
  type?: DbBackupType | undefined;

  /**
   * The engine type of the resource that the backup was created from.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * The deployment type of the resource that the backup was created from.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The cluster configuration of the resource at the time of backup.
   *
   * Deprecated. Use deploymentConfiguration to view the cluster topology instead.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  clusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * The deployment configuration of the resource at the time of backup.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The identifier of the DB parameter group associated with the backup.
   *
   * @public
   */
  dbParameterGroupId?: string | undefined;

  /**
   * The DB instance type of the resource at the time of backup.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The log delivery configuration of the resource at the time of backup.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The failover mode of the resource at the time of backup.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * The storage type of the resource at the time of backup.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The allocated storage of the resource at the time of backup, in GiB.
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The VPC subnet IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * The VPC security group IDs associated with the resource at the time of backup.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * Indicates whether the resource was publicly accessible at the time of backup.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The port number of the resource at the time of backup.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The network type of the resource at the time of backup.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The ARN of the Secrets Manager secret containing the InfluxDB auth parameters.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * The maintenance schedule of the resource at the time of backup.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;
}

/**
 * @public
 */
export interface ListDbBackupsInput {
  /**
   * The identifier of the DB instance or DB cluster to list backups for. If not specified, returns all backups in the account and region.
   *
   * @public
   */
  dbResourceId?: string | undefined;

  /**
   * The pagination token. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a nextToken is provided in the output. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a Timestream for InfluxDB backup.
 *
 * @public
 */
export interface DbBackupSummary {
  /**
   * Service-generated unique identifier of the backup.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-provided name of the backup.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the backup.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the backup. Valid values are IN_PROGRESS, COMPLETED, FAILED, DELETING, and DELETED.
   *
   * @public
   */
  status?: DbBackupStatus | undefined;

  /**
   * The time when the backup was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The date after which the backup will be automatically deleted.
   *
   * @public
   */
  expiresAfter?: string | undefined;

  /**
   * The identifier of the DB resource that the backup was created from.
   *
   * @public
   */
  dbResourceId?: string | undefined;

  /**
   * The type of backup. Valid values are HOURLY, DAILY, WEEKLY, MONTHLY, CUSTOM_SCHEDULE, ON_DEMAND, and CONTINUOUS.
   *
   * @public
   */
  type?: DbBackupType | undefined;

  /**
   * The engine type of the resource that the backup was created from.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * The deployment type of the resource that the backup was created from.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the resource at the time of backup.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListDbBackupsOutput {
  /**
   * A list of Timestream for InfluxDB backup summaries.
   *
   * @public
   */
  items: DbBackupSummary[] | undefined;

  /**
   * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies the configuration for an automated backup schedule.
 *
 * @public
 */
export interface DbBackupConfiguration {
  /**
   * The type of automated backup schedule. Valid values are HOURLY, DAILY, WEEKLY, MONTHLY, CUSTOM_SCHEDULE, and CONTINUOUS.
   *
   * @public
   */
  type: AutomatedDbBackupType | undefined;

  /**
   * The number of days to retain automated backups. Valid values are 1 to 365.
   *
   * @public
   */
  retentionDays: number | undefined;

  /**
   * Specifies whether this backup configuration is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * A custom cron schedule expression for the backup. Required when type is CUSTOM_SCHEDULE.
   *
   * @public
   */
  customSchedule?: string | undefined;
}

/**
 * @public
 */
export interface RestoreFromDbBackupInput {
  /**
   * The name of the new resource to create from the restore. If restoring to an existing resource, the name must match the existing resource name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the backup to restore from.
   *
   * @public
   */
  dbBackupId: string | undefined;

  /**
   * The point in time to restore to, for continuous backups. Must be within the backup's retention window.
   *
   * @public
   */
  restoreToTime?: Date | undefined;

  /**
   * Specifies whether to restore to a new resource or replace the existing resource. Valid values are NEW_RESOURCE (default) and REPLACE_EXISTING.
   *
   * @public
   */
  restoreMode?: RestoreMode | undefined;

  /**
   * A list of VPC subnet IDs for the restored resource. If not specified, the restored resource uses the same subnets as the backup.
   *
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * A list of VPC security group IDs for the restored resource. If not specified, the restored resource uses the same security groups as the backup.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * Specifies whether the restored resource is publicly accessible.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to the specified S3 bucket for the restored resource.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The maintenance schedule for the restored resource.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * A list of key-value pairs to associate with the restored resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The port number on which the restored InfluxDB resource accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies the network type of the restored resource. Valid values are IPV4 and DUAL.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * Specifies the deployment type of the restored resource. Valid values are SINGLE_AZ, WITH_MULTIAZ_STANDBY, and MULTI_NODE_READ_REPLICAS.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;

  /**
   * A list of backup configurations to apply to the restored resource.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfiguration[] | undefined;

  /**
   * The Amazon Web Services KMS key identifier to use for encryption of the restored resource. Can be a key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface RestoreFromDbBackupOutput {
  /**
   * The identifier of the restored DB resource.
   *
   * @public
   */
  restoredDbResourceId?: string | undefined;

  /**
   * The status of the restore operation.
   *
   * @public
   */
  restoreStatus?: RestoreStatus | undefined;

  /**
   * The type of the restored resource. Valid values are DB_INSTANCE and DB_CLUSTER.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The engine type of the restored resource.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * The deployment type of the restored resource.
   *
   * @public
   */
  deploymentType?: ResourceDeploymentType | undefined;
}

/**
 * @public
 */
export interface CreateDbClusterInput {
  /**
   * The name that uniquely identifies the DB cluster when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB cluster names must be unique per customer and per region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The password of the initial admin user created in InfluxDB. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.
   *
   * @public
   */
  password?: string | undefined;

  /**
   * The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.
   *
   * @public
   */
  organization?: string | undefined;

  /**
   * The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * Valid Values: 1024-65535
   *
   * Default: 8086 for InfluxDB v2, 8181 for InfluxDB v3
   *
   * Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The ID of the DB parameter group to assign to your DB cluster. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Timestream for InfluxDB DB instance type to run InfluxDB on.
   *
   * Optional when you define the cluster topology with deploymentConfiguration, because the instance type is then specified per node group.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type to read and write InfluxDB data.
   *
   * You can choose between three different types of provisioned Influx IOPS Included storage according to your workload requirements:
   *
   * - Influx I/O Included 3000 IOPS
   * - Influx I/O Included 12000 IOPS
   * - Influx I/O Included 16000 IOPS
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * Configures the Timestream for InfluxDB cluster with a public IP to facilitate access from outside the VPC.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC subnet IDs to associate with the DB cluster. Provide at least two VPC subnet IDs in different Availability Zones when deploying with a Multi-AZ standby.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.
   *
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * Specifies the type of cluster to create.
   *
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * The compute topology for the cluster, defined as a set of node groups. Use deploymentConfiguration to allocate compute per function: ingest, query, compaction, and processing. A deployment configuration becomes the source of truth for the cluster's topology. Timestream for InfluxDB then ignores any node-count parameters in the associated DB parameter group.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * Specifies the behavior of failure recovery when the primary node of the cluster fails.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * Specifies the maintenance schedule for the DB cluster, including the preferred maintenance window and timezone.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * A list of backup configurations to enable automated backups for the DB cluster.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfiguration[] | undefined;

  /**
   * The Amazon Web Services KMS key identifier to use for encryption of the DB cluster. Can be a key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * A list of key-value pairs to associate with the DB instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDbClusterOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * The status of the DB cluster.
   *
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDbClusterInput {
  /**
   * Service-generated unique identifier of the DB cluster.
   *
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * Specifies whether to retain automated backups after the DB cluster is deleted. If set to true, automated backups are not deleted and can be restored later.
   *
   * @public
   */
  retainAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDbClusterOutput {
  /**
   * The status of the DB cluster.
   *
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface GetDbClusterInput {
  /**
   * Service-generated unique identifier of the DB cluster to retrieve.
   *
   * @public
   */
  dbClusterId: string | undefined;
}

/**
 * Contains the configuration and status for an automated backup schedule.
 *
 * @public
 */
export interface DbBackupConfigurationOutput {
  /**
   * The type of automated backup schedule.
   *
   * @public
   */
  type: AutomatedDbBackupType | undefined;

  /**
   * The number of days automated backups are retained.
   *
   * @public
   */
  retentionDays: number | undefined;

  /**
   * Indicates whether this backup configuration is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * The custom cron schedule expression for the backup, if applicable.
   *
   * @public
   */
  customSchedule?: string | undefined;

  /**
   * The next scheduled time for an automated backup to be taken.
   *
   * @public
   */
  nextAutomatedBackupTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetDbClusterOutput {
  /**
   * Service-generated unique identifier of the DB cluster to retrieve.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Customer-supplied name of the Timestream for InfluxDB cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB cluster.
   *
   * @public
   */
  status?: ClusterStatus | undefined;

  /**
   * The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.
   *
   * @public
   */
  readerEndpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Deployment type of the DB cluster.
   *
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The engine type of your DB cluster.
   *
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * Indicates if the DB cluster has a public IP to facilitate access from outside the VPC.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The ID of the DB parameter group assigned to your DB cluster.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The ID of the DB parameter group actually applied to your DB cluster. When the service applies optimized defaults, it creates a service-managed DB parameter group and this field reflects that group, while dbParameterGroupIdentifier reflects the customer-provided DB parameter group. When no service-managed DB parameter group is applied, this value matches dbParameterGroupIdentifier.
   *
   * @public
   */
  effectiveDbParameterGroupIdentifier?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The maintenance schedule for the DB cluster.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB cluster.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB cluster.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB cluster.
   *
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * A list of VPC security group IDs associated with the DB cluster.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The configured failover mode for the DB cluster.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * Configuration for node modes in the DbCluster.
   *
   * Deprecated. Use deploymentConfiguration to view the cluster topology instead.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  clusterConfiguration?: ClusterConfiguration | undefined;

  /**
   * The current compute topology of the cluster, as a set of node groups. The returned topology reflects the cluster's actual provisioned nodes.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * The backup configurations for the DB cluster.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the DB cluster.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListDbClustersInput {
  /**
   * The pagination token. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a nextToken is provided in the output. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Describes a summary of a Timestream for InfluxDB cluster.
 *
 * @public
 */
export interface DbClusterSummary {
  /**
   * Service-generated unique identifier of the DB cluster to retrieve.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Customer supplied name of the Timestream for InfluxDB cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB cluster.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB cluster.
   *
   * @public
   */
  status?: ClusterStatus | undefined;

  /**
   * The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.
   *
   * @public
   */
  readerEndpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Deployment type of the DB cluster
   *
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * The Timestream for InfluxDB DB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * Specifies whether the network type of the Timestream for InfluxDB Cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * The engine type of your DB cluster.
   *
   * @public
   */
  engineType?: EngineType | undefined;
}

/**
 * @public
 */
export interface ListDbClustersOutput {
  /**
   * A list of Timestream for InfluxDB cluster summaries.
   *
   * @public
   */
  items: DbClusterSummary[] | undefined;

  /**
   * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesForClusterInput {
  /**
   * Service-generated unique identifier of the DB cluster.
   *
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * The pagination token. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a nextToken is provided in the output. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a DB instance belonging to a DB cluster.
 *
 * @public
 */
export interface DbInstanceForClusterSummary {
  /**
   * The service-generated unique identifier of the DB instance.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A service-generated name for the DB instance based on the customer-supplied name for the DB cluster.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the network type of the Timestream for InfluxDB instance is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type to run InfluxDB on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The storage type for your DB instance.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type in GiB (gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies the deployment type if applicable.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * Specifies the DB instance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DB instance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesForClusterOutput {
  /**
   * A list of Timestream for InfluxDB instance summaries belonging to the cluster.
   *
   * @public
   */
  items: DbInstanceForClusterSummary[] | undefined;

  /**
   * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RebootDbClusterInput {
  /**
   * Service-generated unique identifier of the DB cluster to reboot.
   *
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * A list of service-generated unique DB Instance Ids belonging to the DB Cluster to reboot.
   *
   * @public
   */
  instanceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface RebootDbClusterOutput {
  /**
   * The status of the DB Cluster.
   *
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface UpdateDbClusterInput {
  /**
   * Service-generated unique identifier of the DB cluster to update.
   *
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * The log delivery configuration to apply to the DB cluster.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * Update the DB cluster to use the specified DB parameter group.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * Update the DB cluster to use the specified port.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Update the DB cluster to use the specified DB instance Type.
   *
   * You can't specify both dbInstanceType and deploymentConfiguration in the same request. When you use deploymentConfiguration, the instance type is specified per node group.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The updated compute topology for the cluster, defined as a set of node groups. Use deploymentConfiguration to change the cluster's topology or scale its compute in a single call. You can't specify both deploymentConfiguration and dbInstanceType in the same request. When you provide a deployment configuration, Timestream for InfluxDB ignores any node-count parameters in the associated DB parameter group.
   *
   * @public
   */
  deploymentConfiguration?: DeploymentConfiguration | undefined;

  /**
   * Update the DB cluster's failover behavior.
   *
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * Specifies the maintenance schedule for the DB cluster, including the preferred maintenance window and timezone.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * A list of backup configurations to update for the DB cluster.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateDbClusterOutput {
  /**
   * The status of the DB cluster.
   *
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface CreateDbInstanceInput {
  /**
   * The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * The password of the initial admin user created in InfluxDB v2. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Secrets Manager in your account.
   *
   * @public
   */
  password: string | undefined;

  /**
   * The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.
   *
   * @public
   */
  organization?: string | undefined;

  /**
   * The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The Timestream for InfluxDB DB instance type to run InfluxDB on.
   *
   * @public
   */
  dbInstanceType: DbInstanceType | undefined;

  /**
   * A list of VPC subnet IDs to associate with the DB instance. Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * A list of VPC security group IDs to associate with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * Configures the DB instance with a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The Timestream for InfluxDB DB storage type to read and write InfluxDB data.
   *
   * You can choose between 3 different types of provisioned Influx IOPS included storage according to your workloads requirements:
   *
   * - Influx IO Included 3000 IOPS
   * - Influx IO Included 12000 IOPS
   * - Influx IO Included 16000 IOPS
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage to allocate for your DB storage type in GiB (gibibytes).
   *
   * @public
   */
  allocatedStorage: number | undefined;

  /**
   * The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to a specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * Specifies the maintenance schedule for the DB instance, including the preferred maintenance window and timezone.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * A list of key-value pairs to associate with the DB instance.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * Valid Values: 1024-65535
   *
   * Default: 8086
   *
   * Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * A list of backup configurations to enable automated backups for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfiguration[] | undefined;

  /**
   * The Amazon Web Services KMS key identifier to use for encryption of the DB instance. Can be a key ID, key ARN, alias name, or alias ARN.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDbInstanceOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections. The default value is 8086.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB instance.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * Indicates if the DB instance has a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC security group IDs associated with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The id of the DB parameter group assigned to your DB instance.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Availability Zone in which the DB instance resides.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * Specifies the DbCluster to which this DbInstance belongs to.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * Specifies the DbInstance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DbInstance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;

  /**
   * The maintenance schedule for the DB instance.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB instance.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB instance.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The backup configurations for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the DB instance.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDbInstanceInput {
  /**
   * The id of the DB instance.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specifies whether to retain automated backups after the DB instance is deleted. If set to true, automated backups are not deleted and can be restored later.
   *
   * @public
   */
  retainAutomatedBackups?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteDbInstanceOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB instance.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * Indicates if the DB instance has a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC security group IDs associated with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The id of the DB parameter group assigned to your DB instance.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Availability Zone in which the DB instance resides.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * Specifies the DbCluster to which this DbInstance belongs to.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * Specifies the DbInstance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DbInstance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;

  /**
   * The maintenance schedule for the DB instance.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB instance.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB instance.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The backup configurations that were associated with the deleted DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN that was used for encryption of the deleted DB instance.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface GetDbInstanceInput {
  /**
   * The id of the DB instance.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbInstanceOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB instance.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * Indicates if the DB instance has a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC security group IDs associated with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The id of the DB parameter group assigned to your DB instance.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Availability Zone in which the DB instance resides.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * Specifies the DbCluster to which this DbInstance belongs to.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * Specifies the DbInstance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DbInstance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;

  /**
   * The maintenance schedule for the DB instance.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB instance.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB instance.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The backup configurations for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the DB instance.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesInput {
  /**
   * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a DB instance.
 *
 * @public
 */
export interface DbInstanceSummary {
  /**
   * The service-generated unique identifier of the DB instance.
   *
   * @public
   */
  id: string | undefined;

  /**
   * This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type to run InfluxDB on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The storage type for your DB instance.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage to allocate for your DbStorageType in GiB (gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Single-Instance or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesOutput {
  /**
   * A list of Timestream for InfluxDB DB instance summaries.
   *
   * @public
   */
  items: DbInstanceSummary[] | undefined;

  /**
   * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface RebootDbInstanceInput {
  /**
   * The id of the DB instance to reboot.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface RebootDbInstanceOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB instance.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * Indicates if the DB instance has a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC security group IDs associated with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The id of the DB parameter group assigned to your DB instance.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Availability Zone in which the DB instance resides.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * Specifies the DbCluster to which this DbInstance belongs to.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * Specifies the DbInstance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DbInstance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;

  /**
   * The maintenance schedule for the DB instance.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB instance.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB instance.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The backup configurations for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the DB instance.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDbInstanceInput {
  /**
   * The id of the DB instance.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * If you change the Port value, your database restarts immediately.
   *
   * Valid Values: 1024-65535
   *
   * Default: 8086
   *
   * Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The Timestream for InfluxDB DB instance type to run InfluxDB on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage to allocate for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies the maintenance schedule for the DB instance, including the preferred maintenance window and timezone.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * A list of backup configurations to update for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateDbInstanceOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB instance.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the DB instance.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.
   *
   * @public
   */
  endpoint?: string | undefined;

  /**
   * The port number on which InfluxDB accepts connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.
   *
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * The Timestream for InfluxDB instance type that InfluxDB runs on.
   *
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * The Timestream for InfluxDB DB storage type that InfluxDB stores data on.
   *
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * The amount of storage allocated for your DB storage type (in gibibytes).
   *
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.
   *
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * A list of VPC subnet IDs associated with the DB instance.
   *
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * Indicates if the DB instance has a public IP to facilitate access.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A list of VPC security group IDs associated with the DB instance.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The id of the DB parameter group assigned to your DB instance.
   *
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * The Availability Zone in which the DB instance resides.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.
   *
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * Configuration for sending InfluxDB engine logs to send to specified S3 bucket.
   *
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.
   *
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * Specifies the DbCluster to which this DbInstance belongs to.
   *
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * Specifies the DbInstance's role in the cluster.
   *
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * Specifies the DbInstance's roles in the cluster.
   *
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;

  /**
   * The maintenance schedule for the DB instance.
   *
   * @public
   */
  maintenanceSchedule?: MaintenanceSchedule | undefined;

  /**
   * The timestamp of the last completed maintenance operation on the DB instance.
   *
   * @public
   */
  lastMaintenanceTime?: Date | undefined;

  /**
   * The timestamp of the next scheduled maintenance operation on the DB instance.
   *
   * @public
   */
  nextMaintenanceTime?: Date | undefined;

  /**
   * The backup configurations for the DB instance.
   *
   * @public
   */
  dbBackupConfigurations?: DbBackupConfigurationOutput[] | undefined;

  /**
   * The Amazon Web Services KMS key ARN used for encryption of the DB instance.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * Duration for InfluxDB parameters in Timestream for InfluxDB.
 *
 * @public
 */
export interface Duration {
  /**
   * The type of duration for InfluxDB parameters.
   *
   * @public
   */
  durationType: DurationType | undefined;

  /**
   * The value of duration for InfluxDB parameters.
   *
   * @public
   */
  value: number | undefined;
}

/**
 * All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.
 *
 * @public
 */
export interface InfluxDBv2Parameters {
  /**
   * Include option to show detailed logs for Flux queries.
   *
   * Default: false
   *
   * @public
   */
  fluxLogEnabled?: boolean | undefined;

  /**
   * Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified.
   *
   * Default: info
   *
   * @public
   */
  logLevel?: LogLevel | undefined;

  /**
   * Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks.
   *
   * Default: false
   *
   * @public
   */
  noTasks?: boolean | undefined;

  /**
   * Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries.
   *
   * Default: 0
   *
   * @public
   */
  queryConcurrency?: number | undefined;

  /**
   * Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.
   *
   * Default: 0
   *
   * @public
   */
  queryQueueSize?: number | undefined;

  /**
   * Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.
   *
   * @public
   */
  tracingType?: TracingType | undefined;

  /**
   * Disable the HTTP /metrics endpoint which exposes [internal InfluxDB metrics](https://docs.influxdata.com/influxdb/v2/reference/internals/metrics/).
   *
   * Default: false
   *
   * @public
   */
  metricsDisabled?: boolean | undefined;

  /**
   * Maximum duration the server should keep established connections alive while waiting for new requests. Set to 0 for no timeout.
   *
   * Default: 3 minutes
   *
   * @public
   */
  httpIdleTimeout?: Duration | undefined;

  /**
   * Maximum duration the server should try to read HTTP headers for new requests. Set to 0 for no timeout.
   *
   * Default: 10 seconds
   *
   * @public
   */
  httpReadHeaderTimeout?: Duration | undefined;

  /**
   * Maximum duration the server should try to read the entirety of new requests. Set to 0 for no timeout.
   *
   * Default: 0
   *
   * @public
   */
  httpReadTimeout?: Duration | undefined;

  /**
   * Maximum duration the server should spend processing and responding to write requests. Set to 0 for no timeout.
   *
   * Default: 0
   *
   * @public
   */
  httpWriteTimeout?: Duration | undefined;

  /**
   * Maximum number of group by time buckets a SELECT statement can create. 0 allows an unlimited number of buckets.
   *
   * Default: 0
   *
   * @public
   */
  influxqlMaxSelectBuckets?: number | undefined;

  /**
   * Maximum number of points a SELECT statement can process. 0 allows an unlimited number of points. InfluxDB checks the point count every second (so queries exceeding the maximum aren’t immediately aborted).
   *
   * Default: 0
   *
   * @public
   */
  influxqlMaxSelectPoint?: number | undefined;

  /**
   * Maximum number of series a SELECT statement can return. 0 allows an unlimited number of series.
   *
   * Default: 0
   *
   * @public
   */
  influxqlMaxSelectSeries?: number | undefined;

  /**
   * Disable the /debug/pprof HTTP endpoint. This endpoint provides runtime profiling data and can be helpful when debugging.
   *
   * Default: true
   *
   * @public
   */
  pprofDisabled?: boolean | undefined;

  /**
   * Initial bytes of memory allocated for a query.
   *
   * Default: 0
   *
   * @public
   */
  queryInitialMemoryBytes?: number | undefined;

  /**
   * Maximum total bytes of memory allowed for all running queries. When this limit is reached, new queries are rejected. Setting to 0 allows unlimited memory usage.
   *
   * Default: 0
   *
   * @public
   */
  queryMaxMemoryBytes?: number | undefined;

  /**
   * Maximum bytes of memory allowed for a single query. Must be greater or equal to queryInitialMemoryBytes.
   *
   * Default: 0
   *
   * @public
   */
  queryMemoryBytes?: number | undefined;

  /**
   * Specifies the Time to Live (TTL) in minutes for newly created user sessions.
   *
   * Default: 60
   *
   * @public
   */
  sessionLength?: number | undefined;

  /**
   * Disables automatically extending a user’s session TTL on each request. By default, every request sets the session’s expiration time to five minutes from now. When disabled, sessions expire after the specified [session length](https://docs.influxdata.com/influxdb/v2/reference/config-options/#session-length) and the user is redirected to the login page, even if recently active.
   *
   * Default: false
   *
   * @public
   */
  sessionRenewDisabled?: boolean | undefined;

  /**
   * Maximum size (in bytes) a shard’s cache can reach before it starts rejecting writes. Must be greater than storageCacheSnapShotMemorySize and lower than instance’s total memory capacity. We recommend setting it to below 15% of the total memory capacity.
   *
   * Default: 1073741824
   *
   * @public
   */
  storageCacheMaxMemorySize?: number | undefined;

  /**
   * Size (in bytes) at which the storage engine will snapshot the cache and write it to a TSM file to make more memory available. Must not be greater than storageCacheMaxMemorySize.
   *
   * Default: 26214400
   *
   * @public
   */
  storageCacheSnapshotMemorySize?: number | undefined;

  /**
   * Duration at which the storage engine will snapshot the cache and write it to a new TSM file if the shard hasn’t received writes or deletes.
   *
   * Default: 10 minutes
   *
   * @public
   */
  storageCacheSnapshotWriteColdDuration?: Duration | undefined;

  /**
   * Duration at which the storage engine will compact all TSM files in a shard if it hasn't received writes or deletes.
   *
   * Default: 4 hours
   *
   * @public
   */
  storageCompactFullWriteColdDuration?: Duration | undefined;

  /**
   * Rate limit (in bytes per second) that TSM compactions can write to disk.
   *
   * Default: 50331648
   *
   * @public
   */
  storageCompactThroughputBurst?: number | undefined;

  /**
   * Maximum number of full and level compactions that can run concurrently. A value of 0 results in 50% of runtime.GOMAXPROCS(0) used at runtime. Any number greater than zero limits compactions to that value. This setting does not apply to cache snapshotting.
   *
   * Default: 0
   *
   * @public
   */
  storageMaxConcurrentCompactions?: number | undefined;

  /**
   * Size (in bytes) at which an index write-ahead log (WAL) file will compact into an index file. Lower sizes will cause log files to be compacted more quickly and result in lower heap usage at the expense of write throughput.
   *
   * Default: 1048576
   *
   * @public
   */
  storageMaxIndexLogFileSize?: number | undefined;

  /**
   * Skip field size validation on incoming write requests.
   *
   * Default: false
   *
   * @public
   */
  storageNoValidateFieldSize?: boolean | undefined;

  /**
   * Interval of retention policy enforcement checks. Must be greater than 0.
   *
   * Default: 30 minutes
   *
   * @public
   */
  storageRetentionCheckInterval?: Duration | undefined;

  /**
   * Maximum number of snapshot compactions that can run concurrently across all series partitions in a database.
   *
   * Default: 0
   *
   * @public
   */
  storageSeriesFileMaxConcurrentSnapshotCompactions?: number | undefined;

  /**
   * Size of the internal cache used in the TSI index to store previously calculated series results. Cached results are returned quickly rather than needing to be recalculated when a subsequent query with the same tag key/value predicate is executed. Setting this value to 0 will disable the cache and may decrease query performance.
   *
   * Default: 100
   *
   * @public
   */
  storageSeriesIdSetCacheSize?: number | undefined;

  /**
   * Maximum number writes to the WAL directory to attempt at the same time. Setting this value to 0 results in number of processing units available x2.
   *
   * Default: 0
   *
   * @public
   */
  storageWalMaxConcurrentWrites?: number | undefined;

  /**
   * Maximum amount of time a write request to the WAL directory will wait when the [maximum number of concurrent active writes to the WAL directory has been met](https://docs.influxdata.com/influxdb/v2/reference/config-options/#storage-wal-max-concurrent-writes). Set to 0 to disable the timeout.
   *
   * Default: 10 minutes
   *
   * @public
   */
  storageWalMaxWriteDelay?: Duration | undefined;

  /**
   * Disable the InfluxDB user interface (UI). The UI is enabled by default.
   *
   * Default: false
   *
   * @public
   */
  uiDisabled?: boolean | undefined;
}

/**
 * Percent or Absolute Long for InfluxDB parameters
 *
 * @public
 */
export type PercentOrAbsoluteLong =
  | PercentOrAbsoluteLong.AbsoluteMember
  | PercentOrAbsoluteLong.PercentMember
  | PercentOrAbsoluteLong.$UnknownMember;

/**
 * @public
 */
export namespace PercentOrAbsoluteLong {
  /**
   * Percent for InfluxDB parameters.
   *
   * @public
   */
  export interface PercentMember {
    percent: string;
    absolute?: never;
    $unknown?: never;
  }

  /**
   * Absolute long for InfluxDB parameters.
   *
   * @public
   */
  export interface AbsoluteMember {
    percent?: never;
    absolute: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    percent?: never;
    absolute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    percent: (value: string) => T;
    absolute: (value: number) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * All the customer-modifiable InfluxDB v3 Core parameters in Timestream for InfluxDB.
 *
 * @public
 */
export interface InfluxDBv3CoreParameters {
  /**
   * Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.
   *
   * Default: 432
   *
   * @public
   */
  queryFileLimit?: number | undefined;

  /**
   * Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.
   *
   * Default: 1000
   *
   * @public
   */
  queryLogSize?: number | undefined;

  /**
   * Sets the filter directive for logs.
   *
   * @public
   */
  logFilter?: string | undefined;

  /**
   * Defines the message format for logs.
   *
   * Default: full
   *
   * @public
   */
  logFormat?: LogFormats | undefined;

  /**
   * Sets the maximum number of DataFusion runtime threads to use.
   *
   * @public
   */
  dataFusionNumThreads?: number | undefined;

  /**
   * Specifies the DataFusion tokio runtime type.
   *
   * Default: multi-thread
   *
   * @public
   */
  dataFusionRuntimeType?: DataFusionRuntimeType | undefined;

  /**
   * Disables the LIFO slot of the DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeDisableLifoSlot?: boolean | undefined;

  /**
   * Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.
   *
   * @public
   */
  dataFusionRuntimeEventInterval?: number | undefined;

  /**
   * Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.
   *
   * @public
   */
  dataFusionRuntimeGlobalQueueInterval?: number | undefined;

  /**
   * Specifies the limit for additional threads spawned by the DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeMaxBlockingThreads?: number | undefined;

  /**
   * Configures the maximum number of events processed per tick by the tokio DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeMaxIoEventsPerTick?: number | undefined;

  /**
   * Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeThreadKeepAlive?: Duration | undefined;

  /**
   * Sets the thread priority for tokio DataFusion runtime workers.
   *
   * Default: 10
   *
   * @public
   */
  dataFusionRuntimeThreadPriority?: number | undefined;

  /**
   * When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.
   *
   * Default: 1000
   *
   * @public
   */
  dataFusionMaxParquetFanout?: number | undefined;

  /**
   * Uses a cached parquet loader when reading parquet files from the object store.
   *
   * @public
   */
  dataFusionUseCachedParquetLoader?: boolean | undefined;

  /**
   * Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.
   *
   * @public
   */
  dataFusionConfig?: string | undefined;

  /**
   * Specifies the maximum size of HTTP requests.
   *
   * Default: 10485760
   *
   * @public
   */
  maxHttpRequestSize?: number | undefined;

  /**
   * Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100
   *
   * Default: 70%
   *
   * @public
   */
  forceSnapshotMemThreshold?: PercentOrAbsoluteLong | undefined;

  /**
   * Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.
   *
   * Default: 600
   *
   * @public
   */
  walSnapshotSize?: number | undefined;

  /**
   * Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.
   *
   * Default: 100000
   *
   * @public
   */
  walMaxWriteBufferSize?: number | undefined;

  /**
   * Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.
   *
   * Default: 300
   *
   * @public
   */
  snapshottedWalFilesToKeep?: number | undefined;

  /**
   * Specifies the interval to prefetch into the Parquet cache during compaction.
   *
   * Default: 3d
   *
   * @public
   */
  preemptiveCacheAge?: Duration | undefined;

  /**
   * Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.
   *
   * Default: 0.1
   *
   * @public
   */
  parquetMemCachePrunePercentage?: number | undefined;

  /**
   * Sets the interval to check if the in-memory Parquet cache needs to be pruned.
   *
   * Default: 1s
   *
   * @public
   */
  parquetMemCachePruneInterval?: Duration | undefined;

  /**
   * Disables the in-memory Parquet cache. By default, the cache is enabled.
   *
   * @public
   */
  disableParquetMemCache?: boolean | undefined;

  /**
   * Specifies the time window for caching recent Parquet files in memory.
   *
   * Default: 5h
   *
   * @public
   */
  parquetMemCacheQueryPathDuration?: Duration | undefined;

  /**
   * Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
   *
   * Default: 10s
   *
   * @public
   */
  lastCacheEvictionInterval?: Duration | undefined;

  /**
   * Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
   *
   * Default: 10s
   *
   * @public
   */
  distinctCacheEvictionInterval?: Duration | undefined;

  /**
   * Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files that the compactor in InfluxDB 3 Enterprise can merge into larger generations.
   *
   * Default: 10m
   *
   * @public
   */
  gen1Duration?: Duration | undefined;

  /**
   * Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.
   *
   * Default: 20%
   *
   * @public
   */
  execMemPoolBytes?: PercentOrAbsoluteLong | undefined;

  /**
   * Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.
   *
   * Default: 20%
   *
   * @public
   */
  parquetMemCacheSize?: PercentOrAbsoluteLong | undefined;

  /**
   * Determines whether WAL replay should fail when encountering errors.
   *
   * Default: false
   *
   * @public
   */
  walReplayFailOnError?: boolean | undefined;

  /**
   * Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.
   *
   * Default: max(num_cpus, 10)
   *
   * @public
   */
  walReplayConcurrencyLimit?: number | undefined;

  /**
   * Specifies the maximum number of entries in the table index cache.
   *
   * Default: 1000
   *
   * @public
   */
  tableIndexCacheMaxEntries?: number | undefined;

  /**
   * Limits the concurrency level for table index cache operations.
   *
   * Default: 8
   *
   * @public
   */
  tableIndexCacheConcurrencyLimit?: number | undefined;

  /**
   * Specifies how far back to look when creating generation 1 Parquet files.
   *
   * Default: 24h
   *
   * @public
   */
  gen1LookbackDuration?: Duration | undefined;

  /**
   * The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.
   *
   * Default: 30m
   *
   * @public
   */
  retentionCheckInterval?: Duration | undefined;

  /**
   * Specifies the grace period before permanently deleting data.
   *
   * Default: 24h
   *
   * @public
   */
  deleteGracePeriod?: Duration | undefined;

  /**
   * Sets the default duration for hard deletion of data.
   *
   * Default: 90d
   *
   * @public
   */
  hardDeleteDefaultDuration?: Duration | undefined;

  /**
   * Specifies the URL of the repository that InfluxDB downloads plugins from.
   *
   * @public
   */
  pluginRepositoryUrl?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret that holds your repository access token.
   *
   * @public
   */
  pluginRepositorySecretArn?: string | undefined;
}

/**
 * All the customer-modifiable InfluxDB v3 Enterprise parameters in Timestream for InfluxDB.
 *
 * @public
 */
export interface InfluxDBv3EnterpriseParameters {
  /**
   * Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.
   *
   * Default: 432
   *
   * @public
   */
  queryFileLimit?: number | undefined;

  /**
   * Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.
   *
   * Default: 1000
   *
   * @public
   */
  queryLogSize?: number | undefined;

  /**
   * Sets the filter directive for logs.
   *
   * @public
   */
  logFilter?: string | undefined;

  /**
   * Defines the message format for logs.
   *
   * Default: full
   *
   * @public
   */
  logFormat?: LogFormats | undefined;

  /**
   * Sets the maximum number of DataFusion runtime threads to use.
   *
   * @public
   */
  dataFusionNumThreads?: number | undefined;

  /**
   * Specifies the DataFusion tokio runtime type.
   *
   * Default: multi-thread
   *
   * @public
   */
  dataFusionRuntimeType?: DataFusionRuntimeType | undefined;

  /**
   * Disables the LIFO slot of the DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeDisableLifoSlot?: boolean | undefined;

  /**
   * Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.
   *
   * @public
   */
  dataFusionRuntimeEventInterval?: number | undefined;

  /**
   * Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.
   *
   * @public
   */
  dataFusionRuntimeGlobalQueueInterval?: number | undefined;

  /**
   * Specifies the limit for additional threads spawned by the DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeMaxBlockingThreads?: number | undefined;

  /**
   * Configures the maximum number of events processed per tick by the tokio DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeMaxIoEventsPerTick?: number | undefined;

  /**
   * Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.
   *
   * @public
   */
  dataFusionRuntimeThreadKeepAlive?: Duration | undefined;

  /**
   * Sets the thread priority for tokio DataFusion runtime workers.
   *
   * Default: 10
   *
   * @public
   */
  dataFusionRuntimeThreadPriority?: number | undefined;

  /**
   * When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.
   *
   * Default: 1000
   *
   * @public
   */
  dataFusionMaxParquetFanout?: number | undefined;

  /**
   * Uses a cached parquet loader when reading parquet files from the object store.
   *
   * @public
   */
  dataFusionUseCachedParquetLoader?: boolean | undefined;

  /**
   * Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.
   *
   * @public
   */
  dataFusionConfig?: string | undefined;

  /**
   * Specifies the maximum size of HTTP requests.
   *
   * Default: 10485760
   *
   * @public
   */
  maxHttpRequestSize?: number | undefined;

  /**
   * Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100
   *
   * Default: 70%
   *
   * @public
   */
  forceSnapshotMemThreshold?: PercentOrAbsoluteLong | undefined;

  /**
   * Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.
   *
   * Default: 600
   *
   * @public
   */
  walSnapshotSize?: number | undefined;

  /**
   * Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.
   *
   * Default: 100000
   *
   * @public
   */
  walMaxWriteBufferSize?: number | undefined;

  /**
   * Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.
   *
   * Default: 300
   *
   * @public
   */
  snapshottedWalFilesToKeep?: number | undefined;

  /**
   * Specifies the interval to prefetch into the Parquet cache during compaction.
   *
   * Default: 3d
   *
   * @public
   */
  preemptiveCacheAge?: Duration | undefined;

  /**
   * Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.
   *
   * Default: 0.1
   *
   * @public
   */
  parquetMemCachePrunePercentage?: number | undefined;

  /**
   * Sets the interval to check if the in-memory Parquet cache needs to be pruned.
   *
   * Default: 1s
   *
   * @public
   */
  parquetMemCachePruneInterval?: Duration | undefined;

  /**
   * Disables the in-memory Parquet cache. By default, the cache is enabled.
   *
   * @public
   */
  disableParquetMemCache?: boolean | undefined;

  /**
   * Specifies the time window for caching recent Parquet files in memory.
   *
   * Default: 5h
   *
   * @public
   */
  parquetMemCacheQueryPathDuration?: Duration | undefined;

  /**
   * Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
   *
   * Default: 10s
   *
   * @public
   */
  lastCacheEvictionInterval?: Duration | undefined;

  /**
   * Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
   *
   * Default: 10s
   *
   * @public
   */
  distinctCacheEvictionInterval?: Duration | undefined;

  /**
   * Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files, which the compactor can merge into larger generations.
   *
   * Default: 10m
   *
   * @public
   */
  gen1Duration?: Duration | undefined;

  /**
   * Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.
   *
   * Default: 20%
   *
   * @public
   */
  execMemPoolBytes?: PercentOrAbsoluteLong | undefined;

  /**
   * Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.
   *
   * Default: 20%
   *
   * @public
   */
  parquetMemCacheSize?: PercentOrAbsoluteLong | undefined;

  /**
   * Determines whether WAL replay should fail when encountering errors.
   *
   * Default: false
   *
   * @public
   */
  walReplayFailOnError?: boolean | undefined;

  /**
   * Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.
   *
   * Default: max(num_cpus, 10)
   *
   * @public
   */
  walReplayConcurrencyLimit?: number | undefined;

  /**
   * Specifies the maximum number of entries in the table index cache.
   *
   * Default: 1000
   *
   * @public
   */
  tableIndexCacheMaxEntries?: number | undefined;

  /**
   * Limits the concurrency level for table index cache operations.
   *
   * Default: 8
   *
   * @public
   */
  tableIndexCacheConcurrencyLimit?: number | undefined;

  /**
   * Specifies how far back to look when creating generation 1 Parquet files.
   *
   * Default: 24h
   *
   * @public
   */
  gen1LookbackDuration?: Duration | undefined;

  /**
   * The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.
   *
   * Default: 30m
   *
   * @public
   */
  retentionCheckInterval?: Duration | undefined;

  /**
   * Specifies the grace period before permanently deleting data.
   *
   * Default: 24h
   *
   * @public
   */
  deleteGracePeriod?: Duration | undefined;

  /**
   * Sets the default duration for hard deletion of data.
   *
   * Default: 90d
   *
   * @public
   */
  hardDeleteDefaultDuration?: Duration | undefined;

  /**
   * Specifies the URL of the repository that InfluxDB downloads plugins from.
   *
   * @public
   */
  pluginRepositoryUrl?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Secrets Manager secret that holds your repository access token.
   *
   * @public
   */
  pluginRepositorySecretArn?: string | undefined;

  /**
   * Specifies number of instances in the DbCluster which can both ingest and query.
   *
   * Deprecated. Use deploymentConfiguration on CreateDbCluster or UpdateDbCluster to define the cluster topology instead. When you supply a deployment configuration, Timestream for InfluxDB ignores this parameter.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  ingestQueryInstances?: number | undefined;

  /**
   * Specifies number of instances in the DbCluster which can only query.
   *
   * Deprecated. Use deploymentConfiguration on CreateDbCluster or UpdateDbCluster to define the cluster topology instead. When you supply a deployment configuration, Timestream for InfluxDB ignores this parameter.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  queryOnlyInstances?: number | undefined;

  /**
   * Specifies if the compactor instance should be a standalone instance or not.
   *
   * Deprecated. Use deploymentConfiguration on CreateDbCluster or UpdateDbCluster to define the cluster topology instead. When you supply a deployment configuration, Timestream for InfluxDB ignores this parameter.
   *
   * @deprecated (since 2026-09-28) Use deploymentConfiguration instead.
   * @public
   */
  dedicatedCompactor?: boolean | undefined;

  /**
   * Specifies the soft limit for the number of rows per file that the compactor writes. The compactor may write more rows than this limit.
   *
   * Default: 1000000
   *
   * @public
   */
  compactionRowLimit?: number | undefined;

  /**
   * Sets the maximum number of files included in any compaction plan.
   *
   * Default: 500
   *
   * @public
   */
  compactionMaxNumFilesPerPlan?: number | undefined;

  /**
   * Specifies the duration of the first level of compaction (gen2). Later levels of compaction are multiples of this duration. This value should be equal to or greater than the gen1 duration.
   *
   * Default: 20m
   *
   * @public
   */
  compactionGen2Duration?: Duration | undefined;

  /**
   * Specifies a comma-separated list of multiples defining the duration of each level of compaction. The number of elements in the list determines the number of compaction levels. The first element specifies the duration of the first level (gen3); subsequent levels are multiples of the previous level.
   *
   * Default: 3,4,6,5
   *
   * @public
   */
  compactionMultipliers?: string | undefined;

  /**
   * Specifies the amount of time that the compactor waits after finishing a compaction run to delete files marked as needing deletion during that compaction run.
   *
   * Default: 10m
   *
   * @public
   */
  compactionCleanupWait?: Duration | undefined;

  /**
   * Specifies how often the compactor checks for new compaction work to perform.
   *
   * Default: 10s
   *
   * @public
   */
  compactionCheckInterval?: Duration | undefined;

  /**
   * Disables populating the last-N-value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).
   *
   * @public
   */
  lastValueCacheDisableFromHistory?: boolean | undefined;

  /**
   * Disables populating the distinct value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).
   *
   * @public
   */
  distinctValueCacheDisableFromHistory?: boolean | undefined;

  /**
   * Specifies the interval at which data replication occurs between cluster nodes.
   *
   * Default: 250ms
   *
   * @public
   */
  replicationInterval?: Duration | undefined;

  /**
   * Defines how often the catalog synchronizes across cluster nodes.
   *
   * Default: 10s
   *
   * @public
   */
  catalogSyncInterval?: Duration | undefined;

  /**
   * Specifies whether to migrate the cluster from the Parquet storage engine to PachaTree. This action cannot be reversed. To create a new cluster on Parquet, set this to false.
   *
   * @public
   */
  upgradePachaTree?: boolean | undefined;

  /**
   * The maximum size, in bytes, of the in-memory WAL buffer before a flush is triggered regardless of the flush interval. Increase this value if WAL files are flushed before the interval elapses.
   *
   * @public
   */
  walBufferSize?: number | undefined;

  /**
   * The maximum size of the active snapshot bucket before it is rotated for snapshotting.
   *
   * @public
   */
  snapshotSize?: PercentOrAbsoluteLong | undefined;

  /**
   * The time-based trigger that controls how often the ingester creates snapshots. This value is also used on query nodes as the bucket rotation interval for the replica buffer.
   *
   * @public
   */
  snapshotDuration?: Duration | undefined;
}

/**
 * The parameters that comprise the parameter group.
 *
 * @public
 */
export type _Parameters =
  | _Parameters.InfluxDBv2Member
  | _Parameters.InfluxDBv3CoreMember
  | _Parameters.InfluxDBv3EnterpriseMember
  | _Parameters.$UnknownMember;

/**
 * @public
 */
export namespace _Parameters {
  /**
   * All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.
   *
   * @public
   */
  export interface InfluxDBv2Member {
    InfluxDBv2: InfluxDBv2Parameters;
    InfluxDBv3Core?: never;
    InfluxDBv3Enterprise?: never;
    $unknown?: never;
  }

  /**
   * All the customer-modifiable InfluxDB v3 Core parameters in Timestream for InfluxDB.
   *
   * @public
   */
  export interface InfluxDBv3CoreMember {
    InfluxDBv2?: never;
    InfluxDBv3Core: InfluxDBv3CoreParameters;
    InfluxDBv3Enterprise?: never;
    $unknown?: never;
  }

  /**
   * All the customer-modifiable InfluxDB v3 Enterprise parameters in Timestream for InfluxDB.
   *
   * @public
   */
  export interface InfluxDBv3EnterpriseMember {
    InfluxDBv2?: never;
    InfluxDBv3Core?: never;
    InfluxDBv3Enterprise: InfluxDBv3EnterpriseParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InfluxDBv2?: never;
    InfluxDBv3Core?: never;
    InfluxDBv3Enterprise?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    InfluxDBv2: (value: InfluxDBv2Parameters) => T;
    InfluxDBv3Core: (value: InfluxDBv3CoreParameters) => T;
    InfluxDBv3Enterprise: (value: InfluxDBv3EnterpriseParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDbParameterGroupInput {
  /**
   * The name of the DB parameter group. The name must be unique per customer and per region.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the DB parameter group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of the parameters that comprise the DB parameter group.
   *
   * @public
   */
  parameters?: _Parameters | undefined;

  /**
   * A list of key-value pairs to associate with the DB parameter group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDbParameterGroupOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARM) of the DB parameter group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The description of the DB parameter group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of the parameters that comprise the DB parameter group.
   *
   * @public
   */
  parameters?: _Parameters | undefined;
}

/**
 * @public
 */
export interface GetDbParameterGroupInput {
  /**
   * The id of the DB parameter group.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbParameterGroupOutput {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB parameter group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A description of the DB parameter group.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The parameters that comprise the DB parameter group.
   *
   * @public
   */
  parameters?: _Parameters | undefined;
}

/**
 * @public
 */
export interface ListDbParameterGroupsInput {
  /**
   * The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a summary of a DB parameter group.
 *
 * @public
 */
export interface DbParameterGroupSummary {
  /**
   * A service-generated unique identifier.
   *
   * @public
   */
  id: string | undefined;

  /**
   * This customer-supplied name uniquely identifies the parameter group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DB parameter group.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A description of the DB parameter group.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListDbParameterGroupsOutput {
  /**
   * A list of Timestream for InfluxDB DB parameter group summaries.
   *
   * @public
   */
  items: DbParameterGroupSummary[] | undefined;

  /**
   * Token from a previous call of the operation. When this value is provided, the service returns results from where the previous response left off.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the tagged resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags used to categorize and track resources.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the tagged resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tags used to categorize and track resources.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the tagged resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys used to identify the tags.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
