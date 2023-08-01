// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { SsmSapServiceException as __BaseException } from "./SsmSapServiceException";

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
} as const;

/**
 * @public
 */
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType];

/**
 * @public
 * <p>An SAP application registered with AWS Systems Manager for SAP.</p>
 */
export interface Application {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of the application.</p>
   */
  Type?: ApplicationType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Application Registry.</p>
   */
  AppRegistryArn?: string;

  /**
   * @public
   * <p>The status of the application.</p>
   */
  Status?: ApplicationStatus | string;

  /**
   * @public
   * <p>The latest discovery result for the application.</p>
   */
  DiscoveryStatus?: ApplicationDiscoveryStatus | string;

  /**
   * @public
   * <p>The components of the application.</p>
   */
  Components?: string[];

  /**
   * @public
   * <p>The time at which the application was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The status message.</p>
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
 * @public
 * <p>The credentials of your SAP application.</p>
 */
export interface ApplicationCredential {
  /**
   * @public
   * <p>The name of the SAP HANA database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The type of the application credentials. </p>
   */
  CredentialType: CredentialType | string | undefined;

  /**
   * @public
   * <p>The secret ID created in AWS Secrets Manager to store the credentials of the SAP
   *          application. </p>
   */
  SecretId: string | undefined;
}

/**
 * @public
 * <p>The summary of the SAP application registered with AWS Systems Manager for SAP.
 *       </p>
 */
export interface ApplicationSummary {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of the application.</p>
   */
  Type?: ApplicationType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The tags on the application.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Describes the properties of the associated host.</p>
 */
export interface AssociatedHost {
  /**
   * @public
   * <p>The name of the host.</p>
   */
  Hostname?: string;

  /**
   * @public
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  Ec2InstanceId?: string;

  /**
   * @public
   * <p>The version of the operating system.</p>
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
 * @public
 * <p>Configuration parameters for AWS Backint Agent for SAP HANA. You can backup your SAP
 *          HANA database with AWS Backup or Amazon S3.</p>
 */
export interface BackintConfig {
  /**
   * @public
   * <p>AWS service for your database backup.</p>
   */
  BackintMode: BackintMode | string | undefined;

  /**
   * @public
   * <p/>
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
  HANA: "HANA",
  HANA_NODE: "HANA_NODE",
} as const;

/**
 * @public
 */
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];

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
 * @public
 * <p>Describes the properties of the Dedicated Host. </p>
 */
export interface Host {
  /**
   * @public
   * <p>The name of the Dedicated Host.</p>
   */
  HostName?: string;

  /**
   * @public
   * <p>The IP address of the Dedicated Host. </p>
   */
  HostIp?: string;

  /**
   * @public
   * <p>The ID of Amazon EC2 instance.</p>
   */
  EC2InstanceId?: string;

  /**
   * @public
   * <p>The instance ID of the instance on the Dedicated Host.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The role of the Dedicated Host.</p>
   */
  HostRole?: HostRole | string;

  /**
   * @public
   * <p>The version of the operating system.</p>
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
 * @public
 * <p>Details of the SAP HANA system replication for the instance.</p>
 */
export interface Resilience {
  /**
   * @public
   * <p>The tier of the component.</p>
   */
  HsrTier?: string;

  /**
   * @public
   * <p>The replication mode of the component.</p>
   */
  HsrReplicationMode?: ReplicationMode | string;

  /**
   * @public
   * <p>The operation mode of the component.</p>
   */
  HsrOperationMode?: OperationMode | string;

  /**
   * @public
   * <p>The cluster status of the component.</p>
   */
  ClusterStatus?: ClusterStatus | string;
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
 * @public
 * <p>The SAP component of your application.</p>
 */
export interface Component {
  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The parent component of a highly available environment. For example, in a highly
   *          available SAP on AWS workload, the parent component consists of the entire setup,
   *          including the child components.</p>
   */
  ParentComponent?: string;

  /**
   * @public
   * <p>The child components of a highly available environment. For example, in a highly
   *          available SAP on AWS workload, the child component consists of the primary and secondar
   *          instances.</p>
   */
  ChildComponents?: string[];

  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The type of the component.</p>
   */
  ComponentType?: ComponentType | string;

