// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
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
import { XMLParser } from "fast-xml-parser";

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
    Action: "DeleteAlarms",
    Version: "2010-08-01",
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
    Action: "DeleteAnomalyDetector",
    Version: "2010-08-01",
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
    Action: "DeleteDashboards",
    Version: "2010-08-01",
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
    Action: "DeleteInsightRules",
    Version: "2010-08-01",
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
    Action: "DeleteMetricStream",
    Version: "2010-08-01",
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
    Action: "DescribeAlarmHistory",
    Version: "2010-08-01",
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
    Action: "DescribeAlarms",
    Version: "2010-08-01",
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
    Action: "DescribeAlarmsForMetric",
    Version: "2010-08-01",
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
    Action: "DescribeAnomalyDetectors",
    Version: "2010-08-01",
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
    Action: "DescribeInsightRules",
    Version: "2010-08-01",
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
    Action: "DisableAlarmActions",
    Version: "2010-08-01",
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
    Action: "DisableInsightRules",
    Version: "2010-08-01",
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
    Action: "EnableAlarmActions",
    Version: "2010-08-01",
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
    Action: "EnableInsightRules",
    Version: "2010-08-01",
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
    Action: "GetDashboard",
    Version: "2010-08-01",
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
    Action: "GetInsightRuleReport",
    Version: "2010-08-01",
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
    Action: "GetMetricData",
    Version: "2010-08-01",
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
    Action: "GetMetricStatistics",
    Version: "2010-08-01",
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
    Action: "GetMetricStream",
    Version: "2010-08-01",
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
    Action: "GetMetricWidgetImage",
    Version: "2010-08-01",
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
    Action: "ListDashboards",
    Version: "2010-08-01",
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
    Action: "ListManagedInsightRules",
    Version: "2010-08-01",
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
    Action: "ListMetrics",
    Version: "2010-08-01",
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
    Action: "ListMetricStreams",
    Version: "2010-08-01",
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
    Action: "ListTagsForResource",
    Version: "2010-08-01",
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
    Action: "PutAnomalyDetector",
    Version: "2010-08-01",
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
    Action: "PutCompositeAlarm",
    Version: "2010-08-01",
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
    Action: "PutDashboard",
    Version: "2010-08-01",
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
    Action: "PutInsightRule",
    Version: "2010-08-01",
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
    Action: "PutManagedInsightRules",
    Version: "2010-08-01",
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
    Action: "PutMetricAlarm",
    Version: "2010-08-01",
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
    Action: "PutMetricData",
    Version: "2010-08-01",
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
    Action: "PutMetricStream",
    Version: "2010-08-01",
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
    Action: "SetAlarmState",
    Version: "2010-08-01",
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
    Action: "StartMetricStreams",
    Version: "2010-08-01",
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
    Action: "StopMetricStreams",
    Version: "2010-08-01",
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
    Action: "TagResource",
    Version: "2010-08-01",
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
    Action: "UntagResource",
    Version: "2010-08-01",
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
    return de_DeleteAlarmsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDeleteAlarmsCommandError
 */
const de_DeleteAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteAnomalyDetectorCommand
 */
export const de_DeleteAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAnomalyDetectorCommandError(output, context);
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
 * deserializeAws_queryDeleteAnomalyDetectorCommandError
 */
const de_DeleteAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteDashboardsCommand
 */
export const de_DeleteDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDashboardsCommandError(output, context);
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
 * deserializeAws_queryDeleteDashboardsCommandError
 */
const de_DeleteDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      throw await de_DashboardNotFoundErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteInsightRulesCommand
 */
export const de_DeleteInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteInsightRulesCommandError(output, context);
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
 * deserializeAws_queryDeleteInsightRulesCommandError
 */
const de_DeleteInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDeleteMetricStreamCommand
 */
export const de_DeleteMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteMetricStreamCommandError(output, context);
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
 * deserializeAws_queryDeleteMetricStreamCommandError
 */
const de_DeleteMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAlarmHistoryCommand
 */
export const de_DescribeAlarmHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAlarmHistoryCommandError(output, context);
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
 * deserializeAws_queryDescribeAlarmHistoryCommandError
 */
const de_DescribeAlarmHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAlarmsCommand
 */
export const de_DescribeAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAlarmsCommandError(output, context);
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
 * deserializeAws_queryDescribeAlarmsCommandError
 */
const de_DescribeAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeAlarmsForMetricCommand
 */
export const de_DescribeAlarmsForMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAlarmsForMetricCommandError(output, context);
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
 * deserializeAws_queryDescribeAlarmsForMetricCommandError
 */
const de_DescribeAlarmsForMetricCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDescribeAnomalyDetectorsCommand
 */
export const de_DescribeAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAnomalyDetectorsCommandError(output, context);
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
 * deserializeAws_queryDescribeAnomalyDetectorsCommandError
 */
const de_DescribeAnomalyDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDescribeInsightRulesCommand
 */
export const de_DescribeInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeInsightRulesCommandError(output, context);
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
 * deserializeAws_queryDescribeInsightRulesCommandError
 */
const de_DescribeInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryDisableAlarmActionsCommand
 */
export const de_DisableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryDisableAlarmActionsCommandError
 */
const de_DisableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryDisableInsightRulesCommand
 */
export const de_DisableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisableInsightRulesCommandError(output, context);
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
 * deserializeAws_queryDisableInsightRulesCommandError
 */
const de_DisableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryEnableAlarmActionsCommand
 */
export const de_EnableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryEnableAlarmActionsCommandError
 */
const de_EnableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryEnableInsightRulesCommand
 */
export const de_EnableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_EnableInsightRulesCommandError(output, context);
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
 * deserializeAws_queryEnableInsightRulesCommandError
 */
const de_EnableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetDashboardCommand
 */
export const de_GetDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDashboardCommandError(output, context);
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
 * deserializeAws_queryGetDashboardCommandError
 */
const de_GetDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      throw await de_DashboardNotFoundErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetInsightRuleReportCommand
 */
export const de_GetInsightRuleReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInsightRuleReportCommandError(output, context);
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
 * deserializeAws_queryGetInsightRuleReportCommandError
 */
const de_GetInsightRuleReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetMetricDataCommand
 */
export const de_GetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMetricDataCommandError(output, context);
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
 * deserializeAws_queryGetMetricDataCommandError
 */
const de_GetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetMetricStatisticsCommand
 */
export const de_GetMetricStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMetricStatisticsCommandError(output, context);
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
 * deserializeAws_queryGetMetricStatisticsCommandError
 */
const de_GetMetricStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetMetricStreamCommand
 */
export const de_GetMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMetricStreamCommandError(output, context);
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
 * deserializeAws_queryGetMetricStreamCommandError
 */
const de_GetMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryGetMetricWidgetImageCommand
 */
export const de_GetMetricWidgetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetMetricWidgetImageCommandError(output, context);
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
 * deserializeAws_queryGetMetricWidgetImageCommandError
 */
const de_GetMetricWidgetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  const parsedBody = parsedOutput.body;
  return throwDefaultError({
    output,
    parsedBody: parsedBody.Error,
    errorCode,
  });
};

/**
 * deserializeAws_queryListDashboardsCommand
 */
export const de_ListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDashboardsCommandError(output, context);
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
 * deserializeAws_queryListDashboardsCommandError
 */
const de_ListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListManagedInsightRulesCommand
 */
export const de_ListManagedInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListManagedInsightRulesCommandError(output, context);
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
 * deserializeAws_queryListManagedInsightRulesCommandError
 */
const de_ListManagedInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListManagedInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListMetricsCommand
 */
export const de_ListMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMetricsCommandError(output, context);
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
 * deserializeAws_queryListMetricsCommandError
 */
