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
import {
  ListAlarmModelVersionsCommandInput,
  ListAlarmModelVersionsCommandOutput,
} from "../commands/ListAlarmModelVersionsCommand";
import { ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput } from "../commands/ListAlarmModelsCommand";
import {
  ListDetectorModelVersionsCommandInput,
  ListDetectorModelVersionsCommandOutput,
} from "../commands/ListDetectorModelVersionsCommand";
import { ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput } from "../commands/ListDetectorModelsCommand";
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
  SMSConfiguration,
  SNSTopicPublishAction,
  SSOIdentity,
  ServiceUnavailableException,
  SetTimerAction,
  SetVariableAction,
  SimpleRule,
  SqsAction,
  State,
  Tag,
  ThrottlingException,
  TransitionEvent,
  UnsupportedOperationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateAlarmModelCommand = async (
  input: CreateAlarmModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models";
  let body: any;
  body = JSON.stringify({
    ...(input.alarmCapabilities !== undefined &&
      input.alarmCapabilities !== null && {
        alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
      }),
    ...(input.alarmEventActions !== undefined &&
      input.alarmEventActions !== null && {
        alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
      }),
    ...(input.alarmModelDescription !== undefined &&
      input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmModelName !== undefined &&
      input.alarmModelName !== null && { alarmModelName: input.alarmModelName }),
    ...(input.alarmNotification !== undefined &&
      input.alarmNotification !== null && {
        alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
      }),
    ...(input.alarmRule !== undefined &&
      input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.severity !== undefined && input.severity !== null && { severity: input.severity }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models";
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition !== undefined &&
      input.detectorModelDefinition !== null && {
        detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
      }),
    ...(input.detectorModelDescription !== undefined &&
      input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription }),
    ...(input.detectorModelName !== undefined &&
      input.detectorModelName !== null && { detectorModelName: input.detectorModelName }),
    ...(input.evaluationMethod !== undefined &&
      input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod }),
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs";
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition !== undefined &&
      input.inputDefinition !== null && {
        inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
      }),
    ...(input.inputDescription !== undefined &&
      input.inputDescription !== null && { inputDescription: input.inputDescription }),
    ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  if (input.alarmModelName !== undefined) {
    const labelValue: string = input.alarmModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: alarmModelName.");
    }
    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: alarmModelName.");
  }
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
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: detectorModelName.");
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: detectorModelName.");
  }
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
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
  }
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
  if (input.alarmModelName !== undefined) {
    const labelValue: string = input.alarmModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: alarmModelName.");
    }
    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: alarmModelName.");
  }
  const query: any = {
    ...(input.alarmModelVersion !== undefined && { version: input.alarmModelVersion }),
  };
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
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: detectorModelName.");
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: detectorModelName.");
  }
  const query: any = {
    ...(input.detectorModelVersion !== undefined && { version: input.detectorModelVersion }),
  };
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
  if (input.analysisId !== undefined) {
    const labelValue: string = input.analysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analysisId.");
    }
    resolvedPath = resolvedPath.replace("{analysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analysisId.");
  }
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
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
  }
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
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
  if (input.analysisId !== undefined) {
    const labelValue: string = input.analysisId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: analysisId.");
    }
    resolvedPath = resolvedPath.replace("{analysisId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: analysisId.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/alarm-models";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.alarmModelName !== undefined) {
    const labelValue: string = input.alarmModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: alarmModelName.");
    }
    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: alarmModelName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/detector-models";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: detectorModelName.");
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: detectorModelName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/input-routings";
  let body: any;
  body = JSON.stringify({
    ...(input.inputIdentifier !== undefined &&
      input.inputIdentifier !== null && {
        inputIdentifier: serializeAws_restJson1InputIdentifier(input.inputIdentifier, context),
      }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/inputs";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/logging";
  let body: any;
  body = JSON.stringify({
    ...(input.loggingOptions !== undefined &&
      input.loggingOptions !== null && {
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/analysis/detector-models";
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition !== undefined &&
      input.detectorModelDefinition !== null && {
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1Tags(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn }),
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.alarmModelName !== undefined) {
    const labelValue: string = input.alarmModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: alarmModelName.");
    }
    resolvedPath = resolvedPath.replace("{alarmModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: alarmModelName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.alarmCapabilities !== undefined &&
      input.alarmCapabilities !== null && {
        alarmCapabilities: serializeAws_restJson1AlarmCapabilities(input.alarmCapabilities, context),
      }),
    ...(input.alarmEventActions !== undefined &&
      input.alarmEventActions !== null && {
        alarmEventActions: serializeAws_restJson1AlarmEventActions(input.alarmEventActions, context),
      }),
    ...(input.alarmModelDescription !== undefined &&
      input.alarmModelDescription !== null && { alarmModelDescription: input.alarmModelDescription }),
    ...(input.alarmNotification !== undefined &&
      input.alarmNotification !== null && {
        alarmNotification: serializeAws_restJson1AlarmNotification(input.alarmNotification, context),
      }),
    ...(input.alarmRule !== undefined &&
      input.alarmRule !== null && { alarmRule: serializeAws_restJson1AlarmRule(input.alarmRule, context) }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.severity !== undefined && input.severity !== null && { severity: input.severity }),
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
  if (input.detectorModelName !== undefined) {
    const labelValue: string = input.detectorModelName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: detectorModelName.");
    }
    resolvedPath = resolvedPath.replace("{detectorModelName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: detectorModelName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.detectorModelDefinition !== undefined &&
      input.detectorModelDefinition !== null && {
        detectorModelDefinition: serializeAws_restJson1DetectorModelDefinition(input.detectorModelDefinition, context),
      }),
    ...(input.detectorModelDescription !== undefined &&
      input.detectorModelDescription !== null && { detectorModelDescription: input.detectorModelDescription }),
    ...(input.evaluationMethod !== undefined &&
      input.evaluationMethod !== null && { evaluationMethod: input.evaluationMethod }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
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
  if (input.inputName !== undefined) {
    const labelValue: string = input.inputName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: inputName.");
    }
    resolvedPath = resolvedPath.replace("{inputName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: inputName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.inputDefinition !== undefined &&
      input.inputDefinition !== null && {
        inputDefinition: serializeAws_restJson1InputDefinition(input.inputDefinition, context),
      }),
    ...(input.inputDescription !== undefined &&
      input.inputDescription !== null && { inputDescription: input.inputDescription }),
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
  const contents: CreateAlarmModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarmModelArn: undefined,
    alarmModelVersion: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
  }
  if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAlarmModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDetectorModelCommandError(output, context);
  }
  const contents: CreateDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    detectorModelConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInputCommandError(output, context);
  }
  const contents: CreateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    inputConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceAlreadyExistsException":
    case "com.amazonaws.iotevents#ResourceAlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAlarmModelCommandError(output, context);
  }
  const contents: DeleteAlarmModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAlarmModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDetectorModelCommandError(output, context);
  }
  const contents: DeleteDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInputCommandError(output, context);
  }
  const contents: DeleteInputCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAlarmModelCommandError(output, context);
  }
  const contents: DescribeAlarmModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarmCapabilities: undefined,
    alarmEventActions: undefined,
    alarmModelArn: undefined,
    alarmModelDescription: undefined,
    alarmModelName: undefined,
    alarmModelVersion: undefined,
    alarmNotification: undefined,
    alarmRule: undefined,
    creationTime: undefined,
    key: undefined,
    lastUpdateTime: undefined,
    roleArn: undefined,
    severity: undefined,
    status: undefined,
    statusMessage: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmCapabilities !== undefined && data.alarmCapabilities !== null) {
    contents.alarmCapabilities = deserializeAws_restJson1AlarmCapabilities(data.alarmCapabilities, context);
  }
  if (data.alarmEventActions !== undefined && data.alarmEventActions !== null) {
    contents.alarmEventActions = deserializeAws_restJson1AlarmEventActions(data.alarmEventActions, context);
  }
  if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelDescription !== undefined && data.alarmModelDescription !== null) {
    contents.alarmModelDescription = __expectString(data.alarmModelDescription);
  }
  if (data.alarmModelName !== undefined && data.alarmModelName !== null) {
    contents.alarmModelName = __expectString(data.alarmModelName);
  }
  if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.alarmNotification !== undefined && data.alarmNotification !== null) {
    contents.alarmNotification = deserializeAws_restJson1AlarmNotification(data.alarmNotification, context);
  }
  if (data.alarmRule !== undefined && data.alarmRule !== null) {
    contents.alarmRule = deserializeAws_restJson1AlarmRule(data.alarmRule, context);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
  }
  if (data.key !== undefined && data.key !== null) {
    contents.key = __expectString(data.key);
  }
  if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.severity !== undefined && data.severity !== null) {
    contents.severity = __expectInt32(data.severity);
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  if (data.statusMessage !== undefined && data.statusMessage !== null) {
    contents.statusMessage = __expectString(data.statusMessage);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAlarmModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDetectorModelCommandError(output, context);
  }
  const contents: DescribeDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    detectorModel: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModel !== undefined && data.detectorModel !== null) {
    contents.detectorModel = deserializeAws_restJson1DetectorModel(data.detectorModel, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError(output, context);
  }
  const contents: DescribeDetectorModelAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDetectorModelAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDetectorModelAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeInputCommandError(output, context);
  }
  const contents: DescribeInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    input: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.input !== undefined && data.input !== null) {
    contents.input = deserializeAws_restJson1Input(data.input, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeLoggingOptionsCommandError(output, context);
  }
  const contents: DescribeLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    loggingOptions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.loggingOptions !== undefined && data.loggingOptions !== null) {
    contents.loggingOptions = deserializeAws_restJson1LoggingOptions(data.loggingOptions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError(output, context);
  }
  const contents: GetDetectorModelAnalysisResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    analysisResults: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisResults !== undefined && data.analysisResults !== null) {
    contents.analysisResults = deserializeAws_restJson1AnalysisResults(data.analysisResults, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDetectorModelAnalysisResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDetectorModelAnalysisResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAlarmModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmModelsCommandError(output, context);
  }
  const contents: ListAlarmModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarmModelSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelSummaries !== undefined && data.alarmModelSummaries !== null) {
    contents.alarmModelSummaries = deserializeAws_restJson1AlarmModelSummaries(data.alarmModelSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAlarmModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListAlarmModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAlarmModelVersionsCommandError(output, context);
  }
  const contents: ListAlarmModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarmModelVersionSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelVersionSummaries !== undefined && data.alarmModelVersionSummaries !== null) {
    contents.alarmModelVersionSummaries = deserializeAws_restJson1AlarmModelVersionSummaries(
      data.alarmModelVersionSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAlarmModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAlarmModelVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDetectorModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorModelsCommandError(output, context);
  }
  const contents: ListDetectorModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    detectorModelSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelSummaries !== undefined && data.detectorModelSummaries !== null) {
    contents.detectorModelSummaries = deserializeAws_restJson1DetectorModelSummaries(
      data.detectorModelSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDetectorModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDetectorModelVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDetectorModelVersionsCommandError(output, context);
  }
  const contents: ListDetectorModelVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    detectorModelVersionSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelVersionSummaries !== undefined && data.detectorModelVersionSummaries !== null) {
    contents.detectorModelVersionSummaries = deserializeAws_restJson1DetectorModelVersionSummaries(
      data.detectorModelVersionSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDetectorModelVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDetectorModelVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInputRoutingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInputRoutingsCommandError(output, context);
  }
  const contents: ListInputRoutingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    routedResources: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.routedResources !== undefined && data.routedResources !== null) {
    contents.routedResources = deserializeAws_restJson1RoutedResources(data.routedResources, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInputRoutingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputRoutingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListInputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInputsCommandError(output, context);
  }
  const contents: ListInputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    inputSummaries: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputSummaries !== undefined && data.inputSummaries !== null) {
    contents.inputSummaries = deserializeAws_restJson1InputSummaries(data.inputSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListInputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutLoggingOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutLoggingOptionsCommandError(output, context);
  }
  const contents: PutLoggingOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutLoggingOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutLoggingOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnsupportedOperationException":
    case "com.amazonaws.iotevents#UnsupportedOperationException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedOperationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1StartDetectorModelAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartDetectorModelAnalysisCommandError(output, context);
  }
  const contents: StartDetectorModelAnalysisCommandOutput = {
    $metadata: deserializeMetadata(output),
    analysisId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.analysisId !== undefined && data.analysisId !== null) {
    contents.analysisId = __expectString(data.analysisId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartDetectorModelAnalysisCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDetectorModelAnalysisCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.iotevents#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateAlarmModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAlarmModelCommandError(output, context);
  }
  const contents: UpdateAlarmModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    alarmModelArn: undefined,
    alarmModelVersion: undefined,
    creationTime: undefined,
    lastUpdateTime: undefined,
    status: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.alarmModelArn !== undefined && data.alarmModelArn !== null) {
    contents.alarmModelArn = __expectString(data.alarmModelArn);
  }
  if (data.alarmModelVersion !== undefined && data.alarmModelVersion !== null) {
    contents.alarmModelVersion = __expectString(data.alarmModelVersion);
  }
  if (data.creationTime !== undefined && data.creationTime !== null) {
    contents.creationTime = new Date(Math.round(data.creationTime * 1000));
  }
  if (data.lastUpdateTime !== undefined && data.lastUpdateTime !== null) {
    contents.lastUpdateTime = new Date(Math.round(data.lastUpdateTime * 1000));
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = __expectString(data.status);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAlarmModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAlarmModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateDetectorModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDetectorModelCommandError(output, context);
  }
  const contents: UpdateDetectorModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    detectorModelConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.detectorModelConfiguration !== undefined && data.detectorModelConfiguration !== null) {
    contents.detectorModelConfiguration = deserializeAws_restJson1DetectorModelConfiguration(
      data.detectorModelConfiguration,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateDetectorModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDetectorModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateInputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInputCommandError(output, context);
  }
  const contents: UpdateInputCommandOutput = {
    $metadata: deserializeMetadata(output),
    inputConfiguration: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.inputConfiguration !== undefined && data.inputConfiguration !== null) {
    contents.inputConfiguration = deserializeAws_restJson1InputConfiguration(data.inputConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateInputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalFailureException":
    case "com.amazonaws.iotevents#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.iotevents#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.iotevents#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.iotevents#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.iotevents#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.iotevents#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
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
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceAlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceAlreadyExistsException> => {
  const contents: ResourceAlreadyExistsException = {
    name: "ResourceAlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceArn: undefined,
    resourceId: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  return contents;
};

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnsupportedOperationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperationException> => {
  const contents: UnsupportedOperationException = {
    name: "UnsupportedOperationException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1AcknowledgeFlow = (input: AcknowledgeFlow, context: __SerdeContext): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.clearTimer !== undefined &&
      input.clearTimer !== null && { clearTimer: serializeAws_restJson1ClearTimerAction(input.clearTimer, context) }),
    ...(input.dynamoDB !== undefined &&
      input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 !== undefined &&
      input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose !== undefined &&
      input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents !== undefined &&
      input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise !== undefined &&
      input.iotSiteWise !== null && {
        iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
      }),
    ...(input.iotTopicPublish !== undefined &&
      input.iotTopicPublish !== null && {
        iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
      }),
    ...(input.lambda !== undefined &&
      input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
    ...(input.resetTimer !== undefined &&
      input.resetTimer !== null && { resetTimer: serializeAws_restJson1ResetTimerAction(input.resetTimer, context) }),
    ...(input.setTimer !== undefined &&
      input.setTimer !== null && { setTimer: serializeAws_restJson1SetTimerAction(input.setTimer, context) }),
    ...(input.setVariable !== undefined &&
      input.setVariable !== null && {
        setVariable: serializeAws_restJson1SetVariableAction(input.setVariable, context),
      }),
    ...(input.sns !== undefined &&
      input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
  };
};

const serializeAws_restJson1Actions = (input: Action[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Action(entry, context);
    });
};

const serializeAws_restJson1AlarmAction = (input: AlarmAction, context: __SerdeContext): any => {
  return {
    ...(input.dynamoDB !== undefined &&
      input.dynamoDB !== null && { dynamoDB: serializeAws_restJson1DynamoDBAction(input.dynamoDB, context) }),
    ...(input.dynamoDBv2 !== undefined &&
      input.dynamoDBv2 !== null && { dynamoDBv2: serializeAws_restJson1DynamoDBv2Action(input.dynamoDBv2, context) }),
    ...(input.firehose !== undefined &&
      input.firehose !== null && { firehose: serializeAws_restJson1FirehoseAction(input.firehose, context) }),
    ...(input.iotEvents !== undefined &&
      input.iotEvents !== null && { iotEvents: serializeAws_restJson1IotEventsAction(input.iotEvents, context) }),
    ...(input.iotSiteWise !== undefined &&
      input.iotSiteWise !== null && {
        iotSiteWise: serializeAws_restJson1IotSiteWiseAction(input.iotSiteWise, context),
      }),
    ...(input.iotTopicPublish !== undefined &&
      input.iotTopicPublish !== null && {
        iotTopicPublish: serializeAws_restJson1IotTopicPublishAction(input.iotTopicPublish, context),
      }),
    ...(input.lambda !== undefined &&
      input.lambda !== null && { lambda: serializeAws_restJson1LambdaAction(input.lambda, context) }),
    ...(input.sns !== undefined &&
      input.sns !== null && { sns: serializeAws_restJson1SNSTopicPublishAction(input.sns, context) }),
    ...(input.sqs !== undefined && input.sqs !== null && { sqs: serializeAws_restJson1SqsAction(input.sqs, context) }),
  };
};

const serializeAws_restJson1AlarmActions = (input: AlarmAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AlarmAction(entry, context);
    });
};

const serializeAws_restJson1AlarmCapabilities = (input: AlarmCapabilities, context: __SerdeContext): any => {
  return {
    ...(input.acknowledgeFlow !== undefined &&
      input.acknowledgeFlow !== null && {
        acknowledgeFlow: serializeAws_restJson1AcknowledgeFlow(input.acknowledgeFlow, context),
      }),
    ...(input.initializationConfiguration !== undefined &&
      input.initializationConfiguration !== null && {
        initializationConfiguration: serializeAws_restJson1InitializationConfiguration(
          input.initializationConfiguration,
          context
        ),
      }),
  };
};

const serializeAws_restJson1AlarmEventActions = (input: AlarmEventActions, context: __SerdeContext): any => {
  return {
    ...(input.alarmActions !== undefined &&
      input.alarmActions !== null && { alarmActions: serializeAws_restJson1AlarmActions(input.alarmActions, context) }),
  };
};

const serializeAws_restJson1AlarmNotification = (input: AlarmNotification, context: __SerdeContext): any => {
  return {
    ...(input.notificationActions !== undefined &&
      input.notificationActions !== null && {
        notificationActions: serializeAws_restJson1NotificationActions(input.notificationActions, context),
      }),
  };
};

const serializeAws_restJson1AlarmRule = (input: AlarmRule, context: __SerdeContext): any => {
  return {
    ...(input.simpleRule !== undefined &&
      input.simpleRule !== null && { simpleRule: serializeAws_restJson1SimpleRule(input.simpleRule, context) }),
  };
};

const serializeAws_restJson1AssetPropertyTimestamp = (input: AssetPropertyTimestamp, context: __SerdeContext): any => {
  return {
    ...(input.offsetInNanos !== undefined && input.offsetInNanos !== null && { offsetInNanos: input.offsetInNanos }),
    ...(input.timeInSeconds !== undefined && input.timeInSeconds !== null && { timeInSeconds: input.timeInSeconds }),
  };
};

const serializeAws_restJson1AssetPropertyValue = (input: AssetPropertyValue, context: __SerdeContext): any => {
  return {
    ...(input.quality !== undefined && input.quality !== null && { quality: input.quality }),
    ...(input.timestamp !== undefined &&
      input.timestamp !== null && {
        timestamp: serializeAws_restJson1AssetPropertyTimestamp(input.timestamp, context),
      }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1AssetPropertyVariant(input.value, context) }),
  };
};

const serializeAws_restJson1AssetPropertyVariant = (input: AssetPropertyVariant, context: __SerdeContext): any => {
  return {
    ...(input.booleanValue !== undefined && input.booleanValue !== null && { booleanValue: input.booleanValue }),
    ...(input.doubleValue !== undefined && input.doubleValue !== null && { doubleValue: input.doubleValue }),
    ...(input.integerValue !== undefined && input.integerValue !== null && { integerValue: input.integerValue }),
    ...(input.stringValue !== undefined && input.stringValue !== null && { stringValue: input.stringValue }),
  };
};

const serializeAws_restJson1Attribute = (input: Attribute, context: __SerdeContext): any => {
  return {
    ...(input.jsonPath !== undefined && input.jsonPath !== null && { jsonPath: input.jsonPath }),
  };
};

const serializeAws_restJson1Attributes = (input: Attribute[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Attribute(entry, context);
    });
};

