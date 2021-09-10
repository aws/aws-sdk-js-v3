import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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

export namespace Alias {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alias): any => ({
    ...obj,
  });
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

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnnotationValue): any => {
    if (obj.NumberValue !== undefined) return { NumberValue: obj.NumberValue };
    if (obj.BooleanValue !== undefined) return { BooleanValue: obj.BooleanValue };
    if (obj.StringValue !== undefined) return { StringValue: obj.StringValue };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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

export namespace ServiceId {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceId): any => ({
    ...obj,
  });
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

export namespace ValueWithServiceIds {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValueWithServiceIds): any => ({
    ...obj,
    ...(obj.AnnotationValue && { AnnotationValue: AnnotationValue.filterSensitiveLog(obj.AnnotationValue) }),
  });
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

export namespace AnomalousService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AnomalousService): any => ({
    ...obj,
  });
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

export namespace AvailabilityZoneDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZoneDetail): any => ({
    ...obj,
  });
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

export namespace BatchGetTracesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetTracesRequest): any => ({
    ...obj,
  });
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

export namespace Segment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj,
  });
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
   * <p>LimitExceeded is set to true when the trace has exceeded one of the defined quotas. For
   *       more information about quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/xray.html">Amazon Web Services X-Ray endpoints and quotas</a>.</p>
   */
  LimitExceeded?: boolean;

  /**
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   */
  Segments?: Segment[];
}

export namespace Trace {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Trace): any => ({
    ...obj,
  });
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

export namespace BatchGetTracesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetTracesResult): any => ({
    ...obj,
  });
}

/**
 * <p>The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeds the maximum number of requests per second.</p>
 */
export interface ThrottledException extends __SmithyException, $MetadataBearer {
  name: "ThrottledException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottledException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottledException): any => ({
    ...obj,
  });
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

export namespace InsightsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightsConfiguration): any => ({
    ...obj,
  });
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

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
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
   *                     <p>The NotifcationsEnabled boolean can be set to true to enable insights
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

export namespace CreateGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
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

export namespace Group {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

export interface CreateGroupResult {
  /**
   * <p>The group that was created. Contains the name of the group that was created, the Amazon Resource Name
   *             (ARN) of the group that was generated based on the group name, the filter expression, and the insight
   *             configuration that was assigned to the group.</p>
   */
  Group?: Group;
}

export namespace CreateGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGroupResult): any => ({
    ...obj,
  });
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
  Attributes?: { [key: string]: string };
}

export namespace SamplingRule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingRule): any => ({
    ...obj,
  });
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

export namespace CreateSamplingRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSamplingRuleRequest): any => ({
    ...obj,
  });
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

export namespace SamplingRuleRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingRuleRecord): any => ({
    ...obj,
  });
}

export interface CreateSamplingRuleResult {
  /**
   * <p>The saved rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace CreateSamplingRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSamplingRuleResult): any => ({
    ...obj,
  });
}

/**
 * <p>You have reached the maximum number of sampling rules.</p>
 */
export interface RuleLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "RuleLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace RuleLimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RuleLimitExceededException): any => ({
    ...obj,
  });
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

export namespace DeleteGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupResult {}

export namespace DeleteGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGroupResult): any => ({
    ...obj,
  });
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

export namespace DeleteSamplingRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSamplingRuleRequest): any => ({
    ...obj,
  });
}

export interface DeleteSamplingRuleResult {
  /**
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace DeleteSamplingRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSamplingRuleResult): any => ({
    ...obj,
  });
}

export interface GetEncryptionConfigRequest {}

export namespace GetEncryptionConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEncryptionConfigRequest): any => ({
    ...obj,
  });
}

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

export namespace EncryptionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj,
  });
}

export interface GetEncryptionConfigResult {
  /**
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace GetEncryptionConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEncryptionConfigResult): any => ({
    ...obj,
  });
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

export namespace GetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj,
  });
}

export interface GetGroupResult {
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             the filter expression, and the insight configuration assigned to the group.</p>
   */
  Group?: Group;
}

export namespace GetGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGroupResult): any => ({
    ...obj,
  });
}

export interface GetGroupsRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGroupsRequest): any => ({
    ...obj,
  });
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

export namespace GroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupSummary): any => ({
    ...obj,
  });
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

export namespace GetGroupsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetGroupsResult): any => ({
    ...obj,
  });
}

export interface GetInsightRequest {
  /**
   * <p>The insight's unique identifier. Use the GetInsightSummaries action to retrieve an InsightId.</p>
   */
  InsightId: string | undefined;
}

