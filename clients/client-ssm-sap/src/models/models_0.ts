// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

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
  Id?: string;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  Type?: ApplicationType;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Application Registry.</p>
   * @public
   */
  AppRegistryArn?: string;

  /**
   * <p>The status of the application.</p>
   * @public
   */
  Status?: ApplicationStatus;

  /**
   * <p>The latest discovery result for the application.</p>
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus;

  /**
   * <p>The components of the application.</p>
   * @public
   */
  Components?: string[];

  /**
   * <p>The time at which the application was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The status message.</p>
   * @public
   */
  StatusMessage?: string;
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
   * <p>The secret ID created in AWS Secrets Manager to store the credentials of the SAP
   *          application. </p>
   * @public
   */
  SecretId: string | undefined;
}

/**
 * <p>The summary of the SAP application registered with AWS Systems Manager for SAP.
 *       </p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The status of the latest discovery.</p>
   * @public
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus;

  /**
   * <p>The type of the application.</p>
   * @public
   */
  Type?: ApplicationType;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The tags on the application.</p>
   * @public
   */
  Tags?: Record<string, string>;
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
  IpAddress?: string;

  /**
   * <p>The primary IP address.</p>
   * @public
   */
  Primary?: boolean;

  /**
   * <p>The type of allocation for the IP address.</p>
   * @public
   */
  AllocationType?: AllocationType;
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
  Hostname?: string;

  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   * @public
   */
  Ec2InstanceId?: string;

  /**
   * <p>The IP addresses of the associated host.</p>
   * @public
   */
  IpAddresses?: IpAddressMember[];

  /**
   * <p>The version of the operating system.</p>
   * @public
   */
  OsVersion?: string;
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
 * <p>Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP
 *          HANA database with AWS Backup or Amazon S3.</p>
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
  DatabaseConnectionMethod?: DatabaseConnectionMethod;

  /**
   * <p>The Amazon Resource Name of the connected SAP HANA database.</p>
   * @public
   */
  DatabaseArn?: string;

  /**
   * <p>The IP address for connection.</p>
   * @public
   */
  ConnectionIp?: string;
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
  HostName?: string;

  /**
   * <p>The IP address of the Dedicated Host. </p>
   * @public
   */
  HostIp?: string;

  /**
   * <p>The ID of Amazon EC2 instance.</p>
   * @public
   */
  EC2InstanceId?: string;

  /**
   * <p>The instance ID of the instance on the Dedicated Host.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The role of the Dedicated Host.</p>
   * @public
   */
  HostRole?: HostRole;

  /**
   * <p>The version of the operating system.</p>
   * @public
   */
  OsVersion?: string;
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
  HsrTier?: string;

  /**
   * <p>The replication mode of the component.</p>
   * @public
   */
  HsrReplicationMode?: ReplicationMode;

  /**
   * <p>The operation mode of the component.</p>
   * @public
   */
  HsrOperationMode?: OperationMode;

  /**
   * <p>The cluster status of the component.</p>
   * @public
   */
  ClusterStatus?: ClusterStatus;

  /**
   * <p>Indicates if or not enqueue replication is enabled for the ASCS component.</p>
   * @public
   */
  EnqueueReplication?: boolean;
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
  ComponentId?: string;

  /**
   * <p>The SAP System Identifier of the application component.</p>
   * @public
   */
  Sid?: string;

  /**
   * <p>The SAP system number of the application component.</p>
   * @public
   */
  SystemNumber?: string;

  /**
   * <p>The parent component of a highly available environment. For example, in a highly
   *          available SAP on AWS workload, the parent component consists of the entire setup,
   *          including the child components.</p>
   * @public
   */
  ParentComponent?: string;

  /**
   * <p>The child components of a highly available environment. For example, in a highly
   *          available SAP on AWS workload, the child component consists of the primary and secondar
   *          instances.</p>
   * @public
   */
  ChildComponents?: string[];

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The type of the component.</p>
   * @public
   */
  ComponentType?: ComponentType;

  /**
   * <p>The status of the component.</p>
   *          <ul>
   *             <li>
   *                <p>ACTIVATED - this status has been deprecated.</p>
   *             </li>
   *             <li>
   *                <p>STARTING - the component is in the process of being started.</p>
   *             </li>
   *             <li>
   *                <p>STOPPED - the component is not running.</p>
   *             </li>
   *             <li>
   *                <p>STOPPING - the component is in the process of being stopped.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING - the component is running.</p>
   *             </li>
   *             <li>
   *                <p>RUNNING_WITH_ERROR - one or more child component(s) of the parent component is not
   *                running. Call <a href="https://docs.aws.amazon.com/ssmsap/latest/APIReference/API_GetComponent.html">
   *                      <code>GetComponent</code>
   *                   </a> to review the status of each child
   *                component.</p>
   *             </li>
   *             <li>
   *                <p>UNDEFINED - AWS Systems Manager for SAP cannot provide the component status
   *                based on the discovered information. Verify your SAP application.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: ComponentStatus;

  /**
   * <p>The hostname of the component.</p>
   * @public
   */
  SapHostname?: string;

  /**
   * <p>The SAP feature of the component.</p>
   * @public
   */
  SapFeature?: string;

  /**
   * <p>The kernel version of the component.</p>
   * @public
   */
  SapKernelVersion?: string;

  /**
   * <p>The SAP HANA version of the component.</p>
   * @public
   */
  HdbVersion?: string;

  /**
   * <p>Details of the SAP HANA system replication for the component.</p>
   * @public
   */
  Resilience?: Resilience;

  /**
   * <p>The associated host of the component.</p>
   * @public
   */
  AssociatedHost?: AssociatedHost;

  /**
   * <p>The SAP HANA databases of the component.</p>
   * @public
   */
  Databases?: string[];

  /**
   * @deprecated
   *
   * <p>The hosts of the component.</p>
   * @public
   */
  Hosts?: Host[];

  /**
   * @deprecated
   *
   * <p>The primary host of the component.</p>
   * @public
   */
  PrimaryHost?: string;

  /**
   * <p>The connection specifications for the database of the component.</p>
   * @public
   */
  DatabaseConnection?: DatabaseConnection;

  /**
   * <p>The time at which the component was last updated.</p>
   * @public
   */
  LastUpdated?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   * @public
   */
  Arn?: string;
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
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string;

  /**
   * <p>The type of the component.</p>
   * @public
   */
  ComponentType?: ComponentType;

  /**
   * <p>The tags of the component.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the component summary.</p>
   * @public
   */
  Arn?: string;
}

