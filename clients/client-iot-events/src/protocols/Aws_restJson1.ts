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

export const serializeAws_restJson1CreateAlarmModelCommand = async (
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
      alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
    }),
    ...(input.alarmEventActions != null && {
      alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
    }),
    ...(input.alarmModelDescription != null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmModelName != null && { alarmModelName: input.alarmModelName }),
    ...(input.alarmNotification != null && {
      alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
    }),
    ...(input.alarmRule != null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.severity != null && { severity: input.severity }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateDetectorModelCommand = async (
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
      detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
    }),
    ...(input.detectorModelDescription != null && { detectorModelDescription: input.detectorModelDescription }),
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.evaluationMethod != null && { evaluationMethod: input.evaluationMethod }),
    ...(input.key != null && { key: input.key }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1CreateInputCommand = async (
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
    ...(input.inputDefinition != null && {
      inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
    }),
    ...(input.inputDescription != null && { inputDescription: input.inputDescription }),
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1DeleteAlarmModelCommand = async (
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

export const serializeAws_restJson1DeleteDetectorModelCommand = async (
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

export const serializeAws_restJson1DeleteInputCommand = async (
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

export const serializeAws_restJson1DescribeAlarmModelCommand = async (
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

export const serializeAws_restJson1DescribeDetectorModelCommand = async (
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

export const serializeAws_restJson1DescribeDetectorModelAnalysisCommand = async (
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

export const serializeAws_restJson1DescribeInputCommand = async (
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

export const serializeAws_restJson1DescribeLoggingOptionsCommand = async (
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

export const serializeAws_restJson1GetDetectorModelAnalysisResultsCommand = async (
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

export const serializeAws_restJson1ListAlarmModelsCommand = async (
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

export const serializeAws_restJson1ListAlarmModelVersionsCommand = async (
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

export const serializeAws_restJson1ListDetectorModelsCommand = async (
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

export const serializeAws_restJson1ListDetectorModelVersionsCommand = async (
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

export const serializeAws_restJson1ListInputRoutingsCommand = async (
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
    ...(input.inputIdentifier != null && {
      inputIdentifier: serializeAws_restJson1InputIdentifier(input.inputIdentifier, context),
    }),
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

export const serializeAws_restJson1ListInputsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1PutLoggingOptionsCommand = async (
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
    ...(input.loggingOptions != null && {
      loggingOptions: serializeAws_restJson1LoggingOptions(input.loggingOptions, context),
    }),
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

export const serializeAws_restJson1StartDetectorModelAnalysisCommand = async (
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
      detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateAlarmModelCommand = async (
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
      alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
    }),
    ...(input.alarmEventActions != null && {
      alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
    }),
    ...(input.alarmModelDescription != null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmNotification != null && {
      alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
    }),
    ...(input.alarmRule != null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
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

export const serializeAws_restJson1UpdateDetectorModelCommand = async (
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
      detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
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

export const serializeAws_restJson1UpdateInputCommand = async (
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
    ...(input.inputDefinition != null && {
      inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
    }),
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

export const deserializeAws_restJson1CreateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAlarmModelCommandError(output, context);
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

const deserializeAws_restJson1CreateAlarmModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1CreateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration != null) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateDetectorModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration != null) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateInputCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      throw await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DeleteAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteAlarmModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DeleteDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDetectorModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteInputCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DescribeAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAlarmModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmCapabilities != null) {
    contents.alarmCapabilities = deserializeAws_restJson1AlarmCapabilities(data.alarmCapabilities, context);
  }
  if (data.alarmEventActions != null) {
    contents.alarmEventActions = deserializeAws_restJson1AlarmEventActions(data.alarmEventActions, context);
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
    contents.alarmNotification = deserializeAws_restJson1AlarmNotification(data.alarmNotification, context);
  }
  if (data.alarmRule != null) {
    contents.alarmRule = deserializeAws_restJson1AlarmRule(data.alarmRule, context);
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

const deserializeAws_restJson1DescribeAlarmModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DescribeDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModel != null) {
    contents.detectorModel = deserializeAws_restJson1DetectorModel(data.detectorModel, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDetectorModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError(output, context);
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

const deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input != null) {
    contents.input = deserializeAws_restJson1Input(data.input, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeInputCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions != null) {
    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      throw await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisResults != null) {
    contents.analysisResults = deserializeAws_restJson1AnalysisResults(data.analysisResults, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListAlarmModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelSummaries != null) {
    contents.alarmModelSummaries = deserializeAws_restJson1AlarmModelSummaries(data.alarmModelSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAlarmModelsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListAlarmModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmModelVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelVersionSummaries != null) {
    contents.alarmModelVersionSummaries = deserializeAws_restJson1AlarmModelVersionSummaries(
      data.alarmModelVersionSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAlarmModelVersionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListDetectorModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelSummaries != null) {
    contents.detectorModelSummaries = deserializeAws_restJson1DetectorModelSummaries(
      data.detectorModelSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDetectorModelsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListDetectorModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorModelVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelVersionSummaries != null) {
    contents.detectorModelVersionSummaries = deserializeAws_restJson1DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDetectorModelVersionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListInputRoutingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInputRoutingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.routedResources != null) {
    contents.routedResources = deserializeAws_restJson1RoutedResources(data.routedResources, context);
  }
  return contents;
};

const deserializeAws_restJson1ListInputRoutingsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInputsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputSummaries != null) {
    contents.inputSummaries = deserializeAws_restJson1InputSummaries(data.inputSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInputsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutLoggingOptionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      throw await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1StartDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDetectorModelAnalysisCommandError(output, context);
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

const deserializeAws_restJson1StartDetectorModelAnalysisCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1UpdateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAlarmModelCommandError(output, context);
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

const deserializeAws_restJson1UpdateAlarmModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1UpdateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDetectorModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration != null) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateDetectorModelCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

export const deserializeAws_restJson1UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration != null) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateInputCommandError = async (
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
      throw await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
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

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
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

const serializeAws_restJson1AcknowledgeFlow = (input: AcknowledgeFlow, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.clearTimer != null && { clearTimer: serializeAws_restJson1ClearTimerAction(input.clearTimer, context) }),
    ...(input.dynamoDB != null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 != null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose != null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents != null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise != null && {
      iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
    }),
    ...(input.iotTopicPublish != null && {
      iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
    }),
    ...(input.lambda != null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
    ...(input.resetTimer != null && { resetTimer: serializeAws_restJson1ResetTimerAction(input.resetTimer, context) }),
    ...(input.setTimer != null && { setTimer: serializeAws_restJson1SetTimerAction(input.setTimer, context) }),
    ...(input.setVariable != null && {
      setVariable: serializeAws_restJson1SetVariableAction(input.setVariable, context),
    }),
    ...(input.sns != null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs != null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
  };
};

const serializeAws_restJson1Actions = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Action(entry, context);
    });
};

const serializeAws_restJson1AlarmAction = (input: AlarmAction, context: __SerdeContext): any => {
  return {
    ...(input.dynamoDB != null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 != null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose != null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents != null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise != null && {
      iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
    }),
    ...(input.iotTopicPublish != null && {
      iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
    }),
    ...(input.lambda != null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
    ...(input.sns != null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs != null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
  };
};

const serializeAws_restJson1AlarmActions = (input: AlarmAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AlarmAction(entry, context);
    });
};

const serializeAws_restJson1AlarmCapabilities = (input: AlarmCapabilities, context: __SerdeContext): any => {
  return {
    ...(input.acknowledgeFlow != null && {
      acknowledgeFlow: serializeAws_restJson1AcknowledgeFlow(input.acknowledgeFlow, context),
    }),
    ...(input.initializationConfiguration != null && {
      initializationConfiguration: serializeAws_restJson1InitializationConfiguration(
        input.initializationConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AlarmEventActions = (input: AlarmEventActions, context: __SerdeContext): any => {
  return {
    ...(input.alarmActions != null && {
      alarmActions: serializeAws_restJson1AlarmActions(input.alarmActions, context),
    }),
  };
};

const serializeAws_restJson1AlarmNotification = (input: AlarmNotification, context: __SerdeContext): any => {
  return {
    ...(input.notificationActions != null && {
      notificationActions: serializeAws_restJson1NotificationActions(input.notificationActions, context),
    }),
  };
};

const serializeAws_restJson1AlarmRule = (input: AlarmRule, context: __SerdeContext): any => {
  return {
    ...(input.simpleRule != null && { simpleRule: serializeAws_restJson1SimpleRule(input.simpleRule, context) }),
  };
};

const serializeAws_restJson1AssetPropertyTimestamp = (input: AssetPropertyTimestamp, context: __SerdeContext): any => {
  return {
    ...(input.offsetInNanos != null && { offsetInNanos: input.offsetInNanos }),
    ...(input.timeInSeconds != null && { timeInSeconds: input.timeInSeconds }),
  };
};

const serializeAws_restJson1AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.quality != null && { quality: input.quality }),
    ...(input.timestamp != null && {
      timestamp: serializeAws_restJson1AssetPropertyTimestamp(input.timestamp, context),
    }),
    ...(input.value != null && { value: serializeAws_restJson1AssetPropertyVariant(input.value, context) }),
  };
};

const serializeAws_restJson1AssetPropertyVariant = (input: AssetPropertyVariant, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue != null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue != null && { doubleValue: input.doubleValue }),
    ...(input.integerValue != null && { integerValue: input.integerValue }),
    ...(input.stringValue != null && { stringValue: input.stringValue }),
  };
};

const serializeAws_restJson1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.jsonPath != null && { jsonPath: input.jsonPath }),
  };
};

const serializeAws_restJson1Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Attribute(entry, context);
    });
};

const serializeAws_restJson1ClearTimerAction = (input: ClearTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1DetectorDebugOption = (input: DetectorDebugOption, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName != null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue != null && { keyValue: input.keyValue }),
  };
};

const serializeAws_restJson1DetectorDebugOptions = (input: DetectorDebugOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DetectorDebugOption(entry, context);
    });
};

const serializeAws_restJson1DetectorModelDefinition = (
  input: DetectorModelDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.initialStateName != null && { initialStateName: input.initialStateName }),
    ...(input.states != null && { states: serializeAws_restJson1States(input.states, context) }),
  };
};

const serializeAws_restJson1DynamoDBAction = (input: DynamoDBAction, context: __SerdeContext): any => {
  return {
    ...(input.hashKeyField != null && { hashKeyField: input.hashKeyField }),
    ...(input.hashKeyType != null && { hashKeyType: input.hashKeyType }),
    ...(input.hashKeyValue != null && { hashKeyValue: input.hashKeyValue }),
    ...(input.operation != null && { operation: input.operation }),
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.payloadField != null && { payloadField: input.payloadField }),
    ...(input.rangeKeyField != null && { rangeKeyField: input.rangeKeyField }),
    ...(input.rangeKeyType != null && { rangeKeyType: input.rangeKeyType }),
    ...(input.rangeKeyValue != null && { rangeKeyValue: input.rangeKeyValue }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1DynamoDBv2Action = (input: DynamoDBv2Action, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.tableName != null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1EmailConfiguration = (input: EmailConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.content != null && { content: serializeAws_restJson1EmailContent(input.content, context) }),
    ...(input.from != null && { from: input.from }),
    ...(input.recipients != null && { recipients: serializeAws_restJson1EmailRecipients(input.recipients, context) }),
  };
};

const serializeAws_restJson1EmailConfigurations = (input: EmailConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EmailConfiguration(entry, context);
    });
};

const serializeAws_restJson1EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage != null && { additionalMessage: input.additionalMessage }),
    ...(input.subject != null && { subject: input.subject }),
  };
};

const serializeAws_restJson1EmailRecipients = (input: EmailRecipients, context: __SerdeContext): any => {
  return {
    ...(input.to != null && { to: serializeAws_restJson1RecipientDetails(input.to, context) }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
    ...(input.condition != null && { condition: input.condition }),
    ...(input.eventName != null && { eventName: input.eventName }),
  };
};

const serializeAws_restJson1Events = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Event(entry, context);
    });
};

const serializeAws_restJson1FirehoseAction = (input: FirehoseAction, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStreamName != null && { deliveryStreamName: input.deliveryStreamName }),
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.separator != null && { separator: input.separator }),
  };
};

