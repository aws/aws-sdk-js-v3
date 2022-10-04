// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
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
  BatchAcknowledgeAlarmCommandInput,
  BatchAcknowledgeAlarmCommandOutput,
} from "../commands/BatchAcknowledgeAlarmCommand";
import {
  BatchDeleteDetectorCommandInput,
  BatchDeleteDetectorCommandOutput,
} from "../commands/BatchDeleteDetectorCommand";
import { BatchDisableAlarmCommandInput, BatchDisableAlarmCommandOutput } from "../commands/BatchDisableAlarmCommand";
import { BatchEnableAlarmCommandInput, BatchEnableAlarmCommandOutput } from "../commands/BatchEnableAlarmCommand";
import { BatchPutMessageCommandInput, BatchPutMessageCommandOutput } from "../commands/BatchPutMessageCommand";
import { BatchResetAlarmCommandInput, BatchResetAlarmCommandOutput } from "../commands/BatchResetAlarmCommand";
import { BatchSnoozeAlarmCommandInput, BatchSnoozeAlarmCommandOutput } from "../commands/BatchSnoozeAlarmCommand";
import {
  BatchUpdateDetectorCommandInput,
  BatchUpdateDetectorCommandOutput,
} from "../commands/BatchUpdateDetectorCommand";
import { DescribeAlarmCommandInput, DescribeAlarmCommandOutput } from "../commands/DescribeAlarmCommand";
import { DescribeDetectorCommandInput, DescribeDetectorCommandOutput } from "../commands/DescribeDetectorCommand";
import { ListAlarmsCommandInput, ListAlarmsCommandOutput } from "../commands/ListAlarmsCommand";
import { ListDetectorsCommandInput, ListDetectorsCommandOutput } from "../commands/ListDetectorsCommand";
import { IoTEventsDataServiceException as __BaseException } from "../models/IoTEventsDataServiceException";
import {
  AcknowledgeActionConfiguration,
  AcknowledgeAlarmActionRequest,
  Alarm,
  AlarmState,
  AlarmSummary,
  BatchAlarmActionErrorEntry,
  BatchDeleteDetectorErrorEntry,
  BatchPutMessageErrorEntry,
  BatchUpdateDetectorErrorEntry,
  CustomerAction,
  DeleteDetectorRequest,
  Detector,
  DetectorState,
  DetectorStateDefinition,
  DetectorStateSummary,
  DetectorSummary,
  DisableActionConfiguration,
  DisableAlarmActionRequest,
  EnableActionConfiguration,
  EnableAlarmActionRequest,
  InternalFailureException,
  InvalidRequestException,
  Message,
  ResetActionConfiguration,
  ResetAlarmActionRequest,
  ResourceNotFoundException,
  RuleEvaluation,
  ServiceUnavailableException,
  SimpleRuleEvaluation,
  SnoozeActionConfiguration,
  SnoozeAlarmActionRequest,
  StateChangeConfiguration,
  SystemEvent,
  ThrottlingException,
  Timer,
  TimerDefinition,
  TimestampValue,
  UpdateDetectorRequest,
  Variable,
  VariableDefinition,
} from "../models/models_0";

