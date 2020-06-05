import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum Channel {
  CHAT = "CHAT",
  VOICE = "VOICE"
}

/**
 * <p>A chat message.</p>
 */
export interface ChatMessage {
  __type?: "ChatMessage";
  /**
   * <p>The content of the chat message.</p>
   */
  Content: string | undefined;

  /**
   * <p>The type of the content. Supported types are text/plain.</p>
   */
  ContentType: string | undefined;
}

export namespace ChatMessage {
  export const filterSensitiveLog = (obj: ChatMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ChatMessage => __isa(o, "ChatMessage");
}

export enum Comparison {
  LT = "LT"
}

/**
 * <p>Contains summary information about a contact flow.</p>
 */
export interface ContactFlowSummary {
  __type?: "ContactFlowSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the contact flow.</p>
   */
  Arn?: string;

  /**
   * <p>The type of contact flow.</p>
   */
  ContactFlowType?: ContactFlowType | string;

  /**
   * <p>The identifier of the contact flow.</p>
   */
  Id?: string;

  /**
   * <p>The name of the contact flow.</p>
   */
  Name?: string;
}

export namespace ContactFlowSummary {
  export const filterSensitiveLog = (obj: ContactFlowSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContactFlowSummary =>
    __isa(o, "ContactFlowSummary");
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
  QUEUE_TRANSFER = "QUEUE_TRANSFER"
}

/**
 * <p>The contact with the specified ID is not active or does not exist.</p>
 */
export interface ContactNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ContactNotFoundException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace ContactNotFoundException {
  export const filterSensitiveLog = (obj: ContactNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ContactNotFoundException =>
    __isa(o, "ContactNotFoundException");
}

export interface CreateUserRequest {
  __type?: "CreateUserRequest";
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
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The information about the identity of the user.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The password for the user account. A password is required if you are using Amazon Connect for
   *    identity management. Otherwise, it is an error to include a password.</p>
   */
  Password?: string;

