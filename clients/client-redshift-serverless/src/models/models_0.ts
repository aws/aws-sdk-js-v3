// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { RedshiftServerlessServiceException as __BaseException } from "./RedshiftServerlessServiceException";

/**
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
 * <p>An array of key-value pairs to set for advanced control over Amazon Redshift Serverless.</p>
 */
export interface ConfigParameter {
  /**
   * <p>The key of the parameter. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let
   *          you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  parameterKey?: string;

  /**
   * <p>The value of the parameter to set.</p>
   */
  parameterValue?: string;
}

/**
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
 * <p>A map of key-value pairs.</p>
 */
export interface Tag {
  /**
   * <p>The key to use in the tag.</p>
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  value: string | undefined;
}

export interface ConvertRecoveryPointToSnapshotRequest {
  /**
   * <p>The unique identifier of the recovery point.</p>
   */
  recoveryPointId: string | undefined;

  /**
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>How long to retain the snapshot.</p>
   */
  retentionPeriod?: number;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a>
   *          to associate with the created snapshot.</p>
   */
  tags?: Tag[];
}

export enum SnapshotStatus {
  AVAILABLE = "AVAILABLE",
  CANCELLED = "CANCELLED",
  COPYING = "COPYING",
  CREATING = "CREATING",
  DELETED = "DELETED",
  FAILED = "FAILED",
}

/**
 * <p>A snapshot object that contains databases.</p>
 */
export interface Snapshot {
  /**
   * <p>The name of the namepsace.</p>
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace the snapshot was created from.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The name of the snapshot.</p>
   */
  snapshotName?: string;

  /**
   * <p>The timestamp of when the snapshot was created.</p>
   */
  snapshotCreateTime?: Date;

  /**
   * <p>The username of the database within a snapshot.</p>
   */
  adminUsername?: string;

  /**
   * <p>The status of the snapshot.</p>
   */
  status?: SnapshotStatus | string;

  /**
   * <p>The unique identifier of the KMS key used to encrypt the snapshot.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The owner Amazon Web Services; account of the snapshot.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The total size, in megabytes, of how big the snapshot is.</p>
   */
  totalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size of the incremental backup in megabytes.</p>
   */
  actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size in megabytes of the data that has been backed up to a snapshot.</p>
   */
  backupProgressInMegaBytes?: number;

  /**
   * <p>The rate at which data is backed up into a snapshot in megabytes per second.</p>
   */
  currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimated amount of seconds until the snapshot completes backup.</p>
   */
  estimatedSecondsToCompletion?: number;

  /**
   * <p>The amount of time it took to back up data into a snapshot.</p>
   */
  elapsedTimeInSeconds?: number;

  /**
   * <p>The period of time, in days, of how long the snapshot is retained.</p>
   */
  snapshotRetentionPeriod?: number;

  /**
   * <p>The amount of days until the snapshot is deleted.</p>
   */
  snapshotRemainingDays?: number;

  /**
   * <p>The timestamp of when data within the snapshot started getting retained.</p>
   */
  snapshotRetentionStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot.</p>
   */
  snapshotArn?: string;

  /**
   * <p>All of the Amazon Web Services accounts that have access to
   *          restore a snapshot to a namespace.</p>
   */
  accountsWithRestoreAccess?: string[];

  /**
   * <p>All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.</p>
   */
  accountsWithProvisionedRestoreAccess?: string[];
}

export interface ConvertRecoveryPointToSnapshotResponse {
  /**
   * <p>The snapshot converted from the recovery point.</p>
   */
  snapshot?: Snapshot;
}

/**
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
 * <p>The resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
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
 * <p>The request exceeded the number of tags allowed for a resource.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
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

export interface CreateEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint. An endpoint name must contain 1-30 characters.
   *          Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter.
   *          The name can't contain two consecutive hyphens or end with a hyphen.</p>
   */
  endpointName: string | undefined;

  /**
   * <p>The unique identifers of subnets from which
   *          Amazon Redshift Serverless chooses one to deploy a VPC endpoint.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The name of the workgroup to associate with the VPC endpoint.</p>
   */
  workgroupName: string | undefined;

  /**
   * <p>The unique identifiers of the security group that defines the ports,
   *          protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   */
  vpcSecurityGroupIds?: string[];
}

/**
 * <p>Contains information about a network interface
 *          in an Amazon Redshift Serverless managed VPC endpoint.
 *       </p>
 */
export interface NetworkInterface {
  /**
   * <p>The unique identifier of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The unique identifier of the subnet.</p>
   */
  subnetId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The availability Zone.</p>
   */
  availabilityZone?: string;
}

