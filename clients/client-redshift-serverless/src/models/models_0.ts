// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RedshiftServerlessServiceException as __BaseException } from "./RedshiftServerlessServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 * <p>An array of key-value pairs to set for advanced control over Amazon Redshift Serverless.</p>
 */
export interface ConfigParameter {
  /**
   * @public
   * <p>The key of the parameter. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let
   *          you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  parameterKey?: string;

  /**
   * @public
   * <p>The value of the parameter to set.</p>
   */
  parameterValue?: string;
}

/**
 * @public
 * <p>The submitted action has conflicts.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>A map of key-value pairs.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key to use in the tag.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotRequest {
  /**
   * @public
   * <p>The unique identifier of the recovery point.</p>
   */
  recoveryPointId: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>How long to retain the snapshot.</p>
   */
  retentionPeriod?: number;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a>
   *          to associate with the created snapshot.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * @enum
 */
export const SnapshotStatus = {
  AVAILABLE: "AVAILABLE",
  CANCELLED: "CANCELLED",
  COPYING: "COPYING",
  CREATING: "CREATING",
  DELETED: "DELETED",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type SnapshotStatus = (typeof SnapshotStatus)[keyof typeof SnapshotStatus];

/**
 * @public
 * <p>A snapshot object that contains databases.</p>
 */
export interface Snapshot {
  /**
   * @public
   * <p>The name of the namepsace.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the namespace the snapshot was created from.</p>
   */
  namespaceArn?: string;

  /**
   * @public
   * <p>The name of the snapshot.</p>
   */
  snapshotName?: string;

  /**
   * @public
   * <p>The timestamp of when the snapshot was created.</p>
   */
  snapshotCreateTime?: Date;

  /**
   * @public
   * <p>The username of the database within a snapshot.</p>
   */
  adminUsername?: string;

  /**
   * @public
   * <p>The status of the snapshot.</p>
   */
  status?: SnapshotStatus;

  /**
   * @public
   * <p>The unique identifier of the KMS key used to encrypt the snapshot.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The owner Amazon Web Services; account of the snapshot.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The total size, in megabytes, of how big the snapshot is.</p>
   */
  totalBackupSizeInMegaBytes?: number;

  /**
   * @public
   * <p>The size of the incremental backup in megabytes.</p>
   */
  actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * @public
   * <p>The size in megabytes of the data that has been backed up to a snapshot.</p>
   */
  backupProgressInMegaBytes?: number;

  /**
   * @public
   * <p>The rate at which data is backed up into a snapshot in megabytes per second.</p>
   */
  currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * @public
   * <p>The estimated amount of seconds until the snapshot completes backup.</p>
   */
  estimatedSecondsToCompletion?: number;

  /**
   * @public
   * <p>The amount of time it took to back up data into a snapshot.</p>
   */
  elapsedTimeInSeconds?: number;

  /**
   * @public
   * <p>The period of time, in days, of how long the snapshot is retained.</p>
   */
  snapshotRetentionPeriod?: number;

  /**
   * @public
   * <p>The amount of days until the snapshot is deleted.</p>
   */
  snapshotRemainingDays?: number;

  /**
   * @public
   * <p>The timestamp of when data within the snapshot started getting retained.</p>
   */
  snapshotRetentionStartTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the snapshot.</p>
   */
  snapshotArn?: string;

  /**
   * @public
   * <p>All of the Amazon Web Services accounts that have access to
   *          restore a snapshot to a namespace.</p>
   */
  accountsWithRestoreAccess?: string[];

  /**
   * @public
   * <p>All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.</p>
   */
  accountsWithProvisionedRestoreAccess?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</p>
   */
  adminPasswordSecretArn?: string;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotResponse {
  /**
   * @public
   * <p>The snapshot converted from the recovery point.</p>
   */
  snapshot?: Snapshot;
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
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource that could not be found.</p>
   */
  resourceName?: string;

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
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * <p>The service limit was exceeded.</p>
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
 * <p>The request exceeded the number of tags allowed for a resource.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The name of the resource that exceeded the number of tags allowed for a resource.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * <p>The input failed to satisfy the constraints specified by an AWS service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the VPC endpoint. An endpoint name must contain 1-30 characters.
   *          Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter.
   *          The name can't contain two consecutive hyphens or end with a hyphen.</p>
   */
  endpointName: string | undefined;

  /**
   * @public
   * <p>The unique identifers of subnets from which
   *          Amazon Redshift Serverless chooses one to deploy a VPC endpoint.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * @public
   * <p>The name of the workgroup to associate with the VPC endpoint.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The unique identifiers of the security group that defines the ports,
   *          protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  vpcSecurityGroupIds?: string[];
}

/**
 * @public
 * <p>Contains information about a network interface
 *          in an Amazon Redshift Serverless managed VPC endpoint.
 *       </p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The unique identifier of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * @public
   * <p>The unique identifier of the subnet.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * @public
   * <p>The availability Zone.</p>
   */
  availabilityZone?: string;
}

/**
 * @public
 * <p>The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * @public
   * <p>The connection endpoint ID for connecting to Amazon Redshift Serverless.</p>
   */
  vpcEndpointId?: string;

  /**
   * @public
   * <p>The VPC identifier that the endpoint is associated with.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint.</p>
   */
  networkInterfaces?: NetworkInterface[];
}

/**
 * @public
 * <p>Describes the members of a VPC security group.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * @public
   * <p>The unique identifier of the VPC security group.</p>
   */
  vpcSecurityGroupId?: string;

  /**
   * @public
   * <p>The status of the VPC security group.</p>
   */
  status?: string;
}