const serializeAws_restJson1InitializationConfiguration = (
  input: InitializationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.disabledOnInitialization != null && { disabledOnInitialization: input.disabledOnInitialization }),
  };
};

const serializeAws_restJson1InputDefinition = (input: InputDefinition, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: serializeAws_restJson1Attributes(input.attributes, context) }),
  };
};

const serializeAws_restJson1InputIdentifier = (input: InputIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.iotEventsInputIdentifier != null && {
      iotEventsInputIdentifier: serializeAws_restJson1IotEventsInputIdentifier(input.iotEventsInputIdentifier, context),
    }),
    ...(input.iotSiteWiseInputIdentifier != null && {
      iotSiteWiseInputIdentifier: serializeAws_restJson1IotSiteWiseInputIdentifier(
        input.iotSiteWiseInputIdentifier,
        context
      ),
    }),
  };
};

const serializeAws_restJson1IotEventsAction = (input: IotEventsAction, context: __SerdeContext): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1IotEventsInputIdentifier = (
  input: IotEventsInputIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName != null && { inputName: input.inputName }),
  };
};

const serializeAws_restJson1IotSiteWiseAction = (input: IotSiteWiseAction, context: __SerdeContext): any => {
  return {
    ...(input.assetId != null && { assetId: input.assetId }),
    ...(input.entryId != null && { entryId: input.entryId }),
    ...(input.propertyAlias != null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
    ...(input.propertyValue != null && {
      propertyValue: serializeAws_restJson1AssetPropertyValue(input.propertyValue, context),
    }),
  };
};

const serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier = (
  input: IotSiteWiseAssetModelPropertyIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.assetModelId != null && { assetModelId: input.assetModelId }),
    ...(input.propertyId != null && { propertyId: input.propertyId }),
  };
};