/**
 * <p>A conflict has occurred.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * <p>The SAP HANA database of the application registered with AWS Systems Manager for
 *          SAP.</p>
 * @public
 */
export interface Database {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string;

  /**
   * <p>The credentials of the database.</p>
   * @public
   */
  Credentials?: ApplicationCredential[];

  /**
   * <p>The ID of the SAP HANA database.</p>
   * @public
   */
  DatabaseId?: string;

  /**
   * <p>The name of the database.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The type of the database.</p>
   * @public
   */
  DatabaseType?: DatabaseType;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The status of the database.</p>
   * @public
   */
  Status?: DatabaseStatus;

  /**
   * <p>The primary host of the database.</p>
   * @public
   */
  PrimaryHost?: string;

  /**
   * <p>The SQL port of the database.</p>
   * @public
   */
  SQLPort?: number;

  /**
   * <p>The time at which the database was last updated.</p>
   * @public
   */
  LastUpdated?: Date;
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
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string;

  /**
   * <p>The ID of the database.</p>
   * @public
   */
  DatabaseId?: string;

  /**
   * <p>The type of the database.</p>
   * @public
   */
  DatabaseType?: DatabaseType;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The tags of the database.</p>
   * @public
   */
  Tags?: Record<string, string>;
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
  ActionType?: PermissionActionType;

  /**
   * <p>The Amazon Resource Name (ARN) of the source resource.</p>
   * @public
   */
  SourceResourceArn?: string;

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
  Policy?: string;
}

/**
 * <p>An internal error has occurred.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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
  Message?: string;
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
  Message?: string;
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
  Message?: string;
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
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for
   *          a filter, the values are joined with an OR, and the request returns all results that match
   *          any of the specified values</p>
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
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   * @public
   */
  ApplicationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application registry.</p>
   * @public
   */
  AppRegistryArn?: string;
}

/**
 * @public
 */
export interface GetApplicationOutput {
  /**
   * <p>Returns all of the metadata of an application registered with AWS Systems Manager for
   *          SAP.</p>
   * @public
   */
  Application?: Application;

  /**
   * <p>The tags of a registered application.</p>
   * @public
   */
  Tags?: Record<string, string>;
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
  Component?: Component;

