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
export const DeploymentType = {
  SINGLE_AZ: "SINGLE_AZ",
  WITH_MULTIAZ_STANDBY: "WITH_MULTIAZ_STANDBY",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

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
  username?: string;

  /**
   * <p>The password of the initial admin user created in InfluxDB. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in AWS SecretManager in your account.</p>
   * @public
   */
  password: string | undefined;

  /**
   * <p>The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.</p>
   * @public
   */
  organization?: string;

  /**
   * <p>The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.</p>
   * @public
   */
  bucket?: string;

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
  publiclyAccessible?: boolean;

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
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage to allocate for your DB storage type in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage: number | undefined;

  /**
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>Configuration for sending InfluxDB engine logs to a specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>A list of key-value pairs to associate with the DB instance.</p>
   * @public
   */
  tags?: Record<string, string>;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   *          <p>Valid Values: 1024-65535</p>
   *          <p>Default: 8086</p>
   *          <p>Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680</p>
   * @public
   */
  port?: number;
}

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
  status?: Status;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections. The default value is 8086.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string;
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
  retryAfterSeconds?: number;

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
  status?: Status;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string;
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
  status?: Status;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string;
}

/**
 * @public
 */
export interface ListDbInstancesInput {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number;
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
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.</p>
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
  status?: Status;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>The storage type for your DB instance.</p>
   * @public
   */
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage to allocate for your DbStorageType in GiB (gibibytes).</p>
   * @public
   */
  allocatedStorage?: number;

  /**
   * <p>Single-Instance or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;
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
  nextToken?: string;
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
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   *          <p>If you change the Port value, your database restarts immediately.</p>
   *          <p>Valid Values: 1024-65535</p>
   *          <p>Default: 8086</p>
   *          <p>Constraints: The value can't be 2375-2376, 7788-7799, 8090, or 51678-51680</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB DB instance type to run InfluxDB on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;
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
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.</p>
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
  status?: Status;

  /**
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   * @public
   */
  endpoint?: string;

  /**
   * <p>The port number on which InfluxDB accepts connections.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   * @public
   */
  dbInstanceType?: DbInstanceType;

  /**
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   * @public
   */
  dbStorageType?: DbStorageType;

  /**
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   * @public
   */
  allocatedStorage?: number;

  /**
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   * @public
   */
  deploymentType?: DeploymentType;

  /**
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   * @public
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   * @public
   */
  dbParameterGroupIdentifier?: string;

  /**
   * <p>The Availability Zone in which the DB instance resides.</p>
   * @public
   */
  availabilityZone?: string;

  /**
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   * @public
   */
  secondaryAvailabilityZone?: string;

  /**
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   * @public
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   * @public
   */
  influxAuthParametersSecretArn?: string;
}

/**
 * @public
 * @enum
 */
