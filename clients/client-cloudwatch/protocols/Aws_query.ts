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
import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput } from "../commands/ListMetricStreamsCommand";
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "../commands/ListMetricsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput } from "../commands/PutAnomalyDetectorCommand";
import { PutCompositeAlarmCommandInput, PutCompositeAlarmCommandOutput } from "../commands/PutCompositeAlarmCommand";
import { PutDashboardCommandInput, PutDashboardCommandOutput } from "../commands/PutDashboardCommand";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "../commands/PutInsightRuleCommand";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "../commands/PutMetricAlarmCommand";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "../commands/PutMetricDataCommand";
import { PutMetricStreamCommandInput, PutMetricStreamCommandOutput } from "../commands/PutMetricStreamCommand";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "../commands/SetAlarmStateCommand";
import { StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput } from "../commands/StartMetricStreamsCommand";
import { StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput } from "../commands/StopMetricStreamsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  AlarmHistoryItem,
  AlarmType,
  AnomalyDetector,
  AnomalyDetectorConfiguration,
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
  ListMetricStreamsInput,
  ListMetricStreamsOutput,
  ListMetricsInput,
  ListMetricsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  MessageData,
  Metric,
  MetricAlarm,
  MetricDataQuery,
  MetricDataResult,
  MetricDatum,
  MetricStat,
  MetricStreamEntry,
  MetricStreamFilter,
  MissingRequiredParameterException,
  PartialFailure,
  PutAnomalyDetectorInput,
  PutAnomalyDetectorOutput,
  PutCompositeAlarmInput,
  PutDashboardInput,
  PutDashboardOutput,
  PutInsightRuleInput,
  PutInsightRuleOutput,
  PutMetricAlarmInput,
  PutMetricDataInput,
  PutMetricStreamInput,
  PutMetricStreamOutput,
  Range,
  ResourceNotFound,
  ResourceNotFoundException,
  SetAlarmStateInput,
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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode,
  parseBoolean as __parseBoolean,
  serializeFloat as __serializeFloat,
  strictParseFloat as __strictParseFloat,
  strictParseInt as __strictParseInt,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { decodeHTML } from "entities";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryDeleteAlarmsCommand = async (
  input: DeleteAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAlarmsInput(input, context),
    Action: "DeleteAlarms",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAnomalyDetectorInput(input, context),
    Action: "DeleteAnomalyDetector",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDashboardsCommand = async (
  input: DeleteDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDashboardsInput(input, context),
    Action: "DeleteDashboards",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteInsightRulesCommand = async (
  input: DeleteInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteInsightRulesInput(input, context),
    Action: "DeleteInsightRules",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteMetricStreamCommand = async (
  input: DeleteMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteMetricStreamInput(input, context),
    Action: "DeleteMetricStream",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmHistoryCommand = async (
  input: DescribeAlarmHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmHistoryInput(input, context),
    Action: "DescribeAlarmHistory",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmsCommand = async (
  input: DescribeAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmsInput(input, context),
    Action: "DescribeAlarms",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmsForMetricCommand = async (
  input: DescribeAlarmsForMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmsForMetricInput(input, context),
    Action: "DescribeAlarmsForMetric",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAnomalyDetectorsCommand = async (
  input: DescribeAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAnomalyDetectorsInput(input, context),
    Action: "DescribeAnomalyDetectors",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeInsightRulesCommand = async (
  input: DescribeInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeInsightRulesInput(input, context),
    Action: "DescribeInsightRules",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableAlarmActionsCommand = async (
  input: DisableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableAlarmActionsInput(input, context),
    Action: "DisableAlarmActions",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableInsightRulesCommand = async (
  input: DisableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableInsightRulesInput(input, context),
    Action: "DisableInsightRules",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableAlarmActionsCommand = async (
  input: EnableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableAlarmActionsInput(input, context),
    Action: "EnableAlarmActions",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableInsightRulesCommand = async (
  input: EnableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableInsightRulesInput(input, context),
    Action: "EnableInsightRules",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetDashboardCommand = async (
  input: GetDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetDashboardInput(input, context),
    Action: "GetDashboard",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetInsightRuleReportCommand = async (
  input: GetInsightRuleReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetInsightRuleReportInput(input, context),
    Action: "GetInsightRuleReport",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricDataInput(input, context),
    Action: "GetMetricData",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricStatisticsCommand = async (
  input: GetMetricStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricStatisticsInput(input, context),
    Action: "GetMetricStatistics",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricStreamCommand = async (
  input: GetMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricStreamInput(input, context),
    Action: "GetMetricStream",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricWidgetImageCommand = async (
  input: GetMetricWidgetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricWidgetImageInput(input, context),
    Action: "GetMetricWidgetImage",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListDashboardsInput(input, context),
    Action: "ListDashboards",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListMetricsCommand = async (
  input: ListMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListMetricsInput(input, context),
    Action: "ListMetrics",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListMetricStreamsCommand = async (
  input: ListMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListMetricStreamsInput(input, context),
    Action: "ListMetricStreams",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceInput(input, context),
    Action: "ListTagsForResource",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutAnomalyDetectorCommand = async (
  input: PutAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutAnomalyDetectorInput(input, context),
    Action: "PutAnomalyDetector",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutCompositeAlarmCommand = async (
  input: PutCompositeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutCompositeAlarmInput(input, context),
    Action: "PutCompositeAlarm",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutDashboardCommand = async (
  input: PutDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutDashboardInput(input, context),
    Action: "PutDashboard",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutInsightRuleCommand = async (
  input: PutInsightRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutInsightRuleInput(input, context),
    Action: "PutInsightRule",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutMetricAlarmCommand = async (
  input: PutMetricAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutMetricAlarmInput(input, context),
    Action: "PutMetricAlarm",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutMetricDataCommand = async (
  input: PutMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutMetricDataInput(input, context),
    Action: "PutMetricData",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutMetricStreamCommand = async (
  input: PutMetricStreamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutMetricStreamInput(input, context),
    Action: "PutMetricStream",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetAlarmStateCommand = async (
  input: SetAlarmStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetAlarmStateInput(input, context),
    Action: "SetAlarmState",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStartMetricStreamsCommand = async (
  input: StartMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStartMetricStreamsInput(input, context),
    Action: "StartMetricStreams",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryStopMetricStreamsCommand = async (
  input: StopMetricStreamsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryStopMetricStreamsInput(input, context),
    Action: "StopMetricStreams",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagResourceInput(input, context),
    Action: "TagResource",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-www-form-urlencoded",
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagResourceInput(input, context),
    Action: "UntagResource",
    Version: "2010-08-01",
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryDeleteAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAlarmsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      response = {
        ...(await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteAnomalyDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAnomalyDetectorOutput(data.DeleteAnomalyDetectorResult, context);
  const response: DeleteAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteDashboardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDashboardsOutput(data.DeleteDashboardsResult, context);
  const response: DeleteDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardNotFoundError":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      response = {
        ...(await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteInsightRulesOutput(data.DeleteInsightRulesResult, context);
  const response: DeleteInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDeleteMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDeleteMetricStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteMetricStreamOutput(data.DeleteMetricStreamResult, context);
  const response: DeleteMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAlarmHistoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAlarmHistoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmHistoryOutput(data.DescribeAlarmHistoryResult, context);
  const response: DescribeAlarmHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAlarmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmsOutput(data.DescribeAlarmsResult, context);
  const response: DescribeAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAlarmsForMetricCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAlarmsForMetricCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmsForMetricOutput(data.DescribeAlarmsForMetricResult, context);
  const response: DescribeAlarmsForMetricCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmsForMetricCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeAnomalyDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeAnomalyDetectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAnomalyDetectorsOutput(data.DescribeAnomalyDetectorsResult, context);
  const response: DescribeAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAnomalyDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDescribeInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDescribeInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeInsightRulesOutput(data.DescribeInsightRulesResult, context);
  const response: DescribeInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDisableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryDisableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryDisableInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDisableInsightRulesOutput(data.DisableInsightRulesResult, context);
  const response: DisableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEnableAlarmActionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryEnableInsightRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryEnableInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnableInsightRulesOutput(data.EnableInsightRulesResult, context);
  const response: EnableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetDashboardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetDashboardOutput(data.GetDashboardResult, context);
  const response: GetDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardNotFoundError":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      response = {
        ...(await deserializeAws_queryDashboardNotFoundErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetInsightRuleReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetInsightRuleReportCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetInsightRuleReportOutput(data.GetInsightRuleReportResult, context);
  const response: GetInsightRuleReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetInsightRuleReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricDataOutput(data.GetMetricDataResult, context);
  const response: GetMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetMetricStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetMetricStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricStatisticsOutput(data.GetMetricStatisticsResult, context);
  const response: GetMetricStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetMetricStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricStreamOutput(data.GetMetricStreamResult, context);
  const response: GetMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryGetMetricWidgetImageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryGetMetricWidgetImageCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricWidgetImageOutput(data.GetMetricWidgetImageResult, context);
  const response: GetMetricWidgetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricWidgetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListDashboardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListDashboardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDashboardsOutput(data.ListDashboardsResult, context);
  const response: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListMetricsOutput(data.ListMetricsResult, context);
  const response: ListMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListMetricStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListMetricStreamsOutput(data.ListMetricStreamsResult, context);
  const response: ListMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTagsForResourceOutput(data.ListTagsForResourceResult, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutAnomalyDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutAnomalyDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutAnomalyDetectorOutput(data.PutAnomalyDetectorResult, context);
  const response: PutAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutCompositeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCompositeAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutCompositeAlarmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutCompositeAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutCompositeAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCompositeAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutDashboardCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutDashboardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutDashboardOutput(data.PutDashboardResult, context);
  const response: PutDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardInvalidInputError":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      response = {
        ...(await deserializeAws_queryDashboardInvalidInputErrorResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutInsightRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutInsightRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutInsightRuleOutput(data.PutInsightRuleResult, context);
  const response: PutInsightRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutInsightRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutMetricAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutMetricAlarmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricAlarmCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutMetricAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutMetricDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutMetricDataCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryPutMetricStreamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricStreamCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryPutMetricStreamCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutMetricStreamOutput(data.PutMetricStreamResult, context);
  const response: PutMetricStreamCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutMetricStreamCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricStreamCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_querySetAlarmStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_querySetAlarmStateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetAlarmStateCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetAlarmStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidFormatFault":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      response = {
        ...(await deserializeAws_queryInvalidFormatFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      response = {
        ...(await deserializeAws_queryResourceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryStartMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStartMetricStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStartMetricStreamsOutput(data.StartMetricStreamsResult, context);
  const response: StartMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStartMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryStopMetricStreamsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMetricStreamsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryStopMetricStreamsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryStopMetricStreamsOutput(data.StopMetricStreamsResult, context);
  const response: StopMetricStreamsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryStopMetricStreamsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopMetricStreamsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryTagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryTagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagResourceOutput(data.TagResourceResult, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_queryUntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_queryUntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUntagResourceOutput(data.UntagResourceResult, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message: parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_queryConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryConcurrentModificationException(body.Error, context);
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDashboardInvalidInputErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardInvalidInputError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDashboardInvalidInputError(body.Error, context);
  const contents: DashboardInvalidInputError = {
    name: "DashboardInvalidInputError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryDashboardNotFoundErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardNotFoundError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDashboardNotFoundError(body.Error, context);
  const contents: DashboardNotFoundError = {
    name: "DashboardNotFoundError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInternalServiceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalServiceFault(body.Error, context);
  const contents: InternalServiceFault = {
    name: "InternalServiceFault",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidFormatFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFormatFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidFormatFault(body.Error, context);
  const contents: InvalidFormatFault = {
    name: "InvalidFormatFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidNextTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidNextToken(body.Error, context);
  const contents: InvalidNextToken = {
    name: "InvalidNextToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterCombinationException(body.Error, context);
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(body.Error, context);
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(body.Error, context);
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededFault(body.Error, context);
  const contents: LimitExceededFault = {
    name: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryMissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMissingRequiredParameterException(body.Error, context);
  const contents: MissingRequiredParameterException = {
    name: "MissingRequiredParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFound(body.Error, context);
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(body.Error, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_queryAlarmNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAlarmTypes = (input: (AlarmType | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryAnomalyDetectorConfiguration = (
  input: AnomalyDetectorConfiguration,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ExcludedTimeRanges !== undefined && input.ExcludedTimeRanges !== null) {
    const memberEntries = serializeAws_queryAnomalyDetectorExcludedTimeRanges(input.ExcludedTimeRanges, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedTimeRanges.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricTimezone !== undefined && input.MetricTimezone !== null) {
    entries["MetricTimezone"] = input.MetricTimezone;
  }
  return entries;
};

const serializeAws_queryAnomalyDetectorExcludedTimeRanges = (input: Range[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryRange(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCounts = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = __serializeFloat(entry);
    counter++;
  }
  return entries;
};

const serializeAws_queryDashboardNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDeleteAlarmsInput = (input: DeleteAlarmsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
    const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteAnomalyDetectorInput = (
  input: DeleteAnomalyDetectorInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat !== undefined && input.Stat !== null) {
    entries["Stat"] = input.Stat;
  }
  return entries;
};

const serializeAws_queryDeleteDashboardsInput = (input: DeleteDashboardsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardNames !== undefined && input.DashboardNames !== null) {
    const memberEntries = serializeAws_queryDashboardNames(input.DashboardNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DashboardNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteInsightRulesInput = (input: DeleteInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined && input.RuleNames !== null) {
    const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteMetricStreamInput = (input: DeleteMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  return entries;
};

const serializeAws_queryDescribeAlarmHistoryInput = (
  input: DescribeAlarmHistoryInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmName !== undefined && input.AlarmName !== null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
    const memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.HistoryItemType !== undefined && input.HistoryItemType !== null) {
    entries["HistoryItemType"] = input.HistoryItemType;
  }
  if (input.StartDate !== undefined && input.StartDate !== null) {
    entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
  }
  if (input.EndDate !== undefined && input.EndDate !== null) {
    entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScanBy !== undefined && input.ScanBy !== null) {
    entries["ScanBy"] = input.ScanBy;
  }
  return entries;
};

const serializeAws_queryDescribeAlarmsForMetricInput = (
  input: DescribeAlarmsForMetricInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Statistic !== undefined && input.Statistic !== null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryDescribeAlarmsInput = (input: DescribeAlarmsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
    const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmNamePrefix !== undefined && input.AlarmNamePrefix !== null) {
    entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
  }
  if (input.AlarmTypes !== undefined && input.AlarmTypes !== null) {
    const memberEntries = serializeAws_queryAlarmTypes(input.AlarmTypes, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmTypes.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ChildrenOfAlarmName !== undefined && input.ChildrenOfAlarmName !== null) {
    entries["ChildrenOfAlarmName"] = input.ChildrenOfAlarmName;
  }
  if (input.ParentsOfAlarmName !== undefined && input.ParentsOfAlarmName !== null) {
    entries["ParentsOfAlarmName"] = input.ParentsOfAlarmName;
  }
  if (input.StateValue !== undefined && input.StateValue !== null) {
    entries["StateValue"] = input.StateValue;
  }
  if (input.ActionPrefix !== undefined && input.ActionPrefix !== null) {
    entries["ActionPrefix"] = input.ActionPrefix;
  }
  if (input.MaxRecords !== undefined && input.MaxRecords !== null) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeAnomalyDetectorsInput = (
  input: DescribeAnomalyDetectorsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeInsightRulesInput = (
  input: DescribeInsightRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryDimension = (input: Dimension, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryDimensionFilter = (input: DimensionFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryDimensionFilters = (input: DimensionFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryDimensionFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDimensions = (input: Dimension[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDisableAlarmActionsInput = (input: DisableAlarmActionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
    const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDisableInsightRulesInput = (input: DisableInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined && input.RuleNames !== null) {
    const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnableAlarmActionsInput = (input: EnableAlarmActionsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined && input.AlarmNames !== null) {
    const memberEntries = serializeAws_queryAlarmNames(input.AlarmNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnableInsightRulesInput = (input: EnableInsightRulesInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined && input.RuleNames !== null) {
    const memberEntries = serializeAws_queryInsightRuleNames(input.RuleNames, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryExtendedStatistics = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryGetDashboardInput = (input: GetDashboardInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardName !== undefined && input.DashboardName !== null) {
    entries["DashboardName"] = input.DashboardName;
  }
  return entries;
};

const serializeAws_queryGetInsightRuleReportInput = (
  input: GetInsightRuleReportInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleName !== undefined && input.RuleName !== null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.MaxContributorCount !== undefined && input.MaxContributorCount !== null) {
    entries["MaxContributorCount"] = input.MaxContributorCount;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    const memberEntries = serializeAws_queryInsightRuleMetricList(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OrderBy !== undefined && input.OrderBy !== null) {
    entries["OrderBy"] = input.OrderBy;
  }
  return entries;
};

const serializeAws_queryGetMetricDataInput = (input: GetMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricDataQueries !== undefined && input.MetricDataQueries !== null) {
    const memberEntries = serializeAws_queryMetricDataQueries(input.MetricDataQueries, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScanBy !== undefined && input.ScanBy !== null) {
    entries["ScanBy"] = input.ScanBy;
  }
  if (input.MaxDatapoints !== undefined && input.MaxDatapoints !== null) {
    entries["MaxDatapoints"] = input.MaxDatapoints;
  }
  if (input.LabelOptions !== undefined && input.LabelOptions !== null) {
    const memberEntries = serializeAws_queryLabelOptions(input.LabelOptions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `LabelOptions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryGetMetricStatisticsInput = (input: GetMetricStatisticsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.Statistics !== undefined && input.Statistics !== null) {
    const memberEntries = serializeAws_queryStatistics(input.Statistics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Statistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExtendedStatistics !== undefined && input.ExtendedStatistics !== null) {
    const memberEntries = serializeAws_queryExtendedStatistics(input.ExtendedStatistics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtendedStatistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryGetMetricStreamInput = (input: GetMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  return entries;
};

const serializeAws_queryGetMetricWidgetImageInput = (
  input: GetMetricWidgetImageInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricWidget !== undefined && input.MetricWidget !== null) {
    entries["MetricWidget"] = input.MetricWidget;
  }
  if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
    entries["OutputFormat"] = input.OutputFormat;
  }
  return entries;
};

const serializeAws_queryInsightRuleMetricList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryInsightRuleNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryLabelOptions = (input: LabelOptions, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Timezone !== undefined && input.Timezone !== null) {
    entries["Timezone"] = input.Timezone;
  }
  return entries;
};

const serializeAws_queryListDashboardsInput = (input: ListDashboardsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardNamePrefix !== undefined && input.DashboardNamePrefix !== null) {
    entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListMetricsInput = (input: ListMetricsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensionFilters(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.RecentlyActive !== undefined && input.RecentlyActive !== null) {
    entries["RecentlyActive"] = input.RecentlyActive;
  }
  return entries;
};

const serializeAws_queryListMetricStreamsInput = (input: ListMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.NextToken !== undefined && input.NextToken !== null) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.MaxResults !== undefined && input.MaxResults !== null) {
    entries["MaxResults"] = input.MaxResults;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  return entries;
};

const serializeAws_queryMetric = (input: Metric, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryMetricData = (input: MetricDatum[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricDatum(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDataQueries = (input: MetricDataQuery[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDataQuery = (input: MetricDataQuery, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Id !== undefined && input.Id !== null) {
    entries["Id"] = input.Id;
  }
  if (input.MetricStat !== undefined && input.MetricStat !== null) {
    const memberEntries = serializeAws_queryMetricStat(input.MetricStat, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Expression !== undefined && input.Expression !== null) {
    entries["Expression"] = input.Expression;
  }
  if (input.Label !== undefined && input.Label !== null) {
    entries["Label"] = input.Label;
  }
  if (input.ReturnData !== undefined && input.ReturnData !== null) {
    entries["ReturnData"] = input.ReturnData;
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.AccountId !== undefined && input.AccountId !== null) {
    entries["AccountId"] = input.AccountId;
  }
  return entries;
};

const serializeAws_queryMetricDatum = (input: MetricDatum, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Timestamp !== undefined && input.Timestamp !== null) {
    entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = __serializeFloat(input.Value);
  }
  if (input.StatisticValues !== undefined && input.StatisticValues !== null) {
    const memberEntries = serializeAws_queryStatisticSet(input.StatisticValues, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Values !== undefined && input.Values !== null) {
    const memberEntries = serializeAws_queryValues(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Counts !== undefined && input.Counts !== null) {
    const memberEntries = serializeAws_queryCounts(input.Counts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Counts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  if (input.StorageResolution !== undefined && input.StorageResolution !== null) {
    entries["StorageResolution"] = input.StorageResolution;
  }
  return entries;
};

const serializeAws_queryMetricStat = (input: MetricStat, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Metric !== undefined && input.Metric !== null) {
    const memberEntries = serializeAws_queryMetric(input.Metric, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.Stat !== undefined && input.Stat !== null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryMetricStreamFilter = (input: MetricStreamFilter, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  return entries;
};

const serializeAws_queryMetricStreamFilters = (input: MetricStreamFilter[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryMetricStreamFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricStreamNames = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryPutAnomalyDetectorInput = (input: PutAnomalyDetectorInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Stat !== undefined && input.Stat !== null) {
    entries["Stat"] = input.Stat;
  }
  if (input.Configuration !== undefined && input.Configuration !== null) {
    const memberEntries = serializeAws_queryAnomalyDetectorConfiguration(input.Configuration, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Configuration.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutCompositeAlarmInput = (input: PutCompositeAlarmInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
    entries["ActionsEnabled"] = input.ActionsEnabled;
  }
  if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
    entries["AlarmDescription"] = input.AlarmDescription;
  }
  if (input.AlarmName !== undefined && input.AlarmName !== null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmRule !== undefined && input.AlarmRule !== null) {
    entries["AlarmRule"] = input.AlarmRule;
  }
  if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OKActions !== undefined && input.OKActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.OKActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutDashboardInput = (input: PutDashboardInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.DashboardName !== undefined && input.DashboardName !== null) {
    entries["DashboardName"] = input.DashboardName;
  }
  if (input.DashboardBody !== undefined && input.DashboardBody !== null) {
    entries["DashboardBody"] = input.DashboardBody;
  }
  return entries;
};

const serializeAws_queryPutInsightRuleInput = (input: PutInsightRuleInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.RuleName !== undefined && input.RuleName !== null) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.RuleState !== undefined && input.RuleState !== null) {
    entries["RuleState"] = input.RuleState;
  }
  if (input.RuleDefinition !== undefined && input.RuleDefinition !== null) {
    entries["RuleDefinition"] = input.RuleDefinition;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutMetricAlarmInput = (input: PutMetricAlarmInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmName !== undefined && input.AlarmName !== null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.AlarmDescription !== undefined && input.AlarmDescription !== null) {
    entries["AlarmDescription"] = input.AlarmDescription;
  }
  if (input.ActionsEnabled !== undefined && input.ActionsEnabled !== null) {
    entries["ActionsEnabled"] = input.ActionsEnabled;
  }
  if (input.OKActions !== undefined && input.OKActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.OKActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmActions !== undefined && input.AlarmActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.AlarmActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.InsufficientDataActions !== undefined && input.InsufficientDataActions !== null) {
    const memberEntries = serializeAws_queryResourceList(input.InsufficientDataActions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined && input.MetricName !== null) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Statistic !== undefined && input.Statistic !== null) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.ExtendedStatistic !== undefined && input.ExtendedStatistic !== null) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.Dimensions !== undefined && input.Dimensions !== null) {
    const memberEntries = serializeAws_queryDimensions(input.Dimensions, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined && input.Period !== null) {
    entries["Period"] = input.Period;
  }
  if (input.Unit !== undefined && input.Unit !== null) {
    entries["Unit"] = input.Unit;
  }
  if (input.EvaluationPeriods !== undefined && input.EvaluationPeriods !== null) {
    entries["EvaluationPeriods"] = input.EvaluationPeriods;
  }
  if (input.DatapointsToAlarm !== undefined && input.DatapointsToAlarm !== null) {
    entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
  }
  if (input.Threshold !== undefined && input.Threshold !== null) {
    entries["Threshold"] = __serializeFloat(input.Threshold);
  }
  if (input.ComparisonOperator !== undefined && input.ComparisonOperator !== null) {
    entries["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.TreatMissingData !== undefined && input.TreatMissingData !== null) {
    entries["TreatMissingData"] = input.TreatMissingData;
  }
  if (input.EvaluateLowSampleCountPercentile !== undefined && input.EvaluateLowSampleCountPercentile !== null) {
    entries["EvaluateLowSampleCountPercentile"] = input.EvaluateLowSampleCountPercentile;
  }
  if (input.Metrics !== undefined && input.Metrics !== null) {
    const memberEntries = serializeAws_queryMetricDataQueries(input.Metrics, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ThresholdMetricId !== undefined && input.ThresholdMetricId !== null) {
    entries["ThresholdMetricId"] = input.ThresholdMetricId;
  }
  return entries;
};

const serializeAws_queryPutMetricDataInput = (input: PutMetricDataInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Namespace !== undefined && input.Namespace !== null) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.MetricData !== undefined && input.MetricData !== null) {
    const memberEntries = serializeAws_queryMetricData(input.MetricData, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricData.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryPutMetricStreamInput = (input: PutMetricStreamInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Name !== undefined && input.Name !== null) {
    entries["Name"] = input.Name;
  }
  if (input.IncludeFilters !== undefined && input.IncludeFilters !== null) {
    const memberEntries = serializeAws_queryMetricStreamFilters(input.IncludeFilters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `IncludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExcludeFilters !== undefined && input.ExcludeFilters !== null) {
    const memberEntries = serializeAws_queryMetricStreamFilters(input.ExcludeFilters, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludeFilters.${key}`;
      entries[loc] = value;
    });
  }
  if (input.FirehoseArn !== undefined && input.FirehoseArn !== null) {
    entries["FirehoseArn"] = input.FirehoseArn;
  }
  if (input.RoleArn !== undefined && input.RoleArn !== null) {
    entries["RoleArn"] = input.RoleArn;
  }
  if (input.OutputFormat !== undefined && input.OutputFormat !== null) {
    entries["OutputFormat"] = input.OutputFormat;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryRange = (input: Range, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.StartTime !== undefined && input.StartTime !== null) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.EndTime !== undefined && input.EndTime !== null) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryResourceList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetAlarmStateInput = (input: SetAlarmStateInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.AlarmName !== undefined && input.AlarmName !== null) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.StateValue !== undefined && input.StateValue !== null) {
    entries["StateValue"] = input.StateValue;
  }
  if (input.StateReason !== undefined && input.StateReason !== null) {
    entries["StateReason"] = input.StateReason;
  }
  if (input.StateReasonData !== undefined && input.StateReasonData !== null) {
    entries["StateReasonData"] = input.StateReasonData;
  }
  return entries;
};

const serializeAws_queryStartMetricStreamsInput = (input: StartMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names !== undefined && input.Names !== null) {
    const memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryStatistics = (input: (Statistic | string)[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStatisticSet = (input: StatisticSet, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.SampleCount !== undefined && input.SampleCount !== null) {
    entries["SampleCount"] = __serializeFloat(input.SampleCount);
  }
  if (input.Sum !== undefined && input.Sum !== null) {
    entries["Sum"] = __serializeFloat(input.Sum);
  }
  if (input.Minimum !== undefined && input.Minimum !== null) {
    entries["Minimum"] = __serializeFloat(input.Minimum);
  }
  if (input.Maximum !== undefined && input.Maximum !== null) {
    entries["Maximum"] = __serializeFloat(input.Maximum);
  }
  return entries;
};

const serializeAws_queryStopMetricStreamsInput = (input: StopMetricStreamsInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Names !== undefined && input.Names !== null) {
    const memberEntries = serializeAws_queryMetricStreamNames(input.Names, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Names.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined && input.Key !== null) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined && input.Value !== null) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (input: string[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (input: Tag[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined && input.Tags !== null) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined && input.ResourceARN !== null) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined && input.TagKeys !== null) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryValues = (input: number[], context: __SerdeContext): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    if (entry === null) {
      continue;
    }
    entries[`member.${counter}`] = __serializeFloat(entry);
    counter++;
  }
  return entries;
};

const deserializeAws_queryAlarmHistoryItem = (output: any, context: __SerdeContext): AlarmHistoryItem => {
  let contents: any = {
    AlarmName: undefined,
    AlarmType: undefined,
    Timestamp: undefined,
    HistoryItemType: undefined,
    HistorySummary: undefined,
    HistoryData: undefined,
  };
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = __expectString(output["AlarmName"]);
  }
  if (output["AlarmType"] !== undefined) {
    contents.AlarmType = __expectString(output["AlarmType"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
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

const deserializeAws_queryAlarmHistoryItems = (output: any, context: __SerdeContext): AlarmHistoryItem[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAlarmHistoryItem(entry, context);
    });
};

const deserializeAws_queryAnomalyDetector = (output: any, context: __SerdeContext): AnomalyDetector => {
  let contents: any = {
    Namespace: undefined,
    MetricName: undefined,
    Dimensions: undefined,
    Stat: undefined,
    Configuration: undefined,
    StateValue: undefined,
  };
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Configuration"] !== undefined) {
    contents.Configuration = deserializeAws_queryAnomalyDetectorConfiguration(output["Configuration"], context);
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = __expectString(output["StateValue"]);
  }
  return contents;
};

const deserializeAws_queryAnomalyDetectorConfiguration = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorConfiguration => {
  let contents: any = {
    ExcludedTimeRanges: undefined,
    MetricTimezone: undefined,
  };
  if (output.ExcludedTimeRanges === "") {
    contents.ExcludedTimeRanges = [];
  }
  if (output["ExcludedTimeRanges"] !== undefined && output["ExcludedTimeRanges"]["member"] !== undefined) {
    contents.ExcludedTimeRanges = deserializeAws_queryAnomalyDetectorExcludedTimeRanges(
      __getArrayIfSingleItem(output["ExcludedTimeRanges"]["member"]),
      context
    );
  }
  if (output["MetricTimezone"] !== undefined) {
    contents.MetricTimezone = __expectString(output["MetricTimezone"]);
  }
  return contents;
};

const deserializeAws_queryAnomalyDetectorExcludedTimeRanges = (output: any, context: __SerdeContext): Range[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryRange(entry, context);
    });
};

const deserializeAws_queryAnomalyDetectors = (output: any, context: __SerdeContext): AnomalyDetector[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryAnomalyDetector(entry, context);
    });
};

const deserializeAws_queryBatchFailures = (output: any, context: __SerdeContext): PartialFailure[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryPartialFailure(entry, context);
    });
};

const deserializeAws_queryCompositeAlarm = (output: any, context: __SerdeContext): CompositeAlarm => {
  let contents: any = {
    ActionsEnabled: undefined,
    AlarmActions: undefined,
    AlarmArn: undefined,
    AlarmConfigurationUpdatedTimestamp: undefined,
    AlarmDescription: undefined,
    AlarmName: undefined,
    AlarmRule: undefined,
    InsufficientDataActions: undefined,
    OKActions: undefined,
    StateReason: undefined,
    StateReasonData: undefined,
    StateUpdatedTimestamp: undefined,
    StateValue: undefined,
  };
  if (output["ActionsEnabled"] !== undefined) {
    contents.ActionsEnabled = __parseBoolean(output["ActionsEnabled"]);
  }
  if (output.AlarmActions === "") {
    contents.AlarmActions = [];
  }
  if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
    contents.AlarmActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["AlarmActions"]["member"]),
      context
    );
  }
  if (output["AlarmArn"] !== undefined) {
    contents.AlarmArn = __expectString(output["AlarmArn"]);
  }
  if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
    contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
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
  }
  if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
    contents.InsufficientDataActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["InsufficientDataActions"]["member"]),
      context
    );
  }
  if (output.OKActions === "") {
    contents.OKActions = [];
  }
  if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
    contents.OKActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["OKActions"]["member"]),
      context
    );
  }
  if (output["StateReason"] !== undefined) {
    contents.StateReason = __expectString(output["StateReason"]);
  }
  if (output["StateReasonData"] !== undefined) {
    contents.StateReasonData = __expectString(output["StateReasonData"]);
  }
  if (output["StateUpdatedTimestamp"] !== undefined) {
    contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = __expectString(output["StateValue"]);
  }
  return contents;
};

const deserializeAws_queryCompositeAlarms = (output: any, context: __SerdeContext): CompositeAlarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryCompositeAlarm(entry, context);
    });
};

const deserializeAws_queryConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDashboardEntries = (output: any, context: __SerdeContext): DashboardEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryDashboardEntry(entry, context);
    });
};

const deserializeAws_queryDashboardEntry = (output: any, context: __SerdeContext): DashboardEntry => {
  let contents: any = {
    DashboardName: undefined,
    DashboardArn: undefined,
    LastModified: undefined,
    Size: undefined,
  };
  if (output["DashboardName"] !== undefined) {
    contents.DashboardName = __expectString(output["DashboardName"]);
  }
  if (output["DashboardArn"] !== undefined) {
    contents.DashboardArn = __expectString(output["DashboardArn"]);
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = __strictParseInt(output["Size"]) as number;
  }
  return contents;
};

const deserializeAws_queryDashboardInvalidInputError = (
  output: any,
  context: __SerdeContext
): DashboardInvalidInputError => {
  let contents: any = {
    message: undefined,
    dashboardValidationMessages: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  if (output.dashboardValidationMessages === "") {
    contents.dashboardValidationMessages = [];
  }
  if (
    output["dashboardValidationMessages"] !== undefined &&
    output["dashboardValidationMessages"]["member"] !== undefined
  ) {
    contents.dashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(
      __getArrayIfSingleItem(output["dashboardValidationMessages"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDashboardNotFoundError = (output: any, context: __SerdeContext): DashboardNotFoundError => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryDashboardValidationMessage = (
  output: any,
  context: __SerdeContext
): DashboardValidationMessage => {
  let contents: any = {
    DataPath: undefined,
    Message: undefined,
  };
  if (output["DataPath"] !== undefined) {
    contents.DataPath = __expectString(output["DataPath"]);
  }
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryDashboardValidationMessages = (
  output: any,
  context: __SerdeContext
): DashboardValidationMessage[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryDashboardValidationMessage(entry, context);
    });
};

const deserializeAws_queryDatapoint = (output: any, context: __SerdeContext): Datapoint => {
  let contents: any = {
    Timestamp: undefined,
    SampleCount: undefined,
    Average: undefined,
    Sum: undefined,
    Minimum: undefined,
    Maximum: undefined,
    Unit: undefined,
    ExtendedStatistics: undefined,
  };
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
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
  }
  if (output["ExtendedStatistics"] !== undefined && output["ExtendedStatistics"]["entry"] !== undefined) {
    contents.ExtendedStatistics = deserializeAws_queryDatapointValueMap(
      __getArrayIfSingleItem(output["ExtendedStatistics"]["entry"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDatapoints = (output: any, context: __SerdeContext): Datapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryDatapoint(entry, context);
    });
};

const deserializeAws_queryDatapointValueMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return output.reduce((acc: any, pair: any) => {
    if (pair["value"] === null) {
      return acc;
    }
    return {
      ...acc,
      [pair["key"]]: __strictParseFloat(pair["value"]) as number,
    };
  }, {});
};

const deserializeAws_queryDatapointValues = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __strictParseFloat(entry) as number;
    });
};

const deserializeAws_queryDeleteAnomalyDetectorOutput = (
  output: any,
  context: __SerdeContext
): DeleteAnomalyDetectorOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteDashboardsOutput = (output: any, context: __SerdeContext): DeleteDashboardsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDeleteInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DeleteInsightRulesOutput => {
  let contents: any = {
    Failures: undefined,
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = deserializeAws_queryBatchFailures(
      __getArrayIfSingleItem(output["Failures"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDeleteMetricStreamOutput = (
  output: any,
  context: __SerdeContext
): DeleteMetricStreamOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryDescribeAlarmHistoryOutput = (
  output: any,
  context: __SerdeContext
): DescribeAlarmHistoryOutput => {
  let contents: any = {
    AlarmHistoryItems: undefined,
    NextToken: undefined,
  };
  if (output.AlarmHistoryItems === "") {
    contents.AlarmHistoryItems = [];
  }
  if (output["AlarmHistoryItems"] !== undefined && output["AlarmHistoryItems"]["member"] !== undefined) {
    contents.AlarmHistoryItems = deserializeAws_queryAlarmHistoryItems(
      __getArrayIfSingleItem(output["AlarmHistoryItems"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeAlarmsForMetricOutput = (
  output: any,
  context: __SerdeContext
): DescribeAlarmsForMetricOutput => {
  let contents: any = {
    MetricAlarms: undefined,
  };
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  }
  if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
    contents.MetricAlarms = deserializeAws_queryMetricAlarms(
      __getArrayIfSingleItem(output["MetricAlarms"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAlarmsOutput = (output: any, context: __SerdeContext): DescribeAlarmsOutput => {
  let contents: any = {
    CompositeAlarms: undefined,
    MetricAlarms: undefined,
    NextToken: undefined,
  };
  if (output.CompositeAlarms === "") {
    contents.CompositeAlarms = [];
  }
  if (output["CompositeAlarms"] !== undefined && output["CompositeAlarms"]["member"] !== undefined) {
    contents.CompositeAlarms = deserializeAws_queryCompositeAlarms(
      __getArrayIfSingleItem(output["CompositeAlarms"]["member"]),
      context
    );
  }
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  }
  if (output["MetricAlarms"] !== undefined && output["MetricAlarms"]["member"] !== undefined) {
    contents.MetricAlarms = deserializeAws_queryMetricAlarms(
      __getArrayIfSingleItem(output["MetricAlarms"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeAnomalyDetectorsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAnomalyDetectorsOutput => {
  let contents: any = {
    AnomalyDetectors: undefined,
    NextToken: undefined,
  };
  if (output.AnomalyDetectors === "") {
    contents.AnomalyDetectors = [];
  }
  if (output["AnomalyDetectors"] !== undefined && output["AnomalyDetectors"]["member"] !== undefined) {
    contents.AnomalyDetectors = deserializeAws_queryAnomalyDetectors(
      __getArrayIfSingleItem(output["AnomalyDetectors"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryDescribeInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DescribeInsightRulesOutput => {
  let contents: any = {
    NextToken: undefined,
    InsightRules: undefined,
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.InsightRules === "") {
    contents.InsightRules = [];
  }
  if (output["InsightRules"] !== undefined && output["InsightRules"]["member"] !== undefined) {
    contents.InsightRules = deserializeAws_queryInsightRules(
      __getArrayIfSingleItem(output["InsightRules"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDimension = (output: any, context: __SerdeContext): Dimension => {
  let contents: any = {
    Name: undefined,
    Value: undefined,
  };
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryDimensions = (output: any, context: __SerdeContext): Dimension[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryDimension(entry, context);
    });
};

const deserializeAws_queryDisableInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DisableInsightRulesOutput => {
  let contents: any = {
    Failures: undefined,
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = deserializeAws_queryBatchFailures(
      __getArrayIfSingleItem(output["Failures"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryEnableInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): EnableInsightRulesOutput => {
  let contents: any = {
    Failures: undefined,
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (output["Failures"] !== undefined && output["Failures"]["member"] !== undefined) {
    contents.Failures = deserializeAws_queryBatchFailures(
      __getArrayIfSingleItem(output["Failures"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetDashboardOutput = (output: any, context: __SerdeContext): GetDashboardOutput => {
  let contents: any = {
    DashboardArn: undefined,
    DashboardBody: undefined,
    DashboardName: undefined,
  };
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

const deserializeAws_queryGetInsightRuleReportOutput = (
  output: any,
  context: __SerdeContext
): GetInsightRuleReportOutput => {
  let contents: any = {
    KeyLabels: undefined,
    AggregationStatistic: undefined,
    AggregateValue: undefined,
    ApproximateUniqueCount: undefined,
    Contributors: undefined,
    MetricDatapoints: undefined,
  };
  if (output.KeyLabels === "") {
    contents.KeyLabels = [];
  }
  if (output["KeyLabels"] !== undefined && output["KeyLabels"]["member"] !== undefined) {
    contents.KeyLabels = deserializeAws_queryInsightRuleContributorKeyLabels(
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
    contents.ApproximateUniqueCount = __strictParseInt(output["ApproximateUniqueCount"]) as number;
  }
  if (output.Contributors === "") {
    contents.Contributors = [];
  }
  if (output["Contributors"] !== undefined && output["Contributors"]["member"] !== undefined) {
    contents.Contributors = deserializeAws_queryInsightRuleContributors(
      __getArrayIfSingleItem(output["Contributors"]["member"]),
      context
    );
  }
  if (output.MetricDatapoints === "") {
    contents.MetricDatapoints = [];
  }
  if (output["MetricDatapoints"] !== undefined && output["MetricDatapoints"]["member"] !== undefined) {
    contents.MetricDatapoints = deserializeAws_queryInsightRuleMetricDatapoints(
      __getArrayIfSingleItem(output["MetricDatapoints"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetMetricDataOutput = (output: any, context: __SerdeContext): GetMetricDataOutput => {
  let contents: any = {
    MetricDataResults: undefined,
    NextToken: undefined,
    Messages: undefined,
  };
  if (output.MetricDataResults === "") {
    contents.MetricDataResults = [];
  }
  if (output["MetricDataResults"] !== undefined && output["MetricDataResults"]["member"] !== undefined) {
    contents.MetricDataResults = deserializeAws_queryMetricDataResults(
      __getArrayIfSingleItem(output["MetricDataResults"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.Messages === "") {
    contents.Messages = [];
  }
  if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = deserializeAws_queryMetricDataResultMessages(
      __getArrayIfSingleItem(output["Messages"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetMetricStatisticsOutput = (
  output: any,
  context: __SerdeContext
): GetMetricStatisticsOutput => {
  let contents: any = {
    Label: undefined,
    Datapoints: undefined,
  };
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  }
  if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
    contents.Datapoints = deserializeAws_queryDatapoints(
      __getArrayIfSingleItem(output["Datapoints"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetMetricStreamOutput = (output: any, context: __SerdeContext): GetMetricStreamOutput => {
  let contents: any = {
    Arn: undefined,
    Name: undefined,
    IncludeFilters: undefined,
    ExcludeFilters: undefined,
    FirehoseArn: undefined,
    RoleArn: undefined,
    State: undefined,
    CreationDate: undefined,
    LastUpdateDate: undefined,
    OutputFormat: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["Name"] !== undefined) {
    contents.Name = __expectString(output["Name"]);
  }
  if (output.IncludeFilters === "") {
    contents.IncludeFilters = [];
  }
  if (output["IncludeFilters"] !== undefined && output["IncludeFilters"]["member"] !== undefined) {
    contents.IncludeFilters = deserializeAws_queryMetricStreamFilters(
      __getArrayIfSingleItem(output["IncludeFilters"]["member"]),
      context
    );
  }
  if (output.ExcludeFilters === "") {
    contents.ExcludeFilters = [];
  }
  if (output["ExcludeFilters"] !== undefined && output["ExcludeFilters"]["member"] !== undefined) {
    contents.ExcludeFilters = deserializeAws_queryMetricStreamFilters(
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
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["LastUpdateDate"] !== undefined) {
    contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
  }
  if (output["OutputFormat"] !== undefined) {
    contents.OutputFormat = __expectString(output["OutputFormat"]);
  }
  return contents;
};

const deserializeAws_queryGetMetricWidgetImageOutput = (
  output: any,
  context: __SerdeContext
): GetMetricWidgetImageOutput => {
  let contents: any = {
    MetricWidgetImage: undefined,
  };
  if (output["MetricWidgetImage"] !== undefined) {
    contents.MetricWidgetImage = context.base64Decoder(output["MetricWidgetImage"]);
  }
  return contents;
};

const deserializeAws_queryInsightRule = (output: any, context: __SerdeContext): InsightRule => {
  let contents: any = {
    Name: undefined,
    State: undefined,
    Schema: undefined,
    Definition: undefined,
  };
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
  return contents;
};

const deserializeAws_queryInsightRuleContributor = (output: any, context: __SerdeContext): InsightRuleContributor => {
  let contents: any = {
    Keys: undefined,
    ApproximateAggregateValue: undefined,
    Datapoints: undefined,
  };
  if (output.Keys === "") {
    contents.Keys = [];
  }
  if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
    contents.Keys = deserializeAws_queryInsightRuleContributorKeys(
      __getArrayIfSingleItem(output["Keys"]["member"]),
      context
    );
  }
  if (output["ApproximateAggregateValue"] !== undefined) {
    contents.ApproximateAggregateValue = __strictParseFloat(output["ApproximateAggregateValue"]) as number;
  }
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  }
  if (output["Datapoints"] !== undefined && output["Datapoints"]["member"] !== undefined) {
    contents.Datapoints = deserializeAws_queryInsightRuleContributorDatapoints(
      __getArrayIfSingleItem(output["Datapoints"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryInsightRuleContributorDatapoint = (
  output: any,
  context: __SerdeContext
): InsightRuleContributorDatapoint => {
  let contents: any = {
    Timestamp: undefined,
    ApproximateValue: undefined,
  };
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["ApproximateValue"] !== undefined) {
    contents.ApproximateValue = __strictParseFloat(output["ApproximateValue"]) as number;
  }
  return contents;
};

const deserializeAws_queryInsightRuleContributorDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleContributorDatapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryInsightRuleContributorDatapoint(entry, context);
    });
};

const deserializeAws_queryInsightRuleContributorKeyLabels = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryInsightRuleContributorKeys = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryInsightRuleContributors = (
  output: any,
  context: __SerdeContext
): InsightRuleContributor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryInsightRuleContributor(entry, context);
    });
};

const deserializeAws_queryInsightRuleMetricDatapoint = (
  output: any,
  context: __SerdeContext
): InsightRuleMetricDatapoint => {
  let contents: any = {
    Timestamp: undefined,
    UniqueContributors: undefined,
    MaxContributorValue: undefined,
    SampleCount: undefined,
    Average: undefined,
    Sum: undefined,
    Minimum: undefined,
    Maximum: undefined,
  };
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
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

const deserializeAws_queryInsightRuleMetricDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleMetricDatapoint[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryInsightRuleMetricDatapoint(entry, context);
    });
};

const deserializeAws_queryInsightRules = (output: any, context: __SerdeContext): InsightRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryInsightRule(entry, context);
    });
};

const deserializeAws_queryInternalServiceFault = (output: any, context: __SerdeContext): InternalServiceFault => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidFormatFault = (output: any, context: __SerdeContext): InvalidFormatFault => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidNextToken = (output: any, context: __SerdeContext): InvalidNextToken => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (output: any, context: __SerdeContext): LimitExceededException => {
  let contents: any = {
    Message: undefined,
  };
  if (output["Message"] !== undefined) {
    contents.Message = __expectString(output["Message"]);
  }
  return contents;
};

const deserializeAws_queryLimitExceededFault = (output: any, context: __SerdeContext): LimitExceededFault => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryListDashboardsOutput = (output: any, context: __SerdeContext): ListDashboardsOutput => {
  let contents: any = {
    DashboardEntries: undefined,
    NextToken: undefined,
  };
  if (output.DashboardEntries === "") {
    contents.DashboardEntries = [];
  }
  if (output["DashboardEntries"] !== undefined && output["DashboardEntries"]["member"] !== undefined) {
    contents.DashboardEntries = deserializeAws_queryDashboardEntries(
      __getArrayIfSingleItem(output["DashboardEntries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListMetricsOutput = (output: any, context: __SerdeContext): ListMetricsOutput => {
  let contents: any = {
    Metrics: undefined,
    NextToken: undefined,
  };
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = deserializeAws_queryMetrics(__getArrayIfSingleItem(output["Metrics"]["member"]), context);
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  return contents;
};

const deserializeAws_queryListMetricStreamsOutput = (output: any, context: __SerdeContext): ListMetricStreamsOutput => {
  let contents: any = {
    NextToken: undefined,
    Entries: undefined,
  };
  if (output["NextToken"] !== undefined) {
    contents.NextToken = __expectString(output["NextToken"]);
  }
  if (output.Entries === "") {
    contents.Entries = [];
  }
  if (output["Entries"] !== undefined && output["Entries"]["member"] !== undefined) {
    contents.Entries = deserializeAws_queryMetricStreamEntries(
      __getArrayIfSingleItem(output["Entries"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    Tags: undefined,
  };
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(__getArrayIfSingleItem(output["Tags"]["member"]), context);
  }
  return contents;
};

const deserializeAws_queryMessageData = (output: any, context: __SerdeContext): MessageData => {
  let contents: any = {
    Code: undefined,
    Value: undefined,
  };
  if (output["Code"] !== undefined) {
    contents.Code = __expectString(output["Code"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryMetric = (output: any, context: __SerdeContext): Metric => {
  let contents: any = {
    Namespace: undefined,
    MetricName: undefined,
    Dimensions: undefined,
  };
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = __expectString(output["MetricName"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMetricAlarm = (output: any, context: __SerdeContext): MetricAlarm => {
  let contents: any = {
    AlarmName: undefined,
    AlarmArn: undefined,
    AlarmDescription: undefined,
    AlarmConfigurationUpdatedTimestamp: undefined,
    ActionsEnabled: undefined,
    OKActions: undefined,
    AlarmActions: undefined,
    InsufficientDataActions: undefined,
    StateValue: undefined,
    StateReason: undefined,
    StateReasonData: undefined,
    StateUpdatedTimestamp: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Statistic: undefined,
    ExtendedStatistic: undefined,
    Dimensions: undefined,
    Period: undefined,
    Unit: undefined,
    EvaluationPeriods: undefined,
    DatapointsToAlarm: undefined,
    Threshold: undefined,
    ComparisonOperator: undefined,
    TreatMissingData: undefined,
    EvaluateLowSampleCountPercentile: undefined,
    Metrics: undefined,
    ThresholdMetricId: undefined,
  };
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
    contents.AlarmConfigurationUpdatedTimestamp = new Date(output["AlarmConfigurationUpdatedTimestamp"]);
  }
  if (output["ActionsEnabled"] !== undefined) {
    contents.ActionsEnabled = __parseBoolean(output["ActionsEnabled"]);
  }
  if (output.OKActions === "") {
    contents.OKActions = [];
  }
  if (output["OKActions"] !== undefined && output["OKActions"]["member"] !== undefined) {
    contents.OKActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["OKActions"]["member"]),
      context
    );
  }
  if (output.AlarmActions === "") {
    contents.AlarmActions = [];
  }
  if (output["AlarmActions"] !== undefined && output["AlarmActions"]["member"] !== undefined) {
    contents.AlarmActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["AlarmActions"]["member"]),
      context
    );
  }
  if (output.InsufficientDataActions === "") {
    contents.InsufficientDataActions = [];
  }
  if (output["InsufficientDataActions"] !== undefined && output["InsufficientDataActions"]["member"] !== undefined) {
    contents.InsufficientDataActions = deserializeAws_queryResourceList(
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
    contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
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
  }
  if (output["Dimensions"] !== undefined && output["Dimensions"]["member"] !== undefined) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt(output["Period"]) as number;
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  if (output["EvaluationPeriods"] !== undefined) {
    contents.EvaluationPeriods = __strictParseInt(output["EvaluationPeriods"]) as number;
  }
  if (output["DatapointsToAlarm"] !== undefined) {
    contents.DatapointsToAlarm = __strictParseInt(output["DatapointsToAlarm"]) as number;
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
  }
  if (output["Metrics"] !== undefined && output["Metrics"]["member"] !== undefined) {
    contents.Metrics = deserializeAws_queryMetricDataQueries(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output["ThresholdMetricId"] !== undefined) {
    contents.ThresholdMetricId = __expectString(output["ThresholdMetricId"]);
  }
  return contents;
};

const deserializeAws_queryMetricAlarms = (output: any, context: __SerdeContext): MetricAlarm[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetricAlarm(entry, context);
    });
};

const deserializeAws_queryMetricDataQueries = (output: any, context: __SerdeContext): MetricDataQuery[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetricDataQuery(entry, context);
    });
};

const deserializeAws_queryMetricDataQuery = (output: any, context: __SerdeContext): MetricDataQuery => {
  let contents: any = {
    Id: undefined,
    MetricStat: undefined,
    Expression: undefined,
    Label: undefined,
    ReturnData: undefined,
    Period: undefined,
    AccountId: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = deserializeAws_queryMetricStat(output["MetricStat"], context);
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
    contents.Period = __strictParseInt(output["Period"]) as number;
  }
  if (output["AccountId"] !== undefined) {
    contents.AccountId = __expectString(output["AccountId"]);
  }
  return contents;
};

const deserializeAws_queryMetricDataResult = (output: any, context: __SerdeContext): MetricDataResult => {
  let contents: any = {
    Id: undefined,
    Label: undefined,
    Timestamps: undefined,
    Values: undefined,
    StatusCode: undefined,
    Messages: undefined,
  };
  if (output["Id"] !== undefined) {
    contents.Id = __expectString(output["Id"]);
  }
  if (output["Label"] !== undefined) {
    contents.Label = __expectString(output["Label"]);
  }
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (output["Timestamps"] !== undefined && output["Timestamps"]["member"] !== undefined) {
    contents.Timestamps = deserializeAws_queryTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (output["Values"] !== undefined && output["Values"]["member"] !== undefined) {
    contents.Values = deserializeAws_queryDatapointValues(__getArrayIfSingleItem(output["Values"]["member"]), context);
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = __expectString(output["StatusCode"]);
  }
  if (output.Messages === "") {
    contents.Messages = [];
  }
  if (output["Messages"] !== undefined && output["Messages"]["member"] !== undefined) {
    contents.Messages = deserializeAws_queryMetricDataResultMessages(
      __getArrayIfSingleItem(output["Messages"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMetricDataResultMessages = (output: any, context: __SerdeContext): MessageData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMessageData(entry, context);
    });
};

const deserializeAws_queryMetricDataResults = (output: any, context: __SerdeContext): MetricDataResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetricDataResult(entry, context);
    });
};

const deserializeAws_queryMetrics = (output: any, context: __SerdeContext): Metric[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetric(entry, context);
    });
};

const deserializeAws_queryMetricStat = (output: any, context: __SerdeContext): MetricStat => {
  let contents: any = {
    Metric: undefined,
    Period: undefined,
    Stat: undefined,
    Unit: undefined,
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
  }
  if (output["Period"] !== undefined) {
    contents.Period = __strictParseInt(output["Period"]) as number;
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = __expectString(output["Stat"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = __expectString(output["Unit"]);
  }
  return contents;
};

const deserializeAws_queryMetricStreamEntries = (output: any, context: __SerdeContext): MetricStreamEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetricStreamEntry(entry, context);
    });
};

const deserializeAws_queryMetricStreamEntry = (output: any, context: __SerdeContext): MetricStreamEntry => {
  let contents: any = {
    Arn: undefined,
    CreationDate: undefined,
    LastUpdateDate: undefined,
    Name: undefined,
    FirehoseArn: undefined,
    State: undefined,
    OutputFormat: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  if (output["CreationDate"] !== undefined) {
    contents.CreationDate = new Date(output["CreationDate"]);
  }
  if (output["LastUpdateDate"] !== undefined) {
    contents.LastUpdateDate = new Date(output["LastUpdateDate"]);
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

const deserializeAws_queryMetricStreamFilter = (output: any, context: __SerdeContext): MetricStreamFilter => {
  let contents: any = {
    Namespace: undefined,
  };
  if (output["Namespace"] !== undefined) {
    contents.Namespace = __expectString(output["Namespace"]);
  }
  return contents;
};

const deserializeAws_queryMetricStreamFilters = (output: any, context: __SerdeContext): MetricStreamFilter[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryMetricStreamFilter(entry, context);
    });
};

const deserializeAws_queryMissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryPartialFailure = (output: any, context: __SerdeContext): PartialFailure => {
  let contents: any = {
    FailureResource: undefined,
    ExceptionType: undefined,
    FailureCode: undefined,
    FailureDescription: undefined,
  };
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

const deserializeAws_queryPutAnomalyDetectorOutput = (
  output: any,
  context: __SerdeContext
): PutAnomalyDetectorOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryPutDashboardOutput = (output: any, context: __SerdeContext): PutDashboardOutput => {
  let contents: any = {
    DashboardValidationMessages: undefined,
  };
  if (output.DashboardValidationMessages === "") {
    contents.DashboardValidationMessages = [];
  }
  if (
    output["DashboardValidationMessages"] !== undefined &&
    output["DashboardValidationMessages"]["member"] !== undefined
  ) {
    contents.DashboardValidationMessages = deserializeAws_queryDashboardValidationMessages(
      __getArrayIfSingleItem(output["DashboardValidationMessages"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryPutInsightRuleOutput = (output: any, context: __SerdeContext): PutInsightRuleOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryPutMetricStreamOutput = (output: any, context: __SerdeContext): PutMetricStreamOutput => {
  let contents: any = {
    Arn: undefined,
  };
  if (output["Arn"] !== undefined) {
    contents.Arn = __expectString(output["Arn"]);
  }
  return contents;
};

const deserializeAws_queryRange = (output: any, context: __SerdeContext): Range => {
  let contents: any = {
    StartTime: undefined,
    EndTime: undefined,
  };
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  return contents;
};

const deserializeAws_queryResourceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_queryResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  let contents: any = {
    message: undefined,
  };
  if (output["message"] !== undefined) {
    contents.message = __expectString(output["message"]);
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    ResourceType: undefined,
    ResourceId: undefined,
    Message: undefined,
  };
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

const deserializeAws_queryStartMetricStreamsOutput = (
  output: any,
  context: __SerdeContext
): StartMetricStreamsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryStopMetricStreamsOutput = (output: any, context: __SerdeContext): StopMetricStreamsOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    Key: undefined,
    Value: undefined,
  };
  if (output["Key"] !== undefined) {
    contents.Key = __expectString(output["Key"]);
  }
  if (output["Value"] !== undefined) {
    contents.Value = __expectString(output["Value"]);
  }
  return contents;
};

const deserializeAws_queryTagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_queryTag(entry, context);
    });
};

const deserializeAws_queryTagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  let contents: any = {};
  return contents;
};

const deserializeAws_queryTimestamps = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return new Date(entry);
    });
};

const deserializeAws_queryUntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  let contents: any = {};
  return contents;
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
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        trimValues: false,
        tagValueProcessor: (val) => (val.trim() === "" && val.includes("\n") ? "" : decodeHTML(val)),
      });
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

const buildFormUrlencodedString = (formEntries: { [key: string]: string }): string =>
  Object.entries(formEntries)
    .map(([key, value]) => __extendedEncodeURIComponent(key) + "=" + __extendedEncodeURIComponent(value))
    .join("&");

const loadQueryErrorCode = (output: __HttpResponse, data: any): string => {
  if (data.Error.Code !== undefined) {
    return data.Error.Code;
  }
  if (output.statusCode == 404) {
    return "NotFound";
  }
  return "";
};
