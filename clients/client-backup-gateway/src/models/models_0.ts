// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BackupGatewayServiceException as __BaseException } from "./BackupGatewayServiceException";

/**
 * <p>The operation cannot proceed because you have insufficient permissions.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of why you have insufficient permissions.</p>
   * @public
   */
  ErrorCode: string | undefined;

  Message?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the server that hosts your virtual machines.</p>
   * @public
   */
  ServerArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateGatewayToServerOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of a gateway.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * <p>The operation cannot proceed because it is not supported.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of why the operation is not supported.</p>
   * @public
   */
  ErrorCode: string | undefined;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>The operation did not succeed because an internal error occurred. Try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * <p>A description of which internal error occured.</p>
   * @public
   */
  ErrorCode?: string | undefined;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * <p>TPS has been limited to protect against intentional or unintentional
 *     high request volumes.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>Error: TPS has been limited to protect against intentional or unintentional
   *       high request volumes.</p>
   * @public
   */
  ErrorCode: string | undefined;

  Message?: string | undefined;
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
 * <p>The operation did not succeed because a validation error occurred.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of what caused the validation error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * <p>Describes a bandwidth rate limit interval for a gateway. A bandwidth
 *       rate limit schedule consists of one or more bandwidth rate limit intervals.
 *       A bandwidth rate limit interval defines a period of time on one or more days
 *       of the week, during which bandwidth rate limits are specified for uploading,
 *       downloading, or both.</p>
 * @public
 */
export interface BandwidthRateLimitInterval {
  /**
   * <p>The average upload rate limit component of the bandwidth rate limit
   *       interval, in bits per second. This field does not appear in the response if
   *       the upload rate limit is not set.</p>
   *          <note>
   *             <p>For Backup Gateway, the minimum value is <code>(Value)</code>.</p>
   *          </note>
   * @public
   */
  AverageUploadRateLimitInBitsPerSec?: number | undefined;

  /**
   * <p>The hour of the day to start the bandwidth rate limit interval.</p>
   * @public
   */
  StartHourOfDay: number | undefined;

  /**
   * <p>The hour of the day to end the bandwidth rate limit interval.</p>
   * @public
   */
  EndHourOfDay: number | undefined;

  /**
   * <p>The minute of the hour to start the bandwidth rate limit interval. The
   *       interval begins at the start of that minute. To begin an interval exactly at
   *       the start of the hour, use the value <code>0</code>.</p>
   * @public
   */
  StartMinuteOfHour: number | undefined;

  /**
   * <p>The minute of the hour to end the bandwidth rate limit interval.</p>
   *          <important>
   *             <p>The bandwidth rate limit interval ends at the end of the minute.
   *       To end an interval at the end of an hour, use the value <code>59</code>.</p>
   *          </important>
   * @public
   */
  EndMinuteOfHour: number | undefined;

  /**
   * <p>The days of the week component of the bandwidth rate limit interval,
   *       represented as ordinal numbers from 0 to 6, where 0 represents Sunday and 6 represents
   *       Saturday.</p>
   * @public
   */
  DaysOfWeek: number[] | undefined;
}

/**
 * @public
 */
export interface GetBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * <p>An array containing bandwidth rate limit schedule intervals for a gateway.
   *       When no bandwidth rate limit intervals have been scheduled, the array is empty.</p>
   * @public
   */
  BandwidthRateLimitIntervals?: BandwidthRateLimitInterval[] | undefined;
}

/**
 * <p>A resource that is required for the action wasn't found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A description of which resource wasn't found.</p>
   * @public
   */
  ErrorCode?: string | undefined;

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
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>An array containing bandwidth rate limit schedule intervals for a gateway.
   *       When no bandwidth rate limit intervals have been scheduled, the array is empty.</p>
   * @public
   */
  BandwidthRateLimitIntervals: BandwidthRateLimitInterval[] | undefined;
}

/**
 * @public
 */
export interface PutBandwidthRateLimitScheduleOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the
   *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_ListGateways.html">
   *                <code>ListGateways</code>
   *             </a> operation to return a list of gateways
   *       for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn?: string | undefined;
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
 * <p>A key-value pair you can use to manage, filter, and search for your resources. Allowed
 *       characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ :
 *       /.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key part of a tag's key-value pair. The key can't start with <code>aws:</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value part of a tag's key-value pair.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGatewayInput {
  /**
   * <p>The activation key of the created gateway.</p>
   * @public
   */
  ActivationKey: string | undefined;

  /**
   * <p>The display name of the created gateway.</p>
   * @public
   */
  GatewayDisplayName: string | undefined;

  /**
   * <p>The type of created gateway.</p>
   * @public
   */
  GatewayType: GatewayType | undefined;

  /**
   * <p>A list of up to 50 tags to assign to the gateway. Each tag is a key-value pair.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you create.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to delete.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you deleted.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to disassociate.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateGatewayFromServerOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you disassociated.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * <p>This is your gateway's weekly maintenance start time including the day and time of the week.
 *       Note that values are in terms of the gateway's time zone. Can be weekly or monthly.</p>
 * @public
 */
