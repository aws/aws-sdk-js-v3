// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BackupGatewayServiceException as __BaseException } from "./BackupGatewayServiceException";

/**
 * @public
 * <p>The operation cannot proceed because you have insufficient permissions.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A description of why you have insufficient permissions.</p>
   */
  ErrorCode: string | undefined;

  Message?: string;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface AssociateGatewayToServerInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the server that hosts your virtual machines.</p>
   */
  ServerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateGatewayToServerOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a gateway.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 * <p>The operation cannot proceed because it is not supported.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A description of why the operation is not supported.</p>
   */
  ErrorCode: string | undefined;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>A description of which internal error occured.</p>
   */
  ErrorCode?: string;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>Error: TPS has been limited to protect against intentional or unintentional
   *       high request volumes.</p>
   */
  ErrorCode: string | undefined;

  Message?: string;
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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The operation did not succeed because a validation error occurred.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A description of what caused the validation error.</p>
   */
  ErrorCode?: string;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 * <p>Describes a bandwidth rate limit interval for a gateway. A bandwidth
 *       rate limit schedule consists of one or more bandwidth rate limit intervals.
 *       A bandwidth rate limit interval defines a period of time on one or more days
 *       of the week, during which bandwidth rate limits are specified for uploading,
 *       downloading, or both.</p>
 */
export interface BandwidthRateLimitInterval {
  /**
   * @public
   * <p>The average upload rate limit component of the bandwidth rate limit
   *       interval, in bits per second. This field does not appear in the response if
   *       the upload rate limit is not set.</p>
   *          <note>
   *             <p>For Backup Gateway, the minimum value is <code>(Value)</code>.</p>
   *          </note>
   */
  AverageUploadRateLimitInBitsPerSec?: number;

  /**
   * @public
   * <p>The hour of the day to start the bandwidth rate limit interval.</p>
   */
  StartHourOfDay: number | undefined;

  /**
   * @public
   * <p>The hour of the day to end the bandwidth rate limit interval.</p>
   */
  EndHourOfDay: number | undefined;

  /**
   * @public
   * <p>The minute of the hour to start the bandwidth rate limit interval. The
   *       interval begins at the start of that minute. To begin an interval exactly at
   *       the start of the hour, use the value <code>0</code>.</p>
   */
  StartMinuteOfHour: number | undefined;

  /**
   * @public
   * <p>The minute of the hour to end the bandwidth rate limit interval.</p>
   *          <important>
   *             <p>The bandwidth rate limit interval ends at the end of the minute.
   *       To end an interval at the end of an hour, use the value <code>59</code>.</p>
   *          </important>
   */
  EndMinuteOfHour: number | undefined;

  /**
   * @public
   * <p>The days of the week component of the bandwidth rate limit interval,
   *       represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents
   *       Saturday.</p>
   */
  DaysOfWeek: number[] | undefined;
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   */
  GatewayArn?: string;

  /**
   * @public
   * <p>An array containing bandwidth rate limit schedule intervals for a gateway.
   *       When no bandwidth rate limit intervals have been scheduled, the array is empty.</p>
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[];
}

/**
 * @public
 * <p>A resource that is required for the action wasn't found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A description of which resource wasn't found.</p>
   */
  ErrorCode?: string;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>An array containing bandwidth rate limit schedule intervals for a gateway.
   *       When no bandwidth rate limit intervals have been scheduled, the array is empty.</p>
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 * @enum
 */
export const GatewayType = {
  BACKUP_VM: "BACKUP_VM",
} as const;

/**
 * @public
 */
export type GatewayType = (typeof GatewayType)[keyof typeof GatewayType];

/**
 * @public
 * <p>A key-value pair you can use to manage, filter, and search for your resources. Allowed
 *       characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ :
 *       /.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The key part of a tag's key-value pair. The key can't start with <code>aws:</code>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value part of a tag's key-value pair.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGatewayInput {
  /**
   * @public
   * <p>The activation key of the created gateway.</p>
   */
  ActivationKey: string | undefined;

  /**
   * @public
   * <p>The display name of the created gateway.</p>
   */
  GatewayDisplayName: string | undefined;

  /**
   * @public
   * <p>The type of created gateway.</p>
   */
  GatewayType: GatewayType | string | undefined;

