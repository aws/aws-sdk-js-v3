import {
  AcceptLanguage,
  AnalysisReport$,
  AnalysisReportSummary$,
  AnalysisStatus,
  ContextType,
  CreatePerformanceAnalysisReport$,
  CreatePerformanceAnalysisReportCommand,
  CreatePerformanceAnalysisReportRequest$,
  CreatePerformanceAnalysisReportResponse$,
  Data$,
  DataPoint$,
  DeletePerformanceAnalysisReport$,
  DeletePerformanceAnalysisReportCommand,
  DeletePerformanceAnalysisReportRequest$,
  DeletePerformanceAnalysisReportResponse$,
  DescribeDimensionKeys$,
  DescribeDimensionKeysCommand,
  DescribeDimensionKeysRequest$,
  DescribeDimensionKeysResponse$,
  DetailStatus,
  DimensionDetail$,
  DimensionGroup$,
  DimensionGroupDetail$,
  DimensionKeyDescription$,
  DimensionKeyDetail$,
  FeatureMetadata$,
  FeatureStatus,
  FineGrainedAction,
  GetDimensionKeyDetails$,
  GetDimensionKeyDetailsCommand,
  GetDimensionKeyDetailsRequest$,
  GetDimensionKeyDetailsResponse$,
  GetPerformanceAnalysisReport$,
  GetPerformanceAnalysisReportCommand,
  GetPerformanceAnalysisReportRequest$,
  GetPerformanceAnalysisReportResponse$,
  GetResourceMetadata$,
  GetResourceMetadataCommand,
  GetResourceMetadataRequest$,
  GetResourceMetadataResponse$,
  GetResourceMetrics$,
  GetResourceMetricsCommand,
  GetResourceMetricsRequest$,
  GetResourceMetricsResponse$,
  Insight$,
  InternalServiceError,
  InternalServiceError$,
  InvalidArgumentException,
  InvalidArgumentException$,
  ListAvailableResourceDimensions$,
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceDimensionsRequest$,
  ListAvailableResourceDimensionsResponse$,
  ListAvailableResourceMetrics$,
  ListAvailableResourceMetricsCommand,
  ListAvailableResourceMetricsRequest$,
  ListAvailableResourceMetricsResponse$,
  ListPerformanceAnalysisReports$,
  ListPerformanceAnalysisReportsCommand,
  ListPerformanceAnalysisReportsRequest$,
  ListPerformanceAnalysisReportsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MetricDimensionGroups$,
  MetricKeyDataPoints$,
  MetricQuery$,
  NotAuthorizedException,
  NotAuthorizedException$,
  paginateDescribeDimensionKeys,
  paginateGetResourceMetrics,
  paginateListAvailableResourceDimensions,
  paginateListAvailableResourceMetrics,
  paginateListPerformanceAnalysisReports,
  PerformanceInsightsMetric$,
  PeriodAlignment,
  PI,
  PIClient,
  PIServiceException,
  Recommendation$,
  ResponsePartitionKey$,
  ResponseResourceMetric$,
  ResponseResourceMetricKey$,
  ServiceType,
  Severity,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TextFormat,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PIClient === "function");