export interface MaintenanceStartTime {
  /**
   * <p>The day of the month component of the maintenance start time represented as an ordinal number from
   *       1 to 28, where 1 represents the first day of the month and 28 represents the last day of the month.</p>
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * <p>An ordinal number between 0 and 6 that represents the day of the week, where 0 represents Sunday
   *       and 6 represents Saturday. The day of week is in the time zone of the gateway.</p>
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * <p>The hour component of the maintenance start time represented as <i>hh</i>,
   *       where <i>hh</i> is the hour (0 to 23). The hour of the day is in the time zone of the gateway.</p>
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute component of the maintenance start time represented as <i>mm</i>, where
   *       <i>mm</i> is the minute (0 to 59). The minute of the hour is in the time zone of the gateway.</p>
   * @public
   */
  MinuteOfHour: number | undefined;
}

/**
 * <p>The details of gateway.</p>
 * @public
 */
export interface GatewayDetails {
  /**
   * <p>The Amazon Resource Name (ARN) of the
   *       gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and
   *       Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * <p>The display name of the gateway.</p>
   * @public
   */
  GatewayDisplayName?: string | undefined;

  /**
   * <p>The type of the gateway type.</p>
   * @public
   */
  GatewayType?: GatewayType | undefined;

  /**
   * <p>The hypervisor ID of the gateway.</p>
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * <p>Details showing the last time Backup gateway communicated
   *       with the cloud, in Unix format and UTC time.</p>
   * @public
   */
  LastSeenTime?: Date | undefined;

  /**
   * <p>Returns your gateway's weekly maintenance start time including the day and time of the week.
   *       Note that values are in terms of the gateway's time zone. Can be weekly or monthly.</p>
   * @public
   */
  MaintenanceStartTime?: MaintenanceStartTime | undefined;

  /**
   * <p>Details showing the next update availability time of the
   *       gateway.</p>
   * @public
   */
  NextUpdateAvailabilityTime?: Date | undefined;

  /**
   * <p>The DNS name for the virtual private cloud (VPC) endpoint the gateway
   *       uses to connect to the cloud for backup gateway.</p>
   * @public
   */
  VpcEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayOutput {
  /**
   * <p>By providing the ARN (Amazon Resource Name), this
   *       API returns the gateway.</p>
   * @public
   */
  Gateway?: GatewayDetails | undefined;
}

/**
 * @public
 */
export interface ListGatewaysInput {
  /**
   * <p>The maximum number of gateways to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>MaxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A gateway is an Backup Gateway appliance that runs on the customer's network
 *       to provide seamless connectivity to backup storage in the Amazon Web Services Cloud.</p>
 * @public
 */
export interface Gateway {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway. Use the <code>ListGateways</code> operation
   *       to return a list of gateways for your account and Amazon Web Services Region.</p>
   * @public
   */
  GatewayArn?: string | undefined;

  /**
   * <p>The display name of the gateway.</p>
   * @public
   */
  GatewayDisplayName?: string | undefined;

  /**
   * <p>The type of the gateway.</p>
   * @public
   */
  GatewayType?: GatewayType | undefined;

