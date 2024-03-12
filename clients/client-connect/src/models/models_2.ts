// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";

import {
  AgentAvailabilityTimer,
  AgentConfig,
  AgentStatusState,
  AllowedCapabilities,
  Application,
  Channel,
  ContactFlowModuleState,
  ContactFlowState,
  ContactInitiationMethod,
  Evaluation,
  EvaluationAnswerData,
  EvaluationFormQuestion,
  EvaluationFormScoringStrategy,
  EvaluationFormVersionStatus,
  EvaluationNote,
  HoursOfOperation,
  HoursOfOperationConfig,
  InstanceAttributeType,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  MediaConcurrency,
  OutboundCallerConfig,
  PredefinedAttributeValues,
  QuickConnectConfig,
  Reference,
  RehydrationType,
  RoutingProfileQueueConfig,
  RuleAction,
  RulePublishStatus,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  UserIdentityInfo,
  UserIdentityInfoFilterSensitiveLog,
  UserPhoneConfig,
  UserProficiency,
  View,
  ViewFilterSensitiveLog,
  ViewInputContent,
  ViewInputContentFilterSensitiveLog,
  ViewStatus,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

import {
  PredefinedAttribute,
  Prompt,
  Queue,
  QueueStatus,
  QuickConnect,
  RoutingProfile,
  SearchCriteria,
  SearchCriteriaFilterSensitiveLog,
  SignInConfig,
  Sort,
  TelephonyConfig,
} from "./models_1";

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
 * @public
 * <p>A structure of time range that you want to search results.</p>
 */
export interface SearchContactsTimeRange {
  /**
   * @public
   * <p>The type of timestamp to search.</p>
   */
  Type: SearchContactsTimeRangeType | undefined;

  /**
   * @public
   * <p>The start time of the time range.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end time of the time range.</p>
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface SearchContactsRequest {
  /**
   * @public
   * <p>The identifier of Amazon Connect instance. You can find the instance ID in the Amazon
   *    Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Time range that you want to search results.</p>
   */
  TimeRange: SearchContactsTimeRange | undefined;

  /**
   * @public
   * <p>The search criteria to be used to return contacts.</p>
   */
  SearchCriteria?: SearchCriteria;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifies a field to sort by and a sort order.</p>
   */
  Sort?: Sort;
}

/**
 * @public
 * <p>Information about the agent who accepted the contact.</p>
 */
export interface ContactSearchSummaryAgentInfo {
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
 * <p>If this contact was queued, this contains information about the queue.</p>
 */
export interface ContactSearchSummaryQueueInfo {
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
 * <p>Information of returned contact.</p>
 */
export interface ContactSearchSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identifier of the contact summary.</p>
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
  InitiationMethod?: ContactInitiationMethod;

  /**
   * @public
   * <p>How the contact reached your contact center.</p>
   */
  Channel?: Channel;

  /**
   * @public
   * <p>If this contact was queued, this contains information about the queue.</p>
   */
  QueueInfo?: ContactSearchSummaryQueueInfo;

  /**
   * @public
   * <p>Information about the agent who accepted the contact.</p>
   */
  AgentInfo?: ContactSearchSummaryAgentInfo;

  /**
   * @public
   * <p>The date and time this contact was initiated, in UTC time. For <code>INBOUND</code>, this is
   *    when the contact arrived. For <code>OUTBOUND</code>, this is when the agent began dialing. For
   *     <code>CALLBACK</code>, this is when the callback contact was created. For <code>TRANSFER</code>
   *    and <code>QUEUE_TRANSFER</code>, this is when the transfer was initiated. For API, this is when
   *    the request arrived. For <code>EXTERNAL_OUTBOUND</code>, this is when the agent started dialing
   *    the external participant. For <code>MONITOR</code>, this is when the supervisor started listening
   *    to a contact.</p>
   */
  InitiationTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp when the customer endpoint disconnected from Amazon Connect.</p>
   */
  DisconnectTimestamp?: Date;

  /**
   * @public
   * <p>The timestamp, in Unix epoch time format, at which to start running the inbound flow.</p>
   */
  ScheduledTimestamp?: Date;
}

/**
 * @public
 */
export interface SearchContactsResponse {
  /**
   * @public
   * <p>Information about the contacts.</p>
   */
  Contacts: ContactSearchSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of contacts which matched your search query.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const StringComparisonType = {
  CONTAINS: "CONTAINS",
  EXACT: "EXACT",
  STARTS_WITH: "STARTS_WITH",
} as const;

/**
 * @public
 */
export type StringComparisonType = (typeof StringComparisonType)[keyof typeof StringComparisonType];

/**
 * @public
 * <p>A leaf node condition which can be used to specify a string condition.</p>
 *          <note>
 *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and
 *      <code>description</code>.</p>
 *          </note>
 */
export interface StringCondition {
  /**
   * @public
   * <p>The name of the field in the string condition.</p>
   */
  FieldName?: string;

  /**
   * @public
   * <p>The value of the string.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The type of comparison to be made when evaluating the string condition.</p>
   */
  ComparisonType?: StringComparisonType;
}

/**
 * @public
 * <p>A leaf node condition which can be used to specify a tag condition, for example, <code>HAVE
 *     BPO = 123</code>. </p>
 */
export interface TagCondition {
  /**
   * @public
   * <p>The tag key in the tag condition.</p>
   */
  TagKey?: string;

  /**
   * @public
   * <p>The tag value in the tag condition.</p>
   */
  TagValue?: string;
}

/**
 * @public
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
   * @public
   * <p>A list of conditions which would be applied together with an <code>OR</code> condition.
   *   </p>
   */
  OrConditions?: TagCondition[][];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   */
  AndConditions?: TagCondition[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a tag condition. </p>
   */
  TagCondition?: TagCondition;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface HoursOfOperationSearchFilter {
  /**
   * @public
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
 * @public
 */
export interface SearchHoursOfOperationsResponse {
  /**
   * @public
   * <p>Information about the hours of operations.</p>
   */
  HoursOfOperations?: HoursOfOperation[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of hours of operations which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesResponse {
  /**
   * @public
   * <p>Predefined attributes matched by the search criteria.</p>
   */
  PredefinedAttributes?: PredefinedAttribute[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The approximate number of predefined attributes which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface PromptSearchFilter {
  /**
   * @public
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
 * @public
 */
export interface SearchPromptsResponse {
  /**
   * @public
   * <p>Information about the prompts.</p>
   */
  Prompts?: Prompt[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of quick connects which matched your search query.</p>
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
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface QueueSearchFilter {
  /**
   * @public
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
 * @public
 */
export interface SearchQueuesResponse {
  /**
   * @public
   * <p>Information about the queues.</p>
   */
  Queues?: Queue[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of queues which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface QuickConnectSearchFilter {
  /**
   * @public
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
 * @public
 */
export interface SearchQuickConnectsResponse {
  /**
   * @public
   * <p>Information about the quick connects.</p>
   */
  QuickConnects?: QuickConnect[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of quick connects which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Maximum number (1000) of tags have been returned with current request. Consider changing
 *    request parameters to get more tags.</p>
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
 * @public
 * <p>The search criteria to be used to return tags.</p>
 */
export interface TagSearchCondition {
  /**
   * @public
   * <p>The tag key used in the tag search condition.</p>
   */
  tagKey?: string;

  /**
   * @public
   * <p>The tag value used in the tag search condition.</p>
   */
  tagValue?: string;

  /**
   * @public
   * <p>The type of comparison to be made when evaluating the tag key in tag search
   *    condition.</p>
   */
  tagKeyComparisonType?: StringComparisonType;

  /**
   * @public
   * <p>The type of comparison to be made when evaluating the tag value in tag search
   *    condition.</p>
   */
  tagValueComparisonType?: StringComparisonType;
}

/**
 * @public
 * <p>The search criteria to be used to search tags.</p>
 */
export interface ResourceTagsSearchCriteria {
  /**
   * @public
   * <p>The search criteria to be used to return tags.</p>
   */
  TagSearchCondition?: TagSearchCondition;
}

/**
 * @public
 */
export interface SearchResourceTagsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the Amazon
   *    Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The list of resource types to be used to search tags from. If not provided or if any empty
   *    list is provided, this API will search from all supported resource types.</p>
   */
  ResourceTypes?: string[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The search criteria to be used to return tags.</p>
   */
  SearchCriteria?: ResourceTagsSearchCriteria;
}

/**
 * @public
 * <p>A tag set contains tag key and tag value.</p>
 */
export interface TagSet {
  /**
   * @public
   * <p>The tag key in the tagSet.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The tag value in the tagSet.</p>
   */
  value?: string;
}

/**
 * @public
 */
export interface SearchResourceTagsResponse {
  /**
   * @public
   * <p>A list of tags used in the Amazon Connect instance.</p>
   */
  Tags?: TagSet[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface RoutingProfileSearchFilter {
  /**
   * @public
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
 * @public
 */
export interface SearchRoutingProfilesResponse {
  /**
   * @public
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfiles?: RoutingProfile[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of routing profiles which matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface SecurityProfilesSearchFilter {
  /**
   * @public
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
 * @public
 * <p>Information about the returned security profiles.</p>
 */
export interface SecurityProfileSearchSummary {
  /**
   * @public
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The organization resource identifier.</p>
   */
  OrganizationResourceId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the security profile.</p>
   */
  SecurityProfileName?: string;

  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchSecurityProfilesResponse {
  /**
   * @public
   * <p>Information about the security profiles.</p>
   */
  SecurityProfiles?: SecurityProfileSearchSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of security profiles which matched your search query.</p>
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
 * @public
 * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
 */
export interface HierarchyGroupCondition {
  /**
   * @public
   * <p>The value in the hierarchy group condition.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>The type of hierarchy group match.</p>
   */
  HierarchyGroupMatchType?: HierarchyGroupMatchType;
}

/**
 * @public
 * <p>Filters to be applied to search results.</p>
 */
export interface UserSearchFilter {
  /**
   * @public
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
 * @public
 * <p>The user's first name and last name.</p>
 */
export interface UserIdentityInfoLite {
  /**
   * @public
   * <p>The user's first name.</p>
   */
  FirstName?: string;

  /**
   * @public
   * <p>The user's last name.</p>
   */
  LastName?: string;
}

/**
 * @public
 * <p>Information about the returned users.</p>
 */
export interface UserSearchSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The directory identifier of the user.</p>
   */
  DirectoryUserId?: string;

  /**
   * @public
   * <p>The identifier of the user's hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * @public
   * <p>The identifier of the user's summary.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The user's first name and last name.</p>
   */
  IdentityInfo?: UserIdentityInfoLite;

  /**
   * @public
   * <p>Contains information about the phone configuration settings for a user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * @public
   * <p>The identifier of the user's routing profile.</p>
   */
  RoutingProfileId?: string;

  /**
   * @public
   * <p>The identifiers of the user's security profiles.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The name of the user.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface SearchUsersResponse {
  /**
   * @public
   * <p>Information about the users.</p>
   */
  Users?: UserSearchSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of users who matched your search query.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface SearchVocabulariesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State?: VocabularyState;

  /**
   * @public
   * <p>The starting pattern of the name of the vocabulary.</p>
   */
  NameStartsWith?: string;

  /**
   * @public
   * <p>The language code of the vocabulary entries. For a list of languages and their corresponding language codes, see
   * <a href="https://docs.aws.amazon.com/transcribe/latest/dg/transcribe-whatis.html">What is Amazon Transcribe?</a>
   *          </p>
   */
  LanguageCode?: VocabularyLanguageCode;
}

/**
 * @public
 * <p>Contains summary information about the custom vocabulary.</p>
 */
export interface VocabularySummary {
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
  LanguageCode: VocabularyLanguageCode | undefined;

  /**
   * @public
   * <p>The current state of the custom vocabulary.</p>
   */
  State: VocabularyState | undefined;

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
}

/**
 * @public
 */
export interface SearchVocabulariesResponse {
  /**
   * @public
   * <p>The list of the available custom vocabularies.</p>
   */
  VocabularySummaryList?: VocabularySummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
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
 * @public
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
 */
export interface ChatEvent {
  /**
   * @public
   * <p>Type of chat integration event. </p>
   */
  Type: ChatEventType | undefined;

  /**
   * @public
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
   */
  ContentType?: string;

  /**
   * @public
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
   */
  Content?: string;
}

/**
 * @public
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
  /**
   * @public
   * <p>Display name of the participant.</p>
   */
  DisplayName: string | undefined;
}

/**
 * @public
 * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
 */
export interface ChatStreamingConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the standard Amazon SNS topic. The Amazon Resource Name (ARN) of the streaming endpoint that is used
   *    to publish real-time message streaming for chat conversations.</p>
   */
  StreamingEndpointArn: string | undefined;
}

/**
 * @public
 * <p>Payload of chat properties to apply when starting a new contact.</p>
 */
export interface NewSessionDetails {
  /**
   * @public
   * <p> The supported chat message content types. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>,
   *     <code>application/vnd.amazonaws.connect.message.interactive</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>. </p>
   *          <p>Content types must always contain <code> text/plain</code>. You can then put any other
   *    supported type in the list. For example, all the following lists are valid because they contain
   *     <code>text/plain</code>: <code>[text/plain, text/markdown, application/json]</code>, <code>
   *     [text/markdown, text/plain]</code>, <code>[text/plain, application/json,
   *     application/vnd.amazonaws.connect.message.interactive.response]</code>. </p>
   */
  SupportedMessagingContentTypes?: string[];

  /**
   * @public
   * <p>The customer's details.</p>
   */
  ParticipantDetails?: ParticipantDetails;

  /**
   * @public
   * <p> A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p> There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute
   *    keys can include only alphanumeric, dash, and underscore characters. </p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   */
  StreamingConfiguration?: ChatStreamingConfiguration;
}

/**
 * @public
 */
export interface SendChatIntegrationEventRequest {
  /**
   * @public
   * <p>External identifier of chat customer participant, used in part to uniquely identify a chat.
   *    For SMS, this is the E164 phone number of the chat customer participant.</p>
   */
  SourceId: string | undefined;

  /**
   * @public
   * <p>Chat system identifier, used in part to uniquely identify chat. This is associated with the
   *     Amazon Connect instance and flow to be used to start chats. For SMS, this is the phone
   *    number destination of inbound SMS messages represented by an Amazon Pinpoint phone number
   *    ARN.</p>
   */
  DestinationId: string | undefined;

  /**
   * @public
   * <p>Classification of a channel. This is used in part to uniquely identify chat. </p>
   *          <p>Valid value: <code>["connect:sms"]</code>
   *          </p>
   */
  Subtype?: string;

  /**
   * @public
   * <p>Chat integration event payload</p>
   */
  Event: ChatEvent | undefined;

  /**
   * @public
   * <p>Contact properties to apply when starting a new chat. If the integration event is handled
   *    with an existing chat, this is ignored.</p>
   */
  NewSessionDetails?: NewSessionDetails;
}

/**
 * @public
 */
export interface SendChatIntegrationEventResponse {
  /**
   * @public
   * <p>Identifier of chat contact used to handle integration event. This may be null if the
   *    integration event is not valid without an already existing chat contact.</p>
   */
  InitialContactId?: string;

  /**
   * @public
   * <p>Whether handling the integration event resulted in creating a new chat or acting on existing
   *    chat.</p>
   */
  NewChatCreated?: boolean;
}

/**
 * @public
 * <p>A chat message.</p>
 */
export interface ChatMessage {
  /**
   * @public
   * <p>The type of the content. Supported types are <code>text/plain</code>,
   *     <code>text/markdown</code>, <code>application/json</code>, and
   *     <code>application/vnd.amazonaws.connect.message.interactive.response</code>.</p>
   */
  ContentType: string | undefined;

  /**
   * @public
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
   */
  Content: string | undefined;
}

/**
 * @public
 * <p>Enable persistent chats. For more information about enabling persistent chat, and for
 *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
 */
export interface PersistentChat {
  /**
   * @public
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
   */
  RehydrationType?: RehydrationType;

  /**
   * @public
   * <p>The contactId from which a persistent chat session must be started.</p>
   */
  SourceContactId?: string;
}

/**
 * @public
 * <p>A value for a segment attribute. This is structured as a map where the key is
 *     <code>valueString</code> and the value is a string.</p>
 */
export interface SegmentAttributeValue {
  /**
   * @public
   * <p>The value of a segment attribute.</p>
   */
  ValueString?: string;
}

/**
 * @public
 */
export interface StartChatContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow for initiating the chat.
   *    To
   *    see the ContactFlowId in the Amazon Connect admin website, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the
   *    flow page, under the name of the flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes. They can be accessed in flows just like any other contact attributes. </p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>Information identifying the participant.</p>
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * @public
   * <p>The initial message to be sent to the newly created chat. If you have a Lex bot in your
   *    flow, the initial message is not delivered to the Lex bot.</p>
   */
  InitialMessage?: ChatMessage;

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
   * <p>The total duration of the newly started chat session. If not specified, the chat session
   *    duration defaults to 25 hour. The minimum configurable time is 60 minutes. The maximum
   *    configurable time is 10,080 minutes (7 days).</p>
   */
  ChatDurationInMinutes?: number;

  /**
   * @public
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
   */
  SupportedMessagingContentTypes?: string[];

  /**
   * @public
   * <p>Enable persistent chats. For more information about enabling persistent chat, and for
   *    example use cases and how to configure for them, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.</p>
   */
  PersistentChat?: PersistentChat;

  /**
   * @public
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    chat starting.</p>
   *          <note>
   *             <p>You cannot provide data for both RelatedContactId and PersistentChat. </p>
   *          </note>
   */
  RelatedContactId?: string;

  /**
   * @public
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
   */
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
}

/**
 * @public
 */
export interface StartChatContactResponse {
  /**
   * @public
   * <p>The identifier of this contact within the Amazon Connect instance. </p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The identifier for a chat participant. The participantId for a chat participant is the same
   *    throughout the chat lifecycle.</p>
   */
  ParticipantId?: string;

  /**
   * @public
   * <p>The token used by the chat participant to call <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a>. The participant token is valid for the lifetime of a chat
   *    participant.</p>
   */
  ParticipantToken?: string;

  /**
   * @public
   * <p>The contactId from which a persistent chat session is started. This field is populated only
   *    for persistent chats.</p>
   */
  ContinuedFromContactId?: string;
}

/**
 * @public
 */
export interface StartContactEvaluationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

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
export interface StartContactEvaluationResponse {
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
 * @public
 * <p>Contains information about the recording configuration settings.</p>
 */
export interface VoiceRecordingConfiguration {
  /**
   * @public
   * <p>Identifies which track is being recorded.</p>
   */
  VoiceRecordingTrack?: VoiceRecordingTrack;
}

/**
 * @public
 */
export interface StartContactRecordingRequest {
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

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * @public
   * <p>The person being recorded.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The streaming configuration, such as the Amazon SNS streaming endpoint.</p>
   */
  ChatStreamingConfiguration: ChatStreamingConfiguration | undefined;

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
export interface StartContactStreamingResponse {
  /**
   * @public
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

/**
 * @public
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export class DestinationNotAllowedException extends __BaseException {
  readonly name: "DestinationNotAllowedException" = "DestinationNotAllowedException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>The contact is not permitted.</p>
 */
export class OutboundContactNotPermittedException extends __BaseException {
  readonly name: "OutboundContactNotPermittedException" = "OutboundContactNotPermittedException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>Configuration of the answering machine detection.</p>
 */
export interface AnswerMachineDetectionConfig {
  /**
   * @public
   * <p>The flag to indicate if answer machine detection analysis needs to be performed for a voice
   *    call. If set to <code>true</code>, <code>TrafficType</code> must be set as <code>CAMPAIGN</code>.
   *   </p>
   */
  EnableAnswerMachineDetection?: boolean;

  /**
   * @public
   * <p>Wait for the answering machine prompt.</p>
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
   * @public
   * <p>The name of a voice contact that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the voice contact that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Contacts can
   *    have the following reference types at the time of creation: <code>URL</code> |
   *     <code>NUMBER</code> | <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>.
   *     <code>ATTACHMENT</code> is not a supported reference type during voice contact creation.</p>
   */
  References?: Record<string, Reference>;

  /**
   * @public
   * <p>The <code>contactId</code> that is related to this contact. Linking voice, task, or chat by
   *    using <code>RelatedContactID</code> copies over contact attributes from the related contact to
   *    the new contact. All updates to user-defined attributes in the new contact are limited to the
   *    individual contact ID. There are no limits to the number of contacts that can be linked by using
   *     <code>RelatedContactId</code>. </p>
   */
  RelatedContactId?: string;

  /**
   * @public
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The
   *    identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Contact
   *     Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>. The token is valid for 7 days after creation. If a contact is already started,
   *    the contact ID is returned.
   *    </p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do
   *    not specify a source phone number, you must specify a queue.</p>
   */
  SourcePhoneNumber?: string;

  /**
   * @public
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the flow
   *    is used. If you do not specify a queue, you must specify a source phone number.</p>
   */
  QueueId?: string;

  /**
   * @public
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>Configuration of the answering machine detection for this outbound call. </p>
   */
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;

  /**
   * @public
   * <p>The campaign identifier of the outbound communication.</p>
   */
  CampaignId?: string;

  /**
   * @public
   * <p>Denotes the class of traffic. Calls with different traffic types are handled differently by
   *     Amazon Connect. The default value is <code>GENERAL</code>. Use <code>CAMPAIGN</code> if
   *     <code>EnableAnswerMachineDetection</code> is set to <code>true</code>. For all other cases, use
   *     <code>GENERAL</code>. </p>
   */
  TrafficType?: TrafficType;
}

/**
 * @public
 */
export interface StartOutboundVoiceContactResponse {
  /**
   * @public
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface StartTaskContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the previous chat, voice, or task contact. Any updates to user-defined
   *    attributes to task contacts linked using the same <code>PreviousContactID</code> will affect
   *    every contact in the chain. There can be a maximum of 12 linked task contacts in a chain.</p>
   */
  PreviousContactId?: string;

  /**
   * @public
   * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect admin website,
   *    on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId?: string;

  /**
   * @public
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>The name of a task that is shown to an agent in the Contact Control Panel (CCP).</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>. <code>ATTACHMENT</code> is not a
   *    supported reference type during task creation.</p>
   */
  References?: Record<string, Reference>;

  /**
   * @public
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;

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
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
   */
  ScheduledTime?: Date;

  /**
   * @public
   * <p>A unique identifier for the task template. For more information about task templates, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/task-templates.html">Create task templates</a> in the
   *      <i>Amazon Connect Administrator Guide</i>. </p>
   */
  TaskTemplateId?: string;

  /**
   * @public
   * <p>The identifier for the quick connect. Tasks that are created by using <code>QuickConnectId</code> will use the
   *    flow that is defined on agent or queue quick connect. For more information about quick connects,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/quick-connects.html">Create quick
   *     connects</a>.</p>
   */
  QuickConnectId?: string;

  /**
   * @public
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact. Linking
   *    tasks together by using <code>RelatedContactID</code> copies over contact attributes from the
   *    related task contact to the new task contact. All updates to user-defined attributes in the new
   *    task contact are limited to the individual contact ID, unlike what happens when tasks are linked
   *    by using <code>PreviousContactID</code>. There are no limits to the number of contacts that can
   *    be linked by using <code>RelatedContactId</code>. </p>
   */
  RelatedContactId?: string;
}

/**
 * @public
 */
export interface StartTaskContactResponse {
  /**
   * @public
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

/**
 * @public
 */
export interface StartWebRTCContactRequest {
  /**
   * @public
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect attributes, and can be accessed in flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, -, and _ characters.</p>
   */
  Attributes?: Record<string, string>;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   *          <p>The token is valid for 7 days after creation. If a contact is already started, the contact
   *    ID is returned.</p>
   */
  ClientToken?: string;

  /**
   * @public
   * <p>The identifier of the flow for the call. To see the ContactFlowId in the Amazon Connect admin website, on the
   *    navigation menu go to <b>Routing</b>, <b>Contact
   *     Flows</b>. Choose the flow. On the flow page, under the name of the flow, choose
   *     <b>Show additional flow information</b>. The ContactFlowId is the last
   *    part of the ARN, shown here in bold: </p>
   *          <p>arn:aws:connect:us-west-2:xxxxxxxxxxxx:instance/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx/contact-flow/<b>846ec553-a005-41c0-8341-xxxxxxxxxxxx</b>
   *          </p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>Information about the video sharing capabilities of the participants (customer,
   *    agent).</p>
   */
  AllowedCapabilities?: AllowedCapabilities;

  /**
   * @public
   * <p>The customer's details.</p>
   */
  ParticipantDetails: ParticipantDetails | undefined;

  /**
   * @public
   * <p>The unique identifier for an Amazon Connect contact. This identifier is related to the
   *    contact starting.</p>
   */
  RelatedContactId?: string;

  /**
   * @public
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP). Tasks can have
   *    the following reference types at the time of creation: <code>URL</code> | <code>NUMBER</code> |
   *     <code>STRING</code> | <code>DATE</code> | <code>EMAIL</code>. <code>ATTACHMENT</code> is not a
   *    supported reference type during task creation.</p>
   */
  References?: Record<string, Reference>;

  /**
   * @public
   * <p>A description of the task that is shown to an agent in the Contact Control Panel
   *    (CCP).</p>
   */
  Description?: string;
}

/**
 * @public
 * <p>The attendee information, including attendee ID and join token.</p>
 */
export interface Attendee {
  /**
   * @public
   * <p>The Amazon Chime SDK attendee ID.</p>
   */
  AttendeeId?: string;

  /**
   * @public
   * <p>The join token used by the Amazon Chime SDK attendee.</p>
   */
  JoinToken?: string;
}

/**
 * @public
 * <p>A set of endpoints used by clients to connect to the media service group for an Amazon Chime SDK meeting.</p>
 */
export interface MediaPlacement {
  /**
   * @public
   * <p>The audio host URL.</p>
   */
  AudioHostUrl?: string;

  /**
   * @public
   * <p>The audio fallback URL.</p>
   */
  AudioFallbackUrl?: string;

  /**
   * @public
   * <p>The signaling URL.</p>
   */
  SignalingUrl?: string;

  /**
   * @public
   * <p>The turn control URL.</p>
   */
  TurnControlUrl?: string;

  /**
   * @public
   * <p>The event ingestion URL to which you send client meeting events.</p>
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
 * @public
 * <p>Has audio-specific configurations as the operating parameter for Echo Reduction.</p>
 */
export interface AudioFeatures {
  /**
   * @public
   * <p>Makes echo reduction available to clients who connect to the meeting.</p>
   */
  EchoReduction?: MeetingFeatureStatus;
}

/**
 * @public
 * <p>The configuration settings of the features available to a meeting.</p>
 */
export interface MeetingFeaturesConfiguration {
  /**
   * @public
   * <p>The configuration settings for the audio features available to a meeting.</p>
   */
  Audio?: AudioFeatures;
}

/**
 * @public
 * <p>A meeting created using the Amazon Chime SDK.</p>
 */
export interface Meeting {
  /**
   * @public
   * <p>The Amazon Web Services Region in which you create the meeting.</p>
   */
  MediaRegion?: string;

  /**
   * @public
   * <p>The media placement for the meeting.</p>
   */
  MediaPlacement?: MediaPlacement;

  /**
   * @public
   * <p>The configuration settings of the features available to a meeting.</p>
   */
  MeetingFeatures?: MeetingFeaturesConfiguration;

  /**
   * @public
   * <p>The Amazon Chime SDK meeting ID.</p>
   */
  MeetingId?: string;
}

/**
 * @public
 * <p>Information required to join the call.</p>
 */
export interface ConnectionData {
  /**
   * @public
   * <p>The attendee information, including attendee ID and join token.</p>
   */
  Attendee?: Attendee;

  /**
   * @public
   * <p>A meeting created using the Amazon Chime SDK.</p>
   */
  Meeting?: Meeting;
}

/**
 * @public
 */
export interface StartWebRTCContactResponse {
  /**
   * @public
   * <p>Information required for the client application (mobile application or website) to connect
   *    to the call.</p>
   */
  ConnectionData?: ConnectionData;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The identifier for a contact participant. The <code>ParticipantId</code> for a contact
   *    participant is the same throughout the contact lifecycle.</p>
   */
  ParticipantId?: string;

  /**
   * @public
   * <p>The token used by the contact participant to call the <a href="https://docs.aws.amazon.com/connect-participant/latest/APIReference/API_CreateParticipantConnection.html">CreateParticipantConnection</a> API. The participant token is valid for the lifetime of a
   *    contact participant.</p>
   */
  ParticipantToken?: string;
}

/**
 * @public
 * <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat or Task contacts.</p>
 */
export class ContactNotFoundException extends __BaseException {
  readonly name: "ContactNotFoundException" = "ContactNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
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
 * @public
 * <p>Contains details about why a contact was disconnected. Only Amazon Connect outbound
 *    campaigns can provide this field.</p>
 */
export interface DisconnectReason {
  /**
   * @public
   * <p>A code that indicates how the contact was terminated.</p>
   */
  Code?: string;
}

/**
 * @public
 */
export interface StopContactRequest {
  /**
   * @public
   * <p>The ID of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The reason a contact can be disconnected. Only Amazon Connect outbound campaigns can
   *    provide this field.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact that is associated with
   *    the first interaction with the contact center.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the streaming configuration enabled. </p>
   */
  StreamingId: string | undefined;
}

/**
 * @public
 */
export interface StopContactStreamingResponse {}

/**
 * @public
 * <p>Information about input answers for a contact evaluation.</p>
 */
export interface EvaluationAnswerInput {
  /**
   * @public
   * <p>The value for an answer in a contact evaluation.</p>
   */
  Value?: EvaluationAnswerData;
}

/**
 * @public
 */
export interface SubmitContactEvaluationRequest {
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

  /**
   * @public
   * <p>A map of question identifiers to answer value.</p>
   */
  Answers?: Record<string, EvaluationAnswerInput>;

  /**
   * @public
   * <p>A map of question identifiers to note value.</p>
   */
  Notes?: Record<string, EvaluationNote>;
}

/**
 * @public
 */
export interface SubmitContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface SuspendContactRecordingRequest {
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

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
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
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The tags to be assigned to the contact resource. For example, \{ "Tags": \{"key1":"value1",
   *    "key2":"value2"\} \}.</p>
   *          <note>
   *             <p>Authorization is not supported by this tag.</p>
   *          </note>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TransferContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId?: string;

  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId?: string;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

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
export interface TransferContactResponse {
  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the contact.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface UntagContactRequest {
  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A list of tag keys. Existing tags on the contact whose keys are members of this list will be
   *    removed.</p>
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the agent status.</p>
   */
  AgentStatusId: string | undefined;

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
   * <p>The state of the agent status.</p>
   */
  State?: AgentStatusState;

  /**
   * @public
   * <p>The display order of the agent status.</p>
   */
  DisplayOrder?: number;

  /**
   * @public
   * <p>A number indicating the reset order of the agent status.</p>
   */
  ResetOrderNumber?: boolean;
}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with your contact center.</p>
   */
  ContactId: string | undefined;

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
   * <p>Well-formed data on contact, shown to agents on Contact Control Panel (CCP).</p>
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
   * @public
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Connect attributes. These attributes can be accessed in flows just like any
   *    other contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the contact evaluation.</p>
   */
  EvaluationId: string | undefined;

  /**
   * @public
   * <p>A map of question identifiers to answer value.</p>
   */
  Answers?: Record<string, EvaluationAnswerInput>;

  /**
   * @public
   * <p>A map of question identifiers to note value.</p>
   */
  Notes?: Record<string, EvaluationNote>;
}

/**
 * @public
 */
export interface UpdateContactEvaluationResponse {
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
}

/**
 * @public
 */
export interface UpdateContactFlowContentRequest {
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

  /**
   * @public
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
   *          <p>Length Constraints: Minimum length of 1. Maximum length of 256000.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the flow.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of flow.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * @public
   * <p>The JSON string that represents the content of the flow. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     flow in Amazon Connect Flow language</a>. </p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow module.</p>
   */
  ContactFlowModuleId: string | undefined;

  /**
   * @public
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the flow module.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of flow module.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the flow.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateContactFlowNameResponse {}

/**
 * @public
 */
export interface UpdateContactRoutingDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The number of seconds to add or subtract from the contact's routing age. Contacts are routed
   *    to agents on a first-come, first-serve basis. This means that changing their amount of time in
   *    queue compared to others also changes their position in queue.</p>
   */
  QueueTimeAdjustmentSeconds?: number;

  /**
   * @public
   * <p>Priority of the contact in the queue. The default priority for new contacts is 5. You can
   *    raise the priority of a contact compared to other contacts in the queue by assigning them a
   *    higher priority, such as 1 or 2.</p>
   */
  QueuePriority?: number;
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The timestamp, in Unix Epoch seconds format, at which to start running the inbound flow. The scheduled time cannot be in the past. It must be within up to 6 days in future. </p>
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
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the contact evaluation resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>The version of the updated evaluation form resource.</p>
   */
  EvaluationFormVersion: number | undefined;
}

/**
 * @public
 */
export interface UpdateHoursOfOperationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;

  /**
   * @public
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the hours of operation.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The time zone of the hours of operation.</p>
   */
  TimeZone?: string;

  /**
   * @public
   * <p>Configuration information of the hours of operation.</p>
   */
  Config?: HoursOfOperationConfig[];
}

/**
 * @public
 */
export interface UpdateInstanceAttributeRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of attribute.</p>
   *          <note>
   *             <p>Only allowlisted customers can consume USE_CUSTOM_TTS_VOICES. To access this feature,
   *     contact Amazon Web Services Support for allowlisting.</p>
   *          </note>
   */
  AttributeType: InstanceAttributeType | undefined;

  /**
   * @public
   * <p>The value for the attribute. Maximum character limit is 100. </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface UpdateInstanceStorageConfigRequest {
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
  ResourceType: InstanceStorageResourceType | undefined;

  /**
   * @public
   * <p>The storage configuration for the instance.</p>
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
 * @public
 * <p>The value of the timer. Either the timer action (<code>Unset</code> to delete the timer), or
 *    the duration of the timer in minutes. Only one value can be set.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
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
   * @public
   * <p>The timer action. Currently only one value is allowed: <code>Unset</code>. It deletes a
   *    timer.</p>
   */
  export interface ParticipantTimerActionMember {
    ParticipantTimerAction: ParticipantTimerAction;
    ParticipantTimerDurationInMinutes?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The duration of a timer, in minutes. </p>
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
 * @public
 * <p>Configuration information for the timer. After the timer configuration is set, it persists
 *    for the duration of the chat. It persists across new contacts in the chain, for example, transfer
 *    contacts.</p>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 */
export interface ParticipantTimerConfiguration {
  /**
   * @public
   * <p>The role of the participant in the chat conversation.</p>
   */
  ParticipantRole: TimerEligibleParticipantRoles | undefined;

  /**
   * @public
   * <p>The type of timer. <code>IDLE</code> indicates the timer applies for considering a human
   *    chat participant as idle. <code>DISCONNECT_NONCUSTOMER</code> indicates the timer applies to
   *    automatically disconnecting a chat participant due to idleness.</p>
   */
  TimerType: ParticipantTimerType | undefined;

  /**
   * @public
   * <p>The value of the timer. Either the timer action (Unset to delete the timer), or the duration
   *    of the timer in minutes. Only one value can be set.</p>
   */
  TimerValue: ParticipantTimerValue | undefined;
}

/**
 * @public
 * <p>Configuration information for the chat participant role.</p>
 */
export interface ChatParticipantRoleConfig {
  /**
   * @public
   * <p>A list of participant timers. You can specify any unique combination of role and timer type.
   *    Duplicate entries error out the request with a 400.</p>
   */
  ParticipantTimerConfigList: ParticipantTimerConfiguration[] | undefined;
}

/**
 * @public
 * <p>Configuration information for the chat participant role.</p>
 */
export type UpdateParticipantRoleConfigChannelInfo =
  | UpdateParticipantRoleConfigChannelInfo.ChatMember
  | UpdateParticipantRoleConfigChannelInfo.$UnknownMember;

/**
 * @public
 */
export namespace UpdateParticipantRoleConfigChannelInfo {
  /**
   * @public
   * <p>Configuration information for the chat participant role.</p>
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
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact in this instance of Amazon Connect. </p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The Amazon Connect channel you want to configure.</p>
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
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone number inbound traffic is routed through. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance that phone numbers are claimed to. You
   *    can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the
   *     instance ID</a> in the Amazon Resource Name (ARN) of the instance. You must enter <code>InstanceId</code> or <code>TargetArn</code>. </p>
   */
  InstanceId?: string;

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
export interface UpdatePhoneNumberResponse {
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
 */
export interface UpdatePhoneNumberMetadataRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) or resource ID of the phone number.</p>
   */
  PhoneNumberId: string | undefined;

  /**
   * @public
   * <p>The description of the phone number.</p>
   */
  PhoneNumberDescription?: string;

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
export interface UpdatePredefinedAttributeRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the predefined attribute.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The values of the predefined attribute.</p>
   */
  Values?: PredefinedAttributeValues;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
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

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the prompt.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The URI for the S3 bucket where the prompt is stored. You can provide S3 pre-signed URLs returned by the
   * <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetPromptFile.html">GetPromptFile</a>
   *  API instead of providing S3 URIs.</p>
   */
  S3Uri?: string;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
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
 */
export interface UpdateQueueHoursOfOperationRequest {
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
   * <p>The identifier for the hours of operation.</p>
   */
  HoursOfOperationId: string | undefined;
}

/**
 * @public
 */
export interface UpdateQueueMaxContactsRequest {
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
   * <p>The maximum number of contacts that can be in the queue before it is considered full.</p>
   */
  MaxContacts?: number;
}

/**
 * @public
 */
export interface UpdateQueueNameRequest {
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
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the queue.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateQueueOutboundCallerConfigRequest {
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
   * <p>The outbound caller ID name, number, and outbound whisper flow.</p>
   */
  OutboundCallerConfig: OutboundCallerConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQueueStatusRequest {
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
   * <p>The status of the queue.</p>
   */
  Status: QueueStatus | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectConfigRequest {
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

  /**
   * @public
   * <p>Information about the configuration settings for the quick connect.</p>
   */
  QuickConnectConfig: QuickConnectConfig | undefined;
}

/**
 * @public
 */
export interface UpdateQuickConnectNameRequest {
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

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the quick connect.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {
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
   * <p>Whether agents with this routing profile will have their routing order calculated based on
   *     <i>time since their last inbound contact</i> or <i>longest idle
   *     time</i>. </p>
   */
  AgentAvailabilityTimer: AgentAvailabilityTimer | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileConcurrencyRequest {
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
   * <p>The channels that agents can handle in the Contact Control Panel (CCP).</p>
   */
  MediaConcurrencies: MediaConcurrency[] | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
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
   * <p>The identifier for the default outbound queue.</p>
   */
  DefaultOutboundQueueId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRoutingProfileNameRequest {
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
   * <p>The name of the routing profile. Must not be more than 127 characters.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the routing profile. Must not be more than 250 characters.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateRoutingProfileQueuesRequest {
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
   * <p>The queues to be updated for this routing profile.
   *    Queues must first be associated to the routing
   *    profile. You can do this using AssociateRoutingProfileQueues.</p>
   */
  QueueConfigs: RoutingProfileQueueConfig[] | undefined;
}

/**
 * @public
 */
export interface UpdateRuleRequest {
  /**
   * @public
   * <p>A unique identifier for the rule.</p>
   */
  RuleId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the rule. You can change the name only if <code>TriggerEventSource</code> is one
   *    of the following values: <code>OnZendeskTicketCreate</code> |
   *     <code>OnZendeskTicketStatusUpdate</code> | <code>OnSalesforceCaseCreate</code>
   *          </p>
   */
  Name: string | undefined;

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
  PublishStatus: RulePublishStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSecurityProfileRequest {
  /**
   * @public
   * <p>The description of the security profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The permissions granted to a security profile. For a list of valid permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security
   *     profile permissions</a>.</p>
   */
  Permissions?: string[];

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

  /**
   * @public
   * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
   *          <p>A list of the third-party application's metadata.</p>
   */
  Applications?: Application[];
}

/**
 * @public
 */
export interface UpdateTaskTemplateRequest {
  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name?: string;

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
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus;

  /**
   * @public
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];
}

/**
 * @public
 */
export interface UpdateTaskTemplateResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The identifier of the task template resource.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the task template resource.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name?: string;

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
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus;

  /**
   * @public
   * <p>The timestamp when the task template was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>The timestamp when the task template was created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface UpdateTrafficDistributionRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region. </p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The distribution of traffic between the instance and its replica(s).</p>
   */
  TelephonyConfig?: TelephonyConfig;

  /**
   * @public
   * <p>The distribution that determines which Amazon Web Services Regions should be used to sign in
   *    agents in to both the instance and its replica(s).</p>
   */
  SignInConfig?: SignInConfig;

  /**
   * @public
   * <p>The distribution of agents between the instance and its replica(s).</p>
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
   * @public
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

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
 */
export interface UpdateUserHierarchyGroupNameRequest {
  /**
   * @public
   * <p>The name of the hierarchy group. Must not be more than 100 characters.</p>
   */
  Name: string | undefined;

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
 * <p>Contains information about the hierarchy level to update.</p>
 */
export interface HierarchyLevelUpdate {
  /**
   * @public
   * <p>The name of the user hierarchy level. Must not be more than 50 characters.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Contains information about the level hierarchy to update.</p>
 */
export interface HierarchyStructureUpdate {
  /**
   * @public
   * <p>The
   *    update
   *    for level one.</p>
   */
  LevelOne?: HierarchyLevelUpdate;

  /**
   * @public
   * <p>The update for level two.</p>
   */
  LevelTwo?: HierarchyLevelUpdate;

  /**
   * @public
   * <p>The update for level three.</p>
   */
  LevelThree?: HierarchyLevelUpdate;

  /**
   * @public
   * <p>The update for level four.</p>
   */
  LevelFour?: HierarchyLevelUpdate;

  /**
   * @public
   * <p>The update for level five.</p>
   */
  LevelFive?: HierarchyLevelUpdate;
}

/**
 * @public
 */
export interface UpdateUserHierarchyStructureRequest {
  /**
   * @public
   * <p>The hierarchy levels to update.</p>
   */
  HierarchyStructure: HierarchyStructureUpdate | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 */
export interface UpdateUserIdentityInfoRequest {
  /**
   * @public
   * <p>The identity information for the user.</p>
   */
  IdentityInfo: UserIdentityInfo | undefined;

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
 */
export interface UpdateUserPhoneConfigRequest {
  /**
   * @public
   * <p>Information about phone configuration settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

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
 */
export interface UpdateUserProficienciesRequest {
  /**
   * @public
   * <p> The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>The proficiencies to be updated for the user. Proficiencies must first be associated to the
   *    user. You can do this using AssociateUserProficiencies API.</p>
   */
  UserProficiencies: UserProficiency[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserRoutingProfileRequest {
  /**
   * @public
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

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
 */
export interface UpdateUserSecurityProfilesRequest {
  /**
   * @public
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

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
 */
export interface UpdateViewContentRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   */
  ViewId: string | undefined;

  /**
   * @public
   * <p>Indicates the view status as either <code>SAVED</code> or <code>PUBLISHED</code>. The
   *     <code>PUBLISHED</code> status will initiate validation on the content.</p>
   */
  Status: ViewStatus | undefined;

  /**
   * @public
   * <p>View content containing all content necessary to render a view except for runtime input data
   *    and the runtime input schema, which is auto-generated by this operation.</p>
   *          <p>The total uncompressed content has a maximum file size of 400kB.</p>
   */
  Content: ViewInputContent | undefined;
}

/**
 * @public
 */
export interface UpdateViewContentResponse {
  /**
   * @public
   * <p>A view resource object. Contains metadata and content necessary to render the view.</p>
   */
  View?: View;
}

/**
 * @public
 */
export interface UpdateViewMetadataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the view. Both <code>ViewArn</code> and <code>ViewId</code> can be
   *    used.</p>
   */
  ViewId: string | undefined;

  /**
   * @public
   * <p>The name of the view.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the view.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateViewMetadataResponse {}

/**
 * @public
 * <p>Information about an item from an evaluation form. The item must be either a section or a
 *    question.</p>
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
   * @public
   * <p>The information of the section.</p>
   */
  export interface SectionMember {
    Section: EvaluationFormSection;
    Question?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>The information of the question.</p>
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
 * @public
 * <p>Information about a section from an evaluation form. A section can contain sections and/or
 *    questions. Evaluation forms can only contain sections and subsections (two level nesting).</p>
 */
export interface EvaluationFormSection {
  /**
   * @public
   * <p>The title of the section.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The identifier of the section. An identifier must be unique within the evaluation
   *    form.</p>
   */
  RefId: string | undefined;

  /**
   * @public
   * <p>The instructions of the section.</p>
   */
  Instructions?: string;

  /**
   * @public
   * <p>The items of the section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * @public
   * <p>The scoring weight of the section.</p>
   */
  Weight?: number;
}

/**
 * @public
 */
export interface CreateEvaluationFormRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The description of the evaluation form.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * @public
   * <p>A scoring strategy of the evaluation form.</p>
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

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
 * <p>Information about the evaluation form.</p>
 */
export interface EvaluationForm {
  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>A version of the evaluation form.</p>
   */
  EvaluationFormVersion: number | undefined;

  /**
   * @public
   * <p>The flag indicating whether the evaluation form is locked for changes.</p>
   */
  Locked: boolean | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

  /**
   * @public
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The description of the evaluation form.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the evaluation form.</p>
   */
  Status: EvaluationFormVersionStatus | undefined;

  /**
   * @public
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * @public
   * <p>A scoring strategy of the evaluation form.</p>
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the evaluation form.</p>
   */
  CreatedBy: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the evaluation form was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation form.</p>
   */
  LastModifiedBy: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "Tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Information about an evaluation form used in a contact evaluation.</p>
 */
export interface EvaluationFormContent {
  /**
   * @public
   * <p>A version of the evaluation form.</p>
   */
  EvaluationFormVersion: number | undefined;

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
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The description of the evaluation form.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * @public
   * <p>A scoring strategy of the evaluation form.</p>
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;
}

/**
 * @public
 * <p>The search criteria to be used to return hours of operations.</p>
 */
export interface HoursOfOperationSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: HoursOfOperationSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: HoursOfOperationSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, <code>timezone</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return predefined attributes.</p>
 */
export interface PredefinedAttributeSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   */
  OrConditions?: PredefinedAttributeSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an <code>AND</code>
   *    condition.</p>
   */
  AndConditions?: PredefinedAttributeSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and
   *      <code>description</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return prompts.</p>
 */
export interface PromptSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: PromptSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: PromptSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return queues.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 */
export interface QueueSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: QueueSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: QueueSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;

  /**
   * @public
   * <p>The type of queue.</p>
   */
  QueueTypeCondition?: SearchableQueueType;
}

/**
 * @public
 * <p>The search criteria to be used to return quick connects.</p>
 */
export interface QuickConnectSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: QuickConnectSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: QuickConnectSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return routing profiles.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results. </p>
 *          </note>
 */
export interface RoutingProfileSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: RoutingProfileSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: RoutingProfileSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code>,
   *      <code>description</code>, and <code>resourceID</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 * <p>The search criteria to be used to return security profiles.</p>
 *          <note>
 *             <p>The <code>name</code> field support "contains" queries with a minimum of 2 characters and
 *     maximum of 25 characters. Any queries with character lengths outside of this range will throw
 *     invalid results.</p>
 *          </note>
 */
export interface SecurityProfileSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an OR condition.</p>
   */
  OrConditions?: SecurityProfileSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an AND condition.</p>
   */
  AndConditions?: SecurityProfileSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <note>
   *             <p>The currently supported values for <code>FieldName</code> are <code>name</code> and
   *      <code>description</code>.</p>
   *          </note>
   */
  StringCondition?: StringCondition;
}

/**
 * @public
 */
export interface UpdateEvaluationFormRequest {
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
   * <p>A version of the evaluation form to update.</p>
   */
  EvaluationFormVersion: number | undefined;

  /**
   * @public
   * <p>A flag indicating whether the operation must create a new version.</p>
   */
  CreateNewVersion?: boolean;

  /**
   * @public
   * <p>A title of the evaluation form.</p>
   */
  Title: string | undefined;

  /**
   * @public
   * <p>The description of the evaluation form.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Items that are part of the evaluation form.  The total number of sections and questions must not exceed 100 each.  Questions must be contained in a section.</p>
   */
  Items: EvaluationFormItem[] | undefined;

  /**
   * @public
   * <p>A scoring strategy of the evaluation form.</p>
   */
  ScoringStrategy?: EvaluationFormScoringStrategy;

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
 * <p>The search criteria to be used to return users.</p>
 *          <note>
 *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
 *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
 *     outside of this range will throw invalid results.  </p>
 *          </note>
 */
export interface UserSearchCriteria {
  /**
   * @public
   * <p>A list of conditions which would be applied together with an <code>OR</code>
   *    condition.</p>
   */
  OrConditions?: UserSearchCriteria[];

  /**
   * @public
   * <p>A list of conditions which would be applied together with an <code>AND</code> condition.
   *   </p>
   */
  AndConditions?: UserSearchCriteria[];

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a string condition.</p>
   *          <p>The currently supported values for <code>FieldName</code> are <code>Username</code>,
   *     <code>FirstName</code>, <code>LastName</code>, <code>RoutingProfileId</code>,
   *     <code>SecurityProfileId</code>, <code>ResourceId</code>.</p>
   */
  StringCondition?: StringCondition;

  /**
   * @public
   * <p>A leaf node condition which can be used to specify a hierarchy group condition.</p>
   */
  HierarchyGroupCondition?: HierarchyGroupCondition;
}

/**
 * @public
 */
export interface DescribeContactEvaluationResponse {
  /**
   * @public
   * <p>Information about the evaluation form completed for a specific contact.</p>
   */
  Evaluation: Evaluation | undefined;

  /**
   * @public
   * <p>Information about the evaluation form.</p>
   */
  EvaluationForm: EvaluationFormContent | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationFormResponse {
  /**
   * @public
   * <p>Information about the evaluation form.</p>
   */
  EvaluationForm: EvaluationForm | undefined;
}

/**
 * @public
 */
export interface SearchHoursOfOperationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: HoursOfOperationSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return hours of operations.</p>
   */
  SearchCriteria?: HoursOfOperationSearchCriteria;
}

/**
 * @public
 */
export interface SearchPredefinedAttributesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource
   *    Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous response in
   *    the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The search criteria to be used to return predefined attributes.</p>
   */
  SearchCriteria?: PredefinedAttributeSearchCriteria;
}

/**
 * @public
 */
export interface SearchPromptsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: PromptSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return prompts.</p>
   */
  SearchCriteria?: PromptSearchCriteria;
}

/**
 * @public
 */
export interface SearchQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: QueueSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return queues.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: QueueSearchCriteria;
}

/**
 * @public
 */
export interface SearchQuickConnectsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: QuickConnectSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return quick connects.</p>
   */
  SearchCriteria?: QuickConnectSearchCriteria;
}

/**
 * @public
 */
export interface SearchRoutingProfilesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: RoutingProfileSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return routing profiles.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results. </p>
   *          </note>
   */
  SearchCriteria?: RoutingProfileSearchCriteria;
}

/**
 * @public
 */
export interface SearchSecurityProfilesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  SearchCriteria?: SecurityProfileSearchCriteria;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: SecurityProfilesSearchFilter;
}

/**
 * @public
 */
export interface SearchUsersRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   *          <note>
   *             <p>InstanceID is a required field. The "Required: No" below is incorrect.</p>
   *          </note>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Filters to be applied to search results.</p>
   */
  SearchFilter?: UserSearchFilter;

  /**
   * @public
   * <p>The search criteria to be used to return users.</p>
   *          <note>
   *             <p>The <code>name</code> and <code>description</code> fields support "contains" queries with
   *     a minimum of 2 characters and a maximum of 25 characters. Any queries with character lengths
   *     outside of this range will throw invalid results.  </p>
   *          </note>
   */
  SearchCriteria?: UserSearchCriteria;
}

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
