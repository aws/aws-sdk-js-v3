// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import {
  CurrentMetric,
  HistoricalMetric,
  LexBot,
  LexV2Bot,
  MediaConcurrency,
  OutboundCallerConfig,
  PhoneNumberCountryCode,
  PhoneNumberType,
  QuickConnectConfig,
  UserIdentityInfo,
  UserPhoneConfig,
} from "./models_0";

export enum ContactState {
  CONNECTED = "CONNECTED",
  CONNECTED_ONHOLD = "CONNECTED_ONHOLD",
  CONNECTING = "CONNECTING",
  ENDED = "ENDED",
  ERROR = "ERROR",
  INCOMING = "INCOMING",
  MISSED = "MISSED",
  PENDING = "PENDING",
  REJECTED = "REJECTED",
}

export enum Channel {
  CHAT = "CHAT",
  TASK = "TASK",
  VOICE = "VOICE",
}

export enum ContactInitiationMethod {
  API = "API",
  CALLBACK = "CALLBACK",
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
  QUEUE_TRANSFER = "QUEUE_TRANSFER",
  TRANSFER = "TRANSFER",
}

/**
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 */
export interface QueueReference {
  /**
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;
}

export namespace QueueReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the
 *    user.</p>
 */
export interface AgentContactReference {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * <p>The channel of the contact.</p>
   */
  Channel?: Channel | string;

  /**
   * <p>How the contact was initiated.</p>
   */
  InitiationMethod?: ContactInitiationMethod | string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">state of the contact</a>.</p>
   */
  AgentContactState?: ContactState | string;

  /**
   * <p>The epoch timestamp when the contact state started.</p>
   */
  StateStartTimestamp?: Date;

  /**
   * <p>The time at which the contact was connected to an agent.</p>
   */
  ConnectedToAgentTimestamp?: Date;

  /**
   * <p>Contains information about a queue resource for which metrics are returned.</p>
   */
  Queue?: QueueReference;
}

export namespace AgentContactReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentContactReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the agent who accepted the contact.</p>
 */
export interface AgentInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   */
  Id?: string;

  /**
   * <p>The timestamp when the contact was connected to the agent.</p>
   */
  ConnectedToAgentTimestamp?: Date;
}

export namespace AgentInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentInfo): any => ({
    ...obj,
  });
}

export enum AgentStatusState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export enum AgentStatusType {
  CUSTOM = "CUSTOM",
  OFFLINE = "OFFLINE",
  ROUTABLE = "ROUTABLE",
}

/**
 * <p>Information about the agent's status.</p>
 */
export interface AgentStatusReference {
  /**
   * <p>The start timestamp of the agent's status.</p>
   */
  StatusStartTimestamp?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent's status.</p>
   */
  StatusArn?: string;
}

export namespace AgentStatusReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentStatusReference): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information for an agent status.</p>
 */
export interface AgentStatusSummary {
  /**
   * <p>The identifier for an agent status.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the agent status.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * <p>The type of the agent status.</p>
   */
  Type?: AgentStatusType | string;
}

export namespace AgentStatusSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentStatusSummary): any => ({
    ...obj,
  });
}

export enum VocabularyLanguageCode {
  AR_AE = "ar-AE",
  DE_CH = "de-CH",
  DE_DE = "de-DE",
  EN_AB = "en-AB",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_IE = "en-IE",
  EN_IN = "en-IN",
  EN_US = "en-US",
  EN_WL = "en-WL",
  ES_ES = "es-ES",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  HI_IN = "hi-IN",
  IT_IT = "it-IT",
  JA_JP = "ja-JP",
  KO_KR = "ko-KR",
  PT_BR = "pt-BR",
  PT_PT = "pt-PT",
  ZH_CN = "zh-CN",
}

export enum InstanceStorageResourceType {
  AGENT_EVENTS = "AGENT_EVENTS",
  CALL_RECORDINGS = "CALL_RECORDINGS",
  CHAT_TRANSCRIPTS = "CHAT_TRANSCRIPTS",
  CONTACT_TRACE_RECORDS = "CONTACT_TRACE_RECORDS",
  MEDIA_STREAMS = "MEDIA_STREAMS",
  REAL_TIME_CONTACT_ANALYSIS_SEGMENTS = "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS",
  SCHEDULED_REPORTS = "SCHEDULED_REPORTS",
}

/**
 * <p>Configuration information of a Kinesis Data Firehose delivery stream.</p>
 */
export interface KinesisFirehoseConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  FirehoseArn: string | undefined;
}

export namespace KinesisFirehoseConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisFirehoseConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information of a Kinesis data stream.</p>
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream.</p>
   */
  StreamArn: string | undefined;
}

export namespace KinesisStreamConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisStreamConfig): any => ({
    ...obj,
  });
}

export enum EncryptionType {
  KMS = "KMS",
}

/**
 * <p>The encryption configuration.</p>
 */
export interface EncryptionConfig {
  /**
   * <p>The type of encryption.</p>
   */
  EncryptionType: EncryptionType | string | undefined;

