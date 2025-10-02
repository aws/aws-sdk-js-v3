// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  AdditionalEmailRecipients,
  AgentAvailabilityTimer,
  AgentConfig,
  AgentInfo,
  AgentStatusSearchFilter,
  Application,
  Campaign,
  Channel,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  Endpoint,
  EvaluationFormQuestion,
  EvaluationFormScoringStrategy,
  HoursOfOperationConfig,
  HoursOfOperationOverrideConfig,
  InitiateAs,
  InputPredefinedAttributeConfiguration,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  MediaConcurrency,
  OutboundCallerConfig,
  OutboundEmailConfig,
  PredefinedAttributeValues,
  QuickConnectConfig,
  Reference,
  RoutingProfileQueueConfig,
  RuleAction,
  RulePublishStatus,
  StringCondition,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserInfo,
  UserPhoneConfig,
  UserProficiency,
  View,
  ViewFilterSensitiveLog,
  ViewInputContent,
  ViewInputContentFilterSensitiveLog,
  ViewStatus,
} from "./models_0";

import {
  AnsweringMachineDetectionStatus,
  AttributeCondition,
  ChatMetrics,
  ContactDetails,
  ContactEvaluation,
  ContactFlowModuleState,
  ContactFlowModuleStatus,
  ContactFlowState,
  Customer,
  CustomerVoiceActivity,
  DisconnectDetails,
  EndpointInfo,
  Evaluation,
  EvaluationFormVersionStatus,
  Expiry,
  InstanceAttributeType,
  QualityMetrics,
  QueueInfo,
  QueueStatus,
  RecordingInfo,
  RoutingCriteriaStepStatus,
  SignInConfig,
  TelephonyConfig,
  WisdomInfo,
} from "./models_1";

import {
  ChatMessage,
  ContactFlowModuleSearchFilter,
  ContactFlowSearchFilter,
  ContactSearchSummaryAgentInfo,
  ContactSearchSummaryQueueInfo,
  DateCondition,
  EmailAddressInfo,
  EmailAddressInfoFilterSensitiveLog,
  EmailAddressSearchFilter,
  EmailAttachment,
  HierarchyGroupCondition,
  HoursOfOperationSearchFilter,
  InboundAdditionalRecipients,
  InboundAdditionalRecipientsFilterSensitiveLog,
  InboundEmailContent,
  InboundEmailContentFilterSensitiveLog,
  ListCondition,
  ParticipantDetails,
  PersistentChat,
  PromptSearchFilter,
  QueueInfoInput,
  QueueSearchFilter,
  QuickConnectSearchFilter,
  RoutingCriteriaInputStepExpiry,
  RoutingProfileSearchFilter,
  SearchableQueueType,
  SecurityProfilesSearchFilter,
  UserHierarchyGroupSearchFilter,
  UserSearchFilter,
} from "./models_2";

/**
 * @public
 */
export interface UpdateContactRoutingDataResponse {}

/**
 * @public
 */
export interface UpdateContactScheduleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   * @public
   */
  ScheduledTime: Date | undefined;
}

/**
 * @public
 */
export interface UpdateContactScheduleResponse {}

/**
 * @public
 */
export interface UpdateEmailAddressMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId: string | undefined;

  /**
   * <p>The description of the email address.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of email address.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEmailAddressMetadataResponse {
  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the email address.</p>
   * @public
   */
  EmailAddressArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationFormResponse {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>The version of the updated evaluation form resource.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The name of the hours of operation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the hours of operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time zone of the hours of operation.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>Configuration information of the hours of operation.</p>
   * @public
   */
  Config?: HoursOfOperationConfig[] | undefined;
}

/**
 * <p>Request processing failed because dependent condition failed.</p>
 * @public
 */
