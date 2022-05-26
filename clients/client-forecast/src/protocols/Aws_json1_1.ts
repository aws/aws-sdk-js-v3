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
import { ResumeResourceCommandInput, ResumeResourceCommandOutput } from "../commands/ResumeResourceCommand";
import { StopResourceCommandInput, StopResourceCommandOutput } from "../commands/StopResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateDatasetGroupCommandInput, UpdateDatasetGroupCommandOutput } from "../commands/UpdateDatasetGroupCommand";
import { ForecastServiceException as __BaseException } from "../models/ForecastServiceException";
import {
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
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateDatasetGroupRequest,
  UpdateDatasetGroupResponse,
  WeightedQuantileLoss,
  WindowSummary,
} from "../models/models_0";

export const serializeAws_json1_1CreateAutoPredictorCommand = async (
  input: CreateAutoPredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateAutoPredictor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateAutoPredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetGroupCommand = async (
  input: CreateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDatasetImportJobCommand = async (
  input: CreateDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateDatasetImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExplainabilityCommand = async (
  input: CreateExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateExplainability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateExplainabilityExportCommand = async (
  input: CreateExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateExplainabilityExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateForecastCommand = async (
  input: CreateForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateForecast",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateForecastExportJobCommand = async (
  input: CreateForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateForecastExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateMonitorCommand = async (
  input: CreateMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreateMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePredictorCommand = async (
  input: CreatePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreatePredictor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePredictorBacktestExportJobCommand = async (
  input: CreatePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.CreatePredictorBacktestExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetGroupCommand = async (
  input: DeleteDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDatasetImportJobCommand = async (
  input: DeleteDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteDatasetImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteExplainabilityCommand = async (
  input: DeleteExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteExplainability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteExplainabilityExportCommand = async (
  input: DeleteExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteExplainabilityExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteForecastCommand = async (
  input: DeleteForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteForecast",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteForecastExportJobCommand = async (
  input: DeleteForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteForecastExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteMonitorCommand = async (
  input: DeleteMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePredictorCommand = async (
  input: DeletePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeletePredictor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeletePredictorBacktestExportJobCommand = async (
  input: DeletePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeletePredictorBacktestExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeletePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteResourceTreeCommand = async (
  input: DeleteResourceTreeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DeleteResourceTree",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteResourceTreeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeAutoPredictorCommand = async (
  input: DescribeAutoPredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeAutoPredictor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeAutoPredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeDataset",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetGroupCommand = async (
  input: DescribeDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDatasetImportJobCommand = async (
  input: DescribeDatasetImportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeDatasetImportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDatasetImportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExplainabilityCommand = async (
  input: DescribeExplainabilityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeExplainability",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExplainabilityRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeExplainabilityExportCommand = async (
  input: DescribeExplainabilityExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeExplainabilityExport",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeExplainabilityExportRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeForecastCommand = async (
  input: DescribeForecastCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeForecast",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeForecastRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeForecastExportJobCommand = async (
  input: DescribeForecastExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeForecastExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeForecastExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeMonitorCommand = async (
  input: DescribeMonitorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribeMonitor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeMonitorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePredictorCommand = async (
  input: DescribePredictorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribePredictor",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePredictorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribePredictorBacktestExportJobCommand = async (
  input: DescribePredictorBacktestExportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.DescribePredictorBacktestExportJob",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribePredictorBacktestExportJobRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetAccuracyMetricsCommand = async (
  input: GetAccuracyMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.GetAccuracyMetrics",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetAccuracyMetricsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetGroupsCommand = async (
  input: ListDatasetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListDatasetGroups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetGroupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetImportJobsCommand = async (
  input: ListDatasetImportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListDatasetImportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetImportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListDatasetsCommand = async (
  input: ListDatasetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListDatasets",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListDatasetsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExplainabilitiesCommand = async (
  input: ListExplainabilitiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListExplainabilities",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExplainabilitiesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListExplainabilityExportsCommand = async (
  input: ListExplainabilityExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListExplainabilityExports",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListExplainabilityExportsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListForecastExportJobsCommand = async (
  input: ListForecastExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListForecastExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListForecastExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListForecastsCommand = async (
  input: ListForecastsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListForecasts",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListForecastsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMonitorEvaluationsCommand = async (
  input: ListMonitorEvaluationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListMonitorEvaluations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMonitorEvaluationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListMonitorsCommand = async (
  input: ListMonitorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListMonitors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListMonitorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPredictorBacktestExportJobsCommand = async (
  input: ListPredictorBacktestExportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListPredictorBacktestExportJobs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPredictorBacktestExportJobsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListPredictorsCommand = async (
  input: ListPredictorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListPredictors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListPredictorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ResumeResourceCommand = async (
  input: ResumeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.ResumeResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ResumeResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1StopResourceCommand = async (
  input: StopResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.StopResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1StopResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDatasetGroupCommand = async (
  input: UpdateDatasetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AmazonForecast.UpdateDatasetGroup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDatasetGroupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateAutoPredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoPredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateAutoPredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateAutoPredictorResponse(data, context);
  const response: CreateAutoPredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateAutoPredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoPredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetResponse(data, context);
  const response: CreateDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetGroupResponse(data, context);
  const response: CreateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDatasetImportJobResponse(data, context);
  const response: CreateDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateExplainabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExplainabilityResponse(data, context);
  const response: CreateExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateExplainabilityExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateExplainabilityExportResponse(data, context);
  const response: CreateExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateForecastResponse(data, context);
  const response: CreateForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateForecastExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateForecastExportJobResponse(data, context);
  const response: CreateForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreateMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateMonitorResponse(data, context);
  const response: CreateMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreatePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePredictorResponse(data, context);
  const response: CreatePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1CreatePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePredictorBacktestExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePredictorBacktestExportJobResponse(data, context);
  const response: CreatePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.forecast#ResourceAlreadyExistsException":
      throw await deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetGroupCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDatasetImportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteExplainabilityCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteExplainabilityExportCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteForecastCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteForecastExportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteMonitorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeletePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePredictorCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeletePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeletePredictorBacktestExportJobCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeletePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeletePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DeleteResourceTreeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceTreeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteResourceTreeCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteResourceTreeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteResourceTreeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceTreeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeAutoPredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoPredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeAutoPredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeAutoPredictorResponse(data, context);
  const response: DescribeAutoPredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeAutoPredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoPredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetResponse(data, context);
  const response: DescribeDatasetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetGroupResponse(data, context);
  const response: DescribeDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeDatasetImportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDatasetImportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDatasetImportJobResponse(data, context);
  const response: DescribeDatasetImportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDatasetImportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetImportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeExplainabilityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExplainabilityCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExplainabilityResponse(data, context);
  const response: DescribeExplainabilityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExplainabilityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeExplainabilityExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityExportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeExplainabilityExportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeExplainabilityExportResponse(data, context);
  const response: DescribeExplainabilityExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeExplainabilityExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExplainabilityExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeForecastCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeForecastCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeForecastResponse(data, context);
  const response: DescribeForecastCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeForecastCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeForecastExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeForecastExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeForecastExportJobResponse(data, context);
  const response: DescribeForecastExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeForecastExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeForecastExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribeMonitorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeMonitorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeMonitorResponse(data, context);
  const response: DescribeMonitorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeMonitorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMonitorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribePredictorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePredictorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePredictorResponse(data, context);
  const response: DescribePredictorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePredictorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1DescribePredictorBacktestExportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorBacktestExportJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribePredictorBacktestExportJobCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribePredictorBacktestExportJobResponse(data, context);
  const response: DescribePredictorBacktestExportJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribePredictorBacktestExportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePredictorBacktestExportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1GetAccuracyMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetAccuracyMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetAccuracyMetricsResponse(data, context);
  const response: GetAccuracyMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetAccuracyMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccuracyMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListDatasetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetGroupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetGroupsResponse(data, context);
  const response: ListDatasetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListDatasetImportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetImportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetImportJobsResponse(data, context);
  const response: ListDatasetImportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetImportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetImportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListDatasetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListDatasetsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListDatasetsResponse(data, context);
  const response: ListDatasetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListDatasetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListExplainabilitiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilitiesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExplainabilitiesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExplainabilitiesResponse(data, context);
  const response: ListExplainabilitiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExplainabilitiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilitiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListExplainabilityExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilityExportsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListExplainabilityExportsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListExplainabilityExportsResponse(data, context);
  const response: ListExplainabilityExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListExplainabilityExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExplainabilityExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListForecastExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListForecastExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListForecastExportJobsResponse(data, context);
  const response: ListForecastExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListForecastExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListForecastsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListForecastsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListForecastsResponse(data, context);
  const response: ListForecastsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListForecastsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListForecastsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListMonitorEvaluationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorEvaluationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMonitorEvaluationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMonitorEvaluationsResponse(data, context);
  const response: ListMonitorEvaluationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMonitorEvaluationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorEvaluationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListMonitorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListMonitorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListMonitorsResponse(data, context);
  const response: ListMonitorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListMonitorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMonitorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListPredictorBacktestExportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPredictorBacktestExportJobsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPredictorBacktestExportJobsResponse(data, context);
  const response: ListPredictorBacktestExportJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPredictorBacktestExportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorBacktestExportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListPredictorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListPredictorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListPredictorsResponse(data, context);
  const response: ListPredictorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListPredictorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPredictorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "InvalidNextTokenException":
    case "com.amazonaws.forecast#InvalidNextTokenException":
      throw await deserializeAws_json1_1InvalidNextTokenExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1ResumeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ResumeResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: ResumeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ResumeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1StopResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1StopResourceCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: StopResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1StopResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.forecast#LimitExceededException":
      throw await deserializeAws_json1_1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_1UpdateDatasetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDatasetGroupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDatasetGroupResponse(data, context);
  const response: UpdateDatasetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDatasetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.forecast#InvalidInputException":
      throw await deserializeAws_json1_1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.forecast#ResourceInUseException":
      throw await deserializeAws_json1_1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.forecast#ResourceNotFoundException":
      throw await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInputException(body, context);
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNextTokenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextTokenException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNextTokenException(body, context);
  const exception = new InvalidNextTokenException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1LimitExceededException(body, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceAlreadyExistsException(body, context);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUseException(body, context);
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AdditionalDataset = (input: AdditionalDataset, context: __SerdeContext): any => {
  return {
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        Configuration: serializeAws_json1_1Configuration(input.Configuration, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_json1_1AdditionalDatasets = (input: AdditionalDataset[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AdditionalDataset(entry, context);
    });
};

const serializeAws_json1_1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1AttributeConfig = (input: AttributeConfig, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.Transformations !== undefined &&
      input.Transformations !== null && {
        Transformations: serializeAws_json1_1Transformations(input.Transformations, context),
      }),
  };
};

const serializeAws_json1_1AttributeConfigs = (input: AttributeConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1AttributeConfig(entry, context);
    });
};

const serializeAws_json1_1CategoricalParameterRange = (
  input: CategoricalParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1Values(input.Values, context) }),
  };
};

const serializeAws_json1_1CategoricalParameterRanges = (
  input: CategoricalParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1CategoricalParameterRange(entry, context);
    });
};

const serializeAws_json1_1Configuration = (input: { [key: string]: string[] }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_json1_1Values(value, context),
    };
  }, {});
};

const serializeAws_json1_1ContinuousParameterRange = (
  input: ContinuousParameterRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: __serializeFloat(input.MaxValue) }),
    ...(input.MinValue !== undefined && input.MinValue !== null && { MinValue: __serializeFloat(input.MinValue) }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScalingType !== undefined && input.ScalingType !== null && { ScalingType: input.ScalingType }),
  };
};

const serializeAws_json1_1ContinuousParameterRanges = (
  input: ContinuousParameterRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ContinuousParameterRange(entry, context);
    });
};

const serializeAws_json1_1CreateAutoPredictorRequest = (
  input: CreateAutoPredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataConfig !== undefined &&
      input.DataConfig !== null && { DataConfig: serializeAws_json1_1DataConfig(input.DataConfig, context) }),
    ...(input.EncryptionConfig !== undefined &&
      input.EncryptionConfig !== null && {
        EncryptionConfig: serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context),
      }),
    ...(input.ExplainPredictor !== undefined &&
      input.ExplainPredictor !== null && { ExplainPredictor: input.ExplainPredictor }),
    ...(input.ForecastDimensions !== undefined &&
      input.ForecastDimensions !== null && {
        ForecastDimensions: serializeAws_json1_1ForecastDimensions(input.ForecastDimensions, context),
      }),
    ...(input.ForecastFrequency !== undefined &&
      input.ForecastFrequency !== null && { ForecastFrequency: input.ForecastFrequency }),
    ...(input.ForecastHorizon !== undefined &&
      input.ForecastHorizon !== null && { ForecastHorizon: input.ForecastHorizon }),
    ...(input.ForecastTypes !== undefined &&
      input.ForecastTypes !== null && {
        ForecastTypes: serializeAws_json1_1ForecastTypes(input.ForecastTypes, context),
      }),
    ...(input.MonitorConfig !== undefined &&
      input.MonitorConfig !== null && {
        MonitorConfig: serializeAws_json1_1MonitorConfig(input.MonitorConfig, context),
      }),
    ...(input.OptimizationMetric !== undefined &&
      input.OptimizationMetric !== null && { OptimizationMetric: input.OptimizationMetric }),
    ...(input.PredictorName !== undefined && input.PredictorName !== null && { PredictorName: input.PredictorName }),
    ...(input.ReferencePredictorArn !== undefined &&
      input.ReferencePredictorArn !== null && { ReferencePredictorArn: input.ReferencePredictorArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TimeAlignmentBoundary !== undefined &&
      input.TimeAlignmentBoundary !== null && {
        TimeAlignmentBoundary: serializeAws_json1_1TimeAlignmentBoundary(input.TimeAlignmentBoundary, context),
      }),
  };
};

const serializeAws_json1_1CreateDatasetGroupRequest = (
  input: CreateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArns !== undefined &&
      input.DatasetArns !== null && { DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context) }),
    ...(input.DatasetGroupName !== undefined &&
      input.DatasetGroupName !== null && { DatasetGroupName: input.DatasetGroupName }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateDatasetImportJobRequest = (
  input: CreateDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSource !== undefined &&
      input.DataSource !== null && { DataSource: serializeAws_json1_1DataSource(input.DataSource, context) }),
    ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
    ...(input.DatasetImportJobName !== undefined &&
      input.DatasetImportJobName !== null && { DatasetImportJobName: input.DatasetImportJobName }),
    ...(input.GeolocationFormat !== undefined &&
      input.GeolocationFormat !== null && { GeolocationFormat: input.GeolocationFormat }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TimeZone !== undefined && input.TimeZone !== null && { TimeZone: input.TimeZone }),
    ...(input.TimestampFormat !== undefined &&
      input.TimestampFormat !== null && { TimestampFormat: input.TimestampFormat }),
    ...(input.UseGeolocationForTimeZone !== undefined &&
      input.UseGeolocationForTimeZone !== null && { UseGeolocationForTimeZone: input.UseGeolocationForTimeZone }),
  };
};

const serializeAws_json1_1CreateDatasetRequest = (input: CreateDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DataFrequency !== undefined && input.DataFrequency !== null && { DataFrequency: input.DataFrequency }),
    ...(input.DatasetName !== undefined && input.DatasetName !== null && { DatasetName: input.DatasetName }),
    ...(input.DatasetType !== undefined && input.DatasetType !== null && { DatasetType: input.DatasetType }),
    ...(input.Domain !== undefined && input.Domain !== null && { Domain: input.Domain }),
    ...(input.EncryptionConfig !== undefined &&
      input.EncryptionConfig !== null && {
        EncryptionConfig: serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context),
      }),
    ...(input.Schema !== undefined &&
      input.Schema !== null && { Schema: serializeAws_json1_1Schema(input.Schema, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateExplainabilityExportRequest = (
  input: CreateExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_json1_1DataDestination(input.Destination, context) }),
    ...(input.ExplainabilityArn !== undefined &&
      input.ExplainabilityArn !== null && { ExplainabilityArn: input.ExplainabilityArn }),
    ...(input.ExplainabilityExportName !== undefined &&
      input.ExplainabilityExportName !== null && { ExplainabilityExportName: input.ExplainabilityExportName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateExplainabilityRequest = (
  input: CreateExplainabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataSource !== undefined &&
      input.DataSource !== null && { DataSource: serializeAws_json1_1DataSource(input.DataSource, context) }),
    ...(input.EnableVisualization !== undefined &&
      input.EnableVisualization !== null && { EnableVisualization: input.EnableVisualization }),
    ...(input.EndDateTime !== undefined && input.EndDateTime !== null && { EndDateTime: input.EndDateTime }),
    ...(input.ExplainabilityConfig !== undefined &&
      input.ExplainabilityConfig !== null && {
        ExplainabilityConfig: serializeAws_json1_1ExplainabilityConfig(input.ExplainabilityConfig, context),
      }),
    ...(input.ExplainabilityName !== undefined &&
      input.ExplainabilityName !== null && { ExplainabilityName: input.ExplainabilityName }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Schema !== undefined &&
      input.Schema !== null && { Schema: serializeAws_json1_1Schema(input.Schema, context) }),
    ...(input.StartDateTime !== undefined && input.StartDateTime !== null && { StartDateTime: input.StartDateTime }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateForecastExportJobRequest = (
  input: CreateForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_json1_1DataDestination(input.Destination, context) }),
    ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
    ...(input.ForecastExportJobName !== undefined &&
      input.ForecastExportJobName !== null && { ForecastExportJobName: input.ForecastExportJobName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateForecastRequest = (input: CreateForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastName !== undefined && input.ForecastName !== null && { ForecastName: input.ForecastName }),
    ...(input.ForecastTypes !== undefined &&
      input.ForecastTypes !== null && {
        ForecastTypes: serializeAws_json1_1ForecastTypes(input.ForecastTypes, context),
      }),
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateMonitorRequest = (input: CreateMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePredictorBacktestExportJobRequest = (
  input: CreatePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined &&
      input.Destination !== null && { Destination: serializeAws_json1_1DataDestination(input.Destination, context) }),
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
    ...(input.PredictorBacktestExportJobName !== undefined &&
      input.PredictorBacktestExportJobName !== null && {
        PredictorBacktestExportJobName: input.PredictorBacktestExportJobName,
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePredictorRequest = (input: CreatePredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.AlgorithmArn !== undefined && input.AlgorithmArn !== null && { AlgorithmArn: input.AlgorithmArn }),
    ...(input.AutoMLOverrideStrategy !== undefined &&
      input.AutoMLOverrideStrategy !== null && { AutoMLOverrideStrategy: input.AutoMLOverrideStrategy }),
    ...(input.EncryptionConfig !== undefined &&
      input.EncryptionConfig !== null && {
        EncryptionConfig: serializeAws_json1_1EncryptionConfig(input.EncryptionConfig, context),
      }),
    ...(input.EvaluationParameters !== undefined &&
      input.EvaluationParameters !== null && {
        EvaluationParameters: serializeAws_json1_1EvaluationParameters(input.EvaluationParameters, context),
      }),
    ...(input.FeaturizationConfig !== undefined &&
      input.FeaturizationConfig !== null && {
        FeaturizationConfig: serializeAws_json1_1FeaturizationConfig(input.FeaturizationConfig, context),
      }),
    ...(input.ForecastHorizon !== undefined &&
      input.ForecastHorizon !== null && { ForecastHorizon: input.ForecastHorizon }),
    ...(input.ForecastTypes !== undefined &&
      input.ForecastTypes !== null && {
        ForecastTypes: serializeAws_json1_1ForecastTypes(input.ForecastTypes, context),
      }),
    ...(input.HPOConfig !== undefined &&
      input.HPOConfig !== null && {
        HPOConfig: serializeAws_json1_1HyperParameterTuningJobConfig(input.HPOConfig, context),
      }),
    ...(input.InputDataConfig !== undefined &&
      input.InputDataConfig !== null && {
        InputDataConfig: serializeAws_json1_1InputDataConfig(input.InputDataConfig, context),
      }),
    ...(input.OptimizationMetric !== undefined &&
      input.OptimizationMetric !== null && { OptimizationMetric: input.OptimizationMetric }),
    ...(input.PerformAutoML !== undefined && input.PerformAutoML !== null && { PerformAutoML: input.PerformAutoML }),
    ...(input.PerformHPO !== undefined && input.PerformHPO !== null && { PerformHPO: input.PerformHPO }),
    ...(input.PredictorName !== undefined && input.PredictorName !== null && { PredictorName: input.PredictorName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.TrainingParameters !== undefined &&
      input.TrainingParameters !== null && {
        TrainingParameters: serializeAws_json1_1TrainingParameters(input.TrainingParameters, context),
      }),
  };
};

const serializeAws_json1_1DataConfig = (input: DataConfig, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalDatasets !== undefined &&
      input.AdditionalDatasets !== null && {
        AdditionalDatasets: serializeAws_json1_1AdditionalDatasets(input.AdditionalDatasets, context),
      }),
    ...(input.AttributeConfigs !== undefined &&
      input.AttributeConfigs !== null && {
        AttributeConfigs: serializeAws_json1_1AttributeConfigs(input.AttributeConfigs, context),
      }),
    ...(input.DatasetGroupArn !== undefined &&
      input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

const serializeAws_json1_1DataDestination = (input: DataDestination, context: __SerdeContext): any => {
  return {
    ...(input.S3Config !== undefined &&
      input.S3Config !== null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
  };
};

const serializeAws_json1_1DataSource = (input: DataSource, context: __SerdeContext): any => {
  return {
    ...(input.S3Config !== undefined &&
      input.S3Config !== null && { S3Config: serializeAws_json1_1S3Config(input.S3Config, context) }),
  };
};

const serializeAws_json1_1DeleteDatasetGroupRequest = (
  input: DeleteDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetGroupArn !== undefined &&
      input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

const serializeAws_json1_1DeleteDatasetImportJobRequest = (
  input: DeleteDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetImportJobArn !== undefined &&
      input.DatasetImportJobArn !== null && { DatasetImportJobArn: input.DatasetImportJobArn }),
  };
};

const serializeAws_json1_1DeleteDatasetRequest = (input: DeleteDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
  };
};

const serializeAws_json1_1DeleteExplainabilityExportRequest = (
  input: DeleteExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityExportArn !== undefined &&
      input.ExplainabilityExportArn !== null && { ExplainabilityExportArn: input.ExplainabilityExportArn }),
  };
};

const serializeAws_json1_1DeleteExplainabilityRequest = (
  input: DeleteExplainabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityArn !== undefined &&
      input.ExplainabilityArn !== null && { ExplainabilityArn: input.ExplainabilityArn }),
  };
};

const serializeAws_json1_1DeleteForecastExportJobRequest = (
  input: DeleteForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastExportJobArn !== undefined &&
      input.ForecastExportJobArn !== null && { ForecastExportJobArn: input.ForecastExportJobArn }),
  };
};

const serializeAws_json1_1DeleteForecastRequest = (input: DeleteForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
  };
};

const serializeAws_json1_1DeleteMonitorRequest = (input: DeleteMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
  };
};

const serializeAws_json1_1DeletePredictorBacktestExportJobRequest = (
  input: DeletePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorBacktestExportJobArn !== undefined &&
      input.PredictorBacktestExportJobArn !== null && {
        PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
      }),
  };
};

const serializeAws_json1_1DeletePredictorRequest = (input: DeletePredictorRequest, context: __SerdeContext): any => {
  return {
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
  };
};

const serializeAws_json1_1DeleteResourceTreeRequest = (
  input: DeleteResourceTreeRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1DescribeAutoPredictorRequest = (
  input: DescribeAutoPredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
  };
};

const serializeAws_json1_1DescribeDatasetGroupRequest = (
  input: DescribeDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetGroupArn !== undefined &&
      input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

const serializeAws_json1_1DescribeDatasetImportJobRequest = (
  input: DescribeDatasetImportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetImportJobArn !== undefined &&
      input.DatasetImportJobArn !== null && { DatasetImportJobArn: input.DatasetImportJobArn }),
  };
};

const serializeAws_json1_1DescribeDatasetRequest = (input: DescribeDatasetRequest, context: __SerdeContext): any => {
  return {
    ...(input.DatasetArn !== undefined && input.DatasetArn !== null && { DatasetArn: input.DatasetArn }),
  };
};

const serializeAws_json1_1DescribeExplainabilityExportRequest = (
  input: DescribeExplainabilityExportRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityExportArn !== undefined &&
      input.ExplainabilityExportArn !== null && { ExplainabilityExportArn: input.ExplainabilityExportArn }),
  };
};

const serializeAws_json1_1DescribeExplainabilityRequest = (
  input: DescribeExplainabilityRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExplainabilityArn !== undefined &&
      input.ExplainabilityArn !== null && { ExplainabilityArn: input.ExplainabilityArn }),
  };
};

const serializeAws_json1_1DescribeForecastExportJobRequest = (
  input: DescribeForecastExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ForecastExportJobArn !== undefined &&
      input.ForecastExportJobArn !== null && { ForecastExportJobArn: input.ForecastExportJobArn }),
  };
};

const serializeAws_json1_1DescribeForecastRequest = (input: DescribeForecastRequest, context: __SerdeContext): any => {
  return {
    ...(input.ForecastArn !== undefined && input.ForecastArn !== null && { ForecastArn: input.ForecastArn }),
  };
};

const serializeAws_json1_1DescribeMonitorRequest = (input: DescribeMonitorRequest, context: __SerdeContext): any => {
  return {
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
  };
};

const serializeAws_json1_1DescribePredictorBacktestExportJobRequest = (
  input: DescribePredictorBacktestExportJobRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorBacktestExportJobArn !== undefined &&
      input.PredictorBacktestExportJobArn !== null && {
        PredictorBacktestExportJobArn: input.PredictorBacktestExportJobArn,
      }),
  };
};

const serializeAws_json1_1DescribePredictorRequest = (
  input: DescribePredictorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
  };
};

