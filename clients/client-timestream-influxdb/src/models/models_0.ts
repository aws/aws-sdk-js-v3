// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { TimestreamInfluxDBServiceException as __BaseException } from "./TimestreamInfluxDBServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * @public
 * <p>The request conflicts with an existing resource in Timestream for InfluxDB.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the Timestream for InfluxDB resource associated with the request.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of Timestream for InfluxDB resource associated with the request.</p>
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
 * @public
 * <p>Configuration for S3 bucket log delivery.</p>
 */
export interface S3Configuration {
  /**
   * @public
   * <p>The name of the S3 bucket to deliver logs to.</p>
   */
  bucketName: string | undefined;

  /**
   * @public
   * <p>Indicates whether log delivery to the S3 bucket is enabled.</p>
   */
  enabled: boolean | undefined;
}

/**
 * @public
 * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
 */
export interface LogDeliveryConfiguration {
  /**
   * @public
   * <p>Configuration for S3 bucket log delivery.</p>
   */
  s3Configuration: S3Configuration | undefined;
}

/**
 * @public
 */
export interface CreateDbInstanceInput {
  /**
   * @public
   * <p>The name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands. This name will also be a prefix included in the endpoint. DB instance names must be unique per customer and per region.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The username of the initial admin user created in InfluxDB. Must start with a letter and can't end with a hyphen or contain two consecutive hyphens. For example, my-user1. This username will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in Amazon Secrets Manager in your account.</p>
   */
  username?: string;

  /**
   * @public
   * <p>The password of the initial admin user created in InfluxDB. This password will allow you to access the InfluxDB UI to perform various administrative tasks and also use the InfluxDB CLI to create an operator token. These attributes will be stored in a Secret created in AWS SecretManager in your account.</p>
   */
  password: string | undefined;

  /**
   * @public
   * <p>The name of the initial organization for the initial admin user in InfluxDB. An InfluxDB organization is a workspace for a group of users.</p>
   */
  organization?: string;

  /**
   * @public
   * <p>The name of the initial InfluxDB bucket. All InfluxDB data is stored in a bucket. A bucket combines the concept of a database and a retention period (the duration of time that each data point persists). A bucket belongs to an organization.</p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB DB instance type to run InfluxDB on.</p>
   */
  dbInstanceType: DbInstanceType | undefined;

  /**
   * @public
   * <p>A list of VPC subnet IDs to associate with the DB instance. Provide at least two VPC subnet IDs in different availability zones when deploying with a Multi-AZ standby.</p>
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * @public
   * <p>A list of VPC security group IDs to associate with the DB instance.</p>
   */
  vpcSecurityGroupIds: string[] | undefined;

  /**
   * @public
   * <p>Configures the DB instance with a public IP to facilitate access.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
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
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage to allocate for your DB storage type in GiB (gibibytes).</p>
   */
  allocatedStorage: number | undefined;

  /**
   * @public
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   */
  dbParameterGroupIdentifier?: string;

  /**
   * @public
   * <p>Specifies whether the DB instance will be deployed as a standalone instance or with a Multi-AZ standby for high availability.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to a specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>A list of key-value pairs to associate with the DB instance.</p>
   */
  tags?: Record<string, string>;
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
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the DB instance.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   */
  dbInstanceType?: DbInstanceType;

  /**
   * @public
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   */
  allocatedStorage?: number;

