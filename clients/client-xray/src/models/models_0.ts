// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { XRayServiceException as __BaseException } from "./XRayServiceException";

/**
 * <p>An alias for an edge.</p>
 */
export interface Alias {
  /**
   * <p>The canonical name of the alias.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the alias, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>The type of the alias.</p>
   */
  Type?: string;
}

/**
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean, or String.</p>
 */
export type AnnotationValue =
  | AnnotationValue.BooleanValueMember
  | AnnotationValue.NumberValueMember
  | AnnotationValue.StringValueMember
  | AnnotationValue.$UnknownMember;

export namespace AnnotationValue {
  /**
   * <p>Value for a Number annotation.</p>
   */
  export interface NumberValueMember {
    NumberValue: number;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Value for a Boolean annotation.</p>
   */
  export interface BooleanValueMember {
    NumberValue?: never;
    BooleanValue: boolean;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * <p>Value for a String annotation.</p>
   */
  export interface StringValueMember {
    NumberValue?: never;
    BooleanValue?: never;
    StringValue: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    NumberValue?: never;
    BooleanValue?: never;
    StringValue?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    NumberValue: (value: number) => T;
    BooleanValue: (value: boolean) => T;
    StringValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnnotationValue, visitor: Visitor<T>): T => {
    if (value.NumberValue !== undefined) return visitor.NumberValue(value.NumberValue);
    if (value.BooleanValue !== undefined) return visitor.BooleanValue(value.BooleanValue);
    if (value.StringValue !== undefined) return visitor.StringValue(value.StringValue);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p></p>
 */
export interface ServiceId {
  /**
   * <p></p>
   */
  Name?: string;

  /**
   * <p></p>
   */
  Names?: string[];

  /**
   * <p></p>
   */
  AccountId?: string;

  /**
   * <p></p>
   */
  Type?: string;
}

/**
 * <p>Information about a segment annotation.</p>
 */
export interface ValueWithServiceIds {
  /**
   * <p>Values of the annotation.</p>
   */
  AnnotationValue?: AnnotationValue;

  /**
   * <p>Services to which the annotation applies.</p>
   */
  ServiceIds?: ServiceId[];
}

/**
 * <p>The service within the service graph that has anomalously high fault rates. </p>
 */
export interface AnomalousService {
  /**
   * <p></p>
   */
  ServiceId?: ServiceId;
}

/**
 * <p>A list of Availability Zones corresponding to the segments in a trace.</p>
 */
export interface AvailabilityZoneDetail {
  /**
   * <p>The name of a corresponding Availability Zone.</p>
   */
  Name?: string;
}

export interface BatchGetTracesRequest {
  /**
   * <p>Specify the trace IDs of requests for which to retrieve segments.</p>
   */
  TraceIds: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be
 *       compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an
 *         <code>inferred</code> segment for a downstream service, generated from a subsegment sent by
 *       the service that called it.</p>
 *          <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment
 *       Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 */
export interface Segment {
  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The segment document.</p>
   */
  Document?: string;
}

/**
 * <p>A collection of segment documents with matching trace IDs.</p>
 */
export interface Trace {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * <p>LimitExceeded is set to true when the trace has exceeded the <code>Trace document size</code> limit. For
   *       more information about this limit and other X-Ray limits and quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">Amazon Web Services X-Ray endpoints and quotas</a>.</p>
   */
  LimitExceeded?: boolean;

  /**
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   */
  Segments?: Segment[];
}

export interface BatchGetTracesResult {
  /**
   * <p>Full traces for the specified requests.</p>
   */
  Traces?: Trace[];

  /**
   * <p>Trace IDs of requests that haven't been processed.</p>
   */
  UnprocessedTraceIds?: string[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>The request is missing required parameters or has invalid parameters.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
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
 * <p>The request exceeds the maximum number of requests per second.</p>
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The structure containing configurations related to insights.</p>
 */
export interface InsightsConfiguration {
  /**
   * <p>Set the InsightsEnabled value to true to enable insights or false to disable
   *             insights.</p>
   */
  InsightsEnabled?: boolean;

  /**
   * <p>Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be
   *             enabled on a group with InsightsEnabled set to true.</p>
   */
  NotificationsEnabled?: boolean;
}

/**
 * <p>A map that contains tag keys and tag values to attach to an Amazon Web Services X-Ray group or sampling
 *       rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
 *       in the <i>Amazon Web Services General Reference</i>.</p>
 *          <p>The following restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum number of user-applied tags per resource: 50</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You
 *           cannot edit or delete system tags.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The
   *       key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators,
   *       or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Key: string | undefined;

  /**
   * <p>An optional tag value, such as <code>Production</code> or <code>test-only</code>. The value can be
   *       a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following
   *       special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Value: string | undefined;
}

export interface CreateGroupRequest {
  /**
   * <p>The case-sensitive name of the new group. Default is a reserved name and names must
   *             be unique.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *             <ul>
   *             <li>
   *                     <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     new group or false to disable insights for the new group.</p>
   *                 </li>
   *             <li>
   *                     <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications for the new group. Notifications may only be enabled on a group
   *                     with InsightsEnabled set to true.</p>
   *                 </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group.
   *             For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *         <p>The following restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                 <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                 <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                 <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                     / = + - and @</p>
   *             </li>
   *             <li>
   *                 <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                 <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

/**
 * <p>Details and metadata for a group.</p>
 */
export interface Group {
  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications through Amazon EventBridge for the group.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

export interface CreateGroupResult {
  /**
   * <p>The group that was created. Contains the name of the group that was created, the Amazon Resource Name
   *             (ARN) of the group that was generated based on the group name, the filter expression, and the insight
   *             configuration that was assigned to the group.</p>
   */
  Group?: Group;
}

/**
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule
 *       fields can match properties of the service, or properties of a request. The service can ignore
 *       rules that don't match its properties.</p>
 */
export interface SamplingRule {
  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority: number | undefined;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate: number | undefined;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize: number | undefined;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType: string | undefined;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host: string | undefined;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod: string | undefined;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath: string | undefined;

  /**
   * <p>The version of the sampling rule format (<code>1</code>).</p>
   */
  Version: number | undefined;

  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: Record<string, string>;
}

export interface CreateSamplingRuleRequest {
  /**
   * <p>The rule definition.</p>
   */
  SamplingRule: SamplingRule | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray sampling
   *          rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *             resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *                / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services
   *                use.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

/**
 * <p>A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.</p>
 */
export interface SamplingRuleRecord {
  /**
   * <p>The sampling rule.</p>
   */
  SamplingRule?: SamplingRule;

  /**
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date;
}

export interface CreateSamplingRuleResult {
  /**
   * <p>The saved rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

/**
 * <p>You have reached the maximum number of sampling rules.</p>
 */
export class RuleLimitExceededException extends __BaseException {
  readonly name: "RuleLimitExceededException" = "RuleLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RuleLimitExceededException, __BaseException>) {
    super({
      name: "RuleLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RuleLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;
}

export interface DeleteGroupResult {}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The name of the resource policy to delete.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does
   *             not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned.
   *         </p>
   */
  PolicyRevisionId?: string;
}

export interface DeleteResourcePolicyResult {}

/**
 * <p>A policy revision id was provided which does not match the latest policy revision. This exception is also
 *     if a policy revision id of 0 is provided via <code>PutResourcePolicy</code> and a policy with the same name already exists.</p>
 */
export class InvalidPolicyRevisionIdException extends __BaseException {
  readonly name: "InvalidPolicyRevisionIdException" = "InvalidPolicyRevisionIdException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPolicyRevisionIdException, __BaseException>) {
    super({
      name: "InvalidPolicyRevisionIdException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPolicyRevisionIdException.prototype);
    this.Message = opts.Message;
  }
}

export interface DeleteSamplingRuleRequest {
  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;
}

export interface DeleteSamplingRuleResult {
  /**
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export interface GetEncryptionConfigRequest {}

export enum EncryptionStatus {
  ACTIVE = "ACTIVE",
  UPDATING = "UPDATING",
}

export enum EncryptionType {
  KMS = "KMS",
  NONE = "NONE",
}

/**
 * <p>A configuration document that specifies encryption configuration settings.</p>
 */
export interface EncryptionConfig {
  /**
   * <p>The ID of the KMS key used for encryption, if applicable.</p>
   */
  KeyId?: string;

  /**
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   */
  Status?: EncryptionStatus | string;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with KMS keys. Set to <code>NONE</code> for
   *       default encryption.</p>
   */
  Type?: EncryptionType | string;
}

export interface GetEncryptionConfigResult {
  /**
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export interface GetGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;
}

export interface GetGroupResult {
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             the filter expression, and the insight configuration assigned to the group.</p>
   */
  Group?: Group;
}

export interface GetGroupsRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Details for a group without metadata.</p>
 */
export interface GroupSummary {
  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotificationsEnabled boolean can be set to true to enable insights notifications.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

export interface GetGroupsResult {
  /**
   * <p>The collection of all active groups.</p>
   */
  Groups?: GroupSummary[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetInsightRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;
}

export enum InsightCategory {
  FAULT = "FAULT",
}

/**
 * <p>Statistics that describe how the incident has impacted a service.</p>
 */
export interface RequestImpactStatistics {
  /**
   * <p>The number of requests that have resulted in a fault,</p>
   */
  FaultCount?: number;

  /**
   * <p>The number of successful requests.</p>
   */
  OkCount?: number;

  /**
   * <p>The total number of requests to the service.</p>
   */
  TotalCount?: number;
}

export enum InsightState {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
}

/**
 * <p>When fault rates go outside of the expected range, X-Ray creates an insight. Insights
 *          tracks emergent issues within your applications.</p>
 */
export interface Insight {
  /**
   * <p>The insights unique identifier. </p>
   */
  InsightId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   */
  GroupARN?: string;

  /**
   * <p>The name of the group  that the insight belongs to.</p>
   */
  GroupName?: string;

  /**
   * <p></p>
   */
  RootCauseServiceId?: ServiceId;

  /**
   * <p>The categories that label and describe the type of insight.</p>
   */
  Categories?: (InsightCategory | string)[];

  /**
   * <p>The current state of the insight.</p>
   */
  State?: InsightState | string;

  /**
   * <p>The time, in Unix seconds, at which the insight began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A brief description of the insight.</p>
   */
  Summary?: string;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The service within the insight that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];
}

export interface GetInsightResult {
  /**
   * <p>The summary information of an insight.</p>
   */
  Insight?: Insight;
}

export interface GetInsightEventsRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;

  /**
   * <p>Used to retrieve at most the specified value of events.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of events. </p>
   */
  NextToken?: string;
}

/**
 * <p>X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an
 *          event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.</p>
 */
export interface InsightEvent {
  /**
   * <p>A brief description of the event.</p>
   */
  Summary?: string;

  /**
   * <p>The time, in Unix seconds, at which the event was recorded.</p>
   */
  EventTime?: Date;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The service during the event that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];
}

export interface GetInsightEventsResult {
  /**
   * <p>A detailed description of the event. This includes the time of the event, client and
   *          root cause impact statistics, and the top anomalous service at the time of the
   *          event.</p>
   */
  InsightEvents?: InsightEvent[];

  /**
   * <p>Use this token to retrieve the next page of insight events.</p>
   */
  NextToken?: string;
}

export interface GetInsightImpactGraphRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;

  /**
   * <p>The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value
   *          provided and can't be more than 30 days old.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided.
   *          The time range between the start time and end time can't be more than six hours. </p>
   */
  EndTime: Date | undefined;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * <p>The connection between two service in an insight impact graph.</p>
 */
export interface InsightImpactGraphEdge {
  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;
}

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *          resources, and applications that an application used. </p>
 */
export interface InsightImpactGraphService {
  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, AWS::EC2::Instance for an application running
   *                on Amazon EC2 or AWS::DynamoDB::Table for an Amazon DynamoDB table that the application used. </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon
   *                DynamoDB that didn't target a specific table. </p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, AWS::DynamoDB for downstream calls to Amazon
   *                DynamoDB that didn't target a specific table. </p>
   *             </li>
   *             <li>
   *                <p>remote - A downstream service of indeterminate type.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * <p>Connections to downstream services.</p>
   */
  Edges?: InsightImpactGraphEdge[];
}

export interface GetInsightImpactGraphResult {
  /**
   * <p>The insight's unique identifier.</p>
   */
  InsightId?: string;

  /**
   * <p>The provided start time.</p>
   */
  StartTime?: Date;

  /**
   * <p>The provided end time. </p>
   */
  EndTime?: Date;

  /**
   * <p>The time, in Unix seconds, at which the service graph started.</p>
   */
  ServiceGraphStartTime?: Date;

  /**
   * <p>The time, in Unix seconds, at which the service graph ended.</p>
   */
  ServiceGraphEndTime?: Date;

  /**
   * <p>The Amazon Web Services instrumented services related to the insight.</p>
   */
  Services?: InsightImpactGraphService[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetInsightSummariesRequest {
  /**
   * <p>The list of insight states. </p>
   */
  States?: (InsightState | string)[];

  /**
   * <p>The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.</p>
   */
  GroupARN?: string;

  /**
   * <p>The name of the group. Required if the GroupARN isn't provided.</p>
   */
  GroupName?: string;

  /**
   * <p>The beginning of the time frame in which the insights started. The start time can't be more than 30 days
   *          old.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame in which the insights ended. The end time can't be more than 30 days old.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The maximum number of results to display.</p>
   */
  MaxResults?: number;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information that describes an insight.</p>
 */
export interface InsightSummary {
  /**
   * <p>The insights unique identifier. </p>
   */
  InsightId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   */
  GroupARN?: string;

  /**
   * <p>The name of the group  that the insight belongs to.</p>
   */
  GroupName?: string;

  /**
   * <p></p>
   */
  RootCauseServiceId?: ServiceId;

  /**
   * <p> Categories The categories that label and describe the type of insight.</p>
   */
  Categories?: (InsightCategory | string)[];

  /**
   * <p>The current state of the insight.</p>
   */
  State?: InsightState | string;

  /**
   * <p>The time, in Unix seconds, at which the insight began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A brief description of the insight.</p>
   */
  Summary?: string;

  /**
   * <p>The impact statistics of the client side service. This includes the number of requests
   *          to the client service and whether the requests were faults or okay. </p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The impact statistics of the root cause service. This includes the number of requests to
   *          the client service and whether the requests were faults or okay. </p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * <p>The service within the insight that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];

  /**
   * <p>The time, in Unix seconds, that the insight was last updated.</p>
   */
  LastUpdateTime?: Date;
}

export interface GetInsightSummariesResult {
  /**
   * <p>The summary of each insight within the group matching the provided filters. The summary
   *          contains the InsightID, start and end time, the root cause service, the root cause and
   *          client impact statistics, the top anomalous services, and the status of the insight.</p>
   */
  InsightSummaries?: InsightSummary[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetSamplingRulesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetSamplingRulesResult {
  /**
   * <p>Rule definitions and metadata.</p>
   */
  SamplingRuleRecords?: SamplingRuleRecord[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetSamplingStatisticSummariesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10-second window.</p>
 */
export interface SamplingStatisticSummary {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount?: number;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount?: number;
}

export interface GetSamplingStatisticSummariesResult {
  /**
   * <p>Information about the number of requests instrumented for each sampling
   *          rule.</p>
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>Request sampling results for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 */
export interface SamplingStatisticsDocument {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>A unique identifier for the service in hexadecimal.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The current time.</p>
   */
  Timestamp: Date | undefined;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount: number | undefined;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount: number | undefined;

  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;
}

export interface GetSamplingTargetsRequest {
  /**
   * <p>Information about rules that the service is using to sample requests.</p>
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;
}

/**
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray
 *       calculates a new reservoir for each service based on the recent sampling results of all services that called
 *       <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 */
export interface SamplingTargetDocument {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>The number of requests per second that X-Ray allocated for this service.</p>
   */
  ReservoirQuota?: number;

  /**
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date;

  /**
   * <p>The number of seconds for the service to wait before getting sampling targets
   *       again.</p>
   */
  Interval?: number;
}

/**
 * <p>Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray
 *       could not process.</p>
 */
export interface UnprocessedStatistics {
  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export interface GetSamplingTargetsResult {
  /**
   * <p>Updated rules that the service should use to sample requests.</p>
   */
  SamplingTargetDocuments?: SamplingTargetDocument[];

  /**
   * <p>The last time a user changed the sampling rule configuration. If
   *          the sampling rule configuration changed since the service last retrieved it, the service
   *          should call <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a> to get the latest version.</p>
   */
  LastRuleModification?: Date;

  /**
   * <p>Information about <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingStatisticsDocument.html">SamplingStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   */
  UnprocessedStatistics?: UnprocessedStatistics[];
}

export interface GetServiceGraphRequest {
  /**
   * <p>The start of the time frame for which to generate a graph.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the timeframe for which to generate a graph.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The name of a group based on which you want to generate a graph.</p>
   */
  GroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.</p>
   */
  GroupARN?: string;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values
 *       on the X axis, and the prevalence of each value on the Y axis.</p>
 */
export interface HistogramEntry {
  /**
   * <p>The value of the entry.</p>
   */
  Value?: number;

  /**
   * <p>The prevalence of the entry.</p>
   */
  Count?: number;
}

/**
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 */
export interface ErrorStatistics {
  /**
   * <p>The number of requests that failed with a 419 throttling status code.</p>
   */
  ThrottleCount?: number;

  /**
   * <p>The number of requests that failed with untracked 4xx Client Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   */
  TotalCount?: number;
}

/**
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 */
export interface FaultStatistics {
  /**
   * <p>The number of requests that failed with untracked 5xx Server Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The total number of requests that failed with a 5xx Server Error status code.</p>
   */
  TotalCount?: number;
}

/**
 * <p>Response statistics for an edge.</p>
 */
export interface EdgeStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;
}

/**
 * <p>Information about a connection between two services. An edge can be a synchronous connection, such as typical
 *     call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an
 *     SNS queue.</p>
 */
export interface Edge {
  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date;

  /**
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: EdgeStatistics;

  /**
   * <p>A histogram that maps the spread of client response times on an edge. Only populated
   *              for synchronous edges.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Alias[];

  /**
   * <p>Describes an asynchronous connection, with a value of <code>link</code>.</p>
   */
  EdgeType?: string;

  /**
   * <p>A histogram that maps the spread of event age when received by consumers.
   *       Age is calculated each time an event is received. Only populated when <i>EdgeType</i> is
   *       <code>link</code>.</p>
   */
  ReceivedEventAgeHistogram?: HistogramEntry[];
}

/**
 * <p>Response statistics for a service.</p>
 */
export interface ServiceStatistics {
  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;
}

/**
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *       resources, and applications that an application used.</p>
 */
export interface Service {
  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>Indicates that the service was the first service to process a request.</p>
   */
  Root?: boolean;

  /**
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * <p>The type of service.</p>
   *          <ul>
   *             <li>
   *                <p>Amazon Web Services Resource - The type of an Amazon Web Services resource. For example, <code>AWS::EC2::Instance</code> for an
   *           application running on Amazon EC2 or <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the
   *           application used.</p>
   *             </li>
   *             <li>
   *                <p>Amazon Web Services Service - The type of an Amazon Web Services service. For example, <code>AWS::DynamoDB</code>
   *           for downstream calls to Amazon DynamoDB that didn't target a specific table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>client</code> - Represents the clients that sent requests to a root
   *           service.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>remote</code> - A downstream service of indeterminate type.</p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * <p>The service's state.</p>
   */
  State?: string;

  /**
   * <p>The start time of the first segment that the service generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end time of the last segment that the service generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>Connections to downstream services.</p>
   */
  Edges?: Edge[];

  /**
   * <p>Aggregated statistics for the service.</p>
   */
  SummaryStatistics?: ServiceStatistics;

  /**
   * <p>A histogram that maps the spread of service durations.</p>
   */
  DurationHistogram?: HistogramEntry[];

  /**
   * <p>A histogram that maps the spread of service response times.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];
}

export interface GetServiceGraphResult {
  /**
   * <p>The start of the time frame for which the graph was generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The end of the time frame for which the graph was generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>The services that have processed a traced request during the specified time
   *       frame.</p>
   */
  Services?: Service[];

  /**
   * <p>A flag indicating whether the group's filter expression has been consistent, or
   *       if the returned service graph may show traces from an older version of the group's filter
   *       expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * <p>The start of the time frame for which to aggregate statistics.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame for which to aggregate statistics.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The case-sensitive name of the group for which to pull statistics from.</p>
   */
  GroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the group for which to pull statistics from.</p>
   */
  GroupARN?: string;

  /**
   * <p>A filter expression defining entities that will be aggregated for statistics.
   *             Supports ID, service, and edge functions. If no selector expression is specified, edge
   *             statistics are returned. </p>
   */
  EntitySelectorExpression?: string;

  /**
   * <p>Aggregation period in seconds.</p>
   */
  Period?: number;

  /**
   * <p>The forecasted high and low fault count values. Forecast enabled requests require the
   *             EntitySelectorExpression ID be provided.</p>
   */
  ForecastStatistics?: boolean;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * <p>The predicted high and low fault count. This is used to determine if a service has
 *          become anomalous and if an insight should be created.</p>
 */
export interface ForecastStatistics {
  /**
   * <p>The upper limit of fault counts for a service.</p>
   */
  FaultCountHigh?: number;

  /**
   * <p>The lower limit of fault counts for a service.</p>
   */
  FaultCountLow?: number;
}

/**
 * <p>A list of TimeSeriesStatistic structures.</p>
 */
export interface TimeSeriesServiceStatistics {
  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date;

  /**
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: EdgeStatistics;

  /**
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: ServiceStatistics;

  /**
   * <p>The forecasted high and low fault count values.</p>
   */
  ServiceForecastStatistics?: ForecastStatistics;

  /**
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];
}

export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * <p>The collection of statistics.</p>
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];

  /**
   * <p>A flag indicating whether or not a group's filter expression has been consistent, or if a returned
   *             aggregation might show statistics from an older version of the group's filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetTraceGraphRequest {
  /**
   * <p>Trace IDs of requests for which to generate a service graph.</p>
   */
  TraceIds: string[] | undefined;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export interface GetTraceGraphResult {
  /**
   * <p>The services that have processed one of the specified requests.</p>
   */
  Services?: Service[];

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export enum SamplingStrategyName {
  FixedRate = "FixedRate",
  PartialScan = "PartialScan",
}

/**
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 */
export interface SamplingStrategy {
  /**
   * <p>The name of a sampling rule.</p>
   */
  Name?: SamplingStrategyName | string;

  /**
   * <p>The value of a sampling rule.</p>
   */
  Value?: number;
}

export enum TimeRangeType {
  Event = "Event",
  TraceId = "TraceId",
}

export interface GetTraceSummariesRequest {
  /**
   * <p>The start of the time frame for which to retrieve traces.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end of the time frame for which to retrieve traces.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>A parameter to indicate whether to query trace summaries by TraceId or Event time.</p>
   */
  TimeRangeType?: TimeRangeType | string;

  /**
   * <p>Set to <code>true</code> to get summaries for only a subset of available
   *       traces.</p>
   */
  Sampling?: boolean;

  /**
   * <p>A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and
   *             Value.</p>
   */
  SamplingStrategy?: SamplingStrategy;

  /**
   * <p>Specify a filter expression to retrieve trace summaries for services or requests that
   *       meet certain requirements.</p>
   */
  FilterExpression?: string;

  /**
   * <p>Specify the pagination token returned by a previous request to retrieve the next page
   *       of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The exception associated with a root cause.</p>
 */
export interface RootCauseException {
  /**
   * <p>The name of the exception.</p>
   */
  Name?: string;

  /**
   * <p>The message of the exception.</p>
   */
  Message?: string;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       error.</p>
 */
export interface ErrorRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 */
export interface ErrorRootCauseService {
  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ErrorRootCauseEntity[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * <p>The root cause of a trace summary error.</p>
 */
export interface ErrorRootCause {
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it
   *       contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: ErrorRootCauseService[];

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       fault error.</p>
 */
export interface FaultRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 */
export interface FaultRootCauseService {
  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: FaultRootCauseEntity[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * <p>The root cause information for a trace summary fault.</p>
 */
export interface FaultRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a
   *       name, account ID, type, and inferred flag.</p>
   */
  Services?: FaultRootCauseService[];

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * <p>Information about an HTTP request.</p>
 */
export interface Http {
  /**
   * <p>The request URL.</p>
   */
  HttpURL?: string;

  /**
   * <p>The response status.</p>
   */
  HttpStatus?: number;

  /**
   * <p>The request method.</p>
   */
  HttpMethod?: string;

  /**
   * <p>The request's user agent string.</p>
   */
  UserAgent?: string;

  /**
   * <p>The IP address of the requestor.</p>
   */
  ClientIp?: string;
}

/**
 * <p>A list of EC2 instance IDs corresponding to the segments in a trace. </p>
 */
export interface InstanceIdDetail {
  /**
   * <p>The ID of a corresponding EC2 instance.</p>
   */
  Id?: string;
}

/**
 * <p>A list of resources ARNs corresponding to the segments in a trace.</p>
 */
export interface ResourceARNDetail {
  /**
   * <p>The ARN of a corresponding resource.</p>
   */
  ARN?: string;
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a response time
 *       warning.</p>
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>The type and messages of the exceptions.</p>
   */
  Coverage?: number;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * <p>A collection of fields identifying the service in a response time warning.</p>
 */
export interface ResponseTimeRootCauseService {
  /**
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ResponseTimeRootCauseEntity[];

  /**
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * <p>The root cause information for a response time warning.</p>
 */
export interface ResponseTimeRootCause {
  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name,
   *       account ID, type, and inferred flag.</p>
   */
  Services?: ResponseTimeRootCauseService[];

  /**
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * <p>Information about a user recorded in segment documents.</p>
 */
export interface TraceUser {
  /**
   * <p>The user's name.</p>
   */
  UserName?: string;

  /**
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: ServiceId[];
}

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface TraceSummary {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * <p>The length of time in seconds between the start and end times of the root segment. If
   *       the service performs work asynchronously, the response time measures the time before the
   *       response is sent to the user, while the duration measures the amount of time before the last
   *       traced activity completes.</p>
   */
  ResponseTime?: number;

  /**
   * <p>The root segment document has a 500 series error.</p>
   */
  HasFault?: boolean;

  /**
   * <p>The root segment document has a 400 series error.</p>
   */
  HasError?: boolean;

  /**
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   */
  HasThrottle?: boolean;

  /**
   * <p>One or more of the segment documents is in progress.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: Http;

  /**
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?: Record<string, ValueWithServiceIds[]>;

  /**
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: TraceUser[];

  /**
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: ResourceARNDetail[];

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace
   *       segments.</p>
   */
  InstanceIds?: InstanceIdDetail[];

  /**
   * <p>A list of Availability Zones for any zone corresponding to the trace segments.</p>
   */
  AvailabilityZones?: AvailabilityZoneDetail[];

  /**
   * <p>The root of a trace.</p>
   */
  EntryPoint?: ServiceId;

  /**
   * <p>A collection of FaultRootCause structures corresponding to the trace segments.</p>
   */
  FaultRootCauses?: FaultRootCause[];

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ErrorRootCauses?: ErrorRootCause[];

  /**
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ResponseTimeRootCauses?: ResponseTimeRootCause[];

  /**
   * <p>The revision number of a trace.</p>
   */
  Revision?: number;

  /**
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date;
}

export interface GetTraceSummariesResult {
  /**
   * <p>Trace IDs and annotations for traces that were found in the specified time
   *       frame.</p>
   */
  TraceSummaries?: TraceSummary[];

  /**
   * <p>The start time of this page of results.</p>
   */
  ApproximateTime?: Date;

  /**
   * <p>The total number of traces processed, including traces that did not match the specified
   *       filter expression.</p>
   */
  TracesProcessedCount?: number;

  /**
   * <p>If the requested time frame contained more than one page of results, you can use this token to retrieve the
   *       next page. The first page contains the most recent results, closest to the end of the time frame.</p>
   */
  NextToken?: string;
}

export interface ListResourcePoliciesRequest {
  /**
   * <p>Not currently supported.</p>
   */
  NextToken?: string;
}

/**
 * <p>A resource policy grants one or more Amazon Web Services services and accounts permissions
 *             to access X-Ray. Each resource policy is associated with a
 *             specific Amazon Web Services account.</p>
 */
export interface ResourcePolicy {
  /**
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   */
  PolicyName?: string;

  /**
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>Returns the current policy revision id for this policy name.</p>
   */
  PolicyRevisionId?: string;

  /**
   * <p>When the policy was last updated, in Unix time seconds.</p>
   */
  LastUpdatedTime?: Date;
}

export interface ListResourcePoliciesResult {
  /**
   * <p>The list of resource policies in the target Amazon Web Services account.</p>
   */
  ResourcePolicies?: ResourcePolicy[];

  /**
   * <p>Pagination token. Not currently supported.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *     the current page of results as the value of this parameter to get the next page of results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *       the current page of results to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceName?: string;
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
    this.ResourceName = opts.ResourceName;
  }
}

export interface PutEncryptionConfigRequest {
  /**
   * <p>An Amazon Web Services KMS key in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Alias</b> - The name of the key. For example,
   *             <code>alias/MyKey</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Key ID</b> - The KMS key ID of the key. For example,
   *           <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. Amazon Web Services X-Ray does not support asymmetric KMS keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>ARN</b> - The full Amazon Resource Name of the key ID or alias.
   *           For example,
   *             <code>arn:aws:kms:us-east-2:123456789012:key/ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>.
   *           Use this format to specify a key in a different account.</p>
   *             </li>
   *          </ul>
   *          <p>Omit this key if you set <code>Type</code> to <code>NONE</code>.</p>
   */
  KeyId?: string;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set
   *       to <code>NONE</code> for default encryption.</p>
   */
  Type: EncryptionType | string | undefined;
}

export interface PutEncryptionConfigResult {
  /**
   * <p>The new encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

/**
 * <p>The provided resource policy would prevent the caller of this request from calling PutResourcePolicy in the future.</p>
 */
export class LockoutPreventionException extends __BaseException {
  readonly name: "LockoutPreventionException" = "LockoutPreventionException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LockoutPreventionException, __BaseException>) {
    super({
      name: "LockoutPreventionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LockoutPreventionException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Invalid policy document provided in request.</p>
 */
export class MalformedPolicyDocumentException extends __BaseException {
  readonly name: "MalformedPolicyDocumentException" = "MalformedPolicyDocumentException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MalformedPolicyDocumentException, __BaseException>) {
    super({
      name: "MalformedPolicyDocumentException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exceeded the maximum number of resource policies for a target Amazon Web Services account.</p>
 */
export class PolicyCountLimitExceededException extends __BaseException {
  readonly name: "PolicyCountLimitExceededException" = "PolicyCountLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyCountLimitExceededException, __BaseException>) {
    super({
      name: "PolicyCountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyCountLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exceeded the maximum size for a resource policy.</p>
 */
export class PolicySizeLimitExceededException extends __BaseException {
  readonly name: "PolicySizeLimitExceededException" = "PolicySizeLimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicySizeLimitExceededException, __BaseException>) {
    super({
      name: "PolicySizeLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicySizeLimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id.
   *             The revision id is unique to each policy in the account.</p>
   *         <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a
   *             <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists.
   *         </p>
   */
  PolicyRevisionId?: string;

  /**
   * <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p>
   *         <important>
   *             <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p>
   *         </important>
   *         <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p>
   *         <p>The default value is false.</p>
   */
  BypassPolicyLockoutCheck?: boolean;
}

export interface PutResourcePolicyResult {
  /**
   * <p>The resource policy document, as provided in the <code>PutResourcePolicyRequest</code>.</p>
   */
  ResourcePolicy?: ResourcePolicy;
}

/**
 * <p></p>
 */
export interface BackendConnectionErrors {
  /**
   * <p></p>
   */
  TimeoutCount?: number;

  /**
   * <p></p>
   */
  ConnectionRefusedCount?: number;

  /**
   * <p></p>
   */
  HTTPCode4XXCount?: number;

  /**
   * <p></p>
   */
  HTTPCode5XXCount?: number;

  /**
   * <p></p>
   */
  UnknownHostCount?: number;

  /**
   * <p></p>
   */
  OtherCount?: number;
}

/**
 * <p></p>
 */
export interface TelemetryRecord {
  /**
   * <p></p>
   */
  Timestamp: Date | undefined;

  /**
   * <p></p>
   */
  SegmentsReceivedCount?: number;

  /**
   * <p></p>
   */
  SegmentsSentCount?: number;

  /**
   * <p></p>
   */
  SegmentsSpilloverCount?: number;

  /**
   * <p></p>
   */
  SegmentsRejectedCount?: number;

  /**
   * <p></p>
   */
  BackendConnectionErrors?: BackendConnectionErrors;
}

export interface PutTelemetryRecordsRequest {
  /**
   * <p></p>
   */
  TelemetryRecords: TelemetryRecord[] | undefined;

  /**
   * <p></p>
   */
  EC2InstanceId?: string;

  /**
   * <p></p>
   */
  Hostname?: string;

  /**
   * <p></p>
   */
  ResourceARN?: string;
}

export interface PutTelemetryRecordsResult {}

export interface PutTraceSegmentsRequest {
  /**
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   */
  TraceSegmentDocuments: string[] | undefined;
}

/**
 * <p>Information about a segment that failed processing.</p>
 */
export interface UnprocessedTraceSegment {
  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The error that caused processing to fail.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export interface PutTraceSegmentsResult {
  /**
   * <p>Segments that failed processing.</p>
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group or
   *       sampling rule. For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services resources</a>
   *       in the <i>Amazon Web Services General Reference</i>.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of user-applied tags per resource: 50</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag key length: 128 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Maximum tag value length: 256 Unicode characters</p>
   *             </li>
   *             <li>
   *                <p>Valid values for key and value: a-z, A-Z, 0-9, space, and the following characters: _ . :
   *           / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services use. You
   *           cannot edit or delete system tags.</p>
   *             </li>
   *          </ul>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>You have exceeded the maximum number of tags you can apply to this resource.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  Message?: string;
  ResourceName?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.Message = opts.Message;
    this.ResourceName = opts.ResourceName;
  }
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateGroupRequest {
  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The ARN that was generated upon creation.</p>
   */
  GroupARN?: string;

  /**
   * <p>The updated filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The structure containing configurations related to insights.</p>
   *         <ul>
   *             <li>
   *                 <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                 <p>The NotificationsEnabled boolean can be set to true to enable insights notifications for the group.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

export interface UpdateGroupResult {
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, the updated filter expression, and the updated insight
   *             configuration assigned to the group.</p>
   */
  Group?: Group;
}

/**
 * <p>A document specifying changes to a sampling rule's configuration.</p>
 */
export interface SamplingRuleUpdate {
  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority?: number;

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize?: number;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host?: string;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName?: string;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType?: string;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod?: string;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath?: string;

  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: Record<string, string>;
}

export interface UpdateSamplingRuleRequest {
  /**
   * <p>The rule and fields to change.</p>
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

export interface UpdateSamplingRuleResult {
  /**
   * <p>The updated rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

/**
 * @internal
 */
export const AliasFilterSensitiveLog = (obj: Alias): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnnotationValueFilterSensitiveLog = (obj: AnnotationValue): any => {
  if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
  if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
  if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ServiceIdFilterSensitiveLog = (obj: ServiceId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValueWithServiceIdsFilterSensitiveLog = (obj: ValueWithServiceIds): any => ({
  ...obj,
  ...(obj.AnnotationValue && { AnnotationValue: AnnotationValueFilterSensitiveLog(obj.AnnotationValue) }),
});

/**
 * @internal
 */
export const AnomalousServiceFilterSensitiveLog = (obj: AnomalousService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityZoneDetailFilterSensitiveLog = (obj: AvailabilityZoneDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetTracesRequestFilterSensitiveLog = (obj: BatchGetTracesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SegmentFilterSensitiveLog = (obj: Segment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TraceFilterSensitiveLog = (obj: Trace): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetTracesResultFilterSensitiveLog = (obj: BatchGetTracesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightsConfigurationFilterSensitiveLog = (obj: InsightsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupRequestFilterSensitiveLog = (obj: CreateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupFilterSensitiveLog = (obj: Group): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGroupResultFilterSensitiveLog = (obj: CreateGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingRuleFilterSensitiveLog = (obj: SamplingRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSamplingRuleRequestFilterSensitiveLog = (obj: CreateSamplingRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingRuleRecordFilterSensitiveLog = (obj: SamplingRuleRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSamplingRuleResultFilterSensitiveLog = (obj: CreateSamplingRuleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupRequestFilterSensitiveLog = (obj: DeleteGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGroupResultFilterSensitiveLog = (obj: DeleteGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResultFilterSensitiveLog = (obj: DeleteResourcePolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSamplingRuleRequestFilterSensitiveLog = (obj: DeleteSamplingRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSamplingRuleResultFilterSensitiveLog = (obj: DeleteSamplingRuleResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetEncryptionConfigRequestFilterSensitiveLog = (obj: GetEncryptionConfigRequest): any => ({
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
export const GetEncryptionConfigResultFilterSensitiveLog = (obj: GetEncryptionConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupRequestFilterSensitiveLog = (obj: GetGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupResultFilterSensitiveLog = (obj: GetGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupsRequestFilterSensitiveLog = (obj: GetGroupsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GroupSummaryFilterSensitiveLog = (obj: GroupSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetGroupsResultFilterSensitiveLog = (obj: GetGroupsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightRequestFilterSensitiveLog = (obj: GetInsightRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestImpactStatisticsFilterSensitiveLog = (obj: RequestImpactStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightFilterSensitiveLog = (obj: Insight): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightResultFilterSensitiveLog = (obj: GetInsightResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightEventsRequestFilterSensitiveLog = (obj: GetInsightEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightEventFilterSensitiveLog = (obj: InsightEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightEventsResultFilterSensitiveLog = (obj: GetInsightEventsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightImpactGraphRequestFilterSensitiveLog = (obj: GetInsightImpactGraphRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightImpactGraphEdgeFilterSensitiveLog = (obj: InsightImpactGraphEdge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightImpactGraphServiceFilterSensitiveLog = (obj: InsightImpactGraphService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightImpactGraphResultFilterSensitiveLog = (obj: GetInsightImpactGraphResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightSummariesRequestFilterSensitiveLog = (obj: GetInsightSummariesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InsightSummaryFilterSensitiveLog = (obj: InsightSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInsightSummariesResultFilterSensitiveLog = (obj: GetInsightSummariesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingRulesRequestFilterSensitiveLog = (obj: GetSamplingRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingRulesResultFilterSensitiveLog = (obj: GetSamplingRulesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingStatisticSummariesRequestFilterSensitiveLog = (
  obj: GetSamplingStatisticSummariesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingStatisticSummaryFilterSensitiveLog = (obj: SamplingStatisticSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingStatisticSummariesResultFilterSensitiveLog = (
  obj: GetSamplingStatisticSummariesResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingStatisticsDocumentFilterSensitiveLog = (obj: SamplingStatisticsDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingTargetsRequestFilterSensitiveLog = (obj: GetSamplingTargetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingTargetDocumentFilterSensitiveLog = (obj: SamplingTargetDocument): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedStatisticsFilterSensitiveLog = (obj: UnprocessedStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSamplingTargetsResultFilterSensitiveLog = (obj: GetSamplingTargetsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceGraphRequestFilterSensitiveLog = (obj: GetServiceGraphRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HistogramEntryFilterSensitiveLog = (obj: HistogramEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorStatisticsFilterSensitiveLog = (obj: ErrorStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaultStatisticsFilterSensitiveLog = (obj: FaultStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeStatisticsFilterSensitiveLog = (obj: EdgeStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EdgeFilterSensitiveLog = (obj: Edge): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceStatisticsFilterSensitiveLog = (obj: ServiceStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceFilterSensitiveLog = (obj: Service): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetServiceGraphResultFilterSensitiveLog = (obj: GetServiceGraphResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTimeSeriesServiceStatisticsRequestFilterSensitiveLog = (
  obj: GetTimeSeriesServiceStatisticsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForecastStatisticsFilterSensitiveLog = (obj: ForecastStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesServiceStatisticsFilterSensitiveLog = (obj: TimeSeriesServiceStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTimeSeriesServiceStatisticsResultFilterSensitiveLog = (
  obj: GetTimeSeriesServiceStatisticsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTraceGraphRequestFilterSensitiveLog = (obj: GetTraceGraphRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTraceGraphResultFilterSensitiveLog = (obj: GetTraceGraphResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingStrategyFilterSensitiveLog = (obj: SamplingStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetTraceSummariesRequestFilterSensitiveLog = (obj: GetTraceSummariesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RootCauseExceptionFilterSensitiveLog = (obj: RootCauseException): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorRootCauseEntityFilterSensitiveLog = (obj: ErrorRootCauseEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorRootCauseServiceFilterSensitiveLog = (obj: ErrorRootCauseService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorRootCauseFilterSensitiveLog = (obj: ErrorRootCause): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaultRootCauseEntityFilterSensitiveLog = (obj: FaultRootCauseEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaultRootCauseServiceFilterSensitiveLog = (obj: FaultRootCauseService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FaultRootCauseFilterSensitiveLog = (obj: FaultRootCause): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpFilterSensitiveLog = (obj: Http): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceIdDetailFilterSensitiveLog = (obj: InstanceIdDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceARNDetailFilterSensitiveLog = (obj: ResourceARNDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseTimeRootCauseEntityFilterSensitiveLog = (obj: ResponseTimeRootCauseEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseTimeRootCauseServiceFilterSensitiveLog = (obj: ResponseTimeRootCauseService): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseTimeRootCauseFilterSensitiveLog = (obj: ResponseTimeRootCause): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TraceUserFilterSensitiveLog = (obj: TraceUser): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TraceSummaryFilterSensitiveLog = (obj: TraceSummary): any => ({
  ...obj,
  ...(obj.Annotations && {
    Annotations: Object.entries(obj.Annotations).reduce(
      (acc: any, [key, value]: [string, ValueWithServiceIds[]]) => (
        (acc[key] = value.map((item) => ValueWithServiceIdsFilterSensitiveLog(item))), acc
      ),
      {}
    ),
  }),
});

/**
 * @internal
 */
export const GetTraceSummariesResultFilterSensitiveLog = (obj: GetTraceSummariesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcePoliciesRequestFilterSensitiveLog = (obj: ListResourcePoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourcePolicyFilterSensitiveLog = (obj: ResourcePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourcePoliciesResultFilterSensitiveLog = (obj: ListResourcePoliciesResult): any => ({
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
export const PutEncryptionConfigRequestFilterSensitiveLog = (obj: PutEncryptionConfigRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEncryptionConfigResultFilterSensitiveLog = (obj: PutEncryptionConfigResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyRequestFilterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourcePolicyResultFilterSensitiveLog = (obj: PutResourcePolicyResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BackendConnectionErrorsFilterSensitiveLog = (obj: BackendConnectionErrors): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TelemetryRecordFilterSensitiveLog = (obj: TelemetryRecord): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTelemetryRecordsRequestFilterSensitiveLog = (obj: PutTelemetryRecordsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTelemetryRecordsResultFilterSensitiveLog = (obj: PutTelemetryRecordsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTraceSegmentsRequestFilterSensitiveLog = (obj: PutTraceSegmentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UnprocessedTraceSegmentFilterSensitiveLog = (obj: UnprocessedTraceSegment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTraceSegmentsResultFilterSensitiveLog = (obj: PutTraceSegmentsResult): any => ({
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
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
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
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupRequestFilterSensitiveLog = (obj: UpdateGroupRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGroupResultFilterSensitiveLog = (obj: UpdateGroupResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SamplingRuleUpdateFilterSensitiveLog = (obj: SamplingRuleUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSamplingRuleRequestFilterSensitiveLog = (obj: UpdateSamplingRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSamplingRuleResultFilterSensitiveLog = (obj: UpdateSamplingRuleResult): any => ({
  ...obj,
});
