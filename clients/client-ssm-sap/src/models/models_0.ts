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
 * <p>An SAP application registered with AWS Systems Manager for SAP.</p>
 */
export interface Application {
  /**
   * <p>The ID of the application.</p>
   */
  Id?: string;

  /**
   * <p>The type of the application.</p>
   */
  Type?: ApplicationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Application Registry.</p>
   */
  AppRegistryArn?: string;

  /**
   * <p>The status of the application.</p>
   */
  Status?: ApplicationStatus | string;

  /**
   * <p>The components of the application.</p>
   */
  Components?: string[];

  /**
   * <p>The time at which the application was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The status message.</p>
   */
  StatusMessage?: string;
}

export enum CredentialType {
  ADMIN = "ADMIN",
}

/**
 * <p>The credentials of your SAP application.</p>
 */
export interface ApplicationCredential {
  /**
   * <p>The name of the SAP HANA database.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The type of the application credentials. </p>
   */
  CredentialType: CredentialType | string | undefined;

  /**
   * <p>The secret ID created in AWS Secrets Manager to store the credentials of the SAP
   *          application. </p>
   */
  SecretId: string | undefined;
}

/**
 * <p>The summary of the SAP application registered with AWS Systems Manager for SAP.
 *       </p>
 */
export interface ApplicationSummary {
  /**
   * <p>The ID of the application.</p>
   */
  Id?: string;

  /**
   * <p>The type of the application.</p>
   */
  Type?: ApplicationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * <p>The tags on the application.</p>
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
 * <p>Describes the properties of the Dedicated Host. </p>
 */
export interface Host {
  /**
   * <p>The name of the Dedicated Host.</p>
   */
  HostName?: string;

  /**
   * <p>The role of the Dedicated Host.</p>
   */
  HostRole?: HostRole | string;

  /**
   * <p>The IP address of the Dedicated Host. </p>
   */
  HostIp?: string;

  /**
   * <p>The instance ID of the instance on the Dedicated Host.</p>
   */
  InstanceId?: string;
}

export enum ComponentStatus {
  ACTIVATED = "ACTIVATED",
}

/**
 * <p>The SAP component of your application.</p>
 */
export interface Component {
  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The type of the component.</p>
   */
  ComponentType?: ComponentType | string;

  /**
   * <p>The status of the component.</p>
   */
  Status?: ComponentStatus | string;

  /**
   * <p>The SAP HANA databases of the component.</p>
   */
  Databases?: string[];

  /**
   * <p>The hosts of the component.</p>
   */
  Hosts?: Host[];

  /**
   * <p>The primary host of the component.</p>
   */
  PrimaryHost?: string;

  /**
   * <p>The time at which the component was last updated.</p>
   */
  LastUpdated?: Date;
}

/**
 * <p>The summary of the component.</p>
 */
export interface ComponentSummary {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The type of the component.</p>
   */
  ComponentType?: ComponentType | string;

  /**
   * <p>The tags of the component.</p>
   */
  Tags?: Record<string, string>;
}

/**
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
 * <p>The SAP HANA database of the application registered with AWS Systems Manager for
 *          SAP.</p>
 */
export interface Database {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The credentials of the database.</p>
   */
  Credentials?: ApplicationCredential[];

  /**
   * <p>The ID of the SAP HANA database.</p>
   */
  DatabaseId?: string;

  /**
   * <p>The name of the database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The type of the database.</p>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  Arn?: string;

  /**
   * <p>The status of the database.</p>
   */
  Status?: DatabaseStatus | string;

  /**
   * <p>The primary host of the database.</p>
   */
  PrimaryHost?: string;

  /**
   * <p>The SQL port of the database.</p>
   */
  SQLPort?: number;

  /**
   * <p>The time at which the database was last updated.</p>
   */
  LastUpdated?: Date;
}

/**
 * <p>The summary of the database.</p>
 */
export interface DatabaseSummary {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The ID of the database.</p>
   */
  DatabaseId?: string;

  /**
   * <p>The type of the database.</p>
   */
  DatabaseType?: DatabaseType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  Arn?: string;

  /**
   * <p>The tags of the database.</p>
   */
  Tags?: Record<string, string>;
}

export enum PermissionActionType {
  RESTORE = "RESTORE",
}

export interface DeleteResourcePermissionInput {
  /**
   * <p>Delete or restore the permissions on the target database.</p>
   */
  ActionType?: PermissionActionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source resource.</p>
   */
  SourceResourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;
}

export interface DeleteResourcePermissionOutput {
  /**
   * <p>The policy that removes permissions on the target database.</p>
   */
  Policy?: string;
}

/**
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

export interface DeregisterApplicationInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;
}

export interface DeregisterApplicationOutput {}

export enum FilterOperator {
  EQUALS = "Equals",
  GREATER_THAN_OR_EQUALS = "GreaterThanOrEquals",
  LESS_THAN_OR_EQUALS = "LessThanOrEquals",
}

/**
 * <p>A specific result obtained by specifying the name, value, and operator. </p>
 */
export interface Filter {
  /**
   * <p>The name of the filter. Filter names are case-sensitive. </p>
   */
  Name: string | undefined;

  /**
   * <p>The filter values. Filter values are case-sensitive. If you specify multiple values for
   *          a filter, the values are joined with an OR, and the request returns all results that match
   *          any of the specified values</p>
   */
  Value: string | undefined;