export class ConditionalOperationFailedException extends __BaseException {
  readonly name: "ConditionalOperationFailedException" = "ConditionalOperationFailedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionalOperationFailedException, __BaseException>) {
    super({
      name: "ConditionalOperationFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionalOperationFailedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateHoursOfOperationOverrideRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;

  /**
   * <p>The identifier for the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideId: string | undefined;

  /**
   * <p>The name of the hours of operation override.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the hours of operation override.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration information for the hours of operation override: day, start time, and end
   *    time.</p>
   * @public
   */
  Config?: HoursOfOperationOverrideConfig[] | undefined;

  /**
   * <p>The date from when the hours of operation override would be effective.</p>
   * @public
   */
  EffectiveFrom?: string | undefined;

  /**
   * <p>The date until the hours of operation override is effective.</p>
   * @public
   */
  EffectiveTill?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   *          <note>
   *             <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature,
   *     contact Amazon Web Services Support for allowlisting.</p>
   *          </note>
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;

  /**
   * <p>The value for the attribute. Maximum character limit is 100. </p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceStorageConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   * @public
   */
  AssociationId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * <p>The storage configuration for the instance.</p>
   * @public
   */
  StorageConfig: InstanceStorageConfig | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantAuthenticationRequest {
  /**
   * <p>The <code>state</code> query parameter that was provided by Cognito in the
   *     <code>redirectUri</code>. This will also match the <code>state</code> parameter provided in the
   *     <code>AuthenticationUrl</code> from the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetAuthenticationUrl.html">GetAuthenticationUrl</a>
   *    response.</p>
   * @public
   */
  State: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The <code>code</code> query parameter provided by Cognito in the
   *    <code>redirectUri</code>.</p>
   * @public
   */
  Code?: string | undefined;

  /**
   * <p>The <code>error</code> query parameter provided by Cognito in the
   *    <code>redirectUri</code>.</p>
   * @public
   */
  Error?: string | undefined;

  /**
   * <p>The <code>error_description</code> parameter provided by Cognito in the
   *     <code>redirectUri</code>.</p>
   * @public
   */
  ErrorDescription?: string | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantAuthenticationResponse {}

/**
 * @public
 * @enum
 */
export const TimerEligibleParticipantRoles = {
  AGENT: "AGENT",
  CUSTOMER: "CUSTOMER",
} as const;

/**
 * @public
 */
export type TimerEligibleParticipantRoles =
  (typeof TimerEligibleParticipantRoles)[keyof typeof TimerEligibleParticipantRoles];

/**
 * @public
 * @enum
 */
export const ParticipantTimerType = {
  DISCONNECT_NONCUSTOMER: "DISCONNECT_NONCUSTOMER",
  IDLE: "IDLE",
} as const;

/**
 * @public
 */
export type ParticipantTimerType = (typeof ParticipantTimerType)[keyof typeof ParticipantTimerType];

/**
 * @public
 * @enum
 */
export const ParticipantTimerAction = {
  Unset: "Unset",
} as const;

/**
 * @public
 */
export type ParticipantTimerAction = (typeof ParticipantTimerAction)[keyof typeof ParticipantTimerAction];

/**
 * <p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or
 *    the duration of the timer in minutes. Only one value can be set.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 * @public
 */
export type ParticipantTimerValue =
  | ParticipantTimerValue.ParticipantTimerActionMember
  | ParticipantTimerValue.ParticipantTimerDurationInMinutesMember
  | ParticipantTimerValue.$UnknownMember;

/**
 * @public
 */
export namespace ParticipantTimerValue {
  /**
   * <p>The timer action. Currently only one value is allowed: <code>Unset</code>. It deletes a
   *    timer.</p>
   * @public
   */
  export interface ParticipantTimerActionMember {
    ParticipantTimerAction: ParticipantTimerAction;
    ParticipantTimerDurationInMinutes?: never;
    $unknown?: never;
  }

  /**
   * <p>The duration of a timer, in minutes. </p>
   * @public
   */
  export interface ParticipantTimerDurationInMinutesMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ParticipantTimerAction?: never;
    ParticipantTimerDurationInMinutes?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    ParticipantTimerAction: (value: ParticipantTimerAction) => T;
    ParticipantTimerDurationInMinutes: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ParticipantTimerValue, visitor: Visitor<T>): T => {
    if (value.ParticipantTimerAction !== undefined) return visitor.ParticipantTimerAction(value.ParticipantTimerAction);
    if (value.ParticipantTimerDurationInMinutes !== undefined)
      return visitor.ParticipantTimerDurationInMinutes(value.ParticipantTimerDurationInMinutes);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Configuration information for the timer. After the timer configuration is set, it persists
 *    for the duration of the chat. It persists across new contacts in the chain, for example, transfer
 *    contacts.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 * @public
 */
export interface ParticipantTimerConfiguration {
  /**
   * <p>The role of the participant in the chat conversation.</p>
   * @public
   */
  ParticipantRole: TimerEligibleParticipantRoles | undefined;

  /**
   * <p>The type of timer. <code>IDLE</code> indicates the timer applies for considering a human
   *    chat participant as idle. <code>DISCONNECT_NONCUSTOMER</code> indicates the timer applies to
   *    automatically disconnecting a chat participant due to idleness.</p>
   * @public
   */
  TimerType: ParticipantTimerType | undefined;

  /**
   * <p>The value of the timer. Either the timer action (Unset to delete the timer), or the duration
   *    of the timer in minutes. Only one value can be set.</p>
   * @public
   */
  TimerValue: ParticipantTimerValue | undefined;
}

/**
 * <p>Configuration information for the chat participant role.</p>
 * @public
 */
export interface ChatParticipantRoleConfig {
  /**
   * <p>A list of participant timers. You can specify any unique combination of role and timer type.
   *    Duplicate entries error out the request with a 400.</p>
   * @public
   */
  ParticipantTimerConfigList: ParticipantTimerConfiguration[] | undefined;
}

/**
 * <p>Configuration information for the chat participant role.</p>
 * @public
 */
export type UpdateParticipantRoleConfigChannelInfo =
  | UpdateParticipantRoleConfigChannelInfo.ChatMember
  | UpdateParticipantRoleConfigChannelInfo.$UnknownMember;

/**
 * @public
 */
export namespace UpdateParticipantRoleConfigChannelInfo {
  /**
   * <p>Configuration information for the chat participant role.</p>
   * @public
   */
  export interface ChatMember {
    Chat: ChatParticipantRoleConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Chat?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Chat: (value: ChatParticipantRoleConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UpdateParticipantRoleConfigChannelInfo, visitor: Visitor<T>): T => {
    if (value.Chat !== undefined) return visitor.Chat(value.Chat);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Connect channel you want to configure.</p>
   * @public
   */
  ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo | undefined;
}

/**
 * @public
 */
export interface UpdateParticipantRoleConfigResponse {}

/**
 * @public
 */
export interface UpdatePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePhoneNumberMetadataRequest {
  /**
   * <p>The Amazon Resource Name (ARN) or resource ID of the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePredefinedAttributeRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The values of the predefined attribute.</p>
   * @public
   */
  Values?: PredefinedAttributeValues | undefined;

  /**
   * <p>Values that enable you to categorize your predefined attributes. You can use them in custom UI elements across the Amazon Connect admin website.</p>
   * @public
   */
  Purposes?: string[] | undefined;

  /**
   * <p>Custom metadata that is associated to predefined attributes to control behavior
   * in upstream services, such as controlling
   * how a predefined attribute should be displayed in the Amazon Connect admin website.</p>
   * @public
   */
  AttributeConfiguration?: InputPredefinedAttributeConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId: string | undefined;

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the prompt.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html">GetPromptFile</a>
   *  API instead of providing S3 URIs.</p>
   * @public
   */
  S3Uri?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  PromptARN?: string | undefined;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueMaxContactsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   * @public
   */
  MaxContacts?: number | undefined;
}

/**
 * @public
 */
export interface UpdateQueueNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueOutboundCallerConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   * @public
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueOutboundEmailConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The outbound email address ID for a specified queue.</p>
   * @public
   */
  OutboundEmailConfig: OutboundEmailConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId: string | undefined;

  /**
   * <p>The status of the queue.</p>
   * @public
   */
  Status: QueueStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectConfigRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId: string | undefined;

  /**
   * <p>Information about the configuration settings for the quick connect.</p>
   * @public
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the quick connect.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   * @public
   */
  AgentAvailabilityTimer: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileConcurrencyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   * @public
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier for the default outbound queue.</p>
   * @public
   */
  DefaultOutboundQueueId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileNameRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The queues to be updated for this routing profile.
   *    Queues must first be associated to the routing
   *    profile. You can do this using AssociateRoutingProfileQueues.</p>
   * @public
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one
   *    of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The conditions of the rule.</p>
   * @public
   */
  Function: string | undefined;

  /**
   * <p>A list of actions to be run when the rule is triggered.</p>
   * @public
   */
  Actions: RuleAction[] | undefined;

  /**
   * <p>The publish status of the rule.</p>
   * @public
   */
  PublishStatus: RulePublishStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>.</p>
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The list of tags that a security profile uses to restrict access to resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlTags?: Record<string, string> | undefined;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   * @public
   */
  TagRestrictedResources?: string[] | undefined;

  /**
   * <p>A list of the third-party application's metadata.</p>
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * <p>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code>.</p>
   * @public
   */
  HierarchyRestrictedResources?: string[] | undefined;

  /**
   * <p>The identifier of the hierarchy group that a security profile uses to restrict access to
   *    resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateTaskTemplateRequest {
  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The ContactFlowId for the flow that will be run if this template is used to create a
   *    self-assigned task.</p>
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;
}

/**
 * @public
 */
export interface UpdateTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The identifier of the task template resource.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The ContactFlowId for the flow that will be run if this template is used to create a
   *    self-assigned task.</p>
   * @public
   */
  SelfAssignFlowId?: string | undefined;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints | undefined;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults | undefined;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[] | undefined;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus | undefined;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The distribution of traffic between the instance and its replica(s).</p>
   * @public
   */
  TelephonyConfig?: TelephonyConfig | undefined;

  /**
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
   *    agents in to both the instance and its replica(s).</p>
   * @public
   */
  SignInConfig?: SignInConfig | undefined;

  /**
   * <p>The distribution of agents between the instance and its replica(s).</p>
   * @public
   */
  AgentConfig?: AgentConfig | undefined;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionResponse {}

/**
 * @public
 */
export interface UpdateUserHierarchyRequest {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about the hierarchy level to update.</p>
 * @public
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Contains information about the level hierarchy to update.</p>
 * @public
 */
export interface HierarchyStructureUpdate {
  /**
   * <p>The
   *    update
   *    for level one.</p>
   * @public
   */
  LevelOne?: HierarchyLevelUpdate | undefined;

  /**
   * <p>The update for level two.</p>
   * @public
   */
  LevelTwo?: HierarchyLevelUpdate | undefined;

  /**
   * <p>The update for level three.</p>
   * @public
   */
  LevelThree?: HierarchyLevelUpdate | undefined;

  /**
   * <p>The update for level four.</p>
   * @public
   */
  LevelFour?: HierarchyLevelUpdate | undefined;

  /**
   * <p>The update for level five.</p>
   * @public
   */
  LevelFive?: HierarchyLevelUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateUserHierarchyStructureRequest {
  /**
   * <p>The hierarchy levels to update.</p>
   * @public
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserIdentityInfoRequest {
  /**
   * <p>The identity information for the user.</p>
   * @public
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserPhoneConfigRequest {
  /**
   * <p>Information about phone configuration settings for the user.</p>
   * @public
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserProficienciesRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The proficiencies to be updated for the user. Proficiencies must first be associated to the
   *    user. You can do this using AssociateUserProficiencies API.</p>
   * @public
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserRoutingProfileRequest {
  /**
   * <p>The identifier of the routing profile for the user.</p>
   * @public
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserSecurityProfilesRequest {
  /**
   * <p>The identifiers of the security profiles for the user.</p>
   * @public
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewContentRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   * @public
   */
  Status: ViewStatus | undefined;

  /**
   * <p>View content containing all content necessary to render a view except for runtime input data
   *    and the runtime input schema, which is auto-generated by this operation.</p>
   *          <p>The total uncompressed content has a maximum file size of 400kB.</p>
   * @public
   */
  Content: ViewInputContent | undefined;
}

/**
 * @public
 */
export interface UpdateViewContentResponse {
  /**
   * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface UpdateViewMetadataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   * @public
   */
  ViewId: string | undefined;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateViewMetadataResponse {}

/**
 * <p>Information about an item from an evaluation form. The item must be either a section or a
 *    question.</p>
 * @public
 */
export type EvaluationFormItem =
  | EvaluationFormItem.QuestionMember
  | EvaluationFormItem.SectionMember
  | EvaluationFormItem.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationFormItem {
  /**
   * <p>The information of the section.</p>
   * @public
   */
  export interface SectionMember {
    Section: EvaluationFormSection;
    Question?: never;
    $unknown?: never;
  }

  /**
   * <p>The information of the question.</p>
   * @public
   */
  export interface QuestionMember {
    Section?: never;
    Question: EvaluationFormQuestion;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Section?: never;
    Question?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Section: (value: EvaluationFormSection) => T;
    Question: (value: EvaluationFormQuestion) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationFormItem, visitor: Visitor<T>): T => {
    if (value.Section !== undefined) return visitor.Section(value.Section);
    if (value.Question !== undefined) return visitor.Question(value.Question);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Information about a section from an evaluation form. A section can contain sections and/or
 *    questions. Evaluation forms can only contain sections and subsections (two level nesting).</p>
 * @public
 */
export interface EvaluationFormSection {
  /**
   * <p>The title of the section.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The identifier of the section. An identifier must be unique within the evaluation
   *    form.</p>
   * @public
   */
  RefId: string | undefined;

  /**
   * <p>The instructions of the section.</p>
   * @public
   */
  Instructions?: string | undefined;

  /**
   * <p>The items of the section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>The scoring weight of the section.</p>
   * @public
   */
  Weight?: number | undefined;
}

/**
 * <p>The search criteria to be used to return agent statuses.</p>
 * @public
 */
export interface AgentStatusSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: AgentStatusSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>state</code>, <code>type</code>, <code>displayOrder</code>,
   *     and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  AndConditions?: AgentStatusSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>state</code>, <code>type</code>, <code>displayOrder</code>,
   *     and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return flow modules.</p>
 * @public
 */
export interface ContactFlowModuleSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: ContactFlowModuleSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: ContactFlowModuleSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>The state of the flow.</p>
   * @public
   */
  StateCondition?: ContactFlowModuleState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  StatusCondition?: ContactFlowModuleStatus | undefined;
}

/**
 * <p>The search criteria to be used to return flows.</p>
 * @public
 */
export interface ContactFlowSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: ContactFlowSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  TypeCondition?: ContactFlowType | undefined;

  /**
   * <p>The state of the flow.</p>
   * @public
   */
  StateCondition?: ContactFlowState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  StatusCondition?: ContactFlowStatus | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The search criteria to be used to return email addresses.</p>
 * @public
 */
export interface EmailAddressSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: EmailAddressSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>Information about the evaluation form.</p>
 * @public
 */
export interface EvaluationForm {
  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   * @public
   */
  Locked: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The status of the evaluation form.</p>
   * @public
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>The timestamp for when the evaluation form was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   * @public
   */
  CreatedBy: string | undefined;

  /**
   * <p>The timestamp for when the evaluation form was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   * @public
   */
  LastModifiedBy: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Information about an evaluation form used in a contact evaluation.</p>
 * @public
 */
export interface EvaluationFormContent {
  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   * @public
   */
  EvaluationFormArn: string | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;
}

/**
 * <p>A tagged union to specify expression for a routing step.</p>
 * @public
 */
export interface Expression {
  /**
   * <p>An object to specify the predefined attribute condition.</p>
   * @public
   */
  AttributeCondition?: AttributeCondition | undefined;

  /**
   * <p>List of routing expressions which will be AND-ed together.</p>
   * @public
   */
  AndExpression?: Expression[] | undefined;

  /**
   * <p>List of routing expressions which will be OR-ed together.</p>
   * @public
   */
  OrExpression?: Expression[] | undefined;

  /**
   * <p>An object to specify the predefined attribute condition.</p>
   * @public
   */
  NotAttributeCondition?: AttributeCondition | undefined;
}

/**
 * <p>The search criteria to be used to return hours of operations overrides.</p>
 * @public
 */
export interface HoursOfOperationOverrideSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: HoursOfOperationOverrideSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: HoursOfOperationOverrideSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a date condition.</p>
   * @public
   */
  DateCondition?: DateCondition | undefined;
}

/**
 * <p>The search criteria to be used to return hours of operations.</p>
 * @public
 */
export interface HoursOfOperationSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: HoursOfOperationSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>timezone</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return predefined attributes.</p>
 * @public
 */
export interface PredefinedAttributeSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: PredefinedAttributeSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return prompts.</p>
 * @public
 */
export interface PromptSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: PromptSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: PromptSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return queues.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 * @public
 */
export interface QueueSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: QueueSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QueueSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypeCondition?: SearchableQueueType | undefined;
}

/**
 * <p>The search criteria to be used to return quick connects.</p>
 * @public
 */
export interface QuickConnectSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QuickConnectSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return routing profiles.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 * @public
 */
export interface RoutingProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: RoutingProfileSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are
   *      <code>associatedQueueIds</code>, <code>name</code>, <code>description</code>, and
   *      <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return security profiles.</p>
 *          <note>
 *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
 *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
 *     invalid results.</p>
 *          </note>
 * @public
 */
export interface SecurityProfileSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: SecurityProfileSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>A value for a segment attribute. This is structured as a map where the key is
 *     <code>valueString</code> and the value is a string.</p>
 * @public
 */
export interface SegmentAttributeValue {
  /**
   * <p>The value of a segment attribute.</p>
   * @public
   */
  ValueString?: string | undefined;

  /**
   * <p>The value of a segment attribute.</p>
   * @public
   */
  ValueMap?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>The value of a segment attribute.</p>
   * @public
   */
  ValueInteger?: number | undefined;

  /**
   * <p>The value of a segment attribute. This is only supported for system-defined attributes, not
   *    for user-defined attributes.</p>
   * @public
   */
  ValueList?: SegmentAttributeValue[] | undefined;

  /**
   * <p>The value of a segment attribute that has to be a valid ARN. This is only supported for
   *    system-defined attributes, not for user-defined attributes.</p>
   * @public
   */
  ValueArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form to update.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;

  /**
   * <p>A flag indicating whether the operation must create a new version.</p>
   * @public
   */
  CreateNewVersion?: boolean | undefined;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>The search criteria to be used to return userHierarchyGroup.</p>
 * @public
 */
export interface UserHierarchyGroupSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   * @public
   */
  OrConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: UserHierarchyGroupSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>parentId</code>, <code>levelId</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition | undefined;
}

/**
 * <p>The search criteria to be used to return users.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results.  </p>
 *          </note>
 * @public
 */
export interface UserSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: UserSearchCriteria[] | undefined;

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   * @public
   */
  AndConditions?: UserSearchCriteria[] | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <p>The currently supported values for <code>FieldName</code> are <code>Username</code>,
   *     <code>FirstName</code>, <code>LastName</code>, <code>RoutingProfileId</code>,
   *     <code>SecurityProfileId</code>, <code>ResourceId</code>.</p>
   * @public
   */
  StringCondition?: StringCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a List condition to search users with
   *    attributes included in Lists like Proficiencies.</p>
   * @public
   */
  ListCondition?: ListCondition | undefined;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * <p>Information about the evaluation form completed for a specific contact.</p>
   * @public
   */
  Evaluation: Evaluation | undefined;

  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * <p>Information about the evaluation form.</p>
   * @public
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * <p>Step defines the list of agents to be routed or route based on the agent requirements such
 *    as ProficiencyLevel, Name, or Value.</p>
 * @public
 */
export interface RoutingCriteriaInputStep {
  /**
   * <p>An object to specify the expiration of a routing step.</p>
   * @public
   */
  Expiry?: RoutingCriteriaInputStepExpiry | undefined;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression | undefined;
}

/**
 * @public
 */
export interface SearchAgentStatusesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: AgentStatusSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  SearchCriteria?: AgentStatusSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowModulesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowModuleSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return flow modules.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowModuleSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchContactFlowsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return flows.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchEmailAddressesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The search criteria to be used to return email addresses.</p>
   * @public
   */
  SearchCriteria?: EmailAddressSearchCriteria | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: EmailAddressSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationOverridesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return hours of operations overrides.</p>
   * @public
   */
  SearchCriteria?: HoursOfOperationOverrideSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return hours of operations.</p>
   * @public
   */
  SearchCriteria?: HoursOfOperationSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The search criteria to be used to return predefined attributes.</p>
   * @public
   */
  SearchCriteria?: PredefinedAttributeSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchPromptsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: PromptSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return prompts.</p>
   * @public
   */
  SearchCriteria?: PromptSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QueueSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: QueueSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchQuickConnectsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QuickConnectSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return quick connects.</p>
   * @public
   */
  SearchCriteria?: QuickConnectSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: RoutingProfileSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: RoutingProfileSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The search criteria to be used to return security profiles. </p>
   *          <note>
   *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
   *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
   *     invalid results.</p>
   *          </note>
   *          <note>
   *             <p>The currently supported value for <code>FieldName</code>: <code>name</code>
   *             </p>
   *          </note>
   * @public
   */
  SearchCriteria?: SecurityProfileSearchCriteria | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: SecurityProfilesSearchFilter | undefined;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserHierarchyGroupSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return UserHierarchyGroups.</p>
   * @public
   */
  SearchCriteria?: UserHierarchyGroupSearchCriteria | undefined;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserSearchFilter | undefined;

  /**
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   * @public
   */
  SearchCriteria?: UserSearchCriteria | undefined;
}

/**
 * <p>Step signifies the criteria to be used for routing to an agent</p>
 * @public
 */
export interface Step {
  /**
   * <p>An object to specify the expiration of a routing step.</p>
   * @public
   */
  Expiry?: Expiry | undefined;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression | undefined;

  /**
   * <p>Represents status of the Routing step.</p>
   * @public
   */
  Status?: RoutingCriteriaStepStatus | undefined;
}

/**
 * <p>The value of a segment attribute. This is structured as a map with a single key-value pair.
 *    The key 'valueString' indicates that the attribute type is a string, and its corresponding value
 *    is the actual string value of the segment attribute.</p>
 * @public
 */
export interface ContactSearchSummarySegmentAttributeValue {
  /**
   * <p>The value of a segment attribute represented as a string.</p>
   * @public
   */
  ValueString?: string | undefined;

  /**
   * <p>The key and value of a segment attribute.</p>
   * @public
   */
  ValueMap?: Record<string, SegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface CreateContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code> | <code>ATTACHMENT</code>.</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>The channel for the contact.</p>
   *          <important>
   *             <p>The CHAT channel is not supported. The following information is incorrect. We're working to
   *     correct it.</p>
   *          </important>
   * @public
   */
  Channel: Channel | undefined;

  /**
   * <p>Indicates how the contact was initiated. </p>
   *          <important>
   *             <p>CreateContact only supports the following initiation methods. Valid values by channel are: </p>
   *             <ul>
   *                <li>
   *                   <p>For VOICE: <code>TRANSFER</code> and the subtype <code>connect:ExternalAudio</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>For EMAIL: <code>OUTBOUND</code> | <code>AGENT_REPLY</code> | <code>FLOW</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>For TASK: <code>API</code>
   *                   </p>
   *                </li>
   *             </ul>
   *             <p>The other channels listed below are incorrect. We're working to correct this
   *     information.</p>
   *          </important>
   * @public
   */
  InitiationMethod: ContactInitiationMethod | undefined;

  /**
   * <p>Number of minutes the contact will be active for before expiring</p>
   * @public
   */
  ExpiryDurationInMinutes?: number | undefined;

  /**
   * <p>User details for the contact</p>
   *          <important>
   *             <p>UserInfo is required when creating an EMAIL contact with <code>OUTBOUND</code> and
   *      <code>AGENT_REPLY</code> contact initiation methods.</p>
   *          </important>
   * @public
   */
  UserInfo?: UserInfo | undefined;

  /**
   * <p>Initial state of the contact when it's created. Only TASK channel contacts can be initiated
   *    with <code>COMPLETED</code> state.</p>
   * @public
   */
  InitiateAs?: InitiateAs | undefined;

  /**
   * <p>The name of a the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description of the contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments (unique
   *    contact ID) using an attribute map. The attributes are standard Amazon Connect attributes.
   *    They can be accessed in flows.</p>
   *          <p>Attribute keys can include only alphanumeric, -, and _.</p>
   *          <p>This field can be used to set Segment Contact Expiry as a duration in minutes.</p>
   *          <note>
   *             <p>To set contact expiry, a ValueMap must be specified containing the integer number of
   *     minutes the contact will be active for before expiring, with <code>SegmentAttributes</code> like
   *     \{ <code> "connect:ContactExpiry": \{"ValueMap" : \{ "ExpiryDuration": \{ "ValueInteger":
   *      135\}\}\}\}</code>. </p>
   *          </note>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>The ID of the previous contact when creating a transfer contact. This value can be provided
   *    only for external audio contacts. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html">Integrate Amazon Connect Contact Lens
   *     with external voice systems</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  PreviousContactId?: string | undefined;
}

/**
 * @public
 */
export interface StartChatContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow for initiating the chat.
   *    To
   *    see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to <b>Routing</b>, <b>Flows</b>. Choose the flow. On the flow page,
   *    under the name of the flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>Information identifying the participant.</p>
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The initial message to be sent to the newly created chat.</p>
   * @public
   */
  InitialMessage?: ChatMessage | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   * @public
   */
  ChatDurationInMinutes?: number | undefined;

  /**
   * <p>The supported chat message content types. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>,
   *     <code>application/vnd.amazonaws.connect.message.interactive</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p>
   *          <p>Content types must always contain <code>text/plain</code>. You can then put any other
   *    supported type in the list. For example, all the following lists are valid because they contain
   *     <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>,
   *     <code>[text/markdown, text/plain]</code>, <code>[text/plain, application/json,
   *     application/vnd.amazonaws.connect.message.interactive.response]</code>. </p>
   *          <note>
   *             <p>The type <code>application/vnd.amazonaws.connect.message.interactive</code> is required to
   *     use the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/show-view-block.html">Show
   *      view</a> flow block.</p>
   *          </note>
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * <p>Enable persistent chats. For more information about enabling persistent chat, and for
   *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
   * @public
   */
  PersistentChat?: PersistentChat | undefined;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    chat starting.</p>
   *          <note>
   *             <p>You cannot provide data for both RelatedContactId and PersistentChat. </p>
   *          </note>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in
   *    flows.</p>
   *          <p>Attribute keys can include only alphanumeric, -, and _.</p>
   *          <p>This field can be used to show channel subtype, such as <code>connect:Guide</code>.</p>
   *          <note>
   *             <p>The types <code>application/vnd.amazonaws.connect.message.interactive</code> and
   *      <code>application/vnd.amazonaws.connect.message.interactive.response</code> must be present in
   *     the SupportedMessagingContentTypes field of this API in order to set
   *      <code>SegmentAttributes</code> as \{<code> "connect:Subtype": \{"valueString" : "connect:Guide"
   *      \}\}</code>.</p>
   *          </note>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>The customer's identification number. For example, the <code>CustomerId</code> may be a
   *    customer number from your CRM.</p>
   * @public
   */
  CustomerId?: string | undefined;
}

/**
 * @public
 */
export interface StartEmailContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The email address of the customer.</p>
   * @public
   */
  FromEmailAddress: EmailAddressInfo | undefined;

  /**
   * <p>The email address associated with the Amazon Connect instance.</p>
   * @public
   */
  DestinationEmailAddress: string | undefined;

  /**
   * <p>A description of the email contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Emails can
   *    have the following reference types at the time of creation: <code>URL</code> |
   *     <code>NUMBER</code> | <code>STRING</code> | <code>DATE</code>. <code>EMAIL</code> |
   *     <code>EMAIL_MESSAGE</code> |<code>ATTACHMENT</code> are not a supported reference type during
   *    email creation.</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>The name of a email that is shown to an agent in the Contact Control Panel (CCP).</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The email message body to be sent to the newly created email.</p>
   * @public
   */
  EmailMessage: InboundEmailContent | undefined;

  /**
   * <p>The additional recipients address of the email.</p>
   * @public
   */
  AdditionalRecipients?: InboundAdditionalRecipients | undefined;

  /**
   * <p>List of S3 presigned URLs of email attachments and their file name. </p>
   * @public
   */
  Attachments?: EmailAttachment[] | undefined;

  /**
   * <p>The identifier of the flow for initiating the emails. To see the ContactFlowId in the Amazon Connect admin website,
   *    on the navigation menu go to <b>Routing</b>, <b>Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>The contactId that is related to this contact. Linking emails together by using
   *     <code>RelatedContactID</code> copies over contact attributes from the related email contact to
   *    the new email contact. All updates to user-defined attributes in the new email contact are
   *    limited to the individual contact ID. There are no limits to the number of contacts that can be
   *    linked by using <code>RelatedContactId</code>. </p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in
   *    flows.</p>
   *          <p>Attribute keys can include only alphanumeric, -, and _.</p>
   *          <p>This field can be used to show channel subtype, such as <code>connect:Guide</code>.</p>
   *          <note>
   *             <p>To set contact expiry, a <code>ValueMap</code> must be specified containing the integer
   *     number of minutes the contact will be active for before expiring, with
   *      <code>SegmentAttributes</code> like \{ <code> "connect:ContactExpiry": \{"ValueMap" : \{
   *      "ExpiryDuration": \{ "ValueInteger":135\}\}\}\}</code>.</p>
   *          </note>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartOutboundChatContactRequest {
  /**
   * <p>Information about the endpoint.</p>
   * @public
   */
  SourceEndpoint: Endpoint | undefined;

  /**
   * <p>Information about the endpoint.</p>
   * @public
   */
  DestinationEndpoint: Endpoint | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in
   *    flows.</p>
   *          <ul>
   *             <li>
   *                <p>Attribute keys can include only alphanumeric, <code>-</code>, and <code>_</code>.</p>
   *             </li>
   *             <li>
   *                <p>This field can be used to show channel subtype, such as <code>connect:Guide</code> and
   *       <code>connect:SMS</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SegmentAttributes: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect
   *    console user interface, on the navigation menu go to <b>Routing, Contact
   *     Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold:</p>
   *          <ul>
   *             <li>
   *                <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>123ec456-a007-89c0-1234-xxxxxxxxxxxx</b>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   * @public
   */
  ChatDurationInMinutes?: number | undefined;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails?: ParticipantDetails | undefined;

  /**
   * <p>A chat message.</p>
   * @public
   */
  InitialSystemMessage?: ChatMessage | undefined;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    contact starting.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>The supported chat message content types. Supported types are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>text/plain</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>text/markdown</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/json,
   *      application/vnd.amazonaws.connect.message.interactive</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>application/vnd.amazonaws.connect.message.interactive.response</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Content types must always contain <code>text/plain</code>. You can then put any other
   *    supported type in the list. For example, all the following lists are valid because they contain
   *     <code>text/plain</code>:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>[text/plain, text/markdown, application/json]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>[text/markdown, text/plain]</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>[text/plain, application/json,
   *       application/vnd.amazonaws.connect.message.interactive.response]</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  SupportedMessagingContentTypes?: string[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request. If not provided, the AWS SDK populates this field. For more information about
   *    idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making
   *     retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a
   *    contact is already started, the contact ID is returned.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartTaskContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the previous chat, voice, or task contact. Any updates to user-defined
   *    attributes to task contacts linked using the same <code>PreviousContactID</code> will affect
   *    every contact in the chain. There can be a maximum of 12 linked task contacts in a chain.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect admin website,
   *    on the navigation menu go to <b>Routing</b>, <b>Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId?: string | undefined;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>. <code>ATTACHMENT</code> is not a
   *    supported reference type during task creation.</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   * @public
   */
  ScheduledTime?: Date | undefined;

  /**
   * <p>A unique identifier for the task template. For more information about task templates, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html">Create task templates</a> in the
   *      <i>Amazon Connect Administrator Guide</i>. </p>
   * @public
   */
  TaskTemplateId?: string | undefined;

  /**
   * <p>The identifier for the quick connect. Tasks that are created by using <code>QuickConnectId</code> will use the
   *    flow that is defined on agent or queue quick connect. For more information about quick connects,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html">Create quick
   *     connects</a>.</p>
   * @public
   */
  QuickConnectId?: string | undefined;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact. Linking
   *    tasks together by using <code>RelatedContactID</code> copies over contact attributes from the
   *    related task contact to the new task contact. All updates to user-defined attributes in the new
   *    task contact are limited to the individual contact ID, unlike what happens when tasks are linked
   *    by using <code>PreviousContactID</code>. There are no limits to the number of contacts that can
   *    be linked by using <code>RelatedContactId</code>. </p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments (unique
   *    contact ID) using an attribute map. The attributes are standard Amazon Connect attributes.
   *    They can be accessed in flows.</p>
   *          <p>Attribute keys can include only alphanumeric, -, and _.</p>
   *          <p>This field can be used to set Contact Expiry as a duration in minutes and set a UserId for
   *    the User who created a task.</p>
   *          <note>
   *             <p>To set contact expiry, a ValueMap must be specified containing the integer number of
   *     minutes the contact will be active for before expiring, with <code>SegmentAttributes</code> like
   *     \{ <code> "connect:ContactExpiry": \{"ValueMap" : \{ "ExpiryDuration": \{ "ValueInteger":
   *      135\}\}\}\}</code>. </p>
   *             <p>To set the created by user, a valid AgentResourceId must be supplied, with
   *      <code>SegmentAttributes</code> like \{ <code>"connect:CreatedByUser" \{ "ValueString":
   *      "arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/agent/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"\}\}\}</code>.
   *    </p>
   *          </note>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;
}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with your contact center.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Well-formed data on contact, shown to agents on Contact Control Panel (CCP).</p>
   * @public
   */
  References?: Record<string, Reference> | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments (unique
   *    contact ID) using an attribute map. The attributes are standard Amazon Connect attributes.
   *    They can be accessed in flows.</p>
   *          <p>Attribute keys can include only alphanumeric, -, and _.</p>
   *          <p>This field can be used to show channel subtype, such as <code>connect:Guide</code>.</p>
   *          <p>Contact Expiry, and user-defined attributes (String - String) that are defined in predefined
   *    attributes, can be updated by using the UpdateContact API.</p>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p> Information about the queue associated with a contact. This parameter can only be updated
   *    for external audio contacts. It is used when you integrate third-party systems with Contact Lens for
   *    analytics. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html">Amazon Connect Contact Lens integration</a> in
   *    the <i>
   *     Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  QueueInfo?: QueueInfoInput | undefined;

  /**
   * <p>Information about the agent associated with a contact. This parameter can only be updated
   *    for external audio contacts. It is used when you integrate third-party systems with Contact Lens for
   *    analytics. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html">Amazon Connect Contact Lens integration</a> in
   *    the <i>
   *     Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  UserInfo?: UserInfo | undefined;

  /**
   * <p>The endpoint of the customer for which the contact was initiated. For external audio
   *    contacts, this is usually the end customer's phone number. This value can only be updated for
   *    external audio contacts. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html">Amazon Connect Contact Lens
   *     integration</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  CustomerEndpoint?: Endpoint | undefined;

  /**
   * <p>External system endpoint for the contact was initiated. For external audio contacts, this is
   *    the phone number of the external system such as the contact center. This value can only be
   *    updated for external audio contacts. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens-integration.html">Amazon Connect Contact Lens
   *     integration</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  SystemEndpoint?: Endpoint | undefined;
}

/**
 * <p>Latest routing criteria on the contact.</p>
 * @public
 */
export interface RoutingCriteria {
  /**
   * <p>List of routing steps. When Amazon Connect does not find an available agent meeting the
   *    requirements in a step for a given step duration, the routing criteria will move on to the next
   *    step sequentially until a join is completed with an agent. When all steps are exhausted, the
   *    contact will be offered to any agent in the queue.</p>
   * @public
   */
  Steps?: Step[] | undefined;

  /**
   * <p>The timestamp indicating when the routing criteria is set to active. A routing criteria is
   *    activated when contact is transferred to a queue. ActivationTimestamp will be set on routing
   *    criteria for contacts in agent queue even though Routing criteria is never activated for contacts
   *    in agent queue.</p>
   * @public
   */
  ActivationTimestamp?: Date | undefined;

  /**
   * <p>Information about the index of the routing criteria.</p>
   * @public
   */
  Index?: number | undefined;
}

/**
 * <p>An object to define the RoutingCriteria.</p>
 * @public
 */
export interface RoutingCriteriaInput {
  /**
   * <p>When Amazon Connect does not find an available agent meeting the requirements in a step
   *    for  a given step duration, the routing criteria will move on to the next step sequentially until
   *    a  join is completed with an agent. When all steps are exhausted, the contact will be offered to
   *    any agent in the queue.</p>
   * @public
   */
  Steps?: RoutingCriteriaInputStep[] | undefined;
}

/**
 * @public
 */
export interface UpdateContactRoutingDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The number of seconds to add or subtract from the contact's routing age. Contacts are routed
   *    to agents on a first-come, first-serve basis. This means that changing their amount of time in
   *    queue compared to others also changes their position in queue.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>Priority of the contact in the queue. The default priority for new contacts is 5. You can
   *    raise the priority of a contact compared to other contacts in the queue by assigning them a
   *    higher priority, such as 1 or 2.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Updates the routing criteria on the contact. These properties can be used to change how a
   *    contact is routed within the queue.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteriaInput | undefined;
}

/**
 * <p>Contains information about a contact.</p>
 * @public
 */
export interface Contact {
  /**
   * <p>The Amazon Resource Name (ARN) for the contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier for the contact.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p>This is the root contactId which is used as a unique identifier for all subsequent contacts
   *    in a contact tree.</p>
   * @public
   */
  ContactAssociationId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>The name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>If this contact was queued, this contains information about the queue. </p>
   * @public
   */
  QueueInfo?: QueueInfo | undefined;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: AgentInfo | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For <code>API</code>,
   *    this is when the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent
   *    started dialing the external participant. For <code>MONITOR</code>, this is when the supervisor
   *    started listening to a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The date and time that the customer endpoint disconnected from the current contact, in UTC
   *    time. In transfer scenarios, the DisconnectTimestamp of the previous contact indicates the date
   *    and time when that contact ended.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when contact was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last paused.</p>
   * @public
   */
  LastPausedTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the contact was last resumed.</p>
   * @public
   */
  LastResumedTimestamp?: Date | undefined;

  /**
   * <p>Total pause count for a contact.</p>
   * @public
   */
  TotalPauseCount?: number | undefined;

  /**
   * <p>Total pause duration for a contact in seconds.</p>
   * @public
   */
  TotalPauseDurationInSeconds?: number | undefined;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *   </p>
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this
   *    contact.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

  /**
   * <p>Information about Amazon Connect Wisdom.</p>
   * @public
   */
  WisdomInfo?: WisdomInfo | undefined;

  /**
   * <p>The customer's identification number. For example, the <code>CustomerId</code> may be a
   *    customer number from your CRM. You can create a Lambda function to pull the unique customer ID of
   *    the caller from your CRM system. If you enable Amazon Connect Voice ID capability, this
   *    attribute is populated with the <code>CustomerSpeakerId</code> of the caller.</p>
   * @public
   */
  CustomerId?: string | undefined;

  /**
   * <p>The customer or external third party participant endpoint.</p>
   * @public
   */
  CustomerEndpoint?: EndpointInfo | undefined;

  /**
   * <p>The system endpoint. For <code>INBOUND</code>, this is the phone number or email address
   *    that the customer dialed. For <code>OUTBOUND</code> and <code>EXTERNAL_OUTBOUND</code>, this is
   *    the outbound caller ID number assigned to the outbound queue that is used to dial the customer.
   *    For callback, this shows up as Softphone for calls handled by agents with softphone.</p>
   * @public
   */
  SystemEndpoint?: EndpointInfo | undefined;

  /**
   * <p>An integer that represents the queue time adjust to be applied to the contact, in seconds
   *    (longer / larger queue time are routed preferentially). Cannot be specified if the QueuePriority
   *    is specified. Must be statically defined and a valid integer value.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number | undefined;

  /**
   * <p>An integer that represents the queue priority to be applied to the contact (lower priorities
   *    are routed preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified.
   *    Must be statically defined, must be larger than zero, and a valid integer value. Default Value is
   *    5.</p>
   * @public
   */
  QueuePriority?: number | undefined;

  /**
   * <p>Tags associated with the contact. This contains both Amazon Web Services generated and
   *    user-defined tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when customer endpoint connected to Amazon Connect.</p>
   * @public
   */
  ConnectedToSystemTimestamp?: Date | undefined;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;

  /**
   * <p>Information about the Customer on the contact.</p>
   * @public
   */
  Customer?: Customer | undefined;

  /**
   * <p>Information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign | undefined;

  /**
   * <p>Indicates how an <a href="https://docs.aws.amazon.com/connect/latest/adminguide/how-to-create-campaigns.html">outbound campaign</a> call is
   *    actually disposed if the contact is connected to Amazon Connect.</p>
   * @public
   */
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus | undefined;

  /**
   * <p>Information about customer’s voice activity.</p>
   * @public
   */
  CustomerVoiceActivity?: CustomerVoiceActivity | undefined;

  /**
   * <p>Information about the quality of the participant's media connection.</p>
   * @public
   */
  QualityMetrics?: QualityMetrics | undefined;

  /**
   * <p>Information about how agent, bot, and customer interact in a chat contact.</p>
   * @public
   */
  ChatMetrics?: ChatMetrics | undefined;

  /**
   * <p>Information about the call disconnect experience.</p>
   * @public
   */
  DisconnectDetails?: DisconnectDetails | undefined;

  /**
   * <p>List of additional email addresses for an email contact.</p>
   * @public
   */
  AdditionalEmailRecipients?: AdditionalEmailRecipients | undefined;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes and can be accessed in
   *    flows. Attribute keys can include only alphanumeric, -, and _ characters. This field can be used
   *    to show channel subtype. For example, <code>connect:Guide</code> or
   *    <code>connect:SMS</code>.</p>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue> | undefined;

  /**
   * <p>If recording was enabled, this is information about the recordings.</p>
   * @public
   */
  Recordings?: RecordingInfo[] | undefined;

  /**
   * <p>The disconnect reason for the contact.</p>
   * @public
   */
  DisconnectReason?: string | undefined;

  /**
   * <p>Information about the contact evaluations where the key is the FormId, which is a unique
   *    identifier for the form.</p>
   * @public
   */
  ContactEvaluations?: Record<string, ContactEvaluation> | undefined;

  /**
   * <p>A map of string key/value pairs that contain user-defined attributes which are lightly typed
   *    within the contact. This object is used only for task contacts.</p>
   * @public
   */
  ContactDetails?: ContactDetails | undefined;

  /**
   * <p>The attributes of the contact.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * <p>Information of returned contact.</p>
 * @public
 */
export interface ContactSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the contact summary.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string | undefined;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string | undefined;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod | undefined;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>If this contact was queued, this contains information about the queue.</p>
   * @public
   */
  QueueInfo?: ContactSearchSummaryQueueInfo | undefined;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: ContactSearchSummaryAgentInfo | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For API, this is when
   *    the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent started dialing
   *    the external participant. For <code>MONITOR</code>, this is when the supervisor started listening
   *    to a contact.</p>
   * @public
   */
  InitiationTimestamp?: Date | undefined;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   * @public
   */
  DisconnectTimestamp?: Date | undefined;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</p>
   * @public
   */
  ScheduledTimestamp?: Date | undefined;

  /**
   * <p>Set of segment attributes for a contact.</p>
   * @public
   */
  SegmentAttributes?: Record<string, ContactSearchSummarySegmentAttributeValue> | undefined;

  /**
   * <p>Indicates name of the contact.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria | undefined;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   * @public
   */
  Contact?: Contact | undefined;
}

/**
 * @public
 */
export interface SearchContactsResponse {
  /**
   * <p>Information about the contacts.</p>
   * @public
   */
  Contacts: ContactSearchSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of contacts which matched your search query.</p>
   * @public
   */
  TotalCount?: number | undefined;
}

/**
 * @internal
 */
export const UpdateEmailAddressMetadataRequestFilterSensitiveLog = (obj: UpdateEmailAddressMetadataRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateParticipantAuthenticationRequestFilterSensitiveLog = (
  obj: UpdateParticipantAuthenticationRequest
): any => ({
  ...obj,
  ...(obj.Code && { Code: SENSITIVE_STRING }),
  ...(obj.Error && { Error: SENSITIVE_STRING }),
  ...(obj.ErrorDescription && { ErrorDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateUserIdentityInfoRequestFilterSensitiveLog = (obj: UpdateUserIdentityInfoRequest): any => ({
  ...obj,
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const UpdateViewContentRequestFilterSensitiveLog = (obj: UpdateViewContentRequest): any => ({
  ...obj,
  ...(obj.Content && { Content: ViewInputContentFilterSensitiveLog(obj.Content) }),
});

/**
 * @internal
 */
export const UpdateViewContentResponseFilterSensitiveLog = (obj: UpdateViewContentResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});

/**
 * @internal
 */
export const UpdateViewMetadataRequestFilterSensitiveLog = (obj: UpdateViewMetadataRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateContactRequestFilterSensitiveLog = (obj: CreateContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartChatContactRequestFilterSensitiveLog = (obj: StartChatContactRequest): any => ({
  ...obj,
  ...(obj.CustomerId && { CustomerId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartEmailContactRequestFilterSensitiveLog = (obj: StartEmailContactRequest): any => ({
  ...obj,
  ...(obj.FromEmailAddress && { FromEmailAddress: EmailAddressInfoFilterSensitiveLog(obj.FromEmailAddress) }),
  ...(obj.DestinationEmailAddress && { DestinationEmailAddress: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.EmailMessage && { EmailMessage: InboundEmailContentFilterSensitiveLog(obj.EmailMessage) }),
  ...(obj.AdditionalRecipients && {
    AdditionalRecipients: InboundAdditionalRecipientsFilterSensitiveLog(obj.AdditionalRecipients),
  }),
  ...(obj.Attachments && { Attachments: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartTaskContactRequestFilterSensitiveLog = (obj: StartTaskContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateContactRequestFilterSensitiveLog = (obj: UpdateContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ContactSearchSummaryFilterSensitiveLog = (obj: ContactSearchSummary): any => ({
  ...obj,
  ...(obj.SegmentAttributes && { SegmentAttributes: SENSITIVE_STRING }),
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeContactResponseFilterSensitiveLog = (obj: DescribeContactResponse): any => ({
  ...obj,
  ...(obj.Contact && { Contact: ContactFilterSensitiveLog(obj.Contact) }),
});

/**
 * @internal
 */
export const SearchContactsResponseFilterSensitiveLog = (obj: SearchContactsResponse): any => ({
  ...obj,
  ...(obj.Contacts && { Contacts: obj.Contacts.map((item) => ContactSearchSummaryFilterSensitiveLog(item)) }),
});