/**
 * @public
 * <p>Information about an Amazon Redshift Serverless VPC endpoint.</p>
 */
export interface EndpointAccess {
  /**
   * @public
   * <p>The name of the VPC endpoint.</p>
   */
  endpointName?: string;

  /**
   * @public
   * <p>The status of the VPC endpoint.</p>
   */
  endpointStatus?: string;

  /**
   * @public
   * <p>The name of the workgroup associated with the endpoint.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The time that the endpoint was created.</p>
   */
  endpointCreateTime?: Date;

  /**
   * @public
   * <p>The port number on which Amazon Redshift Serverless accepts incoming connections.</p>
   */
  port?: number;

  /**
   * @public
   * <p>The DNS address of the endpoint.</p>
   */
  address?: string;

  /**
   * @public
   * <p>The unique identifier of subnets
   *          where Amazon Redshift Serverless choose to deploy the VPC endpoint.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The security groups associated with the endpoint.</p>
   */
  vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * @public
   * <p>The connection endpoint for connecting to Amazon Redshift Serverless.</p>
   */
  vpcEndpoint?: VpcEndpoint;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint.</p>
   */
  endpointArn?: string;
}

/**
 * @public
 */
export interface CreateEndpointAccessResponse {
  /**
   * @public
   * <p>The created VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 * @enum
 */
export const LogExport = {
  CONNECTION_LOG: "connectionlog",
  USER_ACTIVITY_LOG: "useractivitylog",
  USER_LOG: "userlog",
} as const;

/**
 * @public
 */
export type LogExport = (typeof LogExport)[keyof typeof LogExport];

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * @public
   * <p>The name of the namespace.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The username of the administrator for the first database created in the namespace.</p>
   */
  adminUsername?: string;

  /**
   * @public
   * <p>The password of the administrator for the first database created in the namespace.</p>
   *          <p>You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true. </p>
   */
  adminUserPassword?: string;

  /**
   * @public
   * <p>The name of the first database created in the namespace.</p>
   */
  dbName?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * @public
   * <p>A list of IAM roles to associate with the namespace.</p>
   */
  iamRoles?: string[];

  /**
   * @public
   * <p>The types of logs the namespace can export.
   *          Available export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   */
  logExports?: LogExport[];

  /**
   * @public
   * <p>A list of tag instances.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials.
   *          You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true.
   *          If <code>manageAdminPassword</code> is false or not set, Amazon Redshift uses
   *          <code>adminUserPassword</code> for the admin user account's password.
   *       </p>
   */
  manageAdminPassword?: boolean;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *          You can only use this parameter if <code>manageAdminPassword</code> is true.</p>
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const NamespaceStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
} as const;

/**
 * @public
 */
export type NamespaceStatus = (typeof NamespaceStatus)[keyof typeof NamespaceStatus];

/**
 * @public
 * <p>A collection of database objects and users.</p>
 */
export interface Namespace {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with a namespace.</p>
   */
  namespaceArn?: string;