  /**
   * @public
   * <p>The status of the component.</p>
   */
  Status?: ComponentStatus | string;

  /**
   * @public
   * <p>The hostname of the component.</p>
   */
  SapHostname?: string;

  /**
   * @public
   * <p>The kernel version of the component.</p>
   */
  SapKernelVersion?: string;

  /**
   * @public
   * <p>The SAP HANA version of the component.</p>
   */
  HdbVersion?: string;

  /**
   * @public
   * <p>Details of the SAP HANA system replication for the component.</p>
   */
  Resilience?: Resilience;

  /**
   * @public
   * <p>The associated host of the component.</p>
   */
  AssociatedHost?: AssociatedHost;

  /**
   * @public
   * <p>The SAP HANA databases of the component.</p>
   */
  Databases?: string[];

  /**
   * @public
   * @deprecated
   *
   * <p>The hosts of the component.</p>
   */
  Hosts?: Host[];

  /**
   * @public
   * @deprecated
   *
   * <p>The primary host of the component.</p>
   */
  PrimaryHost?: string;

  /**
   * @public
   * <p>The time at which the component was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The summary of the component.</p>
 */
export interface ComponentSummary {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The type of the component.</p>
   */
  ComponentType?: ComponentType | string;

  /**
   * @public
   * <p>The tags of the component.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the component summary.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>A conflict has occurred.</p>
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
 * @public
 * <p>The SAP HANA database of the application registered with AWS Systems Manager for
 *          SAP.</p>
 */
export interface Database {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The credentials of the database.</p>
   */
  Credentials?: ApplicationCredential[];

  /**
   * @public
   * <p>The ID of the SAP HANA database.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The type of the database.</p>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The status of the database.</p>
   */
  Status?: DatabaseStatus | string;

  /**
   * @public
   * <p>The primary host of the database.</p>
   */
  PrimaryHost?: string;

  /**
   * @public
   * <p>The SQL port of the database.</p>
   */
  SQLPort?: number;

  /**
   * @public
   * <p>The time at which the database was last updated.</p>
   */
  LastUpdated?: Date;
}

/**
 * @public
 * <p>The summary of the database.</p>
 */
export interface DatabaseSummary {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The ID of the database.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The type of the database.</p>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The tags of the database.</p>
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
   * @public
   * <p>Delete or restore the permissions on the target database.</p>
   */
  ActionType?: PermissionActionType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source resource.</p>
   */
  SourceResourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePermissionOutput {
  /**
   * @public
   * <p>The policy that removes permissions on the target database.</p>
   */
  Policy?: string;
}

/**
 * @public
 * <p>An internal error has occurred.</p>
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
 * @public
 * <p>The resource is not available.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by an AWS service. </p>
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
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DeregisterApplicationOutput {}

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
 * @public
 * <p>A specific result obtained by specifying the name, value, and operator. </p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the filter. Filter names are case-sensitive. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for
   *          a filter, the values are joined with an OR, and the request returns all results that match
   *          any of the specified values</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>The operator for the filter. </p>
   */
  Operator: FilterOperator | string | undefined;
}

/**
 * @public
 */
export interface GetApplicationInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   */
  ApplicationArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the application registry.</p>
   */
  AppRegistryArn?: string;
}

/**
 * @public
 */
export interface GetApplicationOutput {
  /**
   * @public
   * <p>Returns all of the metadata of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  Application?: Application;

  /**
   * @public
   * <p>The tags of a registered application.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetComponentInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId: string | undefined;
}

/**
 * @public
 */
export interface GetComponentOutput {
  /**
   * @public
   * <p>The component of an application registered with AWS Systems Manager for SAP.</p>
   */
  Component?: Component;

  /**
   * @public
   * <p>The tags of a component.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetDatabaseInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The ID of the database.</p>
   */
  DatabaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseArn?: string;
}

/**
 * @public
 */
export interface GetDatabaseOutput {
  /**
   * @public
   * <p>The SAP HANA database of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  Database?: Database;

  /**
   * @public
   * <p>The tags of a database.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetOperationInput {
  /**
   * @public
   * <p>The ID of the operation.</p>
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
 * @public
 * <p>The operations performed by AWS Systems Manager for SAP.</p>
 */
export interface Operation {
  /**
   * @public
   * <p>The ID of the operation.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of the operation.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The status of the operation.</p>
   */
  Status?: OperationStatus | string;

