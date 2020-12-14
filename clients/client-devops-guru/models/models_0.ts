import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface InsightHealth {
  MeanTimeToRecoverInMilliseconds?: number;
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}

export namespace InsightHealth {
  export const filterSensitiveLog = (obj: InsightHealth): any => ({
    ...obj,
  });
}

export interface CloudFormationHealth {
  Insight?: InsightHealth;
  StackName?: string;
}

export namespace CloudFormationHealth {
  export const filterSensitiveLog = (obj: CloudFormationHealth): any => ({
    ...obj,
  });
}

export interface CloudWatchMetricsDimension {
  Name?: string;
  Value?: string;
}

export namespace CloudWatchMetricsDimension {
  export const filterSensitiveLog = (obj: CloudWatchMetricsDimension): any => ({
    ...obj,
  });
}

export enum CloudWatchMetricsStat {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum",
  p50 = "p50",
  p90 = "p90",
  p99 = "p99",
}

export interface CloudWatchMetricsDetail {
  Dimensions?: CloudWatchMetricsDimension[];
  MetricName?: string;
  Namespace?: string;
  Period?: number;
  Stat?: CloudWatchMetricsStat | string;
  Unit?: string;
}

export namespace CloudWatchMetricsDetail {
  export const filterSensitiveLog = (obj: CloudWatchMetricsDetail): any => ({
    ...obj,
  });
}

export enum EventDataSource {
  AWS_CLOUD_TRAIL = "AWS_CLOUD_TRAIL",
  AWS_CODE_DEPLOY = "AWS_CODE_DEPLOY",
}

export enum EventClass {
  CONFIG_CHANGE = "CONFIG_CHANGE",
  DEPLOYMENT = "DEPLOYMENT",
  INFRASTRUCTURE = "INFRASTRUCTURE",
  SCHEMA_CHANGE = "SCHEMA_CHANGE",
  SECURITY_CHANGE = "SECURITY_CHANGE",
}

export interface CloudFormationCollection {
  StackNames?: string[];
}

export namespace CloudFormationCollection {
  export const filterSensitiveLog = (obj: CloudFormationCollection): any => ({
    ...obj,
  });
}

export interface ResourceCollection {
  CloudFormation?: CloudFormationCollection;
}

export namespace ResourceCollection {
  export const filterSensitiveLog = (obj: ResourceCollection): any => ({
    ...obj,
  });
}

export interface EventResource {
  Arn?: string;
  Name?: string;
  Type?: string;
}

export namespace EventResource {
  export const filterSensitiveLog = (obj: EventResource): any => ({
    ...obj,
  });
}

