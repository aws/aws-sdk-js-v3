// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { SsmSapServiceException as __BaseException } from "./SsmSapServiceException";

export enum ApplicationStatus {
  ACTIVATED = "ACTIVATED",
  DELETING = "DELETING",
  FAILED = "FAILED",
  REGISTERING = "REGISTERING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  UNKNOWN = "UNKNOWN",
}

export enum ApplicationType {
  HANA = "HANA",
}

/**
 * <p/>
 */
export interface Application {
  /**
   * <p/>
   */
  Id?: string;

  /**
   * <p/>
   */
  Type?: ApplicationType | string;

  /**
   * <p/>
   */
  Arn?: string;

  /**
   * <p/>
   */
  AppRegistryArn?: string;

  /**
   * <p/>
   */
  Status?: ApplicationStatus | string;

  /**
   * <p/>
   */
  Components?: string[];

  /**
   * <p/>
   */
  LastUpdated?: Date;

  /**
   * <p/>
   */
  StatusMessage?: string;
}

export enum CredentialType {
  ADMIN = "ADMIN",
}

/**
 * <p/>
 */
export interface ApplicationCredential {
  /**
   * <p/>
   */
  DatabaseName: string | undefined;

  /**
   * <p/>
   */
  CredentialType: CredentialType | string | undefined;

  /**
   * <p/>
   */
  SecretId: string | undefined;
}

/**
 * <p/>
 */
export interface ApplicationSummary {
  /**
   * <p/>
   */
  Id?: string;

  /**
   * <p/>
   */
  Type?: ApplicationType | string;

  /**
   * <p/>
   */
  Arn?: string;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;
}

export enum ComponentType {
  HANA = "HANA",
}

export enum HostRole {
  LEADER = "LEADER",
  STANDBY = "STANDBY",
  UNKNOWN = "UNKNOWN",
  WORKER = "WORKER",
}

/**
 * <p/>
 */
export interface Host {
  /**
   * <p/>
   */
  HostName?: string;

  /**
   * <p/>
   */
  HostRole?: HostRole | string;

  /**
   * <p/>
   */
  HostIp?: string;

  /**
   * <p/>
   */
  InstanceId?: string;
}

export enum ComponentStatus {
  ACTIVATED = "ACTIVATED",
}

/**
 * <p/>
 */
export interface Component {
  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentType?: ComponentType | string;

  /**
   * <p/>
   */
  Status?: ComponentStatus | string;

  /**
   * <p/>
   */
  Databases?: string[];

  /**
   * <p/>
   */
  Hosts?: Host[];

  /**
   * <p/>
   */
  PrimaryHost?: string;

  /**
   * <p/>
   */
  LastUpdated?: Date;
}

/**
 * <p/>
 */
export interface ComponentSummary {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  ComponentType?: ComponentType | string;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;
}

/**
 * <p/>
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

export enum DatabaseType {
  SYSTEM = "SYSTEM",
  TENANT = "TENANT",
}

export enum DatabaseStatus {
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  UNKNOWN = "UNKNOWN",
  WARNING = "WARNING",
}

/**
 * <p/>
 */
export interface Database {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  Credentials?: ApplicationCredential[];

  /**
   * <p/>
   */
  DatabaseId?: string;

  /**
   * <p/>
   */
  DatabaseName?: string;

  /**
   * <p/>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * <p/>
   */
  Arn?: string;

  /**
   * <p/>
   */
  Status?: DatabaseStatus | string;

  /**
   * <p/>
   */
  PrimaryHost?: string;

  /**
   * <p/>
   */
  SQLPort?: number;

  /**
   * <p/>
   */
  LastUpdated?: Date;
}

/**
 * <p/>
 */
export interface DatabaseSummary {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  DatabaseId?: string;

  /**
   * <p/>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * <p/>
   */
  Arn?: string;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;
}

export enum PermissionActionType {
  RESTORE = "RESTORE",
}

export interface DeleteResourcePermissionInput {
  /**
   * <p/>
   */
  ActionType?: PermissionActionType | string;

  /**
   * <p/>
   */
  SourceResourceArn?: string;

  /**
   * <p/>
   */
  ResourceArn: string | undefined;
}