  /**
   * @public
   * <p>A list of up to 50 tags to assign to the gateway. Each tag is a key-value pair.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway you create.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface DeleteGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway to delete.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway you deleted.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway to disassociate.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway you disassociated.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface GetGatewayInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 * <p>This is your gateway's weekly maintenance start time including the day and time of the week.
 *       Note that values are in terms of the gateway's time zone. Can be weekly or monthly.</p>
 */
export interface MaintenanceStartTime {
  /**
   * @public
   * <p>The day of the month component of the maintenance start time represented as an ordinal number from
   *       1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.</p>
   */
  DayOfMonth?: number;

  /**
   * @public
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday
   *       and 6 represents Saturday. The day of week is in the time zone of the gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * @public
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *       where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * @public
   * <p>The minute component of the maintenance start time represented as <i>mm</i>, where
   *       <i>mm</i> is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.</p>
   */
  MinuteOfHour: number | undefined;
}

/**
 * @public
 * <p>The details of gateway.</p>
 */
export interface GatewayDetails {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the
   *       gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and
   *       Amazon Web Services Region.</p>
   */
  GatewayArn?: string;

  /**
   * @public
   * <p>The display name of the gateway.</p>
   */
  GatewayDisplayName?: string;

  /**
   * @public
   * <p>The type of the gateway type.</p>
   */
  GatewayType?: GatewayType | string;

  /**
   * @public
   * <p>The hypervisor ID of the gateway.</p>
   */
  HypervisorId?: string;

  /**
   * @public
   * <p>Details showing the last time Backup gateway communicated
   *       with the cloud, in Unix format and UTC time.</p>
   */
  LastSeenTime?: Date;

  /**
   * @public
   * <p>Returns your gateway's weekly maintenance start time including the day and time of the week.
   *       Note that values are in terms of the gateway's time zone. Can be weekly or monthly.</p>
   */
  MaintenanceStartTime?: MaintenanceStartTime;

  /**
   * @public
   * <p>Details showing the next update availability time of the
   *       gateway.</p>
   */
  NextUpdateAvailabilityTime?: Date;

  /**
   * @public
   * <p>The DNS name for the virtual private cloud (VPC) endpoint the gateway
   *       uses to connect to the cloud for backup gateway.</p>
   */
  VpcEndpoint?: string;
}

/**
 * @public
 */
export interface GetGatewayOutput {
  /**
   * @public
   * <p>By providing the ARN (Amazon Resource Name), this
   *       API returns the gateway.</p>
   */
  Gateway?: GatewayDetails;
}

/**
 * @public
 */
export interface ListGatewaysInput {
  /**
   * @public
   * <p>The maximum number of gateways to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>MaxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A gateway is an Backup Gateway appliance that runs on the customer's network
 *       to provide seamless connectivity to backup storage in the Amazon Web Services Cloud.</p>
 */
export interface Gateway {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   */
  GatewayArn?: string;

  /**
   * @public
   * <p>The display name of the gateway.</p>
   */
  GatewayDisplayName?: string;

  /**
   * @public
   * <p>The type of the gateway.</p>
   */
  GatewayType?: GatewayType | string;

  /**
   * @public
   * <p>The hypervisor ID of the gateway.</p>
   */
  HypervisorId?: string;

  /**
   * @public
   * <p>The last time Backup gateway communicated with the gateway, in Unix format and
   *       UTC time.</p>
   */
  LastSeenTime?: Date;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * @public
   * <p>A list of your gateways.</p>
   */
  Gateways?: Gateway[];

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the gateway, used to specify its maintenance start
   *       time.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>The hour of the day to start maintenance on a gateway.</p>
   */
  HourOfDay: number | undefined;

  /**
   * @public
   * <p>The minute of the hour to start maintenance on a gateway.</p>
   */
  MinuteOfHour: number | undefined;

  /**
   * @public
   * <p>The day of the week to start maintenance on a gateway.</p>
   */
  DayOfWeek?: number;

  /**
   * @public
   * <p>The day of the month start maintenance on a gateway.</p>
   *          <p>Valid values range from <code>Sunday</code> to <code>Saturday</code>.</p>
   */
  DayOfMonth?: number;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a gateway for which you set the maintenance start
   *       time.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface TestHypervisorConfigurationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway to the hypervisor to test.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password for the hypervisor.</p>
   */
  Password?: string;
}

/**
 * @public
 */
export interface TestHypervisorConfigurationOutput {}

/**
 * @public
 */
export interface UpdateGatewayInformationInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway to update.</p>
   */
  GatewayArn: string | undefined;

