// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  ActivateAnomalyDetectorCommandInput,
  ActivateAnomalyDetectorCommandOutput,
} from "../commands/ActivateAnomalyDetectorCommand";
import {
  BackTestAnomalyDetectorCommandInput,
  BackTestAnomalyDetectorCommandOutput,
} from "../commands/BackTestAnomalyDetectorCommand";
import { CreateAlertCommandInput, CreateAlertCommandOutput } from "../commands/CreateAlertCommand";
import {
  CreateAnomalyDetectorCommandInput,
  CreateAnomalyDetectorCommandOutput,
} from "../commands/CreateAnomalyDetectorCommand";
import { CreateMetricSetCommandInput, CreateMetricSetCommandOutput } from "../commands/CreateMetricSetCommand";
import {
  DeactivateAnomalyDetectorCommandInput,
  DeactivateAnomalyDetectorCommandOutput,
} from "../commands/DeactivateAnomalyDetectorCommand";
import { DeleteAlertCommandInput, DeleteAlertCommandOutput } from "../commands/DeleteAlertCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "../commands/DeleteAnomalyDetectorCommand";
import { DescribeAlertCommandInput, DescribeAlertCommandOutput } from "../commands/DescribeAlertCommand";
import {
  DescribeAnomalyDetectionExecutionsCommandInput,
  DescribeAnomalyDetectionExecutionsCommandOutput,
} from "../commands/DescribeAnomalyDetectionExecutionsCommand";
import {
  DescribeAnomalyDetectorCommandInput,
  DescribeAnomalyDetectorCommandOutput,
} from "../commands/DescribeAnomalyDetectorCommand";
import { DescribeMetricSetCommandInput, DescribeMetricSetCommandOutput } from "../commands/DescribeMetricSetCommand";
import {
  DetectMetricSetConfigCommandInput,
  DetectMetricSetConfigCommandOutput,
} from "../commands/DetectMetricSetConfigCommand";
import { GetAnomalyGroupCommandInput, GetAnomalyGroupCommandOutput } from "../commands/GetAnomalyGroupCommand";
import {
  GetDataQualityMetricsCommandInput,
  GetDataQualityMetricsCommandOutput,
} from "../commands/GetDataQualityMetricsCommand";
import { GetFeedbackCommandInput, GetFeedbackCommandOutput } from "../commands/GetFeedbackCommand";
import { GetSampleDataCommandInput, GetSampleDataCommandOutput } from "../commands/GetSampleDataCommand";
import { ListAlertsCommandInput, ListAlertsCommandOutput } from "../commands/ListAlertsCommand";
import {
  ListAnomalyDetectorsCommandInput,
  ListAnomalyDetectorsCommandOutput,
} from "../commands/ListAnomalyDetectorsCommand";
import {
  ListAnomalyGroupRelatedMetricsCommandInput,
  ListAnomalyGroupRelatedMetricsCommandOutput,
} from "../commands/ListAnomalyGroupRelatedMetricsCommand";
import {
  ListAnomalyGroupSummariesCommandInput,
  ListAnomalyGroupSummariesCommandOutput,
} from "../commands/ListAnomalyGroupSummariesCommand";
import {
  ListAnomalyGroupTimeSeriesCommandInput,
  ListAnomalyGroupTimeSeriesCommandOutput,
} from "../commands/ListAnomalyGroupTimeSeriesCommand";
import { ListMetricSetsCommandInput, ListMetricSetsCommandOutput } from "../commands/ListMetricSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "../commands/PutFeedbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAlertCommandInput, UpdateAlertCommandOutput } from "../commands/UpdateAlertCommand";
import {
  UpdateAnomalyDetectorCommandInput,
  UpdateAnomalyDetectorCommandOutput,
} from "../commands/UpdateAnomalyDetectorCommand";
import { UpdateMetricSetCommandInput, UpdateMetricSetCommandOutput } from "../commands/UpdateMetricSetCommand";
import { LookoutMetricsServiceException as __BaseException } from "../models/LookoutMetricsServiceException";
import {
  AccessDeniedException,
  Action,
  Alert,
  AlertFilters,
  AlertSummary,
  AnomalyDetectorConfig,
  AnomalyDetectorConfigSummary,
  AnomalyDetectorDataQualityMetric,
  AnomalyDetectorSummary,
  AnomalyGroup,
  AnomalyGroupStatistics,
  AnomalyGroupSummary,
  AnomalyGroupTimeSeries,
  AnomalyGroupTimeSeriesFeedback,
  AppFlowConfig,
  AthenaSourceConfig,
  AttributeValue,
  AutoDetectionMetricSource,
  AutoDetectionS3SourceConfig,
  BackTestConfiguration,
  CloudWatchConfig,
  ConflictException,
  ContributionMatrix,
  CsvFormatDescriptor,
  DataQualityMetric,
  DetectedCsvFormatDescriptor,
  DetectedField,
  DetectedFileFormatDescriptor,
  DetectedJsonFormatDescriptor,
  DetectedMetricSetConfig,
  DetectedMetricSource,
  DetectedS3SourceConfig,
  DimensionContribution,
  DimensionFilter,
  DimensionNameValue,
  DimensionValueContribution,
  ExecutionStatus,
  FileFormatDescriptor,
  Filter,
  InterMetricImpactDetails,
  InternalServerException,
  ItemizedMetricStats,
  JsonFormatDescriptor,
  LambdaConfiguration,
  Metric,
  MetricLevelImpact,
  MetricSetDataQualityMetric,
  MetricSetDimensionFilter,
  MetricSetSummary,
  MetricSource,
  RDSSourceConfig,
  RedshiftSourceConfig,
  ResourceNotFoundException,
  S3SourceConfig,
  SampleDataS3SourceConfig,
  ServiceQuotaExceededException,
  SNSConfiguration,
  TimeSeries,
  TimeSeriesFeedback,
  TimestampColumn,
  TooManyRequestsException,
  ValidationException,
  ValidationExceptionField,
  VpcConfiguration,
} from "../models/models_0";

/**
 * serializeAws_restJson1ActivateAnomalyDetectorCommand
 */