const serializeAws_json1_1EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1EvaluationParameters = (input: EvaluationParameters, context: __SerdeContext): any => {
  return {
    ...(input.BackTestWindowOffset !== undefined &&
      input.BackTestWindowOffset !== null && { BackTestWindowOffset: input.BackTestWindowOffset }),
    ...(input.NumberOfBacktestWindows !== undefined &&
      input.NumberOfBacktestWindows !== null && { NumberOfBacktestWindows: input.NumberOfBacktestWindows }),
  };
};

const serializeAws_json1_1ExplainabilityConfig = (input: ExplainabilityConfig, context: __SerdeContext): any => {
  return {
    ...(input.TimePointGranularity !== undefined &&
      input.TimePointGranularity !== null && { TimePointGranularity: input.TimePointGranularity }),
    ...(input.TimeSeriesGranularity !== undefined &&
      input.TimeSeriesGranularity !== null && { TimeSeriesGranularity: input.TimeSeriesGranularity }),
  };
};

const serializeAws_json1_1Featurization = (input: Featurization, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.FeaturizationPipeline !== undefined &&
      input.FeaturizationPipeline !== null && {
        FeaturizationPipeline: serializeAws_json1_1FeaturizationPipeline(input.FeaturizationPipeline, context),
      }),
  };
};