const de_ListMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListMetricStreamsCommand
 */
export const de_ListMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListMetricStreamsCommandError(output, context);
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
 * deserializeAws_queryListMetricStreamsCommandError
 */
const de_ListMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      throw await de_InvalidNextTokenRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryListTagsForResourceCommand
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
  contents = de_ListTagsForResourceOutput(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutAnomalyDetectorCommand
 */
export const de_PutAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutAnomalyDetectorCommandError(output, context);
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
 * deserializeAws_queryPutAnomalyDetectorCommandError
 */
const de_PutAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterCombination":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      throw await de_InvalidParameterCombinationExceptionRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutCompositeAlarmCommand
 */
export const de_PutCompositeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCompositeAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutCompositeAlarmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutCompositeAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutCompositeAlarmCommandError
 */
const de_PutCompositeAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCompositeAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutDashboardCommand
 */
export const de_PutDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutDashboardCommandError(output, context);
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
 * deserializeAws_queryPutDashboardCommandError
 */
const de_PutDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterInput":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      throw await de_DashboardInvalidInputErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutInsightRuleCommand
 */
export const de_PutInsightRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutInsightRuleCommandError(output, context);
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
 * deserializeAws_queryPutInsightRuleCommandError
 */
const de_PutInsightRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutManagedInsightRulesCommand
 */
export const de_PutManagedInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutManagedInsightRulesCommandError(output, context);
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
 * deserializeAws_queryPutManagedInsightRulesCommandError
 */
const de_PutManagedInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutManagedInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutMetricAlarmCommand
 */
export const de_PutMetricAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMetricAlarmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutMetricAlarmCommandError
 */
const de_PutMetricAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceeded":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      throw await de_LimitExceededFaultRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutMetricDataCommand
 */
export const de_PutMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMetricDataCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_queryPutMetricDataCommandError
 */
const de_PutMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryPutMetricStreamCommand
 */
export const de_PutMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PutMetricStreamCommandError(output, context);
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
 * deserializeAws_queryPutMetricStreamCommandError
 */
const de_PutMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
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
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_querySetAlarmStateCommand
 */
export const de_SetAlarmStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_SetAlarmStateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetAlarmStateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_querySetAlarmStateCommandError
 */
const de_SetAlarmStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidFormat":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      throw await de_InvalidFormatFaultRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryStartMetricStreamsCommand
 */
export const de_StartMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartMetricStreamsCommandError(output, context);
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
 * deserializeAws_queryStartMetricStreamsCommandError
 */
const de_StartMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryStopMetricStreamsCommand
 */
export const de_StopMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StopMetricStreamsCommandError(output, context);
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
 * deserializeAws_queryStopMetricStreamsCommandError
 */
const de_StopMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameter":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      throw await de_MissingRequiredParameterExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryTagResourceCommand
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
  contents = de_TagResourceOutput(data.TagResourceResult, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryTagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
  }
};

/**
 * deserializeAws_queryUntagResourceCommand
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
  contents = de_UntagResourceOutput(data.UntagResourceResult, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_queryUntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "InternalServiceError":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      throw await de_InternalServiceFaultRes(parsedOutput, context);
    case "InvalidParameterValue":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody: parsedBody.Error,
        errorCode,
      });
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
 * deserializeAws_queryDashboardNotFoundErrorRes
 */