/**
 * <p>The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.</p>
 */
export interface VpcEndpoint {
  /**
   * <p>The connection endpoint ID for connecting to Amazon Redshift Serverless.</p>
   */
  vpcEndpointId?: string;

  /**
   * <p>The VPC identifier that the endpoint is associated with.</p>
   */
  vpcId?: string;

  /**
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint.</p>
   */
  networkInterfaces?: NetworkInterface[];
}

/**
 * <p>Describes the members of a VPC security group.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The unique identifier of the VPC security group.</p>
   */
  vpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  status?: string;
}

/**
 * <p>Information about an Amazon Redshift Serverless VPC endpoint.</p>
 */
export interface EndpointAccess {
  /**
   * <p>The name of the VPC endpoint.</p>
   */
  endpointName?: string;

  /**
   * <p>The status of the VPC endpoint.</p>
   */
  endpointStatus?: string;

  /**
   * <p>The name of the workgroup associated with the endpoint.</p>
   */
  workgroupName?: string;

  /**
   * <p>The time that the endpoint was created.</p>
   */
  endpointCreateTime?: Date;

  /**
   * <p>The port number on which Amazon Redshift Serverless accepts incoming connections.</p>
   */
  port?: number;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  address?: string;

  /**
   * <p>The unique identifier of subnets
   *          where Amazon Redshift Serverless choose to deploy the VPC endpoint.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The security groups associated with the endpoint.</p>
   */
  vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The connection endpoint for connecting to Amazon Redshift Serverless.</p>
   */
  vpcEndpoint?: VpcEndpoint;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint.</p>
   */
  endpointArn?: string;
}

export interface CreateEndpointAccessResponse {
  /**
   * <p>The created VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

export enum LogExport {
  CONNECTION_LOG = "connectionlog",
  USER_ACTIVITY_LOG = "useractivitylog",
  USER_LOG = "userlog",
}

export interface CreateNamespaceRequest {
  /**
   * <p>The name of the namespace.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The username of the administrator for the first database created in the namespace.</p>
   */
  adminUsername?: string;

  /**
   * <p>The password of the administrator for the first database created in the namespace.</p>
   */
  adminUserPassword?: string;

  /**
   * <p>The name of the first database created in the namespace.</p>
   */
  dbName?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace.</p>
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export.
   *          Available export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   */
  logExports?: (LogExport | string)[];

  /**
   * <p>A list of tag instances.</p>
   */
  tags?: Tag[];
}

export enum NamespaceStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
  MODIFYING = "MODIFYING",
}

/**
 * <p>A collection of database objects and users.</p>
 */
export interface Namespace {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a namespace.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The unique identifier of a namespace.</p>
   */
  namespaceId?: string;

  /**
   * <p>The name of the namespace.
   *       Must be between 3-64 alphanumeric characters in lowercase,
   *       and it cannot be a reserved word. A list of reserved words can be found
   *       in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p>
   */
  namespaceName?: string;

  /**
   * <p>The username of the administrator for the first database created in the namespace.</p>
   */
  adminUsername?: string;

  /**
   * <p>The name of the first database created in the namespace.</p>
   */
  dbName?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace.</p>
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.</p>
   */
  logExports?: (LogExport | string)[];

  /**
   * <p>The status of the namespace.</p>
   */
  status?: NamespaceStatus | string;

  /**
   * <p>The date of when the namespace was created.</p>
   */
  creationDate?: Date;
}

export interface CreateNamespaceResponse {
  /**
   * <p>The created namespace object.</p>
   */
  namespace?: Namespace;
}

export interface CreateSnapshotRequest {
  /**
   * <p>The namespace to create a snapshot for.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>How long to retain the created snapshot.</p>
   */
  retentionPeriod?: number;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a> to associate with the snapshot.</p>
   */
  tags?: Tag[];
}

export interface CreateSnapshotResponse {
  /**
   * <p>The created snapshot object.</p>
   */
  snapshot?: Snapshot;
}

export enum UsageLimitBreachAction {
  DEACTIVATE = "deactivate",
  EMIT_METRIC = "emit-metric",
  LOG = "log",
}

export enum UsageLimitPeriod {
  DAILY = "daily",
  MONTHLY = "monthly",
  WEEKLY = "weekly",
}

export enum UsageLimitUsageType {
  CROSS_REGION_DATASHARING = "cross-region-datasharing",
  SERVERLESS_COMPUTE = "serverless-compute",
}

