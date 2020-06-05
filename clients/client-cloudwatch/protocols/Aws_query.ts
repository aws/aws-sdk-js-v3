import {
  DeleteAlarmsCommandInput,
  DeleteAlarmsCommandOutput
} from "../commands/DeleteAlarmsCommand";
import {
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput
} from "../commands/DeleteAnomalyDetectorCommand";
import {
  DeleteDashboardsCommandInput,
  DeleteDashboardsCommandOutput
} from "../commands/DeleteDashboardsCommand";
import {
  DeleteInsightRulesCommandInput,
  DeleteInsightRulesCommandOutput
} from "../commands/DeleteInsightRulesCommand";
import {
  DescribeAlarmHistoryCommandInput,
  DescribeAlarmHistoryCommandOutput
} from "../commands/DescribeAlarmHistoryCommand";
import {
  DescribeAlarmsCommandInput,
  DescribeAlarmsCommandOutput
} from "../commands/DescribeAlarmsCommand";
import {
  DescribeAlarmsForMetricCommandInput,
  DescribeAlarmsForMetricCommandOutput
} from "../commands/DescribeAlarmsForMetricCommand";
import {
  DescribeAnomalyDetectorsCommandInput,
  DescribeAnomalyDetectorsCommandOutput
} from "../commands/DescribeAnomalyDetectorsCommand";
import {
  DescribeInsightRulesCommandInput,
  DescribeInsightRulesCommandOutput
} from "../commands/DescribeInsightRulesCommand";
import {
  DisableAlarmActionsCommandInput,
  DisableAlarmActionsCommandOutput
} from "../commands/DisableAlarmActionsCommand";
import {
  DisableInsightRulesCommandInput,
  DisableInsightRulesCommandOutput
} from "../commands/DisableInsightRulesCommand";
import {
  EnableAlarmActionsCommandInput,
  EnableAlarmActionsCommandOutput
} from "../commands/EnableAlarmActionsCommand";
import {
  EnableInsightRulesCommandInput,
  EnableInsightRulesCommandOutput
} from "../commands/EnableInsightRulesCommand";
import {
  GetDashboardCommandInput,
  GetDashboardCommandOutput
} from "../commands/GetDashboardCommand";
import {
  GetInsightRuleReportCommandInput,
  GetInsightRuleReportCommandOutput
} from "../commands/GetInsightRuleReportCommand";
import {
  GetMetricDataCommandInput,
  GetMetricDataCommandOutput
} from "../commands/GetMetricDataCommand";
import {
  GetMetricStatisticsCommandInput,
  GetMetricStatisticsCommandOutput
} from "../commands/GetMetricStatisticsCommand";
import {
  GetMetricWidgetImageCommandInput,
  GetMetricWidgetImageCommandOutput
} from "../commands/GetMetricWidgetImageCommand";
import {
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput
} from "../commands/ListDashboardsCommand";
import {
  ListMetricsCommandInput,
  ListMetricsCommandOutput
} from "../commands/ListMetricsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  PutAnomalyDetectorCommandInput,
  PutAnomalyDetectorCommandOutput
} from "../commands/PutAnomalyDetectorCommand";
import {
  PutDashboardCommandInput,
  PutDashboardCommandOutput
} from "../commands/PutDashboardCommand";
import {
  PutInsightRuleCommandInput,
  PutInsightRuleCommandOutput
} from "../commands/PutInsightRuleCommand";
import {
  PutMetricAlarmCommandInput,
  PutMetricAlarmCommandOutput
} from "../commands/PutMetricAlarmCommand";
import {
  PutMetricDataCommandInput,
  PutMetricDataCommandOutput
} from "../commands/PutMetricDataCommand";
import {
  SetAlarmStateCommandInput,
  SetAlarmStateCommandOutput
} from "../commands/SetAlarmStateCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  AlarmHistoryItem,
  AnomalyDetector,
  AnomalyDetectorConfiguration,
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
  LimitExceededException,
  LimitExceededFault,
  ListDashboardsInput,
  ListDashboardsOutput,
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
  MissingRequiredParameterException,
  PartialFailure,
  PutAnomalyDetectorInput,
  PutAnomalyDetectorOutput,
  PutDashboardInput,
  PutDashboardOutput,
  PutInsightRuleInput,
  PutInsightRuleOutput,
  PutMetricAlarmInput,
  PutMetricDataInput,
  Range,
  ResourceNotFound,
  ResourceNotFoundException,
  SetAlarmStateInput,
  Statistic,
  StatisticSet,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  UntagResourceInput,
  UntagResourceOutput
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  getArrayIfSingleItem as __getArrayIfSingleItem,
  getValueFromTextNode as __getValueFromTextNode
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { parse as xmlParse } from "fast-xml-parser";

