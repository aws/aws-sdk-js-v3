// smithy-typescript generated code
import { parseXmlBody as parseBody, parseXmlErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  serializeDateTime as __serializeDateTime,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt32 as __strictParseInt32,
  strictParseLong as __strictParseLong,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "../commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
} from "../commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "../commands/DeleteDashboardsCommand";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput } from "../commands/DeleteInsightRulesCommand";
import { DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput } from "../commands/DeleteMetricStreamCommand";
import {
  DescribeAlarmContributorsCommandInput,
  DescribeAlarmContributorsCommandOutput,
} from "../commands/DescribeAlarmContributorsCommand";
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
  AlarmContributor,
  AlarmHistoryItem,
  AlarmType,
  AnomalyDetector,
  AnomalyDetectorConfiguration,
  AnomalyDetectorType,
  CompositeAlarm,
  ConcurrentModificationException,
  ConflictException,
  DashboardEntry,
  DashboardInvalidInputError,
  DashboardValidationMessage,
  Datapoint,
  DeleteAlarmsInput,
  DeleteAnomalyDetectorInput,
  DeleteAnomalyDetectorOutput,
  DeleteDashboardsInput,
  DeleteDashboardsOutput,
  DeleteInsightRulesInput,
  DeleteInsightRulesOutput,
  DeleteMetricStreamInput,
  DeleteMetricStreamOutput,
  DescribeAlarmContributorsInput,
  DescribeAlarmContributorsOutput,
  DescribeAlarmHistoryInput,
  DescribeAlarmHistoryOutput,
  DescribeAlarmsForMetricInput,
  DescribeAlarmsForMetricOutput,
  DescribeAlarmsInput,
  DescribeAlarmsOutput,
  DescribeAnomalyDetectorsInput,
  DescribeAnomalyDetectorsOutput,
  DescribeInsightRulesInput,
  DescribeInsightRulesOutput,
  Dimension,
  DimensionFilter,
  DisableAlarmActionsInput,
  DisableInsightRulesInput,
  DisableInsightRulesOutput,
  EnableAlarmActionsInput,
  EnableInsightRulesInput,
  EnableInsightRulesOutput,
  Entity,
  EntityMetricData,
  GetDashboardInput,
  GetDashboardOutput,
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
  InsightRule,
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
  ListManagedInsightRulesOutput,
  ListMetricsInput,
  ListMetricsOutput,
  ListMetricStreamsInput,
  ListMetricStreamsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ManagedRule,
  ManagedRuleDescription,
  ManagedRuleState,
  MessageData,
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
  PartialFailure,
  PutAnomalyDetectorInput,
  PutAnomalyDetectorOutput,
  PutCompositeAlarmInput,
  PutDashboardInput,
  PutDashboardOutput,
  PutInsightRuleInput,
  PutInsightRuleOutput,
  PutManagedInsightRulesInput,
  PutManagedInsightRulesOutput,
  PutMetricAlarmInput,
  PutMetricDataInput,
  PutMetricStreamInput,
  PutMetricStreamOutput,
  Range,
  ResourceNotFound,
  ResourceNotFoundException,
  SetAlarmStateInput,
  SingleMetricAnomalyDetector,
  StartMetricStreamsInput,
  StartMetricStreamsOutput,
  Statistic,
  StatisticSet,
  StopMetricStreamsInput,
  StopMetricStreamsOutput,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput,
} from "../models/models_0";

/**
 * serializeAws_queryDeleteAlarmsCommand
 */
