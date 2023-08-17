// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ConnectServiceException as __BaseException } from "./ConnectServiceException";
import {
  ActionSummary,
  AgentAvailabilityTimer,
  AgentConfig,
  AgentContactReference,
  AgentStatusReference,
  AgentStatusState,
  AgentStatusSummary,
  AgentStatusType,
  Attribute,
  Channel,
  ContactFlowModuleState,
  ContactFlowState,
  ContactFlowType,
  ContactState,
  DirectoryType,
  Distribution,
  EvaluationAnswerData,
  EvaluationFormVersionStatus,
  EvaluationNote,
  EvaluationScore,
  EvaluationStatus,
  EventSourceName,
  HierarchyGroupSummary,
  HoursOfOperation,
  HoursOfOperationConfig,
  InstanceAttributeType,
  InstanceStatus,
  InstanceStorageConfig,
  InstanceStorageResourceType,
  IntegrationType,
  LexBot,
  LexV2Bot,
  MediaConcurrency,
  MonitorCapability,
  OutboundCallerConfig,
  PhoneNumberCountryCode,
  PhoneNumberType,
  Prompt,
  Queue,
  QueueReference,
  QueueStatus,
  QuickConnect,
  QuickConnectConfig,
  QuickConnectType,
  Reference,
  ReferenceType,
  RoutingProfile,
  RoutingProfileQueueConfig,
  RuleAction,
  RulePublishStatus,
  SourceType,
  TaskTemplateConstraints,
  TaskTemplateDefaults,
  TaskTemplateField,
  TaskTemplateStatus,
  TrafficDistributionGroupStatus,
  UseCaseType,
  UserPhoneConfig,
  VocabularyLanguageCode,
  VocabularyState,
} from "./models_0";

/**
 * @public
 */
export interface GetContactAttributesResponse {
  /**
   * @public
   * <p>Information about the attributes.</p>
   */
  Attributes?: Record<string, string>;
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
 * @public
 * <p>Contains information about a real-time metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/real-time-metrics-definitions.html">Real-time Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface CurrentMetric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  Name?: CurrentMetricName | string;

  /**
   * @public
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit | string;
}

/**
 * @public
 * <p>Contains the filter to apply when retrieving metrics.</p>
 */
export interface Filters {
  /**
   * @public
   * <p>The queues to use to filter the metrics. You should specify at least one queue, and can
   *    specify up to 100 queues per request. The <code>GetCurrentMetricsData</code> API in particular
   *    requires a queue when you include a <code>Filter</code> in your request. </p>
   */
  Queues?: string[];

  /**
   * @public
   * <p>The channel to use to filter the metrics.</p>
   */
  Channels?: (Channel | string)[];