  /**
   * <p>The full ARN of the encryption key. </p>
   *          <note>
   *             <p>Be sure to provide the full ARN of the encryption key, not just the ID.</p>
   *          </note>
   */
  KeyId: string | undefined;
}

export namespace EncryptionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information of a Kinesis video stream.</p>
 */
export interface KinesisVideoStreamConfig {
  /**
   * <p>The prefix of the video stream.</p>
   */
  Prefix: string | undefined;

  /**
   * <p>The number of hours data is retained in the stream. Kinesis Video Streams retains the data
   *    in a data store that is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   */
  RetentionPeriodHours: number | undefined;

  /**
   * <p>The encryption configuration.</p>
   */
  EncryptionConfig: EncryptionConfig | undefined;
}

export namespace KinesisVideoStreamConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KinesisVideoStreamConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the Amazon Simple Storage Service (Amazon S3) storage type.</p>
 */
export interface S3Config {
  /**
   * <p>The S3 bucket name.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The S3 bucket prefix.</p>
   */
  BucketPrefix: string | undefined;

  /**
   * <p>The Amazon S3 encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace S3Config {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Config): any => ({
    ...obj,
  });
}

export enum StorageType {
  KINESIS_FIREHOSE = "KINESIS_FIREHOSE",
  KINESIS_STREAM = "KINESIS_STREAM",
  KINESIS_VIDEO_STREAM = "KINESIS_VIDEO_STREAM",
  S3 = "S3",
}

export enum ContactFlowType {
  AGENT_HOLD = "AGENT_HOLD",
  AGENT_TRANSFER = "AGENT_TRANSFER",
  AGENT_WHISPER = "AGENT_WHISPER",
  CONTACT_FLOW = "CONTACT_FLOW",
  CUSTOMER_HOLD = "CUSTOMER_HOLD",
  CUSTOMER_QUEUE = "CUSTOMER_QUEUE",
  CUSTOMER_WHISPER = "CUSTOMER_WHISPER",
  OUTBOUND_WHISPER = "OUTBOUND_WHISPER",
  QUEUE_TRANSFER = "QUEUE_TRANSFER",
}

/**
 * <p>Information about a problem detail.</p>
 */
export interface ProblemDetail {
  /**
   * <p>The problem detail's message.</p>
   */
  message?: string;
}

export namespace ProblemDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProblemDetail): any => ({
    ...obj,
  });
}

export enum HoursOfOperationDays {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

/**
 * <p>The start time or end time for an hours of operation.</p>
 */
export interface HoursOfOperationTimeSlice {
  /**
   * <p>The hours.</p>
   */
  Hours: number | undefined;

  /**
   * <p>The minutes.</p>
   */
  Minutes: number | undefined;
}

export namespace HoursOfOperationTimeSlice {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoursOfOperationTimeSlice): any => ({
    ...obj,
  });
}

export enum DirectoryType {
  CONNECT_MANAGED = "CONNECT_MANAGED",
  EXISTING_DIRECTORY = "EXISTING_DIRECTORY",
  SAML = "SAML",
}

export enum IntegrationType {
  EVENT = "EVENT",
  PINPOINT_APP = "PINPOINT_APP",
  VOICE_ID = "VOICE_ID",
  WISDOM_ASSISTANT = "WISDOM_ASSISTANT",
  WISDOM_KNOWLEDGE_BASE = "WISDOM_KNOWLEDGE_BASE",
}

export enum SourceType {
  SALESFORCE = "SALESFORCE",
  ZENDESK = "ZENDESK",
}

/**
 * <p>Contains information about a phone number for a quick connect.</p>
 */
export interface PhoneNumberQuickConnectConfig {
  /**
   * <p>The phone number in E.164 format.</p>
   */
  PhoneNumber: string | undefined;
}

export namespace PhoneNumberQuickConnectConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberQuickConnectConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a queue for a quick connect. The contact flow must be of type
 *    Transfer to Queue.</p>
 */
export interface QueueQuickConnectConfig {
  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;
}

export namespace QueueQuickConnectConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueQuickConnectConfig): any => ({
    ...obj,
  });
}

export enum QuickConnectType {
  PHONE_NUMBER = "PHONE_NUMBER",
  QUEUE = "QUEUE",
  USER = "USER",
}

/**
 * <p>Contains information about the quick connect configuration settings for a user. The contact
 *    flow must be of type Transfer to Agent.</p>
 */
export interface UserQuickConnectConfig {
  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;
}

export namespace UserQuickConnectConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserQuickConnectConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The identifier of the task template field.</p>
 */
export interface TaskTemplateFieldIdentifier {
  /**
   * <p>The name of the task template field.</p>
   */
  Name?: string;
}

export namespace TaskTemplateFieldIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateFieldIdentifier): any => ({
    ...obj,
  });
}

/**
 * <p>A field that is invisible to an agent.</p>
 */
