// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  AgentAvailabilityTimer,
  AgentConfig,
  AgentContactReference,
  AgentQualityMetrics,
  AgentsCriteria,
  AgentStatus,
  AgentStatusIdentifier,
  AgentStatusReference,
  AgentStatusSummary,
  AgentStatusType,
  AliasConfiguration,
  AnalyticsDataAssociationResult,
  AudioQualityMetricsInfo,
  Channel,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ContactState,
  CreatedByInfo,
  DeviceInfo,
  DirectoryType,
  Distribution,
  EndpointType,
  FileStatusType,
  FileUseCaseType,
  FlowAssociationResourceType,
  HoursOfOperationConfig,
  HoursOfOperationOverrideConfig,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  LexBot,
  LexV2Bot,
  MediaConcurrency,
  OutboundCallerConfig,
  OutboundEmailConfig,
  OverrideTimeSlice,
  ParticipantCapabilities,
  PredefinedAttributeValues,
  QueueReference,
  QuickConnectConfig,
  RoutingProfileQueueReference,
  RuleAction,
  RulePublishStatus,
  RuleTriggerEventSource,
  StorageType,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserPhoneConfig,
  View,
  ViewFilterSensitiveLog,
  VocabularyLanguageCode,
} from "./models_0";

/**
 * @public
 */