export const DurationType = {
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
  fluxLogEnabled?: boolean;

  /**
   * <p>Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified.</p>
   *          <p>Default: info</p>
   * @public
   */
  logLevel?: LogLevel;

  /**
   * <p>Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks.</p>
   *          <p>Default: false</p>
   * @public
   */
  noTasks?: boolean;

  /**
   * <p>Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryConcurrency?: number;

  /**
   * <p>Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryQueueSize?: number;

  /**
   * <p>Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.</p>
   * @public
   */
  tracingType?: TracingType;

  /**
   * <p>Disable the HTTP /metrics endpoint which exposes <a href="https://docs.influxdata.com/influxdb/v2/reference/internals/metrics/">internal InfluxDB metrics</a>.</p>
   *          <p>Default: false</p>
   * @public
   */
  metricsDisabled?: boolean;

  /**
   * <p>Maximum duration the server should keep established connections alive while waiting for new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 3 minutes</p>
   * @public
   */
  httpIdleTimeout?: Duration;

  /**
   * <p>Maximum duration the server should try to read HTTP headers for new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 10 seconds</p>
   * @public
   */
  httpReadHeaderTimeout?: Duration;

  /**
   * <p>Maximum duration the server should try to read the entirety of new requests. Set to 0 for no timeout.</p>
   *          <p>Default: 0</p>
   * @public
   */
  httpReadTimeout?: Duration;

  /**
   * <p>Maximum duration the server should spend processing and responding to write requests. Set to 0 for no timeout.</p>
   *          <p>Default: 0</p>
   * @public
   */
  httpWriteTimeout?: Duration;

  /**
   * <p>Maximum number of group by time buckets a SELECT statement can create. 0 allows an unlimited number of buckets.</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectBuckets?: number;

  /**
   * <p>Maximum number of points a SELECT statement can process. 0 allows an unlimited number of points. InfluxDB checks the point count every second (so queries exceeding the maximum aren’t immediately aborted).</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectPoint?: number;

  /**
   * <p>Maximum number of series a SELECT statement can return. 0 allows an unlimited number of series.</p>
   *          <p>Default: 0</p>
   * @public
   */
  influxqlMaxSelectSeries?: number;

  /**
   * <p>Disable the /debug/pprof HTTP endpoint. This endpoint provides runtime profiling data and can be helpful when debugging.</p>
   *          <p>Default: false</p>
   * @public
   */
  pprofDisabled?: boolean;

  /**
   * <p>Initial bytes of memory allocated for a query.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryInitialMemoryBytes?: number;

  /**
   * <p>Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryMaxMemoryBytes?: number;

  /**
   * <p>Maximum bytes of memory allowed for a single query. Must be greater or equal to queryInitialMemoryBytes.</p>
   *          <p>Default: 0</p>
   * @public
   */
  queryMemoryBytes?: number;

  /**
   * <p>Specifies the Time to Live (TTL) in minutes for newly created user sessions.</p>
   *          <p>Default: 60</p>
   * @public
   */
  sessionLength?: number;

  /**
   * <p>Disables automatically extending a user’s session TTL on each request. By default, every request sets the session’s expiration time to five minutes from now. When disabled, sessions expire after the specified <a href="https://docs.influxdata.com/influxdb/v2/reference/config-options/#session-length">session length</a> and the user is redirected to the login page, even if recently active.</p>
   *          <p>Default: false</p>
   * @public
   */
  sessionRenewDisabled?: boolean;

  /**
   * <p>Maximum size (in bytes) a shard’s cache can reach before it starts rejecting writes. Must be greater than storageCacheSnapShotMemorySize and lower than instance’s total memory capacity. We recommend setting it to below 15% of the total memory capacity.</p>
   *          <p>Default: 1073741824</p>
   * @public
   */
  storageCacheMaxMemorySize?: number;

  /**
   * <p>Size (in bytes) at which the storage engine will snapshot the cache and write it to a TSM file to make more memory available. Must not be greater than storageCacheMaxMemorySize.</p>
   *          <p>Default: 26214400</p>
   * @public
   */
  storageCacheSnapshotMemorySize?: number;

  /**
   * <p>Duration at which the storage engine will snapshot the cache and write it to a new TSM file if the shard hasn’t received writes or deletes.</p>
   *          <p>Default: 10 minutes</p>
   * @public
   */
  storageCacheSnapshotWriteColdDuration?: Duration;

  /**
   * <p>Duration at which the storage engine will compact all TSM files in a shard if it hasn't received writes or deletes.</p>
   *          <p>Default: 4 hours</p>
   * @public
   */
  storageCompactFullWriteColdDuration?: Duration;

  /**
   * <p>Rate limit (in bytes per second) that TSM compactions can write to disk.</p>
   *          <p>Default: 50331648</p>
   * @public
   */
  storageCompactThroughputBurst?: number;

  /**
   * <p>Maximum number of full and level compactions that can run concurrently. A value of 0 results in 50% of runtime.GOMAXPROCS(0) used at runtime. Any number greater than zero limits compactions to that value. This setting does not apply to cache snapshotting.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageMaxConcurrentCompactions?: number;

  /**
   * <p>Size (in bytes) at which an index write-ahead log (WAL) file will compact into an index file. Lower sizes will cause log files to be compacted more quickly and result in lower heap usage at the expense of write throughput.</p>
   *          <p>Default: 1048576</p>
   * @public
   */
  storageMaxIndexLogFileSize?: number;

  /**
   * <p>Skip field size validation on incoming write requests.</p>
   *          <p>Default: false</p>
   * @public
   */
  storageNoValidateFieldSize?: boolean;

  /**
   * <p>Interval of retention policy enforcement checks. Must be greater than 0.</p>
   *          <p>Default: 30 minutes</p>
   * @public
   */
  storageRetentionCheckInterval?: Duration;

  /**
   * <p>Maximum number of snapshot compactions that can run concurrently across all series partitions in a database.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageSeriesFileMaxConcurrentSnapshotCompactions?: number;

  /**
   * <p>Size of the internal cache used in the TSI index to store previously calculated series results. Cached results are returned quickly rather than needing to be recalculated when a subsequent query with the same tag key/value predicate is executed. Setting this value to 0 will disable the cache and may decrease query performance.</p>
   *          <p>Default: 100</p>
   * @public
   */
  storageSeriesIdSetCacheSize?: number;

  /**
   * <p>Maximum number writes to the WAL directory to attempt at the same time. Setting this value to 0 results in number of processing units available x2.</p>
   *          <p>Default: 0</p>
   * @public
   */
  storageWalMaxConcurrentWrites?: number;

  /**
   * <p>Maximum amount of time a write request to the WAL directory will wait when the <a href="https://docs.influxdata.com/influxdb/v2/reference/config-options/#storage-wal-max-concurrent-writes">maximum number of concurrent active writes to the WAL directory has been met</a>. Set to 0 to disable the timeout.</p>
   *          <p>Default: 10 minutes</p>
   * @public
   */
  storageWalMaxWriteDelay?: Duration;

  /**
   * <p>Disable the InfluxDB user interface (UI). The UI is enabled by default.</p>
   *          <p>Default: false</p>
   * @public
   */
  uiDisabled?: boolean;
}

/**
 * <p>The parameters that comprise the parameter group.</p>
 * @public
 */
export type _Parameters = _Parameters.InfluxDBv2Member | _Parameters.$UnknownMember;

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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InfluxDBv2?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    InfluxDBv2: (value: InfluxDBv2Parameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: _Parameters, visitor: Visitor<T>): T => {
    if (value.InfluxDBv2 !== undefined) return visitor.InfluxDBv2(value.InfluxDBv2);
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
  description?: string;

  /**
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters;

  /**
   * <p>A list of key-value pairs to associate with the DB parameter group.</p>
   * @public
   */
  tags?: Record<string, string>;
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
  description?: string;

  /**
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters;
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
  description?: string;

  /**
   * <p>The parameters that comprise the DB parameter group.</p>
   * @public
   */
  parameters?: _Parameters;
}

/**
 * @public
 */
export interface ListDbParameterGroupsInput {
  /**
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   * @public
   */
  maxResults?: number;
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
  description?: string;
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
  nextToken?: string;
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
  tags?: Record<string, string>;
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
export const CreateDbInstanceInputFilterSensitiveLog = (obj: CreateDbInstanceInput): any => ({
  ...obj,
  ...(obj.username && { username: SENSITIVE_STRING }),
  ...(obj.password && { password: SENSITIVE_STRING }),
});
