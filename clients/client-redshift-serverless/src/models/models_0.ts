// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { RedshiftServerlessServiceException as __BaseException } from "./RedshiftServerlessServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
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
 * <p>An object that represents the custom domain name association.</p>
 * @public
 */
export interface Association {
  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;

  /**
   * <p>The expiration time for the certificate.</p>
   * @public
   */
  customDomainCertificateExpiryTime?: Date;

  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName?: string;
}

/**
 * <p>An array of key-value pairs to set for advanced control over Amazon Redshift Serverless.</p>
 * @public
 */
export interface ConfigParameter {
  /**
   * <p>The key of the parameter. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitive_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, <code>require_ssl</code>, <code>use_fips_ssl</code>, and query monitoring metrics that let
   *          you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   * @public
   */
  parameterKey?: string;

  /**
   * <p>The value of the parameter to set.</p>
   * @public
   */
  parameterValue?: string;
}

/**
 * <p>The submitted action has conflicts.</p>
 * @public
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
 * @public
 */
export interface Tag {
  /**
   * <p>The key to use in the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotRequest {
  /**
   * <p>The unique identifier of the recovery point.</p>
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * <p>The name of the snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>How long to retain the snapshot.</p>
   * @public
   */
  retentionPeriod?: number;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a>
   *          to associate with the created snapshot.</p>
   * @public
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
 * <p>A snapshot object that contains databases.</p>
 * @public
 */
export interface Snapshot {
  /**
   * <p>The name of the namepsace.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace the snapshot was created from.</p>
   * @public
   */
  namespaceArn?: string;

  /**
   * <p>The name of the snapshot.</p>
   * @public
   */
  snapshotName?: string;

  /**
   * <p>The timestamp of when the snapshot was created.</p>
   * @public
   */
  snapshotCreateTime?: Date;

  /**
   * <p>The username of the database within a snapshot.</p>
   * @public
   */
  adminUsername?: string;

  /**
   * <p>The status of the snapshot.</p>
   * @public
   */
  status?: SnapshotStatus;

  /**
   * <p>The unique identifier of the KMS key used to encrypt the snapshot.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The owner Amazon Web Services; account of the snapshot.</p>
   * @public
   */
  ownerAccount?: string;

  /**
   * <p>The total size, in megabytes, of how big the snapshot is.</p>
   * @public
   */
  totalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size of the incremental backup in megabytes.</p>
   * @public
   */
  actualIncrementalBackupSizeInMegaBytes?: number;

  /**
   * <p>The size in megabytes of the data that has been backed up to a snapshot.</p>
   * @public
   */
  backupProgressInMegaBytes?: number;

  /**
   * <p>The rate at which data is backed up into a snapshot in megabytes per second.</p>
   * @public
   */
  currentBackupRateInMegaBytesPerSecond?: number;

  /**
   * <p>The estimated amount of seconds until the snapshot completes backup.</p>
   * @public
   */
  estimatedSecondsToCompletion?: number;

  /**
   * <p>The amount of time it took to back up data into a snapshot.</p>
   * @public
   */
  elapsedTimeInSeconds?: number;

  /**
   * <p>The period of time, in days, of how long the snapshot is retained.</p>
   * @public
   */
  snapshotRetentionPeriod?: number;

  /**
   * <p>The amount of days until the snapshot is deleted.</p>
   * @public
   */
  snapshotRemainingDays?: number;

  /**
   * <p>The timestamp of when data within the snapshot started getting retained.</p>
   * @public
   */
  snapshotRetentionStartTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot.</p>
   * @public
   */
  snapshotArn?: string;

  /**
   * <p>All of the Amazon Web Services accounts that have access to
   *          restore a snapshot to a namespace.</p>
   * @public
   */
  accountsWithRestoreAccess?: string[];

  /**
   * <p>All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.</p>
   * @public
   */
  accountsWithProvisionedRestoreAccess?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</p>
   * @public
   */
  adminPasswordSecretArn?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   * @public
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotResponse {
  /**
   * <p>The snapshot converted from the recovery point.</p>
   * @public
   */
  snapshot?: Snapshot;
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
 * <p>The resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource that could not be found.</p>
   * @public
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
 * <p>The request exceeded the number of tags allowed for a resource.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource that exceeded the number of tags allowed for a resource.</p>
   * @public
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
 * @public
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
export interface CreateCustomDomainAssociationRequest {
  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The custom domain name to associate with the workgroup.</p>
   * @public
   */
  customDomainName: string | undefined;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationResponse {
  /**
   * <p>The custom domain name to associate with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;

  /**
   * <p>The expiration time for the certificate.</p>
   * @public
   */
  customDomainCertificateExpiryTime?: Date;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
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
export interface CreateEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint. An endpoint name must contain 1-30 characters.
   *          Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter.
   *          The name can't contain two consecutive hyphens or end with a hyphen.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The unique identifers of subnets from which
   *          Amazon Redshift Serverless chooses one to deploy a VPC endpoint.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The name of the workgroup to associate with the VPC endpoint.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The unique identifiers of the security group that defines the ports,
   *          protocols, and sources for inbound traffic that you are authorizing into your endpoint.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];

  /**
   * <p>The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  ownerAccount?: string;
}

/**
 * <p>Contains information about a network interface
 *          in an Amazon Redshift Serverless managed VPC endpoint.
 *       </p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The unique identifier of the network interface.</p>
   * @public
   */
  networkInterfaceId?: string;

  /**
   * <p>The unique identifier of the subnet.</p>
   * @public
   */
  subnetId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   * @public
   */
  privateIpAddress?: string;

  /**
   * <p>The availability Zone.</p>
   * @public
   */
  availabilityZone?: string;
}

/**
 * <p>The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.</p>
 * @public
 */
export interface VpcEndpoint {
  /**
   * <p>The connection endpoint ID for connecting to Amazon Redshift Serverless.</p>
   * @public
   */
  vpcEndpointId?: string;

  /**
   * <p>The VPC identifier that the endpoint is associated with.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>One or more network interfaces of the endpoint. Also known as an interface endpoint.</p>
   * @public
   */
  networkInterfaces?: NetworkInterface[];
}

/**
 * <p>Describes the members of a VPC security group.</p>
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The unique identifier of the VPC security group.</p>
   * @public
   */
  vpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   * @public
   */
  status?: string;
}

/**
 * <p>Information about an Amazon Redshift Serverless VPC endpoint.</p>
 * @public
 */
export interface EndpointAccess {
  /**
   * <p>The name of the VPC endpoint.</p>
   * @public
   */
  endpointName?: string;

