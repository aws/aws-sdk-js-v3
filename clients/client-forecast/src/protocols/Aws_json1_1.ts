// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CreateDatasetGroupRequest,
  CreateDatasetImportJobRequest,
  CreateDatasetRequest,
  CreateExplainabilityExportRequest,
  CreateExplainabilityRequest,
  CreateForecastExportJobRequest,
  CreateForecastRequest,
  CreateMonitorRequest,
  CreatePredictorBacktestExportJobRequest,
  CreatePredictorRequest,
  CreateWhatIfAnalysisRequest,
  CreateWhatIfForecastExportRequest,
  CreateWhatIfForecastRequest,
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
  ListWhatIfAnalysesRequest,
  ListWhatIfAnalysesResponse,
  ListWhatIfForecastExportsRequest,
  ListWhatIfForecastExportsResponse,
  ListWhatIfForecastsRequest,
  ListWhatIfForecastsResponse,
  MetricResult,
  Metrics,
  MonitorConfig,
  MonitorSummary,
  ParameterRanges,
  PredictorBacktestExportJobSummary,
  PredictorBaseline,
  PredictorEvent,
  PredictorExecution,
  PredictorExecutionDetails,
  PredictorMonitorEvaluation,
  PredictorSummary,
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
  TestWindowSummary,
  TimeAlignmentBoundary,
  TimeSeriesCondition,
  TimeSeriesIdentifiers,
  TimeSeriesReplacementsDataSource,
  TimeSeriesSelector,
  TimeSeriesTransformation,
  UntagResourceRequest,
  UpdateDatasetGroupRequest,
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateAutoPredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWhatIfAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWhatIfForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreateWhatIfForecastExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  return take(input, {
    AttributeName: [],
    Operation: [],
    Value: __serializeFloat,
  });
};

// se_AdditionalDataset omitted.

// se_AdditionalDatasets omitted.

// se_ArnList omitted.

// se_AttributeConfig omitted.

// se_AttributeConfigs omitted.

// se_CategoricalParameterRange omitted.

// se_CategoricalParameterRanges omitted.

// se_Configuration omitted.

/**
 * serializeAws_json1_1ContinuousParameterRange
 */