const serializeAws_restJson1ClearTimerAction = (input: ClearTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1DetectorDebugOption = (input: DetectorDebugOption, context: __SerdeContext): any => {
  return {
    ...(input.detectorModelName !== undefined &&
      input.detectorModelName !== null && { detectorModelName: input.detectorModelName }),
    ...(input.keyValue !== undefined && input.keyValue !== null && { keyValue: input.keyValue }),
  };
};

const serializeAws_restJson1DetectorDebugOptions = (input: DetectorDebugOption[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DetectorDebugOption(entry, context);
    });
};

const serializeAws_restJson1DetectorModelDefinition = (
  input: DetectorModelDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.initialStateName !== undefined &&
      input.initialStateName !== null && { initialStateName: input.initialStateName }),
    ...(input.states !== undefined &&
      input.states !== null && { states: serializeAws_restJson1States(input.states, context) }),
  };
};

const serializeAws_restJson1DynamoDBAction = (input: DynamoDBAction, context: __SerdeContext): any => {
  return {
    ...(input.hashKeyField !== undefined && input.hashKeyField !== null && { hashKeyField: input.hashKeyField }),
    ...(input.hashKeyType !== undefined && input.hashKeyType !== null && { hashKeyType: input.hashKeyType }),
    ...(input.hashKeyValue !== undefined && input.hashKeyValue !== null && { hashKeyValue: input.hashKeyValue }),
    ...(input.operation !== undefined && input.operation !== null && { operation: input.operation }),
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.payloadField !== undefined && input.payloadField !== null && { payloadField: input.payloadField }),
    ...(input.rangeKeyField !== undefined && input.rangeKeyField !== null && { rangeKeyField: input.rangeKeyField }),
    ...(input.rangeKeyType !== undefined && input.rangeKeyType !== null && { rangeKeyType: input.rangeKeyType }),
    ...(input.rangeKeyValue !== undefined && input.rangeKeyValue !== null && { rangeKeyValue: input.rangeKeyValue }),
    ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1DynamoDBv2Action = (input: DynamoDBv2Action, context: __SerdeContext): any => {
  return {
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.tableName !== undefined && input.tableName !== null && { tableName: input.tableName }),
  };
};