export const serializeAws_restJson1BatchAcknowledgeAlarmCommand = async (
  input: BatchAcknowledgeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/acknowledge";
  let body: any;
  body = JSON.stringify({
    ...(input.acknowledgeActionRequests != null && {
      acknowledgeActionRequests: serializeAws_restJson1AcknowledgeAlarmActionRequests(
        input.acknowledgeActionRequests,
        context
      ),
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

export const serializeAws_restJson1BatchDeleteDetectorCommand = async (
  input: BatchDeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detectors/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.detectors != null && {
      detectors: serializeAws_restJson1DeleteDetectorRequests(input.detectors, context),
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

export const serializeAws_restJson1BatchDisableAlarmCommand = async (
  input: BatchDisableAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.disableActionRequests != null && {
      disableActionRequests: serializeAws_restJson1DisableAlarmActionRequests(input.disableActionRequests, context),
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

export const serializeAws_restJson1BatchEnableAlarmCommand = async (
  input: BatchEnableAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.enableActionRequests != null && {
      enableActionRequests: serializeAws_restJson1EnableAlarmActionRequests(input.enableActionRequests, context),
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

export const serializeAws_restJson1BatchPutMessageCommand = async (
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs/messages";
  let body: any;
  body = JSON.stringify({
    ...(input.messages != null && { messages: serializeAws_restJson1Messages(input.messages, context) }),
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

export const serializeAws_restJson1BatchResetAlarmCommand = async (
  input: BatchResetAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/reset";
  let body: any;
  body = JSON.stringify({
    ...(input.resetActionRequests != null && {
      resetActionRequests: serializeAws_restJson1ResetAlarmActionRequests(input.resetActionRequests, context),
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

export const serializeAws_restJson1BatchSnoozeAlarmCommand = async (
  input: BatchSnoozeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/snooze";
  let body: any;
  body = JSON.stringify({
    ...(input.snoozeActionRequests != null && {
      snoozeActionRequests: serializeAws_restJson1SnoozeAlarmActionRequests(input.snoozeActionRequests, context),
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

export const serializeAws_restJson1BatchUpdateDetectorCommand = async (
  input: BatchUpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detectors";
  let body: any;
  body = JSON.stringify({
    ...(input.detectors != null && {
      detectors: serializeAws_restJson1UpdateDetectorRequests(input.detectors, context),
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

export const serializeAws_restJson1DescribeAlarmCommand = async (
  input: DescribeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/{alarmModelName}/keyValues";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "alarmModelName",
    () => input.alarmModelName!,
    "{alarmModelName}",
    false
  );
  const query: any = map({
    keyValue: [, input.keyValue!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detectors/{detectorModelName}/keyValues";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
    false
  );
  const query: any = map({
    keyValue: [, input.keyValue!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListAlarmsCommand = async (
  input: ListAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarms/{alarmModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "alarmModelName",
    () => input.alarmModelName!,
    "{alarmModelName}",
    false
  );
  const query: any = map({
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detectors/{detectorModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
    false
  );
  const query: any = map({
    stateName: [, input.stateName!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const deserializeAws_restJson1BatchAcknowledgeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAcknowledgeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAcknowledgeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchAcknowledgeAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAcknowledgeAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchDeleteDetectorErrorEntries != null) {
    contents.batchDeleteDetectorErrorEntries = deserializeAws_restJson1BatchDeleteDetectorErrorEntries(
      data.batchDeleteDetectorErrorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDisableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisableAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDisableAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchEnableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEnableAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchEnableAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchPutMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchPutMessageErrorEntries != null) {
    contents.BatchPutMessageErrorEntries = deserializeAws_restJson1BatchPutMessageErrorEntries(
      data.BatchPutMessageErrorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchPutMessageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchResetAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchResetAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchResetAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchResetAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchResetAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchSnoozeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSnoozeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchSnoozeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchSnoozeAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSnoozeAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchUpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchUpdateDetectorErrorEntries != null) {
    contents.batchUpdateDetectorErrorEntries = deserializeAws_restJson1BatchUpdateDetectorErrorEntries(
      data.batchUpdateDetectorErrorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarm != null) {
    contents.alarm = deserializeAws_restJson1Alarm(data.alarm, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAlarmCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detector != null) {
    contents.detector = deserializeAws_restJson1Detector(data.detector, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDetectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmSummaries != null) {
    contents.alarmSummaries = deserializeAws_restJson1AlarmSummaries(data.alarmSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAlarmsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorSummaries != null) {
    contents.detectorSummaries = deserializeAws_restJson1DetectorSummaries(data.detectorSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDetectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.ioteventsdata#InternalFailureException":
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalFailureException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AcknowledgeAlarmActionRequest = (
  input: AcknowledgeAlarmActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

const serializeAws_restJson1AcknowledgeAlarmActionRequests = (
  input: AcknowledgeAlarmActionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AcknowledgeAlarmActionRequest(entry, context);
    });
};

const serializeAws_restJson1DeleteDetectorRequest = (input: DeleteDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.messageId != null && { messageId: input.messageId }),
  };
};

const serializeAws_restJson1DeleteDetectorRequests = (input: DeleteDetectorRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DeleteDetectorRequest(entry, context);
    });
};

const serializeAws_restJson1DetectorStateDefinition = (
  input: DetectorStateDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.stateName != null && { stateName: input.stateName }),
    ...(input.timers != null && { timers: serializeAws_restJson1TimerDefinitions(input.timers, context) }),
    ...(input.variables != null && { variables: serializeAws_restJson1VariableDefinitions(input.variables, context) }),
  };
};

const serializeAws_restJson1DisableAlarmActionRequest = (
  input: DisableAlarmActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

const serializeAws_restJson1DisableAlarmActionRequests = (
  input: DisableAlarmActionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DisableAlarmActionRequest(entry, context);
    });
};

const serializeAws_restJson1EnableAlarmActionRequest = (
  input: EnableAlarmActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

const serializeAws_restJson1EnableAlarmActionRequests = (
  input: EnableAlarmActionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EnableAlarmActionRequest(entry, context);
    });
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.payload != null && { payload: context.base64Encoder(input.payload) }),
    ...(input.timestamp != null && { timestamp: serializeAws_restJson1TimestampValue(input.timestamp, context) }),
  };
};

const serializeAws_restJson1Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1ResetAlarmActionRequest = (
  input: ResetAlarmActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

const serializeAws_restJson1ResetAlarmActionRequests = (
  input: ResetAlarmActionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ResetAlarmActionRequest(entry, context);
    });
};

const serializeAws_restJson1SnoozeAlarmActionRequest = (
  input: SnoozeAlarmActionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
    ...(input.snoozeDuration != null && { snoozeDuration: input.snoozeDuration }),
  };
};

const serializeAws_restJson1SnoozeAlarmActionRequests = (
  input: SnoozeAlarmActionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SnoozeAlarmActionRequest(entry, context);
    });
};

const serializeAws_restJson1TimerDefinition = (input: TimerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.seconds != null && { seconds: input.seconds }),
  };
};

const serializeAws_restJson1TimerDefinitions = (input: TimerDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TimerDefinition(entry, context);
    });
};

const serializeAws_restJson1TimestampValue = (input: TimestampValue, context: __SerdeContext): any => {
  return {
    ...(input.timeInMillis != null && { timeInMillis: input.timeInMillis }),
  };
};

const serializeAws_restJson1UpdateDetectorRequest = (input: UpdateDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.state != null && { state: serializeAws_restJson1DetectorStateDefinition(input.state, context) }),
  };
};

const serializeAws_restJson1UpdateDetectorRequests = (input: UpdateDetectorRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1UpdateDetectorRequest(entry, context);
    });
};

const serializeAws_restJson1VariableDefinition = (input: VariableDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1VariableDefinitions = (input: VariableDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VariableDefinition(entry, context);
    });
};

const deserializeAws_restJson1AcknowledgeActionConfiguration = (
  output: any,
  context: __SerdeContext
): AcknowledgeActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

const deserializeAws_restJson1Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    alarmModelName: __expectString(output.alarmModelName),
    alarmModelVersion: __expectString(output.alarmModelVersion),
    alarmState: output.alarmState != null ? deserializeAws_restJson1AlarmState(output.alarmState, context) : undefined,
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    keyValue: __expectString(output.keyValue),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    severity: __expectInt32(output.severity),
  } as any;
};

const deserializeAws_restJson1AlarmState = (output: any, context: __SerdeContext): AlarmState => {
  return {
    customerAction:
      output.customerAction != null
        ? deserializeAws_restJson1CustomerAction(output.customerAction, context)
        : undefined,
    ruleEvaluation:
      output.ruleEvaluation != null
        ? deserializeAws_restJson1RuleEvaluation(output.ruleEvaluation, context)
        : undefined,
    stateName: __expectString(output.stateName),
    systemEvent:
      output.systemEvent != null ? deserializeAws_restJson1SystemEvent(output.systemEvent, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmSummaries = (output: any, context: __SerdeContext): AlarmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmSummary = (output: any, context: __SerdeContext): AlarmSummary => {
  return {
    alarmModelName: __expectString(output.alarmModelName),
    alarmModelVersion: __expectString(output.alarmModelVersion),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    keyValue: __expectString(output.keyValue),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    stateName: __expectString(output.stateName),
  } as any;
};

const deserializeAws_restJson1BatchAlarmActionErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchAlarmActionErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchAlarmActionErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchAlarmActionErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchAlarmActionErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    requestId: __expectString(output.requestId),
  } as any;
};

const deserializeAws_restJson1BatchDeleteDetectorErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchDeleteDetectorErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchDeleteDetectorErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchDeleteDetectorErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchDeleteDetectorErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

const deserializeAws_restJson1BatchPutMessageErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPutMessageErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchPutMessageErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchPutMessageErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

const deserializeAws_restJson1BatchUpdateDetectorErrorEntries = (
  output: any,
  context: __SerdeContext
): BatchUpdateDetectorErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchUpdateDetectorErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchUpdateDetectorErrorEntry = (
  output: any,
  context: __SerdeContext
): BatchUpdateDetectorErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

const deserializeAws_restJson1CustomerAction = (output: any, context: __SerdeContext): CustomerAction => {
  return {
    acknowledgeActionConfiguration:
      output.acknowledgeActionConfiguration != null
        ? deserializeAws_restJson1AcknowledgeActionConfiguration(output.acknowledgeActionConfiguration, context)
        : undefined,
    actionName: __expectString(output.actionName),
    disableActionConfiguration:
      output.disableActionConfiguration != null
        ? deserializeAws_restJson1DisableActionConfiguration(output.disableActionConfiguration, context)
        : undefined,
    enableActionConfiguration:
      output.enableActionConfiguration != null
        ? deserializeAws_restJson1EnableActionConfiguration(output.enableActionConfiguration, context)
        : undefined,
    resetActionConfiguration:
      output.resetActionConfiguration != null
        ? deserializeAws_restJson1ResetActionConfiguration(output.resetActionConfiguration, context)
        : undefined,
    snoozeActionConfiguration:
      output.snoozeActionConfiguration != null
        ? deserializeAws_restJson1SnoozeActionConfiguration(output.snoozeActionConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Detector = (output: any, context: __SerdeContext): Detector => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    keyValue: __expectString(output.keyValue),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    state: output.state != null ? deserializeAws_restJson1DetectorState(output.state, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DetectorState = (output: any, context: __SerdeContext): DetectorState => {
  return {
    stateName: __expectString(output.stateName),
    timers: output.timers != null ? deserializeAws_restJson1Timers(output.timers, context) : undefined,
    variables: output.variables != null ? deserializeAws_restJson1Variables(output.variables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DetectorStateSummary = (output: any, context: __SerdeContext): DetectorStateSummary => {
  return {
    stateName: __expectString(output.stateName),
  } as any;
};

const deserializeAws_restJson1DetectorSummaries = (output: any, context: __SerdeContext): DetectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectorSummary = (output: any, context: __SerdeContext): DetectorSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    keyValue: __expectString(output.keyValue),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    state: output.state != null ? deserializeAws_restJson1DetectorStateSummary(output.state, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DisableActionConfiguration = (
  output: any,
  context: __SerdeContext
): DisableActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

const deserializeAws_restJson1EnableActionConfiguration = (
  output: any,
  context: __SerdeContext
): EnableActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

const deserializeAws_restJson1ResetActionConfiguration = (
  output: any,
  context: __SerdeContext
): ResetActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

const deserializeAws_restJson1RuleEvaluation = (output: any, context: __SerdeContext): RuleEvaluation => {
  return {
    simpleRuleEvaluation:
      output.simpleRuleEvaluation != null
        ? deserializeAws_restJson1SimpleRuleEvaluation(output.simpleRuleEvaluation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SimpleRuleEvaluation = (output: any, context: __SerdeContext): SimpleRuleEvaluation => {
  return {
    inputPropertyValue: __expectString(output.inputPropertyValue),
    operator: __expectString(output.operator),
    thresholdValue: __expectString(output.thresholdValue),
  } as any;
};

const deserializeAws_restJson1SnoozeActionConfiguration = (
  output: any,
  context: __SerdeContext
): SnoozeActionConfiguration => {
  return {
    note: __expectString(output.note),
    snoozeDuration: __expectInt32(output.snoozeDuration),
  } as any;
};

const deserializeAws_restJson1StateChangeConfiguration = (
  output: any,
  context: __SerdeContext
): StateChangeConfiguration => {
  return {
    triggerType: __expectString(output.triggerType),
  } as any;
};

const deserializeAws_restJson1SystemEvent = (output: any, context: __SerdeContext): SystemEvent => {
  return {
    eventType: __expectString(output.eventType),
    stateChangeConfiguration:
      output.stateChangeConfiguration != null
        ? deserializeAws_restJson1StateChangeConfiguration(output.stateChangeConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Timer = (output: any, context: __SerdeContext): Timer => {
  return {
    name: __expectString(output.name),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
  } as any;
};

const deserializeAws_restJson1Timers = (output: any, context: __SerdeContext): Timer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Timer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Variable = (output: any, context: __SerdeContext): Variable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Variables = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Variable(entry, context);
    });
  return retVal;
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