  /**
   * @public
   * <p>The unique identifier of a namespace.</p>
   */
  namespaceId?: string;

  /**
   * @public
   * <p>The name of the namespace.
   *       Must be between 3-64 alphanumeric characters in lowercase,
   *       and it cannot be a reserved word. A list of reserved words can be found
   *       in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The username of the administrator for the first database created in the namespace.</p>
   */
  adminUsername?: string;

  /**
   * @public
   * <p>The name of the first database created in the namespace.</p>
   */
  dbName?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * @public
   * <p>A list of IAM roles to associate with the namespace.</p>
   */
  iamRoles?: string[];

  /**
   * @public
   * <p>The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.</p>
   */
  logExports?: LogExport[];

  /**
   * @public
   * <p>The status of the namespace.</p>
   */
  status?: NamespaceStatus;

  /**
   * @public
   * <p>The date of when the namespace was created.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</p>
   */
  adminPasswordSecretArn?: string;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * @public
   * <p>The created namespace object.</p>
   */
  namespace?: Namespace;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * @public
   * <p>The namespace to create a snapshot for.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>How long to retain the created snapshot.</p>
   */
  retentionPeriod?: number;

  /**
   * @public
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a> to associate with the snapshot.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * @public
   * <p>The created snapshot object.</p>
   */
  snapshot?: Snapshot;
}

/**
 * @public
 * @enum
 */
export const UsageLimitBreachAction = {
  DEACTIVATE: "deactivate",
  EMIT_METRIC: "emit-metric",
  LOG: "log",
} as const;

/**
 * @public
 */
export type UsageLimitBreachAction = (typeof UsageLimitBreachAction)[keyof typeof UsageLimitBreachAction];

/**
 * @public
 * @enum
 */
export const UsageLimitPeriod = {
  DAILY: "daily",
  MONTHLY: "monthly",
  WEEKLY: "weekly",
} as const;

/**
 * @public
 */
export type UsageLimitPeriod = (typeof UsageLimitPeriod)[keyof typeof UsageLimitPeriod];

/**
 * @public
 * @enum
 */
export const UsageLimitUsageType = {
  CROSS_REGION_DATASHARING: "cross-region-datasharing",
  SERVERLESS_COMPUTE: "serverless-compute",
} as const;

/**
 * @public
 */
export type UsageLimitUsageType = (typeof UsageLimitUsageType)[keyof typeof UsageLimitUsageType];

/**
 * @public
 */
export interface CreateUsageLimitRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The type of Amazon Redshift Serverless usage to create a usage limit for.</p>
   */
  usageType: UsageLimitUsageType | undefined;

  /**
   * @public
   * <p>The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data
   *          transferred between Regions in cross-account sharing. The value must be a positive number.</p>
   */
  amount: number | undefined;

  /**
   * @public
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   */
  period?: UsageLimitPeriod;

  /**
   * @public
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached. The default is log.</p>
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * @public
 * <p>The usage limit object.</p>
 */
export interface UsageLimit {
  /**
   * @public
   * <p>The identifier of the usage limit.</p>
   */
  usageLimitId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource associated with the usage limit.</p>
   */
  usageLimitArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The Amazon Redshift Serverless feature to limit.</p>
   */
  usageType?: UsageLimitUsageType;

  /**
   * @public
   * <p>The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.</p>
   */
  amount?: number;

  /**
   * @public
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   */
  period?: UsageLimitPeriod;

  /**
   * @public
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached.</p>
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * @public
 */
export interface CreateUsageLimitResponse {
  /**
   * @public
   * <p>The returned usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface CreateWorkgroupRequest {
  /**
   * @public
   * <p>The name of the created workgroup.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The name of the namespace to associate with the workgroup.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * @public
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * @public
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * @public
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>A value that specifies whether the workgroup can be accessed from a public network.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>A array of tag instances.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

/**
 * @public
 * <p>The VPC endpoint object.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The DNS address of the VPC endpoint.</p>
   */
  address?: string;

  /**
   * @public
   * <p>The port that Amazon Redshift Serverless listens on.</p>
   */
  port?: number;

