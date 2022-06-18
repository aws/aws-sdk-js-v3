// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import {
  AgentInfo,
  AgentStatusState,
  AgentStatusSummary,
  AgentStatusType,
  Attribute,
  AvailableNumberSummary,
  Channel,
  ClaimedPhoneNumberSummary,
  ContactFilter,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowModuleSummary,
  ContactFlowState,
  ContactFlowSummary,
  ContactFlowType,
  ContactInitiationMethod,
  ControlPlaneTagFilter,
  Credentials,
  CurrentMetricName,
  CurrentMetricResult,
  DefaultVocabulary,
  DirectoryType,
  HierarchyGroup,
  HierarchyGroupCondition,
  HierarchyGroupSummary,
  HierarchyLevelUpdate,
  HierarchyStructure,
  HistoricalMetricName,
  HistoricalMetricResult,
  HoursOfOperationDays,
  HoursOfOperationSummary,
  HoursOfOperationTimeSlice,
  InstanceAttributeType,
  InstanceStatus,
  InstanceStatusReason,
  InstanceStorageResourceType,
  InstanceSummary,
  IntegrationAssociationSummary,
  IntegrationType,
  InvisibleFieldInfo,
  KinesisFirehoseConfig,
  KinesisStreamConfig,
  KinesisVideoStreamConfig,
  LexBotConfig,
  LexVersion,
  ListPhoneNumbersSummary,
  PhoneNumberQuickConnectConfig,
  PhoneNumberSummary,
  PhoneType,
  ProblemDetail,
  PromptSummary,
  PropertyValidationExceptionProperty,
  Queue,
  QueueInfo,
  QueueQuickConnectConfig,
  QueueStatus,
  QueueSummary,
  QueueType,
  QuickConnect,
  QuickConnectSummary,
  QuickConnectType,
  ReadOnlyFieldInfo,
  ReferenceSummary,
  ReferenceType,
  RequiredFieldInfo,
  ResourceType,
  RoutingProfile,
  RoutingProfileQueueConfigSummary,
  RoutingProfileSummary,
  S3Config,
  SecurityKey,
  SecurityProfile,
  SecurityProfileSummary,
  SourceType,
  Statistic,
  StorageType,
  StringCondition,
  TaskTemplateDefaultFieldValue,
  TaskTemplateFieldIdentifier,
  TaskTemplateFieldType,
  TaskTemplateMetadata,
  TaskTemplateStatus,
  Threshold,
  TrafficType,
  Unit,
  UseCase,
  UseCaseType,
  User,
  UserData,
  UserQuickConnectConfig,
  UserSearchSummary,
  UserSummary,
  Vocabulary,
  VocabularyLanguageCode,
  VocabularyState,
  VocabularySummary,
  VoiceRecordingTrack,
} from "./models_1";

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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace AgentStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AgentStatus): any => ({
    ...obj,
  });
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

export namespace AssociateApprovedOriginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateApprovedOriginRequest): any => ({
    ...obj,
  });
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
   * <p>The Region that the Amazon Lex bot was created in.</p>
   */
  LexRegion?: string;
}

export namespace LexBot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LexBot): any => ({
    ...obj,
  });
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

export namespace LexV2Bot {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LexV2Bot): any => ({
    ...obj,
  });
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

export namespace AssociateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateBotRequest): any => ({
    ...obj,
  });
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

export namespace AssociateDefaultVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDefaultVocabularyRequest): any => ({
    ...obj,
  });
}

export interface AssociateDefaultVocabularyResponse {}

export namespace AssociateDefaultVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateDefaultVocabularyResponse): any => ({
    ...obj,
  });
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

export namespace InstanceStorageConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceStorageConfig): any => ({
    ...obj,
  });
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

export namespace AssociateInstanceStorageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateInstanceStorageConfigRequest): any => ({
    ...obj,
  });
}

export interface AssociateInstanceStorageConfigResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

export namespace AssociateInstanceStorageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateInstanceStorageConfigResponse): any => ({
    ...obj,
  });
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

export namespace AssociateLambdaFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLambdaFunctionRequest): any => ({
    ...obj,
  });
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

export namespace AssociateLexBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateLexBotRequest): any => ({
    ...obj,
  });
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
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;
}

export namespace AssociatePhoneNumberContactFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatePhoneNumberContactFlowRequest): any => ({
    ...obj,
  });
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

export namespace AssociateQueueQuickConnectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateQueueQuickConnectsRequest): any => ({
    ...obj,
  });
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

export namespace RoutingProfileQueueReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfileQueueReference): any => ({
    ...obj,
  });
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

export namespace RoutingProfileQueueConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RoutingProfileQueueConfig): any => ({
    ...obj,
  });
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

export namespace AssociateRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
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

export namespace AssociateSecurityKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSecurityKeyRequest): any => ({
    ...obj,
  });
}

export interface AssociateSecurityKeyResponse {
  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;
}

export namespace AssociateSecurityKeyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateSecurityKeyResponse): any => ({
    ...obj,
  });
}

export interface ClaimPhoneNumberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.</p>
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace ClaimPhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimPhoneNumberRequest): any => ({
    ...obj,
  });
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

export namespace ClaimPhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ClaimPhoneNumberResponse): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateAgentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAgentStatusRequest): any => ({
    ...obj,
  });
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

export namespace CreateAgentStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAgentStatusResponse): any => ({
    ...obj,
  });
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

export interface CreateContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the contact flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a Contact Flow Type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type: ContactFlowType | string | undefined;

  /**
   * <p>The description of the contact flow. </p>
   */
  Description?: string;

  /**
   * <p>The content of the contact flow. </p>
   */
  Content: string | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateContactFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactFlowRequest): any => ({
    ...obj,
  });
}

export interface CreateContactFlowResponse {
  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
   */
  ContactFlowArn?: string;
}

export namespace CreateContactFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactFlowResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The contact flow is not valid.</p>
 */
