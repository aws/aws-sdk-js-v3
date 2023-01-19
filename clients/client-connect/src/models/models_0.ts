// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

/**
 * <p>You do not have sufficient permissions to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

export enum ActionType {
  ASSIGN_CONTACT_CATEGORY = "ASSIGN_CONTACT_CATEGORY",
  CREATE_TASK = "CREATE_TASK",
  GENERATE_EVENTBRIDGE_EVENT = "GENERATE_EVENTBRIDGE_EVENT",
  SEND_NOTIFICATION = "SEND_NOTIFICATION",
}

/**
 * <p>Information about an action.</p>
 */
export interface ActionSummary {
  /**
   * <p>The action type.</p>
   */
  ActionType: ActionType | string | undefined;
}

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
  DISCONNECT = "DISCONNECT",
  INBOUND = "INBOUND",
  MONITOR = "MONITOR",
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
 * <p>Contains information about an agent status.</p>
 */
export interface AgentStatus {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   */
  AgentStatusARN?: string;

  /**
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId?: string;

  /**
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * <p>The description of the agent status.</p>
   */
  Description?: string;

  /**
   * <p>The type of agent status.</p>
   */
  Type?: AgentStatusType | string;

  /**
   * <p>The display order of the agent status.</p>
   */
  DisplayOrder?: number;

  /**
   * <p>The state of the agent status.</p>
   */
  State?: AgentStatusState | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
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

  /**
   * <p>The name of the agent status.</p>
   */
  StatusName?: string;
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

export enum MonitorCapability {
  BARGE = "BARGE",
  SILENT_MONITOR = "SILENT_MONITOR",
}

export interface AssociateApprovedOriginRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain to add to your allow list.</p>
   */
  Origin: string | undefined;
}

/**
 * <p>Request processing failed because of an error or failure with the service.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * <p>The message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more of the specified parameters are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the parameters.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request is not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the request.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>A resource already has that name.</p>
 */
export class ResourceConflictException extends __BaseException {
  readonly name: "ResourceConflictException" = "ResourceConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceConflictException, __BaseException>) {
    super({
      name: "ResourceConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the resource.</p>
   */
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
 * <p>The service quota has been exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The throttling limit has been exceeded.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

/**
 * <p>Configuration information of an Amazon Lex bot.</p>
 */
export interface LexBot {
  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Web Services Region where the Amazon Lex bot was created.</p>
   */
  LexRegion?: string;
}

/**
 * <p>Configuration information of an Amazon Lex V2 bot.</p>
 */
export interface LexV2Bot {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.</p>
   */
  AliasArn?: string;
}

export interface AssociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * <p>The Amazon Lex V2 bot to associate with the instance.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * <p>The allowed limit for the resource has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the limit.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
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
  EN_NZ = "en-NZ",
  EN_US = "en-US",
  EN_WL = "en-WL",
  EN_ZA = "en-ZA",
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

export interface AssociateDefaultVocabularyRequest {
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
   * <p>The identifier of the custom vocabulary. If this is empty, the default is set to none.</p>
   */
  VocabularyId?: string;
}

export interface AssociateDefaultVocabularyResponse {}

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

/**
 * <p>Configuration information of a Kinesis data stream.</p>
 */
export interface KinesisStreamConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the data stream.</p>
   */
  StreamArn: string | undefined;
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

export enum StorageType {
  KINESIS_FIREHOSE = "KINESIS_FIREHOSE",
  KINESIS_STREAM = "KINESIS_STREAM",
  KINESIS_VIDEO_STREAM = "KINESIS_VIDEO_STREAM",
  S3 = "S3",
}

/**
 * <p>The storage configuration for the instance.</p>
 */
export interface InstanceStorageConfig {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * <p>A valid storage type.</p>
   */
  StorageType: StorageType | string | undefined;

  /**
   * <p>The S3 bucket
   *    configuration.</p>
   */
  S3Config?: S3Config;

  /**
   * <p>The configuration of the Kinesis video stream.</p>
   */
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig;

  /**
   * <p>The configuration of the Kinesis data stream.</p>
   */
  KinesisStreamConfig?: KinesisStreamConfig;

  /**
   * <p>The configuration of the Kinesis Firehose delivery stream.</p>
   */
  KinesisFirehoseConfig?: KinesisFirehoseConfig;
}

export interface AssociateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;

  /**
   * <p>A valid storage type.</p>
   */
  StorageConfig: InstanceStorageConfig | undefined;
}

export interface AssociateInstanceStorageConfigResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

export interface AssociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters allowed is
   *    140.</p>
   */
  FunctionArn: string | undefined;
}

export interface AssociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Lex bot to associate with the instance.</p>
   */
  LexBot: LexBot | undefined;
}

export interface AssociatePhoneNumberContactFlowRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

export interface AssociateQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The quick connects to associate with this queue.</p>
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * <p>Contains the channel and queue identifier for a routing profile.</p>
 */
export interface RoutingProfileQueueReference {
  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  Channel: Channel | string | undefined;
}

/**
 * <p>Contains information about the queue and channel for which priority and delay can be
 *    set.</p>
 */
export interface RoutingProfileQueueConfig {
  /**
   * <p>Contains information about a queue resource.</p>
   */
  QueueReference: RoutingProfileQueueReference | undefined;

  /**
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The delay, in seconds, a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;
}

export interface AssociateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to associate with this routing profile.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

export interface AssociateSecurityKeyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid security key in PEM format.</p>
   */
  Key: string | undefined;
}

export interface AssociateSecurityKeyResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

export interface ClaimPhoneNumberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>The phone number you want to claim. Phone numbers are formatted <code>[+] [country code]
   *     [subscriber number including area code]</code>.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>Pattern: <code>^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$</code>
   *          </p>
   */
  ClientToken?: string;
}

export interface ClaimPhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;
}

/**
 * <p>An entity with the same name already exists.</p>
 */
export class IdempotencyException extends __BaseException {
  readonly name: "IdempotencyException" = "IdempotencyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IdempotencyException, __BaseException>) {
    super({
      name: "IdempotencyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IdempotencyException.prototype);
    this.Message = opts.Message;
  }
}

export interface CreateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the status.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the status.</p>
   */
  Description?: string;

  /**
   * <p>The state of the status.</p>
   */
  State: AgentStatusState | string | undefined;

  /**
   * <p>The display order of the status.</p>
   */
  DisplayOrder?: number;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateAgentStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   */
  AgentStatusARN?: string;