  /**
   * @public
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   */
  dbParameterGroupIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone in which the DB instance resides.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   */
  influxAuthParametersSecretArn?: string;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
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
 * @public
 * <p>The requested resource was not found or does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The identifier for the Timestream for InfluxDB resource associated with the request.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The type of Timestream for InfluxDB resource associated with the request.</p>
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
 * @public
 * <p>The request exceeds the service quota.</p>
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
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @public
   * <p>The number of seconds the caller should wait before retrying.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by Timestream for InfluxDB.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The reason that validation failed.</p>
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
   * @public
   * <p>The id of the DB instance.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDbInstanceOutput {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the DB instance.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   */
  dbInstanceType?: DbInstanceType;

  /**
   * @public
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   */
  allocatedStorage?: number;

  /**
   * @public
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   */
  dbParameterGroupIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone in which the DB instance resides.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   */
  influxAuthParametersSecretArn?: string;
}

/**
 * @public
 */
export interface GetDbInstanceInput {
  /**
   * @public
   * <p>The id of the DB instance.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbInstanceOutput {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The customer-supplied name that uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the DB instance.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   */
  dbInstanceType?: DbInstanceType;

  /**
   * @public
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   */
  allocatedStorage?: number;

  /**
   * @public
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   */
  dbParameterGroupIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone in which the DB instance resides.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   */
  influxAuthParametersSecretArn?: string;
}

/**
 * @public
 */
export interface ListDbInstancesInput {
  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a summary of a DB instance.</p>
 */
export interface DbInstanceSummary {
  /**
   * @public
   * <p>The service-generated unique identifier of the DB instance.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the DB instance.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB instance type to run InfluxDB on.</p>
   */
  dbInstanceType?: DbInstanceType;

  /**
   * @public
   * <p>The storage type for your DB instance.</p>
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage to allocate for your DbStorageType in GiB (gibibytes).</p>
   */
  allocatedStorage?: number;

  /**
   * @public
   * <p>Single-Instance or with a MultiAZ Standby for High availability.</p>
   */
  deploymentType?: DeploymentType;
}

/**
 * @public
 */
export interface ListDbInstancesOutput {
  /**
   * @public
   * <p>A list of Timestream for InfluxDB DB instance summaries.</p>
   */
  items: DbInstanceSummary[] | undefined;

  /**
   * @public
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateDbInstanceInput {
  /**
   * @public
   * <p>The id of the DB instance.</p>
   */
  identifier: string | undefined;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>The id of the DB parameter group to assign to your DB instance. DB parameter groups specify how the database is configured. For example, DB parameter groups can specify the limit for query concurrency.</p>
   */
  dbParameterGroupIdentifier?: string;
}

/**
 * @public
 */
export interface UpdateDbInstanceOutput {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>This customer-supplied name uniquely identifies the DB instance when interacting with the Amazon Timestream for InfluxDB API and AWS CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB instance.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The status of the DB instance.</p>
   */
  status?: Status;

  /**
   * @public
   * <p>The endpoint used to connect to InfluxDB. The default InfluxDB port is 8086.</p>
   */
  endpoint?: string;

  /**
   * @public
   * <p>The Timestream for InfluxDB instance type that InfluxDB runs on.</p>
   */
  dbInstanceType?: DbInstanceType;

  /**
   * @public
   * <p>The Timestream for InfluxDB DB storage type that InfluxDB stores data on.</p>
   */
  dbStorageType?: DbStorageType;

  /**
   * @public
   * <p>The amount of storage allocated for your DB storage type (in gibibytes).</p>
   */
  allocatedStorage?: number;

  /**
   * @public
   * <p>Specifies whether the Timestream for InfluxDB is deployed as Single-AZ or with a MultiAZ Standby for High availability.</p>
   */
  deploymentType?: DeploymentType;

  /**
   * @public
   * <p>A list of VPC subnet IDs associated with the DB instance.</p>
   */
  vpcSubnetIds: string[] | undefined;

  /**
   * @public
   * <p>Indicates if the DB instance has a public IP to facilitate access.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>A list of VPC security group IDs associated with the DB instance.</p>
   */
  vpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The id of the DB parameter group assigned to your DB instance.</p>
   */
  dbParameterGroupIdentifier?: string;

  /**
   * @public
   * <p>The Availability Zone in which the DB instance resides.</p>
   */
  availabilityZone?: string;

  /**
   * @public
   * <p>The Availability Zone in which the standby instance is located when deploying with a MultiAZ standby instance.</p>
   */
  secondaryAvailabilityZone?: string;

