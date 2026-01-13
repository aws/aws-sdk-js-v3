import {
  Action$,
  AdditionalDataset$,
  AttributeConfig$,
  AttributeType,
  AutoMLOverrideStrategy,
  Baseline$,
  BaselineMetric$,
  CategoricalParameterRange$,
  Condition,
  ContinuousParameterRange$,
  CreateAutoPredictor$,
  CreateAutoPredictorCommand,
  CreateAutoPredictorRequest$,
  CreateAutoPredictorResponse$,
  CreateDataset$,
  CreateDatasetCommand,
  CreateDatasetGroup$,
  CreateDatasetGroupCommand,
  CreateDatasetGroupRequest$,
  CreateDatasetGroupResponse$,
  CreateDatasetImportJob$,
  CreateDatasetImportJobCommand,
  CreateDatasetImportJobRequest$,
  CreateDatasetImportJobResponse$,
  CreateDatasetRequest$,
  CreateDatasetResponse$,
  CreateExplainability$,
  CreateExplainabilityCommand,
  CreateExplainabilityExport$,
  CreateExplainabilityExportCommand,
  CreateExplainabilityExportRequest$,
  CreateExplainabilityExportResponse$,
  CreateExplainabilityRequest$,
  CreateExplainabilityResponse$,
  CreateForecast$,
  CreateForecastCommand,
  CreateForecastExportJob$,
  CreateForecastExportJobCommand,
  CreateForecastExportJobRequest$,
  CreateForecastExportJobResponse$,
  CreateForecastRequest$,
  CreateForecastResponse$,
  CreateMonitor$,
  CreateMonitorCommand,
  CreateMonitorRequest$,
  CreateMonitorResponse$,
  CreatePredictor$,
  CreatePredictorBacktestExportJob$,
  CreatePredictorBacktestExportJobCommand,
  CreatePredictorBacktestExportJobRequest$,
  CreatePredictorBacktestExportJobResponse$,
  CreatePredictorCommand,
  CreatePredictorRequest$,
  CreatePredictorResponse$,
  CreateWhatIfAnalysis$,
  CreateWhatIfAnalysisCommand,
  CreateWhatIfAnalysisRequest$,
  CreateWhatIfAnalysisResponse$,
  CreateWhatIfForecast$,
  CreateWhatIfForecastCommand,
  CreateWhatIfForecastExport$,
  CreateWhatIfForecastExportCommand,
  CreateWhatIfForecastExportRequest$,
  CreateWhatIfForecastExportResponse$,
  CreateWhatIfForecastRequest$,
  CreateWhatIfForecastResponse$,
  DataConfig$,
  DataDestination$,
  DatasetGroupSummary$,
  DatasetImportJobSummary$,
  DatasetSummary$,
  DatasetType,
  DataSource$,
  DayOfWeek,
  DeleteDataset$,
  DeleteDatasetCommand,
  DeleteDatasetGroup$,
  DeleteDatasetGroupCommand,
  DeleteDatasetGroupRequest$,
  DeleteDatasetImportJob$,
  DeleteDatasetImportJobCommand,
  DeleteDatasetImportJobRequest$,
  DeleteDatasetRequest$,
  DeleteExplainability$,
  DeleteExplainabilityCommand,
  DeleteExplainabilityExport$,
  DeleteExplainabilityExportCommand,
  DeleteExplainabilityExportRequest$,
  DeleteExplainabilityRequest$,
  DeleteForecast$,
  DeleteForecastCommand,
  DeleteForecastExportJob$,
  DeleteForecastExportJobCommand,
  DeleteForecastExportJobRequest$,
  DeleteForecastRequest$,
  DeleteMonitor$,
  DeleteMonitorCommand,
  DeleteMonitorRequest$,
  DeletePredictor$,
  DeletePredictorBacktestExportJob$,
  DeletePredictorBacktestExportJobCommand,
  DeletePredictorBacktestExportJobRequest$,
  DeletePredictorCommand,
  DeletePredictorRequest$,
  DeleteResourceTree$,
  DeleteResourceTreeCommand,
  DeleteResourceTreeRequest$,
  DeleteWhatIfAnalysis$,
  DeleteWhatIfAnalysisCommand,
  DeleteWhatIfAnalysisRequest$,
  DeleteWhatIfForecast$,
  DeleteWhatIfForecastCommand,
  DeleteWhatIfForecastExport$,
  DeleteWhatIfForecastExportCommand,
  DeleteWhatIfForecastExportRequest$,
  DeleteWhatIfForecastRequest$,
  DescribeAutoPredictor$,
  DescribeAutoPredictorCommand,
  DescribeAutoPredictorRequest$,
  DescribeAutoPredictorResponse$,
  DescribeDataset$,
  DescribeDatasetCommand,
  DescribeDatasetGroup$,
  DescribeDatasetGroupCommand,
  DescribeDatasetGroupRequest$,
  DescribeDatasetGroupResponse$,
  DescribeDatasetImportJob$,
  DescribeDatasetImportJobCommand,
  DescribeDatasetImportJobRequest$,
  DescribeDatasetImportJobResponse$,
  DescribeDatasetRequest$,
  DescribeDatasetResponse$,
  DescribeExplainability$,
  DescribeExplainabilityCommand,
  DescribeExplainabilityExport$,
  DescribeExplainabilityExportCommand,
  DescribeExplainabilityExportRequest$,
  DescribeExplainabilityExportResponse$,
  DescribeExplainabilityRequest$,
  DescribeExplainabilityResponse$,
  DescribeForecast$,
  DescribeForecastCommand,
  DescribeForecastExportJob$,
  DescribeForecastExportJobCommand,
  DescribeForecastExportJobRequest$,
  DescribeForecastExportJobResponse$,
  DescribeForecastRequest$,
  DescribeForecastResponse$,
  DescribeMonitor$,
  DescribeMonitorCommand,
  DescribeMonitorRequest$,
  DescribeMonitorResponse$,
  DescribePredictor$,
  DescribePredictorBacktestExportJob$,
  DescribePredictorBacktestExportJobCommand,
  DescribePredictorBacktestExportJobRequest$,
  DescribePredictorBacktestExportJobResponse$,
  DescribePredictorCommand,
  DescribePredictorRequest$,
  DescribePredictorResponse$,
  DescribeWhatIfAnalysis$,
  DescribeWhatIfAnalysisCommand,
  DescribeWhatIfAnalysisRequest$,
  DescribeWhatIfAnalysisResponse$,
  DescribeWhatIfForecast$,
  DescribeWhatIfForecastCommand,
  DescribeWhatIfForecastExport$,
  DescribeWhatIfForecastExportCommand,
  DescribeWhatIfForecastExportRequest$,
  DescribeWhatIfForecastExportResponse$,
  DescribeWhatIfForecastRequest$,
  DescribeWhatIfForecastResponse$,
  Domain,
  EncryptionConfig$,
  ErrorMetric$,
  EvaluationParameters$,
  EvaluationResult$,
  EvaluationType,
  ExplainabilityConfig$,
  ExplainabilityExportSummary$,
  ExplainabilityInfo$,
  ExplainabilitySummary$,
  Featurization$,
  FeaturizationConfig$,
  FeaturizationMethod$,
  FeaturizationMethodName,
  Filter$,
  FilterConditionString,
  Forecast,
  ForecastClient,
  ForecastExportJobSummary$,
  ForecastServiceException,
  ForecastSummary$,
  GetAccuracyMetrics$,
  GetAccuracyMetricsCommand,
  GetAccuracyMetricsRequest$,
  GetAccuracyMetricsResponse$,
  HyperParameterTuningJobConfig$,
  ImportMode,
  InputDataConfig$,
  IntegerParameterRange$,
  InvalidInputException,
  InvalidInputException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  ListDatasetGroups$,
  ListDatasetGroupsCommand,
  ListDatasetGroupsRequest$,
  ListDatasetGroupsResponse$,
  ListDatasetImportJobs$,
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsRequest$,
  ListDatasetImportJobsResponse$,
  ListDatasets$,
  ListDatasetsCommand,
  ListDatasetsRequest$,
  ListDatasetsResponse$,
  ListExplainabilities$,
  ListExplainabilitiesCommand,
  ListExplainabilitiesRequest$,
  ListExplainabilitiesResponse$,
  ListExplainabilityExports$,
  ListExplainabilityExportsCommand,
  ListExplainabilityExportsRequest$,
  ListExplainabilityExportsResponse$,
  ListForecastExportJobs$,
  ListForecastExportJobsCommand,
  ListForecastExportJobsRequest$,
  ListForecastExportJobsResponse$,
  ListForecasts$,
  ListForecastsCommand,
  ListForecastsRequest$,
  ListForecastsResponse$,
  ListMonitorEvaluations$,
  ListMonitorEvaluationsCommand,
  ListMonitorEvaluationsRequest$,
  ListMonitorEvaluationsResponse$,
  ListMonitors$,
  ListMonitorsCommand,
  ListMonitorsRequest$,
  ListMonitorsResponse$,
  ListPredictorBacktestExportJobs$,
  ListPredictorBacktestExportJobsCommand,
  ListPredictorBacktestExportJobsRequest$,
  ListPredictorBacktestExportJobsResponse$,
  ListPredictors$,
  ListPredictorsCommand,
  ListPredictorsRequest$,
  ListPredictorsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListWhatIfAnalyses$,
  ListWhatIfAnalysesCommand,
  ListWhatIfAnalysesRequest$,
  ListWhatIfAnalysesResponse$,
  ListWhatIfForecastExports$,
  ListWhatIfForecastExportsCommand,
  ListWhatIfForecastExportsRequest$,
  ListWhatIfForecastExportsResponse$,
  ListWhatIfForecasts$,
  ListWhatIfForecastsCommand,
  ListWhatIfForecastsRequest$,
  ListWhatIfForecastsResponse$,
  MetricResult$,
  Metrics$,
  MonitorConfig$,
  MonitorDataSource$,
  MonitorInfo$,
  MonitorSummary$,
  Month,
  Operation,
  OptimizationMetric,
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
  ParameterRanges$,
  PredictorBacktestExportJobSummary$,
  PredictorBaseline$,
  PredictorEvent$,
  PredictorExecution$,
  PredictorExecutionDetails$,
  PredictorMonitorEvaluation$,
  PredictorSummary$,
  ReferencePredictorSummary$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResumeResource$,
  ResumeResourceCommand,
  ResumeResourceRequest$,
  S3Config$,
  ScalingType,
  Schema$,
  SchemaAttribute$,
  State,
  Statistics$,
  StopResource$,
  StopResourceCommand,
  StopResourceRequest$,
  SupplementaryFeature$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TestWindowSummary$,
  TimeAlignmentBoundary$,
  TimePointGranularity,
  TimeSeriesCondition$,
  TimeSeriesGranularity,
  TimeSeriesIdentifiers$,
  TimeSeriesReplacementsDataSource$,
  TimeSeriesSelector$,
  TimeSeriesTransformation$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateDatasetGroup$,
  UpdateDatasetGroupCommand,
  UpdateDatasetGroupRequest$,
  UpdateDatasetGroupResponse$,
  WeightedQuantileLoss$,
  WhatIfAnalysisSummary$,
  WhatIfForecastExportSummary$,
  WhatIfForecastSummary$,
  WindowSummary$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ForecastClient === "function");