  /**
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId?: string;
}

/**
 * <p>A resource with the specified name already exists.</p>
 */
export class DuplicateResourceException extends __BaseException {
  readonly name: "DuplicateResourceException" = "DuplicateResourceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DuplicateResourceException, __BaseException>) {
    super({
      name: "DuplicateResourceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DuplicateResourceException.prototype);
    this.Message = opts.Message;
  }
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

export interface CreateContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type: ContactFlowType | string | undefined;

  /**
   * <p>The description of the flow. </p>
   */
  Description?: string;

  /**
   * <p>The content of the flow. </p>
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateContactFlowResponse {
  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  ContactFlowArn?: string;
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

/**
 * <p>The flow is not valid.</p>
 */
export class InvalidContactFlowException extends __BaseException {
  readonly name: "InvalidContactFlowException" = "InvalidContactFlowException";
  readonly $fault: "client" = "client";
  /**
   * <p>The problems with the flow. Please fix before trying again.</p>
   */
  problems?: ProblemDetail[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowException, __BaseException>) {
    super({
      name: "InvalidContactFlowException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowException.prototype);
    this.problems = opts.problems;
  }
}

export interface CreateContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the flow module. </p>
   */
  Description?: string;

  /**
   * <p>The content of the flow module.</p>
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateContactFlowModuleResponse {
  /**
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   */
  Arn?: string;
}

/**
 * <p>The problems with the module. Please fix before trying again.</p>
 */
export class InvalidContactFlowModuleException extends __BaseException {
  readonly name: "InvalidContactFlowModuleException" = "InvalidContactFlowModuleException";
  readonly $fault: "client" = "client";
  Problems?: ProblemDetail[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidContactFlowModuleException, __BaseException>) {
    super({
      name: "InvalidContactFlowModuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidContactFlowModuleException.prototype);
    this.Problems = opts.Problems;
  }
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

/**
 * <p>Contains information about the hours of operation.</p>
 */
export interface HoursOfOperationConfig {
  /**
   * <p>The day that the hours of operation applies to.</p>
   */
  Day: HoursOfOperationDays | string | undefined;

  /**
   * <p>The start time that your contact center opens.</p>
   */
  StartTime: HoursOfOperationTimeSlice | undefined;

  /**
   * <p>The end time that your contact center closes.</p>
   */
  EndTime: HoursOfOperationTimeSlice | undefined;
}

export interface CreateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the hours of operation.</p>
   */
  Description?: string;

  /**
   * <p>The time zone of the hours of operation.</p>
   */
  TimeZone: string | undefined;

  /**
   * <p>Configuration information for the hours of operation: day, start time, and end time.</p>
   */
  Config: HoursOfOperationConfig[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateHoursOfOperationResponse {
  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   */
  HoursOfOperationArn?: string;
}

export enum DirectoryType {
  CONNECT_MANAGED = "CONNECT_MANAGED",
  EXISTING_DIRECTORY = "EXISTING_DIRECTORY",
  SAML = "SAML",
}

export interface CreateInstanceRequest {
  /**
   * <p>The idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * <p>The type of identity management for your Amazon Connect users.</p>
   */
  IdentityManagementType: DirectoryType | string | undefined;

  /**
   * <p>The name for your instance.</p>
   */
  InstanceAlias?: string;

  /**
   * <p>The identifier for the directory.</p>
   */
  DirectoryId?: string;

  /**
   * <p>Your contact center handles incoming contacts.</p>
   */
  InboundCallsEnabled: boolean | undefined;

  /**
   * <p>Your contact center allows outbound calls.</p>
   */
  OutboundCallsEnabled: boolean | undefined;
}

export interface CreateInstanceResponse {
  /**
   * <p>The identifier for the instance.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;
}

export enum IntegrationType {
  CASES_DOMAIN = "CASES_DOMAIN",
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

export interface CreateIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of information to be ingested.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   *          <note>
   *             <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint
   *     instances must be in the same account.</p>
   *          </note>
   */
  IntegrationArn: string | undefined;

  /**
   * <p>The URL for the external application. This field is only required for the EVENT integration type.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * <p>The name of the external application. This field is only required for the EVENT integration type.</p>
   */
  SourceApplicationName?: string;

  /**
   * <p>The type of the data source. This field is only required for the EVENT integration type.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateIntegrationAssociationResponse {
  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the association.</p>
   */
  IntegrationAssociationArn?: string;
}

/**
 * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
 */
export interface OutboundCallerConfig {
  /**
   * <p>The caller ID name.</p>
   */
  OutboundCallerIdName?: string;

  /**
   * <p>The caller ID number.</p>
   */
  OutboundCallerIdNumberId?: string;

  /**
   * <p>The outbound whisper flow to be used during an outbound call.</p>
   */
  OutboundFlowId?: string;
}

export interface CreateQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  Name: string | undefined;

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
  HoursOfOperationId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;

  /**
   * <p>The quick connects available to agents who are working the queue.</p>
   */
  QuickConnectIds?: string[];

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateQueueResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn?: string;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;
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

/**
 * <p>Contains information about a queue for a quick connect. The flow must be of type Transfer to
 *    Queue.</p>
 */
export interface QueueQuickConnectConfig {
  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
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
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * <p>Contains configuration settings for a quick connect.</p>
 */
export interface QuickConnectConfig {
  /**
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). </p>
   */
  QuickConnectType: QuickConnectType | string | undefined;

  /**
   * <p>The user configuration. This is required only if QuickConnectType is USER.</p>
   */
  UserConfig?: UserQuickConnectConfig;

  /**
   * <p>The queue configuration. This is required only if QuickConnectType is QUEUE.</p>
   */
  QueueConfig?: QueueQuickConnectConfig;

  /**
   * <p>The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.</p>
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig;
}

export interface CreateQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the quick connect.</p>
   */
  Description?: string;

  /**
   * <p>Configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateQuickConnectResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the quick connect. </p>
   */
  QuickConnectARN?: string;

  /**
   * <p>The identifier for the quick connect. </p>
   */
  QuickConnectId?: string;
}

/**
 * <p>Contains information about which channels are supported, and how many contacts an agent can
 *    have on a channel simultaneously.</p>
 */
export interface MediaConcurrency {
  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  Channel: Channel | string | undefined;

  /**
   * <p>The number of contacts an agent can have on a channel simultaneously.</p>
   *          <p>Valid Range for <code>VOICE</code>: Minimum value of 1. Maximum value of 1.</p>
   *          <p>Valid Range for <code>CHAT</code>: Minimum value of 1. Maximum value of 10.</p>
   *          <p>Valid Range for <code>TASK</code>: Minimum value of 1. Maximum value of 10.</p>
   */
  Concurrency: number | undefined;
}

export interface CreateRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>Description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description: string | undefined;

  /**
   * <p>The default outbound queue for the routing profile.</p>
   */
  DefaultOutboundQueueId: string | undefined;

  /**
   * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can
   *    make only outbound calls.</p>
   */
  QueueConfigs?: RoutingProfileQueueConfig[];

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateRoutingProfileResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  RoutingProfileArn?: string;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId?: string;
}

/**
 * <p>This action must be set if <code>TriggerEventSource</code> is one of the following values:
 *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
 *     <code>OnPostChatAnalysisAvailable</code>. Contact is categorized using the rule name.</p>
 *          <p>
 *             <code>RuleName</code> is used as <code>ContactCategory</code>.</p>
 */
export interface AssignContactCategoryActionDefinition {}

/**
 * <p>The EventBridge action definition.</p>
 */
export interface EventBridgeActionDefinition {
  /**
   * <p>The name.</p>
   */
  Name: string | undefined;
}

export enum NotificationContentType {
  PLAIN_TEXT = "PLAIN_TEXT",
}

export enum NotificationDeliveryType {
  EMAIL = "EMAIL",
}

/**
 * <p>The type of notification recipient.</p>
 */
export interface NotificationRecipientType {
  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. Amazon Connect users with the specified tags will be notified.</p>
   */
  UserTags?: Record<string, string>;

  /**
   * <p>A list of user IDs.</p>
   */
  UserIds?: string[];
}

/**
 * <p>Information about the send notification action.</p>
 */
export interface SendNotificationActionDefinition {
  /**
   * <p>Notification delivery method.</p>
   */
  DeliveryMethod: NotificationDeliveryType | string | undefined;

  /**
   * <p>The subject of the email if the delivery method is <code>EMAIL</code>.
   *    Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Subject?: string;

  /**
   * <p>Notification content. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Content: string | undefined;

  /**
   * <p>Content type format.</p>
   */
  ContentType: NotificationContentType | string | undefined;

  /**
   * <p>Notification recipient.</p>
   */
  Recipient: NotificationRecipientType | undefined;
}

export enum ReferenceType {
  ATTACHMENT = "ATTACHMENT",
  DATE = "DATE",
  EMAIL = "EMAIL",
  NUMBER = "NUMBER",
  STRING = "STRING",
  URL = "URL",
}

/**
 * <p>Well-formed data on a contact, used by agents to complete a contact request. You can have up
 *    to 4,096 UTF-8 bytes across all references for a contact.</p>
 */
export interface Reference {
  /**
   * <p>A valid value for the reference. For example, for a URL reference, a formatted URL that is
   *    displayed to an agent in the Contact Control Panel (CCP).</p>
   */
  Value: string | undefined;

  /**
   * <p>The type of the reference. <code>DATE</code> must be of type Epoch timestamp.
   *    </p>
   */
  Type: ReferenceType | string | undefined;
}

/**
 * <p>Information about the task action.</p>
 */
export interface TaskActionDefinition {
  /**
   * <p>The name. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null. (Supports variable injection in the <code>Value</code> field.)</p>
   */
  References?: Record<string, Reference>;
}

/**
 * <p>Information about the action to be performed when a rule is triggered.</p>
 */
export interface RuleAction {
  /**
   * <p>The type of action that creates a rule.</p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * <p>Information about the task action. This field is required if <code>TriggerEventSource</code>
   *    is one of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   */
  TaskAction?: TaskActionDefinition;

  /**
   * <p>Information about the EventBridge action.</p>
   */
  EventBridgeAction?: EventBridgeActionDefinition;

  /**
   * <p>Information about the contact category action.</p>
   */
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition;

  /**
   * <p>Information about the send notification action.</p>
   */
  SendNotificationAction?: SendNotificationActionDefinition;
}

export enum RulePublishStatus {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
}

export enum EventSourceName {
  OnPostCallAnalysisAvailable = "OnPostCallAnalysisAvailable",
  OnPostChatAnalysisAvailable = "OnPostChatAnalysisAvailable",
  OnRealTimeCallAnalysisAvailable = "OnRealTimeCallAnalysisAvailable",
  OnSalesforceCaseCreate = "OnSalesforceCaseCreate",
  OnZendeskTicketCreate = "OnZendeskTicketCreate",
  OnZendeskTicketStatusUpdate = "OnZendeskTicketStatusUpdate",
}

/**
 * <p>The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the
 *    following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> |
 *     <code>OnSalesforceCaseCreate</code>
 *          </p>
 */
export interface RuleTriggerEventSource {
  /**
   * <p>The name of the event source.</p>
   */
  EventSourceName: EventSourceName | string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId?: string;
}

export interface CreateRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name for the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The event source to trigger the rule.</p>
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

export interface CreateSecurityProfileRequest {
  /**
   * <p>The name of the security profile.</p>
   */
  SecurityProfileName: string | undefined;

  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>. </p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code> |
   *     <code>SecurityProfile</code> | <code>Queue</code> | <code>RoutingProfile</code>
   *          </p>
   */
  TagRestrictedResources?: string[];
}

export interface CreateSecurityProfileResponse {
  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the security profile.</p>
   */
  SecurityProfileArn?: string;
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

/**
 * <p>A field that is invisible to an agent.</p>
 */
export interface InvisibleFieldInfo {
  /**
   * <p>Identifier of the invisible field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
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

/**
 * <p>Information about a required field.</p>
 */
export interface RequiredFieldInfo {
  /**
   * <p>The unique identifier for the field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

/**
 * <p>Describes constraints that apply to the template fields.</p>
 */
export interface TaskTemplateConstraints {
  /**
   * <p>Lists the fields that are required to be filled by agents.</p>
   */
  RequiredFields?: RequiredFieldInfo[];

  /**
   * <p>Lists the fields that are read-only to agents, and cannot be edited.</p>
   */
  ReadOnlyFields?: ReadOnlyFieldInfo[];

  /**
   * <p>Lists the fields that are invisible to agents.</p>
   */
  InvisibleFields?: InvisibleFieldInfo[];
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

/**
 * <p>Describes default values for fields on a template.</p>
 */
export interface TaskTemplateDefaults {
  /**
   * <p>Default value for the field.</p>
   */
  DefaultFieldValues?: TaskTemplateDefaultFieldValue[];
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

/**
 * <p>Describes a single task template field.</p>
 */
export interface TaskTemplateField {
  /**
   * <p>The unique identifier for the field.</p>
   */
  Id: TaskTemplateFieldIdentifier | undefined;

  /**
   * <p>The description of the field.</p>
   */
  Description?: string;

  /**
   * <p>Indicates the type of field.</p>
   */
  Type?: TaskTemplateFieldType | string;

  /**
   * <p>A list of options for a single select field.</p>
   */
  SingleSelectOptions?: string[];
}

export enum TaskTemplateStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export interface CreateTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. </p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>Fields that are part of the template.</p>
   */
  Fields: TaskTemplateField[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

export interface CreateTaskTemplateResponse {
  /**
   * <p>The identifier of the task template resource.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   */
  Arn: string | undefined;
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

/**
 * <p>The property is not valid.</p>
 */
export class PropertyValidationException extends __BaseException {
  readonly name: "PropertyValidationException" = "PropertyValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  PropertyList?: PropertyValidationExceptionProperty[];
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PropertyValidationException, __BaseException>) {
    super({
      name: "PropertyValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PropertyValidationException.prototype);
    this.Message = opts.Message;
    this.PropertyList = opts.PropertyList;
  }
}

export interface CreateTrafficDistributionGroupRequest {
  /**
   * <p>The name for the traffic distribution group. </p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the traffic distribution group.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that has been replicated. You can find the
   *     <code>instanceId</code> in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateTrafficDistributionGroupResponse {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;
}

/**
 * <p>The resource is not ready.</p>
 */
export class ResourceNotReadyException extends __BaseException {
  readonly name: "ResourceNotReadyException" = "ResourceNotReadyException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotReadyException, __BaseException>) {
    super({
      name: "ResourceNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

export enum UseCaseType {
  CONNECT_CAMPAIGNS = "CONNECT_CAMPAIGNS",
  RULES_EVALUATION = "RULES_EVALUATION",
}

export interface CreateUseCaseRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType: UseCaseType | string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateUseCaseResponse {
  /**
   * <p>The identifier of the use case.</p>
   */
  UseCaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;
}

/**
 * <p>Contains information about the identity of a user.</p>
 */
export interface UserIdentityInfo {
  /**
   * <p>The first name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   */
  FirstName?: string;

  /**
   * <p>The last name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   */
  LastName?: string;

  /**
   * <p>The email address. If you are using SAML for identity management and include this parameter,
   *    an error is returned.</p>
   */
  Email?: string;

  /**
   * <p>The user's secondary email address. If you provide a secondary email, the user receives
   *    email notifications - other than password reset notifications - to this email address instead of
   *    to their primary email address.</p>
   *          <p>Pattern: <code>(?=^.{0,265}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}</code>
   *          </p>
   */
  SecondaryEmail?: string;

  /**
   * <p>The user's mobile number.</p>
   */
  Mobile?: string;
}

export enum PhoneType {
  DESK_PHONE = "DESK_PHONE",
  SOFT_PHONE = "SOFT_PHONE",
}

/**
 * <p>Contains information about the phone configuration settings for a user.</p>
 */
export interface UserPhoneConfig {
  /**
   * <p>The phone type.</p>
   */
  PhoneType: PhoneType | string | undefined;

  /**
   * <p>The Auto accept setting.</p>
   */
  AutoAccept?: boolean;

  /**
   * <p>The After Call Work (ACW) timeout setting, in seconds.</p>
   *          <note>
   *             <p>When returned by a <code>SearchUsers</code> call, <code>AfterContactWorkTimeLimit</code> is
   *     returned in milliseconds. </p>
   *          </note>
   */
  AfterContactWorkTimeLimit?: number;

  /**
   * <p>The phone number for the user's desk phone.</p>
   */
  DeskPhoneNumber?: string;
}

export interface CreateUserRequest {
  /**
   * <p>The user name for the account. For instances not using SAML for identity management, the
   *    user name can include up to 20 characters. If you are using SAML for identity management, the
   *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.</p>
   */
  Password?: string;

  /**
   * <p>The information about the identity of the user.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * <p>The phone settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account in the directory used for identity management. If Amazon Connect cannot access the directory, you can specify this identifier to authenticate users.
   *    If you include the identifier, we assume that Amazon Connect cannot access the directory.
   *    Otherwise, the identity information is used to authenticate users from your directory.</p>
   *          <p>This parameter is required if you are using an existing directory for identity management in
   *     Amazon Connect when Amazon Connect cannot access your directory to authenticate users.
   *    If you are using SAML for identity management and include this parameter, an error is
   *    returned.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier of the security profile for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateUserResponse {
  /**
   * <p>The identifier of the user account.</p>
   */
  UserId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  UserArn?: string;
}

export interface CreateUserHierarchyGroupRequest {
  /**
   * <p>The name of the user hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the parent hierarchy group. The user hierarchy is created at level one if
   *    the parent group ID is null.</p>
   */
  ParentGroupId?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateUserHierarchyGroupResponse {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group. </p>
   */
  HierarchyGroupArn?: string;
}

export interface CreateVocabularyRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token,
   *    subsequent requests return the previous response without creating a vocabulary again.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export enum VocabularyState {
  ACTIVE = "ACTIVE",
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

export interface CreateVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;
}

export interface DeleteContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

export interface DeleteContactFlowResponse {}

export interface DeleteContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

export interface DeleteContactFlowModuleResponse {}

export interface DeleteHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

export interface DeleteInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export interface DeleteIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;
}

export interface DeleteQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;
}

export interface DeleteRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

export interface DeleteSecurityProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;
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
 * <p>That resource is already in use. Please try another.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The identifier for the resource.</p>
   */
  ResourceId?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
    this.ResourceType = opts.ResourceType;
    this.ResourceId = opts.ResourceId;
  }
}

export interface DeleteTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;
}

export interface DeleteTaskTemplateResponse {}

export interface DeleteTrafficDistributionGroupRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;
}

export interface DeleteTrafficDistributionGroupResponse {}

export interface DeleteUseCaseRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The identifier for the use case.</p>
   */
  UseCaseId: string | undefined;
}

export interface DeleteUserRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;
}

export interface DeleteUserHierarchyGroupRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export interface DeleteVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;
}

export interface DeleteVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;
}

export interface DescribeAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the agent status.</p>
   */
  AgentStatusId: string | undefined;
}

export interface DescribeAgentStatusResponse {
  /**
   * <p>The agent status.</p>
   */
  AgentStatus?: AgentStatus;
}

export interface DescribeContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;
}

/**
 * <p>If this contact was queued, this contains information about the queue. </p>
 */
export interface QueueInfo {
  /**
   * <p>The unique identifier for the queue.</p>
   */
  Id?: string;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   */
  EnqueueTimestamp?: Date;
}

/**
 * <p>Contains information about a contact.</p>
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) for the contact.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier for the contact.</p>
   */
  Id?: string;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   */
  InitialContactId?: string;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   */
  PreviousContactId?: string;

  /**
   * <p>Indicates how the contact was initiated.</p>
   */
  InitiationMethod?: ContactInitiationMethod | string;

  /**
   * <p>The name of the contact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact.</p>
   */
  Description?: string;

  /**
   * <p>How the contact reached your contact center.</p>
   */
  Channel?: Channel | string;

  /**
   * <p>If this contact was queued, this contains information about the queue. </p>
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   */
  AgentInfo?: AgentInfo;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For <code>API</code>,
   *    this is when the request arrived.</p>
   */
  InitiationTimestamp?: Date;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   */
  DisconnectTimestamp?: Date;

  /**
   * <p>The timestamp when contact was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *   </p>
   */
  ScheduledTimestamp?: Date;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this
   *    contact.</p>
   */
  RelatedContactId?: string;
}

export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   */
  Contact?: Contact;
}

/**
 * <p>The flow has not been published.</p>
 */
export class ContactFlowNotPublishedException extends __BaseException {
  readonly name: "ContactFlowNotPublishedException" = "ContactFlowNotPublishedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ContactFlowNotPublishedException, __BaseException>) {
    super({
      name: "ContactFlowNotPublishedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ContactFlowNotPublishedException.prototype);
    this.Message = opts.Message;
  }
}

export interface DescribeContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

export enum ContactFlowState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

/**
 * <p>Contains information about a flow.</p>
 */
export interface ContactFlow {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type?: ContactFlowType | string;

  /**
   * <p>The type of flow.</p>
   */
  State?: ContactFlowState | string;

  /**
   * <p>The description of the flow.</p>
   */
  Description?: string;

  /**
   * <p>The content of the flow.</p>
   */
  Content?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeContactFlowResponse {
  /**
   * <p>Information about the flow.</p>
   */
  ContactFlow?: ContactFlow;
}

export interface DescribeContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

export enum ContactFlowModuleState {
  ACTIVE = "ACTIVE",
  ARCHIVED = "ARCHIVED",
}

export enum ContactFlowModuleStatus {
  PUBLISHED = "PUBLISHED",
  SAVED = "SAVED",
}

/**
 * <p>Contains information about a flow module.</p>
 */
export interface ContactFlowModule {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * <p>The content of the flow module.</p>
   */
  Content?: string;

  /**
   * <p>The description of the flow module.</p>
   */
  Description?: string;

  /**
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState | string;

  /**
   * <p>The status of the flow module.</p>
   */
  Status?: ContactFlowModuleStatus | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeContactFlowModuleResponse {
  /**
   * <p>Information about the flow module.</p>
   */
  ContactFlowModule?: ContactFlowModule;
}

export interface DescribeHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

/**
 * <p>Information about of the hours of operation.</p>
 */
export interface HoursOfOperation {
  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   */
  HoursOfOperationArn?: string;

  /**
   * <p>The name for the hours of operation.</p>
   */
  Name?: string;

  /**
   * <p>The description for the hours of operation.</p>
   */
  Description?: string;

  /**
   * <p>The time zone for the hours of operation.</p>
   */
  TimeZone?: string;

  /**
   * <p>Configuration information for the hours of operation.</p>
   */
  Config?: HoursOfOperationConfig[];

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeHoursOfOperationResponse {
  /**
   * <p>The hours of operation.</p>
   */
  HoursOfOperation?: HoursOfOperation;
}

export interface DescribeInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
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

/**
 * <p>The Amazon Connect instance.</p>
 */
export interface Instance {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * <p>The identity management type.</p>
   */
  IdentityManagementType?: DirectoryType | string;

  /**
   * <p>The alias of instance.</p>
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
   * <p>Relevant
   *    details why the instance was not successfully created. </p>
   */
  StatusReason?: InstanceStatusReason;

  /**
   * <p>Whether inbound calls are enabled.</p>
   */
  InboundCallsEnabled?: boolean;

  /**
   * <p>Whether outbound calls are enabled.</p>
   */
  OutboundCallsEnabled?: boolean;
}

export interface DescribeInstanceResponse {
  /**
   * <p>The name of the instance.</p>
   */
  Instance?: Instance;
}

export enum InstanceAttributeType {
  AUTO_RESOLVE_BEST_VOICES = "AUTO_RESOLVE_BEST_VOICES",
  CONTACTFLOW_LOGS = "CONTACTFLOW_LOGS",
  CONTACT_LENS = "CONTACT_LENS",
  EARLY_MEDIA = "EARLY_MEDIA",
  ENHANCED_CONTACT_MONITORING = "ENHANCED_CONTACT_MONITORING",
  HIGH_VOLUME_OUTBOUND = "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS = "INBOUND_CALLS",
  MULTI_PARTY_CONFERENCE = "MULTI_PARTY_CONFERENCE",
  OUTBOUND_CALLS = "OUTBOUND_CALLS",
  USE_CUSTOM_TTS_VOICES = "USE_CUSTOM_TTS_VOICES",
}

export interface DescribeInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   */
  AttributeType: InstanceAttributeType | string | undefined;
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

export interface DescribeInstanceAttributeResponse {
  /**
   * <p>The
   *    type
   *    of attribute.</p>
   */
  Attribute?: Attribute;
}

export interface DescribeInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;
}

export interface DescribeInstanceStorageConfigResponse {
  /**
   * <p>A valid storage type.</p>
   */
  StorageConfig?: InstanceStorageConfig;
}

export interface DescribePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export enum PhoneNumberCountryCode {
  AD = "AD",
  AE = "AE",
  AF = "AF",
  AG = "AG",
  AI = "AI",
  AL = "AL",
  AM = "AM",
  AN = "AN",
  AO = "AO",
  AQ = "AQ",
  AR = "AR",
  AS = "AS",
  AT = "AT",
  AU = "AU",
  AW = "AW",
  AZ = "AZ",
  BA = "BA",
  BB = "BB",
  BD = "BD",
  BE = "BE",
  BF = "BF",
  BG = "BG",
  BH = "BH",
  BI = "BI",
  BJ = "BJ",
  BL = "BL",
  BM = "BM",
  BN = "BN",
  BO = "BO",
  BR = "BR",
  BS = "BS",
  BT = "BT",
  BW = "BW",
  BY = "BY",
  BZ = "BZ",
  CA = "CA",
  CC = "CC",
  CD = "CD",
  CF = "CF",
  CG = "CG",
  CH = "CH",
  CI = "CI",
  CK = "CK",
  CL = "CL",
  CM = "CM",
  CN = "CN",
  CO = "CO",
  CR = "CR",
  CU = "CU",
  CV = "CV",
  CW = "CW",
  CX = "CX",
  CY = "CY",
  CZ = "CZ",
  DE = "DE",
  DJ = "DJ",
  DK = "DK",
  DM = "DM",
  DO = "DO",
  DZ = "DZ",
  EC = "EC",
  EE = "EE",
  EG = "EG",
  EH = "EH",
  ER = "ER",
  ES = "ES",
  ET = "ET",
  FI = "FI",
  FJ = "FJ",
  FK = "FK",
  FM = "FM",
  FO = "FO",
  FR = "FR",
  GA = "GA",
  GB = "GB",
  GD = "GD",
  GE = "GE",
  GG = "GG",
  GH = "GH",
  GI = "GI",
  GL = "GL",
  GM = "GM",
  GN = "GN",
  GQ = "GQ",
  GR = "GR",
  GT = "GT",
  GU = "GU",
  GW = "GW",
  GY = "GY",
  HK = "HK",
  HN = "HN",
  HR = "HR",
  HT = "HT",
  HU = "HU",
  ID = "ID",
  IE = "IE",
  IL = "IL",
  IM = "IM",
  IN = "IN",
  IO = "IO",
  IQ = "IQ",
  IR = "IR",
  IS = "IS",
  IT = "IT",
  JE = "JE",
  JM = "JM",
  JO = "JO",
  JP = "JP",
  KE = "KE",
  KG = "KG",
  KH = "KH",
  KI = "KI",
  KM = "KM",
  KN = "KN",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KY = "KY",
  KZ = "KZ",
  LA = "LA",
  LB = "LB",
  LC = "LC",
  LI = "LI",
  LK = "LK",
  LR = "LR",
  LS = "LS",
  LT = "LT",
  LU = "LU",
  LV = "LV",
  LY = "LY",
  MA = "MA",
  MC = "MC",
  MD = "MD",
  ME = "ME",
  MF = "MF",
  MG = "MG",
  MH = "MH",
  MK = "MK",
  ML = "ML",
  MM = "MM",
  MN = "MN",
  MO = "MO",
  MP = "MP",
  MR = "MR",
  MS = "MS",
  MT = "MT",
  MU = "MU",
  MV = "MV",
  MW = "MW",
  MX = "MX",
  MY = "MY",
  MZ = "MZ",
  NA = "NA",
  NC = "NC",
  NE = "NE",
  NG = "NG",
  NI = "NI",
  NL = "NL",
  NO = "NO",
  NP = "NP",
  NR = "NR",
  NU = "NU",
  NZ = "NZ",
  OM = "OM",
  PA = "PA",
  PE = "PE",
  PF = "PF",
  PG = "PG",
  PH = "PH",
  PK = "PK",
  PL = "PL",
  PM = "PM",
  PN = "PN",
  PR = "PR",
  PT = "PT",
  PW = "PW",
  PY = "PY",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RS = "RS",
  RU = "RU",
  RW = "RW",
  SA = "SA",
  SB = "SB",
  SC = "SC",
  SD = "SD",
  SE = "SE",
  SG = "SG",
  SH = "SH",
  SI = "SI",
  SJ = "SJ",
  SK = "SK",
  SL = "SL",
  SM = "SM",
  SN = "SN",
  SO = "SO",
  SR = "SR",
  ST = "ST",
  SV = "SV",
  SX = "SX",
  SY = "SY",
  SZ = "SZ",
  TC = "TC",
  TD = "TD",
  TG = "TG",
  TH = "TH",
  TJ = "TJ",
  TK = "TK",
  TL = "TL",
  TM = "TM",
  TN = "TN",
  TO = "TO",
  TR = "TR",
  TT = "TT",
  TV = "TV",
  TW = "TW",
  TZ = "TZ",
  UA = "UA",
  UG = "UG",
  US = "US",
  UY = "UY",
  UZ = "UZ",
  VA = "VA",
  VC = "VC",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  VU = "VU",
  WF = "WF",
  WS = "WS",
  YE = "YE",
  YT = "YT",
  ZA = "ZA",
  ZM = "ZM",
  ZW = "ZW",
}

export enum PhoneNumberWorkflowStatus {
  Claimed = "CLAIMED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
}

/**
 * <p>The status of the phone number.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
 *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
 *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation is still in progress and has not yet completed. You can
 *      call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at a later time to verify if the previous operation has
 *      completed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
 *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
 *      failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you
 *      are claiming or updating a phone number to has reached its limit of total claimed numbers. If
 *      you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you
 *      have one day to retry claiming the phone number before the number is released back to the
 *      inventory for other customers to claim.</p>
 *             </li>
 *          </ul>
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

export enum PhoneNumberType {
  DID = "DID",
  TOLL_FREE = "TOLL_FREE",
}

/**
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
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
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The status of the phone number.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
   *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
   *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation is still in progress and has not yet completed. You can
   *      call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at a later time to verify if the previous operation has
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimedPhoneNumber.html">ClaimedPhoneNumber</a> or
   *       <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
   *      failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you
   *      are claiming or updating a phone number to has reached its limit of total claimed numbers. If
   *      you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you
   *      have one day to retry claiming the phone number before the number is released back to the
   *      inventory for other customers to claim.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>You will not be billed for the phone number during the 1-day period if number claiming
   *     fails. </p>
   *          </note>
   */
  PhoneNumberStatus?: PhoneNumberStatus;
}

export interface DescribePhoneNumberResponse {
  /**
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance or
   *    traffic distribution group.</p>
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}

export interface DescribeQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeQueueResponse {
  /**
   * <p>The name of the queue.</p>
   */
  Queue?: Queue;
}

export interface DescribeQuickConnectRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeQuickConnectResponse {
  /**
   * <p>Information about the quick connect.</p>
   */
  QuickConnect?: QuickConnect;
}

export interface DescribeRoutingProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The number of associated queues in routing profile.</p>
   */
  NumberOfAssociatedQueues?: number;

  /**
   * <p>The number of associated users in routing profile.</p>
   */
  NumberOfAssociatedUsers?: number;
}

export interface DescribeRoutingProfileResponse {
  /**
   * <p>The routing profile.</p>
   */
  RoutingProfile?: RoutingProfile;
}

export interface DescribeRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * <p>Information about a rule.</p>
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * <p>The event source to trigger the rule.</p>
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * <p>The timestamp for when the rule was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for the when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the rule.</p>
   */
  LastUpdatedBy: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeRuleResponse {
  /**
   * <p>Information about the rule.</p>
   */
  Rule: Rule | undefined;
}

export interface DescribeSecurityProfileRequest {
  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   */
  TagRestrictedResources?: string[];
}

export interface DescribeSecurityProfileResponse {
  /**
   * <p>The security profile.</p>
   */
  SecurityProfile?: SecurityProfile;
}

export interface DescribeTrafficDistributionGroupRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;
}

export enum TrafficDistributionGroupStatus {
  ACTIVE = "ACTIVE",
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  DELETION_FAILED = "DELETION_FAILED",
  PENDING_DELETION = "PENDING_DELETION",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Information about a traffic distribution group.</p>
 */
export interface TrafficDistributionGroup {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the traffic distribution group.</p>
   */
  Name?: string;

  /**
   * <p>The description of the traffic distribution group.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  InstanceArn?: string;

  /**
   * <p>The status of the traffic distribution group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATION_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATION_FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_CreateTrafficDistributionGroup.html">CreateTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETION_FAILED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DeleteTrafficDistributionGroup.html">DeleteTrafficDistributionGroup</a> operation has failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistributionGroup.html">UpdateTrafficDistributionGroup</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *          </ul>
   */
  Status?: TrafficDistributionGroupStatus | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeTrafficDistributionGroupResponse {
  /**
   * <p>Information about the traffic distribution group.</p>
   */
  TrafficDistributionGroup?: TrafficDistributionGroup;
}

export interface DescribeUserRequest {
  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about a user account for an Amazon Connect instance.</p>
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

export interface DescribeUserResponse {
  /**
   * <p>Information about the user account and configuration settings.</p>
   */
  User?: User;
}

export interface DescribeUserHierarchyGroupRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeUserHierarchyGroupResponse {
  /**
   * <p>Information about the hierarchy group.</p>
   */
  HierarchyGroup?: HierarchyGroup;
}

export interface DescribeUserHierarchyStructureRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
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

export interface DescribeUserHierarchyStructureResponse {
  /**
   * <p>Information about the hierarchy structure.</p>
   */
  HierarchyStructure?: HierarchyStructure;
}

export interface DescribeVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeVocabularyResponse {
  /**
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   */
  Vocabulary: Vocabulary | undefined;
}

export interface DisassociateApprovedOriginRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain URL of the integrated application.</p>
   */
  Origin: string | undefined;
}

export interface DisassociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * <p>The Amazon Lex V2 bot to disassociate from the instance.</p>
   */
  LexV2Bot?: LexV2Bot;
}

export interface DisassociateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;
}

export interface DisassociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance..</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
   */
  FunctionArn: string | undefined;
}

export interface DisassociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
   */
  BotName: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the Amazon Lex bot has been created.</p>
   */
  LexRegion: string | undefined;
}

export interface DisassociatePhoneNumberContactFlowRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export interface DisassociateQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The quick connects to disassociate from the queue.</p>
   */
  QuickConnectIds: string[] | undefined;
}

export interface DisassociateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to disassociate from this routing profile.</p>
   */
  QueueReferences: RoutingProfileQueueReference[] | undefined;
}

export interface DisassociateSecurityKeyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;
}

export interface DismissUserContactRequest {
  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;
}

export interface DismissUserContactResponse {}

export interface GetContactAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   */
  InitialContactId: string | undefined;
}

export interface GetContactAttributesResponse {
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: Record<string, string>;
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
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface CurrentMetric {
  /**
   * <p>The name of the metric.</p>
   */
  Name?: CurrentMetricName | string;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit | string;
}

/**
 * <p>Contains the filter to apply when retrieving metrics.</p>
 */
export interface Filters {
  /**
   * <p>The queues to use to filter the metrics. You should specify at least one queue, and can
   *    specify up to 100 queues per request. The <code>GetCurrentMetricsData</code> API in particular
   *    requires a queue when you include a <code>Filter</code> in your request. </p>
   */
  Queues?: string[];