const serializeAws_json1_1FeaturizationConfig = (input: FeaturizationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Featurizations !== undefined &&
      input.Featurizations !== null && {
        Featurizations: serializeAws_json1_1Featurizations(input.Featurizations, context),
      }),
    ...(input.ForecastDimensions !== undefined &&
      input.ForecastDimensions !== null && {
        ForecastDimensions: serializeAws_json1_1ForecastDimensions(input.ForecastDimensions, context),
      }),
    ...(input.ForecastFrequency !== undefined &&
      input.ForecastFrequency !== null && { ForecastFrequency: input.ForecastFrequency }),
  };
};

const serializeAws_json1_1FeaturizationMethod = (input: FeaturizationMethod, context: __SerdeContext): any => {
  return {
    ...(input.FeaturizationMethodName !== undefined &&
      input.FeaturizationMethodName !== null && { FeaturizationMethodName: input.FeaturizationMethodName }),
    ...(input.FeaturizationMethodParameters !== undefined &&
      input.FeaturizationMethodParameters !== null && {
        FeaturizationMethodParameters: serializeAws_json1_1FeaturizationMethodParameters(
          input.FeaturizationMethodParameters,
          context
        ),
      }),
  };
};

const serializeAws_json1_1FeaturizationMethodParameters = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1FeaturizationPipeline = (input: FeaturizationMethod[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1FeaturizationMethod(entry, context);
    });
};