  /**
   * @public
   * <p>The status message of the operation.</p>
   */
  StatusMessage?: string;

  /**
   * @public
   * <p>The properties of the operation.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>The resource type of the operation.</p>
   */
  ResourceType?: string;

  /**
   * @public
   * <p>The resource ID of the operation.</p>
   */
  ResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the operation.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The start time of the operation.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the operation.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The time at which the operation was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface GetOperationOutput {
  /**
   * @public
   * <p>Returns the details of an operation.</p>
   */
  Operation?: Operation;
}

/**
 * @public
 */
export interface GetResourcePermissionInput {
  /**
   * @public
   * <p/>
   */
  ActionType?: PermissionActionType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePermissionOutput {
  /**
   * @public
   * <p/>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface ListApplicationsInput {
  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationsOutput {
  /**
   * @public
   * <p>The applications registered with AWS Systems Manager for SAP.</p>
   */
  Applications?: ApplicationSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListComponentsInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value.</p>
   *          <p>If you do not specify a value for MaxResults, the request returns 50 items per page by
   *          default.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListComponentsOutput {
  /**
   * @public
   * <p>List of components registered with AWS System Manager for SAP.</p>
   */
  Components?: ComponentSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDatabasesInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * @public
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * @public
   * <p>The token for the next page of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. If you do not specify a value
   *          for MaxResults, the request returns 50 items per page by default.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListDatabasesOutput {
  /**
   * @public
   * <p>The SAP HANA databases of an application.</p>
   */
  Databases?: DatabaseSummary[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListOperationsInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. If you do not specify a value
   *          for MaxResults, the request returns 50 items per page by default.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next page of results. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The filters of an operation.</p>
   */
  Filters?: Filter[];
}

/**
 * @public
 */
export interface ListOperationsOutput {
  /**
   * @public
   * <p>List of operations performed by AWS Systems Manager for SAP.</p>
   */
  Operations?: Operation[];

  /**
   * @public
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p/>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutResourcePermissionInput {
  /**
   * @public
   * <p/>
   */
  ActionType: PermissionActionType | string | undefined;

  /**
   * @public
   * <p/>
   */
  SourceResourceArn: string | undefined;

  /**
   * @public
   * <p/>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePermissionOutput {
  /**
   * @public
   * <p/>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface RegisterApplicationInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The type of the application.</p>
   */
  ApplicationType: ApplicationType | string | undefined;

  /**
   * @public
   * <p>The Amazon EC2 instances on which your SAP application is running.</p>
   */
  Instances: string[] | undefined;

  /**
   * @public
   * <p>The SAP instance number of the application.</p>
   */
  SapInstanceNumber?: string;

  /**
   * @public
   * <p>The System ID of the application.</p>
   */
  Sid?: string;

  /**
   * @public
   * <p>The tags to be attached to the SAP application.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The credentials of the SAP application.</p>
   */
  Credentials: ApplicationCredential[] | undefined;
}

/**
 * @public
 */
export interface RegisterApplicationOutput {
  /**
   * @public
   * <p>The application registered with AWS Systems Manager for SAP.</p>
   */
  Application?: Application;

  /**
   * @public
   * <p>The ID of the operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface StartApplicationRefreshInput {
  /**
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface StartApplicationRefreshOutput {
  /**
   * @public
   * <p>The ID of the operation.</p>
   */
  OperationId?: string;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags on a resource.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>Adds/updates or removes credentials for applications registered with AWS Systems
   *          Manager for SAP.</p>
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
   * @public
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * @public
   * <p>The credentials to be added or updated.</p>
   */
  CredentialsToAddOrUpdate?: ApplicationCredential[];

  /**
   * @public
   * <p>The credentials to be removed.</p>
   */
  CredentialsToRemove?: ApplicationCredential[];

  /**
   * @public
   * <p>Installation of AWS Backint Agent for SAP HANA.</p>
   */
  Backint?: BackintConfig;
}

/**
 * @public
 */
export interface UpdateApplicationSettingsOutput {
  /**
   * @public
   * <p>The update message.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The IDs of the operations.</p>
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