export namespace GetInsightRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightRequest): any => ({
    ...obj,
  });
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

export namespace RequestImpactStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RequestImpactStatistics): any => ({
    ...obj,
  });
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

export namespace Insight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Insight): any => ({
    ...obj,
  });
}

export interface GetInsightResult {
  /**
   * <p>The summary information of an insight.</p>
   */
  Insight?: Insight;
}

export namespace GetInsightResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightResult): any => ({
    ...obj,
  });
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

export namespace GetInsightEventsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightEventsRequest): any => ({
    ...obj,
  });
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

export namespace InsightEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightEvent): any => ({
    ...obj,
  });
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

export namespace GetInsightEventsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightEventsResult): any => ({
    ...obj,
  });
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

export namespace GetInsightImpactGraphRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightImpactGraphRequest): any => ({
    ...obj,
  });
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

export namespace InsightImpactGraphEdge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightImpactGraphEdge): any => ({
    ...obj,
  });
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

export namespace InsightImpactGraphService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightImpactGraphService): any => ({
    ...obj,
  });
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

export namespace GetInsightImpactGraphResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightImpactGraphResult): any => ({
    ...obj,
  });
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

export namespace GetInsightSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightSummariesRequest): any => ({
    ...obj,
  });
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

export namespace InsightSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InsightSummary): any => ({
    ...obj,
  });
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

export namespace GetInsightSummariesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInsightSummariesResult): any => ({
    ...obj,
  });
}

export interface GetSamplingRulesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingRulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingRulesRequest): any => ({
    ...obj,
  });
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

export namespace GetSamplingRulesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingRulesResult): any => ({
    ...obj,
  });
}

export interface GetSamplingStatisticSummariesRequest {
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingStatisticSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingStatisticSummariesRequest): any => ({
    ...obj,
  });
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

export namespace SamplingStatisticSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingStatisticSummary): any => ({
    ...obj,
  });
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

export namespace GetSamplingStatisticSummariesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingStatisticSummariesResult): any => ({
    ...obj,
  });
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

export namespace SamplingStatisticsDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingStatisticsDocument): any => ({
    ...obj,
  });
}

export interface GetSamplingTargetsRequest {
  /**
   * <p>Information about rules that the service is using to sample requests.</p>
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;
}

export namespace GetSamplingTargetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingTargetsRequest): any => ({
    ...obj,
  });
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

export namespace SamplingTargetDocument {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingTargetDocument): any => ({
    ...obj,
  });
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

export namespace UnprocessedStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessedStatistics): any => ({
    ...obj,
  });
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

export namespace GetSamplingTargetsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSamplingTargetsResult): any => ({
    ...obj,
  });
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

export namespace GetServiceGraphRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceGraphRequest): any => ({
    ...obj,
  });
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

export namespace HistogramEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HistogramEntry): any => ({
    ...obj,
  });
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

export namespace ErrorStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorStatistics): any => ({
    ...obj,
  });
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

export namespace FaultStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FaultStatistics): any => ({
    ...obj,
  });
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

export namespace EdgeStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a connection between two services.</p>
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
   * <p>A histogram that maps the spread of client response times on an edge.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Alias[];
}

export namespace Edge {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj,
  });
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

export namespace ServiceStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceStatistics): any => ({
    ...obj,
  });
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

export namespace Service {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
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

export namespace GetServiceGraphResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceGraphResult): any => ({
    ...obj,
  });
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

export namespace GetTimeSeriesServiceStatisticsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTimeSeriesServiceStatisticsRequest): any => ({
    ...obj,
  });
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

export namespace ForecastStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForecastStatistics): any => ({
    ...obj,
  });
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

export namespace TimeSeriesServiceStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeSeriesServiceStatistics): any => ({
    ...obj,
  });
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

export namespace GetTimeSeriesServiceStatisticsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTimeSeriesServiceStatisticsResult): any => ({
    ...obj,
  });
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

export namespace GetTraceGraphRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTraceGraphRequest): any => ({
    ...obj,
  });
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

export namespace GetTraceGraphResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTraceGraphResult): any => ({
    ...obj,
  });
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

export namespace SamplingStrategy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingStrategy): any => ({
    ...obj,
  });
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

export namespace GetTraceSummariesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTraceSummariesRequest): any => ({
    ...obj,
  });
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

export namespace RootCauseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RootCauseException): any => ({
    ...obj,
  });
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

export namespace ErrorRootCauseEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorRootCauseEntity): any => ({
    ...obj,
  });
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

export namespace ErrorRootCauseService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorRootCauseService): any => ({
    ...obj,
  });
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

export namespace ErrorRootCause {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorRootCause): any => ({
    ...obj,
  });
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

export namespace FaultRootCauseEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FaultRootCauseEntity): any => ({
    ...obj,
  });
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

export namespace FaultRootCauseService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FaultRootCauseService): any => ({
    ...obj,
  });
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

export namespace FaultRootCause {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FaultRootCause): any => ({
    ...obj,
  });
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

export namespace Http {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Http): any => ({
    ...obj,
  });
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

export namespace InstanceIdDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InstanceIdDetail): any => ({
    ...obj,
  });
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

export namespace ResourceARNDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceARNDetail): any => ({
    ...obj,
  });
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

export namespace ResponseTimeRootCauseEntity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseTimeRootCauseEntity): any => ({
    ...obj,
  });
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

export namespace ResponseTimeRootCauseService {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseTimeRootCauseService): any => ({
    ...obj,
  });
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

export namespace ResponseTimeRootCause {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseTimeRootCause): any => ({
    ...obj,
  });
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

export namespace TraceUser {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TraceUser): any => ({
    ...obj,
  });
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
  Annotations?: { [key: string]: ValueWithServiceIds[] };

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

export namespace TraceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TraceSummary): any => ({
    ...obj,
    ...(obj.Annotations && {
      Annotations: Object.entries(obj.Annotations).reduce(
        (acc: any, [key, value]: [string, ValueWithServiceIds[]]) => ({
          ...acc,
          [key]: value.map((item) => ValueWithServiceIds.filterSensitiveLog(item)),
        }),
        {}
      ),
    }),
  });
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

export namespace GetTraceSummariesResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTraceSummariesResult): any => ({
    ...obj,
  });
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
   * <p>A list of tags, as key and value pairs, that is associated with the specified X-Ray group or sampling rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A pagination token. If multiple pages of results are returned, use the <code>NextToken</code> value returned with
   *       the current page of results to get the next page of results.</p>
   */
  NextToken?: string;
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource was not found. Verify that the name or Amazon Resource Name (ARN) of the resource is
 *       correct.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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

export namespace PutEncryptionConfigRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEncryptionConfigRequest): any => ({
    ...obj,
  });
}