export class InvalidContactFlowException extends __BaseException {
  readonly name: "InvalidContactFlowException" = "InvalidContactFlowException";
  readonly $fault: "client" = "client";
  /**
   * <p>The problems with the contact flow. Please fix before trying again.</p>
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
   * <p>The name of the contact flow module.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the contact flow module. </p>
   */
  Description?: string;

  /**
   * <p>The content of the contact flow module.</p>
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateContactFlowModuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactFlowModuleRequest): any => ({
    ...obj,
  });
}

export interface CreateContactFlowModuleResponse {
  /**
   * <p>The identifier of the contact flow module.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow module.</p>
   */
  Arn?: string;
}

export namespace CreateContactFlowModuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContactFlowModuleResponse): any => ({
    ...obj,
  });
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

export namespace HoursOfOperationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoursOfOperationConfig): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHoursOfOperationRequest): any => ({
    ...obj,
  });
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

export namespace CreateHoursOfOperationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateHoursOfOperationResponse): any => ({
    ...obj,
  });
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

export namespace CreateInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceRequest): any => ({
    ...obj,
    ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
  });
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

export namespace CreateInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateInstanceResponse): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateIntegrationAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationAssociationRequest): any => ({
    ...obj,
  });
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

export namespace CreateIntegrationAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntegrationAssociationResponse): any => ({
    ...obj,
  });
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

export namespace OutboundCallerConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutboundCallerConfig): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueueRequest): any => ({
    ...obj,
  });
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

export namespace CreateQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQueueResponse): any => ({
    ...obj,
  });
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

export namespace QuickConnectConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuickConnectConfig): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateQuickConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQuickConnectRequest): any => ({
    ...obj,
  });
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

export namespace CreateQuickConnectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateQuickConnectResponse): any => ({
    ...obj,
  });
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

export namespace MediaConcurrency {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MediaConcurrency): any => ({
    ...obj,
  });
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
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateRoutingProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoutingProfileRequest): any => ({
    ...obj,
  });
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

export namespace CreateRoutingProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRoutingProfileResponse): any => ({
    ...obj,
  });
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
   * <p>Permissions assigned to the security profile.</p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileRequest): any => ({
    ...obj,
  });
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

export namespace CreateSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSecurityProfileResponse): any => ({
    ...obj,
  });
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

export namespace TaskTemplateConstraints {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateConstraints): any => ({
    ...obj,
  });
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

export namespace TaskTemplateDefaults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateDefaults): any => ({
    ...obj,
  });
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

export namespace TaskTemplateField {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskTemplateField): any => ({
    ...obj,
  });
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
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace CreateTaskTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskTemplateRequest): any => ({
    ...obj,
  });
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

export namespace CreateTaskTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTaskTemplateResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateUseCaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUseCaseRequest): any => ({
    ...obj,
  });
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

export namespace CreateUseCaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUseCaseResponse): any => ({
    ...obj,
  });
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
}

export namespace UserIdentityInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserIdentityInfo): any => ({
    ...obj,
  });
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
   */
  AfterContactWorkTimeLimit?: number;

  /**
   * <p>The phone number for the user's desk phone.</p>
   */
  DeskPhoneNumber?: string;
}

export namespace UserPhoneConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPhoneConfig): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p>The user name for the account. For instances not using SAML for identity management, the
   *    user name can include up to 20 characters. If you are using SAML for identity management, the
   *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password for the user account. A password is required if you are using Amazon Connect for
   *    identity management. Otherwise, it is an error to include a password.</p>
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
   * <p>The identifier of the user account in the directory used for identity management. If Amazon Connect
   *    cannot access the directory, you can specify this identifier to authenticate users. If you
   *    include the identifier, we assume that Amazon Connect cannot access the directory. Otherwise, the identity
   *    information is used to authenticate users from your directory.</p>
   *          <p>This parameter is required if you are using an existing directory for identity management in
   *    Amazon Connect when Amazon Connect cannot access your directory to authenticate users. If you are using SAML for
   *    identity management and include this parameter, an error is returned.</p>
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
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
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

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateUserHierarchyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserHierarchyGroupRequest): any => ({
    ...obj,
  });
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

export namespace CreateUserHierarchyGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserHierarchyGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateVocabularyRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If a create request is received more than once with same client token,
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace CreateVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyRequest): any => ({
    ...obj,
  });
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

export namespace CreateVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateVocabularyResponse): any => ({
    ...obj,
  });
}

export interface DeleteContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;
}

export namespace DeleteContactFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactFlowRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

export namespace DeleteContactFlowModuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactFlowModuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteContactFlowModuleResponse {}

export namespace DeleteContactFlowModuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContactFlowModuleResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteHoursOfOperationRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace DeleteInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteInstanceRequest): any => ({
    ...obj,
  });
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

export namespace DeleteIntegrationAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntegrationAssociationRequest): any => ({
    ...obj,
  });
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

export namespace DeleteQuickConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteQuickConnectRequest): any => ({
    ...obj,
  });
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

export namespace DeleteSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityProfileRequest): any => ({
    ...obj,
  });
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

export namespace DeleteTaskTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskTemplateRequest): any => ({
    ...obj,
  });
}

export interface DeleteTaskTemplateResponse {}

export namespace DeleteTaskTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTaskTemplateResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteUseCaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUseCaseRequest): any => ({
    ...obj,
  });
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

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
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

export namespace DeleteUserHierarchyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserHierarchyGroupRequest): any => ({
    ...obj,
  });
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

export namespace DeleteVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVocabularyRequest): any => ({
    ...obj,
  });
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

export namespace DeleteVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteVocabularyResponse): any => ({
    ...obj,
  });
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

export namespace DescribeAgentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAgentStatusRequest): any => ({
    ...obj,
  });
}

export interface DescribeAgentStatusResponse {
  /**
   * <p>The agent status.</p>
   */
  AgentStatus?: AgentStatus;
}

export namespace DescribeAgentStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAgentStatusResponse): any => ({
    ...obj,
  });
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