export interface CreateUsageLimitRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of Amazon Redshift Serverless usage to create a usage limit for.</p>
   */
  usageType: UsageLimitUsageType | string | undefined;

  /**
   * <p>The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data
   *          transferred between Regions in cross-account sharing. The value must be a positive number.</p>
   */
  amount: number | undefined;

  /**
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   */
  period?: UsageLimitPeriod | string;

  /**
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached. The default is log.</p>
   */
  breachAction?: UsageLimitBreachAction | string;
}

/**
 * <p>The usage limit object.</p>
 */
export interface UsageLimit {
  /**
   * <p>The identifier of the usage limit.</p>
   */
  usageLimitId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the usage limit.</p>
   */
  usageLimitArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.</p>
   */
  resourceArn?: string;

  /**
   * <p>The Amazon Redshift Serverless feature to limit.</p>
   */
  usageType?: UsageLimitUsageType | string;

  /**
   * <p>The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.</p>
   */
  amount?: number;

  /**
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   */
  period?: UsageLimitPeriod | string;

  /**
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached.</p>
   */
  breachAction?: UsageLimitBreachAction | string;
}

export interface CreateUsageLimitResponse {
  /**
   * <p>The returned usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

export interface CreateWorkgroupRequest {
  /**
   * <p>The name of the created workgroup.</p>
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the namespace to associate with the workgroup.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   */
  subnetIds?: string[];

  /**
   * <p>A value that specifies whether the workgroup can be accessed from a public network.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A array of tag instances.</p>
   */
  tags?: Tag[];

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

/**
 * <p>The VPC endpoint object.</p>
 */
export interface Endpoint {
  /**
   * <p>The DNS address of the VPC endpoint.</p>
   */
  address?: string;

  /**
   * <p>The port that Amazon Redshift Serverless listens on.</p>
   */
  port?: number;

  /**
   * <p>An array of <code>VpcEndpoint</code> objects.</p>
   */
  vpcEndpoints?: VpcEndpoint[];
}

export enum WorkgroupStatus {
  AVAILABLE = "AVAILABLE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  MODIFYING = "MODIFYING",
}

/**
 * <p>The collection of computing resources from which an endpoint is created.</p>
 */
export interface Workgroup {
  /**
   * <p>The unique identifier of the workgroup.</p>
   */
  workgroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that links to the workgroup.</p>
   */
  workgroupArn?: string;

  /**
   * <p>The name of the workgroup.</p>
   */
  workgroupName?: string;

  /**
   * <p>The namespace the workgroup is associated with.</p>
   */
  namespaceName?: string;

  /**
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to enable enhanced virtual
   *       private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *         options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *         <code>query_group</code>, , <code>search_path</code>, and query monitoring metrics that let you define performance boundaries.
   *         For more information about query monitoring rules and available metrics, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless"> Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>An array of subnet IDs the workgroup is associated with.</p>
   */
  subnetIds?: string[];

  /**
   * <p>The status of the workgroup.</p>
   */
  status?: WorkgroupStatus | string;

  /**
   * <p>The endpoint that is created from the workgroup.</p>
   */
  endpoint?: Endpoint;

  /**
   * <p>A value that specifies whether the workgroup
   *       can be accessible from a public network</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The creation date of the workgroup.</p>
   */
  creationDate?: Date;

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

export interface CreateWorkgroupResponse {
  /**
   * <p>The created workgroup object.</p>
   */
  workgroup?: Workgroup;
}

/**
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

export interface DeleteEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint to delete.</p>
   */
  endpointName: string | undefined;
}

export interface DeleteEndpointAccessResponse {
  /**
   * <p>The deleted VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

export interface GetEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint to return information for.</p>
   */
  endpointName: string | undefined;
}

export interface GetEndpointAccessResponse {
  /**
   * <p>The returned VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

export interface ListEndpointAccessRequest {
  /**
   * <p>If your initial <code>ListEndpointAccess</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListEndpointAccess</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The name of the workgroup associated with the VPC endpoint to return.</p>
   */
  workgroupName?: string;

  /**
   * <p>The unique identifier of the virtual private cloud with access to Amazon Redshift Serverless.</p>
   */
  vpcId?: string;
}

export interface ListEndpointAccessResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The returned VPC endpoints.</p>
   */
  endpoints: EndpointAccess[] | undefined;
}

export interface UpdateEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint to update.</p>
   */
  endpointName: string | undefined;

  /**
   * <p>The list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   */
  vpcSecurityGroupIds?: string[];
}

export interface UpdateEndpointAccessResponse {
  /**
   * <p>The updated VPC endpoint.</p>
   */
  endpoint?: EndpointAccess;
}