export interface InvisibleFieldInfo {
  /**
   * <p>Identifier of the invisible field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

export namespace InvisibleFieldInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvisibleFieldInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates a field that is read-only to an agent.</p>
 */
export interface ReadOnlyFieldInfo {
  /**
   * <p>Identifier of the read-only field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

export namespace ReadOnlyFieldInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReadOnlyFieldInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a required field.</p>
 */
export interface RequiredFieldInfo {
  /**
   * <p>The unique identifier for the field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

export namespace RequiredFieldInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequiredFieldInfo): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a default field and its corresponding value.</p>
 */
export interface TaskTemplateDefaultFieldValue {
  /**
   * <p>Identifier of a field. </p>
   */
  Id?: TaskTemplateFieldIdentifier;

  /**
   * <p>Default value for the field.</p>
   */
  DefaultValue?: string;
}

export namespace TaskTemplateDefaultFieldValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateDefaultFieldValue): any => ({
    ...obj,
  });
}

export enum TaskTemplateFieldType {
  BOOLEAN = "BOOLEAN",
  DATE_TIME = "DATE_TIME",
  DESCRIPTION = "DESCRIPTION",
  EMAIL = "EMAIL",
  NAME = "NAME",
  NUMBER = "NUMBER",
  QUICK_CONNECT = "QUICK_CONNECT",
  SCHEDULED_TIME = "SCHEDULED_TIME",
  SINGLE_SELECT = "SINGLE_SELECT",
  TEXT = "TEXT",
  TEXT_AREA = "TEXT_AREA",
  URL = "URL",
}

export enum TaskTemplateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum PropertyValidationExceptionReason {
  INVALID_FORMAT = "INVALID_FORMAT",
  NOT_SUPPORTED = "NOT_SUPPORTED",
  REFERENCED_RESOURCE_NOT_FOUND = "REFERENCED_RESOURCE_NOT_FOUND",
  REQUIRED_PROPERTY_MISSING = "REQUIRED_PROPERTY_MISSING",
  RESOURCE_NAME_ALREADY_EXISTS = "RESOURCE_NAME_ALREADY_EXISTS",
  UNIQUE_CONSTRAINT_VIOLATED = "UNIQUE_CONSTRAINT_VIOLATED",
}

/**
 * <p>Contains information about why a property is not valid.</p>
 */
export interface PropertyValidationExceptionProperty {
  /**
   * <p>The full property path.</p>
   */
  PropertyPath: string | undefined;

  /**
   * <p>Why the property is not valid.</p>
   */
  Reason: PropertyValidationExceptionReason | string | undefined;

  /**
   * <p>A message describing why the property is not valid.</p>
   */
  Message: string | undefined;
}

export namespace PropertyValidationExceptionProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyValidationExceptionProperty): any => ({
    ...obj,
  });
}

export enum UseCaseType {
  CONNECT_CAMPAIGNS = "CONNECT_CAMPAIGNS",
  RULES_EVALUATION = "RULES_EVALUATION",
}

export enum PhoneType {
  DESK_PHONE = "DESK_PHONE",
  SOFT_PHONE = "SOFT_PHONE",
}

export enum VocabularyState {
  ACTIVE = "ACTIVE",
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

export enum ResourceType {
  CONTACT = "CONTACT",
  CONTACT_FLOW = "CONTACT_FLOW",
  HIERARCHY_GROUP = "HIERARCHY_GROUP",
  HIERARCHY_LEVEL = "HIERARCHY_LEVEL",
  INSTANCE = "INSTANCE",
  PARTICIPANT = "PARTICIPANT",
  USER = "USER",
}

/**
 * <p>If this contact was queued, this contains information about the queue. </p>
 */
export interface QueueInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   */
  Id?: string;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   */
  EnqueueTimestamp?: Date;
}

export namespace QueueInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueInfo): any => ({
    ...obj,
  });
}

export enum ContactFlowState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export enum ContactFlowModuleState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export enum ContactFlowModuleStatus {
  PUBLISHED = "PUBLISHED",
  SAVED = "SAVED",
}

export enum InstanceStatus {
  ACTIVE = "ACTIVE",
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
}

/**
 * <p>Relevant
 *    details why the instance was not successfully created.</p>
 */
export interface InstanceStatusReason {
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace InstanceStatusReason {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStatusReason): any => ({
    ...obj,
  });
}

export enum InstanceAttributeType {
  AUTO_RESOLVE_BEST_VOICES = "AUTO_RESOLVE_BEST_VOICES",
  CONTACTFLOW_LOGS = "CONTACTFLOW_LOGS",
  CONTACT_LENS = "CONTACT_LENS",
  EARLY_MEDIA = "EARLY_MEDIA",
  HIGH_VOLUME_OUTBOUND = "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS = "INBOUND_CALLS",
  MULTI_PARTY_CONFERENCE = "MULTI_PARTY_CONFERENCE",
  OUTBOUND_CALLS = "OUTBOUND_CALLS",
  USE_CUSTOM_TTS_VOICES = "USE_CUSTOM_TTS_VOICES",
}

/**
 * <p>A toggle for an individual feature at the instance level.</p>
 */
export interface Attribute {
  /**
   * <p>The type of attribute.</p>
   */
  AttributeType?: InstanceAttributeType | string;

  /**
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

export enum PhoneNumberWorkflowStatus {
  Claimed = "CLAIMED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
}

/**
 * <p>The status of the phone number.</p>
 */
export interface PhoneNumberStatus {
  /**
   * <p>The status.</p>
   */
  Status?: PhoneNumberWorkflowStatus | string;

