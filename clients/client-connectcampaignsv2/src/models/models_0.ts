// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectCampaignsV2ServiceException as __BaseException } from "./ConnectCampaignsV2ServiceException";

/**
 * You do not have sufficient access to perform this action.
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Agentless config
 * @public
 */
export interface AgentlessConfig {}

/**
 * The request could not be processed because of conflict in the current state of the resource.
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Default Email Outbound config
 * @public
 */
export interface EmailOutboundConfig {
  /**
   * Source/Destination Email address used for Email messages
   * @public
   */
  connectSourceEmailAddress: string | undefined;

  /**
   * Display name for Email Address
   * @public
   */
  sourceEmailAddressDisplayName?: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  wisdomTemplateArn: string | undefined;
}

/**
 * Email Outbound Mode
 * @public
 */
export type EmailOutboundMode = EmailOutboundMode.AgentlessMember | EmailOutboundMode.$UnknownMember;

/**
 * @public
 */
export namespace EmailOutboundMode {
  /**
   * Agentless config
   * @public
   */
  export interface AgentlessMember {
    agentless: AgentlessConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentless?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agentless: (value: AgentlessConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EmailOutboundMode, visitor: Visitor<T>): T => {
    if (value.agentless !== undefined) return visitor.agentless(value.agentless);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Email Channel Subtype config
 * @public
 */
export interface EmailChannelSubtypeConfig {
  /**
   * Allocates outbound capacity for the specific channel subtype of this campaign between multiple active campaigns
   * @public
   */
  capacity?: number | undefined;

  /**
   * Email Outbound Mode
   * @public
   */
  outboundMode: EmailOutboundMode | undefined;

  /**
   * Default Email Outbound config
   * @public
   */
  defaultOutboundConfig: EmailOutboundConfig | undefined;
}

/**
 * Default SMS Outbound config
 * @public
 */
export interface SmsOutboundConfig {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectSourcePhoneNumberArn: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  wisdomTemplateArn: string | undefined;
}

/**
 * SMS Outbound Mode
 * @public
 */
export type SmsOutboundMode = SmsOutboundMode.AgentlessMember | SmsOutboundMode.$UnknownMember;

/**
 * @public
 */
export namespace SmsOutboundMode {
  /**
   * Agentless config
   * @public
   */
  export interface AgentlessMember {
    agentless: AgentlessConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentless?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agentless: (value: AgentlessConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SmsOutboundMode, visitor: Visitor<T>): T => {
    if (value.agentless !== undefined) return visitor.agentless(value.agentless);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * SMS Channel Subtype config
 * @public
 */
export interface SmsChannelSubtypeConfig {
  /**
   * Allocates outbound capacity for the specific channel subtype of this campaign between multiple active campaigns
   * @public
   */
  capacity?: number | undefined;

  /**
   * SMS Outbound Mode
   * @public
   */
  outboundMode: SmsOutboundMode | undefined;

  /**
   * Default SMS Outbound config
   * @public
   */
  defaultOutboundConfig: SmsOutboundConfig | undefined;
}

/**
 * Answering Machine Detection config
 * @public
 */
export interface AnswerMachineDetectionConfig {
  /**
   * Enable or disable answering machine detection
   * @public
   */
  enableAnswerMachineDetection: boolean | undefined;

  /**
   * Enable or disable await answer machine prompt
   * @public
   */
  awaitAnswerMachinePrompt?: boolean | undefined;
}

/**
 * Default Telephony Outbound config
 * @public
 */
export interface TelephonyOutboundConfig {
  /**
   * The identifier of the contact flow for the outbound call.
   * @public
   */
  connectContactFlowId: string | undefined;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @public
   */
  connectSourcePhoneNumber?: string | undefined;

  /**
   * Answering Machine Detection config
   * @public
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;
}

/**
 * Predictive config
 * @public
 */
export interface PredictiveConfig {
  /**
   * The bandwidth allocation of a queue resource.
   * @public
   */
  bandwidthAllocation: number | undefined;
}

/**
 * Progressive config
 * @public
 */
export interface ProgressiveConfig {
  /**
   * The bandwidth allocation of a queue resource.
   * @public
   */
  bandwidthAllocation: number | undefined;
}

/**
 * Telephony Outbound Mode
 * @public
 */
export type TelephonyOutboundMode =
  | TelephonyOutboundMode.AgentlessMember
  | TelephonyOutboundMode.PredictiveMember
  | TelephonyOutboundMode.ProgressiveMember
  | TelephonyOutboundMode.$UnknownMember;

/**
 * @public
 */
export namespace TelephonyOutboundMode {
  /**
   * Progressive config
   * @public
   */
  export interface ProgressiveMember {
    progressive: ProgressiveConfig;
    predictive?: never;
    agentless?: never;
    $unknown?: never;
  }

  /**
   * Predictive config
   * @public
   */
  export interface PredictiveMember {
    progressive?: never;
    predictive: PredictiveConfig;
    agentless?: never;
    $unknown?: never;
  }

  /**
   * Agentless config
   * @public
   */
  export interface AgentlessMember {
    progressive?: never;
    predictive?: never;
    agentless: AgentlessConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    progressive?: never;
    predictive?: never;
    agentless?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    progressive: (value: ProgressiveConfig) => T;
    predictive: (value: PredictiveConfig) => T;
    agentless: (value: AgentlessConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TelephonyOutboundMode, visitor: Visitor<T>): T => {
    if (value.progressive !== undefined) return visitor.progressive(value.progressive);
    if (value.predictive !== undefined) return visitor.predictive(value.predictive);
    if (value.agentless !== undefined) return visitor.agentless(value.agentless);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Telephony Channel Subtype config
 * @public
 */
export interface TelephonyChannelSubtypeConfig {
  /**
   * Allocates outbound capacity for the specific channel subtype of this campaign between multiple active campaigns
   * @public
   */
  capacity?: number | undefined;

  /**
   * The queue for the call. If you specify a queue, the phone displayed for caller ID is the phone number specified in the queue. If you do not specify a queue, the queue defined in the contact flow is used. If you do not specify a queue, you must specify a source phone number.
   * @public
   */
  connectQueueId?: string | undefined;

  /**
   * Telephony Outbound Mode
   * @public
   */
  outboundMode: TelephonyOutboundMode | undefined;

  /**
   * Default Telephony Outbound config
   * @public
   */
  defaultOutboundConfig: TelephonyOutboundConfig | undefined;
}

/**
 * Campaign Channel Subtype config
 * @public
 */
export interface ChannelSubtypeConfig {
  /**
   * Telephony Channel Subtype config
   * @public
   */
  telephony?: TelephonyChannelSubtypeConfig | undefined;

  /**
   * SMS Channel Subtype config
   * @public
   */
  sms?: SmsChannelSubtypeConfig | undefined;

  /**
   * Email Channel Subtype config
   * @public
   */
  email?: EmailChannelSubtypeConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const CommunicationLimitTimeUnit = {
  DAY: "DAY",
} as const;

/**
 * @public
 */
export type CommunicationLimitTimeUnit = (typeof CommunicationLimitTimeUnit)[keyof typeof CommunicationLimitTimeUnit];

/**
 * Communication Limit
 * @public
 */
export interface CommunicationLimit {
  /**
   * Maximum number of contacts allowed for a given target within the given frequency.
   * @public
   */
  maxCountPerRecipient: number | undefined;

  /**
   * The number of days to consider with regards to this limit.
   * @public
   */
  frequency: number | undefined;

  /**
   * The communication limit time unit.
   * @public
   */
  unit: CommunicationLimitTimeUnit | undefined;
}

/**
 * Communication limits
 * @public
 */
export type CommunicationLimits =
  | CommunicationLimits.CommunicationLimitsListMember
  | CommunicationLimits.$UnknownMember;

/**
 * @public
 */
export namespace CommunicationLimits {
  /**
   * List of communication limit
   * @public
   */
  export interface CommunicationLimitsListMember {
    communicationLimitsList: CommunicationLimit[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    communicationLimitsList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    communicationLimitsList: (value: CommunicationLimit[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CommunicationLimits, visitor: Visitor<T>): T => {
    if (value.communicationLimitsList !== undefined)
      return visitor.communicationLimitsList(value.communicationLimitsList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Communication limits config
 * @public
 */
export interface CommunicationLimitsConfig {
  /**
   * Communication limits
   * @public
   */
  allChannelSubtypes?: CommunicationLimits | undefined;
}

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * Time range in 24 hour format
 * @public
 */
export interface TimeRange {
  /**
   * Time in ISO 8601 format, e.g. T23:11
   * @public
   */
  startTime: string | undefined;

  /**
   * Time in ISO 8601 format, e.g. T23:11
   * @public
   */
  endTime: string | undefined;
}

/**
 * Open Hours config
 * @public
 */
export type OpenHours = OpenHours.DailyHoursMember | OpenHours.$UnknownMember;

/**
 * @public
 */
export namespace OpenHours {
  /**
   * Daily Hours map
   * @public
   */
  export interface DailyHoursMember {
    dailyHours: Partial<Record<DayOfWeek, TimeRange[]>>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    dailyHours?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    dailyHours: (value: Partial<Record<DayOfWeek, TimeRange[]>>) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: OpenHours, visitor: Visitor<T>): T => {
    if (value.dailyHours !== undefined) return visitor.dailyHours(value.dailyHours);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Restricted period
 * @public
 */
export interface RestrictedPeriod {
  /**
   * The name of a restricted period.
   * @public
   */
  name?: string | undefined;

  /**
   * Date in ISO 8601 format, e.g. 2024-01-01
   * @public
   */
  startDate: string | undefined;

  /**
   * Date in ISO 8601 format, e.g. 2024-01-01
   * @public
   */
  endDate: string | undefined;
}

/**
 * Restricted period config
 * @public
 */
export type RestrictedPeriods = RestrictedPeriods.RestrictedPeriodListMember | RestrictedPeriods.$UnknownMember;

/**
 * @public
 */
export namespace RestrictedPeriods {
  /**
   * List of restricted period
   * @public
   */
  export interface RestrictedPeriodListMember {
    restrictedPeriodList: RestrictedPeriod[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    restrictedPeriodList?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    restrictedPeriodList: (value: RestrictedPeriod[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RestrictedPeriods, visitor: Visitor<T>): T => {
    if (value.restrictedPeriodList !== undefined) return visitor.restrictedPeriodList(value.restrictedPeriodList);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * Time window config
 * @public
 */
export interface TimeWindow {
  /**
   * Open Hours config
   * @public
   */
  openHours: OpenHours | undefined;

  /**
   * Restricted period config
   * @public
   */
  restrictedPeriods?: RestrictedPeriods | undefined;
}

/**
 * @public
 * @enum
 */
export const LocalTimeZoneDetectionType = {
  AREA_CODE: "AREA_CODE",
  ZIP_CODE: "ZIP_CODE",
} as const;

/**
 * @public
 */
export type LocalTimeZoneDetectionType = (typeof LocalTimeZoneDetectionType)[keyof typeof LocalTimeZoneDetectionType];

/**
 * Local time zone config
 * @public
 */
export interface LocalTimeZoneConfig {
  /**
   * Time Zone Id in the IANA format
   * @public
   */
  defaultTimeZone?: string | undefined;

  /**
   * Local TimeZone Detection method list
   * @public
   */
  localTimeZoneDetection?: LocalTimeZoneDetectionType[] | undefined;
}

/**
 * Campaign communication time config
 * @public
 */
export interface CommunicationTimeConfig {
  /**
   * Local time zone config
   * @public
   */
  localTimeZoneConfig: LocalTimeZoneConfig | undefined;

  /**
   * Time window config
   * @public
   */
  telephony?: TimeWindow | undefined;

  /**
   * Time window config
   * @public
   */
  sms?: TimeWindow | undefined;

  /**
   * Time window config
   * @public
   */
  email?: TimeWindow | undefined;
}

/**
 * Campaign schedule
 * @public
 */
export interface Schedule {
  /**
   * Timestamp with no UTC offset or timezone
   * @public
   */
  startTime: Date | undefined;

  /**
   * Timestamp with no UTC offset or timezone
   * @public
   */
  endTime: Date | undefined;

  /**
   * Time duration in ISO 8601 format
   * @public
   */
  refreshFrequency?: string | undefined;
}

/**
 * Event trigger of the campaign
 * @public
 */
export interface EventTrigger {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  customerProfilesDomainArn?: string | undefined;
}

/**
 * Source of the campaign
 * @public
 */
export type Source = Source.CustomerProfilesSegmentArnMember | Source.EventTriggerMember | Source.$UnknownMember;

/**
 * @public
 */
export namespace Source {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  export interface CustomerProfilesSegmentArnMember {
    customerProfilesSegmentArn: string;
    eventTrigger?: never;
    $unknown?: never;
  }

  /**
   * Event trigger of the campaign
   * @public
   */
  export interface EventTriggerMember {
    customerProfilesSegmentArn?: never;
    eventTrigger: EventTrigger;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customerProfilesSegmentArn?: never;
    eventTrigger?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    customerProfilesSegmentArn: (value: string) => T;
    eventTrigger: (value: EventTrigger) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Source, visitor: Visitor<T>): T => {
    if (value.customerProfilesSegmentArn !== undefined)
      return visitor.customerProfilesSegmentArn(value.customerProfilesSegmentArn);
    if (value.eventTrigger !== undefined) return visitor.eventTrigger(value.eventTrigger);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * The request for CreateCampaign API.
 * @public
 */
export interface CreateCampaignRequest {
  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Campaign Channel Subtype config
   * @public
   */
  channelSubtypeConfig: ChannelSubtypeConfig | undefined;

  /**
   * Source of the campaign
   * @public
   */
  source?: Source | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectCampaignFlowArn?: string | undefined;

  /**
   * Campaign schedule
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * Campaign communication time config
   * @public
   */
  communicationTimeConfig?: CommunicationTimeConfig | undefined;

  /**
   * Communication limits config
   * @public
   */
  communicationLimitsOverride?: CommunicationLimitsConfig | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The response for Create Campaign API
 * @public
 */
export interface CreateCampaignResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id?: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn?: string | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Request processing failed because of an error or failure with the service.
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The specified resource was not found.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Request would cause a service quota to be exceeded.
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The request was denied due to request throttling.
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The input fails to satisfy the constraints specified by an AWS service.
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

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
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * The request for DeleteCampaign API.
 * @public
 */
export interface DeleteCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelSubtype = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  TELEPHONY: "TELEPHONY",
} as const;

/**
 * @public
 */
export type ChannelSubtype = (typeof ChannelSubtype)[keyof typeof ChannelSubtype];

/**
 * The request for DeleteCampaignChannelSubtypeConfig API.
 * @public
 */
export interface DeleteCampaignChannelSubtypeConfigRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The type of campaign channel subtype.
   * @public
   */
  channelSubtype: ChannelSubtype | undefined;
}

/**
 * @public
 * @enum
 */
export const CommunicationLimitsConfigType = {
  ALL_CHANNEL_SUBTYPES: "ALL_CHANNEL_SUBTYPES",
} as const;

/**
 * @public
 */
export type CommunicationLimitsConfigType =
  (typeof CommunicationLimitsConfigType)[keyof typeof CommunicationLimitsConfigType];

/**
 * The request for DeleteCampaignCommunicationLimits API.
 * @public
 */
export interface DeleteCampaignCommunicationLimitsRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The type of campaign communication limits config.
   * @public
   */
  config: CommunicationLimitsConfigType | undefined;
}

/**
 * @public
 * @enum
 */
export const CampaignState = {
  /**
   * Campaign is in completed state
   */
  COMPLETED: "Completed",
  /**
   * Campaign is in failed state
   */
  FAILED: "Failed",
  /**
   * Campaign is in initialized state
   */
  INITIALIZED: "Initialized",
  /**
   * Campaign is in paused state
   */
  PAUSED: "Paused",
  /**
   * Campaign is in running state
   */
  RUNNING: "Running",
  /**
   * Campaign is in stopped state
   */
  STOPPED: "Stopped",
} as const;

/**
 * @public
 */
export type CampaignState = (typeof CampaignState)[keyof typeof CampaignState];

/**
 * The request could not be processed because of conflict in the current state of the campaign.
 * @public
 */
export class InvalidCampaignStateException extends __BaseException {
  readonly name: "InvalidCampaignStateException" = "InvalidCampaignStateException";
  readonly $fault: "client" = "client";
  /**
   * State of a campaign
   * @public
   */
  state: CampaignState | undefined;

  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCampaignStateException, __BaseException>) {
    super({
      name: "InvalidCampaignStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCampaignStateException.prototype);
    this.state = opts.state;
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * @public
 * @enum
 */
export const CommunicationTimeConfigType = {
  EMAIL: "EMAIL",
  SMS: "SMS",
  TELEPHONY: "TELEPHONY",
} as const;

/**
 * @public
 */
export type CommunicationTimeConfigType =
  (typeof CommunicationTimeConfigType)[keyof typeof CommunicationTimeConfigType];

/**
 * The request for DeleteCampaignCommunicationTime API.
 * @public
 */
export interface DeleteCampaignCommunicationTimeRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The type of campaign communication time config
   * @public
   */
  config: CommunicationTimeConfigType | undefined;
}

/**
 * @public
 * @enum
 */
export const CampaignDeletionPolicy = {
  DELETE_ALL: "DELETE_ALL",
  RETAIN_ALL: "RETAIN_ALL",
} as const;

/**
 * @public
 */
export type CampaignDeletionPolicy = (typeof CampaignDeletionPolicy)[keyof typeof CampaignDeletionPolicy];

/**
 * The request for DeleteConnectInstanceConfig API.
 * @public
 */
export interface DeleteConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Enumeration of the policies to enact on existing campaigns during instance config deletion
   * @public
   */
  campaignDeletionPolicy?: CampaignDeletionPolicy | undefined;
}

/**
 * The request could not be processed because of conflict in the current state.
 * @public
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * A header that defines the error encountered while processing the request.
   * @public
   */
  xAmzErrorType?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
    this.xAmzErrorType = opts.xAmzErrorType;
  }
}

/**
 * Customer Profiles integration identifier
 * @public
 */
export interface CustomerProfilesIntegrationIdentifier {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  domainArn: string | undefined;
}

/**
 * Q Connect integration identifier
 * @public
 */
export interface QConnectIntegrationIdentifier {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  knowledgeBaseArn: string | undefined;
}

/**
 * Integration identifier for Connect instance
 * @public
 */
export type IntegrationIdentifier =
  | IntegrationIdentifier.CustomerProfilesMember
  | IntegrationIdentifier.QConnectMember
  | IntegrationIdentifier.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationIdentifier {
  /**
   * Customer Profiles integration identifier
   * @public
   */
  export interface CustomerProfilesMember {
    customerProfiles: CustomerProfilesIntegrationIdentifier;
    qConnect?: never;
    $unknown?: never;
  }

  /**
   * Q Connect integration identifier
   * @public
   */
  export interface QConnectMember {
    customerProfiles?: never;
    qConnect: QConnectIntegrationIdentifier;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customerProfiles?: never;
    qConnect?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    customerProfiles: (value: CustomerProfilesIntegrationIdentifier) => T;
    qConnect: (value: QConnectIntegrationIdentifier) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IntegrationIdentifier, visitor: Visitor<T>): T => {
    if (value.customerProfiles !== undefined) return visitor.customerProfiles(value.customerProfiles);
    if (value.qConnect !== undefined) return visitor.qConnect(value.qConnect);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * The request for DeleteConnectInstanceIntegration API.
 * @public
 */
export interface DeleteConnectInstanceIntegrationRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Integration identifier for Connect instance
   * @public
   */
  integrationIdentifier: IntegrationIdentifier | undefined;
}

/**
 * The request for DeleteInstanceOnboardingJob API.
 * @public
 */
export interface DeleteInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * The request for DescribeCampaign API.
 * @public
 */
export interface DescribeCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * An Amazon Connect campaign.
 * @public
 */
export interface Campaign {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Campaign Channel Subtype config
   * @public
   */
  channelSubtypeConfig: ChannelSubtypeConfig | undefined;

  /**
   * Source of the campaign
   * @public
   */
  source?: Source | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectCampaignFlowArn?: string | undefined;

  /**
   * Campaign schedule
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * Campaign communication time config
   * @public
   */
  communicationTimeConfig?: CommunicationTimeConfig | undefined;

  /**
   * Communication limits config
   * @public
   */
  communicationLimitsOverride?: CommunicationLimitsConfig | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The response for DescribeCampaign API.
 * @public
 */
export interface DescribeCampaignResponse {
  /**
   * An Amazon Connect campaign.
   * @public
   */
  campaign?: Campaign | undefined;
}

/**
 * The request for GetCampaignState API.
 * @public
 */
export interface GetCampaignStateRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * The response for GetCampaignState API.
 * @public
 */
export interface GetCampaignStateResponse {
  /**
   * State of a campaign
   * @public
   */
  state?: CampaignState | undefined;
}

/**
 * The request for GetCampaignStateBatch API.
 * @public
 */
export interface GetCampaignStateBatchRequest {
  /**
   * List of CampaignId
   * @public
   */
  campaignIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const GetCampaignStateBatchFailureCode = {
  /**
   * The specified resource was not found
   */
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type GetCampaignStateBatchFailureCode =
  (typeof GetCampaignStateBatchFailureCode)[keyof typeof GetCampaignStateBatchFailureCode];

/**
 * Failed response of campaign state
 * @public
 */
export interface FailedCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  campaignId?: string | undefined;

  /**
   * A predefined code indicating the error that caused the failure in getting state of campaigns
   * @public
   */
  failureCode?: GetCampaignStateBatchFailureCode | undefined;
}

/**
 * Successful response of campaign state
 * @public
 */
export interface SuccessfulCampaignStateResponse {
  /**
   * Identifier representing a Campaign
   * @public
   */
  campaignId?: string | undefined;

  /**
   * State of a campaign
   * @public
   */
  state?: CampaignState | undefined;
}

/**
 * The response for GetCampaignStateBatch API.
 * @public
 */
export interface GetCampaignStateBatchResponse {
  /**
   * List of successful response of campaign state
   * @public
   */
  successfulRequests?: SuccessfulCampaignStateResponse[] | undefined;

  /**
   * List of failed requests of campaign state
   * @public
   */
  failedRequests?: FailedCampaignStateResponse[] | undefined;
}

/**
 * The request for GetConnectInstanceConfig API.
 * @public
 */
export interface GetConnectInstanceConfigRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
 * If disabled, service will perform encryption with its own key.
 * If enabled, a KMS key id needs to be provided and KMS charges will apply.
 * KMS is only type supported
 * @public
 */
export interface EncryptionConfig {
  /**
   * Boolean to indicate if custom encryption has been enabled.
   * @public
   */
  enabled: boolean | undefined;

  /**
   * Server-side encryption type.
   * @public
   */
  encryptionType?: EncryptionType | undefined;

  /**
   * KMS key id/arn for encryption config.
   * @public
   */
  keyArn?: string | undefined;
}

/**
 * Instance config object
 * @public
 */
export interface InstanceConfig {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Service linked role arn
   * @public
   */
  serviceLinkedRoleArn: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * The response for GetConnectInstanceConfig API.
 * @public
 */
export interface GetConnectInstanceConfigResponse {
  /**
   * Instance config object
   * @public
   */
  connectInstanceConfig?: InstanceConfig | undefined;
}

/**
 * The request for GetInstanceOnboardingJobStatus API.
 * @public
 */
export interface GetInstanceOnboardingJobStatusRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobFailureCode = {
  EVENT_BRIDGE_ACCESS_DENIED: "EVENT_BRIDGE_ACCESS_DENIED",
  EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED: "EVENT_BRIDGE_MANAGED_RULE_LIMIT_EXCEEDED",
  IAM_ACCESS_DENIED: "IAM_ACCESS_DENIED",
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  KMS_ACCESS_DENIED: "KMS_ACCESS_DENIED",
  KMS_KEY_NOT_FOUND: "KMS_KEY_NOT_FOUND",
} as const;

/**
 * @public
 */
export type InstanceOnboardingJobFailureCode =
  (typeof InstanceOnboardingJobFailureCode)[keyof typeof InstanceOnboardingJobFailureCode];

/**
 * @public
 * @enum
 */
export const InstanceOnboardingJobStatusCode = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type InstanceOnboardingJobStatusCode =
  (typeof InstanceOnboardingJobStatusCode)[keyof typeof InstanceOnboardingJobStatusCode];

/**
 * Instance onboarding job status object
 * @public
 */
export interface InstanceOnboardingJobStatus {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Enumeration of the possible states for instance onboarding job
   * @public
   */
  status: InstanceOnboardingJobStatusCode | undefined;

  /**
   * Enumeration of the possible failure codes for instance onboarding job
   * @public
   */
  failureCode?: InstanceOnboardingJobFailureCode | undefined;
}

/**
 * The response for GetInstanceOnboardingJobStatus API.
 * @public
 */
export interface GetInstanceOnboardingJobStatusResponse {
  /**
   * Instance onboarding job status object
   * @public
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceIdFilterOperator = {
  /**
   * Equals operator
   */
  EQ: "Eq",
} as const;

/**
 * @public
 */
export type InstanceIdFilterOperator = (typeof InstanceIdFilterOperator)[keyof typeof InstanceIdFilterOperator];

/**
 * Connect instance identifier filter
 * @public
 */
export interface InstanceIdFilter {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  value: string | undefined;

  /**
   * Operators for Connect instance identifier filter
   * @public
   */
  operator: InstanceIdFilterOperator | undefined;
}

/**
 * Filter model by type
 * @public
 */
export interface CampaignFilters {
  /**
   * Connect instance identifier filter
   * @public
   */
  instanceIdFilter?: InstanceIdFilter | undefined;
}

/**
 * The request for ListCampaigns API.
 * @public
 */
export interface ListCampaignsRequest {
  /**
   * The maximum number of results to return per page.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter model by type
   * @public
   */
  filters?: CampaignFilters | undefined;
}

/**
 * An Amazon Connect campaign summary.
 * @public
 */
export interface CampaignSummary {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The resource name of an Amazon Connect campaign.
   * @public
   */
  arn: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;

  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Channel subtype list
   * @public
   */
  channelSubtypes: ChannelSubtype[] | undefined;

  /**
   * Campaign schedule
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectCampaignFlowArn?: string | undefined;
}

/**
 * The response for ListCampaigns API.
 * @public
 */
export interface ListCampaignsResponse {
  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Amazon Connect campaigns.
   * @public
   */
  campaignSummaryList?: CampaignSummary[] | undefined;
}

/**
 * The request for ListConnectInstanceIntegrations API.
 * @public
 */
export interface ListConnectInstanceIntegrationsRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * The maximum number of results to return per page.
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventType = {
  CAMPAIGN_EMAIL: "Campaign-Email",
  CAMPAIGN_ORCHESTRATION: "Campaign-Orchestration",
  CAMPAIGN_SMS: "Campaign-SMS",
  CAMPAIGN_TELEPHONY: "Campaign-Telephony",
} as const;

/**
 * @public
 */
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * Customer Profiles integration summary
 * @public
 */
export interface CustomerProfilesIntegrationSummary {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  domainArn: string | undefined;

  /**
   * Object type names map.
   * @public
   */
  objectTypeNames: Partial<Record<EventType, string>> | undefined;
}

/**
 * Q Connect integration summary
 * @public
 */
export interface QConnectIntegrationSummary {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  knowledgeBaseArn: string | undefined;
}

/**
 * Integration summary for Connect instance.
 * @public
 */
export type IntegrationSummary =
  | IntegrationSummary.CustomerProfilesMember
  | IntegrationSummary.QConnectMember
  | IntegrationSummary.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationSummary {
  /**
   * Customer Profiles integration summary
   * @public
   */
  export interface CustomerProfilesMember {
    customerProfiles: CustomerProfilesIntegrationSummary;
    qConnect?: never;
    $unknown?: never;
  }

  /**
   * Q Connect integration summary
   * @public
   */
  export interface QConnectMember {
    customerProfiles?: never;
    qConnect: QConnectIntegrationSummary;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customerProfiles?: never;
    qConnect?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    customerProfiles: (value: CustomerProfilesIntegrationSummary) => T;
    qConnect: (value: QConnectIntegrationSummary) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IntegrationSummary, visitor: Visitor<T>): T => {
    if (value.customerProfiles !== undefined) return visitor.customerProfiles(value.customerProfiles);
    if (value.qConnect !== undefined) return visitor.qConnect(value.qConnect);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * The response for ListConnectInstanceIntegrations API.
 * @public
 */
export interface ListConnectInstanceIntegrationsResponse {
  /**
   * The token for the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Amazon Connect Instance Integrations.
   * @public
   */
  integrationSummaryList?: IntegrationSummary[] | undefined;
}

/**
 * The request for ListTagsForResource API.
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  arn: string | undefined;
}

/**
 * The request for ListTagsForResource API.
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tag map with key and value.
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The request for PauseCampaign API.
 * @public
 */
export interface PauseCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * Customer Profiles integration config
 * @public
 */
export interface CustomerProfilesIntegrationConfig {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  domainArn: string | undefined;

  /**
   * Object type names map.
   * @public
   */
  objectTypeNames: Partial<Record<EventType, string>> | undefined;
}

/**
 * Q Connect integration config
 * @public
 */
export interface QConnectIntegrationConfig {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  knowledgeBaseArn: string | undefined;
}

/**
 * Integration config for Connect Instance
 * @public
 */
export type IntegrationConfig =
  | IntegrationConfig.CustomerProfilesMember
  | IntegrationConfig.QConnectMember
  | IntegrationConfig.$UnknownMember;

/**
 * @public
 */
export namespace IntegrationConfig {
  /**
   * Customer Profiles integration config
   * @public
   */
  export interface CustomerProfilesMember {
    customerProfiles: CustomerProfilesIntegrationConfig;
    qConnect?: never;
    $unknown?: never;
  }

  /**
   * Q Connect integration config
   * @public
   */
  export interface QConnectMember {
    customerProfiles?: never;
    qConnect: QConnectIntegrationConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customerProfiles?: never;
    qConnect?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    customerProfiles: (value: CustomerProfilesIntegrationConfig) => T;
    qConnect: (value: QConnectIntegrationConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: IntegrationConfig, visitor: Visitor<T>): T => {
    if (value.customerProfiles !== undefined) return visitor.customerProfiles(value.customerProfiles);
    if (value.qConnect !== undefined) return visitor.qConnect(value.qConnect);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * The request for PutConnectInstanceIntegration API.
 * @public
 */
export interface PutConnectInstanceIntegrationRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Integration config for Connect Instance
   * @public
   */
  integrationConfig: IntegrationConfig | undefined;
}

/**
 * Parameters for the Email Channel Subtype
 * @public
 */
export interface EmailChannelSubtypeParameters {
  /**
   * Source/Destination Email address used for Email messages
   * @public
   */
  destinationEmailAddress: string | undefined;

  /**
   * Source/Destination Email address used for Email messages
   * @public
   */
  connectSourceEmailAddress?: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  templateArn?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
   * @public
   */
  templateParameters: Record<string, string> | undefined;
}

/**
 * Parameters for the SMS Channel Subtype
 * @public
 */
export interface SmsChannelSubtypeParameters {
  /**
   * The phone number of the customer, in E.164 format.
   * @public
   */
  destinationPhoneNumber: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectSourcePhoneNumberArn?: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  templateArn?: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
   * @public
   */
  templateParameters: Record<string, string> | undefined;
}

/**
 * Parameters for the Telephony Channel Subtype
 * @public
 */
export interface TelephonyChannelSubtypeParameters {
  /**
   * The phone number of the customer, in E.164 format.
   * @public
   */
  destinationPhoneNumber: string | undefined;

  /**
   * A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in contact flows just like any other contact attributes.
   * @public
   */
  attributes: Record<string, string> | undefined;

  /**
   * The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify a source phone number, you must specify a queue.
   * @public
   */
  connectSourcePhoneNumber?: string | undefined;

  /**
   * Answering Machine Detection config
   * @public
   */
  answerMachineDetectionConfig?: AnswerMachineDetectionConfig | undefined;
}

/**
 * ChannelSubtypeParameters for an outbound request
 * @public
 */
export type ChannelSubtypeParameters =
  | ChannelSubtypeParameters.EmailMember
  | ChannelSubtypeParameters.SmsMember
  | ChannelSubtypeParameters.TelephonyMember
  | ChannelSubtypeParameters.$UnknownMember;

/**
 * @public
 */
export namespace ChannelSubtypeParameters {
  /**
   * Parameters for the Telephony Channel Subtype
   * @public
   */
  export interface TelephonyMember {
    telephony: TelephonyChannelSubtypeParameters;
    sms?: never;
    email?: never;
    $unknown?: never;
  }

  /**
   * Parameters for the SMS Channel Subtype
   * @public
   */
  export interface SmsMember {
    telephony?: never;
    sms: SmsChannelSubtypeParameters;
    email?: never;
    $unknown?: never;
  }

  /**
   * Parameters for the Email Channel Subtype
   * @public
   */
  export interface EmailMember {
    telephony?: never;
    sms?: never;
    email: EmailChannelSubtypeParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    telephony?: never;
    sms?: never;
    email?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    telephony: (value: TelephonyChannelSubtypeParameters) => T;
    sms: (value: SmsChannelSubtypeParameters) => T;
    email: (value: EmailChannelSubtypeParameters) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChannelSubtypeParameters, visitor: Visitor<T>): T => {
    if (value.telephony !== undefined) return visitor.telephony(value.telephony);
    if (value.sms !== undefined) return visitor.sms(value.sms);
    if (value.email !== undefined) return visitor.email(value.email);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * An outbound request for a campaign.
 * @public
 */
export interface OutboundRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken: string | undefined;

  /**
   * Timestamp with no UTC offset or timezone
   * @public
   */
  expirationTime: Date | undefined;

  /**
   * ChannelSubtypeParameters for an outbound request
   * @public
   */
  channelSubtypeParameters: ChannelSubtypeParameters | undefined;
}

/**
 * The request for PutOutboundRequestBatch API.
 * @public
 */
export interface PutOutboundRequestBatchRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * A list of outbound requests.
   * @public
   */
  outboundRequests: OutboundRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FailureCode = {
  /**
   * Request throttled due to large number of pending dial requests
   */
  BUFFER_LIMIT_EXCEEDED: "BufferLimitExceeded",
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * The request was throttled due to excessive usage
   */
  REQUEST_THROTTLED: "RequestThrottled",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type FailureCode = (typeof FailureCode)[keyof typeof FailureCode];

/**
 * A failed request identified by the unique client token.
 * @public
 */
export interface FailedRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier representing a Dial request
   * @public
   */
  id?: string | undefined;

  /**
   * A predefined code indicating the error that caused the failure.
   * @public
   */
  failureCode?: FailureCode | undefined;
}

/**
 * A successful request identified by the unique client token.
 * @public
 */
export interface SuccessfulRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier representing a Dial request
   * @public
   */
  id?: string | undefined;
}

/**
 * The response for PutOutboundRequestBatch API.
 * @public
 */
export interface PutOutboundRequestBatchResponse {
  /**
   * A list of successful requests identified by the unique client token.
   * @public
   */
  successfulRequests?: SuccessfulRequest[] | undefined;

  /**
   * A list of failed requests.
   * @public
   */
  failedRequests?: FailedRequest[] | undefined;
}

/**
 * Information about a profile outbound request
 * @public
 */
export interface ProfileOutboundRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken: string | undefined;

  /**
   * Identifier of the customer profile
   * @public
   */
  profileId: string | undefined;

  /**
   * Timestamp with no UTC offset or timezone
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * The request for PutProfileOutboundRequestBatch API
 * @public
 */
export interface PutProfileOutboundRequestBatchRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * List of profile outbound requests
   * @public
   */
  profileOutboundRequests: ProfileOutboundRequest[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProfileOutboundRequestFailureCode = {
  /**
   * The specified resource conflicts with another resource
   */
  CONFLICT: "Conflict",
  /**
   * The request failed to satisfy the constraints specified by the service
   */
  INVALID_INPUT: "InvalidInput",
  /**
   * Request throttled due to large number of requests
   */
  REQUEST_THROTTLED: "RequestThrottled",
  /**
   * The specified resource was not found
   */
  RESOURCE_NOT_FOUND: "ResourceNotFound",
  /**
   * Unexpected error during processing of request
   */
  UNKNOWN_ERROR: "UnknownError",
} as const;

/**
 * @public
 */
export type ProfileOutboundRequestFailureCode =
  (typeof ProfileOutboundRequestFailureCode)[keyof typeof ProfileOutboundRequestFailureCode];

/**
 * Failure details for a profile outbound request
 * @public
 */
export interface FailedProfileOutboundRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier of the profile outbound request
   * @public
   */
  id?: string | undefined;

  /**
   * Predefined code indicating the error that caused the failure
   * @public
   */
  failureCode?: ProfileOutboundRequestFailureCode | undefined;
}

/**
 * Success details for a profile outbound request
 * @public
 */
export interface SuccessfulProfileOutboundRequest {
  /**
   * Client provided parameter used for idempotency. Its value must be unique for each request.
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identifier of the profile outbound request
   * @public
   */
  id?: string | undefined;
}

/**
 * The response for PutProfileOutboundRequestBatch API
 * @public
 */
export interface PutProfileOutboundRequestBatchResponse {
  /**
   * List of successful profile outbound requests
   * @public
   */
  successfulRequests?: SuccessfulProfileOutboundRequest[] | undefined;

  /**
   * List of failed profile outbound requests
   * @public
   */
  failedRequests?: FailedProfileOutboundRequest[] | undefined;
}

/**
 * The request for ResumeCampaign API.
 * @public
 */
export interface ResumeCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * The request for StartCampaign API.
 * @public
 */
export interface StartCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * The request for StartInstanceOnboardingJob API.
 * @public
 */
export interface StartInstanceOnboardingJobRequest {
  /**
   * Amazon Connect Instance Id
   * @public
   */
  connectInstanceId: string | undefined;

  /**
   * Encryption config for Connect Instance. Note that sensitive data will always be encrypted.
   * If disabled, service will perform encryption with its own key.
   * If enabled, a KMS key id needs to be provided and KMS charges will apply.
   * KMS is only type supported
   * @public
   */
  encryptionConfig: EncryptionConfig | undefined;
}

/**
 * The response for StartInstanceOnboardingJob API.
 * @public
 */
export interface StartInstanceOnboardingJobResponse {
  /**
   * Instance onboarding job status object
   * @public
   */
  connectInstanceOnboardingJobStatus?: InstanceOnboardingJobStatus | undefined;
}

/**
 * The request for StopCampaign API.
 * @public
 */
export interface StopCampaignRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;
}

/**
 * The request for TagResource API.
 * @public
 */
export interface TagResourceRequest {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  arn: string | undefined;

  /**
   * Tag map with key and value.
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * The request for UntagResource API.
 * @public
 */
export interface UntagResourceRequest {
  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  arn: string | undefined;

  /**
   * List of tag keys.
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * The request for UpdateCampaignChannelSubtypeConfig API.
 * @public
 */
export interface UpdateCampaignChannelSubtypeConfigRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Campaign Channel Subtype config
   * @public
   */
  channelSubtypeConfig: ChannelSubtypeConfig | undefined;
}

/**
 * The request for UpdateCampaignCommunicationLimits API.
 * @public
 */
export interface UpdateCampaignCommunicationLimitsRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Communication limits config
   * @public
   */
  communicationLimitsOverride: CommunicationLimitsConfig | undefined;
}

/**
 * The request for UpdateCampaignCommunicationTime API.
 * @public
 */
export interface UpdateCampaignCommunicationTimeRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Campaign communication time config
   * @public
   */
  communicationTimeConfig: CommunicationTimeConfig | undefined;
}

/**
 * The request for UpdateCampaignFlowAssociation API.
 * @public
 */
export interface UpdateCampaignFlowAssociationRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Amazon Resource Names(ARN)
   * @public
   */
  connectCampaignFlowArn: string | undefined;
}

/**
 * The request for UpdateCampaignName API.
 * @public
 */
export interface UpdateCampaignNameRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * The name of an Amazon Connect Campaign name.
   * @public
   */
  name: string | undefined;
}

/**
 * The request for UpdateCampaignSchedule API.
 * @public
 */
export interface UpdateCampaignScheduleRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Campaign schedule
   * @public
   */
  schedule: Schedule | undefined;
}

/**
 * The request for UpdateCampaignSource API.
 * @public
 */
export interface UpdateCampaignSourceRequest {
  /**
   * Identifier representing a Campaign
   * @public
   */
  id: string | undefined;

  /**
   * Source of the campaign
   * @public
   */
  source: Source | undefined;
}

/**
 * @internal
 */
export const EmailOutboundConfigFilterSensitiveLog = (obj: EmailOutboundConfig): any => ({
  ...obj,
  ...(obj.connectSourceEmailAddress && { connectSourceEmailAddress: SENSITIVE_STRING }),
  ...(obj.sourceEmailAddressDisplayName && { sourceEmailAddressDisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EmailChannelSubtypeConfigFilterSensitiveLog = (obj: EmailChannelSubtypeConfig): any => ({
  ...obj,
  ...(obj.outboundMode && { outboundMode: obj.outboundMode }),
  ...(obj.defaultOutboundConfig && {
    defaultOutboundConfig: EmailOutboundConfigFilterSensitiveLog(obj.defaultOutboundConfig),
  }),
});

/**
 * @internal
 */
export const ChannelSubtypeConfigFilterSensitiveLog = (obj: ChannelSubtypeConfig): any => ({
  ...obj,
  ...(obj.telephony && { telephony: obj.telephony }),
  ...(obj.sms && { sms: obj.sms }),
  ...(obj.email && { email: EmailChannelSubtypeConfigFilterSensitiveLog(obj.email) }),
});

/**
 * @internal
 */
export const CreateCampaignRequestFilterSensitiveLog = (obj: CreateCampaignRequest): any => ({
  ...obj,
  ...(obj.channelSubtypeConfig && {
    channelSubtypeConfig: ChannelSubtypeConfigFilterSensitiveLog(obj.channelSubtypeConfig),
  }),
  ...(obj.source && { source: obj.source }),
  ...(obj.communicationTimeConfig && { communicationTimeConfig: obj.communicationTimeConfig }),
  ...(obj.communicationLimitsOverride && { communicationLimitsOverride: obj.communicationLimitsOverride }),
});

/**
 * @internal
 */
export const CampaignFilterSensitiveLog = (obj: Campaign): any => ({
  ...obj,
  ...(obj.channelSubtypeConfig && {
    channelSubtypeConfig: ChannelSubtypeConfigFilterSensitiveLog(obj.channelSubtypeConfig),
  }),
  ...(obj.source && { source: obj.source }),
  ...(obj.communicationTimeConfig && { communicationTimeConfig: obj.communicationTimeConfig }),
  ...(obj.communicationLimitsOverride && { communicationLimitsOverride: obj.communicationLimitsOverride }),
});

/**
 * @internal
 */
export const DescribeCampaignResponseFilterSensitiveLog = (obj: DescribeCampaignResponse): any => ({
  ...obj,
  ...(obj.campaign && { campaign: CampaignFilterSensitiveLog(obj.campaign) }),
});

/**
 * @internal
 */
export const EmailChannelSubtypeParametersFilterSensitiveLog = (obj: EmailChannelSubtypeParameters): any => ({
  ...obj,
  ...(obj.destinationEmailAddress && { destinationEmailAddress: SENSITIVE_STRING }),
  ...(obj.connectSourceEmailAddress && { connectSourceEmailAddress: SENSITIVE_STRING }),
  ...(obj.templateParameters && { templateParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SmsChannelSubtypeParametersFilterSensitiveLog = (obj: SmsChannelSubtypeParameters): any => ({
  ...obj,
  ...(obj.destinationPhoneNumber && { destinationPhoneNumber: SENSITIVE_STRING }),
  ...(obj.templateParameters && { templateParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TelephonyChannelSubtypeParametersFilterSensitiveLog = (obj: TelephonyChannelSubtypeParameters): any => ({
  ...obj,
  ...(obj.destinationPhoneNumber && { destinationPhoneNumber: SENSITIVE_STRING }),
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ChannelSubtypeParametersFilterSensitiveLog = (obj: ChannelSubtypeParameters): any => {
  if (obj.telephony !== undefined)
    return { telephony: TelephonyChannelSubtypeParametersFilterSensitiveLog(obj.telephony) };
  if (obj.sms !== undefined) return { sms: SmsChannelSubtypeParametersFilterSensitiveLog(obj.sms) };
  if (obj.email !== undefined) return { email: EmailChannelSubtypeParametersFilterSensitiveLog(obj.email) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const OutboundRequestFilterSensitiveLog = (obj: OutboundRequest): any => ({
  ...obj,
  ...(obj.channelSubtypeParameters && {
    channelSubtypeParameters: ChannelSubtypeParametersFilterSensitiveLog(obj.channelSubtypeParameters),
  }),
});

/**
 * @internal
 */
export const PutOutboundRequestBatchRequestFilterSensitiveLog = (obj: PutOutboundRequestBatchRequest): any => ({
  ...obj,
  ...(obj.outboundRequests && {
    outboundRequests: obj.outboundRequests.map((item) => OutboundRequestFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateCampaignChannelSubtypeConfigRequestFilterSensitiveLog = (
  obj: UpdateCampaignChannelSubtypeConfigRequest
): any => ({
  ...obj,
  ...(obj.channelSubtypeConfig && {
    channelSubtypeConfig: ChannelSubtypeConfigFilterSensitiveLog(obj.channelSubtypeConfig),
  }),
});