  /**
   * @public
   * <p>The updated display name of the gateway.</p>
   */
  GatewayDisplayName?: string;
}

/**
 * @public
 */
export interface UpdateGatewayInformationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway you updated.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       to be updated.</p>
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       you updated.</p>
   */
  GatewayArn?: string;
}

/**
 * @public
 */
export interface DeleteHypervisorInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor to delete.</p>
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteHypervisorOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor you deleted.</p>
   */
  HypervisorArn?: string;
}

/**
 * @public
 */
export interface GetHypervisorInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SyncMetadataStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  PARTIALLY_FAILED: "PARTIALLY_FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type SyncMetadataStatus = (typeof SyncMetadataStatus)[keyof typeof SyncMetadataStatus];

/**
 * @public
 * @enum
 */
export const HypervisorState = {
  ERROR: "ERROR",
  OFFLINE: "OFFLINE",
  ONLINE: "ONLINE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type HypervisorState = (typeof HypervisorState)[keyof typeof HypervisorState];

/**
 * @public
 * <p>These are the details of the specified hypervisor. A hypervisor is hardware,
 *       software, or firmware that creates and manages virtual machines, and allocates
 *       resources to them.</p>
 */
export interface HypervisorDetails {
  /**
   * @public
   * <p>The server host of the hypervisor. This can be either an IP address or
   *       a fully-qualified domain name (FQDN).</p>
   */
  Host?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS
   *       used to encrypt the hypervisor.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>This is the name of the specified hypervisor.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group of gateways within
   *       the requested log.</p>
   */
  LogGroupArn?: string;

  /**
   * @public
   * <p>This is the current state of the specified hypervisor.</p>
   *          <p>The possible states are <code>PENDING</code>, <code>ONLINE</code>,
   *       <code>OFFLINE</code>, or <code>ERROR</code>.</p>
   */
  State?: HypervisorState | string;

  /**
   * @public
   * <p>This is the time when the most recent successful sync
   *       of metadata occurred.</p>
   */
  LastSuccessfulMetadataSyncTime?: Date;

  /**
   * @public
   * <p>This is the most recent status for the indicated metadata sync.</p>
   */
  LatestMetadataSyncStatusMessage?: string;

  /**
   * @public
   * <p>This is the most recent status for the indicated metadata sync.</p>
   */
  LatestMetadataSyncStatus?: SyncMetadataStatus | string;
}

/**
 * @public
 */
export interface GetHypervisorOutput {
  /**
   * @public
   * <p>Details about the requested hypervisor.</p>
   */
  Hypervisor?: HypervisorDetails;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 * <p>This displays the mapping of on-premises VMware tags to the
 *       corresponding Amazon Web Services tags.</p>
 */
export interface VmwareToAwsTagMapping {
  /**
   * @public
   * <p>The is the category of VMware.</p>
   */
  VmwareCategory: string | undefined;

  /**
   * @public
   * <p>This is the user-defined name of a VMware tag.</p>
   */
  VmwareTagName: string | undefined;

  /**
   * @public
   * <p>The key part of the Amazon Web Services tag's key-value pair.</p>
   */
  AwsTagKey: string | undefined;

  /**
   * @public
   * <p>The value part of the Amazon Web Services tag's key-value pair.</p>
   */
  AwsTagValue: string | undefined;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;

  /**
   * @public
   * <p>This is a display of the mappings of on-premises VMware tags to the
   *       Amazon Web Services tags.</p>
   */
  VmwareToAwsTagMappings?: VmwareToAwsTagMapping[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role.</p>
   */
  IamRoleArn?: string;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn: string | undefined;

  /**
   * @public
   * <p>This action requests the mappings of on-premises VMware tags to the
   *       Amazon Web Services tags.</p>
   */
  VmwareToAwsTagMappings: VmwareToAwsTagMapping[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role.</p>
   */
  IamRoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationInput {
  /**
   * @public
   * <p>The name of the hypervisor.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>The username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password for the hypervisor.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The Key Management Service for the hypervisor.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The tags of the hypervisor configuration to import.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor you disassociated.</p>
   */
  HypervisorArn?: string;
}

/**
 * @public
 */
export interface ListHypervisorsInput {
  /**
   * @public
   * <p>The maximum number of hypervisors to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents the hypervisor's permissions to which the gateway will connect.</p>
 *          <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
 *       and allocates resources to them.</p>
 */
export interface Hypervisor {
  /**
   * @public
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Key Management Service used to encrypt the
   *       hypervisor.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>The name of the hypervisor.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the hypervisor.</p>
   */
  State?: HypervisorState | string;
}

/**
 * @public
 */
export interface ListHypervisorsOutput {
  /**
   * @public
   * <p>A list of your <code>Hypervisor</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   */
  Hypervisors?: Hypervisor[];

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   */
  HypervisorArn?: string;
}

/**
 * @public
 */
export interface UpdateHypervisorInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor to update.</p>
   */
  HypervisorArn: string | undefined;

  /**
   * @public
   * <p>The updated host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   */
  Host?: string;

  /**
   * @public
   * <p>The updated username for the hypervisor.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The updated password for the hypervisor.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The updated name for the hypervisor</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group of gateways within the requested log.</p>
   */
  LogGroupArn?: string;
}

/**
 * @public
 */
export interface UpdateHypervisorOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor you updated.</p>
   */
  HypervisorArn?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource's tags to list.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource's tags that you listed.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>A list of the resource's tags.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tags to assign to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource you tagged.</p>
   */
  ResourceARN?: string;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The list of tag keys specifying which tags to remove.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource from which you removed tags.</p>
   */
  ResourceARN?: string;
}

/**
 * @public
 */
export interface GetVirtualMachineInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual machine.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 * <p>A VMware tag is a tag attached to a specific virtual machine.
 *       A <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html">tag</a>
 *       is a key-value pair you can use to manage, filter, and search for your resources.</p>
 *          <p>The content of VMware tags can be matched to Amazon Web Services tags.</p>
 */
export interface VmwareTag {
  /**
   * @public
   * <p>The is the category of VMware.</p>
   */
  VmwareCategory?: string;

  /**
   * @public
   * <p>This is the user-defined name of a VMware tag.</p>
   */
  VmwareTagName?: string;

  /**
   * @public
   * <p>This is a user-defined description of a VMware tag.</p>
   */
  VmwareTagDescription?: string;
}

/**
 * @public
 * <p>Your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names (ARNs).</p>
 */
export interface VirtualMachineDetails {
  /**
   * @public
   * <p>The host name of the virtual machine.</p>
   */
  HostName?: string;

  /**
   * @public
   * <p>The ID of the virtual machine's hypervisor.</p>
   */
  HypervisorId?: string;

  /**
   * @public
   * <p>The name of the virtual machine.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The path of the virtual machine.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual machine. For example,
   *       <code>arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL</code>.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The most recent date a virtual machine was backed up, in Unix format and UTC time.</p>
   */
  LastBackupDate?: Date;

  /**
   * @public
   * <p>These are the details of the VMware tags associated with the specified
   *       virtual machine.</p>
   */
  VmwareTags?: VmwareTag[];
}

/**
 * @public
 */
export interface GetVirtualMachineOutput {
  /**
   * @public
   * <p>This object contains the basic attributes of <code>VirtualMachine</code> contained by the output of
   *       <code>GetVirtualMachine</code>
   *          </p>
   */
  VirtualMachine?: VirtualMachineDetails;
}

/**
 * @public
 */
export interface ListVirtualMachinesInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hypervisor connected to your virtual machine.</p>
   */
  HypervisorArn?: string;

  /**
   * @public
   * <p>The maximum number of virtual machines to list.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A virtual machine that is on a hypervisor.</p>
 */
export interface VirtualMachine {
  /**
   * @public
   * <p>The host name of the virtual machine.</p>
   */
  HostName?: string;

  /**
   * @public
   * <p>The ID of the virtual machine's hypervisor.</p>
   */
  HypervisorId?: string;

  /**
   * @public
   * <p>The name of the virtual machine.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The path of the virtual machine.</p>
   */
  Path?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the virtual machine. For example,
   *         <code>arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL</code>.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The most recent date a virtual machine was backed up, in Unix format and UTC time.</p>
   */
  LastBackupDate?: Date;
}

/**
 * @public
 */
export interface ListVirtualMachinesOutput {
  /**
   * @public
   * <p>A list of your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   */
  VirtualMachines?: VirtualMachine[];

  /**
   * @public
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   */
  NextToken?: string;
}

/**
 * @internal
 */
export const TestHypervisorConfigurationInputFilterSensitiveLog = (obj: TestHypervisorConfigurationInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ImportHypervisorConfigurationInputFilterSensitiveLog = (obj: ImportHypervisorConfigurationInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateHypervisorInputFilterSensitiveLog = (obj: UpdateHypervisorInput): any => ({
  ...obj,
  ...(obj.Username && { Username: SENSITIVE_STRING }),
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});