  /**
   * <p>The tags of a component.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string;

  /**
   * <p>The ID of the database.</p>
   * @public
   */
  DatabaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   * @public
   */
  DatabaseArn?: string;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * <p>The SAP HANA database of an application registered with AWS Systems Manager for
   *          SAP.</p>
   * @public
   */
  Database?: Database;

  /**
   * <p>The tags of a database.</p>
   * @public
   */
  Tags?: Record<string, string>;
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
 * <p>The operations performed by AWS Systems Manager for SAP.</p>
 * @public
 */
export interface Operation {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The type of the operation.</p>
   * @public
   */
  Type?: string;

  /**
   * <p>The status of the operation.</p>
   * @public
   */
  Status?: OperationStatus;

  /**
   * <p>The status message of the operation.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>The properties of the operation.</p>
   * @public
   */
  Properties?: Record<string, string>;

  /**
   * <p>The resource type of the operation.</p>
   * @public
   */
  ResourceType?: string;

  /**
   * <p>The resource ID of the operation.</p>
   * @public
   */
  ResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the operation.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The start time of the operation.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The end time of the operation.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>The time at which the operation was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface GetOperationOutput {
  /**
   * <p>Returns the details of an operation.</p>
   * @public
   */
  Operation?: Operation;
}

/**
 * @public
 */
export interface GetResourcePermissionInput {
  /**
   * <p/>
   * @public
   */
  ActionType?: PermissionActionType;

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
  Policy?: string;
}

/**
 * @public
 */
export interface ListApplicationsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The filter of name, value, and operator.</p>
   * @public
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * <p>The applications registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Applications?: ApplicationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value.</p>
   *          <p>If you do not specify a value for MaxResults, the request returns 50 items per page by
   *          default.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * <p>List of components registered with AWS System Manager for SAP.</p>
   * @public
   */
  Components?: ComponentSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   * @public
   */
  ComponentId?: string;

  /**
   * <p>The token for the next page of results. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. If you do not specify a value
   *          for MaxResults, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * <p>The SAP HANA databases of an application.</p>
   * @public
   */
  Databases?: DatabaseSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value.</p>
   *          <p>If you do not specify a value for <code>MaxResults</code>, the request returns 50 items
   *          per page by default.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token to use to retrieve the next page of results.
   *          This value is null when there are no more results to return.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Optionally specify filters to narrow the returned operation
   *       event items.</p>
   *          <p>Valid filter names include <code>status</code>, <code>resourceID</code>,
   *       and <code>resourceType</code>. The valid operator for all three filters
   *       is <code>Equals</code>.</p>
   * @public
   */
  Filters?: Filter[];
}

/**
 * <p>The resource contains a <code>ResourceArn</code>
 *          and the <code>ResourceType</code>.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the source resource.</p>
   *          <p>Example of <code>ResourceArn</code>:
   *          "<code>arn:aws:ec2:us-east-1:111111111111:instance/i-abcdefgh987654321</code>"</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The resource type.</p>
   *          <p>Example of <code>ResourceType</code>: "<code>AWS::SystemsManagerSAP::Component</code>"
   *          or "<code>AWS::EC2::Instance</code>".</p>
   * @public
   */
  ResourceType?: string;
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
 * <p>An operation event returns details for an operation, including
 *       key milestones which can be used to monitor and track operations
 *       in progress.</p>
 *          <p>Operation events contain:</p>
 *          <ul>
 *             <li>
 *                <p>Description string</p>
 *             </li>
 *             <li>
 *                <p>Resource, including its ARN and type</p>
 *             </li>
 *             <li>
 *                <p>Status</p>
 *             </li>
 *             <li>
 *                <p>StatusMessage string</p>
 *             </li>
 *             <li>
 *                <p>TimeStamp</p>
 *             </li>
 *          </ul>
 *          <p>Operation event examples include StartApplication or
 *          StopApplication.</p>
 * @public
 */
export interface OperationEvent {
  /**
   * <p>A description of the operation event. For example,
   *          "Stop the EC2 instance i-abcdefgh987654321".</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The resource involved in the operations event.</p>
   *          <p>Contains <code>ResourceArn</code> ARN and <code>ResourceType</code>.</p>
   * @public
   */
  Resource?: Resource;

  /**
   * <p>The status of the operation event. The possible statuses
   *          are: <code>IN_PROGRESS</code>,
   *          <code>COMPLETED</code>, and <code>FAILED</code>.</p>
   * @public
   */
  Status?: OperationEventStatus;