  /**
   * <p>The operator for the filter. </p>
   */
  Operator: FilterOperator | string | undefined;
}

export interface GetApplicationInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   */
  ApplicationArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application registry.</p>
   */
  AppRegistryArn?: string;
}

export interface GetApplicationOutput {
  /**
   * <p>Returns all of the metadata of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  Application?: Application;

  /**
   * <p>The tags of a registered application.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetComponentInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId: string | undefined;
}

export interface GetComponentOutput {
  /**
   * <p>The component of an application registered with AWS Systems Manager for SAP.</p>
   */
  Component?: Component;
}

export interface GetDatabaseInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The ID of the database.</p>
   */
  DatabaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the database.</p>
   */
  DatabaseArn?: string;
}

export interface GetDatabaseOutput {
  /**
   * <p>The SAP HANA database of an application registered with AWS Systems Manager for
   *          SAP.</p>
   */
  Database?: Database;

  /**
   * <p>The tags of a database.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetOperationInput {
  /**
   * <p>The ID of the operation.</p>
   */
  OperationId: string | undefined;
}

export enum OperationStatus {
  ERROR = "ERROR",
  INPROGRESS = "INPROGRESS",
  SUCCESS = "SUCCESS",
}

/**
 * <p>The operations performed by AWS Systems Manager for SAP.</p>
 */
export interface Operation {
  /**
   * <p>The ID of the operation.</p>
   */
  Id?: string;

  /**
   * <p>The type of the operation.</p>
   */
  Type?: string;

  /**
   * <p>The status of the operation.</p>
   */
  Status?: OperationStatus | string;

  /**
   * <p>The status message of the operation.</p>
   */
  StatusMessage?: string;

  /**
   * <p>The properties of the operation.</p>
   */
  Properties?: Record<string, string>;

  /**
   * <p>The resource type of the operation.</p>
   */
  ResourceType?: string;

  /**
   * <p>The resource ID of the operation.</p>
   */
  ResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the operation.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The start time of the operation.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the operation.</p>
   */
  EndTime?: Date;

  /**
   * <p>The time at which the operation was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export interface GetOperationOutput {
  /**
   * <p>Returns the details of an operation.</p>
   */
  Operation?: Operation;
}

export interface GetResourcePermissionInput {
  /**
   * <p/>
   */
  ActionType?: PermissionActionType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. </p>
   */
  MaxResults?: number;
}

export interface ListApplicationsOutput {
  /**
   * <p>The applications registered with AWS Systems Manager for SAP.</p>
   */
  Applications?: ApplicationSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListComponentsInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value.</p>
   *          <p>If you do not specify a value for MaxResults, the request returns 50 items per page by
   *          default.</p>
   */
  MaxResults?: number;
}

export interface ListComponentsOutput {
  /**
   * <p>List of components registered with AWS System Manager for SAP.</p>
   */
  Components?: ComponentSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are
   *          no more results to return.</p>
   */
  NextToken?: string;
}

export interface ListDatabasesInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the component.</p>
   */
  ComponentId?: string;

  /**
   * <p>The token for the next page of results. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *          results, make another call with the returned nextToken value. If you do not specify a value
   *          for MaxResults, the request returns 50 items per page by default.</p>
   */
  MaxResults?: number;
}

export interface ListDatabasesOutput {
  /**
   * <p>The SAP HANA databases of an application.</p>
   */
  Databases?: DatabaseSummary[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return.</p>
   */
  NextToken?: string;
}

export interface ListOperationsInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining results, make
   *          another call with the returned nextToken value.
   *          If you do not specify a value for MaxResults, the request returns 50 items per page by default.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next page of results.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>The filters of an operation.</p>
   */
  Filters?: Filter[];
}

export interface ListOperationsOutput {
  /**
   * <p>List of operations performed by AWS Systems Manager for SAP.</p>
   */
  Operations?: Operation[];

  /**
   * <p>The token to use to retrieve the next page of results. This value is null when there are no more
   *          results to return.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
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
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The type of the application.</p>
   */
  ApplicationType: ApplicationType | string | undefined;

  /**
   * <p>The Amazon EC2 instances on which your SAP application is running.</p>
   */
  Instances: string[] | undefined;

  /**
   * <p>The SAP instance number of the application.</p>
   */
  SapInstanceNumber?: string;

  /**
   * <p>The System ID of the application.</p>
   */
  Sid?: string;

  /**
   * <p>The tags to be attached to the SAP application.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The credentials of the SAP application.</p>
   */
  Credentials: ApplicationCredential[] | undefined;
}

export interface RegisterApplicationOutput {
  /**
   * <p>The application registered with AWS Systems Manager for SAP.</p>
   */
  Application?: Application;

  /**
   * <p>The ID of the operation.</p>
   */
  OperationId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags on a resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Adds/updates or removes credentials for applications registered with AWS Systems
   *          Manager for SAP.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateApplicationSettingsInput {
  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>The credentials to be added or updated.</p>
   */
  CredentialsToAddOrUpdate?: ApplicationCredential[];

  /**
   * <p>The credentials to be removed.</p>
   */
  CredentialsToRemove?: ApplicationCredential[];
}

export interface UpdateApplicationSettingsOutput {
  /**
   * <p>The update message.</p>
   */
  Message?: string;

  /**
   * <p>The IDs of the operations.</p>
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
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
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
export const ListOperationsInputFilterSensitiveLog = (obj: ListOperationsInput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOperationsOutputFilterSensitiveLog = (obj: ListOperationsOutput): any => ({
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