const serializeAws_restJson1EmailConfiguration = (input: EmailConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined &&
      input.content !== null && { content: serializeAws_restJson1EmailContent(input.content, context) }),
    ...(input.from !== undefined && input.from !== null && { from: input.from }),
    ...(input.recipients !== undefined &&
      input.recipients !== null && { recipients: serializeAws_restJson1EmailRecipients(input.recipients, context) }),
  };
};

const serializeAws_restJson1EmailConfigurations = (input: EmailConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EmailConfiguration(entry, context);
    });
};

const serializeAws_restJson1EmailContent = (input: EmailContent, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage !== undefined &&
      input.additionalMessage !== null && { additionalMessage: input.additionalMessage }),
    ...(input.subject !== undefined && input.subject !== null && { subject: input.subject }),
  };
};

const serializeAws_restJson1EmailRecipients = (input: EmailRecipients, context: __SerdeContext): any => {
  return {
    ...(input.to !== undefined &&
      input.to !== null && { to: serializeAws_restJson1RecipientDetails(input.to, context) }),
  };
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.actions !== undefined &&
      input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName }),
  };
};

const serializeAws_restJson1Events = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Event(entry, context);
    });
};

const serializeAws_restJson1FirehoseAction = (input: FirehoseAction, context: __SerdeContext): any => {
  return {
    ...(input.deliveryStreamName !== undefined &&
      input.deliveryStreamName !== null && { deliveryStreamName: input.deliveryStreamName }),
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.separator !== undefined && input.separator !== null && { separator: input.separator }),
  };
};

