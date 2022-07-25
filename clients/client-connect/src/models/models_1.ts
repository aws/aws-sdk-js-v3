// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import {
  AgentStatusState,
  Channel,
  ContactFlowModuleState,
  ContactFlowState,
  HierarchyGroupSummary,
  HoursOfOperationConfig,
  InstanceAttributeType,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  MediaConcurrency,
  OutboundCallerConfig,
  PhoneNumberCountryCode,
  PhoneNumberType,
  QueueStatus,
  QuickConnectConfig,
  QuickConnectSummary,
  QuickConnectType,
  ReferenceType,
  RoutingProfileQueueConfig,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UseCaseType,
  UserIdentityInfo,
  UserPhoneConfig,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

export enum QueueType {
  AGENT = "AGENT",
  STANDARD = "STANDARD",
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
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

export interface PutUserStatusResponse {}

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

export interface ResumeContactRecordingResponse {}

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

/**
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
  /**
   * <p>Display name of the participant.</p>
   */
  DisplayName: string | undefined;
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

export enum VoiceRecordingTrack {
  ALL = "ALL",
  FROM_AGENT = "FROM_AGENT",
  TO_AGENT = "TO_AGENT",
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

export interface StartContactRecordingResponse {}

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

export interface StartContactStreamingResponse {
  /**
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
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

export enum TrafficType {
  CAMPAIGN = "CAMPAIGN",
  GENERAL = "GENERAL",
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

export interface StartOutboundVoiceContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
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

export interface StartTaskContactResponse {
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
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

export interface StopContactResponse {}

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

export interface StopContactRecordingResponse {}

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

export interface StopContactStreamingResponse {}

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

export interface SuspendContactRecordingResponse {}

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

export interface UpdateContactResponse {}

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

export interface UpdateContactAttributesResponse {}

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

export interface UpdateContactFlowModuleContentResponse {}

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

export interface UpdateContactFlowModuleMetadataResponse {}

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

export interface UpdateContactScheduleResponse {}

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

/**
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
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

/**
 * @internal
 */
export const ListQueuesRequestFilterSensitiveLog = (obj: ListQueuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueSummaryFilterSensitiveLog = (obj: QueueSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQueuesResponseFilterSensitiveLog = (obj: ListQueuesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQuickConnectsRequestFilterSensitiveLog = (obj: ListQuickConnectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListQuickConnectsResponseFilterSensitiveLog = (obj: ListQuickConnectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingProfileQueuesRequestFilterSensitiveLog = (obj: ListRoutingProfileQueuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileQueueConfigSummaryFilterSensitiveLog = (obj: RoutingProfileQueueConfigSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingProfileQueuesResponseFilterSensitiveLog = (obj: ListRoutingProfileQueuesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingProfilesRequestFilterSensitiveLog = (obj: ListRoutingProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RoutingProfileSummaryFilterSensitiveLog = (obj: RoutingProfileSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRoutingProfilesResponseFilterSensitiveLog = (obj: ListRoutingProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityKeysRequestFilterSensitiveLog = (obj: ListSecurityKeysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityKeyFilterSensitiveLog = (obj: SecurityKey): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityKeysResponseFilterSensitiveLog = (obj: ListSecurityKeysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityProfilePermissionsRequestFilterSensitiveLog = (
  obj: ListSecurityProfilePermissionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityProfilePermissionsResponseFilterSensitiveLog = (
  obj: ListSecurityProfilePermissionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityProfilesRequestFilterSensitiveLog = (obj: ListSecurityProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SecurityProfileSummaryFilterSensitiveLog = (obj: SecurityProfileSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSecurityProfilesResponseFilterSensitiveLog = (obj: ListSecurityProfilesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTaskTemplatesRequestFilterSensitiveLog = (obj: ListTaskTemplatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskTemplateMetadataFilterSensitiveLog = (obj: TaskTemplateMetadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTaskTemplatesResponseFilterSensitiveLog = (obj: ListTaskTemplatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUseCasesRequestFilterSensitiveLog = (obj: ListUseCasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UseCaseFilterSensitiveLog = (obj: UseCase): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUseCasesResponseFilterSensitiveLog = (obj: ListUseCasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserHierarchyGroupsRequestFilterSensitiveLog = (obj: ListUserHierarchyGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUserHierarchyGroupsResponseFilterSensitiveLog = (obj: ListUserHierarchyGroupsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersRequestFilterSensitiveLog = (obj: ListUsersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSummaryFilterSensitiveLog = (obj: UserSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListUsersResponseFilterSensitiveLog = (obj: ListUsersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutUserStatusRequestFilterSensitiveLog = (obj: PutUserStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutUserStatusResponseFilterSensitiveLog = (obj: PutUserStatusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReleasePhoneNumberRequestFilterSensitiveLog = (obj: ReleasePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeContactRecordingRequestFilterSensitiveLog = (obj: ResumeContactRecordingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResumeContactRecordingResponseFilterSensitiveLog = (obj: ResumeContactRecordingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchAvailablePhoneNumbersRequestFilterSensitiveLog = (obj: SearchAvailablePhoneNumbersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailableNumberSummaryFilterSensitiveLog = (obj: AvailableNumberSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchAvailablePhoneNumbersResponseFilterSensitiveLog = (
  obj: SearchAvailablePhoneNumbersResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyGroupConditionFilterSensitiveLog = (obj: HierarchyGroupCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StringConditionFilterSensitiveLog = (obj: StringCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagConditionFilterSensitiveLog = (obj: TagCondition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ControlPlaneTagFilterFilterSensitiveLog = (obj: ControlPlaneTagFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSearchFilterFilterSensitiveLog = (obj: UserSearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdentityInfoLiteFilterSensitiveLog = (obj: UserIdentityInfoLite): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSearchSummaryFilterSensitiveLog = (obj: UserSearchSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchUsersResponseFilterSensitiveLog = (obj: SearchUsersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchVocabulariesRequestFilterSensitiveLog = (obj: SearchVocabulariesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VocabularySummaryFilterSensitiveLog = (obj: VocabularySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchVocabulariesResponseFilterSensitiveLog = (obj: SearchVocabulariesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChatMessageFilterSensitiveLog = (obj: ChatMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ParticipantDetailsFilterSensitiveLog = (obj: ParticipantDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartChatContactRequestFilterSensitiveLog = (obj: StartChatContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartChatContactResponseFilterSensitiveLog = (obj: StartChatContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceRecordingConfigurationFilterSensitiveLog = (obj: VoiceRecordingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContactRecordingRequestFilterSensitiveLog = (obj: StartContactRecordingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContactRecordingResponseFilterSensitiveLog = (obj: StartContactRecordingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ChatStreamingConfigurationFilterSensitiveLog = (obj: ChatStreamingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContactStreamingRequestFilterSensitiveLog = (obj: StartContactStreamingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContactStreamingResponseFilterSensitiveLog = (obj: StartContactStreamingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnswerMachineDetectionConfigFilterSensitiveLog = (obj: AnswerMachineDetectionConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOutboundVoiceContactRequestFilterSensitiveLog = (obj: StartOutboundVoiceContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartOutboundVoiceContactResponseFilterSensitiveLog = (obj: StartOutboundVoiceContactResponse): any => ({
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
export const StartTaskContactRequestFilterSensitiveLog = (obj: StartTaskContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartTaskContactResponseFilterSensitiveLog = (obj: StartTaskContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactRequestFilterSensitiveLog = (obj: StopContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactResponseFilterSensitiveLog = (obj: StopContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactRecordingRequestFilterSensitiveLog = (obj: StopContactRecordingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactRecordingResponseFilterSensitiveLog = (obj: StopContactRecordingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactStreamingRequestFilterSensitiveLog = (obj: StopContactStreamingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopContactStreamingResponseFilterSensitiveLog = (obj: StopContactStreamingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuspendContactRecordingRequestFilterSensitiveLog = (obj: SuspendContactRecordingRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuspendContactRecordingResponseFilterSensitiveLog = (obj: SuspendContactRecordingResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferContactRequestFilterSensitiveLog = (obj: TransferContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransferContactResponseFilterSensitiveLog = (obj: TransferContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAgentStatusRequestFilterSensitiveLog = (obj: UpdateAgentStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactRequestFilterSensitiveLog = (obj: UpdateContactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactResponseFilterSensitiveLog = (obj: UpdateContactResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactAttributesRequestFilterSensitiveLog = (obj: UpdateContactAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactAttributesResponseFilterSensitiveLog = (obj: UpdateContactAttributesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowContentRequestFilterSensitiveLog = (obj: UpdateContactFlowContentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowMetadataRequestFilterSensitiveLog = (obj: UpdateContactFlowMetadataRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowModuleContentRequestFilterSensitiveLog = (
  obj: UpdateContactFlowModuleContentRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowModuleContentResponseFilterSensitiveLog = (
  obj: UpdateContactFlowModuleContentResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowModuleMetadataRequestFilterSensitiveLog = (
  obj: UpdateContactFlowModuleMetadataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowModuleMetadataResponseFilterSensitiveLog = (
  obj: UpdateContactFlowModuleMetadataResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactFlowNameRequestFilterSensitiveLog = (obj: UpdateContactFlowNameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactScheduleRequestFilterSensitiveLog = (obj: UpdateContactScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContactScheduleResponseFilterSensitiveLog = (obj: UpdateContactScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateHoursOfOperationRequestFilterSensitiveLog = (obj: UpdateHoursOfOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInstanceAttributeRequestFilterSensitiveLog = (obj: UpdateInstanceAttributeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateInstanceStorageConfigRequestFilterSensitiveLog = (obj: UpdateInstanceStorageConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberRequestFilterSensitiveLog = (obj: UpdatePhoneNumberRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePhoneNumberResponseFilterSensitiveLog = (obj: UpdatePhoneNumberResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueHoursOfOperationRequestFilterSensitiveLog = (obj: UpdateQueueHoursOfOperationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueMaxContactsRequestFilterSensitiveLog = (obj: UpdateQueueMaxContactsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueNameRequestFilterSensitiveLog = (obj: UpdateQueueNameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueOutboundCallerConfigRequestFilterSensitiveLog = (
  obj: UpdateQueueOutboundCallerConfigRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQueueStatusRequestFilterSensitiveLog = (obj: UpdateQueueStatusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQuickConnectConfigRequestFilterSensitiveLog = (obj: UpdateQuickConnectConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateQuickConnectNameRequestFilterSensitiveLog = (obj: UpdateQuickConnectNameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingProfileConcurrencyRequestFilterSensitiveLog = (
  obj: UpdateRoutingProfileConcurrencyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingProfileDefaultOutboundQueueRequestFilterSensitiveLog = (
  obj: UpdateRoutingProfileDefaultOutboundQueueRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingProfileNameRequestFilterSensitiveLog = (obj: UpdateRoutingProfileNameRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRoutingProfileQueuesRequestFilterSensitiveLog = (obj: UpdateRoutingProfileQueuesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSecurityProfileRequestFilterSensitiveLog = (obj: UpdateSecurityProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskTemplateRequestFilterSensitiveLog = (obj: UpdateTaskTemplateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTaskTemplateResponseFilterSensitiveLog = (obj: UpdateTaskTemplateResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserHierarchyRequestFilterSensitiveLog = (obj: UpdateUserHierarchyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserHierarchyGroupNameRequestFilterSensitiveLog = (
  obj: UpdateUserHierarchyGroupNameRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyLevelUpdateFilterSensitiveLog = (obj: HierarchyLevelUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HierarchyStructureUpdateFilterSensitiveLog = (obj: HierarchyStructureUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserHierarchyStructureRequestFilterSensitiveLog = (
  obj: UpdateUserHierarchyStructureRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserIdentityInfoRequestFilterSensitiveLog = (obj: UpdateUserIdentityInfoRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserPhoneConfigRequestFilterSensitiveLog = (obj: UpdateUserPhoneConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserRoutingProfileRequestFilterSensitiveLog = (obj: UpdateUserRoutingProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateUserSecurityProfilesRequestFilterSensitiveLog = (obj: UpdateUserSecurityProfilesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserSearchCriteriaFilterSensitiveLog = (obj: UserSearchCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchUsersRequestFilterSensitiveLog = (obj: SearchUsersRequest): any => ({
  ...obj,
});