const serializeAws_restJson1IotSiteWiseInputIdentifier = (
  input: IotSiteWiseInputIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.iotSiteWiseAssetModelPropertyIdentifier != null && {
      iotSiteWiseAssetModelPropertyIdentifier: serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier(
        input.iotSiteWiseAssetModelPropertyIdentifier,
        context
      ),
    }),
  };
};

const serializeAws_restJson1IotTopicPublishAction = (input: IotTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.mqttTopic != null && { mqttTopic: input.mqttTopic }),
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1LambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  return {
    ...(input.functionArn != null && { functionArn: input.functionArn }),
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.detectorDebugOptions != null && {
      detectorDebugOptions: serializeAws_restJson1DetectorDebugOptions(input.detectorDebugOptions, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.level != null && { level: input.level }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1NotificationAction = (input: NotificationAction, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: serializeAws_restJson1NotificationTargetActions(input.action, context) }),
    ...(input.emailConfigurations != null && {
      emailConfigurations: serializeAws_restJson1EmailConfigurations(input.emailConfigurations, context),
    }),
    ...(input.smsConfigurations != null && {
      smsConfigurations: serializeAws_restJson1SMSConfigurations(input.smsConfigurations, context),
    }),
  };
};

const serializeAws_restJson1NotificationActions = (input: NotificationAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NotificationAction(entry, context);
    });
};