  /**
   * @public
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];
}

/**
 * @public
 * @enum
 */
export const Grouping = {
  CHANNEL: "CHANNEL",
  QUEUE: "QUEUE",
  ROUTING_PROFILE: "ROUTING_PROFILE",
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
 * @public
 * <p>The way to sort the resulting response based on metrics. By default resources are sorted
 *    based on <code>AGENTS_ONLINE</code>, <code>DESCENDING</code>. The metric collection is sorted
 *    based on the input metrics.</p>
 */
export interface CurrentMetricSortCriteria {
  /**
   * @public
   * <p>The current metric names.</p>
   */
  SortByMetric?: CurrentMetricName | string;

  /**
   * @public
   * <p>The way to sort.</p>
   */
  SortOrder?: SortOrder | string;
}

/**
 * @public
 */
export interface GetCurrentMetricDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
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
   * @public
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
   * @public
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
   *                   <code>\{ "Metric": \{ "Name": "OLDEST_CONTACT_AGE", "Unit": "SECONDS" \}, "Value": 24113.0
   *       </code>\}</p>
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
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
 * @public
 * <p>Contains the data for a real-time metric.</p>
 */
export interface CurrentMetricData {
  /**
   * @public
   * <p>Information about the metric.</p>
   */
  Metric?: CurrentMetric;

  /**
   * @public
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Information about the routing profile assigned to the user.</p>
 */
export interface RoutingProfileReference {
  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Contains information about the dimensions for a set of metrics.</p>
 */
export interface Dimensions {
  /**
   * @public
   * <p>Information about the queue for which metrics are returned.</p>
   */
  Queue?: QueueReference;

  /**
   * @public
   * <p>The channel used for grouping and filters.</p>
   */
  Channel?: Channel | string;

  /**
   * @public
   * <p>Information about the routing profile assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;
}

/**
 * @public
 * <p>Contains information about a set of real-time metrics.</p>
 */
export interface CurrentMetricResult {
  /**
   * @public
   * <p>The dimensions for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: CurrentMetricData[];
}

/**
 * @public
 */
export interface GetCurrentMetricDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the real-time metrics.</p>
   */
  MetricResults?: CurrentMetricResult[];

  /**
   * @public
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   */
  DataSnapshotTime?: Date;

  /**
   * @public
   * <p>The total count of the result, regardless of the current page size. </p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 * <p>Filters user data based on the contact information that is associated to the users. It
 *    contains a list of <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
 */
export interface ContactFilter {
  /**
   * @public
   * <p>A list of up to 9 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/about-contact-states.html">contact states</a>.</p>
   */
  ContactStates?: (ContactState | string)[];
}

/**
 * @public
 * <p>A filter for the user data.</p>
 */
export interface UserDataFilters {
  /**
   * @public
   * <p>A list of up to 100 queues or ARNs.</p>
   */
  Queues?: string[];

  /**
   * @public
   * <p>A filter for the user data based on the contact information that is associated to the user.
   *    It contains a list of contact states. </p>
   */
  ContactFilter?: ContactFilter;

  /**
   * @public
   * <p>A list of up to 100 routing profile IDs or ARNs.</p>
   */
  RoutingProfiles?: string[];

  /**
   * @public
   * <p>A list of up to 100 agent IDs or ARNs.</p>
   */
  Agents?: string[];

  /**
   * @public
   * <p>A UserHierarchyGroup ID or ARN.</p>
   */
  UserHierarchyGroups?: string[];
}

/**
 * @public
 */
export interface GetCurrentUserDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
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
}

/**
 * @public
 * <p>Information about the hierarchy group.</p>
 */
export interface HierarchyGroupSummaryReference {
  /**
   * @public
   * <p>The unique identifier for the hierarchy group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the hierarchy group. </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Information about the levels in the hierarchy group.</p>
 */
export interface HierarchyPathReference {
  /**
   * @public
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummaryReference;

  /**
   * @public
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummaryReference;
}

/**
 * @public
 * <p>Information about the user.</p>
 */
export interface UserReference {
  /**
   * @public
   * <p>The unique identifier for the user.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the user.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>Data for a user.</p>
 */
export interface UserData {
  /**
   * @public
   * <p>Information about the user for the data that is returned. It contains the
   *     <code>resourceId</code> and ARN of the user. </p>
   */
  User?: UserReference;

  /**
   * @public
   * <p>Information about the routing profile that is assigned to the user.</p>
   */
  RoutingProfile?: RoutingProfileReference;

  /**
   * @public
   * <p>Contains information about the levels of a hierarchy group assigned to a user.</p>
   */
  HierarchyPath?: HierarchyPathReference;

  /**
   * @public
   * <p>The status of the agent that they manually set in their Contact Control Panel (CCP), or that
   *    the supervisor manually changes in the real-time metrics report.</p>
   */
  Status?: AgentStatusReference;

  /**
   * @public
   * <p>A map of available slots by channel. The key is a channel name. The value is an integer: the
   *    available number of slots. </p>
   */
  AvailableSlotsByChannel?: Record<string, number>;

  /**
   * @public
   * <p>A map of maximum slots by channel. The key is a channel name. The value is an integer: the
   *    maximum number of slots. This is calculated from <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_MediaConcurrency.html">MediaConcurrency</a> of the
   *     <code>RoutingProfile</code> assigned to the agent. </p>
   */
  MaxSlotsByChannel?: Record<string, number>;

  /**
   * @public
   * <p> A map of active slots by channel. The key is a channel name. The value is an integer: the
   *    number of active slots. </p>
   */
  ActiveSlotsByChannel?: Record<string, number>;

  /**
   * @public
   * <p>A list of contact reference information.</p>
   */
  Contacts?: AgentContactReference[];

  /**
   * @public
   * <p>The Next status of the agent.</p>
   */
  NextStatus?: string;
}

/**
 * @public
 */
export interface GetCurrentUserDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of the user data that is returned.</p>
   */
  UserDataList?: UserData[];

  /**
   * @public
   * <p>The total count of the result, regardless of the current page size.</p>
   */
  ApproximateTotalCount?: number;
}

/**
 * @public
 */
export interface GetFederationTokenRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;
}

/**
 * @public
 * <p>Contains credentials to use for federation.</p>
 */
export interface Credentials {
  /**
   * @public
   * <p>An access token generated for a federated user to access Amazon Connect.</p>
   */
  AccessToken?: string;

  /**
   * @public
   * <p>A token generated with an expiration time for the session a user is logged in to Amazon Connect.</p>
   */
  AccessTokenExpiration?: Date;

  /**
   * @public
   * <p>Renews a token generated for a user to access the Amazon Connect instance.</p>
   */
  RefreshToken?: string;

  /**
   * @public
   * <p>Renews the expiration timer for a generated token.</p>
   */
  RefreshTokenExpiration?: Date;
}

/**
 * @public
 */
export interface GetFederationTokenResponse {
  /**
   * @public
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: Credentials;

  /**
   * @public
   * <p>The URL to sign into the user's instance. </p>
   */
  SignInUrl?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user.</p>
   */
  UserArn?: string;

  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId?: string;
}

/**
 * @public
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
 * @public
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface Threshold {
  /**
   * @public
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   */
  Comparison?: Comparison | string;

  /**
   * @public
   * <p>The threshold value to compare.</p>
   */
  ThresholdValue?: number;
}

/**
 * @public
 * <p>Contains information about a historical metric. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical Metrics Definitions</a> in the <i>Amazon Connect Administrator
 *     Guide</i>.</p>
 */
export interface HistoricalMetric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  Name?: HistoricalMetricName | string;

  /**
   * @public
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: Threshold;

  /**
   * @public
   * <p>The statistic for the metric.</p>
   */
  Statistic?: Statistic | string;

  /**
   * @public
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit | string;
}

/**
 * @public
 */
export interface GetMetricDataRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using an interval of 5 minutes,
   *    such as 11:00, 11:05, 11:10, and must be later than the start time timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
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
   * @public
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   */
  Groupings?: (Grouping | string)[];

  /**
   * @public
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
}

/**
 * @public
 * <p>Contains the data for a historical metric.</p>
 */
export interface HistoricalMetricData {
  /**
   * @public
   * <p>Information about the metric.</p>
   */
  Metric?: HistoricalMetric;

  /**
   * @public
   * <p>The value of the metric.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Contains information about the historical metrics retrieved.</p>
 */
export interface HistoricalMetricResult {
  /**
   * @public
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Dimensions;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: HistoricalMetricData[];
}

/**
 * @public
 */
export interface GetMetricDataResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   */
  MetricResults?: HistoricalMetricResult[];
}

/**
 * @public
 * <p>Contains the filter to apply when retrieving metrics with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_GetMetricDataV2.html">GetMetricDataV2</a> API.</p>
 */
export interface FilterV2 {
  /**
   * @public
   * <p>The key to use for filtering data. For example, <code>QUEUE</code>, <code>ROUTING_PROFILE,
   *     AGENT</code>, <code>CHANNEL</code>, <code>AGENT_HIERARCHY_LEVEL_ONE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code>, <code>AGENT_HIERARCHY_LEVEL_THREE</code>,
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code>, <code>AGENT_HIERARCHY_LEVEL_FIVE</code>. There must be
   *    at least 1 key and a maximum 5 keys. </p>
   */
  FilterKey?: string;

  /**
   * @public
   * <p>The identifiers to use for filtering data. For example, if you have a filter key of
   *     <code>QUEUE</code>, you would add queue IDs or ARNs in <code>FilterValues</code>. </p>
   */
  FilterValues?: string[];
}

/**
 * @public
 * <p>Contains information about the filter used when retrieving metrics.
 *     <code>MetricFiltersV2</code> can be used on the following metrics:
 *     <code>AVG_AGENT_CONNECTING_TIME</code>, <code>CONTACTS_CREATED</code>,
 *     <code>CONTACTS_HANDLED</code>, <code>SUM_CONTACTS_DISCONNECTED</code>.</p>
 */
export interface MetricFilterV2 {
  /**
   * @public
   * <p>The key to use for filtering data. </p>
   *          <p>Valid metric filter keys: <code>INITIATION_METHOD</code>, <code>DISCONNECT_REASON</code>.
   *    These are the same values as the <code>InitiationMethod</code> and <code>DisconnectReason</code>
   *    in the contact record. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/ctr-data-model.html#ctr-ContactTraceRecord">ContactTraceRecord</a> in the <i>Amazon Connect Administrator's
   *    Guide</i>. </p>
   */
  MetricFilterKey?: string;

  /**
   * @public
   * <p>The values to use for filtering data. </p>
   *          <p>Valid metric filter values for <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *     <code>OUTBOUND</code> | <code>TRANSFER</code> | <code>QUEUE_TRANSFER</code> |
   *     <code>CALLBACK</code> | <code>API</code>
   *          </p>
   *          <p>Valid metric filter values for <code>DISCONNECT_REASON</code>:
   *     <code>CUSTOMER_DISCONNECT</code> | <code>AGENT_DISCONNECT</code> |
   *     <code>THIRD_PARTY_DISCONNECT</code> | <code>TELECOM_PROBLEM</code> | <code>BARGED</code> |
   *     <code>CONTACT_FLOW_DISCONNECT</code> | <code>OTHER</code> | <code>EXPIRED</code> |
   *     <code>API</code>
   *          </p>
   */
  MetricFilterValues?: string[];
}

/**
 * @public
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface ThresholdV2 {
  /**
   * @public
   * <p>The type of comparison. Only "less than" (LT) comparisons are supported.</p>
   */
  Comparison?: string;

  /**
   * @public
   * <p>The threshold value to compare.</p>
   */
  ThresholdValue?: number;
}

/**
 * @public
 * <p>Contains information about the metric.</p>
 */
export interface MetricV2 {
  /**
   * @public
   * <p>The name of the metric.</p>
   *          <important>
   *             <p>This parameter is required. The following Required = No is incorrect.</p>
   *          </important>
   */
  Name?: string;

  /**
   * @public
   * <p>Contains information about the threshold for service level metrics.</p>
   */
  Threshold?: ThresholdV2[];

  /**
   * @public
   * <p>Contains the filters to be used when returning data.</p>
   */
  MetricFilters?: MetricFilterV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Request {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. This includes the <code>instanceId</code> an Amazon Connect
   *    instance.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be before the end time timestamp. The time
   *    range between the start and end time must be less than 24 hours. The start time cannot be earlier
   *    than 35 days before the time of the request. Historical metrics are available for 35 days.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp, in UNIX Epoch time format, at which to end the reporting interval for the
   *    retrieval of historical metrics data. The time must be later than the start time timestamp. It
   *    cannot be later than the current timestamp.</p>
   *          <p>The time range between the start and end time must be less than 24 hours.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The filters to apply to returned metrics. You can filter on the following resources:</p>
   *          <ul>
   *             <li>
   *                <p>Queues</p>
   *             </li>
   *             <li>
   *                <p>Routing profiles</p>
   *             </li>
   *             <li>
   *                <p>Agents</p>
   *             </li>
   *             <li>
   *                <p>Channels</p>
   *             </li>
   *             <li>
   *                <p>User hierarchy groups</p>
   *             </li>
   *             <li>
   *                <p>Feature</p>
   *             </li>
   *          </ul>
   *          <p>At least one filter must be passed from queues, routing profiles, agents, or user hierarchy
   *    groups.</p>
   *          <p>To filter by phone number, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/create-historical-metrics-report.html">Create a historical
   *     metrics report</a> in the <i>Amazon Connect Administrator's
   *    Guide</i>.</p>
   *          <p>Note the following limits:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Filter keys</b>: A maximum of 5 filter keys are supported in
   *      a single request. Valid filter keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> |
   *       <code>AGENT</code> | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *       <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code> |
   *       <code>FEATURE</code>
   *                </p>
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
   *             </li>
   *          </ul>
   */
  Filters: FilterV2[] | undefined;

  /**
   * @public
   * <p>The grouping applied to the metrics that are returned. For example, when results are grouped
   *    by queue, the metrics returned are grouped by queue. The values that are returned apply to the
   *    metrics for each queue. They are not aggregated for all queues.</p>
   *          <p>If no grouping is specified, a summary of all metrics is returned.</p>
   *          <p>Valid grouping keys: <code>QUEUE</code> | <code>ROUTING_PROFILE</code> | <code>AGENT</code>
   *    | <code>CHANNEL</code> | <code>AGENT_HIERARCHY_LEVEL_ONE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_TWO</code> | <code>AGENT_HIERARCHY_LEVEL_THREE</code> |
   *     <code>AGENT_HIERARCHY_LEVEL_FOUR</code> | <code>AGENT_HIERARCHY_LEVEL_FIVE</code>
   *          </p>
   */
  Groupings?: string[];

  /**
   * @public
   * <p>The metrics to retrieve. Specify the name, groupings, and filters for each metric. The
   *    following historical metrics are available. For a description of each metric, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/historical-metrics-definitions.html">Historical metrics definitions</a> in the <i>Amazon Connect Administrator's
   *     Guide</i>.</p>
   *          <dl>
   *             <dt>AGENT_ADHERENT_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *             </dd>
   *             <dt>AGENT_NON_RESPONSE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy </p>
   *             </dd>
   *             <dt>AGENT_OCCUPANCY</dt>
   *             <dd>
   *                <p>Unit: Percentage</p>
   *                <p>Valid groupings and filters: Routing Profile, Agent, Agent Hierarchy </p>
   *             </dd>
   *             <dt>AGENT_SCHEDULE_ADHERENCE</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AGENT_SCHEDULED_TIME</dt>
   *             <dd>
   *                <p>This metric is available only in Amazon Web Services Regions where <a href="https://docs.aws.amazon.com/connect/latest/adminguide/regions.html#optimization_region">Forecasting, capacity planning, and scheduling</a> is available.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_ABANDON_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_AFTER_CONTACT_WORK_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
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
   *             </dd>
   *             <dt>AVG_AGENT_CONNECTING_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>. For now, this metric only
   *       supports the following as <code>INITIATION_METHOD</code>: <code>INBOUND</code> |
   *        <code>OUTBOUND</code> | <code>CALLBACK</code> | <code>API</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_CONTACT_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_CONVERSATION_DURATION</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_GREETING_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_HANDLE_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_HOLDS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERACTION_AND_HOLD_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_INTERACTION_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_INTERRUPTIONS_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_INTERRUPTION_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_NON_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_QUEUE_ANSWER_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>AVG_TALK_TIME</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_AGENT</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>AVG_TALK_TIME_CUSTOMER</dt>
   *             <dd>
   *                <p>This metric is available only for contacts analyzed by Contact Lens conversational
   *       analytics.</p>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>CONTACTS_ABANDONED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>CONTACTS_CREATED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid metric filter key: <code>INITIATION_METHOD</code>
   *                </p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Feature</p>
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
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_HOLD_ABANDONS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>CONTACTS_QUEUED</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy, Feature</p>
   *                <note>
   *                   <p>Feature is a valid filter but not a valid grouping.</p>
   *                </note>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_BY_AGENT</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>CONTACTS_TRANSFERRED_OUT_FROM_QUEUE</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>MAX_QUEUED_TIME</dt>
   *             <dd>
   *                <p>Unit: Seconds</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile, Agent, Agent Hierarchy</p>
   *             </dd>
   *             <dt>SERVICE_LEVEL</dt>
   *             <dd>
   *                <p>You can include up to 20 SERVICE_LEVEL metrics in a request.</p>
   *                <p>Unit: Percent</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ANSWERED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_ABANDONED_IN_X</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *                <p>Threshold: For <code>ThresholdValue</code>, enter any whole number from 1 to 604800
   *       (inclusive), in seconds. For <code>Comparison</code>, you must enter <code>LT</code> (for
   *       "Less than"). </p>
   *             </dd>
   *             <dt>SUM_CONTACTS_DISCONNECTED </dt>
   *             <dd>
   *                <p>Valid metric filter key: <code>DISCONNECT_REASON</code>
   *                </p>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *             </dd>
   *             <dt>SUM_RETRY_CALLBACK_ATTEMPTS</dt>
   *             <dd>
   *                <p>Unit: Count</p>
   *                <p>Valid groupings and filters: Queue, Channel, Routing Profile</p>
   *             </dd>
   *          </dl>
   */
  Metrics: MetricV2[] | undefined;

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
}

/**
 * @public
 * <p>Contains the name, thresholds, and metric filters.</p>
 */
export interface MetricDataV2 {
  /**
   * @public
   * <p>The metric name, thresholds, and metric filters of the returned metric.</p>
   */
  Metric?: MetricV2;

  /**
   * @public
   * <p>The corresponding value of the metric returned in the response.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Contains information about the metric results.</p>
 */
export interface MetricResultV2 {
  /**
   * @public
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Record<string, string>;

  /**
   * @public
   * <p>The set of metrics.</p>
   */
  Collections?: MetricDataV2[];
}

/**
 * @public
 */
export interface GetMetricDataV2Response {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the metrics requested in the API request If no grouping is specified, a
   *    summary of metric data is returned. </p>
   */
  MetricResults?: MetricResultV2[];
}

/**
 * @public
 */
export interface GetPromptFileRequest {
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
export interface GetPromptFileResponse {
  /**
   * @public
   * <p>A generated URL to the prompt that can be given to an unauthorized user so they can access
   *    the prompt in S3.</p>
   */
  PromptPresignedUrl?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateRequest {
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

  /**
   * @public
   * <p>The system generated version of a task template that is associated with a task, when the
   *    task is created.</p>
   */
  SnapshotVersion?: string;
}

/**
 * @public
 */
export interface GetTaskTemplateResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN).</p>
   */
  Arn: string | undefined;

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
   * <p>Fields that are part of the template.</p>
   */
  Fields?: TaskTemplateField[];

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

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

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTrafficDistributionRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.</p>
   */
  Id: string | undefined;
}

/**
 * @public
 * <p>The distribution of sign in traffic between the instance and its replica(s).</p>
 */
export interface SignInDistribution {
  /**
   * @public
   * <p>The Amazon Web Services Region of the sign in distribution.</p>
   */
  Region: string | undefined;

  /**
   * @public
   * <p>Whether sign in distribution is enabled.</p>
   */
  Enabled: boolean | undefined;
}

/**
 * @public
 * <p>The distribution of allowing signing in to the instance and its replica(s).</p>
 */
export interface SignInConfig {
  /**
   * @public
   * <p>Information about traffic distributions.</p>
   */
  Distributions: SignInDistribution[] | undefined;
}

/**
 * @public
 * <p>The distribution of traffic between the instance and its replicas.</p>
 */
export interface TelephonyConfig {
  /**
   * @public
   * <p>Information about traffic distributions.</p>
   */
  Distributions: Distribution[] | undefined;
}

/**
 * @public
 */
export interface GetTrafficDistributionResponse {
  /**
   * @public
   * <p>The distribution of traffic between the instance and its replicas.</p>
   */
  TelephonyConfig?: TelephonyConfig;

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
   * <p>The distribution of allowing signing in to the instance and its replica(s).</p>
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
export interface ListAgentStatusRequest {
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
   * <p>Available agent status types.</p>
   */
  AgentStatusTypes?: (AgentStatusType | string)[];
}

/**
 * @public
 */
export interface ListAgentStatusResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A summary of agent statuses.</p>
   */
  AgentStatusSummaryList?: AgentStatusSummary[];
}

/**
 * @public
 */
export interface ListApprovedOriginsRequest {
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
}

/**
 * @public
 */
export interface ListApprovedOriginsResponse {
  /**
   * @public
   * <p>The approved origins.</p>
   */
  Origins?: string[];

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
   * <p>The version of Amazon Lex or Amazon Lex V2.</p>
   */
  LexVersion: LexVersion | string | undefined;
}

/**
 * @public
 * <p>Configuration information of an Amazon Lex or Amazon Lex V2 bot.</p>
 */
export interface LexBotConfig {
  /**
   * @public
   * <p>Configuration information of an Amazon Lex bot.</p>
   */
  LexBot?: LexBot;

  /**
   * @public
   * <p>Configuration information of an Amazon Lex V2 bot.</p>
   */
  LexV2Bot?: LexV2Bot;
}

/**
 * @public
 */
export interface ListBotsResponse {
  /**
   * @public
   * <p>The names and Amazon Web Services Regions of the Amazon Lex or Amazon Lex V2 bots
   *    associated with the specified instance.</p>
   */
  LexBots?: LexBotConfig[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactEvaluationsRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about a contact evaluation.</p>
 */
export interface EvaluationSummary {
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
   * <p>A title of the evaluation form.</p>
   */
  EvaluationFormTitle: string | undefined;

  /**
   * @public
   * <p>The unique identifier for the evaluation form.</p>
   */
  EvaluationFormId: string | undefined;

  /**
   * @public
   * <p>The status of the contact evaluation.</p>
   */
  Status: EvaluationStatus | string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the evaluation.</p>
   */
  EvaluatorArn: string | undefined;

  /**
   * @public
   * <p>The overall score of the contact evaluation.</p>
   */
  Score?: EvaluationScore;

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
}

/**
 * @public
 */
export interface ListContactEvaluationsResponse {
  /**
   * @public
   * <p>Provides details about a list of contact evaluations belonging to an instance.</p>
   */
  EvaluationSummaryList: EvaluationSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowModulesRequest {
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
   * <p>The state of the flow module.</p>
   */
  ContactFlowModuleState?: ContactFlowModuleState | string;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 */
export interface ContactFlowModuleSummary {
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

  /**
   * @public
   * <p>The name of the flow module.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of flow module.</p>
   */
  State?: ContactFlowModuleState | string;
}

/**
 * @public
 */
export interface ListContactFlowModulesResponse {
  /**
   * @public
   * <p>Information about the flow module.</p>
   */
  ContactFlowModulesSummaryList?: ContactFlowModuleSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactFlowsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowTypes?: (ContactFlowType | string)[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a flow.</p>
 *          <p>You can also create and update flows using the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language.html">Amazon Connect
 *    Flow language</a>.</p>
 */
export interface ContactFlowSummary {
  /**
   * @public
   * <p>The identifier of the flow.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the flow.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowType?: ContactFlowType | string;

  /**
   * @public
   * <p>The type of flow.</p>
   */
  ContactFlowState?: ContactFlowState | string;
}

/**
 * @public
 */
export interface ListContactFlowsResponse {
  /**
   * @public
   * <p>Information about the flows.</p>
   */
  ContactFlowSummaryList?: ContactFlowSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListContactReferencesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the initial contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The type of reference.</p>
   */
  ReferenceTypes: (ReferenceType | string)[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>This is not expected to be set, because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ReferenceStatus = {
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;

/**
 * @public
 */
export type ReferenceStatus = (typeof ReferenceStatus)[keyof typeof ReferenceStatus];

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is
 *    <code>ATTACHMENT</code>. Otherwise, null.</p>
 */
export interface AttachmentReference {
  /**
   * @public
   * <p>Identifier of the attachment reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The location path of the attachment reference.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Status of the attachment reference type.</p>
   */
  Status?: ReferenceStatus | string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>DATE</code>.
 *    Otherwise, null.</p>
 */
export interface DateReference {
  /**
   * @public
   * <p>Identifier of the date reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid date.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>EMAIL</code>.
 *    Otherwise, null.</p>
 */
export interface EmailReference {
  /**
   * @public
   * <p>Identifier of the email reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid email address.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>NUMBER</code>.
 *    Otherwise, null.</p>
 */
export interface NumberReference {
  /**
   * @public
   * <p>Identifier of the number reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid number.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>Information about a reference when the <code>referenceType</code> is <code>STRING</code>.
 *    Otherwise, null.</p>
 */
export interface StringReference {
  /**
   * @public
   * <p>Identifier of the string reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid string.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>The URL reference.</p>
 */
export interface UrlReference {
  /**
   * @public
   * <p>Identifier of the URL reference.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A valid URL.</p>
   */
  Value?: string;
}

/**
 * @public
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

/**
 * @public
 */
export namespace ReferenceSummary {
  /**
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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
   * @public
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

  /**
   * @public
   */
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
}

/**
 * @public
 */
export interface ListContactReferencesResponse {
  /**
   * @public
   * <p>Information about the flows.</p>
   */
  ReferenceSummaryList?: ReferenceSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesRequest {
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
  LanguageCode?: VocabularyLanguageCode | string;

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
}

/**
 * @public
 * <p>Contains information about a default vocabulary.</p>
 */
export interface DefaultVocabulary {
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
   * <p>The identifier of the custom vocabulary.</p>
   */
  VocabularyId: string | undefined;

  /**
   * @public
   * <p>A unique name of the custom vocabulary.</p>
   */
  VocabularyName: string | undefined;
}

/**
 * @public
 */
export interface ListDefaultVocabulariesResponse {
  /**
   * @public
   * <p>A list of default vocabularies.</p>
   */
  DefaultVocabularyList: DefaultVocabulary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormsRequest {
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
}

/**
 * @public
 * <p>Summary information about an evaluation form.</p>
 */
export interface EvaluationFormSummary {
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
   * <p>The timestamp for when the evaluation form was last activated.</p>
   */
  LastActivatedTime?: Date;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the user who last activated the evaluation form.</p>
   */
  LastActivatedBy?: string;

  /**
   * @public
   * <p>The version number of the latest evaluation form version.</p>
   */
  LatestVersion: number | undefined;

  /**
   * @public
   * <p>The version of the active evaluation form version.</p>
   */
  ActiveVersion?: number;
}

/**
 * @public
 */
export interface ListEvaluationFormsResponse {
  /**
   * @public
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   */
  EvaluationFormSummaryList: EvaluationFormSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsRequest {
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
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Summary information about an evaluation form.</p>
 */
export interface EvaluationFormVersionSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the evaluation form resource.</p>
   */
  EvaluationFormArn: string | undefined;

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
   * <p>The status of the evaluation form.</p>
   */
  Status: EvaluationFormVersionStatus | string | undefined;

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
}

/**
 * @public
 */
export interface ListEvaluationFormVersionsResponse {
  /**
   * @public
   * <p>Provides details about a list of evaluation forms belonging to an instance.</p>
   */
  EvaluationFormVersionSummaryList: EvaluationFormVersionSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
  /**
   * @public
   * <p>The identifier of the hours of operation.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListHoursOfOperationsResponse {
  /**
   * @public
   * <p>Information about the hours of operation.</p>
   */
  HoursOfOperationSummaryList?: HoursOfOperationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceAttributesRequest {
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
}

/**
 * @public
 */
export interface ListInstanceAttributesResponse {
  /**
   * @public
   * <p>The attribute types.</p>
   */
  Attributes?: Attribute[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstancesRequest {
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
}

/**
 * @public
 * <p>Information about the instance.</p>
 */
export interface InstanceSummary {
  /**
   * @public
   * <p>The identifier of the instance.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the instance.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The identity management type of the instance.</p>
   */
  IdentityManagementType?: DirectoryType | string;

  /**
   * @public
   * <p>The alias of the instance.</p>
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
export interface ListInstancesResponse {
  /**
   * @public
   * <p>Information about the instances.</p>
   */
  InstanceSummaryList?: InstanceSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListInstanceStorageConfigsResponse {
  /**
   * @public
   * <p>A valid storage type.</p>
   */
  StorageConfigs?: InstanceStorageConfig[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

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
}

/**
 * @public
 * <p>Contains summary information about the associated AppIntegrations.</p>
 */
export interface IntegrationAssociationSummary {
  /**
   * @public
   * <p>The identifier for the AppIntegration association.</p>
   */
  IntegrationAssociationId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the AppIntegration association.</p>
   */
  IntegrationAssociationArn?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;

  /**
   * @public
   * <p>The integration type.</p>
   */
  IntegrationType?: IntegrationType | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the AppIntegration.</p>
   */
  IntegrationArn?: string;

  /**
   * @public
   * <p>The URL for the external application.</p>
   */
  SourceApplicationUrl?: string;

  /**
   * @public
   * <p>The user-provided, friendly name for the external application.</p>
   */
  SourceApplicationName?: string;

  /**
   * @public
   * <p>The name of the source.</p>
   */
  SourceType?: SourceType | string;
}

/**
 * @public
 */
export interface ListIntegrationAssociationsResponse {
  /**
   * @public
   * <p>The associations.</p>
   */
  IntegrationAssociationSummaryList?: IntegrationAssociationSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLambdaFunctionsRequest {
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
}

/**
 * @public
 */
export interface ListLambdaFunctionsResponse {
  /**
   * @public
   * <p>The Lambdafunction ARNs associated with the specified instance.</p>
   */
  LambdaFunctions?: string[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListLexBotsRequest {
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
   * <p>The maximum number of results to return per page. If no value is specified, the default is 10.
   *    </p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListLexBotsResponse {
  /**
   * @public
   * <p>The names and Amazon Web Services Regions of the Amazon Lex bots associated with the
   *    specified instance.</p>
   */
  LexBots?: LexBot[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
  /**
   * @public
   * <p>The identifier of the phone number.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The phone number.</p>
   */
  PhoneNumber?: string;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType?: PhoneNumberType | string;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode?: PhoneNumberCountryCode | string;
}

/**
 * @public
 */
export interface ListPhoneNumbersResponse {
  /**
   * @public
   * <p>Information about the phone numbers.</p>
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Request {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to. If <code>TargetArn</code> input is not provided, this API lists numbers claimed
   *    to all the Amazon Connect instances belonging to your account in the same Amazon Web Services Region as the request.</p>
   */
  TargetArn?: string;

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
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCodes?: (PhoneNumberCountryCode | string)[];

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberTypes?: (PhoneNumberType | string)[];

  /**
   * @public
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;
}

/**
 * @public
 * <p>Information about phone numbers that have been claimed to your Amazon Connect instance
 *    or traffic distribution group.</p>
 */
export interface ListPhoneNumbersSummary {
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
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn?: string;
}

/**
 * @public
 */
export interface ListPhoneNumbersV2Response {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about phone numbers that have been claimed to your Amazon Connect instances
   *    or traffic distribution groups.</p>
   */
  ListPhoneNumbersSummaryList?: ListPhoneNumbersSummary[];
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance.</p>
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about the prompt.</p>
 */
export interface PromptSummary {
  /**
   * @public
   * <p>The identifier of the prompt.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the prompt.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * @public
   * <p>Information about the prompts.</p>
   */
  PromptSummaryList?: PromptSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a quick connect.</p>
 */
export interface QuickConnectSummary {
  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick connect.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the quick connect.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectType?: QuickConnectType | string;
}

/**
 * @public
 */
export interface ListQueueQuickConnectsResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];
}

/**
 * @public
 * @enum
 */
export const QueueType = {
  AGENT: "AGENT",
  STANDARD: "STANDARD",
} as const;

/**
 * @public
 */
export type QueueType = (typeof QueueType)[keyof typeof QueueType];

/**
 * @public
 */
export interface ListQueuesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The type of queue.</p>
   */
  QueueTypes?: (QueueType | string)[];

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
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

  /**
   * @public
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of queue.</p>
   */
  QueueType?: QueueType | string;
}

/**
 * @public
 */
export interface ListQueuesResponse {
  /**
   * @public
   * <p>Information about the queues.</p>
   */
  QueueSummaryList?: QueueSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListQuickConnectsRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are
   *    prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).</p>
   */
  QuickConnectTypes?: (QuickConnectType | string)[];
}

/**
 * @public
 */
export interface ListQuickConnectsResponse {
  /**
   * @public
   * <p>Information about the quick connects.</p>
   */
  QuickConnectSummaryList?: QuickConnectSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile queue.</p>
 */
export interface RoutingProfileQueueConfigSummary {
  /**
   * @public
   * <p>The identifier for the queue.</p>
   */
  QueueId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  QueueArn: string | undefined;

  /**
   * @public
   * <p>The name of the queue.</p>
   */
  QueueName: string | undefined;

  /**
   * @public
   * <p>The order in which contacts are to be handled for the queue. For more information, see
   *     <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a>.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The delay, in seconds, that a contact should be in the queue before they are routed to an
   *    available agent. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/concepts-routing-profiles-priority.html">Queues: priority and
   *     delay</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
   */
  Delay: number | undefined;

  /**
   * @public
   * <p>The channels this queue supports.</p>
   */
  Channel: Channel | string | undefined;
}

/**
 * @public
 */
export interface ListRoutingProfileQueuesResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileQueueConfigSummaryList?: RoutingProfileQueueConfigSummary[];
}

/**
 * @public
 */
export interface ListRoutingProfilesRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
  /**
   * @public
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the routing profile.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListRoutingProfilesResponse {
  /**
   * @public
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus?: RulePublishStatus | string;

  /**
   * @public
   * <p>The name of the event source.</p>
   */
  EventSourceName?: EventSourceName | string;

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
}

/**
 * @public
 * <p>A list of <code>ActionTypes</code> associated with a rule. </p>
 */
export interface RuleSummary {
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
   * <p>The name of the event source.</p>
   */
  EventSourceName: EventSourceName | string | undefined;

  /**
   * @public
   * <p>The publish status of the rule.</p>
   */
  PublishStatus: RulePublishStatus | string | undefined;

  /**
   * @public
   * <p>A list of ActionTypes associated with a rule. </p>
   */
  ActionSummaries: ActionSummary[] | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was created. </p>
   */
  CreatedTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp for when the rule was last updated.</p>
   */
  LastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * @public
   * <p>Summary information about a rule.</p>
   */
  RuleSummaryList: RuleSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityKeysRequest {
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
}

/**
 * @public
 * <p>Configuration information of the security key.</p>
 */
export interface SecurityKey {
  /**
   * @public
   * <p>The existing association identifier that uniquely identifies the resource type and storage config for the given instance ID.</p>
   */
  AssociationId?: string;

  /**
   * @public
   * <p>The key of the security key.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>When the security key was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListSecurityKeysResponse {
  /**
   * @public
   * <p>The security keys.</p>
   */
  SecurityKeys?: SecurityKey[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListSecurityProfilePermissionsResponse {
  /**
   * @public
   * <p>The permissions granted to the security profile. For a complete list of valid permissions,
   *    see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List
   *     of security profile permissions</a>.</p>
   */
  Permissions?: string[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
  /**
   * @public
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the security profile.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListSecurityProfilesResponse {
  /**
   * @public
   * <p>Information about the security profiles.</p>
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource. All Amazon Connect resources (instances, queues, flows, routing
   *    profiles, etc) have an ARN. To locate the ARN for an instance, for example, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">Find your Amazon Connect instance ID/ARN</a>. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>Information about the tags.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTaskTemplatesRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <important>
   *             <p>It is not expected that you set this because the value returned in the previous response is
   *     always null.</p>
   *          </important>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   *          <important>
   *             <p>It is not expected that you set this.</p>
   *          </important>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

  /**
   * @public
   * <p>The name of the task template.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Contains summary information about the task template.</p>
 */
export interface TaskTemplateMetadata {
  /**
   * @public
   * <p>A unique identifier for the task template.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task template.</p>
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
   * <p>Marks a template as <code>ACTIVE</code> or <code>INACTIVE</code> for a task to refer to it.
   * Tasks can only be created from <code>ACTIVE</code> templates.
   * If a template is marked as <code>INACTIVE</code>, then a task that refers to this template cannot be created.</p>
   */
  Status?: TaskTemplateStatus | string;

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
export interface ListTaskTemplatesResponse {
  /**
   * @public
   * <p>Provides details about a list of task templates belonging to an instance.</p>
   */
  TaskTemplates?: TaskTemplateMetadata[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <important>
   *             <p>This is always returned as a null in the response.</p>
   *          </important>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsRequest {
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
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance.</p>
   */
  InstanceId?: string;
}

/**
 * @public
 * <p>Information about traffic distribution groups.</p>
 */
export interface TrafficDistributionGroupSummary {
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
   * <p>The Amazon Resource Name (ARN) of the traffic distribution group.</p>
   */
  InstanceArn?: string;

  /**
   * @public
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
   */
  Status?: TrafficDistributionGroupStatus | string;

  /**
   * @public
   * <p>Whether this is the default traffic distribution group created during instance
   *    replication. The default traffic distribution group cannot be deleted by the
   *    <code>DeleteTrafficDistributionGroup</code> API. The default traffic distribution group is deleted as
   *    part of the process for deleting a replica.</p>
   */
  IsDefault?: boolean;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupsResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of traffic distribution groups.</p>
   */
  TrafficDistributionGroupSummaryList?: TrafficDistributionGroupSummary[];
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersRequest {
  /**
   * @public
   * <p>The identifier of the traffic distribution group.
   * This can be the ID or the ARN if the API is being called in the Region where the traffic distribution group was created.
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  TrafficDistributionGroupId: string | undefined;

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
}

/**
 * @public
 * <p>Summary information about a traffic distribution group user.</p>
 */
export interface TrafficDistributionGroupUserSummary {
  /**
   * @public
   * <p>The identifier for the user. This can be the ID or the ARN of the user.</p>
   */
  UserId?: string;
}

/**
 * @public
 */
export interface ListTrafficDistributionGroupUsersResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of traffic distribution group users.</p>
   */
  TrafficDistributionGroupUserSummaryList?: TrafficDistributionGroupUserSummary[];
}

/**
 * @public
 * <p>Provides summary information about the use cases for the specified integration
 *    association.</p>
 */
export interface ListUseCasesRequest {
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains the
 *    use
 *    case.</p>
 */
export interface UseCase {
  /**
   * @public
   * <p>The identifier for the use case.</p>
   */
  UseCaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the use case.</p>
   */
  UseCaseArn?: string;

  /**
   * @public
   * <p>The type of use case to associate to the integration association. Each integration
   *    association can have only one of each use case type.</p>
   */
  UseCaseType?: UseCaseType | string;
}

/**
 * @public
 */
export interface ListUseCasesResponse {
  /**
   * @public
   * <p>The use cases.</p>
   */
  UseCaseSummaryList?: UseCase[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListUserHierarchyGroupsResponse {
  /**
   * @public
   * <p>Information about the hierarchy groups.</p>
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsersRequest {
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
   * <p>The maximum number of results to return per page. The default MaxResult size is 100.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
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
   * <p>The Amazon Connect user name of the user account.</p>
   */
  Username?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>Information about the users.</p>
   */
  UserSummaryList?: UserSummary[];

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface MonitorContactRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of
   *    the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * @public
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;

  /**
   * @public
   * <p>Specify which monitoring actions the user is allowed to take. For example, whether the user
   *    is allowed to escalate from silent monitoring to barge.</p>
   */
  AllowedMonitorCapabilities?: (MonitorCapability | string)[];

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
export interface MonitorContactResponse {
  /**
   * @public
   * <p>The identifier of the contact.</p>
   */
  ContactId?: string;

  /**
   * @public
   * <p>The ARN of the contact.</p>
   */
  ContactArn?: string;
}

/**
 * @public
 */
export interface PutUserStatusRequest {
  /**
   * @public
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;

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
   * @public
   * <p>A unique identifier for the phone number.</p>
   */
  PhoneNumberId: string | undefined;

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
export interface ReplicateInstanceRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can <a href="https://docs.aws.amazon.com/connect/latest/adminguide/find-instance-arn.html">find the instance ID</a> in the Amazon Resource Name (ARN) of the instance. You can provide the <code>InstanceId</code>, or the entire ARN.</p>
   */
  InstanceId: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region where to replicate the Amazon Connect instance.</p>
   */
  ReplicaRegion: string | undefined;

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
   * <p>The alias for the replicated instance. The <code>ReplicaAlias</code> must be unique.</p>
   */
  ReplicaAlias: string | undefined;
}

/**
 * @public
 */
export interface ReplicateInstanceResponse {
  /**
   * @public
   * <p>The identifier of the replicated instance. You can find the <code>instanceId</code> in the
   *    ARN of the instance. The replicated instance has the same identifier as the instance it was
   *    replicated from.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replicated instance.</p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ResumeContactRecordingRequest {
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
export interface ResumeContactRecordingResponse {}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>The ISO country code.</p>
   */
  PhoneNumberCountryCode: PhoneNumberCountryCode | string | undefined;

  /**
   * @public
   * <p>The type of phone number.</p>
   */
  PhoneNumberType: PhoneNumberType | string | undefined;

  /**
   * @public
   * <p>The prefix of the phone number. If provided, it must contain <code>+</code> as part of the country code.</p>
   */
  PhoneNumberPrefix?: string;

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
}

/**
 * @public
 * <p>Information about available phone numbers.</p>
 */
export interface AvailableNumberSummary {
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
}

/**
 * @public
 */
export interface SearchAvailablePhoneNumbersResponse {
  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of available phone numbers that you can claim to your Amazon Connect instance or traffic distribution group.</p>
   */
  AvailableNumbersList?: AvailableNumberSummary[];
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
 * <p>A leaf node condition which can be used to specify a string condition. </p>
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
  ComparisonType?: StringComparisonType | string;
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
  tagKeyComparisonType?: StringComparisonType | string;

  /**
   * @public
   * <p>The type of comparison to be made when evaluating the tag value in tag search
   *    condition.</p>
   */
  tagValueComparisonType?: StringComparisonType | string;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
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
  HierarchyGroupMatchType?: HierarchyGroupMatchType | string;
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
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
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
  State?: VocabularyState | string;

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
  LanguageCode?: VocabularyLanguageCode | string;
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
 * @enum
 */
export const RehydrationType = {
  ENTIRE_PAST_SESSION: "ENTIRE_PAST_SESSION",
  FROM_SEGMENT: "FROM_SEGMENT",
} as const;

/**
 * @public
 */
export type RehydrationType = (typeof RehydrationType)[keyof typeof RehydrationType];

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
  RehydrationType?: RehydrationType | string;

  /**
   * @public
   * <p>The contactId from which a persistent chat session must be started.</p>
   */
  SourceContactId?: string;
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
   *    see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go
   *    to <b>Routing</b>, <b>Contact Flows</b>.
   *    Choose the flow. On the flow page, under the name of the flow, choose <b>Show
   *     additional flow information</b>. The ContactFlowId is the last part of the ARN, shown
   *    here in bold: </p>
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
   * <p>The initial message to be sent to the newly created chat.</p>
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
  VoiceRecordingTrack?: VoiceRecordingTrack | string;
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
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * @public
   * <p>The
   *    identifier of the flow for the outbound call. To see the ContactFlowId in the Amazon Connect
   *    console user interface, on the navigation menu go to <b>Routing</b>,
   *     <b>Contact Flows</b>. Choose the flow. On the flow page, under the
   *    name of the flow, choose <b>Show additional flow information</b>. The
   *    ContactFlowId is the last part of the ARN, shown here in bold: </p>
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
  TrafficType?: TrafficType | string;
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
   * <p>The identifier of the previous chat, voice, or task contact. </p>
   */
  PreviousContactId?: string;

  /**
   * @public
   * <p>The identifier of the flow for initiating the tasks. To see the ContactFlowId in the Amazon Connect console user interface, on the navigation menu go to <b>Routing</b>, <b>Contact Flows</b>. Choose the flow. On the
   *    flow page, under the name of the flow, choose <b>Show additional flow
   *     information</b>. The ContactFlowId is the last part of the ARN, shown here in bold: </p>
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
   * <p>A formatted URL that is shown to an agent in the Contact Control Panel (CCP).</p>
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
   * <p>A unique identifier for the task template.</p>
   */
  TaskTemplateId?: string;

  /**
   * @public
   * <p>The identifier for the quick connect.</p>
   */
  QuickConnectId?: string;

  /**
   * @public
   * <p>The contactId that is <a href="https://docs.aws.amazon.com/connect/latest/adminguide/tasks.html#linked-tasks">related</a> to this contact.</p>
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
 * <p>The contact with the specified ID is not active or does not exist. Applies to Voice calls
 *    only, not to Chat, Task, or Voice Callback.</p>
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
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.</p>
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
  State?: AgentStatusState | string;

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
   * <p>The JSON string that represents flow's content. For an example, see <a href="https://docs.aws.amazon.com/connect/latest/APIReference/flow-language-example.html">Example
   *     contact flow in Amazon Connect Flow language</a>. </p>
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
  ContactFlowState?: ContactFlowState | string;
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
   * <p>The content of the flow module.</p>
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
  State?: ContactFlowModuleState | string;
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
  AttributeType: InstanceAttributeType | string | undefined;

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
  ResourceType: InstanceStorageResourceType | string | undefined;

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
    ParticipantTimerAction: ParticipantTimerAction | string;
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
    ParticipantTimerAction: (value: ParticipantTimerAction | string) => T;
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
  ParticipantRole: TimerEligibleParticipantRoles | string | undefined;

  /**
   * @public
   * <p>The type of timer. <code>IDLE</code> indicates the timer applies for considering a human
   *    chat participant as idle. <code>DISCONNECT_NONCUSTOMER</code> indicates the timer applies to
   *    automatically disconnecting a chat participant due to idleness.</p>
   */
  TimerType: ParticipantTimerType | string | undefined;

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
   * <p>The Amazon Resource Name (ARN) for Amazon Connect instances or traffic distribution groups that phone numbers are claimed to.</p>
   */
  TargetArn: string | undefined;

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
   * <p>The URI for the S3 bucket where the prompt is stored.</p>
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
  Status: QueueStatus | string | undefined;
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
  AgentAvailabilityTimer: AgentAvailabilityTimer | string | undefined;
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
  PublishStatus: RulePublishStatus | string | undefined;
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
  Status?: TaskTemplateStatus | string;

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
  Status?: TaskTemplateStatus | string;

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
   * The ARN must be provided if the call is from the replicated Region.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The distribution of traffic between the instance and its replica(s).</p>
   */
  TelephonyConfig?: TelephonyConfig;

  /**
   * @public
   * <p>The distribution of allowing signing in to the instance and its replica(s).</p>
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
export const InstanceSummaryFilterSensitiveLog = (obj: InstanceSummary): any => ({
  ...obj,
  ...(obj.InstanceAlias && { InstanceAlias: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListInstancesResponseFilterSensitiveLog = (obj: ListInstancesResponse): any => ({
  ...obj,
  ...(obj.InstanceSummaryList && {
    InstanceSummaryList: obj.InstanceSummaryList.map((item) => InstanceSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ReplicateInstanceRequestFilterSensitiveLog = (obj: ReplicateInstanceRequest): any => ({
  ...obj,
  ...(obj.ReplicaAlias && { ReplicaAlias: SENSITIVE_STRING }),
});
