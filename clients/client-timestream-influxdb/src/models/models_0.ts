// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TimestreamInfluxDBServiceException as __BaseException } from "./TimestreamInfluxDBServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The request conflicts with an existing resource in Timestream for InfluxDB.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the Timestream for InfluxDB resource associated with the request.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of Timestream for InfluxDB resource associated with the request.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * @enum
 */
export const DbInstanceType = {
  DB_INFLUX_12XLARGE: "db.influx.12xlarge",
  DB_INFLUX_16XLARGE: "db.influx.16xlarge",
  DB_INFLUX_24XLARGE: "db.influx.24xlarge",
  DB_INFLUX_2XLARGE: "db.influx.2xlarge",
  DB_INFLUX_4XLARGE: "db.influx.4xlarge",
  DB_INFLUX_8XLARGE: "db.influx.8xlarge",
  DB_INFLUX_LARGE: "db.influx.large",
  DB_INFLUX_MEDIUM: "db.influx.medium",
  DB_INFLUX_XLARGE: "db.influx.xlarge",
} as const;

/**
 * @public
 */
export type DbInstanceType = (typeof DbInstanceType)[keyof typeof DbInstanceType];

/**
 * @public
 * @enum
 */
export const DbStorageType = {
  INFLUX_IO_INCLUDED_T1: "InfluxIOIncludedT1",
  INFLUX_IO_INCLUDED_T2: "InfluxIOIncludedT2",
  INFLUX_IO_INCLUDED_T3: "InfluxIOIncludedT3",
} as const;

/**
 * @public
 */
export type DbStorageType = (typeof DbStorageType)[keyof typeof DbStorageType];

/**
 * @public
 * @enum
 */
export const ClusterDeploymentType = {
  MULTI_NODE_READ_REPLICAS: "MULTI_NODE_READ_REPLICAS",
} as const;

/**
 * @public
 */
export type ClusterDeploymentType = (typeof ClusterDeploymentType)[keyof typeof ClusterDeploymentType];

/**
 * @public
 * @enum
 */
export const FailoverMode = {
  AUTOMATIC: "AUTOMATIC",
  NO_FAILOVER: "NO_FAILOVER",
} as const;

/**
 * @public
 */
export type FailoverMode = (typeof FailoverMode)[keyof typeof FailoverMode];

/**
 * <p>Configuration for S3 bucket log delivery.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The name of the S3 bucket to deliver logs to.</p>
   * @public
   */
  bucketName: string | undefined;

  /**
   * <p>Indicates whether log delivery to the S3 bucket is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
 * @public
 */
export interface LogDeliveryConfiguration {
  /**
   * <p>Configuration for S3 bucket log delivery.</p>
   * @public
   */
  s3Configuration: S3Configuration | undefined;
}

/**
 * @public
 * @enum
 */
export const NetworkType = {
  DUAL: "DUAL",
  IPV4: "IPV4",
} as const;

/**
 * @public
 */
export type NetworkType = (typeof NetworkType)[keyof typeof NetworkType];

/**
 * @public
 */
export interface CreateDbClusterInput {
  /**
   * <p>The name that uniquely identifies the DB cluster when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB cluster names must be unique per customer and per region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The password of the initial admin user created in InfluxDB. This password will allow
   *             you to access the InfluxDB UI to perform various administrative tasks and also use the
   *             InfluxDB CLI to create an operator token. These attributes will be stored in a secret created in Secrets Manager in your account.</p>
   * @public
   */
  password?: string | undefined;

  /**
   * <p>The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.</p>
   * @public
   */
  organization?: string | undefined;

  /**
   * <p>The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   *          <p>Valid Values: 1024-65535</p>
   *          <p>Default: 8086 for InfluxDB v2, 8181 for InfluxDB v3</p>
   *          <p>Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The ID of the DB parameter group to assign to your DB cluster. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The Timestream for InfluxDB DB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType: DbInstanceType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type to read and write InfluxDB data.</p>
   *          <p>You can choose between three different types of provisioned Influx IOPS Included storage according to your workload requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Influx I/O Included 3000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>Influx I/O Included 12000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>Influx I/O Included 16000 IOPS</p>
   *             </li>
   *          </ul>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage to allocate for your DB storage type in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>Configures the Timestream for InfluxDB cluster with a public IP to facilitate access from outside the VPC.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>A list of VPC subnet IDs to associate with the DB cluster. Provide at least two VPC subnet IDs in different Availability Zones when deploying with a Multi-AZ standby.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>A list of VPC security group IDs to associate with the Timestream for InfluxDB cluster.</p>
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>Specifies the type of cluster to create.</p>
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * <p>Specifies the behavior of failure recovery when the primary node of the cluster fails.</p>
   * @public
   */
  failoverMode?: FailoverMode | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to a specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>A list of key-value pairs to associate with the DB instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MAINTENANCE: "MAINTENANCE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 */
export interface CreateDbClusterOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * <p>The status of the DB cluster.</p>
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>The requested resource was not found or does not exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The identifier for the Timestream for InfluxDB resource associated with the request.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The type of Timestream for InfluxDB resource associated with the request.</p>
   * @public
   */
  resourceType: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * <p>The request exceeds the service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   * @public
   */
  retryAfterSeconds?: number | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  FIELD_VALIDATION_FAILED: "FIELD_VALIDATION_FAILED",
  OTHER: "OTHER",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The reason that validation failed.</p>
   * @public
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
  }
}

