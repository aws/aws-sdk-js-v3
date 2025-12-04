import {
  AttributeType,
  AutoMLOverrideStrategy,
  Condition,
  CreateAutoPredictorCommand,
  CreateDatasetCommand,
  CreateDatasetGroupCommand,
  CreateDatasetImportJobCommand,
  CreateExplainabilityCommand,
  CreateExplainabilityExportCommand,
  CreateForecastCommand,
  CreateForecastExportJobCommand,
  CreateMonitorCommand,
  CreatePredictorBacktestExportJobCommand,
  CreatePredictorCommand,
  CreateWhatIfAnalysisCommand,
  CreateWhatIfForecastCommand,
  CreateWhatIfForecastExportCommand,
  DatasetType,
  DayOfWeek,
  DeleteDatasetCommand,
  DeleteDatasetGroupCommand,
  DeleteDatasetImportJobCommand,
  DeleteExplainabilityCommand,
  DeleteExplainabilityExportCommand,
  DeleteForecastCommand,
  DeleteForecastExportJobCommand,
  DeleteMonitorCommand,
  DeletePredictorBacktestExportJobCommand,
  DeletePredictorCommand,
  DeleteResourceTreeCommand,
  DeleteWhatIfAnalysisCommand,
  DeleteWhatIfForecastCommand,
  DeleteWhatIfForecastExportCommand,
  DescribeAutoPredictorCommand,
  DescribeDatasetCommand,
  DescribeDatasetGroupCommand,
  DescribeDatasetImportJobCommand,
  DescribeExplainabilityCommand,
  DescribeExplainabilityExportCommand,
  DescribeForecastCommand,
  DescribeForecastExportJobCommand,
  DescribeMonitorCommand,
  DescribePredictorBacktestExportJobCommand,
  DescribePredictorCommand,
  DescribeWhatIfAnalysisCommand,
  DescribeWhatIfForecastCommand,
  DescribeWhatIfForecastExportCommand,
  Domain,
  EvaluationType,
  FeaturizationMethodName,
  FilterConditionString,
  Forecast,
  ForecastClient,
  ForecastServiceException,
  GetAccuracyMetricsCommand,
  ImportMode,
  ListDatasetGroupsCommand,
  ListDatasetImportJobsCommand,
  ListDatasetsCommand,
  ListExplainabilitiesCommand,
  ListExplainabilityExportsCommand,
  ListForecastExportJobsCommand,
  ListForecastsCommand,
  ListMonitorEvaluationsCommand,
  ListMonitorsCommand,
  ListPredictorBacktestExportJobsCommand,
  ListPredictorsCommand,
  ListTagsForResourceCommand,
  ListWhatIfAnalysesCommand,
  ListWhatIfForecastExportsCommand,
  ListWhatIfForecastsCommand,
  Month,
  Operation,
  OptimizationMetric,
  ResumeResourceCommand,
  ScalingType,
  State,
  StopResourceCommand,
  TagResourceCommand,
  TimePointGranularity,
  TimeSeriesGranularity,
  UntagResourceCommand,
  UpdateDatasetGroupCommand,
  paginateListDatasetGroups,
  paginateListDatasetImportJobs,
  paginateListDatasets,
  paginateListExplainabilities,
  paginateListExplainabilityExports,
  paginateListForecastExportJobs,
  paginateListForecasts,
  paginateListMonitorEvaluations,
  paginateListMonitors,
  paginateListPredictorBacktestExportJobs,
  paginateListPredictors,
  paginateListWhatIfAnalyses,
  paginateListWhatIfForecastExports,
  paginateListWhatIfForecasts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ForecastClient === "function")
