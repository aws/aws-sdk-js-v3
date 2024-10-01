// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  AgentAvailabilityTimer,
  AgentConfig,
  AgentHierarchyGroups,
  AgentInfo,
  AgentStatus,
  AgentStatusSearchFilter,
  AgentStatusState,
  AllowedCapabilities,
  AnsweringMachineDetectionStatus,
  Application,
  AttributeCondition,
  Campaign,
  Channel,
  ContactFlowStatus,
  ContactFlowType,
  ContactInitiationMethod,
  ControlPlaneAttributeFilter,
  CreatedByInfo,
  Customer,
  CustomerVoiceActivity,
  DisconnectDetails,
  Endpoint,
  EvaluationFormQuestion,
  EvaluationFormScoringStrategy,
  Expiry,
  FileStatusType,
  FileUseCaseType,
  HoursOfOperationConfig,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  MediaConcurrency,
  MonitorCapability,
  OutboundCallerConfig,
  ParticipantRole,
  PredefinedAttributeValues,
  QualityMetrics,
  QueueInfo,
  QuickConnectConfig,
  Reference,
  RehydrationType,
  RoutingProfileQueueConfig,
  RuleAction,
  RulePublishStatus,
  StringComparisonType,
  StringCondition,
  TagCondition,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UseCaseType,
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserPhoneConfig,
  UserProficiency,
  View,
  ViewFilterSensitiveLog,
  ViewInputContent,
  ViewInputContentFilterSensitiveLog,
  ViewStatus,
  ViewType,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

import {
  ContactFlow,
  ContactFlowModule,
  ContactFlowModuleState,
  ContactFlowState,
  Evaluation,
  EvaluationAnswerData,
  EvaluationFormVersionStatus,
  EvaluationNote,
  HierarchyGroup,
  HierarchyGroupSummary,
  HoursOfOperation,
  InstanceAttributeType,
  PhoneNumberCountryCode,
  PhoneNumberType,
  PredefinedAttribute,
  Prompt,
  Queue,
  QueueStatus,
  QuickConnect,
  RoutingCriteriaStepStatus,
  RoutingProfile,
  SegmentAttributeValue,
  SignInConfig,
  SortOrder,
  TelephonyConfig,
  TrafficDistributionGroupStatus,
  WisdomInfo,
} from "./models_1";

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>Contains summary information about the task template.</p>
 * @public
 */
export interface TaskTemplateMetadata {
  /**
   * <p>A unique identifier for the task template.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListTaskTemplatesResponse {
  /**
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   * @public
   */
  TaskTemplates?: TaskTemplateMetadata[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;
}

/**
 * <p>Information about traffic distribution groups.</p>
 * @public
 */
export interface TrafficDistributionGroupSummary {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the traffic distribution group.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   * @public
   */
  InstanceArn?: string;

  /**
   * <p>The status of the traffic distribution group. </p>
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
   * @public
   */
  Status?: TrafficDistributionGroupStatus;

  /**
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   * @public
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of traffic distribution groups.</p>
   * @public
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[];
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   * @public
   */
  TrafficDistributionGroupId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Summary information about a traffic distribution group user.</p>
 * @public
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of traffic distribution group users.</p>
   * @public
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[];
}

/**
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
 * @public
 */
export interface ListUseCasesRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains the
 *    use
 *    case.</p>
 * @public
 */
export interface UseCase {
  /**
   * <p>The identifier for the use case.</p>
   * @public
   */
  UseCaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   * @public
   */
  UseCaseArn?: string;