export interface CreateViewResponse {
  /**
   * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
   * @public
   */
  View?: View | undefined;
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
  PHONE_NUMBER: "PHONE_NUMBER",
  USER: "USER",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>That resource is already in use (for example, you're trying to add a record with the same
 *    name as an existing record). If you are trying to delete a resource (for example,
 *    DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources
 *    and then try again.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>The identifier for the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;
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
 * <p>Displayed when rate-related API limits are exceeded.</p>
 * @public
 */
export class TooManyRequestsException extends __BaseException {
  readonly name: "TooManyRequestsException" = "TooManyRequestsException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyRequestsException, __BaseException>) {
    super({
      name: "TooManyRequestsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateViewVersionRequest {
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
   * <p>The description for the version being published.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>Indicates the checksum value of the latest published view content.</p>
   * @public
   */
  ViewContentSha256?: string | undefined;
}

/**
 * @public
 */
export interface CreateViewVersionResponse {
  /**
   * <p>All view data is contained within the View object.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface CreateVocabularyRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. If a create request is received more than once with same client token,
   *    subsequent requests return the previous response without creating a vocabulary again.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  VocabularyName: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. The size limit is 50KB. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   * @public
   */
  Content: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormRequest {
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
   * <p>A version of the evaluation form. If the version property is not provided, the latest version of the
   *    evaluation form is deactivated.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface DeactivateEvaluationFormResponse {
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
   * <p>The version of the deactivated evaluation form resource.</p>
   * @public
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * Request to DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileRequest {
  /**
   * <p>The unique identifier of the Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * Response from DeleteAttachedFile API
 * @public
 */
export interface DeleteAttachedFileResponse {}

/**
 * @public
 */
export interface DeleteContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
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
export interface DeleteContactFlowVersionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  ContactFlowVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteContactFlowVersionResponse {}

/**
 * @public
 */
export interface DeleteEmailAddressRequest {
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
}

/**
 * @public
 */
export interface DeleteEmailAddressResponse {}

/**
 * @public
 */
export interface DeleteEvaluationFormRequest {
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
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion?: number | undefined;
}

/**
 * @public
 */
export interface DeleteHoursOfOperationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteHoursOfOperationOverrideRequest {
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
}

/**
 * @public
 */
export interface DeleteInstanceRequest {
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
}

/**
 * @public
 */
export interface DeleteIntegrationAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;
}

/**
 * @public
 */
export interface DeletePredefinedAttributeRequest {
  /**
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p> The name of the predefined attribute.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
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
}

/**
 * @public
 */
export interface DeletePushNotificationRegistrationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the
   *    Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the registration.</p>
   * @public
   */
  RegistrationId: string | undefined;

  /**
   * <p>The identifier of the contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DeletePushNotificationRegistrationResponse {}

/**
 * @public
 */
export interface DeleteQueueRequest {
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
}

/**
 * @public
 */
export interface DeleteQuickConnectRequest {
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
}

/**
 * @public
 */
export interface DeleteRoutingProfileRequest {
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
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityProfileRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the security profle.</p>
   * @public
   */
  SecurityProfileId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
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
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the integration association.</p>
   * @public
   */
  IntegrationAssociationId: string | undefined;

  /**
   * <p>The identifier for the use case.</p>
   * @public
   */
  UseCaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserHierarchyGroupRequest {
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
 * @public
 */
export interface DeleteViewRequest {
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
}

/**
 * @public
 */
export interface DeleteViewResponse {}

/**
 * @public
 */
export interface DeleteViewVersionRequest {
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
   * <p>The version number of the view.</p>
   * @public
   */
  ViewVersion: number | undefined;
}

/**
 * @public
 */
export interface DeleteViewVersionResponse {}

/**
 * @public
 */
export interface DeleteVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVocabularyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  VocabularyArn: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAgentStatusResponse {
  /**
   * <p>The agent status.</p>
   * @public
   */
  AgentStatus?: AgentStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileRequest {
  /**
   * <p>A unique identifier for the authentication profile. </p>
   * @public
   */
  AuthenticationProfileId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>Information about an authentication profile. An authentication profile is a resource that
 *    stores the authentication settings for users in your contact center. You use authentication
 *    profiles to set up IP address range restrictions and session timeouts. For more information, see
 *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html">Set IP
 *     address restrictions or session timeouts</a>. </p>
 * @public
 */
export interface AuthenticationProfile {
  /**
   * <p>A unique identifier for the authentication profile. </p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the authentication profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name for the authentication profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the authentication profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of IP address range strings that are allowed to access the Amazon Connect
   *    instance. For more information about how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure IP
   *     address based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  AllowedIps?: string[] | undefined;

  /**
   * <p>A list of IP address range strings that are blocked from accessing the Amazon Connect
   *    instance. For more information about how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure IP
   *     address based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  BlockedIps?: string[] | undefined;

  /**
   * <p>Shows whether the authentication profile is the default authentication profile for the
   *     Amazon Connect instance. The default authentication profile applies to all agents in an
   *     Amazon Connect instance, unless overridden by another authentication profile.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The timestamp when the authentication profile was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The timestamp when the authentication profile was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where the authentication profile was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * <p>The short lived session duration configuration for users logged in to Amazon Connect, in
   *    minutes. This value determines the maximum possible time before an agent is authenticated. For
   *    more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure the session duration</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  PeriodicSessionDuration?: number | undefined;

  /**
   * <p>The long lived session duration for users logged in to Amazon Connect, in minutes. After
   *    this time period, users must log in again. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure the session duration</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  MaxSessionDuration?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAuthenticationProfileResponse {
  /**
   * <p>The authentication profile object being described.</p>
   * @public
   */
  AuthenticationProfile?: AuthenticationProfile | undefined;
}

/**
 * @public
 */
export interface DescribeContactRequest {
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
}

/**
 * @public
 * @enum
 */
export const AnsweringMachineDetectionStatus = {
  AMD_ERROR: "AMD_ERROR",
  AMD_NOT_APPLICABLE: "AMD_NOT_APPLICABLE",
  AMD_UNANSWERED: "AMD_UNANSWERED",
  AMD_UNRESOLVED: "AMD_UNRESOLVED",
  ANSWERED: "ANSWERED",
  ERROR: "ERROR",
  FAX_MACHINE_DETECTED: "FAX_MACHINE_DETECTED",
  HUMAN_ANSWERED: "HUMAN_ANSWERED",
  SIT_TONE_BUSY: "SIT_TONE_BUSY",
  SIT_TONE_DETECTED: "SIT_TONE_DETECTED",
  SIT_TONE_INVALID_NUMBER: "SIT_TONE_INVALID_NUMBER",
  UNDETECTED: "UNDETECTED",
  VOICEMAIL_BEEP: "VOICEMAIL_BEEP",
  VOICEMAIL_NO_BEEP: "VOICEMAIL_NO_BEEP",
} as const;

/**
 * @public
 */
export type AnsweringMachineDetectionStatus =
  (typeof AnsweringMachineDetectionStatus)[keyof typeof AnsweringMachineDetectionStatus];

/**
 * @public
 * @enum
 */
export const ParticipantType = {
  AGENT: "AGENT",
  ALL: "ALL",
  CUSTOMER: "CUSTOMER",
  MANAGER: "MANAGER",
  THIRDPARTY: "THIRDPARTY",
} as const;

/**
 * @public
 */
export type ParticipantType = (typeof ParticipantType)[keyof typeof ParticipantType];

/**
 * <p>Information about a participant's interactions in a contact.</p>
 * @public
 */
export interface ParticipantMetrics {
  /**
   * <p>The Participant's ID.</p>
   * @public
   */
  ParticipantId?: string | undefined;

  /**
   * <p>Information about the conversation participant. Following are the participant types: [Agent,
   *    Customer, Supervisor].</p>
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * <p>A boolean flag indicating whether the chat conversation was abandoned by a
   *    Participant.</p>
   * @public
   */
  ConversationAbandon?: boolean | undefined;

  /**
   * <p>Number of chat messages sent by Participant.</p>
   * @public
   */
  MessagesSent?: number | undefined;

  /**
   * <p>Number of chat messages sent by Participant.</p>
   * @public
   */
  NumResponses?: number | undefined;

  /**
   * <p>Number of chat characters sent by Participant.</p>
   * @public
   */
  MessageLengthInChars?: number | undefined;

  /**
   * <p>Total chat response time by Participant.</p>
   * @public
   */
  TotalResponseTimeInMillis?: number | undefined;

  /**
   * <p>Maximum chat response time by Participant.</p>
   * @public
   */
  MaxResponseTimeInMillis?: number | undefined;

  /**
   * <p>Timestamp of last chat message by Participant.</p>
   * @public
   */
  LastMessageTimestamp?: Date | undefined;
}

/**
 * <p>Information about the overall participant interactions at the contact level.</p>
 * @public
 */
export interface ChatContactMetrics {
  /**
   * <p>A boolean flag indicating whether multiparty chat or supervisor barge were enabled on this
   *    contact.</p>
   * @public
   */
  MultiParty?: boolean | undefined;

  /**
   * <p>The number of chat messages on the contact.</p>
   * @public
   */
  TotalMessages?: number | undefined;

  /**
   * <p>The total number of bot and automated messages on a chat contact.</p>
   * @public
   */
  TotalBotMessages?: number | undefined;

  /**
   * <p>The total number of characters from bot and automated messages on a chat contact.</p>
   * @public
   */
  TotalBotMessageLengthInChars?: number | undefined;

  /**
   * <p>The time it took for a contact to end after the last customer message.</p>
   * @public
   */
  ConversationCloseTimeInMillis?: number | undefined;

  /**
   * <p>The number of conversation turns in a chat contact, which represents the back-and-forth
   *    exchanges between customer and other participants.</p>
   * @public
   */
  ConversationTurnCount?: number | undefined;

  /**
   * <p>The agent first response timestamp for a chat contact.</p>
   * @public
   */
  AgentFirstResponseTimestamp?: Date | undefined;

  /**
   * <p>The time for an agent to respond after obtaining a chat contact.</p>
   * @public
   */
  AgentFirstResponseTimeInMillis?: number | undefined;
}

/**
 * <p>Information about how agent, bot, and customer interact in a chat contact.</p>
 * @public
 */
export interface ChatMetrics {
  /**
   * <p>Information about the overall participant interactions at the contact level.</p>
   * @public
   */
  ChatContactMetrics?: ChatContactMetrics | undefined;

  /**
   * <p>Information about agent interactions in a contact.</p>
   * @public
   */
  AgentMetrics?: ParticipantMetrics | undefined;

  /**
   * <p>Information about customer interactions in a contact.</p>
   * @public
   */
  CustomerMetrics?: ParticipantMetrics | undefined;
}

/**
 * <p>A map of string key/value pairs that contain user-defined attributes which are lightly typed
 *    within the contact. This object is used only for task contacts. </p>
 * @public
 */
export interface ContactDetails {
  /**
   * <p>The name of the contact details.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Teh description of the contact details.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Status = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * <p>Information about the contact evaluations where the key is the FormId, which is a unique
 *    identifier for the form.</p>
 * @public
 */
export interface ContactEvaluation {
  /**
   * <p>The <code>FormId</code> of the contact evaluation.</p>
   * @public
   */
  FormId?: string | undefined;

  /**
   * <p>The Amazon Resource Name for the evaluation form. It is always present.</p>
   * @public
   */
  EvaluationArn?: string | undefined;

  /**
   * <p>The status of the evaluation.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>The date and time when the evaluation was started, in UTC time.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * <p>The date and time when the evaluation was submitted, in UTC time.</p>
   * @public
   */
  EndTimestamp?: Date | undefined;

  /**
   * <p>The date and time when the evaluation was deleted, in UTC time.</p>
   * @public
   */
  DeleteTimestamp?: Date | undefined;

  /**
   * <p>The path where evaluation was exported.</p>
   * @public
   */
  ExportLocation?: string | undefined;
}

/**
 * <p>Information about the Customer on the contact.</p>
 * @public
 */
export interface Customer {
  /**
   * <p>Information regarding Customer’s device.</p>
   * @public
   */
  DeviceInfo?: DeviceInfo | undefined;

  /**
   * <p>The configuration for the allowed video and screen sharing capabilities for participants
   *    present over the call. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/inapp-calling.html">Set up in-app, web, video calling, and screen
   *     sharing capabilities</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   * @public
   */
  Capabilities?: ParticipantCapabilities | undefined;
}

/**
 * <p>Information about the endpoint.</p>
 * @public
 */
export interface EndpointInfo {
  /**
   * <p>Type of endpoint.</p>
   * @public
   */
  Type?: EndpointType | undefined;

  /**
   * <p>Address of the endpoint.</p>
   * @public
   */
  Address?: string | undefined;

  /**
   * <p>Display name of the endpoint.</p>
   * @public
   */
  DisplayName?: string | undefined;
}

/**
 * <p>Information about customer’s voice activity.</p>
 * @public
 */
export interface CustomerVoiceActivity {
  /**
   * <p>Timestamp that measures the beginning of the customer greeting from an outbound voice
   *    call.</p>
   * @public
   */
  GreetingStartTimestamp?: Date | undefined;

  /**
   * <p>Timestamp that measures the end of the customer greeting from an outbound voice call.</p>
   * @public
   */
  GreetingEndTimestamp?: Date | undefined;
}

/**
 * <p>Information about the call disconnect experience.</p>
 * @public
 */
export interface DisconnectDetails {
  /**
   * <p>Indicates the potential disconnection issues for a call. This field is not populated if the
   *    service does not detect potential issues.</p>
   * @public
   */
  PotentialDisconnectIssue?: string | undefined;
}

/**
 * <p>Information about the quality of the Customer's media connection</p>
 * @public
 */
export interface CustomerQualityMetrics {
  /**
   * <p>Information about the audio quality of the Customer</p>
   * @public
   */
  Audio?: AudioQualityMetricsInfo | undefined;
}

/**
 * <p>Information about the quality of the participant's media connection.</p>
 * @public
 */
export interface QualityMetrics {
  /**
   * <p>Information about the quality of Agent media connection.</p>
   * @public
   */
  Agent?: AgentQualityMetrics | undefined;

  /**
   * <p>Information about the quality of Customer media connection.</p>
   * @public
   */
  Customer?: CustomerQualityMetrics | undefined;
}

/**
 * <p>If this contact was queued, this contains information about the queue. </p>
 * @public
 */
export interface QueueInfo {
  /**
   * <p>The unique identifier for the queue.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   * @public
   */
  EnqueueTimestamp?: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const MediaStreamType = {
  AUDIO: "AUDIO",
  VIDEO: "VIDEO",
} as const;

/**
 * @public
 */
export type MediaStreamType = (typeof MediaStreamType)[keyof typeof MediaStreamType];

/**
 * @public
 * @enum
 */
export const RecordingStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
} as const;

/**
 * @public
 */
export type RecordingStatus = (typeof RecordingStatus)[keyof typeof RecordingStatus];

/**
 * <p>Information about a voice recording, chat transcript, or screen recording.</p>
 * @public
 */
export interface RecordingInfo {
  /**
   * <p>Where the recording/transcript is stored.</p>
   * @public
   */
  StorageType?: StorageType | undefined;

  /**
   * <p>The location, in Amazon S3, for the recording/transcript.</p>
   * @public
   */
  Location?: string | undefined;

  /**
   * <p>Information about the media stream used during the conversation.</p>
   * @public
   */
  MediaStreamType?: MediaStreamType | undefined;

  /**
   * <p>Information about the conversation participant, whether they are an agent or contact. The
   *    participant types are as follows:</p>
   *          <ul>
   *             <li>
   *                <p>All</p>
   *             </li>
   *             <li>
   *                <p>Manager</p>
   *             </li>
   *             <li>
   *                <p>Agent</p>
   *             </li>
   *             <li>
   *                <p>Customer</p>
   *             </li>
   *             <li>
   *                <p>Thirdparty</p>
   *             </li>
   *             <li>
   *                <p>Supervisor</p>
   *             </li>
   *          </ul>
   * @public
   */
  ParticipantType?: ParticipantType | undefined;

  /**
   * <p>The number that identifies the Kinesis Video Streams fragment where the customer audio
   *    stream started.</p>
   * @public
   */
  FragmentStartNumber?: string | undefined;

  /**
   * <p>The number that identifies the Kinesis Video Streams fragment where the customer audio
   *    stream stopped.</p>
   * @public
   */
  FragmentStopNumber?: string | undefined;

  /**
   * <p>When the conversation of the last leg of the recording started in UTC time.</p>
   * @public
   */
  StartTimestamp?: Date | undefined;

  /**
   * <p>When the conversation of the last leg of recording stopped in UTC time.</p>
   * @public
   */
  StopTimestamp?: Date | undefined;

  /**
   * <p>The status of the recording/transcript.</p>
   * @public
   */
  Status?: RecordingStatus | undefined;

  /**
   * <p>If the recording/transcript was deleted, this is the reason entered for the deletion.</p>
   * @public
   */
  DeletionReason?: string | undefined;
}

/**
 * <p>An object to specify the expiration of a routing step.</p>
 * @public
 */
export interface Expiry {
  /**
   * <p>The number of seconds to wait before expiring the routing step.</p>
   * @public
   */
  DurationInSeconds?: number | undefined;

  /**
   * <p>The timestamp indicating when the routing step expires.</p>
   * @public
   */
  ExpiryTimestamp?: Date | undefined;
}

/**
 * <p>An object to define AgentsCriteria.</p>
 * @public
 */
export interface MatchCriteria {
  /**
   * <p>An object to define agentIds.</p>
   * @public
   */
  AgentsCriteria?: AgentsCriteria | undefined;
}

/**
 * <p>An Object to define the minimum and maximum proficiency levels.</p>
 * @public
 */
export interface Range {
  /**
   * <p>The minimum proficiency level of the range.</p>
   * @public
   */
  MinProficiencyLevel?: number | undefined;

  /**
   * <p>The maximum proficiency level of the range.</p>
   * @public
   */
  MaxProficiencyLevel?: number | undefined;
}

/**
 * <p>An object to specify the predefined attribute condition.</p>
 * @public
 */
export interface AttributeCondition {
  /**
   * <p>The name of predefined attribute.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value of predefined attribute.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>The proficiency level of the condition.</p>
   * @public
   */
  ProficiencyLevel?: number | undefined;

  /**
   * <p>An Object to define the minimum and maximum proficiency levels.</p>
   * @public
   */
  Range?: Range | undefined;

  /**
   * <p>An object to define <code>AgentsCriteria</code>.</p>
   * @public
   */
  MatchCriteria?: MatchCriteria | undefined;

  /**
   * <p>The operator of the condition.</p>
   * @public
   */
  ComparisonOperator?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RoutingCriteriaStepStatus = {
  ACTIVE: "ACTIVE",
  EXPIRED: "EXPIRED",
  INACTIVE: "INACTIVE",
  JOINED: "JOINED",
} as const;

/**
 * @public
 */
export type RoutingCriteriaStepStatus = (typeof RoutingCriteriaStepStatus)[keyof typeof RoutingCriteriaStepStatus];

/**
 * <p>Information about the task template used to create this contact.</p>
 * @public
 */
export interface TaskTemplateInfoV2 {
  /**
   * <p>The Amazon Resource Name (ARN) of the task template used to create this contact.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the task template used to create this contact.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Information about Amazon Connect Wisdom.</p>
 * @public
 */
export interface WisdomInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom session.</p>
   * @public
   */
  SessionArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContactEvaluationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QuestionRuleCategoryAutomationCondition = {
  NOT_PRESENT: "NOT_PRESENT",
  PRESENT: "PRESENT",
} as const;

/**
 * @public
 */
export type QuestionRuleCategoryAutomationCondition =
  (typeof QuestionRuleCategoryAutomationCondition)[keyof typeof QuestionRuleCategoryAutomationCondition];

/**
 * <p>The milliseconds offset for transcript reference in suggested answer.</p>
 * @public
 */
export interface EvaluationSuggestedAnswerTranscriptMillisecondOffsets {
  /**
   * <p>Offset in milliseconds from the beginning of the transcript.</p>
   * @public
   */
  BeginOffsetMillis: number | undefined;
}

/**
 * <p>Information about the point of interest in transcript provided to evaluation.</p>
 * @public
 */
export interface EvaluationTranscriptPointOfInterest {
  /**
   * <p>Offset in milliseconds from the beginning of transcript.</p>
   * @public
   */
  MillisecondOffsets?: EvaluationSuggestedAnswerTranscriptMillisecondOffsets | undefined;

  /**
   * <p>Segment of transcript.</p>
   * @public
   */
  TranscriptSegment?: string | undefined;
}

/**
 * <p>The Contact Lens category used by evaluation automation.</p>
 * @public
 */
export interface EvaluationAutomationRuleCategory {
  /**
   * <p>A category label.</p>
   * @public
   */
  Category: string | undefined;

  /**
   * <p>An automation condition for a Contact Lens category.</p>
   * @public
   */
  Condition: QuestionRuleCategoryAutomationCondition | undefined;

  /**
   * <p>A point of interest in a contact transcript that indicates match of condition.</p>
   * @public
   */
  PointsOfInterest?: EvaluationTranscriptPointOfInterest[] | undefined;
}

/**
 * <p>Analysis details providing explanation for Contact Lens automation decision.</p>
 * @public
 */
export interface EvaluationContactLensAnswerAnalysisDetails {
  /**
   * <p>A list of match rule categories.</p>
   * @public
   */
  MatchedRuleCategories?: EvaluationAutomationRuleCategory[] | undefined;
}

/**
 * <p>An analysis for a generative AI answer to the question.</p>
 * @public
 */
export interface EvaluationGenAIAnswerAnalysisDetails {
  /**
   * <p>Generative AI automation answer justification.</p>
   * @public
   */
  Justification?: string | undefined;

  /**
   * <p>Generative AI automation answer analysis points of interest.</p>
   * @public
   */
  PointsOfInterest?: EvaluationTranscriptPointOfInterest[] | undefined;
}

/**
 * <p>Detailed analysis results of the automated answer to the evaluation question.</p>
 * @public
 */
export type EvaluationQuestionAnswerAnalysisDetails =
  | EvaluationQuestionAnswerAnalysisDetails.ContactLensMember
  | EvaluationQuestionAnswerAnalysisDetails.GenAIMember
  | EvaluationQuestionAnswerAnalysisDetails.$UnknownMember;

/**
 * @public
 */
export namespace EvaluationQuestionAnswerAnalysisDetails {
  /**
   * <p>Analysis results from the generative AI automation for the question.</p>
   * @public
   */
  export interface GenAIMember {
    GenAI: EvaluationGenAIAnswerAnalysisDetails;
    ContactLens?: never;
    $unknown?: never;
  }

  /**
   * <p>Analysis results from the Contact Lens automation for the question.</p>
   * @public
   */
  export interface ContactLensMember {
    GenAI?: never;
    ContactLens: EvaluationContactLensAnswerAnalysisDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    GenAI?: never;
    ContactLens?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    GenAI: (value: EvaluationGenAIAnswerAnalysisDetails) => T;
    ContactLens: (value: EvaluationContactLensAnswerAnalysisDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EvaluationQuestionAnswerAnalysisDetails, visitor: Visitor<T>): T => {
    if (value.GenAI !== undefined) return visitor.GenAI(value.GenAI);
    if (value.ContactLens !== undefined) return visitor.ContactLens(value.ContactLens);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const EvaluationQuestionAnswerAnalysisType = {
  CONTACT_LENS_DATA: "CONTACT_LENS_DATA",
  GEN_AI: "GEN_AI",
} as const;

/**
 * @public
 */
export type EvaluationQuestionAnswerAnalysisType =
  (typeof EvaluationQuestionAnswerAnalysisType)[keyof typeof EvaluationQuestionAnswerAnalysisType];

/**
 * @public
 * @enum
 */
export const EvaluationTranscriptType = {
  RAW: "RAW",
  REDACTED: "REDACTED",
} as const;

/**
 * @public
 */
export type EvaluationTranscriptType = (typeof EvaluationTranscriptType)[keyof typeof EvaluationTranscriptType];

/**
 * <p>Details of the input data used for automated question processing.</p>
 * @public
 */
export interface EvaluationQuestionInputDetails {
  /**
   * <p>Transcript type.</p>
   * @public
   */
  TranscriptType?: EvaluationTranscriptType | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationSuggestedAnswerStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type EvaluationSuggestedAnswerStatus =
  (typeof EvaluationSuggestedAnswerStatus)[keyof typeof EvaluationSuggestedAnswerStatus];

/**
 * <p>Information about answer data for a contact evaluation. Answer data must be either string,
 *    numeric, or not applicable.</p>
 * @public
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
   * <p>The string value for an answer in a contact evaluation.</p>
   * @public
   */
  export interface StringValueMember {
    StringValue: string;
    NumericValue?: never;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * <p>The numeric value for an answer in a contact evaluation.</p>
   * @public
   */
  export interface NumericValueMember {
    StringValue?: never;
    NumericValue: number;
    NotApplicable?: never;
    $unknown?: never;
  }

  /**
   * <p>The flag to mark the question as not applicable.</p>
   * @public
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
 * <p>The information about the suggested answer for the question.</p>
 * @public
 */
export interface EvaluationSuggestedAnswer {
  /**
   * <p>Information about answer data for a contact evaluation. Answer data must be either string,
   *    numeric, or not applicable.</p>
   * @public
   */
  Value?: EvaluationAnswerData | undefined;

  /**
   * <p>The status of the suggested answer. D</p>
   * @public
   */
  Status: EvaluationSuggestedAnswerStatus | undefined;

  /**
   * <p>Details about the input used to question automation.</p>
   * @public
   */
  Input?: EvaluationQuestionInputDetails | undefined;

  /**
   * <p>Type of analysis used to provide suggested answer.</p>
   * @public
   */
  AnalysisType: EvaluationQuestionAnswerAnalysisType | undefined;

  /**
   * <p>Detailed analysis results.</p>
   * @public
   */
  AnalysisDetails?: EvaluationQuestionAnswerAnalysisDetails | undefined;
}

/**
 * <p>Information about output answers for a contact evaluation.</p>
 * @public
 */
export interface EvaluationAnswerOutput {
  /**
   * <p>The value for an answer in a contact evaluation.</p>
   * @public
   */
  Value?: EvaluationAnswerData | undefined;

  /**
   * <p>The system suggested value for an answer in a contact evaluation.</p>
   * @public
   */
  SystemSuggestedValue?: EvaluationAnswerData | undefined;

  /**
   * <p>Automation suggested answers for the questions.</p>
   * @public
   */
  SuggestedAnswers?: EvaluationSuggestedAnswer[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  CALIBRATION: "CALIBRATION",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * <p>Information about the evaluation acknowledgement.</p>
 * @public
 */
export interface EvaluationAcknowledgement {
  /**
   * <p>When the agent acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedTime: Date | undefined;

  /**
   * <p>The agent who acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgedBy: string | undefined;

  /**
   * <p>A comment from the agent when they confirmed they acknowledged the evaluation.</p>
   * @public
   */
  AcknowledgerComment?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AutoEvaluationStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type AutoEvaluationStatus = (typeof AutoEvaluationStatus)[keyof typeof AutoEvaluationStatus];

/**
 * <p>Details about automated evaluations.</p>
 * @public
 */
export interface AutoEvaluationDetails {
  /**
   * <p>Whether automated evaluation is enabled.</p>
   * @public
   */
  AutoEvaluationEnabled: boolean | undefined;

  /**
   * <p>The status of the contact auto-evaluation. </p>
   * @public
   */
  AutoEvaluationStatus?: AutoEvaluationStatus | undefined;
}

/**
 * <p>Information about scores of a contact evaluation item (section or question).</p>
 * @public
 */
export interface EvaluationScore {
  /**
   * <p>The score percentage for an item in a contact evaluation.</p>
   * @public
   */
  Percentage?: number | undefined;

  /**
   * <p>The flag to mark the item as not applicable for scoring.</p>
   * @public
   */
  NotApplicable?: boolean | undefined;

  /**
   * <p>The flag that marks the item as automatic fail. If the item or a child item gets an
   *    automatic fail answer, this flag will be true.</p>
   * @public
   */
  AutomaticFail?: boolean | undefined;
}

/**
 * <p>Metadata information about a contact evaluation.</p>
 * @public
 */
export interface EvaluationMetadata {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   * @public
   */
  EvaluatorArn: string | undefined;

  /**
   * <p>The identifier of the agent who performed the contact.</p>
   * @public
   */
  ContactAgentId?: string | undefined;

  /**
   * <p>The calibration session ID that this evaluation belongs to.</p>
   * @public
   */
  CalibrationSessionId?: string | undefined;

  /**
   * <p>The overall score of the contact evaluation.</p>
   * @public
   */
  Score?: EvaluationScore | undefined;

  /**
   * <p>Information related to automated evaluation.</p>
   * @public
   */
  AutoEvaluation?: AutoEvaluationDetails | undefined;

  /**
   * <p>Information related to evaluation acknowledgement.</p>
   * @public
   */
  Acknowledgement?: EvaluationAcknowledgement | undefined;
}

/**
 * <p>Information about notes for a contact evaluation.</p>
 * @public
 */
export interface EvaluationNote {
  /**
   * <p>The note for an item (section or question) in a contact evaluation.</p>
   *          <note>
   *             <p>Even though a note in an evaluation can have up to 3072 chars, there is also a limit on the
   *     total number of chars for all the notes in the evaluation combined. Assuming there are N
   *     questions in the evaluation being submitted, then the max char limit for all notes combined is N
   *     x 1024.</p>
   *          </note>
   * @public
   */
  Value?: string | undefined;
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
 * <p>Information about a contact evaluation.</p>
 * @public
 */
export interface Evaluation {
  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   * @public
   */
  EvaluationArn: string | undefined;

  /**
   * <p>Metadata about the contact evaluation.</p>
   * @public
   */
  Metadata: EvaluationMetadata | undefined;

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers: Record<string, EvaluationAnswerOutput> | undefined;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes: Record<string, EvaluationNote> | undefined;

  /**
   * <p>The status of the contact evaluation.</p>
   * @public
   */
  Status: EvaluationStatus | undefined;

  /**
   * <p>A map of item (section or question) identifiers to score value.</p>
   * @public
   */
  Scores?: Record<string, EvaluationScore> | undefined;

  /**
   * <p>The timestamp for when the evaluation was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for when the evaluation was last updated.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Type of the evaluation. </p>
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>The flow has not been published.</p>
 * @public
 */
export class ContactFlowNotPublishedException extends __BaseException {
  readonly name: "ContactFlowNotPublishedException" = "ContactFlowNotPublishedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
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
 * <p>Contains information about a flow.</p>
 * @public
 */
export interface ContactFlow {
  /**
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The type of the flow. For descriptions of the available types, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-contact-flow.html#contact-flow-types">Choose a flow type</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   * @public
   */
  Type?: ContactFlowType | undefined;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  State?: ContactFlowState | undefined;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  Status?: ContactFlowStatus | undefined;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Indicates the checksum value of the flow content.</p>
   * @public
   */
  FlowContentSha256?: string | undefined;

  /**
   * <p>The identifier of the flow version.</p>
   * @public
   */
  Version?: number | undefined;

  /**
   * <p>The description of the flow version.</p>
   * @public
   */
  VersionDescription?: string | undefined;

  /**
   * <p>The time at which the flow was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The region in which the flow was last modified</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowResponse {
  /**
   * <p>Information about the flow.</p>
   * @public
   */
  ContactFlow?: ContactFlow | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
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
 * <p>Contains information about a flow module.</p>
 * @public
 */
export interface ContactFlowModule {
  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identifier of the flow module.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The description of the flow module.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState | undefined;

  /**
   * <p>The status of the flow module.</p>
   * @public
   */
  Status?: ContactFlowModuleStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeContactFlowModuleResponse {
  /**
   * <p>Information about the flow module.</p>
   * @public
   */
  ContactFlowModule?: ContactFlowModule | undefined;
}

/**
 * @public
 */
export interface DescribeEmailAddressRequest {
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
}

/**
 * @public
 */
export interface DescribeEmailAddressResponse {
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

  /**
   * <p>The email address, including the domain.</p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The display name of email address</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the email address.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The email address creation timestamp in ISO 8601 Datetime.</p>
   * @public
   */
  CreateTimestamp?: string | undefined;

  /**
   * <p>The email address last modification timestamp in ISO 8601 Datetime.</p>
   * @public
   */
  ModifiedTimestamp?: string | undefined;

  /**
   * <p>A list of alias configurations associated with this email address. Contains details about
   *    email addresses that forward to this primary email address. The list can contain at most one
   *    alias configuration per email address.</p>
   * @public
   */
  AliasConfigurations?: AliasConfiguration[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the contact evaluation.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A version of the evaluation form.</p>
   * @public
   */
  EvaluationFormVersion?: number | undefined;
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId: string | undefined;
}

/**
 * <p>Information about of the hours of operation.</p>
 * @public
 */
export interface HoursOfOperation {
  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   * @public
   */
  HoursOfOperationArn?: string | undefined;

  /**
   * <p>The name for the hours of operation.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the hours of operation.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time zone for the hours of operation.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>Configuration information for the hours of operation.</p>
   * @public
   */
  Config?: HoursOfOperationConfig[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationResponse {
  /**
   * <p>The hours of operation.</p>
   * @public
   */
  HoursOfOperation?: HoursOfOperation | undefined;
}

/**
 * @public
 */
export interface DescribeHoursOfOperationOverrideRequest {
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
}

/**
 * <p>Information about the hours of operations override.</p>
 * @public
 */
export interface HoursOfOperationOverride {
  /**
   * <p>The identifier for the hours of operation override.</p>
   * @public
   */
  HoursOfOperationOverrideId?: string | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the hours of operation.</p>
   * @public
   */
  HoursOfOperationArn?: string | undefined;

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
   * <p>The date from which the hours of operation override would be effective.</p>
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
export interface DescribeHoursOfOperationOverrideResponse {
  /**
   * <p>Information about the hours of operations override. </p>
   * @public
   */
  HoursOfOperationOverride?: HoursOfOperationOverride | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
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
 * <p>Relevant
 *    details why the instance was not successfully created.</p>
 * @public
 */
export interface InstanceStatusReason {
  /**
   * <p>The message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The Amazon Connect instance.</p>
 * @public
 */
export interface Instance {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The identity management type.</p>
   * @public
   */
  IdentityManagementType?: DirectoryType | undefined;

  /**
   * <p>The alias of instance.</p>
   * @public
   */
  InstanceAlias?: string | undefined;

  /**
   * <p>When the instance was created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>The service role of the instance.</p>
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * <p>The state of the instance.</p>
   * @public
   */
  InstanceStatus?: InstanceStatus | undefined;

  /**
   * <p>Relevant
   *    details why the instance was not successfully created. </p>
   * @public
   */
  StatusReason?: InstanceStatusReason | undefined;

  /**
   * <p>Whether inbound calls are enabled.</p>
   * @public
   */
  InboundCallsEnabled?: boolean | undefined;

  /**
   * <p>Whether outbound calls are enabled.</p>
   * @public
   */
  OutboundCallsEnabled?: boolean | undefined;

  /**
   * <p>This URL allows contact center users to access the Amazon Connect admin website.</p>
   * @public
   */
  InstanceAccessUrl?: string | undefined;

  /**
   * <p>The tags of an instance.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceReplicationStatus = {
  INSTANCE_REPLICATION_COMPLETE: "INSTANCE_REPLICATION_COMPLETE",
  INSTANCE_REPLICATION_DELETION_FAILED: "INSTANCE_REPLICATION_DELETION_FAILED",
  INSTANCE_REPLICATION_FAILED: "INSTANCE_REPLICATION_FAILED",
  INSTANCE_REPLICATION_IN_PROGRESS: "INSTANCE_REPLICATION_IN_PROGRESS",
  INSTANCE_REPLICA_DELETING: "INSTANCE_REPLICA_DELETING",
  RESOURCE_REPLICATION_NOT_STARTED: "RESOURCE_REPLICATION_NOT_STARTED",
} as const;

/**
 * @public
 */
export type InstanceReplicationStatus = (typeof InstanceReplicationStatus)[keyof typeof InstanceReplicationStatus];

/**
 * <p>Status information about the replication process, where you use the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API to create a replica of your Amazon Connect instance in
 *    another Amazon Web Services Region. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-connect-global-resiliency.html">Set up Amazon Connect
 *     Global Resiliency</a> in the <i>Amazon Connect Administrator Guide</i>.
 *   </p>
 * @public
 */
export interface ReplicationStatusSummary {
  /**
   * <p>The Amazon Web Services Region. This can be either the source or the replica Region,
   *    depending where it appears in the summary list.</p>
   * @public
   */
  Region?: string | undefined;

  /**
   * <p>The state of the replication.</p>
   * @public
   */
  ReplicationStatus?: InstanceReplicationStatus | undefined;

  /**
   * <p>A description of the replication status. Use this information to resolve any issues that are
   *    preventing the successful replication of your Amazon Connect instance to another
   *    Region.</p>
   * @public
   */
  ReplicationStatusReason?: string | undefined;
}

/**
 * <p>Details about the status of the replication of a source Amazon Connect instance across
 *     Amazon Web Services Regions. Use these details to understand the general status of a given
 *    replication. For information about why a replication process may fail, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html#why-replicateinstance-fails">Why a ReplicateInstance call fails</a> in the <i>Create a replica of your existing
 *      Amazon Connect instance</i> topic in the <i>Amazon Connect Administrator
 *     Guide</i>. </p>
 * @public
 */
export interface ReplicationConfiguration {
  /**
   * <p>A list of replication status summaries. The summaries contain details about the replication
   *    of configuration information for Amazon Connect resources, for each Amazon Web Services
   *    Region.</p>
   * @public
   */
  ReplicationStatusSummaryList?: ReplicationStatusSummary[] | undefined;

  /**
   * <p>The Amazon Web Services Region where the source Amazon Connect instance was created. This
   *    is the Region where the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API was
   *    called to start the replication process.</p>
   * @public
   */
  SourceRegion?: string | undefined;

  /**
   * <p>The URL that is used to sign-in to your Amazon Connect instance according to your
   *    traffic distribution group configuration. For more information about sign-in and traffic
   *    distribution groups, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-traffic-distribution-groups.html">Important things to
   *     know</a> in the <i>Create traffic distribution groups</i> topic in the
   *      <i>Amazon Connect Administrator Guide</i>. </p>
   * @public
   */
  GlobalSignInEndpoint?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceResponse {
  /**
   * <p>The name of the instance.</p>
   * @public
   */
  Instance?: Instance | undefined;

  /**
   * <p>Status information about the replication process. This field is included only when you are
   *    using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ReplicateInstance.html">ReplicateInstance</a> API to
   *    replicate an Amazon Connect instance across Amazon Web Services Regions. For information about
   *    replicating Amazon Connect instances, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-replica-connect-instance.html">Create a replica of your
   *     existing Amazon Connect instance</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  ReplicationConfiguration?: ReplicationConfiguration | undefined;
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
  ENHANCED_CHAT_MONITORING: "ENHANCED_CHAT_MONITORING",
  ENHANCED_CONTACT_MONITORING: "ENHANCED_CONTACT_MONITORING",
  HIGH_VOLUME_OUTBOUND: "HIGH_VOLUME_OUTBOUND",
  INBOUND_CALLS: "INBOUND_CALLS",
  MULTI_PARTY_CHAT_CONFERENCE: "MULTI_PARTY_CHAT_CONFERENCE",
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of attribute.</p>
   * @public
   */
  AttributeType: InstanceAttributeType | undefined;
}

/**
 * <p>A toggle for an individual feature at the instance level.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The type of attribute.</p>
   * @public
   */
  AttributeType?: InstanceAttributeType | undefined;

  /**
   * <p>The value of the attribute.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceAttributeResponse {
  /**
   * <p>The
   *    type
   *    of attribute.</p>
   * @public
   */
  Attribute?: Attribute | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigRequest {
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
}

/**
 * @public
 */
export interface DescribeInstanceStorageConfigResponse {
  /**
   * <p>A valid storage type.</p>
   * @public
   */
  StorageConfig?: InstanceStorageConfig | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
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
 * <p>The status of the phone number.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>, <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a>, or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html">UpdatePhoneNumberMetadata</a> operation is still in progress and has not yet completed.
 *      You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at
 *      a later time to verify if the previous operation has completed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
 *      failure reason. A common reason for a failure may be that the <code>TargetArn</code> value you
 *      are claiming or updating a phone number to has reached its limit of total claimed numbers. If
 *      you received a <code>FAILED</code> status from a <code>ClaimPhoneNumber</code> API call, you
 *      have one day to retry claiming the phone number before the number is released back to the
 *      inventory for other customers to claim.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PhoneNumberStatus {
  /**
   * <p>The status.</p>
   * @public
   */
  Status?: PhoneNumberWorkflowStatus | undefined;

  /**
   * <p>The status message.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const PhoneNumberType = {
  DID: "DID",
  SHARED: "SHARED",
  SHORT_CODE: "SHORT_CODE",
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
 * <p>Information about a phone number that has been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 * @public
 */
export interface ClaimedPhoneNumberSummary {
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

  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The status of the phone number.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CLAIMED</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> means a <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a>, <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a>, or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumberMetadata.html">UpdatePhoneNumberMetadata</a> operation is still in progress and has not yet completed.
   *      You can call <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> at
   *      a later time to verify if the previous operation has completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_ClaimPhoneNumber.html">ClaimPhoneNumber</a> or <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html">UpdatePhoneNumber</a> operation has failed. It will include a message indicating the
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
   * @public
   */
  PhoneNumberStatus?: PhoneNumberStatus | undefined;

  /**
   * <p>The claimed phone number ARN that was previously imported from the external service, such as
   *     Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it
   *    looks like the ARN of the phone number that was imported from Amazon Web Services End User
   *    Messaging.</p>
   * @public
   */
  SourcePhoneNumberArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribePhoneNumberResponse {
  /**
   * <p>Information about a phone number that's been claimed to your Amazon Connect instance or
   *    traffic distribution group.</p>
   * @public
   */
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary | undefined;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeRequest {
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
}

/**
 * <p>Custom metadata that is associated to predefined attributes to control behavior in upstream
 *    services, such as controlling how a predefined attribute should be displayed in the Amazon Connect admin website.</p>
 * @public
 */
export interface PredefinedAttributeConfiguration {
  /**
   * <p>When this parameter is set to true, Amazon Connect enforces strict validation on the
   *    specific values, if the values are predefined in attributes. The contact will store only valid
   *    and predefined values for teh predefined attribute key.</p>
   * @public
   */
  EnableValueValidationOnAssociation?: boolean | undefined;

  /**
   * <p>A boolean flag used to indicate whether a predefined attribute should be displayed in the
   *    Amazon Connect admin website.</p>
   * @public
   */
  IsReadOnly?: boolean | undefined;
}

/**
 * <p>Information about a predefined attribute.</p>
 * @public
 */
export interface PredefinedAttribute {
  /**
   * <p>The name of the predefined attribute.</p>
   * @public
   */
  Name?: string | undefined;

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
  AttributeConfiguration?: PredefinedAttributeConfiguration | undefined;

  /**
   * <p>Last modified time.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Last modified region.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePredefinedAttributeResponse {
  /**
   * <p>Information about the predefined attribute.</p>
   * @public
   */
  PredefinedAttribute?: PredefinedAttribute | undefined;
}

/**
 * @public
 */
export interface DescribePromptRequest {
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
}

/**
 * <p>Information about a prompt.</p>
 * @public
 */
export interface Prompt {
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

  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribePromptResponse {
  /**
   * <p>Information about the prompt.</p>
   * @public
   */
  Prompt?: Prompt | undefined;
}

/**
 * @public
 */
export interface DescribeQueueRequest {
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
 * <p>Contains information about a queue.</p>
 * @public
 */
export interface Queue {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the queue.</p>
   * @public
   */
  QueueArn?: string | undefined;

  /**
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string | undefined;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   * @public
   */
  OutboundCallerConfig?: OutboundCallerConfig | undefined;

  /**
   * <p>The outbound email address ID for a specified queue.</p>
   * @public
   */
  OutboundEmailConfig?: OutboundEmailConfig | undefined;

  /**
   * <p>The identifier for the hours of operation.</p>
   * @public
   */
  HoursOfOperationId?: string | undefined;

  /**
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   * @public
   */
  MaxContacts?: number | undefined;

  /**
   * <p>The status of the queue.</p>
   * @public
   */
  Status?: QueueStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQueueResponse {
  /**
   * <p>The name of the queue.</p>
   * @public
   */
  Queue?: Queue | undefined;
}

/**
 * @public
 */
export interface DescribeQuickConnectRequest {
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
}

/**
 * <p>Contains information about a quick connect.</p>
 * @public
 */
export interface QuickConnect {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   * @public
   */
  QuickConnectARN?: string | undefined;

  /**
   * <p>The identifier for the quick connect.</p>
   * @public
   */
  QuickConnectId?: string | undefined;

  /**
   * <p>The name of the quick connect.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Contains information about the quick connect.</p>
   * @public
   */
  QuickConnectConfig?: QuickConnectConfig | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeQuickConnectResponse {
  /**
   * <p>Information about the quick connect.</p>
   * @public
   */
  QuickConnect?: QuickConnect | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingProfileRequest {
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
}

/**
 * <p>Contains information about a routing profile.</p>
 * @public
 */
export interface RoutingProfile {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>The name of the routing profile.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  RoutingProfileArn?: string | undefined;

  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  RoutingProfileId?: string | undefined;

  /**
   * <p>The description of the routing profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The channels agents can handle in the Contact Control Panel (CCP) for this routing
   *    profile.</p>
   * @public
   */
  MediaConcurrencies?: MediaConcurrency[] | undefined;

  /**
   * <p>The identifier of the default outbound queue for this routing profile.</p>
   * @public
   */
  DefaultOutboundQueueId?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The number of associated queues in routing profile.</p>
   * @public
   */
  NumberOfAssociatedQueues?: number | undefined;

  /**
   * <p>The number of associated manual assignment queues in routing profile.</p>
   * @public
   */
  NumberOfAssociatedManualAssignmentQueues?: number | undefined;

  /**
   * <p>The number of associated users in routing profile.</p>
   * @public
   */
  NumberOfAssociatedUsers?: number | undefined;

  /**
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   * @public
   */
  AgentAvailabilityTimer?: AgentAvailabilityTimer | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

  /**
   * <p>Whether this a default routing profile.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The IDs of the associated queue.</p>
   * @public
   */
  AssociatedQueueIds?: string[] | undefined;

  /**
   * <p>The IDs of the associated manual assignment queues.</p>
   * @public
   */
  AssociatedManualAssignmentQueueIds?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeRoutingProfileResponse {
  /**
   * <p>The routing profile.</p>
   * @public
   */
  RoutingProfile?: RoutingProfile | undefined;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;
}

/**
 * <p>Information about a rule.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the rule.</p>
   * @public
   */
  RuleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn: string | undefined;

  /**
   * <p>The event source to trigger the rule.</p>
   * @public
   */
  TriggerEventSource: RuleTriggerEventSource | undefined;

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

  /**
   * <p>The timestamp for when the rule was created.</p>
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The timestamp for the when the rule was last updated.</p>
   * @public
   */
  LastUpdatedTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the rule.</p>
   * @public
   */
  LastUpdatedBy: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * <p>Information about the rule.</p>
   * @public
   */
  Rule: Rule | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityProfileRequest {
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
}

/**
 * <p>Contains information about a security profile.</p>
 * @public
 */
export interface SecurityProfile {
  /**
   * <p>The identifier for the security profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The organization resource identifier for the security profile.</p>
   * @public
   */
  OrganizationResourceId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the security profile.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name for the security profile.</p>
   * @public
   */
  SecurityProfileName?: string | undefined;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;

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
export interface DescribeSecurityProfileResponse {
  /**
   * <p>The security profile.</p>
   * @public
   */
  SecurityProfile?: SecurityProfile | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
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
 * <p>Information about a traffic distribution group.</p>
 * @public
 */
export interface TrafficDistributionGroup {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the traffic distribution group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the traffic distribution group.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  InstanceArn?: string | undefined;

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
   *                   <code>UPDATE_IN_PROGRESS</code> means the previous <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdateTrafficDistribution.html">UpdateTrafficDistribution</a> operation is still in progress and has not yet
   *      completed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: TrafficDistributionGroupStatus | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   *          <note>
   *             <p>The <code>SignInConfig</code> distribution is available only on a
   * default <code>TrafficDistributionGroup</code> (see the <code>IsDefault</code> parameter in the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_TrafficDistributionGroup.html">TrafficDistributionGroup</a>
   *  data type). If you call
   *     <code>UpdateTrafficDistribution</code> with a modified <code>SignInConfig</code> and a non-default <code>TrafficDistributionGroup</code>,
   *     an <code>InvalidRequestException</code> is returned.</p>
   *          </note>
   * @public
   */
  IsDefault?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficDistributionGroupResponse {
  /**
   * <p>Information about the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroup?: TrafficDistributionGroup | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
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
 * <p>Contains information about a user account for an Amazon Connect instance.</p>
 * @public
 */
export interface User {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The user name assigned to the user account.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Information about the user identity.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfo | undefined;

  /**
   * <p>Information about the phone configuration for the user.</p>
   * @public
   */
  PhoneConfig?: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account in the directory used for identity management.</p>
   * @public
   */
  DirectoryUserId?: string | undefined;

  /**
   * <p>The identifiers of the security profiles for the user.</p>
   * @public
   */
  SecurityProfileIds?: string[] | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   * @public
   */
  RoutingProfileId?: string | undefined;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   * @public
   */
  HierarchyGroupId?: string | undefined;

  /**
   * <p>The
   *    tags.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>Information about the user account and configuration settings.</p>
   * @public
   */
  User?: User | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupRequest {
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
 * <p>Contains summary information about a hierarchy group.</p>
 * @public
 */
export interface HierarchyGroupSummary {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the hierarchy group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p>Contains information about the levels of a hierarchy group.</p>
 * @public
 */
export interface HierarchyPath {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyGroupSummary | undefined;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyGroupSummary | undefined;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyGroupSummary | undefined;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyGroupSummary | undefined;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyGroupSummary | undefined;
}

/**
 * <p>Contains information about a hierarchy group.</p>
 * @public
 */
export interface HierarchyGroup {
  /**
   * <p>The identifier of the hierarchy group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the hierarchy group.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the level in the hierarchy group.</p>
   * @public
   */
  LevelId?: string | undefined;

  /**
   * <p>Information about the levels in the hierarchy group.</p>
   * @public
   */
  HierarchyPath?: HierarchyPath | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyGroupResponse {
  /**
   * <p>Information about the hierarchy group.</p>
   * @public
   */
  HierarchyGroup?: HierarchyGroup | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains information about a hierarchy level.</p>
 * @public
 */
export interface HierarchyLevel {
  /**
   * <p>The identifier of the hierarchy level.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the hierarchy level.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * <p>Contains information about a hierarchy structure.</p>
 * @public
 */
export interface HierarchyStructure {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyLevel | undefined;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyLevel | undefined;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyLevel | undefined;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyLevel | undefined;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyLevel | undefined;
}

/**
 * @public
 */
export interface DescribeUserHierarchyStructureResponse {
  /**
   * <p>Information about the hierarchy structure.</p>
   * @public
   */
  HierarchyStructure?: HierarchyStructure | undefined;
}

/**
 * @public
 */
export interface DescribeViewRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The ViewId of the view. This must be an ARN for Amazon Web Services managed views.</p>
   * @public
   */
  ViewId: string | undefined;
}

/**
 * @public
 */
export interface DescribeViewResponse {
  /**
   * <p>All view data is contained within the View object.</p>
   * @public
   */
  View?: View | undefined;
}

/**
 * @public
 */
export interface DescribeVocabularyRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  VocabularyId: string | undefined;
}

/**
 * <p>Contains information about a custom vocabulary.</p>
 * @public
 */
export interface Vocabulary {
  /**
   * <p>A unique name of the custom vocabulary.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier of the custom vocabulary.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom vocabulary.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State: VocabularyState | undefined;

  /**
   * <p>The timestamp when the custom vocabulary was last modified.</p>
   * @public
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>The reason why the custom vocabulary was not created.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The content of the custom vocabulary in plain-text format with a table of values. Each row
   *    in the table represents a word or a phrase, described with <code>Phrase</code>, <code>IPA</code>,
   *     <code>SoundsLike</code>, and <code>DisplayAs</code> fields. Separate the fields with TAB
   *    characters. For more information, see <a href="https://docs.aws.amazon.com/transcribe/latest/dg/custom-vocabulary.html#create-vocabulary-table">Create a custom
   *     vocabulary using a table</a>.</p>
   * @public
   */
  Content?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeVocabularyResponse {
  /**
   * <p>A list of specific words that you want Contact Lens for Amazon Connect to recognize in your audio input. They are
   *    generally domain-specific words and phrases, words that Contact Lens is not recognizing, or proper
   *    nouns.</p>
   * @public
   */
  Vocabulary: Vocabulary | undefined;
}

/**
 * @public
 */
export interface DisassociateAnalyticsDataSetRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to remove.</p>
   * @public
   */
  DataSetId: string | undefined;

  /**
   * <p>The identifier of the target account.  Use to associate a dataset to a different account than the one containing
   *    the Amazon Connect instance. If not specified, by default this value is the Amazon Web Services account that has the Amazon Connect instance.</p>
   * @public
   */
  TargetAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateApprovedOriginRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The domain URL of the integrated application.</p>
   * @public
   */
  Origin: string | undefined;

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
export interface DisassociateBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * <p>The Amazon Lex V2 bot to disassociate from the instance.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;

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
export interface DisassociateEmailAddressAliasRequest {
  /**
   * <p>The identifier of the email address.</p>
   * @public
   */
  EmailAddressId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Configuration object that specifies which alias relationship to remove. The alias
   *    association must currently exist between the primary email address and the specified alias email
   *    address.</p>
   * @public
   */
  AliasConfiguration: AliasConfiguration | undefined;

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
export interface DisassociateEmailAddressAliasResponse {}

/**
 * @public
 */
export interface DisassociateFlowRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services End User Messaging SMS phone number ARN when using
   *       <code>SMS_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services End User Messaging Social phone number ARN when using
   *       <code>WHATSAPP_MESSAGING_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface DisassociateFlowResponse {}

/**
 * @public
 */
export interface DisassociateInstanceStorageConfigRequest {
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
export interface DisassociateLambdaFunctionRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance..</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function being disassociated.</p>
   * @public
   */
  FunctionArn: string | undefined;

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
export interface DisassociateLexBotRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot. Maximum character limit of 50.</p>
   * @public
   */
  BotName: string | undefined;

  /**
   * <p>The Amazon Web Services Region in which the Amazon Lex bot has been created.</p>
   * @public
   */
  LexRegion: string | undefined;

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
export interface DisassociatePhoneNumberContactFlowRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface DisassociateQueueQuickConnectsRequest {
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
   * <p>The quick connects to disassociate from the queue.</p>
   * @public
   */
  QuickConnectIds: string[] | undefined;
}

/**
 * @public
 */
export interface DisassociateRoutingProfileQueuesRequest {
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
   * <p>The queues to disassociate from this routing profile.</p>
   * @public
   */
  QueueReferences?: RoutingProfileQueueReference[] | undefined;

  /**
   * <p>The manual assignment queues to disassociate with this routing profile.</p>
   * @public
   */
  ManualAssignmentQueueReferences?: RoutingProfileQueueReference[] | undefined;
}

/**
 * @public
 */
export interface DisassociateSecurityKeyRequest {
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
export interface DisassociateTrafficDistributionGroupUserRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN of the traffic distribution group.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
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
export interface DisassociateTrafficDistributionGroupUserResponse {}

/**
 * <p>Information about proficiency to be disassociated from the user.</p>
 * @public
 */
export interface UserProficiencyDisassociate {
  /**
   * <p>The name of user's proficiency.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value of user's proficiency.</p>
   * @public
   */
  AttributeValue: string | undefined;
}

/**
 * @public
 */
export interface DisassociateUserProficienciesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
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
   * <p>The proficiencies to disassociate from the user.</p>
   * @public
   */
  UserProficiencies: UserProficiencyDisassociate[] | undefined;
}

/**
 * @public
 */
export interface DismissUserContactRequest {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the
   *    instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;
}

/**
 * @public
 */
export interface DismissUserContactResponse {}

/**
 * Request to GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileRequest {
  /**
   * <p>The unique identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId: string | undefined;

  /**
   * <p>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is
   *    300.</p>
   * @public
   */
  UrlExpiryInSeconds?: number | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. The supported resources are
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/cases.html">Cases</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-email-channel.html">Email</a>.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;
}

/**
 * <p>Metadata used to download the attached file.</p>
 * @public
 */
export interface DownloadUrlMetadata {
  /**
   * <p>A pre-signed URL that should be used to download the attached file. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format:
   *    yyyy-MM-ddThh:mm:ss.SSSZ. For example, 2019-11-08T02:41:28.172Z.</p>
   * @public
   */
  UrlExpiry?: string | undefined;
}

/**
 * Response from GetAttachedFile API.
 * @public
 */
export interface GetAttachedFileResponse {
  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn?: string | undefined;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string | undefined;

  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601
   *    format: <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime?: string | undefined;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus?: FileStatusType | undefined;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName?: string | undefined;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   * @public
   */
  AssociatedResourceArn?: string | undefined;

  /**
   * <p>The use case for the file.</p>
   * @public
   */
  FileUseCaseType?: FileUseCaseType | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo | undefined;

  /**
   * <p>URL and expiry to be used when downloading the attached file. </p>
   * @public
   */
  DownloadUrlMetadata?: DownloadUrlMetadata | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "Tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the initial contact.</p>
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface GetContactAttributesResponse {
  /**
   * <p>Information about the attributes.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactMetricName = {
  POSITION_IN_QUEUE: "POSITION_IN_QUEUE",
} as const;

/**
 * @public
 */
export type ContactMetricName = (typeof ContactMetricName)[keyof typeof ContactMetricName];

/**
 * <p>The object that contains information about metric being requested.</p>
 * @public
 */
export interface ContactMetricInfo {
  /**
   * <p>The name of the metric being retrieved in type String.</p>
   * @public
   */
  Name: ContactMetricName | undefined;
}

/**
 * @public
 */
export interface GetContactMetricsRequest {
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
   * <p>A list of contact-level metrics to retrieve.</p>
   * @public
   */
  Metrics: ContactMetricInfo[] | undefined;
}

/**
 * <p>Object which contains the number.</p>
 * @public
 */
export type ContactMetricValue = ContactMetricValue.NumberMember | ContactMetricValue.$UnknownMember;

/**
 * @public
 */
export namespace ContactMetricValue {
  /**
   * <p>The number of type Double. This number is the contact's position in queue.</p>
   * @public
   */
  export interface NumberMember {
    Number: number;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    Number?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Number: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContactMetricValue, visitor: Visitor<T>): T => {
    if (value.Number !== undefined) return visitor.Number(value.Number);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Object containing information about metric requested for the contact.</p>
 * @public
 */
export interface ContactMetricResult {
  /**
   * <p>The name of the metric being retrieved in type String.</p>
   * @public
   */
  Name: ContactMetricName | undefined;

  /**
   * <p>Object result associated with the metric received.</p>
   * @public
   */
  Value: ContactMetricValue | undefined;
}

/**
 * @public
 */
export interface GetContactMetricsResponse {
  /**
   * <p>A list of metric results containing the calculated values for each requested metric. Each
   *    result includes the metric name and its corresponding calculated value.</p>
   * @public
   */
  MetricResults?: ContactMetricResult[] | undefined;

  /**
   * <p>The unique identifier of the contact for which metrics were retrieved.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The ARN of the contact for which metrics were retrieved.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CurrentMetricName = {
  AGENTS_AFTER_CONTACT_WORK: "AGENTS_AFTER_CONTACT_WORK",
  AGENTS_AVAILABLE: "AGENTS_AVAILABLE",
  AGENTS_ERROR: "AGENTS_ERROR",
  AGENTS_NON_PRODUCTIVE: "AGENTS_NON_PRODUCTIVE",
  AGENTS_ONLINE: "AGENTS_ONLINE",
  AGENTS_ON_CALL: "AGENTS_ON_CALL",
  AGENTS_ON_CONTACT: "AGENTS_ON_CONTACT",
  AGENTS_STAFFED: "AGENTS_STAFFED",
  CONTACTS_IN_QUEUE: "CONTACTS_IN_QUEUE",
  CONTACTS_SCHEDULED: "CONTACTS_SCHEDULED",
  OLDEST_CONTACT_AGE: "OLDEST_CONTACT_AGE",
  SLOTS_ACTIVE: "SLOTS_ACTIVE",
  SLOTS_AVAILABLE: "SLOTS_AVAILABLE",
} as const;

/**
 * @public
 */
export type CurrentMetricName = (typeof CurrentMetricName)[keyof typeof CurrentMetricName];

/**
 * @public
 * @enum
 */
export const Unit = {
  COUNT: "COUNT",
  PERCENT: "PERCENT",
  SECONDS: "SECONDS",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics
 *     definitions</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export interface CurrentMetric {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name?: CurrentMetricName | undefined;

  /**
   * <p>The unit for the metric.</p>
   * @public
   */
  Unit?: Unit | undefined;
}

/**
 * <p>Contains the filter to apply when retrieving metrics.</p>
 * @public
 */
export interface Filters {
  /**
   * <p>The queues to use to filter the metrics. You should specify at least one queue, and can
   *    specify up to 100 queues per request. The <code>GetCurrentMetricsData</code> API in particular
   *    requires a queue when you include a <code>Filter</code> in your request. </p>
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * <p>The channel to use to filter the metrics.</p>
   * @public
   */
  Channels?: Channel[] | undefined;

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   * @public
   */
  RoutingProfiles?: string[] | undefined;

  /**
   * <p>A list of expressions as a filter, in which an expression is an object of a step in a
   *    routing criteria.</p>
   * @public
   */
  RoutingStepExpressions?: string[] | undefined;

  /**
   * <p>A list of up to 50 agent status IDs or ARNs.</p>
   * @public
   */
  AgentStatuses?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const Grouping = {
  AGENT_STATUS: "AGENT_STATUS",
  CHANNEL: "CHANNEL",
  QUEUE: "QUEUE",
  ROUTING_PROFILE: "ROUTING_PROFILE",
  ROUTING_STEP_EXPRESSION: "ROUTING_STEP_EXPRESSION",
} as const;

/**
 * @public
 */
export type Grouping = (typeof Grouping)[keyof typeof Grouping];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * <p>The way to sort the resulting response based on metrics. By default resources are sorted
 *    based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted
 *    based on the input metrics.</p>
 * @public
 */
export interface CurrentMetricSortCriteria {
  /**
   * <p>The current metric names.</p>
   * @public
   */
  SortByMetric?: CurrentMetricName | undefined;

  /**
   * <p>The way to sort.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface GetCurrentMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
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
   *             <li>
   *                <p>RoutingStepExpressions: 50</p>
   *             </li>
   *             <li>
   *                <p>AgentStatuses: 50</p>
   *             </li>
   *          </ul>
   *          <p>Metric data is retrieved only for the resources associated with the queues or routing
   *    profiles, and by any channels included in the filter. (You cannot filter by both queue AND
   *    routing profile.) You can include both resource IDs and resource ARNs in the same request.</p>
   *          <p>When using <code>AgentStatuses</code> as filter make sure Queues is added as primary
   *    filter.</p>
   *          <p>When using the <code>RoutingStepExpression</code> filter, you need to pass exactly one
   *     <code>QueueId</code>. The filter is also case sensitive so when using the
   *     <code>RoutingStepExpression</code> filter, grouping by <code>ROUTING_STEP_EXPRESSION</code> is
   *    required.</p>
   *          <p>Currently tagging is only supported on the resources that are passed in the filter.</p>
   * @public
   */
  Filters: Filters | undefined;

  /**
   * <p>Defines the level of aggregation for metrics data by a dimension(s). Its similar to sorting
   *    items into buckets based on a common characteristic, then counting or calculating something for
   *    each bucket. For example, when grouped by <code>QUEUE</code>, the metrics returned apply to each
   *    queue rather than aggregated for all queues. </p>
   *          <p>The grouping list is an ordered list, with the first item in the list defined as the primary
   *    grouping. If no grouping is included in the request, the aggregation happens at the
   *    instance-level.</p>
   *          <ul>
   *             <li>
   *                <p>If you group by <code>CHANNEL</code>, you should include a Channels filter.
   *      VOICE, CHAT, and TASK channels are supported.</p>
   *             </li>
   *             <li>
   *                <p>If you group by <code>AGENT_STATUS</code>, you must include the <code>QUEUE</code> as the
   *      primary grouping and use queue filter. When you group by <code>AGENT_STATUS</code>, the only
   *      metric available is the <code>AGENTS_ONLINE</code> metric.</p>
   *             </li>
   *             <li>
   *                <p>If you group by <code>ROUTING_PROFILE</code>, you must include either a queue or routing
   *      profile filter. In addition, a routing profile filter is required for metrics
   *       <code>CONTACTS_SCHEDULED</code>, <code>CONTACTS_IN_QUEUE</code>, and <code>
   *       OLDEST_CONTACT_AGE</code>.</p>
   *             </li>
   *             <li>
   *                <p>When using the <code>RoutingStepExpression</code> filter, group by
   *       <code>ROUTING_STEP_EXPRESSION</code> is required.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Groupings?: Grouping[] | undefined;

  /**
   * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics
   *    are available. For a description of all the metrics, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics definitions</a> in the
   *      <i>Amazon Connect Administrator Guide</i>.</p>
   *          <dl>
   *             <dt>AGENTS_AFTER_CONTACT_WORK</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aftercallwork-real-time">ACW</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#available-real-time">Available</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ERROR</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#error-real-time">Error</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_NON_PRODUCTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-productive-time-real-time">NPT
   *        (Non-Productive Time)</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CALL</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#on-call-real-time">On
   *       contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ON_CONTACT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#on-call-real-time">On
   *       contact</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_ONLINE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#online-real-time">Online</a>
   *                </p>
   *             </dd>
   *             <dt>AGENTS_STAFFED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#staffed-real-time">Staffed</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_IN_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#in-queue-real-time">In
   *       queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_SCHEDULED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#scheduled-real-time">Scheduled</a>
   *                </p>
   *             </dd>
   *             <dt>OLDEST_CONTACT_AGE</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>When you use groupings, Unit says SECONDS and the Value is returned in SECONDS. </p>
   *                <p>When you do not use groupings, Unit says SECONDS but the Value is returned in
   *       MILLISECONDS. For example, if you get a response like this:</p>
   *                <p>
   *                   <code>\{ "Metric": \{ "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" \}, "Value": 24113.0
   *       </code>\}</p>
   *                <p>The actual OLDEST_CONTACT_AGE is 24 seconds.</p>
   *                <p>When the filter <code>RoutingStepExpression</code> is used, this metric is still
   *       calculated from enqueue time. For example, if a contact that has been queued under
   *        <code><Expression 1></code> for 10 seconds has expired and <code><Expression 2></code>
   *       becomes active, then <code>OLDEST_CONTACT_AGE</code> for this queue will be counted starting
   *       from 10, not 0.</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#oldest-real-time">Oldest</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_ACTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#active-real-time">Active</a>
   *                </p>
   *             </dd>
   *             <dt>SLOTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Name in real-time metrics report: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#availability-real-time">Availability</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   * @public
   */
  SortCriteria?: CurrentMetricSortCriteria[] | undefined;
}

/**
 * <p>Contains the data for a real-time metric.</p>
 * @public
 */
export interface CurrentMetricData {
  /**
   * <p>Information about the metric.</p>
   * @public
   */
  Metric?: CurrentMetric | undefined;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Information about the routing profile assigned to the user.</p>
 * @public
 */
export interface RoutingProfileReference {
  /**
   * <p>The identifier of the routing profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Contains information about the dimensions for a set of metrics.</p>
 * @public
 */
export interface Dimensions {
  /**
   * <p>Information about the queue for which metrics are returned.</p>
   * @public
   */
  Queue?: QueueReference | undefined;

  /**
   * <p>The channel used for grouping and filters.</p>
   * @public
   */
  Channel?: Channel | undefined;

  /**
   * <p>Information about the routing profile assigned to the user.</p>
   * @public
   */
  RoutingProfile?: RoutingProfileReference | undefined;

  /**
   * <p>The expression of a step in a routing criteria.</p>
   * @public
   */
  RoutingStepExpression?: string | undefined;

  /**
   * <p>Information about the agent status assigned to the user.</p>
   * @public
   */
  AgentStatus?: AgentStatusIdentifier | undefined;
}

/**
 * <p>Contains information about a set of real-time metrics.</p>
 * @public
 */
export interface CurrentMetricResult {
  /**
   * <p>The dimensions for the metrics.</p>
   * @public
   */
  Dimensions?: Dimensions | undefined;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: CurrentMetricData[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the real-time metrics.</p>
   * @public
   */
  MetricResults?: CurrentMetricResult[] | undefined;

  /**
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   * @public
   */
  DataSnapshotTime?: Date | undefined;

  /**
   * <p>The total count of the result, regardless of the current page size. </p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * <p>Filters user data based on the contact information that is associated to the users. It
 *    contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 * @public
 */
export interface ContactFilter {
  /**
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   * @public
   */
  ContactStates?: ContactState[] | undefined;
}

/**
 * <p>A filter for the user data.</p>
 * @public
 */
export interface UserDataFilters {
  /**
   * <p>A list of up to 100 queues or ARNs.</p>
   * @public
   */
  Queues?: string[] | undefined;

  /**
   * <p>A filter for the user data based on the contact information that is associated to the user.
   *    It contains a list of contact states. </p>
   * @public
   */
  ContactFilter?: ContactFilter | undefined;

  /**
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   * @public
   */
  RoutingProfiles?: string[] | undefined;

  /**
   * <p>A list of up to 100 agent IDs or ARNs.</p>
   * @public
   */
  Agents?: string[] | undefined;

  /**
   * <p>A UserHierarchyGroup ID or ARN.</p>
   * @public
   */
  UserHierarchyGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
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
   * @public
   */
  Filters: UserDataFilters | undefined;

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
}

/**
 * <p>Information about the hierarchy group.</p>
 * @public
 */
export interface HierarchyGroupSummaryReference {
  /**
   * <p>The unique identifier for the hierarchy group.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the hierarchy group. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Information about the levels in the hierarchy group.</p>
 * @public
 */
export interface HierarchyPathReference {
  /**
   * <p>Information about level one.</p>
   * @public
   */
  LevelOne?: HierarchyGroupSummaryReference | undefined;

  /**
   * <p>Information about level two.</p>
   * @public
   */
  LevelTwo?: HierarchyGroupSummaryReference | undefined;

  /**
   * <p>Information about level three.</p>
   * @public
   */
  LevelThree?: HierarchyGroupSummaryReference | undefined;

  /**
   * <p>Information about level four.</p>
   * @public
   */
  LevelFour?: HierarchyGroupSummaryReference | undefined;

  /**
   * <p>Information about level five.</p>
   * @public
   */
  LevelFive?: HierarchyGroupSummaryReference | undefined;
}

/**
 * <p>Information about the user.</p>
 * @public
 */
export interface UserReference {
  /**
   * <p>The unique identifier for the user.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Data for a user.</p>
 * @public
 */
export interface UserData {
  /**
   * <p>Information about the user for the data that is returned. It contains the
   *     <code>resourceId</code> and ARN of the user. </p>
   * @public
   */
  User?: UserReference | undefined;

  /**
   * <p>Information about the routing profile that is assigned to the user.</p>
   * @public
   */
  RoutingProfile?: RoutingProfileReference | undefined;

  /**
   * <p>Contains information about the levels of a hierarchy group assigned to a user.</p>
   * @public
   */
  HierarchyPath?: HierarchyPathReference | undefined;

  /**
   * <p>The status of the agent that they manually set in their Contact Control Panel (CCP), or that
   *    the supervisor manually changes in the real-time metrics report.</p>
   * @public
   */
  Status?: AgentStatusReference | undefined;

  /**
   * <p>A map of available slots by channel. The key is a channel name. The value is an integer: the
   *    available number of slots. </p>
   * @public
   */
  AvailableSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * <p>A map of maximum slots by channel. The key is a channel name. The value is an integer: the
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the
   *     <code>RoutingProfile</code> assigned to the agent. </p>
   * @public
   */
  MaxSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots. </p>
   * @public
   */
  ActiveSlotsByChannel?: Partial<Record<Channel, number>> | undefined;

  /**
   * <p>A list of contact reference information.</p>
   * @public
   */
  Contacts?: AgentContactReference[] | undefined;

  /**
   * <p>The Next status of the agent.</p>
   * @public
   */
  NextStatus?: string | undefined;
}

/**
 * @public
 */
export interface GetCurrentUserDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of the user data that is returned.</p>
   * @public
   */
  UserDataList?: UserData[] | undefined;

  /**
   * <p>The total count of the result, regardless of the current page size.</p>
   * @public
   */
  ApproximateTotalCount?: number | undefined;
}

/**
 * @public
 */
export interface GetEffectiveHoursOfOperationsRequest {
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
   * <p>The date from when the hours of operation are listed.</p>
   * @public
   */
  FromDate: string | undefined;

  /**
   * <p>The date until when the hours of operation are listed.</p>
   * @public
   */
  ToDate: string | undefined;
}

/**
 * <p>Information about the hours of operations with the effective override applied.</p>
 * @public
 */
export interface OperationalHour {
  /**
   * <p>The start time that your contact center opens.</p>
   * @public
   */
  Start?: OverrideTimeSlice | undefined;

  /**
   * <p>The end time that your contact center closes.</p>
   * @public
   */
  End?: OverrideTimeSlice | undefined;
}

/**
 * <p>Information about the hours of operations with the effective override applied.</p>
 * @public
 */
export interface EffectiveHoursOfOperations {
  /**
   * <p>The date that the hours of operation or overrides applies to.</p>
   * @public
   */
  Date?: string | undefined;

  /**
   * <p>Information about the hours of operations with the effective override applied.</p>
   * @public
   */
  OperationalHours?: OperationalHour[] | undefined;
}

/**
 * @public
 */
export interface GetEffectiveHoursOfOperationsResponse {
  /**
   * <p>Information about the effective hours of operations.</p>
   * @public
   */
  EffectiveHoursOfOperationList?: EffectiveHoursOfOperations[] | undefined;

  /**
   * <p>The time zone for the hours of operation.</p>
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * @public
 */
export interface GetFederationTokenRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;
}

/**
 * <p>Contains credentials to use for federation.</p>
 * @public
 */
export interface Credentials {
  /**
   * <p>An access token generated for a federated user to access Amazon Connect.</p>
   * @public
   */
  AccessToken?: string | undefined;

  /**
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect.</p>
   * @public
   */
  AccessTokenExpiration?: Date | undefined;

  /**
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   * @public
   */
  RefreshToken?: string | undefined;

  /**
   * <p>Renews the expiration timer for a generated token.</p>
   * @public
   */
  RefreshTokenExpiration?: Date | undefined;
}

/**
 * @public
 */
export interface GetFederationTokenResponse {
  /**
   * <p>The credentials to use for federation.</p>
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * <p>The URL to sign into the user's instance. </p>
   * @public
   */
  SignInUrl?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  UserArn?: string | undefined;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string | undefined;
}

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 * @public
 */
export class UserNotFoundException extends __BaseException {
  readonly name: "UserNotFoundException" = "UserNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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

/**
 * @public
 */
export interface GetFlowAssociationRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the resource.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services End User Messaging SMS phone number ARN when using
   *       <code>SMS_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services End User Messaging Social phone number ARN when using
   *       <code>WHATSAPP_MESSAGING_PHONE_NUMBER</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceId: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType: FlowAssociationResourceType | undefined;
}

/**
 * @public
 */
export interface GetFlowAssociationResponse {
  /**
   * <p>The identifier of the resource.</p>
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  FlowId?: string | undefined;

  /**
   * <p>A valid resource type.</p>
   * @public
   */
  ResourceType?: FlowAssociationResourceType | undefined;
}

/**
 * @public
 * @enum
 */
export const HistoricalMetricName = {
  ABANDON_TIME: "ABANDON_TIME",
  AFTER_CONTACT_WORK_TIME: "AFTER_CONTACT_WORK_TIME",
  API_CONTACTS_HANDLED: "API_CONTACTS_HANDLED",
  CALLBACK_CONTACTS_HANDLED: "CALLBACK_CONTACTS_HANDLED",
  CONTACTS_ABANDONED: "CONTACTS_ABANDONED",
  CONTACTS_AGENT_HUNG_UP_FIRST: "CONTACTS_AGENT_HUNG_UP_FIRST",
  CONTACTS_CONSULTED: "CONTACTS_CONSULTED",
  CONTACTS_HANDLED: "CONTACTS_HANDLED",
  CONTACTS_HANDLED_INCOMING: "CONTACTS_HANDLED_INCOMING",
  CONTACTS_HANDLED_OUTBOUND: "CONTACTS_HANDLED_OUTBOUND",
  CONTACTS_HOLD_ABANDONS: "CONTACTS_HOLD_ABANDONS",
  CONTACTS_MISSED: "CONTACTS_MISSED",
  CONTACTS_QUEUED: "CONTACTS_QUEUED",
  CONTACTS_TRANSFERRED_IN: "CONTACTS_TRANSFERRED_IN",
  CONTACTS_TRANSFERRED_IN_FROM_QUEUE: "CONTACTS_TRANSFERRED_IN_FROM_QUEUE",
  CONTACTS_TRANSFERRED_OUT: "CONTACTS_TRANSFERRED_OUT",
  CONTACTS_TRANSFERRED_OUT_FROM_QUEUE: "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE",
  HANDLE_TIME: "HANDLE_TIME",
  HOLD_TIME: "HOLD_TIME",
  INTERACTION_AND_HOLD_TIME: "INTERACTION_AND_HOLD_TIME",
  INTERACTION_TIME: "INTERACTION_TIME",
  OCCUPANCY: "OCCUPANCY",
  QUEUED_TIME: "QUEUED_TIME",
  QUEUE_ANSWER_TIME: "QUEUE_ANSWER_TIME",
  SERVICE_LEVEL: "SERVICE_LEVEL",
} as const;

/**
 * @public
 */
export type HistoricalMetricName = (typeof HistoricalMetricName)[keyof typeof HistoricalMetricName];

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVG: "AVG",
  MAX: "MAX",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const Comparison = {
  LT: "LT",
} as const;

/**
 * @public
 */
export type Comparison = (typeof Comparison)[keyof typeof Comparison];

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface Threshold {
  /**
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   * @public
   */
  Comparison?: Comparison | undefined;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * <p>Contains information about a historical metric. </p>
 * @public
 */
export interface HistoricalMetric {
  /**
   * <p>The name of the metric. Following is a list of each supported metric mapped to the UI name,
   *    linked to a detailed description in the <i>Amazon Connect Administrator
   *     Guide</i>. </p>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average
   *        queue abandon time</a>
   *                </p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After
   *        contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled">API contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average
   *        customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled">Callback
   *        contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contacts
   *        abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first">Contacts agent hung up first</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted">Contacts
   *        consulted</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming">Contacts
   *        handled incoming</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound">Contacts
   *        handled outbound</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts
   *        hold disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">AGENT_NON_RESPONSE</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts
   *        queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in">Contacts
   *        transferred in</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts
   *        transferred out</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time">Average agent interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time">Average
   *        queue answer time</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level">Service level
   *        X</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  Name?: HistoricalMetricName | undefined;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   * @public
   */
  Threshold?: Threshold | undefined;

  /**
   * <p>The statistic for the metric.</p>
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * <p>The unit for the metric.</p>
   * @public
   */
  Unit?: Unit | undefined;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
   *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. VOICE, CHAT, and TASK channels are supported.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   *          <note>
   *             <p>To filter by <code>Queues</code>, enter the queue
   *     ID/ARN, not the name of the queue.</p>
   *          </note>
   * @public
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   *          <p>RoutingStepExpression is not a valid filter for GetMetricData and we recommend switching to
   *    GetMetricDataV2 for more up-to-date features.</p>
   * @public
   */
  Groupings?: Grouping[] | undefined;

  /**
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics
   *     definition</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <note>
   *             <p>This API does not support a contacts
   *     incoming metric (there's no CONTACTS_INCOMING metric missing from the documented list). </p>
   *          </note>
   *          <dl>
   *             <dt>ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average
   *        queue abandon time</a>
   *                </p>
   *             </dd>
   *             <dt>AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After
   *        contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>API_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#api-contacts-handled">API contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average
   *        customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>CALLBACK_CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-contacts-handled">Callback
   *        contacts handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contacts
   *        abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_AGENT_HUNG_UP_FIRST</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-agent-hung-up-first">Contacts agent hung up first</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CONSULTED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-consulted">Contacts
   *        consulted</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts
   *        handled</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_INCOMING</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-incoming">Contacts
   *        handled incoming</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_OUTBOUND</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-outbound">Contacts
   *        handled outbound</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts
   *        hold disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_MISSED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">AGENT_NON_RESPONSE</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts
   *        queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-in">Contacts
   *        transferred in</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_IN_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts
   *        transferred out</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *                <p>Statistic: SUM</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#aaverage-agent-interaction-time">Average agent interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: AVG</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html##average-queue-answer-time">Average
   *        queue answer time</a>
   *                </p>
   *             </dd>
   *             <dt>QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *                <p>Statistic: MAX</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average
   *        queue abandon time</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

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
}

/**
 * <p>Contains the data for a historical metric.</p>
 * @public
 */
export interface HistoricalMetricData {
  /**
   * <p>Information about the metric.</p>
   * @public
   */
  Metric?: HistoricalMetric | undefined;

  /**
   * <p>The value of the metric.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Contains information about the historical metrics retrieved.</p>
 * @public
 */
export interface HistoricalMetricResult {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Dimensions | undefined;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: HistoricalMetricData[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   * @public
   */
  MetricResults?: HistoricalMetricResult[] | undefined;
}

/**
 * <p>Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.</p>
 * @public
 */
export interface FilterV2 {
  /**
   * <p>The key to use for filtering data. For example, <code>QUEUE</code>, <code>ROUTING_PROFILE,
   *     AGENT</code>, <code>CHANNEL</code>, <code>AGENT_HIERARCHY_LEVEL_ONE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code>, <code>AGENT_HIERARCHY_LEVEL_THREE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code>, <code>AGENT_HIERARCHY_LEVEL_FIVE</code>. There must be
   *    at least 1 key and a maximum 5 keys. </p>
   * @public
   */
  FilterKey?: string | undefined;

  /**
   * <p>The identifiers to use for filtering data. For example, if you have a filter key of
   *     <code>QUEUE</code>, you would add queue IDs or ARNs in <code>FilterValues</code>. </p>
   * @public
   */
  FilterValues?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const IntervalPeriod = {
  DAY: "DAY",
  FIFTEEN_MIN: "FIFTEEN_MIN",
  HOUR: "HOUR",
  THIRTY_MIN: "THIRTY_MIN",
  TOTAL: "TOTAL",
  WEEK: "WEEK",
} as const;

/**
 * @public
 */
export type IntervalPeriod = (typeof IntervalPeriod)[keyof typeof IntervalPeriod];

/**
 * <p>Information about the interval period to use for returning results.</p>
 * @public
 */
export interface IntervalDetails {
  /**
   * <p>The timezone applied to requested metrics.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>
   *             <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *     <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> |
   *     <code>HOUR</code> | <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *          <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *     <code>StartTime</code> and <code>EndTime</code> differs by 1 day, then Amazon Connect
   *    returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By
   *    default Amazon Connect aggregates results based on the <code>TOTAL</code> interval period. </p>
   *          <p>The following list describes restrictions on <code>StartTime</code> and <code>EndTime</code>
   *    based on what <code>IntervalPeriod</code> is requested. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and
   *       <code>EndTime</code> must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and
   *       <code>EndTime</code> must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HOUR</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 3 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WEEK</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOTAL</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *      must be less than 35 days.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IntervalPeriod?: IntervalPeriod | undefined;
}

/**
 * <p>Contains information about the filter used when retrieving metrics.
 *     <code>MetricFiltersV2</code> can be used on the following metrics:
 *     <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>,
 *     <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.</p>
 * @public
 */
export interface MetricFilterV2 {
  /**
   * <p>The key to use for filtering data. </p>
   *          <p>Valid metric filter keys: </p>
   *          <ul>
   *             <li>
   *                <p>ANSWERING_MACHINE_DETECTION_STATUS</p>
   *             </li>
   *             <li>
   *                <p>CASE_STATUS</p>
   *             </li>
   *             <li>
   *                <p>DISCONNECT_REASON</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_ACTION_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_NEXT_ACTION_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_OUTCOME_TYPE</p>
   *             </li>
   *             <li>
   *                <p>FLOWS_RESOURCE_TYPE</p>
   *             </li>
   *             <li>
   *                <p>INITIATION_METHOD</p>
   *             </li>
   *          </ul>
   * @public
   */
  MetricFilterKey?: string | undefined;

  /**
   * <p>The values to use for filtering data. Values for metric-level filters can be either a fixed
   *    set of values or a customized list, depending on the use case.</p>
   *          <p>For valid values of metric-level filters <code>INITIATION_METHOD</code>,
   *     <code>DISCONNECT_REASON</code>, and <code>ANSWERING_MACHINE_DETECTION_STATUS</code>, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   *          <p>For valid values of the metric-level filter <code>FLOWS_OUTCOME_TYPE</code>, see the
   *    description for the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome">Flow outcome</a>
   *    metric in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <p>For valid values of the metric-level filter <code>BOT_CONVERSATION_OUTCOME_TYPE</code>, see
   *    the description for the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed-metric">Bot
   *     conversations completed</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   *          <p>For valid values of the metric-level filter <code>BOT_INTENT_OUTCOME_TYPE</code>, see the
   *    description for the <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed-metric">Bot intents
   *     completed</a> metric in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   * @public
   */
  MetricFilterValues?: string[] | undefined;

  /**
   * <p>If set to <code>true</code>, the API response contains results that filter out the results
   *    matched by the metric-level filters condition. By default, <code>Negate</code> is set to
   *     <code>false</code>. </p>
   * @public
   */
  Negate?: boolean | undefined;
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 * @public
 */
export interface ThresholdV2 {
  /**
   * <p>The type of comparison. Currently, "less than" (LT), "less than equal" (LTE), and "greater
   *    than" (GT) comparisons are supported.</p>
   * @public
   */
  Comparison?: string | undefined;

  /**
   * <p>The threshold value to compare.</p>
   * @public
   */
  ThresholdValue?: number | undefined;
}

/**
 * <p>Contains information about the metric.</p>
 * @public
 */
export interface MetricV2 {
  /**
   * <p>The name of the metric.</p>
   *          <important>
   *             <p>This parameter is required. The following Required = No is incorrect.</p>
   *          </important>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Contains information about the threshold for service level metrics.</p>
   * @public
   */
  Threshold?: ThresholdV2[] | undefined;

  /**
   * <p>Contains the filters to be used when returning data.</p>
   * @public
   */
  MetricFilters?: MetricFilterV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect
   *    instance.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be before the end time timestamp. The start
   *    and end time depends on the <code>IntervalPeriod</code> selected. By default the time range
   *    between start and end time is 35 days. Historical metrics are available for 3 months.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be later than the start time timestamp. It
   *    cannot be later than the current timestamp.</p>
   * @public
   */
  EndTime: Date | undefined;

  /**
   * <p>The interval period and timezone to apply to returned metrics.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IntervalPeriod</code>: An aggregated grouping applied to request metrics. Valid
   *       <code>IntervalPeriod</code> values are: <code>FIFTEEN_MIN</code> | <code>THIRTY_MIN</code> |
   *       <code>HOUR</code> | <code>DAY</code> | <code>WEEK</code> | <code>TOTAL</code>. </p>
   *                <p>For example, if <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *       <code>StartTime</code> and <code>EndTime</code> differs by 1 day, then Amazon Connect
   *      returns 48 results in the response. Each result is aggregated by the THIRTY_MIN period. By
   *      default Amazon Connect aggregates results based on the <code>TOTAL</code> interval period. </p>
   *                <p>The following list describes restrictions on <code>StartTime</code> and
   *       <code>EndTime</code> based on which <code>IntervalPeriod</code> is requested. </p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>FIFTEEN_MIN</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>THIRTY_MIN</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>HOUR</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 3 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>DAY</code>: The difference between <code>StartTime</code> and <code>EndTime</code>
   *        must be less than 35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>WEEK</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 35 days.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>TOTAL</code>: The difference between <code>StartTime</code> and
   *         <code>EndTime</code> must be less than 35 days.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TimeZone</code>: The timezone applied to requested metrics.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Interval?: IntervalDetails | undefined;

  /**
   * <p>The filters to apply to returned metrics. You can filter on the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>Agents</p>
   *             </li>
   *             <li>
   *                <p>Campaigns</p>
   *             </li>
   *             <li>
   *                <p>Channels</p>
   *             </li>
   *             <li>
   *                <p>Feature</p>
   *             </li>
   *             <li>
   *                <p>Queues</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles</p>
   *             </li>
   *             <li>
   *                <p>Routing step expression</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups</p>
   *             </li>
   *          </ul>
   *          <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy
   *    groups.</p>
   *          <p>For metrics for outbound campaigns analytics, you can also use campaigns to satisfy at least
   *    one filter requirement.</p>
   *          <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical
   *     metrics report</a> in the <i>Amazon Connect Administrator
   *    Guide</i>.</p>
   *          <p>Note the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Filter keys</b>: A maximum of 5 filter keys are supported in
   *      a single request. Valid filter keys: <code>AGENT</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_ONE</code> | <code>AGENT_HIERARCHY_LEVEL_TWO</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_THREE</code> | <code>AGENT_HIERARCHY_LEVEL_FOUR</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_FIVE</code> | <code>ANSWERING_MACHINE_DETECTION_STATUS</code> |
   *       <code> BOT_ID</code> | <code>BOT_ALIAS</code> | <code>BOT_VERSION</code> |
   *       <code>BOT_LOCALE</code> | <code>BOT_INTENT_NAME</code> | <code>CAMPAIGN</code> |
   *       <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code> | <code>CAMPAIGN_EXCLUDED_EVENT_TYPE </code> |
   *       <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> | <code>CHANNEL</code> |
   *       <code>contact/segmentAttributes/connect:Subtype</code> | <code>DISCONNECT_REASON</code> |
   *       <code>EVALUATION_FORM</code> | <code>EVALUATION_SECTION</code> |
   *       <code>EVALUATION_QUESTION</code> | <code>EVALUATION_SOURCE</code> | <code>FEATURE</code> |
   *       <code>FLOW_ACTION_ID</code> | <code>FLOW_TYPE</code> | <code>FLOWS_MODULE_RESOURCE_ID</code> |
   *       <code>FLOWS_NEXT_RESOURCE_ID</code> | <code>FLOWS_NEXT_RESOURCE_QUEUE_ID</code> |
   *       <code>FLOWS_OUTCOME_TYPE</code> | <code>FLOWS_RESOURCE_ID</code> | <code>FORM_VERSION</code> |
   *       <code>INITIATION_METHOD</code> | <code>INVOKING_RESOURCE_PUBLISHED_TIMESTAMP</code> |
   *       <code>INVOKING_RESOURCE_TYPE</code> | <code>PARENT_FLOWS_RESOURCE_ID</code> |
   *       <code>RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>ROUTING_PROFILE</code> |
   *       <code>ROUTING_STEP_EXPRESSION</code> | <code>QUEUE</code> | <code>Q_CONNECT_ENABLED</code> |
   *     </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Filter values</b>: A maximum of 100 filter values are
   *      supported in a single request. VOICE, CHAT, and TASK are valid <code>filterValue</code> for the
   *      CHANNEL filter key. They do not count towards limitation of 100 filter values. For example, a
   *      GetMetricDataV2 request can filter by 50 queues, 35 agents, and 15 routing profiles for a total
   *      of 100 filter values, along with 3 channel filters. </p>
   *                <p>
   *                   <code>contact_lens_conversational_analytics</code> is a valid filterValue for the
   *       <code>FEATURE</code> filter key. It is available only to contacts analyzed by Contact Lens
   *      conversational analytics.</p>
   *                <p>
   *                   <code>connect:Chat</code>, <code>connect:SMS</code>, <code>connect:Telephony</code>, and
   *       <code>connect:WebRTC</code> are valid <code>filterValue</code> examples (not exhaustive) for
   *      the <code>contact/segmentAttributes/connect:Subtype filter</code> key.</p>
   *                <p>
   *                   <code>ROUTING_STEP_EXPRESSION</code> is a valid filter key with a filter value up to 3000
   *      length. This filter is case and order sensitive. JSON string fields must be sorted in ascending
   *      order and JSON array order should be kept as is.</p>
   *                <p>
   *                   <code>Q_CONNECT_ENABLED</code>. TRUE and FALSE are the only valid filterValues for the
   *       <code>Q_CONNECT_ENABLED</code> filter key. </p>
   *                <ul>
   *                   <li>
   *                      <p>TRUE includes all contacts that had Amazon Q in Connect enabled as part of the flow.</p>
   *                   </li>
   *                   <li>
   *                      <p>FALSE includes all contacts that did not have Amazon Q in Connect enabled as part of the flow</p>
   *                   </li>
   *                </ul>
   *                <p>This filter is available only for contact record-driven metrics. </p>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-outbound-campaigns_Campaign.html">Campaign</a> ARNs are valid <code>filterValues</code> for the <code>CAMPAIGN</code>
   *      filter key.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters: FilterV2[] | undefined;

  /**
   * <p>The grouping applied to the metrics that are returned. For example, when results are grouped
   *    by queue, the metrics returned are grouped by queue. The values that are returned apply to the
   *    metrics for each queue. They are not aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of all metrics is returned.</p>
   *          <p>Valid grouping keys: <code>AGENT</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *     <code>ANSWERING_MACHINE_DETECTION_STATUS</code> | <code>BOT_ID</code> | <code>BOT_ALIAS</code> |
   *     <code>BOT_VERSION</code> | <code>BOT_LOCALE</code> | <code>BOT_INTENT_NAME</code> |
   *     <code>CAMPAIGN</code> | <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code> |
   *     <code>CAMPAIGN_EXCLUDED_EVENT_TYPE</code> | <code>CAMPAIGN_EXECUTION_TIMESTAMP</code> |
   *     <code>CASE_TEMPLATE_ARN</code> | <code>CASE_STATUS</code> | <code>CHANNEL</code> |
   *     <code>contact/segmentAttributes/connect:Subtype</code> | <code>DISCONNECT_REASON</code> |
   *     <code>EVALUATION_FORM</code> | <code>EVALUATION_SECTION</code> |
   *     <code>EVALUATION_QUESTION</code> | <code>EVALUATION_SOURCE</code> |
   *     <code>FLOWS_RESOURCE_ID</code> | <code>FLOWS_MODULE_RESOURCE_ID</code> |
   *     <code>FLOW_ACTION_ID</code> | <code>FLOW_TYPE</code> | <code>FLOWS_OUTCOME_TYPE</code> |
   *     <code>FORM_VERSION</code> | <code>INITIATION_METHOD</code> |
   *     <code>INVOKING_RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>INVOKING_RESOURCE_TYPE</code> |
   *     <code>PARENT_FLOWS_RESOURCE_ID</code> | <code>Q_CONNECT_ENABLED</code> | <code>QUEUE</code> |
   *     <code>RESOURCE_PUBLISHED_TIMESTAMP</code> | <code>ROUTING_PROFILE</code> |
   *     <code>ROUTING_STEP_EXPRESSION</code>
   *          </p>
   *          <p>Type: Array of strings</p>
   *          <p>Array Members: Maximum number of 4 items</p>
   *          <p>Required: No</p>
   * @public
   */
  Groupings?: string[] | undefined;

  /**
   * <p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html">Metrics
   *     definition</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <dl>
   *             <dt>ABANDONMENT_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#abandonment-rate">Abandonment
   *        rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherent-time">Adherent time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_ANSWER_RATE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-answer-rate">Agent answer
   *        rate</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-adherent-time">Non-adherent
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response">Agent
   *        non-response</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE_WITHOUT_CUSTOMER_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>Data for this metric is available starting from October 1, 2023 0:00:00 GMT.</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-response-without-customer-abandons">Agent non-response without customer abandons</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#occupancy">Occupancy</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULE_ADHERENCE</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#adherence">Adherence</a>
   *                </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULED_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#scheduled-time">Scheduled
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-abandon-time">Average
   *        queue abandon time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_ACTIVE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-active-time">Average active
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">Average
   *        after contact work time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_CONNECTING_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only
   *       supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *        <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-api-connecting-time">Average agent API connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in metric-level filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_AGENT_PAUSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-pause-time">Average
   *        agent pause time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_BOT_CONVERSATION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID,
   *       Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows
   *       resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-time">Average bot
   *        conversation time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_BOT_CONVERSATION_TURNS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID,
   *       Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows
   *       resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#average-bot-conversation-turns">Average bot
   *        conversation turns</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RELATED_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contacts-per-case">Average
   *        contacts per case</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CASE_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-case-resolution-time">Average
   *        case resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONTACT_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-contact-duration">Average
   *        contact duration</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_CONTACT_FIRST_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-average-contact-first-response-wait-time">Agent average contact first response wait time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONVERSATION_CLOSE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-close-time">Average conversation close time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_CONVERSATION_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-conversation-duration">Average conversation duration</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_DIALS_PER_MINUTE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns that use the agent assisted voice
   *       and automated voice delivery modes.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-dials-per-minute">Average
   *        dials per minute</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_EVALUATION_SCORE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Section ID,
   *       Evaluation Question ID, Evaluation Source, Form Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-evaluation-score">Average
   *        evaluation score</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_FIRST_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-first-response-time">Average agent first response time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-flow-time">Average flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_GREETING_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-greeting-time">Average
   *        agent greeting time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-handle-time">Average handle
   *        time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time">Average
   *        customer hold time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME_ALL_CONTACTS</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-hold-time-all-contacts">Average customer hold time all contacts</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_HOLDS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-holds">Average holds</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-and-customer-hold-time">Average agent interaction and customer hold time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interaction-time">Average agent interaction time</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERRUPTIONS_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruptions">Average
   *        agent interruptions</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_INTERRUPTION_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-interruption-time">Average agent interruption time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGE_LENGTH_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-message-length">Average
   *        agent message length</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGE_LENGTH_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-message-length">Average customer message length</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-messages">Average
   *        messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-messages">Average agent
   *        messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_BOT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-bot-messages">Average bot
   *        messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_MESSAGES_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-messages">Average
   *        customer messages</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-non-talk-time">Average
   *        non-talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time">Average
   *        queue answer time</a>
   *                </p>
   *                <p>Valid metric level filters: <code>INITIATION_METHOD</code>, <code>FEATURE</code>,
   *        <code>DISCONNECT_REASON</code>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME_CUSTOMER_FIRST_CALLBACK</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-queue-answer-time-customer-first-callback">Avg. queue answer time - customer first callback</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESPONSE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-response-time-agent">Average
   *        agent response time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESPONSE_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-time-agent">Average
   *        customer response time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_RESOLUTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-resolution-time">Average
   *        resolution time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-talk-time">Average talk
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-agent-talk-time">Average
   *        agent talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-customer-talk-time">Average
   *        customer talk time</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WAIT_TIME_AFTER_CUSTOMER_CONNECTION</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns that use the agent assisted voice
   *       and automated voice delivery modes.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection">Average wait time after customer connection</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WAIT_TIME_AFTER_CUSTOMER_FIRST_CALLBACK_CONNECTION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-wait-time-after-customer-connection-customer-first-callback">Avg. wait time after customer connection - customer first callback</a>
   *                </p>
   *             </dd>
   *             <dt>AVG_WEIGHTED_EVALUATION_SCORE</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form Id, Evaluation Section ID,
   *       Evaluation Question ID, Evaluation Source, Form Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#average-weighted-evaluation-score">Average weighted evaluation score</a>
   *                </p>
   *             </dd>
   *             <dt>BOT_CONVERSATIONS_COMPLETED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID,
   *       Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows
   *       resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-conversations-completed">Bot
   *        conversations completed</a>
   *                </p>
   *             </dd>
   *             <dt>BOT_INTENTS_COMPLETED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type,
   *       Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource
   *       type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#bot-intents-completed">Bot intents
   *        completed</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the agent assisted voice and
   *       automated voice delivery modes.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>GT</code> (for
   *        <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x">Campaign contacts abandoned after X</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_CONTACTS_ABANDONED_AFTER_X_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the agent assisted voice and
   *       automated voice delivery modes.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>GT</code> (for
   *        <i>Greater than</i>).</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-contacts-abandoned-after-x-rate">Campaign contacts abandoned after X rate</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_INTERACTIONS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns using the email delivery mode. </p>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE</p>
   *                <p>Valid groupings and filters: Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-interactions">Campaign
   *        interactions</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_PROGRESS_RATE</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment.
   *       It is not available for event triggered campaigns.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-progress-rate">Campaign
   *        progress rate</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_SEND_ATTEMPTS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Channel, contact/segmentAttributes/connect:Subtype </p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-attempts">Campaign send
   *        attempts</a>
   *                </p>
   *             </dd>
   *             <dt>CAMPAIGN_SEND_EXCLUSIONS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Valid metric filter key: CAMPAIGN_EXCLUDED_EVENT_TYPE</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Excluded Event Type, Campaign Execution
   *       Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#campaign-send-exclusions">Campaign
   *        send exclusions</a>
   *                </p>
   *             </dd>
   *             <dt>CASES_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-created">Cases created</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-created">Contacts
   *        created</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>,
   *       <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled">Contacts
   *        handled</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HANDLED_BY_CONNECTED_TO_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-handled-by-connected-to-agent-timestamp">Contacts handled (connected to agent timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-disconnect">Contacts
   *        hold disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_AGENT_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-agent-disconnect">Contacts hold agent disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_ON_HOLD_CUSTOMER_DISCONNECT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-hold-customer-disconnect">Contacts hold customer disconnect</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_PUT_ON_HOLD</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-put-on-hold">Contacts put on
   *        hold</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_EXTERNAL</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-external">Contacts transferred out external</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_INTERNAL</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-internal">Contacts transferred out internal</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued">Contacts
   *        queued</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED_BY_ENQUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-queued-by-enqueue">Contacts
   *        queued (enqueue timestamp)</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_REMOVED_FROM_QUEUE_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-removed-from-queue">Contacts
   *        removed from queue in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_RESOLVED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-resolved">Contacts resolved
   *        in X</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out">Contacts
   *        transferred out</a>
   *                </p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-by-agent">Contacts transferred out by agent</a>
   *                </p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-transferred-out-queue">Contacts transferred out queue</a>
   *                </p>
   *             </dd>
   *             <dt>CURRENT_CASES</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#current-cases">Current cases</a>
   *                </p>
   *             </dd>
   *             <dt>CONVERSATIONS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, contact/segmentAttributes/connect:Subtype,
   *       Disconnect Reason, Feature, RoutingStepExpression, Initiation method, Routing Profile, Queue,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#conversations-abandoned">Conversations abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPTS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code>, <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Agent, Answering Machine Detection Status, Campaign, Campaign Delivery
   *       EventType, Channel, contact/segmentAttributes/connect:Subtype, Disconnect Reason, Queue,
   *       Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempts">Delivery
   *        attempts</a>
   *                </p>
   *                <note>
   *                   <p>Campaign Delivery EventType filter and grouping are only available for SMS and Email
   *        campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status
   *        and Disconnect Reason are only available for agent assisted voice and automated voice
   *        delivery modes. </p>
   *                </note>
   *             </dd>
   *             <dt>DELIVERY_ATTEMPT_DISPOSITION_RATE</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns. Dispositions for the agent assisted
   *       voice and automated voice delivery modes are only available with answering machine detection
   *       enabled.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>ANSWERING_MACHINE_DETECTION_STATUS</code>,
   *        <code>CAMPAIGN_DELIVERY_EVENT_TYPE</code>, <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Valid groupings and filters: Agent, Answering Machine Detection Status, Campaign, Channel,
   *       contact/segmentAttributes/connect:Subtype, Disconnect Reason, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#delivery-attempt-disposition-rate">Delivery attempt disposition rate</a>
   *                </p>
   *                <note>
   *                   <p>Campaign Delivery Event Type filter and grouping are only available for SMS and Email
   *        campaign delivery modes. Agent, Queue, Routing Profile, Answering Machine Detection Status
   *        and Disconnect Reason are only available for agent assisted voice and automated voice
   *        delivery modes. </p>
   *                </note>
   *             </dd>
   *             <dt>EVALUATIONS_PERFORMED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form
   *       Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#evaluations-performed">Evaluations
   *        performed</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome">Flows
   *       outcome</a>
   *                </p>
   *             </dd>
   *             <dt>FLOWS_STARTED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-started">Flows
   *       started</a>
   *                </p>
   *             </dd>
   *             <dt>HUMAN_ANSWERED_CALLS</dt>
   *             <dd>
   *                <p>This metric is available only for outbound campaigns. Dispositions for the agent assisted
   *       voice and automated voice delivery modes are only available with answering machine detection
   *       enabled. </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Agent, Campaign</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#human-answered">Human
   *        answered</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-flow-time">Maximum flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>MAX_QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#maximum-queued-time">Maximum queued
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>MIN_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#minimum-flow-time">Minimum flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_AUTOMATIC_FAILS</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Agent, Agent Hierarchy, Channel, Evaluation Form ID, Evaluation Source, Form
   *       Version, Queue, Routing Profile</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#automatic-fails-percent">Automatic
   *        fails percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_BOT_CONVERSATIONS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Flows resource ID, Flows module resource ID, Flow type, Flow action ID,
   *       Invoking resource published timestamp, Initiation method, Invoking resource type, Parent flows
   *       resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-conversations-outcome">Percent
   *        bot conversations outcome</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_BOT_INTENTS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Bot ID, Bot alias, Bot
   *       version, Bot locale, Bot intent name, Flows resource ID, Flows module resource ID, Flow type,
   *       Flow action ID, Invoking resource published timestamp, Initiation method, Invoking resource
   *       type, Parent flows resource ID</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/bot-metrics.html#percent-bot-intents-outcome">Percent bot
   *        intents outcome</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CASES_FIRST_CONTACT_RESOLVED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved-on-first-contact">Cases resolved on first contact</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_EXPIRED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_CONTACTS_STEP_JOINED</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>PERCENT_FLOWS_OUTCOME</dt>
   *             <dd>
   *                <p>Unit: Percent</p>
   *                <p>Valid metric filter key: <code>FLOWS_OUTCOME_TYPE</code>
   *                </p>
   *                <p>Valid groupings and filters: Channel, contact/segmentAttributes/connect:Subtype, Flow type, Flows module
   *       resource ID, Flows next resource ID, Flows next resource queue ID, Flows outcome type, Flows
   *       resource ID, Initiation method, Resource published timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#flows-outcome-percentage">Flows
   *        outcome percentage</a>.</p>
   *                <note>
   *                   <p>The <code>FLOWS_OUTCOME_TYPE</code> is not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>PERCENT_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#non-talk-time-percent">Non-talk time
   *        percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#talk-time-percent">Talk time
   *        percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-talk-time-percent">Agent talk
   *        time percent</a>
   *                </p>
   *             </dd>
   *             <dt>PERCENT_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-talk-time-percent">Customer
   *        talk time percent</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_ATTEMPTED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment.
   *       It is not available for event triggered campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-attempted">Recipients
   *        attempted</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_INTERACTED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment.
   *       It is not available for event triggered campaigns.</p>
   *                <p>Valid metric filter key: CAMPAIGN_INTERACTION_EVENT_TYPE</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Channel,
   *       contact/segmentAttributes/connect:Subtype, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-interacted">Recipients
   *        interacted</a>
   *                </p>
   *             </dd>
   *             <dt>RECIPIENTS_TARGETED</dt>
   *             <dd>
   *                <p>This metric is only available for outbound campaigns initiated using a customer segment.
   *       It is not available for event triggered campaigns.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Campaign, Campaign Execution Timestamp</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#recipients-targeted">Recipients
   *        targeted</a>
   *                </p>
   *             </dd>
   *             <dt>REOPENED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-reopened">Cases
   *        reopened</a>
   *                </p>
   *             </dd>
   *             <dt>RESOLVED_CASE_ACTIONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Required filter key: CASE_TEMPLATE_ARN</p>
   *                <p>Valid groupings and filters: CASE_TEMPLATE_ARN, CASE_STATUS</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#cases-resolved">Cases
   *        resolved</a>
   *                </p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#service-level">Service level
   *        X</a>
   *                </p>
   *             </dd>
   *             <dt>STEP_CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, RoutingStepExpression</p>
   *                <p>UI name: This metric is available in Real-time Metrics UI but not on the Historical
   *       Metrics UI.</p>
   *             </dd>
   *             <dt>SUM_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#after-contact-work-time">After
   *        contact work time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONNECTING_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. This metric only supports the
   *       following filter keys as <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *        <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code> |
   *        <code>CALLBACK_CUSTOMER_FIRST_DIALED</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-api-connecting-time">Agent API
   *        connecting time</a>
   *                </p>
   *                <note>
   *                   <p>The <code>Negate</code> key in metric-level filters is not applicable for this
   *        metric.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Metric filter: </p>
   *                <ul>
   *                   <li>
   *                      <p>Valid values: <code>API</code>| <code>INCOMING</code> | <code>OUTBOUND</code> |
   *          <code>TRANSFER</code> | <code>CALLBACK</code> | <code>QUEUE_TRANSFER</code>|
   *          <code>Disconnect</code> | <code>CALLBACK_CUSTOMER_FIRST_DIALED</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, RoutingStepExpression, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned">Contact
   *        abandoned</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ABANDONED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-abandoned-in-x-seconds">Contacts abandoned in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ANSWERED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you can use <code>LT</code> (for "Less
   *       than") or <code>LTE</code> (for "Less than equal").</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contacts-answered-in-x-seconds">Contacts answered in X seconds</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_FLOW_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-flow-time">Contact flow
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACT_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-on-contact-time">Agent on
   *        contact time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_DISCONNECTED </dt>
   *             <dd>
   *                <p>Valid metric filter key: <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy,
   *       contact/segmentAttributes/connect:Subtype, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-disconnected">Contact
   *        disconnected</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ERROR_STATUS_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#error-status-time">Error status
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#contact-handle-time">Contact handle
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#customer-hold-time">Customer hold
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_IDLE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-idle-time">Agent idle
   *        time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-and-hold-time">Agent interaction and hold time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-interaction-time">Agent
   *        interaction time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_NON_PRODUCTIVE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#agent-non-productive-time">Agent
   *        non-productive time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_ONLINE_TIME_AGENT</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#online-time">Online time</a>
   *                </p>
   *             </dd>
   *             <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, contact/segmentAttributes/connect:Subtype,
   *       Q in Connect</p>
   *                <p>UI name: <a href="https://docs.aws.amazon.com/connect/latest/adminguide/metrics-definitions.html#callback-attempts">Callback
   *        attempts</a>
   *                </p>
   *             </dd>
   *          </dl>
   * @public
   */
  Metrics: MetricV2[] | undefined;

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
}

/**
 * <p>Contains the name, thresholds, and metric filters.</p>
 * @public
 */
export interface MetricDataV2 {
  /**
   * <p>The metric name, thresholds, and metric filters of the returned metric.</p>
   * @public
   */
  Metric?: MetricV2 | undefined;

  /**
   * <p>The corresponding value of the metric returned in the response.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>The interval period with the start and end time for the metrics.</p>
 * @public
 */
export interface MetricInterval {
  /**
   * <p>The interval period provided in the API request. </p>
   * @public
   */
  Interval?: IntervalPeriod | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format. Start time is based on the interval period
   *    selected. </p>
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * <p>The timestamp, in UNIX Epoch time format. End time is based on the interval period selected.
   *    For example, If <code>IntervalPeriod</code> is selected <code>THIRTY_MIN</code>,
   *     <code>StartTime</code> and <code>EndTime</code> in the API request differs by 1 day, then 48
   *    results are returned in the response. Each result is aggregated by the 30 minutes period, with
   *    each <code>StartTime</code> and <code>EndTime</code> differing by 30 minutes. </p>
   * @public
   */
  EndTime?: Date | undefined;
}

/**
 * <p>Contains information about the metric results.</p>
 * @public
 */
export interface MetricResultV2 {
  /**
   * <p>The dimension for the metrics.</p>
   * @public
   */
  Dimensions?: Record<string, string> | undefined;

  /**
   * <p>The interval period with the start and end time for the metrics.</p>
   * @public
   */
  MetricInterval?: MetricInterval | undefined;

  /**
   * <p>The set of metrics.</p>
   * @public
   */
  Collections?: MetricDataV2[] | undefined;
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Information about the metrics requested in the API request If no grouping is specified, a
   *    summary of metric data is returned. </p>
   * @public
   */
  MetricResults?: MetricResultV2[] | undefined;
}

/**
 * @public
 */
export interface GetPromptFileRequest {
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
}

/**
 * @public
 */
export interface GetPromptFileResponse {
  /**
   * <p>A generated URL to the prompt that can be given to an unauthorized user so they can access
   *    the prompt in S3.</p>
   * @public
   */
  PromptPresignedUrl?: string | undefined;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  TaskTemplateId: string | undefined;

  /**
   * <p>The system generated version of a task template that is associated with a task, when the
   *    task is created.</p>
   * @public
   */
  SnapshotVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name: string | undefined;

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

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id: string | undefined;
}

/**
 * <p>The distribution of sign in traffic between the instance and its replica(s).</p>
 * @public
 */
export interface SignInDistribution {
  /**
   * <p>The Amazon Web Services Region of the sign in distribution.</p>
   * @public
   */
  Region: string | undefined;

  /**
   * <p>Whether sign in distribution is enabled.</p>
   * @public
   */
  Enabled: boolean | undefined;
}

/**
 * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
 *    agents in to both the instance and its replica(s).</p>
 * @public
 */
export interface SignInConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * <p>The distribution of traffic between the instance and its replicas.</p>
 * @public
 */
export interface TelephonyConfig {
  /**
   * <p>Information about traffic distributions.</p>
   * @public
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * <p>The distribution of traffic between the instance and its replicas.</p>
   * @public
   */
  TelephonyConfig?: TelephonyConfig | undefined;

  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string | undefined;

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
export interface ImportPhoneNumberRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The claimed phone number ARN being imported from the external service, such as Amazon Web Services End User Messaging. If it is from Amazon Web Services End User Messaging, it looks
   *    like the ARN of the phone number to import from Amazon Web Services End User Messaging.</p>
   * @public
   */
  SourcePhoneNumberArn: string | undefined;

  /**
   * <p>The description of the phone number.</p>
   * @public
   */
  PhoneNumberDescription?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

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
export interface ImportPhoneNumberResponse {
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
export interface ListAgentStatusRequest {
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
   * <p>Available agent status types.</p>
   * @public
   */
  AgentStatusTypes?: AgentStatusType[] | undefined;
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A summary of agent statuses.</p>
   * @public
   */
  AgentStatusSummaryList?: AgentStatusSummary[] | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the dataset to get the association status.</p>
   * @public
   */
  DataSetId?: string | undefined;

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
}

/**
 * @public
 */
export interface ListAnalyticsDataAssociationsResponse {
  /**
   * <p>An array of successful results: <code>DataSetId</code>, <code>TargetAccountId</code>,
   *     <code>ResourceShareId</code>, <code>ResourceShareArn</code>. This is a paginated API, so
   *     <code>nextToken</code> is given if there are more results to be returned.</p>
   * @public
   */
  Results?: AnalyticsDataAssociationResult[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsRequest {
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
}

/**
 * <p>Information about datasets that are available to associate with: <code>DataSetId</code>,
 *     <code>DataSetName</code>.</p>
 * @public
 */
export interface AnalyticsDataSetsResult {
  /**
   * <p>The identifier of the dataset.</p>
   * @public
   */
  DataSetId?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DataSetName?: string | undefined;
}

/**
 * @public
 */
export interface ListAnalyticsDataLakeDataSetsResponse {
  /**
   * <p>An array of successful results: <code>DataSetId</code>, <code>DataSetName</code>. This is a
   *    paginated API, so <code>nextToken</code> is given if there are more results to be
   *    returned.</p>
   * @public
   */
  Results?: AnalyticsDataSetsResult[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
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
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * <p>The approved origins.</p>
   * @public
   */
  Origins?: string[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociatedContactsRequest {
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
   * <p>The maximum number of results to return per page. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contact summary of a contact in contact tree associated with unique identifier.</p>
 * @public
 */
export interface AssociatedContactSummary {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact</p>
   * @public
   */
  ContactArn?: string | undefined;

  /**
   * <p>The date and time this contact was initiated, in UTC time.</p>
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
   * <p>The contactId that is related to this contact.</p>
   * @public
   */
  RelatedContactId?: string | undefined;

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
}

/**
 * @public
 */
export interface ListAssociatedContactsResponse {
  /**
   * <p>List of the contact summary for all the contacts in contact tree associated with unique
   *    identifier.</p>
   * @public
   */
  ContactSummaryList?: AssociatedContactSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesRequest {
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
}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web Services Support.</p>
 *          <p>A summary of a given authentication profile.</p>
 * @public
 */
export interface AuthenticationProfileSummary {
  /**
   * <p>The unique identifier of the authentication profile.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the authentication profile summary.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the authentication profile summary.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Shows whether the authentication profile is the default authentication profile for the
   *     Amazon Connect instance. The default authentication profile applies to all agents in an
   *     Amazon Connect instance, unless overridden by another authentication profile.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The timestamp when the authentication profile summary was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>The Amazon Web Services Region when the authentication profile summary was last
   *    modified.</p>
   * @public
   */
  LastModifiedRegion?: string | undefined;
}

/**
 * @public
 */
export interface ListAuthenticationProfilesResponse {
  /**
   * <p>A summary of a given authentication profile.</p>
   * @public
   */
  AuthenticationProfileSummaryList?: AuthenticationProfileSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LexVersion = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type LexVersion = (typeof LexVersion)[keyof typeof LexVersion];

/**
 * @public
 */
export interface ListBotsRequest {
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
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   * @public
   */
  LexVersion: LexVersion | undefined;
}

/**
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 * @public
 */
export interface LexBotConfig {
  /**
   * <p>Configuration information of an Amazon Lex bot.</p>
   * @public
   */
  LexBot?: LexBot | undefined;

  /**
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   * @public
   */
  LexV2Bot?: LexV2Bot | undefined;
}

/**
 * @internal
 */
export const CreateViewResponseFilterSensitiveLog = (obj: CreateViewResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});

/**
 * @internal
 */
export const CreateViewVersionResponseFilterSensitiveLog = (obj: CreateViewVersionResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
});

/**
 * @internal
 */
export const DescribeEmailAddressResponseFilterSensitiveLog = (obj: DescribeEmailAddressResponse): any => ({
  ...obj,
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.DisplayName && { DisplayName: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
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
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const DescribeUserResponseFilterSensitiveLog = (obj: DescribeUserResponse): any => ({
  ...obj,
  ...(obj.User && { User: UserFilterSensitiveLog(obj.User) }),
});

/**
 * @internal
 */
export const DescribeViewResponseFilterSensitiveLog = (obj: DescribeViewResponse): any => ({
  ...obj,
  ...(obj.View && { View: ViewFilterSensitiveLog(obj.View) }),
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
  ...(obj.Credentials && { Credentials: SENSITIVE_STRING }),
});