export interface DeleteResourcePermissionOutput {
  /**
   * <p/>
   */
  Policy?: string;
}

/**
 * <p/>
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
 * <p/>
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
 * <p/>
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

export interface DeregisterApplicationInput {
  /**
   * <p/>
   */
  ApplicationId: string | undefined;
}

export interface DeregisterApplicationOutput {}

export interface GetApplicationInput {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ApplicationArn?: string;
}

export interface GetApplicationOutput {
  /**
   * <p/>
   */
  Application?: Application;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;
}

export interface GetComponentInput {
  /**
   * <p/>
   */
  ApplicationId: string | undefined;

  /**
   * <p/>
   */
  ComponentId: string | undefined;
}

export interface GetComponentOutput {
  /**
   * <p/>
   */
  Component?: Component;
}

export interface GetDatabaseInput {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  DatabaseId?: string;

  /**
   * <p/>
   */
  DatabaseArn?: string;
}

export interface GetDatabaseOutput {
  /**
   * <p/>
   */
  Database?: Database;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;
}

export interface GetOperationInput {
  /**
   * <p/>
   */
  OperationId: string | undefined;
}

export enum OperationStatus {
  ERROR = "ERROR",
  INPROGRESS = "INPROGRESS",
  SUCCESS = "SUCCESS",
}

/**
 * <p/>
 */
export interface Operation {
  /**
   * <p/>
   */
  Id?: string;

  /**
   * <p/>
   */
  Type?: string;

  /**
   * <p/>
   */
  Status?: OperationStatus | string;

  /**
   * <p/>
   */
  StatusMessage?: string;

  /**
   * <p/>
   */
  Properties?: Record<string, string>;

  /**
   * <p/>
   */
  ResourceType?: string;

  /**
   * <p/>
   */
  ResourceId?: string;

  /**
   * <p/>
   */
  ResourceArn?: string;

  /**
   * <p/>
   */
  StartTime?: Date;

  /**
   * <p/>
   */
  EndTime?: Date;

  /**
   * <p/>
   */
  LastUpdatedTime?: Date;
}

export interface GetOperationOutput {
  /**
   * <p/>
   */
  Operation?: Operation;
}

export interface GetResourcePermissionInput {
  /**
   * <p/>
   */
  ActionType?: PermissionActionType | string;

  /**
   * <p/>
   */
  ResourceArn: string | undefined;
}

export interface GetResourcePermissionOutput {
  /**
   * <p/>
   */
  Policy?: string;
}

export interface ListApplicationsInput {
  /**
   * <p/>
   */
  NextToken?: string;

  /**
   * <p/>
   */
  MaxResults?: number;
}

export interface ListApplicationsOutput {
  /**
   * <p/>
   */
  Applications?: ApplicationSummary[];

  /**
   * <p/>
   */
  NextToken?: string;
}

export interface ListComponentsInput {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  NextToken?: string;

  /**
   * <p/>
   */
  MaxResults?: number;
}

export interface ListComponentsOutput {
  /**
   * <p/>
   */
  Components?: ComponentSummary[];

  /**
   * <p/>
   */
  NextToken?: string;
}

export interface ListDatabasesInput {
  /**
   * <p/>
   */
  ApplicationId?: string;

  /**
   * <p/>
   */
  ComponentId?: string;

  /**
   * <p/>
   */
  NextToken?: string;

  /**
   * <p/>
   */
  MaxResults?: number;
}

export interface ListDatabasesOutput {
  /**
   * <p/>
   */
  Databases?: DatabaseSummary[];

  /**
   * <p/>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p/>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p/>
   */
  tags?: Record<string, string>;
}

export interface PutResourcePermissionInput {
  /**
   * <p/>
   */
  ActionType: PermissionActionType | string | undefined;

  /**
   * <p/>
   */
  SourceResourceArn: string | undefined;

  /**
   * <p/>
   */
  ResourceArn: string | undefined;
}

export interface PutResourcePermissionOutput {
  /**
   * <p/>
   */
  Policy?: string;
}

export interface RegisterApplicationInput {
  /**
   * <p/>
   */
  ApplicationId: string | undefined;

  /**
   * <p/>
   */
  ApplicationType: ApplicationType | string | undefined;

  /**
   * <p/>
   */
  Instances: string[] | undefined;