export namespace DescribeContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactRequest): any => ({
    ...obj,
  });
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
}

export namespace Contact {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Contact): any => ({
    ...obj,
  });
}

export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   */
  Contact?: Contact;
}

export namespace DescribeContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The contact flow has not been published.</p>
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
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;
}

export namespace DescribeContactFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactFlowRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a contact flow.</p>
 */
export interface ContactFlow {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  Id?: string;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The type of the contact flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a Contact Flow Type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   */
  Type?: ContactFlowType | string;

  /**
   * <p>The type of contact flow.</p>
   */
  State?: ContactFlowState | string;

  /**
   * <p>The description of the contact flow.</p>
   */
  Description?: string;

  /**
   * <p>The content of the contact flow.</p>
   */
  Content?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ContactFlow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactFlow): any => ({
    ...obj,
  });
}

export interface DescribeContactFlowResponse {
  /**
   * <p>Information about the contact flow.</p>
   */
  ContactFlow?: ContactFlow;
}

export namespace DescribeContactFlowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactFlowResponse): any => ({
    ...obj,
  });
}

export interface DescribeContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;
}

export namespace DescribeContactFlowModuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactFlowModuleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a contact flow module.</p>
 */
export interface ContactFlowModule {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  Id?: string;

  /**
   * <p>The name of the contact flow module.</p>
   */
  Name?: string;

  /**
   * <p>The content of the contact flow module.</p>
   */
  Content?: string;

  /**
   * <p>The description of the contact flow module.</p>
   */
  Description?: string;

  /**
   * <p>The type of contact flow module.</p>
   */
  State?: ContactFlowModuleState | string;

  /**
   * <p>The status of the contact flow module.</p>
   */
  Status?: ContactFlowModuleStatus | string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ContactFlowModule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContactFlowModule): any => ({
    ...obj,
  });
}

export interface DescribeContactFlowModuleResponse {
  /**
   * <p>Information about the contact flow module.</p>
   */
  ContactFlowModule?: ContactFlowModule;
}

export namespace DescribeContactFlowModuleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeContactFlowModuleResponse): any => ({
    ...obj,
  });
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

export namespace DescribeHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHoursOfOperationRequest): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace HoursOfOperation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HoursOfOperation): any => ({
    ...obj,
  });
}

export interface DescribeHoursOfOperationResponse {
  /**
   * <p>The hours of operation.</p>
   */
  HoursOfOperation?: HoursOfOperation;
}

export namespace DescribeHoursOfOperationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeHoursOfOperationResponse): any => ({
    ...obj,
  });
}

export interface DescribeInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace DescribeInstanceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceRequest): any => ({
    ...obj,
  });
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

export namespace Instance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
    ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
  });
}

export interface DescribeInstanceResponse {
  /**
   * <p>The name of the instance.</p>
   */
  Instance?: Instance;
}

export namespace DescribeInstanceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceResponse): any => ({
    ...obj,
    ...(obj.Instance && { Instance: Instance.filterSensitiveLog(obj.Instance) }),
  });
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

export namespace DescribeInstanceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceAttributeRequest): any => ({
    ...obj,
  });
}

export interface DescribeInstanceAttributeResponse {
  /**
   * <p>The
   *    type
   *    of attribute.</p>
   */
  Attribute?: Attribute;
}

export namespace DescribeInstanceAttributeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceAttributeResponse): any => ({
    ...obj,
  });
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

export namespace DescribeInstanceStorageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceStorageConfigRequest): any => ({
    ...obj,
  });
}

export interface DescribeInstanceStorageConfigResponse {
  /**
   * <p>A valid storage type.</p>
   */
  StorageConfig?: InstanceStorageConfig;
}

export namespace DescribeInstanceStorageConfigResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeInstanceStorageConfigResponse): any => ({
    ...obj,
  });
}

export interface DescribePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;
}

export namespace DescribePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePhoneNumberRequest): any => ({
    ...obj,
  });
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

export enum PhoneNumberType {
  DID = "DID",
  TOLL_FREE = "TOLL_FREE",
}

export interface DescribePhoneNumberResponse {
  /**
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance.</p>
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}

export namespace DescribePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePhoneNumberResponse): any => ({
    ...obj,
  });
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

export namespace DescribeQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeQueueRequest): any => ({
    ...obj,
  });
}

export interface DescribeQueueResponse {
  /**
   * <p>The name of the queue.</p>
   */
  Queue?: Queue;
}

export namespace DescribeQueueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeQueueResponse): any => ({
    ...obj,
  });
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

export namespace DescribeQuickConnectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeQuickConnectRequest): any => ({
    ...obj,
  });
}

export interface DescribeQuickConnectResponse {
  /**
   * <p>Information about the quick connect.</p>
   */
  QuickConnect?: QuickConnect;
}

export namespace DescribeQuickConnectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeQuickConnectResponse): any => ({
    ...obj,
  });
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

export namespace DescribeRoutingProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoutingProfileRequest): any => ({
    ...obj,
  });
}

export interface DescribeRoutingProfileResponse {
  /**
   * <p>The routing profile.</p>
   */
  RoutingProfile?: RoutingProfile;
}

export namespace DescribeRoutingProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRoutingProfileResponse): any => ({
    ...obj,
  });
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

export namespace DescribeSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface DescribeSecurityProfileResponse {
  /**
   * <p>The security profile.</p>
   */
  SecurityProfile?: SecurityProfile;
}

export namespace DescribeSecurityProfileResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSecurityProfileResponse): any => ({
    ...obj,
  });
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

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>Information about the user account and configuration settings.</p>
   */
  User?: User;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
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

export namespace DescribeUserHierarchyGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserHierarchyGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserHierarchyGroupResponse {
  /**
   * <p>Information about the hierarchy group.</p>
   */
  HierarchyGroup?: HierarchyGroup;
}

export namespace DescribeUserHierarchyGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserHierarchyGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserHierarchyStructureRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace DescribeUserHierarchyStructureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserHierarchyStructureRequest): any => ({
    ...obj,
  });
}

