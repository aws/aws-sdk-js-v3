// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ChimeSDKIdentityServiceException as __BaseException } from "./ChimeSDKIdentityServiceException";

export enum AllowMessages {
  ALL = "ALL",
  NONE = "NONE",
}

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

/**
 * <p>Summary of the details of an <code>AppInstanceAdmin</code>.</p>
 */
export interface AppInstanceAdminSummary {
  /**
   * <p>The details of the <code>AppInstanceAdmin</code>.</p>
   */
  Admin?: Identity;
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

/**
 * <p>The details of the retention settings for a channel.</p>
 */
export interface ChannelRetentionSettings {
  /**
   * <p>The time in days to retain the messages in a channel.</p>
   */
  RetentionDays?: number;
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

/**
 * <p>The attributes of an <code>Endpoint</code>.</p>
 */
export interface EndpointAttributes {
  /**
   * <p>The device token for the GCM, APNS, and APNS_SANDBOX endpoint types.</p>
   */
  DeviceToken: string | undefined;

  /**
   * <p>The VOIP device token for the APNS and APNS_SANDBOX endpoint types.</p>
   */
  VoipDeviceToken?: string;
}

export enum EndpointStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum EndpointStatusReason {
  INVALID_DEVICE_TOKEN = "INVALID_DEVICE_TOKEN",
  INVALID_PINPOINT_ARN = "INVALID_PINPOINT_ARN",
}

/**
 * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive
 *                message. When INACTIVE, the corresponding reason will be conveyed through
 *                EndpointStatusReason.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input through the <code>ResourceArn</code> field.</p>
 *             </li>
 *          </ul>
 */
export interface EndpointState {
  /**
   * <p>Enum that indicates the Status of an <code>AppInstanceUserEndpoint</code>.</p>
   */
  Status: EndpointStatus | string | undefined;

  /**
   * <p>The reason for the <code>EndpointStatus</code>.</p>
   */
  StatusReason?: EndpointStatusReason | string;
}

export enum AppInstanceUserEndpointType {
  APNS = "APNS",
  APNS_SANDBOX = "APNS_SANDBOX",
  GCM = "GCM",
}

/**
 * <p>An endpoint under an Amazon Chime <code>AppInstanceUser</code> that receives messages for a user. For push notifications, the endpoint is a mobile device used to receive mobile push notifications for a user.</p>
 */
export interface AppInstanceUserEndpoint {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Type?: AppInstanceUserEndpointType | string;

  /**
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The attributes of an <code>Endpoint</code>.</p>
   */
  EndpointAttributes?: EndpointAttributes;

  /**
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The time at which an <code>AppInstanceUserEndpoint</code> was last updated.</p>
   */
  LastUpdatedTimestamp?: Date;

  /**
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;

  /**
   * <p>A read-only field that represents the state of an <code>AppInstanceUserEndpoint</code>. Supported values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is active and able to receive messages. When <code>ACTIVE</code>, the <code>EndpointStatusReason</code> remains empty.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INACTIVE</code>: The <code>AppInstanceUserEndpoint</code> is inactive and can't receive message. When <code>INACTIVE</code>, the corresponding reason will be
   *             conveyed through <code>EndpointStatusReason</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_DEVICE_TOKEN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to invalid device token</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID_PINPOINT_ARN</code> indicates that an <code>AppInstanceUserEndpoint</code> is <code>INACTIVE</code> due to an invalid pinpoint ARN that was input
   *             through the <code>ResourceArn</code> field.</p>
   *             </li>
   *          </ul>
   */
  EndpointState?: EndpointState;
}

/**
 * <p>Summary of the details of an <code>AppInstanceUserEndpoint</code>.</p>
 */
export interface AppInstanceUserEndpointSummary {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Type?: AppInstanceUserEndpointType | string;