  /**
   * @public
   * <p>Configuration for sending InfluxDB engine logs to send to specified S3 bucket.</p>
   */
  logDeliveryConfiguration?: LogDeliveryConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the initial InfluxDB authorization parameters. The secret value is a JSON formatted key-value pair holding InfluxDB authorization values: organization, bucket, username, and password.</p>
   */
  influxAuthParametersSecretArn?: string;
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
 * @public
 * <p>All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.</p>
 */
export interface InfluxDBv2Parameters {
  /**
   * @public
   * <p>Include option to show detailed logs for Flux queries.</p>
   *          <p>Default: false</p>
   */
  fluxLogEnabled?: boolean;

  /**
   * @public
   * <p>Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified.</p>
   *          <p>Default: info</p>
   */
  logLevel?: LogLevel;

  /**
   * @public
   * <p>Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks.</p>
   *          <p>Default: false</p>
   */
  noTasks?: boolean;

  /**
   * @public
   * <p>Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries.</p>
   *          <p>Default: 0</p>
   */
  queryConcurrency?: number;

  /**
   * @public
   * <p>Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.</p>
   *          <p>Default: 0</p>
   */
  queryQueueSize?: number;

  /**
   * @public
   * <p>Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.</p>
   */
  tracingType?: TracingType;

  /**
   * @public
   * <p>Disable the HTTP /metrics endpoint which exposes <a href="https://docs.influxdata.com/influxdb/v2/reference/internals/metrics/">internal InfluxDB metrics</a>.</p>
   *          <p>Default: false</p>
   */
  metricsDisabled?: boolean;
}

/**
 * @public
 * <p>The parameters that comprise the parameter group.</p>
 */
export type _Parameters = _Parameters.InfluxDBv2Member | _Parameters.$UnknownMember;

/**
 * @public
 */
export namespace _Parameters {
  /**
   * @public
   * <p>All the customer-modifiable InfluxDB v2 parameters in Timestream for InfluxDB.</p>
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
   * @public
   * <p>The name of the DB parameter group. The name must be unique per customer and per region.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description of the DB parameter group.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   */
  parameters?: _Parameters;

  /**
   * @public
   * <p>A list of key-value pairs to associate with the DB parameter group.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDbParameterGroupOutput {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARM) of the DB parameter group.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The description of the DB parameter group.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of the parameters that comprise the DB parameter group.</p>
   */
  parameters?: _Parameters;
}

/**
 * @public
 */
export interface GetDbParameterGroupInput {
  /**
   * @public
   * <p>The id of the DB parameter group.</p>
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDbParameterGroupOutput {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The customer-supplied name that uniquely identifies the DB parameter group when interacting with the Amazon Timestream for InfluxDB API and CLI commands.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB parameter group.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A description of the DB parameter group.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The parameters that comprise the DB parameter group.</p>
   */
  parameters?: _Parameters;
}

/**
 * @public
 */
export interface ListDbParameterGroupsInput {
  /**
   * @public
   * <p>The pagination token. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of items to return in the output. If the total number of items available is more than the value specified, a NextToken is provided in the output. To resume pagination, provide the NextToken value as argument of a subsequent API invocation.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a summary of a DB parameter group.</p>
 */
export interface DbParameterGroupSummary {
  /**
   * @public
   * <p>A service-generated unique identifier.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>This customer-supplied name uniquely identifies the parameter group.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the DB parameter group.</p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>A description of the DB parameter group.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListDbParameterGroupsOutput {
  /**
   * @public
   * <p>A list of Timestream for InfluxDB DB parameter group summaries.</p>
   */
  items: DbParameterGroupSummary[] | undefined;

  /**
   * @public
   * <p>Token from a previous call of the operation. When this value is provided, the
   *             service returns results from where the previous response left off.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags used to categorize and track resources.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of tags used to categorize and track resources.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the tagged resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The keys used to identify the tags.</p>
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