export const serializeAws_queryDeleteAlarmsCommand = async (
  input: DeleteAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAlarmsInput(input, context),
    Action: "DeleteAlarms",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteAnomalyDetectorCommand = async (
  input: DeleteAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteAnomalyDetectorInput(input, context),
    Action: "DeleteAnomalyDetector",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteDashboardsCommand = async (
  input: DeleteDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteDashboardsInput(input, context),
    Action: "DeleteDashboards",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDeleteInsightRulesCommand = async (
  input: DeleteInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDeleteInsightRulesInput(input, context),
    Action: "DeleteInsightRules",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmHistoryCommand = async (
  input: DescribeAlarmHistoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmHistoryInput(input, context),
    Action: "DescribeAlarmHistory",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmsCommand = async (
  input: DescribeAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmsInput(input, context),
    Action: "DescribeAlarms",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAlarmsForMetricCommand = async (
  input: DescribeAlarmsForMetricCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAlarmsForMetricInput(input, context),
    Action: "DescribeAlarmsForMetric",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeAnomalyDetectorsCommand = async (
  input: DescribeAnomalyDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeAnomalyDetectorsInput(input, context),
    Action: "DescribeAnomalyDetectors",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDescribeInsightRulesCommand = async (
  input: DescribeInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDescribeInsightRulesInput(input, context),
    Action: "DescribeInsightRules",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableAlarmActionsCommand = async (
  input: DisableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableAlarmActionsInput(input, context),
    Action: "DisableAlarmActions",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryDisableInsightRulesCommand = async (
  input: DisableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryDisableInsightRulesInput(input, context),
    Action: "DisableInsightRules",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableAlarmActionsCommand = async (
  input: EnableAlarmActionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableAlarmActionsInput(input, context),
    Action: "EnableAlarmActions",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryEnableInsightRulesCommand = async (
  input: EnableInsightRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryEnableInsightRulesInput(input, context),
    Action: "EnableInsightRules",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetDashboardCommand = async (
  input: GetDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetDashboardInput(input, context),
    Action: "GetDashboard",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetInsightRuleReportCommand = async (
  input: GetInsightRuleReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetInsightRuleReportInput(input, context),
    Action: "GetInsightRuleReport",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricDataCommand = async (
  input: GetMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricDataInput(input, context),
    Action: "GetMetricData",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricStatisticsCommand = async (
  input: GetMetricStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricStatisticsInput(input, context),
    Action: "GetMetricStatistics",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryGetMetricWidgetImageCommand = async (
  input: GetMetricWidgetImageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryGetMetricWidgetImageInput(input, context),
    Action: "GetMetricWidgetImage",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListDashboardsCommand = async (
  input: ListDashboardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListDashboardsInput(input, context),
    Action: "ListDashboards",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListMetricsCommand = async (
  input: ListMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListMetricsInput(input, context),
    Action: "ListMetrics",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryListTagsForResourceInput(input, context),
    Action: "ListTagsForResource",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutAnomalyDetectorCommand = async (
  input: PutAnomalyDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutAnomalyDetectorInput(input, context),
    Action: "PutAnomalyDetector",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutDashboardCommand = async (
  input: PutDashboardCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutDashboardInput(input, context),
    Action: "PutDashboard",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutInsightRuleCommand = async (
  input: PutInsightRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutInsightRuleInput(input, context),
    Action: "PutInsightRule",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutMetricAlarmCommand = async (
  input: PutMetricAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutMetricAlarmInput(input, context),
    Action: "PutMetricAlarm",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryPutMetricDataCommand = async (
  input: PutMetricDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryPutMetricDataInput(input, context),
    Action: "PutMetricData",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_querySetAlarmStateCommand = async (
  input: SetAlarmStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_querySetAlarmStateInput(input, context),
    Action: "SetAlarmState",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryTagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryTagResourceInput(input, context),
    Action: "TagResource",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_queryUntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "Content-Type": "application/x-www-form-urlencoded"
  };
  let body: any;
  body = buildFormUrlencodedString({
    ...serializeAws_queryUntagResourceInput(input, context),
    Action: "UntagResource",
    Version: "2010-08-01"
  });
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_queryDeleteAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAlarmsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      response = {
        ...(await deserializeAws_queryResourceNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteAnomalyDetectorCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteAnomalyDetectorOutput(
    data.DeleteAnomalyDetectorResult,
    context
  );
  const response: DeleteAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteAnomalyDetectorOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteDashboardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteDashboardsOutput(
    data.DeleteDashboardsResult,
    context
  );
  const response: DeleteDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDashboardsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardNotFoundError":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      response = {
        ...(await deserializeAws_queryDashboardNotFoundErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDeleteInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDeleteInsightRulesOutput(
    data.DeleteInsightRulesResult,
    context
  );
  const response: DeleteInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteInsightRulesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDeleteInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAlarmHistoryCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmHistoryOutput(
    data.DescribeAlarmHistoryResult,
    context
  );
  const response: DescribeAlarmHistoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAlarmHistoryOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmHistoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmHistoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAlarmsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmsOutput(
    data.DescribeAlarmsResult,
    context
  );
  const response: DescribeAlarmsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAlarmsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAlarmsForMetricCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAlarmsForMetricOutput(
    data.DescribeAlarmsForMetricResult,
    context
  );
  const response: DescribeAlarmsForMetricCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAlarmsForMetricOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAlarmsForMetricCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmsForMetricCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeAnomalyDetectorsCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeAnomalyDetectorsOutput(
    data.DescribeAnomalyDetectorsResult,
    context
  );
  const response: DescribeAnomalyDetectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeAnomalyDetectorsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeAnomalyDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAnomalyDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDescribeInsightRulesCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDescribeInsightRulesOutput(
    data.DescribeInsightRulesResult,
    context
  );
  const response: DescribeInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeInsightRulesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDescribeInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDisableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DisableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryDisableInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryDisableInsightRulesOutput(
    data.DisableInsightRulesResult,
    context
  );
  const response: DisableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisableInsightRulesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryDisableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnableAlarmActionsCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: EnableAlarmActionsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableAlarmActionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableAlarmActionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryEnableInsightRulesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryEnableInsightRulesOutput(
    data.EnableInsightRulesResult,
    context
  );
  const response: EnableInsightRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EnableInsightRulesOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryEnableInsightRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableInsightRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetDashboardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetDashboardOutput(
    data.GetDashboardResult,
    context
  );
  const response: GetDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDashboardOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardNotFoundError":
    case "com.amazonaws.cloudwatch#DashboardNotFoundError":
      response = {
        ...(await deserializeAws_queryDashboardNotFoundErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetInsightRuleReportCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetInsightRuleReportOutput(
    data.GetInsightRuleReportResult,
    context
  );
  const response: GetInsightRuleReportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetInsightRuleReportOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetInsightRuleReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightRuleReportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetMetricDataCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricDataOutput(
    data.GetMetricDataResult,
    context
  );
  const response: GetMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMetricDataOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidNextToken":
    case "com.amazonaws.cloudwatch#InvalidNextToken":
      response = {
        ...(await deserializeAws_queryInvalidNextTokenResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetMetricStatisticsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricStatisticsOutput(
    data.GetMetricStatisticsResult,
    context
  );
  const response: GetMetricStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMetricStatisticsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryGetMetricWidgetImageCommandError(
      output,
      context
    );
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryGetMetricWidgetImageOutput(
    data.GetMetricWidgetImageResult,
    context
  );
  const response: GetMetricWidgetImageCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetMetricWidgetImageOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryGetMetricWidgetImageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMetricWidgetImageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
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
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryListDashboardsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListDashboardsOutput(
    data.ListDashboardsResult,
    context
  );
  const response: ListDashboardsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDashboardsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListDashboardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDashboardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryListMetricsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListMetricsOutput(
    data.ListMetricsResult,
    context
  );
  const response: ListMetricsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMetricsOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMetricsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryListTagsForResourceOutput(
    data.ListTagsForResourceResult,
    context
  );
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutAnomalyDetectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutAnomalyDetectorOutput(
    data.PutAnomalyDetectorResult,
    context
  );
  const response: PutAnomalyDetectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutAnomalyDetectorOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutAnomalyDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutAnomalyDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutDashboardCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutDashboardOutput(
    data.PutDashboardResult,
    context
  );
  const response: PutDashboardCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDashboardOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutDashboardCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDashboardCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DashboardInvalidInputError":
    case "com.amazonaws.cloudwatch#DashboardInvalidInputError":
      response = {
        ...(await deserializeAws_queryDashboardInvalidInputErrorResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutInsightRuleCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryPutInsightRuleOutput(
    data.PutInsightRuleResult,
    context
  );
  const response: PutInsightRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutInsightRuleOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutInsightRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutInsightRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.cloudwatch#LimitExceededException":
      response = {
        ...(await deserializeAws_queryLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutMetricAlarmCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricAlarmCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutMetricAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "LimitExceededFault":
    case "com.amazonaws.cloudwatch#LimitExceededFault":
      response = {
        ...(await deserializeAws_queryLimitExceededFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryPutMetricDataCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: PutMetricDataCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_queryPutMetricDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutMetricDataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterCombinationException":
    case "com.amazonaws.cloudwatch#InvalidParameterCombinationException":
      response = {
        ...(await deserializeAws_queryInvalidParameterCombinationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingRequiredParameterException":
    case "com.amazonaws.cloudwatch#MissingRequiredParameterException":
      response = {
        ...(await deserializeAws_queryMissingRequiredParameterExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_querySetAlarmStateCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: SetAlarmStateCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  return Promise.resolve(response);
};

const deserializeAws_querySetAlarmStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetAlarmStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidFormatFault":
    case "com.amazonaws.cloudwatch#InvalidFormatFault":
      response = {
        ...(await deserializeAws_queryInvalidFormatFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFound":
    case "com.amazonaws.cloudwatch#ResourceNotFound":
      response = {
        ...(await deserializeAws_queryResourceNotFoundResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryTagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryTagResourceOutput(
    data.TagResourceResult,
    context
  );
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryTagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  if (output.statusCode >= 400) {
    return deserializeAws_queryUntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_queryUntagResourceOutput(
    data.UntagResourceResult,
    context
  );
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput",
    ...contents
  };
  return Promise.resolve(response);
};

const deserializeAws_queryUntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadQueryErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.cloudwatch#ConcurrentModificationException":
      response = {
        ...(await deserializeAws_queryConcurrentModificationExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServiceFault":
    case "com.amazonaws.cloudwatch#InternalServiceFault":
      response = {
        ...(await deserializeAws_queryInternalServiceFaultResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.cloudwatch#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_queryInvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.cloudwatch#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_queryResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.Error.code || parsedBody.Error.Code || errorCode;
      response = {
        ...parsedBody.Error,
        name: `${errorCode}`,
        message:
          parsedBody.Error.message || parsedBody.Error.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
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
  const deserialized: any = deserializeAws_queryConcurrentModificationException(
    body.Error,
    context
  );
  const contents: ConcurrentModificationException = {
    name: "ConcurrentModificationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDashboardInvalidInputErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardInvalidInputError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDashboardInvalidInputError(
    body.Error,
    context
  );
  const contents: DashboardInvalidInputError = {
    name: "DashboardInvalidInputError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryDashboardNotFoundErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DashboardNotFoundError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryDashboardNotFoundError(
    body.Error,
    context
  );
  const contents: DashboardNotFoundError = {
    name: "DashboardNotFoundError",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInternalServiceFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInternalServiceFault(
    body.Error,
    context
  );
  const contents: InternalServiceFault = {
    name: "InternalServiceFault",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidFormatFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidFormatFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidFormatFault(
    body.Error,
    context
  );
  const contents: InvalidFormatFault = {
    name: "InvalidFormatFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidNextTokenResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNextToken> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidNextToken(
    body.Error,
    context
  );
  const contents: InvalidNextToken = {
    name: "InvalidNextToken",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidParameterCombinationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterCombinationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterCombinationException(
    body.Error,
    context
  );
  const contents: InvalidParameterCombinationException = {
    name: "InvalidParameterCombinationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryInvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryInvalidParameterValueException(
    body.Error,
    context
  );
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededException(
    body.Error,
    context
  );
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryLimitExceededFaultResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededFault> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryLimitExceededFault(
    body.Error,
    context
  );
  const contents: LimitExceededFault = {
    name: "LimitExceededFault",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryMissingRequiredParameterExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingRequiredParameterException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryMissingRequiredParameterException(
    body.Error,
    context
  );
  const contents: MissingRequiredParameterException = {
    name: "MissingRequiredParameterException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFound(
    body.Error,
    context
  );
  const contents: ResourceNotFound = {
    name: "ResourceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const deserializeAws_queryResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_queryResourceNotFoundException(
    body.Error,
    context
  );
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized
  };
  return contents;
};

const serializeAws_queryAlarmNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
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
  if (input.ExcludedTimeRanges !== undefined) {
    const memberEntries = serializeAws_queryAnomalyDetectorExcludedTimeRanges(
      input.ExcludedTimeRanges,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExcludedTimeRanges.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricTimezone !== undefined) {
    entries["MetricTimezone"] = input.MetricTimezone;
  }
  return entries;
};

const serializeAws_queryAnomalyDetectorExcludedTimeRanges = (
  input: Range[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryRange(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryCounts = (
  input: number[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDashboardNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryDeleteAlarmsInput = (
  input: DeleteAlarmsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined) {
    const memberEntries = serializeAws_queryAlarmNames(
      input.AlarmNames,
      context
    );
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
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Stat !== undefined) {
    entries["Stat"] = input.Stat;
  }
  return entries;
};

const serializeAws_queryDeleteDashboardsInput = (
  input: DeleteDashboardsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DashboardNames !== undefined) {
    const memberEntries = serializeAws_queryDashboardNames(
      input.DashboardNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `DashboardNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDeleteInsightRulesInput = (
  input: DeleteInsightRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined) {
    const memberEntries = serializeAws_queryInsightRuleNames(
      input.RuleNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDescribeAlarmHistoryInput = (
  input: DescribeAlarmHistoryInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmName !== undefined) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.EndDate !== undefined) {
    entries["EndDate"] = input.EndDate.toISOString().split(".")[0] + "Z";
  }
  if (input.HistoryItemType !== undefined) {
    entries["HistoryItemType"] = input.HistoryItemType;
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StartDate !== undefined) {
    entries["StartDate"] = input.StartDate.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryDescribeAlarmsForMetricInput = (
  input: DescribeAlarmsForMetricInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.ExtendedStatistic !== undefined) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.Statistic !== undefined) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryDescribeAlarmsInput = (
  input: DescribeAlarmsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionPrefix !== undefined) {
    entries["ActionPrefix"] = input.ActionPrefix;
  }
  if (input.AlarmNamePrefix !== undefined) {
    entries["AlarmNamePrefix"] = input.AlarmNamePrefix;
  }
  if (input.AlarmNames !== undefined) {
    const memberEntries = serializeAws_queryAlarmNames(
      input.AlarmNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxRecords !== undefined) {
    entries["MaxRecords"] = input.MaxRecords;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.StateValue !== undefined) {
    entries["StateValue"] = input.StateValue;
  }
  return entries;
};

const serializeAws_queryDescribeAnomalyDetectorsInput = (
  input: DescribeAnomalyDetectorsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDescribeInsightRulesInput = (
  input: DescribeInsightRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MaxResults !== undefined) {
    entries["MaxResults"] = input.MaxResults;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryDimension = (
  input: Dimension,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryDimensionFilter = (
  input: DimensionFilter,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Name !== undefined) {
    entries["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryDimensionFilters = (
  input: DimensionFilter[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryDimensionFilter(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDimensions = (
  input: Dimension[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryDimension(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryDisableAlarmActionsInput = (
  input: DisableAlarmActionsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined) {
    const memberEntries = serializeAws_queryAlarmNames(
      input.AlarmNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryDisableInsightRulesInput = (
  input: DisableInsightRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined) {
    const memberEntries = serializeAws_queryInsightRuleNames(
      input.RuleNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnableAlarmActionsInput = (
  input: EnableAlarmActionsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmNames !== undefined) {
    const memberEntries = serializeAws_queryAlarmNames(
      input.AlarmNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryEnableInsightRulesInput = (
  input: EnableInsightRulesInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleNames !== undefined) {
    const memberEntries = serializeAws_queryInsightRuleNames(
      input.RuleNames,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `RuleNames.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryExtendedStatistics = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryGetDashboardInput = (
  input: GetDashboardInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DashboardName !== undefined) {
    entries["DashboardName"] = input.DashboardName;
  }
  return entries;
};

const serializeAws_queryGetInsightRuleReportInput = (
  input: GetInsightRuleReportInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxContributorCount !== undefined) {
    entries["MaxContributorCount"] = input.MaxContributorCount;
  }
  if (input.Metrics !== undefined) {
    const memberEntries = serializeAws_queryInsightRuleMetricList(
      input.Metrics,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.OrderBy !== undefined) {
    entries["OrderBy"] = input.OrderBy;
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.RuleName !== undefined) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryGetMetricDataInput = (
  input: GetMetricDataInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.MaxDatapoints !== undefined) {
    entries["MaxDatapoints"] = input.MaxDatapoints;
  }
  if (input.MetricDataQueries !== undefined) {
    const memberEntries = serializeAws_queryMetricDataQueries(
      input.MetricDataQueries,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricDataQueries.${key}`;
      entries[loc] = value;
    });
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  if (input.ScanBy !== undefined) {
    entries["ScanBy"] = input.ScanBy;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryGetMetricStatisticsInput = (
  input: GetMetricStatisticsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.ExtendedStatistics !== undefined) {
    const memberEntries = serializeAws_queryExtendedStatistics(
      input.ExtendedStatistics,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `ExtendedStatistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  if (input.Statistics !== undefined) {
    const memberEntries = serializeAws_queryStatistics(
      input.Statistics,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Statistics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryGetMetricWidgetImageInput = (
  input: GetMetricWidgetImageInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricWidget !== undefined) {
    entries["MetricWidget"] = input.MetricWidget;
  }
  if (input.OutputFormat !== undefined) {
    entries["OutputFormat"] = input.OutputFormat;
  }
  return entries;
};

const serializeAws_queryInsightRuleMetricList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryInsightRuleNames = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryListDashboardsInput = (
  input: ListDashboardsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DashboardNamePrefix !== undefined) {
    entries["DashboardNamePrefix"] = input.DashboardNamePrefix;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListMetricsInput = (
  input: ListMetricsInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensionFilters(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.NextToken !== undefined) {
    entries["NextToken"] = input.NextToken;
  }
  return entries;
};

const serializeAws_queryListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  return entries;
};

const serializeAws_queryMetric = (
  input: Metric,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  return entries;
};

const serializeAws_queryMetricData = (
  input: MetricDatum[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryMetricDatum(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDataQueries = (
  input: MetricDataQuery[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryMetricDataQuery(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryMetricDataQuery = (
  input: MetricDataQuery,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Expression !== undefined) {
    entries["Expression"] = input.Expression;
  }
  if (input.Id !== undefined) {
    entries["Id"] = input.Id;
  }
  if (input.Label !== undefined) {
    entries["Label"] = input.Label;
  }
  if (input.MetricStat !== undefined) {
    const memberEntries = serializeAws_queryMetricStat(
      input.MetricStat,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricStat.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.ReturnData !== undefined) {
    entries["ReturnData"] = input.ReturnData;
  }
  return entries;
};

const serializeAws_queryMetricDatum = (
  input: MetricDatum,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Counts !== undefined) {
    const memberEntries = serializeAws_queryCounts(input.Counts, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Counts.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.StatisticValues !== undefined) {
    const memberEntries = serializeAws_queryStatisticSet(
      input.StatisticValues,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `StatisticValues.${key}`;
      entries[loc] = value;
    });
  }
  if (input.StorageResolution !== undefined) {
    entries["StorageResolution"] = input.StorageResolution;
  }
  if (input.Timestamp !== undefined) {
    entries["Timestamp"] = input.Timestamp.toISOString().split(".")[0] + "Z";
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  if (input.Values !== undefined) {
    const memberEntries = serializeAws_queryValues(input.Values, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Values.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryMetricStat = (
  input: MetricStat,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Metric !== undefined) {
    const memberEntries = serializeAws_queryMetric(input.Metric, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metric.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.Stat !== undefined) {
    entries["Stat"] = input.Stat;
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryPutAnomalyDetectorInput = (
  input: PutAnomalyDetectorInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Configuration !== undefined) {
    const memberEntries = serializeAws_queryAnomalyDetectorConfiguration(
      input.Configuration,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Configuration.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.Stat !== undefined) {
    entries["Stat"] = input.Stat;
  }
  return entries;
};

const serializeAws_queryPutDashboardInput = (
  input: PutDashboardInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.DashboardBody !== undefined) {
    entries["DashboardBody"] = input.DashboardBody;
  }
  if (input.DashboardName !== undefined) {
    entries["DashboardName"] = input.DashboardName;
  }
  return entries;
};

const serializeAws_queryPutInsightRuleInput = (
  input: PutInsightRuleInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.RuleDefinition !== undefined) {
    entries["RuleDefinition"] = input.RuleDefinition;
  }
  if (input.RuleName !== undefined) {
    entries["RuleName"] = input.RuleName;
  }
  if (input.RuleState !== undefined) {
    entries["RuleState"] = input.RuleState;
  }
  return entries;
};

const serializeAws_queryPutMetricAlarmInput = (
  input: PutMetricAlarmInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ActionsEnabled !== undefined) {
    entries["ActionsEnabled"] = input.ActionsEnabled;
  }
  if (input.AlarmActions !== undefined) {
    const memberEntries = serializeAws_queryResourceList(
      input.AlarmActions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `AlarmActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.AlarmDescription !== undefined) {
    entries["AlarmDescription"] = input.AlarmDescription;
  }
  if (input.AlarmName !== undefined) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.ComparisonOperator !== undefined) {
    entries["ComparisonOperator"] = input.ComparisonOperator;
  }
  if (input.DatapointsToAlarm !== undefined) {
    entries["DatapointsToAlarm"] = input.DatapointsToAlarm;
  }
  if (input.Dimensions !== undefined) {
    const memberEntries = serializeAws_queryDimensions(
      input.Dimensions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Dimensions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.EvaluateLowSampleCountPercentile !== undefined) {
    entries["EvaluateLowSampleCountPercentile"] =
      input.EvaluateLowSampleCountPercentile;
  }
  if (input.EvaluationPeriods !== undefined) {
    entries["EvaluationPeriods"] = input.EvaluationPeriods;
  }
  if (input.ExtendedStatistic !== undefined) {
    entries["ExtendedStatistic"] = input.ExtendedStatistic;
  }
  if (input.InsufficientDataActions !== undefined) {
    const memberEntries = serializeAws_queryResourceList(
      input.InsufficientDataActions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `InsufficientDataActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.MetricName !== undefined) {
    entries["MetricName"] = input.MetricName;
  }
  if (input.Metrics !== undefined) {
    const memberEntries = serializeAws_queryMetricDataQueries(
      input.Metrics,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Metrics.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  if (input.OKActions !== undefined) {
    const memberEntries = serializeAws_queryResourceList(
      input.OKActions,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `OKActions.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Period !== undefined) {
    entries["Period"] = input.Period;
  }
  if (input.Statistic !== undefined) {
    entries["Statistic"] = input.Statistic;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Threshold !== undefined) {
    entries["Threshold"] = input.Threshold;
  }
  if (input.ThresholdMetricId !== undefined) {
    entries["ThresholdMetricId"] = input.ThresholdMetricId;
  }
  if (input.TreatMissingData !== undefined) {
    entries["TreatMissingData"] = input.TreatMissingData;
  }
  if (input.Unit !== undefined) {
    entries["Unit"] = input.Unit;
  }
  return entries;
};

const serializeAws_queryPutMetricDataInput = (
  input: PutMetricDataInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.MetricData !== undefined) {
    const memberEntries = serializeAws_queryMetricData(
      input.MetricData,
      context
    );
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `MetricData.${key}`;
      entries[loc] = value;
    });
  }
  if (input.Namespace !== undefined) {
    entries["Namespace"] = input.Namespace;
  }
  return entries;
};

const serializeAws_queryRange = (
  input: Range,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.EndTime !== undefined) {
    entries["EndTime"] = input.EndTime.toISOString().split(".")[0] + "Z";
  }
  if (input.StartTime !== undefined) {
    entries["StartTime"] = input.StartTime.toISOString().split(".")[0] + "Z";
  }
  return entries;
};

const serializeAws_queryResourceList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_querySetAlarmStateInput = (
  input: SetAlarmStateInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.AlarmName !== undefined) {
    entries["AlarmName"] = input.AlarmName;
  }
  if (input.StateReason !== undefined) {
    entries["StateReason"] = input.StateReason;
  }
  if (input.StateReasonData !== undefined) {
    entries["StateReasonData"] = input.StateReasonData;
  }
  if (input.StateValue !== undefined) {
    entries["StateValue"] = input.StateValue;
  }
  return entries;
};

const serializeAws_queryStatistics = (
  input: (Statistic | string)[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryStatisticSet = (
  input: StatisticSet,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.Maximum !== undefined) {
    entries["Maximum"] = input.Maximum;
  }
  if (input.Minimum !== undefined) {
    entries["Minimum"] = input.Minimum;
  }
  if (input.SampleCount !== undefined) {
    entries["SampleCount"] = input.SampleCount;
  }
  if (input.Sum !== undefined) {
    entries["Sum"] = input.Sum;
  }
  return entries;
};

const serializeAws_queryTag = (input: Tag, context: __SerdeContext): any => {
  const entries: any = {};
  if (input.Key !== undefined) {
    entries["Key"] = input.Key;
  }
  if (input.Value !== undefined) {
    entries["Value"] = input.Value;
  }
  return entries;
};

const serializeAws_queryTagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const serializeAws_queryTagList = (
  input: Tag[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    const memberEntries = serializeAws_queryTag(entry, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      entries[`member.${counter}.${key}`] = value;
    });
    counter++;
  }
  return entries;
};

const serializeAws_queryTagResourceInput = (
  input: TagResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.Tags !== undefined) {
    const memberEntries = serializeAws_queryTagList(input.Tags, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `Tags.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryUntagResourceInput = (
  input: UntagResourceInput,
  context: __SerdeContext
): any => {
  const entries: any = {};
  if (input.ResourceARN !== undefined) {
    entries["ResourceARN"] = input.ResourceARN;
  }
  if (input.TagKeys !== undefined) {
    const memberEntries = serializeAws_queryTagKeyList(input.TagKeys, context);
    Object.entries(memberEntries).forEach(([key, value]) => {
      const loc = `TagKeys.${key}`;
      entries[loc] = value;
    });
  }
  return entries;
};

const serializeAws_queryValues = (
  input: number[],
  context: __SerdeContext
): any => {
  const entries: any = {};
  let counter = 1;
  for (let entry of input) {
    entries[`member.${counter}`] = entry;
    counter++;
  }
  return entries;
};

const deserializeAws_queryAlarmHistoryItem = (
  output: any,
  context: __SerdeContext
): AlarmHistoryItem => {
  let contents: any = {
    __type: "AlarmHistoryItem",
    AlarmName: undefined,
    HistoryData: undefined,
    HistoryItemType: undefined,
    HistorySummary: undefined,
    Timestamp: undefined
  };
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = output["AlarmName"];
  }
  if (output["HistoryData"] !== undefined) {
    contents.HistoryData = output["HistoryData"];
  }
  if (output["HistoryItemType"] !== undefined) {
    contents.HistoryItemType = output["HistoryItemType"];
  }
  if (output["HistorySummary"] !== undefined) {
    contents.HistorySummary = output["HistorySummary"];
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryAlarmHistoryItems = (
  output: any,
  context: __SerdeContext
): AlarmHistoryItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAlarmHistoryItem(entry, context)
  );
};

const deserializeAws_queryAnomalyDetector = (
  output: any,
  context: __SerdeContext
): AnomalyDetector => {
  let contents: any = {
    __type: "AnomalyDetector",
    Configuration: undefined,
    Dimensions: undefined,
    MetricName: undefined,
    Namespace: undefined,
    Stat: undefined,
    StateValue: undefined
  };
  if (output["Configuration"] !== undefined) {
    contents.Configuration = deserializeAws_queryAnomalyDetectorConfiguration(
      output["Configuration"],
      context
    );
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (
    output["Dimensions"] !== undefined &&
    output["Dimensions"]["member"] !== undefined
  ) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = output["MetricName"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = output["Stat"];
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = output["StateValue"];
  }
  return contents;
};

const deserializeAws_queryAnomalyDetectorConfiguration = (
  output: any,
  context: __SerdeContext
): AnomalyDetectorConfiguration => {
  let contents: any = {
    __type: "AnomalyDetectorConfiguration",
    ExcludedTimeRanges: undefined,
    MetricTimezone: undefined
  };
  if (output.ExcludedTimeRanges === "") {
    contents.ExcludedTimeRanges = [];
  }
  if (
    output["ExcludedTimeRanges"] !== undefined &&
    output["ExcludedTimeRanges"]["member"] !== undefined
  ) {
    contents.ExcludedTimeRanges = deserializeAws_queryAnomalyDetectorExcludedTimeRanges(
      __getArrayIfSingleItem(output["ExcludedTimeRanges"]["member"]),
      context
    );
  }
  if (output["MetricTimezone"] !== undefined) {
    contents.MetricTimezone = output["MetricTimezone"];
  }
  return contents;
};

const deserializeAws_queryAnomalyDetectorExcludedTimeRanges = (
  output: any,
  context: __SerdeContext
): Range[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryRange(entry, context)
  );
};

const deserializeAws_queryAnomalyDetectors = (
  output: any,
  context: __SerdeContext
): AnomalyDetector[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryAnomalyDetector(entry, context)
  );
};

const deserializeAws_queryBatchFailures = (
  output: any,
  context: __SerdeContext
): PartialFailure[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryPartialFailure(entry, context)
  );
};

const deserializeAws_queryConcurrentModificationException = (
  output: any,
  context: __SerdeContext
): ConcurrentModificationException => {
  let contents: any = {
    __type: "ConcurrentModificationException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDashboardEntries = (
  output: any,
  context: __SerdeContext
): DashboardEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDashboardEntry(entry, context)
  );
};

const deserializeAws_queryDashboardEntry = (
  output: any,
  context: __SerdeContext
): DashboardEntry => {
  let contents: any = {
    __type: "DashboardEntry",
    DashboardArn: undefined,
    DashboardName: undefined,
    LastModified: undefined,
    Size: undefined
  };
  if (output["DashboardArn"] !== undefined) {
    contents.DashboardArn = output["DashboardArn"];
  }
  if (output["DashboardName"] !== undefined) {
    contents.DashboardName = output["DashboardName"];
  }
  if (output["LastModified"] !== undefined) {
    contents.LastModified = new Date(output["LastModified"]);
  }
  if (output["Size"] !== undefined) {
    contents.Size = parseInt(output["Size"]);
  }
  return contents;
};

const deserializeAws_queryDashboardInvalidInputError = (
  output: any,
  context: __SerdeContext
): DashboardInvalidInputError => {
  let contents: any = {
    __type: "DashboardInvalidInputError",
    dashboardValidationMessages: undefined,
    message: undefined
  };
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
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDashboardNotFoundError = (
  output: any,
  context: __SerdeContext
): DashboardNotFoundError => {
  let contents: any = {
    __type: "DashboardNotFoundError",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryDashboardValidationMessage = (
  output: any,
  context: __SerdeContext
): DashboardValidationMessage => {
  let contents: any = {
    __type: "DashboardValidationMessage",
    DataPath: undefined,
    Message: undefined
  };
  if (output["DataPath"] !== undefined) {
    contents.DataPath = output["DataPath"];
  }
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryDashboardValidationMessages = (
  output: any,
  context: __SerdeContext
): DashboardValidationMessage[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDashboardValidationMessage(entry, context)
  );
};

const deserializeAws_queryDatapoint = (
  output: any,
  context: __SerdeContext
): Datapoint => {
  let contents: any = {
    __type: "Datapoint",
    Average: undefined,
    ExtendedStatistics: undefined,
    Maximum: undefined,
    Minimum: undefined,
    SampleCount: undefined,
    Sum: undefined,
    Timestamp: undefined,
    Unit: undefined
  };
  if (output["Average"] !== undefined) {
    contents.Average = parseFloat(output["Average"]);
  }
  if (output.ExtendedStatistics === "") {
    contents.ExtendedStatistics = {};
  }
  if (
    output["ExtendedStatistics"] !== undefined &&
    output["ExtendedStatistics"]["entry"] !== undefined
  ) {
    contents.ExtendedStatistics = deserializeAws_queryDatapointValueMap(
      __getArrayIfSingleItem(output["ExtendedStatistics"]["entry"]),
      context
    );
  }
  if (output["Maximum"] !== undefined) {
    contents.Maximum = parseFloat(output["Maximum"]);
  }
  if (output["Minimum"] !== undefined) {
    contents.Minimum = parseFloat(output["Minimum"]);
  }
  if (output["SampleCount"] !== undefined) {
    contents.SampleCount = parseFloat(output["SampleCount"]);
  }
  if (output["Sum"] !== undefined) {
    contents.Sum = parseFloat(output["Sum"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = output["Unit"];
  }
  return contents;
};

const deserializeAws_queryDatapoints = (
  output: any,
  context: __SerdeContext
): Datapoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDatapoint(entry, context)
  );
};

const deserializeAws_queryDatapointValueMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return output.reduce(
    (acc: any, pair: any) => ({
      ...acc,
      [pair["key"]]: parseFloat(pair["value"])
    }),
    {}
  );
};

const deserializeAws_queryDatapointValues = (
  output: any,
  context: __SerdeContext
): number[] => {
  return (output || []).map((entry: any) => parseFloat(entry));
};

const deserializeAws_queryDeleteAnomalyDetectorOutput = (
  output: any,
  context: __SerdeContext
): DeleteAnomalyDetectorOutput => {
  let contents: any = {
    __type: "DeleteAnomalyDetectorOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteDashboardsOutput = (
  output: any,
  context: __SerdeContext
): DeleteDashboardsOutput => {
  let contents: any = {
    __type: "DeleteDashboardsOutput"
  };
  return contents;
};

const deserializeAws_queryDeleteInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DeleteInsightRulesOutput => {
  let contents: any = {
    __type: "DeleteInsightRulesOutput",
    Failures: undefined
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (
    output["Failures"] !== undefined &&
    output["Failures"]["member"] !== undefined
  ) {
    contents.Failures = deserializeAws_queryBatchFailures(
      __getArrayIfSingleItem(output["Failures"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAlarmHistoryOutput = (
  output: any,
  context: __SerdeContext
): DescribeAlarmHistoryOutput => {
  let contents: any = {
    __type: "DescribeAlarmHistoryOutput",
    AlarmHistoryItems: undefined,
    NextToken: undefined
  };
  if (output.AlarmHistoryItems === "") {
    contents.AlarmHistoryItems = [];
  }
  if (
    output["AlarmHistoryItems"] !== undefined &&
    output["AlarmHistoryItems"]["member"] !== undefined
  ) {
    contents.AlarmHistoryItems = deserializeAws_queryAlarmHistoryItems(
      __getArrayIfSingleItem(output["AlarmHistoryItems"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeAlarmsForMetricOutput = (
  output: any,
  context: __SerdeContext
): DescribeAlarmsForMetricOutput => {
  let contents: any = {
    __type: "DescribeAlarmsForMetricOutput",
    MetricAlarms: undefined
  };
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  }
  if (
    output["MetricAlarms"] !== undefined &&
    output["MetricAlarms"]["member"] !== undefined
  ) {
    contents.MetricAlarms = deserializeAws_queryMetricAlarms(
      __getArrayIfSingleItem(output["MetricAlarms"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryDescribeAlarmsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAlarmsOutput => {
  let contents: any = {
    __type: "DescribeAlarmsOutput",
    MetricAlarms: undefined,
    NextToken: undefined
  };
  if (output.MetricAlarms === "") {
    contents.MetricAlarms = [];
  }
  if (
    output["MetricAlarms"] !== undefined &&
    output["MetricAlarms"]["member"] !== undefined
  ) {
    contents.MetricAlarms = deserializeAws_queryMetricAlarms(
      __getArrayIfSingleItem(output["MetricAlarms"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeAnomalyDetectorsOutput = (
  output: any,
  context: __SerdeContext
): DescribeAnomalyDetectorsOutput => {
  let contents: any = {
    __type: "DescribeAnomalyDetectorsOutput",
    AnomalyDetectors: undefined,
    NextToken: undefined
  };
  if (output.AnomalyDetectors === "") {
    contents.AnomalyDetectors = [];
  }
  if (
    output["AnomalyDetectors"] !== undefined &&
    output["AnomalyDetectors"]["member"] !== undefined
  ) {
    contents.AnomalyDetectors = deserializeAws_queryAnomalyDetectors(
      __getArrayIfSingleItem(output["AnomalyDetectors"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDescribeInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DescribeInsightRulesOutput => {
  let contents: any = {
    __type: "DescribeInsightRulesOutput",
    InsightRules: undefined,
    NextToken: undefined
  };
  if (output.InsightRules === "") {
    contents.InsightRules = [];
  }
  if (
    output["InsightRules"] !== undefined &&
    output["InsightRules"]["member"] !== undefined
  ) {
    contents.InsightRules = deserializeAws_queryInsightRules(
      __getArrayIfSingleItem(output["InsightRules"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryDimension = (
  output: any,
  context: __SerdeContext
): Dimension => {
  let contents: any = {
    __type: "Dimension",
    Name: undefined,
    Value: undefined
  };
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryDimensions = (
  output: any,
  context: __SerdeContext
): Dimension[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryDimension(entry, context)
  );
};

const deserializeAws_queryDisableInsightRulesOutput = (
  output: any,
  context: __SerdeContext
): DisableInsightRulesOutput => {
  let contents: any = {
    __type: "DisableInsightRulesOutput",
    Failures: undefined
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (
    output["Failures"] !== undefined &&
    output["Failures"]["member"] !== undefined
  ) {
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
    __type: "EnableInsightRulesOutput",
    Failures: undefined
  };
  if (output.Failures === "") {
    contents.Failures = [];
  }
  if (
    output["Failures"] !== undefined &&
    output["Failures"]["member"] !== undefined
  ) {
    contents.Failures = deserializeAws_queryBatchFailures(
      __getArrayIfSingleItem(output["Failures"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetDashboardOutput = (
  output: any,
  context: __SerdeContext
): GetDashboardOutput => {
  let contents: any = {
    __type: "GetDashboardOutput",
    DashboardArn: undefined,
    DashboardBody: undefined,
    DashboardName: undefined
  };
  if (output["DashboardArn"] !== undefined) {
    contents.DashboardArn = output["DashboardArn"];
  }
  if (output["DashboardBody"] !== undefined) {
    contents.DashboardBody = output["DashboardBody"];
  }
  if (output["DashboardName"] !== undefined) {
    contents.DashboardName = output["DashboardName"];
  }
  return contents;
};

const deserializeAws_queryGetInsightRuleReportOutput = (
  output: any,
  context: __SerdeContext
): GetInsightRuleReportOutput => {
  let contents: any = {
    __type: "GetInsightRuleReportOutput",
    AggregateValue: undefined,
    AggregationStatistic: undefined,
    ApproximateUniqueCount: undefined,
    Contributors: undefined,
    KeyLabels: undefined,
    MetricDatapoints: undefined
  };
  if (output["AggregateValue"] !== undefined) {
    contents.AggregateValue = parseFloat(output["AggregateValue"]);
  }
  if (output["AggregationStatistic"] !== undefined) {
    contents.AggregationStatistic = output["AggregationStatistic"];
  }
  if (output["ApproximateUniqueCount"] !== undefined) {
    contents.ApproximateUniqueCount = parseInt(
      output["ApproximateUniqueCount"]
    );
  }
  if (output.Contributors === "") {
    contents.Contributors = [];
  }
  if (
    output["Contributors"] !== undefined &&
    output["Contributors"]["member"] !== undefined
  ) {
    contents.Contributors = deserializeAws_queryInsightRuleContributors(
      __getArrayIfSingleItem(output["Contributors"]["member"]),
      context
    );
  }
  if (output.KeyLabels === "") {
    contents.KeyLabels = [];
  }
  if (
    output["KeyLabels"] !== undefined &&
    output["KeyLabels"]["member"] !== undefined
  ) {
    contents.KeyLabels = deserializeAws_queryInsightRuleContributorKeyLabels(
      __getArrayIfSingleItem(output["KeyLabels"]["member"]),
      context
    );
  }
  if (output.MetricDatapoints === "") {
    contents.MetricDatapoints = [];
  }
  if (
    output["MetricDatapoints"] !== undefined &&
    output["MetricDatapoints"]["member"] !== undefined
  ) {
    contents.MetricDatapoints = deserializeAws_queryInsightRuleMetricDatapoints(
      __getArrayIfSingleItem(output["MetricDatapoints"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryGetMetricDataOutput = (
  output: any,
  context: __SerdeContext
): GetMetricDataOutput => {
  let contents: any = {
    __type: "GetMetricDataOutput",
    Messages: undefined,
    MetricDataResults: undefined,
    NextToken: undefined
  };
  if (output.Messages === "") {
    contents.Messages = [];
  }
  if (
    output["Messages"] !== undefined &&
    output["Messages"]["member"] !== undefined
  ) {
    contents.Messages = deserializeAws_queryMetricDataResultMessages(
      __getArrayIfSingleItem(output["Messages"]["member"]),
      context
    );
  }
  if (output.MetricDataResults === "") {
    contents.MetricDataResults = [];
  }
  if (
    output["MetricDataResults"] !== undefined &&
    output["MetricDataResults"]["member"] !== undefined
  ) {
    contents.MetricDataResults = deserializeAws_queryMetricDataResults(
      __getArrayIfSingleItem(output["MetricDataResults"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryGetMetricStatisticsOutput = (
  output: any,
  context: __SerdeContext
): GetMetricStatisticsOutput => {
  let contents: any = {
    __type: "GetMetricStatisticsOutput",
    Datapoints: undefined,
    Label: undefined
  };
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  }
  if (
    output["Datapoints"] !== undefined &&
    output["Datapoints"]["member"] !== undefined
  ) {
    contents.Datapoints = deserializeAws_queryDatapoints(
      __getArrayIfSingleItem(output["Datapoints"]["member"]),
      context
    );
  }
  if (output["Label"] !== undefined) {
    contents.Label = output["Label"];
  }
  return contents;
};

const deserializeAws_queryGetMetricWidgetImageOutput = (
  output: any,
  context: __SerdeContext
): GetMetricWidgetImageOutput => {
  let contents: any = {
    __type: "GetMetricWidgetImageOutput",
    MetricWidgetImage: undefined
  };
  if (output["MetricWidgetImage"] !== undefined) {
    contents.MetricWidgetImage = context.base64Decoder(
      output["MetricWidgetImage"]
    );
  }
  return contents;
};

const deserializeAws_queryInsightRule = (
  output: any,
  context: __SerdeContext
): InsightRule => {
  let contents: any = {
    __type: "InsightRule",
    Definition: undefined,
    Name: undefined,
    Schema: undefined,
    State: undefined
  };
  if (output["Definition"] !== undefined) {
    contents.Definition = output["Definition"];
  }
  if (output["Name"] !== undefined) {
    contents.Name = output["Name"];
  }
  if (output["Schema"] !== undefined) {
    contents.Schema = output["Schema"];
  }
  if (output["State"] !== undefined) {
    contents.State = output["State"];
  }
  return contents;
};

const deserializeAws_queryInsightRuleContributor = (
  output: any,
  context: __SerdeContext
): InsightRuleContributor => {
  let contents: any = {
    __type: "InsightRuleContributor",
    ApproximateAggregateValue: undefined,
    Datapoints: undefined,
    Keys: undefined
  };
  if (output["ApproximateAggregateValue"] !== undefined) {
    contents.ApproximateAggregateValue = parseFloat(
      output["ApproximateAggregateValue"]
    );
  }
  if (output.Datapoints === "") {
    contents.Datapoints = [];
  }
  if (
    output["Datapoints"] !== undefined &&
    output["Datapoints"]["member"] !== undefined
  ) {
    contents.Datapoints = deserializeAws_queryInsightRuleContributorDatapoints(
      __getArrayIfSingleItem(output["Datapoints"]["member"]),
      context
    );
  }
  if (output.Keys === "") {
    contents.Keys = [];
  }
  if (output["Keys"] !== undefined && output["Keys"]["member"] !== undefined) {
    contents.Keys = deserializeAws_queryInsightRuleContributorKeys(
      __getArrayIfSingleItem(output["Keys"]["member"]),
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
    __type: "InsightRuleContributorDatapoint",
    ApproximateValue: undefined,
    Timestamp: undefined
  };
  if (output["ApproximateValue"] !== undefined) {
    contents.ApproximateValue = parseFloat(output["ApproximateValue"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  return contents;
};

const deserializeAws_queryInsightRuleContributorDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleContributorDatapoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInsightRuleContributorDatapoint(entry, context)
  );
};

const deserializeAws_queryInsightRuleContributorKeyLabels = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryInsightRuleContributorKeys = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryInsightRuleContributors = (
  output: any,
  context: __SerdeContext
): InsightRuleContributor[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInsightRuleContributor(entry, context)
  );
};

const deserializeAws_queryInsightRuleMetricDatapoint = (
  output: any,
  context: __SerdeContext
): InsightRuleMetricDatapoint => {
  let contents: any = {
    __type: "InsightRuleMetricDatapoint",
    Average: undefined,
    MaxContributorValue: undefined,
    Maximum: undefined,
    Minimum: undefined,
    SampleCount: undefined,
    Sum: undefined,
    Timestamp: undefined,
    UniqueContributors: undefined
  };
  if (output["Average"] !== undefined) {
    contents.Average = parseFloat(output["Average"]);
  }
  if (output["MaxContributorValue"] !== undefined) {
    contents.MaxContributorValue = parseFloat(output["MaxContributorValue"]);
  }
  if (output["Maximum"] !== undefined) {
    contents.Maximum = parseFloat(output["Maximum"]);
  }
  if (output["Minimum"] !== undefined) {
    contents.Minimum = parseFloat(output["Minimum"]);
  }
  if (output["SampleCount"] !== undefined) {
    contents.SampleCount = parseFloat(output["SampleCount"]);
  }
  if (output["Sum"] !== undefined) {
    contents.Sum = parseFloat(output["Sum"]);
  }
  if (output["Timestamp"] !== undefined) {
    contents.Timestamp = new Date(output["Timestamp"]);
  }
  if (output["UniqueContributors"] !== undefined) {
    contents.UniqueContributors = parseFloat(output["UniqueContributors"]);
  }
  return contents;
};

const deserializeAws_queryInsightRuleMetricDatapoints = (
  output: any,
  context: __SerdeContext
): InsightRuleMetricDatapoint[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInsightRuleMetricDatapoint(entry, context)
  );
};

const deserializeAws_queryInsightRules = (
  output: any,
  context: __SerdeContext
): InsightRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryInsightRule(entry, context)
  );
};

const deserializeAws_queryInternalServiceFault = (
  output: any,
  context: __SerdeContext
): InternalServiceFault => {
  let contents: any = {
    __type: "InternalServiceFault",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryInvalidFormatFault = (
  output: any,
  context: __SerdeContext
): InvalidFormatFault => {
  let contents: any = {
    __type: "InvalidFormatFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidNextToken = (
  output: any,
  context: __SerdeContext
): InvalidNextToken => {
  let contents: any = {
    __type: "InvalidNextToken",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidParameterCombinationException = (
  output: any,
  context: __SerdeContext
): InvalidParameterCombinationException => {
  let contents: any = {
    __type: "InvalidParameterCombinationException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryInvalidParameterValueException = (
  output: any,
  context: __SerdeContext
): InvalidParameterValueException => {
  let contents: any = {
    __type: "InvalidParameterValueException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryLimitExceededException = (
  output: any,
  context: __SerdeContext
): LimitExceededException => {
  let contents: any = {
    __type: "LimitExceededException",
    Message: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  return contents;
};

const deserializeAws_queryLimitExceededFault = (
  output: any,
  context: __SerdeContext
): LimitExceededFault => {
  let contents: any = {
    __type: "LimitExceededFault",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryListDashboardsOutput = (
  output: any,
  context: __SerdeContext
): ListDashboardsOutput => {
  let contents: any = {
    __type: "ListDashboardsOutput",
    DashboardEntries: undefined,
    NextToken: undefined
  };
  if (output.DashboardEntries === "") {
    contents.DashboardEntries = [];
  }
  if (
    output["DashboardEntries"] !== undefined &&
    output["DashboardEntries"]["member"] !== undefined
  ) {
    contents.DashboardEntries = deserializeAws_queryDashboardEntries(
      __getArrayIfSingleItem(output["DashboardEntries"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryListMetricsOutput = (
  output: any,
  context: __SerdeContext
): ListMetricsOutput => {
  let contents: any = {
    __type: "ListMetricsOutput",
    Metrics: undefined,
    NextToken: undefined
  };
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (
    output["Metrics"] !== undefined &&
    output["Metrics"]["member"] !== undefined
  ) {
    contents.Metrics = deserializeAws_queryMetrics(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output["NextToken"] !== undefined) {
    contents.NextToken = output["NextToken"];
  }
  return contents;
};

const deserializeAws_queryListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  let contents: any = {
    __type: "ListTagsForResourceOutput",
    Tags: undefined
  };
  if (output.Tags === "") {
    contents.Tags = [];
  }
  if (output["Tags"] !== undefined && output["Tags"]["member"] !== undefined) {
    contents.Tags = deserializeAws_queryTagList(
      __getArrayIfSingleItem(output["Tags"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMessageData = (
  output: any,
  context: __SerdeContext
): MessageData => {
  let contents: any = {
    __type: "MessageData",
    Code: undefined,
    Value: undefined
  };
  if (output["Code"] !== undefined) {
    contents.Code = output["Code"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryMetric = (
  output: any,
  context: __SerdeContext
): Metric => {
  let contents: any = {
    __type: "Metric",
    Dimensions: undefined,
    MetricName: undefined,
    Namespace: undefined
  };
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (
    output["Dimensions"] !== undefined &&
    output["Dimensions"]["member"] !== undefined
  ) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = output["MetricName"];
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  return contents;
};

const deserializeAws_queryMetricAlarm = (
  output: any,
  context: __SerdeContext
): MetricAlarm => {
  let contents: any = {
    __type: "MetricAlarm",
    ActionsEnabled: undefined,
    AlarmActions: undefined,
    AlarmArn: undefined,
    AlarmConfigurationUpdatedTimestamp: undefined,
    AlarmDescription: undefined,
    AlarmName: undefined,
    ComparisonOperator: undefined,
    DatapointsToAlarm: undefined,
    Dimensions: undefined,
    EvaluateLowSampleCountPercentile: undefined,
    EvaluationPeriods: undefined,
    ExtendedStatistic: undefined,
    InsufficientDataActions: undefined,
    MetricName: undefined,
    Metrics: undefined,
    Namespace: undefined,
    OKActions: undefined,
    Period: undefined,
    StateReason: undefined,
    StateReasonData: undefined,
    StateUpdatedTimestamp: undefined,
    StateValue: undefined,
    Statistic: undefined,
    Threshold: undefined,
    ThresholdMetricId: undefined,
    TreatMissingData: undefined,
    Unit: undefined
  };
  if (output["ActionsEnabled"] !== undefined) {
    contents.ActionsEnabled = output["ActionsEnabled"] == "true";
  }
  if (output.AlarmActions === "") {
    contents.AlarmActions = [];
  }
  if (
    output["AlarmActions"] !== undefined &&
    output["AlarmActions"]["member"] !== undefined
  ) {
    contents.AlarmActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["AlarmActions"]["member"]),
      context
    );
  }
  if (output["AlarmArn"] !== undefined) {
    contents.AlarmArn = output["AlarmArn"];
  }
  if (output["AlarmConfigurationUpdatedTimestamp"] !== undefined) {
    contents.AlarmConfigurationUpdatedTimestamp = new Date(
      output["AlarmConfigurationUpdatedTimestamp"]
    );
  }
  if (output["AlarmDescription"] !== undefined) {
    contents.AlarmDescription = output["AlarmDescription"];
  }
  if (output["AlarmName"] !== undefined) {
    contents.AlarmName = output["AlarmName"];
  }
  if (output["ComparisonOperator"] !== undefined) {
    contents.ComparisonOperator = output["ComparisonOperator"];
  }
  if (output["DatapointsToAlarm"] !== undefined) {
    contents.DatapointsToAlarm = parseInt(output["DatapointsToAlarm"]);
  }
  if (output.Dimensions === "") {
    contents.Dimensions = [];
  }
  if (
    output["Dimensions"] !== undefined &&
    output["Dimensions"]["member"] !== undefined
  ) {
    contents.Dimensions = deserializeAws_queryDimensions(
      __getArrayIfSingleItem(output["Dimensions"]["member"]),
      context
    );
  }
  if (output["EvaluateLowSampleCountPercentile"] !== undefined) {
    contents.EvaluateLowSampleCountPercentile =
      output["EvaluateLowSampleCountPercentile"];
  }
  if (output["EvaluationPeriods"] !== undefined) {
    contents.EvaluationPeriods = parseInt(output["EvaluationPeriods"]);
  }
  if (output["ExtendedStatistic"] !== undefined) {
    contents.ExtendedStatistic = output["ExtendedStatistic"];
  }
  if (output.InsufficientDataActions === "") {
    contents.InsufficientDataActions = [];
  }
  if (
    output["InsufficientDataActions"] !== undefined &&
    output["InsufficientDataActions"]["member"] !== undefined
  ) {
    contents.InsufficientDataActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["InsufficientDataActions"]["member"]),
      context
    );
  }
  if (output["MetricName"] !== undefined) {
    contents.MetricName = output["MetricName"];
  }
  if (output.Metrics === "") {
    contents.Metrics = [];
  }
  if (
    output["Metrics"] !== undefined &&
    output["Metrics"]["member"] !== undefined
  ) {
    contents.Metrics = deserializeAws_queryMetricDataQueries(
      __getArrayIfSingleItem(output["Metrics"]["member"]),
      context
    );
  }
  if (output["Namespace"] !== undefined) {
    contents.Namespace = output["Namespace"];
  }
  if (output.OKActions === "") {
    contents.OKActions = [];
  }
  if (
    output["OKActions"] !== undefined &&
    output["OKActions"]["member"] !== undefined
  ) {
    contents.OKActions = deserializeAws_queryResourceList(
      __getArrayIfSingleItem(output["OKActions"]["member"]),
      context
    );
  }
  if (output["Period"] !== undefined) {
    contents.Period = parseInt(output["Period"]);
  }
  if (output["StateReason"] !== undefined) {
    contents.StateReason = output["StateReason"];
  }
  if (output["StateReasonData"] !== undefined) {
    contents.StateReasonData = output["StateReasonData"];
  }
  if (output["StateUpdatedTimestamp"] !== undefined) {
    contents.StateUpdatedTimestamp = new Date(output["StateUpdatedTimestamp"]);
  }
  if (output["StateValue"] !== undefined) {
    contents.StateValue = output["StateValue"];
  }
  if (output["Statistic"] !== undefined) {
    contents.Statistic = output["Statistic"];
  }
  if (output["Threshold"] !== undefined) {
    contents.Threshold = parseFloat(output["Threshold"]);
  }
  if (output["ThresholdMetricId"] !== undefined) {
    contents.ThresholdMetricId = output["ThresholdMetricId"];
  }
  if (output["TreatMissingData"] !== undefined) {
    contents.TreatMissingData = output["TreatMissingData"];
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = output["Unit"];
  }
  return contents;
};

const deserializeAws_queryMetricAlarms = (
  output: any,
  context: __SerdeContext
): MetricAlarm[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricAlarm(entry, context)
  );
};

const deserializeAws_queryMetricDataQueries = (
  output: any,
  context: __SerdeContext
): MetricDataQuery[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricDataQuery(entry, context)
  );
};

const deserializeAws_queryMetricDataQuery = (
  output: any,
  context: __SerdeContext
): MetricDataQuery => {
  let contents: any = {
    __type: "MetricDataQuery",
    Expression: undefined,
    Id: undefined,
    Label: undefined,
    MetricStat: undefined,
    Period: undefined,
    ReturnData: undefined
  };
  if (output["Expression"] !== undefined) {
    contents.Expression = output["Expression"];
  }
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Label"] !== undefined) {
    contents.Label = output["Label"];
  }
  if (output["MetricStat"] !== undefined) {
    contents.MetricStat = deserializeAws_queryMetricStat(
      output["MetricStat"],
      context
    );
  }
  if (output["Period"] !== undefined) {
    contents.Period = parseInt(output["Period"]);
  }
  if (output["ReturnData"] !== undefined) {
    contents.ReturnData = output["ReturnData"] == "true";
  }
  return contents;
};

const deserializeAws_queryMetricDataResult = (
  output: any,
  context: __SerdeContext
): MetricDataResult => {
  let contents: any = {
    __type: "MetricDataResult",
    Id: undefined,
    Label: undefined,
    Messages: undefined,
    StatusCode: undefined,
    Timestamps: undefined,
    Values: undefined
  };
  if (output["Id"] !== undefined) {
    contents.Id = output["Id"];
  }
  if (output["Label"] !== undefined) {
    contents.Label = output["Label"];
  }
  if (output.Messages === "") {
    contents.Messages = [];
  }
  if (
    output["Messages"] !== undefined &&
    output["Messages"]["member"] !== undefined
  ) {
    contents.Messages = deserializeAws_queryMetricDataResultMessages(
      __getArrayIfSingleItem(output["Messages"]["member"]),
      context
    );
  }
  if (output["StatusCode"] !== undefined) {
    contents.StatusCode = output["StatusCode"];
  }
  if (output.Timestamps === "") {
    contents.Timestamps = [];
  }
  if (
    output["Timestamps"] !== undefined &&
    output["Timestamps"]["member"] !== undefined
  ) {
    contents.Timestamps = deserializeAws_queryTimestamps(
      __getArrayIfSingleItem(output["Timestamps"]["member"]),
      context
    );
  }
  if (output.Values === "") {
    contents.Values = [];
  }
  if (
    output["Values"] !== undefined &&
    output["Values"]["member"] !== undefined
  ) {
    contents.Values = deserializeAws_queryDatapointValues(
      __getArrayIfSingleItem(output["Values"]["member"]),
      context
    );
  }
  return contents;
};

const deserializeAws_queryMetricDataResultMessages = (
  output: any,
  context: __SerdeContext
): MessageData[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMessageData(entry, context)
  );
};

const deserializeAws_queryMetricDataResults = (
  output: any,
  context: __SerdeContext
): MetricDataResult[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetricDataResult(entry, context)
  );
};

const deserializeAws_queryMetrics = (
  output: any,
  context: __SerdeContext
): Metric[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryMetric(entry, context)
  );
};

const deserializeAws_queryMetricStat = (
  output: any,
  context: __SerdeContext
): MetricStat => {
  let contents: any = {
    __type: "MetricStat",
    Metric: undefined,
    Period: undefined,
    Stat: undefined,
    Unit: undefined
  };
  if (output["Metric"] !== undefined) {
    contents.Metric = deserializeAws_queryMetric(output["Metric"], context);
  }
  if (output["Period"] !== undefined) {
    contents.Period = parseInt(output["Period"]);
  }
  if (output["Stat"] !== undefined) {
    contents.Stat = output["Stat"];
  }
  if (output["Unit"] !== undefined) {
    contents.Unit = output["Unit"];
  }
  return contents;
};

const deserializeAws_queryMissingRequiredParameterException = (
  output: any,
  context: __SerdeContext
): MissingRequiredParameterException => {
  let contents: any = {
    __type: "MissingRequiredParameterException",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryPartialFailure = (
  output: any,
  context: __SerdeContext
): PartialFailure => {
  let contents: any = {
    __type: "PartialFailure",
    ExceptionType: undefined,
    FailureCode: undefined,
    FailureDescription: undefined,
    FailureResource: undefined
  };
  if (output["ExceptionType"] !== undefined) {
    contents.ExceptionType = output["ExceptionType"];
  }
  if (output["FailureCode"] !== undefined) {
    contents.FailureCode = output["FailureCode"];
  }
  if (output["FailureDescription"] !== undefined) {
    contents.FailureDescription = output["FailureDescription"];
  }
  if (output["FailureResource"] !== undefined) {
    contents.FailureResource = output["FailureResource"];
  }
  return contents;
};

const deserializeAws_queryPutAnomalyDetectorOutput = (
  output: any,
  context: __SerdeContext
): PutAnomalyDetectorOutput => {
  let contents: any = {
    __type: "PutAnomalyDetectorOutput"
  };
  return contents;
};

const deserializeAws_queryPutDashboardOutput = (
  output: any,
  context: __SerdeContext
): PutDashboardOutput => {
  let contents: any = {
    __type: "PutDashboardOutput",
    DashboardValidationMessages: undefined
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

const deserializeAws_queryPutInsightRuleOutput = (
  output: any,
  context: __SerdeContext
): PutInsightRuleOutput => {
  let contents: any = {
    __type: "PutInsightRuleOutput"
  };
  return contents;
};

const deserializeAws_queryRange = (
  output: any,
  context: __SerdeContext
): Range => {
  let contents: any = {
    __type: "Range",
    EndTime: undefined,
    StartTime: undefined
  };
  if (output["EndTime"] !== undefined) {
    contents.EndTime = new Date(output["EndTime"]);
  }
  if (output["StartTime"] !== undefined) {
    contents.StartTime = new Date(output["StartTime"]);
  }
  return contents;
};

const deserializeAws_queryResourceList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_queryResourceNotFound = (
  output: any,
  context: __SerdeContext
): ResourceNotFound => {
  let contents: any = {
    __type: "ResourceNotFound",
    message: undefined
  };
  if (output["message"] !== undefined) {
    contents.message = output["message"];
  }
  return contents;
};

const deserializeAws_queryResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  let contents: any = {
    __type: "ResourceNotFoundException",
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined
  };
  if (output["Message"] !== undefined) {
    contents.Message = output["Message"];
  }
  if (output["ResourceId"] !== undefined) {
    contents.ResourceId = output["ResourceId"];
  }
  if (output["ResourceType"] !== undefined) {
    contents.ResourceType = output["ResourceType"];
  }
  return contents;
};

const deserializeAws_queryTag = (output: any, context: __SerdeContext): Tag => {
  let contents: any = {
    __type: "Tag",
    Key: undefined,
    Value: undefined
  };
  if (output["Key"] !== undefined) {
    contents.Key = output["Key"];
  }
  if (output["Value"] !== undefined) {
    contents.Value = output["Value"];
  }
  return contents;
};

const deserializeAws_queryTagList = (
  output: any,
  context: __SerdeContext
): Tag[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_queryTag(entry, context)
  );
};

const deserializeAws_queryTagResourceOutput = (
  output: any,
  context: __SerdeContext
): TagResourceOutput => {
  let contents: any = {
    __type: "TagResourceOutput"
  };
  return contents;
};

const deserializeAws_queryTimestamps = (
  output: any,
  context: __SerdeContext
): Date[] => {
  return (output || []).map((entry: any) => new Date(entry));
};

const deserializeAws_queryUntagResourceOutput = (
  output: any,
  context: __SerdeContext
): UntagResourceOutput => {
  let contents: any = {
    __type: "UntagResourceOutput"
  };
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

const decodeEscapedXML = (str: string) =>
  str
    .replace(/&amp;/g, "&")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<");

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      const parsedObj = xmlParse(encoded, {
        attributeNamePrefix: "",
        ignoreAttributes: false,
        parseNodeValue: false,
        tagValueProcessor: (val, tagName) => decodeEscapedXML(val)
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

const buildFormUrlencodedString = (formEntries: {
  [key: string]: string;
}): string =>
  Object.entries(formEntries)
    .map(
      ([key, value]) =>
        __extendedEncodeURIComponent(key) +
        "=" +
        __extendedEncodeURIComponent(value)
    )
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