export interface PutEncryptionConfigResult {
  /**
   * <p>The new encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace PutEncryptionConfigResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutEncryptionConfigResult): any => ({
    ...obj,
  });
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

export namespace BackendConnectionErrors {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackendConnectionErrors): any => ({
    ...obj,
  });
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

export namespace TelemetryRecord {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TelemetryRecord): any => ({
    ...obj,
  });
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

export namespace PutTelemetryRecordsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutTelemetryRecordsRequest): any => ({
    ...obj,
  });
}

export interface PutTelemetryRecordsResult {}

export namespace PutTelemetryRecordsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutTelemetryRecordsResult): any => ({
    ...obj,
  });
}

export interface PutTraceSegmentsRequest {
  /**
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   */
  TraceSegmentDocuments: string[] | undefined;
}

export namespace PutTraceSegmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutTraceSegmentsRequest): any => ({
    ...obj,
  });
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

export namespace UnprocessedTraceSegment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnprocessedTraceSegment): any => ({
    ...obj,
  });
}

export interface PutTraceSegmentsResult {
  /**
   * <p>Segments that failed processing.</p>
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}

export namespace PutTraceSegmentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutTraceSegmentsResult): any => ({
    ...obj,
  });
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

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You have exceeded the maximum number of tags you can apply to this resource.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  Message?: string;
  ResourceName?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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
   *                 <p>The NotifcationsEnabled boolean can be set to true to enable insights notifications for the group.
   *                     Notifications can only be enabled on a group with InsightsEnabled set to true.</p>
   *             </li>
   *          </ul>
   */
  InsightsConfiguration?: InsightsConfiguration;
}

export namespace UpdateGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateGroupResult {
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, the updated filter expression, and the updated insight
   *             configuration assigned to the group.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGroupResult): any => ({
    ...obj,
  });
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
  Attributes?: { [key: string]: string };
}

export namespace SamplingRuleUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SamplingRuleUpdate): any => ({
    ...obj,
  });
}

export interface UpdateSamplingRuleRequest {
  /**
   * <p>The rule and fields to change.</p>
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

export namespace UpdateSamplingRuleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSamplingRuleRequest): any => ({
    ...obj,
  });
}

export interface UpdateSamplingRuleResult {
  /**
   * <p>The updated rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace UpdateSamplingRuleResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSamplingRuleResult): any => ({
    ...obj,
  });
}
