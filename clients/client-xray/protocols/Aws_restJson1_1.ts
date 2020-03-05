import {
  BatchGetTracesCommandInput,
  BatchGetTracesCommandOutput
} from "../commands/BatchGetTracesCommand";
import {
  CreateGroupCommandInput,
  CreateGroupCommandOutput
} from "../commands/CreateGroupCommand";
import {
  CreateSamplingRuleCommandInput,
  CreateSamplingRuleCommandOutput
} from "../commands/CreateSamplingRuleCommand";
import {
  DeleteGroupCommandInput,
  DeleteGroupCommandOutput
} from "../commands/DeleteGroupCommand";
import {
  DeleteSamplingRuleCommandInput,
  DeleteSamplingRuleCommandOutput
} from "../commands/DeleteSamplingRuleCommand";
import {
  GetEncryptionConfigCommandInput,
  GetEncryptionConfigCommandOutput
} from "../commands/GetEncryptionConfigCommand";
import {
  GetGroupCommandInput,
  GetGroupCommandOutput
} from "../commands/GetGroupCommand";
import {
  GetGroupsCommandInput,
  GetGroupsCommandOutput
} from "../commands/GetGroupsCommand";
import {
  GetSamplingRulesCommandInput,
  GetSamplingRulesCommandOutput
} from "../commands/GetSamplingRulesCommand";
import {
  GetSamplingStatisticSummariesCommandInput,
  GetSamplingStatisticSummariesCommandOutput
} from "../commands/GetSamplingStatisticSummariesCommand";
import {
  GetSamplingTargetsCommandInput,
  GetSamplingTargetsCommandOutput
} from "../commands/GetSamplingTargetsCommand";
import {
  GetServiceGraphCommandInput,
  GetServiceGraphCommandOutput
} from "../commands/GetServiceGraphCommand";
import {
  GetTimeSeriesServiceStatisticsCommandInput,
  GetTimeSeriesServiceStatisticsCommandOutput
} from "../commands/GetTimeSeriesServiceStatisticsCommand";
import {
  GetTraceGraphCommandInput,
  GetTraceGraphCommandOutput
} from "../commands/GetTraceGraphCommand";
import {
  GetTraceSummariesCommandInput,
  GetTraceSummariesCommandOutput
} from "../commands/GetTraceSummariesCommand";
import {
  PutEncryptionConfigCommandInput,
  PutEncryptionConfigCommandOutput
} from "../commands/PutEncryptionConfigCommand";
import {
  PutTelemetryRecordsCommandInput,
  PutTelemetryRecordsCommandOutput
} from "../commands/PutTelemetryRecordsCommand";
import {
  PutTraceSegmentsCommandInput,
  PutTraceSegmentsCommandOutput
} from "../commands/PutTraceSegmentsCommand";
import {
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput
} from "../commands/UpdateGroupCommand";
import {
  UpdateSamplingRuleCommandInput,
  UpdateSamplingRuleCommandOutput
} from "../commands/UpdateSamplingRuleCommand";
import {
  Alias,
  AnnotationValue,
  AvailabilityZoneDetail,
  BackendConnectionErrors,
  Edge,
  EdgeStatistics,
  EncryptionConfig,
  ErrorRootCause,
  ErrorRootCauseEntity,
  ErrorRootCauseService,
  ErrorStatistics,
  FaultRootCause,
  FaultRootCauseEntity,
  FaultRootCauseService,
  FaultStatistics,
  Group,
  GroupSummary,
  HistogramEntry,
  Http,
  InstanceIdDetail,
  InvalidRequestException,
  ResourceARNDetail,
  ResponseTimeRootCause,
  ResponseTimeRootCauseEntity,
  ResponseTimeRootCauseService,
  RootCauseException,
  RuleLimitExceededException,
  SamplingRule,
  SamplingRuleRecord,
  SamplingRuleUpdate,
  SamplingStatisticSummary,
  SamplingStatisticsDocument,
  SamplingStrategy,
  SamplingTargetDocument,
  Segment,
  Service,
  ServiceId,
  ServiceStatistics,
  TelemetryRecord,
  ThrottledException,
  TimeSeriesServiceStatistics,
  Trace,
  TraceSummary,
  TraceUser,
  UnprocessedStatistics,
  UnprocessedTraceSegment,
  ValueWithServiceIds
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1BatchGetTracesCommand(
  input: BatchGetTracesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/Traces";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TraceIds !== undefined) {
    bodyParams["TraceIds"] = serializeAws_restJson1_1TraceIdList(
      input.TraceIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateGroupCommand(
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/CreateGroup";
  let body: any;
  const bodyParams: any = {};
  if (input.FilterExpression !== undefined) {
    bodyParams["FilterExpression"] = input.FilterExpression;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateSamplingRuleCommand(
  input: CreateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/CreateSamplingRule";
  let body: any;
  const bodyParams: any = {};
  if (input.SamplingRule !== undefined) {
    bodyParams["SamplingRule"] = serializeAws_restJson1_1SamplingRule(
      input.SamplingRule,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteGroupCommand(
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DeleteGroup";
  let body: any;
  const bodyParams: any = {};
  if (input.GroupARN !== undefined) {
    bodyParams["GroupARN"] = input.GroupARN;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteSamplingRuleCommand(
  input: DeleteSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/DeleteSamplingRule";
  let body: any;
  const bodyParams: any = {};
  if (input.RuleARN !== undefined) {
    bodyParams["RuleARN"] = input.RuleARN;
  }
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetEncryptionConfigCommand(
  input: GetEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/EncryptionConfig";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetGroupCommand(
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/GetGroup";
  let body: any;
  const bodyParams: any = {};
  if (input.GroupARN !== undefined) {
    bodyParams["GroupARN"] = input.GroupARN;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetGroupsCommand(
  input: GetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/Groups";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetSamplingRulesCommand(
  input: GetSamplingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/GetSamplingRules";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetSamplingStatisticSummariesCommand(
  input: GetSamplingStatisticSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/SamplingStatisticSummaries";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetSamplingTargetsCommand(
  input: GetSamplingTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/SamplingTargets";
  let body: any;
  const bodyParams: any = {};
  if (input.SamplingStatisticsDocuments !== undefined) {
    bodyParams[
      "SamplingStatisticsDocuments"
    ] = serializeAws_restJson1_1SamplingStatisticsDocumentList(
      input.SamplingStatisticsDocuments,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetServiceGraphCommand(
  input: GetServiceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/ServiceGraph";
  let body: any;
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.GroupARN !== undefined) {
    bodyParams["GroupARN"] = input.GroupARN;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetTimeSeriesServiceStatisticsCommand(
  input: GetTimeSeriesServiceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TimeSeriesServiceStatistics";
  let body: any;
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.EntitySelectorExpression !== undefined) {
    bodyParams["EntitySelectorExpression"] = input.EntitySelectorExpression;
  }
  if (input.GroupARN !== undefined) {
    bodyParams["GroupARN"] = input.GroupARN;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Period !== undefined) {
    bodyParams["Period"] = input.Period;
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetTraceGraphCommand(
  input: GetTraceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TraceGraph";
  let body: any;
  const bodyParams: any = {};
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.TraceIds !== undefined) {
    bodyParams["TraceIds"] = serializeAws_restJson1_1TraceIdList(
      input.TraceIds,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetTraceSummariesCommand(
  input: GetTraceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TraceSummaries";
  let body: any;
  const bodyParams: any = {};
  if (input.EndTime !== undefined) {
    bodyParams["EndTime"] = Math.round(input.EndTime.getTime() / 1000);
  }
  if (input.FilterExpression !== undefined) {
    bodyParams["FilterExpression"] = input.FilterExpression;
  }
  if (input.NextToken !== undefined) {
    bodyParams["NextToken"] = input.NextToken;
  }
  if (input.Sampling !== undefined) {
    bodyParams["Sampling"] = input.Sampling;
  }
  if (input.SamplingStrategy !== undefined) {
    bodyParams["SamplingStrategy"] = serializeAws_restJson1_1SamplingStrategy(
      input.SamplingStrategy,
      context
    );
  }
  if (input.StartTime !== undefined) {
    bodyParams["StartTime"] = Math.round(input.StartTime.getTime() / 1000);
  }
  if (input.TimeRangeType !== undefined) {
    bodyParams["TimeRangeType"] = input.TimeRangeType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutEncryptionConfigCommand(
  input: PutEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/PutEncryptionConfig";
  let body: any;
  const bodyParams: any = {};
  if (input.KeyId !== undefined) {
    bodyParams["KeyId"] = input.KeyId;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutTelemetryRecordsCommand(
  input: PutTelemetryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TelemetryRecords";
  let body: any;
  const bodyParams: any = {};
  if (input.EC2InstanceId !== undefined) {
    bodyParams["EC2InstanceId"] = input.EC2InstanceId;
  }
  if (input.Hostname !== undefined) {
    bodyParams["Hostname"] = input.Hostname;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.TelemetryRecords !== undefined) {
    bodyParams[
      "TelemetryRecords"
    ] = serializeAws_restJson1_1TelemetryRecordList(
      input.TelemetryRecords,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutTraceSegmentsCommand(
  input: PutTraceSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/TraceSegments";
  let body: any;
  const bodyParams: any = {};
  if (input.TraceSegmentDocuments !== undefined) {
    bodyParams[
      "TraceSegmentDocuments"
    ] = serializeAws_restJson1_1TraceSegmentDocumentList(
      input.TraceSegmentDocuments,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateGroupCommand(
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/UpdateGroup";
  let body: any;
  const bodyParams: any = {};
  if (input.FilterExpression !== undefined) {
    bodyParams["FilterExpression"] = input.FilterExpression;
  }
  if (input.GroupARN !== undefined) {
    bodyParams["GroupARN"] = input.GroupARN;
  }
  if (input.GroupName !== undefined) {
    bodyParams["GroupName"] = input.GroupName;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateSamplingRuleCommand(
  input: UpdateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/UpdateSamplingRule";
  let body: any;
  const bodyParams: any = {};
  if (input.SamplingRuleUpdate !== undefined) {
    bodyParams[
      "SamplingRuleUpdate"
    ] = serializeAws_restJson1_1SamplingRuleUpdate(
      input.SamplingRuleUpdate,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1BatchGetTracesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1BatchGetTracesCommandError(
      output,
      context
    );
  }
  const contents: BatchGetTracesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "BatchGetTracesResult",
    NextToken: undefined,
    Traces: undefined,
    UnprocessedTraceIds: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Traces !== undefined && data.Traces !== null) {
    contents.Traces = deserializeAws_restJson1_1TraceList(data.Traces, context);
  }
  if (
    data.UnprocessedTraceIds !== undefined &&
    data.UnprocessedTraceIds !== null
  ) {
    contents.UnprocessedTraceIds = deserializeAws_restJson1_1UnprocessedTraceIdList(
      data.UnprocessedTraceIds,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1BatchGetTracesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateGroupCommandError(output, context);
  }
  const contents: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateSamplingRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSamplingRuleCommandError(
      output,
      context
    );
  }
  const contents: CreateSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSamplingRuleResult",
    SamplingRuleRecord: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.SamplingRuleRecord !== undefined &&
    data.SamplingRuleRecord !== null
  ) {
    contents.SamplingRuleRecord = deserializeAws_restJson1_1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSamplingRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleLimitExceededException":
    case "com.amazonaws.tracing#RuleLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1RuleLimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteGroupCommandError(output, context);
  }
  const contents: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGroupResult"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteSamplingRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSamplingRuleCommandError(
      output,
      context
    );
  }
  const contents: DeleteSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteSamplingRuleResult",
    SamplingRuleRecord: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.SamplingRuleRecord !== undefined &&
    data.SamplingRuleRecord !== null
  ) {
    contents.SamplingRuleRecord = deserializeAws_restJson1_1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSamplingRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetEncryptionConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetEncryptionConfigCommandError(
      output,
      context
    );
  }
  const contents: GetEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetEncryptionConfigResult",
    EncryptionConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
    contents.EncryptionConfig = deserializeAws_restJson1_1EncryptionConfig(
      data.EncryptionConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetEncryptionConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetGroupCommandError(output, context);
  }
  const contents: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetGroupsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetGroupsCommandError(output, context);
  }
  const contents: GetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupsResult",
    Groups: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Groups !== undefined && data.Groups !== null) {
    contents.Groups = deserializeAws_restJson1_1GroupSummaryList(
      data.Groups,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetGroupsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSamplingRulesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSamplingRulesCommandError(
      output,
      context
    );
  }
  const contents: GetSamplingRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSamplingRulesResult",
    NextToken: undefined,
    SamplingRuleRecords: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.SamplingRuleRecords !== undefined &&
    data.SamplingRuleRecords !== null
  ) {
    contents.SamplingRuleRecords = deserializeAws_restJson1_1SamplingRuleRecordList(
      data.SamplingRuleRecords,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSamplingRulesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSamplingStatisticSummariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSamplingStatisticSummariesCommandError(
      output,
      context
    );
  }
  const contents: GetSamplingStatisticSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSamplingStatisticSummariesResult",
    NextToken: undefined,
    SamplingStatisticSummaries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.SamplingStatisticSummaries !== undefined &&
    data.SamplingStatisticSummaries !== null
  ) {
    contents.SamplingStatisticSummaries = deserializeAws_restJson1_1SamplingStatisticSummaryList(
      data.SamplingStatisticSummaries,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSamplingStatisticSummariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSamplingTargetsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSamplingTargetsCommandError(
      output,
      context
    );
  }
  const contents: GetSamplingTargetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSamplingTargetsResult",
    LastRuleModification: undefined,
    SamplingTargetDocuments: undefined,
    UnprocessedStatistics: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.LastRuleModification !== undefined &&
    data.LastRuleModification !== null
  ) {
    contents.LastRuleModification = new Date(
      Math.round(data.LastRuleModification * 1000)
    );
  }
  if (
    data.SamplingTargetDocuments !== undefined &&
    data.SamplingTargetDocuments !== null
  ) {
    contents.SamplingTargetDocuments = deserializeAws_restJson1_1SamplingTargetDocumentList(
      data.SamplingTargetDocuments,
      context
    );
  }
  if (
    data.UnprocessedStatistics !== undefined &&
    data.UnprocessedStatistics !== null
  ) {
    contents.UnprocessedStatistics = deserializeAws_restJson1_1UnprocessedStatisticsList(
      data.UnprocessedStatistics,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSamplingTargetsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetServiceGraphCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetServiceGraphCommandError(
      output,
      context
    );
  }
  const contents: GetServiceGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetServiceGraphResult",
    ContainsOldGroupVersions: undefined,
    EndTime: undefined,
    NextToken: undefined,
    Services: undefined,
    StartTime: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ContainsOldGroupVersions !== undefined &&
    data.ContainsOldGroupVersions !== null
  ) {
    contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
  }
  if (data.EndTime !== undefined && data.EndTime !== null) {
    contents.EndTime = new Date(Math.round(data.EndTime * 1000));
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Services !== undefined && data.Services !== null) {
    contents.Services = deserializeAws_restJson1_1ServiceList(
      data.Services,
      context
    );
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = new Date(Math.round(data.StartTime * 1000));
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetServiceGraphCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetTimeSeriesServiceStatisticsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTimeSeriesServiceStatisticsCommandError(
      output,
      context
    );
  }
  const contents: GetTimeSeriesServiceStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTimeSeriesServiceStatisticsResult",
    ContainsOldGroupVersions: undefined,
    NextToken: undefined,
    TimeSeriesServiceStatistics: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ContainsOldGroupVersions !== undefined &&
    data.ContainsOldGroupVersions !== null
  ) {
    contents.ContainsOldGroupVersions = data.ContainsOldGroupVersions;
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (
    data.TimeSeriesServiceStatistics !== undefined &&
    data.TimeSeriesServiceStatistics !== null
  ) {
    contents.TimeSeriesServiceStatistics = deserializeAws_restJson1_1TimeSeriesServiceStatisticsList(
      data.TimeSeriesServiceStatistics,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTimeSeriesServiceStatisticsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetTraceGraphCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTraceGraphCommandError(output, context);
  }
  const contents: GetTraceGraphCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTraceGraphResult",
    NextToken: undefined,
    Services: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Services !== undefined && data.Services !== null) {
    contents.Services = deserializeAws_restJson1_1ServiceList(
      data.Services,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTraceGraphCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetTraceSummariesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetTraceSummariesCommandError(
      output,
      context
    );
  }
  const contents: GetTraceSummariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetTraceSummariesResult",
    ApproximateTime: undefined,
    NextToken: undefined,
    TraceSummaries: undefined,
    TracesProcessedCount: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ApproximateTime !== undefined && data.ApproximateTime !== null) {
    contents.ApproximateTime = new Date(
      Math.round(data.ApproximateTime * 1000)
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.TraceSummaries !== undefined && data.TraceSummaries !== null) {
    contents.TraceSummaries = deserializeAws_restJson1_1TraceSummaryList(
      data.TraceSummaries,
      context
    );
  }
  if (
    data.TracesProcessedCount !== undefined &&
    data.TracesProcessedCount !== null
  ) {
    contents.TracesProcessedCount = data.TracesProcessedCount;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetTraceSummariesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutEncryptionConfigCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutEncryptionConfigCommandError(
      output,
      context
    );
  }
  const contents: PutEncryptionConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutEncryptionConfigResult",
    EncryptionConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.EncryptionConfig !== undefined && data.EncryptionConfig !== null) {
    contents.EncryptionConfig = deserializeAws_restJson1_1EncryptionConfig(
      data.EncryptionConfig,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutEncryptionConfigCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutTelemetryRecordsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutTelemetryRecordsCommandError(
      output,
      context
    );
  }
  const contents: PutTelemetryRecordsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutTelemetryRecordsResult"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutTelemetryRecordsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutTraceSegmentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutTraceSegmentsCommandError(
      output,
      context
    );
  }
  const contents: PutTraceSegmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutTraceSegmentsResult",
    UnprocessedTraceSegments: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.UnprocessedTraceSegments !== undefined &&
    data.UnprocessedTraceSegments !== null
  ) {
    contents.UnprocessedTraceSegments = deserializeAws_restJson1_1UnprocessedTraceSegmentList(
      data.UnprocessedTraceSegments,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutTraceSegmentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateGroupCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateGroupCommandError(output, context);
  }
  const contents: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1_1Group(data.Group, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateGroupCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1UpdateSamplingRuleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateSamplingRuleCommandError(
      output,
      context
    );
  }
  const contents: UpdateSamplingRuleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSamplingRuleResult",
    SamplingRuleRecord: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.SamplingRuleRecord !== undefined &&
    data.SamplingRuleRecord !== null
  ) {
    contents.SamplingRuleRecord = deserializeAws_restJson1_1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateSamplingRuleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.tracing#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.tracing#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1ThrottledExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1RuleLimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<RuleLimitExceededException> => {
  const contents: RuleLimitExceededException = {
    name: "RuleLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ThrottledExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1AttributeMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1BackendConnectionErrors = (
  input: BackendConnectionErrors,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConnectionRefusedCount !== undefined) {
    bodyParams["ConnectionRefusedCount"] = input.ConnectionRefusedCount;
  }
  if (input.HTTPCode4XXCount !== undefined) {
    bodyParams["HTTPCode4XXCount"] = input.HTTPCode4XXCount;
  }
  if (input.HTTPCode5XXCount !== undefined) {
    bodyParams["HTTPCode5XXCount"] = input.HTTPCode5XXCount;
  }
  if (input.OtherCount !== undefined) {
    bodyParams["OtherCount"] = input.OtherCount;
  }
  if (input.TimeoutCount !== undefined) {
    bodyParams["TimeoutCount"] = input.TimeoutCount;
  }
  if (input.UnknownHostCount !== undefined) {
    bodyParams["UnknownHostCount"] = input.UnknownHostCount;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SamplingRule = (
  input: SamplingRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1AttributeMap(
      input.Attributes,
      context
    );
  }
  if (input.FixedRate !== undefined) {
    bodyParams["FixedRate"] = input.FixedRate;
  }
  if (input.HTTPMethod !== undefined) {
    bodyParams["HTTPMethod"] = input.HTTPMethod;
  }
  if (input.Host !== undefined) {
    bodyParams["Host"] = input.Host;
  }
  if (input.Priority !== undefined) {
    bodyParams["Priority"] = input.Priority;
  }
  if (input.ReservoirSize !== undefined) {
    bodyParams["ReservoirSize"] = input.ReservoirSize;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.RuleARN !== undefined) {
    bodyParams["RuleARN"] = input.RuleARN;
  }
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  if (input.ServiceName !== undefined) {
    bodyParams["ServiceName"] = input.ServiceName;
  }
  if (input.ServiceType !== undefined) {
    bodyParams["ServiceType"] = input.ServiceType;
  }
  if (input.URLPath !== undefined) {
    bodyParams["URLPath"] = input.URLPath;
  }
  if (input.Version !== undefined) {
    bodyParams["Version"] = input.Version;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SamplingRuleUpdate = (
  input: SamplingRuleUpdate,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Attributes !== undefined) {
    bodyParams["Attributes"] = serializeAws_restJson1_1AttributeMap(
      input.Attributes,
      context
    );
  }
  if (input.FixedRate !== undefined) {
    bodyParams["FixedRate"] = input.FixedRate;
  }
  if (input.HTTPMethod !== undefined) {
    bodyParams["HTTPMethod"] = input.HTTPMethod;
  }
  if (input.Host !== undefined) {
    bodyParams["Host"] = input.Host;
  }
  if (input.Priority !== undefined) {
    bodyParams["Priority"] = input.Priority;
  }
  if (input.ReservoirSize !== undefined) {
    bodyParams["ReservoirSize"] = input.ReservoirSize;
  }
  if (input.ResourceARN !== undefined) {
    bodyParams["ResourceARN"] = input.ResourceARN;
  }
  if (input.RuleARN !== undefined) {
    bodyParams["RuleARN"] = input.RuleARN;
  }
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  if (input.ServiceName !== undefined) {
    bodyParams["ServiceName"] = input.ServiceName;
  }
  if (input.ServiceType !== undefined) {
    bodyParams["ServiceType"] = input.ServiceType;
  }
  if (input.URLPath !== undefined) {
    bodyParams["URLPath"] = input.URLPath;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SamplingStatisticsDocument = (
  input: SamplingStatisticsDocument,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BorrowCount !== undefined) {
    bodyParams["BorrowCount"] = input.BorrowCount;
  }
  if (input.ClientID !== undefined) {
    bodyParams["ClientID"] = input.ClientID;
  }
  if (input.RequestCount !== undefined) {
    bodyParams["RequestCount"] = input.RequestCount;
  }
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  if (input.SampledCount !== undefined) {
    bodyParams["SampledCount"] = input.SampledCount;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_restJson1_1SamplingStatisticsDocumentList = (
  input: Array<SamplingStatisticsDocument>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(
      serializeAws_restJson1_1SamplingStatisticsDocument(entry, context)
    );
  }
  return contents;
};

const serializeAws_restJson1_1SamplingStrategy = (
  input: SamplingStrategy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.Value !== undefined) {
    bodyParams["Value"] = input.Value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1TelemetryRecord = (
  input: TelemetryRecord,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BackendConnectionErrors !== undefined) {
    bodyParams[
      "BackendConnectionErrors"
    ] = serializeAws_restJson1_1BackendConnectionErrors(
      input.BackendConnectionErrors,
      context
    );
  }
  if (input.SegmentsReceivedCount !== undefined) {
    bodyParams["SegmentsReceivedCount"] = input.SegmentsReceivedCount;
  }
  if (input.SegmentsRejectedCount !== undefined) {
    bodyParams["SegmentsRejectedCount"] = input.SegmentsRejectedCount;
  }
  if (input.SegmentsSentCount !== undefined) {
    bodyParams["SegmentsSentCount"] = input.SegmentsSentCount;
  }
  if (input.SegmentsSpilloverCount !== undefined) {
    bodyParams["SegmentsSpilloverCount"] = input.SegmentsSpilloverCount;
  }
  if (input.Timestamp !== undefined) {
    bodyParams["Timestamp"] = Math.round(input.Timestamp.getTime() / 1000);
  }
  return bodyParams;
};

const serializeAws_restJson1_1TelemetryRecordList = (
  input: Array<TelemetryRecord>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1TelemetryRecord(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1TraceIdList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TraceSegmentDocumentList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1Alias = (
  output: any,
  context: __SerdeContext
): Alias => {
  let contents: any = {
    __type: "Alias",
    Name: undefined,
    Names: undefined,
    Type: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1AliasNames(
      output.Names,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1AliasList = (
  output: any,
  context: __SerdeContext
): Array<Alias> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Alias(entry, context)
  );
};

const deserializeAws_restJson1_1AliasNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1AnnotationValue = (
  output: any,
  context: __SerdeContext
): AnnotationValue => {
  let contents: any = {
    __type: "AnnotationValue",
    BooleanValue: undefined,
    NumberValue: undefined,
    StringValue: undefined
  };
  if (output.BooleanValue !== undefined && output.BooleanValue !== null) {
    contents.BooleanValue = output.BooleanValue;
  }
  if (output.NumberValue !== undefined && output.NumberValue !== null) {
    contents.NumberValue = output.NumberValue;
  }
  if (output.StringValue !== undefined && output.StringValue !== null) {
    contents.StringValue = output.StringValue;
  }
  return contents;
};

const deserializeAws_restJson1_1Annotations = (
  output: any,
  context: __SerdeContext
): { [key: string]: Array<ValueWithServiceIds> } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = deserializeAws_restJson1_1ValuesWithServiceIds(
      output[key],
      context
    );
  });
  return mapParams;
};

const deserializeAws_restJson1_1AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AvailabilityZoneDetail = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail => {
  let contents: any = {
    __type: "AvailabilityZoneDetail",
    Name: undefined
  };
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1Edge = (
  output: any,
  context: __SerdeContext
): Edge => {
  let contents: any = {
    __type: "Edge",
    Aliases: undefined,
    EndTime: undefined,
    ReferenceId: undefined,
    ResponseTimeHistogram: undefined,
    StartTime: undefined,
    SummaryStatistics: undefined
  };
  if (output.Aliases !== undefined && output.Aliases !== null) {
    contents.Aliases = deserializeAws_restJson1_1AliasList(
      output.Aliases,
      context
    );
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.ReferenceId !== undefined && output.ReferenceId !== null) {
    contents.ReferenceId = output.ReferenceId;
  }
  if (
    output.ResponseTimeHistogram !== undefined &&
    output.ResponseTimeHistogram !== null
  ) {
    contents.ResponseTimeHistogram = deserializeAws_restJson1_1Histogram(
      output.ResponseTimeHistogram,
      context
    );
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (
    output.SummaryStatistics !== undefined &&
    output.SummaryStatistics !== null
  ) {
    contents.SummaryStatistics = deserializeAws_restJson1_1EdgeStatistics(
      output.SummaryStatistics,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EdgeList = (
  output: any,
  context: __SerdeContext
): Array<Edge> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Edge(entry, context)
  );
};

const deserializeAws_restJson1_1EdgeStatistics = (
  output: any,
  context: __SerdeContext
): EdgeStatistics => {
  let contents: any = {
    __type: "EdgeStatistics",
    ErrorStatistics: undefined,
    FaultStatistics: undefined,
    OkCount: undefined,
    TotalCount: undefined,
    TotalResponseTime: undefined
  };
  if (output.ErrorStatistics !== undefined && output.ErrorStatistics !== null) {
    contents.ErrorStatistics = deserializeAws_restJson1_1ErrorStatistics(
      output.ErrorStatistics,
      context
    );
  }
  if (output.FaultStatistics !== undefined && output.FaultStatistics !== null) {
    contents.FaultStatistics = deserializeAws_restJson1_1FaultStatistics(
      output.FaultStatistics,
      context
    );
  }
  if (output.OkCount !== undefined && output.OkCount !== null) {
    contents.OkCount = output.OkCount;
  }
  if (output.TotalCount !== undefined && output.TotalCount !== null) {
    contents.TotalCount = output.TotalCount;
  }
  if (
    output.TotalResponseTime !== undefined &&
    output.TotalResponseTime !== null
  ) {
    contents.TotalResponseTime = output.TotalResponseTime;
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionConfig = (
  output: any,
  context: __SerdeContext
): EncryptionConfig => {
  let contents: any = {
    __type: "EncryptionConfig",
    KeyId: undefined,
    Status: undefined,
    Type: undefined
  };
  if (output.KeyId !== undefined && output.KeyId !== null) {
    contents.KeyId = output.KeyId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorRootCause = (
  output: any,
  context: __SerdeContext
): ErrorRootCause => {
  let contents: any = {
    __type: "ErrorRootCause",
    Services: undefined
  };
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_restJson1_1ErrorRootCauseServices(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseEntity => {
  let contents: any = {
    __type: "ErrorRootCauseEntity",
    Exceptions: undefined,
    Name: undefined,
    Remote: undefined
  };
  if (output.Exceptions !== undefined && output.Exceptions !== null) {
    contents.Exceptions = deserializeAws_restJson1_1RootCauseExceptions(
      output.Exceptions,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Remote !== undefined && output.Remote !== null) {
    contents.Remote = output.Remote;
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): Array<ErrorRootCauseEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ErrorRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1_1ErrorRootCauseService = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseService => {
  let contents: any = {
    __type: "ErrorRootCauseService",
    AccountId: undefined,
    EntityPath: undefined,
    Inferred: undefined,
    Name: undefined,
    Names: undefined,
    Type: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.EntityPath !== undefined && output.EntityPath !== null) {
    contents.EntityPath = deserializeAws_restJson1_1ErrorRootCauseEntityPath(
      output.EntityPath,
      context
    );
  }
  if (output.Inferred !== undefined && output.Inferred !== null) {
    contents.Inferred = output.Inferred;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1ServiceNames(
      output.Names,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ErrorRootCauseServices = (
  output: any,
  context: __SerdeContext
): Array<ErrorRootCauseService> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ErrorRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1_1ErrorRootCauses = (
  output: any,
  context: __SerdeContext
): Array<ErrorRootCause> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ErrorRootCause(entry, context)
  );
};

const deserializeAws_restJson1_1ErrorStatistics = (
  output: any,
  context: __SerdeContext
): ErrorStatistics => {
  let contents: any = {
    __type: "ErrorStatistics",
    OtherCount: undefined,
    ThrottleCount: undefined,
    TotalCount: undefined
  };
  if (output.OtherCount !== undefined && output.OtherCount !== null) {
    contents.OtherCount = output.OtherCount;
  }
  if (output.ThrottleCount !== undefined && output.ThrottleCount !== null) {
    contents.ThrottleCount = output.ThrottleCount;
  }
  if (output.TotalCount !== undefined && output.TotalCount !== null) {
    contents.TotalCount = output.TotalCount;
  }
  return contents;
};

const deserializeAws_restJson1_1FaultRootCause = (
  output: any,
  context: __SerdeContext
): FaultRootCause => {
  let contents: any = {
    __type: "FaultRootCause",
    Services: undefined
  };
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_restJson1_1FaultRootCauseServices(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FaultRootCauseEntity = (
  output: any,
  context: __SerdeContext
): FaultRootCauseEntity => {
  let contents: any = {
    __type: "FaultRootCauseEntity",
    Exceptions: undefined,
    Name: undefined,
    Remote: undefined
  };
  if (output.Exceptions !== undefined && output.Exceptions !== null) {
    contents.Exceptions = deserializeAws_restJson1_1RootCauseExceptions(
      output.Exceptions,
      context
    );
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Remote !== undefined && output.Remote !== null) {
    contents.Remote = output.Remote;
  }
  return contents;
};

const deserializeAws_restJson1_1FaultRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): Array<FaultRootCauseEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FaultRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1_1FaultRootCauseService = (
  output: any,
  context: __SerdeContext
): FaultRootCauseService => {
  let contents: any = {
    __type: "FaultRootCauseService",
    AccountId: undefined,
    EntityPath: undefined,
    Inferred: undefined,
    Name: undefined,
    Names: undefined,
    Type: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.EntityPath !== undefined && output.EntityPath !== null) {
    contents.EntityPath = deserializeAws_restJson1_1FaultRootCauseEntityPath(
      output.EntityPath,
      context
    );
  }
  if (output.Inferred !== undefined && output.Inferred !== null) {
    contents.Inferred = output.Inferred;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1ServiceNames(
      output.Names,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1FaultRootCauseServices = (
  output: any,
  context: __SerdeContext
): Array<FaultRootCauseService> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FaultRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1_1FaultRootCauses = (
  output: any,
  context: __SerdeContext
): Array<FaultRootCause> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FaultRootCause(entry, context)
  );
};

const deserializeAws_restJson1_1FaultStatistics = (
  output: any,
  context: __SerdeContext
): FaultStatistics => {
  let contents: any = {
    __type: "FaultStatistics",
    OtherCount: undefined,
    TotalCount: undefined
  };
  if (output.OtherCount !== undefined && output.OtherCount !== null) {
    contents.OtherCount = output.OtherCount;
  }
  if (output.TotalCount !== undefined && output.TotalCount !== null) {
    contents.TotalCount = output.TotalCount;
  }
  return contents;
};

const deserializeAws_restJson1_1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  let contents: any = {
    __type: "Group",
    FilterExpression: undefined,
    GroupARN: undefined,
    GroupName: undefined
  };
  if (
    output.FilterExpression !== undefined &&
    output.FilterExpression !== null
  ) {
    contents.FilterExpression = output.FilterExpression;
  }
  if (output.GroupARN !== undefined && output.GroupARN !== null) {
    contents.GroupARN = output.GroupARN;
  }
  if (output.GroupName !== undefined && output.GroupName !== null) {
    contents.GroupName = output.GroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1GroupSummary = (
  output: any,
  context: __SerdeContext
): GroupSummary => {
  let contents: any = {
    __type: "GroupSummary",
    FilterExpression: undefined,
    GroupARN: undefined,
    GroupName: undefined
  };
  if (
    output.FilterExpression !== undefined &&
    output.FilterExpression !== null
  ) {
    contents.FilterExpression = output.FilterExpression;
  }
  if (output.GroupARN !== undefined && output.GroupARN !== null) {
    contents.GroupARN = output.GroupARN;
  }
  if (output.GroupName !== undefined && output.GroupName !== null) {
    contents.GroupName = output.GroupName;
  }
  return contents;
};

const deserializeAws_restJson1_1GroupSummaryList = (
  output: any,
  context: __SerdeContext
): Array<GroupSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GroupSummary(entry, context)
  );
};

const deserializeAws_restJson1_1Histogram = (
  output: any,
  context: __SerdeContext
): Array<HistogramEntry> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HistogramEntry(entry, context)
  );
};

const deserializeAws_restJson1_1HistogramEntry = (
  output: any,
  context: __SerdeContext
): HistogramEntry => {
  let contents: any = {
    __type: "HistogramEntry",
    Count: undefined,
    Value: undefined
  };
  if (output.Count !== undefined && output.Count !== null) {
    contents.Count = output.Count;
  }
  if (output.Value !== undefined && output.Value !== null) {
    contents.Value = output.Value;
  }
  return contents;
};

const deserializeAws_restJson1_1Http = (
  output: any,
  context: __SerdeContext
): Http => {
  let contents: any = {
    __type: "Http",
    ClientIp: undefined,
    HttpMethod: undefined,
    HttpStatus: undefined,
    HttpURL: undefined,
    UserAgent: undefined
  };
  if (output.ClientIp !== undefined && output.ClientIp !== null) {
    contents.ClientIp = output.ClientIp;
  }
  if (output.HttpMethod !== undefined && output.HttpMethod !== null) {
    contents.HttpMethod = output.HttpMethod;
  }
  if (output.HttpStatus !== undefined && output.HttpStatus !== null) {
    contents.HttpStatus = output.HttpStatus;
  }
  if (output.HttpURL !== undefined && output.HttpURL !== null) {
    contents.HttpURL = output.HttpURL;
  }
  if (output.UserAgent !== undefined && output.UserAgent !== null) {
    contents.UserAgent = output.UserAgent;
  }
  return contents;
};

const deserializeAws_restJson1_1InstanceIdDetail = (
  output: any,
  context: __SerdeContext
): InstanceIdDetail => {
  let contents: any = {
    __type: "InstanceIdDetail",
    Id: undefined
  };
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceARNDetail = (
  output: any,
  context: __SerdeContext
): ResourceARNDetail => {
  let contents: any = {
    __type: "ResourceARNDetail",
    ARN: undefined
  };
  if (output.ARN !== undefined && output.ARN !== null) {
    contents.ARN = output.ARN;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseTimeRootCause = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCause => {
  let contents: any = {
    __type: "ResponseTimeRootCause",
    Services: undefined
  };
  if (output.Services !== undefined && output.Services !== null) {
    contents.Services = deserializeAws_restJson1_1ResponseTimeRootCauseServices(
      output.Services,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseTimeRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity => {
  let contents: any = {
    __type: "ResponseTimeRootCauseEntity",
    Coverage: undefined,
    Name: undefined,
    Remote: undefined
  };
  if (output.Coverage !== undefined && output.Coverage !== null) {
    contents.Coverage = output.Coverage;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Remote !== undefined && output.Remote !== null) {
    contents.Remote = output.Remote;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseTimeRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): Array<ResponseTimeRootCauseEntity> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResponseTimeRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1_1ResponseTimeRootCauseService = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService => {
  let contents: any = {
    __type: "ResponseTimeRootCauseService",
    AccountId: undefined,
    EntityPath: undefined,
    Inferred: undefined,
    Name: undefined,
    Names: undefined,
    Type: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.EntityPath !== undefined && output.EntityPath !== null) {
    contents.EntityPath = deserializeAws_restJson1_1ResponseTimeRootCauseEntityPath(
      output.EntityPath,
      context
    );
  }
  if (output.Inferred !== undefined && output.Inferred !== null) {
    contents.Inferred = output.Inferred;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1ServiceNames(
      output.Names,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResponseTimeRootCauseServices = (
  output: any,
  context: __SerdeContext
): Array<ResponseTimeRootCauseService> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResponseTimeRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1_1ResponseTimeRootCauses = (
  output: any,
  context: __SerdeContext
): Array<ResponseTimeRootCause> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResponseTimeRootCause(entry, context)
  );
};

const deserializeAws_restJson1_1RootCauseException = (
  output: any,
  context: __SerdeContext
): RootCauseException => {
  let contents: any = {
    __type: "RootCauseException",
    Message: undefined,
    Name: undefined
  };
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  return contents;
};

const deserializeAws_restJson1_1RootCauseExceptions = (
  output: any,
  context: __SerdeContext
): Array<RootCauseException> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RootCauseException(entry, context)
  );
};

const deserializeAws_restJson1_1SamplingRule = (
  output: any,
  context: __SerdeContext
): SamplingRule => {
  let contents: any = {
    __type: "SamplingRule",
    Attributes: undefined,
    FixedRate: undefined,
    HTTPMethod: undefined,
    Host: undefined,
    Priority: undefined,
    ReservoirSize: undefined,
    ResourceARN: undefined,
    RuleARN: undefined,
    RuleName: undefined,
    ServiceName: undefined,
    ServiceType: undefined,
    URLPath: undefined,
    Version: undefined
  };
  if (output.Attributes !== undefined && output.Attributes !== null) {
    contents.Attributes = deserializeAws_restJson1_1AttributeMap(
      output.Attributes,
      context
    );
  }
  if (output.FixedRate !== undefined && output.FixedRate !== null) {
    contents.FixedRate = output.FixedRate;
  }
  if (output.HTTPMethod !== undefined && output.HTTPMethod !== null) {
    contents.HTTPMethod = output.HTTPMethod;
  }
  if (output.Host !== undefined && output.Host !== null) {
    contents.Host = output.Host;
  }
  if (output.Priority !== undefined && output.Priority !== null) {
    contents.Priority = output.Priority;
  }
  if (output.ReservoirSize !== undefined && output.ReservoirSize !== null) {
    contents.ReservoirSize = output.ReservoirSize;
  }
  if (output.ResourceARN !== undefined && output.ResourceARN !== null) {
    contents.ResourceARN = output.ResourceARN;
  }
  if (output.RuleARN !== undefined && output.RuleARN !== null) {
    contents.RuleARN = output.RuleARN;
  }
  if (output.RuleName !== undefined && output.RuleName !== null) {
    contents.RuleName = output.RuleName;
  }
  if (output.ServiceName !== undefined && output.ServiceName !== null) {
    contents.ServiceName = output.ServiceName;
  }
  if (output.ServiceType !== undefined && output.ServiceType !== null) {
    contents.ServiceType = output.ServiceType;
  }
  if (output.URLPath !== undefined && output.URLPath !== null) {
    contents.URLPath = output.URLPath;
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_restJson1_1SamplingRuleRecord = (
  output: any,
  context: __SerdeContext
): SamplingRuleRecord => {
  let contents: any = {
    __type: "SamplingRuleRecord",
    CreatedAt: undefined,
    ModifiedAt: undefined,
    SamplingRule: undefined
  };
  if (output.CreatedAt !== undefined && output.CreatedAt !== null) {
    contents.CreatedAt = new Date(Math.round(output.CreatedAt * 1000));
  }
  if (output.ModifiedAt !== undefined && output.ModifiedAt !== null) {
    contents.ModifiedAt = new Date(Math.round(output.ModifiedAt * 1000));
  }
  if (output.SamplingRule !== undefined && output.SamplingRule !== null) {
    contents.SamplingRule = deserializeAws_restJson1_1SamplingRule(
      output.SamplingRule,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SamplingRuleRecordList = (
  output: any,
  context: __SerdeContext
): Array<SamplingRuleRecord> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SamplingRuleRecord(entry, context)
  );
};

const deserializeAws_restJson1_1SamplingStatisticSummary = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary => {
  let contents: any = {
    __type: "SamplingStatisticSummary",
    BorrowCount: undefined,
    RequestCount: undefined,
    RuleName: undefined,
    SampledCount: undefined,
    Timestamp: undefined
  };
  if (output.BorrowCount !== undefined && output.BorrowCount !== null) {
    contents.BorrowCount = output.BorrowCount;
  }
  if (output.RequestCount !== undefined && output.RequestCount !== null) {
    contents.RequestCount = output.RequestCount;
  }
  if (output.RuleName !== undefined && output.RuleName !== null) {
    contents.RuleName = output.RuleName;
  }
  if (output.SampledCount !== undefined && output.SampledCount !== null) {
    contents.SampledCount = output.SampledCount;
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  return contents;
};

const deserializeAws_restJson1_1SamplingStatisticSummaryList = (
  output: any,
  context: __SerdeContext
): Array<SamplingStatisticSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SamplingStatisticSummary(entry, context)
  );
};

const deserializeAws_restJson1_1SamplingTargetDocument = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument => {
  let contents: any = {
    __type: "SamplingTargetDocument",
    FixedRate: undefined,
    Interval: undefined,
    ReservoirQuota: undefined,
    ReservoirQuotaTTL: undefined,
    RuleName: undefined
  };
  if (output.FixedRate !== undefined && output.FixedRate !== null) {
    contents.FixedRate = output.FixedRate;
  }
  if (output.Interval !== undefined && output.Interval !== null) {
    contents.Interval = output.Interval;
  }
  if (output.ReservoirQuota !== undefined && output.ReservoirQuota !== null) {
    contents.ReservoirQuota = output.ReservoirQuota;
  }
  if (
    output.ReservoirQuotaTTL !== undefined &&
    output.ReservoirQuotaTTL !== null
  ) {
    contents.ReservoirQuotaTTL = new Date(
      Math.round(output.ReservoirQuotaTTL * 1000)
    );
  }
  if (output.RuleName !== undefined && output.RuleName !== null) {
    contents.RuleName = output.RuleName;
  }
  return contents;
};

const deserializeAws_restJson1_1SamplingTargetDocumentList = (
  output: any,
  context: __SerdeContext
): Array<SamplingTargetDocument> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SamplingTargetDocument(entry, context)
  );
};

const deserializeAws_restJson1_1Segment = (
  output: any,
  context: __SerdeContext
): Segment => {
  let contents: any = {
    __type: "Segment",
    Document: undefined,
    Id: undefined
  };
  if (output.Document !== undefined && output.Document !== null) {
    contents.Document = output.Document;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  return contents;
};

const deserializeAws_restJson1_1SegmentList = (
  output: any,
  context: __SerdeContext
): Array<Segment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Segment(entry, context)
  );
};

const deserializeAws_restJson1_1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  let contents: any = {
    __type: "Service",
    AccountId: undefined,
    DurationHistogram: undefined,
    Edges: undefined,
    EndTime: undefined,
    Name: undefined,
    Names: undefined,
    ReferenceId: undefined,
    ResponseTimeHistogram: undefined,
    Root: undefined,
    StartTime: undefined,
    State: undefined,
    SummaryStatistics: undefined,
    Type: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (
    output.DurationHistogram !== undefined &&
    output.DurationHistogram !== null
  ) {
    contents.DurationHistogram = deserializeAws_restJson1_1Histogram(
      output.DurationHistogram,
      context
    );
  }
  if (output.Edges !== undefined && output.Edges !== null) {
    contents.Edges = deserializeAws_restJson1_1EdgeList(output.Edges, context);
  }
  if (output.EndTime !== undefined && output.EndTime !== null) {
    contents.EndTime = new Date(Math.round(output.EndTime * 1000));
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1ServiceNames(
      output.Names,
      context
    );
  }
  if (output.ReferenceId !== undefined && output.ReferenceId !== null) {
    contents.ReferenceId = output.ReferenceId;
  }
  if (
    output.ResponseTimeHistogram !== undefined &&
    output.ResponseTimeHistogram !== null
  ) {
    contents.ResponseTimeHistogram = deserializeAws_restJson1_1Histogram(
      output.ResponseTimeHistogram,
      context
    );
  }
  if (output.Root !== undefined && output.Root !== null) {
    contents.Root = output.Root;
  }
  if (output.StartTime !== undefined && output.StartTime !== null) {
    contents.StartTime = new Date(Math.round(output.StartTime * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.SummaryStatistics !== undefined &&
    output.SummaryStatistics !== null
  ) {
    contents.SummaryStatistics = deserializeAws_restJson1_1ServiceStatistics(
      output.SummaryStatistics,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceId = (
  output: any,
  context: __SerdeContext
): ServiceId => {
  let contents: any = {
    __type: "ServiceId",
    AccountId: undefined,
    Name: undefined,
    Names: undefined,
    Type: undefined
  };
  if (output.AccountId !== undefined && output.AccountId !== null) {
    contents.AccountId = output.AccountId;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.Names !== undefined && output.Names !== null) {
    contents.Names = deserializeAws_restJson1_1ServiceNames(
      output.Names,
      context
    );
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceIds = (
  output: any,
  context: __SerdeContext
): Array<ServiceId> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ServiceId(entry, context)
  );
};

const deserializeAws_restJson1_1ServiceList = (
  output: any,
  context: __SerdeContext
): Array<Service> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Service(entry, context)
  );
};

const deserializeAws_restJson1_1ServiceNames = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ServiceStatistics = (
  output: any,
  context: __SerdeContext
): ServiceStatistics => {
  let contents: any = {
    __type: "ServiceStatistics",
    ErrorStatistics: undefined,
    FaultStatistics: undefined,
    OkCount: undefined,
    TotalCount: undefined,
    TotalResponseTime: undefined
  };
  if (output.ErrorStatistics !== undefined && output.ErrorStatistics !== null) {
    contents.ErrorStatistics = deserializeAws_restJson1_1ErrorStatistics(
      output.ErrorStatistics,
      context
    );
  }
  if (output.FaultStatistics !== undefined && output.FaultStatistics !== null) {
    contents.FaultStatistics = deserializeAws_restJson1_1FaultStatistics(
      output.FaultStatistics,
      context
    );
  }
  if (output.OkCount !== undefined && output.OkCount !== null) {
    contents.OkCount = output.OkCount;
  }
  if (output.TotalCount !== undefined && output.TotalCount !== null) {
    contents.TotalCount = output.TotalCount;
  }
  if (
    output.TotalResponseTime !== undefined &&
    output.TotalResponseTime !== null
  ) {
    contents.TotalResponseTime = output.TotalResponseTime;
  }
  return contents;
};

const deserializeAws_restJson1_1TimeSeriesServiceStatistics = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics => {
  let contents: any = {
    __type: "TimeSeriesServiceStatistics",
    EdgeSummaryStatistics: undefined,
    ResponseTimeHistogram: undefined,
    ServiceSummaryStatistics: undefined,
    Timestamp: undefined
  };
  if (
    output.EdgeSummaryStatistics !== undefined &&
    output.EdgeSummaryStatistics !== null
  ) {
    contents.EdgeSummaryStatistics = deserializeAws_restJson1_1EdgeStatistics(
      output.EdgeSummaryStatistics,
      context
    );
  }
  if (
    output.ResponseTimeHistogram !== undefined &&
    output.ResponseTimeHistogram !== null
  ) {
    contents.ResponseTimeHistogram = deserializeAws_restJson1_1Histogram(
      output.ResponseTimeHistogram,
      context
    );
  }
  if (
    output.ServiceSummaryStatistics !== undefined &&
    output.ServiceSummaryStatistics !== null
  ) {
    contents.ServiceSummaryStatistics = deserializeAws_restJson1_1ServiceStatistics(
      output.ServiceSummaryStatistics,
      context
    );
  }
  if (output.Timestamp !== undefined && output.Timestamp !== null) {
    contents.Timestamp = new Date(Math.round(output.Timestamp * 1000));
  }
  return contents;
};

const deserializeAws_restJson1_1TimeSeriesServiceStatisticsList = (
  output: any,
  context: __SerdeContext
): Array<TimeSeriesServiceStatistics> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TimeSeriesServiceStatistics(entry, context)
  );
};

const deserializeAws_restJson1_1Trace = (
  output: any,
  context: __SerdeContext
): Trace => {
  let contents: any = {
    __type: "Trace",
    Duration: undefined,
    Id: undefined,
    Segments: undefined
  };
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Segments !== undefined && output.Segments !== null) {
    contents.Segments = deserializeAws_restJson1_1SegmentList(
      output.Segments,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TraceAvailabilityZones = (
  output: any,
  context: __SerdeContext
): Array<AvailabilityZoneDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AvailabilityZoneDetail(entry, context)
  );
};

const deserializeAws_restJson1_1TraceInstanceIds = (
  output: any,
  context: __SerdeContext
): Array<InstanceIdDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1InstanceIdDetail(entry, context)
  );
};

const deserializeAws_restJson1_1TraceList = (
  output: any,
  context: __SerdeContext
): Array<Trace> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Trace(entry, context)
  );
};

const deserializeAws_restJson1_1TraceResourceARNs = (
  output: any,
  context: __SerdeContext
): Array<ResourceARNDetail> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ResourceARNDetail(entry, context)
  );
};

const deserializeAws_restJson1_1TraceSummary = (
  output: any,
  context: __SerdeContext
): TraceSummary => {
  let contents: any = {
    __type: "TraceSummary",
    Annotations: undefined,
    AvailabilityZones: undefined,
    Duration: undefined,
    EntryPoint: undefined,
    ErrorRootCauses: undefined,
    FaultRootCauses: undefined,
    HasError: undefined,
    HasFault: undefined,
    HasThrottle: undefined,
    Http: undefined,
    Id: undefined,
    InstanceIds: undefined,
    IsPartial: undefined,
    MatchedEventTime: undefined,
    ResourceARNs: undefined,
    ResponseTime: undefined,
    ResponseTimeRootCauses: undefined,
    Revision: undefined,
    ServiceIds: undefined,
    Users: undefined
  };
  if (output.Annotations !== undefined && output.Annotations !== null) {
    contents.Annotations = deserializeAws_restJson1_1Annotations(
      output.Annotations,
      context
    );
  }
  if (
    output.AvailabilityZones !== undefined &&
    output.AvailabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1TraceAvailabilityZones(
      output.AvailabilityZones,
      context
    );
  }
  if (output.Duration !== undefined && output.Duration !== null) {
    contents.Duration = output.Duration;
  }
  if (output.EntryPoint !== undefined && output.EntryPoint !== null) {
    contents.EntryPoint = deserializeAws_restJson1_1ServiceId(
      output.EntryPoint,
      context
    );
  }
  if (output.ErrorRootCauses !== undefined && output.ErrorRootCauses !== null) {
    contents.ErrorRootCauses = deserializeAws_restJson1_1ErrorRootCauses(
      output.ErrorRootCauses,
      context
    );
  }
  if (output.FaultRootCauses !== undefined && output.FaultRootCauses !== null) {
    contents.FaultRootCauses = deserializeAws_restJson1_1FaultRootCauses(
      output.FaultRootCauses,
      context
    );
  }
  if (output.HasError !== undefined && output.HasError !== null) {
    contents.HasError = output.HasError;
  }
  if (output.HasFault !== undefined && output.HasFault !== null) {
    contents.HasFault = output.HasFault;
  }
  if (output.HasThrottle !== undefined && output.HasThrottle !== null) {
    contents.HasThrottle = output.HasThrottle;
  }
  if (output.Http !== undefined && output.Http !== null) {
    contents.Http = deserializeAws_restJson1_1Http(output.Http, context);
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.InstanceIds !== undefined && output.InstanceIds !== null) {
    contents.InstanceIds = deserializeAws_restJson1_1TraceInstanceIds(
      output.InstanceIds,
      context
    );
  }
  if (output.IsPartial !== undefined && output.IsPartial !== null) {
    contents.IsPartial = output.IsPartial;
  }
  if (
    output.MatchedEventTime !== undefined &&
    output.MatchedEventTime !== null
  ) {
    contents.MatchedEventTime = new Date(
      Math.round(output.MatchedEventTime * 1000)
    );
  }
  if (output.ResourceARNs !== undefined && output.ResourceARNs !== null) {
    contents.ResourceARNs = deserializeAws_restJson1_1TraceResourceARNs(
      output.ResourceARNs,
      context
    );
  }
  if (output.ResponseTime !== undefined && output.ResponseTime !== null) {
    contents.ResponseTime = output.ResponseTime;
  }
  if (
    output.ResponseTimeRootCauses !== undefined &&
    output.ResponseTimeRootCauses !== null
  ) {
    contents.ResponseTimeRootCauses = deserializeAws_restJson1_1ResponseTimeRootCauses(
      output.ResponseTimeRootCauses,
      context
    );
  }
  if (output.Revision !== undefined && output.Revision !== null) {
    contents.Revision = output.Revision;
  }
  if (output.ServiceIds !== undefined && output.ServiceIds !== null) {
    contents.ServiceIds = deserializeAws_restJson1_1ServiceIds(
      output.ServiceIds,
      context
    );
  }
  if (output.Users !== undefined && output.Users !== null) {
    contents.Users = deserializeAws_restJson1_1TraceUsers(
      output.Users,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1TraceSummaryList = (
  output: any,
  context: __SerdeContext
): Array<TraceSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TraceSummary(entry, context)
  );
};

const deserializeAws_restJson1_1TraceUser = (
  output: any,
  context: __SerdeContext
): TraceUser => {
  let contents: any = {
    __type: "TraceUser",
    ServiceIds: undefined,
    UserName: undefined
  };
  if (output.ServiceIds !== undefined && output.ServiceIds !== null) {
    contents.ServiceIds = deserializeAws_restJson1_1ServiceIds(
      output.ServiceIds,
      context
    );
  }
  if (output.UserName !== undefined && output.UserName !== null) {
    contents.UserName = output.UserName;
  }
  return contents;
};

const deserializeAws_restJson1_1TraceUsers = (
  output: any,
  context: __SerdeContext
): Array<TraceUser> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TraceUser(entry, context)
  );
};

const deserializeAws_restJson1_1UnprocessedStatistics = (
  output: any,
  context: __SerdeContext
): UnprocessedStatistics => {
  let contents: any = {
    __type: "UnprocessedStatistics",
    ErrorCode: undefined,
    Message: undefined,
    RuleName: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  if (output.RuleName !== undefined && output.RuleName !== null) {
    contents.RuleName = output.RuleName;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessedStatisticsList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedStatistics> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UnprocessedStatistics(entry, context)
  );
};

const deserializeAws_restJson1_1UnprocessedTraceIdList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1UnprocessedTraceSegment = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment => {
  let contents: any = {
    __type: "UnprocessedTraceSegment",
    ErrorCode: undefined,
    Id: undefined,
    Message: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Id !== undefined && output.Id !== null) {
    contents.Id = output.Id;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnprocessedTraceSegmentList = (
  output: any,
  context: __SerdeContext
): Array<UnprocessedTraceSegment> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UnprocessedTraceSegment(entry, context)
  );
};

const deserializeAws_restJson1_1ValueWithServiceIds = (
  output: any,
  context: __SerdeContext
): ValueWithServiceIds => {
  let contents: any = {
    __type: "ValueWithServiceIds",
    AnnotationValue: undefined,
    ServiceIds: undefined
  };
  if (output.AnnotationValue !== undefined && output.AnnotationValue !== null) {
    contents.AnnotationValue = deserializeAws_restJson1_1AnnotationValue(
      output.AnnotationValue,
      context
    );
  }
  if (output.ServiceIds !== undefined && output.ServiceIds !== null) {
    contents.ServiceIds = deserializeAws_restJson1_1ServiceIds(
      output.ServiceIds,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ValuesWithServiceIds = (
  output: any,
  context: __SerdeContext
): Array<ValueWithServiceIds> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ValueWithServiceIds(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
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
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
