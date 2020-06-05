import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An alias for an edge.</p>
 */
export interface Alias {
  __type?: "Alias";
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
  export const filterSensitiveLog = (obj: Alias): any => ({
    ...obj
  });
  export const isa = (o: any): o is Alias => __isa(o, "Alias");
}

/**
 * <p>Value of a segment annotation. Has one of three value types: Number, Boolean or
 *       String.</p>
 */
export interface AnnotationValue {
  __type?: "AnnotationValue";
  /**
   * <p>Value for a Boolean annotation.</p>
   */
  BooleanValue?: boolean;

  /**
   * <p>Value for a Number annotation.</p>
   */
  NumberValue?: number;

  /**
   * <p>Value for a String annotation.</p>
   */
  StringValue?: string;
}

export namespace AnnotationValue {
  export const filterSensitiveLog = (obj: AnnotationValue): any => ({
    ...obj
  });
  export const isa = (o: any): o is AnnotationValue =>
    __isa(o, "AnnotationValue");
}

/**
 * <p>A list of availability zones corresponding to the segments in a trace.</p>
 */
export interface AvailabilityZoneDetail {
  __type?: "AvailabilityZoneDetail";
  /**
   * <p>The name of a corresponding availability zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZoneDetail {
  export const filterSensitiveLog = (obj: AvailabilityZoneDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZoneDetail =>
    __isa(o, "AvailabilityZoneDetail");
}

/**
 * <p></p>
 */
export interface BackendConnectionErrors {
  __type?: "BackendConnectionErrors";
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
  OtherCount?: number;

  /**
   * <p></p>
   */
  TimeoutCount?: number;

  /**
   * <p></p>
   */
  UnknownHostCount?: number;
}

export namespace BackendConnectionErrors {
  export const filterSensitiveLog = (obj: BackendConnectionErrors): any => ({
    ...obj
  });
  export const isa = (o: any): o is BackendConnectionErrors =>
    __isa(o, "BackendConnectionErrors");
}

export interface BatchGetTracesRequest {
  __type?: "BatchGetTracesRequest";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Specify the trace IDs of requests for which to retrieve segments.</p>
   */
  TraceIds: string[] | undefined;
}

export namespace BatchGetTracesRequest {
  export const filterSensitiveLog = (obj: BatchGetTracesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetTracesRequest =>
    __isa(o, "BatchGetTracesRequest");
}

export interface BatchGetTracesResult {
  __type?: "BatchGetTracesResult";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Full traces for the specified requests.</p>
   */
  Traces?: Trace[];

  /**
   * <p>Trace IDs of requests that haven't been processed.</p>
   */
  UnprocessedTraceIds?: string[];
}

export namespace BatchGetTracesResult {
  export const filterSensitiveLog = (obj: BatchGetTracesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetTracesResult =>
    __isa(o, "BatchGetTracesResult");
}

export interface CreateGroupRequest {
  __type?: "CreateGroupRequest";
  /**
   * <p>The filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The case-sensitive name of the new group. Default is a reserved name and names must
   *             be unique.</p>
   */
  GroupName: string | undefined;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupRequest =>
    __isa(o, "CreateGroupRequest");
}

export interface CreateGroupResult {
  __type?: "CreateGroupResult";
  /**
   * <p>The group that was created. Contains the name of the group that was created, the
   *             ARN of the group that was generated based on the group name, and the filter expression
   *             that was assigned to the group.</p>
   */
  Group?: Group;
}

export namespace CreateGroupResult {
  export const filterSensitiveLog = (obj: CreateGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGroupResult =>
    __isa(o, "CreateGroupResult");
}

export interface CreateSamplingRuleRequest {
  __type?: "CreateSamplingRuleRequest";
  /**
   * <p>The rule definition.</p>
   */
  SamplingRule: SamplingRule | undefined;
}

export namespace CreateSamplingRuleRequest {
  export const filterSensitiveLog = (obj: CreateSamplingRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSamplingRuleRequest =>
    __isa(o, "CreateSamplingRuleRequest");
}

export interface CreateSamplingRuleResult {
  __type?: "CreateSamplingRuleResult";
  /**
   * <p>The saved rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace CreateSamplingRuleResult {
  export const filterSensitiveLog = (obj: CreateSamplingRuleResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSamplingRuleResult =>
    __isa(o, "CreateSamplingRuleResult");
}

export interface DeleteGroupRequest {
  __type?: "DeleteGroupRequest";
  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;

  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupRequest =>
    __isa(o, "DeleteGroupRequest");
}

export interface DeleteGroupResult {
  __type?: "DeleteGroupResult";
}

export namespace DeleteGroupResult {
  export const filterSensitiveLog = (obj: DeleteGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteGroupResult =>
    __isa(o, "DeleteGroupResult");
}

export interface DeleteSamplingRuleRequest {
  __type?: "DeleteSamplingRuleRequest";
  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;
}

export namespace DeleteSamplingRuleRequest {
  export const filterSensitiveLog = (obj: DeleteSamplingRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSamplingRuleRequest =>
    __isa(o, "DeleteSamplingRuleRequest");
}

export interface DeleteSamplingRuleResult {
  __type?: "DeleteSamplingRuleResult";
  /**
   * <p>The deleted rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace DeleteSamplingRuleResult {
  export const filterSensitiveLog = (obj: DeleteSamplingRuleResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSamplingRuleResult =>
    __isa(o, "DeleteSamplingRuleResult");
}

/**
 * <p>Information about a connection between two services.</p>
 */
export interface Edge {
  __type?: "Edge";
  /**
   * <p>Aliases for the edge.</p>
   */
  Aliases?: Alias[];

  /**
   * <p>The end time of the last segment on the edge.</p>
   */
  EndTime?: Date;

  /**
   * <p>Identifier of the edge. Unique within a service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>A histogram that maps the spread of client response times on an edge.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>The start time of the first segment on the edge.</p>
   */
  StartTime?: Date;