export const se_ActivateAnomalyDetectorCommand = async (
  input: ActivateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ActivateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BackTestAnomalyDetectorCommand
 */
export const se_BackTestAnomalyDetectorCommand = async (
  input: BackTestAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BackTestAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAlertCommand
 */
export const se_CreateAlertCommand = async (
  input: CreateAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: se_Action(input.Action, context) }),
    ...(input.AlertDescription != null && { AlertDescription: input.AlertDescription }),
    ...(input.AlertFilters != null && { AlertFilters: se_AlertFilters(input.AlertFilters, context) }),
    ...(input.AlertName != null && { AlertName: input.AlertName }),
    ...(input.AlertSensitivityThreshold != null && { AlertSensitivityThreshold: input.AlertSensitivityThreshold }),
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateAnomalyDetectorCommand
 */
export const se_CreateAnomalyDetectorCommand = async (
  input: CreateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorConfig != null && {
      AnomalyDetectorConfig: se_AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
    }),
    ...(input.AnomalyDetectorDescription != null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
    ...(input.AnomalyDetectorName != null && { AnomalyDetectorName: input.AnomalyDetectorName }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateMetricSetCommand
 */
export const se_CreateMetricSetCommand = async (
  input: CreateMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.DimensionFilterList != null && {
      DimensionFilterList: se_MetricSetDimensionFilterList(input.DimensionFilterList, context),
    }),
    ...(input.DimensionList != null && { DimensionList: se_DimensionList(input.DimensionList, context) }),
    ...(input.MetricList != null && { MetricList: se_MetricList(input.MetricList, context) }),
    ...(input.MetricSetDescription != null && { MetricSetDescription: input.MetricSetDescription }),
    ...(input.MetricSetFrequency != null && { MetricSetFrequency: input.MetricSetFrequency }),
    ...(input.MetricSetName != null && { MetricSetName: input.MetricSetName }),
    ...(input.MetricSource != null && { MetricSource: se_MetricSource(input.MetricSource, context) }),
    ...(input.Offset != null && { Offset: input.Offset }),
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
    ...(input.TimestampColumn != null && { TimestampColumn: se_TimestampColumn(input.TimestampColumn, context) }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeactivateAnomalyDetectorCommand
 */
export const se_DeactivateAnomalyDetectorCommand = async (
  input: DeactivateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeactivateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAlertCommand
 */
export const se_DeleteAlertCommand = async (
  input: DeleteAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.AlertArn != null && { AlertArn: input.AlertArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteAnomalyDetectorCommand
 */
export const se_DeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAlertCommand
 */
export const se_DescribeAlertCommand = async (
  input: DescribeAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.AlertArn != null && { AlertArn: input.AlertArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand
 */
export const se_DescribeAnomalyDetectionExecutionsCommand = async (
  input: DescribeAnomalyDetectionExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAnomalyDetectionExecutions";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Timestamp != null && { Timestamp: input.Timestamp }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAnomalyDetectorCommand
 */
export const se_DescribeAnomalyDetectorCommand = async (
  input: DescribeAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeMetricSetCommand
 */
export const se_DescribeMetricSetCommand = async (
  input: DescribeMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.MetricSetArn != null && { MetricSetArn: input.MetricSetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DetectMetricSetConfigCommand
 */
export const se_DetectMetricSetConfigCommand = async (
  input: DetectMetricSetConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DetectMetricSetConfig";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AutoDetectionMetricSource != null && {
      AutoDetectionMetricSource: se_AutoDetectionMetricSource(input.AutoDetectionMetricSource, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetAnomalyGroupCommand
 */
export const se_GetAnomalyGroupCommand = async (
  input: GetAnomalyGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetAnomalyGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId != null && { AnomalyGroupId: input.AnomalyGroupId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDataQualityMetricsCommand
 */
export const se_GetDataQualityMetricsCommand = async (
  input: GetDataQualityMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDataQualityMetrics";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MetricSetArn != null && { MetricSetArn: input.MetricSetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetFeedbackCommand
 */
export const se_GetFeedbackCommand = async (
  input: GetFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetFeedback";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupTimeSeriesFeedback != null && {
      AnomalyGroupTimeSeriesFeedback: se_AnomalyGroupTimeSeries(input.AnomalyGroupTimeSeriesFeedback, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetSampleDataCommand
 */
export const se_GetSampleDataCommand = async (
  input: GetSampleDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetSampleData";
  let body: any;
  body = JSON.stringify({
    ...(input.S3SourceConfig != null && { S3SourceConfig: se_SampleDataS3SourceConfig(input.S3SourceConfig, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAlertsCommand
 */
export const se_ListAlertsCommand = async (
  input: ListAlertsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAlerts";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomalyDetectorsCommand
 */
export const se_ListAnomalyDetectorsCommand = async (
  input: ListAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyDetectors";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand
 */
export const se_ListAnomalyGroupRelatedMetricsCommand = async (
  input: ListAnomalyGroupRelatedMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupRelatedMetrics";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId != null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.RelationshipTypeFilter != null && { RelationshipTypeFilter: input.RelationshipTypeFilter }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomalyGroupSummariesCommand
 */
export const se_ListAnomalyGroupSummariesCommand = async (
  input: ListAnomalyGroupSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SensitivityThreshold != null && { SensitivityThreshold: input.SensitivityThreshold }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand
 */
export const se_ListAnomalyGroupTimeSeriesCommand = async (
  input: ListAnomalyGroupTimeSeriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListAnomalyGroupTimeSeries";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupId != null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListMetricSetsCommand
 */
export const se_ListMetricSetsCommand = async (
  input: ListMetricSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListMetricSets";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutFeedbackCommand
 */
export const se_PutFeedbackCommand = async (
  input: PutFeedbackCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutFeedback";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyGroupTimeSeriesFeedback != null && {
      AnomalyGroupTimeSeriesFeedback: se_AnomalyGroupTimeSeriesFeedback(input.AnomalyGroupTimeSeriesFeedback, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { tags: se_TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAlertCommand
 */
export const se_UpdateAlertCommand = async (
  input: UpdateAlertCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateAlert";
  let body: any;
  body = JSON.stringify({
    ...(input.Action != null && { Action: se_Action(input.Action, context) }),
    ...(input.AlertArn != null && { AlertArn: input.AlertArn }),
    ...(input.AlertDescription != null && { AlertDescription: input.AlertDescription }),
    ...(input.AlertFilters != null && { AlertFilters: se_AlertFilters(input.AlertFilters, context) }),
    ...(input.AlertSensitivityThreshold != null && { AlertSensitivityThreshold: input.AlertSensitivityThreshold }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAnomalyDetectorCommand
 */
export const se_UpdateAnomalyDetectorCommand = async (
  input: UpdateAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateAnomalyDetector";
  let body: any;
  body = JSON.stringify({
    ...(input.AnomalyDetectorArn != null && { AnomalyDetectorArn: input.AnomalyDetectorArn }),
    ...(input.AnomalyDetectorConfig != null && {
      AnomalyDetectorConfig: se_AnomalyDetectorConfig(input.AnomalyDetectorConfig, context),
    }),
    ...(input.AnomalyDetectorDescription != null && { AnomalyDetectorDescription: input.AnomalyDetectorDescription }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateMetricSetCommand
 */
export const se_UpdateMetricSetCommand = async (
  input: UpdateMetricSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateMetricSet";
  let body: any;
  body = JSON.stringify({
    ...(input.DimensionFilterList != null && {
      DimensionFilterList: se_MetricSetDimensionFilterList(input.DimensionFilterList, context),
    }),
    ...(input.DimensionList != null && { DimensionList: se_DimensionList(input.DimensionList, context) }),
    ...(input.MetricList != null && { MetricList: se_MetricList(input.MetricList, context) }),
    ...(input.MetricSetArn != null && { MetricSetArn: input.MetricSetArn }),
    ...(input.MetricSetDescription != null && { MetricSetDescription: input.MetricSetDescription }),
    ...(input.MetricSetFrequency != null && { MetricSetFrequency: input.MetricSetFrequency }),
    ...(input.MetricSource != null && { MetricSource: se_MetricSource(input.MetricSource, context) }),
    ...(input.Offset != null && { Offset: input.Offset }),
    ...(input.TimestampColumn != null && { TimestampColumn: se_TimestampColumn(input.TimestampColumn, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1ActivateAnomalyDetectorCommand
 */
export const de_ActivateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ActivateAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ActivateAnomalyDetectorCommandError
 */
const de_ActivateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BackTestAnomalyDetectorCommand
 */
export const de_BackTestAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BackTestAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BackTestAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1BackTestAnomalyDetectorCommandError
 */
const de_BackTestAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BackTestAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAlertCommand
 */
export const de_CreateAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAlertCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertArn != null) {
    contents.AlertArn = __expectString(data.AlertArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAlertCommandError
 */
const de_CreateAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateAnomalyDetectorCommand
 */
export const de_CreateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn != null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAnomalyDetectorCommandError
 */
const de_CreateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateMetricSetCommand
 */
export const de_CreateMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateMetricSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetArn != null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateMetricSetCommandError
 */
const de_CreateMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeactivateAnomalyDetectorCommand
 */
export const de_DeactivateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeactivateAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeactivateAnomalyDetectorCommandError
 */
const de_DeactivateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAlertCommand
 */
export const de_DeleteAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAlertCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAlertCommandError
 */
const de_DeleteAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteAnomalyDetectorCommand
 */
export const de_DeleteAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAnomalyDetectorCommandError
 */
const de_DeleteAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutmetrics#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAlertCommand
 */
export const de_DescribeAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAlertCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Alert != null) {
    contents.Alert = de_Alert(data.Alert, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAlertCommandError
 */
const de_DescribeAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommand
 */
export const de_DescribeAnomalyDetectionExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAnomalyDetectionExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExecutionList != null) {
    contents.ExecutionList = de_ExecutionList(data.ExecutionList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnomalyDetectionExecutionsCommandError
 */
const de_DescribeAnomalyDetectionExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectionExecutionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAnomalyDetectorCommand
 */
export const de_DescribeAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn != null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  if (data.AnomalyDetectorConfig != null) {
    contents.AnomalyDetectorConfig = de_AnomalyDetectorConfigSummary(data.AnomalyDetectorConfig, context);
  }
  if (data.AnomalyDetectorDescription != null) {
    contents.AnomalyDetectorDescription = __expectString(data.AnomalyDetectorDescription);
  }
  if (data.AnomalyDetectorName != null) {
    contents.AnomalyDetectorName = __expectString(data.AnomalyDetectorName);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FailureReason != null) {
    contents.FailureReason = __expectString(data.FailureReason);
  }
  if (data.FailureType != null) {
    contents.FailureType = __expectString(data.FailureType);
  }
  if (data.KmsKeyArn != null) {
    contents.KmsKeyArn = __expectString(data.KmsKeyArn);
  }
  if (data.LastModificationTime != null) {
    contents.LastModificationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationTime)));
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAnomalyDetectorCommandError
 */
const de_DescribeAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeMetricSetCommand
 */
export const de_DescribeMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeMetricSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn != null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DimensionFilterList != null) {
    contents.DimensionFilterList = de_MetricSetDimensionFilterList(data.DimensionFilterList, context);
  }
  if (data.DimensionList != null) {
    contents.DimensionList = de_DimensionList(data.DimensionList, context);
  }
  if (data.LastModificationTime != null) {
    contents.LastModificationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastModificationTime)));
  }
  if (data.MetricList != null) {
    contents.MetricList = de_MetricList(data.MetricList, context);
  }
  if (data.MetricSetArn != null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  if (data.MetricSetDescription != null) {
    contents.MetricSetDescription = __expectString(data.MetricSetDescription);
  }
  if (data.MetricSetFrequency != null) {
    contents.MetricSetFrequency = __expectString(data.MetricSetFrequency);
  }
  if (data.MetricSetName != null) {
    contents.MetricSetName = __expectString(data.MetricSetName);
  }
  if (data.MetricSource != null) {
    contents.MetricSource = de_MetricSource(data.MetricSource, context);
  }
  if (data.Offset != null) {
    contents.Offset = __expectInt32(data.Offset);
  }
  if (data.TimestampColumn != null) {
    contents.TimestampColumn = de_TimestampColumn(data.TimestampColumn, context);
  }
  if (data.Timezone != null) {
    contents.Timezone = __expectString(data.Timezone);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeMetricSetCommandError
 */
const de_DescribeMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DetectMetricSetConfigCommand
 */
export const de_DetectMetricSetConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectMetricSetConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetectMetricSetConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DetectedMetricSetConfig != null) {
    contents.DetectedMetricSetConfig = de_DetectedMetricSetConfig(data.DetectedMetricSetConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DetectMetricSetConfigCommandError
 */
const de_DetectMetricSetConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectMetricSetConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetAnomalyGroupCommand
 */
export const de_GetAnomalyGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAnomalyGroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroup != null) {
    contents.AnomalyGroup = de_AnomalyGroup(data.AnomalyGroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetAnomalyGroupCommandError
 */
const de_GetAnomalyGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAnomalyGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDataQualityMetricsCommand
 */
export const de_GetDataQualityMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataQualityMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorDataQualityMetricList != null) {
    contents.AnomalyDetectorDataQualityMetricList = de_AnomalyDetectorDataQualityMetricList(
      data.AnomalyDetectorDataQualityMetricList,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataQualityMetricsCommandError
 */
const de_GetDataQualityMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataQualityMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetFeedbackCommand
 */
export const de_GetFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupTimeSeriesFeedback != null) {
    contents.AnomalyGroupTimeSeriesFeedback = de_TimeSeriesFeedbackList(data.AnomalyGroupTimeSeriesFeedback, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetFeedbackCommandError
 */
const de_GetFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetSampleDataCommand
 */
export const de_GetSampleDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampleDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSampleDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.HeaderValues != null) {
    contents.HeaderValues = de_HeaderValueList(data.HeaderValues, context);
  }
  if (data.SampleRows != null) {
    contents.SampleRows = de_SampleRows(data.SampleRows, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetSampleDataCommandError
 */
const de_GetSampleDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSampleDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAlertsCommand
 */
export const de_ListAlertsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlertsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertSummaryList != null) {
    contents.AlertSummaryList = de_AlertSummaryList(data.AlertSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlertsCommandError
 */
const de_ListAlertsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlertsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnomalyDetectorsCommand
 */
export const de_ListAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomalyDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorSummaryList != null) {
    contents.AnomalyDetectorSummaryList = de_AnomalyDetectorSummaryList(data.AnomalyDetectorSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomalyDetectorsCommandError
 */
const de_ListAnomalyDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommand
 */
export const de_ListAnomalyGroupRelatedMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomalyGroupRelatedMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InterMetricImpactList != null) {
    contents.InterMetricImpactList = de_InterMetricImpactList(data.InterMetricImpactList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomalyGroupRelatedMetricsCommandError
 */
const de_ListAnomalyGroupRelatedMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupRelatedMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnomalyGroupSummariesCommand
 */
export const de_ListAnomalyGroupSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomalyGroupSummariesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupStatistics != null) {
    contents.AnomalyGroupStatistics = de_AnomalyGroupStatistics(data.AnomalyGroupStatistics, context);
  }
  if (data.AnomalyGroupSummaryList != null) {
    contents.AnomalyGroupSummaryList = de_AnomalyGroupSummaryList(data.AnomalyGroupSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomalyGroupSummariesCommandError
 */
const de_ListAnomalyGroupSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand
 */
export const de_ListAnomalyGroupTimeSeriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAnomalyGroupTimeSeriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyGroupId != null) {
    contents.AnomalyGroupId = __expectString(data.AnomalyGroupId);
  }
  if (data.MetricName != null) {
    contents.MetricName = __expectString(data.MetricName);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TimeSeriesList != null) {
    contents.TimeSeriesList = de_TimeSeriesList(data.TimeSeriesList, context);
  }
  if (data.TimestampList != null) {
    contents.TimestampList = de_TimestampList(data.TimestampList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommandError
 */
const de_ListAnomalyGroupTimeSeriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAnomalyGroupTimeSeriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMetricSetsCommand
 */
export const de_ListMetricSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMetricSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetSummaryList != null) {
    contents.MetricSetSummaryList = de_MetricSetSummaryList(data.MetricSetSummaryList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListMetricSetsCommandError
 */
const de_ListMetricSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PutFeedbackCommand
 */
export const de_PutFeedbackCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutFeedbackCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutFeedbackCommandError
 */
const de_PutFeedbackCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFeedbackCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAlertCommand
 */
export const de_UpdateAlertCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlertCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAlertCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AlertArn != null) {
    contents.AlertArn = __expectString(data.AlertArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAlertCommandError
 */
const de_UpdateAlertCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlertCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateAnomalyDetectorCommand
 */
export const de_UpdateAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAnomalyDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AnomalyDetectorArn != null) {
    contents.AnomalyDetectorArn = __expectString(data.AnomalyDetectorArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAnomalyDetectorCommandError
 */
const de_UpdateAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UpdateMetricSetCommand
 */
export const de_UpdateMetricSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateMetricSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.MetricSetArn != null) {
    contents.MetricSetArn = __expectString(data.MetricSetArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateMetricSetCommandError
 */
const de_UpdateMetricSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMetricSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutmetrics#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutmetrics#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutmetrics#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutmetrics#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "TooManyRequestsException":
    case "com.amazonaws.lookoutmetrics#TooManyRequestsException":
      throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutmetrics#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TooManyRequestsExceptionRes
 */
const de_TooManyRequestsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TooManyRequestsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Fields != null) {
    contents.Fields = de_ValidationExceptionFieldList(data.Fields, context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Reason != null) {
    contents.Reason = __expectString(data.Reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.LambdaConfiguration != null && {
      LambdaConfiguration: se_LambdaConfiguration(input.LambdaConfiguration, context),
    }),
    ...(input.SNSConfiguration != null && { SNSConfiguration: se_SNSConfiguration(input.SNSConfiguration, context) }),
  };
};

/**
 * serializeAws_restJson1AlertFilters
 */
const se_AlertFilters = (input: AlertFilters, context: __SerdeContext): any => {
  return {
    ...(input.DimensionFilterList != null && {
      DimensionFilterList: se_DimensionFilterList(input.DimensionFilterList, context),
    }),
    ...(input.MetricList != null && { MetricList: se_MetricNameList(input.MetricList, context) }),
  };
};

/**
 * serializeAws_restJson1AnomalyDetectorConfig
 */
const se_AnomalyDetectorConfig = (input: AnomalyDetectorConfig, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyDetectorFrequency != null && { AnomalyDetectorFrequency: input.AnomalyDetectorFrequency }),
  };
};

/**
 * serializeAws_restJson1AnomalyGroupTimeSeries
 */
const se_AnomalyGroupTimeSeries = (input: AnomalyGroupTimeSeries, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyGroupId != null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.TimeSeriesId != null && { TimeSeriesId: input.TimeSeriesId }),
  };
};

/**
 * serializeAws_restJson1AnomalyGroupTimeSeriesFeedback
 */
const se_AnomalyGroupTimeSeriesFeedback = (input: AnomalyGroupTimeSeriesFeedback, context: __SerdeContext): any => {
  return {
    ...(input.AnomalyGroupId != null && { AnomalyGroupId: input.AnomalyGroupId }),
    ...(input.IsAnomaly != null && { IsAnomaly: input.IsAnomaly }),
    ...(input.TimeSeriesId != null && { TimeSeriesId: input.TimeSeriesId }),
  };
};

/**
 * serializeAws_restJson1AppFlowConfig
 */
const se_AppFlowConfig = (input: AppFlowConfig, context: __SerdeContext): any => {
  return {
    ...(input.FlowName != null && { FlowName: input.FlowName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1AthenaSourceConfig
 */
const se_AthenaSourceConfig = (input: AthenaSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.BackTestConfiguration != null && {
      BackTestConfiguration: se_BackTestConfiguration(input.BackTestConfiguration, context),
    }),
    ...(input.DataCatalog != null && { DataCatalog: input.DataCatalog }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.S3ResultsPath != null && { S3ResultsPath: input.S3ResultsPath }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.WorkGroupName != null && { WorkGroupName: input.WorkGroupName }),
  };
};

/**
 * serializeAws_restJson1AutoDetectionMetricSource
 */
const se_AutoDetectionMetricSource = (input: AutoDetectionMetricSource, context: __SerdeContext): any => {
  return {
    ...(input.S3SourceConfig != null && {
      S3SourceConfig: se_AutoDetectionS3SourceConfig(input.S3SourceConfig, context),
    }),
  };
};

/**
 * serializeAws_restJson1AutoDetectionS3SourceConfig
 */
const se_AutoDetectionS3SourceConfig = (input: AutoDetectionS3SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.HistoricalDataPathList != null && {
      HistoricalDataPathList: se_HistoricalDataPathList(input.HistoricalDataPathList, context),
    }),
    ...(input.TemplatedPathList != null && {
      TemplatedPathList: se_TemplatedPathList(input.TemplatedPathList, context),
    }),
  };
};

/**
 * serializeAws_restJson1BackTestConfiguration
 */
const se_BackTestConfiguration = (input: BackTestConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RunBackTestMode != null && { RunBackTestMode: input.RunBackTestMode }),
  };
};

/**
 * serializeAws_restJson1CloudWatchConfig
 */
const se_CloudWatchConfig = (input: CloudWatchConfig, context: __SerdeContext): any => {
  return {
    ...(input.BackTestConfiguration != null && {
      BackTestConfiguration: se_BackTestConfiguration(input.BackTestConfiguration, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1CsvFormatDescriptor
 */
const se_CsvFormatDescriptor = (input: CsvFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.ContainsHeader != null && { ContainsHeader: input.ContainsHeader }),
    ...(input.Delimiter != null && { Delimiter: input.Delimiter }),
    ...(input.FileCompression != null && { FileCompression: input.FileCompression }),
    ...(input.HeaderList != null && { HeaderList: se_HeaderList(input.HeaderList, context) }),
    ...(input.QuoteSymbol != null && { QuoteSymbol: input.QuoteSymbol }),
  };
};

/**
 * serializeAws_restJson1DimensionFilter
 */
const se_DimensionFilter = (input: DimensionFilter, context: __SerdeContext): any => {
  return {
    ...(input.DimensionName != null && { DimensionName: input.DimensionName }),
    ...(input.DimensionValueList != null && {
      DimensionValueList: se_DimensionValueList(input.DimensionValueList, context),
    }),
  };
};

/**
 * serializeAws_restJson1DimensionFilterList
 */
const se_DimensionFilterList = (input: DimensionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DimensionFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1DimensionList
 */
const se_DimensionList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1DimensionValueList
 */
const se_DimensionValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FileFormatDescriptor
 */
const se_FileFormatDescriptor = (input: FileFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.CsvFormatDescriptor != null && {
      CsvFormatDescriptor: se_CsvFormatDescriptor(input.CsvFormatDescriptor, context),
    }),
    ...(input.JsonFormatDescriptor != null && {
      JsonFormatDescriptor: se_JsonFormatDescriptor(input.JsonFormatDescriptor, context),
    }),
  };
};

/**
 * serializeAws_restJson1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.DimensionValue != null && { DimensionValue: input.DimensionValue }),
    ...(input.FilterOperation != null && { FilterOperation: input.FilterOperation }),
  };
};

/**
 * serializeAws_restJson1FilterList
 */
const se_FilterList = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_restJson1HeaderList
 */
const se_HeaderList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1HistoricalDataPathList
 */
const se_HistoricalDataPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1JsonFormatDescriptor
 */
const se_JsonFormatDescriptor = (input: JsonFormatDescriptor, context: __SerdeContext): any => {
  return {
    ...(input.Charset != null && { Charset: input.Charset }),
    ...(input.FileCompression != null && { FileCompression: input.FileCompression }),
  };
};

/**
 * serializeAws_restJson1LambdaConfiguration
 */
const se_LambdaConfiguration = (input: LambdaConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.LambdaArn != null && { LambdaArn: input.LambdaArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
  };
};

/**
 * serializeAws_restJson1Metric
 */
const se_Metric = (input: Metric, context: __SerdeContext): any => {
  return {
    ...(input.AggregationFunction != null && { AggregationFunction: input.AggregationFunction }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
  };
};

/**
 * serializeAws_restJson1MetricList
 */
const se_MetricList = (input: Metric[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Metric(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricNameList
 */
const se_MetricNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1MetricSetDimensionFilter
 */
const se_MetricSetDimensionFilter = (input: MetricSetDimensionFilter, context: __SerdeContext): any => {
  return {
    ...(input.FilterList != null && { FilterList: se_FilterList(input.FilterList, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1MetricSetDimensionFilterList
 */
const se_MetricSetDimensionFilterList = (input: MetricSetDimensionFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricSetDimensionFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricSource
 */
const se_MetricSource = (input: MetricSource, context: __SerdeContext): any => {
  return {
    ...(input.AppFlowConfig != null && { AppFlowConfig: se_AppFlowConfig(input.AppFlowConfig, context) }),
    ...(input.AthenaSourceConfig != null && {
      AthenaSourceConfig: se_AthenaSourceConfig(input.AthenaSourceConfig, context),
    }),
    ...(input.CloudWatchConfig != null && { CloudWatchConfig: se_CloudWatchConfig(input.CloudWatchConfig, context) }),
    ...(input.RDSSourceConfig != null && { RDSSourceConfig: se_RDSSourceConfig(input.RDSSourceConfig, context) }),
    ...(input.RedshiftSourceConfig != null && {
      RedshiftSourceConfig: se_RedshiftSourceConfig(input.RedshiftSourceConfig, context),
    }),
    ...(input.S3SourceConfig != null && { S3SourceConfig: se_S3SourceConfig(input.S3SourceConfig, context) }),
  };
};

/**
 * serializeAws_restJson1RDSSourceConfig
 */
const se_RDSSourceConfig = (input: RDSSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.DBInstanceIdentifier != null && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
    ...(input.DatabaseHost != null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort != null && { DatabasePort: input.DatabasePort }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_restJson1RedshiftSourceConfig
 */
const se_RedshiftSourceConfig = (input: RedshiftSourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.DatabaseHost != null && { DatabaseHost: input.DatabaseHost }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DatabasePort != null && { DatabasePort: input.DatabasePort }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SecretManagerArn != null && { SecretManagerArn: input.SecretManagerArn }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VpcConfiguration != null && { VpcConfiguration: se_VpcConfiguration(input.VpcConfiguration, context) }),
  };
};

/**
 * serializeAws_restJson1S3SourceConfig
 */
const se_S3SourceConfig = (input: S3SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.FileFormatDescriptor != null && {
      FileFormatDescriptor: se_FileFormatDescriptor(input.FileFormatDescriptor, context),
    }),
    ...(input.HistoricalDataPathList != null && {
      HistoricalDataPathList: se_HistoricalDataPathList(input.HistoricalDataPathList, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TemplatedPathList != null && {
      TemplatedPathList: se_TemplatedPathList(input.TemplatedPathList, context),
    }),
  };
};

/**
 * serializeAws_restJson1SampleDataS3SourceConfig
 */
const se_SampleDataS3SourceConfig = (input: SampleDataS3SourceConfig, context: __SerdeContext): any => {
  return {
    ...(input.FileFormatDescriptor != null && {
      FileFormatDescriptor: se_FileFormatDescriptor(input.FileFormatDescriptor, context),
    }),
    ...(input.HistoricalDataPathList != null && {
      HistoricalDataPathList: se_HistoricalDataPathList(input.HistoricalDataPathList, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.TemplatedPathList != null && {
      TemplatedPathList: se_TemplatedPathList(input.TemplatedPathList, context),
    }),
  };
};

/**
 * serializeAws_restJson1SecurityGroupIdList
 */
const se_SecurityGroupIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1SNSConfiguration
 */
const se_SNSConfiguration = (input: SNSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SnsFormat != null && { SnsFormat: input.SnsFormat }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

/**
 * serializeAws_restJson1SubnetIdList
 */
const se_SubnetIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TemplatedPathList
 */
const se_TemplatedPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TimestampColumn
 */
const se_TimestampColumn = (input: TimestampColumn, context: __SerdeContext): any => {
  return {
    ...(input.ColumnFormat != null && { ColumnFormat: input.ColumnFormat }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
  };
};

/**
 * serializeAws_restJson1VpcConfiguration
 */
const se_VpcConfiguration = (input: VpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroupIdList != null && {
      SecurityGroupIdList: se_SecurityGroupIdList(input.SecurityGroupIdList, context),
    }),
    ...(input.SubnetIdList != null && { SubnetIdList: se_SubnetIdList(input.SubnetIdList, context) }),
  };
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    LambdaConfiguration:
      output.LambdaConfiguration != null ? de_LambdaConfiguration(output.LambdaConfiguration, context) : undefined,
    SNSConfiguration:
      output.SNSConfiguration != null ? de_SNSConfiguration(output.SNSConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Alert
 */
const de_Alert = (output: any, context: __SerdeContext): Alert => {
  return {
    Action: output.Action != null ? de_Action(output.Action, context) : undefined,
    AlertArn: __expectString(output.AlertArn),
    AlertDescription: __expectString(output.AlertDescription),
    AlertFilters: output.AlertFilters != null ? de_AlertFilters(output.AlertFilters, context) : undefined,
    AlertName: __expectString(output.AlertName),
    AlertSensitivityThreshold: __expectInt32(output.AlertSensitivityThreshold),
    AlertStatus: __expectString(output.AlertStatus),
    AlertType: __expectString(output.AlertType),
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlertFilters
 */
const de_AlertFilters = (output: any, context: __SerdeContext): AlertFilters => {
  return {
    DimensionFilterList:
      output.DimensionFilterList != null ? de_DimensionFilterList(output.DimensionFilterList, context) : undefined,
    MetricList: output.MetricList != null ? de_MetricNameList(output.MetricList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlertSummary
 */
const de_AlertSummary = (output: any, context: __SerdeContext): AlertSummary => {
  return {
    AlertArn: __expectString(output.AlertArn),
    AlertName: __expectString(output.AlertName),
    AlertSensitivityThreshold: __expectInt32(output.AlertSensitivityThreshold),
    AlertStatus: __expectString(output.AlertStatus),
    AlertType: __expectString(output.AlertType),
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlertSummaryList
 */
const de_AlertSummaryList = (output: any, context: __SerdeContext): AlertSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlertSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalyDetectorConfigSummary
 */
const de_AnomalyDetectorConfigSummary = (output: any, context: __SerdeContext): AnomalyDetectorConfigSummary => {
  return {
    AnomalyDetectorFrequency: __expectString(output.AnomalyDetectorFrequency),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyDetectorDataQualityMetric
 */
const de_AnomalyDetectorDataQualityMetric = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorDataQualityMetric => {
  return {
    MetricSetDataQualityMetricList:
      output.MetricSetDataQualityMetricList != null
        ? de_MetricSetDataQualityMetricList(output.MetricSetDataQualityMetricList, context)
        : undefined,
    StartTimestamp:
      output.StartTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTimestamp)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyDetectorDataQualityMetricList
 */
const de_AnomalyDetectorDataQualityMetricList = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorDataQualityMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyDetectorDataQualityMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalyDetectorSummary
 */
const de_AnomalyDetectorSummary = (output: any, context: __SerdeContext): AnomalyDetectorSummary => {
  return {
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    AnomalyDetectorDescription: __expectString(output.AnomalyDetectorDescription),
    AnomalyDetectorName: __expectString(output.AnomalyDetectorName),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    Status: __expectString(output.Status),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyDetectorSummaryList
 */
const de_AnomalyDetectorSummaryList = (output: any, context: __SerdeContext): AnomalyDetectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyDetectorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnomalyGroup
 */
const de_AnomalyGroup = (output: any, context: __SerdeContext): AnomalyGroup => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    AnomalyGroupScore: __limitedParseDouble(output.AnomalyGroupScore),
    EndTime: __expectString(output.EndTime),
    MetricLevelImpactList:
      output.MetricLevelImpactList != null
        ? de_MetricLevelImpactList(output.MetricLevelImpactList, context)
        : undefined,
    PrimaryMetricName: __expectString(output.PrimaryMetricName),
    StartTime: __expectString(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyGroupStatistics
 */
const de_AnomalyGroupStatistics = (output: any, context: __SerdeContext): AnomalyGroupStatistics => {
  return {
    EvaluationStartDate: __expectString(output.EvaluationStartDate),
    ItemizedMetricStatsList:
      output.ItemizedMetricStatsList != null
        ? de_ItemizedMetricStatsList(output.ItemizedMetricStatsList, context)
        : undefined,
    TotalCount: __expectInt32(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyGroupSummary
 */
const de_AnomalyGroupSummary = (output: any, context: __SerdeContext): AnomalyGroupSummary => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    AnomalyGroupScore: __limitedParseDouble(output.AnomalyGroupScore),
    EndTime: __expectString(output.EndTime),
    PrimaryMetricName: __expectString(output.PrimaryMetricName),
    StartTime: __expectString(output.StartTime),
  } as any;
};

/**
 * deserializeAws_restJson1AnomalyGroupSummaryList
 */
const de_AnomalyGroupSummaryList = (output: any, context: __SerdeContext): AnomalyGroupSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnomalyGroupSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AppFlowConfig
 */
const de_AppFlowConfig = (output: any, context: __SerdeContext): AppFlowConfig => {
  return {
    FlowName: __expectString(output.FlowName),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1AthenaSourceConfig
 */
const de_AthenaSourceConfig = (output: any, context: __SerdeContext): AthenaSourceConfig => {
  return {
    BackTestConfiguration:
      output.BackTestConfiguration != null
        ? de_BackTestConfiguration(output.BackTestConfiguration, context)
        : undefined,
    DataCatalog: __expectString(output.DataCatalog),
    DatabaseName: __expectString(output.DatabaseName),
    RoleArn: __expectString(output.RoleArn),
    S3ResultsPath: __expectString(output.S3ResultsPath),
    TableName: __expectString(output.TableName),
    WorkGroupName: __expectString(output.WorkGroupName),
  } as any;
};

/**
 * deserializeAws_restJson1AttributeValue
 */
const de_AttributeValue = (output: any, context: __SerdeContext): AttributeValue => {
  return {
    B: __expectString(output.B),
    BS: output.BS != null ? de_BinaryListAttributeValue(output.BS, context) : undefined,
    N: __expectString(output.N),
    NS: output.NS != null ? de_NumberListAttributeValue(output.NS, context) : undefined,
    S: __expectString(output.S),
    SS: output.SS != null ? de_StringListAttributeValue(output.SS, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BackTestConfiguration
 */
const de_BackTestConfiguration = (output: any, context: __SerdeContext): BackTestConfiguration => {
  return {
    RunBackTestMode: __expectBoolean(output.RunBackTestMode),
  } as any;
};

/**
 * deserializeAws_restJson1BinaryListAttributeValue
 */
const de_BinaryListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1CloudWatchConfig
 */
const de_CloudWatchConfig = (output: any, context: __SerdeContext): CloudWatchConfig => {
  return {
    BackTestConfiguration:
      output.BackTestConfiguration != null
        ? de_BackTestConfiguration(output.BackTestConfiguration, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1ContributionMatrix
 */
const de_ContributionMatrix = (output: any, context: __SerdeContext): ContributionMatrix => {
  return {
    DimensionContributionList:
      output.DimensionContributionList != null
        ? de_DimensionContributionList(output.DimensionContributionList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CsvFormatDescriptor
 */
const de_CsvFormatDescriptor = (output: any, context: __SerdeContext): CsvFormatDescriptor => {
  return {
    Charset: __expectString(output.Charset),
    ContainsHeader: __expectBoolean(output.ContainsHeader),
    Delimiter: __expectString(output.Delimiter),
    FileCompression: __expectString(output.FileCompression),
    HeaderList: output.HeaderList != null ? de_HeaderList(output.HeaderList, context) : undefined,
    QuoteSymbol: __expectString(output.QuoteSymbol),
  } as any;
};

/**
 * deserializeAws_restJson1DataQualityMetric
 */
const de_DataQualityMetric = (output: any, context: __SerdeContext): DataQualityMetric => {
  return {
    MetricDescription: __expectString(output.MetricDescription),
    MetricType: __expectString(output.MetricType),
    MetricValue: __limitedParseDouble(output.MetricValue),
    RelatedColumnName: __expectString(output.RelatedColumnName),
  } as any;
};

/**
 * deserializeAws_restJson1DataQualityMetricList
 */
const de_DataQualityMetricList = (output: any, context: __SerdeContext): DataQualityMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataQualityMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectedCsvFormatDescriptor
 */
const de_DetectedCsvFormatDescriptor = (output: any, context: __SerdeContext): DetectedCsvFormatDescriptor => {
  return {
    Charset: output.Charset != null ? de_DetectedField(output.Charset, context) : undefined,
    ContainsHeader: output.ContainsHeader != null ? de_DetectedField(output.ContainsHeader, context) : undefined,
    Delimiter: output.Delimiter != null ? de_DetectedField(output.Delimiter, context) : undefined,
    FileCompression: output.FileCompression != null ? de_DetectedField(output.FileCompression, context) : undefined,
    HeaderList: output.HeaderList != null ? de_DetectedField(output.HeaderList, context) : undefined,
    QuoteSymbol: output.QuoteSymbol != null ? de_DetectedField(output.QuoteSymbol, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedField
 */
const de_DetectedField = (output: any, context: __SerdeContext): DetectedField => {
  return {
    Confidence: __expectString(output.Confidence),
    Message: __expectString(output.Message),
    Value: output.Value != null ? de_AttributeValue(output.Value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedFileFormatDescriptor
 */
const de_DetectedFileFormatDescriptor = (output: any, context: __SerdeContext): DetectedFileFormatDescriptor => {
  return {
    CsvFormatDescriptor:
      output.CsvFormatDescriptor != null
        ? de_DetectedCsvFormatDescriptor(output.CsvFormatDescriptor, context)
        : undefined,
    JsonFormatDescriptor:
      output.JsonFormatDescriptor != null
        ? de_DetectedJsonFormatDescriptor(output.JsonFormatDescriptor, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedJsonFormatDescriptor
 */
const de_DetectedJsonFormatDescriptor = (output: any, context: __SerdeContext): DetectedJsonFormatDescriptor => {
  return {
    Charset: output.Charset != null ? de_DetectedField(output.Charset, context) : undefined,
    FileCompression: output.FileCompression != null ? de_DetectedField(output.FileCompression, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedMetricSetConfig
 */
const de_DetectedMetricSetConfig = (output: any, context: __SerdeContext): DetectedMetricSetConfig => {
  return {
    MetricSetFrequency:
      output.MetricSetFrequency != null ? de_DetectedField(output.MetricSetFrequency, context) : undefined,
    MetricSource: output.MetricSource != null ? de_DetectedMetricSource(output.MetricSource, context) : undefined,
    Offset: output.Offset != null ? de_DetectedField(output.Offset, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedMetricSource
 */
const de_DetectedMetricSource = (output: any, context: __SerdeContext): DetectedMetricSource => {
  return {
    S3SourceConfig:
      output.S3SourceConfig != null ? de_DetectedS3SourceConfig(output.S3SourceConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectedS3SourceConfig
 */
const de_DetectedS3SourceConfig = (output: any, context: __SerdeContext): DetectedS3SourceConfig => {
  return {
    FileFormatDescriptor:
      output.FileFormatDescriptor != null
        ? de_DetectedFileFormatDescriptor(output.FileFormatDescriptor, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DimensionContribution
 */
const de_DimensionContribution = (output: any, context: __SerdeContext): DimensionContribution => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValueContributionList:
      output.DimensionValueContributionList != null
        ? de_DimensionValueContributionList(output.DimensionValueContributionList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DimensionContributionList
 */
const de_DimensionContributionList = (output: any, context: __SerdeContext): DimensionContribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionContribution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DimensionFilter
 */
const de_DimensionFilter = (output: any, context: __SerdeContext): DimensionFilter => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValueList:
      output.DimensionValueList != null ? de_DimensionValueList(output.DimensionValueList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DimensionFilterList
 */
const de_DimensionFilterList = (output: any, context: __SerdeContext): DimensionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DimensionList
 */
const de_DimensionList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1DimensionNameValue
 */
const de_DimensionNameValue = (output: any, context: __SerdeContext): DimensionNameValue => {
  return {
    DimensionName: __expectString(output.DimensionName),
    DimensionValue: __expectString(output.DimensionValue),
  } as any;
};

/**
 * deserializeAws_restJson1DimensionNameValueList
 */
const de_DimensionNameValueList = (output: any, context: __SerdeContext): DimensionNameValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionNameValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DimensionValueContribution
 */
const de_DimensionValueContribution = (output: any, context: __SerdeContext): DimensionValueContribution => {
  return {
    ContributionScore: __limitedParseDouble(output.ContributionScore),
    DimensionValue: __expectString(output.DimensionValue),
  } as any;
};

/**
 * deserializeAws_restJson1DimensionValueContributionList
 */
const de_DimensionValueContributionList = (output: any, context: __SerdeContext): DimensionValueContribution[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DimensionValueContribution(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DimensionValueList
 */
const de_DimensionValueList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ExecutionList
 */
const de_ExecutionList = (output: any, context: __SerdeContext): ExecutionStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExecutionStatus(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExecutionStatus
 */
const de_ExecutionStatus = (output: any, context: __SerdeContext): ExecutionStatus => {
  return {
    FailureReason: __expectString(output.FailureReason),
    Status: __expectString(output.Status),
    Timestamp: __expectString(output.Timestamp),
  } as any;
};

/**
 * deserializeAws_restJson1FileFormatDescriptor
 */
const de_FileFormatDescriptor = (output: any, context: __SerdeContext): FileFormatDescriptor => {
  return {
    CsvFormatDescriptor:
      output.CsvFormatDescriptor != null ? de_CsvFormatDescriptor(output.CsvFormatDescriptor, context) : undefined,
    JsonFormatDescriptor:
      output.JsonFormatDescriptor != null ? de_JsonFormatDescriptor(output.JsonFormatDescriptor, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Filter
 */
const de_Filter = (output: any, context: __SerdeContext): Filter => {
  return {
    DimensionValue: __expectString(output.DimensionValue),
    FilterOperation: __expectString(output.FilterOperation),
  } as any;
};

/**
 * deserializeAws_restJson1FilterList
 */
const de_FilterList = (output: any, context: __SerdeContext): Filter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Filter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1HeaderList
 */
const de_HeaderList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1HeaderValueList
 */
const de_HeaderValueList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1HistoricalDataPathList
 */
const de_HistoricalDataPathList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1InterMetricImpactDetails
 */
const de_InterMetricImpactDetails = (output: any, context: __SerdeContext): InterMetricImpactDetails => {
  return {
    AnomalyGroupId: __expectString(output.AnomalyGroupId),
    ContributionPercentage: __limitedParseDouble(output.ContributionPercentage),
    MetricName: __expectString(output.MetricName),
    RelationshipType: __expectString(output.RelationshipType),
  } as any;
};

/**
 * deserializeAws_restJson1InterMetricImpactList
 */
const de_InterMetricImpactList = (output: any, context: __SerdeContext): InterMetricImpactDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InterMetricImpactDetails(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ItemizedMetricStats
 */
const de_ItemizedMetricStats = (output: any, context: __SerdeContext): ItemizedMetricStats => {
  return {
    MetricName: __expectString(output.MetricName),
    OccurrenceCount: __expectInt32(output.OccurrenceCount),
  } as any;
};

/**
 * deserializeAws_restJson1ItemizedMetricStatsList
 */
const de_ItemizedMetricStatsList = (output: any, context: __SerdeContext): ItemizedMetricStats[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ItemizedMetricStats(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1JsonFormatDescriptor
 */
const de_JsonFormatDescriptor = (output: any, context: __SerdeContext): JsonFormatDescriptor => {
  return {
    Charset: __expectString(output.Charset),
    FileCompression: __expectString(output.FileCompression),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaConfiguration
 */
const de_LambdaConfiguration = (output: any, context: __SerdeContext): LambdaConfiguration => {
  return {
    LambdaArn: __expectString(output.LambdaArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

/**
 * deserializeAws_restJson1Metric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  return {
    AggregationFunction: __expectString(output.AggregationFunction),
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
  } as any;
};

/**
 * deserializeAws_restJson1MetricLevelImpact
 */
const de_MetricLevelImpact = (output: any, context: __SerdeContext): MetricLevelImpact => {
  return {
    ContributionMatrix:
      output.ContributionMatrix != null ? de_ContributionMatrix(output.ContributionMatrix, context) : undefined,
    MetricName: __expectString(output.MetricName),
    NumTimeSeries: __expectInt32(output.NumTimeSeries),
  } as any;
};

/**
 * deserializeAws_restJson1MetricLevelImpactList
 */
const de_MetricLevelImpactList = (output: any, context: __SerdeContext): MetricLevelImpact[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricLevelImpact(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricList
 */
const de_MetricList = (output: any, context: __SerdeContext): Metric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Metric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricNameList
 */
const de_MetricNameList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1MetricSetDataQualityMetric
 */
const de_MetricSetDataQualityMetric = (output: any, context: __SerdeContext): MetricSetDataQualityMetric => {
  return {
    DataQualityMetricList:
      output.DataQualityMetricList != null
        ? de_DataQualityMetricList(output.DataQualityMetricList, context)
        : undefined,
    MetricSetArn: __expectString(output.MetricSetArn),
  } as any;
};

/**
 * deserializeAws_restJson1MetricSetDataQualityMetricList
 */
const de_MetricSetDataQualityMetricList = (output: any, context: __SerdeContext): MetricSetDataQualityMetric[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricSetDataQualityMetric(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricSetDimensionFilter
 */
const de_MetricSetDimensionFilter = (output: any, context: __SerdeContext): MetricSetDimensionFilter => {
  return {
    FilterList: output.FilterList != null ? de_FilterList(output.FilterList, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1MetricSetDimensionFilterList
 */
const de_MetricSetDimensionFilterList = (output: any, context: __SerdeContext): MetricSetDimensionFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricSetDimensionFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricSetSummary
 */
const de_MetricSetSummary = (output: any, context: __SerdeContext): MetricSetSummary => {
  return {
    AnomalyDetectorArn: __expectString(output.AnomalyDetectorArn),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    LastModificationTime:
      output.LastModificationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModificationTime)))
        : undefined,
    MetricSetArn: __expectString(output.MetricSetArn),
    MetricSetDescription: __expectString(output.MetricSetDescription),
    MetricSetName: __expectString(output.MetricSetName),
    Tags: output.Tags != null ? de_TagMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricSetSummaryList
 */
const de_MetricSetSummaryList = (output: any, context: __SerdeContext): MetricSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MetricSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricSource
 */
const de_MetricSource = (output: any, context: __SerdeContext): MetricSource => {
  return {
    AppFlowConfig: output.AppFlowConfig != null ? de_AppFlowConfig(output.AppFlowConfig, context) : undefined,
    AthenaSourceConfig:
      output.AthenaSourceConfig != null ? de_AthenaSourceConfig(output.AthenaSourceConfig, context) : undefined,
    CloudWatchConfig:
      output.CloudWatchConfig != null ? de_CloudWatchConfig(output.CloudWatchConfig, context) : undefined,
    RDSSourceConfig: output.RDSSourceConfig != null ? de_RDSSourceConfig(output.RDSSourceConfig, context) : undefined,
    RedshiftSourceConfig:
      output.RedshiftSourceConfig != null ? de_RedshiftSourceConfig(output.RedshiftSourceConfig, context) : undefined,
    S3SourceConfig: output.S3SourceConfig != null ? de_S3SourceConfig(output.S3SourceConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MetricValueList
 */
const de_MetricValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NumberListAttributeValue
 */
const de_NumberListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RDSSourceConfig
 */
const de_RDSSourceConfig = (output: any, context: __SerdeContext): RDSSourceConfig => {
  return {
    DBInstanceIdentifier: __expectString(output.DBInstanceIdentifier),
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    RoleArn: __expectString(output.RoleArn),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    TableName: __expectString(output.TableName),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_VpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RedshiftSourceConfig
 */
const de_RedshiftSourceConfig = (output: any, context: __SerdeContext): RedshiftSourceConfig => {
  return {
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    DatabaseHost: __expectString(output.DatabaseHost),
    DatabaseName: __expectString(output.DatabaseName),
    DatabasePort: __expectInt32(output.DatabasePort),
    RoleArn: __expectString(output.RoleArn),
    SecretManagerArn: __expectString(output.SecretManagerArn),
    TableName: __expectString(output.TableName),
    VpcConfiguration:
      output.VpcConfiguration != null ? de_VpcConfiguration(output.VpcConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3SourceConfig
 */
const de_S3SourceConfig = (output: any, context: __SerdeContext): S3SourceConfig => {
  return {
    FileFormatDescriptor:
      output.FileFormatDescriptor != null ? de_FileFormatDescriptor(output.FileFormatDescriptor, context) : undefined,
    HistoricalDataPathList:
      output.HistoricalDataPathList != null
        ? de_HistoricalDataPathList(output.HistoricalDataPathList, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    TemplatedPathList:
      output.TemplatedPathList != null ? de_TemplatedPathList(output.TemplatedPathList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SampleRow
 */
const de_SampleRow = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SampleRows
 */
const de_SampleRows = (output: any, context: __SerdeContext): string[][] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SampleRow(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SecurityGroupIdList
 */
const de_SecurityGroupIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SNSConfiguration
 */
const de_SNSConfiguration = (output: any, context: __SerdeContext): SNSConfiguration => {
  return {
    RoleArn: __expectString(output.RoleArn),
    SnsFormat: __expectString(output.SnsFormat),
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

/**
 * deserializeAws_restJson1StringListAttributeValue
 */
const de_StringListAttributeValue = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1SubnetIdList
 */
const de_SubnetIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TemplatedPathList
 */
const de_TemplatedPathList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1TimeSeries
 */
const de_TimeSeries = (output: any, context: __SerdeContext): TimeSeries => {
  return {
    DimensionList: output.DimensionList != null ? de_DimensionNameValueList(output.DimensionList, context) : undefined,
    MetricValueList: output.MetricValueList != null ? de_MetricValueList(output.MetricValueList, context) : undefined,
    TimeSeriesId: __expectString(output.TimeSeriesId),
  } as any;
};

/**
 * deserializeAws_restJson1TimeSeriesFeedback
 */
const de_TimeSeriesFeedback = (output: any, context: __SerdeContext): TimeSeriesFeedback => {
  return {
    IsAnomaly: __expectBoolean(output.IsAnomaly),
    TimeSeriesId: __expectString(output.TimeSeriesId),
  } as any;
};

/**
 * deserializeAws_restJson1TimeSeriesFeedbackList
 */
const de_TimeSeriesFeedbackList = (output: any, context: __SerdeContext): TimeSeriesFeedback[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeriesFeedback(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimeSeriesList
 */
const de_TimeSeriesList = (output: any, context: __SerdeContext): TimeSeries[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TimeSeries(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TimestampColumn
 */
const de_TimestampColumn = (output: any, context: __SerdeContext): TimestampColumn => {
  return {
    ColumnFormat: __expectString(output.ColumnFormat),
    ColumnName: __expectString(output.ColumnName),
  } as any;
};

/**
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    Message: __expectString(output.Message),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcConfiguration
 */
const de_VpcConfiguration = (output: any, context: __SerdeContext): VpcConfiguration => {
  return {
    SecurityGroupIdList:
      output.SecurityGroupIdList != null ? de_SecurityGroupIdList(output.SecurityGroupIdList, context) : undefined,
    SubnetIdList: output.SubnetIdList != null ? de_SubnetIdList(output.SubnetIdList, context) : undefined,
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
