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

import { CreateAlarmModelCommandInput, CreateAlarmModelCommandOutput } from "../commands/CreateAlarmModelCommand";
import {
  CreateDetectorModelCommandInput,
  CreateDetectorModelCommandOutput,
} from "../commands/CreateDetectorModelCommand";
import { CreateInputCommandInput, CreateInputCommandOutput } from "../commands/CreateInputCommand";
import { DeleteAlarmModelCommandInput, DeleteAlarmModelCommandOutput } from "../commands/DeleteAlarmModelCommand";
import {
  DeleteDetectorModelCommandInput,
  DeleteDetectorModelCommandOutput,
} from "../commands/DeleteDetectorModelCommand";
import { DeleteInputCommandInput, DeleteInputCommandOutput } from "../commands/DeleteInputCommand";
import { DescribeAlarmModelCommandInput, DescribeAlarmModelCommandOutput } from "../commands/DescribeAlarmModelCommand";
import {
  DescribeDetectorModelAnalysisCommandInput,
  DescribeDetectorModelAnalysisCommandOutput,
} from "../commands/DescribeDetectorModelAnalysisCommand";
import {
  DescribeDetectorModelCommandInput,
  DescribeDetectorModelCommandOutput,
} from "../commands/DescribeDetectorModelCommand";
import { DescribeInputCommandInput, DescribeInputCommandOutput } from "../commands/DescribeInputCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "../commands/DescribeLoggingOptionsCommand";
import {
  GetDetectorModelAnalysisResultsCommandInput,
  GetDetectorModelAnalysisResultsCommandOutput,
} from "../commands/GetDetectorModelAnalysisResultsCommand";
import { ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput } from "../commands/ListAlarmModelsCommand";
import {
  ListAlarmModelVersionsCommandInput,
  ListAlarmModelVersionsCommandOutput,
} from "../commands/ListAlarmModelVersionsCommand";
import { ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput } from "../commands/ListDetectorModelsCommand";
import {
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
} from "../commands/ListDetectorModelVersionsCommand";
import { ListInputRoutingsCommandInput, ListInputRoutingsCommandOutput } from "../commands/ListInputRoutingsCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "../commands/ListInputsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "../commands/PutLoggingOptionsCommand";
import {
  StartDetectorModelAnalysisCommandInput,
  StartDetectorModelAnalysisCommandOutput,
} from "../commands/StartDetectorModelAnalysisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAlarmModelCommandInput, UpdateAlarmModelCommandOutput } from "../commands/UpdateAlarmModelCommand";
import {
  UpdateDetectorModelCommandInput,
  UpdateDetectorModelCommandOutput,
} from "../commands/UpdateDetectorModelCommand";
import { UpdateInputCommandInput, UpdateInputCommandOutput } from "../commands/UpdateInputCommand";
import { IoTEventsServiceException as __BaseException } from "../models/IoTEventsServiceException";
import {
  AcknowledgeFlow,
  Action,
  AlarmAction,
  AlarmCapabilities,
  AlarmEventActions,
  AlarmModelSummary,
  AlarmModelVersionSummary,
  AlarmNotification,
  AlarmRule,
  AssetPropertyTimestamp,
  AssetPropertyValue,
  AssetPropertyVariant,
  Attribute,
  ClearTimerAction,
  DetectorDebugOption,
  DetectorModel,
  DetectorModelConfiguration,
  DetectorModelDefinition,
  DetectorModelSummary,
  DetectorModelVersionSummary,
  DynamoDBAction,
  DynamoDBv2Action,
  EmailConfiguration,
  EmailContent,
  EmailRecipients,
  Event,
  FirehoseAction,
  InitializationConfiguration,
  Input,
  InputConfiguration,
  InputDefinition,
  InputIdentifier,
  InputSummary,
  InternalFailureException,
  InvalidRequestException,
  IotEventsAction,
  IotEventsInputIdentifier,
  IotSiteWiseAction,
  IotSiteWiseAssetModelPropertyIdentifier,
  IotSiteWiseInputIdentifier,
  IotTopicPublishAction,
  LambdaAction,
  LimitExceededException,
  LoggingOptions,
  NotificationAction,
  NotificationTargetActions,
  OnEnterLifecycle,
  OnExitLifecycle,
  OnInputLifecycle,
  Payload,
  RecipientDetail,
  ResetTimerAction,
  ResourceAlreadyExistsException,
  ResourceInUseException,
  ResourceNotFoundException,
  ServiceUnavailableException,
  SetTimerAction,
  SetVariableAction,
  SimpleRule,
  SMSConfiguration,
  SNSTopicPublishAction,
  SqsAction,
  SSOIdentity,
  State,
  Tag,
  ThrottlingException,
  TransitionEvent,
  UnsupportedOperationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateAlarmModelCommand
 */
export const se_CreateAlarmModelCommand = async (
  input: CreateAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarm-models");
  let body: any;
  body = JSON.stringify(
    take(input, {
      alarmCapabilities: (_) => _json(_),
      alarmEventActions: (_) => _json(_),
      alarmModelDescription: [],
      alarmModelName: [],
      alarmNotification: (_) => _json(_),
      alarmRule: (_) => _json(_),
      key: [],
      roleArn: [],
      severity: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDetectorModelCommand
 */
export const se_CreateDetectorModelCommand = async (
  input: CreateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/detector-models");
  let body: any;
  body = JSON.stringify(
    take(input, {
      detectorModelDefinition: (_) => se_DetectorModelDefinition(_, context),
      detectorModelDescription: [],
      detectorModelName: [],
      evaluationMethod: [],
      key: [],
      roleArn: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateInputCommand
 */
export const se_CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/inputs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      inputDefinition: (_) => _json(_),
      inputDescription: [],
      inputName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAlarmModelCommand
 */
export const se_DeleteAlarmModelCommand = async (
  input: DeleteAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarm-models/{alarmModelName}");
  b.p("alarmModelName", () => input.alarmModelName!, "{alarmModelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDetectorModelCommand
 */
export const se_DeleteDetectorModelCommand = async (
  input: DeleteDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detector-models/{detectorModelName}");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteInputCommand
 */
export const se_DeleteInputCommand = async (
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inputs/{inputName}");
  b.p("inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeAlarmModelCommand
 */
export const se_DescribeAlarmModelCommand = async (
  input: DescribeAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarm-models/{alarmModelName}");
  b.p("alarmModelName", () => input.alarmModelName!, "{alarmModelName}", false);
  const query: any = map({
    [_v]: [, input[_aMV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDetectorModelCommand
 */
export const se_DescribeDetectorModelCommand = async (
  input: DescribeDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detector-models/{detectorModelName}");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  const query: any = map({
    [_v]: [, input[_dMV]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeDetectorModelAnalysisCommand
 */
export const se_DescribeDetectorModelAnalysisCommand = async (
  input: DescribeDetectorModelAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analysis/detector-models/{analysisId}");
  b.p("analysisId", () => input.analysisId!, "{analysisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeInputCommand
 */
export const se_DescribeInputCommand = async (
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inputs/{inputName}");
  b.p("inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const se_DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/logging");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDetectorModelAnalysisResultsCommand
 */
export const se_GetDetectorModelAnalysisResultsCommand = async (
  input: GetDetectorModelAnalysisResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/analysis/detector-models/{analysisId}/results");
  b.p("analysisId", () => input.analysisId!, "{analysisId}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAlarmModelsCommand
 */
export const se_ListAlarmModelsCommand = async (
  input: ListAlarmModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarm-models");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAlarmModelVersionsCommand
 */
export const se_ListAlarmModelVersionsCommand = async (
  input: ListAlarmModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/alarm-models/{alarmModelName}/versions");
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
 * serializeAws_restJson1ListDetectorModelsCommand
 */
export const se_ListDetectorModelsCommand = async (
  input: ListDetectorModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detector-models");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDetectorModelVersionsCommand
 */
export const se_ListDetectorModelVersionsCommand = async (
  input: ListDetectorModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/detector-models/{detectorModelName}/versions");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInputRoutingsCommand
 */
export const se_ListInputRoutingsCommand = async (
  input: ListInputRoutingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/input-routings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      inputIdentifier: (_) => _json(_),
      maxResults: [],
      nextToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListInputsCommand
 */
export const se_ListInputsCommand = async (
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/inputs");
  const query: any = map({
    [_nT]: [, input[_nT]!],
    [_mR]: [() => input.maxResults !== void 0, () => input[_mR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logging");
  let body: any;
  body = JSON.stringify(
    take(input, {
      loggingOptions: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartDetectorModelAnalysisCommand
 */
export const se_StartDetectorModelAnalysisCommand = async (
  input: StartDetectorModelAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/analysis/detector-models");
  let body: any;
  body = JSON.stringify(
    take(input, {
      detectorModelDefinition: (_) => se_DetectorModelDefinition(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags");
  const query: any = map({
    [_rA]: [, __expectNonNull(input[_rA]!, `resourceArn`)],
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateAlarmModelCommand
 */
export const se_UpdateAlarmModelCommand = async (
  input: UpdateAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/alarm-models/{alarmModelName}");
  b.p("alarmModelName", () => input.alarmModelName!, "{alarmModelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      alarmCapabilities: (_) => _json(_),
      alarmEventActions: (_) => _json(_),
      alarmModelDescription: [],
      alarmNotification: (_) => _json(_),
      alarmRule: (_) => _json(_),
      roleArn: [],
      severity: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDetectorModelCommand
 */
export const se_UpdateDetectorModelCommand = async (
  input: UpdateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/detector-models/{detectorModelName}");
  b.p("detectorModelName", () => input.detectorModelName!, "{detectorModelName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      detectorModelDefinition: (_) => se_DetectorModelDefinition(_, context),
      detectorModelDescription: [],
      evaluationMethod: [],
      roleArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateInputCommand
 */
export const se_UpdateInputCommand = async (
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/inputs/{inputName}");
  b.p("inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      inputDefinition: (_) => _json(_),
      inputDescription: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CreateAlarmModelCommand
 */
export const de_CreateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmModelArn: __expectString,
    alarmModelVersion: __expectString,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDetectorModelCommand
 */
export const de_CreateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorModelConfiguration: (_) => de_DetectorModelConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateInputCommand
 */
export const de_CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inputConfiguration: (_) => de_InputConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAlarmModelCommand
 */
export const de_DeleteAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDetectorModelCommand
 */
export const de_DeleteDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInputCommand
 */
export const de_DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAlarmModelCommand
 */
export const de_DescribeAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmCapabilities: _json,
    alarmEventActions: _json,
    alarmModelArn: __expectString,
    alarmModelDescription: __expectString,
    alarmModelName: __expectString,
    alarmModelVersion: __expectString,
    alarmNotification: _json,
    alarmRule: _json,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    key: __expectString,
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    severity: __expectInt32,
    status: __expectString,
    statusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorModelCommand
 */
export const de_DescribeDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorModel: (_) => de_DetectorModel(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorModelAnalysisCommand
 */
export const de_DescribeDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputCommand
 */
export const de_DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    input: (_) => de_Input(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const de_DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    loggingOptions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand
 */
export const de_GetDetectorModelAnalysisResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisResults: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmModelsCommand
 */
export const de_ListAlarmModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmModelSummaries: (_) => de_AlarmModelSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmModelVersionsCommand
 */
export const de_ListAlarmModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmModelVersionSummaries: (_) => de_AlarmModelVersionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorModelsCommand
 */
export const de_ListDetectorModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorModelSummaries: (_) => de_DetectorModelSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorModelVersionsCommand
 */
export const de_ListDetectorModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorModelVersionSummaries: (_) => de_DetectorModelVersionSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInputRoutingsCommand
 */
export const de_ListInputRoutingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    routedResources: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListInputsCommand
 */
export const de_ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inputSummaries: (_) => de_InputSummaries(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartDetectorModelAnalysisCommand
 */
export const de_StartDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    analysisId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAlarmModelCommand
 */
export const de_UpdateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    alarmModelArn: __expectString,
    alarmModelVersion: __expectString,
    creationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDetectorModelCommand
 */
export const de_UpdateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    detectorModelConfiguration: (_) => de_DetectorModelConfiguration(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInputCommand
 */
export const de_UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    inputConfiguration: (_) => de_InputConfiguration(_, context),
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
    case "com.amazonaws.iotevents#InternalFailureException":
      throw await de_InternalFailureExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceAlreadyExistsExceptionRes
 */
const de_ResourceAlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceArn: __expectString,
    resourceId: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceAlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceInUseException({
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

/**
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AcknowledgeFlow omitted.

// se_Action omitted.

// se_Actions omitted.

// se_AlarmAction omitted.

// se_AlarmActions omitted.

// se_AlarmCapabilities omitted.

// se_AlarmEventActions omitted.

// se_AlarmNotification omitted.

// se_AlarmRule omitted.

// se_AssetPropertyTimestamp omitted.

// se_AssetPropertyValue omitted.

// se_AssetPropertyVariant omitted.

// se_Attribute omitted.

// se_Attributes omitted.

// se_ClearTimerAction omitted.

// se_DetectorDebugOption omitted.

// se_DetectorDebugOptions omitted.

/**
 * serializeAws_restJson1DetectorModelDefinition
 */
const se_DetectorModelDefinition = (input: DetectorModelDefinition, context: __SerdeContext): any => {
  return take(input, {
    initialStateName: [],
    states: _json,
  });
};

// se_DynamoDBAction omitted.

// se_DynamoDBv2Action omitted.

// se_EmailConfiguration omitted.

// se_EmailConfigurations omitted.

// se_EmailContent omitted.

// se_EmailRecipients omitted.

// se_Event omitted.

// se_Events omitted.

// se_FirehoseAction omitted.

// se_InitializationConfiguration omitted.

// se_InputDefinition omitted.

// se_InputIdentifier omitted.

// se_IotEventsAction omitted.

// se_IotEventsInputIdentifier omitted.

// se_IotSiteWiseAction omitted.

// se_IotSiteWiseAssetModelPropertyIdentifier omitted.

// se_IotSiteWiseInputIdentifier omitted.

// se_IotTopicPublishAction omitted.

// se_LambdaAction omitted.

// se_LoggingOptions omitted.

// se_NotificationAction omitted.

// se_NotificationActions omitted.

// se_NotificationTargetActions omitted.

// se_OnEnterLifecycle omitted.

// se_OnExitLifecycle omitted.

// se_OnInputLifecycle omitted.

// se_Payload omitted.

// se_RecipientDetail omitted.

// se_RecipientDetails omitted.

// se_ResetTimerAction omitted.

// se_SetTimerAction omitted.

// se_SetVariableAction omitted.

// se_SimpleRule omitted.

// se_SMSConfiguration omitted.

// se_SMSConfigurations omitted.

// se_SNSTopicPublishAction omitted.

// se_SqsAction omitted.

// se_SSOIdentity omitted.

// se_State omitted.

// se_States omitted.

// se_Tag omitted.

// se_Tags omitted.

// se_TransitionEvent omitted.

// se_TransitionEvents omitted.

// de_AcknowledgeFlow omitted.

// de_Action omitted.

// de_Actions omitted.

// de_AlarmAction omitted.

// de_AlarmActions omitted.

// de_AlarmCapabilities omitted.

// de_AlarmEventActions omitted.

/**
 * deserializeAws_restJson1AlarmModelSummaries
 */
const de_AlarmModelSummaries = (output: any, context: __SerdeContext): AlarmModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmModelSummary
 */
const de_AlarmModelSummary = (output: any, context: __SerdeContext): AlarmModelSummary => {
  return take(output, {
    alarmModelDescription: __expectString,
    alarmModelName: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AlarmModelVersionSummaries
 */
const de_AlarmModelVersionSummaries = (output: any, context: __SerdeContext): AlarmModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AlarmModelVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmModelVersionSummary
 */
const de_AlarmModelVersionSummary = (output: any, context: __SerdeContext): AlarmModelVersionSummary => {
  return take(output, {
    alarmModelArn: __expectString,
    alarmModelName: __expectString,
    alarmModelVersion: __expectString,
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
    statusMessage: __expectString,
  }) as any;
};

// de_AlarmNotification omitted.

// de_AlarmRule omitted.

// de_AnalysisResult omitted.

// de_AnalysisResultLocation omitted.

// de_AnalysisResultLocations omitted.

// de_AnalysisResults omitted.

// de_AssetPropertyTimestamp omitted.

// de_AssetPropertyValue omitted.

// de_AssetPropertyVariant omitted.

// de_Attribute omitted.

// de_Attributes omitted.

// de_ClearTimerAction omitted.

// de_DetectorDebugOption omitted.

// de_DetectorDebugOptions omitted.

/**
 * deserializeAws_restJson1DetectorModel
 */
const de_DetectorModel = (output: any, context: __SerdeContext): DetectorModel => {
  return take(output, {
    detectorModelConfiguration: (_: any) => de_DetectorModelConfiguration(_, context),
    detectorModelDefinition: (_: any) => de_DetectorModelDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1DetectorModelConfiguration
 */
const de_DetectorModelConfiguration = (output: any, context: __SerdeContext): DetectorModelConfiguration => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    detectorModelArn: __expectString,
    detectorModelDescription: __expectString,
    detectorModelName: __expectString,
    detectorModelVersion: __expectString,
    evaluationMethod: __expectString,
    key: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DetectorModelDefinition
 */
const de_DetectorModelDefinition = (output: any, context: __SerdeContext): DetectorModelDefinition => {
  return take(output, {
    initialStateName: __expectString,
    states: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1DetectorModelSummaries
 */
const de_DetectorModelSummaries = (output: any, context: __SerdeContext): DetectorModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DetectorModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorModelSummary
 */
const de_DetectorModelSummary = (output: any, context: __SerdeContext): DetectorModelSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    detectorModelDescription: __expectString,
    detectorModelName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DetectorModelVersionSummaries
 */
const de_DetectorModelVersionSummaries = (output: any, context: __SerdeContext): DetectorModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DetectorModelVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorModelVersionSummary
 */
const de_DetectorModelVersionSummary = (output: any, context: __SerdeContext): DetectorModelVersionSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    detectorModelArn: __expectString,
    detectorModelName: __expectString,
    detectorModelVersion: __expectString,
    evaluationMethod: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_DynamoDBAction omitted.

// de_DynamoDBv2Action omitted.

// de_EmailConfiguration omitted.

// de_EmailConfigurations omitted.

// de_EmailContent omitted.

// de_EmailRecipients omitted.

// de_Event omitted.

// de_Events omitted.

// de_FirehoseAction omitted.

// de_InitializationConfiguration omitted.

/**
 * deserializeAws_restJson1Input
 */
const de_Input = (output: any, context: __SerdeContext): Input => {
  return take(output, {
    inputConfiguration: (_: any) => de_InputConfiguration(_, context),
    inputDefinition: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1InputConfiguration
 */
const de_InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    inputArn: __expectString,
    inputDescription: __expectString,
    inputName: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_InputDefinition omitted.

/**
 * deserializeAws_restJson1InputSummaries
 */
const de_InputSummaries = (output: any, context: __SerdeContext): InputSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_InputSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InputSummary
 */
const de_InputSummary = (output: any, context: __SerdeContext): InputSummary => {
  return take(output, {
    creationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    inputArn: __expectString,
    inputDescription: __expectString,
    inputName: __expectString,
    lastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_IotEventsAction omitted.

// de_IotSiteWiseAction omitted.

// de_IotTopicPublishAction omitted.

// de_LambdaAction omitted.

// de_LoggingOptions omitted.

// de_NotificationAction omitted.

// de_NotificationActions omitted.

// de_NotificationTargetActions omitted.

// de_OnEnterLifecycle omitted.

// de_OnExitLifecycle omitted.

// de_OnInputLifecycle omitted.

// de_Payload omitted.

// de_RecipientDetail omitted.

// de_RecipientDetails omitted.

// de_ResetTimerAction omitted.

// de_RoutedResource omitted.

// de_RoutedResources omitted.

// de_SetTimerAction omitted.

// de_SetVariableAction omitted.

// de_SimpleRule omitted.

// de_SMSConfiguration omitted.

// de_SMSConfigurations omitted.

// de_SNSTopicPublishAction omitted.

// de_SqsAction omitted.

// de_SSOIdentity omitted.

// de_State omitted.

// de_States omitted.

// de_Tag omitted.

// de_Tags omitted.

// de_TransitionEvent omitted.

// de_TransitionEvents omitted.

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

const _aMV = "alarmModelVersion";
const _dMV = "detectorModelVersion";
const _mR = "maxResults";
const _nT = "nextToken";
const _rA = "resourceArn";
const _tK = "tagKeys";
const _v = "version";