  /**
   * <p>Response statistics for segments on the edge.</p>
   */
  SummaryStatistics?: EdgeStatistics;
}

export namespace Edge {
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj
  });
  export const isa = (o: any): o is Edge => __isa(o, "Edge");
}

/**
 * <p>Response statistics for an edge.</p>
 */
export interface EdgeStatistics {
  __type?: "EdgeStatistics";
  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

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
  export const filterSensitiveLog = (obj: EdgeStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is EdgeStatistics =>
    __isa(o, "EdgeStatistics");
}

/**
 * <p>A configuration document that specifies encryption configuration settings.</p>
 */
export interface EncryptionConfig {
  __type?: "EncryptionConfig";
  /**
   * <p>The ID of the customer master key (CMK) used for encryption, if applicable.</p>
   */
  KeyId?: string;

  /**
   * <p>The encryption status. While the status is <code>UPDATING</code>, X-Ray may encrypt data with a combination of the new and old settings.</p>
   */
  Status?: EncryptionStatus | string;

  /**
   * <p>The type of encryption. Set to <code>KMS</code> for encryption with CMKs. Set to <code>NONE</code> for
   *       default encryption.</p>
   */
  Type?: EncryptionType | string;
}

export namespace EncryptionConfig {
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionConfig =>
    __isa(o, "EncryptionConfig");
}

export enum EncryptionStatus {
  ACTIVE = "ACTIVE",
  UPDATING = "UPDATING"
}

export enum EncryptionType {
  KMS = "KMS",
  NONE = "NONE"
}

/**
 * <p>The root cause of a trace summary error.</p>
 */
export interface ErrorRootCause {
  __type?: "ErrorRootCause";
  /**
   * <p>A list of services corresponding to an error. A service identifies a segment and it
   *       contains a name, account ID, type, and inferred flag.</p>
   */
  Services?: ErrorRootCauseService[];
}

export namespace ErrorRootCause {
  export const filterSensitiveLog = (obj: ErrorRootCause): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorRootCause =>
    __isa(o, "ErrorRootCause");
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       error.</p>
 */
export interface ErrorRootCauseEntity {
  __type?: "ErrorRootCauseEntity";
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export namespace ErrorRootCauseEntity {
  export const filterSensitiveLog = (obj: ErrorRootCauseEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorRootCauseEntity =>
    __isa(o, "ErrorRootCauseEntity");
}

/**
 * <p>A collection of fields identifying the services in a trace summary error.</p>
 */
export interface ErrorRootCauseService {
  __type?: "ErrorRootCauseService";
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
}

export namespace ErrorRootCauseService {
  export const filterSensitiveLog = (obj: ErrorRootCauseService): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorRootCauseService =>
    __isa(o, "ErrorRootCauseService");
}

/**
 * <p>Information about requests that failed with a 4xx Client Error status code.</p>
 */
export interface ErrorStatistics {
  __type?: "ErrorStatistics";
  /**
   * <p>The number of requests that failed with untracked 4xx Client Error status
   *       codes.</p>
   */
  OtherCount?: number;

  /**
   * <p>The number of requests that failed with a 419 throttling status code.</p>
   */
  ThrottleCount?: number;

  /**
   * <p>The total number of requests that failed with a 4xx Client Error status code.</p>
   */
  TotalCount?: number;
}

export namespace ErrorStatistics {
  export const filterSensitiveLog = (obj: ErrorStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorStatistics =>
    __isa(o, "ErrorStatistics");
}

/**
 * <p>The root cause information for a trace summary fault.</p>
 */
export interface FaultRootCause {
  __type?: "FaultRootCause";
  /**
   * <p>A list of corresponding services. A service identifies a segment and it contains a
   *       name, account ID, type, and inferred flag.</p>
   */
  Services?: FaultRootCauseService[];
}

export namespace FaultRootCause {
  export const filterSensitiveLog = (obj: FaultRootCause): any => ({
    ...obj
  });
  export const isa = (o: any): o is FaultRootCause =>
    __isa(o, "FaultRootCause");
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a trace summary
 *       fault error.</p>
 */
export interface FaultRootCauseEntity {
  __type?: "FaultRootCauseEntity";
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Exceptions?: RootCauseException[];

  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export namespace FaultRootCauseEntity {
  export const filterSensitiveLog = (obj: FaultRootCauseEntity): any => ({
    ...obj
  });
  export const isa = (o: any): o is FaultRootCauseEntity =>
    __isa(o, "FaultRootCauseEntity");
}

/**
 * <p>A collection of fields identifying the services in a trace summary fault.</p>
 */
export interface FaultRootCauseService {
  __type?: "FaultRootCauseService";
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
}

export namespace FaultRootCauseService {
  export const filterSensitiveLog = (obj: FaultRootCauseService): any => ({
    ...obj
  });
  export const isa = (o: any): o is FaultRootCauseService =>
    __isa(o, "FaultRootCauseService");
}

/**
 * <p>Information about requests that failed with a 5xx Server Error status code.</p>
 */
export interface FaultStatistics {
  __type?: "FaultStatistics";
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
  export const filterSensitiveLog = (obj: FaultStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is FaultStatistics =>
    __isa(o, "FaultStatistics");
}

export interface GetEncryptionConfigRequest {
  __type?: "GetEncryptionConfigRequest";
}

export namespace GetEncryptionConfigRequest {
  export const filterSensitiveLog = (obj: GetEncryptionConfigRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEncryptionConfigRequest =>
    __isa(o, "GetEncryptionConfigRequest");
}

export interface GetEncryptionConfigResult {
  __type?: "GetEncryptionConfigResult";
  /**
   * <p>The encryption configuration document.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace GetEncryptionConfigResult {
  export const filterSensitiveLog = (obj: GetEncryptionConfigResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEncryptionConfigResult =>
    __isa(o, "GetEncryptionConfigResult");
}

export interface GetGroupRequest {
  __type?: "GetGroupRequest";
  /**
   * <p>The ARN of the group that was generated on creation.</p>
   */
  GroupARN?: string;

  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupRequest =>
    __isa(o, "GetGroupRequest");
}

export interface GetGroupResult {
  __type?: "GetGroupResult";
  /**
   * <p>The group that was requested. Contains the name of the group, the ARN of the group,
   *             and the filter expression that assigned to the group.</p>
   */
  Group?: Group;
}

export namespace GetGroupResult {
  export const filterSensitiveLog = (obj: GetGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupResult =>
    __isa(o, "GetGroupResult");
}

export interface GetGroupsRequest {
  __type?: "GetGroupsRequest";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetGroupsRequest {
  export const filterSensitiveLog = (obj: GetGroupsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupsRequest =>
    __isa(o, "GetGroupsRequest");
}

export interface GetGroupsResult {
  __type?: "GetGroupsResult";
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
  export const filterSensitiveLog = (obj: GetGroupsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetGroupsResult =>
    __isa(o, "GetGroupsResult");
}

export interface GetSamplingRulesRequest {
  __type?: "GetSamplingRulesRequest";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingRulesRequest {
  export const filterSensitiveLog = (obj: GetSamplingRulesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingRulesRequest =>
    __isa(o, "GetSamplingRulesRequest");
}

export interface GetSamplingRulesResult {
  __type?: "GetSamplingRulesResult";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Rule definitions and metadata.</p>
   */
  SamplingRuleRecords?: SamplingRuleRecord[];
}

export namespace GetSamplingRulesResult {
  export const filterSensitiveLog = (obj: GetSamplingRulesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingRulesResult =>
    __isa(o, "GetSamplingRulesResult");
}

export interface GetSamplingStatisticSummariesRequest {
  __type?: "GetSamplingStatisticSummariesRequest";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;
}

export namespace GetSamplingStatisticSummariesRequest {
  export const filterSensitiveLog = (
    obj: GetSamplingStatisticSummariesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingStatisticSummariesRequest =>
    __isa(o, "GetSamplingStatisticSummariesRequest");
}

export interface GetSamplingStatisticSummariesResult {
  __type?: "GetSamplingStatisticSummariesResult";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the number of requests instrumented for each sampling
   *          rule.</p>
   */
  SamplingStatisticSummaries?: SamplingStatisticSummary[];
}

export namespace GetSamplingStatisticSummariesResult {
  export const filterSensitiveLog = (
    obj: GetSamplingStatisticSummariesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingStatisticSummariesResult =>
    __isa(o, "GetSamplingStatisticSummariesResult");
}

export interface GetSamplingTargetsRequest {
  __type?: "GetSamplingTargetsRequest";
  /**
   * <p>Information about rules that the service is using to sample requests.</p>
   */
  SamplingStatisticsDocuments: SamplingStatisticsDocument[] | undefined;
}

export namespace GetSamplingTargetsRequest {
  export const filterSensitiveLog = (obj: GetSamplingTargetsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingTargetsRequest =>
    __isa(o, "GetSamplingTargetsRequest");
}

export interface GetSamplingTargetsResult {
  __type?: "GetSamplingTargetsResult";
  /**
   * <p>The last time a user changed the sampling rule configuration. If
   *          the sampling rule configuration changed since the service last retrieved it, the service
   *          should call <a>GetSamplingRules</a> to get the latest version.</p>
   */
  LastRuleModification?: Date;

  /**
   * <p>Updated rules that the service should use to sample requests.</p>
   */
  SamplingTargetDocuments?: SamplingTargetDocument[];

  /**
   * <p>Information about <a>SamplingStatisticsDocument</a> that X-Ray could not
   *          process.</p>
   */
  UnprocessedStatistics?: UnprocessedStatistics[];
}

export namespace GetSamplingTargetsResult {
  export const filterSensitiveLog = (obj: GetSamplingTargetsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSamplingTargetsResult =>
    __isa(o, "GetSamplingTargetsResult");
}

export interface GetServiceGraphRequest {
  __type?: "GetServiceGraphRequest";
  /**
   * <p>The end of the timeframe for which to generate a graph.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>The ARN of a group to generate a graph based on.</p>
   */
  GroupARN?: string;

  /**
   * <p>The name of a group to generate a graph based on.</p>
   */
  GroupName?: string;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The start of the time frame for which to generate a graph.</p>
   */
  StartTime: Date | undefined;
}

export namespace GetServiceGraphRequest {
  export const filterSensitiveLog = (obj: GetServiceGraphRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceGraphRequest =>
    __isa(o, "GetServiceGraphRequest");
}

export interface GetServiceGraphResult {
  __type?: "GetServiceGraphResult";
  /**
   * <p>A flag indicating whether the group's filter expression has been consistent, or
   *       if the returned service graph may show traces from an older version of the group's filter
   *       expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>The end of the time frame for which the graph was generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The services that have processed a traced request during the specified time
   *       frame.</p>
   */
  Services?: Service[];

  /**
   * <p>The start of the time frame for which the graph was generated.</p>
   */
  StartTime?: Date;
}

export namespace GetServiceGraphResult {
  export const filterSensitiveLog = (obj: GetServiceGraphResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetServiceGraphResult =>
    __isa(o, "GetServiceGraphResult");
}

export interface GetTimeSeriesServiceStatisticsRequest {
  __type?: "GetTimeSeriesServiceStatisticsRequest";
  /**
   * <p>The end of the time frame for which to aggregate statistics.</p>
   */
  EndTime: Date | undefined;

  /**
   * <p>A filter expression defining entities that will be aggregated for statistics.
   *             Supports ID, service, and edge functions. If no selector expression is specified, edge
   *             statistics are returned. </p>
   */
  EntitySelectorExpression?: string;

  /**
   * <p>The ARN of the group for which to pull statistics from.</p>
   */
  GroupARN?: string;

  /**
   * <p>The case-sensitive name of the group for which to pull statistics from.</p>
   */
  GroupName?: string;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Aggregation period in seconds.</p>
   */
  Period?: number;

  /**
   * <p>The start of the time frame for which to aggregate statistics.</p>
   */
  StartTime: Date | undefined;
}

export namespace GetTimeSeriesServiceStatisticsRequest {
  export const filterSensitiveLog = (
    obj: GetTimeSeriesServiceStatisticsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTimeSeriesServiceStatisticsRequest =>
    __isa(o, "GetTimeSeriesServiceStatisticsRequest");
}

export interface GetTimeSeriesServiceStatisticsResult {
  __type?: "GetTimeSeriesServiceStatisticsResult";
  /**
   * <p>A flag indicating whether or not a group's filter expression has been consistent,
   *             or if a returned aggregation may show statistics from an older version of the group's
   *             filter expression.</p>
   */
  ContainsOldGroupVersions?: boolean;

  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The collection of statistics.</p>
   */
  TimeSeriesServiceStatistics?: TimeSeriesServiceStatistics[];
}

export namespace GetTimeSeriesServiceStatisticsResult {
  export const filterSensitiveLog = (
    obj: GetTimeSeriesServiceStatisticsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTimeSeriesServiceStatisticsResult =>
    __isa(o, "GetTimeSeriesServiceStatisticsResult");
}

export interface GetTraceGraphRequest {
  __type?: "GetTraceGraphRequest";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>Trace IDs of requests for which to generate a service graph.</p>
   */
  TraceIds: string[] | undefined;
}

export namespace GetTraceGraphRequest {
  export const filterSensitiveLog = (obj: GetTraceGraphRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTraceGraphRequest =>
    __isa(o, "GetTraceGraphRequest");
}

export interface GetTraceGraphResult {
  __type?: "GetTraceGraphResult";
  /**
   * <p>Pagination token.</p>
   */
  NextToken?: string;

  /**
   * <p>The services that have processed one of the specified requests.</p>
   */
  Services?: Service[];
}

export namespace GetTraceGraphResult {
  export const filterSensitiveLog = (obj: GetTraceGraphResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTraceGraphResult =>
    __isa(o, "GetTraceGraphResult");
}

export interface GetTraceSummariesRequest {
  __type?: "GetTraceSummariesRequest";
  /**
   * <p>The end of the time frame for which to retrieve traces.</p>
   */
  EndTime: Date | undefined;

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

  /**
   * <p>Set to <code>true</code> to get summaries for only a subset of available
   *       traces.</p>
   */
  Sampling?: boolean;

  /**
   * <p>A paramater to indicate whether to enable sampling on trace summaries. Input
   *         parameters are Name and Value.</p>
   */
  SamplingStrategy?: SamplingStrategy;

  /**
   * <p>The start of the time frame for which to retrieve traces.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>A parameter to indicate whether to query trace summaries by TraceId or Event time.</p>
   */
  TimeRangeType?: TimeRangeType | string;
}

export namespace GetTraceSummariesRequest {
  export const filterSensitiveLog = (obj: GetTraceSummariesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTraceSummariesRequest =>
    __isa(o, "GetTraceSummariesRequest");
}

export interface GetTraceSummariesResult {
  __type?: "GetTraceSummariesResult";
  /**
   * <p>The start time of this page of results.</p>
   */
  ApproximateTime?: Date;

  /**
   * <p>If the requested time frame contained more than one page of results, you can use this
   *       token to retrieve the next page. The first page contains the most most recent results, closest
   *       to the end of the time frame.</p>
   */
  NextToken?: string;

  /**
   * <p>Trace IDs and annotations for traces that were found in the specified time
   *       frame.</p>
   */
  TraceSummaries?: TraceSummary[];

  /**
   * <p>The total number of traces processed, including traces that did not match the specified
   *       filter expression.</p>
   */
  TracesProcessedCount?: number;
}

export namespace GetTraceSummariesResult {
  export const filterSensitiveLog = (obj: GetTraceSummariesResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTraceSummariesResult =>
    __isa(o, "GetTraceSummariesResult");
}

/**
 * <p>Details and metadata for a group.</p>
 */
export interface Group {
  __type?: "Group";
  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj
  });
  export const isa = (o: any): o is Group => __isa(o, "Group");
}

/**
 * <p>Details for a group without metadata.</p>
 */
export interface GroupSummary {
  __type?: "GroupSummary";
  /**
   * <p>The filter expression defining the parameters to include traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The ARN of the group generated based on the GroupName.</p>
   */
  GroupARN?: string;

  /**
   * <p>The unique case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace GroupSummary {
  export const filterSensitiveLog = (obj: GroupSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is GroupSummary => __isa(o, "GroupSummary");
}

/**
 * <p>An entry in a histogram for a statistic. A histogram maps the range of observed values
 *       on the X axis, and the prevalence of each value on the Y axis.</p>
 */
export interface HistogramEntry {
  __type?: "HistogramEntry";
  /**
   * <p>The prevalence of the entry.</p>
   */
  Count?: number;

  /**
   * <p>The value of the entry.</p>
   */
  Value?: number;
}

export namespace HistogramEntry {
  export const filterSensitiveLog = (obj: HistogramEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is HistogramEntry =>
    __isa(o, "HistogramEntry");
}

/**
 * <p>Information about an HTTP request.</p>
 */
export interface Http {
  __type?: "Http";
  /**
   * <p>The IP address of the requestor.</p>
   */
  ClientIp?: string;

  /**
   * <p>The request method.</p>
   */
  HttpMethod?: string;

  /**
   * <p>The response status.</p>
   */
  HttpStatus?: number;

  /**
   * <p>The request URL.</p>
   */
  HttpURL?: string;

  /**
   * <p>The request's user agent string.</p>
   */
  UserAgent?: string;
}

export namespace Http {
  export const filterSensitiveLog = (obj: Http): any => ({
    ...obj
  });
  export const isa = (o: any): o is Http => __isa(o, "Http");
}

/**
 * <p>A list of EC2 instance IDs corresponding to the segments in a trace. </p>
 */
export interface InstanceIdDetail {
  __type?: "InstanceIdDetail";
  /**
   * <p>The ID of a corresponding EC2 instance.</p>
   */
  Id?: string;
}

export namespace InstanceIdDetail {
  export const filterSensitiveLog = (obj: InstanceIdDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceIdDetail =>
    __isa(o, "InstanceIdDetail");
}

/**
 * <p>The request is missing required parameters or has invalid parameters.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

export interface PutEncryptionConfigRequest {
  __type?: "PutEncryptionConfigRequest";
  /**
   * <p>An AWS KMS customer master key (CMK) in one of the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Alias</b> - The name of the key. For example,
   *             <code>alias/MyKey</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Key ID</b> - The KMS key ID of the key. For example,
   *           <code>ae4aa6d49-a4d8-9df9-a475-4ff6d7898456</code>. AWS X-Ray does not support asymmetric CMKs.</p>
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
  export const filterSensitiveLog = (obj: PutEncryptionConfigRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEncryptionConfigRequest =>
    __isa(o, "PutEncryptionConfigRequest");
}

export interface PutEncryptionConfigResult {
  __type?: "PutEncryptionConfigResult";
  /**
   * <p>The new encryption configuration.</p>
   */
  EncryptionConfig?: EncryptionConfig;
}

export namespace PutEncryptionConfigResult {
  export const filterSensitiveLog = (obj: PutEncryptionConfigResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutEncryptionConfigResult =>
    __isa(o, "PutEncryptionConfigResult");
}

export interface PutTelemetryRecordsRequest {
  __type?: "PutTelemetryRecordsRequest";
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

  /**
   * <p></p>
   */
  TelemetryRecords: TelemetryRecord[] | undefined;
}

export namespace PutTelemetryRecordsRequest {
  export const filterSensitiveLog = (obj: PutTelemetryRecordsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTelemetryRecordsRequest =>
    __isa(o, "PutTelemetryRecordsRequest");
}

export interface PutTelemetryRecordsResult {
  __type?: "PutTelemetryRecordsResult";
}

export namespace PutTelemetryRecordsResult {
  export const filterSensitiveLog = (obj: PutTelemetryRecordsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTelemetryRecordsResult =>
    __isa(o, "PutTelemetryRecordsResult");
}

export interface PutTraceSegmentsRequest {
  __type?: "PutTraceSegmentsRequest";
  /**
   * <p>A string containing a JSON document defining one or more segments or
   *       subsegments.</p>
   */
  TraceSegmentDocuments: string[] | undefined;
}

export namespace PutTraceSegmentsRequest {
  export const filterSensitiveLog = (obj: PutTraceSegmentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTraceSegmentsRequest =>
    __isa(o, "PutTraceSegmentsRequest");
}

export interface PutTraceSegmentsResult {
  __type?: "PutTraceSegmentsResult";
  /**
   * <p>Segments that failed processing.</p>
   */
  UnprocessedTraceSegments?: UnprocessedTraceSegment[];
}

export namespace PutTraceSegmentsResult {
  export const filterSensitiveLog = (obj: PutTraceSegmentsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutTraceSegmentsResult =>
    __isa(o, "PutTraceSegmentsResult");
}

/**
 * <p>A list of resources ARNs corresponding to the segments in a trace.</p>
 */
export interface ResourceARNDetail {
  __type?: "ResourceARNDetail";
  /**
   * <p>The ARN of a corresponding resource.</p>
   */
  ARN?: string;
}

export namespace ResourceARNDetail {
  export const filterSensitiveLog = (obj: ResourceARNDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceARNDetail =>
    __isa(o, "ResourceARNDetail");
}

/**
 * <p>The root cause information for a response time warning.</p>
 */
export interface ResponseTimeRootCause {
  __type?: "ResponseTimeRootCause";
  /**
   * <p>A list of corresponding services. A service identifies a segment and contains a name,
   *       account ID, type, and inferred flag.</p>
   */
  Services?: ResponseTimeRootCauseService[];
}

export namespace ResponseTimeRootCause {
  export const filterSensitiveLog = (obj: ResponseTimeRootCause): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponseTimeRootCause =>
    __isa(o, "ResponseTimeRootCause");
}

/**
 * <p>A collection of segments and corresponding subsegments associated to a response time
 *       warning.</p>
 */
export interface ResponseTimeRootCauseEntity {
  __type?: "ResponseTimeRootCauseEntity";
  /**
   * <p>The types and messages of the exceptions.</p>
   */
  Coverage?: number;

  /**
   * <p>The name of the entity.</p>
   */
  Name?: string;

  /**
   * <p>A flag that denotes a remote subsegment.</p>
   */
  Remote?: boolean;
}

export namespace ResponseTimeRootCauseEntity {
  export const filterSensitiveLog = (
    obj: ResponseTimeRootCauseEntity
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponseTimeRootCauseEntity =>
    __isa(o, "ResponseTimeRootCauseEntity");
}

/**
 * <p>A collection of fields identifying the service in a response time warning.</p>
 */
export interface ResponseTimeRootCauseService {
  __type?: "ResponseTimeRootCauseService";
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
}

export namespace ResponseTimeRootCauseService {
  export const filterSensitiveLog = (
    obj: ResponseTimeRootCauseService
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResponseTimeRootCauseService =>
    __isa(o, "ResponseTimeRootCauseService");
}

/**
 * <p>The exception associated with a root cause.</p>
 */
export interface RootCauseException {
  __type?: "RootCauseException";
  /**
   * <p>The message of the exception.</p>
   */
  Message?: string;

  /**
   * <p>The name of the exception.</p>
   */
  Name?: string;
}

export namespace RootCauseException {
  export const filterSensitiveLog = (obj: RootCauseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RootCauseException =>
    __isa(o, "RootCauseException");
}

/**
 * <p>You have reached the maximum number of sampling rules.</p>
 */
export interface RuleLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "RuleLimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace RuleLimitExceededException {
  export const filterSensitiveLog = (obj: RuleLimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is RuleLimitExceededException =>
    __isa(o, "RuleLimitExceededException");
}

/**
 * <p>A sampling rule that services use to decide whether to instrument a request. Rule
 *       fields can match properties of the service, or properties of a request. The service can ignore
 *       rules that don't match its properties.</p>
 */
export interface SamplingRule {
  __type?: "SamplingRule";
  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate: number | undefined;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod: string | undefined;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host: string | undefined;

  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority: number | undefined;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize: number | undefined;

  /**
   * <p>Matches the ARN of the AWS resource on which the service runs.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType: string | undefined;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath: string | undefined;

  /**
   * <p>The version of the sampling rule format (<code>1</code>).</p>
   */
  Version: number | undefined;
}

export namespace SamplingRule {
  export const filterSensitiveLog = (obj: SamplingRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingRule => __isa(o, "SamplingRule");
}

/**
 * <p>A <a>SamplingRule</a> and its metadata.</p>
 */
export interface SamplingRuleRecord {
  __type?: "SamplingRuleRecord";
  /**
   * <p>When the rule was created.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>When the rule was last modified.</p>
   */
  ModifiedAt?: Date;

  /**
   * <p>The sampling rule.</p>
   */
  SamplingRule?: SamplingRule;
}

export namespace SamplingRuleRecord {
  export const filterSensitiveLog = (obj: SamplingRuleRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingRuleRecord =>
    __isa(o, "SamplingRuleRecord");
}

/**
 * <p>A document specifying changes to a sampling rule's configuration.</p>
 */
export interface SamplingRuleUpdate {
  __type?: "SamplingRuleUpdate";
  /**
   * <p>Matches attributes derived from the request.</p>
   */
  Attributes?: { [key: string]: string };

  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>Matches the HTTP method of a request.</p>
   */
  HTTPMethod?: string;

  /**
   * <p>Matches the hostname from a request URL.</p>
   */
  Host?: string;

  /**
   * <p>The priority of the sampling rule.</p>
   */
  Priority?: number;

  /**
   * <p>A fixed number of matching requests to instrument per second, prior to applying the
   *       fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.</p>
   */
  ReservoirSize?: number;

  /**
   * <p>Matches the ARN of the AWS resource on which the service runs.</p>
   */
  ResourceARN?: string;

  /**
   * <p>The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleARN?: string;

  /**
   * <p>The name of the sampling rule. Specify a rule by either name or ARN, but not both.</p>
   */
  RuleName?: string;

  /**
   * <p>Matches the <code>name</code> that the service uses to identify itself in segments.</p>
   */
  ServiceName?: string;

  /**
   * <p>Matches the <code>origin</code> that the service uses to identify its type in segments.</p>
   */
  ServiceType?: string;

  /**
   * <p>Matches the path from a request URL.</p>
   */
  URLPath?: string;
}

export namespace SamplingRuleUpdate {
  export const filterSensitiveLog = (obj: SamplingRuleUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingRuleUpdate =>
    __isa(o, "SamplingRuleUpdate");
}

/**
 * <p>Request sampling results for a single rule from a service. Results are for the last 10
 *       seconds unless the service has been assigned a longer reporting interval after a previous call
 *       to <a>GetSamplingTargets</a>.</p>
 */
export interface SamplingStatisticsDocument {
  __type?: "SamplingStatisticsDocument";
  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>A unique identifier for the service in hexadecimal.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount: number | undefined;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName: string | undefined;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount: number | undefined;

  /**
   * <p>The current time.</p>
   */
  Timestamp: Date | undefined;
}

export namespace SamplingStatisticsDocument {
  export const filterSensitiveLog = (obj: SamplingStatisticsDocument): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingStatisticsDocument =>
    __isa(o, "SamplingStatisticsDocument");
}

/**
 * <p>Aggregated request sampling data for a sampling rule across all services for a 10
 *       second window.</p>
 */
export interface SamplingStatisticSummary {
  __type?: "SamplingStatisticSummary";
  /**
   * <p>The number of requests recorded with borrowed reservoir quota.</p>
   */
  BorrowCount?: number;

  /**
   * <p>The number of requests that matched the rule.</p>
   */
  RequestCount?: number;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;

  /**
   * <p>The number of requests recorded.</p>
   */
  SampledCount?: number;

  /**
   * <p>The start time of the reporting window.</p>
   */
  Timestamp?: Date;
}

export namespace SamplingStatisticSummary {
  export const filterSensitiveLog = (obj: SamplingStatisticSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingStatisticSummary =>
    __isa(o, "SamplingStatisticSummary");
}

/**
 * <p>The name and value of a sampling rule to apply to a trace summary.</p>
 */
export interface SamplingStrategy {
  __type?: "SamplingStrategy";
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
  export const filterSensitiveLog = (obj: SamplingStrategy): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingStrategy =>
    __isa(o, "SamplingStrategy");
}

export enum SamplingStrategyName {
  FixedRate = "FixedRate",
  PartialScan = "PartialScan"
}

/**
 * <p>Temporary changes to a sampling rule configuration. To meet the global sampling target
 *       for a rule, X-Ray calculates a new reservoir for each service based on the recent sampling
 *       results of all services that called <a>GetSamplingTargets</a>.</p>
 */
export interface SamplingTargetDocument {
  __type?: "SamplingTargetDocument";
  /**
   * <p>The percentage of matching requests to instrument, after the reservoir is
   *       exhausted.</p>
   */
  FixedRate?: number;

  /**
   * <p>The number of seconds for the service to wait before getting sampling targets
   *       again.</p>
   */
  Interval?: number;

  /**
   * <p>The number of requests per second that X-Ray allocated this service.</p>
   */
  ReservoirQuota?: number;

  /**
   * <p>When the reservoir quota expires.</p>
   */
  ReservoirQuotaTTL?: Date;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;
}

export namespace SamplingTargetDocument {
  export const filterSensitiveLog = (obj: SamplingTargetDocument): any => ({
    ...obj
  });
  export const isa = (o: any): o is SamplingTargetDocument =>
    __isa(o, "SamplingTargetDocument");
}

/**
 * <p>A segment from a trace that has been ingested by the X-Ray service. The segment can be
 *       compiled from documents uploaded with <a>PutTraceSegments</a>, or an
 *         <code>inferred</code> segment for a downstream service, generated from a subsegment sent by
 *       the service that called it.</p>
 *          <p>For the full segment document schema, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-api-segmentdocuments.html">AWS X-Ray Segment
 *         Documents</a> in the <i>AWS X-Ray Developer Guide</i>.</p>
 */
export interface Segment {
  __type?: "Segment";
  /**
   * <p>The segment document.</p>
   */
  Document?: string;

  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;
}

export namespace Segment {
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Segment => __isa(o, "Segment");
}

/**
 * <p>Information about an application that processed requests, users that made requests, or
 *       downstream services, resources and applications that an application used.</p>
 */
export interface Service {
  __type?: "Service";
  /**
   * <p>Identifier of the AWS account in which the service runs.</p>
   */
  AccountId?: string;

  /**
   * <p>A histogram that maps the spread of service durations.</p>
   */
  DurationHistogram?: HistogramEntry[];

  /**
   * <p>Connections to downstream services.</p>
   */
  Edges?: Edge[];

  /**
   * <p>The end time of the last segment that the service generated.</p>
   */
  EndTime?: Date;

  /**
   * <p>The canonical name of the service.</p>
   */
  Name?: string;

  /**
   * <p>A list of names for the service, including the canonical name.</p>
   */
  Names?: string[];

  /**
   * <p>Identifier for the service. Unique within the service map.</p>
   */
  ReferenceId?: number;

  /**
   * <p>A histogram that maps the spread of service response times.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Indicates that the service was the first service to process a request.</p>
   */
  Root?: boolean;

  /**
   * <p>The start time of the first segment that the service generated.</p>
   */
  StartTime?: Date;

  /**
   * <p>The service's state.</p>
   */
  State?: string;

  /**
   * <p>Aggregated statistics for the service.</p>
   */
  SummaryStatistics?: ServiceStatistics;

  /**
   * <p>The type of service.</p>
   *          <ul>
   *             <li>
   *                <p>AWS Resource - The type of an AWS resource. For example,
   *             <code>AWS::EC2::Instance</code> for a application running on Amazon EC2 or
   *             <code>AWS::DynamoDB::Table</code> for an Amazon DynamoDB table that the application
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>AWS Service - The type of an AWS service. For example, <code>AWS::DynamoDB</code>
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
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj
  });
  export const isa = (o: any): o is Service => __isa(o, "Service");
}

/**
 * <p></p>
 */
export interface ServiceId {
  __type?: "ServiceId";
  /**
   * <p></p>
   */
  AccountId?: string;

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
  Type?: string;
}

export namespace ServiceId {
  export const filterSensitiveLog = (obj: ServiceId): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceId => __isa(o, "ServiceId");
}

/**
 * <p>Response statistics for a service.</p>
 */
export interface ServiceStatistics {
  __type?: "ServiceStatistics";
  /**
   * <p>Information about requests that failed with a 4xx Client Error status code.</p>
   */
  ErrorStatistics?: ErrorStatistics;

  /**
   * <p>Information about requests that failed with a 5xx Server Error status code.</p>
   */
  FaultStatistics?: FaultStatistics;

  /**
   * <p>The number of requests that completed with a 2xx Success status code.</p>
   */
  OkCount?: number;

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
  export const filterSensitiveLog = (obj: ServiceStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceStatistics =>
    __isa(o, "ServiceStatistics");
}

/**
 * <p></p>
 */
export interface TelemetryRecord {
  __type?: "TelemetryRecord";
  /**
   * <p></p>
   */
  BackendConnectionErrors?: BackendConnectionErrors;

  /**
   * <p></p>
   */
  SegmentsReceivedCount?: number;

  /**
   * <p></p>
   */
  SegmentsRejectedCount?: number;

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
  Timestamp: Date | undefined;
}

export namespace TelemetryRecord {
  export const filterSensitiveLog = (obj: TelemetryRecord): any => ({
    ...obj
  });
  export const isa = (o: any): o is TelemetryRecord =>
    __isa(o, "TelemetryRecord");
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
  export const filterSensitiveLog = (obj: ThrottledException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ThrottledException =>
    __isa(o, "ThrottledException");
}

export enum TimeRangeType {
  Event = "Event",
  TraceId = "TraceId"
}

/**
 * <p>A list of TimeSeriesStatistic structures.</p>
 */
export interface TimeSeriesServiceStatistics {
  __type?: "TimeSeriesServiceStatistics";
  /**
   * <p>Response statistics for an edge.</p>
   */
  EdgeSummaryStatistics?: EdgeStatistics;

  /**
   * <p>The response time histogram for the selected entities.</p>
   */
  ResponseTimeHistogram?: HistogramEntry[];

  /**
   * <p>Response statistics for a service.</p>
   */
  ServiceSummaryStatistics?: ServiceStatistics;

  /**
   * <p>Timestamp of the window for which statistics are aggregated.</p>
   */
  Timestamp?: Date;
}

export namespace TimeSeriesServiceStatistics {
  export const filterSensitiveLog = (
    obj: TimeSeriesServiceStatistics
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TimeSeriesServiceStatistics =>
    __isa(o, "TimeSeriesServiceStatistics");
}

/**
 * <p>A collection of segment documents with matching trace IDs.</p>
 */
export interface Trace {
  __type?: "Trace";
  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>Segment documents for the segments and subsegments that comprise the trace.</p>
   */
  Segments?: Segment[];
}

export namespace Trace {
  export const filterSensitiveLog = (obj: Trace): any => ({
    ...obj
  });
  export const isa = (o: any): o is Trace => __isa(o, "Trace");
}

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface TraceSummary {
  __type?: "TraceSummary";
  /**
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?: { [key: string]: ValueWithServiceIds[] };

  /**
   * <p>A list of availability zones for any zone corresponding to the trace
   *       segments.</p>
   */
  AvailabilityZones?: AvailabilityZoneDetail[];

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end
   *       time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * <p>The root of a trace.</p>
   */
  EntryPoint?: ServiceId;

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace
   *       segments.</p>
   */
  ErrorRootCauses?: ErrorRootCause[];

  /**
   * <p>A collection of FaultRootCause structures corresponding to the the trace
   *       segments.</p>
   */
  FaultRootCauses?: FaultRootCause[];

  /**
   * <p>The root segment document has a 400 series error.</p>
   */
  HasError?: boolean;

  /**
   * <p>The root segment document has a 500 series error.</p>
   */
  HasFault?: boolean;

  /**
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   */
  HasThrottle?: boolean;

  /**
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: Http;

  /**
   * <p>The unique identifier for the request that generated the trace's segments and
   *       subsegments.</p>
   */
  Id?: string;

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace
   *       segments.</p>
   */
  InstanceIds?: InstanceIdDetail[];

  /**
   * <p>One or more of the segment documents is in progress.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date;

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: ResourceARNDetail[];

  /**
   * <p>The length of time in seconds between the start and end times of the root segment. If
   *       the service performs work asynchronously, the response time measures the time before the
   *       response is sent to the user, while the duration measures the amount of time before the last
   *       traced activity completes.</p>
   */
  ResponseTime?: number;

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
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: TraceUser[];
}

export namespace TraceSummary {
  export const filterSensitiveLog = (obj: TraceSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is TraceSummary => __isa(o, "TraceSummary");
}

/**
 * <p>Information about a user recorded in segment documents.</p>
 */
export interface TraceUser {
  __type?: "TraceUser";
  /**
   * <p>Services that the user's request hit.</p>
   */
  ServiceIds?: ServiceId[];

  /**
   * <p>The user's name.</p>
   */
  UserName?: string;
}

export namespace TraceUser {
  export const filterSensitiveLog = (obj: TraceUser): any => ({
    ...obj
  });
  export const isa = (o: any): o is TraceUser => __isa(o, "TraceUser");
}

/**
 * <p>Sampling statistics from a call to <a>GetSamplingTargets</a> that X-Ray
 *       could not process.</p>
 */
export interface UnprocessedStatistics {
  __type?: "UnprocessedStatistics";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;

  /**
   * <p>The name of the sampling rule.</p>
   */
  RuleName?: string;
}

export namespace UnprocessedStatistics {
  export const filterSensitiveLog = (obj: UnprocessedStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnprocessedStatistics =>
    __isa(o, "UnprocessedStatistics");
}

/**
 * <p>Information about a segment that failed processing.</p>
 */
export interface UnprocessedTraceSegment {
  __type?: "UnprocessedTraceSegment";
  /**
   * <p>The error that caused processing to fail.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The segment's ID.</p>
   */
  Id?: string;

  /**
   * <p>The error message.</p>
   */
  Message?: string;
}

export namespace UnprocessedTraceSegment {
  export const filterSensitiveLog = (obj: UnprocessedTraceSegment): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnprocessedTraceSegment =>
    __isa(o, "UnprocessedTraceSegment");
}

export interface UpdateGroupRequest {
  __type?: "UpdateGroupRequest";
  /**
   * <p>The updated filter expression defining criteria by which to group traces.</p>
   */
  FilterExpression?: string;

  /**
   * <p>The ARN that was generated upon creation.</p>
   */
  GroupARN?: string;

  /**
   * <p>The case-sensitive name of the group.</p>
   */
  GroupName?: string;
}

export namespace UpdateGroupRequest {
  export const filterSensitiveLog = (obj: UpdateGroupRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGroupRequest =>
    __isa(o, "UpdateGroupRequest");
}

export interface UpdateGroupResult {
  __type?: "UpdateGroupResult";
  /**
   * <p>The group that was updated. Contains the name of the group that was updated, the
   *             ARN of the group that was updated, and the updated filter expression assigned to the
   *             group.</p>
   */
  Group?: Group;
}

export namespace UpdateGroupResult {
  export const filterSensitiveLog = (obj: UpdateGroupResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGroupResult =>
    __isa(o, "UpdateGroupResult");
}

export interface UpdateSamplingRuleRequest {
  __type?: "UpdateSamplingRuleRequest";
  /**
   * <p>The rule and fields to change.</p>
   */
  SamplingRuleUpdate: SamplingRuleUpdate | undefined;
}

export namespace UpdateSamplingRuleRequest {
  export const filterSensitiveLog = (obj: UpdateSamplingRuleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSamplingRuleRequest =>
    __isa(o, "UpdateSamplingRuleRequest");
}

export interface UpdateSamplingRuleResult {
  __type?: "UpdateSamplingRuleResult";
  /**
   * <p>The updated rule definition and metadata.</p>
   */
  SamplingRuleRecord?: SamplingRuleRecord;
}

export namespace UpdateSamplingRuleResult {
  export const filterSensitiveLog = (obj: UpdateSamplingRuleResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateSamplingRuleResult =>
    __isa(o, "UpdateSamplingRuleResult");
}

/**
 * <p>Information about a segment annotation.</p>
 */
export interface ValueWithServiceIds {
  __type?: "ValueWithServiceIds";
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
  export const filterSensitiveLog = (obj: ValueWithServiceIds): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValueWithServiceIds =>
    __isa(o, "ValueWithServiceIds");
}