const serializeAws_restJson1InitializationConfiguration = (
  input: InitializationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.disabledOnInitialization !== undefined &&
      input.disabledOnInitialization !== null && { disabledOnInitialization: input.disabledOnInitialization }),
  };
};

const serializeAws_restJson1InputDefinition = (input: InputDefinition, context: __SerdeContext): any => {
  return {
    ...(input.attributes !== undefined &&
      input.attributes !== null && { attributes: serializeAws_restJson1Attributes(input.attributes, context) }),
  };
};

const serializeAws_restJson1InputIdentifier = (input: InputIdentifier, context: __SerdeContext): any => {
  return {
    ...(input.iotEventsInputIdentifier !== undefined &&
      input.iotEventsInputIdentifier !== null && {
        iotEventsInputIdentifier: serializeAws_restJson1IotEventsInputIdentifier(
          input.iotEventsInputIdentifier,
          context
        ),
      }),
    ...(input.iotSiteWiseInputIdentifier !== undefined &&
      input.iotSiteWiseInputIdentifier !== null && {
        iotSiteWiseInputIdentifier: serializeAws_restJson1IotSiteWiseInputIdentifier(
          input.iotSiteWiseInputIdentifier,
          context
        ),
      }),
  };
};

const serializeAws_restJson1IotEventsAction = (input: IotEventsAction, context: __SerdeContext): any => {
  return {
    ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1IotEventsInputIdentifier = (
  input: IotEventsInputIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.inputName !== undefined && input.inputName !== null && { inputName: input.inputName }),
  };
};