const serializeAws_restJson1NotificationTargetActions = (
  input: NotificationTargetActions,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaAction != null && {
      lambdaAction: serializeAws_restJson1LambdaAction(input.lambdaAction, context),
    }),
  };
};

const serializeAws_restJson1OnEnterLifecycle = (input: OnEnterLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: serializeAws_restJson1Events(input.events, context) }),
  };
};

const serializeAws_restJson1OnExitLifecycle = (input: OnExitLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: serializeAws_restJson1Events(input.events, context) }),
  };
};

const serializeAws_restJson1OnInputLifecycle = (input: OnInputLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events != null && { events: serializeAws_restJson1Events(input.events, context) }),
    ...(input.transitionEvents != null && {
      transitionEvents: serializeAws_restJson1TransitionEvents(input.transitionEvents, context),
    }),
  };
};

const serializeAws_restJson1Payload = (input: Payload, context: __SerdeContext): any => {
  return {
    ...(input.contentExpression != null && { contentExpression: input.contentExpression }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1RecipientDetail = (input: RecipientDetail, context: __SerdeContext): any => {
  return {
    ...(input.ssoIdentity != null && { ssoIdentity: serializeAws_restJson1SSOIdentity(input.ssoIdentity, context) }),
  };
};

const serializeAws_restJson1RecipientDetails = (input: RecipientDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RecipientDetail(entry, context);
    });
};

const serializeAws_restJson1ResetTimerAction = (input: ResetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1SetTimerAction = (input: SetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.durationExpression != null && { durationExpression: input.durationExpression }),
    ...(input.seconds != null && { seconds: input.seconds }),
    ...(input.timerName != null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1SetVariableAction = (input: SetVariableAction, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
    ...(input.variableName != null && { variableName: input.variableName }),
  };
};

const serializeAws_restJson1SimpleRule = (input: SimpleRule, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator != null && { comparisonOperator: input.comparisonOperator }),
    ...(input.inputProperty != null && { inputProperty: input.inputProperty }),
    ...(input.threshold != null && { threshold: input.threshold }),
  };
};

const serializeAws_restJson1SMSConfiguration = (input: SMSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage != null && { additionalMessage: input.additionalMessage }),
    ...(input.recipients != null && { recipients: serializeAws_restJson1RecipientDetails(input.recipients, context) }),
    ...(input.senderId != null && { senderId: input.senderId }),
  };
};

const serializeAws_restJson1SMSConfigurations = (input: SMSConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SMSConfiguration(entry, context);
    });
};

const serializeAws_restJson1SNSTopicPublishAction = (input: SNSTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  };
};

const serializeAws_restJson1SqsAction = (input: SqsAction, context: __SerdeContext): any => {
  return {
    ...(input.payload != null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.queueUrl != null && { queueUrl: input.queueUrl }),
    ...(input.useBase64 != null && { useBase64: input.useBase64 }),
  };
};

