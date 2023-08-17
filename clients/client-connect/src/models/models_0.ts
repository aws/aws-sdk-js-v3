// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ActionType = {
  ASSIGN_CONTACT_CATEGORY: "ASSIGN_CONTACT_CATEGORY",
  CREATE_TASK: "CREATE_TASK",
  GENERATE_EVENTBRIDGE_EVENT: "GENERATE_EVENTBRIDGE_EVENT",
  SEND_NOTIFICATION: "SEND_NOTIFICATION",
} as const;

/**
 * @public
 */
export type ActionType = (typeof ActionType)[keyof typeof ActionType];

/**
 * @public
 * <p>Information about an action.</p>
 */
export interface ActionSummary {
  /**
   * @public
   * <p>The action type.</p>
   */
  ActionType: ActionType | string | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The version of the evaluation form to activate. If the version property is not provided, the
   *    latest version of the evaluation form is activated.</p>
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface ActivateEvaluationFormResponse {
  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>A version of the evaluation form.</p>
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 * <p>Request processing failed because of an error or failure with the service.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "server" = "server";
  /**
   * @public
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
 * @public
 * <p>One or more of the specified parameters are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
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
 * @public
 * <p>The specified resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
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
 * @public
 * @enum
 */
export const AgentAvailabilityTimer = {
  TIME_SINCE_LAST_ACTIVITY: "TIME_SINCE_LAST_ACTIVITY",
  TIME_SINCE_LAST_INBOUND: "TIME_SINCE_LAST_INBOUND",
} as const;

/**
 * @public
 */
export type AgentAvailabilityTimer = (typeof AgentAvailabilityTimer)[keyof typeof AgentAvailabilityTimer];

/**
 * @public
 * <p>Information about a traffic distribution.</p>
 */
export interface Distribution {
  /**
   * @public
   * <p>The Amazon Web Services Region where the traffic is distributed.</p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>The percentage of the traffic that is distributed, in increments of 10.</p>
   */
  Percentage: number | undefined;
}

/**
 * @public
 * <p>The distribution of agents between the instance and its replica(s).</p>
 */
export interface AgentConfig {
  /**
   * @public
   * <p>Information about traffic distributions.</p>
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactState = {
  CONNECTED: "CONNECTED",
  CONNECTED_ONHOLD: "CONNECTED_ONHOLD",
  CONNECTING: "CONNECTING",
  ENDED: "ENDED",
  ERROR: "ERROR",
  INCOMING: "INCOMING",
  MISSED: "MISSED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ContactState = (typeof ContactState)[keyof typeof ContactState];

/**
 * @public
 * @enum
 */
export const Channel = {
  CHAT: "CHAT",
  TASK: "TASK",
  VOICE: "VOICE",
} as const;

/**
 * @public
 */
export type Channel = (typeof Channel)[keyof typeof Channel];

/**
 * @public
 * @enum
 */
export const ContactInitiationMethod = {
  API: "API",
  CALLBACK: "CALLBACK",
  DISCONNECT: "DISCONNECT",
  EXTERNAL_OUTBOUND: "EXTERNAL_OUTBOUND",
  INBOUND: "INBOUND",
  MONITOR: "MONITOR",
  OUTBOUND: "OUTBOUND",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
  TRANSFER: "TRANSFER",
} as const;

/**
 * @public
 */
export type ContactInitiationMethod = (typeof ContactInitiationMethod)[keyof typeof ContactInitiationMethod];

/**
 * @public
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 */
export interface QueueReference {
  /**
   * @public
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Information about the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Contact.html">contact</a> associated to the
 *    user.</p>
 */
export interface AgentContactReference {
  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The channel of the contact.</p>
   */
  Channel?: Channel | string;

  /**
   * @public
   * <p>How the contact was initiated.</p>
   */
  InitiationMethod?: ContactInitiationMethod | string;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">state of the contact</a>.</p>
   */
  AgentContactState?: ContactState | string;

  /**
   * @public
   * <p>The epoch timestamp when the contact state started.</p>
   */
  StateStartTimestamp?: Date;

  /**
   * @public
   * <p>The time at which the contact was connected to an agent.</p>
   */
  ConnectedToAgentTimestamp?: Date;

  /**
   * @public
   * <p>Contains information about a queue resource for which metrics are returned.</p>
   */
  Queue?: QueueReference;
}

/**
 * @public
 * <p>Information about the agent who accepted the contact.</p>
 */
export interface AgentInfo {
  /**
   * @public
   * <p>The identifier of the agent who accepted the contact.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The timestamp when the contact was connected to the agent.</p>
   */
  ConnectedToAgentTimestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const AgentStatusState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AgentStatusState = (typeof AgentStatusState)[keyof typeof AgentStatusState];

/**
 * @public
 * @enum
 */
export const AgentStatusType = {
  CUSTOM: "CUSTOM",
  OFFLINE: "OFFLINE",
  ROUTABLE: "ROUTABLE",
} as const;

/**
 * @public
 */
export type AgentStatusType = (typeof AgentStatusType)[keyof typeof AgentStatusType];

/**
 * @public
 * <p>Contains information about an agent status.</p>
 */
export interface AgentStatus {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   */
  AgentStatusARN?: string;

  /**
   * @public
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId?: string;

  /**
   * @public
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the agent status.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of agent status.</p>
   */
  Type?: AgentStatusType | string;

  /**
   * @public
   * <p>The display order of the agent status.</p>
   */
  DisplayOrder?: number;

  /**
   * @public
   * <p>The state of the agent status.</p>
   */
  State?: AgentStatusState | string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Information about the agent's status.</p>
 */
export interface AgentStatusReference {
  /**
   * @public
   * <p>The start timestamp of the agent's status.</p>
   */
  StatusStartTimestamp?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the agent's status.</p>
   */
  StatusArn?: string;

  /**
   * @public
   * <p>The name of the agent status.</p>
   */
  StatusName?: string;
}

/**
 * @public
 * <p>Summary information for an agent status.</p>
 */
export interface AgentStatusSummary {
  /**
   * @public
   * <p>The identifier for an agent status.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the agent status.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the agent status.</p>
   */
  Type?: AgentStatusType | string;
}

/**
 * @public
 * @enum
 */
export const MonitorCapability = {
  BARGE: "BARGE",
  SILENT_MONITOR: "SILENT_MONITOR",
} as const;

/**
 * @public
 */
export type MonitorCapability = (typeof MonitorCapability)[keyof typeof MonitorCapability];

/**
 * @public
 */
export interface AssociateApprovedOriginRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The domain to add to your allow list.</p>
   */
  Origin: string | undefined;
}

/**
 * @public
 * <p>The request is not valid.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
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
 * @public
 * <p>Configuration information of an Amazon Lex bot.</p>
 */
export interface LexBot {
  /**
   * @public
   * <p>The name of the Amazon Lex bot.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region where the Amazon Lex bot was created.</p>
   */
  LexRegion: string | undefined;
}

/**
 * @public
 * <p>Configuration information of an Amazon Lex V2 bot.</p>
 */
export interface LexV2Bot {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Lex V2 bot.</p>
   */
  AliasArn?: string;
}

/**
 * @public
 */
export interface AssociateBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * @public
   * <p>The Amazon Lex V2 bot to associate with the instance.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 * <p>The allowed limit for the resource has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 * @enum
 */
export const VocabularyLanguageCode = {
  AR_AE: "ar-AE",
  DE_CH: "de-CH",
  DE_DE: "de-DE",
  EN_AB: "en-AB",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IE: "en-IE",
  EN_IN: "en-IN",
  EN_NZ: "en-NZ",
  EN_US: "en-US",
  EN_WL: "en-WL",
  EN_ZA: "en-ZA",
  ES_ES: "es-ES",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  HI_IN: "hi-IN",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
  PT_BR: "pt-BR",
  PT_PT: "pt-PT",
  ZH_CN: "zh-CN",
} as const;

/**
 * @public
 */
export type VocabularyLanguageCode = (typeof VocabularyLanguageCode)[keyof typeof VocabularyLanguageCode];

/**
 * @public
 */
export interface AssociateDefaultVocabularyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary. If this is empty, the default is set to none.</p>
   */
  VocabularyId?: string;
}

/**
 * @public
 */
export interface AssociateDefaultVocabularyResponse {}

/**
 * @public
 * @enum
 */
export const InstanceStorageResourceType = {
  AGENT_EVENTS: "AGENT_EVENTS",
  ATTACHMENTS: "ATTACHMENTS",
  CALL_RECORDINGS: "CALL_RECORDINGS",
  CHAT_TRANSCRIPTS: "CHAT_TRANSCRIPTS",
  CONTACT_EVALUATIONS: "CONTACT_EVALUATIONS",
  CONTACT_TRACE_RECORDS: "CONTACT_TRACE_RECORDS",
  MEDIA_STREAMS: "MEDIA_STREAMS",
  REAL_TIME_CONTACT_ANALYSIS_SEGMENTS: "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS",
  SCHEDULED_REPORTS: "SCHEDULED_REPORTS",
  SCREEN_RECORDINGS: "SCREEN_RECORDINGS",
} as const;

/**
 * @public
 */
export type InstanceStorageResourceType =
  (typeof InstanceStorageResourceType)[keyof typeof InstanceStorageResourceType];

/**
 * @public
 * <p>Configuration information of a Kinesis Data Firehose delivery stream.</p>
 */
export interface KinesisFirehoseConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the delivery stream.</p>
   */
  FirehoseArn: string | undefined;
}

/**
 * @public
 * <p>Configuration information of a Kinesis data stream.</p>
 */
export interface KinesisStreamConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the data stream.</p>
   */
  StreamArn: string | undefined;
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
 * @public
 * <p>The encryption configuration.</p>
 */
export interface EncryptionConfig {
  /**
   * @public
   * <p>The type of encryption.</p>
   */
  EncryptionType: EncryptionType | string | undefined;

  /**
   * @public
   * <p>The full ARN of the encryption key. </p>
   *          <note>
   *             <p>Be sure to provide the full ARN of the encryption key, not just the ID.</p>
   *             <p>Amazon Connect supports only KMS keys with the default key spec of
   *      <a href="https://docs.aws.amazon.com/kms/latest/developerguide/asymmetric-key-specs.html#key-spec-symmetric-default">
   *                   <code>SYMMETRIC_DEFAULT</code>
   *                </a>. </p>
   *          </note>
   */
  KeyId: string | undefined;
}

/**
 * @public
 * <p>Configuration information of a Kinesis video stream.</p>
 */
export interface KinesisVideoStreamConfig {
  /**
   * @public
   * <p>The prefix of the video stream.</p>
   */
  Prefix: string | undefined;

  /**
   * @public
   * <p>The number of hours data is retained in the stream. Kinesis Video Streams retains the data
   *    in a data store that is associated with the stream.</p>
   *          <p>The default value is 0, indicating that the stream does not persist data.</p>
   */
  RetentionPeriodHours: number | undefined;

  /**
   * @public
   * <p>The encryption configuration.</p>
   */
  EncryptionConfig: EncryptionConfig | undefined;
}

/**
 * @public
 * <p>Information about the Amazon Simple Storage Service (Amazon S3) storage type.</p>
 */
export interface S3Config {
  /**
   * @public
   * <p>The S3 bucket name.</p>
   */
  BucketName: string | undefined;

  /**
   * @public
   * <p>The S3 bucket prefix.</p>
   */
  BucketPrefix: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

/**
 * @public
 * @enum
 */
export const StorageType = {
  KINESIS_FIREHOSE: "KINESIS_FIREHOSE",
  KINESIS_STREAM: "KINESIS_STREAM",
  KINESIS_VIDEO_STREAM: "KINESIS_VIDEO_STREAM",
  S3: "S3",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 * <p>The storage configuration for the instance.</p>
 */
export interface InstanceStorageConfig {
  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>A valid storage type.</p>
   */
  StorageType: StorageType | string | undefined;

  /**
   * @public
   * <p>The S3 bucket
   *    configuration.</p>
   */
  S3Config?: S3Config;

  /**
   * @public
   * <p>The configuration of the Kinesis video stream.</p>
   */
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig;

  /**
   * @public
   * <p>The configuration of the Kinesis data stream.</p>
   */
  KinesisStreamConfig?: KinesisStreamConfig;

  /**
   * @public
   * <p>The configuration of the Kinesis Firehose delivery stream.</p>
   */
  KinesisFirehoseConfig?: KinesisFirehoseConfig;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;

  /**
   * @public
   * <p>A valid storage type.</p>
   */
  StorageConfig: InstanceStorageConfig | undefined;
}

/**
 * @public
 */
export interface AssociateInstanceStorageConfigResponse {
  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

/**
 * @public
 */
export interface AssociateLambdaFunctionRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the Lambda function being associated. Maximum number of characters
   *    allowed is 140.</p>
   */
  FunctionArn: string | undefined;
}

/**
 * @public
 */
export interface AssociateLexBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Lex bot to associate with the instance.</p>
   */
  LexBot: LexBot | undefined;
}

/**
 * @public
 */
export interface AssociatePhoneNumberContactFlowRequest {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 */
export interface AssociateQueueQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The quick connects to associate with this queue.</p>
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 * <p>Contains the channel and queue identifier for a routing profile.</p>
 */
export interface RoutingProfileQueueReference {
  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  Channel: Channel | string | undefined;
}

/**
 * @public
 * <p>Contains information about the queue and channel for which priority and delay can be
 *    set.</p>
 */
export interface RoutingProfileQueueConfig {
  /**
   * @public
   * <p>Contains information about a queue resource.</p>
   */
  QueueReference: RoutingProfileQueueReference | undefined;

  /**
   * @public
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The delay, in seconds, a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;
}

/**
 * @public
 */
export interface AssociateRoutingProfileQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * @public
   * <p>The queues to associate with this routing profile.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A valid security key in PEM format.</p>
   */
  Key: string | undefined;
}

/**
 * @public
 */
export interface AssociateSecurityKeyResponse {
  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account. This can be the ID or the ARN of the user. </p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface AssociateTrafficDistributionGroupUserResponse {}

/**
 * @public
 */
export interface ClaimPhoneNumberRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>The phone number you want to claim. Phone numbers are formatted <code>[+] [country code]
   *     [subscriber number including area code]</code>.</p>
   */
  PhoneNumber: string | undefined;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>Pattern: <code>^[a-f0-9]\{8\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{4\}-[a-f0-9]\{12\}$</code>
   *          </p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ClaimPhoneNumberResponse {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateAgentStatusRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the status.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the status.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the status.</p>
   */
  State: AgentStatusState | string | undefined;

  /**
   * @public
   * <p>The display order of the status.</p>
   */
  DisplayOrder?: number;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAgentStatusResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the agent status.</p>
   */
  AgentStatusARN?: string;

  /**
   * @public
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId?: string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ContactFlowType = {
  AGENT_HOLD: "AGENT_HOLD",
  AGENT_TRANSFER: "AGENT_TRANSFER",
  AGENT_WHISPER: "AGENT_WHISPER",
  CONTACT_FLOW: "CONTACT_FLOW",
  CUSTOMER_HOLD: "CUSTOMER_HOLD",
  CUSTOMER_QUEUE: "CUSTOMER_QUEUE",
  CUSTOMER_WHISPER: "CUSTOMER_WHISPER",
  OUTBOUND_WHISPER: "OUTBOUND_WHISPER",
  QUEUE_TRANSFER: "QUEUE_TRANSFER",
} as const;

/**
 * @public
 */
export type ContactFlowType = (typeof ContactFlowType)[keyof typeof ContactFlowType];

/**
 * @public
 */
export interface CreateContactFlowRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type: ContactFlowType | string | undefined;

  /**
   * @public
   * <p>The description of the flow. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the flow. </p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateContactFlowResponse {
  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  ContactFlowArn?: string;
}

/**
 * @public
 * <p>Information about a problem detail.</p>
 */
export interface ProblemDetail {
  /**
   * @public
   * <p>The problem detail's message.</p>
   */
  message?: string;
}

/**
 * @public
 * <p>The flow is not valid.</p>
 */
export class InvalidContactFlowException extends __BaseException {
  readonly name: "InvalidContactFlowException" = "InvalidContactFlowException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface CreateContactFlowModuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the flow module.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the flow module. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the flow module.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateContactFlowModuleResponse {
  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow module.</p>
   */
  Arn?: string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const EvaluationFormQuestionType = {
  NUMERIC: "NUMERIC",
  SINGLESELECT: "SINGLESELECT",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type EvaluationFormQuestionType = (typeof EvaluationFormQuestionType)[keyof typeof EvaluationFormQuestionType];

/**
 * @public
 * @enum
 */
export const NumericQuestionPropertyAutomationLabel = {
  AGENT_INTERACTION_DURATION: "AGENT_INTERACTION_DURATION",
  CONTACT_DURATION: "CONTACT_DURATION",
  CUSTOMER_HOLD_TIME: "CUSTOMER_HOLD_TIME",
  NON_TALK_TIME: "NON_TALK_TIME",
  NON_TALK_TIME_PERCENTAGE: "NON_TALK_TIME_PERCENTAGE",
  NUMBER_OF_INTERRUPTIONS: "NUMBER_OF_INTERRUPTIONS",
  OVERALL_AGENT_SENTIMENT_SCORE: "OVERALL_AGENT_SENTIMENT_SCORE",
  OVERALL_CUSTOMER_SENTIMENT_SCORE: "OVERALL_CUSTOMER_SENTIMENT_SCORE",
} as const;

/**
 * @public
 */
export type NumericQuestionPropertyAutomationLabel =
  (typeof NumericQuestionPropertyAutomationLabel)[keyof typeof NumericQuestionPropertyAutomationLabel];

/**
 * @public
 * <p>Information about the property value used in automation of a numeric questions. Label values
 *    are associated with minimum and maximum values for the numeric question.</p>
 *          <ul>
 *             <li>
 *                <p>Sentiment scores have a minimum value of -5 and maximum value of 5.</p>
 *             </li>
 *             <li>
 *                <p> Duration labels, such as <code>NON_TALK_TIME</code>, <code>CONTACT_DURATION</code>,
 *       <code>AGENT_INTERACTION_DURATION</code>, <code>CUSTOMER_HOLD_TIME</code> have a minimum value
 *      of 0 and maximum value of 28800.</p>
 *             </li>
 *             <li>
 *                <p>Percentages have a minimum value of 0 and maximum value of 100. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NUMBER_OF_INTERRUPTIONS</code> has a minimum value of 0 and maximum value of
 *      1000.</p>
 *             </li>
 *          </ul>
 */
export interface NumericQuestionPropertyValueAutomation {
  /**
   * @public
   * <p>The property label of the automation.</p>
   */
  Label: NumericQuestionPropertyAutomationLabel | string | undefined;
}

/**
 * @public
 * <p>Information about the automation configuration in numeric questions.</p>
 */
export type EvaluationFormNumericQuestionAutomation =
  | EvaluationFormNumericQuestionAutomation.PropertyValueMember
  | EvaluationFormNumericQuestionAutomation.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormNumericQuestionAutomation {
  /**
   * @public
   * <p>The property value of the automation.</p>
   */
  export interface PropertyValueMember {
    PropertyValue: NumericQuestionPropertyValueAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    PropertyValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    PropertyValue: (value: NumericQuestionPropertyValueAutomation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormNumericQuestionAutomation, visitor: Visitor<T>): T => {
    if (value.PropertyValue !== undefined) return visitor.PropertyValue(value.PropertyValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Information about the option range used for scoring in numeric questions.</p>
 */
export interface EvaluationFormNumericQuestionOption {
  /**
   * @public
   * <p>The minimum answer value of the range option.</p>
   */
  MinValue: number | undefined;

  /**
   * @public
   * <p>The maximum answer value of the range option.</p>
   */
  MaxValue: number | undefined;

  /**
   * @public
   * <p>The score assigned to answer values within the range option.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the
   *    overall evaluation gets a score of 0.</p>
   */
  AutomaticFail?: boolean;
}

/**
 * @public
 * <p>Information about properties for a numeric question in an evaluation form.</p>
 */
export interface EvaluationFormNumericQuestionProperties {
  /**
   * @public
   * <p>The minimum answer value.</p>
   */
  MinValue: number | undefined;

  /**
   * @public
   * <p>The maximum answer value.</p>
   */
  MaxValue: number | undefined;

  /**
   * @public
   * <p>The scoring options of the numeric question.</p>
   */
  Options?: EvaluationFormNumericQuestionOption[];

  /**
   * @public
   * <p>The automation properties of the numeric question.</p>
   */
  Automation?: EvaluationFormNumericQuestionAutomation;
}

/**
 * @public
 * @enum
 */
export const SingleSelectQuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;

/**
 * @public
 */
export type SingleSelectQuestionRuleCategoryAutomationCondition =
  (typeof SingleSelectQuestionRuleCategoryAutomationCondition)[keyof typeof SingleSelectQuestionRuleCategoryAutomationCondition];

/**
 * @public
 * <p>Information about the automation option based on a rule category for a single select
 *    question.</p>
 */
export interface SingleSelectQuestionRuleCategoryAutomation {
  /**
   * @public
   * <p> The category name, as defined in Rules.</p>
   */
  Category: string | undefined;

  /**
   * @public
   * <p>The condition to apply for the automation option. If the condition is <code>PRESENT</code>,
   *    then the option is applied when the contact data includes the category. Similarly, if the
   *    condition is <code>NOT_PRESENT</code>, then the option is applied when the contact data does not
   *    include the category.</p>
   */
  Condition: SingleSelectQuestionRuleCategoryAutomationCondition | string | undefined;

  /**
   * @public
   * <p>The identifier of the answer option.</p>
   */
  OptionRefId: string | undefined;
}

/**
 * @public
 * <p>Information about the automation option of a single select question.</p>
 */
export type EvaluationFormSingleSelectQuestionAutomationOption =
  | EvaluationFormSingleSelectQuestionAutomationOption.RuleCategoryMember
  | EvaluationFormSingleSelectQuestionAutomationOption.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormSingleSelectQuestionAutomationOption {
  /**
   * @public
   * <p>The automation option based on a rule category for the single select question.</p>
   */
  export interface RuleCategoryMember {
    RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    RuleCategory?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    RuleCategory: (value: SingleSelectQuestionRuleCategoryAutomation) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormSingleSelectQuestionAutomationOption, visitor: Visitor<T>): T => {
    if (value.RuleCategory !== undefined) return visitor.RuleCategory(value.RuleCategory);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Information about the automation configuration in single select questions. Automation
 *    options are evaluated in order, and the first matched option is applied. If no automation option
 *    matches, and there is a default option, then the default option is applied.</p>
 */
export interface EvaluationFormSingleSelectQuestionAutomation {
  /**
   * @public
   * <p>The automation options of the single select question.</p>
   */
  Options: EvaluationFormSingleSelectQuestionAutomationOption[] | undefined;

  /**
   * @public
   * <p>The identifier of the default answer option, when none of the automation options match the
   *    criteria.</p>
   */
  DefaultOptionRefId?: string;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormSingleSelectQuestionDisplayMode = {
  DROPDOWN: "DROPDOWN",
  RADIO: "RADIO",
} as const;

/**
 * @public
 */
export type EvaluationFormSingleSelectQuestionDisplayMode =
  (typeof EvaluationFormSingleSelectQuestionDisplayMode)[keyof typeof EvaluationFormSingleSelectQuestionDisplayMode];

/**
 * @public
 * <p>Information about the automation configuration in single select questions.</p>
 */
export interface EvaluationFormSingleSelectQuestionOption {
  /**
   * @public
   * <p>The identifier of the answer option. An identifier must be unique within the
   *    question.</p>
   */
  RefId: string | undefined;

  /**
   * @public
   * <p>The title of the answer option.</p>
   */
  Text: string | undefined;

  /**
   * @public
   * <p>The score assigned to the answer option.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The flag to mark the option as automatic fail. If an automatic fail answer is provided, the
   *    overall evaluation gets a score of 0.</p>
   */
  AutomaticFail?: boolean;
}

/**
 * @public
 * <p>Information about the options in single select questions.</p>
 */
export interface EvaluationFormSingleSelectQuestionProperties {
  /**
   * @public
   * <p>The answer options of the single select question.</p>
   */
  Options: EvaluationFormSingleSelectQuestionOption[] | undefined;

  /**
   * @public
   * <p>The display mode of the single select question.</p>
   */
  DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode | string;

  /**
   * @public
   * <p>The display mode of the single select question.</p>
   */
  Automation?: EvaluationFormSingleSelectQuestionAutomation;
}

/**
 * @public
 * <p>Information about properties for a question in an evaluation form. The question type
 *    properties must be either for a numeric question or a single select question.</p>
 */
export type EvaluationFormQuestionTypeProperties =
  | EvaluationFormQuestionTypeProperties.NumericMember
  | EvaluationFormQuestionTypeProperties.SingleSelectMember
  | EvaluationFormQuestionTypeProperties.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormQuestionTypeProperties {
  /**
   * @public
   * <p>The properties of the numeric question.</p>
   */
  export interface NumericMember {
    Numeric: EvaluationFormNumericQuestionProperties;
    SingleSelect?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The properties of the numeric question.</p>
   */
  export interface SingleSelectMember {
    Numeric?: never;
    SingleSelect: EvaluationFormSingleSelectQuestionProperties;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Numeric?: never;
    SingleSelect?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Numeric: (value: EvaluationFormNumericQuestionProperties) => T;
    SingleSelect: (value: EvaluationFormSingleSelectQuestionProperties) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormQuestionTypeProperties, visitor: Visitor<T>): T => {
    if (value.Numeric !== undefined) return visitor.Numeric(value.Numeric);
    if (value.SingleSelect !== undefined) return visitor.SingleSelect(value.SingleSelect);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Information about a question from an evaluation form.</p>
 */
export interface EvaluationFormQuestion {
  /**
   * @public
   * <p>The title of the question.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The instructions of the section.</p>
   */
  Instructions?: string;

  /**
   * @public
   * <p>The identifier of the question. An identifier must be unique within the evaluation
   *    form.</p>
   */
  RefId: string | undefined;

  /**
   * @public
   * <p>The flag to enable not applicable answers to the question.</p>
   */
  NotApplicableEnabled?: boolean;

  /**
   * @public
   * <p>The type of the question.</p>
   */
  QuestionType: EvaluationFormQuestionType | string | undefined;

  /**
   * @public
   * <p>The properties of the type of question. Text questions do not have to define question type
   *    properties.</p>
   */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;

  /**
   * @public
   * <p>The scoring weight of the section.</p>
   */
  Weight?: number;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringMode = {
  QUESTION_ONLY: "QUESTION_ONLY",
  SECTION_ONLY: "SECTION_ONLY",
} as const;

/**
 * @public
 */
export type EvaluationFormScoringMode = (typeof EvaluationFormScoringMode)[keyof typeof EvaluationFormScoringMode];

/**
 * @public
 * @enum
 */
export const EvaluationFormScoringStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type EvaluationFormScoringStatus =
  (typeof EvaluationFormScoringStatus)[keyof typeof EvaluationFormScoringStatus];

/**
 * @public
 * <p>Information about scoring strategy for an evaluation form.</p>
 */
export interface EvaluationFormScoringStrategy {
  /**
   * @public
   * <p>The scoring mode of the evaluation form.</p>
   */
  Mode: EvaluationFormScoringMode | string | undefined;

  /**
   * @public
   * <p>The scoring status of the evaluation form.</p>
   */
  Status: EvaluationFormScoringStatus | string | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormResponse {
  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HoursOfOperationDays = {
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
export type HoursOfOperationDays = (typeof HoursOfOperationDays)[keyof typeof HoursOfOperationDays];

/**
 * @public
 * <p>The start time or end time for an hours of operation.</p>
 */
export interface HoursOfOperationTimeSlice {
  /**
   * @public
   * <p>The hours.</p>
   */
  Hours: number | undefined;

  /**
   * @public
   * <p>The minutes.</p>
   */
  Minutes: number | undefined;
}

/**
 * @public
 * <p>Contains information about the hours of operation.</p>
 */
export interface HoursOfOperationConfig {
  /**
   * @public
   * <p>The day that the hours of operation applies to.</p>
   */
  Day: HoursOfOperationDays | string | undefined;

  /**
   * @public
   * <p>The start time that your contact center opens.</p>
   */
  StartTime: HoursOfOperationTimeSlice | undefined;

  /**
   * @public
   * <p>The end time that your contact center closes.</p>
   */
  EndTime: HoursOfOperationTimeSlice | undefined;
}

/**
 * @public
 */
export interface CreateHoursOfOperationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the hours of operation.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the hours of operation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time zone of the hours of operation.</p>
   */
  TimeZone: string | undefined;

  /**
   * @public
   * <p>Configuration information for the hours of operation: day, start time, and end time.</p>
   */
  Config: HoursOfOperationConfig[] | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateHoursOfOperationResponse {
  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   */
  HoursOfOperationArn?: string;
}

/**
 * @public
 * @enum
 */
export const DirectoryType = {
  CONNECT_MANAGED: "CONNECT_MANAGED",
  EXISTING_DIRECTORY: "EXISTING_DIRECTORY",
  SAML: "SAML",
} as const;

/**
 * @public
 */
export type DirectoryType = (typeof DirectoryType)[keyof typeof DirectoryType];

/**
 * @public
 */
export interface CreateInstanceRequest {
  /**
   * @public
   * <p>The idempotency token.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The type of identity management for your Amazon Connect users.</p>
   */
  IdentityManagementType: DirectoryType | string | undefined;

  /**
   * @public
   * <p>The name for your instance.</p>
   */
  InstanceAlias?: string;

  /**
   * @public
   * <p>The identifier for the directory.</p>
   */
  DirectoryId?: string;

  /**
   * @public
   * <p>Your contact center handles incoming contacts.</p>
   */
  InboundCallsEnabled: boolean | undefined;

  /**
   * @public
   * <p>Your contact center allows outbound calls.</p>
   */
  OutboundCallsEnabled: boolean | undefined;
}

/**
 * @public
 */
export interface CreateInstanceResponse {
  /**
   * @public
   * <p>The identifier for the instance.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;
}

/**
 * @public
 * @enum
 */
export const IntegrationType = {
  CASES_DOMAIN: "CASES_DOMAIN",
  EVENT: "EVENT",
  PINPOINT_APP: "PINPOINT_APP",
  VOICE_ID: "VOICE_ID",
  WISDOM_ASSISTANT: "WISDOM_ASSISTANT",
  WISDOM_KNOWLEDGE_BASE: "WISDOM_KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type IntegrationType = (typeof IntegrationType)[keyof typeof IntegrationType];

/**
 * @public
 * @enum
 */
export const SourceType = {
  SALESFORCE: "SALESFORCE",
  ZENDESK: "ZENDESK",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 */
export interface CreateIntegrationAssociationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of information to be ingested.</p>
   */
  IntegrationType: IntegrationType | string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the integration.</p>
   *          <note>
   *             <p>When integrating with Amazon Pinpoint, the Amazon Connect and Amazon Pinpoint
   *     instances must be in the same account.</p>
   *          </note>
   */
  IntegrationArn: string | undefined;

  /**
   * @public
   * <p>The URL for the external application. This field is only required for the EVENT integration type.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * @public
   * <p>The name of the external application. This field is only required for the EVENT integration type.</p>
   */
  SourceApplicationName?: string;

  /**
   * @public
   * <p>The type of the data source. This field is only required for the EVENT integration type.</p>
   */
  SourceType?: SourceType | string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateIntegrationAssociationResponse {
  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the association.</p>
   */
  IntegrationAssociationArn?: string;
}

/**
 * @public
 * @enum
 */
export const ParticipantRole = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
  CUSTOM_BOT: "CUSTOM_BOT",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole];

/**
 * @public
 * <p>The details to add for the participant.</p>
 */
export interface ParticipantDetailsToAdd {
  /**
   * @public
   * <p>The role of the participant being added.</p>
   */
  ParticipantRole?: ParticipantRole | string;

  /**
   * @public
   * <p>The display name of the participant.</p>
   */
  DisplayName?: string;
}

/**
 * @public
 */
export interface CreateParticipantRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. </p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect.  Only contacts in the CHAT channel are supported.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>Information identifying the participant.</p>
   *          <important>
   *             <p>The only Valid value for <code>ParticipantRole</code> is <code>CUSTOM_BOT</code>. </p>
   *             <p>
   *                <code>DisplayName</code> is <b>Required</b>.</p>
   *          </important>
   */
  ParticipantDetails: ParticipantDetailsToAdd | undefined;
}

/**
 * @public
 * <p>The credentials used by the participant.</p>
 */
export interface ParticipantTokenCredentials {
  /**
   * @public
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant. </p>
   */
  ParticipantToken?: string;

  /**
   * @public
   * <p>The expiration of the token. It's specified in ISO 8601 format: yyyy-MM-ddThh:mm:ss.SSSZ.
   *    For example, 2019-11-08T02:41:28.172Z.</p>
   */
  Expiry?: string;
}

/**
 * @public
 */
export interface CreateParticipantResponse {
  /**
   * @public
   * <p>The token used by the chat participant to call <code>CreateParticipantConnection</code>. The
   *    participant token is valid for the lifetime of a chat participant.</p>
   */
  ParticipantCredentials?: ParticipantTokenCredentials;

  /**
   * @public
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   */
  ParticipantId?: string;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the prompt.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The URI for the S3 bucket where the prompt is stored.</p>
   */
  S3Uri: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  PromptARN?: string;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId?: string;
}

/**
 * @public
 * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
 */
export interface OutboundCallerConfig {
  /**
   * @public
   * <p>The caller ID name.</p>
   */
  OutboundCallerIdName?: string;

  /**
   * @public
   * <p>The caller ID number.</p>
   */
  OutboundCallerIdNumberId?: string;

  /**
   * @public
   * <p>The outbound whisper flow to be used during an outbound call.</p>
   */
  OutboundFlowId?: string;
}

/**
 * @public
 */
export interface CreateQueueRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the queue.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig?: OutboundCallerConfig;

  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;

  /**
   * @public
   * <p>The quick connects available to agents who are working the queue.</p>
   */
  QuickConnectIds?: string[];

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateQueueResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn?: string;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;
}

/**
 * @public
 * <p>Contains information about a phone number for a quick connect.</p>
 */
export interface PhoneNumberQuickConnectConfig {
  /**
   * @public
   * <p>The phone number in E.164 format.</p>
   */
  PhoneNumber: string | undefined;
}

/**
 * @public
 * <p>Contains information about a queue for a quick connect. The flow must be of type Transfer to
 *    Queue.</p>
 */
export interface QueueQuickConnectConfig {
  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuickConnectType = {
  PHONE_NUMBER: "PHONE_NUMBER",
  QUEUE: "QUEUE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type QuickConnectType = (typeof QuickConnectType)[keyof typeof QuickConnectType];

/**
 * @public
 * <p>Contains information about the quick connect configuration settings for a user. The contact
 *    flow must be of type Transfer to Agent.</p>
 */
export interface UserQuickConnectConfig {
  /**
   * @public
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 * <p>Contains configuration settings for a quick connect.</p>
 */
export interface QuickConnectConfig {
  /**
   * @public
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE). </p>
   */
  QuickConnectType: QuickConnectType | string | undefined;

  /**
   * @public
   * <p>The user configuration. This is required only if QuickConnectType is USER.</p>
   */
  UserConfig?: UserQuickConnectConfig;

  /**
   * @public
   * <p>The queue configuration. This is required only if QuickConnectType is QUEUE.</p>
   */
  QueueConfig?: QueueQuickConnectConfig;

  /**
   * @public
   * <p>The phone configuration. This is required only if QuickConnectType is PHONE_NUMBER.</p>
   */
  PhoneConfig?: PhoneNumberQuickConnectConfig;
}

/**
 * @public
 */
export interface CreateQuickConnectRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the quick connect.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateQuickConnectResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the quick connect. </p>
   */
  QuickConnectARN?: string;

  /**
   * @public
   * <p>The identifier for the quick connect. </p>
   */
  QuickConnectId?: string;
}

/**
 * @public
 * @enum
 */
export const BehaviorType = {
  ROUTE_ANY_CHANNEL: "ROUTE_ANY_CHANNEL",
  ROUTE_CURRENT_CHANNEL_ONLY: "ROUTE_CURRENT_CHANNEL_ONLY",
} as const;

/**
 * @public
 */
export type BehaviorType = (typeof BehaviorType)[keyof typeof BehaviorType];

/**
 * @public
 * <p>Defines the cross-channel routing behavior that allows an agent working on a contact in one
 *    channel to be offered a contact from a different channel.</p>
 */
export interface CrossChannelBehavior {
  /**
   * @public
   * <p>Specifies the other channels that can be routed to an agent handling their current
   *    channel.</p>
   */
  BehaviorType: BehaviorType | string | undefined;
}

/**
 * @public
 * <p>Contains information about which channels are supported, and how many contacts an agent can
 *    have on a channel simultaneously.</p>
 */
export interface MediaConcurrency {
  /**
   * @public
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  Channel: Channel | string | undefined;

  /**
   * @public
   * <p>The number of contacts an agent can have on a channel simultaneously.</p>
   *          <p>Valid Range for <code>VOICE</code>: Minimum value of 1. Maximum value of 1.</p>
   *          <p>Valid Range for <code>CHAT</code>: Minimum value of 1. Maximum value of 10.</p>
   *          <p>Valid Range for <code>TASK</code>: Minimum value of 1. Maximum value of 10.</p>
   */
  Concurrency: number | undefined;

  /**
   * @public
   * <p>Defines the cross-channel routing behavior for each channel that is enabled for this Routing
   *    Profile. For example, this allows you to offer an agent a different contact from another channel
   *    when they are currently working with a contact from a Voice channel.</p>
   */
  CrossChannelBehavior?: CrossChannelBehavior;
}

/**
 * @public
 */
export interface CreateRoutingProfileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>The default outbound queue for the routing profile.</p>
   */
  DefaultOutboundQueueId: string | undefined;

  /**
   * @public
   * <p>The inbound queues associated with the routing profile. If no queue is added, the agent can
   *    make only outbound calls.</p>
   *          <p>The limit of 10 array members applies to the maximum number of
   *     <code>RoutingProfileQueueConfig</code> objects that can be passed during a CreateRoutingProfile
   *    API request. It is different from the quota of 50 queues per routing profile per instance that is
   *    listed in <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect service
   *     quotas</a>. </p>
   */
  QueueConfigs?: RoutingProfileQueueConfig[];

  /**
   * @public
   * <p>The channels that agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>longest idle time</i> or <i>time since their last inbound
   *     contact</i>. </p>
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | string;
}

/**
 * @public
 */
export interface CreateRoutingProfileResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  RoutingProfileArn?: string;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId?: string;
}

/**
 * @public
 * <p>This action must be set if <code>TriggerEventSource</code> is one of the following values:
 *     <code>OnPostCallAnalysisAvailable</code> | <code>OnRealTimeCallAnalysisAvailable</code> |
 *     <code>OnPostChatAnalysisAvailable</code>. Contact is categorized using the rule name.</p>
 *          <p>
 *             <code>RuleName</code> is used as <code>ContactCategory</code>.</p>
 */
export interface AssignContactCategoryActionDefinition {}

/**
 * @public
 * <p>The EventBridge action definition.</p>
 */
export interface EventBridgeActionDefinition {
  /**
   * @public
   * <p>The name.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const NotificationContentType = {
  PLAIN_TEXT: "PLAIN_TEXT",
} as const;

/**
 * @public
 */
export type NotificationContentType = (typeof NotificationContentType)[keyof typeof NotificationContentType];

/**
 * @public
 * @enum
 */
export const NotificationDeliveryType = {
  EMAIL: "EMAIL",
} as const;

/**
 * @public
 */
export type NotificationDeliveryType = (typeof NotificationDeliveryType)[keyof typeof NotificationDeliveryType];

/**
 * @public
 * <p>The type of notification recipient.</p>
 */
export interface NotificationRecipientType {
  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}. Amazon Connect users with the specified tags will be notified.</p>
   */
  UserTags?: Record<string, string>;

  /**
   * @public
   * <p>A list of user IDs.</p>
   */
  UserIds?: string[];
}

/**
 * @public
 * <p>Information about the send notification action.</p>
 */
export interface SendNotificationActionDefinition {
  /**
   * @public
   * <p>Notification delivery method.</p>
   */
  DeliveryMethod: NotificationDeliveryType | string | undefined;

  /**
   * @public
   * <p>The subject of the email if the delivery method is <code>EMAIL</code>.
   *    Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Subject?: string;

  /**
   * @public
   * <p>Notification content. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>Content type format.</p>
   */
  ContentType: NotificationContentType | string | undefined;

  /**
   * @public
   * <p>Notification recipient.</p>
   */
  Recipient: NotificationRecipientType | undefined;
}

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  ATTACHMENT: "ATTACHMENT",
  DATE: "DATE",
  EMAIL: "EMAIL",
  NUMBER: "NUMBER",
  STRING: "STRING",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * @public
 * <p>Well-formed data on a contact, used by agents to complete a contact request. You can have up
 *    to 4,096 UTF-8 bytes across all references for a contact.</p>
 */
export interface Reference {
  /**
   * @public
   * <p>A valid value for the reference. For example, for a URL reference, a formatted URL that is
   *    displayed to an agent in the Contact Control Panel (CCP).</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>The type of the reference. <code>DATE</code> must be of type Epoch timestamp.
   *    </p>
   */
  Type: ReferenceType | string | undefined;
}

/**
 * @public
 * <p>Information about the task action.</p>
 */
export interface TaskActionDefinition {
  /**
   * @public
   * <p>The name. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description. Supports variable injection. For more information, see
   * <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-variable-injection.html">JSONPath reference</a>
   * in the <i>Amazon Connect Administrators Guide</i>.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>Information about the reference when the <code>referenceType</code> is <code>URL</code>.
   *    Otherwise, null. (Supports variable injection in the <code>Value</code> field.)</p>
   */
  References?: Record<string, Reference>;
}

/**
 * @public
 * <p>Information about the action to be performed when a rule is triggered.</p>
 */
export interface RuleAction {
  /**
   * @public
   * <p>The type of action that creates a rule.</p>
   */
  ActionType: ActionType | string | undefined;

  /**
   * @public
   * <p>Information about the task action. This field is required if <code>TriggerEventSource</code>
   *    is one of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   */
  TaskAction?: TaskActionDefinition;

  /**
   * @public
   * <p>Information about the EventBridge action.</p>
   */
  EventBridgeAction?: EventBridgeActionDefinition;

  /**
   * @public
   * <p>Information about the contact category action.</p>
   */
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition;

  /**
   * @public
   * <p>Information about the send notification action.</p>
   */
  SendNotificationAction?: SendNotificationActionDefinition;
}

/**
 * @public
 * @enum
 */
export const RulePublishStatus = {
  DRAFT: "DRAFT",
  PUBLISHED: "PUBLISHED",
} as const;

/**
 * @public
 */
export type RulePublishStatus = (typeof RulePublishStatus)[keyof typeof RulePublishStatus];

/**
 * @public
 * @enum
 */
export const EventSourceName = {
  OnContactEvaluationSubmit: "OnContactEvaluationSubmit",
  OnPostCallAnalysisAvailable: "OnPostCallAnalysisAvailable",
  OnPostChatAnalysisAvailable: "OnPostChatAnalysisAvailable",
  OnRealTimeCallAnalysisAvailable: "OnRealTimeCallAnalysisAvailable",
  OnSalesforceCaseCreate: "OnSalesforceCaseCreate",
  OnZendeskTicketCreate: "OnZendeskTicketCreate",
  OnZendeskTicketStatusUpdate: "OnZendeskTicketStatusUpdate",
} as const;

/**
 * @public
 */
export type EventSourceName = (typeof EventSourceName)[keyof typeof EventSourceName];

/**
 * @public
 * <p>The name of the event source. This field is required if <code>TriggerEventSource</code> is one of the
 *    following values: <code>OnZendeskTicketCreate</code> | <code>OnZendeskTicketStatusUpdate</code> |
 *     <code>OnSalesforceCaseCreate</code>
 *          </p>
 */
export interface RuleTriggerEventSource {
  /**
   * @public
   * <p>The name of the event source.</p>
   */
  EventSourceName: EventSourceName | string | undefined;

  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId?: string;
}

/**
 * @public
 */
export interface CreateRuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique name for the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The event source to trigger the rule.</p>
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * @public
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * @public
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityProfileRequest {
  /**
   * @public
   * <p>The name of the security profile.</p>
   */
  SecurityProfileName: string | undefined;

  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Permissions assigned to the security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>. </p>
   */
  Permissions?: string[];

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * @public
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code> |
   *     <code>SecurityProfile</code> | <code>Queue</code> | <code>RoutingProfile</code>
   *          </p>
   */
  TagRestrictedResources?: string[];
}

/**
 * @public
 */
export interface CreateSecurityProfileResponse {
  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the security profile.</p>
   */
  SecurityProfileArn?: string;
}

/**
 * @public
 * <p>The identifier of the task template field.</p>
 */
export interface TaskTemplateFieldIdentifier {
  /**
   * @public
   * <p>The name of the task template field.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>A field that is invisible to an agent.</p>
 */
export interface InvisibleFieldInfo {
  /**
   * @public
   * <p>Identifier of the invisible field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

/**
 * @public
 * <p>Indicates a field that is read-only to an agent.</p>
 */
export interface ReadOnlyFieldInfo {
  /**
   * @public
   * <p>Identifier of the read-only field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

/**
 * @public
 * <p>Information about a required field.</p>
 */
export interface RequiredFieldInfo {
  /**
   * @public
   * <p>The unique identifier for the field.</p>
   */
  Id?: TaskTemplateFieldIdentifier;
}

/**
 * @public
 * <p>Describes constraints that apply to the template fields.</p>
 */
export interface TaskTemplateConstraints {
  /**
   * @public
   * <p>Lists the fields that are required to be filled by agents.</p>
   */
  RequiredFields?: RequiredFieldInfo[];

  /**
   * @public
   * <p>Lists the fields that are read-only to agents, and cannot be edited.</p>
   */
  ReadOnlyFields?: ReadOnlyFieldInfo[];

  /**
   * @public
   * <p>Lists the fields that are invisible to agents.</p>
   */
  InvisibleFields?: InvisibleFieldInfo[];
}

/**
 * @public
 * <p>Describes a default field and its corresponding value.</p>
 */
export interface TaskTemplateDefaultFieldValue {
  /**
   * @public
   * <p>Identifier of a field. </p>
   */
  Id?: TaskTemplateFieldIdentifier;

  /**
   * @public
   * <p>Default value for the field.</p>
   */
  DefaultValue?: string;
}

/**
 * @public
 * <p>Describes default values for fields on a template.</p>
 */
export interface TaskTemplateDefaults {
  /**
   * @public
   * <p>Default value for the field.</p>
   */
  DefaultFieldValues?: TaskTemplateDefaultFieldValue[];
}

/**
 * @public
 * @enum
 */
export const TaskTemplateFieldType = {
  BOOLEAN: "BOOLEAN",
  DATE_TIME: "DATE_TIME",
  DESCRIPTION: "DESCRIPTION",
  EMAIL: "EMAIL",
  NAME: "NAME",
  NUMBER: "NUMBER",
  QUICK_CONNECT: "QUICK_CONNECT",
  SCHEDULED_TIME: "SCHEDULED_TIME",
  SINGLE_SELECT: "SINGLE_SELECT",
  TEXT: "TEXT",
  TEXT_AREA: "TEXT_AREA",
  URL: "URL",
} as const;

/**
 * @public
 */
export type TaskTemplateFieldType = (typeof TaskTemplateFieldType)[keyof typeof TaskTemplateFieldType];

/**
 * @public
 * <p>Describes a single task template field.</p>
 */
export interface TaskTemplateField {
  /**
   * @public
   * <p>The unique identifier for the field.</p>
   */
  Id: TaskTemplateFieldIdentifier | undefined;

  /**
   * @public
   * <p>The description of the field.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Indicates the type of field.</p>
   */
  Type?: TaskTemplateFieldType | string;

  /**
   * @public
   * <p>A list of options for a single select field.</p>
   */
  SingleSelectOptions?: string[];
}

/**
 * @public
 * @enum
 */
export const TaskTemplateStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type TaskTemplateStatus = (typeof TaskTemplateStatus)[keyof typeof TaskTemplateStatus];

/**
 * @public
 */
export interface CreateTaskTemplateRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the task template.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   */
  ContactFlowId?: string;

  /**
   * @public
   * <p>Constraints that are applicable to the fields listed.</p>
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * @public
   * <p>The default values for fields when a task is created by referencing this template.</p>
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created. </p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * @public
   * <p>Fields that are part of the template.</p>
   */
  Fields: TaskTemplateField[] | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateTaskTemplateResponse {
  /**
   * @public
   * <p>The identifier of the task template resource.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PropertyValidationExceptionReason = {
  INVALID_FORMAT: "INVALID_FORMAT",
  NOT_SUPPORTED: "NOT_SUPPORTED",
  REFERENCED_RESOURCE_NOT_FOUND: "REFERENCED_RESOURCE_NOT_FOUND",
  REQUIRED_PROPERTY_MISSING: "REQUIRED_PROPERTY_MISSING",
  RESOURCE_NAME_ALREADY_EXISTS: "RESOURCE_NAME_ALREADY_EXISTS",
  UNIQUE_CONSTRAINT_VIOLATED: "UNIQUE_CONSTRAINT_VIOLATED",
} as const;

/**
 * @public
 */
export type PropertyValidationExceptionReason =
  (typeof PropertyValidationExceptionReason)[keyof typeof PropertyValidationExceptionReason];

/**
 * @public
 * <p>Contains information about why a property is not valid.</p>
 */
export interface PropertyValidationExceptionProperty {
  /**
   * @public
   * <p>The full property path.</p>
   */
  PropertyPath: string | undefined;

  /**
   * @public
   * <p>Why the property is not valid.</p>
   */
  Reason: PropertyValidationExceptionReason | string | undefined;

  /**
   * @public
   * <p>A message describing why the property is not valid.</p>
   */
  Message: string | undefined;
}

/**
 * @public
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

/**
 * @public
 */
export interface CreateTrafficDistributionGroupRequest {
  /**
   * @public
   * <p>The name for the traffic distribution group. </p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the traffic distribution group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that has been replicated. You can find the
   *     <code>instanceId</code> in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateTrafficDistributionGroupResponse {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const UseCaseType = {
  CONNECT_CAMPAIGNS: "CONNECT_CAMPAIGNS",
  RULES_EVALUATION: "RULES_EVALUATION",
} as const;

/**
 * @public
 */
export type UseCaseType = (typeof UseCaseType)[keyof typeof UseCaseType];

/**
 * @public
 */
export interface CreateUseCaseRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * @public
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType: UseCaseType | string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateUseCaseResponse {
  /**
   * @public
   * <p>The identifier of the use case.</p>
   */
  UseCaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;
}

/**
 * @public
 * <p>Contains information about the identity of a user.</p>
 */
export interface UserIdentityInfo {
  /**
   * @public
   * <p>The first name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The last name. This is required if you are using Amazon Connect or SAML for identity
   *    management.</p>
   */
  LastName?: string;

  /**
   * @public
   * <p>The email address. If you are using SAML for identity management and include this parameter,
   *    an error is returned.</p>
   */
  Email?: string;

  /**
   * @public
   * <p>The user's secondary email address. If you provide a secondary email, the user receives
   *    email notifications - other than password reset notifications - to this email address instead of
   *    to their primary email address.</p>
   *          <p>Pattern: <code>(?=^.\{0,265\}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]\{2,63\}</code>
   *          </p>
   */
  SecondaryEmail?: string;

  /**
   * @public
   * <p>The user's mobile number.</p>
   */
  Mobile?: string;
}

/**
 * @public
 * @enum
 */
export const PhoneType = {
  DESK_PHONE: "DESK_PHONE",
  SOFT_PHONE: "SOFT_PHONE",
} as const;

/**
 * @public
 */
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType];

/**
 * @public
 * <p>Contains information about the phone configuration settings for a user.</p>
 */
export interface UserPhoneConfig {
  /**
   * @public
   * <p>The phone type.</p>
   */
  PhoneType: PhoneType | string | undefined;

  /**
   * @public
   * <p>The Auto accept setting.</p>
   */
  AutoAccept?: boolean;

  /**
   * @public
   * <p>The After Call Work (ACW) timeout setting, in seconds.</p>
   *          <note>
   *             <p>When returned by a <code>SearchUsers</code> call, <code>AfterContactWorkTimeLimit</code> is
   *     returned in milliseconds. </p>
   *          </note>
   */
  AfterContactWorkTimeLimit?: number;

  /**
   * @public
   * <p>The phone number for the user's desk phone.</p>
   */
  DeskPhoneNumber?: string;
}

/**
 * @public
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The user name for the account. For instances not using SAML for identity management, the
   *    user name can include up to 20 characters. If you are using SAML for identity management, the
   *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The information about the identity of the user.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * @public
   * <p>The phone settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * @public
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
   * @public
   * <p>The identifier of the security profile for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateUserResponse {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  UserArn?: string;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupRequest {
  /**
   * @public
   * <p>The name of the user hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier for the parent hierarchy group. The user hierarchy is created at level one if
   *    the parent group ID is null.</p>
   */
  ParentGroupId?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateUserHierarchyGroupResponse {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy group. </p>
   */
  HierarchyGroupArn?: string;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token,
   *    subsequent requests return the previous response without creating a vocabulary again.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * @public
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   */
  Content: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const VocabularyState = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type VocabularyState = (typeof VocabularyState)[keyof typeof VocabularyState];

/**
 * @public
 */
export interface CreateVocabularyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  VocabularyArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>A version of the evaluation form. If the version property is not provided, the latest version of the
   *    evaluation form is deactivated.</p>
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormResponse {
  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>The version of the deactivated evaluation form resource.</p>
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteContactEvaluationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowResponse {}

/**
 * @public
 */
export interface DeleteContactFlowModuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowModuleResponse {}

/**
 * @public
 */
export interface DeleteEvaluationFormRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormVersion?: number;
}

/**
 * @public
 */
export interface DeleteHoursOfOperationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationAssociationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQueueRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  CONTACT: "CONTACT",
  CONTACT_FLOW: "CONTACT_FLOW",
  HIERARCHY_GROUP: "HIERARCHY_GROUP",
  HIERARCHY_LEVEL: "HIERARCHY_LEVEL",
  INSTANCE: "INSTANCE",
  PARTICIPANT: "PARTICIPANT",
  USER: "USER",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>That resource is already in use. Please try another.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @public
   * <p>The type of resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * @public
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

/**
 * @public
 */
export interface DeleteQuickConnectRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoutingProfileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateResponse {}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTrafficDistributionGroupResponse {}

/**
 * @public
 */
export interface DeleteUseCaseRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

  /**
   * @public
   * <p>The identifier for the use case.</p>
   */
  UseCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserHierarchyGroupRequest {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  VocabularyArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the agent status.</p>
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusResponse {
  /**
   * @public
   * <p>The agent status.</p>
   */
  AgentStatus?: AgentStatus;
}

/**
 * @public
 */
export interface DescribeContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;
}

/**
 * @public
 * <p>If this contact was queued, this contains information about the queue. </p>
 */
export interface QueueInfo {
  /**
   * @public
   * <p>The unique identifier for the queue.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The timestamp when the contact was added to the queue.</p>
   */
  EnqueueTimestamp?: Date;
}

/**
 * @public
 * <p>Information about Amazon Connect Wisdom.</p>
 */
export interface WisdomInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom session.</p>
   */
  SessionArn?: string;
}

/**
 * @public
 * <p>Contains information about a contact.</p>
 */
export interface Contact {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the contact.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier for the contact.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   */
  InitialContactId?: string;

  /**
   * @public
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   */
  PreviousContactId?: string;

  /**
   * @public
   * <p>Indicates how the contact was initiated.</p>
   */
  InitiationMethod?: ContactInitiationMethod | string;

  /**
   * @public
   * <p>The name of the contact.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the contact.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>How the contact reached your contact center.</p>
   */
  Channel?: Channel | string;

  /**
   * @public
   * <p>If this contact was queued, this contains information about the queue. </p>
   */
  QueueInfo?: QueueInfo;

  /**
   * @public
   * <p>Information about the agent who accepted the contact.</p>
   */
  AgentInfo?: AgentInfo;

  /**
   * @public
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For <code>API</code>,
   *    this is when the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent
   *    started dialing the external participant. For <code>MONITOR</code>, this is when the supervisor
   *    started listening to a contact.</p>
   */
  InitiationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   */
  DisconnectTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp when contact was last updated.</p>
   */
  LastUpdateTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *   </p>
   */
  ScheduledTimestamp?: Date;

  /**
   * @public
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this
   *    contact.</p>
   */
  RelatedContactId?: string;

  /**
   * @public
   * <p>Information about Amazon Connect Wisdom.</p>
   */
  WisdomInfo?: WisdomInfo;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * @public
   * <p>Information about the contact.</p>
   */
  Contact?: Contact;
}

/**
 * @public
 */
export interface DescribeContactEvaluationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 * <p>Information about answer data for a contact evaluation. Answer data must be either string,
 *    numeric, or not applicable.</p>
 */
export type EvaluationAnswerData =
  | EvaluationAnswerData.NotApplicableMember
  | EvaluationAnswerData.NumericValueMember
  | EvaluationAnswerData.StringValueMember
  | EvaluationAnswerData.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationAnswerData {
  /**
   * @public
   * <p>The string value for an answer in a contact evaluation.</p>
   */
  export interface StringValueMember {
    StringValue: string;
    NumericValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The numeric value for an answer in a contact evaluation.</p>
   */
  export interface NumericValueMember {
    StringValue?: never;
    NumericValue: number;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The flag to mark the question as not applicable.</p>
   */
  export interface NotApplicableMember {
    StringValue?: never;
    NumericValue?: never;
    NotApplicable: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StringValue?: never;
    NumericValue?: never;
    NotApplicable?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    StringValue: (value: string) => T;
    NumericValue: (value: number) => T;
    NotApplicable: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationAnswerData, visitor: Visitor<T>): T => {
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    if (value.NumericValue !== undefined) return visitor.NumericValue(value.NumericValue);
    if (value.NotApplicable !== undefined) return visitor.NotApplicable(value.NotApplicable);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Information about output answers for a contact evaluation.</p>
 */
export interface EvaluationAnswerOutput {
  /**
   * @public
   * <p>The value for an answer in a contact evaluation.</p>
   */
  Value?: EvaluationAnswerData;

  /**
   * @public
   * <p>The system suggested value for an answer in a contact evaluation.</p>
   */
  SystemSuggestedValue?: EvaluationAnswerData;
}

/**
 * @public
 * <p>Information about scores of a contact evaluation item (section or question).</p>
 */
export interface EvaluationScore {
  /**
   * @public
   * <p>The score percentage for an item in a contact evaluation.</p>
   */
  Percentage?: number;

  /**
   * @public
   * <p>The flag to mark the item as not applicable for scoring.</p>
   */
  NotApplicable?: boolean;

  /**
   * @public
   * <p>The flag that marks the item as automatic fail. If the item or a child item gets an
   *    automatic fail answer, this flag will be true.</p>
   */
  AutomaticFail?: boolean;
}

/**
 * @public
 * <p>Metadata information about a contact evaluation.</p>
 */
export interface EvaluationMetadata {
  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   */
  EvaluatorArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the agent who performed the contact.</p>
   */
  ContactAgentId?: string;

  /**
   * @public
   * <p>The overall score of the contact evaluation.</p>
   */
  Score?: EvaluationScore;
}

/**
 * @public
 * <p>Information about notes for a contact evaluation.</p>
 */
export interface EvaluationNote {
  /**
   * @public
   * <p>The note for an item (section or question) in a contact evaluation.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const EvaluationStatus = {
  DRAFT: "DRAFT",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type EvaluationStatus = (typeof EvaluationStatus)[keyof typeof EvaluationStatus];

/**
 * @public
 * <p>Information about a contact evaluation.</p>
 */
export interface Evaluation {
  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   */
  EvaluationArn: string | undefined;

  /**
   * @public
   * <p>Metadata about the contact evaluation.</p>
   */
  Metadata: EvaluationMetadata | undefined;

  /**
   * @public
   * <p>A map of question identifiers to answer value.</p>
   */
  Answers: Record<string, EvaluationAnswerOutput> | undefined;

  /**
   * @public
   * <p>A map of question identifiers to note value.</p>
   */
  Notes: Record<string, EvaluationNote> | undefined;

  /**
   * @public
   * <p>The status of the contact evaluation.</p>
   */
  Status: EvaluationStatus | string | undefined;

  /**
   * @public
   * <p>A map of item (section or question) identifiers to score value.</p>
   */
  Scores?: Record<string, EvaluationScore>;

  /**
   * @public
   * <p>The timestamp for when the evaluation was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
 */
export interface DescribeContactFlowRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactFlowState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type ContactFlowState = (typeof ContactFlowState)[keyof typeof ContactFlowState];

/**
 * @public
 * <p>Contains information about a flow.</p>
 */
export interface ContactFlow {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type?: ContactFlowType | string;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  State?: ContactFlowState | string;

  /**
   * @public
   * <p>The description of the flow.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The content of the flow.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeContactFlowResponse {
  /**
   * @public
   * <p>Information about the flow.</p>
   */
  ContactFlow?: ContactFlow;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactFlowModuleState = {
  ACTIVE: "ACTIVE",
  ARCHIVED: "ARCHIVED",
} as const;

/**
 * @public
 */
export type ContactFlowModuleState = (typeof ContactFlowModuleState)[keyof typeof ContactFlowModuleState];

/**
 * @public
 * @enum
 */
export const ContactFlowModuleStatus = {
  PUBLISHED: "PUBLISHED",
  SAVED: "SAVED",
} as const;

/**
 * @public
 */
export type ContactFlowModuleStatus = (typeof ContactFlowModuleStatus)[keyof typeof ContactFlowModuleStatus];

/**
 * @public
 * <p>Contains information about a flow module.</p>
 */
export interface ContactFlowModule {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The content of the flow module.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The description of the flow module.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState | string;

  /**
   * @public
   * <p>The status of the flow module.</p>
   */
  Status?: ContactFlowModuleStatus | string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleResponse {
  /**
   * @public
   * <p>Information about the flow module.</p>
   */
  ContactFlowModule?: ContactFlowModule;
}

/**
 * @public
 */
export interface DescribeEvaluationFormRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>A version of the evaluation form.</p>
   */
  EvaluationFormVersion?: number;
}

/**
 * @public
 * @enum
 */
export const EvaluationFormVersionStatus = {
  ACTIVE: "ACTIVE",
  DRAFT: "DRAFT",
} as const;

/**
 * @public
 */
export type EvaluationFormVersionStatus =
  (typeof EvaluationFormVersionStatus)[keyof typeof EvaluationFormVersionStatus];

/**
 * @public
 */
export interface DescribeHoursOfOperationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 * <p>Information about of the hours of operation.</p>
 */
export interface HoursOfOperation {
  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   */
  HoursOfOperationArn?: string;

  /**
   * @public
   * <p>The name for the hours of operation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description for the hours of operation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time zone for the hours of operation.</p>
   */
  TimeZone?: string;

  /**
   * @public
   * <p>Configuration information for the hours of operation.</p>
   */
  Config?: HoursOfOperationConfig[];

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationResponse {
  /**
   * @public
   * <p>The hours of operation.</p>
   */
  HoursOfOperation?: HoursOfOperation;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type InstanceStatus = (typeof InstanceStatus)[keyof typeof InstanceStatus];

/**
 * @public
 * <p>Relevant
 *    details why the instance was not successfully created.</p>
 */
export interface InstanceStatusReason {
  /**
   * @public
   * <p>The message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The Amazon Connect instance.</p>
 */
export interface Instance {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identity management type.</p>
   */
  IdentityManagementType?: DirectoryType | string;

  /**
   * @public
   * <p>The alias of instance.</p>
   */
  InstanceAlias?: string;

  /**
   * @public
   * <p>When the instance was created.</p>
   */
  CreatedTime?: Date;

  /**
   * @public
   * <p>The service role of the instance.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>The state of the instance.</p>
   */
  InstanceStatus?: InstanceStatus | string;

  /**
   * @public
   * <p>Relevant
   *    details why the instance was not successfully created. </p>
   */
  StatusReason?: InstanceStatusReason;

  /**
   * @public
   * <p>Whether inbound calls are enabled.</p>
   */
  InboundCallsEnabled?: boolean;

  /**
   * @public
   * <p>Whether outbound calls are enabled.</p>
   */
  OutboundCallsEnabled?: boolean;

  /**
   * @public
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   */
  InstanceAccessUrl?: string;
}

/**
 * @public
 */
export interface DescribeInstanceResponse {
  /**
   * @public
   * <p>The name of the instance.</p>
   */
  Instance?: Instance;
}

/**
 * @public
 * @enum
 */
export const InstanceAttributeType = {
  AUTO_RESOLVE_BEST_VOICES: "AUTO_RESOLVE_BEST_VOICES",
  CONTACTFLOW_LOGS: "CONTACTFLOW_LOGS",
  CONTACT_LENS: "CONTACT_LENS",
  EARLY_MEDIA: "EARLY_MEDIA",
  ENHANCED_CONTACT_MONITORING: "ENHANCED_CONTACT_MONITORING",
  HIGH_VOLUME_OUTBOUND: "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS: "INBOUND_CALLS",
  MULTI_PARTY_CONFERENCE: "MULTI_PARTY_CONFERENCE",
  OUTBOUND_CALLS: "OUTBOUND_CALLS",
  USE_CUSTOM_TTS_VOICES: "USE_CUSTOM_TTS_VOICES",
} as const;

/**
 * @public
 */
export type InstanceAttributeType = (typeof InstanceAttributeType)[keyof typeof InstanceAttributeType];

/**
 * @public
 */
export interface DescribeInstanceAttributeRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of attribute.</p>
   */
  AttributeType: InstanceAttributeType | string | undefined;
}

/**
 * @public
 * <p>A toggle for an individual feature at the instance level.</p>
 */
export interface Attribute {
  /**
   * @public
   * <p>The type of attribute.</p>
   */
  AttributeType?: InstanceAttributeType | string;

  /**
   * @public
   * <p>The value of the attribute.</p>
   */
  Value?: string;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeResponse {
  /**
   * @public
   * <p>The
   *    type
   *    of attribute.</p>
   */
  Attribute?: Attribute;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigResponse {
  /**
   * @public
   * <p>A valid storage type.</p>
   */
  StorageConfig?: InstanceStorageConfig;
}

/**
 * @public
 */
export interface DescribePhoneNumberRequest {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberCountryCode = {
  AD: "AD",
  AE: "AE",
  AF: "AF",
  AG: "AG",
  AI: "AI",
  AL: "AL",
  AM: "AM",
  AN: "AN",
  AO: "AO",
  AQ: "AQ",
  AR: "AR",
  AS: "AS",
  AT: "AT",
  AU: "AU",
  AW: "AW",
  AZ: "AZ",
  BA: "BA",
  BB: "BB",
  BD: "BD",
  BE: "BE",
  BF: "BF",
  BG: "BG",
  BH: "BH",
  BI: "BI",
  BJ: "BJ",
  BL: "BL",
  BM: "BM",
  BN: "BN",
  BO: "BO",
  BR: "BR",
  BS: "BS",
  BT: "BT",
  BW: "BW",
  BY: "BY",
  BZ: "BZ",
  CA: "CA",
  CC: "CC",
  CD: "CD",
  CF: "CF",
  CG: "CG",
  CH: "CH",
  CI: "CI",
  CK: "CK",
  CL: "CL",
  CM: "CM",
  CN: "CN",
  CO: "CO",
  CR: "CR",
  CU: "CU",
  CV: "CV",
  CW: "CW",
  CX: "CX",
  CY: "CY",
  CZ: "CZ",
  DE: "DE",
  DJ: "DJ",
  DK: "DK",
  DM: "DM",
  DO: "DO",
  DZ: "DZ",
  EC: "EC",
  EE: "EE",
  EG: "EG",
  EH: "EH",
  ER: "ER",
  ES: "ES",
  ET: "ET",
  FI: "FI",
  FJ: "FJ",
  FK: "FK",
  FM: "FM",
  FO: "FO",
  FR: "FR",
  GA: "GA",
  GB: "GB",
  GD: "GD",
  GE: "GE",
  GG: "GG",
  GH: "GH",
  GI: "GI",
  GL: "GL",
  GM: "GM",
  GN: "GN",
  GQ: "GQ",
  GR: "GR",
  GT: "GT",
  GU: "GU",
  GW: "GW",
  GY: "GY",
  HK: "HK",
  HN: "HN",
  HR: "HR",
  HT: "HT",
  HU: "HU",
  ID: "ID",
  IE: "IE",
  IL: "IL",
  IM: "IM",
  IN: "IN",
  IO: "IO",
  IQ: "IQ",
  IR: "IR",
  IS: "IS",
  IT: "IT",
  JE: "JE",
  JM: "JM",
  JO: "JO",
  JP: "JP",
  KE: "KE",
  KG: "KG",
  KH: "KH",
  KI: "KI",
  KM: "KM",
  KN: "KN",
  KP: "KP",
  KR: "KR",
  KW: "KW",
  KY: "KY",
  KZ: "KZ",
  LA: "LA",
  LB: "LB",
  LC: "LC",
  LI: "LI",
  LK: "LK",
  LR: "LR",
  LS: "LS",
  LT: "LT",
  LU: "LU",
  LV: "LV",
  LY: "LY",
  MA: "MA",
  MC: "MC",
  MD: "MD",
  ME: "ME",
  MF: "MF",
  MG: "MG",
  MH: "MH",
  MK: "MK",
  ML: "ML",
  MM: "MM",
  MN: "MN",
  MO: "MO",
  MP: "MP",
  MR: "MR",
  MS: "MS",
  MT: "MT",
  MU: "MU",
  MV: "MV",
  MW: "MW",
  MX: "MX",
  MY: "MY",
  MZ: "MZ",
  NA: "NA",
  NC: "NC",
  NE: "NE",
  NG: "NG",
  NI: "NI",
  NL: "NL",
  NO: "NO",
  NP: "NP",
  NR: "NR",
  NU: "NU",
  NZ: "NZ",
  OM: "OM",
  PA: "PA",
  PE: "PE",
  PF: "PF",
  PG: "PG",
  PH: "PH",
  PK: "PK",
  PL: "PL",
  PM: "PM",
  PN: "PN",
  PR: "PR",
  PT: "PT",
  PW: "PW",
  PY: "PY",
  QA: "QA",
  RE: "RE",
  RO: "RO",
  RS: "RS",
  RU: "RU",
  RW: "RW",
  SA: "SA",
  SB: "SB",
  SC: "SC",
  SD: "SD",
  SE: "SE",
  SG: "SG",
  SH: "SH",
  SI: "SI",
  SJ: "SJ",
  SK: "SK",
  SL: "SL",
  SM: "SM",
  SN: "SN",
  SO: "SO",
  SR: "SR",
  ST: "ST",
  SV: "SV",
  SX: "SX",
  SY: "SY",
  SZ: "SZ",
  TC: "TC",
  TD: "TD",
  TG: "TG",
  TH: "TH",
  TJ: "TJ",
  TK: "TK",
  TL: "TL",
  TM: "TM",
  TN: "TN",
  TO: "TO",
  TR: "TR",
  TT: "TT",
  TV: "TV",
  TW: "TW",
  TZ: "TZ",
  UA: "UA",
  UG: "UG",
  US: "US",
  UY: "UY",
  UZ: "UZ",
  VA: "VA",
  VC: "VC",
  VE: "VE",
  VG: "VG",
  VI: "VI",
  VN: "VN",
  VU: "VU",
  WF: "WF",
  WS: "WS",
  YE: "YE",
  YT: "YT",
  ZA: "ZA",
  ZM: "ZM",
  ZW: "ZW",
} as const;

/**
 * @public
 */
export type PhoneNumberCountryCode = (typeof PhoneNumberCountryCode)[keyof typeof PhoneNumberCountryCode];

/**
 * @public
 * @enum
 */
export const PhoneNumberWorkflowStatus = {
  Claimed: "CLAIMED",
  Failed: "FAILED",
  InProgress: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type PhoneNumberWorkflowStatus = (typeof PhoneNumberWorkflowStatus)[keyof typeof PhoneNumberWorkflowStatus];

/**
 * @public
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
   * @public
   * <p>The status.</p>
   */
  Status?: PhoneNumberWorkflowStatus | string;

  /**
   * @public
   * <p>The status message.</p>
   */
  Message?: string;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  DID: "DID",
  SHARED: "SHARED",
  THIRD_PARTY_DID: "THIRD_PARTY_DID",
  THIRD_PARTY_TF: "THIRD_PARTY_TF",
  TOLL_FREE: "TOLL_FREE",
  UIFN: "UIFN",
} as const;

/**
 * @public
 */
export type PhoneNumberType = (typeof PhoneNumberType)[keyof typeof PhoneNumberType];

/**
 * @public
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 */
export interface ClaimedPhoneNumberSummary {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;

  /**
   * @public
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
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

/**
 * @public
 */
export interface DescribePhoneNumberResponse {
  /**
   * @public
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance or
   *    traffic distribution group.</p>
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}

/**
 * @public
 */
export interface DescribePromptRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId: string | undefined;
}

/**
 * @public
 * <p>Information about a prompt.</p>
 */
export interface Prompt {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  PromptARN?: string;

  /**
   * @public
   * <p>A unique identifier for the prompt.</p>
   */
  PromptId?: string;

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the prompt.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribePromptResponse {
  /**
   * @public
   * <p>Information about the prompt.</p>
   */
  Prompt?: Prompt;
}

/**
 * @public
 */
export interface DescribeQueueRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueueStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type QueueStatus = (typeof QueueStatus)[keyof typeof QueueStatus];

/**
 * @public
 * <p>Contains information about a queue.</p>
 */
export interface Queue {
  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the queue.</p>
   */
  QueueArn?: string;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * @public
   * <p>The description of the queue.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig?: OutboundCallerConfig;

  /**
   * @public
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId?: string;

  /**
   * @public
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;

  /**
   * @public
   * <p>The status of the queue.</p>
   */
  Status?: QueueStatus | string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeQueueResponse {
  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Queue?: Queue;
}

/**
 * @public
 */
export interface DescribeQuickConnectRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a quick connect.</p>
 */
export interface QuickConnect {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  QuickConnectARN?: string;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Contains information about the quick connect.</p>
   */
  QuickConnectConfig?: QuickConnectConfig;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeQuickConnectResponse {
  /**
   * @public
   * <p>Information about the quick connect.</p>
   */
  QuickConnect?: QuickConnect;
}

/**
 * @public
 */
export interface DescribeRoutingProfileRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a routing profile.</p>
 */
export interface RoutingProfile {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The name of the routing profile.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  RoutingProfileArn?: string;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * @public
   * <p>The description of the routing profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   */
  MediaConcurrencies?: MediaConcurrency[];

  /**
   * @public
   * <p>The identifier of the default outbound queue for this routing profile.</p>
   */
  DefaultOutboundQueueId?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The number of associated queues in routing profile.</p>
   */
  NumberOfAssociatedQueues?: number;

  /**
   * @public
   * <p>The number of associated users in routing profile.</p>
   */
  NumberOfAssociatedUsers?: number;

  /**
   * @public
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | string;
}

/**
 * @public
 */
export interface DescribeRoutingProfileResponse {
  /**
   * @public
   * <p>The routing profile.</p>
   */
  RoutingProfile?: RoutingProfile;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;
}

/**
 * @public
 * <p>Information about a rule.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn: string | undefined;

  /**
   * @public
   * <p>The event source to trigger the rule.</p>
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

  /**
   * @public
   * <p>The conditions of the rule.</p>
   */
  Function: string | undefined;

  /**
   * @public
   * <p>A list of actions to be run when the rule is triggered.</p>
   */
  Actions: RuleAction[] | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for the when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the rule.</p>
   */
  LastUpdatedBy: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * @public
   * <p>Information about the rule.</p>
   */
  Rule: Rule | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
  /**
   * @public
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfile {
  /**
   * @public
   * <p>The identifier for the security profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The organization resource identifier for the security profile.</p>
   */
  OrganizationResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the secruity profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name for the security profile.</p>
   */
  SecurityProfileName?: string;

  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   */
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * @public
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   */
  TagRestrictedResources?: string[];
}

/**
 * @public
 */
export interface DescribeSecurityProfileResponse {
  /**
   * @public
   * <p>The security profile.</p>
   */
  SecurityProfile?: SecurityProfile;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const TrafficDistributionGroupStatus = {
  ACTIVE: "ACTIVE",
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  DELETION_FAILED: "DELETION_FAILED",
  PENDING_DELETION: "PENDING_DELETION",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type TrafficDistributionGroupStatus =
  (typeof TrafficDistributionGroupStatus)[keyof typeof TrafficDistributionGroupStatus];

/**
 * @public
 * <p>Information about a traffic distribution group.</p>
 */
export interface TrafficDistributionGroup {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the traffic distribution group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the traffic distribution group.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  InstanceArn?: string;

  /**
   * @public
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
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   *          <note>
   *             <p>You can change the <code>SignInConfig</code> only for a default <code>TrafficDistributionGroup</code>. If you call
   *     <code>UpdateTrafficDistribution</code>  with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
   *     an <code>InvalidRequestException</code> is returned.</p>
   *          </note>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupResponse {
  /**
   * @public
   * <p>Information about the traffic distribution group.</p>
   */
  TrafficDistributionGroup?: TrafficDistributionGroup;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a user account for an Amazon Connect instance.</p>
 */
export interface User {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The user name assigned to the user account.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Information about the user identity.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * @public
   * <p>Information about the phone configuration for the user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * @public
   * <p>The identifier of the user account in the directory used for identity management.</p>
   */
  DirectoryUserId?: string;

  /**
   * @public
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * @public
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId?: string;

  /**
   * @public
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * @public
   * <p>The
   *    tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * @public
   * <p>Information about the user account and configuration settings.</p>
   */
  User?: User;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupRequest {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains summary information about a hierarchy group.</p>
 */
export interface HierarchyGroupSummary {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains information about the levels of a hierarchy group.</p>
 */
export interface HierarchyPath {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummary;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummary;
}

/**
 * @public
 * <p>Contains information about a hierarchy group.</p>
 */
export interface HierarchyGroup {
  /**
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the level in the hierarchy group.</p>
   */
  LevelId?: string;

  /**
   * @public
   * <p>Information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: HierarchyPath;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * @public
   * <p>Information about the hierarchy group.</p>
   */
  HierarchyGroup?: HierarchyGroup;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a hierarchy level.</p>
 */
export interface HierarchyLevel {
  /**
   * @public
   * <p>The identifier of the hierarchy level.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hierarchy level.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains information about a hierarchy structure.</p>
 */
export interface HierarchyStructure {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyLevel;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyLevel;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * @public
   * <p>Information about the hierarchy structure.</p>
   */
  HierarchyStructure?: HierarchyStructure;
}

/**
 * @public
 */
export interface DescribeVocabularyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 * <p>Contains information about a custom vocabulary.</p>
 */
export interface Vocabulary {
  /**
   * @public
   * <p>A unique name of the custom vocabulary.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier of the custom vocabulary.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode: VocabularyLanguageCode | string | undefined;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | string | undefined;

  /**
   * @public
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The reason why the custom vocabulary was not created.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeVocabularyResponse {
  /**
   * @public
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   */
  Vocabulary: Vocabulary | undefined;
}

/**
 * @public
 */
export interface DisassociateApprovedOriginRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The domain URL of the integrated application.</p>
   */
  Origin: string | undefined;
}

/**
 * @public
 */
export interface DisassociateBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * @public
   * <p>The Amazon Lex V2 bot to disassociate from the instance.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface DisassociateInstanceStorageConfigRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;

  /**
   * @public
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;
}

/**
 * @public
 */
export interface DisassociateLambdaFunctionRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
   */
  FunctionArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateLexBotRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
   */
  BotName: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region in which the Amazon Lex bot has been created.</p>
   */
  LexRegion: string | undefined;
}

/**
 * @public
 */
export interface DisassociatePhoneNumberContactFlowRequest {
  /**
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQueueQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The quick connects to disassociate from the queue.</p>
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRoutingProfileQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * @public
   * <p>The queues to disassociate from this routing profile.</p>
   */
  QueueReferences: RoutingProfileQueueReference[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityKeyRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateTrafficDistributionGroupUserResponse {}

/**
 * @public
 */
export interface DismissUserContactRequest {
  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DismissUserContactResponse {}

/**
 * @public
 */
export interface GetContactAttributesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the initial contact.</p>
   */
  InitialContactId: string | undefined;
}

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
