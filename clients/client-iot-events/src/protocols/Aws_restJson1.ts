// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
  AnalysisResult,
  AnalysisResultLocation,
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
  RoutedResource,
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models";
  let body: any;
  body = JSON.stringify({
    ...(input.alarmCapabilities != null && {
      alarmCapabilities: se_AlarmCapabilities(input.alarmCapabilities, context),
    }),
    ...(input.alarmEventActions != null && {
      alarmEventActions: se_AlarmEventActions(input.alarmEventActions, context),
    }),
    ...(input.alarmModelDescription != null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.alarmNotification != null && {
      alarmNotification: se_AlarmNotification(input.alarmNotification, context),
    }),
    ...(input.alarmRule != null && { alarmRule: se_AlarmRule(input.alarmRule, context) }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.severity != null && { severity: input.severity }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
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
 * serializeAws_restJson1CreateDetectorModelCommand
 */
export const se_CreateDetectorModelCommand = async (
  input: CreateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models";
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition != null && {
      detectorModelDefinition: se_DetectorModelDefinition(input.detectorModelDefinition, context),
    }),
    ...(input.detectorModelDescription != null && { detectorModelDescription: input.detectorModelDescription }),
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.evaluationMethod != null && { evaluationMethod: input.evaluationMethod }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
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
 * serializeAws_restJson1CreateInputCommand
 */
export const se_CreateInputCommand = async (
  input: CreateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs";
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition != null && { inputDefinition: se_InputDefinition(input.inputDefinition, context) }),
    ...(input.inputDescription != null && { inputDescription: input.inputDescription }),
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
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
 * serializeAws_restJson1DeleteAlarmModelCommand
 */
export const se_DeleteAlarmModelCommand = async (
  input: DeleteAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models/{alarmModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "alarmModelName",
    () => input.alarmModelName!,
    "{alarmModelName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDetectorModelCommand
 */
export const se_DeleteDetectorModelCommand = async (
  input: DeleteDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models/{detectorModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteInputCommand
 */
export const se_DeleteInputCommand = async (
  input: DeleteInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs/{inputName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeAlarmModelCommand
 */
export const se_DescribeAlarmModelCommand = async (
  input: DescribeAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models/{alarmModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "alarmModelName",
    () => input.alarmModelName!,
    "{alarmModelName}",
    false
  );
  const query: any = map({
    version: [, input.alarmModelVersion!],
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
 * serializeAws_restJson1DescribeDetectorModelCommand
 */
export const se_DescribeDetectorModelCommand = async (
  input: DescribeDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models/{detectorModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
    false
  );
  const query: any = map({
    version: [, input.detectorModelVersion!],
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
 * serializeAws_restJson1DescribeDetectorModelAnalysisCommand
 */
export const se_DescribeDetectorModelAnalysisCommand = async (
  input: DescribeDetectorModelAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analysis/detector-models/{analysisId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "analysisId", () => input.analysisId!, "{analysisId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeInputCommand
 */
export const se_DescribeInputCommand = async (
  input: DescribeInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs/{inputName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const se_DescribeLoggingOptionsCommand = async (
  input: DescribeLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDetectorModelAnalysisResultsCommand
 */
export const se_GetDetectorModelAnalysisResultsCommand = async (
  input: GetDetectorModelAnalysisResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/analysis/detector-models/{analysisId}/results";
  resolvedPath = __resolvedPath(resolvedPath, input, "analysisId", () => input.analysisId!, "{analysisId}", false);
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
 * serializeAws_restJson1ListAlarmModelsCommand
 */
export const se_ListAlarmModelsCommand = async (
  input: ListAlarmModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models";
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
 * serializeAws_restJson1ListAlarmModelVersionsCommand
 */
export const se_ListAlarmModelVersionsCommand = async (
  input: ListAlarmModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models/{alarmModelName}/versions";
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
 * serializeAws_restJson1ListDetectorModelsCommand
 */
export const se_ListDetectorModelsCommand = async (
  input: ListDetectorModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models";
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
 * serializeAws_restJson1ListDetectorModelVersionsCommand
 */
export const se_ListDetectorModelVersionsCommand = async (
  input: ListDetectorModelVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/detector-models/{detectorModelName}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
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
 * serializeAws_restJson1ListInputRoutingsCommand
 */
export const se_ListInputRoutingsCommand = async (
  input: ListInputRoutingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/input-routings";
  let body: any;
  body = JSON.stringify({
    ...(input.inputIdentifier != null && { inputIdentifier: se_InputIdentifier(input.inputIdentifier, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
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
 * serializeAws_restJson1ListInputsCommand
 */
export const se_ListInputsCommand = async (
  input: ListInputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs";
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
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
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
 * serializeAws_restJson1PutLoggingOptionsCommand
 */
export const se_PutLoggingOptionsCommand = async (
  input: PutLoggingOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions != null && { loggingOptions: se_LoggingOptions(input.loggingOptions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartDetectorModelAnalysisCommand
 */
export const se_StartDetectorModelAnalysisCommand = async (
  input: StartDetectorModelAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analysis/detector-models";
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition != null && {
      detectorModelDefinition: se_DetectorModelDefinition(input.detectorModelDefinition, context),
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_Tags(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateAlarmModelCommand
 */
export const se_UpdateAlarmModelCommand = async (
  input: UpdateAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models/{alarmModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "alarmModelName",
    () => input.alarmModelName!,
    "{alarmModelName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.alarmCapabilities != null && {
      alarmCapabilities: se_AlarmCapabilities(input.alarmCapabilities, context),
    }),
    ...(input.alarmEventActions != null && {
      alarmEventActions: se_AlarmEventActions(input.alarmEventActions, context),
    }),
    ...(input.alarmModelDescription != null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmNotification != null && {
      alarmNotification: se_AlarmNotification(input.alarmNotification, context),
    }),
    ...(input.alarmRule != null && { alarmRule: se_AlarmRule(input.alarmRule, context) }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.severity != null && { severity: input.severity }),
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
 * serializeAws_restJson1UpdateDetectorModelCommand
 */
export const se_UpdateDetectorModelCommand = async (
  input: UpdateDetectorModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models/{detectorModelName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "detectorModelName",
    () => input.detectorModelName!,
    "{detectorModelName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition != null && {
      detectorModelDefinition: se_DetectorModelDefinition(input.detectorModelDefinition, context),
    }),
    ...(input.detectorModelDescription != null && { detectorModelDescription: input.detectorModelDescription }),
    ...(input.evaluationMethod != null && { evaluationMethod: input.evaluationMethod }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
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
 * serializeAws_restJson1UpdateInputCommand
 */
export const se_UpdateInputCommand = async (
  input: UpdateInputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs/{inputName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "inputName", () => input.inputName!, "{inputName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition != null && { inputDefinition: se_InputDefinition(input.inputDefinition, context) }),
    ...(input.inputDescription != null && { inputDescription: input.inputDescription }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1CreateAlarmModelCommand
 */
export const de_CreateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelArn != null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelVersion != null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.lastUpdateTime != null) {
    contents.lastUpdateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdateTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAlarmModelCommandError
 */
const de_CreateAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlarmModelCommandOutput> => {
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
 * deserializeAws_restJson1CreateDetectorModelCommand
 */
export const de_CreateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration != null) {
    contents.detectorModelConfiguration = de_DetectorModelConfiguration(data.detectorModelConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDetectorModelCommandError
 */
const de_CreateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
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
 * deserializeAws_restJson1CreateInputCommand
 */
export const de_CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration != null) {
    contents.inputConfiguration = de_InputConfiguration(data.inputConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateInputCommandError
 */
const de_CreateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
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
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      throw await de_ResourceAlreadyExistsExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DeleteAlarmModelCommand
 */
export const de_DeleteAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAlarmModelCommandError
 */
const de_DeleteAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DeleteDetectorModelCommand
 */
export const de_DeleteDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDetectorModelCommandError
 */
const de_DeleteDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DeleteInputCommand
 */
export const de_DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteInputCommandError
 */
const de_DeleteInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DescribeAlarmModelCommand
 */
export const de_DescribeAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmCapabilities != null) {
    contents.alarmCapabilities = de_AlarmCapabilities(data.alarmCapabilities, context);
  }
  if (data.alarmEventActions != null) {
    contents.alarmEventActions = de_AlarmEventActions(data.alarmEventActions, context);
  }
  if (data.alarmModelArn != null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelDescription != null) {
    contents.alarmModelDescription = __expectString(data.alarmModelDescription);
  }
  if (data.alarmModelName != null) {
    contents.alarmModelName = __expectString(data.alarmModelName);
  }
  if (data.alarmModelVersion != null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.alarmNotification != null) {
    contents.alarmNotification = de_AlarmNotification(data.alarmNotification, context);
  }
  if (data.alarmRule != null) {
    contents.alarmRule = de_AlarmRule(data.alarmRule, context);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.key != null) {
    contents.key = __expectString(data.key);
  }
  if (data.lastUpdateTime != null) {
    contents.lastUpdateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdateTime)));
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.severity != null) {
    contents.severity = __expectInt32(data.severity);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage != null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAlarmModelCommandError
 */
const de_DescribeAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DescribeDetectorModelCommand
 */
export const de_DescribeDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModel != null) {
    contents.detectorModel = de_DetectorModel(data.detectorModel, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorModelCommandError
 */
const de_DescribeDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DescribeDetectorModelAnalysisCommand
 */
export const de_DescribeDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDetectorModelAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError
 */
const de_DescribeDetectorModelAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DescribeInputCommand
 */
export const de_DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input != null) {
    contents.input = de_Input(data.input, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeInputCommandError
 */
const de_DescribeInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1DescribeLoggingOptionsCommand
 */
export const de_DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions != null) {
    contents.loggingOptions = de_LoggingOptions(data.loggingOptions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeLoggingOptionsCommandError
 */
const de_DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand
 */
export const de_GetDetectorModelAnalysisResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDetectorModelAnalysisResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisResults != null) {
    contents.analysisResults = de_AnalysisResults(data.analysisResults, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError
 */
const de_GetDetectorModelAnalysisResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListAlarmModelsCommand
 */
export const de_ListAlarmModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlarmModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelSummaries != null) {
    contents.alarmModelSummaries = de_AlarmModelSummaries(data.alarmModelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmModelsCommandError
 */
const de_ListAlarmModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListAlarmModelVersionsCommand
 */
export const de_ListAlarmModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAlarmModelVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelVersionSummaries != null) {
    contents.alarmModelVersionSummaries = de_AlarmModelVersionSummaries(data.alarmModelVersionSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAlarmModelVersionsCommandError
 */
const de_ListAlarmModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListDetectorModelsCommand
 */
export const de_ListDetectorModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDetectorModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelSummaries != null) {
    contents.detectorModelSummaries = de_DetectorModelSummaries(data.detectorModelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorModelsCommandError
 */
const de_ListDetectorModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListDetectorModelVersionsCommand
 */
export const de_ListDetectorModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDetectorModelVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelVersionSummaries != null) {
    contents.detectorModelVersionSummaries = de_DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDetectorModelVersionsCommandError
 */
const de_ListDetectorModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListInputRoutingsCommand
 */
export const de_ListInputRoutingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputRoutingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.routedResources != null) {
    contents.routedResources = de_RoutedResources(data.routedResources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputRoutingsCommandError
 */
const de_ListInputRoutingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
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
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListInputsCommand
 */
export const de_ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputSummaries != null) {
    contents.inputSummaries = de_InputSummaries(data.inputSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInputsCommandError
 */
const de_ListInputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_Tags(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1PutLoggingOptionsCommand
 */
export const de_PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutLoggingOptionsCommandError
 */
const de_PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      throw await de_UnsupportedOperationExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1StartDetectorModelAnalysisCommand
 */
export const de_StartDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartDetectorModelAnalysisCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisId != null) {
    contents.analysisId = __expectString(data.analysisId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartDetectorModelAnalysisCommandError
 */
const de_StartDetectorModelAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
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
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1UpdateAlarmModelCommand
 */
export const de_UpdateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelArn != null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelVersion != null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.creationTime != null) {
    contents.creationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTime)));
  }
  if (data.lastUpdateTime != null) {
    contents.lastUpdateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdateTime)));
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAlarmModelCommandError
 */
const de_UpdateAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1UpdateDetectorModelCommand
 */
export const de_UpdateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration != null) {
    contents.detectorModelConfiguration = de_DetectorModelConfiguration(data.detectorModelConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDetectorModelCommandError
 */
const de_UpdateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1UpdateInputCommand
 */
export const de_UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration != null) {
    contents.inputConfiguration = de_InputConfiguration(data.inputConfiguration, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateInputCommandError
 */
const de_UpdateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
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
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
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
 * deserializeAws_restJson1UnsupportedOperationExceptionRes
 */
const de_UnsupportedOperationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new UnsupportedOperationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AcknowledgeFlow
 */
const se_AcknowledgeFlow = (input: AcknowledgeFlow, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1Action
 */
const se_Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.clearTimer != null && { clearTimer: se_ClearTimerAction(input.clearTimer, context) }),
    ...(input.dynamoDB != null && { dynamoDB: se_DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 != null && { dynamoDBv2: se_DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose != null && { firehose: se_FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents != null && { iotEvents: se_IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise != null && { iotSiteWise: se_IotSiteWiseAction(input.iotSiteWise, context) }),
    ...(input.iotTopicPublish != null && { iotTopicPublish: se_IotTopicPublishAction(input.iotTopicPublish, context) }),
    ...(input.lambda != null && { lambda: se_LambdaAction(input.lambda, context) }),
    ...(input.resetTimer != null && { resetTimer: se_ResetTimerAction(input.resetTimer, context) }),
    ...(input.setTimer != null && { setTimer: se_SetTimerAction(input.setTimer, context) }),
    ...(input.setVariable != null && { setVariable: se_SetVariableAction(input.setVariable, context) }),
    ...(input.sns != null && { sns: se_SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs != null && { sqs: se_SqsAction(input.sqs, context) }),
  };
};

/**
 * serializeAws_restJson1Actions
 */
const se_Actions = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Action(entry, context);
    });
};

/**
 * serializeAws_restJson1AlarmAction
 */
const se_AlarmAction = (input: AlarmAction, context: __SerdeContext): any => {
  return {
    ...(input.dynamoDB != null && { dynamoDB: se_DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 != null && { dynamoDBv2: se_DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose != null && { firehose: se_FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents != null && { iotEvents: se_IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise != null && { iotSiteWise: se_IotSiteWiseAction(input.iotSiteWise, context) }),
    ...(input.iotTopicPublish != null && { iotTopicPublish: se_IotTopicPublishAction(input.iotTopicPublish, context) }),
    ...(input.lambda != null && { lambda: se_LambdaAction(input.lambda, context) }),
    ...(input.sns != null && { sns: se_SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs != null && { sqs: se_SqsAction(input.sqs, context) }),
  };
};

/**
 * serializeAws_restJson1AlarmActions
 */
const se_AlarmActions = (input: AlarmAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AlarmAction(entry, context);
    });
};

/**
 * serializeAws_restJson1AlarmCapabilities
 */
const se_AlarmCapabilities = (input: AlarmCapabilities, context: __SerdeContext): any => {
  return {
    ...(input.acknowledgeFlow != null && { acknowledgeFlow: se_AcknowledgeFlow(input.acknowledgeFlow, context) }),
    ...(input.initializationConfiguration != null && {
      initializationConfiguration: se_InitializationConfiguration(input.initializationConfiguration, context),
    }),
  };
};

/**
 * serializeAws_restJson1AlarmEventActions
 */
const se_AlarmEventActions = (input: AlarmEventActions, context: __SerdeContext): any => {
  return {
    ...(input.alarmActions != null && { alarmActions: se_AlarmActions(input.alarmActions, context) }),
  };
};

/**
 * serializeAws_restJson1AlarmNotification
 */
const se_AlarmNotification = (input: AlarmNotification, context: __SerdeContext): any => {
  return {
    ...(input.notificationActions != null && {
      notificationActions: se_NotificationActions(input.notificationActions, context),
    }),
  };
};

/**
 * serializeAws_restJson1AlarmRule
 */
const se_AlarmRule = (input: AlarmRule, context: __SerdeContext): any => {
  return {
    ...(input.simpleRule != null && { simpleRule: se_SimpleRule(input.simpleRule, context) }),
  };
};

/**
 * serializeAws_restJson1AssetPropertyTimestamp
 */
const se_AssetPropertyTimestamp = (input: AssetPropertyTimestamp, context: __SerdeContext): any => {
  return {
    ...(input.offsetInNanos != null && { offsetInNanos: input.offsetInNanos }),
    ...(input.timeInSeconds != null && { timeInSeconds: input.timeInSeconds }),
  };
};

/**
 * serializeAws_restJson1AssetPropertyValue
 */
const se_AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.quality != null && { quality: input.quality }),
    ...(input.timestamp != null && { timestamp: se_AssetPropertyTimestamp(input.timestamp, context) }),
    ...(input.value != null && { value: se_AssetPropertyVariant(input.value, context) }),
  };
};

/**
 * serializeAws_restJson1AssetPropertyVariant
 */
const se_AssetPropertyVariant = (input: AssetPropertyVariant, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue != null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue != null && { doubleValue: input.doubleValue }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

/**
 * serializeAws_restJson1Attribute
 */
const se_Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.jsonPath != null && { jsonPath: input.jsonPath }),
  };
};

/**
 * serializeAws_restJson1Attributes
 */
const se_Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Attribute(entry, context);
    });
};

/**
 * serializeAws_restJson1ClearTimerAction
 */
const se_ClearTimerAction = (input: ClearTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

/**
 * serializeAws_restJson1DetectorDebugOption
 */
const se_DetectorDebugOption = (input: DetectorDebugOption, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
  };
};

/**
 * serializeAws_restJson1DetectorDebugOptions
 */
const se_DetectorDebugOptions = (input: DetectorDebugOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DetectorDebugOption(entry, context);
    });
};

/**
 * serializeAws_restJson1DetectorModelDefinition
 */
const se_DetectorModelDefinition = (input: DetectorModelDefinition, context: __SerdeContext): any => {
  return {
    ...(input.initialStateName != null && { initialStateName: input.initialStateName }),
    ...(input.states != null && { states: se_States(input.states, context) }),
  };
};

/**
 * serializeAws_restJson1DynamoDBAction
 */
const se_DynamoDBAction = (input: DynamoDBAction, context: __SerdeContext): any => {
  return {
    ...(input.hashKeyField != null && { hashKeyField: input.hashKeyField }),
    ...(input.hashKeyType != null && { hashKeyType: input.hashKeyType }),
    ...(input.hashKeyValue != null && { hashKeyValue: input.hashKeyValue }),
    ...(input.operation != null && { operation: input.operation }),
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
    ...(input.payloadField != null && { payloadField: input.payloadField }),
    ...(input.rangeKeyField != null && { rangeKeyField: input.rangeKeyField }),
    ...(input.rangeKeyType != null && { rangeKeyType: input.rangeKeyType }),
    ...(input.rangeKeyValue != null && { rangeKeyValue: input.rangeKeyValue }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_restJson1DynamoDBv2Action
 */
const se_DynamoDBv2Action = (input: DynamoDBv2Action, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

/**
 * serializeAws_restJson1EmailConfiguration
 */
const se_EmailConfiguration = (input: EmailConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: se_EmailContent(input.content, context) }),
    ...(input.from != null && { from: input.from }),
    ...(input.recipients != null && { recipients: se_EmailRecipients(input.recipients, context) }),
  };
};

/**
 * serializeAws_restJson1EmailConfigurations
 */
const se_EmailConfigurations = (input: EmailConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EmailConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1EmailContent
 */
const se_EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage != null && { additionalMessage: input.additionalMessage }),
    ...(input.subject != null && { subject: input.subject }),
  };
};

/**
 * serializeAws_restJson1EmailRecipients
 */
const se_EmailRecipients = (input: EmailRecipients, context: __SerdeContext): any => {
  return {
    ...(input.to != null && { to: se_RecipientDetails(input.to, context) }),
  };
};

/**
 * serializeAws_restJson1Event
 */
const se_Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: se_Actions(input.actions, context) }),
    ...(input.condition != null && { condition: input.condition }),
    ...(input.eventName != null && { eventName: input.eventName }),
  };
};

/**
 * serializeAws_restJson1Events
 */
const se_Events = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Event(entry, context);
    });
};

/**
 * serializeAws_restJson1FirehoseAction
 */
const se_FirehoseAction = (input: FirehoseAction, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStreamName != null && { deliveryStreamName: input.deliveryStreamName }),
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
    ...(input.separator != null && { separator: input.separator }),
  };
};

/**
 * serializeAws_restJson1InitializationConfiguration
 */
const se_InitializationConfiguration = (input: InitializationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.disabledOnInitialization != null && { disabledOnInitialization: input.disabledOnInitialization }),
  };
};

/**
 * serializeAws_restJson1InputDefinition
 */
const se_InputDefinition = (input: InputDefinition, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_Attributes(input.attributes, context) }),
  };
};

/**
 * serializeAws_restJson1InputIdentifier
 */
const se_InputIdentifier = (input: InputIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.iotEventsInputIdentifier != null && {
      iotEventsInputIdentifier: se_IotEventsInputIdentifier(input.iotEventsInputIdentifier, context),
    }),
    ...(input.iotSiteWiseInputIdentifier != null && {
      iotSiteWiseInputIdentifier: se_IotSiteWiseInputIdentifier(input.iotSiteWiseInputIdentifier, context),
    }),
  };
};

/**
 * serializeAws_restJson1IotEventsAction
 */
const se_IotEventsAction = (input: IotEventsAction, context: __SerdeContext): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
  };
};

/**
 * serializeAws_restJson1IotEventsInputIdentifier
 */
const se_IotEventsInputIdentifier = (input: IotEventsInputIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
  };
};

/**
 * serializeAws_restJson1IotSiteWiseAction
 */
const se_IotSiteWiseAction = (input: IotSiteWiseAction, context: __SerdeContext): any => {
  return {
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
    ...(input.propertyValue != null && { propertyValue: se_AssetPropertyValue(input.propertyValue, context) }),
  };
};

/**
 * serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier
 */
const se_IotSiteWiseAssetModelPropertyIdentifier = (
  input: IotSiteWiseAssetModelPropertyIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.assetModelId != null && { assetModelId: input.assetModelId }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
  };
};

/**
 * serializeAws_restJson1IotSiteWiseInputIdentifier
 */
const se_IotSiteWiseInputIdentifier = (input: IotSiteWiseInputIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.iotSiteWiseAssetModelPropertyIdentifier != null && {
      iotSiteWiseAssetModelPropertyIdentifier: se_IotSiteWiseAssetModelPropertyIdentifier(
        input.iotSiteWiseAssetModelPropertyIdentifier,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1IotTopicPublishAction
 */
const se_IotTopicPublishAction = (input: IotTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.mqttTopic != null && { mqttTopic: input.mqttTopic }),
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
  };
};

/**
 * serializeAws_restJson1LambdaAction
 */
const se_LambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  return {
    ...(input.functionArn != null && { functionArn: input.functionArn }),
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
  };
};

/**
 * serializeAws_restJson1LoggingOptions
 */
const se_LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.detectorDebugOptions != null && {
      detectorDebugOptions: se_DetectorDebugOptions(input.detectorDebugOptions, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.level != null && { level: input.level }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1NotificationAction
 */
const se_NotificationAction = (input: NotificationAction, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: se_NotificationTargetActions(input.action, context) }),
    ...(input.emailConfigurations != null && {
      emailConfigurations: se_EmailConfigurations(input.emailConfigurations, context),
    }),
    ...(input.smsConfigurations != null && {
      smsConfigurations: se_SMSConfigurations(input.smsConfigurations, context),
    }),
  };
};

/**
 * serializeAws_restJson1NotificationActions
 */
const se_NotificationActions = (input: NotificationAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NotificationAction(entry, context);
    });
};

/**
 * serializeAws_restJson1NotificationTargetActions
 */
const se_NotificationTargetActions = (input: NotificationTargetActions, context: __SerdeContext): any => {
  return {
    ...(input.lambdaAction != null && { lambdaAction: se_LambdaAction(input.lambdaAction, context) }),
  };
};

/**
 * serializeAws_restJson1OnEnterLifecycle
 */
const se_OnEnterLifecycle = (input: OnEnterLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: se_Events(input.events, context) }),
  };
};

/**
 * serializeAws_restJson1OnExitLifecycle
 */
const se_OnExitLifecycle = (input: OnExitLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: se_Events(input.events, context) }),
  };
};

/**
 * serializeAws_restJson1OnInputLifecycle
 */
const se_OnInputLifecycle = (input: OnInputLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: se_Events(input.events, context) }),
    ...(input.transitionEvents != null && { transitionEvents: se_TransitionEvents(input.transitionEvents, context) }),
  };
};

/**
 * serializeAws_restJson1Payload
 */
const se_Payload = (input: Payload, context: __SerdeContext): any => {
  return {
    ...(input.contentExpression != null && { contentExpression: input.contentExpression }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1RecipientDetail
 */
const se_RecipientDetail = (input: RecipientDetail, context: __SerdeContext): any => {
  return {
    ...(input.ssoIdentity != null && { ssoIdentity: se_SSOIdentity(input.ssoIdentity, context) }),
  };
};

/**
 * serializeAws_restJson1RecipientDetails
 */
const se_RecipientDetails = (input: RecipientDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_RecipientDetail(entry, context);
    });
};

/**
 * serializeAws_restJson1ResetTimerAction
 */
const se_ResetTimerAction = (input: ResetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

/**
 * serializeAws_restJson1SetTimerAction
 */
const se_SetTimerAction = (input: SetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.durationExpression != null && { durationExpression: input.durationExpression }),
    ...(input.seconds != null && { seconds: input.seconds }),
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

/**
 * serializeAws_restJson1SetVariableAction
 */
const se_SetVariableAction = (input: SetVariableAction, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
    ...(input.variableName != null && { variableName: input.variableName }),
  };
};

/**
 * serializeAws_restJson1SimpleRule
 */
const se_SimpleRule = (input: SimpleRule, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.inputProperty != null && { inputProperty: input.inputProperty }),
    ...(input.threshold != null && { threshold: input.threshold }),
  };
};

/**
 * serializeAws_restJson1SMSConfiguration
 */
const se_SMSConfiguration = (input: SMSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage != null && { additionalMessage: input.additionalMessage }),
    ...(input.recipients != null && { recipients: se_RecipientDetails(input.recipients, context) }),
    ...(input.senderId != null && { senderId: input.senderId }),
  };
};

/**
 * serializeAws_restJson1SMSConfigurations
 */
const se_SMSConfigurations = (input: SMSConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SMSConfiguration(entry, context);
    });
};

/**
 * serializeAws_restJson1SNSTopicPublishAction
 */
const se_SNSTopicPublishAction = (input: SNSTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

/**
 * serializeAws_restJson1SqsAction
 */
const se_SqsAction = (input: SqsAction, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: se_Payload(input.payload, context) }),
    ...(input.queueUrl != null && { queueUrl: input.queueUrl }),
    ...(input.useBase64 != null && { useBase64: input.useBase64 }),
  };
};

/**
 * serializeAws_restJson1SSOIdentity
 */
const se_SSOIdentity = (input: SSOIdentity, context: __SerdeContext): any => {
  return {
    ...(input.identityStoreId != null && { identityStoreId: input.identityStoreId }),
    ...(input.userId != null && { userId: input.userId }),
  };
};

/**
 * serializeAws_restJson1State
 */
const se_State = (input: State, context: __SerdeContext): any => {
  return {
    ...(input.onEnter != null && { onEnter: se_OnEnterLifecycle(input.onEnter, context) }),
    ...(input.onExit != null && { onExit: se_OnExitLifecycle(input.onExit, context) }),
    ...(input.onInput != null && { onInput: se_OnInputLifecycle(input.onInput, context) }),
    ...(input.stateName != null && { stateName: input.stateName }),
  };
};

/**
 * serializeAws_restJson1States
 */
const se_States = (input: State[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_State(entry, context);
    });
};

/**
 * serializeAws_restJson1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_restJson1TransitionEvent
 */
const se_TransitionEvent = (input: TransitionEvent, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: se_Actions(input.actions, context) }),
    ...(input.condition != null && { condition: input.condition }),
    ...(input.eventName != null && { eventName: input.eventName }),
    ...(input.nextState != null && { nextState: input.nextState }),
  };
};