  /**
   * <p>The status of the VPC endpoint.</p>
   * @public
   */
  endpointStatus?: string;

  /**
   * <p>The name of the workgroup associated with the endpoint.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The time that the endpoint was created.</p>
   * @public
   */
  endpointCreateTime?: Date;

  /**
   * <p>The port number on which Amazon Redshift Serverless accepts incoming connections.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The DNS address of the endpoint.</p>
   * @public
   */
  address?: string;

  /**
   * <p>The unique identifier of subnets
   *          where Amazon Redshift Serverless choose to deploy the VPC endpoint.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The security groups associated with the endpoint.</p>
   * @public
   */
  vpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The connection endpoint for connecting to Amazon Redshift Serverless.</p>
   * @public
   */
  vpcEndpoint?: VpcEndpoint;

  /**
   * <p>The Amazon Resource Name (ARN) of the VPC endpoint.</p>
   * @public
   */
  endpointArn?: string;
}

/**
 * @public
 */
export interface CreateEndpointAccessResponse {
  /**
   * <p>The created VPC endpoint.</p>
   * @public
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
   * <p>The name of the namespace.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The username of the administrator for the first database created in the namespace.</p>
   * @public
   */
  adminUsername?: string;

  /**
   * <p>The password of the administrator for the first database created in the namespace.</p>
   *          <p>You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true. </p>
   * @public
   */
  adminUserPassword?: string;

  /**
   * <p>The name of the first database created in the namespace.</p>
   * @public
   */
  dbName?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   * @public
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace.</p>
   * @public
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export.
   *          Available export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   * @public
   */
  logExports?: LogExport[];

  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials.
   *          You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true.
   *          If <code>manageAdminPassword</code> is false or not set, Amazon Redshift uses
   *          <code>adminUserPassword</code> for the admin user account's password.
   *       </p>
   * @public
   */
  manageAdminPassword?: boolean;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *          You can only use this parameter if <code>manageAdminPassword</code> is true.</p>
   * @public
   */
  adminPasswordSecretKmsKeyId?: string;

  /**
   * <p>The ARN for the Redshift application that integrates with IAM Identity Center.</p>
   * @public
   */
  redshiftIdcApplicationArn?: string;
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
 * <p>A collection of database objects and users.</p>
 * @public
 */
export interface Namespace {
  /**
   * <p>The Amazon Resource Name (ARN) associated with a namespace.</p>
   * @public
   */
  namespaceArn?: string;

  /**
   * <p>The unique identifier of a namespace.</p>
   * @public
   */
  namespaceId?: string;

  /**
   * <p>The name of the namespace.
   *       Must be between 3-64 alphanumeric characters in lowercase,
   *       and it cannot be a reserved word. A list of reserved words can be found
   *       in <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html">Reserved Words</a> in the Amazon Redshift Database Developer Guide.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The username of the administrator for the first database created in the namespace.</p>
   * @public
   */
  adminUsername?: string;

  /**
   * <p>The name of the first database created in the namespace.</p>
   * @public
   */
  dbName?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.</p>
   * @public
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace.</p>
   * @public
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.</p>
   * @public
   */
  logExports?: LogExport[];

  /**
   * <p>The status of the namespace.</p>
   * @public
   */
  status?: NamespaceStatus;

  /**
   * <p>The date of when the namespace was created.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.</p>
   * @public
   */
  adminPasswordSecretArn?: string;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   * @public
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * <p>The created namespace object.</p>
   * @public
   */
  namespace?: Namespace;
}

/**
 * <p>The schedule of when Amazon Redshift Serverless should run the scheduled action.</p>
 * @public
 */
export type Schedule = Schedule.AtMember | Schedule.CronMember | Schedule.$UnknownMember;

/**
 * @public
 */
export namespace Schedule {
  /**
   * <p>The timestamp of when Amazon Redshift Serverless should run the scheduled action. Timestamp is in UTC. Format of at expression is <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2016-03-04T17:27:00</code>.</p>
   * @public
   */
  export interface AtMember {
    at: Date;
    cron?: never;
    $unknown?: never;
  }