const serializeAws_restJson1IotSiteWiseAction = (input: IotSiteWiseAction, context: __SerdeContext): any => {
  return {
    ...(input.assetId !== undefined && input.assetId !== null && { assetId: input.assetId }),
    ...(input.entryId !== undefined && input.entryId !== null && { entryId: input.entryId }),
    ...(input.propertyAlias !== undefined && input.propertyAlias !== null && { propertyAlias: input.propertyAlias }),
    ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
    ...(input.propertyValue !== undefined &&
      input.propertyValue !== null && {
        propertyValue: serializeAws_restJson1AssetPropertyValue(input.propertyValue, context),
      }),
  };
};

const serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier = (
  input: IotSiteWiseAssetModelPropertyIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.assetModelId !== undefined && input.assetModelId !== null && { assetModelId: input.assetModelId }),
    ...(input.propertyId !== undefined && input.propertyId !== null && { propertyId: input.propertyId }),
  };
};

const serializeAws_restJson1IotSiteWiseInputIdentifier = (
  input: IotSiteWiseInputIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.iotSiteWiseAssetModelPropertyIdentifier !== undefined &&
      input.iotSiteWiseAssetModelPropertyIdentifier !== null && {
        iotSiteWiseAssetModelPropertyIdentifier: serializeAws_restJson1IotSiteWiseAssetModelPropertyIdentifier(
          input.iotSiteWiseAssetModelPropertyIdentifier,
          context
        ),
      }),
  };
};

const serializeAws_restJson1IotTopicPublishAction = (input: IotTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.mqttTopic !== undefined && input.mqttTopic !== null && { mqttTopic: input.mqttTopic }),
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1LambdaAction = (input: LambdaAction, context: __SerdeContext): any => {
  return {
    ...(input.functionArn !== undefined && input.functionArn !== null && { functionArn: input.functionArn }),
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
  };
};

const serializeAws_restJson1LoggingOptions = (input: LoggingOptions, context: __SerdeContext): any => {
  return {
    ...(input.detectorDebugOptions !== undefined &&
      input.detectorDebugOptions !== null && {
        detectorDebugOptions: serializeAws_restJson1DetectorDebugOptions(input.detectorDebugOptions, context),
      }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
    ...(input.level !== undefined && input.level !== null && { level: input.level }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1NotificationAction = (input: NotificationAction, context: __SerdeContext): any => {
  return {
    ...(input.action !== undefined &&
      input.action !== null && { action: serializeAws_restJson1NotificationTargetActions(input.action, context) }),
    ...(input.emailConfigurations !== undefined &&
      input.emailConfigurations !== null && {
        emailConfigurations: serializeAws_restJson1EmailConfigurations(input.emailConfigurations, context),
      }),
    ...(input.smsConfigurations !== undefined &&
      input.smsConfigurations !== null && {
        smsConfigurations: serializeAws_restJson1SMSConfigurations(input.smsConfigurations, context),
      }),
  };
};

const serializeAws_restJson1NotificationActions = (input: NotificationAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1NotificationAction(entry, context);
    });
};

const serializeAws_restJson1NotificationTargetActions = (
  input: NotificationTargetActions,
  context: __SerdeContext
): any => {
  return {
    ...(input.lambdaAction !== undefined &&
      input.lambdaAction !== null && { lambdaAction: serializeAws_restJson1LambdaAction(input.lambdaAction, context) }),
  };
};

const serializeAws_restJson1OnEnterLifecycle = (input: OnEnterLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
  };
};

const serializeAws_restJson1OnExitLifecycle = (input: OnExitLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
  };
};

const serializeAws_restJson1OnInputLifecycle = (input: OnInputLifecycle, context: __SerdeContext): any => {
  return {
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_restJson1Events(input.events, context) }),
    ...(input.transitionEvents !== undefined &&
      input.transitionEvents !== null && {
        transitionEvents: serializeAws_restJson1TransitionEvents(input.transitionEvents, context),
      }),
  };
};

const serializeAws_restJson1Payload = (input: Payload, context: __SerdeContext): any => {
  return {
    ...(input.contentExpression !== undefined &&
      input.contentExpression !== null && { contentExpression: input.contentExpression }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1RecipientDetail = (input: RecipientDetail, context: __SerdeContext): any => {
  return {
    ...(input.ssoIdentity !== undefined &&
      input.ssoIdentity !== null && { ssoIdentity: serializeAws_restJson1SSOIdentity(input.ssoIdentity, context) }),
  };
};

const serializeAws_restJson1RecipientDetails = (input: RecipientDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1RecipientDetail(entry, context);
    });
};

const serializeAws_restJson1ResetTimerAction = (input: ResetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1SetTimerAction = (input: SetTimerAction, context: __SerdeContext): any => {
  return {
    ...(input.durationExpression !== undefined &&
      input.durationExpression !== null && { durationExpression: input.durationExpression }),
    ...(input.seconds !== undefined && input.seconds !== null && { seconds: input.seconds }),
    ...(input.timerName !== undefined && input.timerName !== null && { timerName: input.timerName }),
  };
};

const serializeAws_restJson1SetVariableAction = (input: SetVariableAction, context: __SerdeContext): any => {
  return {
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
    ...(input.variableName !== undefined && input.variableName !== null && { variableName: input.variableName }),
  };
};

const serializeAws_restJson1SimpleRule = (input: SimpleRule, context: __SerdeContext): any => {
  return {
    ...(input.comparisonOperator !== undefined &&
      input.comparisonOperator !== null && { comparisonOperator: input.comparisonOperator }),
    ...(input.inputProperty !== undefined && input.inputProperty !== null && { inputProperty: input.inputProperty }),
    ...(input.threshold !== undefined && input.threshold !== null && { threshold: input.threshold }),
  };
};

const serializeAws_restJson1SMSConfiguration = (input: SMSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.additionalMessage !== undefined &&
      input.additionalMessage !== null && { additionalMessage: input.additionalMessage }),
    ...(input.recipients !== undefined &&
      input.recipients !== null && { recipients: serializeAws_restJson1RecipientDetails(input.recipients, context) }),
    ...(input.senderId !== undefined && input.senderId !== null && { senderId: input.senderId }),
  };
};