/**
 * serializeAws_restJson1TransitionEvents
 */
const se_TransitionEvents = (input: TransitionEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TransitionEvent(entry, context);
    });
};

/**
 * deserializeAws_restJson1AcknowledgeFlow
 */
const de_AcknowledgeFlow = (output: any, context: __SerdeContext): AcknowledgeFlow => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1Action
 */
const de_Action = (output: any, context: __SerdeContext): Action => {
  return {
    clearTimer: output.clearTimer != null ? de_ClearTimerAction(output.clearTimer, context) : undefined,
    dynamoDB: output.dynamoDB != null ? de_DynamoDBAction(output.dynamoDB, context) : undefined,
    dynamoDBv2: output.dynamoDBv2 != null ? de_DynamoDBv2Action(output.dynamoDBv2, context) : undefined,
    firehose: output.firehose != null ? de_FirehoseAction(output.firehose, context) : undefined,
    iotEvents: output.iotEvents != null ? de_IotEventsAction(output.iotEvents, context) : undefined,
    iotSiteWise: output.iotSiteWise != null ? de_IotSiteWiseAction(output.iotSiteWise, context) : undefined,
    iotTopicPublish:
      output.iotTopicPublish != null ? de_IotTopicPublishAction(output.iotTopicPublish, context) : undefined,
    lambda: output.lambda != null ? de_LambdaAction(output.lambda, context) : undefined,
    resetTimer: output.resetTimer != null ? de_ResetTimerAction(output.resetTimer, context) : undefined,
    setTimer: output.setTimer != null ? de_SetTimerAction(output.setTimer, context) : undefined,
    setVariable: output.setVariable != null ? de_SetVariableAction(output.setVariable, context) : undefined,
    sns: output.sns != null ? de_SNSTopicPublishAction(output.sns, context) : undefined,
    sqs: output.sqs != null ? de_SqsAction(output.sqs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Actions
 */
const de_Actions = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Action(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmAction
 */
const de_AlarmAction = (output: any, context: __SerdeContext): AlarmAction => {
  return {
    dynamoDB: output.dynamoDB != null ? de_DynamoDBAction(output.dynamoDB, context) : undefined,
    dynamoDBv2: output.dynamoDBv2 != null ? de_DynamoDBv2Action(output.dynamoDBv2, context) : undefined,
    firehose: output.firehose != null ? de_FirehoseAction(output.firehose, context) : undefined,
    iotEvents: output.iotEvents != null ? de_IotEventsAction(output.iotEvents, context) : undefined,
    iotSiteWise: output.iotSiteWise != null ? de_IotSiteWiseAction(output.iotSiteWise, context) : undefined,
    iotTopicPublish:
      output.iotTopicPublish != null ? de_IotTopicPublishAction(output.iotTopicPublish, context) : undefined,
    lambda: output.lambda != null ? de_LambdaAction(output.lambda, context) : undefined,
    sns: output.sns != null ? de_SNSTopicPublishAction(output.sns, context) : undefined,
    sqs: output.sqs != null ? de_SqsAction(output.sqs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmActions
 */
const de_AlarmActions = (output: any, context: __SerdeContext): AlarmAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmCapabilities
 */
const de_AlarmCapabilities = (output: any, context: __SerdeContext): AlarmCapabilities => {
  return {
    acknowledgeFlow: output.acknowledgeFlow != null ? de_AcknowledgeFlow(output.acknowledgeFlow, context) : undefined,
    initializationConfiguration:
      output.initializationConfiguration != null
        ? de_InitializationConfiguration(output.initializationConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmEventActions
 */
const de_AlarmEventActions = (output: any, context: __SerdeContext): AlarmEventActions => {
  return {
    alarmActions: output.alarmActions != null ? de_AlarmActions(output.alarmActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmModelSummaries
 */
const de_AlarmModelSummaries = (output: any, context: __SerdeContext): AlarmModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmModelSummary
 */
const de_AlarmModelSummary = (output: any, context: __SerdeContext): AlarmModelSummary => {
  return {
    alarmModelDescription: __expectString(output.alarmModelDescription),
    alarmModelName: __expectString(output.alarmModelName),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmModelVersionSummaries
 */
const de_AlarmModelVersionSummaries = (output: any, context: __SerdeContext): AlarmModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AlarmModelVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AlarmModelVersionSummary
 */
const de_AlarmModelVersionSummary = (output: any, context: __SerdeContext): AlarmModelVersionSummary => {
  return {
    alarmModelArn: __expectString(output.alarmModelArn),
    alarmModelName: __expectString(output.alarmModelName),
    alarmModelVersion: __expectString(output.alarmModelVersion),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1AlarmNotification
 */
const de_AlarmNotification = (output: any, context: __SerdeContext): AlarmNotification => {
  return {
    notificationActions:
      output.notificationActions != null ? de_NotificationActions(output.notificationActions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AlarmRule
 */
const de_AlarmRule = (output: any, context: __SerdeContext): AlarmRule => {
  return {
    simpleRule: output.simpleRule != null ? de_SimpleRule(output.simpleRule, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisResult
 */
const de_AnalysisResult = (output: any, context: __SerdeContext): AnalysisResult => {
  return {
    level: __expectString(output.level),
    locations: output.locations != null ? de_AnalysisResultLocations(output.locations, context) : undefined,
    message: __expectString(output.message),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisResultLocation
 */
const de_AnalysisResultLocation = (output: any, context: __SerdeContext): AnalysisResultLocation => {
  return {
    path: __expectString(output.path),
  } as any;
};

/**
 * deserializeAws_restJson1AnalysisResultLocations
 */
const de_AnalysisResultLocations = (output: any, context: __SerdeContext): AnalysisResultLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnalysisResultLocation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalysisResults
 */
const de_AnalysisResults = (output: any, context: __SerdeContext): AnalysisResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AnalysisResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetPropertyTimestamp
 */
const de_AssetPropertyTimestamp = (output: any, context: __SerdeContext): AssetPropertyTimestamp => {
  return {
    offsetInNanos: __expectString(output.offsetInNanos),
    timeInSeconds: __expectString(output.timeInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1AssetPropertyValue
 */
const de_AssetPropertyValue = (output: any, context: __SerdeContext): AssetPropertyValue => {
  return {
    quality: __expectString(output.quality),
    timestamp: output.timestamp != null ? de_AssetPropertyTimestamp(output.timestamp, context) : undefined,
    value: output.value != null ? de_AssetPropertyVariant(output.value, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AssetPropertyVariant
 */
const de_AssetPropertyVariant = (output: any, context: __SerdeContext): AssetPropertyVariant => {
  return {
    booleanValue: __expectString(output.booleanValue),
    doubleValue: __expectString(output.doubleValue),
    integerValue: __expectString(output.integerValue),
    stringValue: __expectString(output.stringValue),
  } as any;
};

/**
 * deserializeAws_restJson1Attribute
 */
const de_Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    jsonPath: __expectString(output.jsonPath),
  } as any;
};

/**
 * deserializeAws_restJson1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Attribute(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ClearTimerAction
 */
const de_ClearTimerAction = (output: any, context: __SerdeContext): ClearTimerAction => {
  return {
    timerName: __expectString(output.timerName),
  } as any;
};

/**
 * deserializeAws_restJson1DetectorDebugOption
 */
const de_DetectorDebugOption = (output: any, context: __SerdeContext): DetectorDebugOption => {
  return {
    detectorModelName: __expectString(output.detectorModelName),
    keyValue: __expectString(output.keyValue),
  } as any;
};

/**
 * deserializeAws_restJson1DetectorDebugOptions
 */
const de_DetectorDebugOptions = (output: any, context: __SerdeContext): DetectorDebugOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorDebugOption(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorModel
 */
const de_DetectorModel = (output: any, context: __SerdeContext): DetectorModel => {
  return {
    detectorModelConfiguration:
      output.detectorModelConfiguration != null
        ? de_DetectorModelConfiguration(output.detectorModelConfiguration, context)
        : undefined,
    detectorModelDefinition:
      output.detectorModelDefinition != null
        ? de_DetectorModelDefinition(output.detectorModelDefinition, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorModelConfiguration
 */
const de_DetectorModelConfiguration = (output: any, context: __SerdeContext): DetectorModelConfiguration => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelArn: __expectString(output.detectorModelArn),
    detectorModelDescription: __expectString(output.detectorModelDescription),
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    evaluationMethod: __expectString(output.evaluationMethod),
    key: __expectString(output.key),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DetectorModelDefinition
 */
const de_DetectorModelDefinition = (output: any, context: __SerdeContext): DetectorModelDefinition => {
  return {
    initialStateName: __expectString(output.initialStateName),
    states: output.states != null ? de_States(output.states, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DetectorModelSummaries
 */
const de_DetectorModelSummaries = (output: any, context: __SerdeContext): DetectorModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorModelSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorModelSummary
 */
const de_DetectorModelSummary = (output: any, context: __SerdeContext): DetectorModelSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelDescription: __expectString(output.detectorModelDescription),
    detectorModelName: __expectString(output.detectorModelName),
  } as any;
};

/**
 * deserializeAws_restJson1DetectorModelVersionSummaries
 */
const de_DetectorModelVersionSummaries = (output: any, context: __SerdeContext): DetectorModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DetectorModelVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectorModelVersionSummary
 */
const de_DetectorModelVersionSummary = (output: any, context: __SerdeContext): DetectorModelVersionSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelArn: __expectString(output.detectorModelArn),
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    evaluationMethod: __expectString(output.evaluationMethod),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1DynamoDBAction
 */
const de_DynamoDBAction = (output: any, context: __SerdeContext): DynamoDBAction => {
  return {
    hashKeyField: __expectString(output.hashKeyField),
    hashKeyType: __expectString(output.hashKeyType),
    hashKeyValue: __expectString(output.hashKeyValue),
    operation: __expectString(output.operation),
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
    payloadField: __expectString(output.payloadField),
    rangeKeyField: __expectString(output.rangeKeyField),
    rangeKeyType: __expectString(output.rangeKeyType),
    rangeKeyValue: __expectString(output.rangeKeyValue),
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_restJson1DynamoDBv2Action
 */
const de_DynamoDBv2Action = (output: any, context: __SerdeContext): DynamoDBv2Action => {
  return {
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
    tableName: __expectString(output.tableName),
  } as any;
};

/**
 * deserializeAws_restJson1EmailConfiguration
 */
const de_EmailConfiguration = (output: any, context: __SerdeContext): EmailConfiguration => {
  return {
    content: output.content != null ? de_EmailContent(output.content, context) : undefined,
    from: __expectString(output.from),
    recipients: output.recipients != null ? de_EmailRecipients(output.recipients, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EmailConfigurations
 */
const de_EmailConfigurations = (output: any, context: __SerdeContext): EmailConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EmailConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EmailContent
 */
const de_EmailContent = (output: any, context: __SerdeContext): EmailContent => {
  return {
    additionalMessage: __expectString(output.additionalMessage),
    subject: __expectString(output.subject),
  } as any;
};

/**
 * deserializeAws_restJson1EmailRecipients
 */
const de_EmailRecipients = (output: any, context: __SerdeContext): EmailRecipients => {
  return {
    to: output.to != null ? de_RecipientDetails(output.to, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Event
 */
const de_Event = (output: any, context: __SerdeContext): Event => {
  return {
    actions: output.actions != null ? de_Actions(output.actions, context) : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
  } as any;
};

/**
 * deserializeAws_restJson1Events
 */
const de_Events = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Event(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FirehoseAction
 */
const de_FirehoseAction = (output: any, context: __SerdeContext): FirehoseAction => {
  return {
    deliveryStreamName: __expectString(output.deliveryStreamName),
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
    separator: __expectString(output.separator),
  } as any;
};

/**
 * deserializeAws_restJson1InitializationConfiguration
 */
const de_InitializationConfiguration = (output: any, context: __SerdeContext): InitializationConfiguration => {
  return {
    disabledOnInitialization: __expectBoolean(output.disabledOnInitialization),
  } as any;
};

/**
 * deserializeAws_restJson1Input
 */
const de_Input = (output: any, context: __SerdeContext): Input => {
  return {
    inputConfiguration:
      output.inputConfiguration != null ? de_InputConfiguration(output.inputConfiguration, context) : undefined,
    inputDefinition: output.inputDefinition != null ? de_InputDefinition(output.inputDefinition, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputConfiguration
 */
const de_InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    inputArn: __expectString(output.inputArn),
    inputDescription: __expectString(output.inputDescription),
    inputName: __expectString(output.inputName),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1InputDefinition
 */
const de_InputDefinition = (output: any, context: __SerdeContext): InputDefinition => {
  return {
    attributes: output.attributes != null ? de_Attributes(output.attributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputSummaries
 */
const de_InputSummaries = (output: any, context: __SerdeContext): InputSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InputSummary
 */
const de_InputSummary = (output: any, context: __SerdeContext): InputSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    inputArn: __expectString(output.inputArn),
    inputDescription: __expectString(output.inputDescription),
    inputName: __expectString(output.inputName),
    lastUpdateTime:
      output.lastUpdateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdateTime)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1IotEventsAction
 */
const de_IotEventsAction = (output: any, context: __SerdeContext): IotEventsAction => {
  return {
    inputName: __expectString(output.inputName),
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IotSiteWiseAction
 */
const de_IotSiteWiseAction = (output: any, context: __SerdeContext): IotSiteWiseAction => {
  return {
    assetId: __expectString(output.assetId),
    entryId: __expectString(output.entryId),
    propertyAlias: __expectString(output.propertyAlias),
    propertyId: __expectString(output.propertyId),
    propertyValue: output.propertyValue != null ? de_AssetPropertyValue(output.propertyValue, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IotTopicPublishAction
 */
const de_IotTopicPublishAction = (output: any, context: __SerdeContext): IotTopicPublishAction => {
  return {
    mqttTopic: __expectString(output.mqttTopic),
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LambdaAction
 */
const de_LambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  return {
    functionArn: __expectString(output.functionArn),
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LoggingOptions
 */
const de_LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    detectorDebugOptions:
      output.detectorDebugOptions != null ? de_DetectorDebugOptions(output.detectorDebugOptions, context) : undefined,
    enabled: __expectBoolean(output.enabled),
    level: __expectString(output.level),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1NotificationAction
 */
const de_NotificationAction = (output: any, context: __SerdeContext): NotificationAction => {
  return {
    action: output.action != null ? de_NotificationTargetActions(output.action, context) : undefined,
    emailConfigurations:
      output.emailConfigurations != null ? de_EmailConfigurations(output.emailConfigurations, context) : undefined,
    smsConfigurations:
      output.smsConfigurations != null ? de_SMSConfigurations(output.smsConfigurations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NotificationActions
 */
const de_NotificationActions = (output: any, context: __SerdeContext): NotificationAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NotificationAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationTargetActions
 */
const de_NotificationTargetActions = (output: any, context: __SerdeContext): NotificationTargetActions => {
  return {
    lambdaAction: output.lambdaAction != null ? de_LambdaAction(output.lambdaAction, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OnEnterLifecycle
 */
const de_OnEnterLifecycle = (output: any, context: __SerdeContext): OnEnterLifecycle => {
  return {
    events: output.events != null ? de_Events(output.events, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OnExitLifecycle
 */
const de_OnExitLifecycle = (output: any, context: __SerdeContext): OnExitLifecycle => {
  return {
    events: output.events != null ? de_Events(output.events, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OnInputLifecycle
 */
const de_OnInputLifecycle = (output: any, context: __SerdeContext): OnInputLifecycle => {
  return {
    events: output.events != null ? de_Events(output.events, context) : undefined,
    transitionEvents:
      output.transitionEvents != null ? de_TransitionEvents(output.transitionEvents, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Payload
 */
const de_Payload = (output: any, context: __SerdeContext): Payload => {
  return {
    contentExpression: __expectString(output.contentExpression),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1RecipientDetail
 */
const de_RecipientDetail = (output: any, context: __SerdeContext): RecipientDetail => {
  return {
    ssoIdentity: output.ssoIdentity != null ? de_SSOIdentity(output.ssoIdentity, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecipientDetails
 */
const de_RecipientDetails = (output: any, context: __SerdeContext): RecipientDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecipientDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResetTimerAction
 */
const de_ResetTimerAction = (output: any, context: __SerdeContext): ResetTimerAction => {
  return {
    timerName: __expectString(output.timerName),
  } as any;
};

/**
 * deserializeAws_restJson1RoutedResource
 */
const de_RoutedResource = (output: any, context: __SerdeContext): RoutedResource => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1RoutedResources
 */
const de_RoutedResources = (output: any, context: __SerdeContext): RoutedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RoutedResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SetTimerAction
 */
const de_SetTimerAction = (output: any, context: __SerdeContext): SetTimerAction => {
  return {
    durationExpression: __expectString(output.durationExpression),
    seconds: __expectInt32(output.seconds),
    timerName: __expectString(output.timerName),
  } as any;
};

/**
 * deserializeAws_restJson1SetVariableAction
 */
const de_SetVariableAction = (output: any, context: __SerdeContext): SetVariableAction => {
  return {
    value: __expectString(output.value),
    variableName: __expectString(output.variableName),
  } as any;
};

/**
 * deserializeAws_restJson1SimpleRule
 */
const de_SimpleRule = (output: any, context: __SerdeContext): SimpleRule => {
  return {
    comparisonOperator: __expectString(output.comparisonOperator),
    inputProperty: __expectString(output.inputProperty),
    threshold: __expectString(output.threshold),
  } as any;
};

/**
 * deserializeAws_restJson1SMSConfiguration
 */
const de_SMSConfiguration = (output: any, context: __SerdeContext): SMSConfiguration => {
  return {
    additionalMessage: __expectString(output.additionalMessage),
    recipients: output.recipients != null ? de_RecipientDetails(output.recipients, context) : undefined,
    senderId: __expectString(output.senderId),
  } as any;
};

/**
 * deserializeAws_restJson1SMSConfigurations
 */
const de_SMSConfigurations = (output: any, context: __SerdeContext): SMSConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SMSConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SNSTopicPublishAction
 */
const de_SNSTopicPublishAction = (output: any, context: __SerdeContext): SNSTopicPublishAction => {
  return {
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
    targetArn: __expectString(output.targetArn),
  } as any;
};

/**
 * deserializeAws_restJson1SqsAction
 */
const de_SqsAction = (output: any, context: __SerdeContext): SqsAction => {
  return {
    payload: output.payload != null ? de_Payload(output.payload, context) : undefined,
    queueUrl: __expectString(output.queueUrl),
    useBase64: __expectBoolean(output.useBase64),
  } as any;
};

/**
 * deserializeAws_restJson1SSOIdentity
 */
const de_SSOIdentity = (output: any, context: __SerdeContext): SSOIdentity => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    userId: __expectString(output.userId),
  } as any;
};

/**
 * deserializeAws_restJson1State
 */
const de_State = (output: any, context: __SerdeContext): State => {
  return {
    onEnter: output.onEnter != null ? de_OnEnterLifecycle(output.onEnter, context) : undefined,
    onExit: output.onExit != null ? de_OnExitLifecycle(output.onExit, context) : undefined,
    onInput: output.onInput != null ? de_OnInputLifecycle(output.onInput, context) : undefined,
    stateName: __expectString(output.stateName),
  } as any;
};

/**
 * deserializeAws_restJson1States
 */
const de_States = (output: any, context: __SerdeContext): State[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_State(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TransitionEvent
 */
const de_TransitionEvent = (output: any, context: __SerdeContext): TransitionEvent => {
  return {
    actions: output.actions != null ? de_Actions(output.actions, context) : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
    nextState: __expectString(output.nextState),
  } as any;
};

/**
 * deserializeAws_restJson1TransitionEvents
 */
const de_TransitionEvents = (output: any, context: __SerdeContext): TransitionEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TransitionEvent(entry, context);
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