  /**
   * <p>The cron expression to use to schedule a recurring scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.</p>
   *          <p>Format of cron expressions is <code>(Minutes Hours Day-of-month Month Day-of-week Year)</code>. For example, <code>"(0 10 ? * MON *)"</code>. For more information, see
   *          <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   * @public
   */
  export interface CronMember {
    at?: never;
    cron: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    at?: never;
    cron?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    at: (value: Date) => T;
    cron: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Schedule, visitor: Visitor<T>): T => {
    if (value.at !== undefined) return visitor.at(value.at);
    if (value.cron !== undefined) return visitor.cron(value.cron);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The parameters that you can use to configure a <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html">scheduled action</a> to create a snapshot. For more information about creating a scheduled action, see
 *          <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html">CreateScheduledAction</a>.</p>
 * @public
 */
export interface CreateSnapshotScheduleActionParameters {
  /**
   * <p>The name of the namespace for which you want to configure a scheduled action to create a snapshot.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>A string prefix that is attached to the name of the snapshot created by the scheduled action. The final
   *       name of the snapshot is the string prefix appended by the date and time of when the snapshot was created.</p>
   * @public
   */
  snapshotNamePrefix: string | undefined;

  /**
   * <p>The retention period of the snapshot created by the scheduled action.</p>
   * @public
   */
  retentionPeriod?: number;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a> to associate with the snapshot.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * <p>A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.</p>
 *          <p>
 *             <code>"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"</code>
 *          </p>
 * @public
 */
export type TargetAction = TargetAction.CreateSnapshotMember | TargetAction.$UnknownMember;

/**
 * @public
 */
export namespace TargetAction {
  /**
   * <p>The parameters that you can use to configure a <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html">scheduled action</a> to create a snapshot. For more information about creating a scheduled action, see
   *          <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html">CreateScheduledAction</a>.</p>
   * @public
   */
  export interface CreateSnapshotMember {
    createSnapshot: CreateSnapshotScheduleActionParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    createSnapshot?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    createSnapshot: (value: CreateSnapshotScheduleActionParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TargetAction, visitor: Visitor<T>): T => {
    if (value.createSnapshot !== undefined) return visitor.createSnapshot(value.createSnapshot);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateScheduledActionRequest {
  /**
   * <p>The name of the scheduled action.</p>
   * @public
   */
  scheduledActionName: string | undefined;

  /**
   * <p>A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.</p>
   *          <p>
   *             <code>"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"</code>
   *          </p>
   * @public
   */
  targetAction: TargetAction | undefined;

  /**
   * <p>The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.</p>
   *          <ul>
   *             <li>
   *                <p>Format of at timestamp is <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2016-03-04T17:27:00</code>.</p>
   *             </li>
   *             <li>
   *                <p>Format of cron expression is <code>(Minutes Hours Day-of-month Month Day-of-week Year)</code>. For example, <code>"(0 10 ? * MON *)"</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * <p>The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action.
   *          This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *          For more information about the IAM role to use with the Amazon Redshift scheduler, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for
   *             Amazon Redshift</a> in the Amazon Redshift Cluster Management Guide</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the namespace for which to create a scheduled action.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>Indicates whether the schedule is enabled. If false, the scheduled action does not trigger. For more information about <code>state</code>
   *          of the scheduled action, see <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ScheduledAction.html">ScheduledAction</a>.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The description of the scheduled action.</p>
   * @public
   */
  scheduledActionDescription?: string;

  /**
   * <p>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 * @enum
 */
export const State = {
  ACTIVE: "ACTIVE",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * <p>The returned scheduled action object.</p>
 * @public
 */
export interface ScheduledActionResponse {
  /**
   * <p>The name of the scheduled action.</p>
   * @public
   */
  scheduledActionName?: string;

  /**
   * <p>The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.</p>
   *          <ul>
   *             <li>
   *                <p>Format of at timestamp is <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2016-03-04T17:27:00</code>.</p>
   *             </li>
   *             <li>
   *                <p>Format of cron expression is <code>(Minutes Hours Day-of-month Month Day-of-week Year)</code>. For example, <code>"(0 10 ? * MON *)"</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schedule?: Schedule;

  /**
   * <p>The description of the scheduled action.</p>
   * @public
   */
  scheduledActionDescription?: string;

  /**
   * <p>An array of timestamps of when the next scheduled actions will trigger.</p>
   * @public
   */
  nextInvocations?: Date[];

  /**
   * <p>The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action.
   *          This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *          For more information about the IAM role to use with the Amazon Redshift scheduler, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for
   *             Amazon Redshift</a> in the Amazon Redshift Cluster Management Guide</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>The state of the scheduled action.</p>
   * @public
   */
  state?: State;

  /**
   * <p>The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The end time of </p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.</p>
   *          <p>
   *             <code>"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"</code>
   *          </p>
   * @public
   */
  targetAction?: TargetAction;

  /**
   * <p>The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The uuid of the scheduled action.</p>
   * @public
   */
  scheduledActionUuid?: string;
}

/**
 * @public
 */
export interface CreateScheduledActionResponse {
  /**
   * <p>The returned <code>ScheduledAction</code> object that describes the properties of a scheduled action.</p>
   * @public
   */
  scheduledAction?: ScheduledActionResponse;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * <p>The namespace to create a snapshot for.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>How long to retain the created snapshot.</p>
   * @public
   */
  retentionPeriod?: number;

  /**
   * <p>An array of <a href="https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html">Tag objects</a> to associate with the snapshot.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * <p>The created snapshot object.</p>
   * @public
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface CreateSnapshotCopyConfigurationRequest {
  /**
   * <p>The name of the namespace to copy snapshots from.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The destination Amazon Web Services Region that you want to copy snapshots to.</p>
   * @public
   */
  destinationRegion: string | undefined;

  /**
   * <p>The retention period of the snapshots that you copy to the destination Amazon Web Services Region.</p>
   * @public
   */
  snapshotRetentionPeriod?: number;

  /**
   * <p>The KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.</p>
   * @public
   */
  destinationKmsKeyId?: string;
}

/**
 * <p>The object that you configure to copy snapshots from one namespace to a namespace in another Amazon Web Services Region.</p>
 * @public
 */
export interface SnapshotCopyConfiguration {
  /**
   * <p>The ID of the snapshot copy configuration object.</p>
   * @public
   */
  snapshotCopyConfigurationId?: string;

  /**
   * <p>The ARN of the snapshot copy configuration object.</p>
   * @public
   */
  snapshotCopyConfigurationArn?: string;

  /**
   * <p>The name of the namespace to copy snapshots from in the source Amazon Web Services Region.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The destination Amazon Web Services Region to copy snapshots to.</p>
   * @public
   */
  destinationRegion?: string;

  /**
   * <p>The retention period of snapshots that are copied to the destination Amazon Web Services Region.</p>
   * @public
   */
  snapshotRetentionPeriod?: number;

  /**
   * <p>The ID of the KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.</p>
   * @public
   */
  destinationKmsKeyId?: string;
}

/**
 * @public
 */
export interface CreateSnapshotCopyConfigurationResponse {
  /**
   * <p>The snapshot copy configuration object that is returned.</p>
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The type of Amazon Redshift Serverless usage to create a usage limit for.</p>
   * @public
   */
  usageType: UsageLimitUsageType | undefined;

  /**
   * <p>The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data
   *          transferred between Regions in cross-account sharing. The value must be a positive number.</p>
   * @public
   */
  amount: number | undefined;

  /**
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   * @public
   */
  period?: UsageLimitPeriod;

  /**
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached. The default is log.</p>
   * @public
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * <p>The usage limit object.</p>
 * @public
 */
export interface UsageLimit {
  /**
   * <p>The identifier of the usage limit.</p>
   * @public
   */
  usageLimitId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the usage limit.</p>
   * @public
   */
  usageLimitArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The Amazon Redshift Serverless feature to limit.</p>
   * @public
   */
  usageType?: UsageLimitUsageType;

  /**
   * <p>The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.</p>
   * @public
   */
  amount?: number;

  /**
   * <p>The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.</p>
   * @public
   */
  period?: UsageLimitPeriod;

  /**
   * <p>The action that Amazon Redshift Serverless takes when the limit is reached.</p>
   * @public
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * @public
 */
export interface CreateUsageLimitResponse {
  /**
   * <p>The returned usage limit object.</p>
   * @public
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface CreateWorkgroupRequest {
  /**
   * <p>The name of the created workgroup.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the namespace to associate with the workgroup.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   * @public
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.</p>
   * @public
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitive_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, <code>require_ssl</code>, <code>use_fips_ssl</code>, and query monitoring metrics that let you define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   * @public
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>A value that specifies whether the workgroup can be accessed from a public network.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>A array of tag instances.</p>
   * @public
   */
  tags?: Tag[];

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.</p>
   * @public
   */
  maxCapacity?: number;
}

/**
 * <p>The VPC endpoint object.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The DNS address of the VPC endpoint.</p>
   * @public
   */
  address?: string;

  /**
   * <p>The port that Amazon Redshift Serverless listens on.</p>
   * @public
   */
  port?: number;

  /**
   * <p>An array of <code>VpcEndpoint</code> objects.</p>
   * @public
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
 * <p>The collection of computing resources from which an endpoint is created.</p>
 * @public
 */
export interface Workgroup {
  /**
   * <p>The unique identifier of the workgroup.</p>
   * @public
   */
  workgroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that links to the workgroup.</p>
   * @public
   */
  workgroupArn?: string;

  /**
   * <p>The name of the workgroup.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The namespace the workgroup is associated with.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).</p>
   * @public
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to enable enhanced virtual
   *       private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   * @public
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *         options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitive_identifier</code>, <code>enable_user_activity_logging</code>,
   *         <code>query_group</code>, <code>search_path</code>, <code>require_ssl</code>, <code>use_fips_ssl</code>, and query monitoring metrics that let you define performance boundaries.
   *         For more information about query monitoring rules and available metrics, see <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless"> Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   * @public
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>An array of subnet IDs the workgroup is associated with.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>The status of the workgroup.</p>
   * @public
   */
  status?: WorkgroupStatus;

  /**
   * <p>The endpoint that is created from the workgroup.</p>
   * @public
   */
  endpoint?: Endpoint;

  /**
   * <p>A value that specifies whether the workgroup can be accessible from a public network.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The creation date of the workgroup.</p>
   * @public
   */
  creationDate?: Date;

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;

  /**
   * <p>The expiration time for the certificate.</p>
   * @public
   */
  customDomainCertificateExpiryTime?: Date;

  /**
   * <p>The Amazon Redshift Serverless version of your workgroup. For more information about Amazon Redshift Serverless versions, see<a href="https://docs.aws.amazon.com/redshift/latest/mgmt/cluster-versions.html">Cluster versions for Amazon Redshift</a>.</p>
   * @public
   */
  workgroupVersion?: string;

  /**
   * <p>The patch version of your Amazon Redshift Serverless workgroup. For more information about patch versions, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/cluster-versions.html">Cluster versions for Amazon Redshift</a>.</p>
   * @public
   */
  patchVersion?: string;

  /**
   * <p>The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.</p>
   * @public
   */
  maxCapacity?: number;

  /**
   * <p>A list of VPCs. Each entry is the unique identifier of a virtual private cloud with access to Amazon Redshift Serverless. If all of the VPCs for the grantee are allowed, it shows an asterisk.</p>
   * @public
   */
  crossAccountVpcs?: string[];
}

/**
 * @public
 */
export interface CreateWorkgroupResponse {
  /**
   * <p>The created workgroup object.</p>
   * @public
   */
  workgroup?: Workgroup;
}

/**
 * <p>There is an insufficient capacity to perform the action.</p>
 * @public
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
   * <p>The name of the VPC endpoint to delete.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessResponse {
  /**
   * <p>The deleted VPC endpoint.</p>
   * @public
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface GetEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint to return information for.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointAccessResponse {
  /**
   * <p>The returned VPC endpoint.</p>
   * @public
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface ListEndpointAccessRequest {
  /**
   * <p>If your initial <code>ListEndpointAccess</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListEndpointAccess</code> operations,
   *          which returns results in the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The name of the workgroup associated with the VPC endpoint to return.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The unique identifier of the virtual private cloud with access to Amazon Redshift Serverless.</p>
   * @public
   */
  vpcId?: string;

  /**
   * <p>The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  ownerAccount?: string;
}

/**
 * @public
 */
export interface ListEndpointAccessResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The returned VPC endpoints.</p>
   * @public
   */
  endpoints: EndpointAccess[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointAccessRequest {
  /**
   * <p>The name of the VPC endpoint to update.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The list of VPC security groups associated with the endpoint after the endpoint is modified.</p>
   * @public
   */
  vpcSecurityGroupIds?: string[];
}

/**
 * @public
 */
export interface UpdateEndpointAccessResponse {
  /**
   * <p>The updated VPC endpoint.</p>
   * @public
   */
  endpoint?: EndpointAccess;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationRequest {
  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationResponse {}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * <p>The name of the namespace to delete.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the snapshot to be created before the namespace is deleted.</p>
   * @public
   */
  finalSnapshotName?: string;

  /**
   * <p>How long to retain the final snapshot.</p>
   * @public
   */
  finalSnapshotRetentionPeriod?: number;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * <p>The deleted namespace object.</p>
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy to delete.</p>
   * @public
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
export interface DeleteScheduledActionRequest {
  /**
   * <p>The name of the scheduled action to delete.</p>
   * @public
   */
  scheduledActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionResponse {
  /**
   * <p>The deleted scheduled action object.</p>
   * @public
   */
  scheduledAction?: ScheduledActionResponse;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * <p>The name of the snapshot to be deleted.</p>
   * @public
   */
  snapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * <p>The deleted snapshot object.</p>
   * @public
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface DeleteSnapshotCopyConfigurationRequest {
  /**
   * <p>The ID of the snapshot copy configuration to delete.</p>
   * @public
   */
  snapshotCopyConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotCopyConfigurationResponse {
  /**
   * <p>The deleted snapshot copy configuration object.</p>
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitRequest {
  /**
   * <p>The unique identifier of the usage limit to delete.</p>
   * @public
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitResponse {
  /**
   * <p>The deleted usage limit object.</p>
   * @public
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface DeleteWorkgroupRequest {
  /**
   * <p>The name of the workgroup to be deleted.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkgroupResponse {
  /**
   * <p>The deleted workgroup object.</p>
   * @public
   */
  workgroup: Workgroup | undefined;
}

/**
 * @public
 */
export interface GetCredentialsRequest {
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
   * @public
   */
  dbName?: string;

  /**
   * <p>The number of seconds until the returned temporary password expires.
   *          The minimum is 900 seconds, and the maximum is 3600 seconds.</p>
   * @public
   */
  durationSeconds?: number;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The custom domain name associated with the workgroup. The custom domain name or the workgroup name must be included in the request.</p>
   * @public
   */
  customDomainName?: string;
}

/**
 * @public
 */
export interface GetCredentialsResponse {
  /**
   * <p>A database user name that is authorized to log on to the database <code>DbName</code>
   *          using the password <code>DbPassword</code>. If the specified <code>DbUser</code> exists in the database,
   *          the new user name has the same database privileges as the the user named in
   *          <code>DbUser</code>. By default, the user is added to PUBLIC.</p>
   * @public
   */
  dbUser?: string;

  /**
   * <p>A temporary password that authorizes the user name returned by
   *          <code>DbUser</code> to log on to the database <code>DbName</code>.</p>
   * @public
   */
  dbPassword?: string;

  /**
   * <p>The date and time the password in <code>DbPassword</code> expires.</p>
   * @public
   */
  expiration?: Date;

  /**
   * <p>The date and time of when the <code>DbUser</code> and <code>DbPassword</code>
   *          authorization refreshes.</p>
   * @public
   */
  nextRefreshTime?: Date;
}

/**
 * @public
 */
export interface GetCustomDomainAssociationRequest {
  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName: string | undefined;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface GetCustomDomainAssociationResponse {
  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;

  /**
   * <p>The expiration time for the certificate.</p>
   * @public
   */
  customDomainCertificateExpiryTime?: Date;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * <p>The name of the namespace to retrieve information for.</p>
   * @public
   */
  namespaceName: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * <p>The returned namespace object.</p>
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRequest {
  /**
   * <p>The unique identifier of the recovery point to return information for.</p>
   * @public
   */
  recoveryPointId: string | undefined;
}

/**
 * <p>The automatically created recovery point of a namespace.
 *          Recovery points are created every 30 minutes and kept for 24 hours.</p>
 * @public
 */
export interface RecoveryPoint {
  /**
   * <p>The unique identifier of the recovery point.</p>
   * @public
   */
  recoveryPointId?: string;

  /**
   * <p>The time the recovery point is created.</p>
   * @public
   */
  recoveryPointCreateTime?: Date;

  /**
   * <p>The total size of the data in the recovery point in megabytes.</p>
   * @public
   */
  totalSizeInMegaBytes?: number;

  /**
   * <p>The name of the namespace the recovery point is associated with.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The name of the workgroup the recovery point is associated with.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.</p>
   * @public
   */
  namespaceArn?: string;
}

/**
 * @public
 */
export interface GetRecoveryPointResponse {
  /**
   * <p>The returned recovery point object.</p>
   * @public
   */
  recoveryPoint?: RecoveryPoint;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to return.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts.</p>
 * @public
 */
export interface ResourcePolicy {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The resource policy.</p>
   * @public
   */
  policy?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The returned resource policy.</p>
   * @public
   */
  resourcePolicy?: ResourcePolicy;
}

/**
 * @public
 */
export interface GetScheduledActionRequest {
  /**
   * <p>The name of the scheduled action.</p>
   * @public
   */
  scheduledActionName: string | undefined;
}

/**
 * @public
 */
export interface GetScheduledActionResponse {
  /**
   * <p>The returned scheduled action object.</p>
   * @public
   */
  scheduledAction?: ScheduledActionResponse;
}

/**
 * @public
 */
export interface GetSnapshotRequest {
  /**
   * <p>The name of the snapshot to return.</p>
   * @public
   */
  snapshotName?: string;

  /**
   * <p>The owner Amazon Web Services account of a snapshot shared with another user.</p>
   * @public
   */
  ownerAccount?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to return.</p>
   * @public
   */
  snapshotArn?: string;
}

/**
 * @public
 */
export interface GetSnapshotResponse {
  /**
   * <p>The returned snapshot object.</p>
   * @public
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface GetTableRestoreStatusRequest {
  /**
   * <p>The ID of the <code>RestoreTableFromSnapshot</code> request to return status for.</p>
   * @public
   */
  tableRestoreRequestId: string | undefined;
}

/**
 * <p>Contains information about a table restore request.</p>
 * @public
 */
export interface TableRestoreStatus {
  /**
   * <p>The ID of the RestoreTableFromSnapshot request.</p>
   * @public
   */
  tableRestoreRequestId?: string;

  /**
   * <p>A value that describes the current state of the table restore request.
   *          Possible values are <code>SUCCEEDED</code>, <code>FAILED</code>, <code>CANCELED</code>, <code>PENDING</code>, and <code>IN_PROGRESS</code>.</p>
   * @public
   */
  status?: string;

  /**
   * <p>A message that explains the returned status. For example, if the status of the operation is <code>FAILED</code>, the message explains why the operation failed.</p>
   * @public
   */
  message?: string;

  /**
   * <p>The time that the table restore request was made,
   *          in Universal Coordinated Time (UTC).</p>
   * @public
   */
  requestTime?: Date;

  /**
   * <p>The namespace of the table being restored from.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The name of the workgroup being restored from.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The name of the snapshot being restored from.</p>
   * @public
   */
  snapshotName?: string;

  /**
   * <p>The amount of data restored to the new table so far, in megabytes (MB).</p>
   * @public
   */
  progressInMegaBytes?: number;

  /**
   * <p>The total amount of data to restore to the new table, in megabytes (MB).</p>
   * @public
   */
  totalDataInMegaBytes?: number;

  /**
   * <p>The name of the source database being restored from.</p>
   * @public
   */
  sourceDatabaseName?: string;

  /**
   * <p>The name of the source schema being restored from.</p>
   * @public
   */
  sourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored from.</p>
   * @public
   */
  sourceTableName?: string;

  /**
   * <p>The name of the database to restore to.</p>
   * @public
   */
  targetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore to.</p>
   * @public
   */
  targetSchemaName?: string;

  /**
   * <p>The name of the table to create from the restore operation.</p>
   * @public
   */
  newTableName?: string;

  /**
   * <p>The ID of the recovery point being restored from.</p>
   * @public
   */
  recoveryPointId?: string;
}

/**
 * @public
 */
export interface GetTableRestoreStatusResponse {
  /**
   * <p>The returned <code>TableRestoreStatus</code> object that contains information about
   *          the status of your <code>RestoreTableFromSnapshot</code> request.</p>
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus;
}

/**
 * @public
 */
export interface GetUsageLimitRequest {
  /**
   * <p>The unique identifier of the usage limit to return information for.</p>
   * @public
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface GetUsageLimitResponse {
  /**
   * <p>The returned usage limit object.</p>
   * @public
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface GetWorkgroupRequest {
  /**
   * <p>The name of the workgroup to return information for.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkgroupResponse {
  /**
   * <p>The returned workgroup object.</p>
   * @public
   */
  workgroup: Workgroup | undefined;
}

/**
 * <p>The provided pagination token is invalid.</p>
 * @public
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
export interface ListCustomDomainAssociationsRequest {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;
}

/**
 * @public
 */
export interface ListCustomDomainAssociationsResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>A list of Association objects.</p>
   * @public
   */
  associations?: Association[];
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * <p>If your initial <code>ListNamespaces</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListNamespaces</code> operations,
   *          which returns results in the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The list of returned namespaces.</p>
   * @public
   */
  namespaces: Namespace[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsRequest {
  /**
   * <p>If your initial <code>ListRecoveryPoints</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListRecoveryPoints</code> operations,
   *          which returns results in the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The time when the recovery point's creation was initiated.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The time when creation of the recovery point finished.</p>
   * @public
   */
  endTime?: Date;

  /**
   * <p>The name of the namespace to list recovery points for.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list recovery points.</p>
   * @public
   */
  namespaceArn?: string;
}

/**
 * @public
 */
export interface ListRecoveryPointsResponse {
  /**
   * <p>The returned recovery point objects.</p>
   * @public
   */
  recoveryPoints?: RecoveryPoint[];

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListScheduledActionsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. Use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The name of namespace associated with the scheduled action to retrieve.</p>
   * @public
   */
  namespaceName?: string;
}

/**
 * <p>Contains names of objects associated with a scheduled action.</p>
 * @public
 */
export interface ScheduledActionAssociation {
  /**
   * <p>Name of associated Amazon Redshift Serverless namespace.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>Name of associated scheduled action.</p>
   * @public
   */
  scheduledActionName?: string;
}

/**
 * @public
 */
export interface ListScheduledActionsResponse {
  /**
   * <p>If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>All of the returned scheduled action association objects.</p>
   * @public
   */
  scheduledActions?: ScheduledActionAssociation[];
}

/**
 * @public
 */
export interface ListSnapshotCopyConfigurationsRequest {
  /**
   * <p>The namespace from which to list all snapshot copy configurations.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using
   *          the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return. You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSnapshotCopyConfigurationsResponse {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using
   *          the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>All of the returned snapshot copy configurations.</p>
   * @public
   */
  snapshotCopyConfigurations: SnapshotCopyConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsRequest {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The namespace from which to list all snapshots.</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the namespace from which to list all snapshots.</p>
   * @public
   */
  namespaceArn?: string;

  /**
   * <p>The owner Amazon Web Services account of the snapshot.</p>
   * @public
   */
  ownerAccount?: string;

  /**
   * <p>The time when the creation of the snapshot was initiated.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The timestamp showing when the snapshot creation finished.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface ListSnapshotsResponse {
  /**
   * <p>If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>All of the returned snapshot objects.</p>
   * @public
   */
  snapshots?: Snapshot[];
}

/**
 * @public
 */
export interface ListTableRestoreStatusRequest {
  /**
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a nextToken,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will return results on the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to
   *          return. You can use nextToken to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The namespace from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations .</p>
   * @public
   */
  namespaceName?: string;

  /**
   * <p>The workgroup from which to list all of the statuses of <code>RestoreTableFromSnapshot</code> operations.</p>
   * @public
   */
  workgroupName?: string;
}

/**
 * @public
 */
export interface ListTableRestoreStatusResponse {
  /**
   * <p>If your initial <code>ListTableRestoreStatus</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListTableRestoreStatus</code>
   *          operations. This will returns results on the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The array of returned <code>TableRestoreStatus</code> objects.</p>
   * @public
   */
  tableRestoreStatuses?: TableRestoreStatus[];
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to list tags for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A map of the key-value pairs assigned to the resource.</p>
   * @public
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface ListUsageLimitsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the resource whose usage limits you want to list.</p>
   * @public
   */
  resourceArn?: string;

  /**
   * <p>The Amazon Redshift Serverless feature whose limits you want to see.</p>
   * @public
   */
  usageType?: UsageLimitUsageType;

  /**
   * <p>If your initial <code>ListUsageLimits</code> operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following <code>ListUsageLimits</code> operations,
   *          which returns results in the next page.
   *       </p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to get the next page of results. The default is 100.</p>
   * @public
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListUsageLimitsResponse {
  /**
   * <p>An array of returned usage limit objects.</p>
   * @public
   */
  usageLimits?: UsageLimit[];

  /**
   * <p>When <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          Make the call again using the returned token to retrieve the next page.</p>
   * @public
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListWorkgroupsRequest {
  /**
   * <p>If your initial ListWorkgroups operation returns a <code>nextToken</code>,
   *          you can include the returned <code>nextToken</code> in following ListNamespaces operations,
   *          which returns results in the next page.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>An optional parameter that specifies the maximum number of results to return.
   *          You can use <code>nextToken</code> to display the next page of results.</p>
   * @public
   */
  maxResults?: number;

  /**
   * <p>The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.</p>
   * @public
   */
  ownerAccount?: string;
}

/**
 * @public
 */
export interface ListWorkgroupsResponse {
  /**
   * <p>
   *          If <code>nextToken</code> is returned, there are more results available.
   *          The value of <code>nextToken</code> is a unique pagination token for each page.
   *          To retrieve the next page, make the call again using the returned token.</p>
   * @public
   */
  nextToken?: string;

  /**
   * <p>The returned array of workgroups.</p>
   * @public
   */
  workgroups: Workgroup[] | undefined;
}

/**
 * @public
 */
export interface UpdateNamespaceRequest {
  /**
   * <p>The name of the namespace to update. You can't update the name of a namespace once it is created.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The password of the administrator for the first database created in the namespace. This parameter must be updated together
   *       with <code>adminUsername</code>.</p>
   *          <p>You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true. </p>
   * @public
   */
  adminUserPassword?: string;

  /**
   * <p>The username of the administrator for the first database created in the namespace. This parameter must be updated
   *       together with <code>adminUserPassword</code>.</p>
   * @public
   */
  adminUsername?: string;

  /**
   * <p>The ID of the Amazon Web Services Key Management Service key used to encrypt your data.</p>
   * @public
   */
  kmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. This parameter must be updated together
   *       with <code>iamRoles</code>.</p>
   * @public
   */
  defaultIamRoleArn?: string;

  /**
   * <p>A list of IAM roles to associate with the namespace. This parameter must be updated together with <code>defaultIamRoleArn</code>.</p>
   * @public
   */
  iamRoles?: string[];

  /**
   * <p>The types of logs the namespace can export. The export types are <code>userlog</code>, <code>connectionlog</code>, and <code>useractivitylog</code>.</p>
   * @public
   */
  logExports?: LogExport[];

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials.
   *          You can't use <code>adminUserPassword</code> if <code>manageAdminPassword</code> is true.
   *          If <code>manageAdminPassword</code> is false or not set, Amazon Redshift uses
   *          <code>adminUserPassword</code> for the admin user account's password.
   *       </p>
   * @public
   */
  manageAdminPassword?: boolean;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *          You can only use this parameter if <code>manageAdminPassword</code> is true.</p>
   * @public
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface UpdateNamespaceResponse {
  /**
   * <p>A list of tag instances.</p>
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the account to create or update a resource policy for.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.</p>
   *          <p>
   *             <code>"\{\"Version\": \"2012-10-17\", \"Statement\" :
   *             [\{ \"Sid\": \"AllowUserRestoreFromSnapshot\", \"Principal\":\{\"AWS\":
   *             [\"739247239426\"]\}, \"Action\": [\"redshift-serverless:RestoreFromSnapshot\"]
   *             , \"Effect\": \"Allow\" \}]\}"</code>
   *          </p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The policy that was created or updated.</p>
   * @public
   */
  resourcePolicy?: ResourcePolicy;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointRequest {
  /**
   * <p>The unique identifier of the recovery point to restore from.</p>
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * <p>The name of the namespace to restore data into.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the workgroup used to restore data.</p>
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointResponse {
  /**
   * <p>The unique identifier of the recovery point used for the restore.</p>
   * @public
   */
  recoveryPointId?: string;

  /**
   * <p>The namespace that data was restored into.</p>
   * @public
   */
  namespace?: Namespace;
}

/**
 * @public
 */
export interface RestoreTableFromRecoveryPointRequest {
  /**
   * <p>Namespace of the recovery point to restore from.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The workgroup to restore the table to.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The ID of the recovery point to restore the table from.</p>
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   * @public
   */
  sourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   * @public
   */
  sourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored.</p>
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   * @public
   */
  targetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   * @public
   */
  targetSchemaName?: string;

  /**
   * <p>The name of the table to create from the restore operation.</p>
   * @public
   */
  newTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table are case sensitive. If true, the names are case sensitive. If false, the names are not case sensitive. The default is false.</p>
   * @public
   */
  activateCaseSensitiveIdentifier?: boolean;
}

/**
 * @public
 */
export interface RestoreTableFromRecoveryPointResponse {
  /**
   * <p>Contains information about a table restore request.</p>
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus;
}

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * <p>The name of the scheduled action to update to.</p>
   * @public
   */
  scheduledActionName: string | undefined;

  /**
   * <p>A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.</p>
   *          <p>
   *             <code>"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"</code>
   *          </p>
   * @public
   */
  targetAction?: TargetAction;

  /**
   * <p>The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.</p>
   *          <ul>
   *             <li>
   *                <p>Format of at timestamp is <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2016-03-04T17:27:00</code>.</p>
   *             </li>
   *             <li>
   *                <p>Format of cron expression is <code>(Minutes Hours Day-of-month Month Day-of-week Year)</code>. For example, <code>"(0 10 ? * MON *)"</code>. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions">Cron Expressions</a> in the <i>Amazon CloudWatch Events User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  schedule?: Schedule;

  /**
   * <p>The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action.
   *          This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf.
   *          For more information about the IAM role to use with the Amazon Redshift scheduler, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using Identity-Based Policies for
   *             Amazon Redshift</a> in the Amazon Redshift Cluster Management Guide</p>
   * @public
   */
  roleArn?: string;

  /**
   * <p>Specifies whether to enable the scheduled action.</p>
   * @public
   */
  enabled?: boolean;

  /**
   * <p>The descripion of the scheduled action to update to.</p>
   * @public
   */
  scheduledActionDescription?: string;

  /**
   * <p>The start time in UTC of the scheduled action to update to.</p>
   * @public
   */
  startTime?: Date;

  /**
   * <p>The end time in UTC of the scheduled action to update.</p>
   * @public
   */
  endTime?: Date;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * <p>The ScheduledAction object that was updated.</p>
   * @public
   */
  scheduledAction?: ScheduledActionResponse;
}

/**
 * @public
 */
export interface RestoreFromSnapshotRequest {
  /**
   * <p>The name of the namespace to restore the snapshot to.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The name of the workgroup used to restore the snapshot.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the snapshot to restore from. Must not be specified at the same time as <code>snapshotArn</code>.</p>
   * @public
   */
  snapshotName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the snapshot to restore from. Required if restoring from Amazon Redshift Serverless to a provisioned cluster.
   *       Must not be specified at the same time as <code>snapshotName</code>.</p>
   *          <p>The format of the ARN is arn:aws:redshift:&lt;region&gt;:&lt;account_id&gt;:snapshot:&lt;cluster_identifier&gt;/&lt;snapshot_identifier&gt;.</p>
   * @public
   */
  snapshotArn?: string;

  /**
   * <p>The Amazon Web Services account that owns the snapshot.</p>
   * @public
   */
  ownerAccount?: string;

  /**
   * <p>If <code>true</code>, Amazon Redshift uses Secrets Manager to manage the restored
   *          snapshot's admin credentials. If <code>MmanageAdminPassword</code> is false or not set,
   *          Amazon Redshift uses the admin credentials that the namespace or cluster
   *          had at the time the snapshot was taken.</p>
   * @public
   */
  manageAdminPassword?: boolean;

  /**
   * <p>The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.</p>
   * @public
   */
  adminPasswordSecretKmsKeyId?: string;
}

/**
 * @public
 */
export interface RestoreFromSnapshotResponse {
  /**
   * <p>The name of the snapshot used to restore the namespace.</p>
   * @public
   */
  snapshotName?: string;

  /**
   * <p>The owner Amazon Web Services; account of the snapshot that was restored.</p>
   * @public
   */
  ownerAccount?: string;

  /**
   * <p>A collection of database objects and users.</p>
   * @public
   */
  namespace?: Namespace;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotRequest {
  /**
   * <p>The namespace of the snapshot to restore from.</p>
   * @public
   */
  namespaceName: string | undefined;

  /**
   * <p>The workgroup to restore the table to.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The name of the snapshot to restore the table from.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>The name of the source database that contains the table being restored.</p>
   * @public
   */
  sourceDatabaseName: string | undefined;

  /**
   * <p>The name of the source schema that contains the table being restored.</p>
   * @public
   */
  sourceSchemaName?: string;

  /**
   * <p>The name of the source table being restored.</p>
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * <p>The name of the database to restore the table to.</p>
   * @public
   */
  targetDatabaseName?: string;

  /**
   * <p>The name of the schema to restore the table to.</p>
   * @public
   */
  targetSchemaName?: string;

  /**
   * <p>The name of the table to create from the restore operation.</p>
   * @public
   */
  newTableName: string | undefined;

  /**
   * <p>Indicates whether name identifiers for database, schema, and table
   *          are case sensitive. If true, the names are case sensitive. If
   *          false, the names are not case sensitive. The default is false.</p>
   * @public
   */
  activateCaseSensitiveIdentifier?: boolean;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotResponse {
  /**
   * <p>The TableRestoreStatus object that contains the status of the restore operation.</p>
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * <p>The name of the snapshot.</p>
   * @public
   */
  snapshotName: string | undefined;

  /**
   * <p>The new retention period of the snapshot.</p>
   * @public
   */
  retentionPeriod?: number;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * <p>The updated snapshot object.</p>
   * @public
   */
  snapshot?: Snapshot;
}

/**
 * @public
 */
export interface UpdateSnapshotCopyConfigurationRequest {
  /**
   * <p>The ID of the snapshot copy configuration to update.</p>
   * @public
   */
  snapshotCopyConfigurationId: string | undefined;

  /**
   * <p>The new retention period of how long to keep a snapshot in the destination Amazon Web Services Region.</p>
   * @public
   */
  snapshotRetentionPeriod?: number;
}

/**
 * @public
 */
export interface UpdateSnapshotCopyConfigurationResponse {
  /**
   * <p>The updated snapshot copy configuration object.</p>
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The map of the key-value pairs used to tag the resource.</p>
   * @public
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove tags from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag or set of tags to remove from the resource.</p>
   * @public
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
export interface UpdateCustomDomainAssociationRequest {
  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName: string | undefined;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN). This is optional.</p>
   * @public
   */
  customDomainCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomDomainAssociationResponse {
  /**
   * <p>The custom domain name associated with the workgroup.</p>
   * @public
   */
  customDomainName?: string;

  /**
   * <p>The name of the workgroup associated with the database.</p>
   * @public
   */
  workgroupName?: string;

  /**
   * <p>The custom domain name’s certificate Amazon resource name (ARN).</p>
   * @public
   */
  customDomainCertificateArn?: string;

  /**
   * <p>The expiration time for the certificate.</p>
   * @public
   */
  customDomainCertificateExpiryTime?: Date;
}

/**
 * @public
 */
export interface UpdateUsageLimitRequest {
  /**
   * <p>The identifier of the usage limit to update.</p>
   * @public
   */
  usageLimitId: string | undefined;

  /**
   * <p>The new limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour.
   *          If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing.
   *          The value must be a positive number.</p>
   * @public
   */
  amount?: number;

  /**
   * <p>The new action that Amazon Redshift Serverless takes when the limit is reached.</p>
   * @public
   */
  breachAction?: UsageLimitBreachAction;
}

/**
 * @public
 */
export interface UpdateUsageLimitResponse {
  /**
   * <p>The updated usage limit object.</p>
   * @public
   */
  usageLimit?: UsageLimit;
}

/**
 * @public
 */
export interface UpdateWorkgroupRequest {
  /**
   * <p>The name of the workgroup to update. You can't update the name of a workgroup once it is created.</p>
   * @public
   */
  workgroupName: string | undefined;

  /**
   * <p>The new base data warehouse capacity in Redshift Processing Units (RPUs).</p>
   * @public
   */
  baseCapacity?: number;

  /**
   * <p>The value that specifies whether to turn on enhanced virtual
   *          private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.</p>
   * @public
   */
  enhancedVpcRouting?: boolean;

  /**
   * <p>An array of parameters to set for advanced control over a database. The
   *          options are <code>auto_mv</code>, <code>datestyle</code>, <code>enable_case_sensitive_identifier</code>, <code>enable_user_activity_logging</code>,
   *          <code>query_group</code>, <code>search_path</code>, <code>require_ssl</code>, <code>use_fips_ssl</code>, and query monitoring metrics that let you
   *          define performance boundaries. For more information about query monitoring rules and available metrics, see
   *          <a href="https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless">
   *             Query monitoring metrics for Amazon Redshift Serverless</a>.</p>
   * @public
   */
  configParameters?: ConfigParameter[];

  /**
   * <p>A value that specifies whether the workgroup can be accessible from a public network.</p>
   * @public
   */
  publiclyAccessible?: boolean;

  /**
   * <p>An array of VPC subnet IDs to associate with the workgroup.</p>
   * @public
   */
  subnetIds?: string[];

  /**
   * <p>An array of security group IDs to associate with the workgroup.</p>
   * @public
   */
  securityGroupIds?: string[];

  /**
   * <p>The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.</p>
   * @public
   */
  port?: number;

  /**
   * <p>The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.</p>
   * @public
   */
  maxCapacity?: number;
}

/**
 * @public
 */
export interface UpdateWorkgroupResponse {
  /**
   * <p>The updated workgroup object.</p>
   * @public
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