export interface DeleteNamespaceRequest {
  /**
   * <p>The name of the namespace to delete.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the snapshot to be created before the namespace is deleted.</p>
   */
  finalSnapshotName?: string;

  /**
   * <p>How long to retain the final snapshot.</p>
   */
  finalSnapshotRetentionPeriod?: number;
}

export interface DeleteNamespaceResponse {
  /**
   * <p>The deleted namespace object.</p>
   */
  namespace: Namespace | undefined;
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy to delete.</p>
   */
  resourceArn: string | undefined;
}

export interface DeleteResourcePolicyResponse {}

export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to be deleted.</p>
   */
  snapshotName: string | undefined;
}

export interface DeleteSnapshotResponse {
  /**
   * <p>The deleted snapshot object.</p>
   */
  snapshot?: Snapshot;
}

export interface DeleteUsageLimitRequest {
  /**
   * <p>The unique identifier of the usage limit to delete.</p>
   */
  usageLimitId: string | undefined;
}

export interface DeleteUsageLimitResponse {
  /**
   * <p>The deleted usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

export interface DeleteWorkgroupRequest {
  /**
   * <p>The name of the workgroup to be deleted.</p>
   */
  workgroupName: string | undefined;
}

export interface DeleteWorkgroupResponse {
  /**
   * <p>The deleted workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

export interface GetCredentialsRequest {
  /**
   * <p>The name of the workgroup associated with the database.</p>
   */
  workgroupName: string | undefined;

  /**
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
   * <p>The number of seconds until the returned temporary password expires.
   *          The minimum is 900 seconds, and the maximum is 3600 seconds.</p>
   */
  durationSeconds?: number;
}

export interface GetCredentialsResponse {
  /**
   * <p>A database user name that is authorized to log on to the database <code>DbName</code>
   *          using the password <code>DbPassword</code>. If the specified <code>DbUser</code> exists in the database,
   *          the new user name has the same database privileges as the the user named in
   *          <code>DbUser</code>. By default, the user is added to PUBLIC.</p>
   */
  dbUser?: string;

  /**
   * <p>A temporary password that authorizes the user name returned by
   *          <code>DbUser</code> to log on to the database <code>DbName</code>.</p>
   */
  dbPassword?: string;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   */
  expiration?: Date;

  /**
   * <p>The date and time of when the <code>DbUser</code> and <code>DbPassword</code>
   *          authorization refreshes.</p>
   */
  nextRefreshTime?: Date;
}

export interface GetNamespaceRequest {
  /**
   * <p>The name of the namespace to retrieve information for.</p>
   */
  namespaceName: string | undefined;
}

export interface GetNamespaceResponse {
  /**
   * <p>The returned namespace object.</p>
   */
  namespace: Namespace | undefined;
}

export interface GetRecoveryPointRequest {
  /**
   * <p>The unique identifier of the recovery point to return information for.</p>
   */
  recoveryPointId: string | undefined;
}

/**
 * <p>The automatically created recovery point of a namespace.
 *          Recovery points are created every 30 minutes and kept for 24 hours.</p>
 */
export interface RecoveryPoint {
  /**
   * <p>The unique identifier of the recovery point.</p>
   */
  recoveryPointId?: string;

  /**
   * <p>The time the recovery point is created.</p>
   */
  recoveryPointCreateTime?: Date;

  /**
   * <p>The total size of the data in the recovery point in megabytes.</p>
   */
  totalSizeInMegaBytes?: number;

  /**
   * <p>The name of the namespace the recovery point is associated with.</p>
   */
  namespaceName?: string;

  /**
   * <p>The name of the workgroup the recovery point is associated with.</p>
   */
  workgroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.</p>
   */
  namespaceArn?: string;
}

export interface GetRecoveryPointResponse {
  /**
   * <p>The returned recovery point object.</p>
   */
  recoveryPoint?: RecoveryPoint;
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return.</p>
   */
  resourceArn: string | undefined;
}

/**
 * <p>The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts.</p>
 */
export interface ResourcePolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  resourceArn?: string;

  /**
   * <p>The resource policy.</p>
   */
  policy?: string;
}

export interface GetResourcePolicyResponse {
  /**
   * <p>The returned resource policy.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

export interface GetSnapshotRequest {
  /**
   * <p>The name of the snapshot to return.</p>
   */
  snapshotName?: string;

  /**
   * <p>The owner Amazon Web Services account of a snapshot shared with another user.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to return.</p>
   */
  snapshotArn?: string;
}

export interface GetSnapshotResponse {
  /**
   * <p>The returned snapshot object.</p>
   */
  snapshot?: Snapshot;
}