  /**
   * <p>The phone settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the security profile for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The user name for the account. For instances not using SAML for identity management, the
   *    user name can include up to 20 characters. If you are using SAML for identity management, the
   *    user name can include up to 64 characters from [a-zA-Z0-9_-.\@]+.</p>
   */
  Username: string | undefined;
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserRequest =>
    __isa(o, "CreateUserRequest");
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  UserArn?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId?: string;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserResponse =>
    __isa(o, "CreateUserResponse");
}

/**
 * <p>Contains credentials to use for federation.</p>
 */
export interface Credentials {
  __type?: "Credentials";
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
  export const filterSensitiveLog = (obj: Credentials): any => ({
    ...obj,
    ...(obj.AccessToken && { AccessToken: SENSITIVE_STRING }),
    ...(obj.RefreshToken && { RefreshToken: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is Credentials => __isa(o, "Credentials");
}

/**
 * <p>Contains information about a real-time metric.</p>
 */
export interface CurrentMetric {
  __type?: "CurrentMetric";
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
  export const filterSensitiveLog = (obj: CurrentMetric): any => ({
    ...obj
  });
  export const isa = (o: any): o is CurrentMetric => __isa(o, "CurrentMetric");
}

/**
 * <p>Contains the data for a real-time metric.</p>
 */
export interface CurrentMetricData {
  __type?: "CurrentMetricData";
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
  export const filterSensitiveLog = (obj: CurrentMetricData): any => ({
    ...obj
  });
  export const isa = (o: any): o is CurrentMetricData =>
    __isa(o, "CurrentMetricData");
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
  SLOTS_AVAILABLE = "SLOTS_AVAILABLE"
}

/**
 * <p>Contains information about a set of real-time metrics.</p>
 */
export interface CurrentMetricResult {
  __type?: "CurrentMetricResult";
  /**
   * <p>The set of metrics.</p>
   */
  Collections?: CurrentMetricData[];

  /**
   * <p>The dimensions for the metrics.</p>
   */
  Dimensions?: Dimensions;
}

export namespace CurrentMetricResult {
  export const filterSensitiveLog = (obj: CurrentMetricResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CurrentMetricResult =>
    __isa(o, "CurrentMetricResult");
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user.</p>
   */
  UserId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserRequest =>
    __isa(o, "DeleteUserRequest");
}

export interface DescribeUserHierarchyGroupRequest {
  __type?: "DescribeUserHierarchyGroupRequest";
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace DescribeUserHierarchyGroupRequest {
  export const filterSensitiveLog = (
    obj: DescribeUserHierarchyGroupRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserHierarchyGroupRequest =>
    __isa(o, "DescribeUserHierarchyGroupRequest");
}

export interface DescribeUserHierarchyGroupResponse {
  __type?: "DescribeUserHierarchyGroupResponse";
  /**
   * <p>Information about the hierarchy group.</p>
   */
  HierarchyGroup?: HierarchyGroup;
}

export namespace DescribeUserHierarchyGroupResponse {
  export const filterSensitiveLog = (
    obj: DescribeUserHierarchyGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserHierarchyGroupResponse =>
    __isa(o, "DescribeUserHierarchyGroupResponse");
}

export interface DescribeUserHierarchyStructureRequest {
  __type?: "DescribeUserHierarchyStructureRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace DescribeUserHierarchyStructureRequest {
  export const filterSensitiveLog = (
    obj: DescribeUserHierarchyStructureRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserHierarchyStructureRequest =>
    __isa(o, "DescribeUserHierarchyStructureRequest");
}

export interface DescribeUserHierarchyStructureResponse {
  __type?: "DescribeUserHierarchyStructureResponse";
  /**
   * <p>Information about the hierarchy structure.</p>
   */
  HierarchyStructure?: HierarchyStructure;
}

export namespace DescribeUserHierarchyStructureResponse {
  export const filterSensitiveLog = (
    obj: DescribeUserHierarchyStructureResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserHierarchyStructureResponse =>
    __isa(o, "DescribeUserHierarchyStructureResponse");
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace DescribeUserRequest {
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserRequest =>
    __isa(o, "DescribeUserRequest");
}

export interface DescribeUserResponse {
  __type?: "DescribeUserResponse";
  /**
   * <p>Information about the user account and configuration settings.</p>
   */
  User?: User;
}

export namespace DescribeUserResponse {
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeUserResponse =>
    __isa(o, "DescribeUserResponse");
}

/**
 * <p>Outbound calls to the destination number are not allowed.</p>
 */
export interface DestinationNotAllowedException
  extends __SmithyException,
    $MetadataBearer {
  name: "DestinationNotAllowedException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace DestinationNotAllowedException {
  export const filterSensitiveLog = (
    obj: DestinationNotAllowedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DestinationNotAllowedException =>
    __isa(o, "DestinationNotAllowedException");
}

/**
 * <p>Contains information about the dimensions for a set of metrics.</p>
 */
export interface Dimensions {
  __type?: "Dimensions";
  /**
   * <p>The channel used for grouping and filters.</p>
   */
  Channel?: Channel | string;

  /**
   * <p>Information about the queue for which metrics are returned.</p>
   */
  Queue?: QueueReference;
}

export namespace Dimensions {
  export const filterSensitiveLog = (obj: Dimensions): any => ({
    ...obj
  });
  export const isa = (o: any): o is Dimensions => __isa(o, "Dimensions");
}

/**
 * <p>A resource with the specified name already exists.</p>
 */
export interface DuplicateResourceException
  extends __SmithyException,
    $MetadataBearer {
  name: "DuplicateResourceException";
  $fault: "client";
  Message?: string;
}

export namespace DuplicateResourceException {
  export const filterSensitiveLog = (obj: DuplicateResourceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DuplicateResourceException =>
    __isa(o, "DuplicateResourceException");
}

/**
 * <p>Contains the filter to apply when retrieving metrics.</p>
 */
export interface Filters {
  __type?: "Filters";
  /**
   * <p>The channel to use to filter the metrics.</p>
   */
  Channels?: (Channel | string)[];

  /**
   * <p>The queues to use to filter the metrics. You can specify up to 100 queues per
   *    request.</p>
   */
  Queues?: string[];
}

export namespace Filters {
  export const filterSensitiveLog = (obj: Filters): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filters => __isa(o, "Filters");
}

export interface GetContactAttributesRequest {
  __type?: "GetContactAttributesRequest";
  /**
   * <p>The identifier of the initial contact.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetContactAttributesRequest {
  export const filterSensitiveLog = (
    obj: GetContactAttributesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContactAttributesRequest =>
    __isa(o, "GetContactAttributesRequest");
}

export interface GetContactAttributesResponse {
  __type?: "GetContactAttributesResponse";
  /**
   * <p>Information about the attributes.</p>
   */
  Attributes?: { [key: string]: string };
}

export namespace GetContactAttributesResponse {
  export const filterSensitiveLog = (
    obj: GetContactAttributesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetContactAttributesResponse =>
    __isa(o, "GetContactAttributesResponse");
}

export interface GetCurrentMetricDataRequest {
  __type?: "GetCurrentMetricDataRequest";
  /**
   * <p>The metrics to retrieve. Specify the name and unit for each metric. The following metrics
   *    are available:</p>
   *          <dl>
   *             <dt>AGENTS_AFTER_CONTACT_WORK</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_ERROR</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_NON_PRODUCTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_ON_CALL</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_ON_CONTACT</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_ONLINE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>AGENTS_STAFFED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>CONTACTS_IN_QUEUE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>CONTACTS_SCHEDULED</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>OLDEST_CONTACT_AGE</dt>
   *             <dd>
   *                <p>Unit: SECONDS</p>
   *             </dd>
   *             <dt>SLOTS_ACTIVE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *             <dt>SLOTS_AVAILABLE</dt>
   *             <dd>
   *                <p>Unit: COUNT</p>
   *             </dd>
   *          </dl>
   */
  CurrentMetrics: CurrentMetric[] | undefined;

  /**
   * <p>The queues, up to 100, or channels, to use to filter the metrics returned. Metric data is
   *    retrieved only for the resources associated with the queues or channels included in the filter.
   *    You can include both queue IDs and queue ARNs in the same request. The only supported channel is
   *     <code>VOICE</code>.</p>
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when grouped by
   *     <code>QUEUE</code>, the metrics returned apply to each queue rather than aggregated for all
   *    queues. If you group by <code>CHANNEL</code>, you should include a Channels filter. The only
   *    supported channel is <code>VOICE</code>.</p>
   *          <p>If no <code>Grouping</code> is included in the request, a summary of metrics is
   *    returned.</p>
   */
  Groupings?: (Grouping | string)[];

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;
}

export namespace GetCurrentMetricDataRequest {
  export const filterSensitiveLog = (
    obj: GetCurrentMetricDataRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCurrentMetricDataRequest =>
    __isa(o, "GetCurrentMetricDataRequest");
}

export interface GetCurrentMetricDataResponse {
  __type?: "GetCurrentMetricDataResponse";
  /**
   * <p>The time at which the metrics were retrieved and cached for pagination.</p>
   */
  DataSnapshotTime?: Date;

  /**
   * <p>Information about the real-time metrics.</p>
   */
  MetricResults?: CurrentMetricResult[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;
}

export namespace GetCurrentMetricDataResponse {
  export const filterSensitiveLog = (
    obj: GetCurrentMetricDataResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCurrentMetricDataResponse =>
    __isa(o, "GetCurrentMetricDataResponse");
}

export interface GetFederationTokenRequest {
  __type?: "GetFederationTokenRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace GetFederationTokenRequest {
  export const filterSensitiveLog = (obj: GetFederationTokenRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetFederationTokenRequest =>
    __isa(o, "GetFederationTokenRequest");
}

export interface GetFederationTokenResponse {
  __type?: "GetFederationTokenResponse";
  /**
   * <p>The credentials to use for federation.</p>
   */
  Credentials?: Credentials;
}

export namespace GetFederationTokenResponse {
  export const filterSensitiveLog = (obj: GetFederationTokenResponse): any => ({
    ...obj,
    ...(obj.Credentials && {
      Credentials: Credentials.filterSensitiveLog(obj.Credentials)
    })
  });
  export const isa = (o: any): o is GetFederationTokenResponse =>
    __isa(o, "GetFederationTokenResponse");
}

export interface GetMetricDataRequest {
  __type?: "GetMetricDataRequest";
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
   *    You can include both queue IDs and queue ARNs in the same request. The only supported channel is
   *     <code>VOICE</code>.</p>
   */
  Filters: Filters | undefined;

  /**
   * <p>The grouping applied to the metrics returned. For example, when results are grouped by
   *    queue, the metrics returned are grouped by queue. The values returned apply to the metrics for
   *    each queue rather than aggregated for all queues.</p>
   *          <p>The only supported grouping is <code>QUEUE</code>.</p>
   *          <p>If no grouping is specified, a summary of metrics for all queues is returned.</p>
   */
  Groupings?: (Grouping | string)[];

  /**
   * <p>The metrics to retrieve. Specify the name, unit, and statistic for each metric. The
   *    following historical metrics are available:</p>
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
   *                <p>Unit: PERCENT</p>
   *                <p>Statistic: AVG</p>
   *                <p>Threshold: Only "Less than" comparisons are supported, with the following service level
   *       thresholds: 15, 20, 25, 30, 45, 60, 90, 120, 180, 240, 300, 600</p>
   *             </dd>
   *          </dl>
   */
  HistoricalMetrics: HistoricalMetric[] | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The timestamp, in UNIX Epoch time format, at which to start the reporting interval for the
   *    retrieval of historical metrics data. The time must be specified using a multiple of 5 minutes,
   *    such as 10:05, 10:10, 10:15.</p>
   *          <p>The start time cannot be earlier than 24 hours before the time of the request. Historical
   *    metrics are available only for 24 hours.</p>
   */
  StartTime: Date | undefined;
}

export namespace GetMetricDataRequest {
  export const filterSensitiveLog = (obj: GetMetricDataRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMetricDataRequest =>
    __isa(o, "GetMetricDataRequest");
}

export interface GetMetricDataResponse {
  __type?: "GetMetricDataResponse";
  /**
   * <p>Information about the historical metrics.</p>
   *          <p>If no grouping is specified, a summary of metric data is returned.</p>
   */
  MetricResults?: HistoricalMetricResult[];

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   *          <p>The token expires after 5 minutes from the time it is created. Subsequent requests that use
   *    the token must use the same request parameters as the request that generated the token.</p>
   */
  NextToken?: string;
}

export namespace GetMetricDataResponse {
  export const filterSensitiveLog = (obj: GetMetricDataResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMetricDataResponse =>
    __isa(o, "GetMetricDataResponse");
}

export enum Grouping {
  CHANNEL = "CHANNEL",
  QUEUE = "QUEUE"
}

/**
 * <p>Contains information about a hierarchy group.</p>
 */
export interface HierarchyGroup {
  __type?: "HierarchyGroup";
  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>Information about the levels in the hierarchy group.</p>
   */
  HierarchyPath?: HierarchyPath;

  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The identifier of the level in the hierarchy group.</p>
   */
  LevelId?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;
}

export namespace HierarchyGroup {
  export const filterSensitiveLog = (obj: HierarchyGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyGroup =>
    __isa(o, "HierarchyGroup");
}

/**
 * <p>Contains summary information about a hierarchy group.</p>
 */
export interface HierarchyGroupSummary {
  __type?: "HierarchyGroupSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy group.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the hierarchy group.</p>
   */
  Name?: string;
}

export namespace HierarchyGroupSummary {
  export const filterSensitiveLog = (obj: HierarchyGroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyGroupSummary =>
    __isa(o, "HierarchyGroupSummary");
}

/**
 * <p>Contains information about a hierarchy level.</p>
 */
export interface HierarchyLevel {
  __type?: "HierarchyLevel";
  /**
   * <p>The Amazon Resource Name (ARN) of the hierarchy level.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the hierarchy level.</p>
   */
  Id?: string;

  /**
   * <p>The name of the hierarchy level.</p>
   */
  Name?: string;
}

export namespace HierarchyLevel {
  export const filterSensitiveLog = (obj: HierarchyLevel): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyLevel =>
    __isa(o, "HierarchyLevel");
}

/**
 * <p>Contains information about the levels of a hierarchy group.</p>
 */
export interface HierarchyPath {
  __type?: "HierarchyPath";
  /**
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyGroupSummary;

  /**
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyGroupSummary;

  /**
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyGroupSummary;

  /**
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyGroupSummary;

  /**
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyGroupSummary;
}

export namespace HierarchyPath {
  export const filterSensitiveLog = (obj: HierarchyPath): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyPath => __isa(o, "HierarchyPath");
}

/**
 * <p>Contains information about a hierarchy structure.</p>
 */
export interface HierarchyStructure {
  __type?: "HierarchyStructure";
  /**
   * <p>Information about level five.</p>
   */
  LevelFive?: HierarchyLevel;

  /**
   * <p>Information about level four.</p>
   */
  LevelFour?: HierarchyLevel;

  /**
   * <p>Information about level one.</p>
   */
  LevelOne?: HierarchyLevel;

  /**
   * <p>Information about level three.</p>
   */
  LevelThree?: HierarchyLevel;

  /**
   * <p>Information about level two.</p>
   */
  LevelTwo?: HierarchyLevel;
}

export namespace HierarchyStructure {
  export const filterSensitiveLog = (obj: HierarchyStructure): any => ({
    ...obj
  });
  export const isa = (o: any): o is HierarchyStructure =>
    __isa(o, "HierarchyStructure");
}

/**
 * <p>Contains information about a historical metric.</p>
 */
export interface HistoricalMetric {
  __type?: "HistoricalMetric";
  /**
   * <p>The name of the metric.</p>
   */
  Name?: HistoricalMetricName | string;

  /**
   * <p>The statistic for the metric.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The threshold for the metric, used with service level metrics.</p>
   */
  Threshold?: Threshold;

  /**
   * <p>The unit for the metric.</p>
   */
  Unit?: Unit | string;
}

export namespace HistoricalMetric {
  export const filterSensitiveLog = (obj: HistoricalMetric): any => ({
    ...obj
  });
  export const isa = (o: any): o is HistoricalMetric =>
    __isa(o, "HistoricalMetric");
}

/**
 * <p>Contains the data for a historical metric.</p>
 */
export interface HistoricalMetricData {
  __type?: "HistoricalMetricData";
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
  export const filterSensitiveLog = (obj: HistoricalMetricData): any => ({
    ...obj
  });
  export const isa = (o: any): o is HistoricalMetricData =>
    __isa(o, "HistoricalMetricData");
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
  SERVICE_LEVEL = "SERVICE_LEVEL"
}

/**
 * <p>Contains information about the historical metrics retrieved.</p>
 */
export interface HistoricalMetricResult {
  __type?: "HistoricalMetricResult";
  /**
   * <p>The set of metrics.</p>
   */
  Collections?: HistoricalMetricData[];

  /**
   * <p>The dimension for the metrics.</p>
   */
  Dimensions?: Dimensions;
}

export namespace HistoricalMetricResult {
  export const filterSensitiveLog = (obj: HistoricalMetricResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is HistoricalMetricResult =>
    __isa(o, "HistoricalMetricResult");
}

/**
 * <p>Contains summary information about hours of operation for a contact center.</p>
 */
export interface HoursOfOperationSummary {
  __type?: "HoursOfOperationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the hours of operation.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the hours of operation.</p>
   */
  Id?: string;

  /**
   * <p>The name of the hours of operation.</p>
   */
  Name?: string;
}

export namespace HoursOfOperationSummary {
  export const filterSensitiveLog = (obj: HoursOfOperationSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is HoursOfOperationSummary =>
    __isa(o, "HoursOfOperationSummary");
}

/**
 * <p>Request processing failed due to an error or failure with the service.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServiceException =>
    __isa(o, "InternalServiceException");
}

/**
 * <p>One or more of the specified parameters are not valid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidParameterException =>
    __isa(o, "InvalidParameterException");
}

/**
 * <p>The request is not valid.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>The allowed limit for the resource has been exceeded.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface ListContactFlowsRequest {
  __type?: "ListContactFlowsRequest";
  /**
   * <p>The type of contact flow.</p>
   */
  ContactFlowTypes?: (ContactFlowType | string)[];

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListContactFlowsRequest {
  export const filterSensitiveLog = (obj: ListContactFlowsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListContactFlowsRequest =>
    __isa(o, "ListContactFlowsRequest");
}

export interface ListContactFlowsResponse {
  __type?: "ListContactFlowsResponse";
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
  export const filterSensitiveLog = (obj: ListContactFlowsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListContactFlowsResponse =>
    __isa(o, "ListContactFlowsResponse");
}

export interface ListHoursOfOperationsRequest {
  __type?: "ListHoursOfOperationsRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListHoursOfOperationsRequest {
  export const filterSensitiveLog = (
    obj: ListHoursOfOperationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHoursOfOperationsRequest =>
    __isa(o, "ListHoursOfOperationsRequest");
}

export interface ListHoursOfOperationsResponse {
  __type?: "ListHoursOfOperationsResponse";
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
  export const filterSensitiveLog = (
    obj: ListHoursOfOperationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListHoursOfOperationsResponse =>
    __isa(o, "ListHoursOfOperationsResponse");
}

export interface ListPhoneNumbersRequest {
  __type?: "ListPhoneNumbersRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
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
}

export namespace ListPhoneNumbersRequest {
  export const filterSensitiveLog = (obj: ListPhoneNumbersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPhoneNumbersRequest =>
    __isa(o, "ListPhoneNumbersRequest");
}

export interface ListPhoneNumbersResponse {
  __type?: "ListPhoneNumbersResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the phone numbers.</p>
   */
  PhoneNumberSummaryList?: PhoneNumberSummary[];
}

export namespace ListPhoneNumbersResponse {
  export const filterSensitiveLog = (obj: ListPhoneNumbersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPhoneNumbersResponse =>
    __isa(o, "ListPhoneNumbersResponse");
}

export interface ListQueuesRequest {
  __type?: "ListQueuesRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The type of queue.</p>
   */
  QueueTypes?: (QueueType | string)[];
}

export namespace ListQueuesRequest {
  export const filterSensitiveLog = (obj: ListQueuesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueuesRequest =>
    __isa(o, "ListQueuesRequest");
}

export interface ListQueuesResponse {
  __type?: "ListQueuesResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the queues.</p>
   */
  QueueSummaryList?: QueueSummary[];
}

export namespace ListQueuesResponse {
  export const filterSensitiveLog = (obj: ListQueuesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListQueuesResponse =>
    __isa(o, "ListQueuesResponse");
}

export interface ListRoutingProfilesRequest {
  __type?: "ListRoutingProfilesRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListRoutingProfilesRequest {
  export const filterSensitiveLog = (obj: ListRoutingProfilesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoutingProfilesRequest =>
    __isa(o, "ListRoutingProfilesRequest");
}

export interface ListRoutingProfilesResponse {
  __type?: "ListRoutingProfilesResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the routing profiles.</p>
   */
  RoutingProfileSummaryList?: RoutingProfileSummary[];
}

export namespace ListRoutingProfilesResponse {
  export const filterSensitiveLog = (
    obj: ListRoutingProfilesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListRoutingProfilesResponse =>
    __isa(o, "ListRoutingProfilesResponse");
}

export interface ListSecurityProfilesRequest {
  __type?: "ListSecurityProfilesRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListSecurityProfilesRequest {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesRequest =>
    __isa(o, "ListSecurityProfilesRequest");
}

export interface ListSecurityProfilesResponse {
  __type?: "ListSecurityProfilesResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the security profiles.</p>
   */
  SecurityProfileSummaryList?: SecurityProfileSummary[];
}

export namespace ListSecurityProfilesResponse {
  export const filterSensitiveLog = (
    obj: ListSecurityProfilesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListSecurityProfilesResponse =>
    __isa(o, "ListSecurityProfilesResponse");
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceRequest =>
    __isa(o, "ListTagsForResourceRequest");
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Information about the tags.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export interface ListUserHierarchyGroupsRequest {
  __type?: "ListUserHierarchyGroupsRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUserHierarchyGroupsRequest {
  export const filterSensitiveLog = (
    obj: ListUserHierarchyGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserHierarchyGroupsRequest =>
    __isa(o, "ListUserHierarchyGroupsRequest");
}

export interface ListUserHierarchyGroupsResponse {
  __type?: "ListUserHierarchyGroupsResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the hierarchy groups.</p>
   */
  UserHierarchyGroupSummaryList?: HierarchyGroupSummary[];
}

export namespace ListUserHierarchyGroupsResponse {
  export const filterSensitiveLog = (
    obj: ListUserHierarchyGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUserHierarchyGroupsResponse =>
    __isa(o, "ListUserHierarchyGroupsResponse");
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The maximimum number of results to return per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersRequest =>
    __isa(o, "ListUsersRequest");
}

export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the users.</p>
   */
  UserSummaryList?: UserSummary[];
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListUsersResponse =>
    __isa(o, "ListUsersResponse");
}

/**
 * <p>The contact is not permitted.</p>
 */
export interface OutboundContactNotPermittedException
  extends __SmithyException,
    $MetadataBearer {
  name: "OutboundContactNotPermittedException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace OutboundContactNotPermittedException {
  export const filterSensitiveLog = (
    obj: OutboundContactNotPermittedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OutboundContactNotPermittedException =>
    __isa(o, "OutboundContactNotPermittedException");
}

/**
 * <p>The customer's details.</p>
 */
export interface ParticipantDetails {
  __type?: "ParticipantDetails";
  /**
   * <p>Display name of the participant.</p>
   */
  DisplayName: string | undefined;
}

export namespace ParticipantDetails {
  export const filterSensitiveLog = (obj: ParticipantDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is ParticipantDetails =>
    __isa(o, "ParticipantDetails");
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
  ZW = "ZW"
}

/**
 * <p>Contains summary information about a phone number for a contact center.</p>
 */
export interface PhoneNumberSummary {
  __type?: "PhoneNumberSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the phone number.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the phone number.</p>
   */
  Id?: string;

  /**
   * <p>The phone number.</p>
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

export namespace PhoneNumberSummary {
  export const filterSensitiveLog = (obj: PhoneNumberSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is PhoneNumberSummary =>
    __isa(o, "PhoneNumberSummary");
}

export enum PhoneNumberType {
  DID = "DID",
  TOLL_FREE = "TOLL_FREE"
}

export enum PhoneType {
  DESK_PHONE = "DESK_PHONE",
  SOFT_PHONE = "SOFT_PHONE"
}

/**
 * <p>Contains information about a queue resource for which metrics are returned.</p>
 */
export interface QueueReference {
  __type?: "QueueReference";
  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the queue.</p>
   */
  Id?: string;
}

export namespace QueueReference {
  export const filterSensitiveLog = (obj: QueueReference): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueueReference =>
    __isa(o, "QueueReference");
}

/**
 * <p>Contains summary information about a queue.</p>
 */
export interface QueueSummary {
  __type?: "QueueSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the queue.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the queue.</p>
   */
  Id?: string;

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
  export const filterSensitiveLog = (obj: QueueSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is QueueSummary => __isa(o, "QueueSummary");
}

export enum QueueType {
  AGENT = "AGENT",
  STANDARD = "STANDARD"
}

/**
 * <p>The specified resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message.</p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Contains summary information about a routing profile.</p>
 */
export interface RoutingProfileSummary {
  __type?: "RoutingProfileSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the routing profile.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the routing profile.</p>
   */
  Id?: string;

  /**
   * <p>The name of the routing profile.</p>
   */
  Name?: string;
}

export namespace RoutingProfileSummary {
  export const filterSensitiveLog = (obj: RoutingProfileSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is RoutingProfileSummary =>
    __isa(o, "RoutingProfileSummary");
}

/**
 * <p>Contains information about a security profile.</p>
 */
export interface SecurityProfileSummary {
  __type?: "SecurityProfileSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the security profile.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the security profile.</p>
   */
  Id?: string;

  /**
   * <p>The name of the security profile.</p>
   */
  Name?: string;
}

export namespace SecurityProfileSummary {
  export const filterSensitiveLog = (obj: SecurityProfileSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityProfileSummary =>
    __isa(o, "SecurityProfileSummary");
}

export interface StartChatContactRequest {
  __type?: "StartChatContactRequest";
  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes. </p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier of the contact flow for the chat.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The initial message to be sent to the newly created chat.</p>
   */
  InitialMessage?: ChatMessage;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information identifying the participant.</p>
   */
  ParticipantDetails: ParticipantDetails | undefined;
}

export namespace StartChatContactRequest {
  export const filterSensitiveLog = (obj: StartChatContactRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartChatContactRequest =>
    __isa(o, "StartChatContactRequest");
}

export interface StartChatContactResponse {
  __type?: "StartChatContactResponse";
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
  export const filterSensitiveLog = (obj: StartChatContactResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartChatContactResponse =>
    __isa(o, "StartChatContactResponse");
}

export interface StartOutboundVoiceContactRequest {
  __type?: "StartOutboundVoiceContactRequest";
  /**
   * <p>A custom key-value pair using an attribute map. The attributes are standard Amazon Connect
   *    attributes, and can be accessed in contact flows just like any other contact attributes.</p>
   *          <p>There can be up to 32,768 UTF-8 bytes across all key-value pairs per contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request. The token is valid for 7 days after creation. If a contact is already started, the
   *    contact ID is returned. If the contact is disconnected, a new contact is started.</p>
   */
  ClientToken?: string;

  /**
   * <p>The identifier of the contact flow for the outbound call.</p>
   */
  ContactFlowId: string | undefined;

  /**
   * <p>The phone number of the customer, in E.164 format.</p>
   */
  DestinationPhoneNumber: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The queue for the call. If you specify a queue, the phone displayed for caller ID is the
   *    phone number specified in the queue. If you do not specify a queue, the queue defined in the
   *    contact flow is used. If you do not specify a queue, you must specify a source phone
   *    number.</p>
   */
  QueueId?: string;

  /**
   * <p>The phone number associated with the Amazon Connect instance, in E.164 format. If you do not specify
   *    a source phone number, you must specify a queue.</p>
   */
  SourcePhoneNumber?: string;
}

export namespace StartOutboundVoiceContactRequest {
  export const filterSensitiveLog = (
    obj: StartOutboundVoiceContactRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartOutboundVoiceContactRequest =>
    __isa(o, "StartOutboundVoiceContactRequest");
}

export interface StartOutboundVoiceContactResponse {
  __type?: "StartOutboundVoiceContactResponse";
  /**
   * <p>The identifier of this contact within the Amazon Connect instance.</p>
   */
  ContactId?: string;
}

export namespace StartOutboundVoiceContactResponse {
  export const filterSensitiveLog = (
    obj: StartOutboundVoiceContactResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartOutboundVoiceContactResponse =>
    __isa(o, "StartOutboundVoiceContactResponse");
}

export enum Statistic {
  AVG = "AVG",
  MAX = "MAX",
  SUM = "SUM"
}

export interface StopContactRequest {
  __type?: "StopContactRequest";
  /**
   * <p>The ID of the contact.</p>
   */
  ContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace StopContactRequest {
  export const filterSensitiveLog = (obj: StopContactRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopContactRequest =>
    __isa(o, "StopContactRequest");
}

export interface StopContactResponse {
  __type?: "StopContactResponse";
}

export namespace StopContactResponse {
  export const filterSensitiveLog = (obj: StopContactResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopContactResponse =>
    __isa(o, "StopContactResponse");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags. For example, { "tags": {"key1":"value1", "key2":"value2"} }.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

/**
 * <p>Contains information about the threshold for service level metrics.</p>
 */
export interface Threshold {
  __type?: "Threshold";
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
  export const filterSensitiveLog = (obj: Threshold): any => ({
    ...obj
  });
  export const isa = (o: any): o is Threshold => __isa(o, "Threshold");
}

/**
 * <p>The throttling limit has been exceeded.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottlingException =>
    __isa(o, "ThrottlingException");
}

export enum Unit {
  COUNT = "COUNT",
  PERCENT = "PERCENT",
  SECONDS = "SECONDS"
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UpdateContactAttributesRequest {
  __type?: "UpdateContactAttributesRequest";
  /**
   * <p>The Amazon Connect attributes. These attributes can be accessed in contact flows just like any other
   *    contact attributes.</p>
   *          <p>You can have up to 32,768 UTF-8 bytes across all attributes for a contact. Attribute keys
   *    can include only alphanumeric, dash, and underscore characters.</p>
   */
  Attributes: { [key: string]: string } | undefined;

  /**
   * <p>The identifier of the contact. This is the identifier of the contact associated with the
   *    first interaction with the contact center.</p>
   */
  InitialContactId: string | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;
}

export namespace UpdateContactAttributesRequest {
  export const filterSensitiveLog = (
    obj: UpdateContactAttributesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContactAttributesRequest =>
    __isa(o, "UpdateContactAttributesRequest");
}

export interface UpdateContactAttributesResponse {
  __type?: "UpdateContactAttributesResponse";
}

export namespace UpdateContactAttributesResponse {
  export const filterSensitiveLog = (
    obj: UpdateContactAttributesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateContactAttributesResponse =>
    __isa(o, "UpdateContactAttributesResponse");
}

export interface UpdateUserHierarchyRequest {
  __type?: "UpdateUserHierarchyRequest";
  /**
   * <p>The identifier of the hierarchy group.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserHierarchyRequest {
  export const filterSensitiveLog = (obj: UpdateUserHierarchyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserHierarchyRequest =>
    __isa(o, "UpdateUserHierarchyRequest");
}

export interface UpdateUserIdentityInfoRequest {
  __type?: "UpdateUserIdentityInfoRequest";
  /**
   * <p>The identity information for the user.</p>
   */
  IdentityInfo: UserIdentityInfo | undefined;

  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserIdentityInfoRequest {
  export const filterSensitiveLog = (
    obj: UpdateUserIdentityInfoRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserIdentityInfoRequest =>
    __isa(o, "UpdateUserIdentityInfoRequest");
}

export interface UpdateUserPhoneConfigRequest {
  __type?: "UpdateUserPhoneConfigRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Information about phone configuration settings for the user.</p>
   */
  PhoneConfig: UserPhoneConfig | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserPhoneConfigRequest {
  export const filterSensitiveLog = (
    obj: UpdateUserPhoneConfigRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserPhoneConfigRequest =>
    __isa(o, "UpdateUserPhoneConfigRequest");
}

export interface UpdateUserRoutingProfileRequest {
  __type?: "UpdateUserRoutingProfileRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId: string | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserRoutingProfileRequest {
  export const filterSensitiveLog = (
    obj: UpdateUserRoutingProfileRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserRoutingProfileRequest =>
    __isa(o, "UpdateUserRoutingProfileRequest");
}

export interface UpdateUserSecurityProfilesRequest {
  __type?: "UpdateUserSecurityProfilesRequest";
  /**
   * <p>The identifier of the Amazon Connect instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds: string[] | undefined;

  /**
   * <p>The identifier of the user account.</p>
   */
  UserId: string | undefined;
}

export namespace UpdateUserSecurityProfilesRequest {
  export const filterSensitiveLog = (
    obj: UpdateUserSecurityProfilesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserSecurityProfilesRequest =>
    __isa(o, "UpdateUserSecurityProfilesRequest");
}

/**
 * <p>Contains information about a user account for a Amazon Connect instance.</p>
 */
export interface User {
  __type?: "User";
  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the user account in the directory used for identity management.</p>
   */
  DirectoryUserId?: string;

  /**
   * <p>The identifier of the hierarchy group for the user.</p>
   */
  HierarchyGroupId?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>Information about the user identity.</p>
   */
  IdentityInfo?: UserIdentityInfo;

  /**
   * <p>Information about the phone configuration for the user.</p>
   */
  PhoneConfig?: UserPhoneConfig;

  /**
   * <p>The identifier of the routing profile for the user.</p>
   */
  RoutingProfileId?: string;

  /**
   * <p>The identifiers of the security profiles for the user.</p>
   */
  SecurityProfileIds?: string[];

  /**
   * <p>The tags.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The user name assigned to the user account.</p>
   */
  Username?: string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj
  });
  export const isa = (o: any): o is User => __isa(o, "User");
}

/**
 * <p>Contains information about the identity of a user.</p>
 */
export interface UserIdentityInfo {
  __type?: "UserIdentityInfo";
  /**
   * <p>The email address. If you are using SAML for identity management and include this parameter,
   *    an error is returned.</p>
   */
  Email?: string;

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
}

export namespace UserIdentityInfo {
  export const filterSensitiveLog = (obj: UserIdentityInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserIdentityInfo =>
    __isa(o, "UserIdentityInfo");
}

/**
 * <p>No user with the specified credentials was found in the Amazon Connect instance.</p>
 */
export interface UserNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "UserNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace UserNotFoundException {
  export const filterSensitiveLog = (obj: UserNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserNotFoundException =>
    __isa(o, "UserNotFoundException");
}

/**
 * <p>Contains information about the phone configuration settings for a user.</p>
 */
export interface UserPhoneConfig {
  __type?: "UserPhoneConfig";
  /**
   * <p>The After Call Work (ACW) timeout setting, in seconds.</p>
   */
  AfterContactWorkTimeLimit?: number;

  /**
   * <p>The Auto accept setting.</p>
   */
  AutoAccept?: boolean;

  /**
   * <p>The phone number for the user's desk phone.</p>
   */
  DeskPhoneNumber?: string;

  /**
   * <p>The phone type.</p>
   */
  PhoneType: PhoneType | string | undefined;
}

export namespace UserPhoneConfig {
  export const filterSensitiveLog = (obj: UserPhoneConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserPhoneConfig =>
    __isa(o, "UserPhoneConfig");
}

/**
 * <p>Contains summary information about a user.</p>
 */
export interface UserSummary {
  __type?: "UserSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the user account.</p>
   */
  Arn?: string;

  /**
   * <p>The identifier of the user account.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Connect user name of the user account.</p>
   */
  Username?: string;
}

export namespace UserSummary {
  export const filterSensitiveLog = (obj: UserSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserSummary => __isa(o, "UserSummary");
}