  /**
   * <p>The status message.</p>
   */
  Message?: string;
}

export namespace PhoneNumberStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance.</p>
 */
export interface ClaimedPhoneNumberSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.</p>
   */
  TargetArn?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The status of the phone number.</p>
   */
  PhoneNumberStatus?: PhoneNumberStatus;
}

export namespace ClaimedPhoneNumberSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimedPhoneNumberSummary): any => ({
    ...obj,
  });
}

export enum QueueStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains information about a queue.</p>
 */
export interface Queue {
  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the queue.</p>
   */
  QueueArn?: string;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * <p>The description of the queue.</p>
   */
  Description?: string;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig?: OutboundCallerConfig;

  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;

  /**
   * <p>The status of the queue.</p>
   */
  Status?: QueueStatus | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace Queue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Queue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a quick connect.</p>
 */
export interface QuickConnect {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  QuickConnectARN?: string;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * <p>Contains information about the quick connect.</p>
   */
  QuickConnectConfig?: QuickConnectConfig;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace QuickConnect {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuickConnect): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a routing profile.</p>
 */
export interface RoutingProfile {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the routing profile.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  RoutingProfileArn?: string;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The description of the routing profile.</p>
   */
  Description?: string;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  MediaConcurrencies?: MediaConcurrency[];

  /**
   * <p>The identifier of the default outbound queue for this routing profile.</p>
   */
  DefaultOutboundQueueId?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace RoutingProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfile {
  /**
   * <p>The identifier for the security profile.</p>
   */
  Id?: string;

  /**
   * <p>The organization resource identifier for the security profile.</p>
   */
  OrganizationResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the secruity profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name for the security profile.</p>
   */
  SecurityProfileName?: string;

  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace SecurityProfile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a user account for a Amazon Connect instance.</p>
 */
export interface User {
  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The user name assigned to the user account.</p>
   */
  Username?: string;

  /**
   * <p>Information about the user identity.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * <p>Information about the phone configuration for the user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the user account in the directory used for identity management.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The
   *    tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace User {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a hierarchy group.</p>
 */
export interface HierarchyGroupSummary {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;
}

export namespace HierarchyGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyGroupSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the levels of a hierarchy group.</p>
 */
export interface HierarchyPath {
  /**
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummary;

  /**
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummary;

  /**
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummary;

  /**
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummary;

  /**
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummary;
}

export namespace HierarchyPath {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyPath): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a hierarchy group.</p>
 */
export interface HierarchyGroup {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the level in the hierarchy group.</p>
   */
  LevelId?: string;

  /**
   * <p>Information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: HierarchyPath;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace HierarchyGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a hierarchy level.</p>
 */
export interface HierarchyLevel {
  /**
   * <p>The identifier of the hierarchy level.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hierarchy level.</p>
   */
  Name?: string;
}

export namespace HierarchyLevel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyLevel): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a hierarchy structure.</p>
 */
export interface HierarchyStructure {
  /**
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyLevel;

  /**
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyLevel;

  /**
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyLevel;

  /**
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyLevel;

  /**
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyLevel;
}

export namespace HierarchyStructure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyStructure): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a custom vocabulary.</p>
 */
export interface Vocabulary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   */
  FailureReason?: string;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   */
  Content?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace Vocabulary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Vocabulary): any => ({
    ...obj,
  });
}

export enum CurrentMetricName {
  AGENTS_AFTER_CONTACT_WORK = "AGENTS_AFTER_CONTACT_WORK",
  AGENTS_AVAILABLE = "AGENTS_AVAILABLE",
  AGENTS_ERROR = "AGENTS_ERROR",
  AGENTS_NON_PRODUCTIVE = "AGENTS_NON_PRODUCTIVE",
  AGENTS_ONLINE = "AGENTS_ONLINE",
  AGENTS_ON_CALL = "AGENTS_ON_CALL",
  AGENTS_ON_CONTACT = "AGENTS_ON_CONTACT",
  AGENTS_STAFFED = "AGENTS_STAFFED",
  CONTACTS_IN_QUEUE = "CONTACTS_IN_QUEUE",
  CONTACTS_SCHEDULED = "CONTACTS_SCHEDULED",
  OLDEST_CONTACT_AGE = "OLDEST_CONTACT_AGE",
  SLOTS_ACTIVE = "SLOTS_ACTIVE",
  SLOTS_AVAILABLE = "SLOTS_AVAILABLE",
}

export enum Unit {
  COUNT = "COUNT",
  PERCENT = "PERCENT",
  SECONDS = "SECONDS",
}

/**
 * <p>Contains the data for a real-time metric.</p>
 */
export interface CurrentMetricData {
  /**
   * <p>Information about the metric.</p>
   */
  Metric?: CurrentMetric;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

export namespace CurrentMetricData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CurrentMetricData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the dimensions for a set of metrics.</p>
 */
export interface Dimensions {
  /**
   * <p>Information about the queue for which metrics are returned.</p>
   */
  Queue?: QueueReference;

  /**
   * <p>The channel used for grouping and filters.</p>
   */
  Channel?: Channel | string;
}

export namespace Dimensions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dimensions): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a set of real-time metrics.</p>
 */
export interface CurrentMetricResult {
  /**
   * <p>The dimensions for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * <p>The set of metrics.</p>
   */
  Collections?: CurrentMetricData[];
}

export namespace CurrentMetricResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CurrentMetricResult): any => ({
    ...obj,
  });
}

/**
 * <p>Filters user data based on the contact information that is associated to
 *    the users. It contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 */
export interface ContactFilter {
  /**
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   */
  ContactStates?: (ContactState | string)[];
}

export namespace ContactFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the hierarchy group.</p>
 */
export interface HierarchyGroupSummaryReference {
  /**
   * <p>The unique identifier for the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hierarchy group. </p>
   */
  Arn?: string;
}

export namespace HierarchyGroupSummaryReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyGroupSummaryReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the levels in the hierarchy group.</p>
 */
export interface HierarchyPathReference {
  /**
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummaryReference;

  /**
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummaryReference;
}

export namespace HierarchyPathReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyPathReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the routing profile assigned to the user.</p>
 */
export interface RoutingProfileReference {
  /**
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;
}

export namespace RoutingProfileReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfileReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the user.</p>
 */
export interface UserReference {
  /**
   * <p>The unique identifier for the user.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;
}

export namespace UserReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserReference): any => ({
    ...obj,
  });
}

/**
 * <p>Data for a user.</p>
 */
export interface UserData {
  /**
   * <p>Information about the user for the data that is returned. It contains resourceId and ARN of
   *    the user. </p>
   */
  User?: UserReference;