  /**
   * <p/>
   */
  SapInstanceNumber?: string;

  /**
   * <p/>
   */
  Sid?: string;

  /**
   * <p/>
   */
  Tags?: Record<string, string>;

  /**
   * <p/>
   */
  Credentials: ApplicationCredential[] | undefined;
}

export interface RegisterApplicationOutput {
  /**
   * <p/>
   */
  Application?: Application;

  /**
   * <p/>
   */
  OperationId?: string;
}

export interface TagResourceRequest {
  /**
   * <p/>
   */
  resourceArn: string | undefined;

  /**
   * <p/>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p/>
   */
  resourceArn: string | undefined;

  /**
   * <p>Adds/updates or removes credentials for applications registered with AWS Systems Manager for SAP.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateApplicationSettingsInput {
  /**
   * <p/>
   */
  ApplicationId: string | undefined;

  /**
   * <p/>
   */
  CredentialsToAddOrUpdate?: ApplicationCredential[];

  /**
   * <p/>
   */
  CredentialsToRemove?: ApplicationCredential[];
}

export interface UpdateApplicationSettingsOutput {
  /**
   * <p/>
   */
  Message?: string;

  /**
   * <p/>
   */
  OperationIds?: string[];
}

/**
 * @internal
 */
export const ApplicationFilterSensitiveLog = (obj: Application): any => ({
  ...obj,
});

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
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HostFilterSensitiveLog = (obj: Host): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentFilterSensitiveLog = (obj: Component): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComponentSummaryFilterSensitiveLog = (obj: ComponentSummary): any => ({
  ...obj,
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
export const DatabaseSummaryFilterSensitiveLog = (obj: DatabaseSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePermissionInputFilterSensitiveLog = (obj: DeleteResourcePermissionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePermissionOutputFilterSensitiveLog = (obj: DeleteResourcePermissionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterApplicationInputFilterSensitiveLog = (obj: DeregisterApplicationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterApplicationOutputFilterSensitiveLog = (obj: DeregisterApplicationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationInputFilterSensitiveLog = (obj: GetApplicationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetApplicationOutputFilterSensitiveLog = (obj: GetApplicationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentInputFilterSensitiveLog = (obj: GetComponentInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetComponentOutputFilterSensitiveLog = (obj: GetComponentOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetDatabaseInputFilterSensitiveLog = (obj: GetDatabaseInput): any => ({
  ...obj,
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
export const GetOperationInputFilterSensitiveLog = (obj: GetOperationInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OperationFilterSensitiveLog = (obj: Operation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetOperationOutputFilterSensitiveLog = (obj: GetOperationOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePermissionInputFilterSensitiveLog = (obj: GetResourcePermissionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetResourcePermissionOutputFilterSensitiveLog = (obj: GetResourcePermissionOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsInputFilterSensitiveLog = (obj: ListApplicationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationsOutputFilterSensitiveLog = (obj: ListApplicationsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsInputFilterSensitiveLog = (obj: ListComponentsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListComponentsOutputFilterSensitiveLog = (obj: ListComponentsOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesInputFilterSensitiveLog = (obj: ListDatabasesInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatabasesOutputFilterSensitiveLog = (obj: ListDatabasesOutput): any => ({
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
export const PutResourcePermissionInputFilterSensitiveLog = (obj: PutResourcePermissionInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePermissionOutputFilterSensitiveLog = (obj: PutResourcePermissionOutput): any => ({
  ...obj,
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
export const RegisterApplicationOutputFilterSensitiveLog = (obj: RegisterApplicationOutput): any => ({
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
export const UpdateApplicationSettingsInputFilterSensitiveLog = (obj: UpdateApplicationSettingsInput): any => ({
  ...obj,
  ...(obj.CredentialsToAddOrUpdate && {
    CredentialsToAddOrUpdate: obj.CredentialsToAddOrUpdate.map((item) => ApplicationCredentialFilterSensitiveLog(item)),
  }),
  ...(obj.CredentialsToRemove && {
    CredentialsToRemove: obj.CredentialsToRemove.map((item) => ApplicationCredentialFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateApplicationSettingsOutputFilterSensitiveLog = (obj: UpdateApplicationSettingsOutput): any => ({
  ...obj,
});
