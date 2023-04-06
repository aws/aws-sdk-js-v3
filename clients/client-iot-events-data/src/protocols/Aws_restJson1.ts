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

/**
 * serializeAws_restJson1BatchAcknowledgeAlarmCommand
 */
export const se_BatchAcknowledgeAlarmCommand = async (
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
      acknowledgeActionRequests: se_AcknowledgeAlarmActionRequests(input.acknowledgeActionRequests, context),
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
 * serializeAws_restJson1BatchDeleteDetectorCommand
 */
export const se_BatchDeleteDetectorCommand = async (
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
    ...(input.detectors != null && { detectors: se_DeleteDetectorRequests(input.detectors, context) }),
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
 * serializeAws_restJson1BatchDisableAlarmCommand
 */
export const se_BatchDisableAlarmCommand = async (
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
      disableActionRequests: se_DisableAlarmActionRequests(input.disableActionRequests, context),
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
 * serializeAws_restJson1BatchEnableAlarmCommand
 */
export const se_BatchEnableAlarmCommand = async (
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
      enableActionRequests: se_EnableAlarmActionRequests(input.enableActionRequests, context),
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
 * serializeAws_restJson1BatchPutMessageCommand
 */
export const se_BatchPutMessageCommand = async (
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
    ...(input.messages != null && { messages: se_Messages(input.messages, context) }),
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
 * serializeAws_restJson1BatchResetAlarmCommand
 */
export const se_BatchResetAlarmCommand = async (
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
      resetActionRequests: se_ResetAlarmActionRequests(input.resetActionRequests, context),
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
 * serializeAws_restJson1BatchSnoozeAlarmCommand
 */
export const se_BatchSnoozeAlarmCommand = async (
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
      snoozeActionRequests: se_SnoozeAlarmActionRequests(input.snoozeActionRequests, context),
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
 * serializeAws_restJson1BatchUpdateDetectorCommand
 */
export const se_BatchUpdateDetectorCommand = async (
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
    ...(input.detectors != null && { detectors: se_UpdateDetectorRequests(input.detectors, context) }),
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
 * serializeAws_restJson1DescribeAlarmCommand
 */
export const se_DescribeAlarmCommand = async (
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

/**
 * serializeAws_restJson1DescribeDetectorCommand
 */
export const se_DescribeDetectorCommand = async (
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

/**
 * serializeAws_restJson1ListAlarmsCommand
 */
export const se_ListAlarmsCommand = async (
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

/**
 * serializeAws_restJson1ListDetectorsCommand
 */
export const se_ListDetectorsCommand = async (
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

/**
 * deserializeAws_restJson1BatchAcknowledgeAlarmCommand
 */
export const de_BatchAcknowledgeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAcknowledgeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BatchAcknowledgeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchAcknowledgeAlarmCommandError
 */
const de_BatchAcknowledgeAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchDeleteDetectorCommand
 */
export const de_BatchDeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchDeleteDetectorErrorEntries != null) {
    contents.batchDeleteDetectorErrorEntries = de_BatchDeleteDetectorErrorEntries(
      data.batchDeleteDetectorErrorEntries,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDetectorCommandError
 */
const de_BatchDeleteDetectorCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchDisableAlarmCommand
 */
export const de_BatchDisableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BatchDisableAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisableAlarmCommandError
 */
const de_BatchDisableAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchEnableAlarmCommand
 */
export const de_BatchEnableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BatchEnableAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchEnableAlarmCommandError
 */
const de_BatchEnableAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchPutMessageCommand
 */
export const de_BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchPutMessageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BatchPutMessageErrorEntries != null) {
    contents.BatchPutMessageErrorEntries = de_BatchPutMessageErrorEntries(data.BatchPutMessageErrorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutMessageCommandError
 */
const de_BatchPutMessageCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchResetAlarmCommand
 */
export const de_BatchResetAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchResetAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BatchResetAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchResetAlarmCommandError
 */
const de_BatchResetAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchSnoozeAlarmCommand
 */
export const de_BatchSnoozeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSnoozeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BatchSnoozeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_BatchAlarmActionErrorEntries(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchSnoozeAlarmCommandError
 */
const de_BatchSnoozeAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1BatchUpdateDetectorCommand
 */
export const de_BatchUpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.batchUpdateDetectorErrorEntries != null) {
    contents.batchUpdateDetectorErrorEntries = de_BatchUpdateDetectorErrorEntries(
      data.batchUpdateDetectorErrorEntries,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateDetectorCommandError
 */
const de_BatchUpdateDetectorCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeAlarmCommand
 */
export const de_DescribeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAlarmCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarm != null) {
    contents.alarm = de_Alarm(data.alarm, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAlarmCommandError
 */
const de_DescribeAlarmCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeDetectorCommand
 */
export const de_DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDetectorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detector != null) {
    contents.detector = de_Detector(data.detector, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorCommandError
 */
const de_DescribeDetectorCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListAlarmsCommand
 */
export const de_ListAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlarmsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmSummaries != null) {
    contents.alarmSummaries = de_AlarmSummaries(data.alarmSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmsCommandError
 */
const de_ListAlarmsCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListDetectorsCommand
 */
export const de_ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDetectorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorSummaries != null) {
    contents.detectorSummaries = de_DetectorSummaries(data.detectorSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorsCommandError
 */
const de_ListDetectorsCommandError = async (
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
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.ioteventsdata#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.ioteventsdata#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.ioteventsdata#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
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

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
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

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
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

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
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

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
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

/**
 * serializeAws_restJson1AcknowledgeAlarmActionRequest
 */
const se_AcknowledgeAlarmActionRequest = (input: AcknowledgeAlarmActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

/**
 * serializeAws_restJson1AcknowledgeAlarmActionRequests
 */
const se_AcknowledgeAlarmActionRequests = (input: AcknowledgeAlarmActionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AcknowledgeAlarmActionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1DeleteDetectorRequest
 */
const se_DeleteDetectorRequest = (input: DeleteDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.messageId != null && { messageId: input.messageId }),
  };
};

/**
 * serializeAws_restJson1DeleteDetectorRequests
 */
const se_DeleteDetectorRequests = (input: DeleteDetectorRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DeleteDetectorRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1DetectorStateDefinition
 */
const se_DetectorStateDefinition = (input: DetectorStateDefinition, context: __SerdeContext): any => {
  return {
    ...(input.stateName != null && { stateName: input.stateName }),
    ...(input.timers != null && { timers: se_TimerDefinitions(input.timers, context) }),
    ...(input.variables != null && { variables: se_VariableDefinitions(input.variables, context) }),
  };
};

/**
 * serializeAws_restJson1DisableAlarmActionRequest
 */
const se_DisableAlarmActionRequest = (input: DisableAlarmActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

/**
 * serializeAws_restJson1DisableAlarmActionRequests
 */
const se_DisableAlarmActionRequests = (input: DisableAlarmActionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DisableAlarmActionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1EnableAlarmActionRequest
 */
const se_EnableAlarmActionRequest = (input: EnableAlarmActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

/**
 * serializeAws_restJson1EnableAlarmActionRequests
 */
const se_EnableAlarmActionRequests = (input: EnableAlarmActionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnableAlarmActionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.payload != null && { payload: context.base64Encoder(input.payload) }),
    ...(input.timestamp != null && { timestamp: se_TimestampValue(input.timestamp, context) }),
  };
};

/**
 * serializeAws_restJson1Messages
 */
const se_Messages = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Message(entry, context);
    });
};

/**
 * serializeAws_restJson1ResetAlarmActionRequest
 */
const se_ResetAlarmActionRequest = (input: ResetAlarmActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
  };
};

/**
 * serializeAws_restJson1ResetAlarmActionRequests
 */
const se_ResetAlarmActionRequests = (input: ResetAlarmActionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ResetAlarmActionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1SnoozeAlarmActionRequest
 */
const se_SnoozeAlarmActionRequest = (input: SnoozeAlarmActionRequest, context: __SerdeContext): any => {
  return {
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.note != null && { note: input.note }),
    ...(input.requestId != null && { requestId: input.requestId }),
    ...(input.snoozeDuration != null && { snoozeDuration: input.snoozeDuration }),
  };
};

/**
 * serializeAws_restJson1SnoozeAlarmActionRequests
 */
const se_SnoozeAlarmActionRequests = (input: SnoozeAlarmActionRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SnoozeAlarmActionRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1TimerDefinition
 */
const se_TimerDefinition = (input: TimerDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.seconds != null && { seconds: input.seconds }),
  };
};

/**
 * serializeAws_restJson1TimerDefinitions
 */
const se_TimerDefinitions = (input: TimerDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TimerDefinition(entry, context);
    });
};

/**
 * serializeAws_restJson1TimestampValue
 */
const se_TimestampValue = (input: TimestampValue, context: __SerdeContext): any => {
  return {
    ...(input.timeInMillis != null && { timeInMillis: input.timeInMillis }),
  };
};

/**
 * serializeAws_restJson1UpdateDetectorRequest
 */
const se_UpdateDetectorRequest = (input: UpdateDetectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
    ...(input.messageId != null && { messageId: input.messageId }),
    ...(input.state != null && { state: se_DetectorStateDefinition(input.state, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateDetectorRequests
 */
const se_UpdateDetectorRequests = (input: UpdateDetectorRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_UpdateDetectorRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1VariableDefinition
 */
const se_VariableDefinition = (input: VariableDefinition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1VariableDefinitions
 */
const se_VariableDefinitions = (input: VariableDefinition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VariableDefinition(entry, context);
    });
};

/**
 * deserializeAws_restJson1AcknowledgeActionConfiguration
 */
const de_AcknowledgeActionConfiguration = (output: any, context: __SerdeContext): AcknowledgeActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

/**
 * deserializeAws_restJson1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return {
    alarmModelName: __expectString(output.alarmModelName),
    alarmModelVersion: __expectString(output.alarmModelVersion),
    alarmState: output.alarmState != null ? de_AlarmState(output.alarmState, context) : undefined,
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

/**
 * deserializeAws_restJson1AlarmState
 */
const de_AlarmState = (output: any, context: __SerdeContext): AlarmState => {
  return {
    customerAction: output.customerAction != null ? de_CustomerAction(output.customerAction, context) : undefined,
    ruleEvaluation: output.ruleEvaluation != null ? de_RuleEvaluation(output.ruleEvaluation, context) : undefined,
    stateName: __expectString(output.stateName),
    systemEvent: output.systemEvent != null ? de_SystemEvent(output.systemEvent, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmSummaries
 */
const de_AlarmSummaries = (output: any, context: __SerdeContext): AlarmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmSummary
 */
const de_AlarmSummary = (output: any, context: __SerdeContext): AlarmSummary => {
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

/**
 * deserializeAws_restJson1BatchAlarmActionErrorEntries
 */
const de_BatchAlarmActionErrorEntries = (output: any, context: __SerdeContext): BatchAlarmActionErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchAlarmActionErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchAlarmActionErrorEntry
 */
const de_BatchAlarmActionErrorEntry = (output: any, context: __SerdeContext): BatchAlarmActionErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    requestId: __expectString(output.requestId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchDeleteDetectorErrorEntries
 */
const de_BatchDeleteDetectorErrorEntries = (output: any, context: __SerdeContext): BatchDeleteDetectorErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchDeleteDetectorErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchDeleteDetectorErrorEntry
 */
const de_BatchDeleteDetectorErrorEntry = (output: any, context: __SerdeContext): BatchDeleteDetectorErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchPutMessageErrorEntries
 */
const de_BatchPutMessageErrorEntries = (output: any, context: __SerdeContext): BatchPutMessageErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPutMessageErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPutMessageErrorEntry
 */
const de_BatchPutMessageErrorEntry = (output: any, context: __SerdeContext): BatchPutMessageErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

/**
 * deserializeAws_restJson1BatchUpdateDetectorErrorEntries
 */
const de_BatchUpdateDetectorErrorEntries = (output: any, context: __SerdeContext): BatchUpdateDetectorErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchUpdateDetectorErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchUpdateDetectorErrorEntry
 */
const de_BatchUpdateDetectorErrorEntry = (output: any, context: __SerdeContext): BatchUpdateDetectorErrorEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    messageId: __expectString(output.messageId),
  } as any;
};

/**
 * deserializeAws_restJson1CustomerAction
 */
const de_CustomerAction = (output: any, context: __SerdeContext): CustomerAction => {
  return {
    acknowledgeActionConfiguration:
      output.acknowledgeActionConfiguration != null
        ? de_AcknowledgeActionConfiguration(output.acknowledgeActionConfiguration, context)
        : undefined,
    actionName: __expectString(output.actionName),
    disableActionConfiguration:
      output.disableActionConfiguration != null
        ? de_DisableActionConfiguration(output.disableActionConfiguration, context)
        : undefined,
    enableActionConfiguration:
      output.enableActionConfiguration != null
        ? de_EnableActionConfiguration(output.enableActionConfiguration, context)
        : undefined,
    resetActionConfiguration:
      output.resetActionConfiguration != null
        ? de_ResetActionConfiguration(output.resetActionConfiguration, context)
        : undefined,
    snoozeActionConfiguration:
      output.snoozeActionConfiguration != null
        ? de_SnoozeActionConfiguration(output.snoozeActionConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Detector
 */
const de_Detector = (output: any, context: __SerdeContext): Detector => {
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
    state: output.state != null ? de_DetectorState(output.state, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorState
 */
const de_DetectorState = (output: any, context: __SerdeContext): DetectorState => {
  return {
    stateName: __expectString(output.stateName),
    timers: output.timers != null ? de_Timers(output.timers, context) : undefined,
    variables: output.variables != null ? de_Variables(output.variables, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorStateSummary
 */
const de_DetectorStateSummary = (output: any, context: __SerdeContext): DetectorStateSummary => {
  return {
    stateName: __expectString(output.stateName),
  } as any;
};

/**
 * deserializeAws_restJson1DetectorSummaries
 */
const de_DetectorSummaries = (output: any, context: __SerdeContext): DetectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorSummary
 */
const de_DetectorSummary = (output: any, context: __SerdeContext): DetectorSummary => {
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
    state: output.state != null ? de_DetectorStateSummary(output.state, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DisableActionConfiguration
 */
const de_DisableActionConfiguration = (output: any, context: __SerdeContext): DisableActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

/**
 * deserializeAws_restJson1EnableActionConfiguration
 */
const de_EnableActionConfiguration = (output: any, context: __SerdeContext): EnableActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

/**
 * deserializeAws_restJson1ResetActionConfiguration
 */
const de_ResetActionConfiguration = (output: any, context: __SerdeContext): ResetActionConfiguration => {
  return {
    note: __expectString(output.note),
  } as any;
};

/**
 * deserializeAws_restJson1RuleEvaluation
 */
const de_RuleEvaluation = (output: any, context: __SerdeContext): RuleEvaluation => {
  return {
    simpleRuleEvaluation:
      output.simpleRuleEvaluation != null ? de_SimpleRuleEvaluation(output.simpleRuleEvaluation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SimpleRuleEvaluation
 */
const de_SimpleRuleEvaluation = (output: any, context: __SerdeContext): SimpleRuleEvaluation => {
  return {
    inputPropertyValue: __expectString(output.inputPropertyValue),
    operator: __expectString(output.operator),
    thresholdValue: __expectString(output.thresholdValue),
  } as any;
};

/**
 * deserializeAws_restJson1SnoozeActionConfiguration
 */
const de_SnoozeActionConfiguration = (output: any, context: __SerdeContext): SnoozeActionConfiguration => {
  return {
    note: __expectString(output.note),
    snoozeDuration: __expectInt32(output.snoozeDuration),
  } as any;
};

/**
 * deserializeAws_restJson1StateChangeConfiguration
 */
const de_StateChangeConfiguration = (output: any, context: __SerdeContext): StateChangeConfiguration => {
  return {
    triggerType: __expectString(output.triggerType),
  } as any;
};

/**
 * deserializeAws_restJson1SystemEvent
 */
const de_SystemEvent = (output: any, context: __SerdeContext): SystemEvent => {
  return {
    eventType: __expectString(output.eventType),
    stateChangeConfiguration:
      output.stateChangeConfiguration != null
        ? de_StateChangeConfiguration(output.stateChangeConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Timer
 */
const de_Timer = (output: any, context: __SerdeContext): Timer => {
  return {
    name: __expectString(output.name),
    timestamp:
      output.timestamp != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.timestamp))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Timers
 */
const de_Timers = (output: any, context: __SerdeContext): Timer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Timer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Variable
 */
const de_Variable = (output: any, context: __SerdeContext): Variable => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Variables
 */
const de_Variables = (output: any, context: __SerdeContext): Variable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Variable(entry, context);
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