  /**
   * @public
   * <p>An array of <code>VpcEndpoint</code> objects.</p>
   */
  vpcEndpoints?: VpcEndpoint[];
}

/**
 * @public
 * @enum
 */
export const WorkgroupStatus = {
  AVAILABLE: "AVAILABLE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  MODIFYING: "MODIFYING",
} as const;

/**
 * @public
 */
export type WorkgroupStatus = (typeof WorkgroupStatus)[keyof typeof WorkgroupStatus];

/**
 * @public
 * <p>The collection of computing resources from which an endpoint is created.</p>
 */
export interface Workgroup {
  /**
   * @public
   * <p>The unique identifier of the workgroup.</p>
   */
  workgroupId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that links to the workgroup.</p>
   */
  workgroupArn?: string;

  /**
   * @public
   * <p>The name of the workgroup.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The namespace the workgroup is associated with.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * @public
   * <p>The value that specifies whether to enable enhanced virtual
   *       private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * @public
   * <p>An array of parameters to set for advanced control over a database. The
   *         options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *         <code>query_group</code>, , <code>search_path</code>, and query monitoring metrics that let you define performance boundaries.
   *         For more information about query monitoring rules and available metrics, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless"> Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * @public
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>An array of subnet IDs the workgroup is associated with.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>The status of the workgroup.</p>
   */
  status?: WorkgroupStatus;

  /**
   * @public
   * <p>The endpoint that is created from the workgroup.</p>
   */
  endpoint?: Endpoint;