const serializeAws_restJson1SSOIdentity = (input: SSOIdentity, context: __SerdeContext): any => {
  return {
    ...(input.identityStoreId != null && { identityStoreId: input.identityStoreId }),
    ...(input.userId != null && { userId: input.userId }),
  };
};

const serializeAws_restJson1State = (input: State, context: __SerdeContext): any => {
  return {
    ...(input.onEnter != null && { onEnter: serializeAws_restJson1OnEnterLifecycle(input.onEnter, context) }),
    ...(input.onExit != null && { onExit: serializeAws_restJson1OnExitLifecycle(input.onExit, context) }),
    ...(input.onInput != null && { onInput: serializeAws_restJson1OnInputLifecycle(input.onInput, context) }),
    ...(input.stateName != null && { stateName: input.stateName }),
  };
};

const serializeAws_restJson1States = (input: State[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1State(entry, context);
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TransitionEvent = (input: TransitionEvent, context: __SerdeContext): any => {
  return {
    ...(input.actions != null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
    ...(input.condition != null && { condition: input.condition }),
    ...(input.eventName != null && { eventName: input.eventName }),
    ...(input.nextState != null && { nextState: input.nextState }),
  };
};

const serializeAws_restJson1TransitionEvents = (input: TransitionEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TransitionEvent(entry, context);
    });
};

const deserializeAws_restJson1AcknowledgeFlow = (output: any, context: __SerdeContext): AcknowledgeFlow => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    clearTimer:
      output.clearTimer != null ? deserializeAws_restJson1ClearTimerAction(output.clearTimer, context) : undefined,
    dynamoDB: output.dynamoDB != null ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context) : undefined,
    dynamoDBv2:
      output.dynamoDBv2 != null ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context) : undefined,
    firehose: output.firehose != null ? deserializeAws_restJson1FirehoseAction(output.firehose, context) : undefined,
    iotEvents:
      output.iotEvents != null ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context) : undefined,
    iotSiteWise:
      output.iotSiteWise != null ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context) : undefined,
    iotTopicPublish:
      output.iotTopicPublish != null
        ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
        : undefined,
    lambda: output.lambda != null ? deserializeAws_restJson1LambdaAction(output.lambda, context) : undefined,
    resetTimer:
      output.resetTimer != null ? deserializeAws_restJson1ResetTimerAction(output.resetTimer, context) : undefined,
    setTimer: output.setTimer != null ? deserializeAws_restJson1SetTimerAction(output.setTimer, context) : undefined,
    setVariable:
      output.setVariable != null ? deserializeAws_restJson1SetVariableAction(output.setVariable, context) : undefined,
    sns: output.sns != null ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context) : undefined,
    sqs: output.sqs != null ? deserializeAws_restJson1SqsAction(output.sqs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Actions = (output: any, context: __SerdeContext): Action[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Action(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmAction = (output: any, context: __SerdeContext): AlarmAction => {
  return {
    dynamoDB: output.dynamoDB != null ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context) : undefined,
    dynamoDBv2:
      output.dynamoDBv2 != null ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context) : undefined,
    firehose: output.firehose != null ? deserializeAws_restJson1FirehoseAction(output.firehose, context) : undefined,
    iotEvents:
      output.iotEvents != null ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context) : undefined,
    iotSiteWise:
      output.iotSiteWise != null ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context) : undefined,
    iotTopicPublish:
      output.iotTopicPublish != null
        ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
        : undefined,
    lambda: output.lambda != null ? deserializeAws_restJson1LambdaAction(output.lambda, context) : undefined,
    sns: output.sns != null ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context) : undefined,
    sqs: output.sqs != null ? deserializeAws_restJson1SqsAction(output.sqs, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmActions = (output: any, context: __SerdeContext): AlarmAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmCapabilities = (output: any, context: __SerdeContext): AlarmCapabilities => {
  return {
    acknowledgeFlow:
      output.acknowledgeFlow != null
        ? deserializeAws_restJson1AcknowledgeFlow(output.acknowledgeFlow, context)
        : undefined,
    initializationConfiguration:
      output.initializationConfiguration != null
        ? deserializeAws_restJson1InitializationConfiguration(output.initializationConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmEventActions = (output: any, context: __SerdeContext): AlarmEventActions => {
  return {
    alarmActions:
      output.alarmActions != null ? deserializeAws_restJson1AlarmActions(output.alarmActions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmModelSummaries = (output: any, context: __SerdeContext): AlarmModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmModelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmModelSummary = (output: any, context: __SerdeContext): AlarmModelSummary => {
  return {
    alarmModelDescription: __expectString(output.alarmModelDescription),
    alarmModelName: __expectString(output.alarmModelName),
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): AlarmModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmModelVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AlarmModelVersionSummary = (
  output: any,
  context: __SerdeContext
): AlarmModelVersionSummary => {
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

const deserializeAws_restJson1AlarmNotification = (output: any, context: __SerdeContext): AlarmNotification => {
  return {
    notificationActions:
      output.notificationActions != null
        ? deserializeAws_restJson1NotificationActions(output.notificationActions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmRule = (output: any, context: __SerdeContext): AlarmRule => {
  return {
    simpleRule: output.simpleRule != null ? deserializeAws_restJson1SimpleRule(output.simpleRule, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisResult = (output: any, context: __SerdeContext): AnalysisResult => {
  return {
    level: __expectString(output.level),
    locations:
      output.locations != null ? deserializeAws_restJson1AnalysisResultLocations(output.locations, context) : undefined,
    message: __expectString(output.message),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AnalysisResultLocation = (
  output: any,
  context: __SerdeContext
): AnalysisResultLocation => {
  return {
    path: __expectString(output.path),
  } as any;
};

const deserializeAws_restJson1AnalysisResultLocations = (
  output: any,
  context: __SerdeContext
): AnalysisResultLocation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisResultLocation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AnalysisResults = (output: any, context: __SerdeContext): AnalysisResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssetPropertyTimestamp = (
  output: any,
  context: __SerdeContext
): AssetPropertyTimestamp => {
  return {
    offsetInNanos: __expectString(output.offsetInNanos),
    timeInSeconds: __expectString(output.timeInSeconds),
  } as any;
};

const deserializeAws_restJson1AssetPropertyValue = (output: any, context: __SerdeContext): AssetPropertyValue => {
  return {
    quality: __expectString(output.quality),
    timestamp:
      output.timestamp != null ? deserializeAws_restJson1AssetPropertyTimestamp(output.timestamp, context) : undefined,
    value: output.value != null ? deserializeAws_restJson1AssetPropertyVariant(output.value, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AssetPropertyVariant = (output: any, context: __SerdeContext): AssetPropertyVariant => {
  return {
    booleanValue: __expectString(output.booleanValue),
    doubleValue: __expectString(output.doubleValue),
    integerValue: __expectString(output.integerValue),
    stringValue: __expectString(output.stringValue),
  } as any;
};

const deserializeAws_restJson1Attribute = (output: any, context: __SerdeContext): Attribute => {
  return {
    jsonPath: __expectString(output.jsonPath),
  } as any;
};

const deserializeAws_restJson1Attributes = (output: any, context: __SerdeContext): Attribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ClearTimerAction = (output: any, context: __SerdeContext): ClearTimerAction => {
  return {
    timerName: __expectString(output.timerName),
  } as any;
};

const deserializeAws_restJson1DetectorDebugOption = (output: any, context: __SerdeContext): DetectorDebugOption => {
  return {
    detectorModelName: __expectString(output.detectorModelName),
    keyValue: __expectString(output.keyValue),
  } as any;
};

const deserializeAws_restJson1DetectorDebugOptions = (output: any, context: __SerdeContext): DetectorDebugOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorDebugOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectorModel = (output: any, context: __SerdeContext): DetectorModel => {
  return {
    detectorModelConfiguration:
      output.detectorModelConfiguration != null
        ? deserializeAws_restJson1DetectorModelConfiguration(output.detectorModelConfiguration, context)
        : undefined,
    detectorModelDefinition:
      output.detectorModelDefinition != null
        ? deserializeAws_restJson1DetectorModelDefinition(output.detectorModelDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectorModelConfiguration = (
  output: any,
  context: __SerdeContext
): DetectorModelConfiguration => {
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

const deserializeAws_restJson1DetectorModelDefinition = (
  output: any,
  context: __SerdeContext
): DetectorModelDefinition => {
  return {
    initialStateName: __expectString(output.initialStateName),
    states: output.states != null ? deserializeAws_restJson1States(output.states, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DetectorModelSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorModelSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectorModelSummary = (output: any, context: __SerdeContext): DetectorModelSummary => {
  return {
    creationTime:
      output.creationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTime)))
        : undefined,
    detectorModelDescription: __expectString(output.detectorModelDescription),
    detectorModelName: __expectString(output.detectorModelName),
  } as any;
};

const deserializeAws_restJson1DetectorModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorModelVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectorModelVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary => {
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

const deserializeAws_restJson1DynamoDBAction = (output: any, context: __SerdeContext): DynamoDBAction => {
  return {
    hashKeyField: __expectString(output.hashKeyField),
    hashKeyType: __expectString(output.hashKeyType),
    hashKeyValue: __expectString(output.hashKeyValue),
    operation: __expectString(output.operation),
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
    payloadField: __expectString(output.payloadField),
    rangeKeyField: __expectString(output.rangeKeyField),
    rangeKeyType: __expectString(output.rangeKeyType),
    rangeKeyValue: __expectString(output.rangeKeyValue),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1DynamoDBv2Action = (output: any, context: __SerdeContext): DynamoDBv2Action => {
  return {
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1EmailConfiguration = (output: any, context: __SerdeContext): EmailConfiguration => {
  return {
    content: output.content != null ? deserializeAws_restJson1EmailContent(output.content, context) : undefined,
    from: __expectString(output.from),
    recipients:
      output.recipients != null ? deserializeAws_restJson1EmailRecipients(output.recipients, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EmailConfigurations = (output: any, context: __SerdeContext): EmailConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EmailConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EmailContent = (output: any, context: __SerdeContext): EmailContent => {
  return {
    additionalMessage: __expectString(output.additionalMessage),
    subject: __expectString(output.subject),
  } as any;
};

const deserializeAws_restJson1EmailRecipients = (output: any, context: __SerdeContext): EmailRecipients => {
  return {
    to: output.to != null ? deserializeAws_restJson1RecipientDetails(output.to, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Event = (output: any, context: __SerdeContext): Event => {
  return {
    actions: output.actions != null ? deserializeAws_restJson1Actions(output.actions, context) : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
  } as any;
};

const deserializeAws_restJson1Events = (output: any, context: __SerdeContext): Event[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Event(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FirehoseAction = (output: any, context: __SerdeContext): FirehoseAction => {
  return {
    deliveryStreamName: __expectString(output.deliveryStreamName),
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
    separator: __expectString(output.separator),
  } as any;
};

const deserializeAws_restJson1InitializationConfiguration = (
  output: any,
  context: __SerdeContext
): InitializationConfiguration => {
  return {
    disabledOnInitialization: __expectBoolean(output.disabledOnInitialization),
  } as any;
};

const deserializeAws_restJson1Input = (output: any, context: __SerdeContext): Input => {
  return {
    inputConfiguration:
      output.inputConfiguration != null
        ? deserializeAws_restJson1InputConfiguration(output.inputConfiguration, context)
        : undefined,
    inputDefinition:
      output.inputDefinition != null
        ? deserializeAws_restJson1InputDefinition(output.inputDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
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

const deserializeAws_restJson1InputDefinition = (output: any, context: __SerdeContext): InputDefinition => {
  return {
    attributes: output.attributes != null ? deserializeAws_restJson1Attributes(output.attributes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InputSummaries = (output: any, context: __SerdeContext): InputSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InputSummary = (output: any, context: __SerdeContext): InputSummary => {
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

const deserializeAws_restJson1IotEventsAction = (output: any, context: __SerdeContext): IotEventsAction => {
  return {
    inputName: __expectString(output.inputName),
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IotSiteWiseAction = (output: any, context: __SerdeContext): IotSiteWiseAction => {
  return {
    assetId: __expectString(output.assetId),
    entryId: __expectString(output.entryId),
    propertyAlias: __expectString(output.propertyAlias),
    propertyId: __expectString(output.propertyId),
    propertyValue:
      output.propertyValue != null
        ? deserializeAws_restJson1AssetPropertyValue(output.propertyValue, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IotTopicPublishAction = (output: any, context: __SerdeContext): IotTopicPublishAction => {
  return {
    mqttTopic: __expectString(output.mqttTopic),
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  return {
    functionArn: __expectString(output.functionArn),
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    detectorDebugOptions:
      output.detectorDebugOptions != null
        ? deserializeAws_restJson1DetectorDebugOptions(output.detectorDebugOptions, context)
        : undefined,
    enabled: __expectBoolean(output.enabled),
    level: __expectString(output.level),
    roleArn: __expectString(output.roleArn),
  } as any;
};

const deserializeAws_restJson1NotificationAction = (output: any, context: __SerdeContext): NotificationAction => {
  return {
    action:
      output.action != null ? deserializeAws_restJson1NotificationTargetActions(output.action, context) : undefined,
    emailConfigurations:
      output.emailConfigurations != null
        ? deserializeAws_restJson1EmailConfigurations(output.emailConfigurations, context)
        : undefined,
    smsConfigurations:
      output.smsConfigurations != null
        ? deserializeAws_restJson1SMSConfigurations(output.smsConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationActions = (output: any, context: __SerdeContext): NotificationAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NotificationTargetActions = (
  output: any,
  context: __SerdeContext
): NotificationTargetActions => {
  return {
    lambdaAction:
      output.lambdaAction != null ? deserializeAws_restJson1LambdaAction(output.lambdaAction, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OnEnterLifecycle = (output: any, context: __SerdeContext): OnEnterLifecycle => {
  return {
    events: output.events != null ? deserializeAws_restJson1Events(output.events, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OnExitLifecycle = (output: any, context: __SerdeContext): OnExitLifecycle => {
  return {
    events: output.events != null ? deserializeAws_restJson1Events(output.events, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OnInputLifecycle = (output: any, context: __SerdeContext): OnInputLifecycle => {
  return {
    events: output.events != null ? deserializeAws_restJson1Events(output.events, context) : undefined,
    transitionEvents:
      output.transitionEvents != null
        ? deserializeAws_restJson1TransitionEvents(output.transitionEvents, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Payload = (output: any, context: __SerdeContext): Payload => {
  return {
    contentExpression: __expectString(output.contentExpression),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1RecipientDetail = (output: any, context: __SerdeContext): RecipientDetail => {
  return {
    ssoIdentity:
      output.ssoIdentity != null ? deserializeAws_restJson1SSOIdentity(output.ssoIdentity, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RecipientDetails = (output: any, context: __SerdeContext): RecipientDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipientDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResetTimerAction = (output: any, context: __SerdeContext): ResetTimerAction => {
  return {
    timerName: __expectString(output.timerName),
  } as any;
};

const deserializeAws_restJson1RoutedResource = (output: any, context: __SerdeContext): RoutedResource => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1RoutedResources = (output: any, context: __SerdeContext): RoutedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoutedResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SetTimerAction = (output: any, context: __SerdeContext): SetTimerAction => {
  return {
    durationExpression: __expectString(output.durationExpression),
    seconds: __expectInt32(output.seconds),
    timerName: __expectString(output.timerName),
  } as any;
};

const deserializeAws_restJson1SetVariableAction = (output: any, context: __SerdeContext): SetVariableAction => {
  return {
    value: __expectString(output.value),
    variableName: __expectString(output.variableName),
  } as any;
};

const deserializeAws_restJson1SimpleRule = (output: any, context: __SerdeContext): SimpleRule => {
  return {
    comparisonOperator: __expectString(output.comparisonOperator),
    inputProperty: __expectString(output.inputProperty),
    threshold: __expectString(output.threshold),
  } as any;
};

const deserializeAws_restJson1SMSConfiguration = (output: any, context: __SerdeContext): SMSConfiguration => {
  return {
    additionalMessage: __expectString(output.additionalMessage),
    recipients:
      output.recipients != null ? deserializeAws_restJson1RecipientDetails(output.recipients, context) : undefined,
    senderId: __expectString(output.senderId),
  } as any;
};

const deserializeAws_restJson1SMSConfigurations = (output: any, context: __SerdeContext): SMSConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SMSConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SNSTopicPublishAction = (output: any, context: __SerdeContext): SNSTopicPublishAction => {
  return {
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_restJson1SqsAction = (output: any, context: __SerdeContext): SqsAction => {
  return {
    payload: output.payload != null ? deserializeAws_restJson1Payload(output.payload, context) : undefined,
    queueUrl: __expectString(output.queueUrl),
    useBase64: __expectBoolean(output.useBase64),
  } as any;
};

const deserializeAws_restJson1SSOIdentity = (output: any, context: __SerdeContext): SSOIdentity => {
  return {
    identityStoreId: __expectString(output.identityStoreId),
    userId: __expectString(output.userId),
  } as any;
};

const deserializeAws_restJson1State = (output: any, context: __SerdeContext): State => {
  return {
    onEnter: output.onEnter != null ? deserializeAws_restJson1OnEnterLifecycle(output.onEnter, context) : undefined,
    onExit: output.onExit != null ? deserializeAws_restJson1OnExitLifecycle(output.onExit, context) : undefined,
    onInput: output.onInput != null ? deserializeAws_restJson1OnInputLifecycle(output.onInput, context) : undefined,
    stateName: __expectString(output.stateName),
  } as any;
};

const deserializeAws_restJson1States = (output: any, context: __SerdeContext): State[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1State(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TransitionEvent = (output: any, context: __SerdeContext): TransitionEvent => {
  return {
    actions: output.actions != null ? deserializeAws_restJson1Actions(output.actions, context) : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
    nextState: __expectString(output.nextState),
  } as any;
};

const deserializeAws_restJson1TransitionEvents = (output: any, context: __SerdeContext): TransitionEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitionEvent(entry, context);
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
