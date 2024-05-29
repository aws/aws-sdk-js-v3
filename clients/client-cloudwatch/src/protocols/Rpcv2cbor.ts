// smithy-typescript generated code
import {
  cbor,
  loadSmithyRpcV2CborErrorCode,
  parseCborBody as parseBody,
  parseCborErrorBody as parseErrorBody,
} from "@smithy/core/cbor";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
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
import { calculateBodyLength } from "@smithy/util-body-length-browser";

import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "../commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "../commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "../commands/DeleteDashboardsCommand";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput } from "../commands/DeleteInsightRulesCommand";
import { DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput } from "../commands/DeleteMetricStreamCommand";
import {
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput,
} from "../commands/DescribeAlarmHistoryCommand";
import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "../commands/DescribeAlarmsCommand";
import {
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput,
} from "../commands/DescribeAlarmsForMetricCommand";
import {
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput,
} from "../commands/DescribeAnomalyDetectorsCommand";
import {
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput,
} from "../commands/DescribeInsightRulesCommand";
import {
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput,
} from "../commands/DisableAlarmActionsCommand";
import {
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput,
} from "../commands/DisableInsightRulesCommand";
import { EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput } from "../commands/EnableAlarmActionsCommand";
import { EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput } from "../commands/EnableInsightRulesCommand";
import { GetDashboardCommandInput, GetDashboardCommandOutput } from "../commands/GetDashboardCommand";
import {
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput,
} from "../commands/GetInsightRuleReportCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "../commands/GetMetricDataCommand";
import {
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput,
} from "../commands/GetMetricStatisticsCommand";
import { GetMetricStreamCommandInput, GetMetricStreamCommandOutput } from "../commands/GetMetricStreamCommand";
import {
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput,
} from "../commands/GetMetricWidgetImageCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "../commands/ListDashboardsCommand";
import {
  ListManagedInsightRulesCommandInput,
  ListManagedInsightRulesCommandOutput,
} from "../commands/ListManagedInsightRulesCommand";
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput } from "../commands/ListMetricStreamsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput } from "../commands/PutAnomalyDetectorCommand";
import { PutCompositeAlarmCommandInput, PutCompositeAlarmCommandOutput } from "../commands/PutCompositeAlarmCommand";
import { PutDashboardCommandInput, PutDashboardCommandOutput } from "../commands/PutDashboardCommand";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "../commands/PutInsightRuleCommand";
import {
  PutManagedInsightRulesCommandInput,
  PutManagedInsightRulesCommandOutput,
} from "../commands/PutManagedInsightRulesCommand";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "../commands/PutMetricAlarmCommand";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "../commands/PutMetricDataCommand";
import { PutMetricStreamCommandInput, PutMetricStreamCommandOutput } from "../commands/PutMetricStreamCommand";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "../commands/SetAlarmStateCommand";
import { StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput } from "../commands/StartMetricStreamsCommand";
import { StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput } from "../commands/StopMetricStreamsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { CloudWatchServiceException as __BaseException } from "../models/CloudWatchServiceException";
import {
  AlarmHistoryItem,
  AlarmType,
  AnomalyDetector,
  AnomalyDetectorConfiguration,
  AnomalyDetectorType,
  CompositeAlarm,
  ConcurrentModificationException,
  DashboardEntry,
  DashboardInvalidInputError,
  DashboardNotFoundError,
  Datapoint,
  DeleteAlarmsInput,
  DeleteAnomalyDetectorInput,
  DeleteDashboardsInput,
  DeleteInsightRulesInput,
  DeleteMetricStreamInput,
  DescribeAlarmHistoryInput,
  DescribeAlarmHistoryOutput,
  DescribeAlarmsForMetricInput,
  DescribeAlarmsForMetricOutput,
  DescribeAlarmsInput,
  DescribeAlarmsOutput,
  DescribeAnomalyDetectorsInput,
  DescribeAnomalyDetectorsOutput,
  DescribeInsightRulesInput,
  Dimension,
  DimensionFilter,
  DisableAlarmActionsInput,
  DisableInsightRulesInput,
  EnableAlarmActionsInput,
  EnableInsightRulesInput,
  GetDashboardInput,
  GetInsightRuleReportInput,
  GetInsightRuleReportOutput,
  GetMetricDataInput,
  GetMetricDataOutput,
  GetMetricStatisticsInput,
  GetMetricStatisticsOutput,
  GetMetricStreamInput,
  GetMetricStreamOutput,
  GetMetricWidgetImageInput,
  GetMetricWidgetImageOutput,
  InsightRuleContributor,
  InsightRuleContributorDatapoint,
  InsightRuleMetricDatapoint,
  InternalServiceFault,
  InvalidFormatFault,
  InvalidNextToken,
  InvalidParameterCombinationException,
  InvalidParameterValueException,
  LabelOptions,
  LimitExceededException,
  LimitExceededFault,
  ListDashboardsInput,
  ListDashboardsOutput,
  ListManagedInsightRulesInput,
  ListMetricsInput,
  ListMetricStreamsInput,
  ListMetricStreamsOutput,
  ListTagsForResourceInput,
  ManagedRule,
  Metric,
  MetricAlarm,
  MetricCharacteristics,
  MetricDataQuery,
  MetricDataResult,
  MetricDatum,
  MetricMathAnomalyDetector,
  MetricStat,
  MetricStreamEntry,
  MetricStreamFilter,
  MetricStreamStatisticsConfiguration,
  MetricStreamStatisticsMetric,
  MissingRequiredParameterException,
  PutAnomalyDetectorInput,
  PutCompositeAlarmInput,
  PutDashboardInput,
  PutInsightRuleInput,
  PutManagedInsightRulesInput,
  PutMetricAlarmInput,
  PutMetricDataInput,
  PutMetricStreamInput,
  Range,
  ResourceNotFound,
  ResourceNotFoundException,
  SetAlarmStateInput,
  SingleMetricAnomalyDetector,
  StartMetricStreamsInput,
  Statistic,
  StatisticSet,
  StopMetricStreamsInput,
  Tag,
  TagResourceInput,
  UntagResourceInput,
} from "../models/models_0";

