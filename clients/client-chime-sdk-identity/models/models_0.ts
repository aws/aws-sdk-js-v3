import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>The details of an <code>AppInstance</code>, an instance of an Amazon Chime SDK messaging
 *          application.</p>
 */
export interface AppInstance {
  /**
   * <p>The ARN of the messaging instance.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The name of an <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * <p>The time at which an <code>AppInstance</code> was created. In epoch milliseconds.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time an <code>AppInstance</code> was last updated. In epoch milliseconds.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>The metadata of an <code>AppInstance</code>.</p>
   */
  Metadata?: string;
}

export namespace AppInstance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstance): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of a user.</p>
 */
export interface Identity {
  /**
   * <p>The ARN in an Identity.</p>
   */
  Arn?: string;

  /**
   * <p>The name in an Identity.</p>
   */
  Name?: string;
}

export namespace Identity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdmin {
  /**
   * <p>The <code>AppInstanceAdmin</code> data.</p>
   */
  Admin?: Identity;

  /**
   * <p>The ARN of the <code>AppInstance</code> for which the user is an administrator.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The time at which an administrator was created.</p>
   */
  CreatedTimestamp?: Date;
}

export namespace AppInstanceAdmin {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceAdmin): any => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
}

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
}

export namespace AppInstanceAdminSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceAdminSummary): any => ({
    ...obj,
    ...(obj.Admin && { Admin: Identity.filterSensitiveLog(obj.Admin) }),
  });
}

/**
 * <p>Summary of the data for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceSummary {
  /**
   * <p>The <code>AppInstance</code> ARN.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of the <code>AppInstance</code>.</p>
   */
  Metadata?: string;
}

export namespace AppInstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
}

export namespace ChannelRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChannelRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the data-retention settings for an <code>AppInstance</code>.</p>
 */
export interface AppInstanceRetentionSettings {
  /**
   * <p>The length of time in days to retain the messages in a channel.</p>
   */
  ChannelRetentionSettings?: ChannelRetentionSettings;
}

export namespace AppInstanceRetentionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceRetentionSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUser {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which the <code>AppInstanceUser</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;
}

export namespace AppInstanceUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceUser): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

/**
 * <p>Summary of the details of an <code>AppInstanceUser</code>.</p>
 */
export interface AppInstanceUserSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The name of an <code>AppInstanceUser</code>.</p>
   */
  Name?: string;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata?: string;
}

export namespace AppInstanceUserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppInstanceUserSummary): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export enum ErrorCode {
  AccessDenied = "AccessDenied",
  BadRequest = "BadRequest",
  Conflict = "Conflict",
  Forbidden = "Forbidden",
  NotFound = "NotFound",
  PhoneNumberAssociationsExist = "PhoneNumberAssociationsExist",
  PreconditionFailed = "PreconditionFailed",
  ResourceLimitExceeded = "ResourceLimitExceeded",
  ServiceFailure = "ServiceFailure",
  ServiceUnavailable = "ServiceUnavailable",
  Throttled = "Throttled",
  Throttling = "Throttling",
  Unauthorized = "Unauthorized",
  Unprocessable = "Unprocessable",
  VoiceConnectorGroupAssociationsExist = "VoiceConnectorGroupAssociationsExist",
}

/**
 * <p>The input parameters don't match the service's restrictions.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a tag applied to a resource.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

export interface CreateAppInstanceRequest {
  /**
   * <p>The name of the <code>AppInstance</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstance</code>. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The <code>ClientRequestToken</code> of the <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ResourceLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export interface ThrottledClientException extends __SmithyException, $MetadataBearer {
  name: "ThrottledClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace ThrottledClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottledClientException): any => ({
    ...obj,
  });
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export interface UnauthorizedClientException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedClientException";
  $fault: "client";
  Code?: ErrorCode | string;
  Message?: string;
}

export namespace UnauthorizedClientException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedClientException): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminRequest {
  /**
   * <p>The ARN of the administrator of the current <code>AppInstance</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace CreateAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface CreateAppInstanceAdminResponse {
  /**
   * <p>The name and ARN of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceAdmin?: Identity;

  /**
   * <p>The ARN of the of the admin for the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace CreateAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: Identity.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface CreateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code> request.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The user ID of the <code>AppInstance</code>.</p>
   */
  AppInstanceUserId: string | undefined;

  /**
   * <p>The user's name.</p>
   */
  Name: string | undefined;

  /**
   * <p>The request's metadata. Limited to a 1KB string in UTF-8.</p>
   */
  Metadata?: string;

  /**
   * <p>The token assigned to the user requesting an <code>AppInstance</code>.</p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Tags assigned to the <code>AppInstanceUser</code>.</p>
   */
  Tags?: Tag[];
}