export interface GetTableRestoreStatusRequest {
  /**
   * <p>The ID of the <code>RestoreTableFromSnapshot</code> request to return status for.</p>
   */
  tableRestoreRequestId: string | undefined;
}

/**
 * <p>Contains information about a table restore request.</p>
 */
export interface TableRestoreStatus {
  /**
   * <p>The ID of the RestoreTableFromSnapshot request.</p>
   */
  tableRestoreRequestId?: string;

  /**
   * <p>A value that describes the current state of the table restore request.
   *          Possible values include <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>, <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  status?: string;

  /**
   * <p>A description of the status of the table restore request.
   *          Status values include <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>, <code>PENDING</code>, <code>IN_PROGRESS</code>.</p>
   */
  message?: string;

  /**
   * <p>The time that the table restore request was made,
   *          in Universal Coordinated Time (UTC).</p>
   */
  requestTime?: Date;

  /**
   * <p>The namespace of the table being restored from.</p>
   */
  namespaceName?: string;

  /**
   * <p>The name of the workgroup being restored from.</p>
   */
  workgroupName?: string;

  /**
   * <p>The name of the snapshot being restored from.</p>
   */
  snapshotName?: string;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   */
  progressInMegaBytes?: number;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   */
  totalDataInMegaBytes?: number;

  /**
   * <p>The name of the source database being restored from.</p>
   */
  sourceDatabaseName?: string;

  /**
   * <p>The name of the source schema being restored from.</p>
   */
  sourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored from.</p>
   */
  sourceTableName?: string;

  /**
   * <p>The name of the database to restore to.</p>
   */
  targetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore to.</p>
   */
  targetSchemaName?: string;

  /**
   * <p>The name of the table to create from the restore operation.</p>
   */
  newTableName?: string;
}

export interface GetTableRestoreStatusResponse {
  /**
   * <p>The returned <code>TableRestoreStatus</code> object that contains information about
   *          the status of your <code>RestoreTableFromSnapshot</code> request.</p>
   */
  tableRestoreStatus?: TableRestoreStatus;
}

export interface GetUsageLimitRequest {
  /**
   * <p>The unique identifier of the usage limit to return information for.</p>
   */
  usageLimitId: string | undefined;
}

export interface GetUsageLimitResponse {
  /**
   * <p>The returned usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

export interface GetWorkgroupRequest {
  /**
   * <p>The name of the workgroup to return information for.</p>
   */
  workgroupName: string | undefined;
}

export interface GetWorkgroupResponse {
  /**
   * <p>The returned workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

/**
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

export interface ListNamespacesRequest {
  /**
   * <p>If your initial <code>ListNamespaces</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListNamespaces</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;
}

export interface ListNamespacesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of returned namespaces.</p>
   */
  namespaces: Namespace[] | undefined;
}

export interface ListRecoveryPointsRequest {
  /**
   * <p>If your initial <code>ListRecoveryPoints</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListRecoveryPoints</code> operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The time when the recovery point's creation was initiated.</p>
   */
  startTime?: Date;

  /**
   * <p>The time when creation of the recovery point finished.</p>
   */
  endTime?: Date;

  /**
   * <p>The name of the namespace to list recovery points for.</p>
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list recovery points.</p>
   */
  namespaceArn?: string;
}

export interface ListRecoveryPointsResponse {
  /**
   * <p>The returned recovery point objects.</p>
   */
  recoveryPoints?: RecoveryPoint[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export interface ListSnapshotsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The namespace from which to list all snapshots.</p>
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list all snapshots.</p>
   */
  namespaceArn?: string;

  /**
   * <p>The owner Amazon Web Services account of the snapshot.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The time when the creation of the snapshot was initiated.</p>
   */
  startTime?: Date;

  /**
   * <p>The timestamp showing when the snapshot creation finished.</p>
   */
  endTime?: Date;
}

export interface ListSnapshotsResponse {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>All of the returned snapshot objects.</p>
   */
  snapshots?: Snapshot[];
}

export interface ListTableRestoreStatusRequest {
  /**
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a nextToken,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will return results on the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to
   *          return. You can use nextToken to display the next page of results.</p>
   */
  maxResults?: number;

  /**
   * <p>The namespace from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations .</p>
   */
  namespaceName?: string;

  /**
   * <p>The workgroup from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations.</p>
   */
  workgroupName?: string;
}

export interface ListTableRestoreStatusResponse {
  /**
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will returns results on the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>The array of returned <code>TableRestoreStatus</code> objects.</p>
   */
  tableRestoreStatuses?: TableRestoreStatus[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs assigned to the resource.</p>
   */
  tags?: Tag[];
}

/**
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

export interface ListUsageLimitsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource whose usage limits you want to list.</p>
   */
  resourceArn?: string;