  /**
   * @public
   * <p>A value that specifies whether the workgroup
   *       can be accessible from a public network</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>The creation date of the workgroup.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

/**
 * @public
 */
export interface CreateWorkgroupResponse {
  /**
   * @public
   * <p>The created workgroup object.</p>
   */
  workgroup?: Workgroup;
}

/**
 * @public
 * <p>There is an insufficient capacity to perform the action.</p>
 */
export class InsufficientCapacityException extends __BaseException {
  readonly name: "InsufficientCapacityException" = "InsufficientCapacityException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientCapacityException, __BaseException>) {
    super({
      name: "InsufficientCapacityException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientCapacityException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the VPC endpoint to delete.</p>
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessResponse {
  /**
   * @public
   * <p>The deleted VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface GetEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the VPC endpoint to return information for.</p>
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointAccessResponse {
  /**
   * @public
   * <p>The returned VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface ListEndpointAccessRequest {
  /**
   * @public
   * <p>If your initial <code>ListEndpointAccess</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListEndpointAccess</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The name of the workgroup associated with the VPC endpoint to return.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The unique identifier of the virtual private cloud with access to Amazon Redshift Serverless.</p>
   */
  vpcId?: string;
}

/**
 * @public
 */
export interface ListEndpointAccessResponse {
  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The returned VPC endpoints.</p>
   */
  endpoints: EndpointAccess[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointAccessRequest {
  /**
   * @public
   * <p>The name of the VPC endpoint to update.</p>
   */
  endpointName: string | undefined;

  /**
   * @public
   * <p>The list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   */
  vpcSecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface UpdateEndpointAccessResponse {
  /**
   * @public
   * <p>The updated VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * @public
   * <p>The name of the namespace to delete.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot to be created before the namespace is deleted.</p>
   */
  finalSnapshotName?: string;

  /**
   * @public
   * <p>How long to retain the final snapshot.</p>
   */
  finalSnapshotRetentionPeriod?: number;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * @public
   * <p>The deleted namespace object.</p>
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy to delete.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * @public
   * <p>The name of the snapshot to be deleted.</p>
   */
  snapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * @public
   * <p>The deleted snapshot object.</p>
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface DeleteUsageLimitRequest {
  /**
   * @public
   * <p>The unique identifier of the usage limit to delete.</p>
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitResponse {
  /**
   * @public
   * <p>The deleted usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface DeleteWorkgroupRequest {
  /**
   * @public
   * <p>The name of the workgroup to be deleted.</p>
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkgroupResponse {
  /**
   * @public
   * <p>The deleted workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

/**
 * @public
 */
export interface GetCredentialsRequest {
  /**
   * @public
   * <p>The name of the workgroup associated with the database.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The name of the database to get temporary authorization to log on to.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 64 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Must contain only uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Must not contain a colon ( : ) or slash ( / ).</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word. A list of reserved words can be found
   *                in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words </a>
   *                in the Amazon Redshift Database Developer Guide</p>
   *             </li>
   *          </ul>
   */
  dbName?: string;

  /**
   * @public
   * <p>The number of seconds until the returned temporary password expires.
   *          The minimum is 900 seconds, and the maximum is 3600 seconds.</p>
   */
  durationSeconds?: number;
}

/**
 * @public
 */
export interface GetCredentialsResponse {
  /**
   * @public
   * <p>A database user name that is authorized to log on to the database <code>DbName</code>
   *          using the password <code>DbPassword</code>. If the specified <code>DbUser</code> exists in the database,
   *          the new user name has the same database privileges as the the user named in
   *          <code>DbUser</code>. By default, the user is added to PUBLIC.</p>
   */
  dbUser?: string;

  /**
   * @public
   * <p>A temporary password that authorizes the user name returned by
   *          <code>DbUser</code> to log on to the database <code>DbName</code>.</p>
   */
  dbPassword?: string;

  /**
   * @public
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   */
  expiration?: Date;

  /**
   * @public
   * <p>The date and time of when the <code>DbUser</code> and <code>DbPassword</code>
   *          authorization refreshes.</p>
   */
  nextRefreshTime?: Date;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * @public
   * <p>The name of the namespace to retrieve information for.</p>
   */
  namespaceName: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * @public
   * <p>The returned namespace object.</p>
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRequest {
  /**
   * @public
   * <p>The unique identifier of the recovery point to return information for.</p>
   */
  recoveryPointId: string | undefined;
}

/**
 * @public
 * <p>The automatically created recovery point of a namespace.
 *          Recovery points are created every 30 minutes and kept for 24 hours.</p>
 */
export interface RecoveryPoint {
  /**
   * @public
   * <p>The unique identifier of the recovery point.</p>
   */
  recoveryPointId?: string;

  /**
   * @public
   * <p>The time the recovery point is created.</p>
   */
  recoveryPointCreateTime?: Date;

  /**
   * @public
   * <p>The total size of the data in the recovery point in megabytes.</p>
   */
  totalSizeInMegaBytes?: number;

  /**
   * @public
   * <p>The name of the namespace the recovery point is associated with.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The name of the workgroup the recovery point is associated with.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.</p>
   */
  namespaceArn?: string;
}

/**
 * @public
 */
export interface GetRecoveryPointResponse {
  /**
   * @public
   * <p>The returned recovery point object.</p>
   */
  recoveryPoint?: RecoveryPoint;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to return.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p>The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts.</p>
 */
export interface ResourcePolicy {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The resource policy.</p>
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>The returned resource policy.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

/**
 * @public
 */
export interface GetSnapshotRequest {
  /**
   * @public
   * <p>The name of the snapshot to return.</p>
   */
  snapshotName?: string;

  /**
   * @public
   * <p>The owner Amazon Web Services account of a snapshot shared with another user.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the snapshot to return.</p>
   */
  snapshotArn?: string;
}

/**
 * @public
 */
export interface GetSnapshotResponse {
  /**
   * @public
   * <p>The returned snapshot object.</p>
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface GetTableRestoreStatusRequest {
  /**
   * @public
   * <p>The ID of the <code>RestoreTableFromSnapshot</code> request to return status for.</p>
   */
  tableRestoreRequestId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a table restore request.</p>
 */
export interface TableRestoreStatus {
  /**
   * @public
   * <p>The ID of the RestoreTableFromSnapshot request.</p>
   */
  tableRestoreRequestId?: string;

  /**
   * @public
   * <p>A value that describes the current state of the table restore request.
   *          Possible values include <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>, <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  status?: string;

  /**
   * @public
   * <p>A description of the status of the table restore request.
   *          Status values include <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>, <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  message?: string;

  /**
   * @public
   * <p>The time that the table restore request was made,
   *          in Universal Coordinated Time (UTC).</p>
   */
  requestTime?: Date;

  /**
   * @public
   * <p>The namespace of the table being restored from.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The name of the workgroup being restored from.</p>
   */
  workgroupName?: string;

  /**
   * @public
   * <p>The name of the snapshot being restored from.</p>
   */
  snapshotName?: string;

  /**
   * @public
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   */
  progressInMegaBytes?: number;

  /**
   * @public
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   */
  totalDataInMegaBytes?: number;

  /**
   * @public
   * <p>The name of the source database being restored from.</p>
   */
  sourceDatabaseName?: string;

  /**
   * @public
   * <p>The name of the source schema being restored from.</p>
   */
  sourceSchemaName?: string;

  /**
   * @public
   * <p>The name of the source table being restored from.</p>
   */
  sourceTableName?: string;

  /**
   * @public
   * <p>The name of the database to restore to.</p>
   */
  targetDatabaseName?: string;

  /**
   * @public
   * <p>The name of the schema to restore to.</p>
   */
  targetSchemaName?: string;

  /**
   * @public
   * <p>The name of the table to create from the restore operation.</p>
   */
  newTableName?: string;
}

/**
 * @public
 */
export interface GetTableRestoreStatusResponse {
  /**
   * @public
   * <p>The returned <code>TableRestoreStatus</code> object that contains information about
   *          the status of your <code>RestoreTableFromSnapshot</code> request.</p>
   */
  tableRestoreStatus?: TableRestoreStatus;
}

/**
 * @public
 */
export interface GetUsageLimitRequest {
  /**
   * @public
   * <p>The unique identifier of the usage limit to return information for.</p>
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface GetUsageLimitResponse {
  /**
   * @public
   * <p>The returned usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface GetWorkgroupRequest {
  /**
   * @public
   * <p>The name of the workgroup to return information for.</p>
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkgroupResponse {
  /**
   * @public
   * <p>The returned workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

/**
 * @public
 * <p>The provided pagination token is invalid.</p>
 */
export class InvalidPaginationException extends __BaseException {
  readonly name: "InvalidPaginationException" = "InvalidPaginationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationException, __BaseException>) {
    super({
      name: "InvalidPaginationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationException.prototype);
  }
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * @public
   * <p>If your initial <code>ListNamespaces</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListNamespaces</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of returned namespaces.</p>
   */
  namespaces: Namespace[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsRequest {
  /**
   * @public
   * <p>If your initial <code>ListRecoveryPoints</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListRecoveryPoints</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The time when the recovery point's creation was initiated.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The time when creation of the recovery point finished.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The name of the namespace to list recovery points for.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list recovery points.</p>
   */
  namespaceArn?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsResponse {
  /**
   * @public
   * <p>The returned recovery point objects.</p>
   */
  recoveryPoints?: RecoveryPoint[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSnapshotsRequest {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The namespace from which to list all snapshots.</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list all snapshots.</p>
   */
  namespaceArn?: string;

  /**
   * @public
   * <p>The owner Amazon Web Services account of the snapshot.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>The time when the creation of the snapshot was initiated.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The timestamp showing when the snapshot creation finished.</p>
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListSnapshotsResponse {
  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>All of the returned snapshot objects.</p>
   */
  snapshots?: Snapshot[];
}

/**
 * @public
 */
export interface ListTableRestoreStatusRequest {
  /**
   * @public
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a nextToken,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will return results on the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to
   *          return. You can use nextToken to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The namespace from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations .</p>
   */
  namespaceName?: string;

  /**
   * @public
   * <p>The workgroup from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations.</p>
   */
  workgroupName?: string;
}

/**
 * @public
 */
export interface ListTableRestoreStatusResponse {
  /**
   * @public
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will returns results on the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The array of returned <code>TableRestoreStatus</code> objects.</p>
   */
  tableRestoreStatuses?: TableRestoreStatus[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A map of the key-value pairs assigned to the resource.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  code?: string;
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
    this.code = opts.code;
  }
}

/**
 * @public
 */
export interface ListUsageLimitsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the resource whose usage limits you want to list.</p>
   */
  resourceArn?: string;

  /**
   * @public
   * <p>The Amazon Redshift Serverless feature whose limits you want to see.</p>
   */
  usageType?: UsageLimitUsageType;

  /**
   * @public
   * <p>If your initial <code>ListUsageLimits</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListUsageLimits</code> operations,
   *          which returns results in the next page.
   *       </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to get the next page of results. The default is 100.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListUsageLimitsResponse {
  /**
   * @public
   * <p>An array of returned usage limit objects.</p>
   */
  usageLimits?: UsageLimit[];

  /**
   * @public
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkgroupsRequest {
  /**
   * @public
   * <p>If your initial ListWorkgroups operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following ListNamespaces operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListWorkgroupsResponse {
  /**
   * @public
   * <p>
   *          If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          To retrieve the next page, make the call again using the returned token.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The returned array of workgroups.</p>
   */
  workgroups: Workgroup[] | undefined;
}

/**
 * @public
 */
export interface UpdateNamespaceRequest {
  /**
   * @public
   * <p>The name of the namespace to update. You can't update the name of a namespace once it is created.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The password of the administrator for the first database created in the namespace. This parameter must be updated together
   *       with <code>adminUsername</code>.</p>
   *          <p>You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true. </p>
   */
  adminUserPassword?: string;

  /**
   * @public
   * <p>The username of the administrator for the first database created in the namespace. This parameter must be updated
   *       together with <code>adminUserPassword</code>.</p>
   */
  adminUsername?: string;

  /**
   * @public
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. This parameter must be updated together
   *       with <code>iamRoles</code>.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * @public
   * <p>A list of IAM roles to associate with the namespace. This parameter must be updated together with <code>defaultIamRoleArn</code>.</p>
   */
  iamRoles?: string[];

  /**
   * @public
   * <p>The types of logs the namespace can export. The export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   */
  logExports?: LogExport[];

  /**
   * @public
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials.
   *          You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true.
   *          If <code>manageAdminPassword</code> is false or not set, Amazon Redshift uses
   *          <code>adminUserPassword</code> for the admin user account's password.
   *       </p>
   */
  manageAdminPassword?: boolean;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *          You can only use this parameter if <code>manageAdminPassword</code> is true.</p>
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface UpdateNamespaceResponse {
  /**
   * @public
   * <p>A list of tag instances.</p>
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the account to create or update a resource policy for.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.</p>
   *          <p>
   *             <code>"\{\"Version\": \"2012-10-17\", \"Statement\" :
   *             [\{ \"Sid\": \"AllowUserRestoreFromSnapshot\", \"Principal\":\{\"AWS\":
   *             [\"739247239426\"]\}, \"Action\": [\"redshift-serverless:RestoreFromSnapshot\"]
   *             , \"Effect\": \"Allow\" \}]\}"</code>
   *          </p>
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * @public
   * <p>The policy that was created or updated.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointRequest {
  /**
   * @public
   * <p>The unique identifier of the recovery point to restore from.</p>
   */
  recoveryPointId: string | undefined;

  /**
   * @public
   * <p>The name of the namespace to restore data into.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The name of the workgroup used to restore data.</p>
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointResponse {
  /**
   * @public
   * <p>The unique identifier of the recovery point used for the restore.</p>
   */
  recoveryPointId?: string;

  /**
   * @public
   * <p>The namespace that data was restored into.</p>
   */
  namespace?: Namespace;
}

/**
 * @public
 */
export interface RestoreFromSnapshotRequest {
  /**
   * @public
   * <p>The name of the namespace to restore the snapshot to.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The name of the workgroup used to restore the snapshot.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot to restore from. Must not be specified at the same time as <code>snapshotArn</code>.</p>
   */
  snapshotName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the snapshot to restore from. Required if restoring from Amazon Redshift Serverless to a provisioned cluster.
   *       Must not be specified at the same time as <code>snapshotName</code>.</p>
   *          <p>The format of the ARN is arn:aws:redshift:&lt;region&gt;:&lt;account_id&gt;:snapshot:&lt;cluster_identifier&gt;/&lt;snapshot_identifier&gt;.</p>
   */
  snapshotArn?: string;

  /**
   * @public
   * <p>The Amazon Web Services account that owns the snapshot.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the restored
   *          snapshot's admin credentials. If <code>MmanageAdminPassword</code> is false or not set,
   *          Amazon Redshift uses the admin credentials that the namespace or cluster
   *          had at the time the snapshot was taken.</p>
   */
  manageAdminPassword?: boolean;

  /**
   * @public
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface RestoreFromSnapshotResponse {
  /**
   * @public
   * <p>The name of the snapshot used to restore the namespace.</p>
   */
  snapshotName?: string;

  /**
   * @public
   * <p>The owner Amazon Web Services; account of the snapshot that was restored.</p>
   */
  ownerAccount?: string;

  /**
   * @public
   * <p>A collection of database objects and users.</p>
   */
  namespace?: Namespace;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotRequest {
  /**
   * @public
   * <p>The namespace of the snapshot to restore from.</p>
   */
  namespaceName: string | undefined;

  /**
   * @public
   * <p>The workgroup to restore the table to.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The name of the snapshot to restore the table from.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>The name of the source database that contains the table being restored.</p>
   */
  sourceDatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the source schema that contains the table being restored.</p>
   */
  sourceSchemaName?: string;

  /**
   * @public
   * <p>The name of the source table being restored.</p>
   */
  sourceTableName: string | undefined;

  /**
   * @public
   * <p>The name of the database to restore the table to.</p>
   */
  targetDatabaseName?: string;

  /**
   * @public
   * <p>The name of the schema to restore the table to.</p>
   */
  targetSchemaName?: string;

  /**
   * @public
   * <p>The name of the table to create from the restore operation.</p>
   */
  newTableName: string | undefined;

  /**
   * @public
   * <p>Indicates whether name identifiers for database, schema, and table
   *          are case sensitive. If true, the names are case sensitive. If
   *          false, the names are not case sensitive. The default is false.</p>
   */
  activateCaseSensitiveIdentifier?: boolean;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotResponse {
  /**
   * @public
   * <p>The TableRestoreStatus object that contains the status of the restore operation.</p>
   */
  tableRestoreStatus?: TableRestoreStatus;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * @public
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * @public
   * <p>The new retention period of the snapshot.</p>
   */
  retentionPeriod?: number;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * @public
   * <p>The updated snapshot object.</p>
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The map of the key-value pairs used to tag the resource.</p>
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag or set of tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateUsageLimitRequest {
  /**
   * @public
   * <p>The identifier of the usage limit to update.</p>
   */
  usageLimitId: string | undefined;

  /**
   * @public
   * <p>The new limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour.
   *          If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing.
   *          The value must be a positive number.</p>
   */
  amount?: number;

  /**
   * @public
   * <p>The new action that Amazon Redshift Serverless takes when the limit is reached.</p>
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * @public
 */
export interface UpdateUsageLimitResponse {
  /**
   * @public
   * <p>The updated usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface UpdateWorkgroupRequest {
  /**
   * @public
   * <p>The name of the workgroup to update. You can't update the name of a workgroup once it is created.</p>
   */
  workgroupName: string | undefined;

  /**
   * @public
   * <p>The new base data warehouse capacity in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * @public
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * @public
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let you
   *          define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * @public
   * <p>A value that specifies whether the workgroup can be accessible from a public network.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * @public
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   */
  subnetIds?: string[];

  /**
   * @public
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * @public
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

/**
 * @public
 */
export interface UpdateWorkgroupResponse {
  /**
   * @public
   * <p>The updated workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

/**
 * @internal
 */
export const CreateNamespaceRequestFilterSensitiveLog = (obj: CreateNamespaceRequest): any => ({
  ...obj,
  ...(obj.adminUsername && { adminUsername: SENSITIVE_STRING }),
  ...(obj.adminUserPassword && { adminUserPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const NamespaceFilterSensitiveLog = (obj: Namespace): any => ({
  ...obj,
  ...(obj.adminUsername && { adminUsername: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateNamespaceResponseFilterSensitiveLog = (obj: CreateNamespaceResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const DeleteNamespaceResponseFilterSensitiveLog = (obj: DeleteNamespaceResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const GetCredentialsResponseFilterSensitiveLog = (obj: GetCredentialsResponse): any => ({
  ...obj,
  ...(obj.dbUser && { dbUser: SENSITIVE_STRING }),
  ...(obj.dbPassword && { dbPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetNamespaceResponseFilterSensitiveLog = (obj: GetNamespaceResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const ListNamespacesResponseFilterSensitiveLog = (obj: ListNamespacesResponse): any => ({
  ...obj,
  ...(obj.namespaces && { namespaces: obj.namespaces.map((item) => NamespaceFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateNamespaceRequestFilterSensitiveLog = (obj: UpdateNamespaceRequest): any => ({
  ...obj,
  ...(obj.adminUserPassword && { adminUserPassword: SENSITIVE_STRING }),
  ...(obj.adminUsername && { adminUsername: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateNamespaceResponseFilterSensitiveLog = (obj: UpdateNamespaceResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const RestoreFromRecoveryPointResponseFilterSensitiveLog = (obj: RestoreFromRecoveryPointResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const RestoreFromSnapshotResponseFilterSensitiveLog = (obj: RestoreFromSnapshotResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});