  /**
   * <p>Information about the routing profile that is assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * <p>Contains information about the levels of a hierarchy group assigned to a user.</p>
   */
  HierarchyPath?: HierarchyPathReference;

  /**
   * <p>The status of the agent that they manually set in their Contact Control Panel (CCP), or that
   *    the supervisor manually changes in the real-time metrics report.</p>
   */
  Status?: AgentStatusReference;

  /**
   * <p>A map of available slots by channel. The key is a channel name. The value is an integer: the
   *    available number of slots. </p>
   */
  AvailableSlotsByChannel?: Record<string, number>;

  /**
   * <p>A map of maximum slots by channel. The key is a channel name. The value is an integer: the
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the RoutingProfile assigned to the agent. </p>
   */
  MaxSlotsByChannel?: Record<string, number>;

  /**
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots.  </p>
   */
  ActiveSlotsByChannel?: Record<string, number>;

  /**
   * <p>A list of contact reference information.</p>
   */
  Contacts?: AgentContactReference[];
}

export namespace UserData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains credentials to use for federation.</p>
 */
export interface Credentials {
  /**
   * <p>An access token generated for a federated user to access Amazon Connect.</p>
   */
  AccessToken?: string;

  /**
   * <p>A token generated with an expiration time for the session a user is logged in to
   *    Amazon Connect.</p>
   */
  AccessTokenExpiration?: Date;

  /**
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   */
  RefreshToken?: string;