export interface DescribeUserHierarchyStructureResponse {
  /**
   * <p>Information about the hierarchy structure.</p>
   */
  HierarchyStructure?: HierarchyStructure;
}

export namespace DescribeUserHierarchyStructureResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserHierarchyStructureResponse): any => ({
    ...obj,
  });
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

export namespace DescribeVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVocabularyRequest): any => ({
    ...obj,
  });
}

export interface DescribeVocabularyResponse {
  /**
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   */
  Vocabulary: Vocabulary | undefined;
}

export namespace DescribeVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeVocabularyResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateApprovedOriginRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateApprovedOriginRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateBotRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateInstanceStorageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateInstanceStorageConfigRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateLambdaFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLambdaFunctionRequest): any => ({
    ...obj,
  });
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
   * <p>The Region in which the Amazon Lex bot has been created.</p>
   */
  LexRegion: string | undefined;
}

export namespace DisassociateLexBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateLexBotRequest): any => ({
    ...obj,
  });
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

export namespace DisassociatePhoneNumberContactFlowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociatePhoneNumberContactFlowRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateQueueQuickConnectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateQueueQuickConnectsRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
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

export namespace DisassociateSecurityKeyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateSecurityKeyRequest): any => ({
    ...obj,
  });
}

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

export namespace GetContactAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactAttributesRequest): any => ({
    ...obj,
  });
}

export interface GetContactAttributesResponse {
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: Record<string, string>;
}

export namespace GetContactAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContactAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *    Guide</i>.</p>
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

export namespace CurrentMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CurrentMetric): any => ({
    ...obj,
  });
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
}

export namespace Filters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filters): any => ({
    ...obj,
  });
}

export enum Grouping {
  CHANNEL = "CHANNEL",
  QUEUE = "QUEUE",
}

export interface GetCurrentMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when grouped by
   *     <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all
   *    queues. If you group by <code>CHANNEL</code>, you should include a Channels filter.
   *    VOICE, CHAT, and TASK channels are supported.</p>
   *          <p>If no <code>Grouping</code> is included in the request, a summary of metrics is
   *    returned.</p>
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
   *
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
   *
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
}

export namespace GetCurrentMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCurrentMetricDataRequest): any => ({
    ...obj,
  });
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
}

export namespace GetCurrentMetricDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCurrentMetricDataResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A filter for the user data.</p>
 */
export interface UserDataFilters {
  /**
   * <p>Contains information about a queue resource for which metrics are returned.</p>
   */
  Queues?: string[];

  /**
   * <p>A filter for the user data based on the contact information that is associated to the user. It
   *    contains a list of contact states. </p>
   */
  ContactFilter?: ContactFilter;
}

export namespace UserDataFilters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserDataFilters): any => ({
    ...obj,
  });
}

export interface GetCurrentUserDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Filters up to 100 <code>Queues</code>, or up to 9 <code>ContactStates</code>. The user data is retrieved only for those users who are associated with
   *    the queues and have contacts that are in the specified <code>ContactState</code>. </p>
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

export namespace GetCurrentUserDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCurrentUserDataRequest): any => ({
    ...obj,
  });
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
}

export namespace GetCurrentUserDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCurrentUserDataResponse): any => ({
    ...obj,
  });
}

export interface GetFederationTokenRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetFederationTokenRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFederationTokenRequest): any => ({
    ...obj,
  });
}

export interface GetFederationTokenResponse {
  /**
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: Credentials;
}

export namespace GetFederationTokenResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetFederationTokenResponse): any => ({
    ...obj,
    ...(obj.Credentials && { Credentials: Credentials.filterSensitiveLog(obj.Credentials) }),
  });
}

/**
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *    Guide</i>.</p>
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

export namespace HistoricalMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistoricalMetric): any => ({
    ...obj,
  });
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
   *
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   */
  Groupings?: (Grouping | string)[];

  /**
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   *          <note>
   *             <p>This API does not support a contacts
   *     incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p>
   *          </note>
   *
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

export namespace GetMetricDataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMetricDataRequest): any => ({
    ...obj,
  });
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

export namespace GetMetricDataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMetricDataResponse): any => ({
    ...obj,
  });
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

export namespace GetTaskTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTaskTemplateRequest): any => ({
    ...obj,
  });
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
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  Tags?: Record<string, string>;
}

export namespace GetTaskTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTaskTemplateResponse): any => ({
    ...obj,
  });
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

export namespace ListAgentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAgentStatusRequest): any => ({
    ...obj,
  });
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

export namespace ListAgentStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAgentStatusResponse): any => ({
    ...obj,
  });
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

export namespace ListApprovedOriginsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApprovedOriginsRequest): any => ({
    ...obj,
  });
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

export namespace ListApprovedOriginsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApprovedOriginsResponse): any => ({
    ...obj,
  });
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

export namespace ListBotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsRequest): any => ({
    ...obj,
  });
}

export interface ListBotsResponse {
  /**
   * <p>The names and Regions of the Amazon Lex or Amazon Lex V2 bots associated with the specified
   *    instance.</p>
   */
  LexBots?: LexBotConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListBotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsResponse): any => ({
    ...obj,
  });
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
   * <p>The state of the contact flow module.</p>
   */
  ContactFlowModuleState?: ContactFlowModuleState | string;
}

export namespace ListContactFlowModulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactFlowModulesRequest): any => ({
    ...obj,
  });
}

export interface ListContactFlowModulesResponse {
  /**
   * <p>Information about the contact flow module.</p>
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListContactFlowModulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactFlowModulesResponse): any => ({
    ...obj,
  });
}

export interface ListContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of contact flow.</p>
   */
  ContactFlowTypes?: (ContactFlowType | string)[];

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

export namespace ListContactFlowsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactFlowsRequest): any => ({
    ...obj,
  });
}