  /**
   * <p>The hypervisor ID of the gateway.</p>
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * <p>The last time Backup gateway communicated with the gateway, in Unix format and
   *       UTC time.</p>
   * @public
   */
  LastSeenTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysOutput {
  /**
   * <p>A list of your gateways.</p>
   * @public
   */
  Gateways?: Gateway[] | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeInput {
  /**
   * <p>The Amazon Resource Name (ARN) for the gateway, used to specify its maintenance start
   *       time.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>The hour of the day to start maintenance on a gateway.</p>
   * @public
   */
  HourOfDay: number | undefined;

  /**
   * <p>The minute of the hour to start maintenance on a gateway.</p>
   * @public
   */
  MinuteOfHour: number | undefined;

  /**
   * <p>The day of the week to start maintenance on a gateway.</p>
   * @public
   */
  DayOfWeek?: number | undefined;

  /**
   * <p>The day of the month start maintenance on a gateway.</p>
   *          <p>Valid values range from <code>Sunday</code> to <code>Saturday</code>.</p>
   * @public
   */
  DayOfMonth?: number | undefined;
}

/**
 * @public
 */
export interface PutMaintenanceStartTimeOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of a gateway for which you set the maintenance start
   *       time.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface TestHypervisorConfigurationInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway to the hypervisor to test.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The username for the hypervisor.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password for the hypervisor.</p>
   * @public
   */
  Password?: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the gateway to update.</p>
   * @public
   */
  GatewayArn: string | undefined;

  /**
   * <p>The updated display name of the gateway.</p>
   * @public
   */
  GatewayDisplayName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayInformationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway you updated.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       to be updated.</p>
   * @public
   */
  GatewayArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewaySoftwareNowOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway
   *       you updated.</p>
   * @public
   */
  GatewayArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHypervisorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor to delete.</p>
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteHypervisorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you deleted.</p>
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface GetHypervisorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
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
 * <p>These are the details of the specified hypervisor. A hypervisor is hardware,
 *       software, or firmware that creates and manages virtual machines, and allocates
 *       resources to them.</p>
 * @public
 */
export interface HypervisorDetails {
  /**
   * <p>The server host of the hypervisor. This can be either an IP address or
   *       a fully-qualified domain name (FQDN).</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS
   *       used to encrypt the hypervisor.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>This is the name of the specified hypervisor.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group of gateways within
   *       the requested log.</p>
   * @public
   */
  LogGroupArn?: string | undefined;

  /**
   * <p>This is the current state of the specified hypervisor.</p>
   *          <p>The possible states are <code>PENDING</code>, <code>ONLINE</code>,
   *       <code>OFFLINE</code>, or <code>ERROR</code>.</p>
   * @public
   */
  State?: HypervisorState | undefined;

  /**
   * <p>This is the time when the most recent successful sync
   *       of metadata occurred.</p>
   * @public
   */
  LastSuccessfulMetadataSyncTime?: Date | undefined;

  /**
   * <p>This is the most recent status for the indicated metadata sync.</p>
   * @public
   */
  LatestMetadataSyncStatusMessage?: string | undefined;

  /**
   * <p>This is the most recent status for the indicated metadata sync.</p>
   * @public
   */
  LatestMetadataSyncStatus?: SyncMetadataStatus | undefined;
}

/**
 * @public
 */
export interface GetHypervisorOutput {
  /**
   * <p>Details about the requested hypervisor.</p>
   * @public
   */
  Hypervisor?: HypervisorDetails | undefined;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * <p>This displays the mapping of on-premises VMware tags to the
 *       corresponding Amazon Web Services tags.</p>
 * @public
 */
export interface VmwareToAwsTagMapping {
  /**
   * <p>The is the category of VMware.</p>
   * @public
   */
  VmwareCategory: string | undefined;

  /**
   * <p>This is the user-defined name of a VMware tag.</p>
   * @public
   */
  VmwareTagName: string | undefined;

  /**
   * <p>The key part of the Amazon Web Services tag's key-value pair.</p>
   * @public
   */
  AwsTagKey: string | undefined;

  /**
   * <p>The value part of the Amazon Web Services tag's key-value pair.</p>
   * @public
   */
  AwsTagValue: string | undefined;
}

/**
 * @public
 */
export interface GetHypervisorPropertyMappingsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * <p>This is a display of the mappings of on-premises VMware tags to the
   *       Amazon Web Services tags.</p>
   * @public
   */
  VmwareToAwsTagMappings?: VmwareToAwsTagMapping[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role.</p>
   * @public
   */
  IamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn: string | undefined;

  /**
   * <p>This action requests the mappings of on-premises VMware tags to the
   *       Amazon Web Services tags.</p>
   * @public
   */
  VmwareToAwsTagMappings: VmwareToAwsTagMapping[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role.</p>
   * @public
   */
  IamRoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutHypervisorPropertyMappingsOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationInput {
  /**
   * <p>The name of the hypervisor.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   * @public
   */
  Host: string | undefined;

  /**
   * <p>The username for the hypervisor.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password for the hypervisor.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The Key Management Service for the hypervisor.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The tags of the hypervisor configuration to import.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportHypervisorConfigurationOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you disassociated.</p>
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ListHypervisorsInput {
  /**
   * <p>The maximum number of hypervisors to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents the hypervisor's permissions to which the gateway will connect.</p>
 *          <p>A hypervisor is hardware, software, or firmware that creates and manages virtual machines,
 *       and allocates resources to them.</p>
 * @public
 */
export interface Hypervisor {
  /**
   * <p>The server host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Key Management Service used to encrypt the
   *       hypervisor.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>The name of the hypervisor.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the hypervisor.</p>
   * @public
   */
  State?: HypervisorState | undefined;
}

/**
 * @public
 */
export interface ListHypervisorsOutput {
  /**
   * <p>A list of your <code>Hypervisor</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   * @public
   */
  Hypervisors?: Hypervisor[] | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn: string | undefined;
}

/**
 * @public
 */
export interface StartVirtualMachinesMetadataSyncOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor.</p>
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHypervisorInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor to update.</p>
   * @public
   */
  HypervisorArn: string | undefined;

  /**
   * <p>The updated host of the hypervisor. This can be either an IP address or a fully-qualified
   *       domain name (FQDN).</p>
   * @public
   */
  Host?: string | undefined;

  /**
   * <p>The updated username for the hypervisor.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The updated password for the hypervisor.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The updated name for the hypervisor</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the group of gateways within the requested log.</p>
   * @public
   */
  LogGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHypervisorOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor you updated.</p>
   * @public
   */
  HypervisorArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource's tags to list.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource's tags that you listed.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>A list of the resource's tags.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags to assign to the resource.</p>
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource you tagged.</p>
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys specifying which tags to remove.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which you removed tags.</p>
   * @public
   */
  ResourceARN?: string | undefined;
}

/**
 * @public
 */
export interface GetVirtualMachineInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the virtual machine.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A VMware tag is a tag attached to a specific virtual machine.
 *       A <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/API_BGW_Tag.html">tag</a>
 *       is a key-value pair you can use to manage, filter, and search for your resources.</p>
 *          <p>The content of VMware tags can be matched to Amazon Web Services tags.</p>
 * @public
 */
export interface VmwareTag {
  /**
   * <p>The is the category of VMware.</p>
   * @public
   */
  VmwareCategory?: string | undefined;

  /**
   * <p>This is the user-defined name of a VMware tag.</p>
   * @public
   */
  VmwareTagName?: string | undefined;

  /**
   * <p>This is a user-defined description of a VMware tag.</p>
   * @public
   */
  VmwareTagDescription?: string | undefined;
}

/**
 * <p>Your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names (ARNs).</p>
 * @public
 */
export interface VirtualMachineDetails {
  /**
   * <p>The host name of the virtual machine.</p>
   * @public
   */
  HostName?: string | undefined;

  /**
   * <p>The ID of the virtual machine's hypervisor.</p>
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * <p>The name of the virtual machine.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The path of the virtual machine.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual machine. For example,
   *       <code>arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL</code>.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The most recent date a virtual machine was backed up, in Unix format and UTC time.</p>
   * @public
   */
  LastBackupDate?: Date | undefined;

  /**
   * <p>These are the details of the VMware tags associated with the specified
   *       virtual machine.</p>
   * @public
   */
  VmwareTags?: VmwareTag[] | undefined;
}

/**
 * @public
 */
export interface GetVirtualMachineOutput {
  /**
   * <p>This object contains the basic attributes of <code>VirtualMachine</code> contained by the output of
   *       <code>GetVirtualMachine</code>
   *          </p>
   * @public
   */
  VirtualMachine?: VirtualMachineDetails | undefined;
}

/**
 * @public
 */
export interface ListVirtualMachinesInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the hypervisor connected to your virtual machine.</p>
   * @public
   */
  HypervisorArn?: string | undefined;

  /**
   * <p>The maximum number of virtual machines to list.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A virtual machine that is on a hypervisor.</p>
 * @public
 */
export interface VirtualMachine {
  /**
   * <p>The host name of the virtual machine.</p>
   * @public
   */
  HostName?: string | undefined;

  /**
   * <p>The ID of the virtual machine's hypervisor.</p>
   * @public
   */
  HypervisorId?: string | undefined;

  /**
   * <p>The name of the virtual machine.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The path of the virtual machine.</p>
   * @public
   */
  Path?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the virtual machine. For example,
   *         <code>arn:aws:backup-gateway:us-west-1:0000000000000:vm/vm-0000ABCDEFGIJKL</code>.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The most recent date a virtual machine was backed up, in Unix format and UTC time.</p>
   * @public
   */
  LastBackupDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListVirtualMachinesOutput {
  /**
   * <p>A list of your <code>VirtualMachine</code> objects, ordered by their Amazon Resource Names
   *       (ARNs).</p>
   * @public
   */
  VirtualMachines?: VirtualMachine[] | undefined;

  /**
   * <p>The next item following a partial list of returned resources. For example, if a request is
   *       made to return <code>maxResults</code> number of resources, <code>NextToken</code> allows you
   *       to return more items in your list starting at the location pointed to by the next
   *       token.</p>
   * @public
   */
  NextToken?: string | undefined;
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