  /**
   * <p>The Amazon Redshift Serverless feature whose limits you want to see.</p>
   */
  usageType?: UsageLimitUsageType | string;

  /**
   * <p>If your initial <code>ListUsageLimits</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListUsageLimits</code> operations,
   *          which returns results in the next page.
   *       </p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to get the next page of results. The default is 100.</p>
   */
  maxResults?: number;
}

export interface ListUsageLimitsResponse {
  /**
   * <p>An array of returned usage limit objects.</p>
   */
  usageLimits?: UsageLimit[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   */
  nextToken?: string;
}

export interface ListWorkgroupsRequest {
  /**
   * <p>If your initial ListWorkgroups operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following ListNamespaces operations,
   *          which returns results in the next page.</p>
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   */
  maxResults?: number;
}

export interface ListWorkgroupsResponse {
  /**
   * <p>
   *          If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          To retrieve the next page, make the call again using the returned token.</p>
   */
  nextToken?: string;

  /**
   * <p>The returned array of workgroups.</p>
   */
  workgroups: Workgroup[] | undefined;
}

export interface UpdateNamespaceRequest {
  /**
   * <p>The name of the namespace to update. You can't update the name of a namespace once it is created.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The password of the administrator for the first database created in the namespace. This parameter must be updated together
   *       with <code>adminUsername</code>.</p>
   */
  adminUserPassword?: string;