export interface ListContactFlowsResponse {
  /**
   * <p>Information about the contact flows.</p>
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListContactFlowsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactFlowsResponse): any => ({
    ...obj,
  });
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

export namespace ListContactReferencesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactReferencesRequest): any => ({
    ...obj,
  });
}

export interface ListContactReferencesResponse {
  /**
   * <p>Information about the contact flows.</p>
   */
  ReferenceSummaryList?: ReferenceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

export namespace ListContactReferencesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContactReferencesResponse): any => ({
    ...obj,
    ...(obj.ReferenceSummaryList && {
      ReferenceSummaryList: obj.ReferenceSummaryList.map((item) => ReferenceSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListDefaultVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode | string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDefaultVocabulariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDefaultVocabulariesRequest): any => ({
    ...obj,
  });
}

export interface ListDefaultVocabulariesResponse {
  /**
   * <p>A list of default vocabularies.</p>
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListDefaultVocabulariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDefaultVocabulariesResponse): any => ({
    ...obj,
  });
}

export interface ListHoursOfOperationsRequest {
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

export namespace ListHoursOfOperationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHoursOfOperationsRequest): any => ({
    ...obj,
  });
}

export interface ListHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operation.</p>
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListHoursOfOperationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListHoursOfOperationsResponse): any => ({
    ...obj,
  });
}

export interface ListInstanceAttributesRequest {
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

export namespace ListInstanceAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstanceAttributesRequest): any => ({
    ...obj,
  });
}

export interface ListInstanceAttributesResponse {
  /**
   * <p>The attribute types.</p>
   */
  Attributes?: Attribute[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListInstanceAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstanceAttributesResponse): any => ({
    ...obj,
  });
}

export interface ListInstancesRequest {
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

export namespace ListInstancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstancesRequest): any => ({
    ...obj,
  });
}

export interface ListInstancesResponse {
  /**
   * <p>Information about the instances.</p>
   */
  InstanceSummaryList?: InstanceSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListInstancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstancesResponse): any => ({
    ...obj,
    ...(obj.InstanceSummaryList && {
      InstanceSummaryList: obj.InstanceSummaryList.map((item) => InstanceSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListInstanceStorageConfigsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   */
  ResourceType: InstanceStorageResourceType | string | undefined;

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

export namespace ListInstanceStorageConfigsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstanceStorageConfigsRequest): any => ({
    ...obj,
  });
}

export interface ListInstanceStorageConfigsResponse {
  /**
   * <p>A valid storage type.</p>
   */
  StorageConfigs?: InstanceStorageConfig[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListInstanceStorageConfigsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListInstanceStorageConfigsResponse): any => ({
    ...obj,
  });
}

export interface ListIntegrationAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

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

export namespace ListIntegrationAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntegrationAssociationsRequest): any => ({
    ...obj,
  });
}

export interface ListIntegrationAssociationsResponse {
  /**
   * <p>The associations.</p>
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListIntegrationAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntegrationAssociationsResponse): any => ({
    ...obj,
  });
}

export interface ListLambdaFunctionsRequest {
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

export namespace ListLambdaFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLambdaFunctionsRequest): any => ({
    ...obj,
  });
}

export interface ListLambdaFunctionsResponse {
  /**
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   */
  LambdaFunctions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLambdaFunctionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLambdaFunctionsResponse): any => ({
    ...obj,
  });
}

export interface ListLexBotsRequest {
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
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   */
  MaxResults?: number;
}

export namespace ListLexBotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLexBotsRequest): any => ({
    ...obj,
  });
}

export interface ListLexBotsResponse {
  /**
   * <p>The names and Regions of the Amazon Lex bots associated with the specified instance.</p>
   */
  LexBots?: LexBot[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListLexBotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListLexBotsResponse): any => ({
    ...obj,
  });
}

export interface ListPhoneNumbersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

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

export namespace ListPhoneNumbersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
    ...obj,
  });
}

export interface ListPhoneNumbersResponse {
  /**
   * <p>Information about the phone numbers.</p>
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListPhoneNumbersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
    ...obj,
  });
}

export interface ListPhoneNumbersV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed
   *    to all the Amazon Connect instances belonging to your account.</p>
   */
  TargetArn?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;
}

export namespace ListPhoneNumbersV2Request {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersV2Request): any => ({
    ...obj,
  });
}

export interface ListPhoneNumbersV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances.</p>
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[];
}

export namespace ListPhoneNumbersV2Response {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPhoneNumbersV2Response): any => ({
    ...obj,
  });
}

export interface ListPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

export namespace ListPromptsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPromptsRequest): any => ({
    ...obj,
  });
}

export interface ListPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   */
  PromptSummaryList?: PromptSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListPromptsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPromptsResponse): any => ({
    ...obj,
  });
}

export interface ListQueueQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

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

export namespace ListQueueQuickConnectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueueQuickConnectsRequest): any => ({
    ...obj,
  });
}

export interface ListQueueQuickConnectsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];
}

export namespace ListQueueQuickConnectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueueQuickConnectsResponse): any => ({
    ...obj,
  });
}

export interface ListQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of queue.</p>
   */
  QueueTypes?: (QueueType | string)[];

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

export namespace ListQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj,
  });
}

export interface ListQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   */
  QueueSummaryList?: QueueSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListQueuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQueuesResponse): any => ({
    ...obj,
  });
}

export interface ListQuickConnectsRequest {
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
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectTypes?: (QuickConnectType | string)[];
}

export namespace ListQuickConnectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQuickConnectsRequest): any => ({
    ...obj,
  });
}

export interface ListQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListQuickConnectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListQuickConnectsResponse): any => ({
    ...obj,
  });
}

export interface ListRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

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

export namespace ListRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
}

export interface ListRoutingProfileQueuesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];
}

export namespace ListRoutingProfileQueuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingProfileQueuesResponse): any => ({
    ...obj,
  });
}

export interface ListRoutingProfilesRequest {
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

export namespace ListRoutingProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListRoutingProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutingProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityKeysRequest {
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

export namespace ListSecurityKeysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityKeysRequest): any => ({
    ...obj,
  });
}