  /**
   * <p>The channel to use to filter the metrics.</p>
   */
  Channels?: (Channel | string)[];

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];
}

export enum Grouping {
  CHANNEL = "CHANNEL",
  QUEUE = "QUEUE",
  ROUTING_PROFILE = "ROUTING_PROFILE",
}

export enum SortOrder {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>The way to sort the resulting response based on metrics. By default resources are sorted
 *    based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted
 *    based on the input metrics.</p>
 */
export interface CurrentMetricSortCriteria {
  /**
   * <p>The current metric names.</p>
   */
  SortByMetric?: CurrentMetricName | string;

  /**
   * <p>The way to sort.</p>
   */
  SortOrder?: SortOrder | string;
}

export interface GetCurrentMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The filters to apply to returned metrics. You can filter up to the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>Queues: 100</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles: 100</p>
   *             </li>
   *             <li>
   *                <p>Channels: 3 (VOICE, CHAT, and TASK channels are supported.)</p>
   *             </li>
   *          </ul>
   *          <p>Metric data is retrieved only for the resources associated with the queues or routing
   *    profiles, and by any channels included in the filter. (You cannot filter by both queue AND
   *    routing profile.) You can include both resource IDs and resource ARNs in the same request. </p>
   *          <p>Currently tagging is only supported on the resources that are passed in the filter.</p>
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when grouped by
   *     <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all
   *    queues. </p>
   *          <ul>
   *             <li>
   *                <p>If you group by <code>CHANNEL</code>, you should include a Channels filter.
   *      VOICE, CHAT, and TASK channels are supported.</p>
   *             </li>
   *             <li>
   *                <p>If you group by <code>ROUTING_PROFILE</code>, you must include either a queue or routing
   *      profile filter. In addition, a routing profile filter is required for metrics
   *       <code>CONTACTS_SCHEDULED</code>, <code>CONTACTS_IN_QUEUE</code>, and <code>
   *       OLDEST_CONTACT_AGE</code>.</p>
   *             </li>
   *             <li>
   *                <p>If no <code>Grouping</code> is included in the request, a summary of metrics is
   *      returned.</p>
   *             </li>
   *          </ul>
   */
  Groupings?: (Grouping | string)[];