/**
 * @public
 */
export interface DeleteDbClusterInput {
  /**
   * <p>Service-generated unique identifier of the DB cluster.</p>
   * @public
   */
  dbClusterId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDbClusterOutput {
  /**
   * <p>The status of the DB cluster.</p>
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface GetDbClusterInput {
  /**
   * <p>Service-generated unique identifier of the DB cluster to retrieve.</p>
   * @public
   */
  dbClusterId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EngineType = {
  INFLUXDB_V2: "INFLUXDB_V2",
  INFLUXDB_V3_CORE: "INFLUXDB_V3_CORE",
  INFLUXDB_V3_ENTERPRISE: "INFLUXDB_V3_ENTERPRISE",
} as const;

/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 */
export interface GetDbClusterOutput {
  /**
   * <p>Service-generated unique identifier of the DB cluster to retrieve.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Customer-supplied name of the Timestream for InfluxDB cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB cluster.</p>
   * @public
   */
  status?: ClusterStatus | undefined;

  /**
   * <p>The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.</p>
   * @public
   */
  readerEndpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Deployment type of the DB cluster.</p>
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>Specifies whether the network type of the Timestream for InfluxDB cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>The engine type of your DB cluster.</p>
   * @public
   */
  engineType?: EngineType | undefined;

  /**
   * <p>Indicates if the DB cluster has a public IP to facilitate access from outside the VPC.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>The ID of the DB parameter group assigned to your DB cluster.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * <p>A list of VPC subnet IDs associated with the DB cluster.</p>
   * @public
   */
  vpcSubnetIds?: string[] | undefined;

  /**
   * <p>A list of VPC security group IDs associated with the DB cluster.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The configured failover mode for the DB cluster.</p>
   * @public
   */
  failoverMode?: FailoverMode | undefined;
}

/**
 * @public
 */
export interface ListDbClustersInput {
  /**
   * <p>The pagination token. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a nextToken is provided in the output. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Describes a summary of a Timestream for InfluxDB cluster.</p>
 * @public
 */
export interface DbClusterSummary {
  /**
   * <p>Service-generated unique identifier of the DB cluster to retrieve.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Customer supplied name of the Timestream for InfluxDB cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB cluster.</p>
   * @public
   */
  status?: ClusterStatus | undefined;

  /**
   * <p>The endpoint used to connect to the Timestream for InfluxDB cluster for write and read operations.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The endpoint used to connect to the Timestream for InfluxDB cluster for read-only operations.</p>
   * @public
   */
  readerEndpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Deployment type of the DB cluster</p>
   * @public
   */
  deploymentType?: ClusterDeploymentType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>Specifies whether the network type of the Timestream for InfluxDB Cluster is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>The engine type of your DB cluster.</p>
   * @public
   */
  engineType?: EngineType | undefined;
}

/**
 * @public
 */
export interface ListDbClustersOutput {
  /**
   * <p>A list of Timestream for InfluxDB cluster summaries.</p>
   * @public
   */
  items: DbClusterSummary[] | undefined;

  /**
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesForClusterInput {
  /**
   * <p>Service-generated unique identifier of the DB cluster.</p>
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * <p>The pagination token. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a nextToken is provided in the output. To resume pagination, provide the nextToken value as an argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  SINGLE_AZ: "SINGLE_AZ",
  WITH_MULTIAZ_STANDBY: "WITH_MULTIAZ_STANDBY",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * @enum
 */
export const InstanceMode = {
  COMPACT: "COMPACT",
  INGEST: "INGEST",
  PRIMARY: "PRIMARY",
  PROCESS: "PROCESS",
  QUERY: "QUERY",
  REPLICA: "REPLICA",
  STANDBY: "STANDBY",
} as const;

/**
 * @public
 */
export type InstanceMode = (typeof InstanceMode)[keyof typeof InstanceMode];

/**
 * @public
 * @enum
 */
export const Status = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  MAINTENANCE: "MAINTENANCE",
  MODIFYING: "MODIFYING",
  UPDATING: "UPDATING",
  UPDATING_DEPLOYMENT_TYPE: "UPDATING_DEPLOYMENT_TYPE",
  UPDATING_INSTANCE_TYPE: "UPDATING_INSTANCE_TYPE",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Contains a summary of a DB instance belonging to a DB cluster.</p>
 * @public
 */
export interface DbInstanceForClusterSummary {
  /**
   * <p>The service-generated unique identifier of the DB instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A service-generated name for the DB instance based on the customer-supplied name for the DB cluster.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the network type of the Timestream for InfluxDB instance is IPv4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The storage type for your DB instance.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies the deployment type if applicable.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>Specifies the DB instance's role in the cluster.</p>
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * <p>Specifies the DB instance's roles in the cluster.</p>
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesForClusterOutput {
  /**
   * <p>A list of Timestream for InfluxDB instance summaries belonging to the cluster.</p>
   * @public
   */
  items: DbInstanceForClusterSummary[] | undefined;

  /**
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDbClusterInput {
  /**
   * <p>Service-generated unique identifier of the DB cluster to update.</p>
   * @public
   */
  dbClusterId: string | undefined;

  /**
   * <p>The log delivery configuration to apply to the DB cluster.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>Update the DB cluster to use the specified DB parameter group.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>Update the DB cluster to use the specified port.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Update the DB cluster to use the specified DB instance Type.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>Update the DB cluster's failover behavior.</p>
   * @public
   */
  failoverMode?: FailoverMode | undefined;
}

/**
 * @public
 */
export interface UpdateDbClusterOutput {
  /**
   * <p>The status of the DB cluster.</p>
   * @public
   */
  dbClusterStatus?: ClusterStatus | undefined;
}

/**
 * @public
 */
export interface CreateDbInstanceInput {
  /**
   * <p>The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.</p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p>The password of the initial admin user created in InfluxDB v2. This password will allow
   *             you to access the InfluxDB UI to perform various administrative tasks and also use the
   *             InfluxDB CLI to create an operator token. These attributes will be stored in a Secret
   *             created in Secrets Manager in your account.</p>
   * @public
   */
  password: string | undefined;

  /**
   * <p>The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.</p>
   * @public
   */
  organization?: string | undefined;

  /**
   * <p>The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The Timestream for InfluxDB DB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType: DbInstanceType | undefined;

  /**
   * <p>A list of VPC subnet IDs to associate with the DB instance. Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>A list of VPC security group IDs to associate with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * <p>Configures the DB instance with a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type to read and write InfluxDB data.</p>
   *          <p>You can choose between 3 different types of provisioned Influx IOPS included storage according to your workloads requirements:</p>
   *          <ul>
   *             <li>
   *                <p>Influx IO Included 3000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>Influx IO Included 12000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>Influx IO Included 16000 IOPS</p>
   *             </li>
   *          </ul>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage to allocate for your DB storage type in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage: number | undefined;

  /**
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to a specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>A list of key-value pairs to associate with the DB instance.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   *          <p>Valid Values: 1024-65535</p>
   *          <p>Default: 8086</p>
   *          <p>Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;
}

/**
 * @public
 */
export interface CreateDbInstanceOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections. The default value is 8086.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * <p>Specifies the DbCluster to which this DbInstance belongs to.</p>
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * <p>Specifies the DbInstance's role in the cluster.</p>
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * <p>Specifies the DbInstance's roles in the cluster.</p>
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 */
export interface DeleteDbInstanceInput {
  /**
   * <p>The id of the DB instance.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDbInstanceOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * <p>Specifies the DbCluster to which this DbInstance belongs to.</p>
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * <p>Specifies the DbInstance's role in the cluster.</p>
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * <p>Specifies the DbInstance's roles in the cluster.</p>
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 */
export interface GetDbInstanceInput {
  /**
   * <p>The id of the DB instance.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbInstanceOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * <p>Specifies the DbCluster to which this DbInstance belongs to.</p>
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * <p>Specifies the DbInstance's role in the cluster.</p>
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * <p>Specifies the DbInstance's roles in the cluster.</p>
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesInput {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a DB instance.</p>
 * @public
 */
export interface DbInstanceSummary {
  /**
   * <p>The service-generated unique identifier of the DB instance.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with
   *             the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The storage type for your DB instance.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage to allocate for your DbStorageType in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Single-Instance or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;
}

/**
 * @public
 */
export interface ListDbInstancesOutput {
  /**
   * <p>A list of Timestream for InfluxDB DB instance summaries.</p>
   * @public
   */
  items: DbInstanceSummary[] | undefined;

  /**
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDbInstanceInput {
  /**
   * <p>The id of the DB instance.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   *          <p>If you change the Port value, your database restarts immediately.</p>
   *          <p>Valid Values: 1024-65535</p>
   *          <p>Default: 8086</p>
   *          <p>Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>The Timestream for InfluxDB DB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage to allocate for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;
}

/**
 * @public
 */
export interface UpdateDbInstanceOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with
   *             the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the DB instance.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string | undefined;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number | undefined;

  /**
   * <p>Specifies whether the networkType of the Timestream for InfluxDB instance is IPV4, which can communicate over IPv4 protocol only, or DUAL, which can communicate over both IPv4 and IPv6 protocols.</p>
   * @public
   */
  networkType?: NetworkType | undefined;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType | undefined;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType | undefined;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number | undefined;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType | undefined;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string | undefined;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string | undefined;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string | undefined;

  /**
   * <p>Specifies the DbCluster to which this DbInstance belongs to.</p>
   * @public
   */
  dbClusterId?: string | undefined;

  /**
   * <p>Specifies the DbInstance's role in the cluster.</p>
   * @public
   */
  instanceMode?: InstanceMode | undefined;

  /**
   * <p>Specifies the DbInstance's roles in the cluster.</p>
   * @public
   */
  instanceModes?: InstanceMode[] | undefined;
}

/**
 * @public
 * @enum
 */
export const DurationType = {
  DAYS: "days",
  HOURS: "hours",
  MILLISECONDS: "milliseconds",
  MINUTES: "minutes",
  SECONDS: "seconds",
} as const;

/**
 * @public
 */
export type DurationType = (typeof DurationType)[keyof typeof DurationType];

/**
 * <p>Duration for InfluxDB parameters in Timestream for InfluxDB.</p>
 * @public
 */
export interface Duration {
  /**
   * <p>The type of duration for InfluxDB parameters.</p>
   * @public
   */
  durationType: DurationType | undefined;

  /**
   * <p>The value of duration for InfluxDB parameters.</p>
   * @public
   */
  value: number | undefined;
}

/**
 * @public
 * @enum
 */
export const LogLevel = {
  DEBUG: "debug",
  ERROR: "error",
  INFO: "info",
} as const;

/**
 * @public
 */
export type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

/**
 * @public
 * @enum
 */
export const TracingType = {
  DISABLED: "disabled",
  JAEGER: "jaeger",
  LOG: "log",
} as const;

/**
 * @public
 */
export type TracingType = (typeof TracingType)[keyof typeof TracingType];

/**
 * <p>All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.</p>
 * @public
 */
export interface InfluxDBv2Parameters {
  /**
   * <p>Include option to show detailed logs for Flux queries.</p>
   *          <p>Default: false</p>
   * @public
   */
  fluxLogEnabled?: boolean | undefined;

  /**
   * <p>Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified.</p>
   *          <p>Default: info</p>
   * @public
   */
  logLevel?: LogLevel | undefined;

  /**
   * <p>Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks.</p>
   *          <p>Default: false</p>
   * @public
   */
  noTasks?: boolean | undefined;

  /**
   * <p>Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryConcurrency?: number | undefined;

  /**
   * <p>Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryQueueSize?: number | undefined;

  /**
   * <p>Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.</p>
   * @public
   */
  tracingType?: TracingType | undefined;

  /**
   * <p>Disable the HTTP /metrics endpoint which exposes <a href="https://docs.influxdata.com/influxdb/v2/reference/internals/metrics/">internal InfluxDB metrics</a>.</p>
   *          <p>Default: false</p>
   * @public
   */
  metricsDisabled?: boolean | undefined;

  /**
   * <p>Maximum duration the server should keep established connections alive while waiting for new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 3 minutes</p>
   * @public
   */
  httpIdleTimeout?: Duration | undefined;

  /**
   * <p>Maximum duration the server should try to read HTTP headers for new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 10 seconds</p>
   * @public
   */
  httpReadHeaderTimeout?: Duration | undefined;

  /**
   * <p>Maximum duration the server should try to read the entirety of new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 0</p>
   * @public
   */
  httpReadTimeout?: Duration | undefined;

  /**
   * <p>Maximum duration the server should spend processing and responding to write requests. Set to 0 for no timeout.</p>
   *          <p>Default: 0</p>
   * @public
   */
  httpWriteTimeout?: Duration | undefined;

  /**
   * <p>Maximum number of group by time buckets a SELECT statement can create. 0 allows an unlimited number of buckets.</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectBuckets?: number | undefined;

  /**
   * <p>Maximum number of points a SELECT statement can process. 0 allows an unlimited number of points. InfluxDB checks the point count every second (so queries exceeding the maximum aren’t immediately aborted).</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectPoint?: number | undefined;

  /**
   * <p>Maximum number of series a SELECT statement can return. 0 allows an unlimited number of series.</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectSeries?: number | undefined;

  /**
   * <p>Disable the /debug/pprof HTTP endpoint. This endpoint provides runtime profiling data and can be helpful when debugging.</p>
   *          <p>Default: true</p>
   * @public
   */
  pprofDisabled?: boolean | undefined;

  /**
   * <p>Initial bytes of memory allocated for a query.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryInitialMemoryBytes?: number | undefined;

  /**
   * <p>Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryMaxMemoryBytes?: number | undefined;

  /**
   * <p>Maximum bytes of memory allowed for a single query. Must be greater or equal to queryInitialMemoryBytes.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryMemoryBytes?: number | undefined;

  /**
   * <p>Specifies the Time to Live (TTL) in minutes for newly created user sessions.</p>
   *          <p>Default: 60</p>
   * @public
   */
  sessionLength?: number | undefined;

  /**
   * <p>Disables automatically extending a user’s session TTL on each request. By default, every request sets the session’s expiration time to five minutes from now. When disabled, sessions expire after the specified <a href="https://docs.influxdata.com/influxdb/v2/reference/config-options/#session-length">session length</a> and the user is redirected to the login page, even if recently active.</p>
   *          <p>Default: false</p>
   * @public
   */
  sessionRenewDisabled?: boolean | undefined;

  /**
   * <p>Maximum size (in bytes) a shard’s cache can reach before it starts rejecting writes. Must be greater than storageCacheSnapShotMemorySize and lower than instance’s total memory capacity. We recommend setting it to below 15% of the total memory capacity.</p>
   *          <p>Default: 1073741824</p>
   * @public
   */
  storageCacheMaxMemorySize?: number | undefined;

  /**
   * <p>Size (in bytes) at which the storage engine will snapshot the cache and write it to a TSM file to make more memory available. Must not be greater than storageCacheMaxMemorySize.</p>
   *          <p>Default: 26214400</p>
   * @public
   */
  storageCacheSnapshotMemorySize?: number | undefined;

  /**
   * <p>Duration at which the storage engine will snapshot the cache and write it to a new TSM file if the shard hasn’t received writes or deletes.</p>
   *          <p>Default: 10 minutes</p>
   * @public
   */
  storageCacheSnapshotWriteColdDuration?: Duration | undefined;

  /**
   * <p>Duration at which the storage engine will compact all TSM files in a shard if it hasn't received writes or deletes.</p>
   *          <p>Default: 4 hours</p>
   * @public
   */
  storageCompactFullWriteColdDuration?: Duration | undefined;

  /**
   * <p>Rate limit (in bytes per second) that TSM compactions can write to disk.</p>
   *          <p>Default: 50331648</p>
   * @public
   */
  storageCompactThroughputBurst?: number | undefined;

  /**
   * <p>Maximum number of full and level compactions that can run concurrently. A value of 0 results in 50% of runtime.GOMAXPROCS(0) used at runtime. Any number greater than zero limits compactions to that value. This setting does not apply to cache snapshotting.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageMaxConcurrentCompactions?: number | undefined;

  /**
   * <p>Size (in bytes) at which an index write-ahead log (WAL) file will compact into an index file. Lower sizes will cause log files to be compacted more quickly and result in lower heap usage at the expense of write throughput.</p>
   *          <p>Default: 1048576</p>
   * @public
   */
  storageMaxIndexLogFileSize?: number | undefined;

  /**
   * <p>Skip field size validation on incoming write requests.</p>
   *          <p>Default: false</p>
   * @public
   */
  storageNoValidateFieldSize?: boolean | undefined;

  /**
   * <p>Interval of retention policy enforcement checks. Must be greater than 0.</p>
   *          <p>Default: 30 minutes</p>
   * @public
   */
  storageRetentionCheckInterval?: Duration | undefined;

  /**
   * <p>Maximum number of snapshot compactions that can run concurrently across all series partitions in a database.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageSeriesFileMaxConcurrentSnapshotCompactions?: number | undefined;

  /**
   * <p>Size of the internal cache used in the TSI index to store previously calculated series results. Cached results are returned quickly rather than needing to be recalculated when a subsequent query with the same tag key/value predicate is executed. Setting this value to 0 will disable the cache and may decrease query performance.</p>
   *          <p>Default: 100</p>
   * @public
   */
  storageSeriesIdSetCacheSize?: number | undefined;

  /**
   * <p>Maximum number writes to the WAL directory to attempt at the same time. Setting this value to 0 results in number of processing units available x2.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageWalMaxConcurrentWrites?: number | undefined;

  /**
   * <p>Maximum amount of time a write request to the WAL directory will wait when the <a href="https://docs.influxdata.com/influxdb/v2/reference/config-options/#storage-wal-max-concurrent-writes">maximum number of concurrent active writes to the WAL directory has been met</a>. Set to 0 to disable the timeout.</p>
   *          <p>Default: 10 minutes</p>
   * @public
   */
  storageWalMaxWriteDelay?: Duration | undefined;

  /**
   * <p>Disable the InfluxDB user interface (UI). The UI is enabled by default.</p>
   *          <p>Default: false</p>
   * @public
   */
  uiDisabled?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DataFusionRuntimeType = {
  MULTI_THREAD: "multi-thread",
  MULTI_THREAD_ALT: "multi-thread-alt",
} as const;

/**
 * @public
 */
export type DataFusionRuntimeType = (typeof DataFusionRuntimeType)[keyof typeof DataFusionRuntimeType];

/**
 * <p>Percent or Absolute Long for InfluxDB parameters</p>
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
   * <p>Percent for InfluxDB parameters.</p>
   * @public
   */
  export interface PercentMember {
    percent: string;
    absolute?: never;
    $unknown?: never;
  }

  /**
   * <p>Absolute long for InfluxDB parameters.</p>
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

  export interface Visitor<T> {
    percent: (value: string) => T;
    absolute: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PercentOrAbsoluteLong, visitor: Visitor<T>): T => {
    if (value.percent !== undefined) return visitor.percent(value.percent);
    if (value.absolute !== undefined) return visitor.absolute(value.absolute);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const LogFormats = {
  FULL: "full",
} as const;

/**
 * @public
 */
export type LogFormats = (typeof LogFormats)[keyof typeof LogFormats];

/**
 * <p>All the customer-modifiable InfluxDB v3 Core parameters in Timestream for InfluxDB.</p>
 * @public
 */
export interface InfluxDBv3CoreParameters {
  /**
   * <p>Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.</p>
   *          <p>Default: 432</p>
   * @public
   */
  queryFileLimit?: number | undefined;

  /**
   * <p>Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  queryLogSize?: number | undefined;

  /**
   * <p>Sets the filter directive for logs.</p>
   * @public
   */
  logFilter?: string | undefined;

  /**
   * <p>Defines the message format for logs.</p>
   *          <p>Default: full</p>
   * @public
   */
  logFormat?: LogFormats | undefined;

  /**
   * <p>Sets the maximum number of DataFusion runtime threads to use.</p>
   * @public
   */
  dataFusionNumThreads?: number | undefined;

  /**
   * <p>Specifies the DataFusion tokio runtime type.</p>
   *          <p>Default: multi-thread</p>
   * @public
   */
  dataFusionRuntimeType?: DataFusionRuntimeType | undefined;

  /**
   * <p>Disables the LIFO slot of the DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeDisableLifoSlot?: boolean | undefined;

  /**
   * <p>Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.</p>
   * @public
   */
  dataFusionRuntimeEventInterval?: number | undefined;

  /**
   * <p>Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.</p>
   * @public
   */
  dataFusionRuntimeGlobalQueueInterval?: number | undefined;

  /**
   * <p>Specifies the limit for additional threads spawned by the DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeMaxBlockingThreads?: number | undefined;

  /**
   * <p>Configures the maximum number of events processed per tick by the tokio DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeMaxIoEventsPerTick?: number | undefined;

  /**
   * <p>Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeThreadKeepAlive?: Duration | undefined;

  /**
   * <p>Sets the thread priority for tokio DataFusion runtime workers.</p>
   *          <p>Default: 10</p>
   * @public
   */
  dataFusionRuntimeThreadPriority?: number | undefined;

  /**
   * <p>When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  dataFusionMaxParquetFanout?: number | undefined;

  /**
   * <p>Uses a cached parquet loader when reading parquet files from the object store.</p>
   * @public
   */
  dataFusionUseCachedParquetLoader?: boolean | undefined;

  /**
   * <p>Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.</p>
   * @public
   */
  dataFusionConfig?: string | undefined;

  /**
   * <p>Specifies the maximum size of HTTP requests.</p>
   *          <p>Default: 10485760</p>
   * @public
   */
  maxHttpRequestSize?: number | undefined;

  /**
   * <p>Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100</p>
   *          <p>Default: 70%</p>
   * @public
   */
  forceSnapshotMemThreshold?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.</p>
   *          <p>Default: 600</p>
   * @public
   */
  walSnapshotSize?: number | undefined;

  /**
   * <p>Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.</p>
   *          <p>Default: 100000</p>
   * @public
   */
  walMaxWriteBufferSize?: number | undefined;

  /**
   * <p>Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.</p>
   *          <p>Default: 300</p>
   * @public
   */
  snapshottedWalFilesToKeep?: number | undefined;

  /**
   * <p>Specifies the interval to prefetch into the Parquet cache during compaction.</p>
   *          <p>Default: 3d</p>
   * @public
   */
  preemptiveCacheAge?: Duration | undefined;

  /**
   * <p>Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.</p>
   *          <p>Default: 0.1</p>
   * @public
   */
  parquetMemCachePrunePercentage?: number | undefined;

  /**
   * <p>Sets the interval to check if the in-memory Parquet cache needs to be pruned.</p>
   *          <p>Default: 1s</p>
   * @public
   */
  parquetMemCachePruneInterval?: Duration | undefined;

  /**
   * <p>Disables the in-memory Parquet cache. By default, the cache is enabled.</p>
   * @public
   */
  disableParquetMemCache?: boolean | undefined;

  /**
   * <p>Specifies the time window for caching recent Parquet files in memory.</p>
   *          <p>Default: 5h</p>
   * @public
   */
  parquetMemCacheQueryPathDuration?: Duration | undefined;

  /**
   * <p>Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  lastCacheEvictionInterval?: Duration | undefined;

  /**
   * <p>Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  distinctCacheEvictionInterval?: Duration | undefined;

  /**
   * <p>Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files that the compactor in InfluxDB 3 Enterprise can merge into larger generations.</p>
   *          <p>Default: 10m</p>
   * @public
   */
  gen1Duration?: Duration | undefined;

  /**
   * <p>Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.</p>
   *          <p>Default: 20%</p>
   * @public
   */
  execMemPoolBytes?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.</p>
   *          <p>Default: 20%</p>
   * @public
   */
  parquetMemCacheSize?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Determines whether WAL replay should fail when encountering errors.</p>
   *          <p>Default: false</p>
   * @public
   */
  walReplayFailOnError?: boolean | undefined;

  /**
   * <p>Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.</p>
   *          <p>Default: max(num_cpus, 10)</p>
   * @public
   */
  walReplayConcurrencyLimit?: number | undefined;

  /**
   * <p>Specifies the maximum number of entries in the table index cache.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  tableIndexCacheMaxEntries?: number | undefined;

  /**
   * <p>Limits the concurrency level for table index cache operations.</p>
   *          <p>Default: 8</p>
   * @public
   */
  tableIndexCacheConcurrencyLimit?: number | undefined;

  /**
   * <p>Specifies how far back to look when creating generation 1 Parquet files.</p>
   *          <p>Default: 24h</p>
   * @public
   */
  gen1LookbackDuration?: Duration | undefined;

  /**
   * <p>The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.</p>
   *          <p>Default: 30m</p>
   * @public
   */
  retentionCheckInterval?: Duration | undefined;

  /**
   * <p>Specifies the grace period before permanently deleting data.</p>
   *          <p>Default: 24h</p>
   * @public
   */
  deleteGracePeriod?: Duration | undefined;

  /**
   * <p>Sets the default duration for hard deletion of data.</p>
   *          <p>Default: 90d</p>
   * @public
   */
  hardDeleteDefaultDuration?: Duration | undefined;
}

/**
 * <p>All the customer-modifiable InfluxDB v3 Enterprise parameters in Timestream for InfluxDB.</p>
 * @public
 */
export interface InfluxDBv3EnterpriseParameters {
  /**
   * <p>Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.</p>
   *          <p>Default: 432</p>
   * @public
   */
  queryFileLimit?: number | undefined;

  /**
   * <p>Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  queryLogSize?: number | undefined;

  /**
   * <p>Sets the filter directive for logs.</p>
   * @public
   */
  logFilter?: string | undefined;

  /**
   * <p>Defines the message format for logs.</p>
   *          <p>Default: full</p>
   * @public
   */
  logFormat?: LogFormats | undefined;

  /**
   * <p>Sets the maximum number of DataFusion runtime threads to use.</p>
   * @public
   */
  dataFusionNumThreads?: number | undefined;

  /**
   * <p>Specifies the DataFusion tokio runtime type.</p>
   *          <p>Default: multi-thread</p>
   * @public
   */
  dataFusionRuntimeType?: DataFusionRuntimeType | undefined;

  /**
   * <p>Disables the LIFO slot of the DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeDisableLifoSlot?: boolean | undefined;

  /**
   * <p>Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.</p>
   * @public
   */
  dataFusionRuntimeEventInterval?: number | undefined;

  /**
   * <p>Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.</p>
   * @public
   */
  dataFusionRuntimeGlobalQueueInterval?: number | undefined;

  /**
   * <p>Specifies the limit for additional threads spawned by the DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeMaxBlockingThreads?: number | undefined;

  /**
   * <p>Configures the maximum number of events processed per tick by the tokio DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeMaxIoEventsPerTick?: number | undefined;

  /**
   * <p>Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.</p>
   * @public
   */
  dataFusionRuntimeThreadKeepAlive?: Duration | undefined;

  /**
   * <p>Sets the thread priority for tokio DataFusion runtime workers.</p>
   *          <p>Default: 10</p>
   * @public
   */
  dataFusionRuntimeThreadPriority?: number | undefined;

  /**
   * <p>When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  dataFusionMaxParquetFanout?: number | undefined;

  /**
   * <p>Uses a cached parquet loader when reading parquet files from the object store.</p>
   * @public
   */
  dataFusionUseCachedParquetLoader?: boolean | undefined;

  /**
   * <p>Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.</p>
   * @public
   */
  dataFusionConfig?: string | undefined;

  /**
   * <p>Specifies the maximum size of HTTP requests.</p>
   *          <p>Default: 10485760</p>
   * @public
   */
  maxHttpRequestSize?: number | undefined;

  /**
   * <p>Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100</p>
   *          <p>Default: 70%</p>
   * @public
   */
  forceSnapshotMemThreshold?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.</p>
   *          <p>Default: 600</p>
   * @public
   */
  walSnapshotSize?: number | undefined;

  /**
   * <p>Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.</p>
   *          <p>Default: 100000</p>
   * @public
   */
  walMaxWriteBufferSize?: number | undefined;

  /**
   * <p>Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.</p>
   *          <p>Default: 300</p>
   * @public
   */
  snapshottedWalFilesToKeep?: number | undefined;

  /**
   * <p>Specifies the interval to prefetch into the Parquet cache during compaction.</p>
   *          <p>Default: 3d</p>
   * @public
   */
  preemptiveCacheAge?: Duration | undefined;

  /**
   * <p>Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.</p>
   *          <p>Default: 0.1</p>
   * @public
   */
  parquetMemCachePrunePercentage?: number | undefined;

  /**
   * <p>Sets the interval to check if the in-memory Parquet cache needs to be pruned.</p>
   *          <p>Default: 1s</p>
   * @public
   */
  parquetMemCachePruneInterval?: Duration | undefined;

  /**
   * <p>Disables the in-memory Parquet cache. By default, the cache is enabled.</p>
   * @public
   */
  disableParquetMemCache?: boolean | undefined;

  /**
   * <p>Specifies the time window for caching recent Parquet files in memory.</p>
   *          <p>Default: 5h</p>
   * @public
   */
  parquetMemCacheQueryPathDuration?: Duration | undefined;

  /**
   * <p>Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  lastCacheEvictionInterval?: Duration | undefined;

  /**
   * <p>Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  distinctCacheEvictionInterval?: Duration | undefined;

  /**
   * <p>Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files, which the compactor can merge into larger generations.</p>
   *          <p>Default: 10m</p>
   * @public
   */
  gen1Duration?: Duration | undefined;

  /**
   * <p>Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.</p>
   *          <p>Default: 20%</p>
   * @public
   */
  execMemPoolBytes?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.</p>
   *          <p>Default: 20%</p>
   * @public
   */
  parquetMemCacheSize?: PercentOrAbsoluteLong | undefined;

  /**
   * <p>Determines whether WAL replay should fail when encountering errors.</p>
   *          <p>Default: false</p>
   * @public
   */
  walReplayFailOnError?: boolean | undefined;

  /**
   * <p>Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.</p>
   *          <p>Default: max(num_cpus, 10)</p>
   * @public
   */
  walReplayConcurrencyLimit?: number | undefined;

  /**
   * <p>Specifies the maximum number of entries in the table index cache.</p>
   *          <p>Default: 1000</p>
   * @public
   */
  tableIndexCacheMaxEntries?: number | undefined;

  /**
   * <p>Limits the concurrency level for table index cache operations.</p>
   *          <p>Default: 8</p>
   * @public
   */
  tableIndexCacheConcurrencyLimit?: number | undefined;

  /**
   * <p>Specifies how far back to look when creating generation 1 Parquet files.</p>
   *          <p>Default: 24h</p>
   * @public
   */
  gen1LookbackDuration?: Duration | undefined;

  /**
   * <p>The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.</p>
   *          <p>Default: 30m</p>
   * @public
   */
  retentionCheckInterval?: Duration | undefined;

  /**
   * <p>Specifies the grace period before permanently deleting data.</p>
   *          <p>Default: 24h</p>
   * @public
   */
  deleteGracePeriod?: Duration | undefined;

  /**
   * <p>Sets the default duration for hard deletion of data.</p>
   *          <p>Default: 90d</p>
   * @public
   */
  hardDeleteDefaultDuration?: Duration | undefined;

  /**
   * <p>Specifies number of instances in the DbCluster which can both ingest and query.</p>
   * @public
   */
  ingestQueryInstances: number | undefined;

  /**
   * <p>Specifies number of instances in the DbCluster which can only query.</p>
   * @public
   */
  queryOnlyInstances: number | undefined;

  /**
   * <p>Specifies if the compactor instance should be a standalone instance or not.</p>
   * @public
   */
  dedicatedCompactor: boolean | undefined;

  /**
   * <p>Specifies the soft limit for the number of rows per file that the compactor writes. The compactor may write more rows than this limit.</p>
   *          <p>Default: 1000000</p>
   * @public
   */
  compactionRowLimit?: number | undefined;

  /**
   * <p>Sets the maximum number of files included in any compaction plan.</p>
   *          <p>Default: 500</p>
   * @public
   */
  compactionMaxNumFilesPerPlan?: number | undefined;

  /**
   * <p>Specifies the duration of the first level of compaction (gen2). Later levels of compaction are multiples of this duration. This value should be equal to or greater than the gen1 duration.</p>
   *          <p>Default: 20m</p>
   * @public
   */
  compactionGen2Duration?: Duration | undefined;

  /**
   * <p>Specifies a comma-separated list of multiples defining the duration of each level of compaction. The number of elements in the list determines the number of compaction levels. The first element specifies the duration of the first level (gen3); subsequent levels are multiples of the previous level.</p>
   *          <p>Default: 3,4,6,5</p>
   * @public
   */
  compactionMultipliers?: string | undefined;

  /**
   * <p>Specifies the amount of time that the compactor waits after finishing a compaction run to delete files marked as needing deletion during that compaction run.</p>
   *          <p>Default: 10m</p>
   * @public
   */
  compactionCleanupWait?: Duration | undefined;

  /**
   * <p>Specifies how often the compactor checks for new compaction work to perform.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  compactionCheckInterval?: Duration | undefined;

  /**
   * <p>Disables populating the last-N-value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).</p>
   * @public
   */
  lastValueCacheDisableFromHistory?: boolean | undefined;

  /**
   * <p>Disables populating the distinct value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).</p>
   * @public
   */
  distinctValueCacheDisableFromHistory?: boolean | undefined;

  /**
   * <p>Specifies the interval at which data replication occurs between cluster nodes.</p>
   *          <p>Default: 250ms</p>
   * @public
   */
  replicationInterval?: Duration | undefined;

  /**
   * <p>Defines how often the catalog synchronizes across cluster nodes.</p>
   *          <p>Default: 10s</p>
   * @public
   */
  catalogSyncInterval?: Duration | undefined;
}

/**
 * <p>The parameters that comprise the parameter group.</p>
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
   * <p>All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.</p>
   * @public
   */
  export interface InfluxDBv2Member {
    InfluxDBv2: InfluxDBv2Parameters;
    InfluxDBv3Core?: never;
    InfluxDBv3Enterprise?: never;
    $unknown?: never;
  }

  /**
   * <p>All the customer-modifiable InfluxDB v3 Core parameters in Timestream for InfluxDB.</p>
   * @public
   */
  export interface InfluxDBv3CoreMember {
    InfluxDBv2?: never;
    InfluxDBv3Core: InfluxDBv3CoreParameters;
    InfluxDBv3Enterprise?: never;
    $unknown?: never;
  }

  /**
   * <p>All the customer-modifiable InfluxDB v3 Enterprise parameters in Timestream for InfluxDB.</p>
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

  export interface Visitor<T> {
    InfluxDBv2: (value: InfluxDBv2Parameters) => T;
    InfluxDBv3Core: (value: InfluxDBv3CoreParameters) => T;
    InfluxDBv3Enterprise: (value: InfluxDBv3EnterpriseParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: _Parameters, visitor: Visitor<T>): T => {
    if (value.InfluxDBv2 !== undefined) return visitor.InfluxDBv2(value.InfluxDBv2);
    if (value.InfluxDBv3Core !== undefined) return visitor.InfluxDBv3Core(value.InfluxDBv3Core);
    if (value.InfluxDBv3Enterprise !== undefined) return visitor.InfluxDBv3Enterprise(value.InfluxDBv3Enterprise);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateDbParameterGroupInput {
  /**
   * <p>The name of the DB parameter group. The name must be unique per customer and per region.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the DB parameter group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters | undefined;

  /**
   * <p>A list of key-value pairs to associate with the DB parameter group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDbParameterGroupOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARM) of the DB parameter group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The description of the DB parameter group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters | undefined;
}

/**
 * @public
 */
export interface GetDbParameterGroupInput {
  /**
   * <p>The id of the DB parameter group.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbParameterGroupOutput {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB parameter group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A description of the DB parameter group.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters | undefined;
}

/**
 * @public
 */
export interface ListDbParameterGroupsInput {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a summary of a DB parameter group.</p>
 * @public
 */
export interface DbParameterGroupSummary {
  /**
   * <p>A service-generated unique identifier.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>This customer-supplied name uniquely identifies the parameter group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB parameter group.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A description of the DB parameter group.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListDbParameterGroupsOutput {
  /**
   * <p>A list of Timestream for InfluxDB DB parameter group summaries.</p>
   * @public
   */
  items: DbParameterGroupSummary[] | undefined;

  /**
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags used to categorize and track resources.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags used to categorize and track resources.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys used to identify the tags.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @internal
 */
export const CreateDbClusterInputFilterSensitiveLog = (obj: CreateDbClusterInput): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.password && { password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateDbInstanceInputFilterSensitiveLog = (obj: CreateDbInstanceInput): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.password && { password: SENSITIVE_STRING }),
});