  /**
   * <p>Renews the expiration timer for a generated token.</p>
   */
  RefreshTokenExpiration?: Date;
}

export namespace Credentials {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Credentials): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
    ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
  });
}

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 */
export class UserNotFoundException extends __BaseException {
  readonly name: "UserNotFoundException" = "UserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UserNotFoundException, __BaseException>) {
    super({
      name: "UserNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UserNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

export enum HistoricalMetricName {
  ABANDON_TIME = "ABANDON_TIME",
  AFTER_CONTACT_WORK_TIME = "AFTER_CONTACT_WORK_TIME",
  API_CONTACTS_HANDLED = "API_CONTACTS_HANDLED",
  CALLBACK_CONTACTS_HANDLED = "CALLBACK_CONTACTS_HANDLED",
  CONTACTS_ABANDONED = "CONTACTS_ABANDONED",
  CONTACTS_AGENT_HUNG_UP_FIRST = "CONTACTS_AGENT_HUNG_UP_FIRST",
  CONTACTS_CONSULTED = "CONTACTS_CONSULTED",
  CONTACTS_HANDLED = "CONTACTS_HANDLED",
  CONTACTS_HANDLED_INCOMING = "CONTACTS_HANDLED_INCOMING",
  CONTACTS_HANDLED_OUTBOUND = "CONTACTS_HANDLED_OUTBOUND",
  CONTACTS_HOLD_ABANDONS = "CONTACTS_HOLD_ABANDONS",
  CONTACTS_MISSED = "CONTACTS_MISSED",
  CONTACTS_QUEUED = "CONTACTS_QUEUED",
  CONTACTS_TRANSFERRED_IN = "CONTACTS_TRANSFERRED_IN",
  CONTACTS_TRANSFERRED_IN_FROM_QUEUE = "CONTACTS_TRANSFERRED_IN_FROM_QUEUE",
  CONTACTS_TRANSFERRED_OUT = "CONTACTS_TRANSFERRED_OUT",
  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE = "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE",
  HANDLE_TIME = "HANDLE_TIME",
  HOLD_TIME = "HOLD_TIME",
  INTERACTION_AND_HOLD_TIME = "INTERACTION_AND_HOLD_TIME",
  INTERACTION_TIME = "INTERACTION_TIME",
  OCCUPANCY = "OCCUPANCY",
  QUEUED_TIME = "QUEUED_TIME",
  QUEUE_ANSWER_TIME = "QUEUE_ANSWER_TIME",
  SERVICE_LEVEL = "SERVICE_LEVEL",
}

export enum Statistic {
  AVG = "AVG",
  MAX = "MAX",
  SUM = "SUM",
}

export enum Comparison {
  LT = "LT",
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface Threshold {
  /**
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   */
  Comparison?: Comparison | string;

  /**
   * <p>The threshold value to compare.</p>
   */
  ThresholdValue?: number;
}

export namespace Threshold {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Threshold): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the data for a historical metric.</p>
 */
export interface HistoricalMetricData {
  /**
   * <p>Information about the metric.</p>
   */
  Metric?: HistoricalMetric;

  /**
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

export namespace HistoricalMetricData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoricalMetricData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the historical metrics retrieved.</p>
 */
export interface HistoricalMetricResult {
  /**
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * <p>The set of metrics.</p>
   */
  Collections?: HistoricalMetricData[];
}

export namespace HistoricalMetricResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoricalMetricResult): any => ({
    ...obj,
  });
}

export enum LexVersion {
  V1 = "V1",
  V2 = "V2",
}

/**
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 */
export interface LexBotConfig {
  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   */
  LexV2Bot?: LexV2Bot;
}

export namespace LexBotConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LexBotConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a contact flow.</p>
 */
export interface ContactFlowModuleSummary {
  /**
   * <p>The identifier of the contact flow module.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow module.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the contact flow module.</p>
   */
  Name?: string;

  /**
   * <p>The type of contact flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

export namespace ContactFlowModuleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactFlowModuleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a contact flow.</p>
 *          <p>You can also create and update contact flows using the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the contact flow.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The type of contact flow.</p>
   */
  ContactFlowType?: ContactFlowType | string;

  /**
   * <p>The type of contact flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

export namespace ContactFlowSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactFlowSummary): any => ({
    ...obj,
  });
}

export enum ReferenceType {
  ATTACHMENT = "ATTACHMENT",
  DATE = "DATE",
  EMAIL = "EMAIL",
  NUMBER = "NUMBER",
  STRING = "STRING",
  URL = "URL",
}

export enum ReferenceStatus {
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is
 *    <code>ATTACHMENT</code>. Otherwise, null.</p>
 */
export interface AttachmentReference {
  /**
   * <p>Identifier of the attachment reference.</p>
   */
  Name?: string;

  /**
   * <p>The location path of the attachment reference.</p>
   */
  Value?: string;

  /**
   * <p>Status of the attachment reference type.</p>
   */
  Status?: ReferenceStatus | string;
}

export namespace AttachmentReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AttachmentReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
 *    Otherwise, null.</p>
 */
export interface DateReference {
  /**
   * <p>Identifier of the date reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid date.</p>
   */
  Value?: string;
}

export namespace DateReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
 *    Otherwise, null.</p>
 */
export interface EmailReference {
  /**
   * <p>Identifier of the email reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid email address.</p>
   */
  Value?: string;
}

export namespace EmailReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EmailReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
 *    Otherwise, null.</p>
 */
export interface NumberReference {
  /**
   * <p>Identifier of the number reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid number.</p>
   */
  Value?: string;
}

export namespace NumberReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NumberReference): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
 *    Otherwise, null.</p>
 */
export interface StringReference {
  /**
   * <p>Identifier of the string reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid string.</p>
   */
  Value?: string;
}

export namespace StringReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringReference): any => ({
    ...obj,
  });
}

/**
 * <p>The URL reference.</p>
 */
export interface UrlReference {
  /**
   * <p>Identifier of the URL reference.</p>
   */
  Name?: string;