  /**
   * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics
   *    are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics
   *     Definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <dl>
   *             <dt>AGENTS_AFTER_CONTACT_WORK</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#aftercallwork-real-time">ACW</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#available-real-time">Available</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ERROR</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#error-real-time">Error</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_NON_PRODUCTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#non-productive-time-real-time">NPT (Non-Productive Time)</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CALL</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
   *        contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CONTACT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#on-call-real-time">On
   *        contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ONLINE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#online-real-time">Online</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_STAFFED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#staffed-real-time">Staffed</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_IN_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#in-queue-real-time">In
   *        queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_SCHEDULED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#scheduled-real-time">Scheduled</a>
   *                </p>
   *             </dd>
   *             <dt>OLDEST_CONTACT_AGE</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>When you use groupings, Unit says SECONDS and the Value is returned in SECONDS. </p>
   *                <p>When you do not use groupings, Unit says SECONDS but the Value is returned in
   *       MILLISECONDS. For example, if you get a response like this:</p>
   *                <p>
   *                   <code>{ "Metric": { "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" }, "Value": 24113.0
   *       </code>}</p>
   *                <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#oldest-real-time">Oldest</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_ACTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#active-real-time">Active</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html#availability-real-time">Availability</a>
   *                </p>
   *             </dd>
   *          </dl>
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The way to sort the resulting response based on metrics. You can enter one sort criteria. By
   *    default resources are sorted based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The
   *    metric collection is sorted based on the input metrics.</p>
   *          <p>Note the following:</p>
   *          <ul>
   *             <li>
   *                <p>Sorting on <code>SLOTS_ACTIVE</code> and <code>SLOTS_AVAILABLE</code> is not
   *      supported.</p>
   *             </li>
   *          </ul>
   */
  SortCriteria?: CurrentMetricSortCriteria[];
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