const serializeAws_json1_1Featurizations = (input: Featurization[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Featurization(entry, context);
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1ForecastDimensions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ForecastTypes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetAccuracyMetricsRequest = (
  input: GetAccuracyMetricsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.PredictorArn !== undefined && input.PredictorArn !== null && { PredictorArn: input.PredictorArn }),
  };
};

const serializeAws_json1_1HyperParameterTuningJobConfig = (
  input: HyperParameterTuningJobConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterRanges !== undefined &&
      input.ParameterRanges !== null && {
        ParameterRanges: serializeAws_json1_1ParameterRanges(input.ParameterRanges, context),
      }),
  };
};

const serializeAws_json1_1InputDataConfig = (input: InputDataConfig, context: __SerdeContext): any => {
  return {
    ...(input.DatasetGroupArn !== undefined &&
      input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
    ...(input.SupplementaryFeatures !== undefined &&
      input.SupplementaryFeatures !== null && {
        SupplementaryFeatures: serializeAws_json1_1SupplementaryFeatures(input.SupplementaryFeatures, context),
      }),
  };
};

const serializeAws_json1_1IntegerParameterRange = (input: IntegerParameterRange, context: __SerdeContext): any => {
  return {
    ...(input.MaxValue !== undefined && input.MaxValue !== null && { MaxValue: input.MaxValue }),
    ...(input.MinValue !== undefined && input.MinValue !== null && { MinValue: input.MinValue }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.ScalingType !== undefined && input.ScalingType !== null && { ScalingType: input.ScalingType }),
  };
};

const serializeAws_json1_1IntegerParameterRanges = (input: IntegerParameterRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1IntegerParameterRange(entry, context);
    });
};