export interface Event {
  DataSource?: EventDataSource | string;
  EventClass?: EventClass | string;
  EventSource?: string;
  Id?: string;
  Name?: string;
  ResourceCollection?: ResourceCollection;
  Resources?: EventResource[];
  Time?: Date;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

export enum InsightSeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum InsightStatus {
  CLOSED = "CLOSED",
  ONGOING = "ONGOING",
}

export interface SnsChannelConfig {
  TopicArn?: string;
}

export namespace SnsChannelConfig {
  export const filterSensitiveLog = (obj: SnsChannelConfig): any => ({
    ...obj,
  });
}

export interface NotificationChannelConfig {
  Sns: SnsChannelConfig | undefined;
}

export namespace NotificationChannelConfig {
  export const filterSensitiveLog = (obj: NotificationChannelConfig): any => ({
    ...obj,
  });
}

export interface NotificationChannel {
  Config?: NotificationChannelConfig;
  Id?: string;
}

export namespace NotificationChannel {
  export const filterSensitiveLog = (obj: NotificationChannel): any => ({
    ...obj,
  });
}

export interface AnomalyTimeRange {
  EndTime?: Date;
  StartTime: Date | undefined;
}

export namespace AnomalyTimeRange {
  export const filterSensitiveLog = (obj: AnomalyTimeRange): any => ({
    ...obj,
  });
}

export interface PredictionTimeRange {
  EndTime?: Date;
  StartTime: Date | undefined;
}

export namespace PredictionTimeRange {
  export const filterSensitiveLog = (obj: PredictionTimeRange): any => ({
    ...obj,
  });
}

export enum AnomalySeverity {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export interface AnomalySourceDetails {
  CloudWatchMetrics?: CloudWatchMetricsDetail[];
}

export namespace AnomalySourceDetails {
  export const filterSensitiveLog = (obj: AnomalySourceDetails): any => ({
    ...obj,
  });
}

export enum AnomalyStatus {
  CLOSED = "CLOSED",
  ONGOING = "ONGOING",
}

export interface ProactiveAnomalySummary {
  AnomalyTimeRange?: AnomalyTimeRange;
  AssociatedInsightId?: string;
  Id?: string;
  Limit?: number;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  Severity?: AnomalySeverity | string;
  SourceDetails?: AnomalySourceDetails;
  Status?: AnomalyStatus | string;
  UpdateTime?: Date;
}

export namespace ProactiveAnomalySummary {
  export const filterSensitiveLog = (obj: ProactiveAnomalySummary): any => ({
    ...obj,
  });
}

export interface InsightTimeRange {
  EndTime?: Date;
  StartTime: Date | undefined;
}

export namespace InsightTimeRange {
  export const filterSensitiveLog = (obj: InsightTimeRange): any => ({
    ...obj,
  });
}

export interface ProactiveInsightSummary {
  Id?: string;
  InsightTimeRange?: InsightTimeRange;
  Name?: string;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  Severity?: InsightSeverity | string;
  Status?: InsightStatus | string;
}

export namespace ProactiveInsightSummary {
  export const filterSensitiveLog = (obj: ProactiveInsightSummary): any => ({
    ...obj,
  });
}

export interface ReactiveAnomalySummary {
  AnomalyTimeRange?: AnomalyTimeRange;
  AssociatedInsightId?: string;
  Id?: string;
  ResourceCollection?: ResourceCollection;
  Severity?: AnomalySeverity | string;
  SourceDetails?: AnomalySourceDetails;
  Status?: AnomalyStatus | string;
}

export namespace ReactiveAnomalySummary {
  export const filterSensitiveLog = (obj: ReactiveAnomalySummary): any => ({
    ...obj,
  });
}

export interface ReactiveInsightSummary {
  Id?: string;
  InsightTimeRange?: InsightTimeRange;
  Name?: string;
  ResourceCollection?: ResourceCollection;
  Severity?: InsightSeverity | string;
  Status?: InsightStatus | string;
}

export namespace ReactiveInsightSummary {
  export const filterSensitiveLog = (obj: ReactiveInsightSummary): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedAnomalyResource {
  Name?: string;
  Type?: string;
}

export namespace RecommendationRelatedAnomalyResource {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalyResource): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedCloudWatchMetricsSourceDetail {
  MetricName?: string;
  Namespace?: string;
}

export namespace RecommendationRelatedCloudWatchMetricsSourceDetail {
  export const filterSensitiveLog = (obj: RecommendationRelatedCloudWatchMetricsSourceDetail): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedAnomalySourceDetail {
  CloudWatchMetrics?: RecommendationRelatedCloudWatchMetricsSourceDetail[];
}

export namespace RecommendationRelatedAnomalySourceDetail {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomalySourceDetail): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedAnomaly {
  Resources?: RecommendationRelatedAnomalyResource[];
  SourceDetails?: RecommendationRelatedAnomalySourceDetail[];
}

export namespace RecommendationRelatedAnomaly {
  export const filterSensitiveLog = (obj: RecommendationRelatedAnomaly): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedEventResource {
  Name?: string;
  Type?: string;
}

export namespace RecommendationRelatedEventResource {
  export const filterSensitiveLog = (obj: RecommendationRelatedEventResource): any => ({
    ...obj,
  });
}

export interface RecommendationRelatedEvent {
  Name?: string;
  Resources?: RecommendationRelatedEventResource[];
}

export namespace RecommendationRelatedEvent {
  export const filterSensitiveLog = (obj: RecommendationRelatedEvent): any => ({
    ...obj,
  });
}

export interface Recommendation {
  Description?: string;
  Link?: string;
  Name?: string;
  Reason?: string;
  RelatedAnomalies?: RecommendationRelatedAnomaly[];
  RelatedEvents?: RecommendationRelatedEvent[];
}

export namespace Recommendation {
  export const filterSensitiveLog = (obj: Recommendation): any => ({
    ...obj,
  });
}

export interface ValidationExceptionField {
  Message: string | undefined;
  Name: string | undefined;
}

export namespace ValidationExceptionField {
  export const filterSensitiveLog = (obj: ValidationExceptionField): any => ({
    ...obj,
  });
}

export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message: string | undefined;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelRequest {
  Config: NotificationChannelConfig | undefined;
}

export namespace AddNotificationChannelRequest {
  export const filterSensitiveLog = (obj: AddNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface AddNotificationChannelResponse {
  Id?: string;
}

export namespace AddNotificationChannelResponse {
  export const filterSensitiveLog = (obj: AddNotificationChannelResponse): any => ({
    ...obj,
  });
}

export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message: string | undefined;
  ResourceId: string | undefined;
  ResourceType: string | undefined;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message: string | undefined;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message: string | undefined;
  ResourceId: string | undefined;
  ResourceType: string | undefined;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message: string | undefined;
  QuotaCode?: string;
  ServiceCode?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export enum ValidationExceptionReason {
  CANNOT_PARSE = "CANNOT_PARSE",
  FIELD_VALIDATION_FAILED = "FIELD_VALIDATION_FAILED",
  OTHER = "OTHER",
  UNKNOWN_OPERATION = "UNKNOWN_OPERATION",
}

export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Fields?: ValidationExceptionField[];
  Message: string | undefined;
  Reason?: ValidationExceptionReason | string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface CloudFormationCollectionFilter {
  StackNames?: string[];
}

export namespace CloudFormationCollectionFilter {
  export const filterSensitiveLog = (obj: CloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthRequest {}

export namespace DescribeAccountHealthRequest {
  export const filterSensitiveLog = (obj: DescribeAccountHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountHealthResponse {
  MetricsAnalyzed?: number;
  OpenProactiveInsights?: number;
  OpenReactiveInsights?: number;
}

export namespace DescribeAccountHealthResponse {
  export const filterSensitiveLog = (obj: DescribeAccountHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewRequest {
  FromTime: Date | undefined;
  ToTime?: Date;
}

export namespace DescribeAccountOverviewRequest {
  export const filterSensitiveLog = (obj: DescribeAccountOverviewRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccountOverviewResponse {
  MeanTimeToRecoverInMilliseconds?: number;
  ProactiveInsights?: number;
  ReactiveInsights?: number;
}

export namespace DescribeAccountOverviewResponse {
  export const filterSensitiveLog = (obj: DescribeAccountOverviewResponse): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyRequest {
  Id: string | undefined;
}

export namespace DescribeAnomalyRequest {
  export const filterSensitiveLog = (obj: DescribeAnomalyRequest): any => ({
    ...obj,
  });
}

export interface ProactiveAnomaly {
  AnomalyTimeRange?: AnomalyTimeRange;
  AssociatedInsightId?: string;
  Id?: string;
  Limit?: number;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  Severity?: AnomalySeverity | string;
  SourceDetails?: AnomalySourceDetails;
  Status?: AnomalyStatus | string;
  UpdateTime?: Date;
}

export namespace ProactiveAnomaly {
  export const filterSensitiveLog = (obj: ProactiveAnomaly): any => ({
    ...obj,
  });
}

export interface ReactiveAnomaly {
  AnomalyTimeRange?: AnomalyTimeRange;
  AssociatedInsightId?: string;
  Id?: string;
  ResourceCollection?: ResourceCollection;
  Severity?: AnomalySeverity | string;
  SourceDetails?: AnomalySourceDetails;
  Status?: AnomalyStatus | string;
}

export namespace ReactiveAnomaly {
  export const filterSensitiveLog = (obj: ReactiveAnomaly): any => ({
    ...obj,
  });
}

export interface DescribeAnomalyResponse {
  ProactiveAnomaly?: ProactiveAnomaly;
  ReactiveAnomaly?: ReactiveAnomaly;
}

export namespace DescribeAnomalyResponse {
  export const filterSensitiveLog = (obj: DescribeAnomalyResponse): any => ({
    ...obj,
  });
}

export interface DescribeInsightRequest {
  Id: string | undefined;
}

export namespace DescribeInsightRequest {
  export const filterSensitiveLog = (obj: DescribeInsightRequest): any => ({
    ...obj,
  });
}

export interface ProactiveInsight {
  Id?: string;
  InsightTimeRange?: InsightTimeRange;
  Name?: string;
  PredictionTimeRange?: PredictionTimeRange;
  ResourceCollection?: ResourceCollection;
  Severity?: InsightSeverity | string;
  SsmOpsItemId?: string;
  Status?: InsightStatus | string;
}

export namespace ProactiveInsight {
  export const filterSensitiveLog = (obj: ProactiveInsight): any => ({
    ...obj,
  });
}

export interface ReactiveInsight {
  Id?: string;
  InsightTimeRange?: InsightTimeRange;
  Name?: string;
  ResourceCollection?: ResourceCollection;
  Severity?: InsightSeverity | string;
  SsmOpsItemId?: string;
  Status?: InsightStatus | string;
}

export namespace ReactiveInsight {
  export const filterSensitiveLog = (obj: ReactiveInsight): any => ({
    ...obj,
  });
}

export interface DescribeInsightResponse {
  ProactiveInsight?: ProactiveInsight;
  ReactiveInsight?: ReactiveInsight;
}

export namespace DescribeInsightResponse {
  export const filterSensitiveLog = (obj: DescribeInsightResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourceCollectionHealthRequest {
  NextToken?: string;
  ResourceCollectionType: string | undefined;
}

export namespace DescribeResourceCollectionHealthRequest {
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourceCollectionHealthResponse {
  CloudFormation?: CloudFormationHealth[];
  NextToken?: string;
}

export namespace DescribeResourceCollectionHealthResponse {
  export const filterSensitiveLog = (obj: DescribeResourceCollectionHealthResponse): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationRequest {}

export namespace DescribeServiceIntegrationRequest {
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export enum OptInStatus {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface OpsCenterIntegration {
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegration {
  export const filterSensitiveLog = (obj: OpsCenterIntegration): any => ({
    ...obj,
  });
}

export interface ServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegration;
}

export namespace ServiceIntegrationConfig {
  export const filterSensitiveLog = (obj: ServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface DescribeServiceIntegrationResponse {
  ServiceIntegration?: ServiceIntegrationConfig;
}

export namespace DescribeServiceIntegrationResponse {
  export const filterSensitiveLog = (obj: DescribeServiceIntegrationResponse): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionRequest {
  NextToken?: string;
  ResourceCollectionType: string | undefined;
}

export namespace GetResourceCollectionRequest {
  export const filterSensitiveLog = (obj: GetResourceCollectionRequest): any => ({
    ...obj,
  });
}

export interface ResourceCollectionFilter {
  CloudFormation?: CloudFormationCollectionFilter;
}

export namespace ResourceCollectionFilter {
  export const filterSensitiveLog = (obj: ResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface GetResourceCollectionResponse {
  NextToken?: string;
  ResourceCollection?: ResourceCollectionFilter;
}

export namespace GetResourceCollectionResponse {
  export const filterSensitiveLog = (obj: GetResourceCollectionResponse): any => ({
    ...obj,
  });
}

export interface StartTimeRange {
  FromTime?: Date;
  ToTime?: Date;
}

export namespace StartTimeRange {
  export const filterSensitiveLog = (obj: StartTimeRange): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightRequest {
  InsightId: string | undefined;
  MaxResults?: number;
  NextToken?: string;
  StartTimeRange?: StartTimeRange;
}

export namespace ListAnomaliesForInsightRequest {
  export const filterSensitiveLog = (obj: ListAnomaliesForInsightRequest): any => ({
    ...obj,
  });
}

export interface ListAnomaliesForInsightResponse {
  NextToken?: string;
  ProactiveAnomalies?: ProactiveAnomalySummary[];
  ReactiveAnomalies?: ReactiveAnomalySummary[];
}

export namespace ListAnomaliesForInsightResponse {
  export const filterSensitiveLog = (obj: ListAnomaliesForInsightResponse): any => ({
    ...obj,
  });
}

export interface EventTimeRange {
  FromTime: Date | undefined;
  ToTime: Date | undefined;
}

export namespace EventTimeRange {
  export const filterSensitiveLog = (obj: EventTimeRange): any => ({
    ...obj,
  });
}

export interface ListEventsFilters {
  DataSource?: EventDataSource | string;
  EventClass?: EventClass | string;
  EventSource?: string;
  EventTimeRange?: EventTimeRange;
  InsightId?: string;
  ResourceCollection?: ResourceCollection;
}

export namespace ListEventsFilters {
  export const filterSensitiveLog = (obj: ListEventsFilters): any => ({
    ...obj,
  });
}

export interface ListEventsRequest {
  Filters: ListEventsFilters | undefined;
  MaxResults?: number;
  NextToken?: string;
}

export namespace ListEventsRequest {
  export const filterSensitiveLog = (obj: ListEventsRequest): any => ({
    ...obj,
  });
}

export interface ListEventsResponse {
  Events?: Event[];
  NextToken?: string;
}

export namespace ListEventsResponse {
  export const filterSensitiveLog = (obj: ListEventsResponse): any => ({
    ...obj,
  });
}

export enum InsightType {
  PROACTIVE = "PROACTIVE",
  REACTIVE = "REACTIVE",
}

export interface ListInsightsAnyStatusFilter {
  StartTimeRange: StartTimeRange | undefined;
  Type: InsightType | string | undefined;
}

export namespace ListInsightsAnyStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsAnyStatusFilter): any => ({
    ...obj,
  });
}

export interface EndTimeRange {
  FromTime?: Date;
  ToTime?: Date;
}

export namespace EndTimeRange {
  export const filterSensitiveLog = (obj: EndTimeRange): any => ({
    ...obj,
  });
}

export interface ListInsightsClosedStatusFilter {
  EndTimeRange: EndTimeRange | undefined;
  Type: InsightType | string | undefined;
}

export namespace ListInsightsClosedStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsClosedStatusFilter): any => ({
    ...obj,
  });
}

export interface ListInsightsOngoingStatusFilter {
  Type: InsightType | string | undefined;
}

export namespace ListInsightsOngoingStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsOngoingStatusFilter): any => ({
    ...obj,
  });
}

export interface ListInsightsStatusFilter {
  Any?: ListInsightsAnyStatusFilter;
  Closed?: ListInsightsClosedStatusFilter;
  Ongoing?: ListInsightsOngoingStatusFilter;
}

export namespace ListInsightsStatusFilter {
  export const filterSensitiveLog = (obj: ListInsightsStatusFilter): any => ({
    ...obj,
  });
}

export interface ListInsightsRequest {
  MaxResults?: number;
  NextToken?: string;
  StatusFilter: ListInsightsStatusFilter | undefined;
}

export namespace ListInsightsRequest {
  export const filterSensitiveLog = (obj: ListInsightsRequest): any => ({
    ...obj,
  });
}

export interface ListInsightsResponse {
  NextToken?: string;
  ProactiveInsights?: ProactiveInsightSummary[];
  ReactiveInsights?: ReactiveInsightSummary[];
}

export namespace ListInsightsResponse {
  export const filterSensitiveLog = (obj: ListInsightsResponse): any => ({
    ...obj,
  });
}

export interface ListNotificationChannelsRequest {
  NextToken?: string;
}

export namespace ListNotificationChannelsRequest {
  export const filterSensitiveLog = (obj: ListNotificationChannelsRequest): any => ({
    ...obj,
  });
}

export interface ListNotificationChannelsResponse {
  Channels?: NotificationChannel[];
  NextToken?: string;
}

export namespace ListNotificationChannelsResponse {
  export const filterSensitiveLog = (obj: ListNotificationChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListRecommendationsRequest {
  InsightId: string | undefined;
  NextToken?: string;
}

export namespace ListRecommendationsRequest {
  export const filterSensitiveLog = (obj: ListRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ListRecommendationsResponse {
  NextToken?: string;
  Recommendations?: Recommendation[];
}

export namespace ListRecommendationsResponse {
  export const filterSensitiveLog = (obj: ListRecommendationsResponse): any => ({
    ...obj,
  });
}

export enum InsightFeedbackOption {
  ALERT_TOO_SENSITIVE = "ALERT_TOO_SENSITIVE",
  DATA_INCORRECT = "DATA_INCORRECT",
  DATA_NOISY_ANOMALY = "DATA_NOISY_ANOMALY",
  RECOMMENDATION_USEFUL = "RECOMMENDATION_USEFUL",
  VALID_COLLECTION = "VALID_COLLECTION",
}

export interface InsightFeedback {
  Feedback?: InsightFeedbackOption | string;
  Id?: string;
}

export namespace InsightFeedback {
  export const filterSensitiveLog = (obj: InsightFeedback): any => ({
    ...obj,
  });
}

export interface PutFeedbackRequest {
  InsightFeedback?: InsightFeedback;
}

export namespace PutFeedbackRequest {
  export const filterSensitiveLog = (obj: PutFeedbackRequest): any => ({
    ...obj,
  });
}

export interface PutFeedbackResponse {}

export namespace PutFeedbackResponse {
  export const filterSensitiveLog = (obj: PutFeedbackResponse): any => ({
    ...obj,
  });
}

export interface RemoveNotificationChannelRequest {
  Id: string | undefined;
}

export namespace RemoveNotificationChannelRequest {
  export const filterSensitiveLog = (obj: RemoveNotificationChannelRequest): any => ({
    ...obj,
  });
}

export interface RemoveNotificationChannelResponse {}

export namespace RemoveNotificationChannelResponse {
  export const filterSensitiveLog = (obj: RemoveNotificationChannelResponse): any => ({
    ...obj,
  });
}

export interface SearchInsightsFilters {
  ResourceCollection?: ResourceCollection;
  Severities?: (InsightSeverity | string)[];
  Statuses?: (InsightStatus | string)[];
}

export namespace SearchInsightsFilters {
  export const filterSensitiveLog = (obj: SearchInsightsFilters): any => ({
    ...obj,
  });
}

export interface SearchInsightsRequest {
  Filters?: SearchInsightsFilters;
  MaxResults?: number;
  NextToken?: string;
  StartTimeRange: StartTimeRange | undefined;
  Type: InsightType | string | undefined;
}

export namespace SearchInsightsRequest {
  export const filterSensitiveLog = (obj: SearchInsightsRequest): any => ({
    ...obj,
  });
}

export interface SearchInsightsResponse {
  NextToken?: string;
  ProactiveInsights?: ProactiveInsightSummary[];
  ReactiveInsights?: ReactiveInsightSummary[];
}

export namespace SearchInsightsResponse {
  export const filterSensitiveLog = (obj: SearchInsightsResponse): any => ({
    ...obj,
  });
}

export enum UpdateResourceCollectionAction {
  ADD = "ADD",
  REMOVE = "REMOVE",
}

export interface UpdateCloudFormationCollectionFilter {
  StackNames?: string[];
}

export namespace UpdateCloudFormationCollectionFilter {
  export const filterSensitiveLog = (obj: UpdateCloudFormationCollectionFilter): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionFilter {
  CloudFormation?: UpdateCloudFormationCollectionFilter;
}

export namespace UpdateResourceCollectionFilter {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionFilter): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionRequest {
  Action: UpdateResourceCollectionAction | string | undefined;
  ResourceCollection: UpdateResourceCollectionFilter | undefined;
}

export namespace UpdateResourceCollectionRequest {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateResourceCollectionResponse {}

export namespace UpdateResourceCollectionResponse {
  export const filterSensitiveLog = (obj: UpdateResourceCollectionResponse): any => ({
    ...obj,
  });
}

export interface OpsCenterIntegrationConfig {
  OptInStatus?: OptInStatus | string;
}

export namespace OpsCenterIntegrationConfig {
  export const filterSensitiveLog = (obj: OpsCenterIntegrationConfig): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationConfig {
  OpsCenter?: OpsCenterIntegrationConfig;
}

export namespace UpdateServiceIntegrationConfig {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationConfig): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationRequest {
  ServiceIntegration: UpdateServiceIntegrationConfig | undefined;
}

export namespace UpdateServiceIntegrationRequest {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationRequest): any => ({
    ...obj,
  });
}

export interface UpdateServiceIntegrationResponse {}

export namespace UpdateServiceIntegrationResponse {
  export const filterSensitiveLog = (obj: UpdateServiceIntegrationResponse): any => ({
    ...obj,
  });
}