/**
 * serializeRpcv2cborDeleteAlarmsCommand
 */
export const se_DeleteAlarmsCommand = async (
  input: DeleteAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DeleteAlarms",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteAnomalyDetectorCommand
 */
export const se_DeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DeleteAnomalyDetector",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteDashboardsCommand
 */
export const se_DeleteDashboardsCommand = async (
  input: DeleteDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DeleteDashboards",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteInsightRulesCommand
 */
export const se_DeleteInsightRulesCommand = async (
  input: DeleteInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DeleteInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDeleteMetricStreamCommand
 */
export const se_DeleteMetricStreamCommand = async (
  input: DeleteMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DeleteMetricStream",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeAlarmHistoryCommand
 */
export const se_DescribeAlarmHistoryCommand = async (
  input: DescribeAlarmHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_DescribeAlarmHistoryInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DescribeAlarmHistory",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeAlarmsCommand
 */
export const se_DescribeAlarmsCommand = async (
  input: DescribeAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DescribeAlarms",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeAlarmsForMetricCommand
 */
export const se_DescribeAlarmsForMetricCommand = async (
  input: DescribeAlarmsForMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DescribeAlarmsForMetric",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeAnomalyDetectorsCommand
 */
export const se_DescribeAnomalyDetectorsCommand = async (
  input: DescribeAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DescribeAnomalyDetectors",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDescribeInsightRulesCommand
 */
export const se_DescribeInsightRulesCommand = async (
  input: DescribeInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DescribeInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDisableAlarmActionsCommand
 */
export const se_DisableAlarmActionsCommand = async (
  input: DisableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DisableAlarmActions",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborDisableInsightRulesCommand
 */
export const se_DisableInsightRulesCommand = async (
  input: DisableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/DisableInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborEnableAlarmActionsCommand
 */
export const se_EnableAlarmActionsCommand = async (
  input: EnableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/EnableAlarmActions",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborEnableInsightRulesCommand
 */
export const se_EnableInsightRulesCommand = async (
  input: EnableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/EnableInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetDashboardCommand
 */
export const se_GetDashboardCommand = async (
  input: GetDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetDashboard",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetInsightRuleReportCommand
 */
export const se_GetInsightRuleReportCommand = async (
  input: GetInsightRuleReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_GetInsightRuleReportInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetInsightRuleReport",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetMetricDataCommand
 */
export const se_GetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_GetMetricDataInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetMetricData",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetMetricStatisticsCommand
 */
export const se_GetMetricStatisticsCommand = async (
  input: GetMetricStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_GetMetricStatisticsInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetMetricStatistics",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetMetricStreamCommand
 */
export const se_GetMetricStreamCommand = async (
  input: GetMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetMetricStream",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborGetMetricWidgetImageCommand
 */
export const se_GetMetricWidgetImageCommand = async (
  input: GetMetricWidgetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/GetMetricWidgetImage",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/ListDashboards",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListManagedInsightRulesCommand
 */
export const se_ListManagedInsightRulesCommand = async (
  input: ListManagedInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/ListManagedInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListMetricsCommand
 */
export const se_ListMetricsCommand = async (
  input: ListMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/ListMetrics",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListMetricStreamsCommand
 */
export const se_ListMetricStreamsCommand = async (
  input: ListMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/ListMetricStreams",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/ListTagsForResource",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutAnomalyDetectorCommand
 */
export const se_PutAnomalyDetectorCommand = async (
  input: PutAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_PutAnomalyDetectorInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutAnomalyDetector",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutCompositeAlarmCommand
 */
export const se_PutCompositeAlarmCommand = async (
  input: PutCompositeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutCompositeAlarm",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutDashboardCommand
 */
export const se_PutDashboardCommand = async (
  input: PutDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutDashboard",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutInsightRuleCommand
 */
export const se_PutInsightRuleCommand = async (
  input: PutInsightRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutInsightRule",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutManagedInsightRulesCommand
 */
export const se_PutManagedInsightRulesCommand = async (
  input: PutManagedInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutManagedInsightRules",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutMetricAlarmCommand
 */
export const se_PutMetricAlarmCommand = async (
  input: PutMetricAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_PutMetricAlarmInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutMetricAlarm",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutMetricDataCommand
 */
export const se_PutMetricDataCommand = async (
  input: PutMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(se_PutMetricDataInput(input, context));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutMetricData",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborPutMetricStreamCommand
 */
export const se_PutMetricStreamCommand = async (
  input: PutMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/PutMetricStream",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborSetAlarmStateCommand
 */
export const se_SetAlarmStateCommand = async (
  input: SetAlarmStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/SetAlarmState",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborStartMetricStreamsCommand
 */
export const se_StartMetricStreamsCommand = async (
  input: StartMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/StartMetricStreams",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborStopMetricStreamsCommand
 */
export const se_StopMetricStreamsCommand = async (
  input: StopMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/StopMetricStreams",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/TagResource",
    undefined,
    body
  );
};

/**
 * serializeRpcv2cborUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = cbor.serialize(_json(input));
  return buildHttpRpcRequest(
    context,
    headers,
    "/service/GraniteServiceVersion20100801/operation/UntagResource",
    undefined,
    body
  );
};

/**
 * deserializeRpcv2cborDeleteAlarmsCommand
 */
export const de_DeleteAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteAnomalyDetectorCommand
 */
export const de_DeleteAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteDashboardsCommand
 */
export const de_DeleteDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteInsightRulesCommand
 */
export const de_DeleteInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDeleteMetricStreamCommand
 */
export const de_DeleteMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeAlarmHistoryCommand
 */
export const de_DescribeAlarmHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlarmHistoryOutput(data, context);
  const response: DescribeAlarmHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeAlarmsCommand
 */
export const de_DescribeAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlarmsOutput(data, context);
  const response: DescribeAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeAlarmsForMetricCommand
 */
export const de_DescribeAlarmsForMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlarmsForMetricOutput(data, context);
  const response: DescribeAlarmsForMetricCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeAnomalyDetectorsCommand
 */
export const de_DescribeAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAnomalyDetectorsOutput(data, context);
  const response: DescribeAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDescribeInsightRulesCommand
 */
export const de_DescribeInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborDisableAlarmActionsCommand
 */
export const de_DisableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborDisableInsightRulesCommand
 */
export const de_DisableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborEnableAlarmActionsCommand
 */
export const de_EnableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborEnableInsightRulesCommand
 */
export const de_EnableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: EnableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetDashboardCommand
 */
export const de_GetDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetInsightRuleReportCommand
 */
export const de_GetInsightRuleReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInsightRuleReportOutput(data, context);
  const response: GetInsightRuleReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetMetricDataCommand
 */
export const de_GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMetricDataOutput(data, context);
  const response: GetMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetMetricStatisticsCommand
 */
export const de_GetMetricStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMetricStatisticsOutput(data, context);
  const response: GetMetricStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetMetricStreamCommand
 */
export const de_GetMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMetricStreamOutput(data, context);
  const response: GetMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborGetMetricWidgetImageCommand
 */
export const de_GetMetricWidgetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMetricWidgetImageOutput(data, context);
  const response: GetMetricWidgetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDashboardsOutput(data, context);
  const response: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListManagedInsightRulesCommand
 */
export const de_ListManagedInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListManagedInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListMetricsCommand
 */
export const de_ListMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListMetricStreamsCommand
 */
export const de_ListMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMetricStreamsOutput(data, context);
  const response: ListMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborPutAnomalyDetectorCommand
 */
export const de_PutAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutCompositeAlarmCommand
 */
export const de_PutCompositeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCompositeAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutCompositeAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborPutDashboardCommand
 */
export const de_PutDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutInsightRuleCommand
 */
export const de_PutInsightRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutInsightRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutManagedInsightRulesCommand
 */
export const de_PutManagedInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutManagedInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborPutMetricAlarmCommand
 */
export const de_PutMetricAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborPutMetricDataCommand
 */
export const de_PutMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborPutMetricStreamCommand
 */
export const de_PutMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: PutMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborSetAlarmStateCommand
 */
export const de_SetAlarmStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetAlarmStateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeRpcv2cborStartMetricStreamsCommand
 */
export const de_StartMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborStopMetricStreamsCommand
 */
export const de_StopMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StopMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeRpcv2cborTagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeRpcv2cborUntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserialize_Rpcv2cborCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadSmithyRpcV2CborErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "DashboardNotFoundError":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      throw await de_DashboardNotFoundErrorRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LimitExceededFault":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "DashboardInvalidInputError":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      throw await de_DashboardInvalidInputErrorRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidFormatFault":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      throw await de_InvalidFormatFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeRpcv2cborConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborDashboardInvalidInputErrorRes
 */
const de_DashboardInvalidInputErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardInvalidInputError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DashboardInvalidInputError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborDashboardNotFoundErrorRes
 */
const de_DashboardNotFoundErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardNotFoundError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DashboardNotFoundError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInternalServiceFaultRes
 */
const de_InternalServiceFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidFormatFaultRes
 */
const de_InvalidFormatFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFormatFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidFormatFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidNextTokenRes
 */
const de_InvalidNextTokenRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborInvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborLimitExceededExceptionRes
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
 * deserializeRpcv2cborLimitExceededFaultRes
 */
const de_LimitExceededFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborMissingRequiredParameterExceptionRes
 */
const de_MissingRequiredParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeRpcv2cborResourceNotFoundExceptionRes
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

// se_AlarmNames omitted.

// se_AlarmTypes omitted.

/**
 * serializeRpcv2cborAnomalyDetectorConfiguration
 */
const se_AnomalyDetectorConfiguration = (input: AnomalyDetectorConfiguration, context: __SerdeContext): any => {
  return take(input, {
    ExcludedTimeRanges: (_) => se_AnomalyDetectorExcludedTimeRanges(_, context),
    MetricTimezone: [],
  });
};

/**
 * serializeRpcv2cborAnomalyDetectorExcludedTimeRanges
 */
const se_AnomalyDetectorExcludedTimeRanges = (input: Range[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Range(entry, context);
    });
};

// se_AnomalyDetectorTypes omitted.

/**
 * serializeRpcv2cborCounts
 */
const se_Counts = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

// se_DashboardNames omitted.

// se_DeleteAlarmsInput omitted.

// se_DeleteAnomalyDetectorInput omitted.

// se_DeleteDashboardsInput omitted.

// se_DeleteInsightRulesInput omitted.

// se_DeleteMetricStreamInput omitted.

/**
 * serializeRpcv2cborDescribeAlarmHistoryInput
 */
const se_DescribeAlarmHistoryInput = (input: DescribeAlarmHistoryInput, context: __SerdeContext): any => {
  return take(input, {
    AlarmName: [],
    AlarmTypes: _json,
    EndDate: (_) => _.getTime() / 1_000,
    HistoryItemType: [],
    MaxRecords: [],
    NextToken: [],
    ScanBy: [],
    StartDate: (_) => _.getTime() / 1_000,
  });
};

// se_DescribeAlarmsForMetricInput omitted.

// se_DescribeAlarmsInput omitted.

// se_DescribeAnomalyDetectorsInput omitted.

// se_DescribeInsightRulesInput omitted.

// se_Dimension omitted.

// se_DimensionFilter omitted.

// se_DimensionFilters omitted.

// se_Dimensions omitted.

// se_DisableAlarmActionsInput omitted.

// se_DisableInsightRulesInput omitted.

// se_EnableAlarmActionsInput omitted.

// se_EnableInsightRulesInput omitted.

// se_ExtendedStatistics omitted.

// se_GetDashboardInput omitted.

/**
 * serializeRpcv2cborGetInsightRuleReportInput
 */
const se_GetInsightRuleReportInput = (input: GetInsightRuleReportInput, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    MaxContributorCount: [],
    Metrics: _json,
    OrderBy: [],
    Period: [],
    RuleName: [],
    StartTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeRpcv2cborGetMetricDataInput
 */
const se_GetMetricDataInput = (input: GetMetricDataInput, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    LabelOptions: _json,
    MaxDatapoints: [],
    MetricDataQueries: _json,
    NextToken: [],
    ScanBy: [],
    StartTime: (_) => _.getTime() / 1_000,
  });
};

/**
 * serializeRpcv2cborGetMetricStatisticsInput
 */
const se_GetMetricStatisticsInput = (input: GetMetricStatisticsInput, context: __SerdeContext): any => {
  return take(input, {
    Dimensions: _json,
    EndTime: (_) => _.getTime() / 1_000,
    ExtendedStatistics: _json,
    MetricName: [],
    Namespace: [],
    Period: [],
    StartTime: (_) => _.getTime() / 1_000,
    Statistics: _json,
    Unit: [],
  });
};

// se_GetMetricStreamInput omitted.

// se_GetMetricWidgetImageInput omitted.

// se_InsightRuleMetricList omitted.

// se_InsightRuleNames omitted.

// se_LabelOptions omitted.

// se_ListDashboardsInput omitted.

// se_ListManagedInsightRulesInput omitted.

// se_ListMetricsInput omitted.

// se_ListMetricStreamsInput omitted.

// se_ListTagsForResourceInput omitted.

// se_ManagedRule omitted.

// se_ManagedRules omitted.

// se_Metric omitted.

// se_MetricCharacteristics omitted.

/**
 * serializeRpcv2cborMetricData
 */
const se_MetricData = (input: MetricDatum[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricDatum(entry, context);
    });
};

// se_MetricDataQueries omitted.

// se_MetricDataQuery omitted.

/**
 * serializeRpcv2cborMetricDatum
 */
const se_MetricDatum = (input: MetricDatum, context: __SerdeContext): any => {
  return take(input, {
    Counts: (_) => se_Counts(_, context),
    Dimensions: _json,
    MetricName: [],
    StatisticValues: (_) => se_StatisticSet(_, context),
    StorageResolution: [],
    Timestamp: (_) => _.getTime() / 1_000,
    Unit: [],
    Value: __serializeFloat,
    Values: (_) => se_Values(_, context),
  });
};

// se_MetricMathAnomalyDetector omitted.

// se_MetricStat omitted.

// se_MetricStreamFilter omitted.

// se_MetricStreamFilterMetricNames omitted.

// se_MetricStreamFilters omitted.

// se_MetricStreamNames omitted.

// se_MetricStreamStatisticsAdditionalStatistics omitted.

// se_MetricStreamStatisticsConfiguration omitted.

// se_MetricStreamStatisticsConfigurations omitted.

// se_MetricStreamStatisticsIncludeMetrics omitted.

// se_MetricStreamStatisticsMetric omitted.

/**
 * serializeRpcv2cborPutAnomalyDetectorInput
 */
const se_PutAnomalyDetectorInput = (input: PutAnomalyDetectorInput, context: __SerdeContext): any => {
  return take(input, {
    Configuration: (_) => se_AnomalyDetectorConfiguration(_, context),
    Dimensions: _json,
    MetricCharacteristics: _json,
    MetricMathAnomalyDetector: _json,
    MetricName: [],
    Namespace: [],
    SingleMetricAnomalyDetector: _json,
    Stat: [],
  });
};

// se_PutCompositeAlarmInput omitted.

// se_PutDashboardInput omitted.

// se_PutInsightRuleInput omitted.

// se_PutManagedInsightRulesInput omitted.

/**
 * serializeRpcv2cborPutMetricAlarmInput
 */
const se_PutMetricAlarmInput = (input: PutMetricAlarmInput, context: __SerdeContext): any => {
  return take(input, {
    ActionsEnabled: [],
    AlarmActions: _json,
    AlarmDescription: [],
    AlarmName: [],
    ComparisonOperator: [],
    DatapointsToAlarm: [],
    Dimensions: _json,
    EvaluateLowSampleCountPercentile: [],
    EvaluationPeriods: [],
    ExtendedStatistic: [],
    InsufficientDataActions: _json,
    MetricName: [],
    Metrics: _json,
    Namespace: [],
    OKActions: _json,
    Period: [],
    Statistic: [],
    Tags: _json,
    Threshold: __serializeFloat,
    ThresholdMetricId: [],
    TreatMissingData: [],
    Unit: [],
  });
};

/**
 * serializeRpcv2cborPutMetricDataInput
 */
const se_PutMetricDataInput = (input: PutMetricDataInput, context: __SerdeContext): any => {
  return take(input, {
    MetricData: (_) => se_MetricData(_, context),
    Namespace: [],
  });
};

// se_PutMetricStreamInput omitted.

/**
 * serializeRpcv2cborRange
 */
const se_Range = (input: Range, context: __SerdeContext): any => {
  return take(input, {
    EndTime: (_) => _.getTime() / 1_000,
    StartTime: (_) => _.getTime() / 1_000,
  });
};

// se_ResourceList omitted.

// se_SetAlarmStateInput omitted.

// se_SingleMetricAnomalyDetector omitted.

// se_StartMetricStreamsInput omitted.

// se_Statistics omitted.

/**
 * serializeRpcv2cborStatisticSet
 */
const se_StatisticSet = (input: StatisticSet, context: __SerdeContext): any => {
  return take(input, {
    Maximum: __serializeFloat,
    Minimum: __serializeFloat,
    SampleCount: __serializeFloat,
    Sum: __serializeFloat,
  });
};

// se_StopMetricStreamsInput omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_UntagResourceInput omitted.

/**
 * serializeRpcv2cborValues
 */
const se_Values = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return __serializeFloat(entry);
    });
};

/**
 * deserializeRpcv2cborAlarmHistoryItem
 */
const de_AlarmHistoryItem = (output: any, context: __SerdeContext): AlarmHistoryItem => {
  return take(output, {
    AlarmName: __expectString,
    AlarmType: __expectString,
    HistoryData: __expectString,
    HistoryItemType: __expectString,
    HistorySummary: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
  }) as any;
};

/**
 * deserializeRpcv2cborAlarmHistoryItems
 */
const de_AlarmHistoryItems = (output: any, context: __SerdeContext): AlarmHistoryItem[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmHistoryItem(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborAnomalyDetector
 */
const de_AnomalyDetector = (output: any, context: __SerdeContext): AnomalyDetector => {
  return take(output, {
    Configuration: (_: any) => de_AnomalyDetectorConfiguration(_, context),
    Dimensions: _json,
    MetricCharacteristics: _json,
    MetricMathAnomalyDetector: _json,
    MetricName: __expectString,
    Namespace: __expectString,
    SingleMetricAnomalyDetector: _json,
    Stat: __expectString,
    StateValue: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborAnomalyDetectorConfiguration
 */
const de_AnomalyDetectorConfiguration = (output: any, context: __SerdeContext): AnomalyDetectorConfiguration => {
  return take(output, {
    ExcludedTimeRanges: (_: any) => de_AnomalyDetectorExcludedTimeRanges(_, context),
    MetricTimezone: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborAnomalyDetectorExcludedTimeRanges
 */
const de_AnomalyDetectorExcludedTimeRanges = (output: any, context: __SerdeContext): Range[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Range(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborAnomalyDetectors
 */
const de_AnomalyDetectors = (output: any, context: __SerdeContext): AnomalyDetector[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalyDetector(entry, context);
    });
  return collection;
};

// de_BatchFailures omitted.

/**
 * deserializeRpcv2cborCompositeAlarm
 */
const de_CompositeAlarm = (output: any, context: __SerdeContext): CompositeAlarm => {
  return take(output, {
    ActionsEnabled: __expectBoolean,
    ActionsSuppressedBy: __expectString,
    ActionsSuppressedReason: __expectString,
    ActionsSuppressor: __expectString,
    ActionsSuppressorExtensionPeriod: __expectInt32,
    ActionsSuppressorWaitPeriod: __expectInt32,
    AlarmActions: _json,
    AlarmArn: __expectString,
    AlarmConfigurationUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    AlarmDescription: __expectString,
    AlarmName: __expectString,
    AlarmRule: __expectString,
    InsufficientDataActions: _json,
    OKActions: _json,
    StateReason: __expectString,
    StateReasonData: __expectString,
    StateTransitionedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    StateUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    StateValue: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborCompositeAlarms
 */
const de_CompositeAlarms = (output: any, context: __SerdeContext): CompositeAlarm[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompositeAlarm(entry, context);
    });
  return collection;
};

// de_ConcurrentModificationException omitted.

/**
 * deserializeRpcv2cborDashboardEntries
 */
const de_DashboardEntries = (output: any, context: __SerdeContext): DashboardEntry[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardEntry(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborDashboardEntry
 */
const de_DashboardEntry = (output: any, context: __SerdeContext): DashboardEntry => {
  return take(output, {
    DashboardArn: __expectString,
    DashboardName: __expectString,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Size: __expectLong,
  }) as any;
};

// de_DashboardInvalidInputError omitted.

// de_DashboardNotFoundError omitted.

// de_DashboardValidationMessage omitted.

// de_DashboardValidationMessages omitted.

/**
 * deserializeRpcv2cborDatapoint
 */
const de_Datapoint = (output: any, context: __SerdeContext): Datapoint => {
  return take(output, {
    Average: __limitedParseDouble,
    ExtendedStatistics: (_: any) => de_DatapointValueMap(_, context),
    Maximum: __limitedParseDouble,
    Minimum: __limitedParseDouble,
    SampleCount: __limitedParseDouble,
    Sum: __limitedParseDouble,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborDatapoints
 */
const de_Datapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Datapoint(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborDatapointValueMap
 */
const de_DatapointValueMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value !== null) {
      acc[key as string] = __limitedParseDouble(value) as any;
    }
    return acc;
  }, {} as Record<string, number>);
};

/**
 * deserializeRpcv2cborDatapointValues
 */
const de_DatapointValues = (output: any, context: __SerdeContext): number[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return collection;
};

// de_DeleteAnomalyDetectorOutput omitted.

// de_DeleteDashboardsOutput omitted.

// de_DeleteInsightRulesOutput omitted.

// de_DeleteMetricStreamOutput omitted.

/**
 * deserializeRpcv2cborDescribeAlarmHistoryOutput
 */
const de_DescribeAlarmHistoryOutput = (output: any, context: __SerdeContext): DescribeAlarmHistoryOutput => {
  return take(output, {
    AlarmHistoryItems: (_: any) => de_AlarmHistoryItems(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeAlarmsForMetricOutput
 */
const de_DescribeAlarmsForMetricOutput = (output: any, context: __SerdeContext): DescribeAlarmsForMetricOutput => {
  return take(output, {
    MetricAlarms: (_: any) => de_MetricAlarms(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeAlarmsOutput
 */
const de_DescribeAlarmsOutput = (output: any, context: __SerdeContext): DescribeAlarmsOutput => {
  return take(output, {
    CompositeAlarms: (_: any) => de_CompositeAlarms(_, context),
    MetricAlarms: (_: any) => de_MetricAlarms(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborDescribeAnomalyDetectorsOutput
 */
const de_DescribeAnomalyDetectorsOutput = (output: any, context: __SerdeContext): DescribeAnomalyDetectorsOutput => {
  return take(output, {
    AnomalyDetectors: (_: any) => de_AnomalyDetectors(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeInsightRulesOutput omitted.

// de_Dimension omitted.

// de_Dimensions omitted.

// de_DisableInsightRulesOutput omitted.

// de_EnableInsightRulesOutput omitted.

// de_GetDashboardOutput omitted.

/**
 * deserializeRpcv2cborGetInsightRuleReportOutput
 */
const de_GetInsightRuleReportOutput = (output: any, context: __SerdeContext): GetInsightRuleReportOutput => {
  return take(output, {
    AggregateValue: __limitedParseDouble,
    AggregationStatistic: __expectString,
    ApproximateUniqueCount: __expectLong,
    Contributors: (_: any) => de_InsightRuleContributors(_, context),
    KeyLabels: _json,
    MetricDatapoints: (_: any) => de_InsightRuleMetricDatapoints(_, context),
  }) as any;
};

/**
 * deserializeRpcv2cborGetMetricDataOutput
 */
const de_GetMetricDataOutput = (output: any, context: __SerdeContext): GetMetricDataOutput => {
  return take(output, {
    Messages: _json,
    MetricDataResults: (_: any) => de_MetricDataResults(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborGetMetricStatisticsOutput
 */
const de_GetMetricStatisticsOutput = (output: any, context: __SerdeContext): GetMetricStatisticsOutput => {
  return take(output, {
    Datapoints: (_: any) => de_Datapoints(_, context),
    Label: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborGetMetricStreamOutput
 */
const de_GetMetricStreamOutput = (output: any, context: __SerdeContext): GetMetricStreamOutput => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    ExcludeFilters: _json,
    FirehoseArn: __expectString,
    IncludeFilters: _json,
    IncludeLinkedAccountsMetrics: __expectBoolean,
    LastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    OutputFormat: __expectString,
    RoleArn: __expectString,
    State: __expectString,
    StatisticsConfigurations: _json,
  }) as any;
};

/**
 * deserializeRpcv2cborGetMetricWidgetImageOutput
 */
const de_GetMetricWidgetImageOutput = (output: any, context: __SerdeContext): GetMetricWidgetImageOutput => {
  return take(output, {
    MetricWidgetImage: context.base64Decoder,
  }) as any;
};

// de_InsightRule omitted.

/**
 * deserializeRpcv2cborInsightRuleContributor
 */
const de_InsightRuleContributor = (output: any, context: __SerdeContext): InsightRuleContributor => {
  return take(output, {
    ApproximateAggregateValue: __limitedParseDouble,
    Datapoints: (_: any) => de_InsightRuleContributorDatapoints(_, context),
    Keys: _json,
  }) as any;
};

/**
 * deserializeRpcv2cborInsightRuleContributorDatapoint
 */
const de_InsightRuleContributorDatapoint = (output: any, context: __SerdeContext): InsightRuleContributorDatapoint => {
  return take(output, {
    ApproximateValue: __limitedParseDouble,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
  }) as any;
};

/**
 * deserializeRpcv2cborInsightRuleContributorDatapoints
 */
const de_InsightRuleContributorDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleContributorDatapoint[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleContributorDatapoint(entry, context);
    });
  return collection;
};

// de_InsightRuleContributorKeyLabels omitted.

// de_InsightRuleContributorKeys omitted.

/**
 * deserializeRpcv2cborInsightRuleContributors
 */
const de_InsightRuleContributors = (output: any, context: __SerdeContext): InsightRuleContributor[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleContributor(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborInsightRuleMetricDatapoint
 */
const de_InsightRuleMetricDatapoint = (output: any, context: __SerdeContext): InsightRuleMetricDatapoint => {
  return take(output, {
    Average: __limitedParseDouble,
    MaxContributorValue: __limitedParseDouble,
    Maximum: __limitedParseDouble,
    Minimum: __limitedParseDouble,
    SampleCount: __limitedParseDouble,
    Sum: __limitedParseDouble,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    UniqueContributors: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeRpcv2cborInsightRuleMetricDatapoints
 */
const de_InsightRuleMetricDatapoints = (output: any, context: __SerdeContext): InsightRuleMetricDatapoint[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleMetricDatapoint(entry, context);
    });
  return collection;
};

// de_InsightRules omitted.

// de_InternalServiceFault omitted.

// de_InvalidFormatFault omitted.

// de_InvalidNextToken omitted.

// de_InvalidParameterCombinationException omitted.

// de_InvalidParameterValueException omitted.

// de_LimitExceededException omitted.

// de_LimitExceededFault omitted.

/**
 * deserializeRpcv2cborListDashboardsOutput
 */
const de_ListDashboardsOutput = (output: any, context: __SerdeContext): ListDashboardsOutput => {
  return take(output, {
    DashboardEntries: (_: any) => de_DashboardEntries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListManagedInsightRulesOutput omitted.

// de_ListMetricsOutput omitted.

/**
 * deserializeRpcv2cborListMetricStreamsOutput
 */
const de_ListMetricStreamsOutput = (output: any, context: __SerdeContext): ListMetricStreamsOutput => {
  return take(output, {
    Entries: (_: any) => de_MetricStreamEntries(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

// de_ManagedRuleDescription omitted.

// de_ManagedRuleDescriptions omitted.

// de_ManagedRuleState omitted.

// de_MessageData omitted.

// de_Metric omitted.

/**
 * deserializeRpcv2cborMetricAlarm
 */
const de_MetricAlarm = (output: any, context: __SerdeContext): MetricAlarm => {
  return take(output, {
    ActionsEnabled: __expectBoolean,
    AlarmActions: _json,
    AlarmArn: __expectString,
    AlarmConfigurationUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    AlarmDescription: __expectString,
    AlarmName: __expectString,
    ComparisonOperator: __expectString,
    DatapointsToAlarm: __expectInt32,
    Dimensions: _json,
    EvaluateLowSampleCountPercentile: __expectString,
    EvaluationPeriods: __expectInt32,
    EvaluationState: __expectString,
    ExtendedStatistic: __expectString,
    InsufficientDataActions: _json,
    MetricName: __expectString,
    Metrics: _json,
    Namespace: __expectString,
    OKActions: _json,
    Period: __expectInt32,
    StateReason: __expectString,
    StateReasonData: __expectString,
    StateTransitionedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    StateUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    StateValue: __expectString,
    Statistic: __expectString,
    Threshold: __limitedParseDouble,
    ThresholdMetricId: __expectString,
    TreatMissingData: __expectString,
    Unit: __expectString,
  }) as any;
};

/**
 * deserializeRpcv2cborMetricAlarms
 */
const de_MetricAlarms = (output: any, context: __SerdeContext): MetricAlarm[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricAlarm(entry, context);
    });
  return collection;
};

// de_MetricCharacteristics omitted.

// de_MetricDataQueries omitted.

// de_MetricDataQuery omitted.

/**
 * deserializeRpcv2cborMetricDataResult
 */
const de_MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  return take(output, {
    Id: __expectString,
    Label: __expectString,
    Messages: _json,
    StatusCode: __expectString,
    Timestamps: (_: any) => de_Timestamps(_, context),
    Values: (_: any) => de_DatapointValues(_, context),
  }) as any;
};

// de_MetricDataResultMessages omitted.

/**
 * deserializeRpcv2cborMetricDataResults
 */
const de_MetricDataResults = (output: any, context: __SerdeContext): MetricDataResult[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataResult(entry, context);
    });
  return collection;
};

// de_MetricMathAnomalyDetector omitted.

// de_Metrics omitted.

// de_MetricStat omitted.

/**
 * deserializeRpcv2cborMetricStreamEntries
 */
const de_MetricStreamEntries = (output: any, context: __SerdeContext): MetricStreamEntry[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricStreamEntry(entry, context);
    });
  return collection;
};

/**
 * deserializeRpcv2cborMetricStreamEntry
 */
const de_MetricStreamEntry = (output: any, context: __SerdeContext): MetricStreamEntry => {
  return take(output, {
    Arn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    FirehoseArn: __expectString,
    LastUpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    Name: __expectString,
    OutputFormat: __expectString,
    State: __expectString,
  }) as any;
};

// de_MetricStreamFilter omitted.

// de_MetricStreamFilterMetricNames omitted.

// de_MetricStreamFilters omitted.

// de_MetricStreamStatisticsAdditionalStatistics omitted.

// de_MetricStreamStatisticsConfiguration omitted.

// de_MetricStreamStatisticsConfigurations omitted.

// de_MetricStreamStatisticsIncludeMetrics omitted.

// de_MetricStreamStatisticsMetric omitted.

// de_MissingRequiredParameterException omitted.

// de_OwningAccounts omitted.

// de_PartialFailure omitted.

// de_PutAnomalyDetectorOutput omitted.

// de_PutDashboardOutput omitted.

// de_PutInsightRuleOutput omitted.

// de_PutManagedInsightRulesOutput omitted.

// de_PutMetricStreamOutput omitted.

/**
 * deserializeRpcv2cborRange
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  return take(output, {
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(_)),
  }) as any;
};

// de_ResourceList omitted.

// de_ResourceNotFound omitted.

// de_ResourceNotFoundException omitted.

// de_SingleMetricAnomalyDetector omitted.

// de_StartMetricStreamsOutput omitted.

// de_StopMetricStreamsOutput omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

/**
 * deserializeRpcv2cborTimestamps
 */
const de_Timestamps = (output: any, context: __SerdeContext): Date[] => {
  const collection = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(entry));
    });
  return collection;
};

// de_UntagResourceOutput omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
    try {
      contents.headers["content-length"] = String(calculateBodyLength(body));
    } catch (e) {}
  }
  return new __HttpRequest(contents);
};
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/cbor",
  "smithy-protocol": "rpc-v2-cbor",
};