  /**
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   * @public
   */
  UseCaseType?: UseCaseType;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * <p>The use cases.</p>
   * @public
   */
  UseCaseSummaryList?: UseCase[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * <p>Information about the hierarchy groups.</p>
   * @public
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserProficienciesRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserProficienciesResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Information about the user proficiencies.</p>
   * @public
   */
  UserProficiencyList?: UserProficiency[];

  /**
   * <p>The last time that the user's proficiencies are were modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The region in which a user's proficiencies were last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Contains summary information about a user.</p>
 * @public
 */
export interface UserSummary {
  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The Amazon Connect user name of the user account.</p>
   * @public
   */
  Username?: string;

  /**
   * <p>The timestamp when this resource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The Amazon Web Services Region where this resource was last modified.</p>
   * @public
   */
  LastModifiedRegion?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>Information about the users.</p>
   * @public
   */
  UserSummaryList?: UserSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListViewsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A summary of a view's metadata.</p>
 * @public
 */
export interface ViewSummary {
  /**
   * <p>The identifier of the view.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the view.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the view.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of the view.</p>
   * @public
   */
  Type?: ViewType;

  /**
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   * @public
   */
  Status?: ViewStatus;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface ListViewsResponse {
  /**
   * <p>A list of view summaries.</p>
   * @public
   */
  ViewsSummaryList?: ViewSummary[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListViewVersionsRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A summary of a view version's metadata.</p>
 * @public
 */
export interface ViewVersionSummary {
  /**
   * <p>The identifier of the view version.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the view version.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The name of the view version.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of the view version.</p>
   * @public
   */
  Type?: ViewType;

  /**
   * <p>The sequentially incremented version of the view version.</p>
   * @public
   */
  Version?: number;

  /**
   * <p>The description of the view version.</p>
   * @public
   */
  VersionDescription?: string;
}

/**
 * @public
 */
export interface ListViewVersionsResponse {
  /**
   * <p>A list of view version summaries.</p>
   * @public
   */
  ViewVersionSummaryList?: ViewVersionSummary[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user
   *    is allowed to escalate from silent monitoring to barge. AllowedMonitorCapabilities is required if
   *    barge is enabled.</p>
   * @public
   */
  AllowedMonitorCapabilities?: MonitorCapability[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface MonitorContactResponse {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId?: string;

  /**
   * <p>The ARN of the contact.</p>
   * @public
   */
  ContactArn?: string;
}

/**
 * <p>Operation cannot be performed at this time as there is a conflict with another operation or
 *    contact state.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface PauseContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string;
}

/**
 * @public
 */
export interface PauseContactResponse {}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * <p>The identifier of the user.</p>
   * @public
   */
  UserId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;
}

/**
 * @public
 */
export interface PutUserStatusResponse {}

/**
 * @public
 */
export interface ReleasePhoneNumberRequest {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface ReplicateInstanceRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Web Services Region where to replicate the Amazon Connect instance.</p>
   * @public
   */
  ReplicaRegion: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   * @public
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the
   *    ARN of the instance. The replicated instance has the same identifier as the instance it was
   *    replicated from.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   * @public
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ResumeContactRequest {
  /**
   * <p>The identifier of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can find the <code>instanceId</code> in the ARN of
   *    the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId?: string;
}

/**
 * @public
 */
export interface ResumeContactResponse {}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAgentStatusesResponse {
  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  AgentStatuses?: AgentStatus[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of agent statuses which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  TargetArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | undefined;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType: PhoneNumberType | undefined;

  /**
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   * @public
   */
  PhoneNumberPrefix?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Information about available phone numbers.</p>
 * @public
 */
export interface AvailableNumberSummary {
  /**
   * <p>The phone number. Phone numbers are formatted <code>[+] [country code] [subscriber number including area code]</code>.</p>
   * @public
   */
  PhoneNumber?: string;

  /**
   * <p>The ISO country code.</p>
   * @public
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode;

  /**
   * <p>The type of phone number.</p>
   * @public
   */
  PhoneNumberType?: PhoneNumberType;
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.</p>
   * @public
   */
  AvailableNumbersList?: AvailableNumberSummary[];
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
 * @public
 */
export interface ControlPlaneTagFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.
   *   </p>
   * @public
   */
  OrConditions?: TagCondition[][];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: TagCondition[];

  /**
   * <p>A leaf node condition which can be used to specify a tag condition. </p>
   * @public
   */
  TagCondition?: TagCondition;
}

/**
 * <p>The search criteria to be used to return flow modules.</p>
 * @public
 */
export interface ContactFlowModuleSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchContactFlowModulesResponse {
  /**
   * <p>The search criteria to be used to return contact flow modules.</p>
   * @public
   */
  ContactFlowModules?: ContactFlowModule[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of contact flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface ContactFlowSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchContactFlowsResponse {
  /**
   * <p>Information about the flows.</p>
   * @public
   */
  ContactFlows?: ContactFlow[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of contact flows which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const SearchContactsMatchType = {
  MATCH_ALL: "MATCH_ALL",
  MATCH_ANY: "MATCH_ANY",
} as const;

/**
 * @public
 */
export type SearchContactsMatchType = (typeof SearchContactsMatchType)[keyof typeof SearchContactsMatchType];

/**
 * <p>A structure that defines search criteria base on words or phrases, participants in the
 *    Contact Lens conversational analytics transcript.</p>
 * @public
 */
export interface TranscriptCriteria {
  /**
   * <p>The participant role in a transcript</p>
   * @public
   */
  ParticipantRole: ParticipantRole | undefined;

  /**
   * <p>The words or phrases used to search within a transcript.</p>
   * @public
   */
  SearchText: string[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple search texts in a transcript
   *    criteria.</p>
   * @public
   */
  MatchType: SearchContactsMatchType | undefined;
}

/**
 * <p>A structure that defines search criteria and matching logic to search for contacts by
 *    matching text with transcripts analyzed by Amazon Connect Contact Lens.</p>
 * @public
 */
export interface Transcript {
  /**
   * <p>The list of search criteria based on Contact Lens conversational analytics
   *    transcript.</p>
   * @public
   */
  Criteria: TranscriptCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple transcript criteria.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType;
}

/**
 * <p>A structure that defines search criteria for contacts using analysis outputs from Amazon
 *    Connect Contact Lens.</p>
 * @public
 */
export interface ContactAnalysis {
  /**
   * <p>Search criteria based on transcript analyzed by Amazon Connect Contact Lens.</p>
   * @public
   */
  Transcript?: Transcript;
}

/**
 * <p>The search criteria based on user-defned contact attribute key and values to search
 *    on.</p>
 * @public
 */
export interface SearchableContactAttributesCriteria {
  /**
   * <p>The key containing a searchable user-defined contact attribute.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The list of values to search for within a user-defined contact attribute.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>A structure that defines search criteria based on user-defined contact attributes that are
 *    configured for contact search.</p>
 * @public
 */
export interface SearchableContactAttributes {
  /**
   * <p>The list of criteria based on user-defined contact attributes that are configured for
   *    contact search.</p>
   * @public
   */
  Criteria: SearchableContactAttributesCriteria[] | undefined;

  /**
   * <p>The match type combining search criteria using multiple searchable contact
   *    attributes.</p>
   * @public
   */
  MatchType?: SearchContactsMatchType;
}

/**
 * <p>A structure of search criteria to be used to return contacts.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>The identifiers of agents who handled the contacts.</p>
   * @public
   */
  AgentIds?: string[];

  /**
   * <p>The agent hierarchy groups of the agent at the time of handling the contact.</p>
   * @public
   */
  AgentHierarchyGroups?: AgentHierarchyGroups;

  /**
   * <p>The list of channels associated with contacts.</p>
   * @public
   */
  Channels?: Channel[];

  /**
   * <p>Search criteria based on analysis outputs from Amazon Connect Contact Lens.</p>
   * @public
   */
  ContactAnalysis?: ContactAnalysis;

  /**
   * <p>The list of initiation methods associated with contacts.</p>
   * @public
   */
  InitiationMethods?: ContactInitiationMethod[];

  /**
   * <p>The list of queue IDs associated with contacts.</p>
   * @public
   */
  QueueIds?: string[];

  /**
   * <p>The search criteria based on user-defined contact attributes that have been configured for
   *    contact search. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/search-custom-attributes.html">Search by custom contact
   *     attributes</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   *          <important>
   *             <p>To use <code>SearchableContactAttributes</code> in a search request, the
   *      <code>GetContactAttributes</code> action is required to perform an API request. For more
   *     information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions">https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonconnect.html#amazonconnect-actions-as-permissions</a>Actions defined by Amazon Connect.</p>
   *          </important>
   * @public
   */
  SearchableContactAttributes?: SearchableContactAttributes;
}

/**
 * @public
 * @enum
 */
export const SortableFieldName = {
  CHANNEL: "CHANNEL",
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  INITIATION_METHOD: "INITIATION_METHOD",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SortableFieldName = (typeof SortableFieldName)[keyof typeof SortableFieldName];

/**
 * <p>A structure that defines the field name to sort by and a sort order.</p>
 * @public
 */
export interface Sort {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName: SortableFieldName | undefined;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Order: SortOrder | undefined;
}

/**
 * @public
 * @enum
 */
export const SearchContactsTimeRangeType = {
  CONNECTED_TO_AGENT_TIMESTAMP: "CONNECTED_TO_AGENT_TIMESTAMP",
  DISCONNECT_TIMESTAMP: "DISCONNECT_TIMESTAMP",
  INITIATION_TIMESTAMP: "INITIATION_TIMESTAMP",
  SCHEDULED_TIMESTAMP: "SCHEDULED_TIMESTAMP",
} as const;

/**
 * @public
 */
export type SearchContactsTimeRangeType =
  (typeof SearchContactsTimeRangeType)[keyof typeof SearchContactsTimeRangeType];

/**
 * <p>A structure of time range that you want to search results.</p>
 * @public
 */
export interface SearchContactsTimeRange {
  /**
   * <p>The type of timestamp to search.</p>
   * @public
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * <p>The start time of the time range.</p>
   * @public
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the time range.</p>
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface SearchContactsRequest {
  /**
   * <p>The identifier of Amazon Connect instance. You can find the instance ID in the Amazon
   *    Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Time range that you want to search results.</p>
   * @public
   */
  TimeRange: SearchContactsTimeRange | undefined;

  /**
   * <p>The search criteria to be used to return contacts.</p>
   * @public
   */
  SearchCriteria?: SearchCriteria;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies a field to sort by and a sort order.</p>
   * @public
   */
  Sort?: Sort;
}

/**
 * <p>Information about the agent who accepted the contact.</p>
 * @public
 */
export interface ContactSearchSummaryAgentInfo {
  /**
   * <p>The identifier of the agent who accepted the contact.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The timestamp when the contact was connected to the agent.</p>
   * @public
   */
  ConnectedToAgentTimestamp?: Date;
}

/**
 * <p>If this contact was queued, this contains information about the queue.</p>
 * @public
 */
export interface ContactSearchSummaryQueueInfo {
  /**
   * <p>The unique identifier for the queue.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The timestamp when the contact was added to the queue.</p>
   * @public
   */
  EnqueueTimestamp?: Date;
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
  Arn?: string;

  /**
   * <p>The identifier of the contact summary.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel;

  /**
   * <p>If this contact was queued, this contains information about the queue.</p>
   * @public
   */
  QueueInfo?: ContactSearchSummaryQueueInfo;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: ContactSearchSummaryAgentInfo;

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
  InitiationTimestamp?: Date;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   * @public
   */
  DisconnectTimestamp?: Date;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</p>
   * @public
   */
  ScheduledTimestamp?: Date;
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
  NextToken?: string;

  /**
   * <p>The total number of contacts which matched your search query.</p>
   * @public
   */
  TotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface HoursOfOperationSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsResponse {
  /**
   * <p>Information about the hours of operations.</p>
   * @public
   */
  HoursOfOperations?: HoursOfOperation[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of hours of operations which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesResponse {
  /**
   * <p>Predefined attributes matched by the search criteria.</p>
   * @public
   */
  PredefinedAttributes?: PredefinedAttribute[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The approximate number of predefined attributes which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface PromptSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchPromptsResponse {
  /**
   * <p>Information about the prompts.</p>
   * @public
   */
  Prompts?: Prompt[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of quick connects which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const SearchableQueueType = {
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type SearchableQueueType = (typeof SearchableQueueType)[keyof typeof SearchableQueueType];

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface QueueSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchQueuesResponse {
  /**
   * <p>Information about the queues.</p>
   * @public
   */
  Queues?: Queue[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of queues which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface QuickConnectSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchQuickConnectsResponse {
  /**
   * <p>Information about the quick connects.</p>
   * @public
   */
  QuickConnects?: QuickConnect[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of quick connects which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Maximum number (1000) of tags have been returned with current request. Consider changing
 *    request parameters to get more tags.</p>
 * @public
 */
export class MaximumResultReturnedException extends __BaseException {
  readonly name: "MaximumResultReturnedException" = "MaximumResultReturnedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MaximumResultReturnedException, __BaseException>) {
    super({
      name: "MaximumResultReturnedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MaximumResultReturnedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The search criteria to be used to return tags.</p>
 * @public
 */
export interface TagSearchCondition {
  /**
   * <p>The tag key used in the tag search condition.</p>
   * @public
   */
  tagKey?: string;

  /**
   * <p>The tag value used in the tag search condition.</p>
   * @public
   */
  tagValue?: string;

  /**
   * <p>The type of comparison to be made when evaluating the tag key in tag search
   *    condition.</p>
   * @public
   */
  tagKeyComparisonType?: StringComparisonType;

  /**
   * <p>The type of comparison to be made when evaluating the tag value in tag search
   *    condition.</p>
   * @public
   */
  tagValueComparisonType?: StringComparisonType;
}

/**
 * <p>The search criteria to be used to search tags.</p>
 * @public
 */
export interface ResourceTagsSearchCriteria {
  /**
   * <p>The search criteria to be used to return tags.</p>
   * @public
   */
  TagSearchCondition?: TagSearchCondition;
}

/**
 * @public
 */
export interface SearchResourceTagsRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon
   *    Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The list of resource types to be used to search tags from. If not provided or if any empty
   *    list is provided, this API will search from all supported resource types.</p>
   *          <p class="title">
   *             <b>Supported resource types</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>AGENT</p>
   *             </li>
   *             <li>
   *                <p>ROUTING_PROFILE</p>
   *             </li>
   *             <li>
   *                <p>STANDARD_QUEUE</p>
   *             </li>
   *             <li>
   *                <p>SECURITY_PROFILE</p>
   *             </li>
   *             <li>
   *                <p>OPERATING_HOURS</p>
   *             </li>
   *             <li>
   *                <p>PROMPT</p>
   *             </li>
   *             <li>
   *                <p>CONTACT_FLOW</p>
   *             </li>
   *             <li>
   *                <p>FLOW_MODULE</p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceTypes?: string[];

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The search criteria to be used to return tags.</p>
   * @public
   */
  SearchCriteria?: ResourceTagsSearchCriteria;
}

/**
 * <p>A tag set contains tag key and tag value.</p>
 * @public
 */
export interface TagSet {
  /**
   * <p>The tag key in the tagSet.</p>
   * @public
   */
  key?: string;

  /**
   * <p>The tag value in the tagSet.</p>
   * @public
   */
  value?: string;
}

/**
 * @public
 */
export interface SearchResourceTagsResponse {
  /**
   * <p>A list of tags used in the Amazon Connect instance.</p>
   * @public
   */
  Tags?: TagSet[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface RoutingProfileSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * @public
 */
export interface SearchRoutingProfilesResponse {
  /**
   * <p>Information about the routing profiles.</p>
   * @public
   */
  RoutingProfiles?: RoutingProfile[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of routing profiles which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface SecurityProfilesSearchFilter {
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;
}

/**
 * <p>Information about the returned security profiles.</p>
 * @public
 */
export interface SecurityProfileSearchSummary {
  /**
   * <p>The identifier of the security profile.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The organization resource identifier.</p>
   * @public
   */
  OrganizationResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the security profile.</p>
   * @public
   */
  SecurityProfileName?: string;

  /**
   * <p>The description of the security profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchSecurityProfilesResponse {
  /**
   * <p>Information about the security profiles.</p>
   * @public
   */
  SecurityProfiles?: SecurityProfileSearchSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of security profiles which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
 */
export interface UserHierarchyGroupSearchFilter {
  /**
   * <p>An object that can be used to specify Tag conditions inside the SearchFilter. This accepts
   *    an OR or AND (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributeFilter?: ControlPlaneAttributeFilter;
}

/**
 * @public
 */
export interface SearchUserHierarchyGroupsResponse {
  /**
   * <p>Information about the userHierarchyGroups.</p>
   * @public
   */
  UserHierarchyGroups?: HierarchyGroup[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of userHierarchyGroups which matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const HierarchyGroupMatchType = {
  EXACT: "EXACT",
  WITH_CHILD_GROUPS: "WITH_CHILD_GROUPS",
} as const;

/**
 * @public
 */
export type HierarchyGroupMatchType = (typeof HierarchyGroupMatchType)[keyof typeof HierarchyGroupMatchType];

/**
 * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
 * @public
 */
export interface HierarchyGroupCondition {
  /**
   * <p>The value in the hierarchy group condition.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>The type of hierarchy group match.</p>
   * @public
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType;
}

/**
 * @public
 * @enum
 */
export const NumberComparisonType = {
  EQUAL: "EQUAL",
  GREATER: "GREATER",
  GREATER_OR_EQUAL: "GREATER_OR_EQUAL",
  LESSER: "LESSER",
  LESSER_OR_EQUAL: "LESSER_OR_EQUAL",
  NOT_EQUAL: "NOT_EQUAL",
  RANGE: "RANGE",
} as const;

/**
 * @public
 */
export type NumberComparisonType = (typeof NumberComparisonType)[keyof typeof NumberComparisonType];

/**
 * <p>A leaf node condition which can be used to specify a numeric condition.</p>
 *          <note>
 *             <p>The currently supported value for <code>FieldName</code> is <code>limit</code>.</p>
 *          </note>
 * @public
 */
export interface NumberCondition {
  /**
   * <p>The name of the field in the number condition.</p>
   * @public
   */
  FieldName?: string;

  /**
   * <p>The minValue to be used while evaluating the number condition.</p>
   * @public
   */
  MinValue?: number;

  /**
   * <p>The maxValue to be used while evaluating the number condition.</p>
   * @public
   */
  MaxValue?: number;

  /**
   * <p>The type of comparison to be made when evaluating the number condition.</p>
   * @public
   */
  ComparisonType?: NumberComparisonType;
}

/**
 * <p>A leaf node condition which can be used to specify a ProficiencyName, ProficiencyValue and
 *    ProficiencyLimit.</p>
 * @public
 */
export interface Condition {
  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and
   *      <code>value</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;

  /**
   * <p>A leaf node condition which can be used to specify a numeric condition.</p>
   * @public
   */
  NumberCondition?: NumberCondition;
}

/**
 * @public
 * @enum
 */
export const TargetListType = {
  PROFICIENCIES: "PROFICIENCIES",
} as const;

/**
 * @public
 */
export type TargetListType = (typeof TargetListType)[keyof typeof TargetListType];

/**
 * <p>A leaf node condition which can be used to specify a List condition to search users with
 *    attributes included in Lists like Proficiencies.</p>
 * @public
 */
export interface ListCondition {
  /**
   * <p>The type of target list that will be used to filter the users.</p>
   * @public
   */
  TargetListType?: TargetListType;

  /**
   * <p>A list of Condition objects which would be applied together with an AND condition.</p>
   * @public
   */
  Conditions?: Condition[];
}

/**
 * <p>A list of conditions which would be applied together with an <code>AND</code>
 *    condition.</p>
 * @public
 */
export interface AttributeAndCondition {
  /**
   * <p>A leaf node condition which can be used to specify a tag condition.</p>
   * @public
   */
  TagConditions?: TagCondition[];

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

/**
 * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside
 *    the <code>SearchFilter</code>.</p>
 *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
 *          <ul>
 *             <li>
 *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
 *      operator</p>
 *             </li>
 *             <li>
 *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
 *      operator.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Only one field can be populated. Maximum number of allowed Tag conditions is 25. Maximum
 *     number of allowed Hierarchy Group conditions is 20. </p>
 *          </note>
 * @public
 */
export interface ControlPlaneUserAttributeFilter {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: AttributeAndCondition[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndCondition?: AttributeAndCondition;

  /**
   * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
   *     BPO = 123</code>. </p>
   * @public
   */
  TagCondition?: TagCondition;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

/**
 * <p>Filters to be applied to search results.</p>
 * @public
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
   * @public
   */
  TagFilter?: ControlPlaneTagFilter;

  /**
   * <p>An object that can be used to specify Tag conditions or Hierarchy Group conditions inside
   *    the SearchFilter.</p>
   *          <p>This accepts an <code>OR</code> of <code>AND</code> (List of List) input where:</p>
   *          <ul>
   *             <li>
   *                <p>The top level list specifies conditions that need to be applied with <code>OR</code>
   *      operator.</p>
   *             </li>
   *             <li>
   *                <p>The inner list specifies conditions that need to be applied with <code>AND</code>
   *      operator.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Only one field can be populated. This object can’t be used along with TagFilter. Request
   *     can either contain TagFilter or UserAttributeFilter if SearchFilter is specified, combination of
   *     both is not supported and such request will throw AccessDeniedException.</p>
   *          </note>
   * @public
   */
  UserAttributeFilter?: ControlPlaneUserAttributeFilter;
}

/**
 * <p>The user's first name and last name.</p>
 * @public
 */
export interface UserIdentityInfoLite {
  /**
   * <p>The user's first name.</p>
   * @public
   */
  FirstName?: string;

  /**
   * <p>The user's last name.</p>
   * @public
   */
  LastName?: string;
}

/**
 * <p>Information about the returned users.</p>
 * @public
 */
export interface UserSearchSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The directory identifier of the user.</p>
   * @public
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier of the user's hierarchy group.</p>
   * @public
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user's summary.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The user's first name and last name.</p>
   * @public
   */
  IdentityInfo?: UserIdentityInfoLite;

  /**
   * <p>Contains information about the phone configuration settings for a user.</p>
   * @public
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the user's routing profile.</p>
   * @public
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifiers of the user's security profiles.</p>
   * @public
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the user.</p>
   * @public
   */
  Username?: string;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * <p>Information about the users.</p>
   * @public
   */
  Users?: UserSearchSummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The total number of users who matched your search query.</p>
   * @public
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchVocabulariesRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The current state of the custom vocabulary.</p>
   * @public
   */
  State?: VocabularyState;

  /**
   * <p>The starting pattern of the name of the vocabulary.</p>
   * @public
   */
  NameStartsWith?: string;

  /**
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   * @public
   */
  LanguageCode?: VocabularyLanguageCode;
}

/**
 * <p>Contains summary information about the custom vocabulary.</p>
 * @public
 */
export interface VocabularySummary {
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
  FailureReason?: string;
}

/**
 * @public
 */
export interface SearchVocabulariesResponse {
  /**
   * <p>The list of the available custom vocabularies.</p>
   * @public
   */
  VocabularySummaryList?: VocabularySummary[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ChatEventType = {
  DISCONNECT: "DISCONNECT",
  EVENT: "EVENT",
  MESSAGE: "MESSAGE",
} as const;

/**
 * @public
 */
export type ChatEventType = (typeof ChatEventType)[keyof typeof ChatEventType];

/**
 * <p>Chat integration event containing payload to perform different chat actions such as:</p>
 *          <ul>
 *             <li>
 *                <p>Sending a chat message</p>
 *             </li>
 *             <li>
 *                <p>Sending a chat event, such as typing</p>
 *             </li>
 *             <li>
 *                <p>Disconnecting from a chat</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface ChatEvent {
  /**
   * <p>Type of chat integration event. </p>
   * @public
   */
  Type: ChatEventType | undefined;

  /**
   * <p>Type of content. This is required when <code>Type</code> is <code>MESSAGE</code> or
   *     <code>EVENT</code>. </p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content types, see the <code>ContentType</code> parameter in the
   *       <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content types, see the <code>ContentType</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ContentType?: string;

  /**
   * <p>Content of the message or event. This is required when <code>Type</code> is
   *     <code>MESSAGE</code> and for certain <code>ContentTypes</code> when <code>Type</code> is
   *     <code>EVENT</code>.</p>
   *          <ul>
   *             <li>
   *                <p>For allowed message content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendMessage.html">SendMessage</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>.</p>
   *             </li>
   *             <li>
   *                <p>For allowed event content, see the <code>Content</code> parameter in the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_SendEvent.html">SendEvent</a> topic in the <i>Amazon Connect Participant Service API
   *       Reference</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Content?: string;
}

/**
 * <p>The customer's details.</p>
 * @public
 */
export interface ParticipantDetails {
  /**
   * <p>Display name of the participant.</p>
   * @public
   */
  DisplayName: string | undefined;
}

/**
 * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
 * @public
 */
export interface ChatStreamingConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used
   *    to publish real-time message streaming for chat conversations.</p>
   * @public
   */
  StreamingEndpointArn: string | undefined;
}

/**
 * <p>Payload of chat properties to apply when starting a new contact.</p>
 * @public
 */
export interface NewSessionDetails {
  /**
   * <p> The supported chat message content types. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>,
   *     <code>application/vnd.amazonaws.connect.message.interactive</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p>
   *          <p>Content types must always contain <code> text/plain</code>. You can then put any other
   *    supported type in the list. For example, all the following lists are valid because they contain
   *     <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>, <code>
   *     [text/markdown, text/plain]</code>, <code>[text/plain, application/json,
   *     application/vnd.amazonaws.connect.message.interactive.response]</code>. </p>
   * @public
   */
  SupportedMessagingContentTypes?: string[];

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails?: ParticipantDetails;

  /**
   * <p> A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p> There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute
   *    keys can include only alphanumeric, dash, and underscore characters. </p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   * @public
   */
  StreamingConfiguration?: ChatStreamingConfiguration;
}

/**
 * @public
 */
export interface SendChatIntegrationEventRequest {
  /**
   * <p>External identifier of chat customer participant, used in part to uniquely identify a chat.
   *    For SMS, this is the E164 phone number of the chat customer participant.</p>
   * @public
   */
  SourceId: string | undefined;

  /**
   * <p>Chat system identifier, used in part to uniquely identify chat. This is associated with the
   *     Amazon Connect instance and flow to be used to start chats. For SMS, this is the phone
   *    number destination of inbound SMS messages represented by an Amazon Pinpoint phone number
   *    ARN.</p>
   * @public
   */
  DestinationId: string | undefined;

  /**
   * <p>Classification of a channel. This is used in part to uniquely identify chat. </p>
   *          <p>Valid value: <code>["connect:sms"]</code>
   *          </p>
   * @public
   */
  Subtype?: string;

  /**
   * <p>Chat integration event payload</p>
   * @public
   */
  Event: ChatEvent | undefined;

  /**
   * <p>Contact properties to apply when starting a new chat. If the integration event is handled
   *    with an existing chat, this is ignored.</p>
   * @public
   */
  NewSessionDetails?: NewSessionDetails;
}

/**
 * @public
 */
export interface SendChatIntegrationEventResponse {
  /**
   * <p>Identifier of chat contact used to handle integration event. This may be null if the
   *    integration event is not valid without an already existing chat contact.</p>
   * @public
   */
  InitialContactId?: string;

  /**
   * <p>Whether handling the integration event resulted in creating a new chat or acting on existing
   *    chat.</p>
   * @public
   */
  NewChatCreated?: boolean;
}

/**
 * @public
 */
export interface StartAttachedFileUploadRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The unique identifier of the Amazon Connect instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A case-sensitive name of the attached file being uploaded.</p>
   * @public
   */
  FileName: string | undefined;

  /**
   * <p>The size of the attached file in bytes.</p>
   * @public
   */
  FileSizeInBytes: number | undefined;

  /**
   * <p>Optional override for the expiry of the pre-signed S3 URL in seconds. The default value is
   *    300.</p>
   * @public
   */
  UrlExpiryInSeconds?: number;

  /**
   * <p>The use case for the file.</p>
   * @public
   */
  FileUseCaseType: FileUseCaseType | undefined;

  /**
   * <p>The resource to which the attached file is (being) uploaded to. <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_connect-cases_CreateCase.html">Cases</a> are the only
   *    current supported resource.</p>
   *          <note>
   *             <p>This value must be a valid ARN.</p>
   *          </note>
   * @public
   */
  AssociatedResourceArn: string | undefined;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, <code>\{
   *     "Tags": \{"key1":"value1", "key2":"value2"\} \}</code>.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Fields required when uploading an attached file. </p>
 * @public
 */
export interface UploadUrlMetadata {
  /**
   * <p>A pre-signed S3 URL that should be used for uploading the attached file. </p>
   * @public
   */
  Url?: string;

  /**
   * <p>The expiration time of the URL in ISO timestamp. It's specified in ISO 8601 format:
   *     <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2019-11-08T02:41:28.172Z</code>.</p>
   * @public
   */
  UrlExpiry?: string;

  /**
   * <p>A map of headers that should be provided when uploading the attached file. </p>
   * @public
   */
  HeadersToInclude?: Record<string, string>;
}

/**
 * Response from StartAttachedFileUpload API.
 * @public
 */
export interface StartAttachedFileUploadResponse {
  /**
   * <p>The unique identifier of the attached file resource (ARN).</p>
   * @public
   */
  FileArn?: string;

  /**
   * <p>The unique identifier of the attached file resource.</p>
   * @public
   */
  FileId?: string;

  /**
   * <p>The time of Creation of the file resource as an ISO timestamp. It's specified in ISO 8601
   *    format: <code>yyyy-MM-ddThh:mm:ss.SSSZ</code>. For example,
   *    <code>2024-05-03T02:41:28.172Z</code>.</p>
   * @public
   */
  CreationTime?: string;

  /**
   * <p>The current status of the attached file.</p>
   * @public
   */
  FileStatus?: FileStatusType;

  /**
   * <p>Represents the identity that created the file.</p>
   * @public
   */
  CreatedBy?: CreatedByInfo;

  /**
   * <p>Information to be used while uploading the attached file. </p>
   * @public
   */
  UploadUrlMetadata?: UploadUrlMetadata;
}

/**
 * <p>A chat message.</p>
 * @public
 */
export interface ChatMessage {
  /**
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>The content of the chat message. </p>
   *          <ul>
   *             <li>
   *                <p>For <code>text/plain</code> and <code>text/markdown</code>, the Length Constraints are
   *      Minimum of 1, Maximum of 1024. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/json</code>, the Length Constraints are Minimum of 1, Maximum of
   *      12000. </p>
   *             </li>
   *             <li>
   *                <p>For <code>application/vnd.amazonaws.connect.message.interactive.response</code>, the
   *      Length Constraints are Minimum of 1, Maximum of 12288.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Content: string | undefined;
}

/**
 * <p>Enable persistent chats. For more information about enabling persistent chat, and for
 *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
 * @public
 */
export interface PersistentChat {
  /**
   * <p>The contactId that is used for rehydration depends on the rehydration type. RehydrationType
   *    is required for persistent chat. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENTIRE_PAST_SESSION</code>: Rehydrates a chat from the most recently terminated past
   *      chat contact of the specified past ended chat session. To use this type, provide the
   *       <code>initialContactId</code> of the past ended chat session in the
   *       <code>sourceContactId</code> field. In this type, Amazon Connect determines the most
   *      recent chat contact on the specified chat session that has ended, and uses it to start a
   *      persistent chat. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FROM_SEGMENT</code>: Rehydrates a chat from the past chat contact that is specified
   *      in the <code>sourceContactId</code> field. </p>
   *             </li>
   *          </ul>
   *          <p>The actual contactId used for rehydration is provided in the response of this API. </p>
   * @public
   */
  RehydrationType?: RehydrationType;

  /**
   * <p>The contactId from which a persistent chat session must be started.</p>
   * @public
   */
  SourceContactId?: string;
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
   *    see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the
   *    flow page, under the name of the flow, choose <b>Show additional flow
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
  Attributes?: Record<string, string>;

  /**
   * <p>Information identifying the participant.</p>
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The initial message to be sent to the newly created chat. If you have a Lex bot in your
   *    flow, the initial message is not delivered to the Lex bot.</p>
   * @public
   */
  InitialMessage?: ChatMessage;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   * @public
   */
  ChatDurationInMinutes?: number;

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
  SupportedMessagingContentTypes?: string[];

  /**
   * <p>Enable persistent chats. For more information about enabling persistent chat, and for
   *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
   * @public
   */
  PersistentChat?: PersistentChat;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    chat starting.</p>
   *          <note>
   *             <p>You cannot provide data for both RelatedContactId and PersistentChat. </p>
   *          </note>
   * @public
   */
  RelatedContactId?: string;

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
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
}

/**
 * @public
 */
export interface StartChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance. </p>
   * @public
   */
  ContactId?: string;

  /**
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   * @public
   */
  ParticipantId?: string;

  /**
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant.</p>
   * @public
   */
  ParticipantToken?: string;

  /**
   * <p>The contactId from which a persistent chat session is started. This field is populated only
   *    for persistent chats.</p>
   * @public
   */
  ContinuedFromContactId?: string;
}

/**
 * @public
 */
export interface StartContactEvaluationRequest {
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
   * <p>The unique identifier for the evaluation form.</p>
   * @public
   */
  EvaluationFormId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartContactEvaluationResponse {
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
}

/**
 * @public
 * @enum
 */
export const VoiceRecordingTrack = {
  ALL: "ALL",
  FROM_AGENT: "FROM_AGENT",
  TO_AGENT: "TO_AGENT",
} as const;

/**
 * @public
 */
export type VoiceRecordingTrack = (typeof VoiceRecordingTrack)[keyof typeof VoiceRecordingTrack];

/**
 * <p>Contains information about the recording configuration settings.</p>
 * @public
 */
export interface VoiceRecordingConfiguration {
  /**
   * <p>Identifies which track is being recorded.</p>
   * @public
   */
  VoiceRecordingTrack?: VoiceRecordingTrack;
}

/**
 * @public
 */
export interface StartContactRecordingRequest {
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The person being recorded.</p>
   * @public
   */
  VoiceRecordingConfiguration: VoiceRecordingConfiguration | undefined;
}

/**
 * @public
 */
export interface StartContactRecordingResponse {}

/**
 * @public
 */
export interface StartContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   * @public
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartContactStreamingResponse {
  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   * @public
   */
  StreamingId: string | undefined;
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
  Attributes?: Record<string, string>;

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
  ChatDurationInMinutes?: number;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails?: ParticipantDetails;

  /**
   * <p>A chat message.</p>
   * @public
   */
  InitialSystemMessage?: ChatMessage;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    contact starting.</p>
   * @public
   */
  RelatedContactId?: string;

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
  SupportedMessagingContentTypes?: string[];

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request. If not provided, the AWS SDK populates this field. For more information about
   *    idempotency, see <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making
   *     retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a
   *    contact is already started, the contact ID is returned.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartOutboundChatContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string;
}

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 * @public
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name: "DestinationNotAllowedException" = "DestinationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the outbound calls.</p>
   * @public
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
 * @public
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name: "OutboundContactNotPermittedException" = "OutboundContactNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message about the contact.</p>
   * @public
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

/**
 * <p>Configuration of the answering machine detection.</p>
 * @public
 */
export interface AnswerMachineDetectionConfig {
  /**
   * <p>The flag to indicate if answer machine detection analysis needs to be performed for a voice
   *    call. If set to <code>true</code>, <code>TrafficType</code> must be set as <code>CAMPAIGN</code>.
   *   </p>
   * @public
   */
  EnableAnswerMachineDetection?: boolean;

  /**
   * <p>Wait for the answering machine prompt.</p>
   * @public
   */
  AwaitAnswerMachinePrompt?: boolean;
}

/**
 * @public
 * @enum
 */
export const TrafficType = {
  CAMPAIGN: "CAMPAIGN",
  GENERAL: "GENERAL",
} as const;

/**
 * @public
 */
export type TrafficType = (typeof TrafficType)[keyof typeof TrafficType];

/**
 * @public
 */
export interface StartOutboundVoiceContactRequest {
  /**
   * <p>The name of a voice contact that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the voice contact that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Contacts can
   *    have the following reference types at the time of creation: <code>URL</code> |
   *     <code>NUMBER</code> | <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>.
   *     <code>ATTACHMENT</code> is not a supported reference type during voice contact creation.</p>
   * @public
   */
  References?: Record<string, Reference>;

  /**
   * <p>The <code>contactId</code> that is related to this contact. Linking voice, task, or chat by
   *    using <code>RelatedContactID</code> copies over contact attributes from the related contact to
   *    the new contact. All updates to user-defined attributes in the new contact are limited to the
   *    individual contact ID. There are no limits to the number of contacts that can be linked by using
   *     <code>RelatedContactId</code>. </p>
   * @public
   */
  RelatedContactId?: string;

  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   * @public
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The
   *    identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Contact
   *     Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started,
   *    the contact ID is returned.
   *    </p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do
   *    not specify a source phone number, you must specify a queue.</p>
   * @public
   */
  SourcePhoneNumber?: string;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the flow
   *    is used. If you do not specify a queue, you must specify a source phone number.</p>
   * @public
   */
  QueueId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>Configuration of the answering machine detection for this outbound call. </p>
   * @public
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;

  /**
   * <p>The campaign identifier of the outbound communication.</p>
   * @public
   */
  CampaignId?: string;

  /**
   * <p>Denotes the class of traffic. Calls with different traffic types are handled differently by
   *     Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   * @public
   */
  TrafficType?: TrafficType;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string;
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
  PreviousContactId?: string;

  /**
   * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect admin website,
   *    on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId?: string;

  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   * @public
   */
  Attributes?: Record<string, string>;

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
  References?: Record<string, Reference>;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   * @public
   */
  ScheduledTime?: Date;

  /**
   * <p>A unique identifier for the task template. For more information about task templates, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html">Create task templates</a> in the
   *      <i>Amazon Connect Administrator Guide</i>. </p>
   * @public
   */
  TaskTemplateId?: string;

  /**
   * <p>The identifier for the quick connect. Tasks that are created by using <code>QuickConnectId</code> will use the
   *    flow that is defined on agent or queue quick connect. For more information about quick connects,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html">Create quick
   *     connects</a>.</p>
   * @public
   */
  QuickConnectId?: string;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact. Linking
   *    tasks together by using <code>RelatedContactID</code> copies over contact attributes from the
   *    related task contact to the new task contact. All updates to user-defined attributes in the new
   *    task contact are limited to the individual contact ID, unlike what happens when tasks are linked
   *    by using <code>PreviousContactID</code>. There are no limits to the number of contacts that can
   *    be linked by using <code>RelatedContactId</code>. </p>
   * @public
   */
  RelatedContactId?: string;
}

/**
 * @public
 */
export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   * @public
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface StartWebRTCContactRequest {
  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, -, and _ characters.</p>
   * @public
   */
  Attributes?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>The token is valid for 7 days after creation. If a contact is already started, the contact
   *    ID is returned.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about the video sharing capabilities of the participants (customer,
   *    agent).</p>
   * @public
   */
  AllowedCapabilities?: AllowedCapabilities;

  /**
   * <p>The customer's details.</p>
   * @public
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    contact starting.</p>
   * @public
   */
  RelatedContactId?: string;

  /**
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>. <code>ATTACHMENT</code> is not a
   *    supported reference type during task creation.</p>
   * @public
   */
  References?: Record<string, Reference>;

  /**
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   * @public
   */
  Description?: string;
}

/**
 * <p>The attendee information, including attendee ID and join token.</p>
 * @public
 */
export interface Attendee {
  /**
   * <p>The Amazon Chime SDK attendee ID.</p>
   * @public
   */
  AttendeeId?: string;

  /**
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   * @public
   */
  JoinToken?: string;
}

/**
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 * @public
 */
export interface MediaPlacement {
  /**
   * <p>The audio host URL.</p>
   * @public
   */
  AudioHostUrl?: string;

  /**
   * <p>The audio fallback URL.</p>
   * @public
   */
  AudioFallbackUrl?: string;

  /**
   * <p>The signaling URL.</p>
   * @public
   */
  SignalingUrl?: string;

  /**
   * <p>The turn control URL.</p>
   * @public
   */
  TurnControlUrl?: string;

  /**
   * <p>The event ingestion URL to which you send client meeting events.</p>
   * @public
   */
  EventIngestionUrl?: string;
}

/**
 * @public
 * @enum
 */
export const MeetingFeatureStatus = {
  AVAILABLE: "AVAILABLE",
  UNAVAILABLE: "UNAVAILABLE",
} as const;

/**
 * @public
 */
export type MeetingFeatureStatus = (typeof MeetingFeatureStatus)[keyof typeof MeetingFeatureStatus];

/**
 * <p>Has audio-specific configurations as the operating parameter for Echo Reduction.</p>
 * @public
 */
export interface AudioFeatures {
  /**
   * <p>Makes echo reduction available to clients who connect to the meeting.</p>
   * @public
   */
  EchoReduction?: MeetingFeatureStatus;
}

/**
 * <p>The configuration settings of the features available to a meeting.</p>
 * @public
 */
export interface MeetingFeaturesConfiguration {
  /**
   * <p>The configuration settings for the audio features available to a meeting.</p>
   * @public
   */
  Audio?: AudioFeatures;
}

/**
 * <p>A meeting created using the Amazon Chime SDK.</p>
 * @public
 */
export interface Meeting {
  /**
   * <p>The Amazon Web Services Region in which you create the meeting.</p>
   * @public
   */
  MediaRegion?: string;

  /**
   * <p>The media placement for the meeting.</p>
   * @public
   */
  MediaPlacement?: MediaPlacement;

  /**
   * <p>The configuration settings of the features available to a meeting.</p>
   * @public
   */
  MeetingFeatures?: MeetingFeaturesConfiguration;

  /**
   * <p>The Amazon Chime SDK meeting ID.</p>
   * @public
   */
  MeetingId?: string;
}

/**
 * <p>Information required to join the call.</p>
 * @public
 */
export interface ConnectionData {
  /**
   * <p>The attendee information, including attendee ID and join token.</p>
   * @public
   */
  Attendee?: Attendee;

  /**
   * <p>A meeting created using the Amazon Chime SDK.</p>
   * @public
   */
  Meeting?: Meeting;
}

/**
 * @public
 */
export interface StartWebRTCContactResponse {
  /**
   * <p>Information required for the client application (mobile application or website) to connect
   *    to the call.</p>
   * @public
   */
  ConnectionData?: ConnectionData;

  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string;

  /**
   * <p>The identifier for a contact participant. The <code>ParticipantId</code> for a contact
   *    participant is the same throughout the contact lifecycle.</p>
   * @public
   */
  ParticipantId?: string;

  /**
   * <p>The token used by the contact participant to call the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API. The participant token is valid for the lifetime of a
   *    contact participant.</p>
   * @public
   */
  ParticipantToken?: string;
}

/**
 * <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat or Task contacts.</p>
 * @public
 */
export class ContactNotFoundException extends __BaseException {
  readonly name: "ContactNotFoundException" = "ContactNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The message.</p>
   * @public
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
 * <p>Contains details about why a contact was disconnected. Only Amazon Connect outbound
 *    campaigns can provide this field.</p>
 * @public
 */
export interface DisconnectReason {
  /**
   * <p>A code that indicates how the contact was terminated.</p>
   * @public
   */
  Code?: string;
}

/**
 * @public
 */
export interface StopContactRequest {
  /**
   * <p>The ID of the contact.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The reason a contact can be disconnected. Only Amazon Connect outbound campaigns can
   *    provide this field.</p>
   * @public
   */
  DisconnectReason?: DisconnectReason;
}

/**
 * @public
 */
export interface StopContactResponse {}

/**
 * @public
 */
export interface StopContactRecordingRequest {
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface StopContactRecordingResponse {}

/**
 * @public
 */
export interface StopContactStreamingRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact that is associated with
   *    the first interaction with the contact center.</p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   * @public
   */
  StreamingId: string | undefined;
}

/**
 * @public
 */
export interface StopContactStreamingResponse {}

/**
 * <p>Information about input answers for a contact evaluation.</p>
 * @public
 */
export interface EvaluationAnswerInput {
  /**
   * <p>The value for an answer in a contact evaluation.</p>
   * @public
   */
  Value?: EvaluationAnswerData;
}

/**
 * @public
 */
export interface SubmitContactEvaluationRequest {
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

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput>;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes?: Record<string, EvaluationNote>;
}

/**
 * @public
 */
export interface SubmitContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface SuspendContactRecordingRequest {
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
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;
}

/**
 * @public
 */
export interface SuspendContactRecordingResponse {}

/**
 * @public
 */
export interface TagContactRequest {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The tags to be assigned to the contact resource. For example, \{ "Tags": \{"key1":"value1",
   *    "key2":"value2"\} \}.</p>
   *          <note>
   *             <p>Authorization is not supported by this tag.</p>
   *          </note>
   * @public
   */
  Tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagContactResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TransferContactRequest {
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
   * <p>The identifier for the queue.</p>
   * @public
   */
  QueueId?: string;

  /**
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   * @public
   */
  UserId?: string;

  /**
   * <p>The identifier of the flow.</p>
   * @public
   */
  ContactFlowId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface TransferContactResponse {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   * @public
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface UntagContactRequest {
  /**
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   * @public
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>A list of tag keys. Existing tags on the contact whose keys are members of this list will be
   *    removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagContactResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the agent status.</p>
   * @public
   */
  AgentStatusId: string | undefined;

  /**
   * <p>The name of the agent status.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the agent status.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The state of the agent status.</p>
   * @public
   */
  State?: AgentStatusState;

  /**
   * <p>The display order of the agent status.</p>
   * @public
   */
  DisplayOrder?: number;

  /**
   * <p>A number indicating the reset order of the agent status.</p>
   * @public
   */
  ResetOrderNumber?: boolean;
}

/**
 * @public
 */
export interface UpdateAuthenticationProfileRequest {
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

  /**
   * <p>The name for the authentication profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description for the authentication profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of IP address range strings that are allowed to access the instance. For more
   *    information on how to configure IP addresses, see<a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure session timeouts</a> in the <i>Amazon Connect Administrator
   *     Guide</i>.</p>
   * @public
   */
  AllowedIps?: string[];

  /**
   * <p>A list of IP address range strings that are blocked from accessing the instance. For more
   *    information on how to configure IP addresses, For more information on how to configure IP
   *    addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-ip-based-ac">Configure
   *     IP-based access control</a> in the <i>Amazon Connect Administrator
   *     Guide</i>. </p>
   * @public
   */
  BlockedIps?: string[];

  /**
   * <p>The short lived session duration configuration for users logged in to Amazon Connect, in
   *    minutes. This value determines the maximum possible time before an agent is authenticated. For
   *    more information, For more information on how to configure IP addresses, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/authentication-profiles.html#configure-session-timeouts">Configure session timeouts</a> in the <i>Amazon Connect Administrator
   *     Guide</i>. </p>
   * @public
   */
  PeriodicSessionDuration?: number;
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
  Name?: string;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Well-formed data on contact, shown to agents on Contact Control Panel (CCP).</p>
   * @public
   */
  References?: Record<string, Reference>;
}

/**
 * @public
 */
export interface UpdateContactResponse {}

/**
 * @public
 */
export interface UpdateContactAttributesRequest {
  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   * @public
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any
   *    other contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   *          <p>When the attributes for a contact exceed 32 KB, the contact is routed down the Error branch
   *    of the flow. As a mitigation, consider the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Remove unnecessary attributes by setting their values to empty.</p>
   *             </li>
   *             <li>
   *                <p>If the attributes are only used in one flow and don't need to be referred to outside of
   *      that flow (for example, by a Lambda or another flow), then use flow attributes. This way you
   *      aren't needlessly persisting the 32 KB of information from one flow to another. For more
   *      information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/set-contact-attributes.html">Flow block: Set contact
   *       attributes</a> in the <i>Amazon Connect Administrator Guide</i>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  Attributes: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateContactAttributesResponse {}

/**
 * @public
 */
export interface UpdateContactEvaluationRequest {
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

  /**
   * <p>A map of question identifiers to answer value.</p>
   * @public
   */
  Answers?: Record<string, EvaluationAnswerInput>;

  /**
   * <p>A map of question identifiers to note value.</p>
   * @public
   */
  Notes?: Record<string, EvaluationNote>;
}

/**
 * @public
 */
export interface UpdateContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface UpdateContactFlowContentRequest {
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

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowMetadataRequest {
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
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The state of flow.</p>
   * @public
   */
  ContactFlowState?: ContactFlowState;
}

/**
 * @public
 */
export interface UpdateContactFlowMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentRequest {
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

  /**
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   * @public
   */
  Content: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleContentResponse {}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataRequest {
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

  /**
   * <p>The name of the flow module.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the flow module.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The state of flow module.</p>
   * @public
   */
  State?: ContactFlowModuleState;
}

/**
 * @public
 */
export interface UpdateContactFlowModuleMetadataResponse {}

/**
 * @public
 */
export interface UpdateContactFlowNameRequest {
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

  /**
   * <p>The name of the flow.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the flow.</p>
   * @public
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateContactFlowNameResponse {}

/**
 * <p>Specify whether this routing criteria step should apply for only a limited amount of time,
 *    or if it should never expire.</p>
 * @public
 */
export interface RoutingCriteriaInputStepExpiry {
  /**
   * <p>The number of seconds that the contact will be routed only to agents matching this routing
   *    step, if expiry was configured for this routing step.</p>
   * @public
   */
  DurationInSeconds?: number;
}

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
  Name?: string;

  /**
   * <p>The description of the hours of operation.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The time zone of the hours of operation.</p>
   * @public
   */
  TimeZone?: string;

  /**
   * <p>Configuration information of the hours of operation.</p>
   * @public
   */
  Config?: HoursOfOperationConfig[];
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
}

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
  TargetArn?: string;

  /**
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface UpdatePhoneNumberResponse {
  /**
   * <p>A unique identifier for the phone number.</p>
   * @public
   */
  PhoneNumberId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   * @public
   */
  PhoneNumberArn?: string;
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
  PhoneNumberDescription?: string;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
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
  Values?: PredefinedAttributeValues;
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
  Name?: string;

  /**
   * <p>A description of the prompt.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html">GetPromptFile</a>
   *  API instead of providing S3 URIs.</p>
   * @public
   */
  S3Uri?: string;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  PromptARN?: string;

  /**
   * <p>A unique identifier for the prompt.</p>
   * @public
   */
  PromptId?: string;
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
  MaxContacts?: number;
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
  Name?: string;

  /**
   * <p>The description of the queue.</p>
   * @public
   */
  Description?: string;
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
  Name?: string;

  /**
   * <p>The description of the quick connect.</p>
   * @public
   */
  Description?: string;
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
  Name?: string;

  /**
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   * @public
   */
  Description?: string;
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
  Description?: string;

  /**
   * <p>The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>.</p>
   * @public
   */
  Permissions?: string[];

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
  AllowedAccessControlTags?: Record<string, string>;

  /**
   * <p>The list of resources that a security profile applies tag restrictions to in Amazon Connect.</p>
   * @public
   */
  TagRestrictedResources?: string[];

  /**
   * <p>A list of the third-party application's metadata.</p>
   * @public
   */
  Applications?: Application[];

  /**
   * <p>The list of resources that a security profile applies hierarchy restrictions to in Amazon Connect. Following are acceptable ResourceNames: <code>User</code>.</p>
   * @public
   */
  HierarchyRestrictedResources?: string[];

  /**
   * <p>The identifier of the hierarchy group that a security profile uses to restrict access to
   *    resources in Amazon Connect.</p>
   * @public
   */
  AllowedAccessControlHierarchyGroupId?: string;
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
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[];
}

/**
 * @public
 */
export interface UpdateTaskTemplateResponse {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   * @public
   */
  InstanceId?: string;

  /**
   * <p>The identifier of the task template resource.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   * @public
   */
  Arn?: string;

  /**
   * <p>The name of the task template.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the task template.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The identifier of the flow that runs by default when a task is created by referencing this template.</p>
   * @public
   */
  ContactFlowId?: string;

  /**
   * <p>Constraints that are applicable to the fields listed.</p>
   * @public
   */
  Constraints?: TaskTemplateConstraints;

  /**
   * <p>The default values for fields when a task is created by referencing this template.</p>
   * @public
   */
  Defaults?: TaskTemplateDefaults;

  /**
   * <p>Fields that are part of the template.</p>
   * @public
   */
  Fields?: TaskTemplateField[];

  /**
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   * @public
   */
  Status?: TaskTemplateStatus;

  /**
   * <p>The timestamp when the task template was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date;

  /**
   * <p>The timestamp when the task template was created.</p>
   * @public
   */
  CreatedTime?: Date;
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
  TelephonyConfig?: TelephonyConfig;

  /**
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
   *    agents in to both the instance and its replica(s).</p>
   * @public
   */
  SignInConfig?: SignInConfig;

  /**
   * <p>The distribution of agents between the instance and its replica(s).</p>
   * @public
   */
  AgentConfig?: AgentConfig;
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
  HierarchyGroupId?: string;

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
  LevelOne?: HierarchyLevelUpdate;

  /**
   * <p>The update for level two.</p>
   * @public
   */
  LevelTwo?: HierarchyLevelUpdate;

  /**
   * <p>The update for level three.</p>
   * @public
   */
  LevelThree?: HierarchyLevelUpdate;

  /**
   * <p>The update for level four.</p>
   * @public
   */
  LevelFour?: HierarchyLevelUpdate;

  /**
   * <p>The update for level five.</p>
   * @public
   */
  LevelFive?: HierarchyLevelUpdate;
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
  View?: View;
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
  Name?: string;

  /**
   * <p>The description of the view.</p>
   * @public
   */
  Description?: string;
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
  Instructions?: string;

  /**
   * <p>The items of the section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>The scoring weight of the section.</p>
   * @public
   */
  Weight?: number;
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
  OrConditions?: AgentStatusSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>state</code>, <code>type</code>, <code>displayOrder</code>,
   *     and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  AndConditions?: AgentStatusSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>state</code>, <code>type</code>, <code>displayOrder</code>,
   *     and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: ContactFlowModuleSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: ContactFlowModuleSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition;
}

/**
 * <p>The search criteria to be used to return contact flows.</p>
 * @public
 */
export interface ContactFlowSearchCriteria {
  /**
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   * @public
   */
  OrConditions?: ContactFlowSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: ContactFlowSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition;

  /**
   * <p>The type of flow.</p>
   * @public
   */
  TypeCondition?: ContactFlowType;

  /**
   * <p>The state of the flow.</p>
   * @public
   */
  StateCondition?: ContactFlowState;

  /**
   * <p>The status of the flow.</p>
   * @public
   */
  StatusCondition?: ContactFlowStatus;
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
  Description?: string;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
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
  Description?: string;

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
  ScoringStrategy?: EvaluationFormScoringStrategy;

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
  Tags?: Record<string, string>;
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
  Description?: string;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;
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
  AttributeCondition?: AttributeCondition;

  /**
   * <p>List of routing expressions which will be AND-ed together.</p>
   * @public
   */
  AndExpression?: Expression[];

  /**
   * <p>List of routing expressions which will be OR-ed together.</p>
   * @public
   */
  OrExpression?: Expression[];
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
  OrConditions?: HoursOfOperationSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: HoursOfOperationSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>timezone</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: PredefinedAttributeSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   * @public
   */
  AndConditions?: PredefinedAttributeSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: PromptSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: PromptSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: QueueSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QueueSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;

  /**
   * <p>The type of queue.</p>
   * @public
   */
  QueueTypeCondition?: SearchableQueueType;
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
  OrConditions?: QuickConnectSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: QuickConnectSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: RoutingProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are
   *      <code>associatedQueueIds</code>, <code>name</code>, <code>description</code>, and
   *      <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: SecurityProfileSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   * @public
   */
  StringCondition?: StringCondition;
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
  CreateNewVersion?: boolean;

  /**
   * <p>A title of the evaluation form.</p>
   * @public
   */
  Title: string | undefined;

  /**
   * <p>The description of the evaluation form.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   * @public
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * <p>A scoring strategy of the evaluation form.</p>
   * @public
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  ClientToken?: string;
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
  OrConditions?: UserHierarchyGroupSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   * @public
   */
  AndConditions?: UserHierarchyGroupSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>parentId</code>, <code>levelId</code>, and <code>resourceID</code>.</p>
   *          </note>
   * @public
   */
  StringCondition?: StringCondition;
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
  OrConditions?: UserSearchCriteria[];

  /**
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   * @public
   */
  AndConditions?: UserSearchCriteria[];

  /**
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <p>The currently supported values for <code>FieldName</code> are <code>Username</code>,
   *     <code>FirstName</code>, <code>LastName</code>, <code>RoutingProfileId</code>,
   *     <code>SecurityProfileId</code>, <code>ResourceId</code>.</p>
   * @public
   */
  StringCondition?: StringCondition;

  /**
   * <p>A leaf node condition which can be used to specify a List condition to search users with
   *    attributes included in Lists like Proficiencies.</p>
   * @public
   */
  ListCondition?: ListCondition;

  /**
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   * @public
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
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
  Expiry?: RoutingCriteriaInputStepExpiry;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: AgentStatusSearchFilter;

  /**
   * <p>The search criteria to be used to return agent statuses.</p>
   * @public
   */
  SearchCriteria?: AgentStatusSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowModuleSearchFilter;

  /**
   * <p>The search criteria to be used to return contact flow modules.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowModuleSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: ContactFlowSearchFilter;

  /**
   * <p>The search criteria to be used to return flows.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with a
   *     minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will result in invalid results.</p>
   *          </note>
   * @public
   */
  SearchCriteria?: ContactFlowSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: HoursOfOperationSearchFilter;

  /**
   * <p>The search criteria to be used to return hours of operations.</p>
   * @public
   */
  SearchCriteria?: HoursOfOperationSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The search criteria to be used to return predefined attributes.</p>
   * @public
   */
  SearchCriteria?: PredefinedAttributeSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: PromptSearchFilter;

  /**
   * <p>The search criteria to be used to return prompts.</p>
   * @public
   */
  SearchCriteria?: PromptSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QueueSearchFilter;

  /**
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: QueueSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: QuickConnectSearchFilter;

  /**
   * <p>The search criteria to be used to return quick connects.</p>
   * @public
   */
  SearchCriteria?: QuickConnectSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: RoutingProfileSearchFilter;

  /**
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   * @public
   */
  SearchCriteria?: RoutingProfileSearchCriteria;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

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
  SearchCriteria?: SecurityProfileSearchCriteria;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: SecurityProfilesSearchFilter;
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
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserHierarchyGroupSearchFilter;

  /**
   * <p>The search criteria to be used to return UserHierarchyGroups.</p>
   * @public
   */
  SearchCriteria?: UserHierarchyGroupSearchCriteria;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   *          <note>
   *             <p>InstanceID is a required field. The "Required: No" below is incorrect.</p>
   *          </note>
   * @public
   */
  InstanceId: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters to be applied to search results.</p>
   * @public
   */
  SearchFilter?: UserSearchFilter;

  /**
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   * @public
   */
  SearchCriteria?: UserSearchCriteria;
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
  Expiry?: Expiry;

  /**
   * <p>A tagged union to specify expression for a routing step.</p>
   * @public
   */
  Expression?: Expression;

  /**
   * <p>Represents status of the Routing step.</p>
   * @public
   */
  Status?: RoutingCriteriaStepStatus;
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
  Steps?: Step[];

  /**
   * <p>The timestamp indicating when the routing criteria is set to active. A routing criteria is
   *    activated when contact is transferred to a queue. ActivationTimestamp will be set on routing
   *    criteria for contacts in agent queue even though Routing criteria is never activated for contacts
   *    in agent queue.</p>
   * @public
   */
  ActivationTimestamp?: Date;

  /**
   * <p>Information about the index of the routing criteria.</p>
   * @public
   */
  Index?: number;
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
  Steps?: RoutingCriteriaInputStep[];
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
  Arn?: string;

  /**
   * <p>The identifier for the contact.</p>
   * @public
   */
  Id?: string;

  /**
   * <p>If this contact is related to other contacts, this is the ID of the initial contact.</p>
   * @public
   */
  InitialContactId?: string;

  /**
   * <p>If this contact is not the first contact, this is the ID of the previous contact.</p>
   * @public
   */
  PreviousContactId?: string;

  /**
   * <p>Indicates how the contact was initiated.</p>
   * @public
   */
  InitiationMethod?: ContactInitiationMethod;

  /**
   * <p>The name of the contact.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the contact.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>How the contact reached your contact center.</p>
   * @public
   */
  Channel?: Channel;

  /**
   * <p>If this contact was queued, this contains information about the queue. </p>
   * @public
   */
  QueueInfo?: QueueInfo;

  /**
   * <p>Information about the agent who accepted the contact.</p>
   * @public
   */
  AgentInfo?: AgentInfo;

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
  InitiationTimestamp?: Date;

  /**
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   * @public
   */
  DisconnectTimestamp?: Date;

  /**
   * <p>The timestamp when contact was last updated.</p>
   * @public
   */
  LastUpdateTimestamp?: Date;

  /**
   * <p>The timestamp when the contact was last paused.</p>
   * @public
   */
  LastPausedTimestamp?: Date;

  /**
   * <p>The timestamp when the contact was last resumed.</p>
   * @public
   */
  LastResumedTimestamp?: Date;

  /**
   * <p>Total pause count for a contact.</p>
   * @public
   */
  TotalPauseCount?: number;

  /**
   * <p>Total pause duration for a contact in seconds.</p>
   * @public
   */
  TotalPauseDurationInSeconds?: number;

  /**
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.
   *   </p>
   * @public
   */
  ScheduledTimestamp?: Date;

  /**
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html#relatedcontactid">related</a> to this
   *    contact.</p>
   * @public
   */
  RelatedContactId?: string;

  /**
   * <p>Information about Amazon Connect Wisdom.</p>
   * @public
   */
  WisdomInfo?: WisdomInfo;

  /**
   * <p>An integer that represents the queue time adjust to be applied to the contact, in seconds
   *    (longer / larger queue time are routed preferentially). Cannot be specified if the QueuePriority
   *    is specified. Must be statically defined and a valid integer value.</p>
   * @public
   */
  QueueTimeAdjustmentSeconds?: number;

  /**
   * <p>An integer that represents the queue priority to be applied to the contact (lower priorities
   *    are routed preferentially). Cannot be specified if the QueueTimeAdjustmentSeconds is specified.
   *    Must be statically defined, must be larger than zero, and a valid integer value. Default Value is
   *    5.</p>
   * @public
   */
  QueuePriority?: number;

  /**
   * <p>Tags associated with the contact. This contains both Amazon Web Services generated and
   *    user-defined tags.</p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The timestamp when customer endpoint connected to Amazon Connect.</p>
   * @public
   */
  ConnectedToSystemTimestamp?: Date;

  /**
   * <p>Latest routing criteria on the contact.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteria;

  /**
   * <p>Information about the Customer on the contact.</p>
   * @public
   */
  Customer?: Customer;

  /**
   * <p>Information associated with a campaign.</p>
   * @public
   */
  Campaign?: Campaign;

  /**
   * <p>Indicates how an <a href="https://docs.aws.amazon.com/connect/latest/adminguide/how-to-create-campaigns.html">outbound campaign</a> call is
   *    actually disposed if the contact is connected to Amazon Connect.</p>
   * @public
   */
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus;

  /**
   * <p>Information about customer’s voice activity.</p>
   * @public
   */
  CustomerVoiceActivity?: CustomerVoiceActivity;

  /**
   * <p>Information about the quality of the participant's media connection.</p>
   * @public
   */
  QualityMetrics?: QualityMetrics;

  /**
   * <p>Information about the call disconnect experience.</p>
   * @public
   */
  DisconnectDetails?: DisconnectDetails;

  /**
   * <p>A set of system defined key-value pairs stored on individual contact segments using an
   *    attribute map. The attributes are standard Amazon Connect attributes and can be accessed in
   *    flows. Attribute keys can include only alphanumeric, -, and _ characters. This field can be used
   *    to show channel subtype. For example, <code>connect:Guide</code> or
   *    <code>connect:SMS</code>.</p>
   * @public
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
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
  QueueTimeAdjustmentSeconds?: number;

  /**
   * <p>Priority of the contact in the queue. The default priority for new contacts is 5. You can
   *    raise the priority of a contact compared to other contacts in the queue by assigning them a
   *    higher priority, such as 1 or 2.</p>
   * @public
   */
  QueuePriority?: number;

  /**
   * <p>Updates the routing criteria on the contact. These properties can be used to change how a
   *    contact is routed within the queue.</p>
   * @public
   */
  RoutingCriteria?: RoutingCriteriaInput;
}

/**
 * @public
 */
export interface DescribeContactResponse {
  /**
   * <p>Information about the contact.</p>
   * @public
   */
  Contact?: Contact;
}

/**
 * @internal
 */
export const ViewSummaryFilterSensitiveLog = (obj: ViewSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewsResponseFilterSensitiveLog = (obj: ListViewsResponse): any => ({
  ...obj,
  ...(obj.ViewsSummaryList && {
    ViewsSummaryList: obj.ViewsSummaryList.map((item) => ViewSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ViewVersionSummaryFilterSensitiveLog = (obj: ViewVersionSummary): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListViewVersionsResponseFilterSensitiveLog = (obj: ListViewVersionsResponse): any => ({
  ...obj,
  ...(obj.ViewVersionSummaryList && {
    ViewVersionSummaryList: obj.ViewVersionSummaryList.map((item) => ViewVersionSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ReplicateInstanceRequestFilterSensitiveLog = (obj: ReplicateInstanceRequest): any => ({
  ...obj,
  ...(obj.ReplicaAlias && { ReplicaAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptCriteriaFilterSensitiveLog = (obj: TranscriptCriteria): any => ({
  ...obj,
  ...(obj.SearchText && { SearchText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TranscriptFilterSensitiveLog = (obj: Transcript): any => ({
  ...obj,
  ...(obj.Criteria && { Criteria: obj.Criteria.map((item) => TranscriptCriteriaFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ContactAnalysisFilterSensitiveLog = (obj: ContactAnalysis): any => ({
  ...obj,
  ...(obj.Transcript && { Transcript: TranscriptFilterSensitiveLog(obj.Transcript) }),
});

/**
 * @internal
 */
export const SearchableContactAttributesCriteriaFilterSensitiveLog = (
  obj: SearchableContactAttributesCriteria
): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Values && { Values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchableContactAttributesFilterSensitiveLog = (obj: SearchableContactAttributes): any => ({
  ...obj,
  ...(obj.Criteria && {
    Criteria: obj.Criteria.map((item) => SearchableContactAttributesCriteriaFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SearchCriteriaFilterSensitiveLog = (obj: SearchCriteria): any => ({
  ...obj,
  ...(obj.ContactAnalysis && { ContactAnalysis: ContactAnalysisFilterSensitiveLog(obj.ContactAnalysis) }),
  ...(obj.SearchableContactAttributes && {
    SearchableContactAttributes: SearchableContactAttributesFilterSensitiveLog(obj.SearchableContactAttributes),
  }),
});

/**
 * @internal
 */
export const SearchContactsRequestFilterSensitiveLog = (obj: SearchContactsRequest): any => ({
  ...obj,
  ...(obj.SearchCriteria && { SearchCriteria: SearchCriteriaFilterSensitiveLog(obj.SearchCriteria) }),
});

/**
 * @internal
 */
export const UserIdentityInfoLiteFilterSensitiveLog = (obj: UserIdentityInfoLite): any => ({
  ...obj,
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserSearchSummaryFilterSensitiveLog = (obj: UserSearchSummary): any => ({
  ...obj,
  ...(obj.IdentityInfo && { IdentityInfo: UserIdentityInfoLiteFilterSensitiveLog(obj.IdentityInfo) }),
});

/**
 * @internal
 */
export const SearchUsersResponseFilterSensitiveLog = (obj: SearchUsersResponse): any => ({
  ...obj,
  ...(obj.Users && { Users: obj.Users.map((item) => UserSearchSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartOutboundVoiceContactRequestFilterSensitiveLog = (obj: StartOutboundVoiceContactRequest): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
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
export const StartWebRTCContactRequestFilterSensitiveLog = (obj: StartWebRTCContactRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AttendeeFilterSensitiveLog = (obj: Attendee): any => ({
  ...obj,
  ...(obj.JoinToken && { JoinToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionDataFilterSensitiveLog = (obj: ConnectionData): any => ({
  ...obj,
  ...(obj.Attendee && { Attendee: AttendeeFilterSensitiveLog(obj.Attendee) }),
});

/**
 * @internal
 */
export const StartWebRTCContactResponseFilterSensitiveLog = (obj: StartWebRTCContactResponse): any => ({
  ...obj,
  ...(obj.ConnectionData && { ConnectionData: ConnectionDataFilterSensitiveLog(obj.ConnectionData) }),
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
export const ContactFilterSensitiveLog = (obj: Contact): any => ({
  ...obj,
  ...(obj.Name && { Name: SENSITIVE_STRING }),
  ...(obj.Description && { Description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribeContactResponseFilterSensitiveLog = (obj: DescribeContactResponse): any => ({
  ...obj,
  ...(obj.Contact && { Contact: ContactFilterSensitiveLog(obj.Contact) }),
});