export namespace CreateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
    ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace CreateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAppInstanceUserResponse): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>'s administrator.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DeleteAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DeleteAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the
   *             <code>AppInstance</code>. All timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
}

export namespace DescribeAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
    ...obj,
    ...(obj.AppInstance && { AppInstance: AppInstance.filterSensitiveLog(obj.AppInstance) }),
  });
}

export interface DescribeAppInstanceAdminRequest {
  /**
   * <p>The ARN of the <code>AppInstanceAdmin</code>.</p>
   */
  AppInstanceAdminArn: string | undefined;

  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace DescribeAppInstanceAdminRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the
   *             <code>AppInstance</code>, and the created and last-updated timestamps. All timestamps
   *          use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

export namespace DescribeAppInstanceAdminResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdmin.filterSensitiveLog(obj.AppInstanceAdmin) }),
  });
}

export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export namespace DescribeAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}

export namespace DescribeAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
    ...obj,
    ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUser.filterSensitiveLog(obj.AppInstanceUser) }),
  });
}

export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export namespace GetAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsRequest): any => ({
    ...obj,
  });
}

export interface GetAppInstanceRetentionSettingsResponse {
  /**
   * <p>The retention settings for the <code>AppInstance</code>.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * <p>The timestamp representing the time at which the specified items are retained, in Epoch
   *          Seconds.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export namespace GetAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAppInstanceRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface ListAppInstanceAdminsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of administrators that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstanceAdminsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListAppInstanceAdminsResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The information for each administrator.</p>
   */
  AppInstanceAdmins?: AppInstanceAdminSummary[];

  /**
   * <p>The token returned from previous API requests until the number of administrators is
   *          reached.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstanceAdminsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
    ...obj,
    ...(obj.AppInstanceAdmins && {
      AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListAppInstancesRequest {
  /**
   * <p>The maximum number of <code>AppInstance</code>s that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API requests until you reach the maximum number of
   *             <code>AppInstances</code>.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListAppInstancesResponse {
  /**
   * <p>The information for each <code>AppInstance</code>.</p>
   */
  AppInstances?: AppInstanceSummary[];

  /**
   * <p>The token passed by previous API requests until the maximum number of
   *             <code>AppInstance</code>s is reached.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
    ...obj,
    ...(obj.AppInstances && {
      AppInstances: obj.AppInstances.map((item) => AppInstanceSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListAppInstanceUsersRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The maximum number of requests that you want returned.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstanceUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
    ...obj,
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface ListAppInstanceUsersResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;

  /**
   * <p>The information for each requested <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUsers?: AppInstanceUserSummary[];

  /**
   * <p>The token passed by previous API calls until all requested users are returned.</p>
   */
  NextToken?: string;
}

export namespace ListAppInstanceUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
    ...obj,
    ...(obj.AppInstanceUsers && {
      AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummary.filterSensitiveLog(item)),
    }),
    ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
  });
}

export interface PutAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings: AppInstanceRetentionSettings | undefined;
}

export namespace PutAppInstanceRetentionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceRetentionSettingsRequest): any => ({
    ...obj,
  });
}

export interface PutAppInstanceRetentionSettingsResponse {
  /**
   * <p>The time in days to retain data. Data type: number.</p>
   */
  AppInstanceRetentionSettings?: AppInstanceRetentionSettings;

  /**
   * <p>The time at which the API deletes data.</p>
   */
  InitiateDeletionTimestamp?: Date;
}

export namespace PutAppInstanceRetentionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAppInstanceRetentionSettingsResponse): any => ({
    ...obj,
  });
}

export interface UpdateAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;

  /**
   * <p>The name that you want to change.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata that you want to change.</p>
   */
  Metadata: string | undefined;
}

export namespace UpdateAppInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

export namespace UpdateAppInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The metadata of the <code>AppInstanceUser</code>.</p>
   */
  Metadata: string | undefined;
}

export namespace UpdateAppInstanceUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
    ...obj,
    ...(obj.Name && { Name: SENSITIVE_STRING }),
    ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  });
}

export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

export namespace UpdateAppInstanceUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAppInstanceUserResponse): any => ({
    ...obj,
  });
}
