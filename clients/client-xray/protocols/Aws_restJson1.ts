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

export const serializeAws_restJson1BatchGetTracesCommand = async (
  input: BatchGetTracesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/Traces";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TraceIds !== undefined && {
      TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateGroupCommand = async (
  input: CreateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression !== undefined && {
      FilterExpression: input.FilterExpression
    }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1CreateSamplingRuleCommand = async (
  input: CreateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/CreateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRule !== undefined && {
      SamplingRule: serializeAws_restJson1SamplingRule(
        input.SamplingRule,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteGroupCommand = async (
  input: DeleteGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DeleteGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN !== undefined && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1DeleteSamplingRuleCommand = async (
  input: DeleteSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/DeleteSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.RuleARN !== undefined && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && { RuleName: input.RuleName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetEncryptionConfigCommand = async (
  input: GetEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/EncryptionConfig";
  let body: any;
  body = "{}";
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetGroupCommand = async (
  input: GetGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/GetGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.GroupARN !== undefined && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetGroupsCommand = async (
  input: GetGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/Groups";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetSamplingRulesCommand = async (
  input: GetSamplingRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/GetSamplingRules";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetSamplingStatisticSummariesCommand = async (
  input: GetSamplingStatisticSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/SamplingStatisticSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetSamplingTargetsCommand = async (
  input: GetSamplingTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/SamplingTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingStatisticsDocuments !== undefined && {
      SamplingStatisticsDocuments: serializeAws_restJson1SamplingStatisticsDocumentList(
        input.SamplingStatisticsDocuments,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetServiceGraphCommand = async (
  input: GetServiceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/ServiceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.GroupARN !== undefined && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (
  input: GetTimeSeriesServiceStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TimeSeriesServiceStatistics";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.EntitySelectorExpression !== undefined && {
      EntitySelectorExpression: input.EntitySelectorExpression
    }),
    ...(input.GroupARN !== undefined && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Period !== undefined && { Period: input.Period }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetTraceGraphCommand = async (
  input: GetTraceGraphCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TraceGraph";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.TraceIds !== undefined && {
      TraceIds: serializeAws_restJson1TraceIdList(input.TraceIds, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1GetTraceSummariesCommand = async (
  input: GetTraceSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TraceSummaries";
  let body: any;
  body = JSON.stringify({
    ...(input.EndTime !== undefined && {
      EndTime: Math.round(input.EndTime.getTime() / 1000)
    }),
    ...(input.FilterExpression !== undefined && {
      FilterExpression: input.FilterExpression
    }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.Sampling !== undefined && { Sampling: input.Sampling }),
    ...(input.SamplingStrategy !== undefined && {
      SamplingStrategy: serializeAws_restJson1SamplingStrategy(
        input.SamplingStrategy,
        context
      )
    }),
    ...(input.StartTime !== undefined && {
      StartTime: Math.round(input.StartTime.getTime() / 1000)
    }),
    ...(input.TimeRangeType !== undefined && {
      TimeRangeType: input.TimeRangeType
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1PutEncryptionConfigCommand = async (
  input: PutEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/PutEncryptionConfig";
  let body: any;
  body = JSON.stringify({
    ...(input.KeyId !== undefined && { KeyId: input.KeyId }),
    ...(input.Type !== undefined && { Type: input.Type })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1PutTelemetryRecordsCommand = async (
  input: PutTelemetryRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TelemetryRecords";
  let body: any;
  body = JSON.stringify({
    ...(input.EC2InstanceId !== undefined && {
      EC2InstanceId: input.EC2InstanceId
    }),
    ...(input.Hostname !== undefined && { Hostname: input.Hostname }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.TelemetryRecords !== undefined && {
      TelemetryRecords: serializeAws_restJson1TelemetryRecordList(
        input.TelemetryRecords,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1PutTraceSegmentsCommand = async (
  input: PutTraceSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/TraceSegments";
  let body: any;
  body = JSON.stringify({
    ...(input.TraceSegmentDocuments !== undefined && {
      TraceSegmentDocuments: serializeAws_restJson1TraceSegmentDocumentList(
        input.TraceSegmentDocuments,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateGroupCommand = async (
  input: UpdateGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UpdateGroup";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterExpression !== undefined && {
      FilterExpression: input.FilterExpression
    }),
    ...(input.GroupARN !== undefined && { GroupARN: input.GroupARN }),
    ...(input.GroupName !== undefined && { GroupName: input.GroupName })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1UpdateSamplingRuleCommand = async (
  input: UpdateSamplingRuleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/UpdateSamplingRule";
  let body: any;
  body = JSON.stringify({
    ...(input.SamplingRuleUpdate !== undefined && {
      SamplingRuleUpdate: serializeAws_restJson1SamplingRuleUpdate(
        input.SamplingRuleUpdate,
        context
      )
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1BatchGetTracesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1BatchGetTracesCommandError(output, context);
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
    contents.Traces = deserializeAws_restJson1TraceList(data.Traces, context);
  }
  if (
    data.UnprocessedTraceIds !== undefined &&
    data.UnprocessedTraceIds !== null
  ) {
    contents.UnprocessedTraceIds = deserializeAws_restJson1UnprocessedTraceIdList(
      data.UnprocessedTraceIds,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchGetTracesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGetTracesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1CreateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateGroupCommandError(output, context);
  }
  const contents: CreateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1CreateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateSamplingRuleCommandError(
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
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RuleLimitExceededException":
    case "com.amazonaws.xray#RuleLimitExceededException":
      response = {
        ...(await deserializeAws_restJson1RuleLimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1DeleteGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteGroupCommandError(output, context);
  }
  const contents: DeleteGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteGroupResult"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1DeleteSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteSamplingRuleCommandError(
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
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEncryptionConfigCommandError(
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
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(
      data.EncryptionConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetGroupCommandError(output, context);
  }
  const contents: GetGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetGroupsCommandError(output, context);
  }
  const contents: GetGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetGroupsResult",
    Groups: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Groups !== undefined && data.Groups !== null) {
    contents.Groups = deserializeAws_restJson1GroupSummaryList(
      data.Groups,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetSamplingRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSamplingRulesCommandError(
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
    contents.SamplingRuleRecords = deserializeAws_restJson1SamplingRuleRecordList(
      data.SamplingRuleRecords,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetSamplingStatisticSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSamplingStatisticSummariesCommandError(
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
    contents.SamplingStatisticSummaries = deserializeAws_restJson1SamplingStatisticSummaryList(
      data.SamplingStatisticSummaries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingStatisticSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingStatisticSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetSamplingTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetSamplingTargetsCommandError(
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
    contents.SamplingTargetDocuments = deserializeAws_restJson1SamplingTargetDocumentList(
      data.SamplingTargetDocuments,
      context
    );
  }
  if (
    data.UnprocessedStatistics !== undefined &&
    data.UnprocessedStatistics !== null
  ) {
    contents.UnprocessedStatistics = deserializeAws_restJson1UnprocessedStatisticsList(
      data.UnprocessedStatistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSamplingTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSamplingTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetServiceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetServiceGraphCommandError(output, context);
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
    contents.Services = deserializeAws_restJson1ServiceList(
      data.Services,
      context
    );
  }
  if (data.StartTime !== undefined && data.StartTime !== null) {
    contents.StartTime = new Date(Math.round(data.StartTime * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetServiceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError(
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
    contents.TimeSeriesServiceStatistics = deserializeAws_restJson1TimeSeriesServiceStatisticsList(
      data.TimeSeriesServiceStatistics,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTimeSeriesServiceStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTimeSeriesServiceStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetTraceGraphCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetTraceGraphCommandError(output, context);
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
    contents.Services = deserializeAws_restJson1ServiceList(
      data.Services,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTraceGraphCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceGraphCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1GetTraceSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetTraceSummariesCommandError(
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
    contents.TraceSummaries = deserializeAws_restJson1TraceSummaryList(
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
};

const deserializeAws_restJson1GetTraceSummariesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTraceSummariesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1PutEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutEncryptionConfigCommandError(
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
    contents.EncryptionConfig = deserializeAws_restJson1EncryptionConfig(
      data.EncryptionConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1PutTelemetryRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutTelemetryRecordsCommandError(
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
};

const deserializeAws_restJson1PutTelemetryRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTelemetryRecordsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1PutTraceSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutTraceSegmentsCommandError(
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
    contents.UnprocessedTraceSegments = deserializeAws_restJson1UnprocessedTraceSegmentList(
      data.UnprocessedTraceSegments,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutTraceSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutTraceSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1UpdateGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateGroupCommandError(output, context);
  }
  const contents: UpdateGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateGroupResult",
    Group: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Group !== undefined && data.Group !== null) {
    contents.Group = deserializeAws_restJson1Group(data.Group, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

export const deserializeAws_restJson1UpdateSamplingRuleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateSamplingRuleCommandError(
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
    contents.SamplingRuleRecord = deserializeAws_restJson1SamplingRuleRecord(
      data.SamplingRuleRecord,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSamplingRuleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSamplingRuleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.xray#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ThrottledException":
    case "com.amazonaws.xray#ThrottledException":
      response = {
        ...(await deserializeAws_restJson1ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
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
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1RuleLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RuleLimitExceededException> => {
  const contents: RuleLimitExceededException = {
    name: "RuleLimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const contents: ThrottledException = {
    name: "ThrottledException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1AttributeMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1BackendConnectionErrors = (
  input: BackendConnectionErrors,
  context: __SerdeContext
): any => {
  return {
    ...(input.ConnectionRefusedCount !== undefined && {
      ConnectionRefusedCount: input.ConnectionRefusedCount
    }),
    ...(input.HTTPCode4XXCount !== undefined && {
      HTTPCode4XXCount: input.HTTPCode4XXCount
    }),
    ...(input.HTTPCode5XXCount !== undefined && {
      HTTPCode5XXCount: input.HTTPCode5XXCount
    }),
    ...(input.OtherCount !== undefined && { OtherCount: input.OtherCount }),
    ...(input.TimeoutCount !== undefined && {
      TimeoutCount: input.TimeoutCount
    }),
    ...(input.UnknownHostCount !== undefined && {
      UnknownHostCount: input.UnknownHostCount
    })
  };
};

const serializeAws_restJson1SamplingRule = (
  input: SamplingRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context)
    }),
    ...(input.FixedRate !== undefined && { FixedRate: input.FixedRate }),
    ...(input.HTTPMethod !== undefined && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host !== undefined && { Host: input.Host }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.ReservoirSize !== undefined && {
      ReservoirSize: input.ReservoirSize
    }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN !== undefined && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && { RuleName: input.RuleName }),
    ...(input.ServiceName !== undefined && { ServiceName: input.ServiceName }),
    ...(input.ServiceType !== undefined && { ServiceType: input.ServiceType }),
    ...(input.URLPath !== undefined && { URLPath: input.URLPath }),
    ...(input.Version !== undefined && { Version: input.Version })
  };
};

const serializeAws_restJson1SamplingRuleUpdate = (
  input: SamplingRuleUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes !== undefined && {
      Attributes: serializeAws_restJson1AttributeMap(input.Attributes, context)
    }),
    ...(input.FixedRate !== undefined && { FixedRate: input.FixedRate }),
    ...(input.HTTPMethod !== undefined && { HTTPMethod: input.HTTPMethod }),
    ...(input.Host !== undefined && { Host: input.Host }),
    ...(input.Priority !== undefined && { Priority: input.Priority }),
    ...(input.ReservoirSize !== undefined && {
      ReservoirSize: input.ReservoirSize
    }),
    ...(input.ResourceARN !== undefined && { ResourceARN: input.ResourceARN }),
    ...(input.RuleARN !== undefined && { RuleARN: input.RuleARN }),
    ...(input.RuleName !== undefined && { RuleName: input.RuleName }),
    ...(input.ServiceName !== undefined && { ServiceName: input.ServiceName }),
    ...(input.ServiceType !== undefined && { ServiceType: input.ServiceType }),
    ...(input.URLPath !== undefined && { URLPath: input.URLPath })
  };
};

const serializeAws_restJson1SamplingStatisticsDocument = (
  input: SamplingStatisticsDocument,
  context: __SerdeContext
): any => {
  return {
    ...(input.BorrowCount !== undefined && { BorrowCount: input.BorrowCount }),
    ...(input.ClientID !== undefined && { ClientID: input.ClientID }),
    ...(input.RequestCount !== undefined && {
      RequestCount: input.RequestCount
    }),
    ...(input.RuleName !== undefined && { RuleName: input.RuleName }),
    ...(input.SampledCount !== undefined && {
      SampledCount: input.SampledCount
    }),
    ...(input.Timestamp !== undefined && {
      Timestamp: Math.round(input.Timestamp.getTime() / 1000)
    })
  };
};

const serializeAws_restJson1SamplingStatisticsDocumentList = (
  input: SamplingStatisticsDocument[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1SamplingStatisticsDocument(entry, context)
  );
};

const serializeAws_restJson1SamplingStrategy = (
  input: SamplingStrategy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.Value !== undefined && { Value: input.Value })
  };
};

const serializeAws_restJson1TelemetryRecord = (
  input: TelemetryRecord,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackendConnectionErrors !== undefined && {
      BackendConnectionErrors: serializeAws_restJson1BackendConnectionErrors(
        input.BackendConnectionErrors,
        context
      )
    }),
    ...(input.SegmentsReceivedCount !== undefined && {
      SegmentsReceivedCount: input.SegmentsReceivedCount
    }),
    ...(input.SegmentsRejectedCount !== undefined && {
      SegmentsRejectedCount: input.SegmentsRejectedCount
    }),
    ...(input.SegmentsSentCount !== undefined && {
      SegmentsSentCount: input.SegmentsSentCount
    }),
    ...(input.SegmentsSpilloverCount !== undefined && {
      SegmentsSpilloverCount: input.SegmentsSpilloverCount
    }),
    ...(input.Timestamp !== undefined && {
      Timestamp: Math.round(input.Timestamp.getTime() / 1000)
    })
  };
};

const serializeAws_restJson1TelemetryRecordList = (
  input: TelemetryRecord[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1TelemetryRecord(entry, context)
  );
};

const serializeAws_restJson1TraceIdList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1TraceSegmentDocumentList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const deserializeAws_restJson1Alias = (
  output: any,
  context: __SerdeContext
): Alias => {
  return {
    __type: "Alias",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1AliasNames(output.Names, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1AliasList = (
  output: any,
  context: __SerdeContext
): Alias[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Alias(entry, context)
  );
};

const deserializeAws_restJson1AliasNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Annotations = (
  output: any,
  context: __SerdeContext
): { [key: string]: ValueWithServiceIds[] } => {
  return Object.entries(output).reduce(
    (
      acc: { [key: string]: ValueWithServiceIds[] },
      [key, value]: [string, any]
    ) => ({
      ...acc,
      [key]: deserializeAws_restJson1ValuesWithServiceIds(value, context)
    }),
    {}
  );
};

const deserializeAws_restJson1AnnotationValue = (
  output: any,
  context: __SerdeContext
): AnnotationValue => {
  return {
    __type: "AnnotationValue",
    BooleanValue:
      output.BooleanValue !== undefined && output.BooleanValue !== null
        ? output.BooleanValue
        : undefined,
    NumberValue:
      output.NumberValue !== undefined && output.NumberValue !== null
        ? output.NumberValue
        : undefined,
    StringValue:
      output.StringValue !== undefined && output.StringValue !== null
        ? output.StringValue
        : undefined
  } as any;
};

const deserializeAws_restJson1AttributeMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1AvailabilityZoneDetail = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail => {
  return {
    __type: "AvailabilityZoneDetail",
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1Edge = (
  output: any,
  context: __SerdeContext
): Edge => {
  return {
    __type: "Edge",
    Aliases:
      output.Aliases !== undefined && output.Aliases !== null
        ? deserializeAws_restJson1AliasList(output.Aliases, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    ReferenceId:
      output.ReferenceId !== undefined && output.ReferenceId !== null
        ? output.ReferenceId
        : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined &&
      output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(
            output.ResponseTimeHistogram,
            context
          )
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    SummaryStatistics:
      output.SummaryStatistics !== undefined &&
      output.SummaryStatistics !== null
        ? deserializeAws_restJson1EdgeStatistics(
            output.SummaryStatistics,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1EdgeList = (
  output: any,
  context: __SerdeContext
): Edge[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Edge(entry, context)
  );
};

const deserializeAws_restJson1EdgeStatistics = (
  output: any,
  context: __SerdeContext
): EdgeStatistics => {
  return {
    __type: "EdgeStatistics",
    ErrorStatistics:
      output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
        ? deserializeAws_restJson1ErrorStatistics(
            output.ErrorStatistics,
            context
          )
        : undefined,
    FaultStatistics:
      output.FaultStatistics !== undefined && output.FaultStatistics !== null
        ? deserializeAws_restJson1FaultStatistics(
            output.FaultStatistics,
            context
          )
        : undefined,
    OkCount:
      output.OkCount !== undefined && output.OkCount !== null
        ? output.OkCount
        : undefined,
    TotalCount:
      output.TotalCount !== undefined && output.TotalCount !== null
        ? output.TotalCount
        : undefined,
    TotalResponseTime:
      output.TotalResponseTime !== undefined &&
      output.TotalResponseTime !== null
        ? output.TotalResponseTime
        : undefined
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (
  output: any,
  context: __SerdeContext
): EncryptionConfig => {
  return {
    __type: "EncryptionConfig",
    KeyId:
      output.KeyId !== undefined && output.KeyId !== null
        ? output.KeyId
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorRootCause = (
  output: any,
  context: __SerdeContext
): ErrorRootCause => {
  return {
    __type: "ErrorRootCause",
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1ErrorRootCauseServices(
            output.Services,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseEntity => {
  return {
    __type: "ErrorRootCauseEntity",
    Exceptions:
      output.Exceptions !== undefined && output.Exceptions !== null
        ? deserializeAws_restJson1RootCauseExceptions(
            output.Exceptions,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Remote:
      output.Remote !== undefined && output.Remote !== null
        ? output.Remote
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ErrorRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1ErrorRootCauses = (
  output: any,
  context: __SerdeContext
): ErrorRootCause[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ErrorRootCause(entry, context)
  );
};

const deserializeAws_restJson1ErrorRootCauseService = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseService => {
  return {
    __type: "ErrorRootCauseService",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1ErrorRootCauseEntityPath(
            output.EntityPath,
            context
          )
        : undefined,
    Inferred:
      output.Inferred !== undefined && output.Inferred !== null
        ? output.Inferred
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ErrorRootCauseServices = (
  output: any,
  context: __SerdeContext
): ErrorRootCauseService[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ErrorRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1ErrorStatistics = (
  output: any,
  context: __SerdeContext
): ErrorStatistics => {
  return {
    __type: "ErrorStatistics",
    OtherCount:
      output.OtherCount !== undefined && output.OtherCount !== null
        ? output.OtherCount
        : undefined,
    ThrottleCount:
      output.ThrottleCount !== undefined && output.ThrottleCount !== null
        ? output.ThrottleCount
        : undefined,
    TotalCount:
      output.TotalCount !== undefined && output.TotalCount !== null
        ? output.TotalCount
        : undefined
  } as any;
};

const deserializeAws_restJson1FaultRootCause = (
  output: any,
  context: __SerdeContext
): FaultRootCause => {
  return {
    __type: "FaultRootCause",
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1FaultRootCauseServices(
            output.Services,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntity = (
  output: any,
  context: __SerdeContext
): FaultRootCauseEntity => {
  return {
    __type: "FaultRootCauseEntity",
    Exceptions:
      output.Exceptions !== undefined && output.Exceptions !== null
        ? deserializeAws_restJson1RootCauseExceptions(
            output.Exceptions,
            context
          )
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Remote:
      output.Remote !== undefined && output.Remote !== null
        ? output.Remote
        : undefined
  } as any;
};

const deserializeAws_restJson1FaultRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): FaultRootCauseEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FaultRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1FaultRootCauses = (
  output: any,
  context: __SerdeContext
): FaultRootCause[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FaultRootCause(entry, context)
  );
};

const deserializeAws_restJson1FaultRootCauseService = (
  output: any,
  context: __SerdeContext
): FaultRootCauseService => {
  return {
    __type: "FaultRootCauseService",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1FaultRootCauseEntityPath(
            output.EntityPath,
            context
          )
        : undefined,
    Inferred:
      output.Inferred !== undefined && output.Inferred !== null
        ? output.Inferred
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1FaultRootCauseServices = (
  output: any,
  context: __SerdeContext
): FaultRootCauseService[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FaultRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1FaultStatistics = (
  output: any,
  context: __SerdeContext
): FaultStatistics => {
  return {
    __type: "FaultStatistics",
    OtherCount:
      output.OtherCount !== undefined && output.OtherCount !== null
        ? output.OtherCount
        : undefined,
    TotalCount:
      output.TotalCount !== undefined && output.TotalCount !== null
        ? output.TotalCount
        : undefined
  } as any;
};

const deserializeAws_restJson1Group = (
  output: any,
  context: __SerdeContext
): Group => {
  return {
    __type: "Group",
    FilterExpression:
      output.FilterExpression !== undefined && output.FilterExpression !== null
        ? output.FilterExpression
        : undefined,
    GroupARN:
      output.GroupARN !== undefined && output.GroupARN !== null
        ? output.GroupARN
        : undefined,
    GroupName:
      output.GroupName !== undefined && output.GroupName !== null
        ? output.GroupName
        : undefined
  } as any;
};

const deserializeAws_restJson1GroupSummary = (
  output: any,
  context: __SerdeContext
): GroupSummary => {
  return {
    __type: "GroupSummary",
    FilterExpression:
      output.FilterExpression !== undefined && output.FilterExpression !== null
        ? output.FilterExpression
        : undefined,
    GroupARN:
      output.GroupARN !== undefined && output.GroupARN !== null
        ? output.GroupARN
        : undefined,
    GroupName:
      output.GroupName !== undefined && output.GroupName !== null
        ? output.GroupName
        : undefined
  } as any;
};

const deserializeAws_restJson1GroupSummaryList = (
  output: any,
  context: __SerdeContext
): GroupSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1GroupSummary(entry, context)
  );
};

const deserializeAws_restJson1Histogram = (
  output: any,
  context: __SerdeContext
): HistogramEntry[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1HistogramEntry(entry, context)
  );
};

const deserializeAws_restJson1HistogramEntry = (
  output: any,
  context: __SerdeContext
): HistogramEntry => {
  return {
    __type: "HistogramEntry",
    Count:
      output.Count !== undefined && output.Count !== null
        ? output.Count
        : undefined,
    Value:
      output.Value !== undefined && output.Value !== null
        ? output.Value
        : undefined
  } as any;
};

const deserializeAws_restJson1Http = (
  output: any,
  context: __SerdeContext
): Http => {
  return {
    __type: "Http",
    ClientIp:
      output.ClientIp !== undefined && output.ClientIp !== null
        ? output.ClientIp
        : undefined,
    HttpMethod:
      output.HttpMethod !== undefined && output.HttpMethod !== null
        ? output.HttpMethod
        : undefined,
    HttpStatus:
      output.HttpStatus !== undefined && output.HttpStatus !== null
        ? output.HttpStatus
        : undefined,
    HttpURL:
      output.HttpURL !== undefined && output.HttpURL !== null
        ? output.HttpURL
        : undefined,
    UserAgent:
      output.UserAgent !== undefined && output.UserAgent !== null
        ? output.UserAgent
        : undefined
  } as any;
};

const deserializeAws_restJson1InstanceIdDetail = (
  output: any,
  context: __SerdeContext
): InstanceIdDetail => {
  return {
    __type: "InstanceIdDetail",
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined
  } as any;
};

const deserializeAws_restJson1ResourceARNDetail = (
  output: any,
  context: __SerdeContext
): ResourceARNDetail => {
  return {
    __type: "ResourceARNDetail",
    ARN:
      output.ARN !== undefined && output.ARN !== null ? output.ARN : undefined
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCause = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCause => {
  return {
    __type: "ResponseTimeRootCause",
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_restJson1ResponseTimeRootCauseServices(
            output.Services,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntity = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity => {
  return {
    __type: "ResponseTimeRootCauseEntity",
    Coverage:
      output.Coverage !== undefined && output.Coverage !== null
        ? output.Coverage
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Remote:
      output.Remote !== undefined && output.Remote !== null
        ? output.Remote
        : undefined
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseEntityPath = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseEntity[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResponseTimeRootCauseEntity(entry, context)
  );
};

const deserializeAws_restJson1ResponseTimeRootCauses = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCause[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResponseTimeRootCause(entry, context)
  );
};

const deserializeAws_restJson1ResponseTimeRootCauseService = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService => {
  return {
    __type: "ResponseTimeRootCauseService",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    EntityPath:
      output.EntityPath !== undefined && output.EntityPath !== null
        ? deserializeAws_restJson1ResponseTimeRootCauseEntityPath(
            output.EntityPath,
            context
          )
        : undefined,
    Inferred:
      output.Inferred !== undefined && output.Inferred !== null
        ? output.Inferred
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ResponseTimeRootCauseServices = (
  output: any,
  context: __SerdeContext
): ResponseTimeRootCauseService[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResponseTimeRootCauseService(entry, context)
  );
};

const deserializeAws_restJson1RootCauseException = (
  output: any,
  context: __SerdeContext
): RootCauseException => {
  return {
    __type: "RootCauseException",
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined
  } as any;
};

const deserializeAws_restJson1RootCauseExceptions = (
  output: any,
  context: __SerdeContext
): RootCauseException[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1RootCauseException(entry, context)
  );
};

const deserializeAws_restJson1SamplingRule = (
  output: any,
  context: __SerdeContext
): SamplingRule => {
  return {
    __type: "SamplingRule",
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1AttributeMap(output.Attributes, context)
        : undefined,
    FixedRate:
      output.FixedRate !== undefined && output.FixedRate !== null
        ? output.FixedRate
        : undefined,
    HTTPMethod:
      output.HTTPMethod !== undefined && output.HTTPMethod !== null
        ? output.HTTPMethod
        : undefined,
    Host:
      output.Host !== undefined && output.Host !== null
        ? output.Host
        : undefined,
    Priority:
      output.Priority !== undefined && output.Priority !== null
        ? output.Priority
        : undefined,
    ReservoirSize:
      output.ReservoirSize !== undefined && output.ReservoirSize !== null
        ? output.ReservoirSize
        : undefined,
    ResourceARN:
      output.ResourceARN !== undefined && output.ResourceARN !== null
        ? output.ResourceARN
        : undefined,
    RuleARN:
      output.RuleARN !== undefined && output.RuleARN !== null
        ? output.RuleARN
        : undefined,
    RuleName:
      output.RuleName !== undefined && output.RuleName !== null
        ? output.RuleName
        : undefined,
    ServiceName:
      output.ServiceName !== undefined && output.ServiceName !== null
        ? output.ServiceName
        : undefined,
    ServiceType:
      output.ServiceType !== undefined && output.ServiceType !== null
        ? output.ServiceType
        : undefined,
    URLPath:
      output.URLPath !== undefined && output.URLPath !== null
        ? output.URLPath
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_restJson1SamplingRuleRecord = (
  output: any,
  context: __SerdeContext
): SamplingRuleRecord => {
  return {
    __type: "SamplingRuleRecord",
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
        : undefined,
    ModifiedAt:
      output.ModifiedAt !== undefined && output.ModifiedAt !== null
        ? new Date(Math.round(output.ModifiedAt * 1000))
        : undefined,
    SamplingRule:
      output.SamplingRule !== undefined && output.SamplingRule !== null
        ? deserializeAws_restJson1SamplingRule(output.SamplingRule, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1SamplingRuleRecordList = (
  output: any,
  context: __SerdeContext
): SamplingRuleRecord[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SamplingRuleRecord(entry, context)
  );
};

const deserializeAws_restJson1SamplingStatisticSummary = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary => {
  return {
    __type: "SamplingStatisticSummary",
    BorrowCount:
      output.BorrowCount !== undefined && output.BorrowCount !== null
        ? output.BorrowCount
        : undefined,
    RequestCount:
      output.RequestCount !== undefined && output.RequestCount !== null
        ? output.RequestCount
        : undefined,
    RuleName:
      output.RuleName !== undefined && output.RuleName !== null
        ? output.RuleName
        : undefined,
    SampledCount:
      output.SampledCount !== undefined && output.SampledCount !== null
        ? output.SampledCount
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1SamplingStatisticSummaryList = (
  output: any,
  context: __SerdeContext
): SamplingStatisticSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SamplingStatisticSummary(entry, context)
  );
};

const deserializeAws_restJson1SamplingTargetDocument = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument => {
  return {
    __type: "SamplingTargetDocument",
    FixedRate:
      output.FixedRate !== undefined && output.FixedRate !== null
        ? output.FixedRate
        : undefined,
    Interval:
      output.Interval !== undefined && output.Interval !== null
        ? output.Interval
        : undefined,
    ReservoirQuota:
      output.ReservoirQuota !== undefined && output.ReservoirQuota !== null
        ? output.ReservoirQuota
        : undefined,
    ReservoirQuotaTTL:
      output.ReservoirQuotaTTL !== undefined &&
      output.ReservoirQuotaTTL !== null
        ? new Date(Math.round(output.ReservoirQuotaTTL * 1000))
        : undefined,
    RuleName:
      output.RuleName !== undefined && output.RuleName !== null
        ? output.RuleName
        : undefined
  } as any;
};

const deserializeAws_restJson1SamplingTargetDocumentList = (
  output: any,
  context: __SerdeContext
): SamplingTargetDocument[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1SamplingTargetDocument(entry, context)
  );
};

const deserializeAws_restJson1Segment = (
  output: any,
  context: __SerdeContext
): Segment => {
  return {
    __type: "Segment",
    Document:
      output.Document !== undefined && output.Document !== null
        ? output.Document
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined
  } as any;
};

const deserializeAws_restJson1SegmentList = (
  output: any,
  context: __SerdeContext
): Segment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Segment(entry, context)
  );
};

const deserializeAws_restJson1Service = (
  output: any,
  context: __SerdeContext
): Service => {
  return {
    __type: "Service",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    DurationHistogram:
      output.DurationHistogram !== undefined &&
      output.DurationHistogram !== null
        ? deserializeAws_restJson1Histogram(output.DurationHistogram, context)
        : undefined,
    Edges:
      output.Edges !== undefined && output.Edges !== null
        ? deserializeAws_restJson1EdgeList(output.Edges, context)
        : undefined,
    EndTime:
      output.EndTime !== undefined && output.EndTime !== null
        ? new Date(Math.round(output.EndTime * 1000))
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    ReferenceId:
      output.ReferenceId !== undefined && output.ReferenceId !== null
        ? output.ReferenceId
        : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined &&
      output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(
            output.ResponseTimeHistogram,
            context
          )
        : undefined,
    Root:
      output.Root !== undefined && output.Root !== null
        ? output.Root
        : undefined,
    StartTime:
      output.StartTime !== undefined && output.StartTime !== null
        ? new Date(Math.round(output.StartTime * 1000))
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    SummaryStatistics:
      output.SummaryStatistics !== undefined &&
      output.SummaryStatistics !== null
        ? deserializeAws_restJson1ServiceStatistics(
            output.SummaryStatistics,
            context
          )
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ServiceId = (
  output: any,
  context: __SerdeContext
): ServiceId => {
  return {
    __type: "ServiceId",
    AccountId:
      output.AccountId !== undefined && output.AccountId !== null
        ? output.AccountId
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    Names:
      output.Names !== undefined && output.Names !== null
        ? deserializeAws_restJson1ServiceNames(output.Names, context)
        : undefined,
    Type:
      output.Type !== undefined && output.Type !== null
        ? output.Type
        : undefined
  } as any;
};

const deserializeAws_restJson1ServiceIds = (
  output: any,
  context: __SerdeContext
): ServiceId[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ServiceId(entry, context)
  );
};

const deserializeAws_restJson1ServiceList = (
  output: any,
  context: __SerdeContext
): Service[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Service(entry, context)
  );
};

const deserializeAws_restJson1ServiceNames = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1ServiceStatistics = (
  output: any,
  context: __SerdeContext
): ServiceStatistics => {
  return {
    __type: "ServiceStatistics",
    ErrorStatistics:
      output.ErrorStatistics !== undefined && output.ErrorStatistics !== null
        ? deserializeAws_restJson1ErrorStatistics(
            output.ErrorStatistics,
            context
          )
        : undefined,
    FaultStatistics:
      output.FaultStatistics !== undefined && output.FaultStatistics !== null
        ? deserializeAws_restJson1FaultStatistics(
            output.FaultStatistics,
            context
          )
        : undefined,
    OkCount:
      output.OkCount !== undefined && output.OkCount !== null
        ? output.OkCount
        : undefined,
    TotalCount:
      output.TotalCount !== undefined && output.TotalCount !== null
        ? output.TotalCount
        : undefined,
    TotalResponseTime:
      output.TotalResponseTime !== undefined &&
      output.TotalResponseTime !== null
        ? output.TotalResponseTime
        : undefined
  } as any;
};

const deserializeAws_restJson1TimeSeriesServiceStatistics = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics => {
  return {
    __type: "TimeSeriesServiceStatistics",
    EdgeSummaryStatistics:
      output.EdgeSummaryStatistics !== undefined &&
      output.EdgeSummaryStatistics !== null
        ? deserializeAws_restJson1EdgeStatistics(
            output.EdgeSummaryStatistics,
            context
          )
        : undefined,
    ResponseTimeHistogram:
      output.ResponseTimeHistogram !== undefined &&
      output.ResponseTimeHistogram !== null
        ? deserializeAws_restJson1Histogram(
            output.ResponseTimeHistogram,
            context
          )
        : undefined,
    ServiceSummaryStatistics:
      output.ServiceSummaryStatistics !== undefined &&
      output.ServiceSummaryStatistics !== null
        ? deserializeAws_restJson1ServiceStatistics(
            output.ServiceSummaryStatistics,
            context
          )
        : undefined,
    Timestamp:
      output.Timestamp !== undefined && output.Timestamp !== null
        ? new Date(Math.round(output.Timestamp * 1000))
        : undefined
  } as any;
};

const deserializeAws_restJson1TimeSeriesServiceStatisticsList = (
  output: any,
  context: __SerdeContext
): TimeSeriesServiceStatistics[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TimeSeriesServiceStatistics(entry, context)
  );
};

const deserializeAws_restJson1Trace = (
  output: any,
  context: __SerdeContext
): Trace => {
  return {
    __type: "Trace",
    Duration:
      output.Duration !== undefined && output.Duration !== null
        ? output.Duration
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Segments:
      output.Segments !== undefined && output.Segments !== null
        ? deserializeAws_restJson1SegmentList(output.Segments, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1TraceAvailabilityZones = (
  output: any,
  context: __SerdeContext
): AvailabilityZoneDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AvailabilityZoneDetail(entry, context)
  );
};

const deserializeAws_restJson1TraceInstanceIds = (
  output: any,
  context: __SerdeContext
): InstanceIdDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1InstanceIdDetail(entry, context)
  );
};

const deserializeAws_restJson1TraceList = (
  output: any,
  context: __SerdeContext
): Trace[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Trace(entry, context)
  );
};

const deserializeAws_restJson1TraceResourceARNs = (
  output: any,
  context: __SerdeContext
): ResourceARNDetail[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ResourceARNDetail(entry, context)
  );
};

const deserializeAws_restJson1TraceSummary = (
  output: any,
  context: __SerdeContext
): TraceSummary => {
  return {
    __type: "TraceSummary",
    Annotations:
      output.Annotations !== undefined && output.Annotations !== null
        ? deserializeAws_restJson1Annotations(output.Annotations, context)
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones !== undefined &&
      output.AvailabilityZones !== null
        ? deserializeAws_restJson1TraceAvailabilityZones(
            output.AvailabilityZones,
            context
          )
        : undefined,
    Duration:
      output.Duration !== undefined && output.Duration !== null
        ? output.Duration
        : undefined,
    EntryPoint:
      output.EntryPoint !== undefined && output.EntryPoint !== null
        ? deserializeAws_restJson1ServiceId(output.EntryPoint, context)
        : undefined,
    ErrorRootCauses:
      output.ErrorRootCauses !== undefined && output.ErrorRootCauses !== null
        ? deserializeAws_restJson1ErrorRootCauses(
            output.ErrorRootCauses,
            context
          )
        : undefined,
    FaultRootCauses:
      output.FaultRootCauses !== undefined && output.FaultRootCauses !== null
        ? deserializeAws_restJson1FaultRootCauses(
            output.FaultRootCauses,
            context
          )
        : undefined,
    HasError:
      output.HasError !== undefined && output.HasError !== null
        ? output.HasError
        : undefined,
    HasFault:
      output.HasFault !== undefined && output.HasFault !== null
        ? output.HasFault
        : undefined,
    HasThrottle:
      output.HasThrottle !== undefined && output.HasThrottle !== null
        ? output.HasThrottle
        : undefined,
    Http:
      output.Http !== undefined && output.Http !== null
        ? deserializeAws_restJson1Http(output.Http, context)
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    InstanceIds:
      output.InstanceIds !== undefined && output.InstanceIds !== null
        ? deserializeAws_restJson1TraceInstanceIds(output.InstanceIds, context)
        : undefined,
    IsPartial:
      output.IsPartial !== undefined && output.IsPartial !== null
        ? output.IsPartial
        : undefined,
    MatchedEventTime:
      output.MatchedEventTime !== undefined && output.MatchedEventTime !== null
        ? new Date(Math.round(output.MatchedEventTime * 1000))
        : undefined,
    ResourceARNs:
      output.ResourceARNs !== undefined && output.ResourceARNs !== null
        ? deserializeAws_restJson1TraceResourceARNs(
            output.ResourceARNs,
            context
          )
        : undefined,
    ResponseTime:
      output.ResponseTime !== undefined && output.ResponseTime !== null
        ? output.ResponseTime
        : undefined,
    ResponseTimeRootCauses:
      output.ResponseTimeRootCauses !== undefined &&
      output.ResponseTimeRootCauses !== null
        ? deserializeAws_restJson1ResponseTimeRootCauses(
            output.ResponseTimeRootCauses,
            context
          )
        : undefined,
    Revision:
      output.Revision !== undefined && output.Revision !== null
        ? output.Revision
        : undefined,
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined,
    Users:
      output.Users !== undefined && output.Users !== null
        ? deserializeAws_restJson1TraceUsers(output.Users, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1TraceSummaryList = (
  output: any,
  context: __SerdeContext
): TraceSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TraceSummary(entry, context)
  );
};

const deserializeAws_restJson1TraceUser = (
  output: any,
  context: __SerdeContext
): TraceUser => {
  return {
    __type: "TraceUser",
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined,
    UserName:
      output.UserName !== undefined && output.UserName !== null
        ? output.UserName
        : undefined
  } as any;
};

const deserializeAws_restJson1TraceUsers = (
  output: any,
  context: __SerdeContext
): TraceUser[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1TraceUser(entry, context)
  );
};

const deserializeAws_restJson1UnprocessedStatistics = (
  output: any,
  context: __SerdeContext
): UnprocessedStatistics => {
  return {
    __type: "UnprocessedStatistics",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined,
    RuleName:
      output.RuleName !== undefined && output.RuleName !== null
        ? output.RuleName
        : undefined
  } as any;
};

const deserializeAws_restJson1UnprocessedStatisticsList = (
  output: any,
  context: __SerdeContext
): UnprocessedStatistics[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UnprocessedStatistics(entry, context)
  );
};

const deserializeAws_restJson1UnprocessedTraceIdList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1UnprocessedTraceSegment = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment => {
  return {
    __type: "UnprocessedTraceSegment",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Id: output.Id !== undefined && output.Id !== null ? output.Id : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_restJson1UnprocessedTraceSegmentList = (
  output: any,
  context: __SerdeContext
): UnprocessedTraceSegment[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1UnprocessedTraceSegment(entry, context)
  );
};

const deserializeAws_restJson1ValuesWithServiceIds = (
  output: any,
  context: __SerdeContext
): ValueWithServiceIds[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ValueWithServiceIds(entry, context)
  );
};

const deserializeAws_restJson1ValueWithServiceIds = (
  output: any,
  context: __SerdeContext
): ValueWithServiceIds => {
  return {
    __type: "ValueWithServiceIds",
    AnnotationValue:
      output.AnnotationValue !== undefined && output.AnnotationValue !== null
        ? deserializeAws_restJson1AnnotationValue(
            output.AnnotationValue,
            context
          )
        : undefined,
    ServiceIds:
      output.ServiceIds !== undefined && output.ServiceIds !== null
        ? deserializeAws_restJson1ServiceIds(output.ServiceIds, context)
        : undefined
  } as any;
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