const serializeAws_restJson1SMSConfigurations = (input: SMSConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SMSConfiguration(entry, context);
    });
};

const serializeAws_restJson1SNSTopicPublishAction = (input: SNSTopicPublishAction, context: __SerdeContext): any => {
  return {
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.targetArn !== undefined && input.targetArn !== null && { targetArn: input.targetArn }),
  };
};

const serializeAws_restJson1SqsAction = (input: SqsAction, context: __SerdeContext): any => {
  return {
    ...(input.payload !== undefined &&
      input.payload !== null && { payload: serializeAws_restJson1Payload(input.payload, context) }),
    ...(input.queueUrl !== undefined && input.queueUrl !== null && { queueUrl: input.queueUrl }),
    ...(input.useBase64 !== undefined && input.useBase64 !== null && { useBase64: input.useBase64 }),
  };
};

const serializeAws_restJson1SSOIdentity = (input: SSOIdentity, context: __SerdeContext): any => {
  return {
    ...(input.identityStoreId !== undefined &&
      input.identityStoreId !== null && { identityStoreId: input.identityStoreId }),
    ...(input.userId !== undefined && input.userId !== null && { userId: input.userId }),
  };
};

const serializeAws_restJson1State = (input: State, context: __SerdeContext): any => {
  return {
    ...(input.onEnter !== undefined &&
      input.onEnter !== null && { onEnter: serializeAws_restJson1OnEnterLifecycle(input.onEnter, context) }),
    ...(input.onExit !== undefined &&
      input.onExit !== null && { onExit: serializeAws_restJson1OnExitLifecycle(input.onExit, context) }),
    ...(input.onInput !== undefined &&
      input.onInput !== null && { onInput: serializeAws_restJson1OnInputLifecycle(input.onInput, context) }),
    ...(input.stateName !== undefined && input.stateName !== null && { stateName: input.stateName }),
  };
};

const serializeAws_restJson1States = (input: State[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1State(entry, context);
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TransitionEvent = (input: TransitionEvent, context: __SerdeContext): any => {
  return {
    ...(input.actions !== undefined &&
      input.actions !== null && { actions: serializeAws_restJson1Actions(input.actions, context) }),
    ...(input.condition !== undefined && input.condition !== null && { condition: input.condition }),
    ...(input.eventName !== undefined && input.eventName !== null && { eventName: input.eventName }),
    ...(input.nextState !== undefined && input.nextState !== null && { nextState: input.nextState }),
  };
};

const serializeAws_restJson1TransitionEvents = (input: TransitionEvent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
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
      output.clearTimer !== undefined && output.clearTimer !== null
        ? deserializeAws_restJson1ClearTimerAction(output.clearTimer, context)
        : undefined,
    dynamoDB:
      output.dynamoDB !== undefined && output.dynamoDB !== null
        ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context)
        : undefined,
    dynamoDBv2:
      output.dynamoDBv2 !== undefined && output.dynamoDBv2 !== null
        ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context)
        : undefined,
    firehose:
      output.firehose !== undefined && output.firehose !== null
        ? deserializeAws_restJson1FirehoseAction(output.firehose, context)
        : undefined,
    iotEvents:
      output.iotEvents !== undefined && output.iotEvents !== null
        ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context)
        : undefined,
    iotSiteWise:
      output.iotSiteWise !== undefined && output.iotSiteWise !== null
        ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context)
        : undefined,
    iotTopicPublish:
      output.iotTopicPublish !== undefined && output.iotTopicPublish !== null
        ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
        : undefined,
    lambda:
      output.lambda !== undefined && output.lambda !== null
        ? deserializeAws_restJson1LambdaAction(output.lambda, context)
        : undefined,
    resetTimer:
      output.resetTimer !== undefined && output.resetTimer !== null
        ? deserializeAws_restJson1ResetTimerAction(output.resetTimer, context)
        : undefined,
    setTimer:
      output.setTimer !== undefined && output.setTimer !== null
        ? deserializeAws_restJson1SetTimerAction(output.setTimer, context)
        : undefined,
    setVariable:
      output.setVariable !== undefined && output.setVariable !== null
        ? deserializeAws_restJson1SetVariableAction(output.setVariable, context)
        : undefined,
    sns:
      output.sns !== undefined && output.sns !== null
        ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context)
        : undefined,
    sqs:
      output.sqs !== undefined && output.sqs !== null
        ? deserializeAws_restJson1SqsAction(output.sqs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Actions = (output: any, context: __SerdeContext): Action[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Action(entry, context);
    });
};

const deserializeAws_restJson1AlarmAction = (output: any, context: __SerdeContext): AlarmAction => {
  return {
    dynamoDB:
      output.dynamoDB !== undefined && output.dynamoDB !== null
        ? deserializeAws_restJson1DynamoDBAction(output.dynamoDB, context)
        : undefined,
    dynamoDBv2:
      output.dynamoDBv2 !== undefined && output.dynamoDBv2 !== null
        ? deserializeAws_restJson1DynamoDBv2Action(output.dynamoDBv2, context)
        : undefined,
    firehose:
      output.firehose !== undefined && output.firehose !== null
        ? deserializeAws_restJson1FirehoseAction(output.firehose, context)
        : undefined,
    iotEvents:
      output.iotEvents !== undefined && output.iotEvents !== null
        ? deserializeAws_restJson1IotEventsAction(output.iotEvents, context)
        : undefined,
    iotSiteWise:
      output.iotSiteWise !== undefined && output.iotSiteWise !== null
        ? deserializeAws_restJson1IotSiteWiseAction(output.iotSiteWise, context)
        : undefined,
    iotTopicPublish:
      output.iotTopicPublish !== undefined && output.iotTopicPublish !== null
        ? deserializeAws_restJson1IotTopicPublishAction(output.iotTopicPublish, context)
        : undefined,
    lambda:
      output.lambda !== undefined && output.lambda !== null
        ? deserializeAws_restJson1LambdaAction(output.lambda, context)
        : undefined,
    sns:
      output.sns !== undefined && output.sns !== null
        ? deserializeAws_restJson1SNSTopicPublishAction(output.sns, context)
        : undefined,
    sqs:
      output.sqs !== undefined && output.sqs !== null
        ? deserializeAws_restJson1SqsAction(output.sqs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmActions = (output: any, context: __SerdeContext): AlarmAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmAction(entry, context);
    });
};