assert(typeof Forecast === "function");
// commands
assert(typeof CreateAutoPredictorCommand === "function");
assert(typeof CreateAutoPredictor$ === "object");
assert(typeof CreateDatasetCommand === "function");
assert(typeof CreateDataset$ === "object");
assert(typeof CreateDatasetGroupCommand === "function");
assert(typeof CreateDatasetGroup$ === "object");
assert(typeof CreateDatasetImportJobCommand === "function");
assert(typeof CreateDatasetImportJob$ === "object");
assert(typeof CreateExplainabilityCommand === "function");
assert(typeof CreateExplainability$ === "object");
assert(typeof CreateExplainabilityExportCommand === "function");
assert(typeof CreateExplainabilityExport$ === "object");
assert(typeof CreateForecastCommand === "function");
assert(typeof CreateForecast$ === "object");
assert(typeof CreateForecastExportJobCommand === "function");
assert(typeof CreateForecastExportJob$ === "object");
assert(typeof CreateMonitorCommand === "function");
assert(typeof CreateMonitor$ === "object");
assert(typeof CreatePredictorCommand === "function");
assert(typeof CreatePredictor$ === "object");
assert(typeof CreatePredictorBacktestExportJobCommand === "function");
assert(typeof CreatePredictorBacktestExportJob$ === "object");
assert(typeof CreateWhatIfAnalysisCommand === "function");
assert(typeof CreateWhatIfAnalysis$ === "object");
assert(typeof CreateWhatIfForecastCommand === "function");
assert(typeof CreateWhatIfForecast$ === "object");
assert(typeof CreateWhatIfForecastExportCommand === "function");
assert(typeof CreateWhatIfForecastExport$ === "object");
assert(typeof DeleteDatasetCommand === "function");
assert(typeof DeleteDataset$ === "object");
assert(typeof DeleteDatasetGroupCommand === "function");
assert(typeof DeleteDatasetGroup$ === "object");
assert(typeof DeleteDatasetImportJobCommand === "function");
assert(typeof DeleteDatasetImportJob$ === "object");
assert(typeof DeleteExplainabilityCommand === "function");
assert(typeof DeleteExplainability$ === "object");
assert(typeof DeleteExplainabilityExportCommand === "function");
assert(typeof DeleteExplainabilityExport$ === "object");
assert(typeof DeleteForecastCommand === "function");
assert(typeof DeleteForecast$ === "object");
assert(typeof DeleteForecastExportJobCommand === "function");
assert(typeof DeleteForecastExportJob$ === "object");
assert(typeof DeleteMonitorCommand === "function");
assert(typeof DeleteMonitor$ === "object");
assert(typeof DeletePredictorCommand === "function");
assert(typeof DeletePredictor$ === "object");
assert(typeof DeletePredictorBacktestExportJobCommand === "function");
assert(typeof DeletePredictorBacktestExportJob$ === "object");
assert(typeof DeleteResourceTreeCommand === "function");
assert(typeof DeleteResourceTree$ === "object");
assert(typeof DeleteWhatIfAnalysisCommand === "function");
assert(typeof DeleteWhatIfAnalysis$ === "object");
assert(typeof DeleteWhatIfForecastCommand === "function");
assert(typeof DeleteWhatIfForecast$ === "object");
assert(typeof DeleteWhatIfForecastExportCommand === "function");
assert(typeof DeleteWhatIfForecastExport$ === "object");
assert(typeof DescribeAutoPredictorCommand === "function");
assert(typeof DescribeAutoPredictor$ === "object");
assert(typeof DescribeDatasetCommand === "function");
assert(typeof DescribeDataset$ === "object");
assert(typeof DescribeDatasetGroupCommand === "function");
assert(typeof DescribeDatasetGroup$ === "object");
assert(typeof DescribeDatasetImportJobCommand === "function");
assert(typeof DescribeDatasetImportJob$ === "object");
assert(typeof DescribeExplainabilityCommand === "function");
assert(typeof DescribeExplainability$ === "object");
assert(typeof DescribeExplainabilityExportCommand === "function");
assert(typeof DescribeExplainabilityExport$ === "object");
assert(typeof DescribeForecastCommand === "function");
assert(typeof DescribeForecast$ === "object");
assert(typeof DescribeForecastExportJobCommand === "function");
assert(typeof DescribeForecastExportJob$ === "object");
assert(typeof DescribeMonitorCommand === "function");
assert(typeof DescribeMonitor$ === "object");
assert(typeof DescribePredictorCommand === "function");
assert(typeof DescribePredictor$ === "object");
assert(typeof DescribePredictorBacktestExportJobCommand === "function");
assert(typeof DescribePredictorBacktestExportJob$ === "object");
assert(typeof DescribeWhatIfAnalysisCommand === "function");
assert(typeof DescribeWhatIfAnalysis$ === "object");
assert(typeof DescribeWhatIfForecastCommand === "function");
assert(typeof DescribeWhatIfForecast$ === "object");
assert(typeof DescribeWhatIfForecastExportCommand === "function");
assert(typeof DescribeWhatIfForecastExport$ === "object");
assert(typeof GetAccuracyMetricsCommand === "function");
assert(typeof GetAccuracyMetrics$ === "object");
assert(typeof ListDatasetGroupsCommand === "function");
assert(typeof ListDatasetGroups$ === "object");
assert(typeof ListDatasetImportJobsCommand === "function");
assert(typeof ListDatasetImportJobs$ === "object");
assert(typeof ListDatasetsCommand === "function");
assert(typeof ListDatasets$ === "object");
assert(typeof ListExplainabilitiesCommand === "function");
assert(typeof ListExplainabilities$ === "object");
assert(typeof ListExplainabilityExportsCommand === "function");
assert(typeof ListExplainabilityExports$ === "object");
assert(typeof ListForecastExportJobsCommand === "function");
assert(typeof ListForecastExportJobs$ === "object");
assert(typeof ListForecastsCommand === "function");
assert(typeof ListForecasts$ === "object");
assert(typeof ListMonitorEvaluationsCommand === "function");
assert(typeof ListMonitorEvaluations$ === "object");
assert(typeof ListMonitorsCommand === "function");
assert(typeof ListMonitors$ === "object");
assert(typeof ListPredictorBacktestExportJobsCommand === "function");
assert(typeof ListPredictorBacktestExportJobs$ === "object");
assert(typeof ListPredictorsCommand === "function");
assert(typeof ListPredictors$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListWhatIfAnalysesCommand === "function");
assert(typeof ListWhatIfAnalyses$ === "object");
assert(typeof ListWhatIfForecastExportsCommand === "function");
assert(typeof ListWhatIfForecastExports$ === "object");
assert(typeof ListWhatIfForecastsCommand === "function");
assert(typeof ListWhatIfForecasts$ === "object");
assert(typeof ResumeResourceCommand === "function");
assert(typeof ResumeResource$ === "object");
assert(typeof StopResourceCommand === "function");
assert(typeof StopResource$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateDatasetGroupCommand === "function");
assert(typeof UpdateDatasetGroup$ === "object");
// structural schemas
assert(typeof Action$ === "object");
assert(typeof AdditionalDataset$ === "object");
assert(typeof AttributeConfig$ === "object");
assert(typeof Baseline$ === "object");
assert(typeof BaselineMetric$ === "object");
assert(typeof CategoricalParameterRange$ === "object");
assert(typeof ContinuousParameterRange$ === "object");
assert(typeof CreateAutoPredictorRequest$ === "object");
assert(typeof CreateAutoPredictorResponse$ === "object");
assert(typeof CreateDatasetGroupRequest$ === "object");
assert(typeof CreateDatasetGroupResponse$ === "object");
assert(typeof CreateDatasetImportJobRequest$ === "object");
assert(typeof CreateDatasetImportJobResponse$ === "object");
assert(typeof CreateDatasetRequest$ === "object");
assert(typeof CreateDatasetResponse$ === "object");
assert(typeof CreateExplainabilityExportRequest$ === "object");
assert(typeof CreateExplainabilityExportResponse$ === "object");
assert(typeof CreateExplainabilityRequest$ === "object");
assert(typeof CreateExplainabilityResponse$ === "object");
assert(typeof CreateForecastExportJobRequest$ === "object");
assert(typeof CreateForecastExportJobResponse$ === "object");
assert(typeof CreateForecastRequest$ === "object");
assert(typeof CreateForecastResponse$ === "object");
assert(typeof CreateMonitorRequest$ === "object");
assert(typeof CreateMonitorResponse$ === "object");
assert(typeof CreatePredictorBacktestExportJobRequest$ === "object");
assert(typeof CreatePredictorBacktestExportJobResponse$ === "object");
assert(typeof CreatePredictorRequest$ === "object");
assert(typeof CreatePredictorResponse$ === "object");
assert(typeof CreateWhatIfAnalysisRequest$ === "object");
assert(typeof CreateWhatIfAnalysisResponse$ === "object");
assert(typeof CreateWhatIfForecastExportRequest$ === "object");
assert(typeof CreateWhatIfForecastExportResponse$ === "object");
assert(typeof CreateWhatIfForecastRequest$ === "object");
assert(typeof CreateWhatIfForecastResponse$ === "object");
assert(typeof DataConfig$ === "object");
assert(typeof DataDestination$ === "object");
assert(typeof DatasetGroupSummary$ === "object");
assert(typeof DatasetImportJobSummary$ === "object");
assert(typeof DatasetSummary$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DeleteDatasetGroupRequest$ === "object");
assert(typeof DeleteDatasetImportJobRequest$ === "object");
assert(typeof DeleteDatasetRequest$ === "object");
assert(typeof DeleteExplainabilityExportRequest$ === "object");
assert(typeof DeleteExplainabilityRequest$ === "object");
assert(typeof DeleteForecastExportJobRequest$ === "object");
assert(typeof DeleteForecastRequest$ === "object");
assert(typeof DeleteMonitorRequest$ === "object");
assert(typeof DeletePredictorBacktestExportJobRequest$ === "object");
assert(typeof DeletePredictorRequest$ === "object");
assert(typeof DeleteResourceTreeRequest$ === "object");
assert(typeof DeleteWhatIfAnalysisRequest$ === "object");
assert(typeof DeleteWhatIfForecastExportRequest$ === "object");
assert(typeof DeleteWhatIfForecastRequest$ === "object");
assert(typeof DescribeAutoPredictorRequest$ === "object");
assert(typeof DescribeAutoPredictorResponse$ === "object");
assert(typeof DescribeDatasetGroupRequest$ === "object");
assert(typeof DescribeDatasetGroupResponse$ === "object");
assert(typeof DescribeDatasetImportJobRequest$ === "object");
assert(typeof DescribeDatasetImportJobResponse$ === "object");
assert(typeof DescribeDatasetRequest$ === "object");
assert(typeof DescribeDatasetResponse$ === "object");
assert(typeof DescribeExplainabilityExportRequest$ === "object");
assert(typeof DescribeExplainabilityExportResponse$ === "object");
assert(typeof DescribeExplainabilityRequest$ === "object");
assert(typeof DescribeExplainabilityResponse$ === "object");
assert(typeof DescribeForecastExportJobRequest$ === "object");
assert(typeof DescribeForecastExportJobResponse$ === "object");
assert(typeof DescribeForecastRequest$ === "object");
assert(typeof DescribeForecastResponse$ === "object");
assert(typeof DescribeMonitorRequest$ === "object");
assert(typeof DescribeMonitorResponse$ === "object");
assert(typeof DescribePredictorBacktestExportJobRequest$ === "object");
assert(typeof DescribePredictorBacktestExportJobResponse$ === "object");
assert(typeof DescribePredictorRequest$ === "object");
assert(typeof DescribePredictorResponse$ === "object");
assert(typeof DescribeWhatIfAnalysisRequest$ === "object");
assert(typeof DescribeWhatIfAnalysisResponse$ === "object");
assert(typeof DescribeWhatIfForecastExportRequest$ === "object");
assert(typeof DescribeWhatIfForecastExportResponse$ === "object");
assert(typeof DescribeWhatIfForecastRequest$ === "object");
assert(typeof DescribeWhatIfForecastResponse$ === "object");
assert(typeof EncryptionConfig$ === "object");
assert(typeof ErrorMetric$ === "object");
assert(typeof EvaluationParameters$ === "object");
assert(typeof EvaluationResult$ === "object");
assert(typeof ExplainabilityConfig$ === "object");
assert(typeof ExplainabilityExportSummary$ === "object");
assert(typeof ExplainabilityInfo$ === "object");
assert(typeof ExplainabilitySummary$ === "object");
assert(typeof Featurization$ === "object");
assert(typeof FeaturizationConfig$ === "object");
assert(typeof FeaturizationMethod$ === "object");
assert(typeof Filter$ === "object");
assert(typeof ForecastExportJobSummary$ === "object");
assert(typeof ForecastSummary$ === "object");
assert(typeof GetAccuracyMetricsRequest$ === "object");
assert(typeof GetAccuracyMetricsResponse$ === "object");
assert(typeof HyperParameterTuningJobConfig$ === "object");
assert(typeof InputDataConfig$ === "object");
assert(typeof IntegerParameterRange$ === "object");
assert(typeof ListDatasetGroupsRequest$ === "object");
assert(typeof ListDatasetGroupsResponse$ === "object");
assert(typeof ListDatasetImportJobsRequest$ === "object");
assert(typeof ListDatasetImportJobsResponse$ === "object");
assert(typeof ListDatasetsRequest$ === "object");
assert(typeof ListDatasetsResponse$ === "object");
assert(typeof ListExplainabilitiesRequest$ === "object");
assert(typeof ListExplainabilitiesResponse$ === "object");
assert(typeof ListExplainabilityExportsRequest$ === "object");
assert(typeof ListExplainabilityExportsResponse$ === "object");
assert(typeof ListForecastExportJobsRequest$ === "object");
assert(typeof ListForecastExportJobsResponse$ === "object");
assert(typeof ListForecastsRequest$ === "object");
assert(typeof ListForecastsResponse$ === "object");
assert(typeof ListMonitorEvaluationsRequest$ === "object");
assert(typeof ListMonitorEvaluationsResponse$ === "object");
assert(typeof ListMonitorsRequest$ === "object");
assert(typeof ListMonitorsResponse$ === "object");
assert(typeof ListPredictorBacktestExportJobsRequest$ === "object");
assert(typeof ListPredictorBacktestExportJobsResponse$ === "object");
assert(typeof ListPredictorsRequest$ === "object");
assert(typeof ListPredictorsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListWhatIfAnalysesRequest$ === "object");
assert(typeof ListWhatIfAnalysesResponse$ === "object");
assert(typeof ListWhatIfForecastExportsRequest$ === "object");
assert(typeof ListWhatIfForecastExportsResponse$ === "object");
assert(typeof ListWhatIfForecastsRequest$ === "object");
assert(typeof ListWhatIfForecastsResponse$ === "object");
assert(typeof MetricResult$ === "object");
assert(typeof Metrics$ === "object");
assert(typeof MonitorConfig$ === "object");
assert(typeof MonitorDataSource$ === "object");
assert(typeof MonitorInfo$ === "object");
assert(typeof MonitorSummary$ === "object");
assert(typeof ParameterRanges$ === "object");
assert(typeof PredictorBacktestExportJobSummary$ === "object");
assert(typeof PredictorBaseline$ === "object");
assert(typeof PredictorEvent$ === "object");
assert(typeof PredictorExecution$ === "object");
assert(typeof PredictorExecutionDetails$ === "object");
assert(typeof PredictorMonitorEvaluation$ === "object");
assert(typeof PredictorSummary$ === "object");
assert(typeof ReferencePredictorSummary$ === "object");
assert(typeof ResumeResourceRequest$ === "object");
assert(typeof S3Config$ === "object");
assert(typeof Schema$ === "object");
assert(typeof SchemaAttribute$ === "object");
assert(typeof Statistics$ === "object");
assert(typeof StopResourceRequest$ === "object");
assert(typeof SupplementaryFeature$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TestWindowSummary$ === "object");
assert(typeof TimeAlignmentBoundary$ === "object");
assert(typeof TimeSeriesCondition$ === "object");
assert(typeof TimeSeriesIdentifiers$ === "object");
assert(typeof TimeSeriesReplacementsDataSource$ === "object");
assert(typeof TimeSeriesSelector$ === "object");
assert(typeof TimeSeriesTransformation$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateDatasetGroupRequest$ === "object");
assert(typeof UpdateDatasetGroupResponse$ === "object");
assert(typeof WeightedQuantileLoss$ === "object");
assert(typeof WhatIfAnalysisSummary$ === "object");
assert(typeof WhatIfForecastExportSummary$ === "object");
assert(typeof WhatIfForecastSummary$ === "object");
assert(typeof WindowSummary$ === "object");
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
assert(InvalidInputException.prototype instanceof ForecastServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidNextTokenException.prototype instanceof ForecastServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof ForecastServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof ForecastServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceInUseException.prototype instanceof ForecastServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ForecastServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ForecastServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDatasetGroups === "function");
assert(typeof paginateListDatasetImportJobs === "function");
assert(typeof paginateListDatasets === "function");
assert(typeof paginateListExplainabilities === "function");
assert(typeof paginateListExplainabilityExports === "function");
assert(typeof paginateListForecastExportJobs === "function");
assert(typeof paginateListForecasts === "function");
assert(typeof paginateListMonitorEvaluations === "function");
assert(typeof paginateListMonitors === "function");
assert(typeof paginateListPredictorBacktestExportJobs === "function");
assert(typeof paginateListPredictors === "function");
assert(typeof paginateListWhatIfAnalyses === "function");
assert(typeof paginateListWhatIfForecastExports === "function");
assert(typeof paginateListWhatIfForecasts === "function");
console.log(`Forecast index test passed.`);