  /**
   * <p>Information about the routing profile assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;
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

export interface GetCurrentMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the real-time metrics.</p>
   */
  MetricResults?: CurrentMetricResult[];

  /**
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   */
  DataSnapshotTime?: Date;

  /**
   * <p>The total count of the result, regardless of the current page size. </p>
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters user data based on the contact information that is associated to the users. It
 *    contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 */
export interface ContactFilter {
  /**
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   */
  ContactStates?: (ContactState | string)[];
}

/**
 * <p>A filter for the user data.</p>
 */
export interface UserDataFilters {
  /**
   * <p>A list of up to 100 queues or ARNs.</p>
   */
  Queues?: string[];

  /**
   * <p>A filter for the user data based on the contact information that is associated to the user.
   *    It contains a list of contact states. </p>
   */
  ContactFilter?: ContactFilter;

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];

  /**
   * <p>A list of up to 100 agent IDs or ARNs.</p>
   */
  Agents?: string[];

  /**
   * <p>A UserHierarchyGroup ID or ARN.</p>
   */
  UserHierarchyGroups?: string[];
}

export interface GetCurrentUserDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The filters to apply to returned user data. You can filter up to the following
   *    limits:</p>
   *          <ul>
   *             <li>
   *                <p>Queues: 100</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles: 100</p>
   *             </li>
   *             <li>
   *                <p>Agents: 100</p>
   *             </li>
   *             <li>
   *                <p>Contact states: 9</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups: 1</p>
   *             </li>
   *          </ul>
   *          <p> The user data is retrieved for only the specified values/resources in the filter. A maximum
   *    of one filter can be passed from queues, routing profiles, agents, and user hierarchy groups. </p>
   *          <p>Currently tagging is only supported on the resources that are passed in the filter.</p>
   */
  Filters: UserDataFilters | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
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

/**
 * <p>Data for a user.</p>
 */
export interface UserData {
  /**
   * <p>Information about the user for the data that is returned. It contains the
   *     <code>resourceId</code> and ARN of the user. </p>
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
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the
   *     <code>RoutingProfile</code> assigned to the agent. </p>
   */
  MaxSlotsByChannel?: Record<string, number>;