  /**
   * <p>The status message relating to a specific
   *          operation event.</p>
   * @public
   */
  StatusMessage?: string;

  /**
   * <p>The timestamp of the specified operation event.</p>
   * @public
   */
  Timestamp?: Date;
}

/**
 * @public
 */
export interface ListOperationEventsOutput {
  /**
   * <p>A returned list of operation events that
   *          meet the filter criteria.</p>
   * @public
   */
  OperationEvents?: OperationEvent[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. If you do not specify a value
   *          for MaxResults, the request returns 50 items per page by default.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The filters of an operation.</p>
   * @public
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListOperationsOutput {
  /**
   * <p>List of operations performed by AWS Systems Manager for SAP.</p>
   * @public
   */
  Operations?: Operation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   * @public
   */
  NextToken?: string;
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
  tags?: Record<string, string>;
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
  Policy?: string;
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
  SapInstanceNumber?: string;

  /**
   * <p>The System ID of the application.</p>
   * @public
   */
  Sid?: string;

  /**
   * <p>The tags to be attached to the SAP application.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The credentials of the SAP application.</p>
   * @public
   */
  Credentials?: ApplicationCredential[];

  /**
   * <p>The Amazon Resource Name of the SAP HANA database.</p>
   * @public
   */
  DatabaseArn?: string;
}

/**
 * @public
 */
export interface RegisterApplicationOutput {
  /**
   * <p>The application registered with AWS Systems Manager for SAP.</p>
   * @public
   */
  Application?: Application;

  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string;
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
  OperationId?: string;
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
  OperationId?: string;
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
   * <p>Specify the <code>ConnectedEntityType</code>. Accepted type
   *       is <code>DBMS</code>.</p>
   *          <p>If this parameter is included, the connected DBMS (Database
   *       Management System) will be stopped.</p>
   * @public
   */
  StopConnectedEntity?: ConnectedEntityType;

  /**
   * <p>Boolean. If included and if set to <code>True</code>, the
   *          StopApplication operation will shut down the associated Amazon EC2 instance in addition to
   *          the application.</p>
   * @public
   */
  IncludeEc2InstanceShutdown?: boolean;
}

/**
 * @public
 */
export interface StopApplicationOutput {
  /**
   * <p>The ID of the operation.</p>
   * @public
   */
  OperationId?: string;
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
   * <p>Adds/updates or removes credentials for applications registered with AWS Systems
   *          Manager for SAP.</p>
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
  CredentialsToAddOrUpdate?: ApplicationCredential[];

  /**
   * <p>The credentials to be removed.</p>
   * @public
   */
  CredentialsToRemove?: ApplicationCredential[];

  /**
   * <p>Installation of AWS Backint Agent for SAP HANA.</p>
   * @public
   */
  Backint?: BackintConfig;

  /**
   * <p>The Amazon Resource Name of the SAP HANA database that replaces the current SAP HANA
   *          connection with the SAP_ABAP application.</p>
   * @public
   */
  DatabaseArn?: string;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsOutput {
  /**
   * <p>The update message.</p>
   * @public
   */
  Message?: string;

  /**
   * <p>The IDs of the operations.</p>
   * @public
   */
  OperationIds?: string[];
}

/**
 * @internal
 */
export const ApplicationCredentialFilterSensitiveLog = (obj: ApplicationCredential): any => ({
  ...obj,
  ...(obj.SecretId && { SecretId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DatabaseFilterSensitiveLog = (obj: Database): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => ApplicationCredentialFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetDatabaseOutputFilterSensitiveLog = (obj: GetDatabaseOutput): any => ({
  ...obj,
  ...(obj.Database && { Database: DatabaseFilterSensitiveLog(obj.Database) }),
});

/**
 * @internal
 */
export const RegisterApplicationInputFilterSensitiveLog = (obj: RegisterApplicationInput): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: obj.Credentials.map((item) => ApplicationCredentialFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateApplicationSettingsInputFilterSensitiveLog = (obj: UpdateApplicationSettingsInput): any => ({
  ...obj,
  ...(obj.CredentialsToAddOrUpdate && {
    CredentialsToAddOrUpdate: obj.CredentialsToAddOrUpdate.map((item) => ApplicationCredentialFilterSensitiveLog(item)),
  }),
  ...(obj.CredentialsToRemove && {
    CredentialsToRemove: obj.CredentialsToRemove.map((item) => ApplicationCredentialFilterSensitiveLog(item)),
  }),
});