export const se_DeleteAlarmsCommand = async (
  input: DeleteAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAlarmsInput(input, context),
    [_A]: _DA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteAnomalyDetectorCommand
 */
export const se_DeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteAnomalyDetectorInput(input, context),
    [_A]: _DAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteDashboardsCommand
 */
export const se_DeleteDashboardsCommand = async (
  input: DeleteDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteDashboardsInput(input, context),
    [_A]: _DD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteInsightRulesCommand
 */
export const se_DeleteInsightRulesCommand = async (
  input: DeleteInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteInsightRulesInput(input, context),
    [_A]: _DIR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDeleteMetricStreamCommand
 */
export const se_DeleteMetricStreamCommand = async (
  input: DeleteMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DeleteMetricStreamInput(input, context),
    [_A]: _DMS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAlarmContributorsCommand
 */
export const se_DescribeAlarmContributorsCommand = async (
  input: DescribeAlarmContributorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAlarmContributorsInput(input, context),
    [_A]: _DAC,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAlarmHistoryCommand
 */
export const se_DescribeAlarmHistoryCommand = async (
  input: DescribeAlarmHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAlarmHistoryInput(input, context),
    [_A]: _DAH,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAlarmsCommand
 */
export const se_DescribeAlarmsCommand = async (
  input: DescribeAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAlarmsInput(input, context),
    [_A]: _DAe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAlarmsForMetricCommand
 */
export const se_DescribeAlarmsForMetricCommand = async (
  input: DescribeAlarmsForMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAlarmsForMetricInput(input, context),
    [_A]: _DAFM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeAnomalyDetectorsCommand
 */
export const se_DescribeAnomalyDetectorsCommand = async (
  input: DescribeAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeAnomalyDetectorsInput(input, context),
    [_A]: _DADe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDescribeInsightRulesCommand
 */
export const se_DescribeInsightRulesCommand = async (
  input: DescribeInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DescribeInsightRulesInput(input, context),
    [_A]: _DIRe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableAlarmActionsCommand
 */
export const se_DisableAlarmActionsCommand = async (
  input: DisableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableAlarmActionsInput(input, context),
    [_A]: _DAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryDisableInsightRulesCommand
 */
export const se_DisableInsightRulesCommand = async (
  input: DisableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_DisableInsightRulesInput(input, context),
    [_A]: _DIRi,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableAlarmActionsCommand
 */
export const se_EnableAlarmActionsCommand = async (
  input: EnableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableAlarmActionsInput(input, context),
    [_A]: _EAA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryEnableInsightRulesCommand
 */
export const se_EnableInsightRulesCommand = async (
  input: EnableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_EnableInsightRulesInput(input, context),
    [_A]: _EIR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetDashboardCommand
 */
export const se_GetDashboardCommand = async (
  input: GetDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetDashboardInput(input, context),
    [_A]: _GD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetInsightRuleReportCommand
 */
export const se_GetInsightRuleReportCommand = async (
  input: GetInsightRuleReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetInsightRuleReportInput(input, context),
    [_A]: _GIRR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetMetricDataCommand
 */
export const se_GetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetMetricDataInput(input, context),
    [_A]: _GMD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetMetricStatisticsCommand
 */
export const se_GetMetricStatisticsCommand = async (
  input: GetMetricStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetMetricStatisticsInput(input, context),
    [_A]: _GMS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetMetricStreamCommand
 */
export const se_GetMetricStreamCommand = async (
  input: GetMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetMetricStreamInput(input, context),
    [_A]: _GMSe,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryGetMetricWidgetImageCommand
 */
export const se_GetMetricWidgetImageCommand = async (
  input: GetMetricWidgetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_GetMetricWidgetImageInput(input, context),
    [_A]: _GMWI,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListDashboardsCommand
 */
export const se_ListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListDashboardsInput(input, context),
    [_A]: _LD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListManagedInsightRulesCommand
 */
export const se_ListManagedInsightRulesCommand = async (
  input: ListManagedInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListManagedInsightRulesInput(input, context),
    [_A]: _LMIR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListMetricsCommand
 */
export const se_ListMetricsCommand = async (
  input: ListMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListMetricsInput(input, context),
    [_A]: _LM,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListMetricStreamsCommand
 */
export const se_ListMetricStreamsCommand = async (
  input: ListMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListMetricStreamsInput(input, context),
    [_A]: _LMS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_ListTagsForResourceInput(input, context),
    [_A]: _LTFR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutAnomalyDetectorCommand
 */
export const se_PutAnomalyDetectorCommand = async (
  input: PutAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutAnomalyDetectorInput(input, context),
    [_A]: _PAD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutCompositeAlarmCommand
 */
export const se_PutCompositeAlarmCommand = async (
  input: PutCompositeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutCompositeAlarmInput(input, context),
    [_A]: _PCA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutDashboardCommand
 */
export const se_PutDashboardCommand = async (
  input: PutDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutDashboardInput(input, context),
    [_A]: _PD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutInsightRuleCommand
 */
export const se_PutInsightRuleCommand = async (
  input: PutInsightRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutInsightRuleInput(input, context),
    [_A]: _PIR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutManagedInsightRulesCommand
 */
export const se_PutManagedInsightRulesCommand = async (
  input: PutManagedInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutManagedInsightRulesInput(input, context),
    [_A]: _PMIR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutMetricAlarmCommand
 */
export const se_PutMetricAlarmCommand = async (
  input: PutMetricAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutMetricAlarmInput(input, context),
    [_A]: _PMA,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutMetricDataCommand
 */
export const se_PutMetricDataCommand = async (
  input: PutMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutMetricDataInput(input, context),
    [_A]: _PMD,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryPutMetricStreamCommand
 */
export const se_PutMetricStreamCommand = async (
  input: PutMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_PutMetricStreamInput(input, context),
    [_A]: _PMS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_querySetAlarmStateCommand
 */
export const se_SetAlarmStateCommand = async (
  input: SetAlarmStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_SetAlarmStateInput(input, context),
    [_A]: _SAS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStartMetricStreamsCommand
 */
export const se_StartMetricStreamsCommand = async (
  input: StartMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StartMetricStreamsInput(input, context),
    [_A]: _SMS,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryStopMetricStreamsCommand
 */
export const se_StopMetricStreamsCommand = async (
  input: StopMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_StopMetricStreamsInput(input, context),
    [_A]: _SMSt,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryTagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_TagResourceInput(input, context),
    [_A]: _TR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_queryUntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = SHARED_HEADERS;
  let body: any;
  body = buildFormUrlencodedString({
    ...se_UntagResourceInput(input, context),
    [_A]: _UR,
    [_V]: _,
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_queryDeleteAlarmsCommand
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
 * deserializeAws_queryDeleteAnomalyDetectorCommand
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
  contents = de_DeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
  const response: DeleteAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteDashboardsCommand
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
  contents = de_DeleteDashboardsOutput(data.DeleteDashboardsResult, context);
  const response: DeleteDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteInsightRulesCommand
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
  contents = de_DeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
  const response: DeleteInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDeleteMetricStreamCommand
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
  contents = de_DeleteMetricStreamOutput(data.DeleteMetricStreamResult, context);
  const response: DeleteMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAlarmContributorsCommand
 */
export const de_DescribeAlarmContributorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmContributorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAlarmContributorsOutput(data.DescribeAlarmContributorsResult, context);
  const response: DescribeAlarmContributorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAlarmHistoryCommand
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
  contents = de_DescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
  const response: DescribeAlarmHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAlarmsCommand
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
  contents = de_DescribeAlarmsOutput(data.DescribeAlarmsResult, context);
  const response: DescribeAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAlarmsForMetricCommand
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
  contents = de_DescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
  const response: DescribeAlarmsForMetricCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeAnomalyDetectorsCommand
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
  contents = de_DescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
  const response: DescribeAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDescribeInsightRulesCommand
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
  contents = de_DescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
  const response: DescribeInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryDisableAlarmActionsCommand
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
 * deserializeAws_queryDisableInsightRulesCommand
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
  contents = de_DisableInsightRulesOutput(data.DisableInsightRulesResult, context);
  const response: DisableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryEnableAlarmActionsCommand
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
 * deserializeAws_queryEnableInsightRulesCommand
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
  contents = de_EnableInsightRulesOutput(data.EnableInsightRulesResult, context);
  const response: EnableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetDashboardCommand
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
  contents = de_GetDashboardOutput(data.GetDashboardResult, context);
  const response: GetDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetInsightRuleReportCommand
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
  contents = de_GetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
  const response: GetInsightRuleReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetMetricDataCommand
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
  contents = de_GetMetricDataOutput(data.GetMetricDataResult, context);
  const response: GetMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetMetricStatisticsCommand
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
  contents = de_GetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
  const response: GetMetricStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetMetricStreamCommand
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
  contents = de_GetMetricStreamOutput(data.GetMetricStreamResult, context);
  const response: GetMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryGetMetricWidgetImageCommand
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
  contents = de_GetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
  const response: GetMetricWidgetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListDashboardsCommand
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
  contents = de_ListDashboardsOutput(data.ListDashboardsResult, context);
  const response: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListManagedInsightRulesCommand
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
  contents = de_ListManagedInsightRulesOutput(data.ListManagedInsightRulesResult, context);
  const response: ListManagedInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListMetricsCommand
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
  contents = de_ListMetricsOutput(data.ListMetricsResult, context);
  const response: ListMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListMetricStreamsCommand
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
  contents = de_ListMetricStreamsOutput(data.ListMetricStreamsResult, context);
  const response: ListMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommand
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
  contents = de_ListTagsForResourceOutput(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutAnomalyDetectorCommand
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
  contents = de_PutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
  const response: PutAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutCompositeAlarmCommand
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
 * deserializeAws_queryPutDashboardCommand
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
  contents = de_PutDashboardOutput(data.PutDashboardResult, context);
  const response: PutDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutInsightRuleCommand
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
  contents = de_PutInsightRuleOutput(data.PutInsightRuleResult, context);
  const response: PutInsightRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutManagedInsightRulesCommand
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
  contents = de_PutManagedInsightRulesOutput(data.PutManagedInsightRulesResult, context);
  const response: PutManagedInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryPutMetricAlarmCommand
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
 * deserializeAws_queryPutMetricDataCommand
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
 * deserializeAws_queryPutMetricStreamCommand
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
  contents = de_PutMetricStreamOutput(data.PutMetricStreamResult, context);
  const response: PutMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_querySetAlarmStateCommand
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
 * deserializeAws_queryStartMetricStreamsCommand
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
  contents = de_StartMetricStreamsOutput(data.StartMetricStreamsResult, context);
  const response: StartMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryStopMetricStreamsCommand
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
  contents = de_StopMetricStreamsOutput(data.StopMetricStreamsResult, context);
  const response: StopMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTagResourceCommand
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
  contents = de_TagResourceOutput(data.TagResourceResult, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUntagResourceCommand
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
  contents = de_UntagResourceOutput(data.UntagResourceResult, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_queryCommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.cloudwatch#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "LimitExceeded":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    case "InvalidParameterInput":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      throw await de_DashboardInvalidInputErrorRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InvalidFormat":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      throw await de_InvalidFormatFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_queryConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConcurrentModificationException(body.Error, context);
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ConflictException(body.Error, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryDashboardInvalidInputErrorRes
 */
const de_DashboardInvalidInputErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardInvalidInputError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DashboardInvalidInputError(body.Error, context);
  const exception = new DashboardInvalidInputError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInternalServiceFaultRes
 */
const de_InternalServiceFaultRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InternalServiceFault(body.Error, context);
  const exception = new InternalServiceFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidFormatFaultRes
 */
const de_InvalidFormatFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidFormatFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidFormatFault(body.Error, context);
  const exception = new InvalidFormatFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidNextTokenRes
 */
const de_InvalidNextTokenRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidNextToken(body.Error, context);
  const exception = new InvalidNextToken({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterCombinationExceptionRes
 */
const de_InvalidParameterCombinationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterCombinationException(body.Error, context);
  const exception = new InvalidParameterCombinationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryInvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidParameterValueException(body.Error, context);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededException(body.Error, context);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryLimitExceededFaultRes
 */
const de_LimitExceededFaultRes = async (parsedOutput: any, context: __SerdeContext): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = de_LimitExceededFault(body.Error, context);
  const exception = new LimitExceededFault({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryMissingRequiredParameterExceptionRes
 */
const de_MissingRequiredParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_MissingRequiredParameterException(body.Error, context);
  const exception = new MissingRequiredParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFound(body.Error, context);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_queryResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body.Error, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_queryAlarmNames
 */
const se_AlarmNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAlarmTypes
 */
const se_AlarmTypes = (input: AlarmType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAnomalyDetectorConfiguration
 */
const se_AnomalyDetectorConfiguration = (input: AnomalyDetectorConfiguration, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ETR] != null) {
    const memberEntries = se_AnomalyDetectorExcludedTimeRanges(input[_ETR], context);
    if (input[_ETR]?.length === 0) {
      entries.ExcludedTimeRanges = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedTimeRanges.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MT] != null) {
    entries[_MT] = input[_MT];
  }
  return entries;
};

/**
 * serializeAws_queryAnomalyDetectorExcludedTimeRanges
 */
const se_AnomalyDetectorExcludedTimeRanges = (input: Range[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Range(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryAnomalyDetectorTypes
 */
const se_AnomalyDetectorTypes = (input: AnomalyDetectorType[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryCounts
 */
const se_Counts = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = __serializeFloat(entry);
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDashboardNames
 */
const se_DashboardNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAlarmsInput
 */
const se_DeleteAlarmsInput = (input: DeleteAlarmsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    const memberEntries = se_AlarmNames(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.AlarmNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteAnomalyDetectorInput
 */
const se_DeleteAnomalyDetectorInput = (input: DeleteAnomalyDetectorInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_SMAD] != null) {
    const memberEntries = se_SingleMetricAnomalyDetector(input[_SMAD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SingleMetricAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MMAD] != null) {
    const memberEntries = se_MetricMathAnomalyDetector(input[_MMAD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricMathAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteDashboardsInput
 */
const se_DeleteDashboardsInput = (input: DeleteDashboardsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DN] != null) {
    const memberEntries = se_DashboardNames(input[_DN], context);
    if (input[_DN]?.length === 0) {
      entries.DashboardNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DashboardNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteInsightRulesInput
 */
const se_DeleteInsightRulesInput = (input: DeleteInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    const memberEntries = se_InsightRuleNames(input[_RN], context);
    if (input[_RN]?.length === 0) {
      entries.RuleNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDeleteMetricStreamInput
 */
const se_DeleteMetricStreamInput = (input: DeleteMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmContributorsInput
 */
const se_DescribeAlarmContributorsInput = (input: DescribeAlarmContributorsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANl] != null) {
    entries[_ANl] = input[_ANl];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmHistoryInput
 */
const se_DescribeAlarmHistoryInput = (input: DescribeAlarmHistoryInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANl] != null) {
    entries[_ANl] = input[_ANl];
  }
  if (input[_ACI] != null) {
    entries[_ACI] = input[_ACI];
  }
  if (input[_AT] != null) {
    const memberEntries = se_AlarmTypes(input[_AT], context);
    if (input[_AT]?.length === 0) {
      entries.AlarmTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_HIT] != null) {
    entries[_HIT] = input[_HIT];
  }
  if (input[_SD] != null) {
    entries[_SD] = __serializeDateTime(input[_SD]);
  }
  if (input[_ED] != null) {
    entries[_ED] = __serializeDateTime(input[_ED]);
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SB] != null) {
    entries[_SB] = input[_SB];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmsForMetricInput
 */
const se_DescribeAlarmsForMetricInput = (input: DescribeAlarmsForMetricInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_ES] != null) {
    entries[_ES] = input[_ES];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmsInput
 */
const se_DescribeAlarmsInput = (input: DescribeAlarmsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    const memberEntries = se_AlarmNames(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.AlarmNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ANP] != null) {
    entries[_ANP] = input[_ANP];
  }
  if (input[_AT] != null) {
    const memberEntries = se_AlarmTypes(input[_AT], context);
    if (input[_AT]?.length === 0) {
      entries.AlarmTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_COAN] != null) {
    entries[_COAN] = input[_COAN];
  }
  if (input[_POAN] != null) {
    entries[_POAN] = input[_POAN];
  }
  if (input[_SV] != null) {
    entries[_SV] = input[_SV];
  }
  if (input[_AP] != null) {
    entries[_AP] = input[_AP];
  }
  if (input[_MR] != null) {
    entries[_MR] = input[_MR];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAnomalyDetectorsInput
 */
const se_DescribeAnomalyDetectorsInput = (input: DescribeAnomalyDetectorsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ADT] != null) {
    const memberEntries = se_AnomalyDetectorTypes(input[_ADT], context);
    if (input[_ADT]?.length === 0) {
      entries.AnomalyDetectorTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AnomalyDetectorTypes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDescribeInsightRulesInput
 */
const se_DescribeInsightRulesInput = (input: DescribeInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  return entries;
};

/**
 * serializeAws_queryDimension
 */
const se_Dimension = (input: Dimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryDimensionFilter
 */
const se_DimensionFilter = (input: DimensionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryDimensionFilters
 */
const se_DimensionFilters = (input: DimensionFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_DimensionFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDimensions
 */
const se_Dimensions = (input: Dimension[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Dimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryDisableAlarmActionsInput
 */
const se_DisableAlarmActionsInput = (input: DisableAlarmActionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    const memberEntries = se_AlarmNames(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.AlarmNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryDisableInsightRulesInput
 */
const se_DisableInsightRulesInput = (input: DisableInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    const memberEntries = se_InsightRuleNames(input[_RN], context);
    if (input[_RN]?.length === 0) {
      entries.RuleNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEnableAlarmActionsInput
 */
const se_EnableAlarmActionsInput = (input: EnableAlarmActionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AN] != null) {
    const memberEntries = se_AlarmNames(input[_AN], context);
    if (input[_AN]?.length === 0) {
      entries.AlarmNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEnableInsightRulesInput
 */
const se_EnableInsightRulesInput = (input: EnableInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RN] != null) {
    const memberEntries = se_InsightRuleNames(input[_RN], context);
    if (input[_RN]?.length === 0) {
      entries.RuleNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEntity
 */
const se_Entity = (input: Entity, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_KA] != null) {
    const memberEntries = se_EntityKeyAttributesMap(input[_KA], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `KeyAttributes.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_At] != null) {
    const memberEntries = se_EntityAttributesMap(input[_At], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Attributes.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEntityAttributesMap
 */
const se_EntityAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryEntityKeyAttributesMap
 */
const se_EntityKeyAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  Object.keys(input)
    .filter((key) => input[key as keyof typeof input] != null)
    .forEach((key) => {
      entries[`entry.${counter}.key`] = key;
      entries[`entry.${counter}.value`] = input[key as keyof typeof input]!;
      counter++;
    });
  return entries;
};

/**
 * serializeAws_queryEntityMetricData
 */
const se_EntityMetricData = (input: EntityMetricData, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_E] != null) {
    const memberEntries = se_Entity(input[_E], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Entity.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MD] != null) {
    const memberEntries = se_MetricData(input[_MD], context);
    if (input[_MD]?.length === 0) {
      entries.MetricData = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricData.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryEntityMetricDataList
 */
const se_EntityMetricDataList = (input: EntityMetricData[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_EntityMetricData(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryExtendedStatistics
 */
const se_ExtendedStatistics = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryGetDashboardInput
 */
const se_GetDashboardInput = (input: GetDashboardInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DNa] != null) {
    entries[_DNa] = input[_DNa];
  }
  return entries;
};

/**
 * serializeAws_queryGetInsightRuleReportInput
 */
const se_GetInsightRuleReportInput = (input: GetInsightRuleReportInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNu] != null) {
    entries[_RNu] = input[_RNu];
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_MCC] != null) {
    entries[_MCC] = input[_MCC];
  }
  if (input[_M] != null) {
    const memberEntries = se_InsightRuleMetricList(input[_M], context);
    if (input[_M]?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OB] != null) {
    entries[_OB] = input[_OB];
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricDataInput
 */
const se_GetMetricDataInput = (input: GetMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MDQ] != null) {
    const memberEntries = se_MetricDataQueries(input[_MDQ], context);
    if (input[_MDQ]?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_SB] != null) {
    entries[_SB] = input[_SB];
  }
  if (input[_MDa] != null) {
    entries[_MDa] = input[_MDa];
  }
  if (input[_LO] != null) {
    const memberEntries = se_LabelOptions(input[_LO], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LabelOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricStatisticsInput
 */
const se_GetMetricStatisticsInput = (input: GetMetricStatisticsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_Sta] != null) {
    const memberEntries = se_Statistics(input[_Sta], context);
    if (input[_Sta]?.length === 0) {
      entries.Statistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Statistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ESx] != null) {
    const memberEntries = se_ExtendedStatistics(input[_ESx], context);
    if (input[_ESx]?.length === 0) {
      entries.ExtendedStatistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtendedStatistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricStreamInput
 */
const se_GetMetricStreamInput = (input: GetMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricWidgetImageInput
 */
const se_GetMetricWidgetImageInput = (input: GetMetricWidgetImageInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MW] != null) {
    entries[_MW] = input[_MW];
  }
  if (input[_OF] != null) {
    entries[_OF] = input[_OF];
  }
  return entries;
};

/**
 * serializeAws_queryInsightRuleMetricList
 */
const se_InsightRuleMetricList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryInsightRuleNames
 */
const se_InsightRuleNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryLabelOptions
 */
const se_LabelOptions = (input: LabelOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_T] != null) {
    entries[_T] = input[_T];
  }
  return entries;
};

/**
 * serializeAws_queryListDashboardsInput
 */
const se_ListDashboardsInput = (input: ListDashboardsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DNP] != null) {
    entries[_DNP] = input[_DNP];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  return entries;
};

/**
 * serializeAws_queryListManagedInsightRulesInput
 */
const se_ListManagedInsightRulesInput = (input: ListManagedInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  return entries;
};

/**
 * serializeAws_queryListMetricsInput
 */
const se_ListMetricsInput = (input: ListMetricsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_DimensionFilters(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_RA] != null) {
    entries[_RA] = input[_RA];
  }
  if (input[_ILA] != null) {
    entries[_ILA] = input[_ILA];
  }
  if (input[_OA] != null) {
    entries[_OA] = input[_OA];
  }
  return entries;
};

/**
 * serializeAws_queryListMetricStreamsInput
 */
const se_ListMetricStreamsInput = (input: ListMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_NT] != null) {
    entries[_NT] = input[_NT];
  }
  if (input[_MRa] != null) {
    entries[_MRa] = input[_MRa];
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  return entries;
};

/**
 * serializeAws_queryManagedRule
 */
const se_ManagedRule = (input: ManagedRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_TN] != null) {
    entries[_TN] = input[_TN];
  }
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryManagedRules
 */
const se_ManagedRules = (input: ManagedRule[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_ManagedRule(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetric
 */
const se_Metric = (input: Metric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMetricCharacteristics
 */
const se_MetricCharacteristics = (input: MetricCharacteristics, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_PS] != null) {
    entries[_PS] = input[_PS];
  }
  return entries;
};

/**
 * serializeAws_queryMetricData
 */
const se_MetricData = (input: MetricDatum[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricDatum(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDataQueries
 */
const se_MetricDataQueries = (input: MetricDataQuery[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDataQuery
 */
const se_MetricDataQuery = (input: MetricDataQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_I] != null) {
    entries[_I] = input[_I];
  }
  if (input[_MS] != null) {
    const memberEntries = se_MetricStat(input[_MS], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ex] != null) {
    entries[_Ex] = input[_Ex];
  }
  if (input[_L] != null) {
    entries[_L] = input[_L];
  }
  if (input[_RD] != null) {
    entries[_RD] = input[_RD];
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  return entries;
};

/**
 * serializeAws_queryMetricDatum
 */
const se_MetricDatum = (input: MetricDatum, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ti] != null) {
    entries[_Ti] = __serializeDateTime(input[_Ti]);
  }
  if (input[_Va] != null) {
    entries[_Va] = __serializeFloat(input[_Va]);
  }
  if (input[_SVt] != null) {
    const memberEntries = se_StatisticSet(input[_SVt], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Val] != null) {
    const memberEntries = se_Values(input[_Val], context);
    if (input[_Val]?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_C] != null) {
    const memberEntries = se_Counts(input[_C], context);
    if (input[_C]?.length === 0) {
      entries.Counts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Counts.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  if (input[_SR] != null) {
    entries[_SR] = input[_SR];
  }
  return entries;
};

/**
 * serializeAws_queryMetricMathAnomalyDetector
 */
const se_MetricMathAnomalyDetector = (input: MetricMathAnomalyDetector, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MDQ] != null) {
    const memberEntries = se_MetricDataQueries(input[_MDQ], context);
    if (input[_MDQ]?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMetricStat
 */
const se_MetricStat = (input: MetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Me] != null) {
    const memberEntries = se_Metric(input[_Me], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamFilter
 */
const se_MetricStreamFilter = (input: MetricStreamFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MNe] != null) {
    const memberEntries = se_MetricStreamFilterMetricNames(input[_MNe], context);
    if (input[_MNe]?.length === 0) {
      entries.MetricNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamFilterMetricNames
 */
const se_MetricStreamFilterMetricNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamFilters
 */
const se_MetricStreamFilters = (input: MetricStreamFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricStreamFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamNames
 */
const se_MetricStreamNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamStatisticsAdditionalStatistics
 */
const se_MetricStreamStatisticsAdditionalStatistics = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamStatisticsConfiguration
 */
const se_MetricStreamStatisticsConfiguration = (
  input: MetricStreamStatisticsConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input[_IM] != null) {
    const memberEntries = se_MetricStreamStatisticsIncludeMetrics(input[_IM], context);
    if (input[_IM]?.length === 0) {
      entries.IncludeMetrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IncludeMetrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AS] != null) {
    const memberEntries = se_MetricStreamStatisticsAdditionalStatistics(input[_AS], context);
    if (input[_AS]?.length === 0) {
      entries.AdditionalStatistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AdditionalStatistics.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamStatisticsConfigurations
 */
const se_MetricStreamStatisticsConfigurations = (
  input: MetricStreamStatisticsConfiguration[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricStreamStatisticsConfiguration(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamStatisticsIncludeMetrics
 */
const se_MetricStreamStatisticsIncludeMetrics = (
  input: MetricStreamStatisticsMetric[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_MetricStreamStatisticsMetric(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamStatisticsMetric
 */
const se_MetricStreamStatisticsMetric = (input: MetricStreamStatisticsMetric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  return entries;
};

/**
 * serializeAws_queryPutAnomalyDetectorInput
 */
const se_PutAnomalyDetectorInput = (input: PutAnomalyDetectorInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  if (input[_Co] != null) {
    const memberEntries = se_AnomalyDetectorConfiguration(input[_Co], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Configuration.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MC] != null) {
    const memberEntries = se_MetricCharacteristics(input[_MC], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricCharacteristics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SMAD] != null) {
    const memberEntries = se_SingleMetricAnomalyDetector(input[_SMAD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SingleMetricAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MMAD] != null) {
    const memberEntries = se_MetricMathAnomalyDetector(input[_MMAD], context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricMathAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPutCompositeAlarmInput
 */
const se_PutCompositeAlarmInput = (input: PutCompositeAlarmInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AE] != null) {
    entries[_AE] = input[_AE];
  }
  if (input[_AA] != null) {
    const memberEntries = se_ResourceList(input[_AA], context);
    if (input[_AA]?.length === 0) {
      entries.AlarmActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AD] != null) {
    entries[_AD] = input[_AD];
  }
  if (input[_ANl] != null) {
    entries[_ANl] = input[_ANl];
  }
  if (input[_AR] != null) {
    entries[_AR] = input[_AR];
  }
  if (input[_IDA] != null) {
    const memberEntries = se_ResourceList(input[_IDA], context);
    if (input[_IDA]?.length === 0) {
      entries.InsufficientDataActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_OKA] != null) {
    const memberEntries = se_ResourceList(input[_OKA], context);
    if (input[_OKA]?.length === 0) {
      entries.OKActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ASc] != null) {
    entries[_ASc] = input[_ASc];
  }
  if (input[_ASWP] != null) {
    entries[_ASWP] = input[_ASWP];
  }
  if (input[_ASEP] != null) {
    entries[_ASEP] = input[_ASEP];
  }
  return entries;
};

/**
 * serializeAws_queryPutDashboardInput
 */
const se_PutDashboardInput = (input: PutDashboardInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_DNa] != null) {
    entries[_DNa] = input[_DNa];
  }
  if (input[_DB] != null) {
    entries[_DB] = input[_DB];
  }
  return entries;
};

/**
 * serializeAws_queryPutInsightRuleInput
 */
const se_PutInsightRuleInput = (input: PutInsightRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RNu] != null) {
    entries[_RNu] = input[_RNu];
  }
  if (input[_RS] != null) {
    entries[_RS] = input[_RS];
  }
  if (input[_RDu] != null) {
    entries[_RDu] = input[_RDu];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AOTL] != null) {
    entries[_AOTL] = input[_AOTL];
  }
  return entries;
};

/**
 * serializeAws_queryPutManagedInsightRulesInput
 */
const se_PutManagedInsightRulesInput = (input: PutManagedInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_MRan] != null) {
    const memberEntries = se_ManagedRules(input[_MRan], context);
    if (input[_MRan]?.length === 0) {
      entries.ManagedRules = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ManagedRules.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryPutMetricAlarmInput
 */
const se_PutMetricAlarmInput = (input: PutMetricAlarmInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANl] != null) {
    entries[_ANl] = input[_ANl];
  }
  if (input[_AD] != null) {
    entries[_AD] = input[_AD];
  }
  if (input[_AE] != null) {
    entries[_AE] = input[_AE];
  }
  if (input[_OKA] != null) {
    const memberEntries = se_ResourceList(input[_OKA], context);
    if (input[_OKA]?.length === 0) {
      entries.OKActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_AA] != null) {
    const memberEntries = se_ResourceList(input[_AA], context);
    if (input[_AA]?.length === 0) {
      entries.AlarmActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_IDA] != null) {
    const memberEntries = se_ResourceList(input[_IDA], context);
    if (input[_IDA]?.length === 0) {
      entries.InsufficientDataActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_St] != null) {
    entries[_St] = input[_St];
  }
  if (input[_ES] != null) {
    entries[_ES] = input[_ES];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_P] != null) {
    entries[_P] = input[_P];
  }
  if (input[_U] != null) {
    entries[_U] = input[_U];
  }
  if (input[_EP] != null) {
    entries[_EP] = input[_EP];
  }
  if (input[_DTA] != null) {
    entries[_DTA] = input[_DTA];
  }
  if (input[_Th] != null) {
    entries[_Th] = __serializeFloat(input[_Th]);
  }
  if (input[_CO] != null) {
    entries[_CO] = input[_CO];
  }
  if (input[_TMD] != null) {
    entries[_TMD] = input[_TMD];
  }
  if (input[_ELSCP] != null) {
    entries[_ELSCP] = input[_ELSCP];
  }
  if (input[_M] != null) {
    const memberEntries = se_MetricDataQueries(input[_M], context);
    if (input[_M]?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_TMI] != null) {
    entries[_TMI] = input[_TMI];
  }
  return entries;
};

/**
 * serializeAws_queryPutMetricDataInput
 */
const se_PutMetricDataInput = (input: PutMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MD] != null) {
    const memberEntries = se_MetricData(input[_MD], context);
    if (input[_MD]?.length === 0) {
      entries.MetricData = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricData.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EMD] != null) {
    const memberEntries = se_EntityMetricDataList(input[_EMD], context);
    if (input[_EMD]?.length === 0) {
      entries.EntityMetricData = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `EntityMetricData.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SEV] != null) {
    entries[_SEV] = input[_SEV];
  }
  return entries;
};

/**
 * serializeAws_queryPutMetricStreamInput
 */
const se_PutMetricStreamInput = (input: PutMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Na] != null) {
    entries[_Na] = input[_Na];
  }
  if (input[_IF] != null) {
    const memberEntries = se_MetricStreamFilters(input[_IF], context);
    if (input[_IF]?.length === 0) {
      entries.IncludeFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IncludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_EF] != null) {
    const memberEntries = se_MetricStreamFilters(input[_EF], context);
    if (input[_EF]?.length === 0) {
      entries.ExcludeFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_FA] != null) {
    entries[_FA] = input[_FA];
  }
  if (input[_RAo] != null) {
    entries[_RAo] = input[_RAo];
  }
  if (input[_OF] != null) {
    entries[_OF] = input[_OF];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_SC] != null) {
    const memberEntries = se_MetricStreamStatisticsConfigurations(input[_SC], context);
    if (input[_SC]?.length === 0) {
      entries.StatisticsConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticsConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_ILAM] != null) {
    entries[_ILAM] = input[_ILAM];
  }
  return entries;
};

/**
 * serializeAws_queryRange
 */
const se_Range = (input: Range, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ST] != null) {
    entries[_ST] = __serializeDateTime(input[_ST]);
  }
  if (input[_ET] != null) {
    entries[_ET] = __serializeDateTime(input[_ET]);
  }
  return entries;
};

/**
 * serializeAws_queryResourceList
 */
const se_ResourceList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_querySetAlarmStateInput
 */
const se_SetAlarmStateInput = (input: SetAlarmStateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_ANl] != null) {
    entries[_ANl] = input[_ANl];
  }
  if (input[_SV] != null) {
    entries[_SV] = input[_SV];
  }
  if (input[_SRt] != null) {
    entries[_SRt] = input[_SRt];
  }
  if (input[_SRD] != null) {
    entries[_SRD] = input[_SRD];
  }
  return entries;
};

/**
 * serializeAws_querySingleMetricAnomalyDetector
 */
const se_SingleMetricAnomalyDetector = (input: SingleMetricAnomalyDetector, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_AI] != null) {
    entries[_AI] = input[_AI];
  }
  if (input[_N] != null) {
    entries[_N] = input[_N];
  }
  if (input[_MN] != null) {
    entries[_MN] = input[_MN];
  }
  if (input[_D] != null) {
    const memberEntries = se_Dimensions(input[_D], context);
    if (input[_D]?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input[_S] != null) {
    entries[_S] = input[_S];
  }
  return entries;
};

/**
 * serializeAws_queryStartMetricStreamsInput
 */
const se_StartMetricStreamsInput = (input: StartMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Nam] != null) {
    const memberEntries = se_MetricStreamNames(input[_Nam], context);
    if (input[_Nam]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryStatistics
 */
const se_Statistics = (input: Statistic[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryStatisticSet
 */
const se_StatisticSet = (input: StatisticSet, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_SCa] != null) {
    entries[_SCa] = __serializeFloat(input[_SCa]);
  }
  if (input[_Su] != null) {
    entries[_Su] = __serializeFloat(input[_Su]);
  }
  if (input[_Mi] != null) {
    entries[_Mi] = __serializeFloat(input[_Mi]);
  }
  if (input[_Ma] != null) {
    entries[_Ma] = __serializeFloat(input[_Ma]);
  }
  return entries;
};

/**
 * serializeAws_queryStopMetricStreamsInput
 */
const se_StopMetricStreamsInput = (input: StopMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_Nam] != null) {
    const memberEntries = se_MetricStreamNames(input[_Nam], context);
    if (input[_Nam]?.length === 0) {
      entries.Names = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryTag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_K] != null) {
    entries[_K] = input[_K];
  }
  if (input[_Va] != null) {
    entries[_Va] = input[_Va];
  }
  return entries;
};

/**
 * serializeAws_queryTagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = se_Tag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

/**
 * serializeAws_queryTagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_Ta] != null) {
    const memberEntries = se_TagList(input[_Ta], context);
    if (input[_Ta]?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryUntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input[_RARN] != null) {
    entries[_RARN] = input[_RARN];
  }
  if (input[_TK] != null) {
    const memberEntries = se_TagKeyList(input[_TK], context);
    if (input[_TK]?.length === 0) {
      entries.TagKeys = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

/**
 * serializeAws_queryValues
 */
const se_Values = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (const entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = __serializeFloat(entry);
    counter++;
  }
  return entries;
};

/**
 * deserializeAws_queryAlarmContributor
 */
const de_AlarmContributor = (output: any, context: __SerdeContext): AlarmContributor => {
  const contents: any = {};
  if (output[_CI] != null) {
    contents[_CI] = __expectString(output[_CI]);
  }
  if (String(output.ContributorAttributes).trim() === "") {
    contents[_CA] = {};
  } else if (output[_CA] != null && output[_CA][_e] != null) {
    contents[_CA] = de_ContributorAttributes(__getArrayIfSingleItem(output[_CA][_e]), context);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_STT] != null) {
    contents[_STT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STT]));
  }
  return contents;
};

/**
 * deserializeAws_queryAlarmContributors
 */
const de_AlarmContributors = (output: any, context: __SerdeContext): AlarmContributor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmContributor(entry, context);
    });
};

/**
 * deserializeAws_queryAlarmHistoryItem
 */
const de_AlarmHistoryItem = (output: any, context: __SerdeContext): AlarmHistoryItem => {
  const contents: any = {};
  if (output[_ANl] != null) {
    contents[_ANl] = __expectString(output[_ANl]);
  }
  if (output[_ACI] != null) {
    contents[_ACI] = __expectString(output[_ACI]);
  }
  if (output[_ATl] != null) {
    contents[_ATl] = __expectString(output[_ATl]);
  }
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_HIT] != null) {
    contents[_HIT] = __expectString(output[_HIT]);
  }
  if (output[_HS] != null) {
    contents[_HS] = __expectString(output[_HS]);
  }
  if (output[_HD] != null) {
    contents[_HD] = __expectString(output[_HD]);
  }
  if (String(output.AlarmContributorAttributes).trim() === "") {
    contents[_ACA] = {};
  } else if (output[_ACA] != null && output[_ACA][_e] != null) {
    contents[_ACA] = de_ContributorAttributes(__getArrayIfSingleItem(output[_ACA][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryAlarmHistoryItems
 */
const de_AlarmHistoryItems = (output: any, context: __SerdeContext): AlarmHistoryItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmHistoryItem(entry, context);
    });
};

/**
 * deserializeAws_queryAnomalyDetector
 */
const de_AnomalyDetector = (output: any, context: __SerdeContext): AnomalyDetector => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (String(output.Dimensions).trim() === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_m] != null) {
    contents[_D] = de_Dimensions(__getArrayIfSingleItem(output[_D][_m]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_Co] != null) {
    contents[_Co] = de_AnomalyDetectorConfiguration(output[_Co], context);
  }
  if (output[_SV] != null) {
    contents[_SV] = __expectString(output[_SV]);
  }
  if (output[_MC] != null) {
    contents[_MC] = de_MetricCharacteristics(output[_MC], context);
  }
  if (output[_SMAD] != null) {
    contents[_SMAD] = de_SingleMetricAnomalyDetector(output[_SMAD], context);
  }
  if (output[_MMAD] != null) {
    contents[_MMAD] = de_MetricMathAnomalyDetector(output[_MMAD], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnomalyDetectorConfiguration
 */
const de_AnomalyDetectorConfiguration = (output: any, context: __SerdeContext): AnomalyDetectorConfiguration => {
  const contents: any = {};
  if (String(output.ExcludedTimeRanges).trim() === "") {
    contents[_ETR] = [];
  } else if (output[_ETR] != null && output[_ETR][_m] != null) {
    contents[_ETR] = de_AnomalyDetectorExcludedTimeRanges(__getArrayIfSingleItem(output[_ETR][_m]), context);
  }
  if (output[_MT] != null) {
    contents[_MT] = __expectString(output[_MT]);
  }
  return contents;
};

/**
 * deserializeAws_queryAnomalyDetectorExcludedTimeRanges
 */
const de_AnomalyDetectorExcludedTimeRanges = (output: any, context: __SerdeContext): Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Range(entry, context);
    });
};

/**
 * deserializeAws_queryAnomalyDetectors
 */
const de_AnomalyDetectors = (output: any, context: __SerdeContext): AnomalyDetector[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnomalyDetector(entry, context);
    });
};

/**
 * deserializeAws_queryBatchFailures
 */
const de_BatchFailures = (output: any, context: __SerdeContext): PartialFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PartialFailure(entry, context);
    });
};

/**
 * deserializeAws_queryCompositeAlarm
 */
const de_CompositeAlarm = (output: any, context: __SerdeContext): CompositeAlarm => {
  const contents: any = {};
  if (output[_AE] != null) {
    contents[_AE] = __parseBoolean(output[_AE]);
  }
  if (String(output.AlarmActions).trim() === "") {
    contents[_AA] = [];
  } else if (output[_AA] != null && output[_AA][_m] != null) {
    contents[_AA] = de_ResourceList(__getArrayIfSingleItem(output[_AA][_m]), context);
  }
  if (output[_AAl] != null) {
    contents[_AAl] = __expectString(output[_AAl]);
  }
  if (output[_ACUT] != null) {
    contents[_ACUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ACUT]));
  }
  if (output[_AD] != null) {
    contents[_AD] = __expectString(output[_AD]);
  }
  if (output[_ANl] != null) {
    contents[_ANl] = __expectString(output[_ANl]);
  }
  if (output[_AR] != null) {
    contents[_AR] = __expectString(output[_AR]);
  }
  if (String(output.InsufficientDataActions).trim() === "") {
    contents[_IDA] = [];
  } else if (output[_IDA] != null && output[_IDA][_m] != null) {
    contents[_IDA] = de_ResourceList(__getArrayIfSingleItem(output[_IDA][_m]), context);
  }
  if (String(output.OKActions).trim() === "") {
    contents[_OKA] = [];
  } else if (output[_OKA] != null && output[_OKA][_m] != null) {
    contents[_OKA] = de_ResourceList(__getArrayIfSingleItem(output[_OKA][_m]), context);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_SRD] != null) {
    contents[_SRD] = __expectString(output[_SRD]);
  }
  if (output[_SUT] != null) {
    contents[_SUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SUT]));
  }
  if (output[_SV] != null) {
    contents[_SV] = __expectString(output[_SV]);
  }
  if (output[_STT] != null) {
    contents[_STT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STT]));
  }
  if (output[_ASB] != null) {
    contents[_ASB] = __expectString(output[_ASB]);
  }
  if (output[_ASR] != null) {
    contents[_ASR] = __expectString(output[_ASR]);
  }
  if (output[_ASc] != null) {
    contents[_ASc] = __expectString(output[_ASc]);
  }
  if (output[_ASWP] != null) {
    contents[_ASWP] = __strictParseInt32(output[_ASWP]) as number;
  }
  if (output[_ASEP] != null) {
    contents[_ASEP] = __strictParseInt32(output[_ASEP]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryCompositeAlarms
 */
const de_CompositeAlarms = (output: any, context: __SerdeContext): CompositeAlarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CompositeAlarm(entry, context);
    });
};

/**
 * deserializeAws_queryConcurrentModificationException
 */
const de_ConcurrentModificationException = (output: any, context: __SerdeContext): ConcurrentModificationException => {
  const contents: any = {};
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_queryConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  const contents: any = {};
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_queryContributorAttributes
 */
const de_ContributorAttributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __expectString(pair["value"]) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryDashboardEntries
 */
const de_DashboardEntries = (output: any, context: __SerdeContext): DashboardEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardEntry(entry, context);
    });
};

/**
 * deserializeAws_queryDashboardEntry
 */
const de_DashboardEntry = (output: any, context: __SerdeContext): DashboardEntry => {
  const contents: any = {};
  if (output[_DNa] != null) {
    contents[_DNa] = __expectString(output[_DNa]);
  }
  if (output[_DAa] != null) {
    contents[_DAa] = __expectString(output[_DAa]);
  }
  if (output[_LMa] != null) {
    contents[_LMa] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LMa]));
  }
  if (output[_Si] != null) {
    contents[_Si] = __strictParseLong(output[_Si]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardInvalidInputError
 */
const de_DashboardInvalidInputError = (output: any, context: __SerdeContext): DashboardInvalidInputError => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  if (String(output.dashboardValidationMessages).trim() === "") {
    contents[_dVM] = [];
  } else if (output[_dVM] != null && output[_dVM][_m] != null) {
    contents[_dVM] = de_DashboardValidationMessages(__getArrayIfSingleItem(output[_dVM][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardValidationMessage
 */
const de_DashboardValidationMessage = (output: any, context: __SerdeContext): DashboardValidationMessage => {
  const contents: any = {};
  if (output[_DP] != null) {
    contents[_DP] = __expectString(output[_DP]);
  }
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardValidationMessages
 */
const de_DashboardValidationMessages = (output: any, context: __SerdeContext): DashboardValidationMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DashboardValidationMessage(entry, context);
    });
};

/**
 * deserializeAws_queryDatapoint
 */
const de_Datapoint = (output: any, context: __SerdeContext): Datapoint => {
  const contents: any = {};
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_SCa] != null) {
    contents[_SCa] = __strictParseFloat(output[_SCa]) as number;
  }
  if (output[_Av] != null) {
    contents[_Av] = __strictParseFloat(output[_Av]) as number;
  }
  if (output[_Su] != null) {
    contents[_Su] = __strictParseFloat(output[_Su]) as number;
  }
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseFloat(output[_Mi]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseFloat(output[_Ma]) as number;
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  if (String(output.ExtendedStatistics).trim() === "") {
    contents[_ESx] = {};
  } else if (output[_ESx] != null && output[_ESx][_e] != null) {
    contents[_ESx] = de_DatapointValueMap(__getArrayIfSingleItem(output[_ESx][_e]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDatapoints
 */
const de_Datapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Datapoint(entry, context);
    });
};

/**
 * deserializeAws_queryDatapointValueMap
 */
const de_DatapointValueMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    acc[pair["key"]] = __strictParseFloat(pair["value"]) as number;
    return acc;
  }, {});
};

/**
 * deserializeAws_queryDatapointValues
 */
const de_DatapointValues = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __strictParseFloat(entry) as number;
    });
};

/**
 * deserializeAws_queryDeleteAnomalyDetectorOutput
 */
const de_DeleteAnomalyDetectorOutput = (output: any, context: __SerdeContext): DeleteAnomalyDetectorOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteDashboardsOutput
 */
const de_DeleteDashboardsOutput = (output: any, context: __SerdeContext): DeleteDashboardsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDeleteInsightRulesOutput
 */
const de_DeleteInsightRulesOutput = (output: any, context: __SerdeContext): DeleteInsightRulesOutput => {
  const contents: any = {};
  if (String(output.Failures).trim() === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_m] != null) {
    contents[_F] = de_BatchFailures(__getArrayIfSingleItem(output[_F][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDeleteMetricStreamOutput
 */
const de_DeleteMetricStreamOutput = (output: any, context: __SerdeContext): DeleteMetricStreamOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmContributorsOutput
 */
const de_DescribeAlarmContributorsOutput = (output: any, context: __SerdeContext): DescribeAlarmContributorsOutput => {
  const contents: any = {};
  if (String(output.AlarmContributors).trim() === "") {
    contents[_AC] = [];
  } else if (output[_AC] != null && output[_AC][_m] != null) {
    contents[_AC] = de_AlarmContributors(__getArrayIfSingleItem(output[_AC][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmHistoryOutput
 */
const de_DescribeAlarmHistoryOutput = (output: any, context: __SerdeContext): DescribeAlarmHistoryOutput => {
  const contents: any = {};
  if (String(output.AlarmHistoryItems).trim() === "") {
    contents[_AHI] = [];
  } else if (output[_AHI] != null && output[_AHI][_m] != null) {
    contents[_AHI] = de_AlarmHistoryItems(__getArrayIfSingleItem(output[_AHI][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmsForMetricOutput
 */
const de_DescribeAlarmsForMetricOutput = (output: any, context: __SerdeContext): DescribeAlarmsForMetricOutput => {
  const contents: any = {};
  if (String(output.MetricAlarms).trim() === "") {
    contents[_MA] = [];
  } else if (output[_MA] != null && output[_MA][_m] != null) {
    contents[_MA] = de_MetricAlarms(__getArrayIfSingleItem(output[_MA][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmsOutput
 */
const de_DescribeAlarmsOutput = (output: any, context: __SerdeContext): DescribeAlarmsOutput => {
  const contents: any = {};
  if (String(output.CompositeAlarms).trim() === "") {
    contents[_CAo] = [];
  } else if (output[_CAo] != null && output[_CAo][_m] != null) {
    contents[_CAo] = de_CompositeAlarms(__getArrayIfSingleItem(output[_CAo][_m]), context);
  }
  if (String(output.MetricAlarms).trim() === "") {
    contents[_MA] = [];
  } else if (output[_MA] != null && output[_MA][_m] != null) {
    contents[_MA] = de_MetricAlarms(__getArrayIfSingleItem(output[_MA][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAnomalyDetectorsOutput
 */
const de_DescribeAnomalyDetectorsOutput = (output: any, context: __SerdeContext): DescribeAnomalyDetectorsOutput => {
  const contents: any = {};
  if (String(output.AnomalyDetectors).trim() === "") {
    contents[_ADn] = [];
  } else if (output[_ADn] != null && output[_ADn][_m] != null) {
    contents[_ADn] = de_AnomalyDetectors(__getArrayIfSingleItem(output[_ADn][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInsightRulesOutput
 */
const de_DescribeInsightRulesOutput = (output: any, context: __SerdeContext): DescribeInsightRulesOutput => {
  const contents: any = {};
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (String(output.InsightRules).trim() === "") {
    contents[_IR] = [];
  } else if (output[_IR] != null && output[_IR][_m] != null) {
    contents[_IR] = de_InsightRules(__getArrayIfSingleItem(output[_IR][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDimension
 */
const de_Dimension = (output: any, context: __SerdeContext): Dimension => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryDimensions
 */
const de_Dimensions = (output: any, context: __SerdeContext): Dimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Dimension(entry, context);
    });
};

/**
 * deserializeAws_queryDisableInsightRulesOutput
 */
const de_DisableInsightRulesOutput = (output: any, context: __SerdeContext): DisableInsightRulesOutput => {
  const contents: any = {};
  if (String(output.Failures).trim() === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_m] != null) {
    contents[_F] = de_BatchFailures(__getArrayIfSingleItem(output[_F][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnableInsightRulesOutput
 */
const de_EnableInsightRulesOutput = (output: any, context: __SerdeContext): EnableInsightRulesOutput => {
  const contents: any = {};
  if (String(output.Failures).trim() === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_m] != null) {
    contents[_F] = de_BatchFailures(__getArrayIfSingleItem(output[_F][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetDashboardOutput
 */
const de_GetDashboardOutput = (output: any, context: __SerdeContext): GetDashboardOutput => {
  const contents: any = {};
  if (output[_DAa] != null) {
    contents[_DAa] = __expectString(output[_DAa]);
  }
  if (output[_DB] != null) {
    contents[_DB] = __expectString(output[_DB]);
  }
  if (output[_DNa] != null) {
    contents[_DNa] = __expectString(output[_DNa]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetInsightRuleReportOutput
 */
const de_GetInsightRuleReportOutput = (output: any, context: __SerdeContext): GetInsightRuleReportOutput => {
  const contents: any = {};
  if (String(output.KeyLabels).trim() === "") {
    contents[_KL] = [];
  } else if (output[_KL] != null && output[_KL][_m] != null) {
    contents[_KL] = de_InsightRuleContributorKeyLabels(__getArrayIfSingleItem(output[_KL][_m]), context);
  }
  if (output[_ASg] != null) {
    contents[_ASg] = __expectString(output[_ASg]);
  }
  if (output[_AV] != null) {
    contents[_AV] = __strictParseFloat(output[_AV]) as number;
  }
  if (output[_AUC] != null) {
    contents[_AUC] = __strictParseLong(output[_AUC]) as number;
  }
  if (String(output.Contributors).trim() === "") {
    contents[_Con] = [];
  } else if (output[_Con] != null && output[_Con][_m] != null) {
    contents[_Con] = de_InsightRuleContributors(__getArrayIfSingleItem(output[_Con][_m]), context);
  }
  if (String(output.MetricDatapoints).trim() === "") {
    contents[_MDe] = [];
  } else if (output[_MDe] != null && output[_MDe][_m] != null) {
    contents[_MDe] = de_InsightRuleMetricDatapoints(__getArrayIfSingleItem(output[_MDe][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricDataOutput
 */
const de_GetMetricDataOutput = (output: any, context: __SerdeContext): GetMetricDataOutput => {
  const contents: any = {};
  if (String(output.MetricDataResults).trim() === "") {
    contents[_MDR] = [];
  } else if (output[_MDR] != null && output[_MDR][_m] != null) {
    contents[_MDR] = de_MetricDataResults(__getArrayIfSingleItem(output[_MDR][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (String(output.Messages).trim() === "") {
    contents[_Mess] = [];
  } else if (output[_Mess] != null && output[_Mess][_m] != null) {
    contents[_Mess] = de_MetricDataResultMessages(__getArrayIfSingleItem(output[_Mess][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricStatisticsOutput
 */
const de_GetMetricStatisticsOutput = (output: any, context: __SerdeContext): GetMetricStatisticsOutput => {
  const contents: any = {};
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  if (String(output.Datapoints).trim() === "") {
    contents[_Da] = [];
  } else if (output[_Da] != null && output[_Da][_m] != null) {
    contents[_Da] = de_Datapoints(__getArrayIfSingleItem(output[_Da][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricStreamOutput
 */
const de_GetMetricStreamOutput = (output: any, context: __SerdeContext): GetMetricStreamOutput => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (String(output.IncludeFilters).trim() === "") {
    contents[_IF] = [];
  } else if (output[_IF] != null && output[_IF][_m] != null) {
    contents[_IF] = de_MetricStreamFilters(__getArrayIfSingleItem(output[_IF][_m]), context);
  }
  if (String(output.ExcludeFilters).trim() === "") {
    contents[_EF] = [];
  } else if (output[_EF] != null && output[_EF][_m] != null) {
    contents[_EF] = de_MetricStreamFilters(__getArrayIfSingleItem(output[_EF][_m]), context);
  }
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_RAo] != null) {
    contents[_RAo] = __expectString(output[_RAo]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_LUD] != null) {
    contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
  }
  if (output[_OF] != null) {
    contents[_OF] = __expectString(output[_OF]);
  }
  if (String(output.StatisticsConfigurations).trim() === "") {
    contents[_SC] = [];
  } else if (output[_SC] != null && output[_SC][_m] != null) {
    contents[_SC] = de_MetricStreamStatisticsConfigurations(__getArrayIfSingleItem(output[_SC][_m]), context);
  }
  if (output[_ILAM] != null) {
    contents[_ILAM] = __parseBoolean(output[_ILAM]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricWidgetImageOutput
 */
const de_GetMetricWidgetImageOutput = (output: any, context: __SerdeContext): GetMetricWidgetImageOutput => {
  const contents: any = {};
  if (output[_MWI] != null) {
    contents[_MWI] = context.base64Decoder(output[_MWI]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRule
 */
const de_InsightRule = (output: any, context: __SerdeContext): InsightRule => {
  const contents: any = {};
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  if (output[_Sc] != null) {
    contents[_Sc] = __expectString(output[_Sc]);
  }
  if (output[_De] != null) {
    contents[_De] = __expectString(output[_De]);
  }
  if (output[_MRana] != null) {
    contents[_MRana] = __parseBoolean(output[_MRana]);
  }
  if (output[_AOTL] != null) {
    contents[_AOTL] = __parseBoolean(output[_AOTL]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleContributor
 */
const de_InsightRuleContributor = (output: any, context: __SerdeContext): InsightRuleContributor => {
  const contents: any = {};
  if (String(output.Keys).trim() === "") {
    contents[_Ke] = [];
  } else if (output[_Ke] != null && output[_Ke][_m] != null) {
    contents[_Ke] = de_InsightRuleContributorKeys(__getArrayIfSingleItem(output[_Ke][_m]), context);
  }
  if (output[_AAV] != null) {
    contents[_AAV] = __strictParseFloat(output[_AAV]) as number;
  }
  if (String(output.Datapoints).trim() === "") {
    contents[_Da] = [];
  } else if (output[_Da] != null && output[_Da][_m] != null) {
    contents[_Da] = de_InsightRuleContributorDatapoints(__getArrayIfSingleItem(output[_Da][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleContributorDatapoint
 */
const de_InsightRuleContributorDatapoint = (output: any, context: __SerdeContext): InsightRuleContributorDatapoint => {
  const contents: any = {};
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_AVp] != null) {
    contents[_AVp] = __strictParseFloat(output[_AVp]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleContributorDatapoints
 */
const de_InsightRuleContributorDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleContributorDatapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleContributorDatapoint(entry, context);
    });
};

/**
 * deserializeAws_queryInsightRuleContributorKeyLabels
 */
const de_InsightRuleContributorKeyLabels = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryInsightRuleContributorKeys
 */
const de_InsightRuleContributorKeys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryInsightRuleContributors
 */
const de_InsightRuleContributors = (output: any, context: __SerdeContext): InsightRuleContributor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleContributor(entry, context);
    });
};

/**
 * deserializeAws_queryInsightRuleMetricDatapoint
 */
const de_InsightRuleMetricDatapoint = (output: any, context: __SerdeContext): InsightRuleMetricDatapoint => {
  const contents: any = {};
  if (output[_Ti] != null) {
    contents[_Ti] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_Ti]));
  }
  if (output[_UC] != null) {
    contents[_UC] = __strictParseFloat(output[_UC]) as number;
  }
  if (output[_MCV] != null) {
    contents[_MCV] = __strictParseFloat(output[_MCV]) as number;
  }
  if (output[_SCa] != null) {
    contents[_SCa] = __strictParseFloat(output[_SCa]) as number;
  }
  if (output[_Av] != null) {
    contents[_Av] = __strictParseFloat(output[_Av]) as number;
  }
  if (output[_Su] != null) {
    contents[_Su] = __strictParseFloat(output[_Su]) as number;
  }
  if (output[_Mi] != null) {
    contents[_Mi] = __strictParseFloat(output[_Mi]) as number;
  }
  if (output[_Ma] != null) {
    contents[_Ma] = __strictParseFloat(output[_Ma]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleMetricDatapoints
 */
const de_InsightRuleMetricDatapoints = (output: any, context: __SerdeContext): InsightRuleMetricDatapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRuleMetricDatapoint(entry, context);
    });
};

/**
 * deserializeAws_queryInsightRules
 */
const de_InsightRules = (output: any, context: __SerdeContext): InsightRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InsightRule(entry, context);
    });
};

/**
 * deserializeAws_queryInternalServiceFault
 */
const de_InternalServiceFault = (output: any, context: __SerdeContext): InternalServiceFault => {
  const contents: any = {};
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidFormatFault
 */
const de_InvalidFormatFault = (output: any, context: __SerdeContext): InvalidFormatFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNextToken
 */
const de_InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterCombinationException
 */
const de_InvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryListDashboardsOutput
 */
const de_ListDashboardsOutput = (output: any, context: __SerdeContext): ListDashboardsOutput => {
  const contents: any = {};
  if (String(output.DashboardEntries).trim() === "") {
    contents[_DE] = [];
  } else if (output[_DE] != null && output[_DE][_m] != null) {
    contents[_DE] = de_DashboardEntries(__getArrayIfSingleItem(output[_DE][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListManagedInsightRulesOutput
 */
const de_ListManagedInsightRulesOutput = (output: any, context: __SerdeContext): ListManagedInsightRulesOutput => {
  const contents: any = {};
  if (String(output.ManagedRules).trim() === "") {
    contents[_MRan] = [];
  } else if (output[_MRan] != null && output[_MRan][_m] != null) {
    contents[_MRan] = de_ManagedRuleDescriptions(__getArrayIfSingleItem(output[_MRan][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMetricsOutput
 */
const de_ListMetricsOutput = (output: any, context: __SerdeContext): ListMetricsOutput => {
  const contents: any = {};
  if (String(output.Metrics).trim() === "") {
    contents[_M] = [];
  } else if (output[_M] != null && output[_M][_m] != null) {
    contents[_M] = de_Metrics(__getArrayIfSingleItem(output[_M][_m]), context);
  }
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (String(output.OwningAccounts).trim() === "") {
    contents[_OAw] = [];
  } else if (output[_OAw] != null && output[_OAw][_m] != null) {
    contents[_OAw] = de_OwningAccounts(__getArrayIfSingleItem(output[_OAw][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListMetricStreamsOutput
 */
const de_ListMetricStreamsOutput = (output: any, context: __SerdeContext): ListMetricStreamsOutput => {
  const contents: any = {};
  if (output[_NT] != null) {
    contents[_NT] = __expectString(output[_NT]);
  }
  if (String(output.Entries).trim() === "") {
    contents[_En] = [];
  } else if (output[_En] != null && output[_En][_m] != null) {
    contents[_En] = de_MetricStreamEntries(__getArrayIfSingleItem(output[_En][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  const contents: any = {};
  if (String(output.Tags).trim() === "") {
    contents[_Ta] = [];
  } else if (output[_Ta] != null && output[_Ta][_m] != null) {
    contents[_Ta] = de_TagList(__getArrayIfSingleItem(output[_Ta][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedRuleDescription
 */
const de_ManagedRuleDescription = (output: any, context: __SerdeContext): ManagedRuleDescription => {
  const contents: any = {};
  if (output[_TN] != null) {
    contents[_TN] = __expectString(output[_TN]);
  }
  if (output[_RARN] != null) {
    contents[_RARN] = __expectString(output[_RARN]);
  }
  if (output[_RS] != null) {
    contents[_RS] = de_ManagedRuleState(output[_RS], context);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedRuleDescriptions
 */
const de_ManagedRuleDescriptions = (output: any, context: __SerdeContext): ManagedRuleDescription[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ManagedRuleDescription(entry, context);
    });
};

/**
 * deserializeAws_queryManagedRuleState
 */
const de_ManagedRuleState = (output: any, context: __SerdeContext): ManagedRuleState => {
  const contents: any = {};
  if (output[_RNu] != null) {
    contents[_RNu] = __expectString(output[_RNu]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  return contents;
};

/**
 * deserializeAws_queryMessageData
 */
const de_MessageData = (output: any, context: __SerdeContext): MessageData => {
  const contents: any = {};
  if (output[_Cod] != null) {
    contents[_Cod] = __expectString(output[_Cod]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (String(output.Dimensions).trim() === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_m] != null) {
    contents[_D] = de_Dimensions(__getArrayIfSingleItem(output[_D][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricAlarm
 */
const de_MetricAlarm = (output: any, context: __SerdeContext): MetricAlarm => {
  const contents: any = {};
  if (output[_ANl] != null) {
    contents[_ANl] = __expectString(output[_ANl]);
  }
  if (output[_AAl] != null) {
    contents[_AAl] = __expectString(output[_AAl]);
  }
  if (output[_AD] != null) {
    contents[_AD] = __expectString(output[_AD]);
  }
  if (output[_ACUT] != null) {
    contents[_ACUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ACUT]));
  }
  if (output[_AE] != null) {
    contents[_AE] = __parseBoolean(output[_AE]);
  }
  if (String(output.OKActions).trim() === "") {
    contents[_OKA] = [];
  } else if (output[_OKA] != null && output[_OKA][_m] != null) {
    contents[_OKA] = de_ResourceList(__getArrayIfSingleItem(output[_OKA][_m]), context);
  }
  if (String(output.AlarmActions).trim() === "") {
    contents[_AA] = [];
  } else if (output[_AA] != null && output[_AA][_m] != null) {
    contents[_AA] = de_ResourceList(__getArrayIfSingleItem(output[_AA][_m]), context);
  }
  if (String(output.InsufficientDataActions).trim() === "") {
    contents[_IDA] = [];
  } else if (output[_IDA] != null && output[_IDA][_m] != null) {
    contents[_IDA] = de_ResourceList(__getArrayIfSingleItem(output[_IDA][_m]), context);
  }
  if (output[_SV] != null) {
    contents[_SV] = __expectString(output[_SV]);
  }
  if (output[_SRt] != null) {
    contents[_SRt] = __expectString(output[_SRt]);
  }
  if (output[_SRD] != null) {
    contents[_SRD] = __expectString(output[_SRD]);
  }
  if (output[_SUT] != null) {
    contents[_SUT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_SUT]));
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_St] != null) {
    contents[_St] = __expectString(output[_St]);
  }
  if (output[_ES] != null) {
    contents[_ES] = __expectString(output[_ES]);
  }
  if (String(output.Dimensions).trim() === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_m] != null) {
    contents[_D] = de_Dimensions(__getArrayIfSingleItem(output[_D][_m]), context);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  if (output[_EP] != null) {
    contents[_EP] = __strictParseInt32(output[_EP]) as number;
  }
  if (output[_DTA] != null) {
    contents[_DTA] = __strictParseInt32(output[_DTA]) as number;
  }
  if (output[_Th] != null) {
    contents[_Th] = __strictParseFloat(output[_Th]) as number;
  }
  if (output[_CO] != null) {
    contents[_CO] = __expectString(output[_CO]);
  }
  if (output[_TMD] != null) {
    contents[_TMD] = __expectString(output[_TMD]);
  }
  if (output[_ELSCP] != null) {
    contents[_ELSCP] = __expectString(output[_ELSCP]);
  }
  if (String(output.Metrics).trim() === "") {
    contents[_M] = [];
  } else if (output[_M] != null && output[_M][_m] != null) {
    contents[_M] = de_MetricDataQueries(__getArrayIfSingleItem(output[_M][_m]), context);
  }
  if (output[_TMI] != null) {
    contents[_TMI] = __expectString(output[_TMI]);
  }
  if (output[_ESv] != null) {
    contents[_ESv] = __expectString(output[_ESv]);
  }
  if (output[_STT] != null) {
    contents[_STT] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_STT]));
  }
  return contents;
};

/**
 * deserializeAws_queryMetricAlarms
 */
const de_MetricAlarms = (output: any, context: __SerdeContext): MetricAlarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricAlarm(entry, context);
    });
};

/**
 * deserializeAws_queryMetricCharacteristics
 */
const de_MetricCharacteristics = (output: any, context: __SerdeContext): MetricCharacteristics => {
  const contents: any = {};
  if (output[_PS] != null) {
    contents[_PS] = __parseBoolean(output[_PS]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDataQueries
 */
const de_MetricDataQueries = (output: any, context: __SerdeContext): MetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataQuery(entry, context);
    });
};

/**
 * deserializeAws_queryMetricDataQuery
 */
const de_MetricDataQuery = (output: any, context: __SerdeContext): MetricDataQuery => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_MS] != null) {
    contents[_MS] = de_MetricStat(output[_MS], context);
  }
  if (output[_Ex] != null) {
    contents[_Ex] = __expectString(output[_Ex]);
  }
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  if (output[_RD] != null) {
    contents[_RD] = __parseBoolean(output[_RD]);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDataResult
 */
const de_MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  const contents: any = {};
  if (output[_I] != null) {
    contents[_I] = __expectString(output[_I]);
  }
  if (output[_L] != null) {
    contents[_L] = __expectString(output[_L]);
  }
  if (String(output.Timestamps).trim() === "") {
    contents[_Tim] = [];
  } else if (output[_Tim] != null && output[_Tim][_m] != null) {
    contents[_Tim] = de_Timestamps(__getArrayIfSingleItem(output[_Tim][_m]), context);
  }
  if (String(output.Values).trim() === "") {
    contents[_Val] = [];
  } else if (output[_Val] != null && output[_Val][_m] != null) {
    contents[_Val] = de_DatapointValues(__getArrayIfSingleItem(output[_Val][_m]), context);
  }
  if (output[_SCt] != null) {
    contents[_SCt] = __expectString(output[_SCt]);
  }
  if (String(output.Messages).trim() === "") {
    contents[_Mess] = [];
  } else if (output[_Mess] != null && output[_Mess][_m] != null) {
    contents[_Mess] = de_MetricDataResultMessages(__getArrayIfSingleItem(output[_Mess][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDataResultMessages
 */
const de_MetricDataResultMessages = (output: any, context: __SerdeContext): MessageData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MessageData(entry, context);
    });
};

/**
 * deserializeAws_queryMetricDataResults
 */
const de_MetricDataResults = (output: any, context: __SerdeContext): MetricDataResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricDataResult(entry, context);
    });
};

/**
 * deserializeAws_queryMetricMathAnomalyDetector
 */
const de_MetricMathAnomalyDetector = (output: any, context: __SerdeContext): MetricMathAnomalyDetector => {
  const contents: any = {};
  if (String(output.MetricDataQueries).trim() === "") {
    contents[_MDQ] = [];
  } else if (output[_MDQ] != null && output[_MDQ][_m] != null) {
    contents[_MDQ] = de_MetricDataQueries(__getArrayIfSingleItem(output[_MDQ][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetrics
 */
const de_Metrics = (output: any, context: __SerdeContext): Metric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Metric(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStat
 */
const de_MetricStat = (output: any, context: __SerdeContext): MetricStat => {
  const contents: any = {};
  if (output[_Me] != null) {
    contents[_Me] = de_Metric(output[_Me], context);
  }
  if (output[_P] != null) {
    contents[_P] = __strictParseInt32(output[_P]) as number;
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  if (output[_U] != null) {
    contents[_U] = __expectString(output[_U]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricStreamEntries
 */
const de_MetricStreamEntries = (output: any, context: __SerdeContext): MetricStreamEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricStreamEntry(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStreamEntry
 */
const de_MetricStreamEntry = (output: any, context: __SerdeContext): MetricStreamEntry => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  if (output[_CD] != null) {
    contents[_CD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_CD]));
  }
  if (output[_LUD] != null) {
    contents[_LUD] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_LUD]));
  }
  if (output[_Na] != null) {
    contents[_Na] = __expectString(output[_Na]);
  }
  if (output[_FA] != null) {
    contents[_FA] = __expectString(output[_FA]);
  }
  if (output[_Stat] != null) {
    contents[_Stat] = __expectString(output[_Stat]);
  }
  if (output[_OF] != null) {
    contents[_OF] = __expectString(output[_OF]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricStreamFilter
 */
const de_MetricStreamFilter = (output: any, context: __SerdeContext): MetricStreamFilter => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (String(output.MetricNames).trim() === "") {
    contents[_MNe] = [];
  } else if (output[_MNe] != null && output[_MNe][_m] != null) {
    contents[_MNe] = de_MetricStreamFilterMetricNames(__getArrayIfSingleItem(output[_MNe][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricStreamFilterMetricNames
 */
const de_MetricStreamFilterMetricNames = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryMetricStreamFilters
 */
const de_MetricStreamFilters = (output: any, context: __SerdeContext): MetricStreamFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricStreamFilter(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStreamStatisticsAdditionalStatistics
 */
const de_MetricStreamStatisticsAdditionalStatistics = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryMetricStreamStatisticsConfiguration
 */
const de_MetricStreamStatisticsConfiguration = (
  output: any,
  context: __SerdeContext
): MetricStreamStatisticsConfiguration => {
  const contents: any = {};
  if (String(output.IncludeMetrics).trim() === "") {
    contents[_IM] = [];
  } else if (output[_IM] != null && output[_IM][_m] != null) {
    contents[_IM] = de_MetricStreamStatisticsIncludeMetrics(__getArrayIfSingleItem(output[_IM][_m]), context);
  }
  if (String(output.AdditionalStatistics).trim() === "") {
    contents[_AS] = [];
  } else if (output[_AS] != null && output[_AS][_m] != null) {
    contents[_AS] = de_MetricStreamStatisticsAdditionalStatistics(__getArrayIfSingleItem(output[_AS][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricStreamStatisticsConfigurations
 */
const de_MetricStreamStatisticsConfigurations = (
  output: any,
  context: __SerdeContext
): MetricStreamStatisticsConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricStreamStatisticsConfiguration(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStreamStatisticsIncludeMetrics
 */
const de_MetricStreamStatisticsIncludeMetrics = (
  output: any,
  context: __SerdeContext
): MetricStreamStatisticsMetric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricStreamStatisticsMetric(entry, context);
    });
};

/**
 * deserializeAws_queryMetricStreamStatisticsMetric
 */
const de_MetricStreamStatisticsMetric = (output: any, context: __SerdeContext): MetricStreamStatisticsMetric => {
  const contents: any = {};
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  return contents;
};

/**
 * deserializeAws_queryMissingRequiredParameterException
 */
const de_MissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryOwningAccounts
 */
const de_OwningAccounts = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryPartialFailure
 */
const de_PartialFailure = (output: any, context: __SerdeContext): PartialFailure => {
  const contents: any = {};
  if (output[_FR] != null) {
    contents[_FR] = __expectString(output[_FR]);
  }
  if (output[_ETx] != null) {
    contents[_ETx] = __expectString(output[_ETx]);
  }
  if (output[_FC] != null) {
    contents[_FC] = __expectString(output[_FC]);
  }
  if (output[_FD] != null) {
    contents[_FD] = __expectString(output[_FD]);
  }
  return contents;
};

/**
 * deserializeAws_queryPutAnomalyDetectorOutput
 */
const de_PutAnomalyDetectorOutput = (output: any, context: __SerdeContext): PutAnomalyDetectorOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPutDashboardOutput
 */
const de_PutDashboardOutput = (output: any, context: __SerdeContext): PutDashboardOutput => {
  const contents: any = {};
  if (String(output.DashboardValidationMessages).trim() === "") {
    contents[_DVM] = [];
  } else if (output[_DVM] != null && output[_DVM][_m] != null) {
    contents[_DVM] = de_DashboardValidationMessages(__getArrayIfSingleItem(output[_DVM][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPutInsightRuleOutput
 */
const de_PutInsightRuleOutput = (output: any, context: __SerdeContext): PutInsightRuleOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryPutManagedInsightRulesOutput
 */
const de_PutManagedInsightRulesOutput = (output: any, context: __SerdeContext): PutManagedInsightRulesOutput => {
  const contents: any = {};
  if (String(output.Failures).trim() === "") {
    contents[_F] = [];
  } else if (output[_F] != null && output[_F][_m] != null) {
    contents[_F] = de_BatchFailures(__getArrayIfSingleItem(output[_F][_m]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPutMetricStreamOutput
 */
const de_PutMetricStreamOutput = (output: any, context: __SerdeContext): PutMetricStreamOutput => {
  const contents: any = {};
  if (output[_Ar] != null) {
    contents[_Ar] = __expectString(output[_Ar]);
  }
  return contents;
};

/**
 * deserializeAws_queryRange
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  const contents: any = {};
  if (output[_ST] != null) {
    contents[_ST] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ST]));
  }
  if (output[_ET] != null) {
    contents[_ET] = __expectNonNull(__parseRfc3339DateTimeWithOffset(output[_ET]));
  }
  return contents;
};

/**
 * deserializeAws_queryResourceList
 */
const de_ResourceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectString(entry) as any;
    });
};

/**
 * deserializeAws_queryResourceNotFound
 */
const de_ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  const contents: any = {};
  if (output[_me] != null) {
    contents[_me] = __expectString(output[_me]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output[_RT] != null) {
    contents[_RT] = __expectString(output[_RT]);
  }
  if (output[_RI] != null) {
    contents[_RI] = __expectString(output[_RI]);
  }
  if (output[_Mes] != null) {
    contents[_Mes] = __expectString(output[_Mes]);
  }
  return contents;
};

/**
 * deserializeAws_querySingleMetricAnomalyDetector
 */
const de_SingleMetricAnomalyDetector = (output: any, context: __SerdeContext): SingleMetricAnomalyDetector => {
  const contents: any = {};
  if (output[_AI] != null) {
    contents[_AI] = __expectString(output[_AI]);
  }
  if (output[_N] != null) {
    contents[_N] = __expectString(output[_N]);
  }
  if (output[_MN] != null) {
    contents[_MN] = __expectString(output[_MN]);
  }
  if (String(output.Dimensions).trim() === "") {
    contents[_D] = [];
  } else if (output[_D] != null && output[_D][_m] != null) {
    contents[_D] = de_Dimensions(__getArrayIfSingleItem(output[_D][_m]), context);
  }
  if (output[_S] != null) {
    contents[_S] = __expectString(output[_S]);
  }
  return contents;
};

/**
 * deserializeAws_queryStartMetricStreamsOutput
 */
const de_StartMetricStreamsOutput = (output: any, context: __SerdeContext): StartMetricStreamsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryStopMetricStreamsOutput
 */
const de_StopMetricStreamsOutput = (output: any, context: __SerdeContext): StopMetricStreamsOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryTag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  const contents: any = {};
  if (output[_K] != null) {
    contents[_K] = __expectString(output[_K]);
  }
  if (output[_Va] != null) {
    contents[_Va] = __expectString(output[_Va]);
  }
  return contents;
};

/**
 * deserializeAws_queryTagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Tag(entry, context);
    });
};

/**
 * deserializeAws_queryTagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  const contents: any = {};
  return contents;
};

/**
 * deserializeAws_queryTimestamps
 */
const de_Timestamps = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseRfc3339DateTimeWithOffset(entry));
    });
};

/**
 * deserializeAws_queryUntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  const contents: any = {};
  return contents;
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
const SHARED_HEADERS: __HeaderBag = {
  "content-type": "application/x-www-form-urlencoded",
};

const _ = "2010-08-01";
const _A = "Action";
const _AA = "AlarmActions";
const _AAV = "ApproximateAggregateValue";
const _AAl = "AlarmArn";
const _AC = "AlarmContributors";
const _ACA = "AlarmContributorAttributes";
const _ACI = "AlarmContributorId";
const _ACUT = "AlarmConfigurationUpdatedTimestamp";
const _AD = "AlarmDescription";
const _ADT = "AnomalyDetectorTypes";
const _ADn = "AnomalyDetectors";
const _AE = "ActionsEnabled";
const _AHI = "AlarmHistoryItems";
const _AI = "AccountId";
const _AN = "AlarmNames";
const _ANP = "AlarmNamePrefix";
const _ANl = "AlarmName";
const _AOTL = "ApplyOnTransformedLogs";
const _AP = "ActionPrefix";
const _AR = "AlarmRule";
const _AS = "AdditionalStatistics";
const _ASB = "ActionsSuppressedBy";
const _ASEP = "ActionsSuppressorExtensionPeriod";
const _ASR = "ActionsSuppressedReason";
const _ASWP = "ActionsSuppressorWaitPeriod";
const _ASc = "ActionsSuppressor";
const _ASg = "AggregationStatistic";
const _AT = "AlarmTypes";
const _ATl = "AlarmType";
const _AUC = "ApproximateUniqueCount";
const _AV = "AggregateValue";
const _AVp = "ApproximateValue";
const _Ar = "Arn";
const _At = "Attributes";
const _Av = "Average";
const _C = "Counts";
const _CA = "ContributorAttributes";
const _CAo = "CompositeAlarms";
const _CD = "CreationDate";
const _CI = "ContributorId";
const _CO = "ComparisonOperator";
const _COAN = "ChildrenOfAlarmName";
const _Co = "Configuration";
const _Cod = "Code";
const _Con = "Contributors";
const _D = "Dimensions";
const _DA = "DeleteAlarms";
const _DAA = "DisableAlarmActions";
const _DAC = "DescribeAlarmContributors";
const _DAD = "DeleteAnomalyDetector";
const _DADe = "DescribeAnomalyDetectors";
const _DAFM = "DescribeAlarmsForMetric";
const _DAH = "DescribeAlarmHistory";
const _DAa = "DashboardArn";
const _DAe = "DescribeAlarms";
const _DB = "DashboardBody";
const _DD = "DeleteDashboards";
const _DE = "DashboardEntries";
const _DIR = "DeleteInsightRules";
const _DIRe = "DescribeInsightRules";
const _DIRi = "DisableInsightRules";
const _DMS = "DeleteMetricStream";
const _DN = "DashboardNames";
const _DNP = "DashboardNamePrefix";
const _DNa = "DashboardName";
const _DP = "DataPath";
const _DTA = "DatapointsToAlarm";
const _DVM = "DashboardValidationMessages";
const _Da = "Datapoints";
const _De = "Definition";
const _E = "Entity";
const _EAA = "EnableAlarmActions";
const _ED = "EndDate";
const _EF = "ExcludeFilters";
const _EIR = "EnableInsightRules";
const _ELSCP = "EvaluateLowSampleCountPercentile";
const _EMD = "EntityMetricData";
const _EP = "EvaluationPeriods";
const _ES = "ExtendedStatistic";
const _ESv = "EvaluationState";
const _ESx = "ExtendedStatistics";
const _ET = "EndTime";
const _ETR = "ExcludedTimeRanges";
const _ETx = "ExceptionType";
const _En = "Entries";
const _Ex = "Expression";
const _F = "Failures";
const _FA = "FirehoseArn";
const _FC = "FailureCode";
const _FD = "FailureDescription";
const _FR = "FailureResource";
const _GD = "GetDashboard";
const _GIRR = "GetInsightRuleReport";
const _GMD = "GetMetricData";
const _GMS = "GetMetricStatistics";
const _GMSe = "GetMetricStream";
const _GMWI = "GetMetricWidgetImage";
const _HD = "HistoryData";
const _HIT = "HistoryItemType";
const _HS = "HistorySummary";
const _I = "Id";
const _IDA = "InsufficientDataActions";
const _IF = "IncludeFilters";
const _ILA = "IncludeLinkedAccounts";
const _ILAM = "IncludeLinkedAccountsMetrics";
const _IM = "IncludeMetrics";
const _IR = "InsightRules";
const _K = "Key";
const _KA = "KeyAttributes";
const _KL = "KeyLabels";
const _Ke = "Keys";
const _L = "Label";
const _LD = "ListDashboards";
const _LM = "ListMetrics";
const _LMIR = "ListManagedInsightRules";
const _LMS = "ListMetricStreams";
const _LMa = "LastModified";
const _LO = "LabelOptions";
const _LTFR = "ListTagsForResource";
const _LUD = "LastUpdateDate";
const _M = "Metrics";
const _MA = "MetricAlarms";
const _MC = "MetricCharacteristics";
const _MCC = "MaxContributorCount";
const _MCV = "MaxContributorValue";
const _MD = "MetricData";
const _MDQ = "MetricDataQueries";
const _MDR = "MetricDataResults";
const _MDa = "MaxDatapoints";
const _MDe = "MetricDatapoints";
const _MMAD = "MetricMathAnomalyDetector";
const _MN = "MetricName";
const _MNe = "MetricNames";
const _MR = "MaxRecords";
const _MRa = "MaxResults";
const _MRan = "ManagedRules";
const _MRana = "ManagedRule";
const _MS = "MetricStat";
const _MT = "MetricTimezone";
const _MW = "MetricWidget";
const _MWI = "MetricWidgetImage";
const _Ma = "Maximum";
const _Me = "Metric";
const _Mes = "Message";
const _Mess = "Messages";
const _Mi = "Minimum";
const _N = "Namespace";
const _NT = "NextToken";
const _Na = "Name";
const _Nam = "Names";
const _OA = "OwningAccount";
const _OAw = "OwningAccounts";
const _OB = "OrderBy";
const _OF = "OutputFormat";
const _OKA = "OKActions";
const _P = "Period";
const _PAD = "PutAnomalyDetector";
const _PCA = "PutCompositeAlarm";
const _PD = "PutDashboard";
const _PIR = "PutInsightRule";
const _PMA = "PutMetricAlarm";
const _PMD = "PutMetricData";
const _PMIR = "PutManagedInsightRules";
const _PMS = "PutMetricStream";
const _POAN = "ParentsOfAlarmName";
const _PS = "PeriodicSpikes";
const _RA = "RecentlyActive";
const _RARN = "ResourceARN";
const _RAo = "RoleArn";
const _RD = "ReturnData";
const _RDu = "RuleDefinition";
const _RI = "ResourceId";
const _RN = "RuleNames";
const _RNu = "RuleName";
const _RS = "RuleState";
const _RT = "ResourceType";
const _S = "Stat";
const _SAS = "SetAlarmState";
const _SB = "ScanBy";
const _SC = "StatisticsConfigurations";
const _SCa = "SampleCount";
const _SCt = "StatusCode";
const _SD = "StartDate";
const _SEV = "StrictEntityValidation";
const _SMAD = "SingleMetricAnomalyDetector";
const _SMS = "StartMetricStreams";
const _SMSt = "StopMetricStreams";
const _SR = "StorageResolution";
const _SRD = "StateReasonData";
const _SRt = "StateReason";
const _ST = "StartTime";
const _STT = "StateTransitionedTimestamp";
const _SUT = "StateUpdatedTimestamp";
const _SV = "StateValue";
const _SVt = "StatisticValues";
const _Sc = "Schema";
const _Si = "Size";
const _St = "Statistic";
const _Sta = "Statistics";
const _Stat = "State";
const _Su = "Sum";
const _T = "Timezone";
const _TK = "TagKeys";
const _TMD = "TreatMissingData";
const _TMI = "ThresholdMetricId";
const _TN = "TemplateName";
const _TR = "TagResource";
const _Ta = "Tags";
const _Th = "Threshold";
const _Ti = "Timestamp";
const _Tim = "Timestamps";
const _U = "Unit";
const _UC = "UniqueContributors";
const _UR = "UntagResource";
const _V = "Version";
const _Va = "Value";
const _Val = "Values";
const _dVM = "dashboardValidationMessages";
const _e = "entry";
const _m = "member";
const _me = "message";

const buildFormUrlencodedString = (formEntries: Record<string, string>): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  if (data.Error?.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
};