  /**
   * <p>A valid URL.</p>
   */
  Value?: string;
}

export namespace UrlReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UrlReference): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a reference. <code>ReferenceSummary</code> contains only
 *    one non null field between the URL and attachment based on the reference type.</p>
 */
export type ReferenceSummary =
  | ReferenceSummary.AttachmentMember
  | ReferenceSummary.DateMember
  | ReferenceSummary.EmailMember
  | ReferenceSummary.NumberMember
  | ReferenceSummary.StringMember
  | ReferenceSummary.UrlMember
  | ReferenceSummary.$UnknownMember;

export namespace ReferenceSummary {
  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null.</p>
   */
  export interface UrlMember {
    Url: UrlReference;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the reference when the <code>referenceType</code> is
   *     <code>ATTACHMENT</code>. Otherwise, null.</p>
   */
  export interface AttachmentMember {
    Url?: never;
    Attachment: AttachmentReference;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
   *    Otherwise, null.</p>
   */
  export interface StringMember {
    Url?: never;
    Attachment?: never;
    String: StringReference;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
   *    Otherwise, null.</p>
   */
  export interface NumberMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number: NumberReference;
    Date?: never;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
   *    Otherwise, null.</p>
   */
  export interface DateMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date: DateReference;
    Email?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
   *    Otherwise, null.</p>
   */
  export interface EmailMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email: EmailReference;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Url?: never;
    Attachment?: never;
    String?: never;
    Number?: never;
    Date?: never;
    Email?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Url: (value: UrlReference) => T;
    Attachment: (value: AttachmentReference) => T;
    String: (value: StringReference) => T;
    Number: (value: NumberReference) => T;
    Date: (value: DateReference) => T;
    Email: (value: EmailReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReferenceSummary, visitor: Visitor<T>): T => {
    if (value.Url !== undefined) return visitor.Url(value.Url);
    if (value.Attachment !== undefined) return visitor.Attachment(value.Attachment);
    if (value.String !== undefined) return visitor.String(value.String);
    if (value.Number !== undefined) return visitor.Number(value.Number);
    if (value.Date !== undefined) return visitor.Date(value.Date);
    if (value.Email !== undefined) return visitor.Email(value.Email);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReferenceSummary): any => {
    if (obj.Url !== undefined) return { Url: UrlReference.filterSensitiveLog(obj.Url) };
    if (obj.Attachment !== undefined) return { Attachment: AttachmentReference.filterSensitiveLog(obj.Attachment) };
    if (obj.String !== undefined) return { String: StringReference.filterSensitiveLog(obj.String) };
    if (obj.Number !== undefined) return { Number: NumberReference.filterSensitiveLog(obj.Number) };
    if (obj.Date !== undefined) return { Date: DateReference.filterSensitiveLog(obj.Date) };
    if (obj.Email !== undefined) return { Email: EmailReference.filterSensitiveLog(obj.Email) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Contains information about a default vocabulary.</p>
 */
export interface DefaultVocabulary {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;
}

export namespace DefaultVocabulary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DefaultVocabulary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
  /**
   * <p>The identifier of the hours of operation.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;
}

export namespace HoursOfOperationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoursOfOperationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * <p>The identifier of the instance.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * <p>The identity management type of the instance.</p>
   */
  IdentityManagementType?: DirectoryType | string;

  /**
   * <p>The alias of the instance.</p>
   */
  InstanceAlias?: string;

  /**
   * <p>When the instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * <p>The service role of the instance.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The state of the instance.</p>
   */
  InstanceStatus?: InstanceStatus | string;

  /**
   * <p>Whether inbound calls are enabled.</p>
   */
  InboundCallsEnabled?: boolean;

  /**
   * <p>Whether outbound calls are enabled.</p>
   */
  OutboundCallsEnabled?: boolean;
}

export namespace InstanceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceSummary): any => ({
    ...obj,
    ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains summary information about the associated AppIntegrations.</p>
 */
export interface IntegrationAssociationSummary {
  /**
   * <p>The identifier for the AppIntegration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   */
  IntegrationAssociationArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   */
  IntegrationArn?: string;

  /**
   * <p>The URL for the external application.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * <p>The user-provided, friendly name for the external application.</p>
   */
  SourceApplicationName?: string;

  /**
   * <p>The name of the source.</p>
   */
  SourceType?: SourceType | string;
}

export namespace IntegrationAssociationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegrationAssociationSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
  /**
   * <p>The identifier of the phone number.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  Arn?: string;

  /**
   * <p>The phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;
}

export namespace PhoneNumberSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PhoneNumberSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance.</p>
 */
export interface ListPhoneNumbersSummary {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.</p>
   */
  TargetArn?: string;
}

export namespace ListPhoneNumbersSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the prompt.</p>
 */
export interface PromptSummary {
  /**
   * <p>The identifier of the prompt.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the prompt.</p>
   */
  Name?: string;
}

export namespace PromptSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromptSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a quick connect.</p>
 */
export interface QuickConnectSummary {
  /**
   * <p>The identifier for the quick connect.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectType?: QuickConnectType | string;
}

export namespace QuickConnectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuickConnectSummary): any => ({
    ...obj,
  });
}

export enum QueueType {
  AGENT = "AGENT",
  STANDARD = "STANDARD",
}

/**
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
  /**
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The type of queue.</p>
   */
  QueueType?: QueueType | string;
}

export namespace QueueSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueueSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a routing profile queue.</p>
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  QueueName: string | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;

  /**
   * <p>The channels this queue supports.</p>
   */
  Channel: Channel | string | undefined;
}

export namespace RoutingProfileQueueConfigSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfileQueueConfigSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
  /**
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the routing profile.</p>
   */
  Name?: string;
}

export namespace RoutingProfileSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfileSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information of the security key.</p>
 */
export interface SecurityKey {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>The key of the security key.</p>
   */
  Key?: string;

  /**
   * <p>When the security key was created.</p>
   */
  CreationTime?: Date;
}

export namespace SecurityKey {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityKey): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
  /**
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the security profile.</p>
   */
  Name?: string;
}

export namespace SecurityProfileSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SecurityProfileSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the task template.</p>
 */
export interface TaskTemplateMetadata {
  /**
   * <p>A unique identifier for the task template.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;
}

export namespace TaskTemplateMetadata {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the
 *    use
 *    case.</p>
 */
export interface UseCase {
  /**
   * <p>The identifier for the use case.</p>
   */
  UseCaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;

