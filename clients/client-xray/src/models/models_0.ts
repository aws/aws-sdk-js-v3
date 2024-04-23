// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { XRayServiceException as __BaseException } from "./XRayServiceException";

/**
 * @public
 * <p>An alias for an edge.</p>
 */
export interface Alias {
  /**
   * @public
   * <p>The canonical name of the alias.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of names for the alias, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>The type of the alias.</p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean, or String.</p>
 */
export type AnnotationValue =
  | AnnotationValue.BooleanValueMember
  | AnnotationValue.NumberValueMember
  | AnnotationValue.StringValueMember
  | AnnotationValue.$UnknownMember;

/**
 * @public
 */
export namespace AnnotationValue {
  /**
   * @public
   * <p>Value for a Number annotation.</p>
   */
  export interface NumberValueMember {
    NumberValue: number;
    BooleanValue?: never;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Value for a Boolean annotation.</p>
   */
  export interface BooleanValueMember {
    NumberValue?: never;
    BooleanValue: boolean;
    StringValue?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Value for a String annotation.</p>
   */
  export interface StringValueMember {
    NumberValue?: never;
    BooleanValue?: never;
    StringValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
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
 * @public
 * <p></p>
 */
export interface ServiceId {
  /**
   * @public
   * <p></p>
   */
  Name?: string;

  /**
   * @public
   * <p></p>
   */
  Names?: string[];

  /**
   * @public
   * <p></p>
   */
  AccountId?: string;

  /**
   * @public
   * <p></p>
   */
  Type?: string;
}

/**
 * @public
 * <p>Information about a segment annotation.</p>
 */
export interface ValueWithServiceIds {
  /**
   * @public
   * <p>Values of the annotation.</p>
   */
  AnnotationValue?: AnnotationValue;

  /**
   * @public
   * <p>Services to which the annotation applies.</p>
   */
  ServiceIds?: ServiceId[];
}

/**
 * @public
 * <p>The service within the service graph that has anomalously high fault rates. </p>
 */
export interface AnomalousService {
  /**
   * @public
   * <p></p>
   */
  ServiceId?: ServiceId;
}

/**
 * @public
 * <p>A list of Availability Zones corresponding to the segments in a trace.</p>
 */
export interface AvailabilityZoneDetail {
  /**
   * @public
   * <p>The name of a corresponding Availability Zone.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface BatchGetTracesRequest {
  /**
   * @public
   * <p>Specify the trace IDs of requests for which to retrieve segments.</p>
   */
  TraceIds: string[] | undefined;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be
 *       compiled from documents uploaded with <a href="https://docs.aws.amazon.com/xray/latest/api/API_PutTraceSegments.html">PutTraceSegments</a>, or an
 *         <code>inferred</code> segment for a downstream service, generated from a subsegment sent by
 *       the service that called it.</p>
 *          <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">Amazon Web Services X-Ray Segment
 *       Documents</a> in the <i>Amazon Web Services X-Ray Developer Guide</i>.</p>
 */
export interface Segment {
  /**
   * @public
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The segment document.</p>
   */
  Document?: string;
}

/**
 * @public
 * <p>A collection of segment documents with matching trace IDs.</p>
 */
export interface Trace {
  /**
   * @public
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>LimitExceeded is set to true when the trace has exceeded the <code>Trace document size</code> limit. For
   *       more information about this limit and other X-Ray limits and quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">Amazon Web Services X-Ray endpoints and quotas</a>.</p>
   */
  LimitExceeded?: boolean;

  /**
   * @public
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   */
  Segments?: Segment[];
}

/**
 * @public
 */
export interface BatchGetTracesResult {
  /**
   * @public
   * <p>Full traces for the specified requests.</p>
   */
  Traces?: Trace[];