const de_DashboardNotFoundErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardNotFoundError> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DashboardNotFoundError(body.Error, context);
  const exception = new DashboardNotFoundError({
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
const se_AlarmTypes = (input: (AlarmType | string)[], context: __SerdeContext): any => {
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
  if (input.ExcludedTimeRanges != null) {
    const memberEntries = se_AnomalyDetectorExcludedTimeRanges(input.ExcludedTimeRanges, context);
    if (input.ExcludedTimeRanges?.length === 0) {
      entries.ExcludedTimeRanges = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedTimeRanges.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricTimezone != null) {
    entries["MetricTimezone"] = input.MetricTimezone;
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
const se_AnomalyDetectorTypes = (input: (AnomalyDetectorType | string)[], context: __SerdeContext): any => {
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
  if (input.AlarmNames != null) {
    const memberEntries = se_AlarmNames(input.AlarmNames, context);
    if (input.AlarmNames?.length === 0) {
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
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  if (input.SingleMetricAnomalyDetector != null) {
    const memberEntries = se_SingleMetricAnomalyDetector(input.SingleMetricAnomalyDetector, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SingleMetricAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricMathAnomalyDetector != null) {
    const memberEntries = se_MetricMathAnomalyDetector(input.MetricMathAnomalyDetector, context);
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
  if (input.DashboardNames != null) {
    const memberEntries = se_DashboardNames(input.DashboardNames, context);
    if (input.DashboardNames?.length === 0) {
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
  if (input.RuleNames != null) {
    const memberEntries = se_InsightRuleNames(input.RuleNames, context);
    if (input.RuleNames?.length === 0) {
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
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmHistoryInput
 */
const se_DescribeAlarmHistoryInput = (input: DescribeAlarmHistoryInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmName != null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmTypes != null) {
    const memberEntries = se_AlarmTypes(input.AlarmTypes, context);
    if (input.AlarmTypes?.length === 0) {
      entries.AlarmTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HistoryItemType != null) {
    entries["HistoryItemType"] = input.HistoryItemType;
  }
  if (input.StartDate != null) {
    entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
  }
  if (input.EndDate != null) {
    entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScanBy != null) {
    entries["ScanBy"] = input.ScanBy;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmsForMetricInput
 */
const se_DescribeAlarmsForMetricInput = (input: DescribeAlarmsForMetricInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Statistic != null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.ExtendedStatistic != null) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAlarmsInput
 */
const se_DescribeAlarmsInput = (input: DescribeAlarmsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmNames != null) {
    const memberEntries = se_AlarmNames(input.AlarmNames, context);
    if (input.AlarmNames?.length === 0) {
      entries.AlarmNames = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmNamePrefix != null) {
    entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
  }
  if (input.AlarmTypes != null) {
    const memberEntries = se_AlarmTypes(input.AlarmTypes, context);
    if (input.AlarmTypes?.length === 0) {
      entries.AlarmTypes = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ChildrenOfAlarmName != null) {
    entries["ChildrenOfAlarmName"] = input.ChildrenOfAlarmName;
  }
  if (input.ParentsOfAlarmName != null) {
    entries["ParentsOfAlarmName"] = input.ParentsOfAlarmName;
  }
  if (input.StateValue != null) {
    entries["StateValue"] = input.StateValue;
  }
  if (input.ActionPrefix != null) {
    entries["ActionPrefix"] = input.ActionPrefix;
  }
  if (input.MaxRecords != null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryDescribeAnomalyDetectorsInput
 */
const se_DescribeAnomalyDetectorsInput = (input: DescribeAnomalyDetectorsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AnomalyDetectorTypes != null) {
    const memberEntries = se_AnomalyDetectorTypes(input.AnomalyDetectorTypes, context);
    if (input.AnomalyDetectorTypes?.length === 0) {
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
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryDimension
 */
const se_Dimension = (input: Dimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

/**
 * serializeAws_queryDimensionFilter
 */
const se_DimensionFilter = (input: DimensionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.AlarmNames != null) {
    const memberEntries = se_AlarmNames(input.AlarmNames, context);
    if (input.AlarmNames?.length === 0) {
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
  if (input.RuleNames != null) {
    const memberEntries = se_InsightRuleNames(input.RuleNames, context);
    if (input.RuleNames?.length === 0) {
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
  if (input.AlarmNames != null) {
    const memberEntries = se_AlarmNames(input.AlarmNames, context);
    if (input.AlarmNames?.length === 0) {
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
  if (input.RuleNames != null) {
    const memberEntries = se_InsightRuleNames(input.RuleNames, context);
    if (input.RuleNames?.length === 0) {
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
  if (input.DashboardName != null) {
    entries["DashboardName"] = input.DashboardName;
  }
  return entries;
};

/**
 * serializeAws_queryGetInsightRuleReportInput
 */
const se_GetInsightRuleReportInput = (input: GetInsightRuleReportInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleName != null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.MaxContributorCount != null) {
    entries["MaxContributorCount"] = input.MaxContributorCount;
  }
  if (input.Metrics != null) {
    const memberEntries = se_InsightRuleMetricList(input.Metrics, context);
    if (input.Metrics?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OrderBy != null) {
    entries["OrderBy"] = input.OrderBy;
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricDataInput
 */
const se_GetMetricDataInput = (input: GetMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = se_MetricDataQueries(input.MetricDataQueries, context);
    if (input.MetricDataQueries?.length === 0) {
      entries.MetricDataQueries = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScanBy != null) {
    entries["ScanBy"] = input.ScanBy;
  }
  if (input.MaxDatapoints != null) {
    entries["MaxDatapoints"] = input.MaxDatapoints;
  }
  if (input.LabelOptions != null) {
    const memberEntries = se_LabelOptions(input.LabelOptions, context);
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
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.Statistics != null) {
    const memberEntries = se_Statistics(input.Statistics, context);
    if (input.Statistics?.length === 0) {
      entries.Statistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Statistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExtendedStatistics != null) {
    const memberEntries = se_ExtendedStatistics(input.ExtendedStatistics, context);
    if (input.ExtendedStatistics?.length === 0) {
      entries.ExtendedStatistics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtendedStatistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricStreamInput
 */
const se_GetMetricStreamInput = (input: GetMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  return entries;
};

/**
 * serializeAws_queryGetMetricWidgetImageInput
 */
const se_GetMetricWidgetImageInput = (input: GetMetricWidgetImageInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricWidget != null) {
    entries["MetricWidget"] = input.MetricWidget;
  }
  if (input.OutputFormat != null) {
    entries["OutputFormat"] = input.OutputFormat;
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
  if (input.Timezone != null) {
    entries["Timezone"] = input.Timezone;
  }
  return entries;
};

/**
 * serializeAws_queryListDashboardsInput
 */
const se_ListDashboardsInput = (input: ListDashboardsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardNamePrefix != null) {
    entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

/**
 * serializeAws_queryListManagedInsightRulesInput
 */
const se_ListManagedInsightRulesInput = (input: ListManagedInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceARN != null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListMetricsInput
 */
const se_ListMetricsInput = (input: ListMetricsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_DimensionFilters(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.RecentlyActive != null) {
    entries["RecentlyActive"] = input.RecentlyActive;
  }
  if (input.IncludeLinkedAccounts != null) {
    entries["IncludeLinkedAccounts"] = input.IncludeLinkedAccounts;
  }
  if (input.OwningAccount != null) {
    entries["OwningAccount"] = input.OwningAccount;
  }
  return entries;
};

/**
 * serializeAws_queryListMetricStreamsInput
 */
const se_ListMetricStreamsInput = (input: ListMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken != null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults != null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

/**
 * serializeAws_queryListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceARN != null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  return entries;
};

/**
 * serializeAws_queryManagedRule
 */
const se_ManagedRule = (input: ManagedRule, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.TemplateName != null) {
    entries["TemplateName"] = input.TemplateName;
  }
  if (input.ResourceARN != null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
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
  if (input.Id != null) {
    entries["Id"] = input.Id;
  }
  if (input.MetricStat != null) {
    const memberEntries = se_MetricStat(input.MetricStat, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Expression != null) {
    entries["Expression"] = input.Expression;
  }
  if (input.Label != null) {
    entries["Label"] = input.Label;
  }
  if (input.ReturnData != null) {
    entries["ReturnData"] = input.ReturnData;
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.AccountId != null) {
    entries["AccountId"] = input.AccountId;
  }
  return entries;
};

/**
 * serializeAws_queryMetricDatum
 */
const se_MetricDatum = (input: MetricDatum, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Timestamp != null) {
    entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
  }
  if (input.Value != null) {
    entries["Value"] = __serializeFloat(input.Value);
  }
  if (input.StatisticValues != null) {
    const memberEntries = se_StatisticSet(input.StatisticValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Values != null) {
    const memberEntries = se_Values(input.Values, context);
    if (input.Values?.length === 0) {
      entries.Values = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Counts != null) {
    const memberEntries = se_Counts(input.Counts, context);
    if (input.Counts?.length === 0) {
      entries.Counts = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Counts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  if (input.StorageResolution != null) {
    entries["StorageResolution"] = input.StorageResolution;
  }
  return entries;
};

/**
 * serializeAws_queryMetricMathAnomalyDetector
 */
const se_MetricMathAnomalyDetector = (input: MetricMathAnomalyDetector, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricDataQueries != null) {
    const memberEntries = se_MetricDataQueries(input.MetricDataQueries, context);
    if (input.MetricDataQueries?.length === 0) {
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
  if (input.Metric != null) {
    const memberEntries = se_Metric(input.Metric, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

/**
 * serializeAws_queryMetricStreamFilter
 */
const se_MetricStreamFilter = (input: MetricStreamFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricNames != null) {
    const memberEntries = se_MetricStreamFilterMetricNames(input.MetricNames, context);
    if (input.MetricNames?.length === 0) {
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
  if (input.IncludeMetrics != null) {
    const memberEntries = se_MetricStreamStatisticsIncludeMetrics(input.IncludeMetrics, context);
    if (input.IncludeMetrics?.length === 0) {
      entries.IncludeMetrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IncludeMetrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AdditionalStatistics != null) {
    const memberEntries = se_MetricStreamStatisticsAdditionalStatistics(input.AdditionalStatistics, context);
    if (input.AdditionalStatistics?.length === 0) {
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
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  return entries;
};

/**
 * serializeAws_queryPutAnomalyDetectorInput
 */
const se_PutAnomalyDetectorInput = (input: PutAnomalyDetectorInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Configuration != null) {
    const memberEntries = se_AnomalyDetectorConfiguration(input.Configuration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Configuration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.SingleMetricAnomalyDetector != null) {
    const memberEntries = se_SingleMetricAnomalyDetector(input.SingleMetricAnomalyDetector, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `SingleMetricAnomalyDetector.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricMathAnomalyDetector != null) {
    const memberEntries = se_MetricMathAnomalyDetector(input.MetricMathAnomalyDetector, context);
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
  if (input.ActionsEnabled != null) {
    entries["ActionsEnabled"] = input.ActionsEnabled;
  }
  if (input.AlarmActions != null) {
    const memberEntries = se_ResourceList(input.AlarmActions, context);
    if (input.AlarmActions?.length === 0) {
      entries.AlarmActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmDescription != null) {
    entries["AlarmDescription"] = input.AlarmDescription;
  }
  if (input.AlarmName != null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmRule != null) {
    entries["AlarmRule"] = input.AlarmRule;
  }
  if (input.InsufficientDataActions != null) {
    const memberEntries = se_ResourceList(input.InsufficientDataActions, context);
    if (input.InsufficientDataActions?.length === 0) {
      entries.InsufficientDataActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OKActions != null) {
    const memberEntries = se_ResourceList(input.OKActions, context);
    if (input.OKActions?.length === 0) {
      entries.OKActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ActionsSuppressor != null) {
    entries["ActionsSuppressor"] = input.ActionsSuppressor;
  }
  if (input.ActionsSuppressorWaitPeriod != null) {
    entries["ActionsSuppressorWaitPeriod"] = input.ActionsSuppressorWaitPeriod;
  }
  if (input.ActionsSuppressorExtensionPeriod != null) {
    entries["ActionsSuppressorExtensionPeriod"] = input.ActionsSuppressorExtensionPeriod;
  }
  return entries;
};

/**
 * serializeAws_queryPutDashboardInput
 */
const se_PutDashboardInput = (input: PutDashboardInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardName != null) {
    entries["DashboardName"] = input.DashboardName;
  }
  if (input.DashboardBody != null) {
    entries["DashboardBody"] = input.DashboardBody;
  }
  return entries;
};

/**
 * serializeAws_queryPutInsightRuleInput
 */
const se_PutInsightRuleInput = (input: PutInsightRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleName != null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.RuleState != null) {
    entries["RuleState"] = input.RuleState;
  }
  if (input.RuleDefinition != null) {
    entries["RuleDefinition"] = input.RuleDefinition;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
 * serializeAws_queryPutManagedInsightRulesInput
 */
const se_PutManagedInsightRulesInput = (input: PutManagedInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ManagedRules != null) {
    const memberEntries = se_ManagedRules(input.ManagedRules, context);
    if (input.ManagedRules?.length === 0) {
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
  if (input.AlarmName != null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmDescription != null) {
    entries["AlarmDescription"] = input.AlarmDescription;
  }
  if (input.ActionsEnabled != null) {
    entries["ActionsEnabled"] = input.ActionsEnabled;
  }
  if (input.OKActions != null) {
    const memberEntries = se_ResourceList(input.OKActions, context);
    if (input.OKActions?.length === 0) {
      entries.OKActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmActions != null) {
    const memberEntries = se_ResourceList(input.AlarmActions, context);
    if (input.AlarmActions?.length === 0) {
      entries.AlarmActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InsufficientDataActions != null) {
    const memberEntries = se_ResourceList(input.InsufficientDataActions, context);
    if (input.InsufficientDataActions?.length === 0) {
      entries.InsufficientDataActions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Statistic != null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.ExtendedStatistic != null) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period != null) {
    entries["Period"] = input.Period;
  }
  if (input.Unit != null) {
    entries["Unit"] = input.Unit;
  }
  if (input.EvaluationPeriods != null) {
    entries["EvaluationPeriods"] = input.EvaluationPeriods;
  }
  if (input.DatapointsToAlarm != null) {
    entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
  }
  if (input.Threshold != null) {
    entries["Threshold"] = __serializeFloat(input.Threshold);
  }
  if (input.ComparisonOperator != null) {
    entries["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.TreatMissingData != null) {
    entries["TreatMissingData"] = input.TreatMissingData;
  }
  if (input.EvaluateLowSampleCountPercentile != null) {
    entries["EvaluateLowSampleCountPercentile"] = input.EvaluateLowSampleCountPercentile;
  }
  if (input.Metrics != null) {
    const memberEntries = se_MetricDataQueries(input.Metrics, context);
    if (input.Metrics?.length === 0) {
      entries.Metrics = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ThresholdMetricId != null) {
    entries["ThresholdMetricId"] = input.ThresholdMetricId;
  }
  return entries;
};

/**
 * serializeAws_queryPutMetricDataInput
 */
const se_PutMetricDataInput = (input: PutMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricData != null) {
    const memberEntries = se_MetricData(input.MetricData, context);
    if (input.MetricData?.length === 0) {
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
 * serializeAws_queryPutMetricStreamInput
 */
const se_PutMetricStreamInput = (input: PutMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name != null) {
    entries["Name"] = input.Name;
  }
  if (input.IncludeFilters != null) {
    const memberEntries = se_MetricStreamFilters(input.IncludeFilters, context);
    if (input.IncludeFilters?.length === 0) {
      entries.IncludeFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IncludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludeFilters != null) {
    const memberEntries = se_MetricStreamFilters(input.ExcludeFilters, context);
    if (input.ExcludeFilters?.length === 0) {
      entries.ExcludeFilters = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FirehoseArn != null) {
    entries["FirehoseArn"] = input.FirehoseArn;
  }
  if (input.RoleArn != null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.OutputFormat != null) {
    entries["OutputFormat"] = input.OutputFormat;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
      entries.Tags = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StatisticsConfigurations != null) {
    const memberEntries = se_MetricStreamStatisticsConfigurations(input.StatisticsConfigurations, context);
    if (input.StatisticsConfigurations?.length === 0) {
      entries.StatisticsConfigurations = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticsConfigurations.${key}`;
      entries[loc] = value;
    });
  }
  if (input.IncludeLinkedAccountsMetrics != null) {
    entries["IncludeLinkedAccountsMetrics"] = input.IncludeLinkedAccountsMetrics;
  }
  return entries;
};

/**
 * serializeAws_queryRange
 */
const se_Range = (input: Range, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StartTime != null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime != null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
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
  if (input.AlarmName != null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.StateValue != null) {
    entries["StateValue"] = input.StateValue;
  }
  if (input.StateReason != null) {
    entries["StateReason"] = input.StateReason;
  }
  if (input.StateReasonData != null) {
    entries["StateReasonData"] = input.StateReasonData;
  }
  return entries;
};

/**
 * serializeAws_querySingleMetricAnomalyDetector
 */
const se_SingleMetricAnomalyDetector = (input: SingleMetricAnomalyDetector, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace != null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName != null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions != null) {
    const memberEntries = se_Dimensions(input.Dimensions, context);
    if (input.Dimensions?.length === 0) {
      entries.Dimensions = [];
    }
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat != null) {
    entries["Stat"] = input.Stat;
  }
  return entries;
};

/**
 * serializeAws_queryStartMetricStreamsInput
 */
const se_StartMetricStreamsInput = (input: StartMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names != null) {
    const memberEntries = se_MetricStreamNames(input.Names, context);
    if (input.Names?.length === 0) {
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
const se_Statistics = (input: (Statistic | string)[], context: __SerdeContext): any => {
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
  if (input.SampleCount != null) {
    entries["SampleCount"] = __serializeFloat(input.SampleCount);
  }
  if (input.Sum != null) {
    entries["Sum"] = __serializeFloat(input.Sum);
  }
  if (input.Minimum != null) {
    entries["Minimum"] = __serializeFloat(input.Minimum);
  }
  if (input.Maximum != null) {
    entries["Maximum"] = __serializeFloat(input.Maximum);
  }
  return entries;
};

/**
 * serializeAws_queryStopMetricStreamsInput
 */
const se_StopMetricStreamsInput = (input: StopMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names != null) {
    const memberEntries = se_MetricStreamNames(input.Names, context);
    if (input.Names?.length === 0) {
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
  if (input.Key != null) {
    entries["Key"] = input.Key;
  }
  if (input.Value != null) {
    entries["Value"] = input.Value;
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
  if (input.ResourceARN != null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags != null) {
    const memberEntries = se_TagList(input.Tags, context);
    if (input.Tags?.length === 0) {
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
  if (input.ResourceARN != null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys != null) {
    const memberEntries = se_TagKeyList(input.TagKeys, context);
    if (input.TagKeys?.length === 0) {
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
 * deserializeAws_queryAlarmHistoryItem
 */
const de_AlarmHistoryItem = (output: any, context: __SerdeContext): AlarmHistoryItem => {
  const contents: any = {};
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmType"] !== undefined) {
    contents.AlarmType = __expectString(output["AlarmType"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["HistoryItemType"] !== undefined) {
    contents.HistoryItemType = __expectString(output["HistoryItemType"]);
  }
  if (output["HistorySummary"] !== undefined) {
    contents.HistorySummary = __expectString(output["HistorySummary"]);
  }
  if (output["HistoryData"] !== undefined) {
    contents.HistoryData = __expectString(output["HistoryData"]);
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
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_Dimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Configuration"] !== undefined) {
    contents.Configuration = de_AnomalyDetectorConfiguration(output["Configuration"], context);
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = __expectString(output["StateValue"]);
  }
  if (output["SingleMetricAnomalyDetector"] !== undefined) {
    contents.SingleMetricAnomalyDetector = de_SingleMetricAnomalyDetector(
      output["SingleMetricAnomalyDetector"],
      context
    );
  }
  if (output["MetricMathAnomalyDetector"] !== undefined) {
    contents.MetricMathAnomalyDetector = de_MetricMathAnomalyDetector(output["MetricMathAnomalyDetector"], context);
  }
  return contents;
};

/**
 * deserializeAws_queryAnomalyDetectorConfiguration
 */
const de_AnomalyDetectorConfiguration = (output: any, context: __SerdeContext): AnomalyDetectorConfiguration => {
  const contents: any = {};
  if (output.ExcludedTimeRanges === "") {
    contents.ExcludedTimeRanges = [];
  } else if (output["ExcludedTimeRanges"] !== undefined && output["ExcludedTimeRanges"]["member"] !== undefined) {
    contents.ExcludedTimeRanges = de_AnomalyDetectorExcludedTimeRanges(
      __getArrayIfSingleItem(output["ExcludedTimeRanges"]["member"]),
      context
    );
  }
  if (output["MetricTimezone"] !== undefined) {
    contents.MetricTimezone = __expectString(output["MetricTimezone"]);
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
  if (output["ActionsEnabled"] !== undefined) {
    contents.ActionsEnabled = __parseBoolean(output["ActionsEnabled"]);
  }
  if (output.AlarmActions === "") {
    contents.AlarmActions = [];
  } else if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
    contents.AlarmActions = de_ResourceList(__getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
  }
  if (output["AlarmArn"] !== undefined) {
    contents.AlarmArn = __expectString(output["AlarmArn"]);
  }
  if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
    contents.AlarmConfigurationUpdatedTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["AlarmConfigurationUpdatedTimestamp"])
    );
  }
  if (output["AlarmDescription"] !== undefined) {
    contents.AlarmDescription = __expectString(output["AlarmDescription"]);
  }
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmRule"] !== undefined) {
    contents.AlarmRule = __expectString(output["AlarmRule"]);
  }
  if (output.InsufficientDataActions === "") {
    contents.InsufficientDataActions = [];
  } else if (
    output["InsufficientDataActions"] !== undefined &&
    output["InsufficientDataActions"]["member"] !== undefined
  ) {
    contents.InsufficientDataActions = de_ResourceList(
      __getArrayIfSingleItem(output["InsufficientDataActions"]["member"]),
      context
    );
  }
  if (output.OKActions === "") {
    contents.OKActions = [];
  } else if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
    contents.OKActions = de_ResourceList(__getArrayIfSingleItem(output["OKActions"]["member"]), context);
  }
  if (output["StateReason"] !== undefined) {
    contents.StateReason = __expectString(output["StateReason"]);
  }
  if (output["StateReasonData"] !== undefined) {
    contents.StateReasonData = __expectString(output["StateReasonData"]);
  }
  if (output["StateUpdatedTimestamp"] !== undefined) {
    contents.StateUpdatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StateUpdatedTimestamp"]));
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = __expectString(output["StateValue"]);
  }
  if (output["StateTransitionedTimestamp"] !== undefined) {
    contents.StateTransitionedTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["StateTransitionedTimestamp"])
    );
  }
  if (output["ActionsSuppressedBy"] !== undefined) {
    contents.ActionsSuppressedBy = __expectString(output["ActionsSuppressedBy"]);
  }
  if (output["ActionsSuppressedReason"] !== undefined) {
    contents.ActionsSuppressedReason = __expectString(output["ActionsSuppressedReason"]);
  }
  if (output["ActionsSuppressor"] !== undefined) {
    contents.ActionsSuppressor = __expectString(output["ActionsSuppressor"]);
  }
  if (output["ActionsSuppressorWaitPeriod"] !== undefined) {
    contents.ActionsSuppressorWaitPeriod = __strictParseInt32(output["ActionsSuppressorWaitPeriod"]) as number;
  }
  if (output["ActionsSuppressorExtensionPeriod"] !== undefined) {
    contents.ActionsSuppressorExtensionPeriod = __strictParseInt32(
      output["ActionsSuppressorExtensionPeriod"]
    ) as number;
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
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
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
  if (output["DashboardName"] !== undefined) {
    contents.DashboardName = __expectString(output["DashboardName"]);
  }
  if (output["DashboardArn"] !== undefined) {
    contents.DashboardArn = __expectString(output["DashboardArn"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastModified"]));
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseLong(output["Size"]) as number;
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardInvalidInputError
 */
const de_DashboardInvalidInputError = (output: any, context: __SerdeContext): DashboardInvalidInputError => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  if (output.dashboardValidationMessages === "") {
    contents.dashboardValidationMessages = [];
  } else if (
    output["dashboardValidationMessages"] !== undefined &&
    output["dashboardValidationMessages"]["member"] !== undefined
  ) {
    contents.dashboardValidationMessages = de_DashboardValidationMessages(
      __getArrayIfSingleItem(output["dashboardValidationMessages"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardNotFoundError
 */
const de_DashboardNotFoundError = (output: any, context: __SerdeContext): DashboardNotFoundError => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDashboardValidationMessage
 */
const de_DashboardValidationMessage = (output: any, context: __SerdeContext): DashboardValidationMessage => {
  const contents: any = {};
  if (output["DataPath"] !== undefined) {
    contents.DataPath = __expectString(output["DataPath"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
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
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["SampleCount"] !== undefined) {
    contents.SampleCount = __strictParseFloat(output["SampleCount"]) as number;
  }
  if (output["Average"] !== undefined) {
    contents.Average = __strictParseFloat(output["Average"]) as number;
  }
  if (output["Sum"] !== undefined) {
    contents.Sum = __strictParseFloat(output["Sum"]) as number;
  }
  if (output["Minimum"] !== undefined) {
    contents.Minimum = __strictParseFloat(output["Minimum"]) as number;
  }
  if (output["Maximum"] !== undefined) {
    contents.Maximum = __strictParseFloat(output["Maximum"]) as number;
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  if (output.ExtendedStatistics === "") {
    contents.ExtendedStatistics = {};
  } else if (output["ExtendedStatistics"] !== undefined && output["ExtendedStatistics"]["entry"] !== undefined) {
    contents.ExtendedStatistics = de_DatapointValueMap(
      __getArrayIfSingleItem(output["ExtendedStatistics"]["entry"]),
      context
    );
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
  if (output.Failures === "") {
    contents.Failures = [];
  } else if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = de_BatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
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
 * deserializeAws_queryDescribeAlarmHistoryOutput
 */
const de_DescribeAlarmHistoryOutput = (output: any, context: __SerdeContext): DescribeAlarmHistoryOutput => {
  const contents: any = {};
  if (output.AlarmHistoryItems === "") {
    contents.AlarmHistoryItems = [];
  } else if (output["AlarmHistoryItems"] !== undefined && output["AlarmHistoryItems"]["member"] !== undefined) {
    contents.AlarmHistoryItems = de_AlarmHistoryItems(
      __getArrayIfSingleItem(output["AlarmHistoryItems"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmsForMetricOutput
 */
const de_DescribeAlarmsForMetricOutput = (output: any, context: __SerdeContext): DescribeAlarmsForMetricOutput => {
  const contents: any = {};
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  } else if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
    contents.MetricAlarms = de_MetricAlarms(__getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAlarmsOutput
 */
const de_DescribeAlarmsOutput = (output: any, context: __SerdeContext): DescribeAlarmsOutput => {
  const contents: any = {};
  if (output.CompositeAlarms === "") {
    contents.CompositeAlarms = [];
  } else if (output["CompositeAlarms"] !== undefined && output["CompositeAlarms"]["member"] !== undefined) {
    contents.CompositeAlarms = de_CompositeAlarms(__getArrayIfSingleItem(output["CompositeAlarms"]["member"]), context);
  }
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  } else if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
    contents.MetricAlarms = de_MetricAlarms(__getArrayIfSingleItem(output["MetricAlarms"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeAnomalyDetectorsOutput
 */
const de_DescribeAnomalyDetectorsOutput = (output: any, context: __SerdeContext): DescribeAnomalyDetectorsOutput => {
  const contents: any = {};
  if (output.AnomalyDetectors === "") {
    contents.AnomalyDetectors = [];
  } else if (output["AnomalyDetectors"] !== undefined && output["AnomalyDetectors"]["member"] !== undefined) {
    contents.AnomalyDetectors = de_AnomalyDetectors(
      __getArrayIfSingleItem(output["AnomalyDetectors"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryDescribeInsightRulesOutput
 */
const de_DescribeInsightRulesOutput = (output: any, context: __SerdeContext): DescribeInsightRulesOutput => {
  const contents: any = {};
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.InsightRules === "") {
    contents.InsightRules = [];
  } else if (output["InsightRules"] !== undefined && output["InsightRules"]["member"] !== undefined) {
    contents.InsightRules = de_InsightRules(__getArrayIfSingleItem(output["InsightRules"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryDimension
 */
const de_Dimension = (output: any, context: __SerdeContext): Dimension => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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
  if (output.Failures === "") {
    contents.Failures = [];
  } else if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = de_BatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryEnableInsightRulesOutput
 */
const de_EnableInsightRulesOutput = (output: any, context: __SerdeContext): EnableInsightRulesOutput => {
  const contents: any = {};
  if (output.Failures === "") {
    contents.Failures = [];
  } else if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = de_BatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetDashboardOutput
 */
const de_GetDashboardOutput = (output: any, context: __SerdeContext): GetDashboardOutput => {
  const contents: any = {};
  if (output["DashboardArn"] !== undefined) {
    contents.DashboardArn = __expectString(output["DashboardArn"]);
  }
  if (output["DashboardBody"] !== undefined) {
    contents.DashboardBody = __expectString(output["DashboardBody"]);
  }
  if (output["DashboardName"] !== undefined) {
    contents.DashboardName = __expectString(output["DashboardName"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetInsightRuleReportOutput
 */
const de_GetInsightRuleReportOutput = (output: any, context: __SerdeContext): GetInsightRuleReportOutput => {
  const contents: any = {};
  if (output.KeyLabels === "") {
    contents.KeyLabels = [];
  } else if (output["KeyLabels"] !== undefined && output["KeyLabels"]["member"] !== undefined) {
    contents.KeyLabels = de_InsightRuleContributorKeyLabels(
      __getArrayIfSingleItem(output["KeyLabels"]["member"]),
      context
    );
  }
  if (output["AggregationStatistic"] !== undefined) {
    contents.AggregationStatistic = __expectString(output["AggregationStatistic"]);
  }
  if (output["AggregateValue"] !== undefined) {
    contents.AggregateValue = __strictParseFloat(output["AggregateValue"]) as number;
  }
  if (output["ApproximateUniqueCount"] !== undefined) {
    contents.ApproximateUniqueCount = __strictParseLong(output["ApproximateUniqueCount"]) as number;
  }
  if (output.Contributors === "") {
    contents.Contributors = [];
  } else if (output["Contributors"] !== undefined && output["Contributors"]["member"] !== undefined) {
    contents.Contributors = de_InsightRuleContributors(
      __getArrayIfSingleItem(output["Contributors"]["member"]),
      context
    );
  }
  if (output.MetricDatapoints === "") {
    contents.MetricDatapoints = [];
  } else if (output["MetricDatapoints"] !== undefined && output["MetricDatapoints"]["member"] !== undefined) {
    contents.MetricDatapoints = de_InsightRuleMetricDatapoints(
      __getArrayIfSingleItem(output["MetricDatapoints"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricDataOutput
 */
const de_GetMetricDataOutput = (output: any, context: __SerdeContext): GetMetricDataOutput => {
  const contents: any = {};
  if (output.MetricDataResults === "") {
    contents.MetricDataResults = [];
  } else if (output["MetricDataResults"] !== undefined && output["MetricDataResults"]["member"] !== undefined) {
    contents.MetricDataResults = de_MetricDataResults(
      __getArrayIfSingleItem(output["MetricDataResults"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.Messages === "") {
    contents.Messages = [];
  } else if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = de_MetricDataResultMessages(__getArrayIfSingleItem(output["Messages"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricStatisticsOutput
 */
const de_GetMetricStatisticsOutput = (output: any, context: __SerdeContext): GetMetricStatisticsOutput => {
  const contents: any = {};
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  } else if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
    contents.Datapoints = de_Datapoints(__getArrayIfSingleItem(output["Datapoints"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricStreamOutput
 */
const de_GetMetricStreamOutput = (output: any, context: __SerdeContext): GetMetricStreamOutput => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.IncludeFilters === "") {
    contents.IncludeFilters = [];
  } else if (output["IncludeFilters"] !== undefined && output["IncludeFilters"]["member"] !== undefined) {
    contents.IncludeFilters = de_MetricStreamFilters(
      __getArrayIfSingleItem(output["IncludeFilters"]["member"]),
      context
    );
  }
  if (output.ExcludeFilters === "") {
    contents.ExcludeFilters = [];
  } else if (output["ExcludeFilters"] !== undefined && output["ExcludeFilters"]["member"] !== undefined) {
    contents.ExcludeFilters = de_MetricStreamFilters(
      __getArrayIfSingleItem(output["ExcludeFilters"]["member"]),
      context
    );
  }
  if (output["FirehoseArn"] !== undefined) {
    contents.FirehoseArn = __expectString(output["FirehoseArn"]);
  }
  if (output["RoleArn"] !== undefined) {
    contents.RoleArn = __expectString(output["RoleArn"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationDate"]));
  }
  if (output["LastUpdateDate"] !== undefined) {
    contents.LastUpdateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdateDate"]));
  }
  if (output["OutputFormat"] !== undefined) {
    contents.OutputFormat = __expectString(output["OutputFormat"]);
  }
  if (output.StatisticsConfigurations === "") {
    contents.StatisticsConfigurations = [];
  } else if (
    output["StatisticsConfigurations"] !== undefined &&
    output["StatisticsConfigurations"]["member"] !== undefined
  ) {
    contents.StatisticsConfigurations = de_MetricStreamStatisticsConfigurations(
      __getArrayIfSingleItem(output["StatisticsConfigurations"]["member"]),
      context
    );
  }
  if (output["IncludeLinkedAccountsMetrics"] !== undefined) {
    contents.IncludeLinkedAccountsMetrics = __parseBoolean(output["IncludeLinkedAccountsMetrics"]);
  }
  return contents;
};

/**
 * deserializeAws_queryGetMetricWidgetImageOutput
 */
const de_GetMetricWidgetImageOutput = (output: any, context: __SerdeContext): GetMetricWidgetImageOutput => {
  const contents: any = {};
  if (output["MetricWidgetImage"] !== undefined) {
    contents.MetricWidgetImage = context.base64Decoder(output["MetricWidgetImage"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRule
 */
const de_InsightRule = (output: any, context: __SerdeContext): InsightRule => {
  const contents: any = {};
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["Schema"] !== undefined) {
    contents.Schema = __expectString(output["Schema"]);
  }
  if (output["Definition"] !== undefined) {
    contents.Definition = __expectString(output["Definition"]);
  }
  if (output["ManagedRule"] !== undefined) {
    contents.ManagedRule = __parseBoolean(output["ManagedRule"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleContributor
 */
const de_InsightRuleContributor = (output: any, context: __SerdeContext): InsightRuleContributor => {
  const contents: any = {};
  if (output.Keys === "") {
    contents.Keys = [];
  } else if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
    contents.Keys = de_InsightRuleContributorKeys(__getArrayIfSingleItem(output["Keys"]["member"]), context);
  }
  if (output["ApproximateAggregateValue"] !== undefined) {
    contents.ApproximateAggregateValue = __strictParseFloat(output["ApproximateAggregateValue"]) as number;
  }
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  } else if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
    contents.Datapoints = de_InsightRuleContributorDatapoints(
      __getArrayIfSingleItem(output["Datapoints"]["member"]),
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_queryInsightRuleContributorDatapoint
 */
const de_InsightRuleContributorDatapoint = (output: any, context: __SerdeContext): InsightRuleContributorDatapoint => {
  const contents: any = {};
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["ApproximateValue"] !== undefined) {
    contents.ApproximateValue = __strictParseFloat(output["ApproximateValue"]) as number;
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
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["Timestamp"]));
  }
  if (output["UniqueContributors"] !== undefined) {
    contents.UniqueContributors = __strictParseFloat(output["UniqueContributors"]) as number;
  }
  if (output["MaxContributorValue"] !== undefined) {
    contents.MaxContributorValue = __strictParseFloat(output["MaxContributorValue"]) as number;
  }
  if (output["SampleCount"] !== undefined) {
    contents.SampleCount = __strictParseFloat(output["SampleCount"]) as number;
  }
  if (output["Average"] !== undefined) {
    contents.Average = __strictParseFloat(output["Average"]) as number;
  }
  if (output["Sum"] !== undefined) {
    contents.Sum = __strictParseFloat(output["Sum"]) as number;
  }
  if (output["Minimum"] !== undefined) {
    contents.Minimum = __strictParseFloat(output["Minimum"]) as number;
  }
  if (output["Maximum"] !== undefined) {
    contents.Maximum = __strictParseFloat(output["Maximum"]) as number;
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
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidFormatFault
 */
const de_InvalidFormatFault = (output: any, context: __SerdeContext): InvalidFormatFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidNextToken
 */
const de_InvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryInvalidParameterValueException
 */
const de_InvalidParameterValueException = (output: any, context: __SerdeContext): InvalidParameterValueException => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededException
 */
const de_LimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  const contents: any = {};
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryLimitExceededFault
 */
const de_LimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  const contents: any = {};
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListDashboardsOutput
 */
const de_ListDashboardsOutput = (output: any, context: __SerdeContext): ListDashboardsOutput => {
  const contents: any = {};
  if (output.DashboardEntries === "") {
    contents.DashboardEntries = [];
  } else if (output["DashboardEntries"] !== undefined && output["DashboardEntries"]["member"] !== undefined) {
    contents.DashboardEntries = de_DashboardEntries(
      __getArrayIfSingleItem(output["DashboardEntries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListManagedInsightRulesOutput
 */
const de_ListManagedInsightRulesOutput = (output: any, context: __SerdeContext): ListManagedInsightRulesOutput => {
  const contents: any = {};
  if (output.ManagedRules === "") {
    contents.ManagedRules = [];
  } else if (output["ManagedRules"] !== undefined && output["ManagedRules"]["member"] !== undefined) {
    contents.ManagedRules = de_ManagedRuleDescriptions(
      __getArrayIfSingleItem(output["ManagedRules"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

/**
 * deserializeAws_queryListMetricsOutput
 */
const de_ListMetricsOutput = (output: any, context: __SerdeContext): ListMetricsOutput => {
  const contents: any = {};
  if (output.Metrics === "") {
    contents.Metrics = [];
  } else if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = de_Metrics(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.OwningAccounts === "") {
    contents.OwningAccounts = [];
  } else if (output["OwningAccounts"] !== undefined && output["OwningAccounts"]["member"] !== undefined) {
    contents.OwningAccounts = de_OwningAccounts(__getArrayIfSingleItem(output["OwningAccounts"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListMetricStreamsOutput
 */
const de_ListMetricStreamsOutput = (output: any, context: __SerdeContext): ListMetricStreamsOutput => {
  const contents: any = {};
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.Entries === "") {
    contents.Entries = [];
  } else if (output["Entries"] !== undefined && output["Entries"]["member"] !== undefined) {
    contents.Entries = de_MetricStreamEntries(__getArrayIfSingleItem(output["Entries"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  const contents: any = {};
  if (output.Tags === "") {
    contents.Tags = [];
  } else if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = de_TagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryManagedRuleDescription
 */
const de_ManagedRuleDescription = (output: any, context: __SerdeContext): ManagedRuleDescription => {
  const contents: any = {};
  if (output["TemplateName"] !== undefined) {
    contents.TemplateName = __expectString(output["TemplateName"]);
  }
  if (output["ResourceARN"] !== undefined) {
    contents.ResourceARN = __expectString(output["ResourceARN"]);
  }
  if (output["RuleState"] !== undefined) {
    contents.RuleState = de_ManagedRuleState(output["RuleState"], context);
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
  if (output["RuleName"] !== undefined) {
    contents.RuleName = __expectString(output["RuleName"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMessageData
 */
const de_MessageData = (output: any, context: __SerdeContext): MessageData => {
  const contents: any = {};
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetric
 */
const de_Metric = (output: any, context: __SerdeContext): Metric => {
  const contents: any = {};
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_Dimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricAlarm
 */
const de_MetricAlarm = (output: any, context: __SerdeContext): MetricAlarm => {
  const contents: any = {};
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmArn"] !== undefined) {
    contents.AlarmArn = __expectString(output["AlarmArn"]);
  }
  if (output["AlarmDescription"] !== undefined) {
    contents.AlarmDescription = __expectString(output["AlarmDescription"]);
  }
  if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
    contents.AlarmConfigurationUpdatedTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["AlarmConfigurationUpdatedTimestamp"])
    );
  }
  if (output["ActionsEnabled"] !== undefined) {
    contents.ActionsEnabled = __parseBoolean(output["ActionsEnabled"]);
  }
  if (output.OKActions === "") {
    contents.OKActions = [];
  } else if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
    contents.OKActions = de_ResourceList(__getArrayIfSingleItem(output["OKActions"]["member"]), context);
  }
  if (output.AlarmActions === "") {
    contents.AlarmActions = [];
  } else if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
    contents.AlarmActions = de_ResourceList(__getArrayIfSingleItem(output["AlarmActions"]["member"]), context);
  }
  if (output.InsufficientDataActions === "") {
    contents.InsufficientDataActions = [];
  } else if (
    output["InsufficientDataActions"] !== undefined &&
    output["InsufficientDataActions"]["member"] !== undefined
  ) {
    contents.InsufficientDataActions = de_ResourceList(
      __getArrayIfSingleItem(output["InsufficientDataActions"]["member"]),
      context
    );
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = __expectString(output["StateValue"]);
  }
  if (output["StateReason"] !== undefined) {
    contents.StateReason = __expectString(output["StateReason"]);
  }
  if (output["StateReasonData"] !== undefined) {
    contents.StateReasonData = __expectString(output["StateReasonData"]);
  }
  if (output["StateUpdatedTimestamp"] !== undefined) {
    contents.StateUpdatedTimestamp = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StateUpdatedTimestamp"]));
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = __expectString(output["Statistic"]);
  }
  if (output["ExtendedStatistic"] !== undefined) {
    contents.ExtendedStatistic = __expectString(output["ExtendedStatistic"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_Dimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt32(output["Period"]) as number;
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  if (output["EvaluationPeriods"] !== undefined) {
    contents.EvaluationPeriods = __strictParseInt32(output["EvaluationPeriods"]) as number;
  }
  if (output["DatapointsToAlarm"] !== undefined) {
    contents.DatapointsToAlarm = __strictParseInt32(output["DatapointsToAlarm"]) as number;
  }
  if (output["Threshold"] !== undefined) {
    contents.Threshold = __strictParseFloat(output["Threshold"]) as number;
  }
  if (output["ComparisonOperator"] !== undefined) {
    contents.ComparisonOperator = __expectString(output["ComparisonOperator"]);
  }
  if (output["TreatMissingData"] !== undefined) {
    contents.TreatMissingData = __expectString(output["TreatMissingData"]);
  }
  if (output["EvaluateLowSampleCountPercentile"] !== undefined) {
    contents.EvaluateLowSampleCountPercentile = __expectString(output["EvaluateLowSampleCountPercentile"]);
  }
  if (output.Metrics === "") {
    contents.Metrics = [];
  } else if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = de_MetricDataQueries(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
  }
  if (output["ThresholdMetricId"] !== undefined) {
    contents.ThresholdMetricId = __expectString(output["ThresholdMetricId"]);
  }
  if (output["EvaluationState"] !== undefined) {
    contents.EvaluationState = __expectString(output["EvaluationState"]);
  }
  if (output["StateTransitionedTimestamp"] !== undefined) {
    contents.StateTransitionedTimestamp = __expectNonNull(
      __parseRfc3339DateTimeWithOffset(output["StateTransitionedTimestamp"])
    );
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
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = de_MetricStat(output["MetricStat"], context);
  }
  if (output["Expression"] !== undefined) {
    contents.Expression = __expectString(output["Expression"]);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = __parseBoolean(output["ReturnData"]);
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt32(output["Period"]) as number;
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricDataResult
 */
const de_MetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  const contents: any = {};
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  } else if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = de_Timestamps(__getArrayIfSingleItem(output["Timestamps"]["member"]), context);
  }
  if (output.Values === "") {
    contents.Values = [];
  } else if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = de_DatapointValues(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  if (output.Messages === "") {
    contents.Messages = [];
  } else if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = de_MetricDataResultMessages(__getArrayIfSingleItem(output["Messages"]["member"]), context);
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
  if (output.MetricDataQueries === "") {
    contents.MetricDataQueries = [];
  } else if (output["MetricDataQueries"] !== undefined && output["MetricDataQueries"]["member"] !== undefined) {
    contents.MetricDataQueries = de_MetricDataQueries(
      __getArrayIfSingleItem(output["MetricDataQueries"]["member"]),
      context
    );
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
  if (output["Metric"] !== undefined) {
    contents.Metric = de_Metric(output["Metric"], context);
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt32(output["Period"]) as number;
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
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
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["CreationDate"]));
  }
  if (output["LastUpdateDate"] !== undefined) {
    contents.LastUpdateDate = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["LastUpdateDate"]));
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["FirehoseArn"] !== undefined) {
    contents.FirehoseArn = __expectString(output["FirehoseArn"]);
  }
  if (output["State"] !== undefined) {
    contents.State = __expectString(output["State"]);
  }
  if (output["OutputFormat"] !== undefined) {
    contents.OutputFormat = __expectString(output["OutputFormat"]);
  }
  return contents;
};

/**
 * deserializeAws_queryMetricStreamFilter
 */
const de_MetricStreamFilter = (output: any, context: __SerdeContext): MetricStreamFilter => {
  const contents: any = {};
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output.MetricNames === "") {
    contents.MetricNames = [];
  } else if (output["MetricNames"] !== undefined && output["MetricNames"]["member"] !== undefined) {
    contents.MetricNames = de_MetricStreamFilterMetricNames(
      __getArrayIfSingleItem(output["MetricNames"]["member"]),
      context
    );
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
  if (output.IncludeMetrics === "") {
    contents.IncludeMetrics = [];
  } else if (output["IncludeMetrics"] !== undefined && output["IncludeMetrics"]["member"] !== undefined) {
    contents.IncludeMetrics = de_MetricStreamStatisticsIncludeMetrics(
      __getArrayIfSingleItem(output["IncludeMetrics"]["member"]),
      context
    );
  }
  if (output.AdditionalStatistics === "") {
    contents.AdditionalStatistics = [];
  } else if (output["AdditionalStatistics"] !== undefined && output["AdditionalStatistics"]["member"] !== undefined) {
    contents.AdditionalStatistics = de_MetricStreamStatisticsAdditionalStatistics(
      __getArrayIfSingleItem(output["AdditionalStatistics"]["member"]),
      context
    );
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
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
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
  if (output["FailureResource"] !== undefined) {
    contents.FailureResource = __expectString(output["FailureResource"]);
  }
  if (output["ExceptionType"] !== undefined) {
    contents.ExceptionType = __expectString(output["ExceptionType"]);
  }
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = __expectString(output["FailureCode"]);
  }
  if (output["FailureDescription"] !== undefined) {
    contents.FailureDescription = __expectString(output["FailureDescription"]);
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
  if (output.DashboardValidationMessages === "") {
    contents.DashboardValidationMessages = [];
  } else if (
    output["DashboardValidationMessages"] !== undefined &&
    output["DashboardValidationMessages"]["member"] !== undefined
  ) {
    contents.DashboardValidationMessages = de_DashboardValidationMessages(
      __getArrayIfSingleItem(output["DashboardValidationMessages"]["member"]),
      context
    );
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
  if (output.Failures === "") {
    contents.Failures = [];
  } else if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = de_BatchFailures(__getArrayIfSingleItem(output["Failures"]["member"]), context);
  }
  return contents;
};

/**
 * deserializeAws_queryPutMetricStreamOutput
 */
const de_PutMetricStreamOutput = (output: any, context: __SerdeContext): PutMetricStreamOutput => {
  const contents: any = {};
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

/**
 * deserializeAws_queryRange
 */
const de_Range = (output: any, context: __SerdeContext): Range => {
  const contents: any = {};
  if (output["StartTime"] !== undefined) {
    contents.StartTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["StartTime"]));
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(output["EndTime"]));
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
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

/**
 * deserializeAws_queryResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  const contents: any = {};
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = __expectString(output["ResourceType"]);
  }
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = __expectString(output["ResourceId"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

/**
 * deserializeAws_querySingleMetricAnomalyDetector
 */
const de_SingleMetricAnomalyDetector = (output: any, context: __SerdeContext): SingleMetricAnomalyDetector => {
  const contents: any = {};
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  } else if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = de_Dimensions(__getArrayIfSingleItem(output["Dimensions"]["member"]), context);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
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
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
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

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      const parser = new XMLParser({
        attributeNamePrefix: "",
        htmlEntities: true,
        ignoreAttributes: false,
        ignoreDeclaration: true,
        parseTagValue: false,
        trimValues: false,
        tagValueProcessor: (_: any, val: any) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
      });
      parser.addEntity("#xD", "\r");
      parser.addEntity("#10", "\n");
      const parsedObj = parser.parse(encoded);
      const textNodeName = "#text";
      const key = Object.keys(parsedObj)[0];
      const parsedObjToReturn = parsedObj[key];
      if (parsedObjToReturn[textNodeName]) {
        parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
        delete parsedObjToReturn[textNodeName];
      }
      return __getValueFromTextNode(parsedObjToReturn);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  if (value.Error) {
    value.Error.message = value.Error.message ?? value.Error.Message;
  }
  return value;
};

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