export interface ListSecurityKeysResponse {
  /**
   * <p>The security keys.</p>
   */
  SecurityKeys?: SecurityKey[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListSecurityKeysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityKeysResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilePermissionsRequest {
  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

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

export namespace ListSecurityProfilePermissionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilePermissionsRequest): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilePermissionsResponse {
  /**
   * <p>The permissions granted to the security profile.</p>
   */
  Permissions?: string[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListSecurityProfilePermissionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilePermissionsResponse): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesRequest {
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

export namespace ListSecurityProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesRequest): any => ({
    ...obj,
  });
}

export interface ListSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListSecurityProfilesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSecurityProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface ListTaskTemplatesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   */
  MaxResults?: number;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;
}

export namespace ListTaskTemplatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskTemplatesRequest): any => ({
    ...obj,
  });
}

export interface ListTaskTemplatesResponse {
  /**
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   */
  TaskTemplates?: TaskTemplateMetadata[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

export namespace ListTaskTemplatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTaskTemplatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
 */
export interface ListUseCasesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   */
  IntegrationAssociationId: string | undefined;

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

export namespace ListUseCasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUseCasesRequest): any => ({
    ...obj,
  });
}

export interface ListUseCasesResponse {
  /**
   * <p>The use cases.</p>
   */
  UseCaseSummaryList?: UseCase[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUseCasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUseCasesResponse): any => ({
    ...obj,
  });
}

export interface ListUserHierarchyGroupsRequest {
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

export namespace ListUserHierarchyGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserHierarchyGroupsRequest): any => ({
    ...obj,
  });
}

export interface ListUserHierarchyGroupsResponse {
  /**
   * <p>Information about the hierarchy groups.</p>
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUserHierarchyGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUserHierarchyGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
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

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p>Information about the users.</p>
   */
  UserSummaryList?: UserSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface PutUserStatusRequest {
  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId: string | undefined;
}

export namespace PutUserStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutUserStatusRequest): any => ({
    ...obj,
  });
}

export interface PutUserStatusResponse {}

export namespace PutUserStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutUserStatusResponse): any => ({
    ...obj,
  });
}

export interface ReleasePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace ReleasePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ReleasePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface ResumeContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

export namespace ResumeContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface ResumeContactRecordingResponse {}

export namespace ResumeContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResumeContactRecordingResponse): any => ({
    ...obj,
  });
}

export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | string | undefined;

  /**
   * <p>The type of phone number.</p>
   */
  PhoneNumberType: PhoneNumberType | string | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace SearchAvailablePhoneNumbersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
    ...obj,
  });
}

export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of available phone numbers that you can claim for your Amazon Connect instance.</p>
   */
  AvailableNumbersList?: AvailableNumberSummary[];
}

export namespace SearchAvailablePhoneNumbersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAvailablePhoneNumbersResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Filters to be applied to search results.</p>
 */
export interface UserSearchFilter {
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
  TagFilter?: ControlPlaneTagFilter;
}

export namespace UserSearchFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSearchFilter): any => ({
    ...obj,
  });
}

export interface SearchUsersResponse {
  /**
   * <p>Information about the users.</p>
   */
  Users?: UserSearchSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The total number of users who matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

export namespace SearchUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchUsersResponse): any => ({
    ...obj,
  });
}

export interface SearchVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The current state of the custom vocabulary.</p>
   */
  State?: VocabularyState | string;

  /**
   * <p>The starting pattern of the name of the vocabulary.</p>
   */
  NameStartsWith?: string;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode | string;
}

export namespace SearchVocabulariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchVocabulariesRequest): any => ({
    ...obj,
  });
}

export interface SearchVocabulariesResponse {
  /**
   * <p>The list of the available custom vocabularies.</p>
   */
  VocabularySummaryList?: VocabularySummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

export namespace SearchVocabulariesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchVocabulariesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A chat message.</p>
 */
export interface ChatMessage {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>.</p>
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the chat message.</p>
   */
  Content: string | undefined;
}

export namespace ChatMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
  /**
   * <p>Display name of the participant.</p>
   */
  DisplayName: string | undefined;
}

export namespace ParticipantDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParticipantDetails): any => ({
    ...obj,
  });
}

export interface StartChatContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow for initiating the chat.
   *    To
   *    see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the
   *    contact flow. On the contact flow page, under the name of the contact flow, choose <b>Show additional flow information</b>. The ContactFlowId is the last part of
   *    the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes. They can be accessed in contact flows just like any other contact attributes. </p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Information identifying the participant.</p>
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The initial message to be sent to the newly created chat.</p>
   */
  InitialMessage?: ChatMessage;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minumum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   */
  ChatDurationInMinutes?: number;

  /**
   * <p>The supported chat message content types. Content types can be text/plain or both text/plain
   *    and text/markdown.</p>
   */
  SupportedMessagingContentTypes?: string[];
}

export namespace StartChatContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChatContactRequest): any => ({
    ...obj,
  });
}

export interface StartChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance. </p>
   */
  ContactId?: string;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   */
  ParticipantId?: string;

  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant.</p>
   */
  ParticipantToken?: string;
}

export namespace StartChatContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartChatContactResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the recording configuration settings.</p>
 */
export interface VoiceRecordingConfiguration {
  /**
   * <p>Identifies which track is being recorded.</p>
   */
  VoiceRecordingTrack?: VoiceRecordingTrack | string;
}

export namespace VoiceRecordingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceRecordingConfiguration): any => ({
    ...obj,
  });
}

export interface StartContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The person being recorded.</p>
   */
  VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}

export namespace StartContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface StartContactRecordingResponse {}

export namespace StartContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContactRecordingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
 */
export interface ChatStreamingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used
   *    to publish real-time message streaming for chat conversations.</p>
   */
  StreamingEndpointArn: string | undefined;
}

export namespace ChatStreamingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ChatStreamingConfiguration): any => ({
    ...obj,
  });
}

export interface StartContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace StartContactStreamingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContactStreamingRequest): any => ({
    ...obj,
  });
}

