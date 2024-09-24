// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  AcknowledgeAlarmActionRequest,
  Alarm,
  AlarmSummary,
  DeleteDetectorRequest,
  Detector,
  DetectorState,
  DetectorStateDefinition,
  DetectorSummary,
  DisableAlarmActionRequest,
  EnableAlarmActionRequest,
  InternalFailureException,
  InvalidRequestException,
  Message,
  ResetAlarmActionRequest,
  ResourceNotFoundException,
  ServiceUnavailableException,
  SnoozeAlarmActionRequest,
  ThrottlingException,
  Timer,
  TimerDefinition,
  TimestampValue,
  UpdateDetectorRequest,
  VariableDefinition,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchAcknowledgeAlarmCommand
 */
export const se_BatchAcknowledgeAlarmCommand = async (
  input: BatchAcknowledgeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarms/acknowledge");
  let body: any;
  body = JSON.stringify(
    take(input, {
      acknowledgeActionRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDeleteDetectorCommand
 */
export const se_BatchDeleteDetectorCommand = async (
  input: BatchDeleteDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/detectors/delete");
  let body: any;
  body = JSON.stringify(
    take(input, {
      detectors: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchDisableAlarmCommand
 */
export const se_BatchDisableAlarmCommand = async (
  input: BatchDisableAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarms/disable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      disableActionRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchEnableAlarmCommand
 */
export const se_BatchEnableAlarmCommand = async (
  input: BatchEnableAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarms/enable");
  let body: any;
  body = JSON.stringify(
    take(input, {
      enableActionRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchPutMessageCommand
 */
export const se_BatchPutMessageCommand = async (
  input: BatchPutMessageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/inputs/messages");
  let body: any;
  body = JSON.stringify(
    take(input, {
      messages: (_) => se_Messages(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchResetAlarmCommand
 */
export const se_BatchResetAlarmCommand = async (
  input: BatchResetAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarms/reset");
  let body: any;
  body = JSON.stringify(
    take(input, {
      resetActionRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchSnoozeAlarmCommand
 */
export const se_BatchSnoozeAlarmCommand = async (
  input: BatchSnoozeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarms/snooze");
  let body: any;
  body = JSON.stringify(
    take(input, {
      snoozeActionRequests: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1BatchUpdateDetectorCommand
 */
export const se_BatchUpdateDetectorCommand = async (
  input: BatchUpdateDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/detectors");
  let body: any;
  body = JSON.stringify(
    take(input, {
      detectors: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAlarmCommand
 */
export const se_DescribeAlarmCommand = async (
  input: DescribeAlarmCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarms/{alarmModelName}/keyValues");
  b.p("alarmModelName", () => input.alarmModelName!, "{alarmModelName}", false);
  const query: any = map({
    [_kV]: [, input[_kV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDetectorCommand
 */
export const se_DescribeDetectorCommand = async (
  input: DescribeDetectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detectors/{detectorModelName}/keyValues");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  const query: any = map({
    [_kV]: [, input[_kV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAlarmsCommand
 */
export const se_ListAlarmsCommand = async (
  input: ListAlarmsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarms/{alarmModelName}");
  b.p("alarmModelName", () => input.alarmModelName!, "{alarmModelName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDetectorsCommand
 */
export const se_ListDetectorsCommand = async (
  input: ListDetectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detectors/{detectorModelName}");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  const query: any = map({
    [_sN]: [, input[_sN]!],
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1BatchAcknowledgeAlarmCommand
 */
export const de_BatchAcknowledgeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAcknowledgeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteDetectorCommand
 */
export const de_BatchDeleteDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    batchDeleteDetectorErrorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisableAlarmCommand
 */
export const de_BatchDisableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchEnableAlarmCommand
 */
export const de_BatchEnableAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchPutMessageCommand
 */
export const de_BatchPutMessageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchPutMessageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BatchPutMessageErrorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchResetAlarmCommand
 */
export const de_BatchResetAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchResetAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchSnoozeAlarmCommand
 */
export const de_BatchSnoozeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchSnoozeAlarmCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    errorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateDetectorCommand
 */
export const de_BatchUpdateDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    batchUpdateDetectorErrorEntries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAlarmCommand
 */
export const de_DescribeAlarmCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarm: (_) => de_Alarm(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorCommand
 */
export const de_DescribeDetectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detector: (_) => de_Detector(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmsCommand
 */
export const de_ListAlarmsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmSummaries: (_) => de_AlarmSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorsCommand
 */
export const de_ListDetectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorSummaries: (_) => de_DetectorSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.ioteventsdata#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1InternalFailureExceptionRes
 */
const de_InternalFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AcknowledgeAlarmActionRequest omitted.

// se_AcknowledgeAlarmActionRequests omitted.

// se_DeleteDetectorRequest omitted.

// se_DeleteDetectorRequests omitted.

// se_DetectorStateDefinition omitted.

// se_DisableAlarmActionRequest omitted.

// se_DisableAlarmActionRequests omitted.

// se_EnableAlarmActionRequest omitted.

// se_EnableAlarmActionRequests omitted.

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return take(input, {
    inputName: [],
    messageId: [],
    payload: context.base64Encoder,
    timestamp: _json,
  });
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

// se_ResetAlarmActionRequest omitted.

// se_ResetAlarmActionRequests omitted.

// se_SnoozeAlarmActionRequest omitted.

// se_SnoozeAlarmActionRequests omitted.

// se_TimerDefinition omitted.

// se_TimerDefinitions omitted.

// se_TimestampValue omitted.

// se_UpdateDetectorRequest omitted.

// se_UpdateDetectorRequests omitted.

// se_VariableDefinition omitted.

// se_VariableDefinitions omitted.

// de_AcknowledgeActionConfiguration omitted.

/**
 * deserializeAws_restJson1Alarm
 */
const de_Alarm = (output: any, context: __SerdeContext): Alarm => {
  return take(output, {
    alarmModelName: __expectString,
    alarmModelVersion: __expectString,
    alarmState: _json,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    keyValue: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    severity: __expectInt32,
  }) as any;
};

// de_AlarmState omitted.

/**
 * deserializeAws_restJson1AlarmSummaries
 */
const de_AlarmSummaries = (output: any, context: __SerdeContext): AlarmSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmSummary
 */
const de_AlarmSummary = (output: any, context: __SerdeContext): AlarmSummary => {
  return take(output, {
    alarmModelName: __expectString,
    alarmModelVersion: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    keyValue: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    stateName: __expectString,
  }) as any;
};

// de_BatchAlarmActionErrorEntries omitted.

// de_BatchAlarmActionErrorEntry omitted.

// de_BatchDeleteDetectorErrorEntries omitted.

// de_BatchDeleteDetectorErrorEntry omitted.

// de_BatchPutMessageErrorEntries omitted.

// de_BatchPutMessageErrorEntry omitted.

// de_BatchUpdateDetectorErrorEntries omitted.

// de_BatchUpdateDetectorErrorEntry omitted.

// de_CustomerAction omitted.

/**
 * deserializeAws_restJson1Detector
 */
const de_Detector = (output: any, context: __SerdeContext): Detector => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    detectorModelName: __expectString,
    detectorModelVersion: __expectString,
    keyValue: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: (_: any) => de_DetectorState(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DetectorState
 */
const de_DetectorState = (output: any, context: __SerdeContext): DetectorState => {
  return take(output, {
    stateName: __expectString,
    timers: (_: any) => de_Timers(_, context),
    variables: _json,
  }) as any;
};

// de_DetectorStateSummary omitted.

/**
 * deserializeAws_restJson1DetectorSummaries
 */
const de_DetectorSummaries = (output: any, context: __SerdeContext): DetectorSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DetectorSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorSummary
 */
const de_DetectorSummary = (output: any, context: __SerdeContext): DetectorSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    detectorModelName: __expectString,
    detectorModelVersion: __expectString,
    keyValue: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    state: _json,
  }) as any;
};

// de_DisableActionConfiguration omitted.

// de_EnableActionConfiguration omitted.

// de_ResetActionConfiguration omitted.

// de_RuleEvaluation omitted.

// de_SimpleRuleEvaluation omitted.

// de_SnoozeActionConfiguration omitted.

// de_StateChangeConfiguration omitted.

// de_SystemEvent omitted.

/**
 * deserializeAws_restJson1Timer
 */
const de_Timer = (output: any, context: __SerdeContext): Timer => {
  return take(output, {
    name: __expectString,
    timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Timers
 */
const de_Timers = (output: any, context: __SerdeContext): Timer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Timer(entry, context);
    });
  return retVal;
};

// de_Variable omitted.

// de_Variables omitted.

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

const _kV = "keyValue";
const _mR = "maxResults";
const _nT = "nextToken";
const _sN = "stateName";
