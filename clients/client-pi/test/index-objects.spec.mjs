import {
  AcceptLanguage,
  AnalysisStatus,
  ContextType,
  CreatePerformanceAnalysisReportCommand,
  DeletePerformanceAnalysisReportCommand,
  DescribeDimensionKeysCommand,
  DetailStatus,
  FeatureStatus,
  FineGrainedAction,
  GetDimensionKeyDetailsCommand,
  GetPerformanceAnalysisReportCommand,
  GetResourceMetadataCommand,
  GetResourceMetricsCommand,
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceMetricsCommand,
  ListPerformanceAnalysisReportsCommand,
  ListTagsForResourceCommand,
  PI,
  PIClient,
  PIServiceException,
  PeriodAlignment,
  ServiceType,
  Severity,
  TagResourceCommand,
  TextFormat,
  UntagResourceCommand,
  paginateDescribeDimensionKeys,
  paginateGetResourceMetrics,
  paginateListAvailableResourceDimensions,
  paginateListAvailableResourceMetrics,
  paginateListPerformanceAnalysisReports,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PIClient === "function")
assert(typeof PI === "function")
// commands
assert(typeof CreatePerformanceAnalysisReportCommand === "function")
assert(typeof DeletePerformanceAnalysisReportCommand === "function")
assert(typeof DescribeDimensionKeysCommand === "function")
assert(typeof GetDimensionKeyDetailsCommand === "function")
assert(typeof GetPerformanceAnalysisReportCommand === "function")
assert(typeof GetResourceMetadataCommand === "function")
assert(typeof GetResourceMetricsCommand === "function")
assert(typeof ListAvailableResourceDimensionsCommand === "function")
assert(typeof ListAvailableResourceMetricsCommand === "function")
assert(typeof ListPerformanceAnalysisReportsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
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
assert(PIServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeDimensionKeys === "function")
assert(typeof paginateGetResourceMetrics === "function")
assert(typeof paginateListAvailableResourceDimensions === "function")
assert(typeof paginateListAvailableResourceMetrics === "function")
assert(typeof paginateListPerformanceAnalysisReports === "function")
console.log(`PI index test passed.`);