  /**
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType?: UseCaseType | string;
}

export namespace UseCase {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UseCase): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Connect user name of the user account.</p>
   */
  Username?: string;
}

export namespace UserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Information about available phone numbers.</p>
 */
export interface AvailableNumberSummary {
  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;
}

export namespace AvailableNumberSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailableNumberSummary): any => ({
    ...obj,
  });
}

export enum HierarchyGroupMatchType {
  EXACT = "EXACT",
  WITH_CHILD_GROUPS = "WITH_CHILD_GROUPS",
}

/**
 * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
 */
export interface HierarchyGroupCondition {
  /**
   * <p>The value in the hierarchy group condition.</p>
   */
  Value?: string;

  /**
   * <p>The type of hierarchy group match.</p>
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType | string;
}

export namespace HierarchyGroupCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyGroupCondition): any => ({
    ...obj,
  });
}

export enum StringComparisonType {
  CONTAINS = "CONTAINS",
  EXACT = "EXACT",
  STARTS_WITH = "STARTS_WITH",
}

/**
 * <p>A leaf node condition which can be used to specify a string condition, for example,
 *     <code>username = 'abc'</code>. </p>
 */
export interface StringCondition {
  /**
   * <p>The name of the field in the string condition.</p>
   */
  FieldName?: string;

  /**
   * <p>The value of the string.</p>
   */
  Value?: string;

  /**
   * <p>The type of comparison to be made when evaluating the string condition.</p>
   */
  ComparisonType?: StringComparisonType | string;
}

export namespace StringCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringCondition): any => ({
    ...obj,
  });
}

/**
 * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
 *     BPO = 123</code>. </p>
 */
export interface TagCondition {
  /**
   * <p>The tag key in the tag condition.</p>
   */
  TagKey?: string;

  /**
   * <p>The tag value in the tag condition.</p>
   */
  TagValue?: string;
}

export namespace TagCondition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagCondition): any => ({
    ...obj,
  });
}

/**
 * <p>An object that can be used to specify Tag conditions inside the <code>SearchFilter</code>.
 *    This accepts an <code>OR</code> of <code>AND</code> (List of List) input where: </p>
 *          <ul>
 *             <li>
 *                <p>Top level list specifies conditions that need to be applied with <code>OR</code>
 *      operator</p>
 *             </li>
 *             <li>
 *                <p>Inner list specifies conditions that need to be applied with <code>AND</code>
 *      operator.</p>
 *             </li>
 *          </ul>
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.
   *   </p>
   */
  OrConditions?: TagCondition[][];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   */
  AndConditions?: TagCondition[];

  /**
   * <p>A leaf node condition which can be used to specify a tag condition. </p>
   */
  TagCondition?: TagCondition;
}

export namespace ControlPlaneTagFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ControlPlaneTagFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The user's first name and last name.</p>
 */
export interface UserIdentityInfoLite {
  /**
   * <p>The user's first name.</p>
   */
  FirstName?: string;

  /**
   * <p>The user's last name.</p>
   */
  LastName?: string;
}

export namespace UserIdentityInfoLite {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserIdentityInfoLite): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the returned users.</p>
 */
export interface UserSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  Arn?: string;

  /**
   * <p>The directory identifier of the user.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier of the user's hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user's summary.</p>
   */
  Id?: string;

  /**
   * <p>The user's first name and last name.</p>
   */
  IdentityInfo?: UserIdentityInfoLite;

  /**
   * <p>Contains information about the phone configuration settings for a user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the user's routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifiers of the user's security profiles.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the user.</p>
   */
  Username?: string;
}

export namespace UserSearchSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSearchSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains summary information about the custom vocabulary.</p>
 */
export interface VocabularySummary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   */
  FailureReason?: string;
}

export namespace VocabularySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VocabularySummary): any => ({
    ...obj,
  });
}

export enum VoiceRecordingTrack {
  ALL = "ALL",
  FROM_AGENT = "FROM_AGENT",
  TO_AGENT = "TO_AGENT",
}

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name: "DestinationNotAllowedException" = "DestinationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the outbound calls.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DestinationNotAllowedException, __BaseException>) {
    super({
      name: "DestinationNotAllowedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DestinationNotAllowedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The contact is not permitted.</p>
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name: "OutboundContactNotPermittedException" = "OutboundContactNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the contact.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OutboundContactNotPermittedException, __BaseException>) {
    super({
      name: "OutboundContactNotPermittedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OutboundContactNotPermittedException.prototype);
    this.Message = opts.Message;
  }
}

export enum TrafficType {
  CAMPAIGN = "CAMPAIGN",
  GENERAL = "GENERAL",
}

/**
 * <p>The contact with the specified ID is not active or does not exist.</p>
 */
export class ContactNotFoundException extends __BaseException {
  readonly name: "ContactNotFoundException" = "ContactNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactNotFoundException, __BaseException>) {
    super({
      name: "ContactNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
}

export namespace HierarchyLevelUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyLevelUpdate): any => ({
    ...obj,
  });
}