  /**
   * <p>The username of the administrator for the first database created in the namespace. This parameter must be updated
   *       together with <code>adminUserPassword</code>.</p>
   */
  adminUsername?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. This parameter must be updated together
   *       with <code>iamRoles</code>.</p>
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace. This parameter must be updated together with <code>defaultIamRoleArn</code>.</p>
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export. The export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   */
  logExports?: (LogExport | string)[];
}

export interface UpdateNamespaceResponse {
  /**
   * <p>A list of tag instances.</p>
   */
  namespace: Namespace | undefined;
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account to create or update a resource policy for.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.</p>
   *          <p>
   *             <code>"{\"Version\": \"2012-10-17\", \"Statement\" :
   *             [{ \"Sid\": \"AllowUserRestoreFromSnapshot\", \"Principal\":{\"AWS\":
   *             [\"739247239426\"]}, \"Action\": [\"redshift-serverless:RestoreFromSnapshot\"]
   *             , \"Effect\": \"Allow\" }]}"</code>
   *          </p>
   */
  policy: string | undefined;
}

export interface PutResourcePolicyResponse {
  /**
   * <p>The policy that was created or updated.</p>
   */
  resourcePolicy?: ResourcePolicy;
}

export interface RestoreFromRecoveryPointRequest {
  /**
   * <p>The unique identifier of the recovery point to restore from.</p>
   */
  recoveryPointId: string | undefined;

  /**
   * <p>The name of the namespace to restore data into.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the workgroup used to restore data.</p>
   */
  workgroupName: string | undefined;
}

export interface RestoreFromRecoveryPointResponse {
  /**
   * <p>The unique identifier of the recovery point used for the restore.</p>
   */
  recoveryPointId?: string;

  /**
   * <p>The namespace that data was restored into.</p>
   */
  namespace?: Namespace;
}

export interface RestoreFromSnapshotRequest {
  /**
   * <p>The name of the namespace to restore the snapshot to.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the workgroup used to restore the snapshot.</p>
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the snapshot to restore from. Must not be specified at the same time as <code>snapshotArn</code>.</p>
   */
  snapshotName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to restore from. Required if restoring from Amazon Redshift Serverless to a provisioned cluster.
   *       Must not be specified at the same time as <code>snapshotName</code>.</p>
   *          <p>The format of the ARN is arn:aws:redshift:&lt;region&gt;:&lt;account_id&gt;:snapshot:&lt;cluster_identifier&gt;/&lt;snapshot_identifier&gt;.</p>
   */
  snapshotArn?: string;

  /**
   * <p>The Amazon Web Services account that owns the snapshot.</p>
   */
  ownerAccount?: string;
}

export interface RestoreFromSnapshotResponse {
  /**
   * <p>The name of the snapshot used to restore the namespace.</p>
   */
  snapshotName?: string;

  /**
   * <p>The owner Amazon Web Services; account of the snapshot that was restored.</p>
   */
  ownerAccount?: string;

  /**
   * <p>A collection of database objects and users.</p>
   */
  namespace?: Namespace;
}

export interface RestoreTableFromSnapshotRequest {
  /**
   * <p>The namespace of the snapshot to restore from.</p>
   */
  namespaceName: string | undefined;

  /**
   * <p>The workgroup to restore the table to.</p>
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the snapshot to restore the table from.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   */
  sourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   */
  sourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored.</p>
   */
  sourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   */
  targetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   */
  targetSchemaName?: string;

  /**
   * <p>The name of the table to create from the restore operation.</p>
   */
  newTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table
   *          are case sensitive. If true, the names are case sensitive. If
   *          false, the names are not case sensitive. The default is false.</p>
   */
  activateCaseSensitiveIdentifier?: boolean;
}

export interface RestoreTableFromSnapshotResponse {
  /**
   * <p>The TableRestoreStatus object that contains the status of the restore operation.</p>
   */
  tableRestoreStatus?: TableRestoreStatus;
}

export interface UpdateSnapshotRequest {
  /**
   * <p>The name of the snapshot.</p>
   */
  snapshotName: string | undefined;

  /**
   * <p>The new retention period of the snapshot.</p>
   */
  retentionPeriod?: number;
}

export interface UpdateSnapshotResponse {
  /**
   * <p>The updated snapshot object.</p>
   */
  snapshot?: Snapshot;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The map of the key-value pairs used to tag the resource.</p>
   */
  tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag or set of tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateUsageLimitRequest {
  /**
   * <p>The identifier of the usage limit to update.</p>
   */
  usageLimitId: string | undefined;

  /**
   * <p>The new limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour.
   *          If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing.
   *          The value must be a positive number.</p>
   */
  amount?: number;

  /**
   * <p>The new action that Amazon Redshift Serverless takes when the limit is reached.</p>
   */
  breachAction?: UsageLimitBreachAction | string;
}

export interface UpdateUsageLimitResponse {
  /**
   * <p>The updated usage limit object.</p>
   */
  usageLimit?: UsageLimit;
}

export interface UpdateWorkgroupRequest {
  /**
   * <p>The name of the workgroup to update. You can't update the name of a workgroup once it is created.</p>
   */
  workgroupName: string | undefined;

  /**
   * <p>The new base data warehouse capacity in Redshift Processing Units (RPUs).</p>
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitivity_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, and query monitoring metrics that let you
   *          define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>A value that specifies whether the workgroup can be accessible from a public network.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   */
  subnetIds?: string[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   */
  port?: number;
}

export interface UpdateWorkgroupResponse {
  /**
   * <p>The updated workgroup object.</p>
   */
  workgroup: Workgroup | undefined;
}

/**
 * @internal
 */
export const ConfigParameterFilterSensitiveLog = (obj: ConfigParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConvertRecoveryPointToSnapshotRequestFilterSensitiveLog = (
  obj: ConvertRecoveryPointToSnapshotRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SnapshotFilterSensitiveLog = (obj: Snapshot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConvertRecoveryPointToSnapshotResponseFilterSensitiveLog = (
  obj: ConvertRecoveryPointToSnapshotResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointAccessRequestFilterSensitiveLog = (obj: CreateEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceFilterSensitiveLog = (obj: NetworkInterface): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcEndpointFilterSensitiveLog = (obj: VpcEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VpcSecurityGroupMembershipFilterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointAccessFilterSensitiveLog = (obj: EndpointAccess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEndpointAccessResponseFilterSensitiveLog = (obj: CreateEndpointAccessResponse): any => ({
  ...obj,
});

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
export const CreateSnapshotRequestFilterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSnapshotResponseFilterSensitiveLog = (obj: CreateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUsageLimitRequestFilterSensitiveLog = (obj: CreateUsageLimitRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UsageLimitFilterSensitiveLog = (obj: UsageLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUsageLimitResponseFilterSensitiveLog = (obj: CreateUsageLimitResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkgroupRequestFilterSensitiveLog = (obj: CreateWorkgroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EndpointFilterSensitiveLog = (obj: Endpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WorkgroupFilterSensitiveLog = (obj: Workgroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateWorkgroupResponseFilterSensitiveLog = (obj: CreateWorkgroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointAccessRequestFilterSensitiveLog = (obj: DeleteEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEndpointAccessResponseFilterSensitiveLog = (obj: DeleteEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointAccessRequestFilterSensitiveLog = (obj: GetEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEndpointAccessResponseFilterSensitiveLog = (obj: GetEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointAccessRequestFilterSensitiveLog = (obj: ListEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEndpointAccessResponseFilterSensitiveLog = (obj: ListEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointAccessRequestFilterSensitiveLog = (obj: UpdateEndpointAccessRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEndpointAccessResponseFilterSensitiveLog = (obj: UpdateEndpointAccessResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNamespaceRequestFilterSensitiveLog = (obj: DeleteNamespaceRequest): any => ({
  ...obj,
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
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResponseFilterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotRequestFilterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSnapshotResponseFilterSensitiveLog = (obj: DeleteSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUsageLimitRequestFilterSensitiveLog = (obj: DeleteUsageLimitRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUsageLimitResponseFilterSensitiveLog = (obj: DeleteUsageLimitResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkgroupRequestFilterSensitiveLog = (obj: DeleteWorkgroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWorkgroupResponseFilterSensitiveLog = (obj: DeleteWorkgroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCredentialsRequestFilterSensitiveLog = (obj: GetCredentialsRequest): any => ({
  ...obj,
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
export const GetNamespaceRequestFilterSensitiveLog = (obj: GetNamespaceRequest): any => ({
  ...obj,
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
export const GetRecoveryPointRequestFilterSensitiveLog = (obj: GetRecoveryPointRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecoveryPointFilterSensitiveLog = (obj: RecoveryPoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecoveryPointResponseFilterSensitiveLog = (obj: GetRecoveryPointResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyRequestFilterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcePolicyFilterSensitiveLog = (obj: ResourcePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePolicyResponseFilterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotRequestFilterSensitiveLog = (obj: GetSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSnapshotResponseFilterSensitiveLog = (obj: GetSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTableRestoreStatusRequestFilterSensitiveLog = (obj: GetTableRestoreStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TableRestoreStatusFilterSensitiveLog = (obj: TableRestoreStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTableRestoreStatusResponseFilterSensitiveLog = (obj: GetTableRestoreStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageLimitRequestFilterSensitiveLog = (obj: GetUsageLimitRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetUsageLimitResponseFilterSensitiveLog = (obj: GetUsageLimitResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkgroupRequestFilterSensitiveLog = (obj: GetWorkgroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetWorkgroupResponseFilterSensitiveLog = (obj: GetWorkgroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListNamespacesRequestFilterSensitiveLog = (obj: ListNamespacesRequest): any => ({
  ...obj,
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
export const ListRecoveryPointsRequestFilterSensitiveLog = (obj: ListRecoveryPointsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecoveryPointsResponseFilterSensitiveLog = (obj: ListRecoveryPointsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsRequestFilterSensitiveLog = (obj: ListSnapshotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSnapshotsResponseFilterSensitiveLog = (obj: ListSnapshotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableRestoreStatusRequestFilterSensitiveLog = (obj: ListTableRestoreStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTableRestoreStatusResponseFilterSensitiveLog = (obj: ListTableRestoreStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsageLimitsRequestFilterSensitiveLog = (obj: ListUsageLimitsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsageLimitsResponseFilterSensitiveLog = (obj: ListUsageLimitsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkgroupsRequestFilterSensitiveLog = (obj: ListWorkgroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListWorkgroupsResponseFilterSensitiveLog = (obj: ListWorkgroupsResponse): any => ({
  ...obj,
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
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResponseFilterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromRecoveryPointRequestFilterSensitiveLog = (obj: RestoreFromRecoveryPointRequest): any => ({
  ...obj,
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
export const RestoreFromSnapshotRequestFilterSensitiveLog = (obj: RestoreFromSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreFromSnapshotResponseFilterSensitiveLog = (obj: RestoreFromSnapshotResponse): any => ({
  ...obj,
  ...(obj.namespace && { namespace: NamespaceFilterSensitiveLog(obj.namespace) }),
});

/**
 * @internal
 */
export const RestoreTableFromSnapshotRequestFilterSensitiveLog = (obj: RestoreTableFromSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestoreTableFromSnapshotResponseFilterSensitiveLog = (obj: RestoreTableFromSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSnapshotRequestFilterSensitiveLog = (obj: UpdateSnapshotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSnapshotResponseFilterSensitiveLog = (obj: UpdateSnapshotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUsageLimitRequestFilterSensitiveLog = (obj: UpdateUsageLimitRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUsageLimitResponseFilterSensitiveLog = (obj: UpdateUsageLimitResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkgroupRequestFilterSensitiveLog = (obj: UpdateWorkgroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateWorkgroupResponseFilterSensitiveLog = (obj: UpdateWorkgroupResponse): any => ({
  ...obj,
});