const deserializeAws_restJson1AlarmCapabilities = (output: any, context: __SerdeContext): AlarmCapabilities => {
  return {
    acknowledgeFlow:
      output.acknowledgeFlow !== undefined && output.acknowledgeFlow !== null
        ? deserializeAws_restJson1AcknowledgeFlow(output.acknowledgeFlow, context)
        : undefined,
    initializationConfiguration:
      output.initializationConfiguration !== undefined && output.initializationConfiguration !== null
        ? deserializeAws_restJson1InitializationConfiguration(output.initializationConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmEventActions = (output: any, context: __SerdeContext): AlarmEventActions => {
  return {
    alarmActions:
      output.alarmActions !== undefined && output.alarmActions !== null
        ? deserializeAws_restJson1AlarmActions(output.alarmActions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmModelSummaries = (output: any, context: __SerdeContext): AlarmModelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmModelSummary(entry, context);
    });
};

const deserializeAws_restJson1AlarmModelSummary = (output: any, context: __SerdeContext): AlarmModelSummary => {
  return {
    alarmModelDescription: __expectString(output.alarmModelDescription),
    alarmModelName: __expectString(output.alarmModelName),
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): AlarmModelVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AlarmModelVersionSummary(entry, context);
    });
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
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
  } as any;
};

