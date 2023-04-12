// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateAutoPredictorCommandInput,
  CreateAutoPredictorCommandOutput,
} from "../commands/CreateAutoPredictorCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput } from "../commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "../commands/CreateDatasetImportJobCommand";
import {
  CreateExplainabilityCommandInput,
  CreateExplainabilityCommandOutput,
} from "../commands/CreateExplainabilityCommand";
import {
  CreateExplainabilityExportCommandInput,
  CreateExplainabilityExportCommandOutput,
} from "../commands/CreateExplainabilityExportCommand";
import { CreateForecastCommandInput, CreateForecastCommandOutput } from "../commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
} from "../commands/CreateForecastExportJobCommand";
import { CreateMonitorCommandInput, CreateMonitorCommandOutput } from "../commands/CreateMonitorCommand";
import {
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
} from "../commands/CreatePredictorBacktestExportJobCommand";
import { CreatePredictorCommandInput, CreatePredictorCommandOutput } from "../commands/CreatePredictorCommand";
import {
  CreateWhatIfAnalysisCommandInput,
  CreateWhatIfAnalysisCommandOutput,
} from "../commands/CreateWhatIfAnalysisCommand";
import {
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
} from "../commands/CreateWhatIfForecastCommand";
import {
  CreateWhatIfForecastExportCommandInput,
  CreateWhatIfForecastExportCommandOutput,
} from "../commands/CreateWhatIfForecastExportCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteDatasetGroupCommandInput, DeleteDatasetGroupCommandOutput } from "../commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
} from "../commands/DeleteDatasetImportJobCommand";
import {
  DeleteExplainabilityCommandInput,
  DeleteExplainabilityCommandOutput,
} from "../commands/DeleteExplainabilityCommand";
import {
  DeleteExplainabilityExportCommandInput,
  DeleteExplainabilityExportCommandOutput,
} from "../commands/DeleteExplainabilityExportCommand";
import { DeleteForecastCommandInput, DeleteForecastCommandOutput } from "../commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
} from "../commands/DeleteForecastExportJobCommand";
import { DeleteMonitorCommandInput, DeleteMonitorCommandOutput } from "../commands/DeleteMonitorCommand";
import {
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
} from "../commands/DeletePredictorBacktestExportJobCommand";
import { DeletePredictorCommandInput, DeletePredictorCommandOutput } from "../commands/DeletePredictorCommand";
import { DeleteResourceTreeCommandInput, DeleteResourceTreeCommandOutput } from "../commands/DeleteResourceTreeCommand";
import {
  DeleteWhatIfAnalysisCommandInput,
  DeleteWhatIfAnalysisCommandOutput,
} from "../commands/DeleteWhatIfAnalysisCommand";
import {
  DeleteWhatIfForecastCommandInput,
  DeleteWhatIfForecastCommandOutput,
} from "../commands/DeleteWhatIfForecastCommand";
import {
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
} from "../commands/DeleteWhatIfForecastExportCommand";
import {
  DescribeAutoPredictorCommandInput,
  DescribeAutoPredictorCommandOutput,
} from "../commands/DescribeAutoPredictorCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "../commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "../commands/DescribeDatasetImportJobCommand";
import {
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
} from "../commands/DescribeExplainabilityCommand";
import {
  DescribeExplainabilityExportCommandInput,
  DescribeExplainabilityExportCommandOutput,
} from "../commands/DescribeExplainabilityExportCommand";
import { DescribeForecastCommandInput, DescribeForecastCommandOutput } from "../commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
} from "../commands/DescribeForecastExportJobCommand";
import { DescribeMonitorCommandInput, DescribeMonitorCommandOutput } from "../commands/DescribeMonitorCommand";
import {
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
} from "../commands/DescribePredictorBacktestExportJobCommand";
import { DescribePredictorCommandInput, DescribePredictorCommandOutput } from "../commands/DescribePredictorCommand";
import {
  DescribeWhatIfAnalysisCommandInput,
  DescribeWhatIfAnalysisCommandOutput,
} from "../commands/DescribeWhatIfAnalysisCommand";
import {
  DescribeWhatIfForecastCommandInput,
  DescribeWhatIfForecastCommandOutput,
} from "../commands/DescribeWhatIfForecastCommand";
import {
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
} from "../commands/DescribeWhatIfForecastExportCommand";
import { GetAccuracyMetricsCommandInput, GetAccuracyMetricsCommandOutput } from "../commands/GetAccuracyMetricsCommand";
import { ListDatasetGroupsCommandInput, ListDatasetGroupsCommandOutput } from "../commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "../commands/ListDatasetsCommand";
import {
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
} from "../commands/ListExplainabilitiesCommand";
import {
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "../commands/ListExplainabilityExportsCommand";
import {
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "../commands/ListForecastExportJobsCommand";
import { ListForecastsCommandInput, ListForecastsCommandOutput } from "../commands/ListForecastsCommand";
import {
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "../commands/ListMonitorEvaluationsCommand";
import { ListMonitorsCommandInput, ListMonitorsCommandOutput } from "../commands/ListMonitorsCommand";
import {
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "../commands/ListPredictorBacktestExportJobsCommand";
import { ListPredictorsCommandInput, ListPredictorsCommandOutput } from "../commands/ListPredictorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListWhatIfAnalysesCommandInput, ListWhatIfAnalysesCommandOutput } from "../commands/ListWhatIfAnalysesCommand";
import {
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
} from "../commands/ListWhatIfForecastExportsCommand";
import {
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "../commands/ListWhatIfForecastsCommand";
import { ResumeResourceCommandInput, ResumeResourceCommandOutput } from "../commands/ResumeResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "../commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "../commands/UpdateDatasetGroupCommand";
import { ForecastServiceException as __BaseException } from "../models/ForecastServiceException";
import {
  Action,
  AdditionalDataset,
  AttributeConfig,
  Baseline,
  BaselineMetric,
  CategoricalParameterRange,
  ContinuousParameterRange,
  CreateAutoPredictorRequest,
  CreateAutoPredictorResponse,
  CreateDatasetGroupRequest,
  CreateDatasetGroupResponse,
  CreateDatasetImportJobRequest,
  CreateDatasetImportJobResponse,
  CreateDatasetRequest,
  CreateDatasetResponse,
  CreateExplainabilityExportRequest,
  CreateExplainabilityExportResponse,
  CreateExplainabilityRequest,
  CreateExplainabilityResponse,
  CreateForecastExportJobRequest,
  CreateForecastExportJobResponse,
  CreateForecastRequest,
  CreateForecastResponse,
  CreateMonitorRequest,
  CreateMonitorResponse,
  CreatePredictorBacktestExportJobRequest,
  CreatePredictorBacktestExportJobResponse,
  CreatePredictorRequest,
  CreatePredictorResponse,
  CreateWhatIfAnalysisRequest,
  CreateWhatIfAnalysisResponse,
  CreateWhatIfForecastExportRequest,
  CreateWhatIfForecastExportResponse,
  CreateWhatIfForecastRequest,
  CreateWhatIfForecastResponse,
  DataConfig,
  DataDestination,
  DatasetGroupSummary,
  DatasetImportJobSummary,
  DatasetSummary,
  DataSource,
  DeleteDatasetGroupRequest,
  DeleteDatasetImportJobRequest,
  DeleteDatasetRequest,
  DeleteExplainabilityExportRequest,
  DeleteExplainabilityRequest,
  DeleteForecastExportJobRequest,
  DeleteForecastRequest,
  DeleteMonitorRequest,
  DeletePredictorBacktestExportJobRequest,
  DeletePredictorRequest,
  DeleteResourceTreeRequest,
  DeleteWhatIfAnalysisRequest,
  DeleteWhatIfForecastExportRequest,
  DeleteWhatIfForecastRequest,
  DescribeAutoPredictorRequest,
  DescribeAutoPredictorResponse,
  DescribeDatasetGroupRequest,
  DescribeDatasetGroupResponse,
  DescribeDatasetImportJobRequest,
  DescribeDatasetImportJobResponse,
  DescribeDatasetRequest,
  DescribeDatasetResponse,
  DescribeExplainabilityExportRequest,
  DescribeExplainabilityExportResponse,
  DescribeExplainabilityRequest,
  DescribeExplainabilityResponse,
  DescribeForecastExportJobRequest,
  DescribeForecastExportJobResponse,
  DescribeForecastRequest,
  DescribeForecastResponse,
  DescribeMonitorRequest,
  DescribeMonitorResponse,
  DescribePredictorBacktestExportJobRequest,
  DescribePredictorBacktestExportJobResponse,
  DescribePredictorRequest,
  DescribePredictorResponse,
  DescribeWhatIfAnalysisRequest,
  DescribeWhatIfAnalysisResponse,
  DescribeWhatIfForecastExportRequest,
  DescribeWhatIfForecastExportResponse,
  DescribeWhatIfForecastRequest,
  DescribeWhatIfForecastResponse,
  EncryptionConfig,
  ErrorMetric,
  EvaluationParameters,
  EvaluationResult,
  ExplainabilityConfig,
  ExplainabilityExportSummary,
  ExplainabilityInfo,
  ExplainabilitySummary,
  Featurization,
  FeaturizationConfig,
  FeaturizationMethod,
  Filter,
  ForecastExportJobSummary,
  ForecastSummary,
  GetAccuracyMetricsRequest,
  GetAccuracyMetricsResponse,
  HyperParameterTuningJobConfig,
  InputDataConfig,
  IntegerParameterRange,
  InvalidInputException,
  InvalidNextTokenException,
  LimitExceededException,
  ListDatasetGroupsRequest,
  ListDatasetGroupsResponse,
  ListDatasetImportJobsRequest,
  ListDatasetImportJobsResponse,
  ListDatasetsRequest,
  ListDatasetsResponse,
  ListExplainabilitiesRequest,
  ListExplainabilitiesResponse,
  ListExplainabilityExportsRequest,
  ListExplainabilityExportsResponse,
  ListForecastExportJobsRequest,
  ListForecastExportJobsResponse,
  ListForecastsRequest,
  ListForecastsResponse,
  ListMonitorEvaluationsRequest,
  ListMonitorEvaluationsResponse,
  ListMonitorsRequest,
  ListMonitorsResponse,
  ListPredictorBacktestExportJobsRequest,
  ListPredictorBacktestExportJobsResponse,
  ListPredictorsRequest,
  ListPredictorsResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListWhatIfAnalysesRequest,
  ListWhatIfAnalysesResponse,
  ListWhatIfForecastExportsRequest,
  ListWhatIfForecastExportsResponse,
  ListWhatIfForecastsRequest,
  ListWhatIfForecastsResponse,
  MetricResult,
  Metrics,
  MonitorConfig,
  MonitorDataSource,
  MonitorInfo,
  MonitorSummary,
  ParameterRanges,
  PredictorBacktestExportJobSummary,
  PredictorBaseline,
  PredictorEvent,
  PredictorExecution,
  PredictorExecutionDetails,
  PredictorMonitorEvaluation,
  PredictorSummary,
  ReferencePredictorSummary,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResumeResourceRequest,
  S3Config,
  Schema,
  SchemaAttribute,
  Statistics,
  StopResourceRequest,
  SupplementaryFeature,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TestWindowSummary,
  TimeAlignmentBoundary,
  TimeSeriesCondition,
  TimeSeriesIdentifiers,
  TimeSeriesReplacementsDataSource,
  TimeSeriesSelector,
  TimeSeriesTransformation,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDatasetGroupRequest,
  UpdateDatasetGroupResponse,
  WeightedQuantileLoss,
  WhatIfAnalysisSummary,
  WhatIfForecastExportSummary,
  WhatIfForecastSummary,
  WindowSummary,
} from "../models/models_0";

/**
 * serializeAws_json1_1CreateAutoPredictorCommand
 */
export const se_CreateAutoPredictorCommand = async (
  input: CreateAutoPredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoPredictor");
  let body: any;
  body = JSON.stringify(se_CreateAutoPredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataset");
  let body: any;
  body = JSON.stringify(se_CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetGroupCommand
 */
export const se_CreateDatasetGroupCommand = async (
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatasetGroup");
  let body: any;
  body = JSON.stringify(se_CreateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDatasetImportJobCommand
 */
export const se_CreateDatasetImportJobCommand = async (
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDatasetImportJob");
  let body: any;
  body = JSON.stringify(se_CreateDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExplainabilityCommand
 */
export const se_CreateExplainabilityCommand = async (
  input: CreateExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExplainability");
  let body: any;
  body = JSON.stringify(se_CreateExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateExplainabilityExportCommand
 */
export const se_CreateExplainabilityExportCommand = async (
  input: CreateExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateExplainabilityExport");
  let body: any;
  body = JSON.stringify(se_CreateExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateForecastCommand
 */
export const se_CreateForecastCommand = async (
  input: CreateForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateForecast");
  let body: any;
  body = JSON.stringify(se_CreateForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateForecastExportJobCommand
 */
export const se_CreateForecastExportJobCommand = async (
  input: CreateForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateForecastExportJob");
  let body: any;
  body = JSON.stringify(se_CreateForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMonitorCommand
 */
export const se_CreateMonitorCommand = async (
  input: CreateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMonitor");
  let body: any;
  body = JSON.stringify(se_CreateMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePredictorCommand
 */
export const se_CreatePredictorCommand = async (
  input: CreatePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePredictor");
  let body: any;
  body = JSON.stringify(se_CreatePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePredictorBacktestExportJobCommand
 */
export const se_CreatePredictorBacktestExportJobCommand = async (
  input: CreatePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreatePredictorBacktestExportJob");
  let body: any;
  body = JSON.stringify(se_CreatePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWhatIfAnalysisCommand
 */
export const se_CreateWhatIfAnalysisCommand = async (
  input: CreateWhatIfAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWhatIfAnalysis");
  let body: any;
  body = JSON.stringify(se_CreateWhatIfAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWhatIfForecastCommand
 */
export const se_CreateWhatIfForecastCommand = async (
  input: CreateWhatIfForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWhatIfForecast");
  let body: any;
  body = JSON.stringify(se_CreateWhatIfForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateWhatIfForecastExportCommand
 */
export const se_CreateWhatIfForecastExportCommand = async (
  input: CreateWhatIfForecastExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateWhatIfForecastExport");
  let body: any;
  body = JSON.stringify(se_CreateWhatIfForecastExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataset");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetGroupCommand
 */
export const se_DeleteDatasetGroupCommand = async (
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDatasetGroup");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDatasetImportJobCommand
 */
export const se_DeleteDatasetImportJobCommand = async (
  input: DeleteDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDatasetImportJob");
  let body: any;
  body = JSON.stringify(se_DeleteDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExplainabilityCommand
 */
export const se_DeleteExplainabilityCommand = async (
  input: DeleteExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExplainability");
  let body: any;
  body = JSON.stringify(se_DeleteExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteExplainabilityExportCommand
 */
export const se_DeleteExplainabilityExportCommand = async (
  input: DeleteExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteExplainabilityExport");
  let body: any;
  body = JSON.stringify(se_DeleteExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteForecastCommand
 */
export const se_DeleteForecastCommand = async (
  input: DeleteForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteForecast");
  let body: any;
  body = JSON.stringify(se_DeleteForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteForecastExportJobCommand
 */
export const se_DeleteForecastExportJobCommand = async (
  input: DeleteForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteForecastExportJob");
  let body: any;
  body = JSON.stringify(se_DeleteForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMonitorCommand
 */
export const se_DeleteMonitorCommand = async (
  input: DeleteMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMonitor");
  let body: any;
  body = JSON.stringify(se_DeleteMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePredictorCommand
 */
export const se_DeletePredictorCommand = async (
  input: DeletePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePredictor");
  let body: any;
  body = JSON.stringify(se_DeletePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeletePredictorBacktestExportJobCommand
 */
export const se_DeletePredictorBacktestExportJobCommand = async (
  input: DeletePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeletePredictorBacktestExportJob");
  let body: any;
  body = JSON.stringify(se_DeletePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteResourceTreeCommand
 */
export const se_DeleteResourceTreeCommand = async (
  input: DeleteResourceTreeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteResourceTree");
  let body: any;
  body = JSON.stringify(se_DeleteResourceTreeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWhatIfAnalysisCommand
 */
export const se_DeleteWhatIfAnalysisCommand = async (
  input: DeleteWhatIfAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWhatIfAnalysis");
  let body: any;
  body = JSON.stringify(se_DeleteWhatIfAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWhatIfForecastCommand
 */
export const se_DeleteWhatIfForecastCommand = async (
  input: DeleteWhatIfForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWhatIfForecast");
  let body: any;
  body = JSON.stringify(se_DeleteWhatIfForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteWhatIfForecastExportCommand
 */
export const se_DeleteWhatIfForecastExportCommand = async (
  input: DeleteWhatIfForecastExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteWhatIfForecastExport");
  let body: any;
  body = JSON.stringify(se_DeleteWhatIfForecastExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeAutoPredictorCommand
 */
export const se_DescribeAutoPredictorCommand = async (
  input: DescribeAutoPredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoPredictor");
  let body: any;
  body = JSON.stringify(se_DescribeAutoPredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataset");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetGroupCommand
 */
export const se_DescribeDatasetGroupCommand = async (
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatasetGroup");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDatasetImportJobCommand
 */
export const se_DescribeDatasetImportJobCommand = async (
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDatasetImportJob");
  let body: any;
  body = JSON.stringify(se_DescribeDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExplainabilityCommand
 */
export const se_DescribeExplainabilityCommand = async (
  input: DescribeExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExplainability");
  let body: any;
  body = JSON.stringify(se_DescribeExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeExplainabilityExportCommand
 */
export const se_DescribeExplainabilityExportCommand = async (
  input: DescribeExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeExplainabilityExport");
  let body: any;
  body = JSON.stringify(se_DescribeExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeForecastCommand
 */
export const se_DescribeForecastCommand = async (
  input: DescribeForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeForecast");
  let body: any;
  body = JSON.stringify(se_DescribeForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeForecastExportJobCommand
 */
export const se_DescribeForecastExportJobCommand = async (
  input: DescribeForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeForecastExportJob");
  let body: any;
  body = JSON.stringify(se_DescribeForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeMonitorCommand
 */
export const se_DescribeMonitorCommand = async (
  input: DescribeMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeMonitor");
  let body: any;
  body = JSON.stringify(se_DescribeMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePredictorCommand
 */
export const se_DescribePredictorCommand = async (
  input: DescribePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePredictor");
  let body: any;
  body = JSON.stringify(se_DescribePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribePredictorBacktestExportJobCommand
 */
export const se_DescribePredictorBacktestExportJobCommand = async (
  input: DescribePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribePredictorBacktestExportJob");
  let body: any;
  body = JSON.stringify(se_DescribePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWhatIfAnalysisCommand
 */
export const se_DescribeWhatIfAnalysisCommand = async (
  input: DescribeWhatIfAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWhatIfAnalysis");
  let body: any;
  body = JSON.stringify(se_DescribeWhatIfAnalysisRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWhatIfForecastCommand
 */
export const se_DescribeWhatIfForecastCommand = async (
  input: DescribeWhatIfForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWhatIfForecast");
  let body: any;
  body = JSON.stringify(se_DescribeWhatIfForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeWhatIfForecastExportCommand
 */
export const se_DescribeWhatIfForecastExportCommand = async (
  input: DescribeWhatIfForecastExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeWhatIfForecastExport");
  let body: any;
  body = JSON.stringify(se_DescribeWhatIfForecastExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetAccuracyMetricsCommand
 */
export const se_GetAccuracyMetricsCommand = async (
  input: GetAccuracyMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccuracyMetrics");
  let body: any;
  body = JSON.stringify(se_GetAccuracyMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetGroupsCommand
 */
export const se_ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetGroups");
  let body: any;
  body = JSON.stringify(se_ListDatasetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetImportJobsCommand
 */
export const se_ListDatasetImportJobsCommand = async (
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasetImportJobs");
  let body: any;
  body = JSON.stringify(se_ListDatasetImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListDatasetsCommand
 */
export const se_ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDatasets");
  let body: any;
  body = JSON.stringify(se_ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExplainabilitiesCommand
 */
export const se_ListExplainabilitiesCommand = async (
  input: ListExplainabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExplainabilities");
  let body: any;
  body = JSON.stringify(se_ListExplainabilitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListExplainabilityExportsCommand
 */
export const se_ListExplainabilityExportsCommand = async (
  input: ListExplainabilityExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListExplainabilityExports");
  let body: any;
  body = JSON.stringify(se_ListExplainabilityExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListForecastExportJobsCommand
 */
export const se_ListForecastExportJobsCommand = async (
  input: ListForecastExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListForecastExportJobs");
  let body: any;
  body = JSON.stringify(se_ListForecastExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListForecastsCommand
 */
export const se_ListForecastsCommand = async (
  input: ListForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListForecasts");
  let body: any;
  body = JSON.stringify(se_ListForecastsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitorEvaluationsCommand
 */
export const se_ListMonitorEvaluationsCommand = async (
  input: ListMonitorEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitorEvaluations");
  let body: any;
  body = JSON.stringify(se_ListMonitorEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMonitorsCommand
 */
export const se_ListMonitorsCommand = async (
  input: ListMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMonitors");
  let body: any;
  body = JSON.stringify(se_ListMonitorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPredictorBacktestExportJobsCommand
 */
export const se_ListPredictorBacktestExportJobsCommand = async (
  input: ListPredictorBacktestExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPredictorBacktestExportJobs");
  let body: any;
  body = JSON.stringify(se_ListPredictorBacktestExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListPredictorsCommand
 */
export const se_ListPredictorsCommand = async (
  input: ListPredictorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListPredictors");
  let body: any;
  body = JSON.stringify(se_ListPredictorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWhatIfAnalysesCommand
 */
export const se_ListWhatIfAnalysesCommand = async (
  input: ListWhatIfAnalysesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWhatIfAnalyses");
  let body: any;
  body = JSON.stringify(se_ListWhatIfAnalysesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWhatIfForecastExportsCommand
 */
export const se_ListWhatIfForecastExportsCommand = async (
  input: ListWhatIfForecastExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWhatIfForecastExports");
  let body: any;
  body = JSON.stringify(se_ListWhatIfForecastExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListWhatIfForecastsCommand
 */
export const se_ListWhatIfForecastsCommand = async (
  input: ListWhatIfForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListWhatIfForecasts");
  let body: any;
  body = JSON.stringify(se_ListWhatIfForecastsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ResumeResourceCommand
 */
export const se_ResumeResourceCommand = async (
  input: ResumeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeResource");
  let body: any;
  body = JSON.stringify(se_ResumeResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StopResourceCommand
 */
export const se_StopResourceCommand = async (
  input: StopResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StopResource");
  let body: any;
  body = JSON.stringify(se_StopResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDatasetGroupCommand
 */
export const se_UpdateDatasetGroupCommand = async (
  input: UpdateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDatasetGroup");
  let body: any;
  body = JSON.stringify(se_UpdateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateAutoPredictorCommand
 */
export const de_CreateAutoPredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoPredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAutoPredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAutoPredictorResponse(data, context);
  const response: CreateAutoPredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateAutoPredictorCommandError
 */
const de_CreateAutoPredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoPredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetGroupCommand
 */
export const de_CreateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetGroupResponse(data, context);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetGroupCommandError
 */
const de_CreateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobCommand
 */
export const de_CreateDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDatasetImportJobResponse(data, context);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobCommandError
 */
const de_CreateDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateExplainabilityCommand
 */
export const de_CreateExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExplainabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateExplainabilityResponse(data, context);
  const response: CreateExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateExplainabilityCommandError
 */
const de_CreateExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateExplainabilityExportCommand
 */
export const de_CreateExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateExplainabilityExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateExplainabilityExportResponse(data, context);
  const response: CreateExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateExplainabilityExportCommandError
 */
const de_CreateExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateForecastCommand
 */
export const de_CreateForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateForecastResponse(data, context);
  const response: CreateForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateForecastCommandError
 */
const de_CreateForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateForecastExportJobCommand
 */
export const de_CreateForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateForecastExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateForecastExportJobResponse(data, context);
  const response: CreateForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateForecastExportJobCommandError
 */
const de_CreateForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateMonitorCommand
 */
export const de_CreateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMonitorResponse(data, context);
  const response: CreateMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateMonitorCommandError
 */
const de_CreateMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePredictorCommand
 */
export const de_CreatePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePredictorResponse(data, context);
  const response: CreatePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePredictorCommandError
 */
const de_CreatePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePredictorBacktestExportJobCommand
 */
export const de_CreatePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePredictorBacktestExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePredictorBacktestExportJobResponse(data, context);
  const response: CreatePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePredictorBacktestExportJobCommandError
 */
const de_CreatePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWhatIfAnalysisCommand
 */
export const de_CreateWhatIfAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWhatIfAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWhatIfAnalysisResponse(data, context);
  const response: CreateWhatIfAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWhatIfAnalysisCommandError
 */
const de_CreateWhatIfAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastCommand
 */
export const de_CreateWhatIfForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWhatIfForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWhatIfForecastResponse(data, context);
  const response: CreateWhatIfForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastCommandError
 */
const de_CreateWhatIfForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastExportCommand
 */
export const de_CreateWhatIfForecastExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfForecastExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateWhatIfForecastExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateWhatIfForecastExportResponse(data, context);
  const response: CreateWhatIfForecastExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastExportCommandError
 */
const de_CreateWhatIfForecastExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateWhatIfForecastExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatasetGroupCommand
 */
export const de_DeleteDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetGroupCommandError
 */
const de_DeleteDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDatasetImportJobCommand
 */
export const de_DeleteDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDatasetImportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteDatasetImportJobCommandError
 */
const de_DeleteDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteExplainabilityCommand
 */
export const de_DeleteExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExplainabilityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteExplainabilityCommandError
 */
const de_DeleteExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteExplainabilityExportCommand
 */
export const de_DeleteExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteExplainabilityExportCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteExplainabilityExportCommandError
 */
const de_DeleteExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteForecastCommand
 */
export const de_DeleteForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteForecastCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteForecastCommandError
 */
const de_DeleteForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteForecastExportJobCommand
 */
export const de_DeleteForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteForecastExportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteForecastExportJobCommandError
 */
const de_DeleteForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteMonitorCommand
 */
export const de_DeleteMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMonitorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteMonitorCommandError
 */
const de_DeleteMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePredictorCommand
 */
export const de_DeletePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePredictorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePredictorCommandError
 */
const de_DeletePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeletePredictorBacktestExportJobCommand
 */
export const de_DeletePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeletePredictorBacktestExportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeletePredictorBacktestExportJobCommandError
 */
const de_DeletePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteResourceTreeCommand
 */
export const de_DeleteResourceTreeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceTreeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteResourceTreeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceTreeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteResourceTreeCommandError
 */
const de_DeleteResourceTreeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceTreeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWhatIfAnalysisCommand
 */
export const de_DeleteWhatIfAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWhatIfAnalysisCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWhatIfAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWhatIfAnalysisCommandError
 */
const de_DeleteWhatIfAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWhatIfForecastCommand
 */
export const de_DeleteWhatIfForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWhatIfForecastCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWhatIfForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWhatIfForecastCommandError
 */
const de_DeleteWhatIfForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteWhatIfForecastExportCommand
 */
export const de_DeleteWhatIfForecastExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfForecastExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteWhatIfForecastExportCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteWhatIfForecastExportCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteWhatIfForecastExportCommandError
 */
const de_DeleteWhatIfForecastExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteWhatIfForecastExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeAutoPredictorCommand
 */
export const de_DescribeAutoPredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoPredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoPredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoPredictorResponse(data, context);
  const response: DescribeAutoPredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeAutoPredictorCommandError
 */
const de_DescribeAutoPredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoPredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupCommand
 */
export const de_DescribeDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetGroupResponse(data, context);
  const response: DescribeDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupCommandError
 */
const de_DescribeDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobCommand
 */
export const de_DescribeDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDatasetImportJobResponse(data, context);
  const response: DescribeDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobCommandError
 */
const de_DescribeDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeExplainabilityCommand
 */
export const de_DescribeExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExplainabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExplainabilityResponse(data, context);
  const response: DescribeExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExplainabilityCommandError
 */
const de_DescribeExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeExplainabilityExportCommand
 */
export const de_DescribeExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeExplainabilityExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeExplainabilityExportResponse(data, context);
  const response: DescribeExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeExplainabilityExportCommandError
 */
const de_DescribeExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeForecastCommand
 */
export const de_DescribeForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeForecastResponse(data, context);
  const response: DescribeForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeForecastCommandError
 */
const de_DescribeForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeForecastExportJobCommand
 */
export const de_DescribeForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeForecastExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeForecastExportJobResponse(data, context);
  const response: DescribeForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeForecastExportJobCommandError
 */
const de_DescribeForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeMonitorCommand
 */
export const de_DescribeMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeMonitorResponse(data, context);
  const response: DescribeMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeMonitorCommandError
 */
const de_DescribeMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePredictorCommand
 */
export const de_DescribePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePredictorResponse(data, context);
  const response: DescribePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePredictorCommandError
 */
const de_DescribePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribePredictorBacktestExportJobCommand
 */
export const de_DescribePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribePredictorBacktestExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribePredictorBacktestExportJobResponse(data, context);
  const response: DescribePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribePredictorBacktestExportJobCommandError
 */
const de_DescribePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWhatIfAnalysisCommand
 */
export const de_DescribeWhatIfAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfAnalysisCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWhatIfAnalysisCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWhatIfAnalysisResponse(data, context);
  const response: DescribeWhatIfAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWhatIfAnalysisCommandError
 */
const de_DescribeWhatIfAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastCommand
 */
export const de_DescribeWhatIfForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWhatIfForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWhatIfForecastResponse(data, context);
  const response: DescribeWhatIfForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastCommandError
 */
const de_DescribeWhatIfForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastExportCommand
 */
export const de_DescribeWhatIfForecastExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfForecastExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeWhatIfForecastExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeWhatIfForecastExportResponse(data, context);
  const response: DescribeWhatIfForecastExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastExportCommandError
 */
const de_DescribeWhatIfForecastExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeWhatIfForecastExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetAccuracyMetricsCommand
 */
export const de_GetAccuracyMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccuracyMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetAccuracyMetricsResponse(data, context);
  const response: GetAccuracyMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetAccuracyMetricsCommandError
 */
const de_GetAccuracyMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetGroupsCommand
 */
export const de_ListDatasetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetGroupsResponse(data, context);
  const response: ListDatasetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetGroupsCommandError
 */
const de_ListDatasetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsCommand
 */
export const de_ListDatasetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetImportJobsResponse(data, context);
  const response: ListDatasetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsCommandError
 */
const de_ListDatasetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListDatasetsCommand
 */
export const de_ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListDatasetsCommandError
 */
const de_ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListExplainabilitiesCommand
 */
export const de_ListExplainabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExplainabilitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExplainabilitiesResponse(data, context);
  const response: ListExplainabilitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListExplainabilitiesCommandError
 */
const de_ListExplainabilitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListExplainabilityExportsCommand
 */
export const de_ListExplainabilityExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilityExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListExplainabilityExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListExplainabilityExportsResponse(data, context);
  const response: ListExplainabilityExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListExplainabilityExportsCommandError
 */
const de_ListExplainabilityExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilityExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListForecastExportJobsCommand
 */
export const de_ListForecastExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListForecastExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListForecastExportJobsResponse(data, context);
  const response: ListForecastExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListForecastExportJobsCommandError
 */
const de_ListForecastExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListForecastsCommand
 */
export const de_ListForecastsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListForecastsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListForecastsResponse(data, context);
  const response: ListForecastsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListForecastsCommandError
 */
const de_ListForecastsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMonitorEvaluationsCommand
 */
export const de_ListMonitorEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitorEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitorEvaluationsResponse(data, context);
  const response: ListMonitorEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMonitorEvaluationsCommandError
 */
const de_ListMonitorEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListMonitorsCommand
 */
export const de_ListMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMonitorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMonitorsResponse(data, context);
  const response: ListMonitorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListMonitorsCommandError
 */
const de_ListMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPredictorBacktestExportJobsCommand
 */
export const de_ListPredictorBacktestExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPredictorBacktestExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPredictorBacktestExportJobsResponse(data, context);
  const response: ListPredictorBacktestExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPredictorBacktestExportJobsCommandError
 */
const de_ListPredictorBacktestExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListPredictorsCommand
 */
export const de_ListPredictorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListPredictorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListPredictorsResponse(data, context);
  const response: ListPredictorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListPredictorsCommandError
 */
const de_ListPredictorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListWhatIfAnalysesCommand
 */
export const de_ListWhatIfAnalysesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfAnalysesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWhatIfAnalysesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWhatIfAnalysesResponse(data, context);
  const response: ListWhatIfAnalysesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWhatIfAnalysesCommandError
 */
const de_ListWhatIfAnalysesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfAnalysesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListWhatIfForecastExportsCommand
 */
export const de_ListWhatIfForecastExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfForecastExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWhatIfForecastExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWhatIfForecastExportsResponse(data, context);
  const response: ListWhatIfForecastExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWhatIfForecastExportsCommandError
 */
const de_ListWhatIfForecastExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfForecastExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListWhatIfForecastsCommand
 */
export const de_ListWhatIfForecastsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfForecastsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListWhatIfForecastsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListWhatIfForecastsResponse(data, context);
  const response: ListWhatIfForecastsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListWhatIfForecastsCommandError
 */
const de_ListWhatIfForecastsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListWhatIfForecastsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await de_InvalidNextTokenExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ResumeResourceCommand
 */
export const de_ResumeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ResumeResourceCommandError
 */
const de_ResumeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1StopResourceCommand
 */
export const de_StopResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1StopResourceCommandError
 */
const de_StopResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDatasetGroupCommand
 */
export const de_UpdateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDatasetGroupResponse(data, context);
  const response: UpdateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateDatasetGroupCommandError
 */
const de_UpdateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNextTokenExceptionRes
 */
const de_InvalidNextTokenExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.Value != null && { Value: __serializeFloat(input.Value) }),
  };
};

/**
 * serializeAws_json1_1AdditionalDataset
 */
const se_AdditionalDataset = (input: AdditionalDataset, context: __SerdeContext): any => {
  return {
    ...(input.Configuration != null && { Configuration: se_Configuration(input.Configuration, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1AdditionalDatasets
 */
const se_AdditionalDatasets = (input: AdditionalDataset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdditionalDataset(entry, context);
    });
};

/**
 * serializeAws_json1_1ArnList
 */
const se_ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AttributeConfig
 */
const se_AttributeConfig = (input: AttributeConfig, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.Transformations != null && { Transformations: se_Transformations(input.Transformations, context) }),
  };
};

/**
 * serializeAws_json1_1AttributeConfigs
 */
const se_AttributeConfigs = (input: AttributeConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AttributeConfig(entry, context);
    });
};

/**
 * serializeAws_json1_1CategoricalParameterRange
 */
const se_CategoricalParameterRange = (input: CategoricalParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_Values(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1CategoricalParameterRanges
 */
const se_CategoricalParameterRanges = (input: CategoricalParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CategoricalParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1Configuration
 */
const se_Configuration = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Values(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1ContinuousParameterRange
 */
const se_ContinuousParameterRange = (input: ContinuousParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxValue != null && { MaxValue: __serializeFloat(input.MaxValue) }),
    ...(input.MinValue != null && { MinValue: __serializeFloat(input.MinValue) }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScalingType != null && { ScalingType: input.ScalingType }),
  };
};

/**
 * serializeAws_json1_1ContinuousParameterRanges
 */
const se_ContinuousParameterRanges = (input: ContinuousParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ContinuousParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateAutoPredictorRequest
 */
const se_CreateAutoPredictorRequest = (input: CreateAutoPredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataConfig != null && { DataConfig: se_DataConfig(input.DataConfig, context) }),
    ...(input.EncryptionConfig != null && { EncryptionConfig: se_EncryptionConfig(input.EncryptionConfig, context) }),
    ...(input.ExplainPredictor != null && { ExplainPredictor: input.ExplainPredictor }),
    ...(input.ForecastDimensions != null && {
      ForecastDimensions: se_ForecastDimensions(input.ForecastDimensions, context),
    }),
    ...(input.ForecastFrequency != null && { ForecastFrequency: input.ForecastFrequency }),
    ...(input.ForecastHorizon != null && { ForecastHorizon: input.ForecastHorizon }),
    ...(input.ForecastTypes != null && { ForecastTypes: se_ForecastTypes(input.ForecastTypes, context) }),
    ...(input.MonitorConfig != null && { MonitorConfig: se_MonitorConfig(input.MonitorConfig, context) }),
    ...(input.OptimizationMetric != null && { OptimizationMetric: input.OptimizationMetric }),
    ...(input.PredictorName != null && { PredictorName: input.PredictorName }),
    ...(input.ReferencePredictorArn != null && { ReferencePredictorArn: input.ReferencePredictorArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TimeAlignmentBoundary != null && {
      TimeAlignmentBoundary: se_TimeAlignmentBoundary(input.TimeAlignmentBoundary, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetGroupRequest
 */
const se_CreateDatasetGroupRequest = (input: CreateDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArns != null && { DatasetArns: se_ArnList(input.DatasetArns, context) }),
    ...(input.DatasetGroupName != null && { DatasetGroupName: input.DatasetGroupName }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetImportJobRequest
 */
const se_CreateDatasetImportJobRequest = (input: CreateDatasetImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSource != null && { DataSource: se_DataSource(input.DataSource, context) }),
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
    ...(input.DatasetImportJobName != null && { DatasetImportJobName: input.DatasetImportJobName }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.GeolocationFormat != null && { GeolocationFormat: input.GeolocationFormat }),
    ...(input.ImportMode != null && { ImportMode: input.ImportMode }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TimeZone != null && { TimeZone: input.TimeZone }),
    ...(input.TimestampFormat != null && { TimestampFormat: input.TimestampFormat }),
    ...(input.UseGeolocationForTimeZone != null && { UseGeolocationForTimeZone: input.UseGeolocationForTimeZone }),
  };
};

/**
 * serializeAws_json1_1CreateDatasetRequest
 */
const se_CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataFrequency != null && { DataFrequency: input.DataFrequency }),
    ...(input.DatasetName != null && { DatasetName: input.DatasetName }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.EncryptionConfig != null && { EncryptionConfig: se_EncryptionConfig(input.EncryptionConfig, context) }),
    ...(input.Schema != null && { Schema: se_Schema(input.Schema, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateExplainabilityExportRequest
 */
const se_CreateExplainabilityExportRequest = (
  input: CreateExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: se_DataDestination(input.Destination, context) }),
    ...(input.ExplainabilityArn != null && { ExplainabilityArn: input.ExplainabilityArn }),
    ...(input.ExplainabilityExportName != null && { ExplainabilityExportName: input.ExplainabilityExportName }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateExplainabilityRequest
 */
const se_CreateExplainabilityRequest = (input: CreateExplainabilityRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataSource != null && { DataSource: se_DataSource(input.DataSource, context) }),
    ...(input.EnableVisualization != null && { EnableVisualization: input.EnableVisualization }),
    ...(input.EndDateTime != null && { EndDateTime: input.EndDateTime }),
    ...(input.ExplainabilityConfig != null && {
      ExplainabilityConfig: se_ExplainabilityConfig(input.ExplainabilityConfig, context),
    }),
    ...(input.ExplainabilityName != null && { ExplainabilityName: input.ExplainabilityName }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Schema != null && { Schema: se_Schema(input.Schema, context) }),
    ...(input.StartDateTime != null && { StartDateTime: input.StartDateTime }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateForecastExportJobRequest
 */
const se_CreateForecastExportJobRequest = (input: CreateForecastExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: se_DataDestination(input.Destination, context) }),
    ...(input.ForecastArn != null && { ForecastArn: input.ForecastArn }),
    ...(input.ForecastExportJobName != null && { ForecastExportJobName: input.ForecastExportJobName }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateForecastRequest
 */
const se_CreateForecastRequest = (input: CreateForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastName != null && { ForecastName: input.ForecastName }),
    ...(input.ForecastTypes != null && { ForecastTypes: se_ForecastTypes(input.ForecastTypes, context) }),
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TimeSeriesSelector != null && {
      TimeSeriesSelector: se_TimeSeriesSelector(input.TimeSeriesSelector, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateMonitorRequest
 */
const se_CreateMonitorRequest = (input: CreateMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePredictorBacktestExportJobRequest
 */
const se_CreatePredictorBacktestExportJobRequest = (
  input: CreatePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: se_DataDestination(input.Destination, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
    ...(input.PredictorBacktestExportJobName != null && {
      PredictorBacktestExportJobName: input.PredictorBacktestExportJobName,
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePredictorRequest
 */
const se_CreatePredictorRequest = (input: CreatePredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmArn != null && { AlgorithmArn: input.AlgorithmArn }),
    ...(input.AutoMLOverrideStrategy != null && { AutoMLOverrideStrategy: input.AutoMLOverrideStrategy }),
    ...(input.EncryptionConfig != null && { EncryptionConfig: se_EncryptionConfig(input.EncryptionConfig, context) }),
    ...(input.EvaluationParameters != null && {
      EvaluationParameters: se_EvaluationParameters(input.EvaluationParameters, context),
    }),
    ...(input.FeaturizationConfig != null && {
      FeaturizationConfig: se_FeaturizationConfig(input.FeaturizationConfig, context),
    }),
    ...(input.ForecastHorizon != null && { ForecastHorizon: input.ForecastHorizon }),
    ...(input.ForecastTypes != null && { ForecastTypes: se_ForecastTypes(input.ForecastTypes, context) }),
    ...(input.HPOConfig != null && { HPOConfig: se_HyperParameterTuningJobConfig(input.HPOConfig, context) }),
    ...(input.InputDataConfig != null && { InputDataConfig: se_InputDataConfig(input.InputDataConfig, context) }),
    ...(input.OptimizationMetric != null && { OptimizationMetric: input.OptimizationMetric }),
    ...(input.PerformAutoML != null && { PerformAutoML: input.PerformAutoML }),
    ...(input.PerformHPO != null && { PerformHPO: input.PerformHPO }),
    ...(input.PredictorName != null && { PredictorName: input.PredictorName }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TrainingParameters != null && {
      TrainingParameters: se_TrainingParameters(input.TrainingParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateWhatIfAnalysisRequest
 */
const se_CreateWhatIfAnalysisRequest = (input: CreateWhatIfAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastArn != null && { ForecastArn: input.ForecastArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TimeSeriesSelector != null && {
      TimeSeriesSelector: se_TimeSeriesSelector(input.TimeSeriesSelector, context),
    }),
    ...(input.WhatIfAnalysisName != null && { WhatIfAnalysisName: input.WhatIfAnalysisName }),
  };
};

/**
 * serializeAws_json1_1CreateWhatIfForecastExportRequest
 */
const se_CreateWhatIfForecastExportRequest = (
  input: CreateWhatIfForecastExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: se_DataDestination(input.Destination, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.WhatIfForecastArns != null && {
      WhatIfForecastArns: se_WhatIfForecastArnListForExport(input.WhatIfForecastArns, context),
    }),
    ...(input.WhatIfForecastExportName != null && { WhatIfForecastExportName: input.WhatIfForecastExportName }),
  };
};

/**
 * serializeAws_json1_1CreateWhatIfForecastRequest
 */
const se_CreateWhatIfForecastRequest = (input: CreateWhatIfForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.TimeSeriesReplacementsDataSource != null && {
      TimeSeriesReplacementsDataSource: se_TimeSeriesReplacementsDataSource(
        input.TimeSeriesReplacementsDataSource,
        context
      ),
    }),
    ...(input.TimeSeriesTransformations != null && {
      TimeSeriesTransformations: se_TimeSeriesTransformations(input.TimeSeriesTransformations, context),
    }),
    ...(input.WhatIfAnalysisArn != null && { WhatIfAnalysisArn: input.WhatIfAnalysisArn }),
    ...(input.WhatIfForecastName != null && { WhatIfForecastName: input.WhatIfForecastName }),
  };
};

/**
 * serializeAws_json1_1DataConfig
 */
const se_DataConfig = (input: DataConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalDatasets != null && {
      AdditionalDatasets: se_AdditionalDatasets(input.AdditionalDatasets, context),
    }),
    ...(input.AttributeConfigs != null && { AttributeConfigs: se_AttributeConfigs(input.AttributeConfigs, context) }),
    ...(input.DatasetGroupArn != null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1DataDestination
 */
const se_DataDestination = (input: DataDestination, context: __SerdeContext): any => {
  return {
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
  };
};

/**
 * serializeAws_json1_1DataSource
 */
const se_DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetGroupRequest
 */
const se_DeleteDatasetGroupRequest = (input: DeleteDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetGroupArn != null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetImportJobRequest
 */
const se_DeleteDatasetImportJobRequest = (input: DeleteDatasetImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetImportJobArn != null && { DatasetImportJobArn: input.DatasetImportJobArn }),
  };
};

/**
 * serializeAws_json1_1DeleteDatasetRequest
 */
const se_DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1DeleteExplainabilityExportRequest
 */
const se_DeleteExplainabilityExportRequest = (
  input: DeleteExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityExportArn != null && { ExplainabilityExportArn: input.ExplainabilityExportArn }),
  };
};

/**
 * serializeAws_json1_1DeleteExplainabilityRequest
 */
const se_DeleteExplainabilityRequest = (input: DeleteExplainabilityRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExplainabilityArn != null && { ExplainabilityArn: input.ExplainabilityArn }),
  };
};

/**
 * serializeAws_json1_1DeleteForecastExportJobRequest
 */
const se_DeleteForecastExportJobRequest = (input: DeleteForecastExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastExportJobArn != null && { ForecastExportJobArn: input.ForecastExportJobArn }),
  };
};

/**
 * serializeAws_json1_1DeleteForecastRequest
 */
const se_DeleteForecastRequest = (input: DeleteForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastArn != null && { ForecastArn: input.ForecastArn }),
  };
};

/**
 * serializeAws_json1_1DeleteMonitorRequest
 */
const se_DeleteMonitorRequest = (input: DeleteMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
  };
};

/**
 * serializeAws_json1_1DeletePredictorBacktestExportJobRequest
 */
const se_DeletePredictorBacktestExportJobRequest = (
  input: DeletePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorBacktestExportJobArn != null && {
      PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
    }),
  };
};

/**
 * serializeAws_json1_1DeletePredictorRequest
 */
const se_DeletePredictorRequest = (input: DeletePredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
  };
};

/**
 * serializeAws_json1_1DeleteResourceTreeRequest
 */
const se_DeleteResourceTreeRequest = (input: DeleteResourceTreeRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1DeleteWhatIfAnalysisRequest
 */
const se_DeleteWhatIfAnalysisRequest = (input: DeleteWhatIfAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.WhatIfAnalysisArn != null && { WhatIfAnalysisArn: input.WhatIfAnalysisArn }),
  };
};

/**
 * serializeAws_json1_1DeleteWhatIfForecastExportRequest
 */
const se_DeleteWhatIfForecastExportRequest = (
  input: DeleteWhatIfForecastExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WhatIfForecastExportArn != null && { WhatIfForecastExportArn: input.WhatIfForecastExportArn }),
  };
};

/**
 * serializeAws_json1_1DeleteWhatIfForecastRequest
 */
const se_DeleteWhatIfForecastRequest = (input: DeleteWhatIfForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.WhatIfForecastArn != null && { WhatIfForecastArn: input.WhatIfForecastArn }),
  };
};

/**
 * serializeAws_json1_1DescribeAutoPredictorRequest
 */
const se_DescribeAutoPredictorRequest = (input: DescribeAutoPredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetGroupRequest
 */
const se_DescribeDatasetGroupRequest = (input: DescribeDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetGroupArn != null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetImportJobRequest
 */
const se_DescribeDatasetImportJobRequest = (input: DescribeDatasetImportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetImportJobArn != null && { DatasetImportJobArn: input.DatasetImportJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeDatasetRequest
 */
const se_DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn != null && { DatasetArn: input.DatasetArn }),
  };
};

/**
 * serializeAws_json1_1DescribeExplainabilityExportRequest
 */
const se_DescribeExplainabilityExportRequest = (
  input: DescribeExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityExportArn != null && { ExplainabilityExportArn: input.ExplainabilityExportArn }),
  };
};

/**
 * serializeAws_json1_1DescribeExplainabilityRequest
 */
const se_DescribeExplainabilityRequest = (input: DescribeExplainabilityRequest, context: __SerdeContext): any => {
  return {
    ...(input.ExplainabilityArn != null && { ExplainabilityArn: input.ExplainabilityArn }),
  };
};

/**
 * serializeAws_json1_1DescribeForecastExportJobRequest
 */
const se_DescribeForecastExportJobRequest = (input: DescribeForecastExportJobRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastExportJobArn != null && { ForecastExportJobArn: input.ForecastExportJobArn }),
  };
};

/**
 * serializeAws_json1_1DescribeForecastRequest
 */
const se_DescribeForecastRequest = (input: DescribeForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastArn != null && { ForecastArn: input.ForecastArn }),
  };
};

/**
 * serializeAws_json1_1DescribeMonitorRequest
 */
const se_DescribeMonitorRequest = (input: DescribeMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
  };
};

/**
 * serializeAws_json1_1DescribePredictorBacktestExportJobRequest
 */
const se_DescribePredictorBacktestExportJobRequest = (
  input: DescribePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorBacktestExportJobArn != null && {
      PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
    }),
  };
};

/**
 * serializeAws_json1_1DescribePredictorRequest
 */
const se_DescribePredictorRequest = (input: DescribePredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
  };
};

/**
 * serializeAws_json1_1DescribeWhatIfAnalysisRequest
 */
const se_DescribeWhatIfAnalysisRequest = (input: DescribeWhatIfAnalysisRequest, context: __SerdeContext): any => {
  return {
    ...(input.WhatIfAnalysisArn != null && { WhatIfAnalysisArn: input.WhatIfAnalysisArn }),
  };
};

/**
 * serializeAws_json1_1DescribeWhatIfForecastExportRequest
 */
const se_DescribeWhatIfForecastExportRequest = (
  input: DescribeWhatIfForecastExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.WhatIfForecastExportArn != null && { WhatIfForecastExportArn: input.WhatIfForecastExportArn }),
  };
};

/**
 * serializeAws_json1_1DescribeWhatIfForecastRequest
 */
const se_DescribeWhatIfForecastRequest = (input: DescribeWhatIfForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.WhatIfForecastArn != null && { WhatIfForecastArn: input.WhatIfForecastArn }),
  };
};

/**
 * serializeAws_json1_1EncryptionConfig
 */
const se_EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1EvaluationParameters
 */
const se_EvaluationParameters = (input: EvaluationParameters, context: __SerdeContext): any => {
  return {
    ...(input.BackTestWindowOffset != null && { BackTestWindowOffset: input.BackTestWindowOffset }),
    ...(input.NumberOfBacktestWindows != null && { NumberOfBacktestWindows: input.NumberOfBacktestWindows }),
  };
};

/**
 * serializeAws_json1_1ExplainabilityConfig
 */
const se_ExplainabilityConfig = (input: ExplainabilityConfig, context: __SerdeContext): any => {
  return {
    ...(input.TimePointGranularity != null && { TimePointGranularity: input.TimePointGranularity }),
    ...(input.TimeSeriesGranularity != null && { TimeSeriesGranularity: input.TimeSeriesGranularity }),
  };
};

/**
 * serializeAws_json1_1Featurization
 */
const se_Featurization = (input: Featurization, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.FeaturizationPipeline != null && {
      FeaturizationPipeline: se_FeaturizationPipeline(input.FeaturizationPipeline, context),
    }),
  };
};

/**
 * serializeAws_json1_1FeaturizationConfig
 */
const se_FeaturizationConfig = (input: FeaturizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Featurizations != null && { Featurizations: se_Featurizations(input.Featurizations, context) }),
    ...(input.ForecastDimensions != null && {
      ForecastDimensions: se_ForecastDimensions(input.ForecastDimensions, context),
    }),
    ...(input.ForecastFrequency != null && { ForecastFrequency: input.ForecastFrequency }),
  };
};

/**
 * serializeAws_json1_1FeaturizationMethod
 */
const se_FeaturizationMethod = (input: FeaturizationMethod, context: __SerdeContext): any => {
  return {
    ...(input.FeaturizationMethodName != null && { FeaturizationMethodName: input.FeaturizationMethodName }),
    ...(input.FeaturizationMethodParameters != null && {
      FeaturizationMethodParameters: se_FeaturizationMethodParameters(input.FeaturizationMethodParameters, context),
    }),
  };
};

/**
 * serializeAws_json1_1FeaturizationMethodParameters
 */
const se_FeaturizationMethodParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1FeaturizationPipeline
 */
const se_FeaturizationPipeline = (input: FeaturizationMethod[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FeaturizationMethod(entry, context);
    });
};

/**
 * serializeAws_json1_1Featurizations
 */
const se_Featurizations = (input: Featurization[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Featurization(entry, context);
    });
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1ForecastDimensions
 */
const se_ForecastDimensions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ForecastTypes
 */
const se_ForecastTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetAccuracyMetricsRequest
 */
const se_GetAccuracyMetricsRequest = (input: GetAccuracyMetricsRequest, context: __SerdeContext): any => {
  return {
    ...(input.PredictorArn != null && { PredictorArn: input.PredictorArn }),
  };
};

/**
 * serializeAws_json1_1HyperParameterTuningJobConfig
 */
const se_HyperParameterTuningJobConfig = (input: HyperParameterTuningJobConfig, context: __SerdeContext): any => {
  return {
    ...(input.ParameterRanges != null && { ParameterRanges: se_ParameterRanges(input.ParameterRanges, context) }),
  };
};

/**
 * serializeAws_json1_1InputDataConfig
 */
const se_InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DatasetGroupArn != null && { DatasetGroupArn: input.DatasetGroupArn }),
    ...(input.SupplementaryFeatures != null && {
      SupplementaryFeatures: se_SupplementaryFeatures(input.SupplementaryFeatures, context),
    }),
  };
};

/**
 * serializeAws_json1_1IntegerParameterRange
 */
const se_IntegerParameterRange = (input: IntegerParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxValue != null && { MaxValue: input.MaxValue }),
    ...(input.MinValue != null && { MinValue: input.MinValue }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ScalingType != null && { ScalingType: input.ScalingType }),
  };
};

/**
 * serializeAws_json1_1IntegerParameterRanges
 */
const se_IntegerParameterRanges = (input: IntegerParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IntegerParameterRange(entry, context);
    });
};

/**
 * serializeAws_json1_1ListDatasetGroupsRequest
 */
const se_ListDatasetGroupsRequest = (input: ListDatasetGroupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetImportJobsRequest
 */
const se_ListDatasetImportJobsRequest = (input: ListDatasetImportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListDatasetsRequest
 */
const se_ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExplainabilitiesRequest
 */
const se_ListExplainabilitiesRequest = (input: ListExplainabilitiesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListExplainabilityExportsRequest
 */
const se_ListExplainabilityExportsRequest = (input: ListExplainabilityExportsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListForecastExportJobsRequest
 */
const se_ListForecastExportJobsRequest = (input: ListForecastExportJobsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListForecastsRequest
 */
const se_ListForecastsRequest = (input: ListForecastsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListMonitorEvaluationsRequest
 */
const se_ListMonitorEvaluationsRequest = (input: ListMonitorEvaluationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn != null && { MonitorArn: input.MonitorArn }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListMonitorsRequest
 */
const se_ListMonitorsRequest = (input: ListMonitorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPredictorBacktestExportJobsRequest
 */
const se_ListPredictorBacktestExportJobsRequest = (
  input: ListPredictorBacktestExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListPredictorsRequest
 */
const se_ListPredictorsRequest = (input: ListPredictorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1ListWhatIfAnalysesRequest
 */
const se_ListWhatIfAnalysesRequest = (input: ListWhatIfAnalysesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListWhatIfForecastExportsRequest
 */
const se_ListWhatIfForecastExportsRequest = (input: ListWhatIfForecastExportsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListWhatIfForecastsRequest
 */
const se_ListWhatIfForecastsRequest = (input: ListWhatIfForecastsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1MonitorConfig
 */
const se_MonitorConfig = (input: MonitorConfig, context: __SerdeContext): any => {
  return {
    ...(input.MonitorName != null && { MonitorName: input.MonitorName }),
  };
};

/**
 * serializeAws_json1_1ParameterRanges
 */
const se_ParameterRanges = (input: ParameterRanges, context: __SerdeContext): any => {
  return {
    ...(input.CategoricalParameterRanges != null && {
      CategoricalParameterRanges: se_CategoricalParameterRanges(input.CategoricalParameterRanges, context),
    }),
    ...(input.ContinuousParameterRanges != null && {
      ContinuousParameterRanges: se_ContinuousParameterRanges(input.ContinuousParameterRanges, context),
    }),
    ...(input.IntegerParameterRanges != null && {
      IntegerParameterRanges: se_IntegerParameterRanges(input.IntegerParameterRanges, context),
    }),
  };
};

/**
 * serializeAws_json1_1ResumeResourceRequest
 */
const se_ResumeResourceRequest = (input: ResumeResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1S3Config
 */
const se_S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.KMSKeyArn != null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_json1_1Schema
 */
const se_Schema = (input: Schema, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_SchemaAttributes(input.Attributes, context) }),
  };
};

/**
 * serializeAws_json1_1SchemaAttribute
 */
const se_SchemaAttribute = (input: SchemaAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
  };
};

/**
 * serializeAws_json1_1SchemaAttributes
 */
const se_SchemaAttributes = (input: SchemaAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SchemaAttribute(entry, context);
    });
};

/**
 * serializeAws_json1_1StopResourceRequest
 */
const se_StopResourceRequest = (input: StopResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_1SupplementaryFeature
 */
const se_SupplementaryFeature = (input: SupplementaryFeature, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1SupplementaryFeatures
 */
const se_SupplementaryFeatures = (input: SupplementaryFeature[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SupplementaryFeature(entry, context);
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TimeAlignmentBoundary
 */
const se_TimeAlignmentBoundary = (input: TimeAlignmentBoundary, context: __SerdeContext): any => {
  return {
    ...(input.DayOfMonth != null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek != null && { DayOfWeek: input.DayOfWeek }),
    ...(input.Hour != null && { Hour: input.Hour }),
    ...(input.Month != null && { Month: input.Month }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesCondition
 */
const se_TimeSeriesCondition = (input: TimeSeriesCondition, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeValue != null && { AttributeValue: input.AttributeValue }),
    ...(input.Condition != null && { Condition: input.Condition }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesConditions
 */
const se_TimeSeriesConditions = (input: TimeSeriesCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TimeSeriesCondition(entry, context);
    });
};

/**
 * serializeAws_json1_1TimeSeriesIdentifiers
 */
const se_TimeSeriesIdentifiers = (input: TimeSeriesIdentifiers, context: __SerdeContext): any => {
  return {
    ...(input.DataSource != null && { DataSource: se_DataSource(input.DataSource, context) }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Schema != null && { Schema: se_Schema(input.Schema, context) }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesReplacementsDataSource
 */
const se_TimeSeriesReplacementsDataSource = (input: TimeSeriesReplacementsDataSource, context: __SerdeContext): any => {
  return {
    ...(input.Format != null && { Format: input.Format }),
    ...(input.S3Config != null && { S3Config: se_S3Config(input.S3Config, context) }),
    ...(input.Schema != null && { Schema: se_Schema(input.Schema, context) }),
    ...(input.TimestampFormat != null && { TimestampFormat: input.TimestampFormat }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesSelector
 */
const se_TimeSeriesSelector = (input: TimeSeriesSelector, context: __SerdeContext): any => {
  return {
    ...(input.TimeSeriesIdentifiers != null && {
      TimeSeriesIdentifiers: se_TimeSeriesIdentifiers(input.TimeSeriesIdentifiers, context),
    }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesTransformation
 */
const se_TimeSeriesTransformation = (input: TimeSeriesTransformation, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: se_Action(input.Action, context) }),
    ...(input.TimeSeriesConditions != null && {
      TimeSeriesConditions: se_TimeSeriesConditions(input.TimeSeriesConditions, context),
    }),
  };
};

/**
 * serializeAws_json1_1TimeSeriesTransformations
 */
const se_TimeSeriesTransformations = (input: TimeSeriesTransformation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TimeSeriesTransformation(entry, context);
    });
};

/**
 * serializeAws_json1_1TrainingParameters
 */
const se_TrainingParameters = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1Transformations
 */
const se_Transformations = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDatasetGroupRequest
 */
const se_UpdateDatasetGroupRequest = (input: UpdateDatasetGroupRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArns != null && { DatasetArns: se_ArnList(input.DatasetArns, context) }),
    ...(input.DatasetGroupArn != null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

/**
 * serializeAws_json1_1Values
 */
const se_Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1WhatIfForecastArnListForExport
 */
const se_WhatIfForecastArnListForExport = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_json1_1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Operation: __expectString(output.Operation),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1AdditionalDataset
 */
const de_AdditionalDataset = (output: any, context: __SerdeContext): AdditionalDataset => {
  return {
    Configuration: output.Configuration != null ? de_Configuration(output.Configuration, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1AdditionalDatasets
 */
const de_AdditionalDatasets = (output: any, context: __SerdeContext): AdditionalDataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdditionalDataset(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ArnList
 */
const de_ArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AttributeConfig
 */
const de_AttributeConfig = (output: any, context: __SerdeContext): AttributeConfig => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Transformations: output.Transformations != null ? de_Transformations(output.Transformations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AttributeConfigs
 */
const de_AttributeConfigs = (output: any, context: __SerdeContext): AttributeConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AttributeConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Baseline
 */
const de_Baseline = (output: any, context: __SerdeContext): Baseline => {
  return {
    PredictorBaseline:
      output.PredictorBaseline != null ? de_PredictorBaseline(output.PredictorBaseline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BaselineMetric
 */
const de_BaselineMetric = (output: any, context: __SerdeContext): BaselineMetric => {
  return {
    Name: __expectString(output.Name),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1BaselineMetrics
 */
const de_BaselineMetrics = (output: any, context: __SerdeContext): BaselineMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BaselineMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CategoricalParameterRange
 */
const de_CategoricalParameterRange = (output: any, context: __SerdeContext): CategoricalParameterRange => {
  return {
    Name: __expectString(output.Name),
    Values: output.Values != null ? de_Values(output.Values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CategoricalParameterRanges
 */
const de_CategoricalParameterRanges = (output: any, context: __SerdeContext): CategoricalParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CategoricalParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Configuration
 */
const de_Configuration = (output: any, context: __SerdeContext): Record<string, string[]> => {
  return Object.entries(output).reduce((acc: Record<string, string[]>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Values(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ContinuousParameterRange
 */
const de_ContinuousParameterRange = (output: any, context: __SerdeContext): ContinuousParameterRange => {
  return {
    MaxValue: __limitedParseDouble(output.MaxValue),
    MinValue: __limitedParseDouble(output.MinValue),
    Name: __expectString(output.Name),
    ScalingType: __expectString(output.ScalingType),
  } as any;
};

/**
 * deserializeAws_json1_1ContinuousParameterRanges
 */
const de_ContinuousParameterRanges = (output: any, context: __SerdeContext): ContinuousParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ContinuousParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CreateAutoPredictorResponse
 */
const de_CreateAutoPredictorResponse = (output: any, context: __SerdeContext): CreateAutoPredictorResponse => {
  return {
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetGroupResponse
 */
const de_CreateDatasetGroupResponse = (output: any, context: __SerdeContext): CreateDatasetGroupResponse => {
  return {
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetImportJobResponse
 */
const de_CreateDatasetImportJobResponse = (output: any, context: __SerdeContext): CreateDatasetImportJobResponse => {
  return {
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateDatasetResponse
 */
const de_CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateExplainabilityExportResponse
 */
const de_CreateExplainabilityExportResponse = (
  output: any,
  context: __SerdeContext
): CreateExplainabilityExportResponse => {
  return {
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateExplainabilityResponse
 */
const de_CreateExplainabilityResponse = (output: any, context: __SerdeContext): CreateExplainabilityResponse => {
  return {
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateForecastExportJobResponse
 */
const de_CreateForecastExportJobResponse = (output: any, context: __SerdeContext): CreateForecastExportJobResponse => {
  return {
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateForecastResponse
 */
const de_CreateForecastResponse = (output: any, context: __SerdeContext): CreateForecastResponse => {
  return {
    ForecastArn: __expectString(output.ForecastArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateMonitorResponse
 */
const de_CreateMonitorResponse = (output: any, context: __SerdeContext): CreateMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePredictorBacktestExportJobResponse
 */
const de_CreatePredictorBacktestExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreatePredictorBacktestExportJobResponse => {
  return {
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePredictorResponse
 */
const de_CreatePredictorResponse = (output: any, context: __SerdeContext): CreatePredictorResponse => {
  return {
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWhatIfAnalysisResponse
 */
const de_CreateWhatIfAnalysisResponse = (output: any, context: __SerdeContext): CreateWhatIfAnalysisResponse => {
  return {
    WhatIfAnalysisArn: __expectString(output.WhatIfAnalysisArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastExportResponse
 */
const de_CreateWhatIfForecastExportResponse = (
  output: any,
  context: __SerdeContext
): CreateWhatIfForecastExportResponse => {
  return {
    WhatIfForecastExportArn: __expectString(output.WhatIfForecastExportArn),
  } as any;
};

/**
 * deserializeAws_json1_1CreateWhatIfForecastResponse
 */
const de_CreateWhatIfForecastResponse = (output: any, context: __SerdeContext): CreateWhatIfForecastResponse => {
  return {
    WhatIfForecastArn: __expectString(output.WhatIfForecastArn),
  } as any;
};

/**
 * deserializeAws_json1_1DataConfig
 */
const de_DataConfig = (output: any, context: __SerdeContext): DataConfig => {
  return {
    AdditionalDatasets:
      output.AdditionalDatasets != null ? de_AdditionalDatasets(output.AdditionalDatasets, context) : undefined,
    AttributeConfigs:
      output.AttributeConfigs != null ? de_AttributeConfigs(output.AttributeConfigs, context) : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
  } as any;
};

/**
 * deserializeAws_json1_1DataDestination
 */
const de_DataDestination = (output: any, context: __SerdeContext): DataDestination => {
  return {
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatasetGroups
 */
const de_DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetGroupSummary
 */
const de_DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    DatasetGroupName: __expectString(output.DatasetGroupName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DatasetImportJobs
 */
const de_DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetImportJobSummary
 */
const de_DatasetImportJobSummary = (output: any, context: __SerdeContext): DatasetImportJobSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSource: output.DataSource != null ? de_DataSource(output.DataSource, context) : undefined,
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    DatasetImportJobName: __expectString(output.DatasetImportJobName),
    ImportMode: __expectString(output.ImportMode),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Datasets
 */
const de_Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    DatasetType: __expectString(output.DatasetType),
    Domain: __expectString(output.Domain),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataSource
 */
const de_DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeAutoPredictorResponse
 */
const de_DescribeAutoPredictorResponse = (output: any, context: __SerdeContext): DescribeAutoPredictorResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataConfig: output.DataConfig != null ? de_DataConfig(output.DataConfig, context) : undefined,
    DatasetImportJobArns:
      output.DatasetImportJobArns != null ? de_ArnList(output.DatasetImportJobArns, context) : undefined,
    EncryptionConfig:
      output.EncryptionConfig != null ? de_EncryptionConfig(output.EncryptionConfig, context) : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ExplainabilityInfo:
      output.ExplainabilityInfo != null ? de_ExplainabilityInfo(output.ExplainabilityInfo, context) : undefined,
    ForecastDimensions:
      output.ForecastDimensions != null ? de_ForecastDimensions(output.ForecastDimensions, context) : undefined,
    ForecastFrequency: __expectString(output.ForecastFrequency),
    ForecastHorizon: __expectInt32(output.ForecastHorizon),
    ForecastTypes: output.ForecastTypes != null ? de_ForecastTypes(output.ForecastTypes, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MonitorInfo: output.MonitorInfo != null ? de_MonitorInfo(output.MonitorInfo, context) : undefined,
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorName: __expectString(output.PredictorName),
    ReferencePredictorSummary:
      output.ReferencePredictorSummary != null
        ? de_ReferencePredictorSummary(output.ReferencePredictorSummary, context)
        : undefined,
    Status: __expectString(output.Status),
    TimeAlignmentBoundary:
      output.TimeAlignmentBoundary != null
        ? de_TimeAlignmentBoundary(output.TimeAlignmentBoundary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupResponse
 */
const de_DescribeDatasetGroupResponse = (output: any, context: __SerdeContext): DescribeDatasetGroupResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetArns: output.DatasetArns != null ? de_ArnList(output.DatasetArns, context) : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    DatasetGroupName: __expectString(output.DatasetGroupName),
    Domain: __expectString(output.Domain),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobResponse
 */
const de_DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSize: __limitedParseDouble(output.DataSize),
    DataSource: output.DataSource != null ? de_DataSource(output.DataSource, context) : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    DatasetImportJobName: __expectString(output.DatasetImportJobName),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    FieldStatistics: output.FieldStatistics != null ? de_FieldStatistics(output.FieldStatistics, context) : undefined,
    Format: __expectString(output.Format),
    GeolocationFormat: __expectString(output.GeolocationFormat),
    ImportMode: __expectString(output.ImportMode),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TimeZone: __expectString(output.TimeZone),
    TimestampFormat: __expectString(output.TimestampFormat),
    UseGeolocationForTimeZone: __expectBoolean(output.UseGeolocationForTimeZone),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataFrequency: __expectString(output.DataFrequency),
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    DatasetType: __expectString(output.DatasetType),
    Domain: __expectString(output.Domain),
    EncryptionConfig:
      output.EncryptionConfig != null ? de_EncryptionConfig(output.EncryptionConfig, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Schema: output.Schema != null ? de_Schema(output.Schema, context) : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExplainabilityExportResponse
 */
const de_DescribeExplainabilityExportResponse = (
  output: any,
  context: __SerdeContext
): DescribeExplainabilityExportResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
    ExplainabilityExportName: __expectString(output.ExplainabilityExportName),
    Format: __expectString(output.Format),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeExplainabilityResponse
 */
const de_DescribeExplainabilityResponse = (output: any, context: __SerdeContext): DescribeExplainabilityResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSource: output.DataSource != null ? de_DataSource(output.DataSource, context) : undefined,
    EnableVisualization: __expectBoolean(output.EnableVisualization),
    EndDateTime: __expectString(output.EndDateTime),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityConfig:
      output.ExplainabilityConfig != null ? de_ExplainabilityConfig(output.ExplainabilityConfig, context) : undefined,
    ExplainabilityName: __expectString(output.ExplainabilityName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    ResourceArn: __expectString(output.ResourceArn),
    Schema: output.Schema != null ? de_Schema(output.Schema, context) : undefined,
    StartDateTime: __expectString(output.StartDateTime),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeForecastExportJobResponse
 */
const de_DescribeForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastExportJobResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    ForecastArn: __expectString(output.ForecastArn),
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
    ForecastExportJobName: __expectString(output.ForecastExportJobName),
    Format: __expectString(output.Format),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeForecastResponse
 */
const de_DescribeForecastResponse = (output: any, context: __SerdeContext): DescribeForecastResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ForecastArn: __expectString(output.ForecastArn),
    ForecastName: __expectString(output.ForecastName),
    ForecastTypes: output.ForecastTypes != null ? de_ForecastTypes(output.ForecastTypes, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    Status: __expectString(output.Status),
    TimeSeriesSelector:
      output.TimeSeriesSelector != null ? de_TimeSeriesSelector(output.TimeSeriesSelector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeMonitorResponse
 */
const de_DescribeMonitorResponse = (output: any, context: __SerdeContext): DescribeMonitorResponse => {
  return {
    Baseline: output.Baseline != null ? de_Baseline(output.Baseline, context) : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EstimatedEvaluationTimeRemainingInMinutes: __expectLong(output.EstimatedEvaluationTimeRemainingInMinutes),
    LastEvaluationState: __expectString(output.LastEvaluationState),
    LastEvaluationTime:
      output.LastEvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEvaluationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MonitorArn: __expectString(output.MonitorArn),
    MonitorName: __expectString(output.MonitorName),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePredictorBacktestExportJobResponse
 */
const de_DescribePredictorBacktestExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePredictorBacktestExportJobResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    Format: __expectString(output.Format),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
    PredictorBacktestExportJobName: __expectString(output.PredictorBacktestExportJobName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1DescribePredictorResponse
 */
const de_DescribePredictorResponse = (output: any, context: __SerdeContext): DescribePredictorResponse => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    AutoMLAlgorithmArns:
      output.AutoMLAlgorithmArns != null ? de_ArnList(output.AutoMLAlgorithmArns, context) : undefined,
    AutoMLOverrideStrategy: __expectString(output.AutoMLOverrideStrategy),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetImportJobArns:
      output.DatasetImportJobArns != null ? de_ArnList(output.DatasetImportJobArns, context) : undefined,
    EncryptionConfig:
      output.EncryptionConfig != null ? de_EncryptionConfig(output.EncryptionConfig, context) : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    EvaluationParameters:
      output.EvaluationParameters != null ? de_EvaluationParameters(output.EvaluationParameters, context) : undefined,
    FeaturizationConfig:
      output.FeaturizationConfig != null ? de_FeaturizationConfig(output.FeaturizationConfig, context) : undefined,
    ForecastHorizon: __expectInt32(output.ForecastHorizon),
    ForecastTypes: output.ForecastTypes != null ? de_ForecastTypes(output.ForecastTypes, context) : undefined,
    HPOConfig: output.HPOConfig != null ? de_HyperParameterTuningJobConfig(output.HPOConfig, context) : undefined,
    InputDataConfig: output.InputDataConfig != null ? de_InputDataConfig(output.InputDataConfig, context) : undefined,
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PerformAutoML: __expectBoolean(output.PerformAutoML),
    PerformHPO: __expectBoolean(output.PerformHPO),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorExecutionDetails:
      output.PredictorExecutionDetails != null
        ? de_PredictorExecutionDetails(output.PredictorExecutionDetails, context)
        : undefined,
    PredictorName: __expectString(output.PredictorName),
    Status: __expectString(output.Status),
    TrainingParameters:
      output.TrainingParameters != null ? de_TrainingParameters(output.TrainingParameters, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfAnalysisResponse
 */
const de_DescribeWhatIfAnalysisResponse = (output: any, context: __SerdeContext): DescribeWhatIfAnalysisResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ForecastArn: __expectString(output.ForecastArn),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TimeSeriesSelector:
      output.TimeSeriesSelector != null ? de_TimeSeriesSelector(output.TimeSeriesSelector, context) : undefined,
    WhatIfAnalysisArn: __expectString(output.WhatIfAnalysisArn),
    WhatIfAnalysisName: __expectString(output.WhatIfAnalysisName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastExportResponse
 */
const de_DescribeWhatIfForecastExportResponse = (
  output: any,
  context: __SerdeContext
): DescribeWhatIfForecastExportResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    Format: __expectString(output.Format),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    WhatIfForecastArns:
      output.WhatIfForecastArns != null ? de_LongArnList(output.WhatIfForecastArns, context) : undefined,
    WhatIfForecastExportArn: __expectString(output.WhatIfForecastExportArn),
    WhatIfForecastExportName: __expectString(output.WhatIfForecastExportName),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastResponse
 */
const de_DescribeWhatIfForecastResponse = (output: any, context: __SerdeContext): DescribeWhatIfForecastResponse => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ForecastTypes: output.ForecastTypes != null ? de_ForecastTypes(output.ForecastTypes, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TimeSeriesReplacementsDataSource:
      output.TimeSeriesReplacementsDataSource != null
        ? de_TimeSeriesReplacementsDataSource(output.TimeSeriesReplacementsDataSource, context)
        : undefined,
    TimeSeriesTransformations:
      output.TimeSeriesTransformations != null
        ? de_TimeSeriesTransformations(output.TimeSeriesTransformations, context)
        : undefined,
    WhatIfAnalysisArn: __expectString(output.WhatIfAnalysisArn),
    WhatIfForecastArn: __expectString(output.WhatIfForecastArn),
    WhatIfForecastName: __expectString(output.WhatIfForecastName),
  } as any;
};

/**
 * deserializeAws_json1_1EncryptionConfig
 */
const de_EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    KMSKeyArn: __expectString(output.KMSKeyArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorMetric
 */
const de_ErrorMetric = (output: any, context: __SerdeContext): ErrorMetric => {
  return {
    ForecastType: __expectString(output.ForecastType),
    MAPE: __limitedParseDouble(output.MAPE),
    MASE: __limitedParseDouble(output.MASE),
    RMSE: __limitedParseDouble(output.RMSE),
    WAPE: __limitedParseDouble(output.WAPE),
  } as any;
};

/**
 * deserializeAws_json1_1ErrorMetrics
 */
const de_ErrorMetrics = (output: any, context: __SerdeContext): ErrorMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EvaluationParameters
 */
const de_EvaluationParameters = (output: any, context: __SerdeContext): EvaluationParameters => {
  return {
    BackTestWindowOffset: __expectInt32(output.BackTestWindowOffset),
    NumberOfBacktestWindows: __expectInt32(output.NumberOfBacktestWindows),
  } as any;
};

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    TestWindows: output.TestWindows != null ? de_TestWindows(output.TestWindows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Explainabilities
 */
const de_Explainabilities = (output: any, context: __SerdeContext): ExplainabilitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExplainabilitySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExplainabilityConfig
 */
const de_ExplainabilityConfig = (output: any, context: __SerdeContext): ExplainabilityConfig => {
  return {
    TimePointGranularity: __expectString(output.TimePointGranularity),
    TimeSeriesGranularity: __expectString(output.TimeSeriesGranularity),
  } as any;
};

/**
 * deserializeAws_json1_1ExplainabilityExports
 */
const de_ExplainabilityExports = (output: any, context: __SerdeContext): ExplainabilityExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExplainabilityExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExplainabilityExportSummary
 */
const de_ExplainabilityExportSummary = (output: any, context: __SerdeContext): ExplainabilityExportSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
    ExplainabilityExportName: __expectString(output.ExplainabilityExportName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ExplainabilityInfo
 */
const de_ExplainabilityInfo = (output: any, context: __SerdeContext): ExplainabilityInfo => {
  return {
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ExplainabilitySummary
 */
const de_ExplainabilitySummary = (output: any, context: __SerdeContext): ExplainabilitySummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityConfig:
      output.ExplainabilityConfig != null ? de_ExplainabilityConfig(output.ExplainabilityConfig, context) : undefined,
    ExplainabilityName: __expectString(output.ExplainabilityName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Featurization
 */
const de_Featurization = (output: any, context: __SerdeContext): Featurization => {
  return {
    AttributeName: __expectString(output.AttributeName),
    FeaturizationPipeline:
      output.FeaturizationPipeline != null
        ? de_FeaturizationPipeline(output.FeaturizationPipeline, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FeaturizationConfig
 */
const de_FeaturizationConfig = (output: any, context: __SerdeContext): FeaturizationConfig => {
  return {
    Featurizations: output.Featurizations != null ? de_Featurizations(output.Featurizations, context) : undefined,
    ForecastDimensions:
      output.ForecastDimensions != null ? de_ForecastDimensions(output.ForecastDimensions, context) : undefined,
    ForecastFrequency: __expectString(output.ForecastFrequency),
  } as any;
};

/**
 * deserializeAws_json1_1FeaturizationMethod
 */
const de_FeaturizationMethod = (output: any, context: __SerdeContext): FeaturizationMethod => {
  return {
    FeaturizationMethodName: __expectString(output.FeaturizationMethodName),
    FeaturizationMethodParameters:
      output.FeaturizationMethodParameters != null
        ? de_FeaturizationMethodParameters(output.FeaturizationMethodParameters, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FeaturizationMethodParameters
 */
const de_FeaturizationMethodParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1FeaturizationPipeline
 */
const de_FeaturizationPipeline = (output: any, context: __SerdeContext): FeaturizationMethod[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FeaturizationMethod(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Featurizations
 */
const de_Featurizations = (output: any, context: __SerdeContext): Featurization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Featurization(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FieldStatistics
 */
const de_FieldStatistics = (output: any, context: __SerdeContext): Record<string, Statistics> => {
  return Object.entries(output).reduce((acc: Record<string, Statistics>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Statistics(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1ForecastDimensions
 */
const de_ForecastDimensions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastExportJobs
 */
const de_ForecastExportJobs = (output: any, context: __SerdeContext): ForecastExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ForecastExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastExportJobSummary
 */
const de_ForecastExportJobSummary = (output: any, context: __SerdeContext): ForecastExportJobSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
    ForecastExportJobName: __expectString(output.ForecastExportJobName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Forecasts
 */
const de_Forecasts = (output: any, context: __SerdeContext): ForecastSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ForecastSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastSummary
 */
const de_ForecastSummary = (output: any, context: __SerdeContext): ForecastSummary => {
  return {
    CreatedUsingAutoPredictor: __expectBoolean(output.CreatedUsingAutoPredictor),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    ForecastArn: __expectString(output.ForecastArn),
    ForecastName: __expectString(output.ForecastName),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ForecastTypes
 */
const de_ForecastTypes = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1GetAccuracyMetricsResponse
 */
const de_GetAccuracyMetricsResponse = (output: any, context: __SerdeContext): GetAccuracyMetricsResponse => {
  return {
    AutoMLOverrideStrategy: __expectString(output.AutoMLOverrideStrategy),
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PredictorEvaluationResults:
      output.PredictorEvaluationResults != null
        ? de_PredictorEvaluationResults(output.PredictorEvaluationResults, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobConfig
 */
const de_HyperParameterTuningJobConfig = (output: any, context: __SerdeContext): HyperParameterTuningJobConfig => {
  return {
    ParameterRanges: output.ParameterRanges != null ? de_ParameterRanges(output.ParameterRanges, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1InputDataConfig
 */
const de_InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    SupplementaryFeatures:
      output.SupplementaryFeatures != null
        ? de_SupplementaryFeatures(output.SupplementaryFeatures, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1IntegerParameterRange
 */
const de_IntegerParameterRange = (output: any, context: __SerdeContext): IntegerParameterRange => {
  return {
    MaxValue: __expectInt32(output.MaxValue),
    MinValue: __expectInt32(output.MinValue),
    Name: __expectString(output.Name),
    ScalingType: __expectString(output.ScalingType),
  } as any;
};

/**
 * deserializeAws_json1_1IntegerParameterRanges
 */
const de_IntegerParameterRanges = (output: any, context: __SerdeContext): IntegerParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IntegerParameterRange(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidInputException
 */
const de_InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNextTokenException
 */
const de_InvalidNextTokenException = (output: any, context: __SerdeContext): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetGroupsResponse
 */
const de_ListDatasetGroupsResponse = (output: any, context: __SerdeContext): ListDatasetGroupsResponse => {
  return {
    DatasetGroups: output.DatasetGroups != null ? de_DatasetGroups(output.DatasetGroups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsResponse
 */
const de_ListDatasetImportJobsResponse = (output: any, context: __SerdeContext): ListDatasetImportJobsResponse => {
  return {
    DatasetImportJobs:
      output.DatasetImportJobs != null ? de_DatasetImportJobs(output.DatasetImportJobs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    Datasets: output.Datasets != null ? de_Datasets(output.Datasets, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListExplainabilitiesResponse
 */
const de_ListExplainabilitiesResponse = (output: any, context: __SerdeContext): ListExplainabilitiesResponse => {
  return {
    Explainabilities:
      output.Explainabilities != null ? de_Explainabilities(output.Explainabilities, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListExplainabilityExportsResponse
 */
const de_ListExplainabilityExportsResponse = (
  output: any,
  context: __SerdeContext
): ListExplainabilityExportsResponse => {
  return {
    ExplainabilityExports:
      output.ExplainabilityExports != null
        ? de_ExplainabilityExports(output.ExplainabilityExports, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListForecastExportJobsResponse
 */
const de_ListForecastExportJobsResponse = (output: any, context: __SerdeContext): ListForecastExportJobsResponse => {
  return {
    ForecastExportJobs:
      output.ForecastExportJobs != null ? de_ForecastExportJobs(output.ForecastExportJobs, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListForecastsResponse
 */
const de_ListForecastsResponse = (output: any, context: __SerdeContext): ListForecastsResponse => {
  return {
    Forecasts: output.Forecasts != null ? de_Forecasts(output.Forecasts, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListMonitorEvaluationsResponse
 */
const de_ListMonitorEvaluationsResponse = (output: any, context: __SerdeContext): ListMonitorEvaluationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PredictorMonitorEvaluations:
      output.PredictorMonitorEvaluations != null
        ? de_PredictorMonitorEvaluations(output.PredictorMonitorEvaluations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListMonitorsResponse
 */
const de_ListMonitorsResponse = (output: any, context: __SerdeContext): ListMonitorsResponse => {
  return {
    Monitors: output.Monitors != null ? de_Monitors(output.Monitors, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListPredictorBacktestExportJobsResponse
 */
const de_ListPredictorBacktestExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPredictorBacktestExportJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PredictorBacktestExportJobs:
      output.PredictorBacktestExportJobs != null
        ? de_PredictorBacktestExportJobs(output.PredictorBacktestExportJobs, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListPredictorsResponse
 */
const de_ListPredictorsResponse = (output: any, context: __SerdeContext): ListPredictorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Predictors: output.Predictors != null ? de_Predictors(output.Predictors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWhatIfAnalysesResponse
 */
const de_ListWhatIfAnalysesResponse = (output: any, context: __SerdeContext): ListWhatIfAnalysesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    WhatIfAnalyses: output.WhatIfAnalyses != null ? de_WhatIfAnalyses(output.WhatIfAnalyses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWhatIfForecastExportsResponse
 */
const de_ListWhatIfForecastExportsResponse = (
  output: any,
  context: __SerdeContext
): ListWhatIfForecastExportsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    WhatIfForecastExports:
      output.WhatIfForecastExports != null
        ? de_WhatIfForecastExports(output.WhatIfForecastExports, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListWhatIfForecastsResponse
 */
const de_ListWhatIfForecastsResponse = (output: any, context: __SerdeContext): ListWhatIfForecastsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    WhatIfForecasts: output.WhatIfForecasts != null ? de_WhatIfForecasts(output.WhatIfForecasts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LongArnList
 */
const de_LongArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MetricResult
 */
const de_MetricResult = (output: any, context: __SerdeContext): MetricResult => {
  return {
    MetricName: __expectString(output.MetricName),
    MetricValue: __limitedParseDouble(output.MetricValue),
  } as any;
};

/**
 * deserializeAws_json1_1MetricResults
 */
const de_MetricResults = (output: any, context: __SerdeContext): MetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Metrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metrics => {
  return {
    AverageWeightedQuantileLoss: __limitedParseDouble(output.AverageWeightedQuantileLoss),
    ErrorMetrics: output.ErrorMetrics != null ? de_ErrorMetrics(output.ErrorMetrics, context) : undefined,
    RMSE: __limitedParseDouble(output.RMSE),
    WeightedQuantileLosses:
      output.WeightedQuantileLosses != null
        ? de_WeightedQuantileLosses(output.WeightedQuantileLosses, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1MonitorDataSource
 */
const de_MonitorDataSource = (output: any, context: __SerdeContext): MonitorDataSource => {
  return {
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    ForecastArn: __expectString(output.ForecastArn),
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

/**
 * deserializeAws_json1_1MonitorInfo
 */
const de_MonitorInfo = (output: any, context: __SerdeContext): MonitorInfo => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1Monitors
 */
const de_Monitors = (output: any, context: __SerdeContext): MonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MonitorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitorSummary
 */
const de_MonitorSummary = (output: any, context: __SerdeContext): MonitorSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    MonitorName: __expectString(output.MonitorName),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ParameterRanges
 */
const de_ParameterRanges = (output: any, context: __SerdeContext): ParameterRanges => {
  return {
    CategoricalParameterRanges:
      output.CategoricalParameterRanges != null
        ? de_CategoricalParameterRanges(output.CategoricalParameterRanges, context)
        : undefined,
    ContinuousParameterRanges:
      output.ContinuousParameterRanges != null
        ? de_ContinuousParameterRanges(output.ContinuousParameterRanges, context)
        : undefined,
    IntegerParameterRanges:
      output.IntegerParameterRanges != null
        ? de_IntegerParameterRanges(output.IntegerParameterRanges, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PredictorBacktestExportJobs
 */
const de_PredictorBacktestExportJobs = (output: any, context: __SerdeContext): PredictorBacktestExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PredictorBacktestExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorBacktestExportJobSummary
 */
const de_PredictorBacktestExportJobSummary = (
  output: any,
  context: __SerdeContext
): PredictorBacktestExportJobSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
    PredictorBacktestExportJobName: __expectString(output.PredictorBacktestExportJobName),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1PredictorBaseline
 */
const de_PredictorBaseline = (output: any, context: __SerdeContext): PredictorBaseline => {
  return {
    BaselineMetrics: output.BaselineMetrics != null ? de_BaselineMetrics(output.BaselineMetrics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PredictorEvaluationResults
 */
const de_PredictorEvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorEvent
 */
const de_PredictorEvent = (output: any, context: __SerdeContext): PredictorEvent => {
  return {
    Datetime:
      output.Datetime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Datetime))) : undefined,
    Detail: __expectString(output.Detail),
  } as any;
};

/**
 * deserializeAws_json1_1PredictorExecution
 */
const de_PredictorExecution = (output: any, context: __SerdeContext): PredictorExecution => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    TestWindows: output.TestWindows != null ? de_TestWindowDetails(output.TestWindows, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PredictorExecutionDetails
 */
const de_PredictorExecutionDetails = (output: any, context: __SerdeContext): PredictorExecutionDetails => {
  return {
    PredictorExecutions:
      output.PredictorExecutions != null ? de_PredictorExecutions(output.PredictorExecutions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PredictorExecutions
 */
const de_PredictorExecutions = (output: any, context: __SerdeContext): PredictorExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PredictorExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorMonitorEvaluation
 */
const de_PredictorMonitorEvaluation = (output: any, context: __SerdeContext): PredictorMonitorEvaluation => {
  return {
    EvaluationState: __expectString(output.EvaluationState),
    EvaluationTime:
      output.EvaluationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MetricResults: output.MetricResults != null ? de_MetricResults(output.MetricResults, context) : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    MonitorDataSource:
      output.MonitorDataSource != null ? de_MonitorDataSource(output.MonitorDataSource, context) : undefined,
    NumItemsEvaluated: __expectLong(output.NumItemsEvaluated),
    PredictorEvent: output.PredictorEvent != null ? de_PredictorEvent(output.PredictorEvent, context) : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    WindowEndDatetime:
      output.WindowEndDatetime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.WindowEndDatetime)))
        : undefined,
    WindowStartDatetime:
      output.WindowStartDatetime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.WindowStartDatetime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1PredictorMonitorEvaluations
 */
const de_PredictorMonitorEvaluations = (output: any, context: __SerdeContext): PredictorMonitorEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PredictorMonitorEvaluation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Predictors
 */
const de_Predictors = (output: any, context: __SerdeContext): PredictorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PredictorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorSummary
 */
const de_PredictorSummary = (output: any, context: __SerdeContext): PredictorSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorName: __expectString(output.PredictorName),
    ReferencePredictorSummary:
      output.ReferencePredictorSummary != null
        ? de_ReferencePredictorSummary(output.ReferencePredictorSummary, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1ReferencePredictorSummary
 */
const de_ReferencePredictorSummary = (output: any, context: __SerdeContext): ReferencePredictorSummary => {
  return {
    Arn: __expectString(output.Arn),
    State: __expectString(output.State),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceAlreadyExistsException
 */
const de_ResourceAlreadyExistsException = (output: any, context: __SerdeContext): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUseException
 */
const de_ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1S3Config
 */
const de_S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    KMSKeyArn: __expectString(output.KMSKeyArn),
    Path: __expectString(output.Path),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_json1_1Schema
 */
const de_Schema = (output: any, context: __SerdeContext): Schema => {
  return {
    Attributes: output.Attributes != null ? de_SchemaAttributes(output.Attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SchemaAttribute
 */
const de_SchemaAttribute = (output: any, context: __SerdeContext): SchemaAttribute => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

/**
 * deserializeAws_json1_1SchemaAttributes
 */
const de_SchemaAttributes = (output: any, context: __SerdeContext): SchemaAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SchemaAttribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return {
    Avg: __limitedParseDouble(output.Avg),
    Count: __expectInt32(output.Count),
    CountDistinct: __expectInt32(output.CountDistinct),
    CountDistinctLong: __expectLong(output.CountDistinctLong),
    CountLong: __expectLong(output.CountLong),
    CountNan: __expectInt32(output.CountNan),
    CountNanLong: __expectLong(output.CountNanLong),
    CountNull: __expectInt32(output.CountNull),
    CountNullLong: __expectLong(output.CountNullLong),
    Max: __expectString(output.Max),
    Min: __expectString(output.Min),
    Stddev: __limitedParseDouble(output.Stddev),
  } as any;
};

/**
 * deserializeAws_json1_1SupplementaryFeature
 */
const de_SupplementaryFeature = (output: any, context: __SerdeContext): SupplementaryFeature => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1SupplementaryFeatures
 */
const de_SupplementaryFeatures = (output: any, context: __SerdeContext): SupplementaryFeature[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SupplementaryFeature(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestWindowDetails
 */
const de_TestWindowDetails = (output: any, context: __SerdeContext): TestWindowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TestWindowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestWindows
 */
const de_TestWindows = (output: any, context: __SerdeContext): WindowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WindowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestWindowSummary
 */
const de_TestWindowSummary = (output: any, context: __SerdeContext): TestWindowSummary => {
  return {
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TestWindowEnd:
      output.TestWindowEnd != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowEnd)))
        : undefined,
    TestWindowStart:
      output.TestWindowStart != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowStart)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TimeAlignmentBoundary
 */
const de_TimeAlignmentBoundary = (output: any, context: __SerdeContext): TimeAlignmentBoundary => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    DayOfWeek: __expectString(output.DayOfWeek),
    Hour: __expectInt32(output.Hour),
    Month: __expectString(output.Month),
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesCondition
 */
const de_TimeSeriesCondition = (output: any, context: __SerdeContext): TimeSeriesCondition => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeValue: __expectString(output.AttributeValue),
    Condition: __expectString(output.Condition),
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesConditions
 */
const de_TimeSeriesConditions = (output: any, context: __SerdeContext): TimeSeriesCondition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesCondition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TimeSeriesIdentifiers
 */
const de_TimeSeriesIdentifiers = (output: any, context: __SerdeContext): TimeSeriesIdentifiers => {
  return {
    DataSource: output.DataSource != null ? de_DataSource(output.DataSource, context) : undefined,
    Format: __expectString(output.Format),
    Schema: output.Schema != null ? de_Schema(output.Schema, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesReplacementsDataSource
 */
const de_TimeSeriesReplacementsDataSource = (
  output: any,
  context: __SerdeContext
): TimeSeriesReplacementsDataSource => {
  return {
    Format: __expectString(output.Format),
    S3Config: output.S3Config != null ? de_S3Config(output.S3Config, context) : undefined,
    Schema: output.Schema != null ? de_Schema(output.Schema, context) : undefined,
    TimestampFormat: __expectString(output.TimestampFormat),
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesSelector
 */
const de_TimeSeriesSelector = (output: any, context: __SerdeContext): TimeSeriesSelector => {
  return {
    TimeSeriesIdentifiers:
      output.TimeSeriesIdentifiers != null
        ? de_TimeSeriesIdentifiers(output.TimeSeriesIdentifiers, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesTransformation
 */
const de_TimeSeriesTransformation = (output: any, context: __SerdeContext): TimeSeriesTransformation => {
  return {
    Action: output.Action != null ? de_Action(output.Action, context) : undefined,
    TimeSeriesConditions:
      output.TimeSeriesConditions != null ? de_TimeSeriesConditions(output.TimeSeriesConditions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1TimeSeriesTransformations
 */
const de_TimeSeriesTransformations = (output: any, context: __SerdeContext): TimeSeriesTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesTransformation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TrainingParameters
 */
const de_TrainingParameters = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1Transformations
 */
const de_Transformations = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDatasetGroupResponse
 */
const de_UpdateDatasetGroupResponse = (output: any, context: __SerdeContext): UpdateDatasetGroupResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Values
 */
const de_Values = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WeightedQuantileLoss
 */
const de_WeightedQuantileLoss = (output: any, context: __SerdeContext): WeightedQuantileLoss => {
  return {
    LossValue: __limitedParseDouble(output.LossValue),
    Quantile: __limitedParseDouble(output.Quantile),
  } as any;
};

/**
 * deserializeAws_json1_1WeightedQuantileLosses
 */
const de_WeightedQuantileLosses = (output: any, context: __SerdeContext): WeightedQuantileLoss[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WeightedQuantileLoss(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfAnalyses
 */
const de_WhatIfAnalyses = (output: any, context: __SerdeContext): WhatIfAnalysisSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WhatIfAnalysisSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfAnalysisSummary
 */
const de_WhatIfAnalysisSummary = (output: any, context: __SerdeContext): WhatIfAnalysisSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ForecastArn: __expectString(output.ForecastArn),
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    WhatIfAnalysisArn: __expectString(output.WhatIfAnalysisArn),
    WhatIfAnalysisName: __expectString(output.WhatIfAnalysisName),
  } as any;
};

/**
 * deserializeAws_json1_1WhatIfForecastArnListForExport
 */
const de_WhatIfForecastArnListForExport = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfForecastExports
 */
const de_WhatIfForecastExports = (output: any, context: __SerdeContext): WhatIfForecastExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WhatIfForecastExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfForecastExportSummary
 */
const de_WhatIfForecastExportSummary = (output: any, context: __SerdeContext): WhatIfForecastExportSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination: output.Destination != null ? de_DataDestination(output.Destination, context) : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    WhatIfForecastArns:
      output.WhatIfForecastArns != null
        ? de_WhatIfForecastArnListForExport(output.WhatIfForecastArns, context)
        : undefined,
    WhatIfForecastExportArn: __expectString(output.WhatIfForecastExportArn),
    WhatIfForecastExportName: __expectString(output.WhatIfForecastExportName),
  } as any;
};

/**
 * deserializeAws_json1_1WhatIfForecasts
 */
const de_WhatIfForecasts = (output: any, context: __SerdeContext): WhatIfForecastSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WhatIfForecastSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfForecastSummary
 */
const de_WhatIfForecastSummary = (output: any, context: __SerdeContext): WhatIfForecastSummary => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    WhatIfAnalysisArn: __expectString(output.WhatIfAnalysisArn),
    WhatIfForecastArn: __expectString(output.WhatIfForecastArn),
    WhatIfForecastName: __expectString(output.WhatIfForecastName),
  } as any;
};

/**
 * deserializeAws_json1_1WindowSummary
 */
const de_WindowSummary = (output: any, context: __SerdeContext): WindowSummary => {
  return {
    EvaluationType: __expectString(output.EvaluationType),
    ItemCount: __expectInt32(output.ItemCount),
    Metrics: output.Metrics != null ? de_Metrics(output.Metrics, context) : undefined,
    TestWindowEnd:
      output.TestWindowEnd != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowEnd)))
        : undefined,
    TestWindowStart:
      output.TestWindowStart != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowStart)))
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AmazonForecast.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