  /**
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots. </p>
   */
  ActiveSlotsByChannel?: Record<string, number>;

  /**
   * <p>A list of contact reference information.</p>
   */
  Contacts?: AgentContactReference[];

  /**
   * <p>The Next status of the agent.</p>
   */
  NextStatus?: string;
}

export interface GetCurrentUserDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the user data that is returned.</p>
   */
  UserDataList?: UserData[];

  /**
   * <p>The total count of the result, regardless of the current page size.</p>
   */
  ApproximateTotalCount?: number;
}

export interface GetFederationTokenRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
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
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect.</p>
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

export interface GetFederationTokenResponse {
  /**
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: Credentials;

  /**
   * <p>The URL to sign into the user's instance. </p>
   */
  SignInUrl?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  UserArn?: string;

  /**
   * <p>The identifier for the user.</p>
   */
  UserId?: string;
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

/**
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface HistoricalMetric {
  /**
   * <p>The name of the metric.</p>
   */
  Name?: HistoricalMetricName | string;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: Threshold;

  /**
   * <p>The statistic for the metric.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit | string;
}

export interface GetMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
   *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   *          <note>
   *             <p>To filter by <code>Queues</code>, enter the queue
   *     ID/ARN, not the name of the queue.</p>
   *          </note>
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   */
  Groupings?: (Grouping | string)[];

  /**
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   *          <note>
   *             <p>This API does not support a contacts
   *     incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p>
   *          </note>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *             </dd>
   *          </dl>
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
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

export interface GetMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   */
  MetricResults?: HistoricalMetricResult[];
}

export interface GetTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The system generated version of a task template that is associated with a task, when the
   *    task is created.</p>
   */
  SnapshotVersion?: string;
}

export interface GetTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A unique identifier for the task template.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the task template.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];

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

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  Tags?: Record<string, string>;
}

export interface GetTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.</p>
   */
  Id: string | undefined;
}

/**
 * <p>Information about a traffic distribution.</p>
 */
export interface Distribution {
  /**
   * <p>The Amazon Web Services Region where the traffic is distributed.</p>
   */
  Region: string | undefined;

  /**
   * <p>The percentage of the traffic that is distributed, in increments of 10.</p>
   */
  Percentage: number | undefined;
}

/**
 * <p>The distribution of traffic between the instance and its replicas.</p>
 */
export interface TelephonyConfig {
  /**
   * <p>Information about traffic distributions.</p>
   */
  Distributions: Distribution[] | undefined;
}

export interface GetTrafficDistributionResponse {
  /**
   * <p>The distribution of traffic between the instance and its replicas.</p>
   */
  TelephonyConfig?: TelephonyConfig;

  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;
}

export interface ListAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Available agent status types.</p>
   */
  AgentStatusTypes?: (AgentStatusType | string)[];
}

export interface ListAgentStatusResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A summary of agent statuses.</p>
   */
  AgentStatusSummaryList?: AgentStatusSummary[];
}

export interface ListApprovedOriginsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