const deserializeAws_restJson1AlarmNotification = (output: any, context: __SerdeContext): AlarmNotification => {
  return {
    notificationActions:
      output.notificationActions !== undefined && output.notificationActions !== null
        ? deserializeAws_restJson1NotificationActions(output.notificationActions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AlarmRule = (output: any, context: __SerdeContext): AlarmRule => {
  return {
    simpleRule:
      output.simpleRule !== undefined && output.simpleRule !== null
        ? deserializeAws_restJson1SimpleRule(output.simpleRule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AnalysisResult = (output: any, context: __SerdeContext): AnalysisResult => {
  return {
    level: __expectString(output.level),
    locations:
      output.locations !== undefined && output.locations !== null
        ? deserializeAws_restJson1AnalysisResultLocations(output.locations, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisResultLocation(entry, context);
    });
};

const deserializeAws_restJson1AnalysisResults = (output: any, context: __SerdeContext): AnalysisResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AnalysisResult(entry, context);
    });
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
      output.timestamp !== undefined && output.timestamp !== null
        ? deserializeAws_restJson1AssetPropertyTimestamp(output.timestamp, context)
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1AssetPropertyVariant(output.value, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Attribute(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorDebugOption(entry, context);
    });
};

const deserializeAws_restJson1DetectorModel = (output: any, context: __SerdeContext): DetectorModel => {
  return {
    detectorModelConfiguration:
      output.detectorModelConfiguration !== undefined && output.detectorModelConfiguration !== null
        ? deserializeAws_restJson1DetectorModelConfiguration(output.detectorModelConfiguration, context)
        : undefined,
    detectorModelDefinition:
      output.detectorModelDefinition !== undefined && output.detectorModelDefinition !== null
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
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelArn: __expectString(output.detectorModelArn),
    detectorModelDescription: __expectString(output.detectorModelDescription),
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    evaluationMethod: __expectString(output.evaluationMethod),
    key: __expectString(output.key),
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
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
    states:
      output.states !== undefined && output.states !== null
        ? deserializeAws_restJson1States(output.states, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DetectorModelSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorModelSummary(entry, context);
    });
};

const deserializeAws_restJson1DetectorModelSummary = (output: any, context: __SerdeContext): DetectorModelSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelDescription: __expectString(output.detectorModelDescription),
    detectorModelName: __expectString(output.detectorModelName),
  } as any;
};

const deserializeAws_restJson1DetectorModelVersionSummaries = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DetectorModelVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1DetectorModelVersionSummary = (
  output: any,
  context: __SerdeContext
): DetectorModelVersionSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    detectorModelArn: __expectString(output.detectorModelArn),
    detectorModelName: __expectString(output.detectorModelName),
    detectorModelVersion: __expectString(output.detectorModelVersion),
    evaluationMethod: __expectString(output.evaluationMethod),
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
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
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
    payloadField: __expectString(output.payloadField),
    rangeKeyField: __expectString(output.rangeKeyField),
    rangeKeyType: __expectString(output.rangeKeyType),
    rangeKeyValue: __expectString(output.rangeKeyValue),
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1DynamoDBv2Action = (output: any, context: __SerdeContext): DynamoDBv2Action => {
  return {
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
    tableName: __expectString(output.tableName),
  } as any;
};

const deserializeAws_restJson1EmailConfiguration = (output: any, context: __SerdeContext): EmailConfiguration => {
  return {
    content:
      output.content !== undefined && output.content !== null
        ? deserializeAws_restJson1EmailContent(output.content, context)
        : undefined,
    from: __expectString(output.from),
    recipients:
      output.recipients !== undefined && output.recipients !== null
        ? deserializeAws_restJson1EmailRecipients(output.recipients, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EmailConfigurations = (output: any, context: __SerdeContext): EmailConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EmailConfiguration(entry, context);
    });
};

const deserializeAws_restJson1EmailContent = (output: any, context: __SerdeContext): EmailContent => {
  return {
    additionalMessage: __expectString(output.additionalMessage),
    subject: __expectString(output.subject),
  } as any;
};

const deserializeAws_restJson1EmailRecipients = (output: any, context: __SerdeContext): EmailRecipients => {
  return {
    to:
      output.to !== undefined && output.to !== null
        ? deserializeAws_restJson1RecipientDetails(output.to, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Event = (output: any, context: __SerdeContext): Event => {
  return {
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1Actions(output.actions, context)
        : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
  } as any;
};

const deserializeAws_restJson1Events = (output: any, context: __SerdeContext): Event[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Event(entry, context);
    });
};

const deserializeAws_restJson1FirehoseAction = (output: any, context: __SerdeContext): FirehoseAction => {
  return {
    deliveryStreamName: __expectString(output.deliveryStreamName),
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
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
      output.inputConfiguration !== undefined && output.inputConfiguration !== null
        ? deserializeAws_restJson1InputConfiguration(output.inputConfiguration, context)
        : undefined,
    inputDefinition:
      output.inputDefinition !== undefined && output.inputDefinition !== null
        ? deserializeAws_restJson1InputDefinition(output.inputDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InputConfiguration = (output: any, context: __SerdeContext): InputConfiguration => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    inputArn: __expectString(output.inputArn),
    inputDescription: __expectString(output.inputDescription),
    inputName: __expectString(output.inputName),
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1InputDefinition = (output: any, context: __SerdeContext): InputDefinition => {
  return {
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1Attributes(output.attributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InputSummaries = (output: any, context: __SerdeContext): InputSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputSummary(entry, context);
    });
};

const deserializeAws_restJson1InputSummary = (output: any, context: __SerdeContext): InputSummary => {
  return {
    creationTime:
      output.creationTime !== undefined && output.creationTime !== null
        ? new Date(Math.round(output.creationTime * 1000))
        : undefined,
    inputArn: __expectString(output.inputArn),
    inputDescription: __expectString(output.inputDescription),
    inputName: __expectString(output.inputName),
    lastUpdateTime:
      output.lastUpdateTime !== undefined && output.lastUpdateTime !== null
        ? new Date(Math.round(output.lastUpdateTime * 1000))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1IotEventsAction = (output: any, context: __SerdeContext): IotEventsAction => {
  return {
    inputName: __expectString(output.inputName),
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IotSiteWiseAction = (output: any, context: __SerdeContext): IotSiteWiseAction => {
  return {
    assetId: __expectString(output.assetId),
    entryId: __expectString(output.entryId),
    propertyAlias: __expectString(output.propertyAlias),
    propertyId: __expectString(output.propertyId),
    propertyValue:
      output.propertyValue !== undefined && output.propertyValue !== null
        ? deserializeAws_restJson1AssetPropertyValue(output.propertyValue, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IotTopicPublishAction = (output: any, context: __SerdeContext): IotTopicPublishAction => {
  return {
    mqttTopic: __expectString(output.mqttTopic),
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LambdaAction = (output: any, context: __SerdeContext): LambdaAction => {
  return {
    functionArn: __expectString(output.functionArn),
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LoggingOptions = (output: any, context: __SerdeContext): LoggingOptions => {
  return {
    detectorDebugOptions:
      output.detectorDebugOptions !== undefined && output.detectorDebugOptions !== null
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
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1NotificationTargetActions(output.action, context)
        : undefined,
    emailConfigurations:
      output.emailConfigurations !== undefined && output.emailConfigurations !== null
        ? deserializeAws_restJson1EmailConfigurations(output.emailConfigurations, context)
        : undefined,
    smsConfigurations:
      output.smsConfigurations !== undefined && output.smsConfigurations !== null
        ? deserializeAws_restJson1SMSConfigurations(output.smsConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NotificationActions = (output: any, context: __SerdeContext): NotificationAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NotificationAction(entry, context);
    });
};

const deserializeAws_restJson1NotificationTargetActions = (
  output: any,
  context: __SerdeContext
): NotificationTargetActions => {
  return {
    lambdaAction:
      output.lambdaAction !== undefined && output.lambdaAction !== null
        ? deserializeAws_restJson1LambdaAction(output.lambdaAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OnEnterLifecycle = (output: any, context: __SerdeContext): OnEnterLifecycle => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OnExitLifecycle = (output: any, context: __SerdeContext): OnExitLifecycle => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OnInputLifecycle = (output: any, context: __SerdeContext): OnInputLifecycle => {
  return {
    events:
      output.events !== undefined && output.events !== null
        ? deserializeAws_restJson1Events(output.events, context)
        : undefined,
    transitionEvents:
      output.transitionEvents !== undefined && output.transitionEvents !== null
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
      output.ssoIdentity !== undefined && output.ssoIdentity !== null
        ? deserializeAws_restJson1SSOIdentity(output.ssoIdentity, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecipientDetails = (output: any, context: __SerdeContext): RecipientDetail[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecipientDetail(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RoutedResource(entry, context);
    });
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
      output.recipients !== undefined && output.recipients !== null
        ? deserializeAws_restJson1RecipientDetails(output.recipients, context)
        : undefined,
    senderId: __expectString(output.senderId),
  } as any;
};

const deserializeAws_restJson1SMSConfigurations = (output: any, context: __SerdeContext): SMSConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SMSConfiguration(entry, context);
    });
};

const deserializeAws_restJson1SNSTopicPublishAction = (output: any, context: __SerdeContext): SNSTopicPublishAction => {
  return {
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_restJson1SqsAction = (output: any, context: __SerdeContext): SqsAction => {
  return {
    payload:
      output.payload !== undefined && output.payload !== null
        ? deserializeAws_restJson1Payload(output.payload, context)
        : undefined,
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
    onEnter:
      output.onEnter !== undefined && output.onEnter !== null
        ? deserializeAws_restJson1OnEnterLifecycle(output.onEnter, context)
        : undefined,
    onExit:
      output.onExit !== undefined && output.onExit !== null
        ? deserializeAws_restJson1OnExitLifecycle(output.onExit, context)
        : undefined,
    onInput:
      output.onInput !== undefined && output.onInput !== null
        ? deserializeAws_restJson1OnInputLifecycle(output.onInput, context)
        : undefined,
    stateName: __expectString(output.stateName),
  } as any;
};

const deserializeAws_restJson1States = (output: any, context: __SerdeContext): State[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1State(entry, context);
    });
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1TransitionEvent = (output: any, context: __SerdeContext): TransitionEvent => {
  return {
    actions:
      output.actions !== undefined && output.actions !== null
        ? deserializeAws_restJson1Actions(output.actions, context)
        : undefined,
    condition: __expectString(output.condition),
    eventName: __expectString(output.eventName),
    nextState: __expectString(output.nextState),
  } as any;
};

const deserializeAws_restJson1TransitionEvents = (output: any, context: __SerdeContext): TransitionEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitionEvent(entry, context);
    });
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

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