assert(typeof PI === "function");
// commands
assert(typeof CreatePerformanceAnalysisReportCommand === "function");
assert(typeof CreatePerformanceAnalysisReport$ === "object");
assert(typeof DeletePerformanceAnalysisReportCommand === "function");
assert(typeof DeletePerformanceAnalysisReport$ === "object");
assert(typeof DescribeDimensionKeysCommand === "function");
assert(typeof DescribeDimensionKeys$ === "object");
assert(typeof GetDimensionKeyDetailsCommand === "function");
assert(typeof GetDimensionKeyDetails$ === "object");
assert(typeof GetPerformanceAnalysisReportCommand === "function");
assert(typeof GetPerformanceAnalysisReport$ === "object");
assert(typeof GetResourceMetadataCommand === "function");
assert(typeof GetResourceMetadata$ === "object");
assert(typeof GetResourceMetricsCommand === "function");
assert(typeof GetResourceMetrics$ === "object");
assert(typeof ListAvailableResourceDimensionsCommand === "function");
assert(typeof ListAvailableResourceDimensions$ === "object");
assert(typeof ListAvailableResourceMetricsCommand === "function");
assert(typeof ListAvailableResourceMetrics$ === "object");
assert(typeof ListPerformanceAnalysisReportsCommand === "function");
assert(typeof ListPerformanceAnalysisReports$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof AnalysisReport$ === "object");
assert(typeof AnalysisReportSummary$ === "object");
assert(typeof CreatePerformanceAnalysisReportRequest$ === "object");
assert(typeof CreatePerformanceAnalysisReportResponse$ === "object");
assert(typeof Data$ === "object");
assert(typeof DataPoint$ === "object");
assert(typeof DeletePerformanceAnalysisReportRequest$ === "object");
assert(typeof DeletePerformanceAnalysisReportResponse$ === "object");
assert(typeof DescribeDimensionKeysRequest$ === "object");
assert(typeof DescribeDimensionKeysResponse$ === "object");
assert(typeof DimensionDetail$ === "object");
assert(typeof DimensionGroup$ === "object");
assert(typeof DimensionGroupDetail$ === "object");
assert(typeof DimensionKeyDescription$ === "object");
assert(typeof DimensionKeyDetail$ === "object");
assert(typeof FeatureMetadata$ === "object");
assert(typeof GetDimensionKeyDetailsRequest$ === "object");
assert(typeof GetDimensionKeyDetailsResponse$ === "object");
assert(typeof GetPerformanceAnalysisReportRequest$ === "object");
assert(typeof GetPerformanceAnalysisReportResponse$ === "object");
assert(typeof GetResourceMetadataRequest$ === "object");
assert(typeof GetResourceMetadataResponse$ === "object");
assert(typeof GetResourceMetricsRequest$ === "object");
assert(typeof GetResourceMetricsResponse$ === "object");
assert(typeof Insight$ === "object");
assert(typeof ListAvailableResourceDimensionsRequest$ === "object");
assert(typeof ListAvailableResourceDimensionsResponse$ === "object");
assert(typeof ListAvailableResourceMetricsRequest$ === "object");
assert(typeof ListAvailableResourceMetricsResponse$ === "object");
assert(typeof ListPerformanceAnalysisReportsRequest$ === "object");
assert(typeof ListPerformanceAnalysisReportsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MetricDimensionGroups$ === "object");
assert(typeof MetricKeyDataPoints$ === "object");
assert(typeof MetricQuery$ === "object");
assert(typeof PerformanceInsightsMetric$ === "object");
assert(typeof Recommendation$ === "object");
assert(typeof ResponsePartitionKey$ === "object");
assert(typeof ResponseResourceMetric$ === "object");
assert(typeof ResponseResourceMetricKey$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof AcceptLanguage === "object");
assert(typeof AnalysisStatus === "object");
assert(typeof ContextType === "object");
assert(typeof DetailStatus === "object");
assert(typeof FeatureStatus === "object");
assert(typeof FineGrainedAction === "object");
assert(typeof PeriodAlignment === "object");
assert(typeof ServiceType === "object");
assert(typeof Severity === "object");
assert(typeof TextFormat === "object");
// errors
assert(InternalServiceError.prototype instanceof PIServiceException);
assert(typeof InternalServiceError$ === "object");
assert(InvalidArgumentException.prototype instanceof PIServiceException);
assert(typeof InvalidArgumentException$ === "object");
assert(NotAuthorizedException.prototype instanceof PIServiceException);
assert(typeof NotAuthorizedException$ === "object");
assert(PIServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeDimensionKeys === "function");
assert(typeof paginateGetResourceMetrics === "function");
assert(typeof paginateListAvailableResourceDimensions === "function");
assert(typeof paginateListAvailableResourceMetrics === "function");
assert(typeof paginateListPerformanceAnalysisReports === "function");
console.log(`PI index test passed.`);