export interface ListApprovedOriginsResponse {
  /**
   * <p>The approved origins.</p>
   */
  Origins?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export enum LexVersion {
  V1 = "V1",
  V2 = "V2",
}

export interface ListBotsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   */
  LexVersion: LexVersion | string | undefined;
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

export interface ListBotsResponse {
  /**
   * <p>The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots associated with the
   *    specified instance.</p>
   */
  LexBots?: LexBotConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListContactFlowModulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The state of the flow module.</p>
   */
  ContactFlowModuleState?: ContactFlowModuleState | string;
}

/**
 * <p>Contains summary information about a flow.</p>
 */
export interface ContactFlowModuleSummary {
  /**
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

export interface ListContactFlowModulesResponse {
  /**
   * <p>Information about the flow module.</p>
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowTypes?: (ContactFlowType | string)[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
  /**
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowType?: ContactFlowType | string;

  /**
   * <p>The type of flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

export interface ListContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListContactReferencesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The type of reference.</p>
   */
  ReferenceTypes: (ReferenceType | string)[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
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

/**
 * @internal
 */
export const ActionSummaryFilterSensitiveLog = (obj: ActionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueReferenceFilterSensitiveLog = (obj: QueueReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentContactReferenceFilterSensitiveLog = (obj: AgentContactReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentInfoFilterSensitiveLog = (obj: AgentInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentStatusFilterSensitiveLog = (obj: AgentStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentStatusReferenceFilterSensitiveLog = (obj: AgentStatusReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AgentStatusSummaryFilterSensitiveLog = (obj: AgentStatusSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateApprovedOriginRequestFilterSensitiveLog = (obj: AssociateApprovedOriginRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexBotFilterSensitiveLog = (obj: LexBot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexV2BotFilterSensitiveLog = (obj: LexV2Bot): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateBotRequestFilterSensitiveLog = (obj: AssociateBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDefaultVocabularyRequestFilterSensitiveLog = (obj: AssociateDefaultVocabularyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDefaultVocabularyResponseFilterSensitiveLog = (obj: AssociateDefaultVocabularyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisFirehoseConfigFilterSensitiveLog = (obj: KinesisFirehoseConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisStreamConfigFilterSensitiveLog = (obj: KinesisStreamConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionConfigFilterSensitiveLog = (obj: EncryptionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisVideoStreamConfigFilterSensitiveLog = (obj: KinesisVideoStreamConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ConfigFilterSensitiveLog = (obj: S3Config): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStorageConfigFilterSensitiveLog = (obj: InstanceStorageConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateInstanceStorageConfigRequestFilterSensitiveLog = (
  obj: AssociateInstanceStorageConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateInstanceStorageConfigResponseFilterSensitiveLog = (
  obj: AssociateInstanceStorageConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateLambdaFunctionRequestFilterSensitiveLog = (obj: AssociateLambdaFunctionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateLexBotRequestFilterSensitiveLog = (obj: AssociateLexBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatePhoneNumberContactFlowRequestFilterSensitiveLog = (
  obj: AssociatePhoneNumberContactFlowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateQueueQuickConnectsRequestFilterSensitiveLog = (obj: AssociateQueueQuickConnectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileQueueReferenceFilterSensitiveLog = (obj: RoutingProfileQueueReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileQueueConfigFilterSensitiveLog = (obj: RoutingProfileQueueConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateRoutingProfileQueuesRequestFilterSensitiveLog = (
  obj: AssociateRoutingProfileQueuesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSecurityKeyRequestFilterSensitiveLog = (obj: AssociateSecurityKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateSecurityKeyResponseFilterSensitiveLog = (obj: AssociateSecurityKeyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClaimPhoneNumberRequestFilterSensitiveLog = (obj: ClaimPhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClaimPhoneNumberResponseFilterSensitiveLog = (obj: ClaimPhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgentStatusRequestFilterSensitiveLog = (obj: CreateAgentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAgentStatusResponseFilterSensitiveLog = (obj: CreateAgentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactFlowRequestFilterSensitiveLog = (obj: CreateContactFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactFlowResponseFilterSensitiveLog = (obj: CreateContactFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProblemDetailFilterSensitiveLog = (obj: ProblemDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactFlowModuleRequestFilterSensitiveLog = (obj: CreateContactFlowModuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContactFlowModuleResponseFilterSensitiveLog = (obj: CreateContactFlowModuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoursOfOperationTimeSliceFilterSensitiveLog = (obj: HoursOfOperationTimeSlice): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoursOfOperationConfigFilterSensitiveLog = (obj: HoursOfOperationConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHoursOfOperationRequestFilterSensitiveLog = (obj: CreateHoursOfOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateHoursOfOperationResponseFilterSensitiveLog = (obj: CreateHoursOfOperationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateInstanceRequestFilterSensitiveLog = (obj: CreateInstanceRequest): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateInstanceResponseFilterSensitiveLog = (obj: CreateInstanceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIntegrationAssociationRequestFilterSensitiveLog = (
  obj: CreateIntegrationAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIntegrationAssociationResponseFilterSensitiveLog = (
  obj: CreateIntegrationAssociationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutboundCallerConfigFilterSensitiveLog = (obj: OutboundCallerConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQueueRequestFilterSensitiveLog = (obj: CreateQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQueueResponseFilterSensitiveLog = (obj: CreateQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberQuickConnectConfigFilterSensitiveLog = (obj: PhoneNumberQuickConnectConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueQuickConnectConfigFilterSensitiveLog = (obj: QueueQuickConnectConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserQuickConnectConfigFilterSensitiveLog = (obj: UserQuickConnectConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuickConnectConfigFilterSensitiveLog = (obj: QuickConnectConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQuickConnectRequestFilterSensitiveLog = (obj: CreateQuickConnectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateQuickConnectResponseFilterSensitiveLog = (obj: CreateQuickConnectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MediaConcurrencyFilterSensitiveLog = (obj: MediaConcurrency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoutingProfileRequestFilterSensitiveLog = (obj: CreateRoutingProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRoutingProfileResponseFilterSensitiveLog = (obj: CreateRoutingProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssignContactCategoryActionDefinitionFilterSensitiveLog = (
  obj: AssignContactCategoryActionDefinition
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBridgeActionDefinitionFilterSensitiveLog = (obj: EventBridgeActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationRecipientTypeFilterSensitiveLog = (obj: NotificationRecipientType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendNotificationActionDefinitionFilterSensitiveLog = (obj: SendNotificationActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReferenceFilterSensitiveLog = (obj: Reference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskActionDefinitionFilterSensitiveLog = (obj: TaskActionDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleActionFilterSensitiveLog = (obj: RuleAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleTriggerEventSourceFilterSensitiveLog = (obj: RuleTriggerEventSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleRequestFilterSensitiveLog = (obj: CreateRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRuleResponseFilterSensitiveLog = (obj: CreateRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSecurityProfileRequestFilterSensitiveLog = (obj: CreateSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSecurityProfileResponseFilterSensitiveLog = (obj: CreateSecurityProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateFieldIdentifierFilterSensitiveLog = (obj: TaskTemplateFieldIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InvisibleFieldInfoFilterSensitiveLog = (obj: InvisibleFieldInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReadOnlyFieldInfoFilterSensitiveLog = (obj: ReadOnlyFieldInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequiredFieldInfoFilterSensitiveLog = (obj: RequiredFieldInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateConstraintsFilterSensitiveLog = (obj: TaskTemplateConstraints): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateDefaultFieldValueFilterSensitiveLog = (obj: TaskTemplateDefaultFieldValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateDefaultsFilterSensitiveLog = (obj: TaskTemplateDefaults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateFieldFilterSensitiveLog = (obj: TaskTemplateField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTaskTemplateRequestFilterSensitiveLog = (obj: CreateTaskTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTaskTemplateResponseFilterSensitiveLog = (obj: CreateTaskTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyValidationExceptionPropertyFilterSensitiveLog = (
  obj: PropertyValidationExceptionProperty
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficDistributionGroupRequestFilterSensitiveLog = (
  obj: CreateTrafficDistributionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateTrafficDistributionGroupResponseFilterSensitiveLog = (
  obj: CreateTrafficDistributionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUseCaseRequestFilterSensitiveLog = (obj: CreateUseCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUseCaseResponseFilterSensitiveLog = (obj: CreateUseCaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdentityInfoFilterSensitiveLog = (obj: UserIdentityInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserPhoneConfigFilterSensitiveLog = (obj: UserPhoneConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserRequestFilterSensitiveLog = (obj: CreateUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserResponseFilterSensitiveLog = (obj: CreateUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserHierarchyGroupRequestFilterSensitiveLog = (obj: CreateUserHierarchyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUserHierarchyGroupResponseFilterSensitiveLog = (obj: CreateUserHierarchyGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVocabularyRequestFilterSensitiveLog = (obj: CreateVocabularyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateVocabularyResponseFilterSensitiveLog = (obj: CreateVocabularyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactFlowRequestFilterSensitiveLog = (obj: DeleteContactFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactFlowResponseFilterSensitiveLog = (obj: DeleteContactFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactFlowModuleRequestFilterSensitiveLog = (obj: DeleteContactFlowModuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContactFlowModuleResponseFilterSensitiveLog = (obj: DeleteContactFlowModuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteHoursOfOperationRequestFilterSensitiveLog = (obj: DeleteHoursOfOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteInstanceRequestFilterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIntegrationAssociationRequestFilterSensitiveLog = (
  obj: DeleteIntegrationAssociationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteQuickConnectRequestFilterSensitiveLog = (obj: DeleteQuickConnectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleRequestFilterSensitiveLog = (obj: DeleteRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSecurityProfileRequestFilterSensitiveLog = (obj: DeleteSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTaskTemplateRequestFilterSensitiveLog = (obj: DeleteTaskTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTaskTemplateResponseFilterSensitiveLog = (obj: DeleteTaskTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficDistributionGroupRequestFilterSensitiveLog = (
  obj: DeleteTrafficDistributionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTrafficDistributionGroupResponseFilterSensitiveLog = (
  obj: DeleteTrafficDistributionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUseCaseRequestFilterSensitiveLog = (obj: DeleteUseCaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserRequestFilterSensitiveLog = (obj: DeleteUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUserHierarchyGroupRequestFilterSensitiveLog = (obj: DeleteUserHierarchyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVocabularyRequestFilterSensitiveLog = (obj: DeleteVocabularyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteVocabularyResponseFilterSensitiveLog = (obj: DeleteVocabularyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentStatusRequestFilterSensitiveLog = (obj: DescribeAgentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAgentStatusResponseFilterSensitiveLog = (obj: DescribeAgentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactRequestFilterSensitiveLog = (obj: DescribeContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueInfoFilterSensitiveLog = (obj: QueueInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactResponseFilterSensitiveLog = (obj: DescribeContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactFlowRequestFilterSensitiveLog = (obj: DescribeContactFlowRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFlowFilterSensitiveLog = (obj: ContactFlow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactFlowResponseFilterSensitiveLog = (obj: DescribeContactFlowResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactFlowModuleRequestFilterSensitiveLog = (obj: DescribeContactFlowModuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFlowModuleFilterSensitiveLog = (obj: ContactFlowModule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeContactFlowModuleResponseFilterSensitiveLog = (obj: DescribeContactFlowModuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHoursOfOperationRequestFilterSensitiveLog = (obj: DescribeHoursOfOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HoursOfOperationFilterSensitiveLog = (obj: HoursOfOperation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHoursOfOperationResponseFilterSensitiveLog = (obj: DescribeHoursOfOperationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceRequestFilterSensitiveLog = (obj: DescribeInstanceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceStatusReasonFilterSensitiveLog = (obj: InstanceStatusReason): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeInstanceResponseFilterSensitiveLog = (obj: DescribeInstanceResponse): any => ({
  ...obj,
  ...(obj.Instance && { Instance: InstanceFilterSensitiveLog(obj.Instance) }),
});

/**
 * @internal
 */
export const DescribeInstanceAttributeRequestFilterSensitiveLog = (obj: DescribeInstanceAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeFilterSensitiveLog = (obj: Attribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceAttributeResponseFilterSensitiveLog = (obj: DescribeInstanceAttributeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceStorageConfigRequestFilterSensitiveLog = (
  obj: DescribeInstanceStorageConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceStorageConfigResponseFilterSensitiveLog = (
  obj: DescribeInstanceStorageConfigResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePhoneNumberRequestFilterSensitiveLog = (obj: DescribePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PhoneNumberStatusFilterSensitiveLog = (obj: PhoneNumberStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ClaimedPhoneNumberSummaryFilterSensitiveLog = (obj: ClaimedPhoneNumberSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePhoneNumberResponseFilterSensitiveLog = (obj: DescribePhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueueRequestFilterSensitiveLog = (obj: DescribeQueueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueFilterSensitiveLog = (obj: Queue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQueueResponseFilterSensitiveLog = (obj: DescribeQueueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQuickConnectRequestFilterSensitiveLog = (obj: DescribeQuickConnectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QuickConnectFilterSensitiveLog = (obj: QuickConnect): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeQuickConnectResponseFilterSensitiveLog = (obj: DescribeQuickConnectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRoutingProfileRequestFilterSensitiveLog = (obj: DescribeRoutingProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileFilterSensitiveLog = (obj: RoutingProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRoutingProfileResponseFilterSensitiveLog = (obj: DescribeRoutingProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleRequestFilterSensitiveLog = (obj: DescribeRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleResponseFilterSensitiveLog = (obj: DescribeRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityProfileRequestFilterSensitiveLog = (obj: DescribeSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityProfileFilterSensitiveLog = (obj: SecurityProfile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSecurityProfileResponseFilterSensitiveLog = (obj: DescribeSecurityProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficDistributionGroupRequestFilterSensitiveLog = (
  obj: DescribeTrafficDistributionGroupRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficDistributionGroupFilterSensitiveLog = (obj: TrafficDistributionGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficDistributionGroupResponseFilterSensitiveLog = (
  obj: DescribeTrafficDistributionGroupResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserRequestFilterSensitiveLog = (obj: DescribeUserRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserHierarchyGroupRequestFilterSensitiveLog = (obj: DescribeUserHierarchyGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyGroupSummaryFilterSensitiveLog = (obj: HierarchyGroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyPathFilterSensitiveLog = (obj: HierarchyPath): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyGroupFilterSensitiveLog = (obj: HierarchyGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserHierarchyGroupResponseFilterSensitiveLog = (obj: DescribeUserHierarchyGroupResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserHierarchyStructureRequestFilterSensitiveLog = (
  obj: DescribeUserHierarchyStructureRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyLevelFilterSensitiveLog = (obj: HierarchyLevel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyStructureFilterSensitiveLog = (obj: HierarchyStructure): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeUserHierarchyStructureResponseFilterSensitiveLog = (
  obj: DescribeUserHierarchyStructureResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVocabularyRequestFilterSensitiveLog = (obj: DescribeVocabularyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VocabularyFilterSensitiveLog = (obj: Vocabulary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeVocabularyResponseFilterSensitiveLog = (obj: DescribeVocabularyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateApprovedOriginRequestFilterSensitiveLog = (obj: DisassociateApprovedOriginRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateBotRequestFilterSensitiveLog = (obj: DisassociateBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateInstanceStorageConfigRequestFilterSensitiveLog = (
  obj: DisassociateInstanceStorageConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateLambdaFunctionRequestFilterSensitiveLog = (obj: DisassociateLambdaFunctionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateLexBotRequestFilterSensitiveLog = (obj: DisassociateLexBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociatePhoneNumberContactFlowRequestFilterSensitiveLog = (
  obj: DisassociatePhoneNumberContactFlowRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateQueueQuickConnectsRequestFilterSensitiveLog = (
  obj: DisassociateQueueQuickConnectsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateRoutingProfileQueuesRequestFilterSensitiveLog = (
  obj: DisassociateRoutingProfileQueuesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateSecurityKeyRequestFilterSensitiveLog = (obj: DisassociateSecurityKeyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DismissUserContactRequestFilterSensitiveLog = (obj: DismissUserContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DismissUserContactResponseFilterSensitiveLog = (obj: DismissUserContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactAttributesRequestFilterSensitiveLog = (obj: GetContactAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContactAttributesResponseFilterSensitiveLog = (obj: GetContactAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CurrentMetricFilterSensitiveLog = (obj: CurrentMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FiltersFilterSensitiveLog = (obj: Filters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CurrentMetricSortCriteriaFilterSensitiveLog = (obj: CurrentMetricSortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCurrentMetricDataRequestFilterSensitiveLog = (obj: GetCurrentMetricDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CurrentMetricDataFilterSensitiveLog = (obj: CurrentMetricData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileReferenceFilterSensitiveLog = (obj: RoutingProfileReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DimensionsFilterSensitiveLog = (obj: Dimensions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CurrentMetricResultFilterSensitiveLog = (obj: CurrentMetricResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCurrentMetricDataResponseFilterSensitiveLog = (obj: GetCurrentMetricDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFilterFilterSensitiveLog = (obj: ContactFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDataFiltersFilterSensitiveLog = (obj: UserDataFilters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCurrentUserDataRequestFilterSensitiveLog = (obj: GetCurrentUserDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyGroupSummaryReferenceFilterSensitiveLog = (obj: HierarchyGroupSummaryReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyPathReferenceFilterSensitiveLog = (obj: HierarchyPathReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserReferenceFilterSensitiveLog = (obj: UserReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserDataFilterSensitiveLog = (obj: UserData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetCurrentUserDataResponseFilterSensitiveLog = (obj: GetCurrentUserDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetFederationTokenRequestFilterSensitiveLog = (obj: GetFederationTokenRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => ({
  ...obj,
  ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
  ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetFederationTokenResponseFilterSensitiveLog = (obj: GetFederationTokenResponse): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

/**
 * @internal
 */
export const ThresholdFilterSensitiveLog = (obj: Threshold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoricalMetricFilterSensitiveLog = (obj: HistoricalMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMetricDataRequestFilterSensitiveLog = (obj: GetMetricDataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoricalMetricDataFilterSensitiveLog = (obj: HistoricalMetricData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistoricalMetricResultFilterSensitiveLog = (obj: HistoricalMetricResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetMetricDataResponseFilterSensitiveLog = (obj: GetMetricDataResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTaskTemplateRequestFilterSensitiveLog = (obj: GetTaskTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTaskTemplateResponseFilterSensitiveLog = (obj: GetTaskTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrafficDistributionRequestFilterSensitiveLog = (obj: GetTrafficDistributionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DistributionFilterSensitiveLog = (obj: Distribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TelephonyConfigFilterSensitiveLog = (obj: TelephonyConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTrafficDistributionResponseFilterSensitiveLog = (obj: GetTrafficDistributionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgentStatusRequestFilterSensitiveLog = (obj: ListAgentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAgentStatusResponseFilterSensitiveLog = (obj: ListAgentStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApprovedOriginsRequestFilterSensitiveLog = (obj: ListApprovedOriginsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApprovedOriginsResponseFilterSensitiveLog = (obj: ListApprovedOriginsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotsRequestFilterSensitiveLog = (obj: ListBotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexBotConfigFilterSensitiveLog = (obj: LexBotConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotsResponseFilterSensitiveLog = (obj: ListBotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactFlowModulesRequestFilterSensitiveLog = (obj: ListContactFlowModulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFlowModuleSummaryFilterSensitiveLog = (obj: ContactFlowModuleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactFlowModulesResponseFilterSensitiveLog = (obj: ListContactFlowModulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactFlowsRequestFilterSensitiveLog = (obj: ListContactFlowsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContactFlowSummaryFilterSensitiveLog = (obj: ContactFlowSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactFlowsResponseFilterSensitiveLog = (obj: ListContactFlowsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContactReferencesRequestFilterSensitiveLog = (obj: ListContactReferencesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachmentReferenceFilterSensitiveLog = (obj: AttachmentReference): any => ({
  ...obj,
});