  /**
   * <p>BBoolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;

  /**
   * <p>A read-only field that represent the state of an <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointState?: EndpointState;
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
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
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
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>A tag object containing a key-value pair.</p>
 */
export interface Tag {
  /**
   * <p>The key in a tag.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value in a tag.</p>
   */
  Value: string | undefined;
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

export interface CreateAppInstanceResponse {
  /**
   * <p>The Amazon Resource Number (ARN) of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
}

/**
 * <p>The client is permanently forbidden from making the request.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request exceeds the resource limit.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service encountered an unexpected error.</p>
 */
export class ServiceFailureException extends __BaseException {
  readonly name: "ServiceFailureException" = "ServiceFailureException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceFailureException, __BaseException>) {
    super({
      name: "ServiceFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceFailureException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client exceeded its request rate limit.</p>
 */
export class ThrottledClientException extends __BaseException {
  readonly name: "ThrottledClientException" = "ThrottledClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledClientException, __BaseException>) {
    super({
      name: "ThrottledClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The client is not currently authorized to make the request.</p>
 */
export class UnauthorizedClientException extends __BaseException {
  readonly name: "UnauthorizedClientException" = "UnauthorizedClientException";
  readonly $fault: "client" = "client";
  Code?: ErrorCode | string;
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedClientException, __BaseException>) {
    super({
      name: "UnauthorizedClientException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
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

export interface CreateAppInstanceUserResponse {
  /**
   * <p>The user's ARN.</p>
   */
  AppInstanceUserArn?: string;
}

export interface DeleteAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
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

export interface DeleteAppInstanceUserRequest {
  /**
   * <p>The ARN of the user request being deleted.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export interface DeregisterAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;
}

export interface DescribeAppInstanceRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
}

export interface DescribeAppInstanceResponse {
  /**
   * <p>The ARN, metadata, created and last-updated timestamps, and the name of the
   *             <code>AppInstance</code>. All timestamps use epoch milliseconds.</p>
   */
  AppInstance?: AppInstance;
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

export interface DescribeAppInstanceAdminResponse {
  /**
   * <p>The ARN and name of the <code>AppInstanceUser</code>, the ARN of the
   *             <code>AppInstance</code>, and the created and last-updated timestamps. All timestamps
   *          use epoch milliseconds.</p>
   */
  AppInstanceAdmin?: AppInstanceAdmin;
}

export interface DescribeAppInstanceUserRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;
}

export interface DescribeAppInstanceUserResponse {
  /**
   * <p>The name of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUser?: AppInstanceUser;
}

export interface DescribeAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;
}

export interface DescribeAppInstanceUserEndpointResponse {
  /**
   * <p>The full details of an <code>AppInstanceUserEndpoint</code>: the <code>AppInstanceUserArn</code>, ID, name, type, resource ARN, attributes,
   *          allow messages, state, and created and last updated timestamps. All timestamps use epoch milliseconds.</p>
   */
  AppInstanceUserEndpoint?: AppInstanceUserEndpoint;
}

export interface GetAppInstanceRetentionSettingsRequest {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn: string | undefined;
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

export interface ListAppInstanceUserEndpointsRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The maximum number of endpoints that you want to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   */
  NextToken?: string;
}

export interface ListAppInstanceUserEndpointsResponse {
  /**
   * <p>The information for each requested <code>AppInstanceUserEndpoint</code>.</p>
   */
  AppInstanceUserEndpoints?: AppInstanceUserEndpointSummary[];

  /**
   * <p>The token passed by previous API calls until all requested endpoints are returned.</p>
   */
  NextToken?: string;
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags?: Tag[];
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

export interface RegisterAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * <p>The type of the <code>AppInstanceUserEndpoint</code>. Supported types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>APNS</code>: The mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>APNS_SANDBOX</code>: The sandbox environment of the mobile notification service for an Apple device.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GCM</code>: The mobile notification service for an Android device.</p>
   *             </li>
   *          </ul>
   *          <p>Populate the <code>ResourceArn</code> value of each type as <code>PinpointAppArn</code>.</p>
   */
  Type: AppInstanceUserEndpointType | string | undefined;

  /**
   * <p>The ARN of the resource to which the endpoint belongs.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The attributes of an <code>Endpoint</code>.</p>
   */
  EndpointAttributes: EndpointAttributes | undefined;

  /**
   * <p>The idempotency token for each client request. </p>
   */
  ClientRequestToken?: string;

  /**
   * <p>Boolean that controls whether the AppInstanceUserEndpoint is opted in to receive messages. <code>ALL</code> indicates the endpoint receives all messages.
   *          <code>NONE</code> indicates the endpoint receives no messages.</p>
   */
  AllowMessages?: AllowMessages | string;
}

export interface RegisterAppInstanceUserEndpointResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag key-value pairs.</p>
   */
  Tags: Tag[] | undefined;
}

export interface UntagResourceRequest {
  /**
   * <p>The resource ARN.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  TagKeys: string[] | undefined;
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

export interface UpdateAppInstanceResponse {
  /**
   * <p>The ARN of the <code>AppInstance</code>.</p>
   */
  AppInstanceArn?: string;
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

export interface UpdateAppInstanceUserResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;
}

export interface UpdateAppInstanceUserEndpointRequest {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn: string | undefined;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId: string | undefined;

  /**
   * <p>The name of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  Name?: string;

  /**
   * <p>Boolean that controls whether the <code>AppInstanceUserEndpoint</code> is opted in to receive messages. <code>ALL</code> indicates the endpoint will receive all messages.
   *          <code>NONE</code> indicates the endpoint will receive no messages.</p>
   */
  AllowMessages?: AllowMessages | string;
}

export interface UpdateAppInstanceUserEndpointResponse {
  /**
   * <p>The ARN of the <code>AppInstanceUser</code>.</p>
   */
  AppInstanceUserArn?: string;

  /**
   * <p>The unique identifier of the <code>AppInstanceUserEndpoint</code>.</p>
   */
  EndpointId?: string;
}

/**
 * @internal
 */
export const AppInstanceFilterSensitiveLog = (obj: AppInstance): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IdentityFilterSensitiveLog = (obj: Identity): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceAdminFilterSensitiveLog = (obj: AppInstanceAdmin): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceAdminSummaryFilterSensitiveLog = (obj: AppInstanceAdminSummary): any => ({
  ...obj,
  ...(obj.Admin && { Admin: IdentityFilterSensitiveLog(obj.Admin) }),
});

/**
 * @internal
 */
export const AppInstanceSummaryFilterSensitiveLog = (obj: AppInstanceSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelRetentionSettingsFilterSensitiveLog = (obj: ChannelRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppInstanceRetentionSettingsFilterSensitiveLog = (obj: AppInstanceRetentionSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppInstanceUserFilterSensitiveLog = (obj: AppInstanceUser): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EndpointAttributesFilterSensitiveLog = (obj: EndpointAttributes): any => ({
  ...obj,
  ...(obj.DeviceToken && { DeviceToken: SENSITIVE_STRING }),
  ...(obj.VoipDeviceToken && { VoipDeviceToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EndpointStateFilterSensitiveLog = (obj: EndpointState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AppInstanceUserEndpointFilterSensitiveLog = (obj: AppInstanceUserEndpoint): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.ResourceArn && { ResourceArn: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
});

/**
 * @internal
 */
export const AppInstanceUserEndpointSummaryFilterSensitiveLog = (obj: AppInstanceUserEndpointSummary): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AppInstanceUserSummaryFilterSensitiveLog = (obj: AppInstanceUserSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAppInstanceRequestFilterSensitiveLog = (obj: CreateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceResponseFilterSensitiveLog = (obj: CreateAppInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppInstanceAdminRequestFilterSensitiveLog = (obj: CreateAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAppInstanceAdminResponseFilterSensitiveLog = (obj: CreateAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: IdentityFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserRequestFilterSensitiveLog = (obj: CreateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.AppInstanceUserId && { AppInstanceUserId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateAppInstanceUserResponseFilterSensitiveLog = (obj: CreateAppInstanceUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceRequestFilterSensitiveLog = (obj: DeleteAppInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceAdminRequestFilterSensitiveLog = (obj: DeleteAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAppInstanceUserRequestFilterSensitiveLog = (obj: DeleteAppInstanceUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeregisterAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: DeregisterAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAppInstanceRequestFilterSensitiveLog = (obj: DescribeAppInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceResponseFilterSensitiveLog = (obj: DescribeAppInstanceResponse): any => ({
  ...obj,
  ...(obj.AppInstance && { AppInstance: AppInstanceFilterSensitiveLog(obj.AppInstance) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceAdminRequestFilterSensitiveLog = (obj: DescribeAppInstanceAdminRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceAdminResponseFilterSensitiveLog = (obj: DescribeAppInstanceAdminResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmin && { AppInstanceAdmin: AppInstanceAdminFilterSensitiveLog(obj.AppInstanceAdmin) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserRequestFilterSensitiveLog = (obj: DescribeAppInstanceUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAppInstanceUserResponseFilterSensitiveLog = (obj: DescribeAppInstanceUserResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUser && { AppInstanceUser: AppInstanceUserFilterSensitiveLog(obj.AppInstanceUser) }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: DescribeAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeAppInstanceUserEndpointResponseFilterSensitiveLog = (
  obj: DescribeAppInstanceUserEndpointResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoint && {
    AppInstanceUserEndpoint: AppInstanceUserEndpointFilterSensitiveLog(obj.AppInstanceUserEndpoint),
  }),
});

/**
 * @internal
 */
export const GetAppInstanceRetentionSettingsRequestFilterSensitiveLog = (
  obj: GetAppInstanceRetentionSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAppInstanceRetentionSettingsResponseFilterSensitiveLog = (
  obj: GetAppInstanceRetentionSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAppInstanceAdminsRequestFilterSensitiveLog = (obj: ListAppInstanceAdminsRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceAdminsResponseFilterSensitiveLog = (obj: ListAppInstanceAdminsResponse): any => ({
  ...obj,
  ...(obj.AppInstanceAdmins && {
    AppInstanceAdmins: obj.AppInstanceAdmins.map((item) => AppInstanceAdminSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesRequestFilterSensitiveLog = (obj: ListAppInstancesRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstancesResponseFilterSensitiveLog = (obj: ListAppInstancesResponse): any => ({
  ...obj,
  ...(obj.AppInstances && { AppInstances: obj.AppInstances.map((item) => AppInstanceSummaryFilterSensitiveLog(item)) }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsRequestFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUserEndpointsResponseFilterSensitiveLog = (
  obj: ListAppInstanceUserEndpointsResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserEndpoints && {
    AppInstanceUserEndpoints: obj.AppInstanceUserEndpoints.map((item) =>
      AppInstanceUserEndpointSummaryFilterSensitiveLog(item)
    ),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersRequestFilterSensitiveLog = (obj: ListAppInstanceUsersRequest): any => ({
  ...obj,
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAppInstanceUsersResponseFilterSensitiveLog = (obj: ListAppInstanceUsersResponse): any => ({
  ...obj,
  ...(obj.AppInstanceUsers && {
    AppInstanceUsers: obj.AppInstanceUsers.map((item) => AppInstanceUserSummaryFilterSensitiveLog(item)),
  }),
  ...(obj.NextToken && { NextToken: SENSITIVE_STRING }),
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
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutAppInstanceRetentionSettingsRequestFilterSensitiveLog = (
  obj: PutAppInstanceRetentionSettingsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAppInstanceRetentionSettingsResponseFilterSensitiveLog = (
  obj: PutAppInstanceRetentionSettingsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RegisterAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: RegisterAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.ResourceArn && { ResourceArn: SENSITIVE_STRING }),
  ...(obj.EndpointAttributes && { EndpointAttributes: EndpointAttributesFilterSensitiveLog(obj.EndpointAttributes) }),
  ...(obj.ClientRequestToken && { ClientRequestToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RegisterAppInstanceUserEndpointResponseFilterSensitiveLog = (
  obj: RegisterAppInstanceUserEndpointResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceRequestFilterSensitiveLog = (obj: UpdateAppInstanceRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceResponseFilterSensitiveLog = (obj: UpdateAppInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppInstanceUserRequestFilterSensitiveLog = (obj: UpdateAppInstanceUserRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Metadata && { Metadata: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserResponseFilterSensitiveLog = (obj: UpdateAppInstanceUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAppInstanceUserEndpointRequestFilterSensitiveLog = (
  obj: UpdateAppInstanceUserEndpointRequest
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAppInstanceUserEndpointResponseFilterSensitiveLog = (
  obj: UpdateAppInstanceUserEndpointResponse
): any => ({
  ...obj,
  ...(obj.AppInstanceUserArn && { AppInstanceUserArn: SENSITIVE_STRING }),
  ...(obj.EndpointId && { EndpointId: SENSITIVE_STRING }),
});