export interface StartContactStreamingResponse {
  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

export namespace StartContactStreamingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContactStreamingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of the answering machine detection.</p>
 */
export interface AnswerMachineDetectionConfig {
  /**
   * <p>The flag to indicate if answer machine detection analysis needs to be performed for a voice
   *    call. If set to <code>true</code>, <code>TrafficType</code> must be set as <code>CAMPAIGN</code>.
   *   </p>
   */
  EnableAnswerMachineDetection?: boolean;

  /**
   * <p>Wait for the answering machine prompt.</p>
   */
  AwaitAnswerMachinePrompt?: boolean;
}

export namespace AnswerMachineDetectionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnswerMachineDetectionConfig): any => ({
    ...obj,
  });
}

export interface StartOutboundVoiceContactRequest {
  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The
   *    identifier of the contact flow for the outbound call. To see the ContactFlowId in the Amazon Connect
   *    console user interface, on the navigation menu go to <b>Routing</b>,
   *     <b>Contact Flows</b>. Choose the contact flow. On the contact flow
   *    page, under the name of the contact flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request. The token is valid for 7 days after creation. If a contact is already started, the
   *    contact ID is returned.
   *    </p>
   */
  ClientToken?: string;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify
   *    a source phone number, you must specify a queue.</p>
   */
  SourcePhoneNumber?: string;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the
   *    contact flow is used. If you do not specify a queue, you must specify a source phone
   *    number.</p>
   */
  QueueId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Configuration of the answering machine detection for this outbound call. </p>
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;

  /**
   * <p>The campaign identifier of the outbound communication.</p>
   */
  CampaignId?: string;

  /**
   * <p>Denotes the class of traffic. Calls with different traffic types are handled differently by
   *    Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   */
  TrafficType?: TrafficType | string;
}

export namespace StartOutboundVoiceContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOutboundVoiceContactRequest): any => ({
    ...obj,
  });
}

export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

export namespace StartOutboundVoiceContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartOutboundVoiceContactResponse): any => ({
    ...obj,
  });
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
   * <p>The type of the reference.</p>
   */
  Type: ReferenceType | string | undefined;
}

export namespace Reference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Reference): any => ({
    ...obj,
  });
}

export interface StartTaskContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the previous chat, voice, or task contact. </p>
   */
  PreviousContactId?: string;

  /**
   * <p>The identifier of the contact flow for initiating the tasks. To see the ContactFlowId in the
   *    Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the contact flow. On
   *    the contact flow page, under the name of the contact flow, choose <b>Show
   *     additional flow information</b>. The ContactFlowId is the last part of the ARN, shown
   *    here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  Name: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  References?: Record<string, Reference>;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound contact flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime?: Date;

  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId?: string;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;
}

export namespace StartTaskContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskContactRequest): any => ({
    ...obj,
  });
}

export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

export namespace StartTaskContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartTaskContactResponse): any => ({
    ...obj,
  });
}

export interface StopContactRequest {
  /**
   * <p>The ID of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace StopContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRequest): any => ({
    ...obj,
  });
}

export interface StopContactResponse {}

export namespace StopContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactResponse): any => ({
    ...obj,
  });
}

export interface StopContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

export namespace StopContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface StopContactRecordingResponse {}

export namespace StopContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactRecordingResponse): any => ({
    ...obj,
  });
}

export interface StopContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact that is associated with
   *    the first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

export namespace StopContactStreamingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactStreamingRequest): any => ({
    ...obj,
  });
}

export interface StopContactStreamingResponse {}

export namespace StopContactStreamingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopContactStreamingResponse): any => ({
    ...obj,
  });
}

export interface SuspendContactRecordingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;
}

export namespace SuspendContactRecordingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuspendContactRecordingRequest): any => ({
    ...obj,
  });
}

export interface SuspendContactRecordingResponse {}

export namespace SuspendContactRecordingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SuspendContactRecordingResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  tags: Record<string, string> | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TransferContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * <p>The identifier for the user.</p>
   */
  UserId?: string;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace TransferContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferContactRequest): any => ({
    ...obj,
  });
}

export interface TransferContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   */
  ContactArn?: string;
}

export namespace TransferContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransferContactResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UpdateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   */
  Name?: string;

  /**
   * <p>The description of the agent status.</p>
   */
  Description?: string;

  /**
   * <p>The state of the agent status.</p>
   */
  State?: AgentStatusState | string;

  /**
   * <p>The display order of the agent status.</p>
   */
  DisplayOrder?: number;

  /**
   * <p>A number indicating the reset order of the agent status.</p>
   */
  ResetOrderNumber?: boolean;
}

export namespace UpdateAgentStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAgentStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with your contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The name of the contact.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact.</p>
   */
  Description?: string;

  /**
   * <p>Well-formed data on contact, shown to agents on Contact Control Panel (CCP).</p>
   */
  References?: Record<string, Reference>;
}

export namespace UpdateContactRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactResponse {}

export namespace UpdateContactResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactAttributesRequest {
  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other
   *    contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes: Record<string, string> | undefined;
}

export namespace UpdateContactAttributesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactAttributesRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactAttributesResponse {}

export namespace UpdateContactAttributesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactAttributesResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The JSON string that represents contact flow’s content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/flow-language-example.html">Example contact
   *     flow in Amazon Connect Flow language</a> in the <i>Amazon Connect Administrator Guide</i>.
   *   </p>
   */
  Content: string | undefined;
}

export namespace UpdateContactFlowContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowContentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>TThe name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow.</p>
   */
  Description?: string;

  /**
   * <p>The state of contact flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

export namespace UpdateContactFlowMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The content of the contact flow module.</p>
   */
  Content: string | undefined;
}

export namespace UpdateContactFlowModuleContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleContentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleContentResponse {}

export namespace UpdateContactFlowModuleContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleContentResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * <p>The name of the contact flow module.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow module.</p>
   */
  Description?: string;

  /**
   * <p>The state of contact flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

export namespace UpdateContactFlowModuleMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleMetadataRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowModuleMetadataResponse {}

export namespace UpdateContactFlowModuleMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowModuleMetadataResponse): any => ({
    ...obj,
  });
}

export interface UpdateContactFlowNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name?: string;

  /**
   * <p>The description of the contact flow.</p>
   */
  Description?: string;
}

export namespace UpdateContactFlowNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactFlowNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactScheduleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound contact flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime: Date | undefined;
}

export namespace UpdateContactScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateContactScheduleResponse {}

export namespace UpdateContactScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContactScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;

  /**
   * <p>The description of the hours of operation.</p>
   */
  Description?: string;

  /**
   * <p>The time zone of the hours of operation.</p>
   */
  TimeZone?: string;

  /**
   * <p>Configuration information of the hours of operation.</p>
   */
  Config?: HoursOfOperationConfig[];
}

export namespace UpdateHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateHoursOfOperationRequest): any => ({
    ...obj,
  });
}

export interface UpdateInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   *          <note>
   *             <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature,
   *     contact Amazon Web Services Support for allowlisting.</p>
   *          </note>
   */
  AttributeType: InstanceAttributeType | string | undefined;

  /**
   * <p>The value for the attribute. Maximum character limit is 100. </p>
   */
  Value: string | undefined;
}

export namespace UpdateInstanceAttributeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInstanceAttributeRequest): any => ({
    ...obj,
  });
}

export interface UpdateInstanceStorageConfigRequest {
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

  /**
   * <p>The storage configuration for the instance.</p>
   */
  StorageConfig: InstanceStorageConfig | undefined;
}

export namespace UpdateInstanceStorageConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateInstanceStorageConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdatePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request.</p>
   */
  ClientToken?: string;
}

export namespace UpdatePhoneNumberRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
    ...obj,
  });
}

export interface UpdatePhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  PhoneNumberArn?: string;
}

export namespace UpdatePhoneNumberResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
    ...obj,
  });
}

export interface UpdateQueueHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

export namespace UpdateQueueHoursOfOperationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueHoursOfOperationRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueMaxContactsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;
}

export namespace UpdateQueueMaxContactsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueMaxContactsRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The description of the queue.</p>
   */
  Description?: string;
}

export namespace UpdateQueueNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueOutboundCallerConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

export namespace UpdateQueueOutboundCallerConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueOutboundCallerConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQueueStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * <p>The status of the queue.</p>
   */
  Status: QueueStatus | string | undefined;
}

export namespace UpdateQueueStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQueueStatusRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>Information about the configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

export namespace UpdateQuickConnectConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateQuickConnectNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * <p>The description of the quick connect.</p>
   */
  Description?: string;
}

export namespace UpdateQuickConnectNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateQuickConnectNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

export namespace UpdateRoutingProfileConcurrencyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileConcurrencyRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier for the default outbound queue.</p>
   */
  DefaultOutboundQueueId: string | undefined;
}

export namespace UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileDefaultOutboundQueueRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name?: string;

  /**
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description?: string;
}

export namespace UpdateRoutingProfileNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileNameRequest): any => ({
    ...obj,
  });
}

export interface UpdateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to be updated for this routing profile.
   *    Queues must first be associated to the routing
   *    profile. You can do this using AssociateRoutingProfileQueues.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

export namespace UpdateRoutingProfileQueuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRoutingProfileQueuesRequest): any => ({
    ...obj,
  });
}

export interface UpdateSecurityProfileRequest {
  /**
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * <p>The permissions granted to a security profile.</p>
   */
  Permissions?: string[];

  /**
   * <p>The identifier for the security profle.</p>
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateSecurityProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateTaskTemplateRequest {
  /**
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   */
  Name?: string;

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
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];
}

export namespace UpdateTaskTemplateRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskTemplateRequest): any => ({
    ...obj,
  });
}

export interface UpdateTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The identifier of the task template resource.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
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
}

export namespace UpdateTaskTemplateResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTaskTemplateResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyGroupNameRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyGroupNameRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the level hierarchy to update.</p>
 */
export interface HierarchyStructureUpdate {
  /**
   * <p>The
   *    update
   *    for level one.</p>
   */
  LevelOne?: HierarchyLevelUpdate;

  /**
   * <p>The update for level two.</p>
   */
  LevelTwo?: HierarchyLevelUpdate;

  /**
   * <p>The update for level three.</p>
   */
  LevelThree?: HierarchyLevelUpdate;

  /**
   * <p>The update for level four.</p>
   */
  LevelFour?: HierarchyLevelUpdate;

  /**
   * <p>The update for level five.</p>
   */
  LevelFive?: HierarchyLevelUpdate;
}

export namespace HierarchyStructureUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HierarchyStructureUpdate): any => ({
    ...obj,
  });
}

export interface UpdateUserHierarchyStructureRequest {
  /**
   * <p>The hierarchy levels to update.</p>
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserHierarchyStructureRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserHierarchyStructureRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserIdentityInfoRequest {
  /**
   * <p>The identity information for the user.</p>
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserIdentityInfoRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserIdentityInfoRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserPhoneConfigRequest {
  /**
   * <p>Information about phone configuration settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserPhoneConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserPhoneConfigRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserRoutingProfileRequest {
  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserRoutingProfileRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRoutingProfileRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserSecurityProfilesRequest {
  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateUserSecurityProfilesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserSecurityProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The search criteria to be used to return users.</p>
 */
export interface UserSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   */
  OrConditions?: UserSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   */
  AndConditions?: UserSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   */
  StringCondition?: StringCondition;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

export namespace UserSearchCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSearchCriteria): any => ({
    ...obj,
  });
}

export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  InstanceId?: string;

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
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: UserSearchFilter;

  /**
   * <p>The search criteria to be used to return users.</p>
   */
  SearchCriteria?: UserSearchCriteria;
}

export namespace SearchUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchUsersRequest): any => ({
    ...obj,
  });
}