const serializeAws_json1_1ListDatasetGroupsRequest = (
  input: ListDatasetGroupsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDatasetImportJobsRequest = (
  input: ListDatasetImportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListDatasetsRequest = (input: ListDatasetsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExplainabilitiesRequest = (
  input: ListExplainabilitiesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListExplainabilityExportsRequest = (
  input: ListExplainabilityExportsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListForecastExportJobsRequest = (
  input: ListForecastExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListForecastsRequest = (input: ListForecastsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListMonitorEvaluationsRequest = (
  input: ListMonitorEvaluationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.MonitorArn !== undefined && input.MonitorArn !== null && { MonitorArn: input.MonitorArn }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListMonitorsRequest = (input: ListMonitorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPredictorBacktestExportJobsRequest = (
  input: ListPredictorBacktestExportJobsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListPredictorsRequest = (input: ListPredictorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1MonitorConfig = (input: MonitorConfig, context: __SerdeContext): any => {
  return {
    ...(input.MonitorName !== undefined && input.MonitorName !== null && { MonitorName: input.MonitorName }),
  };
};

const serializeAws_json1_1ParameterRanges = (input: ParameterRanges, context: __SerdeContext): any => {
  return {
    ...(input.CategoricalParameterRanges !== undefined &&
      input.CategoricalParameterRanges !== null && {
        CategoricalParameterRanges: serializeAws_json1_1CategoricalParameterRanges(
          input.CategoricalParameterRanges,
          context
        ),
      }),
    ...(input.ContinuousParameterRanges !== undefined &&
      input.ContinuousParameterRanges !== null && {
        ContinuousParameterRanges: serializeAws_json1_1ContinuousParameterRanges(
          input.ContinuousParameterRanges,
          context
        ),
      }),
    ...(input.IntegerParameterRanges !== undefined &&
      input.IntegerParameterRanges !== null && {
        IntegerParameterRanges: serializeAws_json1_1IntegerParameterRanges(input.IntegerParameterRanges, context),
      }),
  };
};

const serializeAws_json1_1ResumeResourceRequest = (input: ResumeResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1S3Config = (input: S3Config, context: __SerdeContext): any => {
  return {
    ...(input.KMSKeyArn !== undefined && input.KMSKeyArn !== null && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
  };
};

const serializeAws_json1_1Schema = (input: Schema, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_json1_1SchemaAttributes(input.Attributes, context) }),
  };
};

const serializeAws_json1_1SchemaAttribute = (input: SchemaAttribute, context: __SerdeContext): any => {
  return {
    ...(input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }),
  };
};

const serializeAws_json1_1SchemaAttributes = (input: SchemaAttribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SchemaAttribute(entry, context);
    });
};

const serializeAws_json1_1StopResourceRequest = (input: StopResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_1SupplementaryFeature = (input: SupplementaryFeature, context: __SerdeContext): any => {
  return {
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1SupplementaryFeatures = (input: SupplementaryFeature[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1SupplementaryFeature(entry, context);
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TimeAlignmentBoundary = (input: TimeAlignmentBoundary, context: __SerdeContext): any => {
  return {
    ...(input.DayOfMonth !== undefined && input.DayOfMonth !== null && { DayOfMonth: input.DayOfMonth }),
    ...(input.DayOfWeek !== undefined && input.DayOfWeek !== null && { DayOfWeek: input.DayOfWeek }),
    ...(input.Hour !== undefined && input.Hour !== null && { Hour: input.Hour }),
    ...(input.Month !== undefined && input.Month !== null && { Month: input.Month }),
  };
};

const serializeAws_json1_1TrainingParameters = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1Transformations = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDatasetGroupRequest = (
  input: UpdateDatasetGroupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatasetArns !== undefined &&
      input.DatasetArns !== null && { DatasetArns: serializeAws_json1_1ArnList(input.DatasetArns, context) }),
    ...(input.DatasetGroupArn !== undefined &&
      input.DatasetGroupArn !== null && { DatasetGroupArn: input.DatasetGroupArn }),
  };
};

const serializeAws_json1_1Values = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_json1_1AdditionalDataset = (output: any, context: __SerdeContext): AdditionalDataset => {
  return {
    Configuration:
      output.Configuration !== undefined && output.Configuration !== null
        ? deserializeAws_json1_1Configuration(output.Configuration, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1AdditionalDatasets = (output: any, context: __SerdeContext): AdditionalDataset[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdditionalDataset(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ArnList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1AttributeConfig = (output: any, context: __SerdeContext): AttributeConfig => {
  return {
    AttributeName: __expectString(output.AttributeName),
    Transformations:
      output.Transformations !== undefined && output.Transformations !== null
        ? deserializeAws_json1_1Transformations(output.Transformations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1AttributeConfigs = (output: any, context: __SerdeContext): AttributeConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AttributeConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Baseline = (output: any, context: __SerdeContext): Baseline => {
  return {
    PredictorBaseline:
      output.PredictorBaseline !== undefined && output.PredictorBaseline !== null
        ? deserializeAws_json1_1PredictorBaseline(output.PredictorBaseline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1BaselineMetric = (output: any, context: __SerdeContext): BaselineMetric => {
  return {
    Name: __expectString(output.Name),
    Value: __limitedParseDouble(output.Value),
  } as any;
};

const deserializeAws_json1_1BaselineMetrics = (output: any, context: __SerdeContext): BaselineMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1BaselineMetric(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CategoricalParameterRange = (
  output: any,
  context: __SerdeContext
): CategoricalParameterRange => {
  return {
    Name: __expectString(output.Name),
    Values:
      output.Values !== undefined && output.Values !== null
        ? deserializeAws_json1_1Values(output.Values, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CategoricalParameterRanges = (
  output: any,
  context: __SerdeContext
): CategoricalParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1CategoricalParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Configuration = (output: any, context: __SerdeContext): { [key: string]: string[] } => {
  return Object.entries(output).reduce((acc: { [key: string]: string[] }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1Values(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ContinuousParameterRange = (
  output: any,
  context: __SerdeContext
): ContinuousParameterRange => {
  return {
    MaxValue: __limitedParseDouble(output.MaxValue),
    MinValue: __limitedParseDouble(output.MinValue),
    Name: __expectString(output.Name),
    ScalingType: __expectString(output.ScalingType),
  } as any;
};

const deserializeAws_json1_1ContinuousParameterRanges = (
  output: any,
  context: __SerdeContext
): ContinuousParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ContinuousParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1CreateAutoPredictorResponse = (
  output: any,
  context: __SerdeContext
): CreateAutoPredictorResponse => {
  return {
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetGroupResponse => {
  return {
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateDatasetImportJobResponse => {
  return {
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
  } as any;
};

const deserializeAws_json1_1CreateDatasetResponse = (output: any, context: __SerdeContext): CreateDatasetResponse => {
  return {
    DatasetArn: __expectString(output.DatasetArn),
  } as any;
};

const deserializeAws_json1_1CreateExplainabilityExportResponse = (
  output: any,
  context: __SerdeContext
): CreateExplainabilityExportResponse => {
  return {
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
  } as any;
};

const deserializeAws_json1_1CreateExplainabilityResponse = (
  output: any,
  context: __SerdeContext
): CreateExplainabilityResponse => {
  return {
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
  } as any;
};

const deserializeAws_json1_1CreateForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreateForecastExportJobResponse => {
  return {
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
  } as any;
};

const deserializeAws_json1_1CreateForecastResponse = (output: any, context: __SerdeContext): CreateForecastResponse => {
  return {
    ForecastArn: __expectString(output.ForecastArn),
  } as any;
};

const deserializeAws_json1_1CreateMonitorResponse = (output: any, context: __SerdeContext): CreateMonitorResponse => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
  } as any;
};

const deserializeAws_json1_1CreatePredictorBacktestExportJobResponse = (
  output: any,
  context: __SerdeContext
): CreatePredictorBacktestExportJobResponse => {
  return {
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
  } as any;
};

const deserializeAws_json1_1CreatePredictorResponse = (
  output: any,
  context: __SerdeContext
): CreatePredictorResponse => {
  return {
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

const deserializeAws_json1_1DataConfig = (output: any, context: __SerdeContext): DataConfig => {
  return {
    AdditionalDatasets:
      output.AdditionalDatasets !== undefined && output.AdditionalDatasets !== null
        ? deserializeAws_json1_1AdditionalDatasets(output.AdditionalDatasets, context)
        : undefined,
    AttributeConfigs:
      output.AttributeConfigs !== undefined && output.AttributeConfigs !== null
        ? deserializeAws_json1_1AttributeConfigs(output.AttributeConfigs, context)
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
  } as any;
};

const deserializeAws_json1_1DataDestination = (output: any, context: __SerdeContext): DataDestination => {
  return {
    S3Config:
      output.S3Config !== undefined && output.S3Config !== null
        ? deserializeAws_json1_1S3Config(output.S3Config, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatasetGroups = (output: any, context: __SerdeContext): DatasetGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetGroupSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetGroupSummary = (output: any, context: __SerdeContext): DatasetGroupSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    DatasetGroupName: __expectString(output.DatasetGroupName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DatasetImportJobs = (output: any, context: __SerdeContext): DatasetImportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetImportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetImportJobSummary = (
  output: any,
  context: __SerdeContext
): DatasetImportJobSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSource:
      output.DataSource !== undefined && output.DataSource !== null
        ? deserializeAws_json1_1DataSource(output.DataSource, context)
        : undefined,
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    DatasetImportJobName: __expectString(output.DatasetImportJobName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Datasets = (output: any, context: __SerdeContext): DatasetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DatasetSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DatasetSummary = (output: any, context: __SerdeContext): DatasetSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    DatasetType: __expectString(output.DatasetType),
    Domain: __expectString(output.Domain),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1DataSource = (output: any, context: __SerdeContext): DataSource => {
  return {
    S3Config:
      output.S3Config !== undefined && output.S3Config !== null
        ? deserializeAws_json1_1S3Config(output.S3Config, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeAutoPredictorResponse = (
  output: any,
  context: __SerdeContext
): DescribeAutoPredictorResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataConfig:
      output.DataConfig !== undefined && output.DataConfig !== null
        ? deserializeAws_json1_1DataConfig(output.DataConfig, context)
        : undefined,
    DatasetImportJobArns:
      output.DatasetImportJobArns !== undefined && output.DatasetImportJobArns !== null
        ? deserializeAws_json1_1ArnList(output.DatasetImportJobArns, context)
        : undefined,
    EncryptionConfig:
      output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
        ? deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context)
        : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ExplainabilityInfo:
      output.ExplainabilityInfo !== undefined && output.ExplainabilityInfo !== null
        ? deserializeAws_json1_1ExplainabilityInfo(output.ExplainabilityInfo, context)
        : undefined,
    ForecastDimensions:
      output.ForecastDimensions !== undefined && output.ForecastDimensions !== null
        ? deserializeAws_json1_1ForecastDimensions(output.ForecastDimensions, context)
        : undefined,
    ForecastFrequency: __expectString(output.ForecastFrequency),
    ForecastHorizon: __expectInt32(output.ForecastHorizon),
    ForecastTypes:
      output.ForecastTypes !== undefined && output.ForecastTypes !== null
        ? deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context)
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MonitorInfo:
      output.MonitorInfo !== undefined && output.MonitorInfo !== null
        ? deserializeAws_json1_1MonitorInfo(output.MonitorInfo, context)
        : undefined,
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorName: __expectString(output.PredictorName),
    ReferencePredictorSummary:
      output.ReferencePredictorSummary !== undefined && output.ReferencePredictorSummary !== null
        ? deserializeAws_json1_1ReferencePredictorSummary(output.ReferencePredictorSummary, context)
        : undefined,
    Status: __expectString(output.Status),
    TimeAlignmentBoundary:
      output.TimeAlignmentBoundary !== undefined && output.TimeAlignmentBoundary !== null
        ? deserializeAws_json1_1TimeAlignmentBoundary(output.TimeAlignmentBoundary, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetGroupResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetArns:
      output.DatasetArns !== undefined && output.DatasetArns !== null
        ? deserializeAws_json1_1ArnList(output.DatasetArns, context)
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    DatasetGroupName: __expectString(output.DatasetGroupName),
    Domain: __expectString(output.Domain),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeDatasetImportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetImportJobResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSize: __limitedParseDouble(output.DataSize),
    DataSource:
      output.DataSource !== undefined && output.DataSource !== null
        ? deserializeAws_json1_1DataSource(output.DataSource, context)
        : undefined,
    DatasetArn: __expectString(output.DatasetArn),
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    DatasetImportJobName: __expectString(output.DatasetImportJobName),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    FieldStatistics:
      output.FieldStatistics !== undefined && output.FieldStatistics !== null
        ? deserializeAws_json1_1FieldStatistics(output.FieldStatistics, context)
        : undefined,
    GeolocationFormat: __expectString(output.GeolocationFormat),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TimeZone: __expectString(output.TimeZone),
    TimestampFormat: __expectString(output.TimestampFormat),
    UseGeolocationForTimeZone: __expectBoolean(output.UseGeolocationForTimeZone),
  } as any;
};

const deserializeAws_json1_1DescribeDatasetResponse = (
  output: any,
  context: __SerdeContext
): DescribeDatasetResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataFrequency: __expectString(output.DataFrequency),
    DatasetArn: __expectString(output.DatasetArn),
    DatasetName: __expectString(output.DatasetName),
    DatasetType: __expectString(output.DatasetType),
    Domain: __expectString(output.Domain),
    EncryptionConfig:
      output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
        ? deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context)
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Schema:
      output.Schema !== undefined && output.Schema !== null
        ? deserializeAws_json1_1Schema(output.Schema, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeExplainabilityExportResponse = (
  output: any,
  context: __SerdeContext
): DescribeExplainabilityExportResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
    ExplainabilityExportName: __expectString(output.ExplainabilityExportName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeExplainabilityResponse = (
  output: any,
  context: __SerdeContext
): DescribeExplainabilityResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataSource:
      output.DataSource !== undefined && output.DataSource !== null
        ? deserializeAws_json1_1DataSource(output.DataSource, context)
        : undefined,
    EnableVisualization: __expectBoolean(output.EnableVisualization),
    EndDateTime: __expectString(output.EndDateTime),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityConfig:
      output.ExplainabilityConfig !== undefined && output.ExplainabilityConfig !== null
        ? deserializeAws_json1_1ExplainabilityConfig(output.ExplainabilityConfig, context)
        : undefined,
    ExplainabilityName: __expectString(output.ExplainabilityName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    ResourceArn: __expectString(output.ResourceArn),
    Schema:
      output.Schema !== undefined && output.Schema !== null
        ? deserializeAws_json1_1Schema(output.Schema, context)
        : undefined,
    StartDateTime: __expectString(output.StartDateTime),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeForecastExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastExportJobResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    ForecastArn: __expectString(output.ForecastArn),
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
    ForecastExportJobName: __expectString(output.ForecastExportJobName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeForecastResponse = (
  output: any,
  context: __SerdeContext
): DescribeForecastResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    ForecastArn: __expectString(output.ForecastArn),
    ForecastName: __expectString(output.ForecastName),
    ForecastTypes:
      output.ForecastTypes !== undefined && output.ForecastTypes !== null
        ? deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context)
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribeMonitorResponse = (
  output: any,
  context: __SerdeContext
): DescribeMonitorResponse => {
  return {
    Baseline:
      output.Baseline !== undefined && output.Baseline !== null
        ? deserializeAws_json1_1Baseline(output.Baseline, context)
        : undefined,
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EstimatedEvaluationTimeRemainingInMinutes: __expectLong(output.EstimatedEvaluationTimeRemainingInMinutes),
    LastEvaluationState: __expectString(output.LastEvaluationState),
    LastEvaluationTime:
      output.LastEvaluationTime !== undefined && output.LastEvaluationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastEvaluationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MonitorArn: __expectString(output.MonitorArn),
    MonitorName: __expectString(output.MonitorName),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribePredictorBacktestExportJobResponse = (
  output: any,
  context: __SerdeContext
): DescribePredictorBacktestExportJobResponse => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
    PredictorBacktestExportJobName: __expectString(output.PredictorBacktestExportJobName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1DescribePredictorResponse = (
  output: any,
  context: __SerdeContext
): DescribePredictorResponse => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    AutoMLAlgorithmArns:
      output.AutoMLAlgorithmArns !== undefined && output.AutoMLAlgorithmArns !== null
        ? deserializeAws_json1_1ArnList(output.AutoMLAlgorithmArns, context)
        : undefined,
    AutoMLOverrideStrategy: __expectString(output.AutoMLOverrideStrategy),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetImportJobArns:
      output.DatasetImportJobArns !== undefined && output.DatasetImportJobArns !== null
        ? deserializeAws_json1_1ArnList(output.DatasetImportJobArns, context)
        : undefined,
    EncryptionConfig:
      output.EncryptionConfig !== undefined && output.EncryptionConfig !== null
        ? deserializeAws_json1_1EncryptionConfig(output.EncryptionConfig, context)
        : undefined,
    EstimatedTimeRemainingInMinutes: __expectLong(output.EstimatedTimeRemainingInMinutes),
    EvaluationParameters:
      output.EvaluationParameters !== undefined && output.EvaluationParameters !== null
        ? deserializeAws_json1_1EvaluationParameters(output.EvaluationParameters, context)
        : undefined,
    FeaturizationConfig:
      output.FeaturizationConfig !== undefined && output.FeaturizationConfig !== null
        ? deserializeAws_json1_1FeaturizationConfig(output.FeaturizationConfig, context)
        : undefined,
    ForecastHorizon: __expectInt32(output.ForecastHorizon),
    ForecastTypes:
      output.ForecastTypes !== undefined && output.ForecastTypes !== null
        ? deserializeAws_json1_1ForecastTypes(output.ForecastTypes, context)
        : undefined,
    HPOConfig:
      output.HPOConfig !== undefined && output.HPOConfig !== null
        ? deserializeAws_json1_1HyperParameterTuningJobConfig(output.HPOConfig, context)
        : undefined,
    InputDataConfig:
      output.InputDataConfig !== undefined && output.InputDataConfig !== null
        ? deserializeAws_json1_1InputDataConfig(output.InputDataConfig, context)
        : undefined,
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PerformAutoML: __expectBoolean(output.PerformAutoML),
    PerformHPO: __expectBoolean(output.PerformHPO),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorExecutionDetails:
      output.PredictorExecutionDetails !== undefined && output.PredictorExecutionDetails !== null
        ? deserializeAws_json1_1PredictorExecutionDetails(output.PredictorExecutionDetails, context)
        : undefined,
    PredictorName: __expectString(output.PredictorName),
    Status: __expectString(output.Status),
    TrainingParameters:
      output.TrainingParameters !== undefined && output.TrainingParameters !== null
        ? deserializeAws_json1_1TrainingParameters(output.TrainingParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    KMSKeyArn: __expectString(output.KMSKeyArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1ErrorMetric = (output: any, context: __SerdeContext): ErrorMetric => {
  return {
    ForecastType: __expectString(output.ForecastType),
    MAPE: __limitedParseDouble(output.MAPE),
    MASE: __limitedParseDouble(output.MASE),
    RMSE: __limitedParseDouble(output.RMSE),
    WAPE: __limitedParseDouble(output.WAPE),
  } as any;
};

const deserializeAws_json1_1ErrorMetrics = (output: any, context: __SerdeContext): ErrorMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ErrorMetric(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1EvaluationParameters = (output: any, context: __SerdeContext): EvaluationParameters => {
  return {
    BackTestWindowOffset: __expectInt32(output.BackTestWindowOffset),
    NumberOfBacktestWindows: __expectInt32(output.NumberOfBacktestWindows),
  } as any;
};

const deserializeAws_json1_1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    TestWindows:
      output.TestWindows !== undefined && output.TestWindows !== null
        ? deserializeAws_json1_1TestWindows(output.TestWindows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Explainabilities = (output: any, context: __SerdeContext): ExplainabilitySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExplainabilitySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExplainabilityConfig = (output: any, context: __SerdeContext): ExplainabilityConfig => {
  return {
    TimePointGranularity: __expectString(output.TimePointGranularity),
    TimeSeriesGranularity: __expectString(output.TimeSeriesGranularity),
  } as any;
};

const deserializeAws_json1_1ExplainabilityExports = (
  output: any,
  context: __SerdeContext
): ExplainabilityExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ExplainabilityExportSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ExplainabilityExportSummary = (
  output: any,
  context: __SerdeContext
): ExplainabilityExportSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    ExplainabilityExportArn: __expectString(output.ExplainabilityExportArn),
    ExplainabilityExportName: __expectString(output.ExplainabilityExportName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ExplainabilityInfo = (output: any, context: __SerdeContext): ExplainabilityInfo => {
  return {
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ExplainabilitySummary = (output: any, context: __SerdeContext): ExplainabilitySummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ExplainabilityArn: __expectString(output.ExplainabilityArn),
    ExplainabilityConfig:
      output.ExplainabilityConfig !== undefined && output.ExplainabilityConfig !== null
        ? deserializeAws_json1_1ExplainabilityConfig(output.ExplainabilityConfig, context)
        : undefined,
    ExplainabilityName: __expectString(output.ExplainabilityName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Featurization = (output: any, context: __SerdeContext): Featurization => {
  return {
    AttributeName: __expectString(output.AttributeName),
    FeaturizationPipeline:
      output.FeaturizationPipeline !== undefined && output.FeaturizationPipeline !== null
        ? deserializeAws_json1_1FeaturizationPipeline(output.FeaturizationPipeline, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FeaturizationConfig = (output: any, context: __SerdeContext): FeaturizationConfig => {
  return {
    Featurizations:
      output.Featurizations !== undefined && output.Featurizations !== null
        ? deserializeAws_json1_1Featurizations(output.Featurizations, context)
        : undefined,
    ForecastDimensions:
      output.ForecastDimensions !== undefined && output.ForecastDimensions !== null
        ? deserializeAws_json1_1ForecastDimensions(output.ForecastDimensions, context)
        : undefined,
    ForecastFrequency: __expectString(output.ForecastFrequency),
  } as any;
};

const deserializeAws_json1_1FeaturizationMethod = (output: any, context: __SerdeContext): FeaturizationMethod => {
  return {
    FeaturizationMethodName: __expectString(output.FeaturizationMethodName),
    FeaturizationMethodParameters:
      output.FeaturizationMethodParameters !== undefined && output.FeaturizationMethodParameters !== null
        ? deserializeAws_json1_1FeaturizationMethodParameters(output.FeaturizationMethodParameters, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FeaturizationMethodParameters = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1FeaturizationPipeline = (output: any, context: __SerdeContext): FeaturizationMethod[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FeaturizationMethod(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Featurizations = (output: any, context: __SerdeContext): Featurization[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Featurization(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FieldStatistics = (output: any, context: __SerdeContext): { [key: string]: Statistics } => {
  return Object.entries(output).reduce((acc: { [key: string]: Statistics }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_json1_1Statistics(value, context),
    };
  }, {});
};

const deserializeAws_json1_1ForecastDimensions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ForecastExportJobs = (output: any, context: __SerdeContext): ForecastExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ForecastExportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ForecastExportJobSummary = (
  output: any,
  context: __SerdeContext
): ForecastExportJobSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    ForecastExportJobArn: __expectString(output.ForecastExportJobArn),
    ForecastExportJobName: __expectString(output.ForecastExportJobName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Forecasts = (output: any, context: __SerdeContext): ForecastSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ForecastSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1ForecastSummary = (output: any, context: __SerdeContext): ForecastSummary => {
  return {
    CreatedUsingAutoPredictor: __expectBoolean(output.CreatedUsingAutoPredictor),
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    ForecastArn: __expectString(output.ForecastArn),
    ForecastName: __expectString(output.ForecastName),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ForecastTypes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1GetAccuracyMetricsResponse = (
  output: any,
  context: __SerdeContext
): GetAccuracyMetricsResponse => {
  return {
    AutoMLOverrideStrategy: __expectString(output.AutoMLOverrideStrategy),
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    OptimizationMetric: __expectString(output.OptimizationMetric),
    PredictorEvaluationResults:
      output.PredictorEvaluationResults !== undefined && output.PredictorEvaluationResults !== null
        ? deserializeAws_json1_1PredictorEvaluationResults(output.PredictorEvaluationResults, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HyperParameterTuningJobConfig = (
  output: any,
  context: __SerdeContext
): HyperParameterTuningJobConfig => {
  return {
    ParameterRanges:
      output.ParameterRanges !== undefined && output.ParameterRanges !== null
        ? deserializeAws_json1_1ParameterRanges(output.ParameterRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1InputDataConfig = (output: any, context: __SerdeContext): InputDataConfig => {
  return {
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    SupplementaryFeatures:
      output.SupplementaryFeatures !== undefined && output.SupplementaryFeatures !== null
        ? deserializeAws_json1_1SupplementaryFeatures(output.SupplementaryFeatures, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1IntegerParameterRange = (output: any, context: __SerdeContext): IntegerParameterRange => {
  return {
    MaxValue: __expectInt32(output.MaxValue),
    MinValue: __expectInt32(output.MinValue),
    Name: __expectString(output.Name),
    ScalingType: __expectString(output.ScalingType),
  } as any;
};

const deserializeAws_json1_1IntegerParameterRanges = (
  output: any,
  context: __SerdeContext
): IntegerParameterRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1IntegerParameterRange(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1InvalidInputException = (output: any, context: __SerdeContext): InvalidInputException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNextTokenException = (
  output: any,
  context: __SerdeContext
): InvalidNextTokenException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListDatasetGroupsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetGroupsResponse => {
  return {
    DatasetGroups:
      output.DatasetGroups !== undefined && output.DatasetGroups !== null
        ? deserializeAws_json1_1DatasetGroups(output.DatasetGroups, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetImportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListDatasetImportJobsResponse => {
  return {
    DatasetImportJobs:
      output.DatasetImportJobs !== undefined && output.DatasetImportJobs !== null
        ? deserializeAws_json1_1DatasetImportJobs(output.DatasetImportJobs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListDatasetsResponse = (output: any, context: __SerdeContext): ListDatasetsResponse => {
  return {
    Datasets:
      output.Datasets !== undefined && output.Datasets !== null
        ? deserializeAws_json1_1Datasets(output.Datasets, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListExplainabilitiesResponse = (
  output: any,
  context: __SerdeContext
): ListExplainabilitiesResponse => {
  return {
    Explainabilities:
      output.Explainabilities !== undefined && output.Explainabilities !== null
        ? deserializeAws_json1_1Explainabilities(output.Explainabilities, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListExplainabilityExportsResponse = (
  output: any,
  context: __SerdeContext
): ListExplainabilityExportsResponse => {
  return {
    ExplainabilityExports:
      output.ExplainabilityExports !== undefined && output.ExplainabilityExports !== null
        ? deserializeAws_json1_1ExplainabilityExports(output.ExplainabilityExports, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListForecastExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListForecastExportJobsResponse => {
  return {
    ForecastExportJobs:
      output.ForecastExportJobs !== undefined && output.ForecastExportJobs !== null
        ? deserializeAws_json1_1ForecastExportJobs(output.ForecastExportJobs, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListForecastsResponse = (output: any, context: __SerdeContext): ListForecastsResponse => {
  return {
    Forecasts:
      output.Forecasts !== undefined && output.Forecasts !== null
        ? deserializeAws_json1_1Forecasts(output.Forecasts, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListMonitorEvaluationsResponse = (
  output: any,
  context: __SerdeContext
): ListMonitorEvaluationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PredictorMonitorEvaluations:
      output.PredictorMonitorEvaluations !== undefined && output.PredictorMonitorEvaluations !== null
        ? deserializeAws_json1_1PredictorMonitorEvaluations(output.PredictorMonitorEvaluations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListMonitorsResponse = (output: any, context: __SerdeContext): ListMonitorsResponse => {
  return {
    Monitors:
      output.Monitors !== undefined && output.Monitors !== null
        ? deserializeAws_json1_1Monitors(output.Monitors, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListPredictorBacktestExportJobsResponse = (
  output: any,
  context: __SerdeContext
): ListPredictorBacktestExportJobsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    PredictorBacktestExportJobs:
      output.PredictorBacktestExportJobs !== undefined && output.PredictorBacktestExportJobs !== null
        ? deserializeAws_json1_1PredictorBacktestExportJobs(output.PredictorBacktestExportJobs, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListPredictorsResponse = (output: any, context: __SerdeContext): ListPredictorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Predictors:
      output.Predictors !== undefined && output.Predictors !== null
        ? deserializeAws_json1_1Predictors(output.Predictors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1MetricResult = (output: any, context: __SerdeContext): MetricResult => {
  return {
    MetricName: __expectString(output.MetricName),
    MetricValue: __limitedParseDouble(output.MetricValue),
  } as any;
};

const deserializeAws_json1_1MetricResults = (output: any, context: __SerdeContext): MetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MetricResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Metrics = (output: any, context: __SerdeContext): Metrics => {
  return {
    AverageWeightedQuantileLoss: __limitedParseDouble(output.AverageWeightedQuantileLoss),
    ErrorMetrics:
      output.ErrorMetrics !== undefined && output.ErrorMetrics !== null
        ? deserializeAws_json1_1ErrorMetrics(output.ErrorMetrics, context)
        : undefined,
    RMSE: __limitedParseDouble(output.RMSE),
    WeightedQuantileLosses:
      output.WeightedQuantileLosses !== undefined && output.WeightedQuantileLosses !== null
        ? deserializeAws_json1_1WeightedQuantileLosses(output.WeightedQuantileLosses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1MonitorDataSource = (output: any, context: __SerdeContext): MonitorDataSource => {
  return {
    DatasetImportJobArn: __expectString(output.DatasetImportJobArn),
    ForecastArn: __expectString(output.ForecastArn),
    PredictorArn: __expectString(output.PredictorArn),
  } as any;
};

const deserializeAws_json1_1MonitorInfo = (output: any, context: __SerdeContext): MonitorInfo => {
  return {
    MonitorArn: __expectString(output.MonitorArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1Monitors = (output: any, context: __SerdeContext): MonitorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1MonitorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1MonitorSummary = (output: any, context: __SerdeContext): MonitorSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    MonitorName: __expectString(output.MonitorName),
    ResourceArn: __expectString(output.ResourceArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ParameterRanges = (output: any, context: __SerdeContext): ParameterRanges => {
  return {
    CategoricalParameterRanges:
      output.CategoricalParameterRanges !== undefined && output.CategoricalParameterRanges !== null
        ? deserializeAws_json1_1CategoricalParameterRanges(output.CategoricalParameterRanges, context)
        : undefined,
    ContinuousParameterRanges:
      output.ContinuousParameterRanges !== undefined && output.ContinuousParameterRanges !== null
        ? deserializeAws_json1_1ContinuousParameterRanges(output.ContinuousParameterRanges, context)
        : undefined,
    IntegerParameterRanges:
      output.IntegerParameterRanges !== undefined && output.IntegerParameterRanges !== null
        ? deserializeAws_json1_1IntegerParameterRanges(output.IntegerParameterRanges, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PredictorBacktestExportJobs = (
  output: any,
  context: __SerdeContext
): PredictorBacktestExportJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PredictorBacktestExportJobSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PredictorBacktestExportJobSummary = (
  output: any,
  context: __SerdeContext
): PredictorBacktestExportJobSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? deserializeAws_json1_1DataDestination(output.Destination, context)
        : undefined,
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorBacktestExportJobArn: __expectString(output.PredictorBacktestExportJobArn),
    PredictorBacktestExportJobName: __expectString(output.PredictorBacktestExportJobName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1PredictorBaseline = (output: any, context: __SerdeContext): PredictorBaseline => {
  return {
    BaselineMetrics:
      output.BaselineMetrics !== undefined && output.BaselineMetrics !== null
        ? deserializeAws_json1_1BaselineMetrics(output.BaselineMetrics, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PredictorEvaluationResults = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1EvaluationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PredictorEvent = (output: any, context: __SerdeContext): PredictorEvent => {
  return {
    Datetime:
      output.Datetime !== undefined && output.Datetime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.Datetime)))
        : undefined,
    Detail: __expectString(output.Detail),
  } as any;
};

const deserializeAws_json1_1PredictorExecution = (output: any, context: __SerdeContext): PredictorExecution => {
  return {
    AlgorithmArn: __expectString(output.AlgorithmArn),
    TestWindows:
      output.TestWindows !== undefined && output.TestWindows !== null
        ? deserializeAws_json1_1TestWindowDetails(output.TestWindows, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PredictorExecutionDetails = (
  output: any,
  context: __SerdeContext
): PredictorExecutionDetails => {
  return {
    PredictorExecutions:
      output.PredictorExecutions !== undefined && output.PredictorExecutions !== null
        ? deserializeAws_json1_1PredictorExecutions(output.PredictorExecutions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1PredictorExecutions = (output: any, context: __SerdeContext): PredictorExecution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PredictorExecution(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PredictorMonitorEvaluation = (
  output: any,
  context: __SerdeContext
): PredictorMonitorEvaluation => {
  return {
    EvaluationState: __expectString(output.EvaluationState),
    EvaluationTime:
      output.EvaluationTime !== undefined && output.EvaluationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationTime)))
        : undefined,
    Message: __expectString(output.Message),
    MetricResults:
      output.MetricResults !== undefined && output.MetricResults !== null
        ? deserializeAws_json1_1MetricResults(output.MetricResults, context)
        : undefined,
    MonitorArn: __expectString(output.MonitorArn),
    MonitorDataSource:
      output.MonitorDataSource !== undefined && output.MonitorDataSource !== null
        ? deserializeAws_json1_1MonitorDataSource(output.MonitorDataSource, context)
        : undefined,
    NumItemsEvaluated: __expectLong(output.NumItemsEvaluated),
    PredictorEvent:
      output.PredictorEvent !== undefined && output.PredictorEvent !== null
        ? deserializeAws_json1_1PredictorEvent(output.PredictorEvent, context)
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    WindowEndDatetime:
      output.WindowEndDatetime !== undefined && output.WindowEndDatetime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.WindowEndDatetime)))
        : undefined,
    WindowStartDatetime:
      output.WindowStartDatetime !== undefined && output.WindowStartDatetime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.WindowStartDatetime)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1PredictorMonitorEvaluations = (
  output: any,
  context: __SerdeContext
): PredictorMonitorEvaluation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PredictorMonitorEvaluation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Predictors = (output: any, context: __SerdeContext): PredictorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1PredictorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1PredictorSummary = (output: any, context: __SerdeContext): PredictorSummary => {
  return {
    CreationTime:
      output.CreationTime !== undefined && output.CreationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DatasetGroupArn: __expectString(output.DatasetGroupArn),
    IsAutoPredictor: __expectBoolean(output.IsAutoPredictor),
    LastModificationTime:
      output.LastModificationTime !== undefined && output.LastModificationTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Message: __expectString(output.Message),
    PredictorArn: __expectString(output.PredictorArn),
    PredictorName: __expectString(output.PredictorName),
    ReferencePredictorSummary:
      output.ReferencePredictorSummary !== undefined && output.ReferencePredictorSummary !== null
        ? deserializeAws_json1_1ReferencePredictorSummary(output.ReferencePredictorSummary, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1ReferencePredictorSummary = (
  output: any,
  context: __SerdeContext
): ReferencePredictorSummary => {
  return {
    Arn: __expectString(output.Arn),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_json1_1ResourceAlreadyExistsException = (
  output: any,
  context: __SerdeContext
): ResourceAlreadyExistsException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceInUseException = (output: any, context: __SerdeContext): ResourceInUseException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1S3Config = (output: any, context: __SerdeContext): S3Config => {
  return {
    KMSKeyArn: __expectString(output.KMSKeyArn),
    Path: __expectString(output.Path),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_json1_1Schema = (output: any, context: __SerdeContext): Schema => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1SchemaAttributes(output.Attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SchemaAttribute = (output: any, context: __SerdeContext): SchemaAttribute => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

const deserializeAws_json1_1SchemaAttributes = (output: any, context: __SerdeContext): SchemaAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SchemaAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Statistics = (output: any, context: __SerdeContext): Statistics => {
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

const deserializeAws_json1_1SupplementaryFeature = (output: any, context: __SerdeContext): SupplementaryFeature => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1SupplementaryFeatures = (output: any, context: __SerdeContext): SupplementaryFeature[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1SupplementaryFeature(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestWindowDetails = (output: any, context: __SerdeContext): TestWindowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1TestWindowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestWindows = (output: any, context: __SerdeContext): WindowSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WindowSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TestWindowSummary = (output: any, context: __SerdeContext): TestWindowSummary => {
  return {
    Message: __expectString(output.Message),
    Status: __expectString(output.Status),
    TestWindowEnd:
      output.TestWindowEnd !== undefined && output.TestWindowEnd !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowEnd)))
        : undefined,
    TestWindowStart:
      output.TestWindowStart !== undefined && output.TestWindowStart !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowStart)))
        : undefined,
  } as any;
};

const deserializeAws_json1_1TimeAlignmentBoundary = (output: any, context: __SerdeContext): TimeAlignmentBoundary => {
  return {
    DayOfMonth: __expectInt32(output.DayOfMonth),
    DayOfWeek: __expectString(output.DayOfWeek),
    Hour: __expectInt32(output.Hour),
    Month: __expectString(output.Month),
  } as any;
};

const deserializeAws_json1_1TrainingParameters = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1Transformations = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDatasetGroupResponse = (
  output: any,
  context: __SerdeContext
): UpdateDatasetGroupResponse => {
  return {} as any;
};

const deserializeAws_json1_1Values = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1WeightedQuantileLoss = (output: any, context: __SerdeContext): WeightedQuantileLoss => {
  return {
    LossValue: __limitedParseDouble(output.LossValue),
    Quantile: __limitedParseDouble(output.Quantile),
  } as any;
};

const deserializeAws_json1_1WeightedQuantileLosses = (output: any, context: __SerdeContext): WeightedQuantileLoss[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1WeightedQuantileLoss(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WindowSummary = (output: any, context: __SerdeContext): WindowSummary => {
  return {
    EvaluationType: __expectString(output.EvaluationType),
    ItemCount: __expectInt32(output.ItemCount),
    Metrics:
      output.Metrics !== undefined && output.Metrics !== null
        ? deserializeAws_json1_1Metrics(output.Metrics, context)
        : undefined,
    TestWindowEnd:
      output.TestWindowEnd !== undefined && output.TestWindowEnd !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowEnd)))
        : undefined,
    TestWindowStart:
      output.TestWindowStart !== undefined && output.TestWindowStart !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TestWindowStart)))
        : undefined,
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