const se_ContinuousParameterRange = (input: ContinuousParameterRange, context: __SerdeContext): any => {
  return take(input, {
    MaxValue: __serializeFloat,
    MinValue: __serializeFloat,
    Name: [],
    ScalingType: [],
  });
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

// se_CreateAutoPredictorRequest omitted.

// se_CreateDatasetGroupRequest omitted.

// se_CreateDatasetImportJobRequest omitted.

// se_CreateDatasetRequest omitted.

// se_CreateExplainabilityExportRequest omitted.

// se_CreateExplainabilityRequest omitted.

// se_CreateForecastExportJobRequest omitted.

// se_CreateForecastRequest omitted.

// se_CreateMonitorRequest omitted.

// se_CreatePredictorBacktestExportJobRequest omitted.

/**
 * serializeAws_json1_1CreatePredictorRequest
 */
const se_CreatePredictorRequest = (input: CreatePredictorRequest, context: __SerdeContext): any => {
  return take(input, {
    AlgorithmArn: [],
    AutoMLOverrideStrategy: [],
    EncryptionConfig: _json,
    EvaluationParameters: _json,
    FeaturizationConfig: _json,
    ForecastHorizon: [],
    ForecastTypes: _json,
    HPOConfig: (_) => se_HyperParameterTuningJobConfig(_, context),
    InputDataConfig: _json,
    OptimizationMetric: [],
    PerformAutoML: [],
    PerformHPO: [],
    PredictorName: [],
    Tags: _json,
    TrainingParameters: _json,
  });
};

// se_CreateWhatIfAnalysisRequest omitted.

// se_CreateWhatIfForecastExportRequest omitted.

/**
 * serializeAws_json1_1CreateWhatIfForecastRequest
 */
const se_CreateWhatIfForecastRequest = (input: CreateWhatIfForecastRequest, context: __SerdeContext): any => {
  return take(input, {
    Tags: _json,
    TimeSeriesReplacementsDataSource: _json,
    TimeSeriesTransformations: (_) => se_TimeSeriesTransformations(_, context),
    WhatIfAnalysisArn: [],
    WhatIfForecastName: [],
  });
};

// se_DataConfig omitted.

// se_DataDestination omitted.

// se_DataSource omitted.

// se_DeleteDatasetGroupRequest omitted.

// se_DeleteDatasetImportJobRequest omitted.

// se_DeleteDatasetRequest omitted.

// se_DeleteExplainabilityExportRequest omitted.

// se_DeleteExplainabilityRequest omitted.

// se_DeleteForecastExportJobRequest omitted.

// se_DeleteForecastRequest omitted.

// se_DeleteMonitorRequest omitted.

// se_DeletePredictorBacktestExportJobRequest omitted.

// se_DeletePredictorRequest omitted.

// se_DeleteResourceTreeRequest omitted.

// se_DeleteWhatIfAnalysisRequest omitted.

// se_DeleteWhatIfForecastExportRequest omitted.

// se_DeleteWhatIfForecastRequest omitted.

// se_DescribeAutoPredictorRequest omitted.

// se_DescribeDatasetGroupRequest omitted.

// se_DescribeDatasetImportJobRequest omitted.

// se_DescribeDatasetRequest omitted.

// se_DescribeExplainabilityExportRequest omitted.

// se_DescribeExplainabilityRequest omitted.

// se_DescribeForecastExportJobRequest omitted.

// se_DescribeForecastRequest omitted.

// se_DescribeMonitorRequest omitted.

// se_DescribePredictorBacktestExportJobRequest omitted.

// se_DescribePredictorRequest omitted.

// se_DescribeWhatIfAnalysisRequest omitted.

// se_DescribeWhatIfForecastExportRequest omitted.

// se_DescribeWhatIfForecastRequest omitted.

// se_EncryptionConfig omitted.

// se_EvaluationParameters omitted.

// se_ExplainabilityConfig omitted.

// se_Featurization omitted.

// se_FeaturizationConfig omitted.

// se_FeaturizationMethod omitted.

// se_FeaturizationMethodParameters omitted.

// se_FeaturizationPipeline omitted.

// se_Featurizations omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_ForecastDimensions omitted.

// se_ForecastTypes omitted.

// se_GetAccuracyMetricsRequest omitted.

/**
 * serializeAws_json1_1HyperParameterTuningJobConfig
 */
const se_HyperParameterTuningJobConfig = (input: HyperParameterTuningJobConfig, context: __SerdeContext): any => {
  return take(input, {
    ParameterRanges: (_) => se_ParameterRanges(_, context),
  });
};

// se_InputDataConfig omitted.

// se_IntegerParameterRange omitted.

// se_IntegerParameterRanges omitted.

// se_ListDatasetGroupsRequest omitted.

// se_ListDatasetImportJobsRequest omitted.

// se_ListDatasetsRequest omitted.

// se_ListExplainabilitiesRequest omitted.

// se_ListExplainabilityExportsRequest omitted.

// se_ListForecastExportJobsRequest omitted.

// se_ListForecastsRequest omitted.

// se_ListMonitorEvaluationsRequest omitted.

// se_ListMonitorsRequest omitted.

// se_ListPredictorBacktestExportJobsRequest omitted.

// se_ListPredictorsRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListWhatIfAnalysesRequest omitted.

// se_ListWhatIfForecastExportsRequest omitted.

// se_ListWhatIfForecastsRequest omitted.

// se_MonitorConfig omitted.

/**
 * serializeAws_json1_1ParameterRanges
 */
const se_ParameterRanges = (input: ParameterRanges, context: __SerdeContext): any => {
  return take(input, {
    CategoricalParameterRanges: _json,
    ContinuousParameterRanges: (_) => se_ContinuousParameterRanges(_, context),
    IntegerParameterRanges: _json,
  });
};

// se_ResumeResourceRequest omitted.

// se_S3Config omitted.

// se_Schema omitted.

// se_SchemaAttribute omitted.

// se_SchemaAttributes omitted.

// se_StopResourceRequest omitted.

// se_SupplementaryFeature omitted.

// se_SupplementaryFeatures omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TimeAlignmentBoundary omitted.

// se_TimeSeriesCondition omitted.

// se_TimeSeriesConditions omitted.

// se_TimeSeriesIdentifiers omitted.

// se_TimeSeriesReplacementsDataSource omitted.

// se_TimeSeriesSelector omitted.

/**
 * serializeAws_json1_1TimeSeriesTransformation
 */
const se_TimeSeriesTransformation = (input: TimeSeriesTransformation, context: __SerdeContext): any => {
  return take(input, {
    Action: (_) => se_Action(_, context),
    TimeSeriesConditions: _json,
  });
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

// se_TrainingParameters omitted.

// se_Transformations omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDatasetGroupRequest omitted.

// se_Values omitted.

// se_WhatIfForecastArnListForExport omitted.

/**
 * deserializeAws_json1_1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return take(output, {
    AttributeName: __expectString,
    Operation: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

// de_AdditionalDataset omitted.

// de_AdditionalDatasets omitted.

// de_ArnList omitted.

// de_AttributeConfig omitted.

// de_AttributeConfigs omitted.

/**
 * deserializeAws_json1_1Baseline
 */
const de_Baseline = (output: any, context: __SerdeContext): Baseline => {
  return take(output, {
    PredictorBaseline: (_: any) => de_PredictorBaseline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1BaselineMetric
 */
const de_BaselineMetric = (output: any, context: __SerdeContext): BaselineMetric => {
  return take(output, {
    Name: __expectString,
    Value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1BaselineMetrics
 */
const de_BaselineMetrics = (output: any, context: __SerdeContext): BaselineMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BaselineMetric(entry, context);
    });
  return retVal;
};

// de_CategoricalParameterRange omitted.

// de_CategoricalParameterRanges omitted.

// de_Configuration omitted.

/**
 * deserializeAws_json1_1ContinuousParameterRange
 */
const de_ContinuousParameterRange = (output: any, context: __SerdeContext): ContinuousParameterRange => {
  return take(output, {
    MaxValue: __limitedParseDouble,
    MinValue: __limitedParseDouble,
    Name: __expectString,
    ScalingType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ContinuousParameterRanges
 */
const de_ContinuousParameterRanges = (output: any, context: __SerdeContext): ContinuousParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ContinuousParameterRange(entry, context);
    });
  return retVal;
};

// de_CreateAutoPredictorResponse omitted.

// de_CreateDatasetGroupResponse omitted.

// de_CreateDatasetImportJobResponse omitted.

// de_CreateDatasetResponse omitted.

// de_CreateExplainabilityExportResponse omitted.

// de_CreateExplainabilityResponse omitted.

// de_CreateForecastExportJobResponse omitted.

// de_CreateForecastResponse omitted.

// de_CreateMonitorResponse omitted.

// de_CreatePredictorBacktestExportJobResponse omitted.

// de_CreatePredictorResponse omitted.

// de_CreateWhatIfAnalysisResponse omitted.

// de_CreateWhatIfForecastExportResponse omitted.

// de_CreateWhatIfForecastResponse omitted.

// de_DataConfig omitted.

// de_DataDestination omitted.

/**
 * deserializeAws_json1_1DatasetGroups
 */
const de_DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetGroupSummary
 */
const de_DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetGroupArn: __expectString,
    DatasetGroupName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1DatasetImportJobs
 */
const de_DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetImportJobSummary
 */
const de_DatasetImportJobSummary = (output: any, context: __SerdeContext): DatasetImportJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSource: _json,
    DatasetImportJobArn: __expectString,
    DatasetImportJobName: __expectString,
    ImportMode: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Datasets
 */
const de_Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DatasetSummary
 */
const de_DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArn: __expectString,
    DatasetName: __expectString,
    DatasetType: __expectString,
    Domain: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_DataSource omitted.

/**
 * deserializeAws_json1_1DescribeAutoPredictorResponse
 */
const de_DescribeAutoPredictorResponse = (output: any, context: __SerdeContext): DescribeAutoPredictorResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataConfig: _json,
    DatasetImportJobArns: _json,
    EncryptionConfig: _json,
    EstimatedTimeRemainingInMinutes: __expectLong,
    ExplainabilityInfo: _json,
    ForecastDimensions: _json,
    ForecastFrequency: __expectString,
    ForecastHorizon: __expectInt32,
    ForecastTypes: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    MonitorInfo: _json,
    OptimizationMetric: __expectString,
    PredictorArn: __expectString,
    PredictorName: __expectString,
    ReferencePredictorSummary: _json,
    Status: __expectString,
    TimeAlignmentBoundary: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetGroupResponse
 */
const de_DescribeDatasetGroupResponse = (output: any, context: __SerdeContext): DescribeDatasetGroupResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetArns: _json,
    DatasetGroupArn: __expectString,
    DatasetGroupName: __expectString,
    Domain: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetImportJobResponse
 */
const de_DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSize: __limitedParseDouble,
    DataSource: _json,
    DatasetArn: __expectString,
    DatasetImportJobArn: __expectString,
    DatasetImportJobName: __expectString,
    EstimatedTimeRemainingInMinutes: __expectLong,
    FieldStatistics: (_: any) => de_FieldStatistics(_, context),
    Format: __expectString,
    GeolocationFormat: __expectString,
    ImportMode: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    TimeZone: __expectString,
    TimestampFormat: __expectString,
    UseGeolocationForTimeZone: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDatasetResponse
 */
const de_DescribeDatasetResponse = (output: any, context: __SerdeContext): DescribeDatasetResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataFrequency: __expectString,
    DatasetArn: __expectString,
    DatasetName: __expectString,
    DatasetType: __expectString,
    Domain: __expectString,
    EncryptionConfig: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Schema: _json,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExplainabilityExportResponse
 */
const de_DescribeExplainabilityExportResponse = (
  output: any,
  context: __SerdeContext
): DescribeExplainabilityExportResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    ExplainabilityArn: __expectString,
    ExplainabilityExportArn: __expectString,
    ExplainabilityExportName: __expectString,
    Format: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeExplainabilityResponse
 */
const de_DescribeExplainabilityResponse = (output: any, context: __SerdeContext): DescribeExplainabilityResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataSource: _json,
    EnableVisualization: __expectBoolean,
    EndDateTime: __expectString,
    EstimatedTimeRemainingInMinutes: __expectLong,
    ExplainabilityArn: __expectString,
    ExplainabilityConfig: _json,
    ExplainabilityName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    ResourceArn: __expectString,
    Schema: _json,
    StartDateTime: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeForecastExportJobResponse
 */
const de_DescribeForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastExportJobResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    ForecastArn: __expectString,
    ForecastExportJobArn: __expectString,
    ForecastExportJobName: __expectString,
    Format: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeForecastResponse
 */
const de_DescribeForecastResponse = (output: any, context: __SerdeContext): DescribeForecastResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetGroupArn: __expectString,
    EstimatedTimeRemainingInMinutes: __expectLong,
    ForecastArn: __expectString,
    ForecastName: __expectString,
    ForecastTypes: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PredictorArn: __expectString,
    Status: __expectString,
    TimeSeriesSelector: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeMonitorResponse
 */
const de_DescribeMonitorResponse = (output: any, context: __SerdeContext): DescribeMonitorResponse => {
  return take(output, {
    Baseline: (_: any) => de_Baseline(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EstimatedEvaluationTimeRemainingInMinutes: __expectLong,
    LastEvaluationState: __expectString,
    LastEvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    MonitorArn: __expectString,
    MonitorName: __expectString,
    ResourceArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePredictorBacktestExportJobResponse
 */
const de_DescribePredictorBacktestExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePredictorBacktestExportJobResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    Format: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PredictorArn: __expectString,
    PredictorBacktestExportJobArn: __expectString,
    PredictorBacktestExportJobName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribePredictorResponse
 */
const de_DescribePredictorResponse = (output: any, context: __SerdeContext): DescribePredictorResponse => {
  return take(output, {
    AlgorithmArn: __expectString,
    AutoMLAlgorithmArns: _json,
    AutoMLOverrideStrategy: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetImportJobArns: _json,
    EncryptionConfig: _json,
    EstimatedTimeRemainingInMinutes: __expectLong,
    EvaluationParameters: _json,
    FeaturizationConfig: _json,
    ForecastHorizon: __expectInt32,
    ForecastTypes: _json,
    HPOConfig: (_: any) => de_HyperParameterTuningJobConfig(_, context),
    InputDataConfig: _json,
    IsAutoPredictor: __expectBoolean,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    OptimizationMetric: __expectString,
    PerformAutoML: __expectBoolean,
    PerformHPO: __expectBoolean,
    PredictorArn: __expectString,
    PredictorExecutionDetails: (_: any) => de_PredictorExecutionDetails(_, context),
    PredictorName: __expectString,
    Status: __expectString,
    TrainingParameters: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfAnalysisResponse
 */
const de_DescribeWhatIfAnalysisResponse = (output: any, context: __SerdeContext): DescribeWhatIfAnalysisResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EstimatedTimeRemainingInMinutes: __expectLong,
    ForecastArn: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    TimeSeriesSelector: _json,
    WhatIfAnalysisArn: __expectString,
    WhatIfAnalysisName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastExportResponse
 */
const de_DescribeWhatIfForecastExportResponse = (
  output: any,
  context: __SerdeContext
): DescribeWhatIfForecastExportResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    EstimatedTimeRemainingInMinutes: __expectLong,
    Format: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    WhatIfForecastArns: _json,
    WhatIfForecastExportArn: __expectString,
    WhatIfForecastExportName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeWhatIfForecastResponse
 */
const de_DescribeWhatIfForecastResponse = (output: any, context: __SerdeContext): DescribeWhatIfForecastResponse => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EstimatedTimeRemainingInMinutes: __expectLong,
    ForecastTypes: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    TimeSeriesReplacementsDataSource: _json,
    TimeSeriesTransformations: (_: any) => de_TimeSeriesTransformations(_, context),
    WhatIfAnalysisArn: __expectString,
    WhatIfForecastArn: __expectString,
    WhatIfForecastName: __expectString,
  }) as any;
};

// de_EncryptionConfig omitted.

/**
 * deserializeAws_json1_1ErrorMetric
 */
const de_ErrorMetric = (output: any, context: __SerdeContext): ErrorMetric => {
  return take(output, {
    ForecastType: __expectString,
    MAPE: __limitedParseDouble,
    MASE: __limitedParseDouble,
    RMSE: __limitedParseDouble,
    WAPE: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1ErrorMetrics
 */
const de_ErrorMetrics = (output: any, context: __SerdeContext): ErrorMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ErrorMetric(entry, context);
    });
  return retVal;
};

// de_EvaluationParameters omitted.

/**
 * deserializeAws_json1_1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return take(output, {
    AlgorithmArn: __expectString,
    TestWindows: (_: any) => de_TestWindows(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Explainabilities
 */
const de_Explainabilities = (output: any, context: __SerdeContext): ExplainabilitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExplainabilitySummary(entry, context);
    });
  return retVal;
};

// de_ExplainabilityConfig omitted.

/**
 * deserializeAws_json1_1ExplainabilityExports
 */
const de_ExplainabilityExports = (output: any, context: __SerdeContext): ExplainabilityExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExplainabilityExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ExplainabilityExportSummary
 */
const de_ExplainabilityExportSummary = (output: any, context: __SerdeContext): ExplainabilityExportSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    ExplainabilityExportArn: __expectString,
    ExplainabilityExportName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ExplainabilityInfo omitted.

/**
 * deserializeAws_json1_1ExplainabilitySummary
 */
const de_ExplainabilitySummary = (output: any, context: __SerdeContext): ExplainabilitySummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExplainabilityArn: __expectString,
    ExplainabilityConfig: _json,
    ExplainabilityName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    ResourceArn: __expectString,
    Status: __expectString,
  }) as any;
};

// de_Featurization omitted.

// de_FeaturizationConfig omitted.

// de_FeaturizationMethod omitted.

// de_FeaturizationMethodParameters omitted.

// de_FeaturizationPipeline omitted.

// de_Featurizations omitted.

/**
 * deserializeAws_json1_1FieldStatistics
 */
const de_FieldStatistics = (output: any, context: __SerdeContext): Record<string, Statistics> => {
  return Object.entries(output).reduce((acc: Record<string, Statistics>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_Statistics(value, context);
    return acc;
  }, {} as Record<string, Statistics>);
};

// de_ForecastDimensions omitted.

/**
 * deserializeAws_json1_1ForecastExportJobs
 */
const de_ForecastExportJobs = (output: any, context: __SerdeContext): ForecastExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ForecastExportJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastExportJobSummary
 */
const de_ForecastExportJobSummary = (output: any, context: __SerdeContext): ForecastExportJobSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    ForecastExportJobArn: __expectString,
    ForecastExportJobName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Forecasts
 */
const de_Forecasts = (output: any, context: __SerdeContext): ForecastSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ForecastSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ForecastSummary
 */
const de_ForecastSummary = (output: any, context: __SerdeContext): ForecastSummary => {
  return take(output, {
    CreatedUsingAutoPredictor: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetGroupArn: __expectString,
    ForecastArn: __expectString,
    ForecastName: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PredictorArn: __expectString,
    Status: __expectString,
  }) as any;
};

// de_ForecastTypes omitted.

/**
 * deserializeAws_json1_1GetAccuracyMetricsResponse
 */
const de_GetAccuracyMetricsResponse = (output: any, context: __SerdeContext): GetAccuracyMetricsResponse => {
  return take(output, {
    AutoMLOverrideStrategy: __expectString,
    IsAutoPredictor: __expectBoolean,
    OptimizationMetric: __expectString,
    PredictorEvaluationResults: (_: any) => de_PredictorEvaluationResults(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1HyperParameterTuningJobConfig
 */
const de_HyperParameterTuningJobConfig = (output: any, context: __SerdeContext): HyperParameterTuningJobConfig => {
  return take(output, {
    ParameterRanges: (_: any) => de_ParameterRanges(_, context),
  }) as any;
};

// de_InputDataConfig omitted.

// de_IntegerParameterRange omitted.

// de_IntegerParameterRanges omitted.

// de_InvalidInputException omitted.

// de_InvalidNextTokenException omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListDatasetGroupsResponse
 */
const de_ListDatasetGroupsResponse = (output: any, context: __SerdeContext): ListDatasetGroupsResponse => {
  return take(output, {
    DatasetGroups: (_: any) => de_DatasetGroups(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetImportJobsResponse
 */
const de_ListDatasetImportJobsResponse = (output: any, context: __SerdeContext): ListDatasetImportJobsResponse => {
  return take(output, {
    DatasetImportJobs: (_: any) => de_DatasetImportJobs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListDatasetsResponse
 */
const de_ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return take(output, {
    Datasets: (_: any) => de_Datasets(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListExplainabilitiesResponse
 */
const de_ListExplainabilitiesResponse = (output: any, context: __SerdeContext): ListExplainabilitiesResponse => {
  return take(output, {
    Explainabilities: (_: any) => de_Explainabilities(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListExplainabilityExportsResponse
 */
const de_ListExplainabilityExportsResponse = (
  output: any,
  context: __SerdeContext
): ListExplainabilityExportsResponse => {
  return take(output, {
    ExplainabilityExports: (_: any) => de_ExplainabilityExports(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListForecastExportJobsResponse
 */
const de_ListForecastExportJobsResponse = (output: any, context: __SerdeContext): ListForecastExportJobsResponse => {
  return take(output, {
    ForecastExportJobs: (_: any) => de_ForecastExportJobs(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListForecastsResponse
 */
const de_ListForecastsResponse = (output: any, context: __SerdeContext): ListForecastsResponse => {
  return take(output, {
    Forecasts: (_: any) => de_Forecasts(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitorEvaluationsResponse
 */
const de_ListMonitorEvaluationsResponse = (output: any, context: __SerdeContext): ListMonitorEvaluationsResponse => {
  return take(output, {
    NextToken: __expectString,
    PredictorMonitorEvaluations: (_: any) => de_PredictorMonitorEvaluations(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListMonitorsResponse
 */
const de_ListMonitorsResponse = (output: any, context: __SerdeContext): ListMonitorsResponse => {
  return take(output, {
    Monitors: (_: any) => de_Monitors(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListPredictorBacktestExportJobsResponse
 */
const de_ListPredictorBacktestExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPredictorBacktestExportJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    PredictorBacktestExportJobs: (_: any) => de_PredictorBacktestExportJobs(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListPredictorsResponse
 */
const de_ListPredictorsResponse = (output: any, context: __SerdeContext): ListPredictorsResponse => {
  return take(output, {
    NextToken: __expectString,
    Predictors: (_: any) => de_Predictors(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListWhatIfAnalysesResponse
 */
const de_ListWhatIfAnalysesResponse = (output: any, context: __SerdeContext): ListWhatIfAnalysesResponse => {
  return take(output, {
    NextToken: __expectString,
    WhatIfAnalyses: (_: any) => de_WhatIfAnalyses(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWhatIfForecastExportsResponse
 */
const de_ListWhatIfForecastExportsResponse = (
  output: any,
  context: __SerdeContext
): ListWhatIfForecastExportsResponse => {
  return take(output, {
    NextToken: __expectString,
    WhatIfForecastExports: (_: any) => de_WhatIfForecastExports(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListWhatIfForecastsResponse
 */
const de_ListWhatIfForecastsResponse = (output: any, context: __SerdeContext): ListWhatIfForecastsResponse => {
  return take(output, {
    NextToken: __expectString,
    WhatIfForecasts: (_: any) => de_WhatIfForecasts(_, context),
  }) as any;
};

// de_LongArnList omitted.

/**
 * deserializeAws_json1_1MetricResult
 */
const de_MetricResult = (output: any, context: __SerdeContext): MetricResult => {
  return take(output, {
    MetricName: __expectString,
    MetricValue: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1MetricResults
 */
const de_MetricResults = (output: any, context: __SerdeContext): MetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Metrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metrics => {
  return take(output, {
    AverageWeightedQuantileLoss: __limitedParseDouble,
    ErrorMetrics: (_: any) => de_ErrorMetrics(_, context),
    RMSE: __limitedParseDouble,
    WeightedQuantileLosses: (_: any) => de_WeightedQuantileLosses(_, context),
  }) as any;
};

// de_MonitorDataSource omitted.

// de_MonitorInfo omitted.

/**
 * deserializeAws_json1_1Monitors
 */
const de_Monitors = (output: any, context: __SerdeContext): MonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MonitorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MonitorSummary
 */
const de_MonitorSummary = (output: any, context: __SerdeContext): MonitorSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MonitorArn: __expectString,
    MonitorName: __expectString,
    ResourceArn: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ParameterRanges
 */
const de_ParameterRanges = (output: any, context: __SerdeContext): ParameterRanges => {
  return take(output, {
    CategoricalParameterRanges: _json,
    ContinuousParameterRanges: (_: any) => de_ContinuousParameterRanges(_, context),
    IntegerParameterRanges: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorBacktestExportJobs
 */
const de_PredictorBacktestExportJobs = (output: any, context: __SerdeContext): PredictorBacktestExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PredictorBacktestExportJobArn: __expectString,
    PredictorBacktestExportJobName: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorBaseline
 */
const de_PredictorBaseline = (output: any, context: __SerdeContext): PredictorBaseline => {
  return take(output, {
    BaselineMetrics: (_: any) => de_BaselineMetrics(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorEvaluationResults
 */
const de_PredictorEvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorEvent
 */
const de_PredictorEvent = (output: any, context: __SerdeContext): PredictorEvent => {
  return take(output, {
    Datetime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Detail: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorExecution
 */
const de_PredictorExecution = (output: any, context: __SerdeContext): PredictorExecution => {
  return take(output, {
    AlgorithmArn: __expectString,
    TestWindows: (_: any) => de_TestWindowDetails(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorExecutionDetails
 */
const de_PredictorExecutionDetails = (output: any, context: __SerdeContext): PredictorExecutionDetails => {
  return take(output, {
    PredictorExecutions: (_: any) => de_PredictorExecutions(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorExecutions
 */
const de_PredictorExecutions = (output: any, context: __SerdeContext): PredictorExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PredictorExecution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorMonitorEvaluation
 */
const de_PredictorMonitorEvaluation = (output: any, context: __SerdeContext): PredictorMonitorEvaluation => {
  return take(output, {
    EvaluationState: __expectString,
    EvaluationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    MetricResults: (_: any) => de_MetricResults(_, context),
    MonitorArn: __expectString,
    MonitorDataSource: _json,
    NumItemsEvaluated: __expectLong,
    PredictorEvent: (_: any) => de_PredictorEvent(_, context),
    ResourceArn: __expectString,
    WindowEndDatetime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    WindowStartDatetime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_1PredictorMonitorEvaluations
 */
const de_PredictorMonitorEvaluations = (output: any, context: __SerdeContext): PredictorMonitorEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_PredictorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1PredictorSummary
 */
const de_PredictorSummary = (output: any, context: __SerdeContext): PredictorSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetGroupArn: __expectString,
    IsAutoPredictor: __expectBoolean,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    PredictorArn: __expectString,
    PredictorName: __expectString,
    ReferencePredictorSummary: _json,
    Status: __expectString,
  }) as any;
};

// de_ReferencePredictorSummary omitted.

// de_ResourceAlreadyExistsException omitted.

// de_ResourceInUseException omitted.

// de_ResourceNotFoundException omitted.

// de_S3Config omitted.

// de_Schema omitted.

// de_SchemaAttribute omitted.

// de_SchemaAttributes omitted.

/**
 * deserializeAws_json1_1Statistics
 */
const de_Statistics = (output: any, context: __SerdeContext): Statistics => {
  return take(output, {
    Avg: __limitedParseDouble,
    Count: __expectInt32,
    CountDistinct: __expectInt32,
    CountDistinctLong: __expectLong,
    CountLong: __expectLong,
    CountNan: __expectInt32,
    CountNanLong: __expectLong,
    CountNull: __expectInt32,
    CountNullLong: __expectLong,
    Max: __expectString,
    Min: __expectString,
    Stddev: __limitedParseDouble,
  }) as any;
};

// de_SupplementaryFeature omitted.

// de_SupplementaryFeatures omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

/**
 * deserializeAws_json1_1TestWindowDetails
 */
const de_TestWindowDetails = (output: any, context: __SerdeContext): TestWindowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_WindowSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TestWindowSummary
 */
const de_TestWindowSummary = (output: any, context: __SerdeContext): TestWindowSummary => {
  return take(output, {
    Message: __expectString,
    Status: __expectString,
    TestWindowEnd: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TestWindowStart: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_TimeAlignmentBoundary omitted.

// de_TimeSeriesCondition omitted.

// de_TimeSeriesConditions omitted.

// de_TimeSeriesIdentifiers omitted.

// de_TimeSeriesReplacementsDataSource omitted.

// de_TimeSeriesSelector omitted.

/**
 * deserializeAws_json1_1TimeSeriesTransformation
 */
const de_TimeSeriesTransformation = (output: any, context: __SerdeContext): TimeSeriesTransformation => {
  return take(output, {
    Action: (_: any) => de_Action(_, context),
    TimeSeriesConditions: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1TimeSeriesTransformations
 */
const de_TimeSeriesTransformations = (output: any, context: __SerdeContext): TimeSeriesTransformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TimeSeriesTransformation(entry, context);
    });
  return retVal;
};

// de_TrainingParameters omitted.

// de_Transformations omitted.

// de_UntagResourceResponse omitted.

// de_UpdateDatasetGroupResponse omitted.

// de_Values omitted.

/**
 * deserializeAws_json1_1WeightedQuantileLoss
 */
const de_WeightedQuantileLoss = (output: any, context: __SerdeContext): WeightedQuantileLoss => {
  return take(output, {
    LossValue: __limitedParseDouble,
    Quantile: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_json1_1WeightedQuantileLosses
 */
const de_WeightedQuantileLosses = (output: any, context: __SerdeContext): WeightedQuantileLoss[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
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
      return de_WhatIfAnalysisSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfAnalysisSummary
 */
const de_WhatIfAnalysisSummary = (output: any, context: __SerdeContext): WhatIfAnalysisSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ForecastArn: __expectString,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    WhatIfAnalysisArn: __expectString,
    WhatIfAnalysisName: __expectString,
  }) as any;
};

// de_WhatIfForecastArnListForExport omitted.

/**
 * deserializeAws_json1_1WhatIfForecastExports
 */
const de_WhatIfForecastExports = (output: any, context: __SerdeContext): WhatIfForecastExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WhatIfForecastExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfForecastExportSummary
 */
const de_WhatIfForecastExportSummary = (output: any, context: __SerdeContext): WhatIfForecastExportSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Destination: _json,
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    WhatIfForecastArns: _json,
    WhatIfForecastExportArn: __expectString,
    WhatIfForecastExportName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WhatIfForecasts
 */
const de_WhatIfForecasts = (output: any, context: __SerdeContext): WhatIfForecastSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_WhatIfForecastSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WhatIfForecastSummary
 */
const de_WhatIfForecastSummary = (output: any, context: __SerdeContext): WhatIfForecastSummary => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModificationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Message: __expectString,
    Status: __expectString,
    WhatIfAnalysisArn: __expectString,
    WhatIfForecastArn: __expectString,
    WhatIfForecastName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1WindowSummary
 */
const de_WindowSummary = (output: any, context: __SerdeContext): WindowSummary => {
  return take(output, {
    EvaluationType: __expectString,
    ItemCount: __expectInt32,
    Metrics: (_: any) => de_Metrics(_, context),
    TestWindowEnd: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TestWindowStart: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