assert(typeof Forecast === "function")
// commands
assert(typeof CreateAutoPredictorCommand === "function")
assert(typeof CreateDatasetCommand === "function")
assert(typeof CreateDatasetGroupCommand === "function")
assert(typeof CreateDatasetImportJobCommand === "function")
assert(typeof CreateExplainabilityCommand === "function")
assert(typeof CreateExplainabilityExportCommand === "function")
assert(typeof CreateForecastCommand === "function")
assert(typeof CreateForecastExportJobCommand === "function")
assert(typeof CreateMonitorCommand === "function")
assert(typeof CreatePredictorCommand === "function")
assert(typeof CreatePredictorBacktestExportJobCommand === "function")
assert(typeof CreateWhatIfAnalysisCommand === "function")
assert(typeof CreateWhatIfForecastCommand === "function")
assert(typeof CreateWhatIfForecastExportCommand === "function")
assert(typeof DeleteDatasetCommand === "function")
assert(typeof DeleteDatasetGroupCommand === "function")
assert(typeof DeleteDatasetImportJobCommand === "function")
assert(typeof DeleteExplainabilityCommand === "function")
assert(typeof DeleteExplainabilityExportCommand === "function")
assert(typeof DeleteForecastCommand === "function")
assert(typeof DeleteForecastExportJobCommand === "function")
assert(typeof DeleteMonitorCommand === "function")
assert(typeof DeletePredictorCommand === "function")
assert(typeof DeletePredictorBacktestExportJobCommand === "function")
assert(typeof DeleteResourceTreeCommand === "function")
assert(typeof DeleteWhatIfAnalysisCommand === "function")
assert(typeof DeleteWhatIfForecastCommand === "function")
assert(typeof DeleteWhatIfForecastExportCommand === "function")
assert(typeof DescribeAutoPredictorCommand === "function")
assert(typeof DescribeDatasetCommand === "function")
assert(typeof DescribeDatasetGroupCommand === "function")
assert(typeof DescribeDatasetImportJobCommand === "function")
assert(typeof DescribeExplainabilityCommand === "function")
assert(typeof DescribeExplainabilityExportCommand === "function")
assert(typeof DescribeForecastCommand === "function")
assert(typeof DescribeForecastExportJobCommand === "function")
assert(typeof DescribeMonitorCommand === "function")
assert(typeof DescribePredictorCommand === "function")
assert(typeof DescribePredictorBacktestExportJobCommand === "function")
assert(typeof DescribeWhatIfAnalysisCommand === "function")
assert(typeof DescribeWhatIfForecastCommand === "function")
assert(typeof DescribeWhatIfForecastExportCommand === "function")
assert(typeof GetAccuracyMetricsCommand === "function")
assert(typeof ListDatasetGroupsCommand === "function")
assert(typeof ListDatasetImportJobsCommand === "function")
assert(typeof ListDatasetsCommand === "function")
assert(typeof ListExplainabilitiesCommand === "function")
assert(typeof ListExplainabilityExportsCommand === "function")
assert(typeof ListForecastExportJobsCommand === "function")
assert(typeof ListForecastsCommand === "function")
assert(typeof ListMonitorEvaluationsCommand === "function")
assert(typeof ListMonitorsCommand === "function")
assert(typeof ListPredictorBacktestExportJobsCommand === "function")
assert(typeof ListPredictorsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListWhatIfAnalysesCommand === "function")
assert(typeof ListWhatIfForecastExportsCommand === "function")
assert(typeof ListWhatIfForecastsCommand === "function")
assert(typeof ResumeResourceCommand === "function")
assert(typeof StopResourceCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDatasetGroupCommand === "function")
// enums
assert(typeof AttributeType === "object");
assert(typeof AutoMLOverrideStrategy === "object");
assert(typeof Condition === "object");
assert(typeof DatasetType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof Domain === "object");
assert(typeof EvaluationType === "object");
assert(typeof FeaturizationMethodName === "object");
assert(typeof FilterConditionString === "object");
assert(typeof ImportMode === "object");
assert(typeof Month === "object");
assert(typeof Operation === "object");
assert(typeof OptimizationMetric === "object");
assert(typeof ScalingType === "object");
assert(typeof State === "object");
assert(typeof TimePointGranularity === "object");
assert(typeof TimeSeriesGranularity === "object");
// errors
assert(ForecastServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListDatasetGroups === "function")
assert(typeof paginateListDatasetImportJobs === "function")
assert(typeof paginateListDatasets === "function")
assert(typeof paginateListExplainabilities === "function")
assert(typeof paginateListExplainabilityExports === "function")
assert(typeof paginateListForecastExportJobs === "function")
assert(typeof paginateListForecasts === "function")
assert(typeof paginateListMonitorEvaluations === "function")
assert(typeof paginateListMonitors === "function")
assert(typeof paginateListPredictorBacktestExportJobs === "function")
assert(typeof paginateListPredictors === "function")
assert(typeof paginateListWhatIfAnalyses === "function")
assert(typeof paginateListWhatIfForecastExports === "function")
assert(typeof paginateListWhatIfForecasts === "function")
console.log(`Forecast index test passed.`);