  /**
   * @public
   * <p>Trace IDs of requests that haven't been processed.</p>
   */
  UnprocessedTraceIds?: string[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
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
 * @public
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
 * @public
 * <p>The structure containing configurations related to insights.</p>
 */
export interface InsightsConfiguration {
  /**
   * @public
   * <p>Set the InsightsEnabled value to true to enable insights or false to disable
   *             insights.</p>
   */
  InsightsEnabled?: boolean;

  /**
   * @public
   * <p>Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be
   *             enabled on a group with InsightsEnabled set to true.</p>
   */
  NotificationsEnabled?: boolean;
}

/**
 * @public
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
   * @public
   * <p>A tag key, such as <code>Stage</code> or <code>Name</code>. A tag key cannot be empty. The
   *       key can be a maximum of 128 characters, and can contain only Unicode letters, numbers, or separators,
   *       or the following special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>An optional tag value, such as <code>Production</code> or <code>test-only</code>. The value can be
   *       a maximum of 255 characters, and contain only Unicode letters, numbers, or separators, or the following
   *       special characters: <code>+ - = . _ : /</code>
   *          </p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateGroupRequest {
  /**
   * @public
   * <p>The case-sensitive name of the new group. Default is a reserved name and names must
   *             be unique.</p>
   */
  GroupName: string | undefined;

  /**
   * @public
   * <p>The filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     new group or false to disable insights for the new group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications for the new group. Notifications may only be enabled on a group
   *                     with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;

  /**
   * @public
   * <p>A map that contains one or more tag keys and tag values to attach to an X-Ray group.
   *             For more information about ways to use tags, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services
   *                 resources</a> in the <i>Amazon Web Services General Reference</i>.</p>
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
   *                     / = + - and @</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Don't use <code>aws:</code> as a prefix for keys; it's reserved for Amazon Web Services
   *                     use.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>Details and metadata for a group.</p>
 */
export interface Group {
  /**
   * @public
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights
   *                     notifications through Amazon EventBridge for the group.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

/**
 * @public
 */
export interface CreateGroupResult {
  /**
   * @public
   * <p>The group that was created. Contains the name of the group that was created, the Amazon Resource Name
   *             (ARN) of the group that was generated based on the group name, the filter expression, and the insight
   *             configuration that was assigned to the group.</p>
   */
  Group?: Group;
}

/**
 * @public
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule
 *       fields can match properties of the service, or properties of a request. The service can ignore
 *       rules that don't match its properties.</p>
 */
export interface SamplingRule {
  /**
   * @public
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * @public
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The priority of the sampling rule.</p>
   */
  Priority: number | undefined;

  /**
   * @public
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate: number | undefined;

  /**
   * @public
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize: number | undefined;

  /**
   * @public
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName: string | undefined;

  /**
   * @public
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType: string | undefined;

  /**
   * @public
   * <p>Matches the hostname from a request URL.</p>
   */
  Host: string | undefined;

  /**
   * @public
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod: string | undefined;

  /**
   * @public
   * <p>Matches the path from a request URL.</p>
   */
  URLPath: string | undefined;

  /**
   * @public
   * <p>The version of the sampling rule format (<code>1</code>).</p>
   */
  Version: number | undefined;

  /**
   * @public
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateSamplingRuleRequest {
  /**
   * @public
   * <p>The rule definition.</p>
   */
  SamplingRule: SamplingRule | undefined;

  /**
   * @public
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
 * @public
 * <p>A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.</p>
 */
export interface SamplingRuleRecord {
  /**
   * @public
   * <p>The sampling rule.</p>
   */
  SamplingRule?: SamplingRule;

  /**
   * @public
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date;

  /**
   * @public
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date;
}

/**
 * @public
 */
export interface CreateSamplingRuleResult {
  /**
   * @public
   * <p>The saved rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteGroupRequest {
  /**
   * @public
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;
}

/**
 * @public
 */
export interface DeleteGroupResult {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The name of the resource policy to delete.</p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>Specifies a specific policy revision to delete. Provide a <code>PolicyRevisionId</code> to ensure an atomic delete operation. If the provided revision id does
   *             not match the latest policy revision id, an <code>InvalidPolicyRevisionIdException</code> exception is returned.
   *         </p>
   */
  PolicyRevisionId?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResult {}

/**
 * @public
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

/**
 * @public
 */
export interface DeleteSamplingRuleRequest {
  /**
   * @public
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;
}

/**
 * @public
 */
export interface DeleteSamplingRuleResult {
  /**
   * @public
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

/**
 * @public
 */
export interface GetEncryptionConfigRequest {}

/**
 * @public
 * @enum
 */
export const EncryptionStatus = {
  ACTIVE: "ACTIVE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type EncryptionStatus = (typeof EncryptionStatus)[keyof typeof EncryptionStatus];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS: "KMS",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * <p>A configuration document that specifies encryption configuration settings.</p>
 */
export interface EncryptionConfig {
  /**
   * @public
   * <p>The ID of the KMS key used for encryption, if applicable.</p>
   */
  KeyId?: string;

  /**
   * @public
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   */
  Status?: EncryptionStatus;

  /**
   * @public
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with KMS keys. Set to <code>NONE</code> for
   *       default encryption.</p>
   */
  Type?: EncryptionType;
}

/**
 * @public
 */
export interface GetEncryptionConfigResult {
  /**
   * @public
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * @public
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;
}

/**
 * @public
 */
export interface GetGroupResult {
  /**
   * @public
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             the filter expression, and the insight configuration assigned to the group.</p>
   */
  Group?: Group;
}

/**
 * @public
 */
export interface GetGroupsRequest {
  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Details for a group without metadata.</p>
 */
export interface GroupSummary {
  /**
   * @public
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights notifications.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

/**
 * @public
 */
export interface GetGroupsResult {
  /**
   * @public
   * <p>The collection of all active groups.</p>
   */
  Groups?: GroupSummary[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInsightRequest {
  /**
   * @public
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const InsightCategory = {
  FAULT: "FAULT",
} as const;

/**
 * @public
 */
export type InsightCategory = (typeof InsightCategory)[keyof typeof InsightCategory];

/**
 * @public
 * <p>Statistics that describe how the incident has impacted a service.</p>
 */
export interface RequestImpactStatistics {
  /**
   * @public
   * <p>The number of requests that have resulted in a fault,</p>
   */
  FaultCount?: number;

  /**
   * @public
   * <p>The number of successful requests.</p>
   */
  OkCount?: number;

  /**
   * @public
   * <p>The total number of requests to the service.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * @enum
 */
export const InsightState = {
  ACTIVE: "ACTIVE",
  CLOSED: "CLOSED",
} as const;

/**
 * @public
 */
export type InsightState = (typeof InsightState)[keyof typeof InsightState];

/**
 * @public
 * <p>When fault rates go outside of the expected range, X-Ray creates an insight. Insights
 *          tracks emergent issues within your applications.</p>
 */
export interface Insight {
  /**
   * @public
   * <p>The insights unique identifier. </p>
   */
  InsightId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The name of the group  that the insight belongs to.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p></p>
   */
  RootCauseServiceId?: ServiceId;

  /**
   * @public
   * <p>The categories that label and describe the type of insight.</p>
   */
  Categories?: InsightCategory[];

  /**
   * @public
   * <p>The current state of the insight.</p>
   */
  State?: InsightState;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the insight began.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>A brief description of the insight.</p>
   */
  Summary?: string;

  /**
   * @public
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The service within the insight that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];
}

/**
 * @public
 */
export interface GetInsightResult {
  /**
   * @public
   * <p>The summary information of an insight.</p>
   */
  Insight?: Insight;
}

/**
 * @public
 */
export interface GetInsightEventsRequest {
  /**
   * @public
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;

  /**
   * @public
   * <p>Used to retrieve at most the specified value of events.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of events. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an
 *          event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.</p>
 */
export interface InsightEvent {
  /**
   * @public
   * <p>A brief description of the event.</p>
   */
  Summary?: string;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the event was recorded.</p>
   */
  EventTime?: Date;

  /**
   * @public
   * <p>The impact statistics of the client side service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The impact statistics of the root cause service. This includes the number of requests to the client service
   *          and whether the requests were faults or okay.</p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The service during the event that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];
}

/**
 * @public
 */
export interface GetInsightEventsResult {
  /**
   * @public
   * <p>A detailed description of the event. This includes the time of the event, client and
   *          root cause impact statistics, and the top anomalous service at the time of the
   *          event.</p>
   */
  InsightEvents?: InsightEvent[];

  /**
   * @public
   * <p>Use this token to retrieve the next page of insight events.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInsightImpactGraphRequest {
  /**
   * @public
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;

  /**
   * @public
   * <p>The estimated start time of the insight, in Unix time seconds. The StartTime is inclusive of the value
   *          provided and can't be more than 30 days old.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The estimated end time of the insight, in Unix time seconds. The EndTime is exclusive of the value provided.
   *          The time range between the start time and end time can't be more than six hours. </p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>Specify the pagination token returned by a previous request to retrieve the next page of results. </p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The connection between two service in an insight impact graph.</p>
 */
export interface InsightImpactGraphEdge {
  /**
   * @public
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;
}

/**
 * @public
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *          resources, and applications that an application used. </p>
 */
export interface InsightImpactGraphService {
  /**
   * @public
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * @public
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
   * @public
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>Connections to downstream services.</p>
   */
  Edges?: InsightImpactGraphEdge[];
}

/**
 * @public
 */
export interface GetInsightImpactGraphResult {
  /**
   * @public
   * <p>The insight's unique identifier.</p>
   */
  InsightId?: string;

  /**
   * @public
   * <p>The provided start time.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The provided end time. </p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the service graph started.</p>
   */
  ServiceGraphStartTime?: Date;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the service graph ended.</p>
   */
  ServiceGraphEndTime?: Date;

  /**
   * @public
   * <p>The Amazon Web Services instrumented services related to the insight.</p>
   */
  Services?: InsightImpactGraphService[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetInsightSummariesRequest {
  /**
   * @public
   * <p>The list of insight states. </p>
   */
  States?: InsightState[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The name of the group. Required if the GroupARN isn't provided.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The beginning of the time frame in which the insights started. The start time can't be more than 30 days
   *          old.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time frame in which the insights ended. The end time can't be more than 30 days old.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The maximum number of results to display.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Information that describes an insight.</p>
 */
export interface InsightSummary {
  /**
   * @public
   * <p>The insights unique identifier. </p>
   */
  InsightId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group that the insight belongs to.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The name of the group  that the insight belongs to.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p></p>
   */
  RootCauseServiceId?: ServiceId;

  /**
   * @public
   * <p> Categories The categories that label and describe the type of insight.</p>
   */
  Categories?: InsightCategory[];

  /**
   * @public
   * <p>The current state of the insight.</p>
   */
  State?: InsightState;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the insight began.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The time, in Unix seconds, at which the insight ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>A brief description of the insight.</p>
   */
  Summary?: string;

  /**
   * @public
   * <p>The impact statistics of the client side service. This includes the number of requests
   *          to the client service and whether the requests were faults or okay. </p>
   */
  ClientRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The impact statistics of the root cause service. This includes the number of requests to
   *          the client service and whether the requests were faults or okay. </p>
   */
  RootCauseServiceRequestImpactStatistics?: RequestImpactStatistics;

  /**
   * @public
   * <p>The service within the insight that is most impacted by the incident.</p>
   */
  TopAnomalousServices?: AnomalousService[];

  /**
   * @public
   * <p>The time, in Unix seconds, that the insight was last updated.</p>
   */
  LastUpdateTime?: Date;
}

/**
 * @public
 */
export interface GetInsightSummariesResult {
  /**
   * @public
   * <p>The summary of each insight within the group matching the provided filters. The summary
   *          contains the InsightID, start and end time, the root cause service, the root cause and
   *          client impact statistics, the top anomalous services, and the status of the insight.</p>
   */
  InsightSummaries?: InsightSummary[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSamplingRulesRequest {
  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSamplingRulesResult {
  /**
   * @public
   * <p>Rule definitions and metadata.</p>
   */
  SamplingRuleRecords?: SamplingRuleRecord[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesRequest {
  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10-second window.</p>
 */
export interface SamplingStatisticSummary {
  /**
   * @public
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount?: number;

  /**
   * @public
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * @public
   * <p>The number of requests recorded.</p>
   */
  SampledCount?: number;
}

/**
 * @public
 */
export interface GetSamplingStatisticSummariesResult {
  /**
   * @public
   * <p>Information about the number of requests instrumented for each sampling
   *          rule.</p>
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Request sampling results for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 */
export interface SamplingStatisticsDocument {
  /**
   * @public
   * <p>The name of the sampling rule.</p>
   */
  RuleName: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the service in hexadecimal.</p>
   */
  ClientID: string | undefined;

  /**
   * @public
   * <p>The current time.</p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount: number | undefined;

  /**
   * @public
   * <p>The number of requests recorded.</p>
   */
  SampledCount: number | undefined;

  /**
   * @public
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;
}

/**
 * @public
 */
export interface GetSamplingTargetsRequest {
  /**
   * @public
   * <p>Information about rules that the service is using to sample requests.</p>
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;
}

/**
 * @public
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target for a rule, X-Ray
 *       calculates a new reservoir for each service based on the recent sampling results of all services that called
 *       <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a>.</p>
 */
export interface SamplingTargetDocument {
  /**
   * @public
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * @public
   * <p>The number of requests per second that X-Ray allocated for this service.</p>
   */
  ReservoirQuota?: number;

  /**
   * @public
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date;

  /**
   * @public
   * <p>The number of seconds for the service to wait before getting sampling targets
   *       again.</p>
   */
  Interval?: number;
}

/**
 * @public
 * <p>Sampling statistics from a call to <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingTargets.html">GetSamplingTargets</a> that X-Ray
 *       could not process.</p>
 */
export interface UnprocessedStatistics {
  /**
   * @public
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface GetSamplingTargetsResult {
  /**
   * @public
   * <p>Updated rules that the service should use to sample requests.</p>
   */
  SamplingTargetDocuments?: SamplingTargetDocument[];

  /**
   * @public
   * <p>The last time a user changed the sampling rule configuration. If
   *          the sampling rule configuration changed since the service last retrieved it, the service
   *          should call <a href="https://docs.aws.amazon.com/xray/latest/api/API_GetSamplingRules.html">GetSamplingRules</a> to get the latest version.</p>
   */
  LastRuleModification?: Date;

  /**
   * @public
   * <p>Information about <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingStatisticsDocument.html">SamplingStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   */
  UnprocessedStatistics?: UnprocessedStatistics[];
}

/**
 * @public
 */
export interface GetServiceGraphRequest {
  /**
   * @public
   * <p>The start of the time frame for which to generate a graph.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end of the timeframe for which to generate a graph.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The name of a group based on which you want to generate a graph.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a group based on which you want to generate a graph.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values
 *       on the X axis, and the prevalence of each value on the Y axis.</p>
 */
export interface HistogramEntry {
  /**
   * @public
   * <p>The value of the entry.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>The prevalence of the entry.</p>
   */
  Count?: number;
}

/**
 * @public
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 */
export interface ErrorStatistics {
  /**
   * @public
   * <p>The number of requests that failed with a 419 throttling status code.</p>
   */
  ThrottleCount?: number;

  /**
   * @public
   * <p>The number of requests that failed with untracked 4xx Client Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * @public
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 */
export interface FaultStatistics {
  /**
   * @public
   * <p>The number of requests that failed with untracked 5xx Server Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * @public
   * <p>The total number of requests that failed with a 5xx Server Error status code.</p>
   */
  TotalCount?: number;
}

/**
 * @public
 * <p>Response statistics for an edge.</p>
 */
export interface EdgeStatistics {
  /**
   * @public
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * @public
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * @public
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * @public
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;
}

/**
 * @public
 * <p>Information about a connection between two services. An edge can be a synchronous connection, such as typical
 *     call between client and service, or an asynchronous link, such as a Lambda function which retrieves an event from an
 *     SNS queue.</p>
 */
export interface Edge {
  /**
   * @public
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;

  /**
   * @public
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: EdgeStatistics;

  /**
   * @public
   * <p>A histogram that maps the spread of client response times on an edge. Only populated
   *              for synchronous edges.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * @public
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Alias[];

  /**
   * @public
   * <p>Describes an asynchronous connection, with a value of <code>link</code>.</p>
   */
  EdgeType?: string;

  /**
   * @public
   * <p>A histogram that maps the spread of event age when received by consumers.
   *       Age is calculated each time an event is received. Only populated when <i>EdgeType</i> is
   *       <code>link</code>.</p>
   */
  ReceivedEventAgeHistogram?: HistogramEntry[];
}

/**
 * @public
 * <p>Response statistics for a service.</p>
 */
export interface ServiceStatistics {
  /**
   * @public
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

  /**
   * @public
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * @public
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * @public
   * <p>The total number of completed requests.</p>
   */
  TotalCount?: number;

  /**
   * @public
   * <p>The aggregate response time of completed requests.</p>
   */
  TotalResponseTime?: number;
}

/**
 * @public
 * <p>Information about an application that processed requests, users that made requests, or downstream services,
 *       resources, and applications that an application used.</p>
 */
export interface Service {
  /**
   * @public
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * @public
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>Indicates that the service was the first service to process a request.</p>
   */
  Root?: boolean;

  /**
   * @public
   * <p>Identifier of the Amazon Web Services account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * @public
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
   * @public
   * <p>The service's state.</p>
   */
  State?: string;

  /**
   * @public
   * <p>The start time of the first segment that the service generated.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end time of the last segment that the service generated.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>Connections to downstream services.</p>
   */
  Edges?: Edge[];

  /**
   * @public
   * <p>Aggregated statistics for the service.</p>
   */
  SummaryStatistics?: ServiceStatistics;

  /**
   * @public
   * <p>A histogram that maps the spread of service durations.</p>
   */
  DurationHistogram?: HistogramEntry[];

  /**
   * @public
   * <p>A histogram that maps the spread of service response times.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];
}

/**
 * @public
 */
export interface GetServiceGraphResult {
  /**
   * @public
   * <p>The start of the time frame for which the graph was generated.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The end of the time frame for which the graph was generated.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The services that have processed a traced request during the specified time
   *       frame.</p>
   */
  Services?: Service[];

  /**
   * @public
   * <p>A flag indicating whether the group's filter expression has been consistent, or
   *       if the returned service graph may show traces from an older version of the group's filter
   *       expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsRequest {
  /**
   * @public
   * <p>The start of the time frame for which to aggregate statistics.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time frame for which to aggregate statistics.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>The case-sensitive name of the group for which to pull statistics from.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the group for which to pull statistics from.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>A filter expression defining entities that will be aggregated for statistics.
   *             Supports ID, service, and edge functions. If no selector expression is specified, edge
   *             statistics are returned. </p>
   */
  EntitySelectorExpression?: string;

  /**
   * @public
   * <p>Aggregation period in seconds.</p>
   */
  Period?: number;

  /**
   * @public
   * <p>The forecasted high and low fault count values. Forecast enabled requests require the
   *             EntitySelectorExpression ID be provided.</p>
   */
  ForecastStatistics?: boolean;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The predicted high and low fault count. This is used to determine if a service has
 *          become anomalous and if an insight should be created.</p>
 */
export interface ForecastStatistics {
  /**
   * @public
   * <p>The upper limit of fault counts for a service.</p>
   */
  FaultCountHigh?: number;

  /**
   * @public
   * <p>The lower limit of fault counts for a service.</p>
   */
  FaultCountLow?: number;
}

/**
 * @public
 * <p>A list of TimeSeriesStatistic structures.</p>
 */
export interface TimeSeriesServiceStatistics {
  /**
   * @public
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date;

  /**
   * @public
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: EdgeStatistics;

  /**
   * @public
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: ServiceStatistics;

  /**
   * @public
   * <p>The forecasted high and low fault count values.</p>
   */
  ServiceForecastStatistics?: ForecastStatistics;

  /**
   * @public
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];
}

/**
 * @public
 */
export interface GetTimeSeriesServiceStatisticsResult {
  /**
   * @public
   * <p>The collection of statistics.</p>
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];

  /**
   * @public
   * <p>A flag indicating whether or not a group's filter expression has been consistent, or if a returned
   *             aggregation might show statistics from an older version of the group's filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTraceGraphRequest {
  /**
   * @public
   * <p>Trace IDs of requests for which to generate a service graph.</p>
   */
  TraceIds: string[] | undefined;

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTraceGraphResult {
  /**
   * @public
   * <p>The services that have processed one of the specified requests.</p>
   */
  Services?: Service[];

  /**
   * @public
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const SamplingStrategyName = {
  FixedRate: "FixedRate",
  PartialScan: "PartialScan",
} as const;

/**
 * @public
 */
export type SamplingStrategyName = (typeof SamplingStrategyName)[keyof typeof SamplingStrategyName];

/**
 * @public
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 */
export interface SamplingStrategy {
  /**
   * @public
   * <p>The name of a sampling rule.</p>
   */
  Name?: SamplingStrategyName;

  /**
   * @public
   * <p>The value of a sampling rule.</p>
   */
  Value?: number;
}

/**
 * @public
 * @enum
 */
export const TimeRangeType = {
  Event: "Event",
  Service: "Service",
  TraceId: "TraceId",
} as const;

/**
 * @public
 */
export type TimeRangeType = (typeof TimeRangeType)[keyof typeof TimeRangeType];

/**
 * @public
 */
export interface GetTraceSummariesRequest {
  /**
   * @public
   * <p>The start of the time frame for which to retrieve traces.</p>
   */
  StartTime: Date | undefined;

  /**
   * @public
   * <p>The end of the time frame for which to retrieve traces.</p>
   */
  EndTime: Date | undefined;

  /**
   * @public
   * <p>A parameter to indicate whether to query trace summaries by TraceId, Event (trace update time), or Service (segment end time).</p>
   */
  TimeRangeType?: TimeRangeType;

  /**
   * @public
   * <p>Set to <code>true</code> to get summaries for only a subset of available
   *       traces.</p>
   */
  Sampling?: boolean;

  /**
   * @public
   * <p>A parameter to indicate whether to enable sampling on trace summaries. Input parameters are Name and
   *             Value.</p>
   */
  SamplingStrategy?: SamplingStrategy;

  /**
   * @public
   * <p>Specify a filter expression to retrieve trace summaries for services or requests that
   *       meet certain requirements.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>Specify the pagination token returned by a previous request to retrieve the next page
   *       of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>The exception associated with a root cause.</p>
 */
export interface RootCauseException {
  /**
   * @public
   * <p>The name of the exception.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The message of the exception.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       error.</p>
 */
export interface ErrorRootCauseEntity {
  /**
   * @public
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * @public
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * @public
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 */
export interface ErrorRootCauseService {
  /**
   * @public
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ErrorRootCauseEntity[];

  /**
   * @public
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * @public
 * <p>The root cause of a trace summary error.</p>
 */
export interface ErrorRootCause {
  /**
   * @public
   * <p>A list of services corresponding to an error. A service identifies a segment and it
   *       contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: ErrorRootCauseService[];

  /**
   * @public
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * @public
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       fault error.</p>
 */
export interface FaultRootCauseEntity {
  /**
   * @public
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * @public
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * @public
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 */
export interface FaultRootCauseService {
  /**
   * @public
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: FaultRootCauseEntity[];

  /**
   * @public
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * @public
 * <p>The root cause information for a trace summary fault.</p>
 */
export interface FaultRootCause {
  /**
   * @public
   * <p>A list of corresponding services. A service identifies a segment and it contains a
   *       name, account ID, type, and inferred flag.</p>
   */
  Services?: FaultRootCauseService[];

  /**
   * @public
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * @public
 * <p>Information about an HTTP request.</p>
 */
export interface Http {
  /**
   * @public
   * <p>The request URL.</p>
   */
  HttpURL?: string;

  /**
   * @public
   * <p>The response status.</p>
   */
  HttpStatus?: number;

  /**
   * @public
   * <p>The request method.</p>
   */
  HttpMethod?: string;

  /**
   * @public
   * <p>The request's user agent string.</p>
   */
  UserAgent?: string;

  /**
   * @public
   * <p>The IP address of the requestor.</p>
   */
  ClientIp?: string;
}

/**
 * @public
 * <p>A list of EC2 instance IDs corresponding to the segments in a trace. </p>
 */
export interface InstanceIdDetail {
  /**
   * @public
   * <p>The ID of a corresponding EC2 instance.</p>
   */
  Id?: string;
}

/**
 * @public
 * <p>A list of resources ARNs corresponding to the segments in a trace.</p>
 */
export interface ResourceARNDetail {
  /**
   * @public
   * <p>The ARN of a corresponding resource.</p>
   */
  ARN?: string;
}

/**
 * @public
 * <p>A collection of segments and corresponding subsegments associated to a response time
 *       warning.</p>
 */
export interface ResponseTimeRootCauseEntity {
  /**
   * @public
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type and messages of the exceptions.</p>
   */
  Coverage?: number;

  /**
   * @public
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

/**
 * @public
 * <p>A collection of fields identifying the service in a response time warning.</p>
 */
export interface ResponseTimeRootCauseService {
  /**
   * @public
   * <p>The service name.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A collection of associated service names.</p>
   */
  Names?: string[];

  /**
   * @public
   * <p>The type associated to the service.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The account ID associated to the service.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The path of root cause entities found on the service. </p>
   */
  EntityPath?: ResponseTimeRootCauseEntity[];

  /**
   * @public
   * <p>A Boolean value indicating if the service is inferred from the trace.</p>
   */
  Inferred?: boolean;
}

/**
 * @public
 * <p>The root cause information for a response time warning.</p>
 */
export interface ResponseTimeRootCause {
  /**
   * @public
   * <p>A list of corresponding services. A service identifies a segment and contains a name,
   *       account ID, type, and inferred flag.</p>
   */
  Services?: ResponseTimeRootCauseService[];

  /**
   * @public
   * <p>A flag that denotes that the root cause impacts the trace client.</p>
   */
  ClientImpacting?: boolean;
}

/**
 * @public
 * <p>Information about a user recorded in segment documents.</p>
 */
export interface TraceUser {
  /**
   * @public
   * <p>The user's name.</p>
   */
  UserName?: string;

  /**
   * @public
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: ServiceId[];
}

/**
 * @public
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface TraceSummary {
  /**
   * @public
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The start time of a trace, based on the earliest trace segment start time.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * @public
   * <p>The length of time in seconds between the start and end times of the root segment. If
   *       the service performs work asynchronously, the response time measures the time before the
   *       response is sent to the user, while the duration measures the amount of time before the last
   *       traced activity completes.</p>
   */
  ResponseTime?: number;

  /**
   * @public
   * <p>The root segment document has a 500 series error.</p>
   */
  HasFault?: boolean;

  /**
   * @public
   * <p>The root segment document has a 400 series error.</p>
   */
  HasError?: boolean;

  /**
   * @public
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   */
  HasThrottle?: boolean;

  /**
   * @public
   * <p>One or more of the segment documents is in progress.</p>
   */
  IsPartial?: boolean;

  /**
   * @public
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: Http;

  /**
   * @public
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?: Record<string, ValueWithServiceIds[]>;

  /**
   * @public
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: TraceUser[];

  /**
   * @public
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * @public
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: ResourceARNDetail[];

  /**
   * @public
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace
   *       segments.</p>
   */
  InstanceIds?: InstanceIdDetail[];

  /**
   * @public
   * <p>A list of Availability Zones for any zone corresponding to the trace segments.</p>
   */
  AvailabilityZones?: AvailabilityZoneDetail[];

  /**
   * @public
   * <p>The root of a trace.</p>
   */
  EntryPoint?: ServiceId;

  /**
   * @public
   * <p>A collection of FaultRootCause structures corresponding to the trace segments.</p>
   */
  FaultRootCauses?: FaultRootCause[];

  /**
   * @public
   * <p>A collection of ErrorRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ErrorRootCauses?: ErrorRootCause[];

  /**
   * @public
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ResponseTimeRootCauses?: ResponseTimeRootCause[];

  /**
   * @public
   * <p>The revision number of a trace.</p>
   */
  Revision?: number;

  /**
   * @public
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date;
}

/**
 * @public
 */
export interface GetTraceSummariesResult {
  /**
   * @public
   * <p>Trace IDs and annotations for traces that were found in the specified time
   *       frame.</p>
   */
  TraceSummaries?: TraceSummary[];

  /**
   * @public
   * <p>The start time of this page of results.</p>
   */
  ApproximateTime?: Date;

  /**
   * @public
   * <p>The total number of traces processed, including traces that did not match the specified
   *       filter expression.</p>
   */
  TracesProcessedCount?: number;

  /**
   * @public
   * <p>If the requested time frame contained more than one page of results, you can use this token to retrieve the
   *       next page. The first page contains the most recent results, closest to the end of the time frame.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * @public
   * <p>Not currently supported.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>A resource policy grants one or more Amazon Web Services services and accounts permissions
 *             to access X-Ray. Each resource policy is associated with a
 *             specific Amazon Web Services account.</p>
 */
export interface ResourcePolicy {
  /**
   * @public
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   */
  PolicyName?: string;

  /**
   * @public
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   */
  PolicyDocument?: string;

  /**
   * @public
   * <p>Returns the current policy revision id for this policy name.</p>
   */
  PolicyRevisionId?: string;

  /**
   * @public
   * <p>When the policy was last updated, in Unix time seconds.</p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface ListResourcePoliciesResult {
  /**
   * @public
   * <p>The list of resource policies in the target Amazon Web Services account.</p>
   */
  ResourcePolicies?: ResourcePolicy[];

  /**
   * @public
   * <p>Pagination token. Not currently supported.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *     the current page of results as the value of this parameter to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *       the current page of results to get the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
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

/**
 * @public
 */
export interface PutEncryptionConfigRequest {
  /**
   * @public
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
   * @public
   * <p>The type of encryption. Set to <code>KMS</code> to use your own key for encryption. Set
   *       to <code>NONE</code> for default encryption.</p>
   */
  Type: EncryptionType | undefined;
}

/**
 * @public
 */
export interface PutEncryptionConfigResult {
  /**
   * @public
   * <p>The new encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

/**
 * @public
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
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * @public
   * <p>The name of the resource policy. Must be unique within a specific Amazon Web Services account.</p>
   */
  PolicyName: string | undefined;

  /**
   * @public
   * <p>The resource policy document, which can be up to 5kb in size.</p>
   */
  PolicyDocument: string | undefined;

  /**
   * @public
   * <p>Specifies a specific policy revision, to ensure an atomic create operation. By default the resource policy is created if it does not exist, or updated with an incremented revision id.
   *             The revision id is unique to each policy in the account.</p>
   *          <p>If the policy revision id does not match the latest revision id, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception. You can also provide a
   *             <code>PolicyRevisionId</code> of 0. In this case, the operation will fail with an <code>InvalidPolicyRevisionIdException</code> exception if a resource policy with the same name already exists.
   *         </p>
   */
  PolicyRevisionId?: string;

  /**
   * @public
   * <p>A flag to indicate whether to bypass the resource policy lockout safety check.</p>
   *          <important>
   *             <p>Setting this value to true increases the risk that the policy becomes unmanageable. Do not set this value to true indiscriminately.</p>
   *          </important>
   *          <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <code>PutResourcePolicy</code> request.</p>
   *          <p>The default value is false.</p>
   */
  BypassPolicyLockoutCheck?: boolean;
}

/**
 * @public
 */
export interface PutResourcePolicyResult {
  /**
   * @public
   * <p>The resource policy document, as provided in the <code>PutResourcePolicyRequest</code>.</p>
   */
  ResourcePolicy?: ResourcePolicy;
}

/**
 * @public
 * <p></p>
 */
export interface BackendConnectionErrors {
  /**
   * @public
   * <p></p>
   */
  TimeoutCount?: number;

  /**
   * @public
   * <p></p>
   */
  ConnectionRefusedCount?: number;

  /**
   * @public
   * <p></p>
   */
  HTTPCode4XXCount?: number;

  /**
   * @public
   * <p></p>
   */
  HTTPCode5XXCount?: number;

  /**
   * @public
   * <p></p>
   */
  UnknownHostCount?: number;

  /**
   * @public
   * <p></p>
   */
  OtherCount?: number;
}

/**
 * @public
 * <p></p>
 */
export interface TelemetryRecord {
  /**
   * @public
   * <p></p>
   */
  Timestamp: Date | undefined;

  /**
   * @public
   * <p></p>
   */
  SegmentsReceivedCount?: number;

  /**
   * @public
   * <p></p>
   */
  SegmentsSentCount?: number;

  /**
   * @public
   * <p></p>
   */
  SegmentsSpilloverCount?: number;

  /**
   * @public
   * <p></p>
   */
  SegmentsRejectedCount?: number;

  /**
   * @public
   * <p></p>
   */
  BackendConnectionErrors?: BackendConnectionErrors;
}

/**
 * @public
 */
export interface PutTelemetryRecordsRequest {
  /**
   * @public
   * <p></p>
   */
  TelemetryRecords: TelemetryRecord[] | undefined;

  /**
   * @public
   * <p></p>
   */
  EC2InstanceId?: string;

  /**
   * @public
   * <p></p>
   */
  Hostname?: string;

  /**
   * @public
   * <p></p>
   */
  ResourceARN?: string;
}

/**
 * @public
 */
export interface PutTelemetryRecordsResult {}

/**
 * @public
 */
export interface PutTraceSegmentsRequest {
  /**
   * @public
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   */
  TraceSegmentDocuments: string[] | undefined;
}

/**
 * @public
 * <p>Information about a segment that failed processing.</p>
 */
export interface UnprocessedTraceSegment {
  /**
   * @public
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The error that caused processing to fail.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface PutTraceSegmentsResult {
  /**
   * @public
   * <p>Segments that failed processing.</p>
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
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

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
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

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateGroupRequest {
  /**
   * @public
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;

  /**
   * @public
   * <p>The ARN that was generated upon creation.</p>
   */
  GroupARN?: string;

  /**
   * @public
   * <p>The updated filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * @public
   * <p>The structure containing configurations related to insights.</p>
   *          <ul>
   *             <li>
   *                <p>The InsightsEnabled boolean can be set to true to enable insights for the
   *                     group or false to disable insights for the group.</p>
   *             </li>
   *             <li>
   *                <p>The NotificationsEnabled boolean can be set to true to enable insights notifications for the group.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

/**
 * @public
 */
export interface UpdateGroupResult {
  /**
   * @public
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, the updated filter expression, and the updated insight
   *             configuration assigned to the group.</p>
   */
  Group?: Group;
}

/**
 * @public
 * <p>A document specifying changes to a sampling rule's configuration.</p>
 */
export interface SamplingRuleUpdate {
  /**
   * @public
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * @public
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * @public
   * <p>Matches the ARN of the Amazon Web Services resource on which the service runs.</p>
   */
  ResourceARN?: string;

  /**
   * @public
   * <p>The priority of the sampling rule.</p>
   */
  Priority?: number;

  /**
   * @public
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * @public
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize?: number;

  /**
   * @public
   * <p>Matches the hostname from a request URL.</p>
   */
  Host?: string;

  /**
   * @public
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName?: string;

  /**
   * @public
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType?: string;

  /**
   * @public
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod?: string;

  /**
   * @public
   * <p>Matches the path from a request URL.</p>
   */
  URLPath?: string;

  /**
   * @public
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateSamplingRuleRequest {
  /**
   * @public
   * <p>The rule and fields to change.</p>
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

/**
 * @public
 */
export interface UpdateSamplingRuleResult {
  /**
   * @public
   * <p>The updated rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}
