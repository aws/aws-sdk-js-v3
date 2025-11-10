// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SsmSapServiceException as __BaseException } from "./SsmSapServiceException";

/**
 * @public
 * @enum
 */
export const AllocationType = {
  ELASTIC_IP: "ELASTIC_IP",
  OVERLAY: "OVERLAY",
  UNKNOWN: "UNKNOWN",
  VPC_SUBNET: "VPC_SUBNET",
} as const;

/**
 * @public
 */
export type AllocationType = (typeof AllocationType)[keyof typeof AllocationType];

/**
 * @public
 * @enum
 */
export const ApplicationDiscoveryStatus = {
  DELETING: "DELETING",
  REFRESH_FAILED: "REFRESH_FAILED",
  REGISTERING: "REGISTERING",
  REGISTRATION_FAILED: "REGISTRATION_FAILED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ApplicationDiscoveryStatus = (typeof ApplicationDiscoveryStatus)[keyof typeof ApplicationDiscoveryStatus];

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  ACTIVATED: "ACTIVATED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  REGISTERING: "REGISTERING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

/**
 * @public
 * @enum
 */
export const ApplicationType = {
  HANA: "HANA",
  SAP_ABAP: "SAP_ABAP",
} as const;

/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * <p>An SAP application registered with AWS Systems Manager for SAP.</p>
 * @public
 */
export interface Application {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  Type?: ApplicationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Application Registry.</p>
   * @public
   */
  AppRegistryArn?: string | undefined;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  Status?: ApplicationStatus | undefined;

  /**
   * <p>The latest discovery result for the application.</p>
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus | undefined;

  /**
   * <p>The components of the application.</p>
   * @public
   */
  Components?: string[] | undefined;

  /**
   * <p>The time at which the application was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The Amazon Resource Names of the associated AWS Systems Manager for SAP applications.</p>
   * @public
   */
  AssociatedApplicationArns?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CredentialType = {
  ADMIN: "ADMIN",
} as const;

/**
 * @public
 */
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType];

/**
 * <p>The credentials of your SAP application.</p>
 * @public
 */
export interface ApplicationCredential {
  /**
   * <p>The name of the SAP HANA database.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The type of the application credentials. </p>
   * @public
   */
  CredentialType: CredentialType | undefined;

  /**
   * <p>The secret ID created in AWS Secrets Manager to store the credentials of the SAP application. </p>
   * @public
   */
  SecretId: string | undefined;
}

/**
 * <p>The summary of the SAP application registered with AWS Systems Manager for SAP. </p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The status of the latest discovery.</p>
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus | undefined;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  Type?: ApplicationType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The tags on the application.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Provides information of the IP address.</p>
 * @public
 */
export interface IpAddressMember {
  /**
   * <p>The IP address.</p>
   * @public
   */
  IpAddress?: string | undefined;

  /**
   * <p>The primary IP address.</p>
   * @public
   */
  Primary?: boolean | undefined;

  /**
   * <p>The type of allocation for the IP address.</p>
   * @public
   */
  AllocationType?: AllocationType | undefined;
}

/**
 * <p>Describes the properties of the associated host.</p>
 * @public
 */
export interface AssociatedHost {
  /**
   * <p>The name of the host.</p>
   * @public
   */
  Hostname?: string | undefined;

  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * <p>The IP addresses of the associated host.</p>
   * @public
   */
  IpAddresses?: IpAddressMember[] | undefined;

  /**
   * <p>The version of the operating system.</p>
   * @public
   */
  OsVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BackintMode = {
  AWSBackup: "AWSBackup",
} as const;

/**
 * @public
 */
export type BackintMode = (typeof BackintMode)[keyof typeof BackintMode];

/**
 * <p>Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP HANA database with AWS Backup or Amazon S3.</p>
 * @public
 */
export interface BackintConfig {
  /**
   * <p>AWS service for your database backup.</p>
   * @public
   */
  BackintMode: BackintMode | undefined;

  /**
   * <p/>
   * @public
   */
  EnsureNoBackupInProcess: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ClusterStatus = {
  MAINTENANCE: "MAINTENANCE",
  NONE: "NONE",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  STANDBY: "STANDBY",
} as const;

/**
 * @public
 */
export type ClusterStatus = (typeof ClusterStatus)[keyof typeof ClusterStatus];

/**
 * @public
 * @enum
 */
export const ComponentType = {
  ABAP: "ABAP",
  ASCS: "ASCS",
  DIALOG: "DIALOG",
  ERS: "ERS",
  HANA: "HANA",
  HANA_NODE: "HANA_NODE",
  WD: "WD",
  WEBDISP: "WEBDISP",
} as const;

/**
 * @public
 */
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];

/**
 * @public
 * @enum
 */
export const DatabaseConnectionMethod = {
  DIRECT: "DIRECT",
  OVERLAY: "OVERLAY",
} as const;

/**
 * @public
 */
export type DatabaseConnectionMethod = (typeof DatabaseConnectionMethod)[keyof typeof DatabaseConnectionMethod];

/**
 * <p>The connection specifications for the database.</p>
 * @public
 */
export interface DatabaseConnection {
  /**
   * <p>The method of connection.</p>
   * @public
   */
  DatabaseConnectionMethod?: DatabaseConnectionMethod | undefined;

  /**
   * <p>The Amazon Resource Name of the connected SAP HANA database.</p>
   * @public
   */
  DatabaseArn?: string | undefined;

  /**
   * <p>The IP address for connection.</p>
   * @public
   */
  ConnectionIp?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HostRole = {
  LEADER: "LEADER",
  STANDBY: "STANDBY",
  UNKNOWN: "UNKNOWN",
  WORKER: "WORKER",
} as const;

/**
 * @public
 */
export type HostRole = (typeof HostRole)[keyof typeof HostRole];

/**
 * <p>Describes the properties of the Dedicated Host. </p>
 * @public
 */
export interface Host {
  /**
   * <p>The name of the Dedicated Host.</p>
   * @public
   */
  HostName?: string | undefined;

  /**
   * <p>The IP address of the Dedicated Host. </p>
   * @public
   */
  HostIp?: string | undefined;

  /**
   * <p>The ID of Amazon EC2 instance.</p>
   * @public
   */
  EC2InstanceId?: string | undefined;

  /**
   * <p>The instance ID of the instance on the Dedicated Host.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The role of the Dedicated Host.</p>
   * @public
   */
  HostRole?: HostRole | undefined;

  /**
   * <p>The version of the operating system.</p>
   * @public
   */
  OsVersion?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationMode = {
  DELTA_DATASHIPPING: "DELTA_DATASHIPPING",
  LOGREPLAY: "LOGREPLAY",
  LOGREPLAY_READACCESS: "LOGREPLAY_READACCESS",
  NONE: "NONE",
  PRIMARY: "PRIMARY",
} as const;

/**
 * @public
 */
export type OperationMode = (typeof OperationMode)[keyof typeof OperationMode];

/**
 * @public
 * @enum
 */
export const ReplicationMode = {
  ASYNC: "ASYNC",
  NONE: "NONE",
  PRIMARY: "PRIMARY",
  SYNC: "SYNC",
  SYNCMEM: "SYNCMEM",
} as const;

/**
 * @public
 */
export type ReplicationMode = (typeof ReplicationMode)[keyof typeof ReplicationMode];

/**
 * <p>Details of the SAP HANA system replication for the instance.</p>
 * @public
 */
export interface Resilience {
  /**
   * <p>The tier of the component.</p>
   * @public
   */
  HsrTier?: string | undefined;

  /**
   * <p>The replication mode of the component.</p>
   * @public
   */
  HsrReplicationMode?: ReplicationMode | undefined;

  /**
   * <p>The operation mode of the component.</p>
   * @public
   */
  HsrOperationMode?: OperationMode | undefined;

  /**
   * <p>The cluster status of the component.</p>
   * @public
   */
  ClusterStatus?: ClusterStatus | undefined;

  /**
   * <p>Indicates if or not enqueue replication is enabled for the ASCS component.</p>
   * @public
   */
  EnqueueReplication?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ComponentStatus = {
  ACTIVATED: "ACTIVATED",
  RUNNING: "RUNNING",
  RUNNING_WITH_ERROR: "RUNNING_WITH_ERROR",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  UNDEFINED: "UNDEFINED",
} as const;

/**
 * @public
 */
export type ComponentStatus = (typeof ComponentStatus)[keyof typeof ComponentStatus];

/**
 * <p>The SAP component of your application.</p>
 * @public
 */
export interface Component {
  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The SAP System Identifier of the application component.</p>
   * @public
   */
  Sid?: string | undefined;

  /**
   * <p>The SAP system number of the application component.</p>
   * @public
   */
  SystemNumber?: string | undefined;

  /**
   * <p>The parent component of a highly available environment. For example, in a highly available SAP on AWS workload, the parent component consists of the entire setup, including the child components.</p>
   * @public
   */
  ParentComponent?: string | undefined;

  /**
   * <p>The child components of a highly available environment. For example, in a highly available SAP on AWS workload, the child component consists of the primary and secondar instances.</p>
   * @public
   */
  ChildComponents?: string[] | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The type of the component.</p>
   * @public
   */
  ComponentType?: ComponentType | undefined;

  /**
   * <p>The status of the component.</p> <ul> <li> <p>ACTIVATED - this status has been deprecated.</p> </li> <li> <p>STARTING - the component is in the process of being started.</p> </li> <li> <p>STOPPED - the component is not running.</p> </li> <li> <p>STOPPING - the component is in the process of being stopped.</p> </li> <li> <p>RUNNING - the component is running.</p> </li> <li> <p>RUNNING_WITH_ERROR - one or more child component(s) of the parent component is not running. Call <a href="https://docs.aws.amazon.com/ssmsap/latest/APIReference/API_GetComponent.html"> <code>GetComponent</code> </a> to review the status of each child component.</p> </li> <li> <p>UNDEFINED - AWS Systems Manager for SAP cannot provide the component status based on the discovered information. Verify your SAP application.</p> </li> </ul>
   * @public
   */
  Status?: ComponentStatus | undefined;

  /**
   * <p>The hostname of the component.</p>
   * @public
   */
  SapHostname?: string | undefined;

  /**
   * <p>The SAP feature of the component.</p>
   * @public
   */
  SapFeature?: string | undefined;

  /**
   * <p>The kernel version of the component.</p>
   * @public
   */
  SapKernelVersion?: string | undefined;

  /**
   * <p>The SAP HANA version of the component.</p>
   * @public
   */
  HdbVersion?: string | undefined;

  /**
   * <p>Details of the SAP HANA system replication for the component.</p>
   * @public
   */
  Resilience?: Resilience | undefined;

  /**
   * <p>The associated host of the component.</p>
   * @public
   */
  AssociatedHost?: AssociatedHost | undefined;

  /**
   * <p>The SAP HANA databases of the component.</p>
   * @public
   */
  Databases?: string[] | undefined;

  /**
   * <p>The hosts of the component.</p>
   *
   * @deprecated This shape is no longer used. Please use AssociatedHost.
   * @public
   */
  Hosts?: Host[] | undefined;

  /**
   * <p>The primary host of the component.</p>
   *
   * @deprecated This shape is no longer used. Please use AssociatedHost.
   * @public
   */
  PrimaryHost?: string | undefined;

  /**
   * <p>The connection specifications for the database of the component.</p>
   * @public
   */
  DatabaseConnection?: DatabaseConnection | undefined;

  /**
   * <p>The time at which the component was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>This is information about the component of your SAP application, such as Web Dispatcher.</p>
 * @public
 */
export interface ComponentInfo {
  /**
   * <p>This string is the type of the component.</p> <p>Accepted value is <code>WD</code>.</p>
   * @public
   */
  ComponentType: ComponentType | undefined;

  /**
   * <p>This string is the SAP System ID of the component.</p> <p>Accepted values are alphanumeric.</p>
   * @public
   */
  Sid: string | undefined;

  /**
   * <p>This is the Amazon EC2 instance on which your SAP component is running.</p> <p>Accepted values are alphanumeric.</p>
   * @public
   */
  Ec2InstanceId: string | undefined;
}

/**
 * <p>The summary of the component.</p>
 * @public
 */
export interface ComponentSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The type of the component.</p>
   * @public
   */
  ComponentType?: ComponentType | undefined;

  /**
   * <p>The tags of the component.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the component summary.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationCheckType = {
  SAP_CHECK_01: "SAP_CHECK_01",
  SAP_CHECK_02: "SAP_CHECK_02",
  SAP_CHECK_03: "SAP_CHECK_03",
} as const;

/**
 * @public
 */
export type ConfigurationCheckType = (typeof ConfigurationCheckType)[keyof typeof ConfigurationCheckType];

/**
 * <p>Represents a configuration check definition supported by AWS Systems Manager for SAP.</p>
 * @public
 */
export interface ConfigurationCheckDefinition {
  /**
   * <p>The unique identifier of the configuration check.</p>
   * @public
   */
  Id?: ConfigurationCheckType | undefined;

  /**
   * <p>The name of the configuration check.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of what the configuration check validates.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The list of SSMSAP application types that this configuration check can be evaluated against.</p>
   * @public
   */
  ApplicableApplicationTypes?: ApplicationType[] | undefined;
}

/**
 * <p>A summary of rule results, providing counts for each status type.</p>
 * @public
 */
export interface RuleStatusCounts {
  /**
   * <p>The number of rules that failed.</p>
   * @public
   */
  Failed?: number | undefined;

  /**
   * <p>The number of rules that returned warnings.</p>
   * @public
   */
  Warning?: number | undefined;

  /**
   * <p>The number of rules that returned informational results.</p>
   * @public
   */
  Info?: number | undefined;

  /**
   * <p>The number of rules that passed.</p>
   * @public
   */
  Passed?: number | undefined;

  /**
   * <p>The number of rules with unknown status.</p>
   * @public
   */
  Unknown?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationStatus = {
  ERROR: "ERROR",
  INPROGRESS: "INPROGRESS",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type OperationStatus = (typeof OperationStatus)[keyof typeof OperationStatus];

/**
 * <p>Represents a configuration check operation that has been executed against an application.</p>
 * @public
 */
export interface ConfigurationCheckOperation {
  /**
   * <p>The unique identifier of the configuration check operation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ID of the application against which the configuration check was performed.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The current status of the configuration check operation.</p>
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * <p>A message providing additional details about the status of the configuration check operation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The unique identifier of the configuration check that was performed.</p>
   * @public
   */
  ConfigurationCheckId?: ConfigurationCheckType | undefined;

  /**
   * <p>The name of the configuration check that was performed.</p>
   * @public
   */
  ConfigurationCheckName?: string | undefined;

  /**
   * <p>A description of the configuration check that was performed.</p>
   * @public
   */
  ConfigurationCheckDescription?: string | undefined;

  /**
   * <p>The time at which the configuration check operation started.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The time at which the configuration check operation completed.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>A summary of all the rule results, showing counts for each status type.</p>
   * @public
   */
  RuleStatusCounts?: RuleStatusCounts | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationCheckOperationListingMode = {
  ALL_OPERATIONS: "ALL_OPERATIONS",
  LATEST_PER_CHECK: "LATEST_PER_CHECK",
} as const;

/**
 * @public
 */
export type ConfigurationCheckOperationListingMode =
  (typeof ConfigurationCheckOperationListingMode)[keyof typeof ConfigurationCheckOperationListingMode];

/**
 * <p>A conflict has occurred.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ConnectedEntityType = {
  DBMS: "DBMS",
} as const;

/**
 * @public
 */
export type ConnectedEntityType = (typeof ConnectedEntityType)[keyof typeof ConnectedEntityType];

/**
 * @public
 * @enum
 */
export const DatabaseType = {
  SYSTEM: "SYSTEM",
  TENANT: "TENANT",
} as const;

/**
 * @public
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

/**
 * @public
 * @enum
 */
export const DatabaseStatus = {
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type DatabaseStatus = (typeof DatabaseStatus)[keyof typeof DatabaseStatus];

/**
 * <p>The SAP HANA database of the application registered with AWS Systems Manager for SAP.</p>
 * @public
 */
export interface Database {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The credentials of the database.</p>
   * @public
   */
  Credentials?: ApplicationCredential[] | undefined;

  /**
   * <p>The ID of the SAP HANA database.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>The type of the database.</p>
   * @public
   */
  DatabaseType?: DatabaseType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The status of the database.</p>
   * @public
   */
  Status?: DatabaseStatus | undefined;

  /**
   * <p>The primary host of the database.</p>
   * @public
   */
  PrimaryHost?: string | undefined;

  /**
   * <p>The SQL port of the database.</p>
   * @public
   */
  SQLPort?: number | undefined;

  /**
   * <p>The time at which the database was last updated.</p>
   * @public
   */
  LastUpdated?: Date | undefined;

  /**
   * <p>The Amazon Resource Names of the connected AWS Systems Manager for SAP components.</p>
   * @public
   */
  ConnectedComponentArns?: string[] | undefined;
}

/**
 * <p>The summary of the database.</p>
 * @public
 */
export interface DatabaseSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The ID of the database.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The type of the database.</p>
   * @public
   */
  DatabaseType?: DatabaseType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The tags of the database.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const PermissionActionType = {
  RESTORE: "RESTORE",
} as const;

/**
 * @public
 */
export type PermissionActionType = (typeof PermissionActionType)[keyof typeof PermissionActionType];

/**
 * @public
 */
export interface DeleteResourcePermissionInput {
  /**
   * <p>Delete or restore the permissions on the target database.</p>
   * @public
   */
  ActionType?: PermissionActionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source resource.</p>
   * @public
   */
  SourceResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePermissionOutput {
  /**
   * <p>The policy that removes permissions on the target database.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * <p>An internal error has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The resource is not available.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeregisterApplicationInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterApplicationOutput {}

/**
 * <p>The request is not authorized.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQUALS: "Equals",
  GREATER_THAN_OR_EQUALS: "GreaterThanOrEquals",
  LESS_THAN_OR_EQUALS: "LessThanOrEquals",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * <p>A specific result obtained by specifying the name, value, and operator. </p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for a filter, the values are joined with an OR, and the request returns all results that match any of the specified values</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The operator for the filter. </p>
   * @public
   */
  Operator: FilterOperator | undefined;
}

/**
 * @public
 */
export interface GetApplicationInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application registry.</p>
   * @public
   */
  AppRegistryArn?: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationOutput {
  /**
   * <p>Returns all of the metadata of an application registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Application?: Application | undefined;

  /**
   * <p>The tags of a registered application.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * <p>The component of an application registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Component?: Component | undefined;

  /**
   * <p>The tags of a component.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetConfigurationCheckOperationInput {
  /**
   * <p>The ID of the configuration check operation.</p>
   * @public
   */
  OperationId: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationCheckOperationOutput {
  /**
   * <p>Returns the details of a configuration check operation.</p>
   * @public
   */
  ConfigurationCheckOperation?: ConfigurationCheckOperation | undefined;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The ID of the database.</p>
   * @public
   */
  DatabaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  DatabaseArn?: string | undefined;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * <p>The SAP HANA database of an application registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Database?: Database | undefined;

  /**
   * <p>The tags of a database.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetOperationInput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId: string | undefined;
}

/**
 * <p>The operations performed by AWS Systems Manager for SAP.</p>
 * @public
 */
export interface Operation {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The type of the operation.</p>
   * @public
   */
  Type?: string | undefined;

  /**
   * <p>The status of the operation.</p>
   * @public
   */
  Status?: OperationStatus | undefined;

  /**
   * <p>The status message of the operation.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The properties of the operation.</p>
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * <p>The resource type of the operation.</p>
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * <p>The resource ID of the operation.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the operation.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The start time of the operation.</p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The end time of the operation.</p>
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * <p>The time at which the operation was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetOperationOutput {
  /**
   * <p>Returns the details of an operation.</p>
   * @public
   */
  Operation?: Operation | undefined;
}

/**
 * @public
 */
export interface GetResourcePermissionInput {
  /**
   * <p/>
   * @public
   */
  ActionType?: PermissionActionType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePermissionOutput {
  /**
   * <p/>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The filter of name, value, and operator.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * <p>The applications registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Applications?: ApplicationSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p> <p>If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * <p>List of components registered with AWS System Manager for SAP.</p>
   * @public
   */
  Components?: ComponentSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckDefinitionsInput {
  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckDefinitionsOutput {
  /**
   * <p>The configuration check types supported by AWS Systems Manager for SAP.</p>
   * @public
   */
  ConfigurationChecks?: ConfigurationCheckDefinition[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckOperationsInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The mode for listing configuration check operations. Defaults to "LATEST_PER_CHECK".</p> <ul> <li> <p>LATEST_PER_CHECK - Will list the latest configuration check operation per check type.</p> </li> <li> <p>ALL_OPERATIONS - Will list all configuration check operations performed on the application.</p> </li> </ul>
   * @public
   */
  ListMode?: ConfigurationCheckOperationListingMode | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters of an operation.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationCheckOperationsOutput {
  /**
   * <p>The configuration check operations performed by AWS Systems Manager for SAP.</p>
   * @public
   */
  ConfigurationCheckOperations?: ConfigurationCheckOperation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string | undefined;

  /**
   * <p>The token for the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * <p>The SAP HANA databases of an application.</p>
   * @public
   */
  Databases?: DatabaseSummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOperationEventsInput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p> <p>If you do not specify a value for <code>MaxResults</code>, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Optionally specify filters to narrow the returned operation event items.</p> <p>Valid filter names include <code>status</code>, <code>resourceID</code>, and <code>resourceType</code>. The valid operator for all three filters is <code>Equals</code>.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>The resource contains a <code>ResourceArn</code> and the <code>ResourceType</code>.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source resource.</p> <p>Example of <code>ResourceArn</code>: "<code>arn:aws:ec2:us-east-1:111111111111:instance/i-abcdefgh987654321</code>"</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The resource type.</p> <p>Example of <code>ResourceType</code>: "<code>AWS::SystemsManagerSAP::Component</code>" or "<code>AWS::EC2::Instance</code>".</p>
   * @public
   */
  ResourceType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OperationEventStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type OperationEventStatus = (typeof OperationEventStatus)[keyof typeof OperationEventStatus];

/**
 * <p>An operation event returns details for an operation, including key milestones which can be used to monitor and track operations in progress.</p> <p>Operation events contain:</p> <ul> <li> <p>Description string</p> </li> <li> <p>Resource, including its ARN and type</p> </li> <li> <p>Status</p> </li> <li> <p>StatusMessage string</p> </li> <li> <p>TimeStamp</p> </li> </ul> <p>Operation event examples include StartApplication or StopApplication.</p>
 * @public
 */
export interface OperationEvent {
  /**
   * <p>A description of the operation event. For example, "Stop the EC2 instance i-abcdefgh987654321".</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The resource involved in the operations event.</p> <p>Contains <code>ResourceArn</code> ARN and <code>ResourceType</code>.</p>
   * @public
   */
  Resource?: Resource | undefined;

  /**
   * <p>The status of the operation event. The possible statuses are: <code>IN_PROGRESS</code>, <code>COMPLETED</code>, and <code>FAILED</code>.</p>
   * @public
   */
  Status?: OperationEventStatus | undefined;

  /**
   * <p>The status message relating to a specific operation event.</p>
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * <p>The timestamp of the specified operation event.</p>
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface ListOperationEventsOutput {
  /**
   * <p>A returned list of operation events that meet the filter criteria.</p>
   * @public
   */
  OperationEvents?: OperationEvent[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListOperationsInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value. If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The filters of an operation.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * @public
 */
export interface ListOperationsOutput {
  /**
   * <p>List of operations performed by AWS Systems Manager for SAP.</p>
   * @public
   */
  Operations?: Operation[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubCheckResultsInput {
  /**
   * <p>The ID of the configuration check operation.</p>
   * @public
   */
  OperationId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the result of a sub-check within a configuration check operation.</p>
 * @public
 */
export interface SubCheckResult {
  /**
   * <p>The unique identifier of the sub-check result.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the sub-check.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of what the sub-check validates.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of references or documentation links related to the sub-check.</p>
   * @public
   */
  References?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSubCheckResultsOutput {
  /**
   * <p>The sub-check results of a configuration check operation.</p>
   * @public
   */
  SubCheckResults?: SubCheckResult[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubCheckRuleResultsInput {
  /**
   * <p>The ID of the sub check result.</p>
   * @public
   */
  SubCheckResultId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleResultStatus = {
  FAILED: "FAILED",
  INFO: "INFO",
  PASSED: "PASSED",
  UNKNOWN: "UNKNOWN",
  WARNING: "WARNING",
} as const;

/**
 * @public
 */
export type RuleResultStatus = (typeof RuleResultStatus)[keyof typeof RuleResultStatus];

/**
 * <p>Represents the result of a single rule within a configuration check.</p>
 * @public
 */
export interface RuleResult {
  /**
   * <p>The unique identifier of the rule result.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>A description of what the rule validates.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the rule result.</p>
   * @public
   */
  Status?: RuleResultStatus | undefined;

  /**
   * <p>A message providing details about the rule result.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>Additional metadata associated with the rule result.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListSubCheckRuleResultsOutput {
  /**
   * <p>The rule results of a sub-check belonging to a configuration check operation.</p>
   * @public
   */
  RuleResults?: RuleResult[] | undefined;

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p/>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutResourcePermissionInput {
  /**
   * <p/>
   * @public
   */
  ActionType: PermissionActionType | undefined;

  /**
   * <p/>
   * @public
   */
  SourceResourceArn: string | undefined;

  /**
   * <p/>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePermissionOutput {
  /**
   * <p/>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface RegisterApplicationInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  ApplicationType: ApplicationType | undefined;

  /**
   * <p>The Amazon EC2 instances on which your SAP application is running.</p>
   * @public
   */
  Instances: string[] | undefined;

  /**
   * <p>The SAP instance number of the application.</p>
   * @public
   */
  SapInstanceNumber?: string | undefined;

  /**
   * <p>The System ID of the application.</p>
   * @public
   */
  Sid?: string | undefined;

  /**
   * <p>The tags to be attached to the SAP application.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The credentials of the SAP application.</p>
   * @public
   */
  Credentials?: ApplicationCredential[] | undefined;

  /**
   * <p>The Amazon Resource Name of the SAP HANA database.</p>
   * @public
   */
  DatabaseArn?: string | undefined;

  /**
   * <p>This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.</p> <p>This is an array of ApplicationComponent objects. You may input 0 to 5 items.</p>
   * @public
   */
  ComponentsInfo?: ComponentInfo[] | undefined;
}

/**
 * @public
 */
export interface RegisterApplicationOutput {
  /**
   * <p>The application registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Application?: Application | undefined;

  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationOutput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRefreshInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRefreshOutput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface StartConfigurationChecksInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The list of configuration checks to perform.</p>
   * @public
   */
  ConfigurationCheckIds?: ConfigurationCheckType[] | undefined;
}

/**
 * @public
 */
export interface StartConfigurationChecksOutput {
  /**
   * <p>The configuration check operations that were started.</p>
   * @public
   */
  ConfigurationCheckOperations?: ConfigurationCheckOperation[] | undefined;
}

/**
 * @public
 */
export interface StopApplicationInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Specify the <code>ConnectedEntityType</code>. Accepted type is <code>DBMS</code>.</p> <p>If this parameter is included, the connected DBMS (Database Management System) will be stopped.</p>
   * @public
   */
  StopConnectedEntity?: ConnectedEntityType | undefined;

  /**
   * <p>Boolean. If included and if set to <code>True</code>, the StopApplication operation will shut down the associated Amazon EC2 instance in addition to the application.</p>
   * @public
   */
  IncludeEc2InstanceShutdown?: boolean | undefined;
}

/**
 * @public
 */
export interface StopApplicationOutput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags on a resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Adds/updates or removes credentials for applications registered with AWS Systems Manager for SAP.</p>
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
export interface UpdateApplicationSettingsInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>The credentials to be added or updated.</p>
   * @public
   */
  CredentialsToAddOrUpdate?: ApplicationCredential[] | undefined;

  /**
   * <p>The credentials to be removed.</p>
   * @public
   */
  CredentialsToRemove?: ApplicationCredential[] | undefined;

  /**
   * <p>Installation of AWS Backint Agent for SAP HANA.</p>
   * @public
   */
  Backint?: BackintConfig | undefined;

  /**
   * <p>The Amazon Resource Name of the SAP HANA database that replaces the current SAP HANA connection with the SAP_ABAP application.</p>
   * @public
   */
  DatabaseArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsOutput {
  /**
   * <p>The update message.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The IDs of the operations.</p>
   * @public
   */
  OperationIds?: string[] | undefined;
}
