import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  expectUnion as __expectUnion,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  limitedParseDouble as __limitedParseDouble,
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchEvaluateFeatureCommandInput,
  BatchEvaluateFeatureCommandOutput,
} from "../commands/BatchEvaluateFeatureCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "../commands/CreateExperimentCommand";
import { CreateFeatureCommandInput, CreateFeatureCommandOutput } from "../commands/CreateFeatureCommand";
import { CreateLaunchCommandInput, CreateLaunchCommandOutput } from "../commands/CreateLaunchCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "../commands/DeleteExperimentCommand";
import { DeleteFeatureCommandInput, DeleteFeatureCommandOutput } from "../commands/DeleteFeatureCommand";
import { DeleteLaunchCommandInput, DeleteLaunchCommandOutput } from "../commands/DeleteLaunchCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { EvaluateFeatureCommandInput, EvaluateFeatureCommandOutput } from "../commands/EvaluateFeatureCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "../commands/GetExperimentCommand";
import {
  GetExperimentResultsCommandInput,
  GetExperimentResultsCommandOutput,
} from "../commands/GetExperimentResultsCommand";
import { GetFeatureCommandInput, GetFeatureCommandOutput } from "../commands/GetFeatureCommand";
import { GetLaunchCommandInput, GetLaunchCommandOutput } from "../commands/GetLaunchCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { ListFeaturesCommandInput, ListFeaturesCommandOutput } from "../commands/ListFeaturesCommand";
import { ListLaunchesCommandInput, ListLaunchesCommandOutput } from "../commands/ListLaunchesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutProjectEventsCommandInput, PutProjectEventsCommandOutput } from "../commands/PutProjectEventsCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "../commands/StartExperimentCommand";
import { StartLaunchCommandInput, StartLaunchCommandOutput } from "../commands/StartLaunchCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "../commands/StopExperimentCommand";
import { StopLaunchCommandInput, StopLaunchCommandOutput } from "../commands/StopLaunchCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "../commands/UpdateExperimentCommand";
import { UpdateFeatureCommandInput, UpdateFeatureCommandOutput } from "../commands/UpdateFeatureCommand";
import { UpdateLaunchCommandInput, UpdateLaunchCommandOutput } from "../commands/UpdateLaunchCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "../commands/UpdateProjectCommand";
import {
  UpdateProjectDataDeliveryCommandInput,
  UpdateProjectDataDeliveryCommandOutput,
} from "../commands/UpdateProjectDataDeliveryCommand";
import { EvidentlyServiceException as __BaseException } from "../models/EvidentlyServiceException";
import {
  AccessDeniedException,
  CloudWatchLogsDestination,
  CloudWatchLogsDestinationConfig,
  ConflictException,
  EvaluationRequest,
  EvaluationResult,
  EvaluationRule,
  Event,
  Experiment,
  ExperimentExecution,
  ExperimentReport,
  ExperimentReportName,
  ExperimentResultRequestType,
  ExperimentResultsData,
  ExperimentSchedule,
  Feature,
  FeatureSummary,
  InternalServerException,
  Launch,
  LaunchExecution,
  LaunchGroup,
  LaunchGroupConfig,
  MetricDefinition,
  MetricDefinitionConfig,
  MetricGoal,
  MetricGoalConfig,
  MetricMonitor,
  MetricMonitorConfig,
  OnlineAbConfig,
  OnlineAbDefinition,
  Project,
  ProjectDataDelivery,
  ProjectDataDeliveryConfig,
  ProjectSummary,
  PutProjectEventsResultEntry,
  ResourceNotFoundException,
  S3Destination,
  S3DestinationConfig,
  ScheduledSplit,
  ScheduledSplitConfig,
  ScheduledSplitsLaunchConfig,
  ScheduledSplitsLaunchDefinition,
  ServiceQuotaExceededException,
  ServiceUnavailableException,
  ThrottlingException,
  Treatment,
  TreatmentConfig,
  ValidationException,
  ValidationExceptionField,
  VariableValue,
  Variation,
  VariationConfig,
} from "../models/models_0";

export const serializeAws_restJson1BatchEvaluateFeatureCommand = async (
  input: BatchEvaluateFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/evaluations";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.requests !== undefined &&
      input.requests !== null && { requests: serializeAws_restJson1EvaluationRequestsList(input.requests, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "dataplane." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateExperimentCommand = async (
  input: CreateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/experiments";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.metricGoals !== undefined &&
      input.metricGoals !== null && {
        metricGoals: serializeAws_restJson1MetricGoalConfigList(input.metricGoals, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.onlineAbConfig !== undefined &&
      input.onlineAbConfig !== null && {
        onlineAbConfig: serializeAws_restJson1OnlineAbConfig(input.onlineAbConfig, context),
      }),
    ...(input.randomizationSalt !== undefined &&
      input.randomizationSalt !== null && { randomizationSalt: input.randomizationSalt }),
    ...(input.samplingRate !== undefined && input.samplingRate !== null && { samplingRate: input.samplingRate }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.treatments !== undefined &&
      input.treatments !== null && {
        treatments: serializeAws_restJson1TreatmentConfigList(input.treatments, context),
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

export const serializeAws_restJson1CreateFeatureCommand = async (
  input: CreateFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.defaultVariation !== undefined &&
      input.defaultVariation !== null && { defaultVariation: input.defaultVariation }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.entityOverrides !== undefined &&
      input.entityOverrides !== null && {
        entityOverrides: serializeAws_restJson1EntityOverrideMap(input.entityOverrides, context),
      }),
    ...(input.evaluationStrategy !== undefined &&
      input.evaluationStrategy !== null && { evaluationStrategy: input.evaluationStrategy }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.variations !== undefined &&
      input.variations !== null && {
        variations: serializeAws_restJson1VariationConfigsList(input.variations, context),
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

export const serializeAws_restJson1CreateLaunchCommand = async (
  input: CreateLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.groups !== undefined &&
      input.groups !== null && { groups: serializeAws_restJson1LaunchGroupConfigList(input.groups, context) }),
    ...(input.metricMonitors !== undefined &&
      input.metricMonitors !== null && {
        metricMonitors: serializeAws_restJson1MetricMonitorConfigList(input.metricMonitors, context),
      }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.randomizationSalt !== undefined &&
      input.randomizationSalt !== null && { randomizationSalt: input.randomizationSalt }),
    ...(input.scheduledSplitsConfig !== undefined &&
      input.scheduledSplitsConfig !== null && {
        scheduledSplitsConfig: serializeAws_restJson1ScheduledSplitsLaunchConfig(input.scheduledSplitsConfig, context),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify({
    ...(input.dataDelivery !== undefined &&
      input.dataDelivery !== null && {
        dataDelivery: serializeAws_restJson1ProjectDataDeliveryConfig(input.dataDelivery, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteExperimentCommand = async (
  input: DeleteExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
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

export const serializeAws_restJson1DeleteFeatureCommand = async (
  input: DeleteFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features/{feature}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.feature !== undefined) {
    const labelValue: string = input.feature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: feature.");
    }
    resolvedPath = resolvedPath.replace("{feature}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: feature.");
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

export const serializeAws_restJson1DeleteLaunchCommand = async (
  input: DeleteLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches/{launch}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.launch !== undefined) {
    const labelValue: string = input.launch;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launch.");
    }
    resolvedPath = resolvedPath.replace("{launch}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launch.");
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

export const serializeAws_restJson1DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
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

export const serializeAws_restJson1EvaluateFeatureCommand = async (
  input: EvaluateFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/evaluations/{feature}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.feature !== undefined) {
    const labelValue: string = input.feature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: feature.");
    }
    resolvedPath = resolvedPath.replace("{feature}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: feature.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
    ...(input.evaluationContext !== undefined &&
      input.evaluationContext !== null && { evaluationContext: __LazyJsonString.fromObject(input.evaluationContext) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "dataplane." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetExperimentCommand = async (
  input: GetExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
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

export const serializeAws_restJson1GetExperimentResultsCommand = async (
  input: GetExperimentResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}/results";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.baseStat !== undefined && input.baseStat !== null && { baseStat: input.baseStat }),
    ...(input.endTime !== undefined &&
      input.endTime !== null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricNames !== undefined &&
      input.metricNames !== null && { metricNames: serializeAws_restJson1MetricNameList(input.metricNames, context) }),
    ...(input.period !== undefined && input.period !== null && { period: input.period }),
    ...(input.reportNames !== undefined &&
      input.reportNames !== null && {
        reportNames: serializeAws_restJson1ExperimentReportNameList(input.reportNames, context),
      }),
    ...(input.resultStats !== undefined &&
      input.resultStats !== null && {
        resultStats: serializeAws_restJson1ExperimentResultRequestTypeList(input.resultStats, context),
      }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.treatmentNames !== undefined &&
      input.treatmentNames !== null && {
        treatmentNames: serializeAws_restJson1TreatmentNameList(input.treatmentNames, context),
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

export const serializeAws_restJson1GetFeatureCommand = async (
  input: GetFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features/{feature}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.feature !== undefined) {
    const labelValue: string = input.feature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: feature.");
    }
    resolvedPath = resolvedPath.replace("{feature}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: feature.");
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

export const serializeAws_restJson1GetLaunchCommand = async (
  input: GetLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches/{launch}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.launch !== undefined) {
    const labelValue: string = input.launch;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launch.");
    }
    resolvedPath = resolvedPath.replace("{launch}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launch.");
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

export const serializeAws_restJson1GetProjectCommand = async (
  input: GetProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
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

export const serializeAws_restJson1ListExperimentsCommand = async (
  input: ListExperimentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/experiments";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status }),
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

export const serializeAws_restJson1ListFeaturesCommand = async (
  input: ListFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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

export const serializeAws_restJson1ListLaunchesCommand = async (
  input: ListLaunchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.status !== undefined && { status: input.status }),
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

export const serializeAws_restJson1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = {
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
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

export const serializeAws_restJson1PutProjectEventsCommand = async (
  input: PutProjectEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/events/projects/{project}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.events !== undefined &&
      input.events !== null && { events: serializeAws_restJson1EventList(input.events, context) }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "dataplane." + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1StartExperimentCommand = async (
  input: StartExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}/start";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.analysisCompleteTime !== undefined &&
      input.analysisCompleteTime !== null && {
        analysisCompleteTime: Math.round(input.analysisCompleteTime.getTime() / 1000),
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

export const serializeAws_restJson1StartLaunchCommand = async (
  input: StartLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/launches/{launch}/start";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.launch !== undefined) {
    const labelValue: string = input.launch;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launch.");
    }
    resolvedPath = resolvedPath.replace("{launch}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launch.");
  }
  let body: any;
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

export const serializeAws_restJson1StopExperimentCommand = async (
  input: StopExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}/cancel";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.desiredState !== undefined && input.desiredState !== null && { desiredState: input.desiredState }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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

export const serializeAws_restJson1StopLaunchCommand = async (
  input: StopLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/launches/{launch}/cancel";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.launch !== undefined) {
    const labelValue: string = input.launch;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launch.");
    }
    resolvedPath = resolvedPath.replace("{launch}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launch.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.desiredState !== undefined && input.desiredState !== null && { desiredState: input.desiredState }),
    ...(input.reason !== undefined && input.reason !== null && { reason: input.reason }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
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

export const serializeAws_restJson1UpdateExperimentCommand = async (
  input: UpdateExperimentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/projects/{project}/experiments/{experiment}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.experiment !== undefined) {
    const labelValue: string = input.experiment;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: experiment.");
    }
    resolvedPath = resolvedPath.replace("{experiment}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: experiment.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.metricGoals !== undefined &&
      input.metricGoals !== null && {
        metricGoals: serializeAws_restJson1MetricGoalConfigList(input.metricGoals, context),
      }),
    ...(input.onlineAbConfig !== undefined &&
      input.onlineAbConfig !== null && {
        onlineAbConfig: serializeAws_restJson1OnlineAbConfig(input.onlineAbConfig, context),
      }),
    ...(input.randomizationSalt !== undefined &&
      input.randomizationSalt !== null && { randomizationSalt: input.randomizationSalt }),
    ...(input.samplingRate !== undefined && input.samplingRate !== null && { samplingRate: input.samplingRate }),
    ...(input.treatments !== undefined &&
      input.treatments !== null && {
        treatments: serializeAws_restJson1TreatmentConfigList(input.treatments, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFeatureCommand = async (
  input: UpdateFeatureCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features/{feature}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.feature !== undefined) {
    const labelValue: string = input.feature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: feature.");
    }
    resolvedPath = resolvedPath.replace("{feature}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: feature.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.addOrUpdateVariations !== undefined &&
      input.addOrUpdateVariations !== null && {
        addOrUpdateVariations: serializeAws_restJson1VariationConfigsList(input.addOrUpdateVariations, context),
      }),
    ...(input.defaultVariation !== undefined &&
      input.defaultVariation !== null && { defaultVariation: input.defaultVariation }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.entityOverrides !== undefined &&
      input.entityOverrides !== null && {
        entityOverrides: serializeAws_restJson1EntityOverrideMap(input.entityOverrides, context),
      }),
    ...(input.evaluationStrategy !== undefined &&
      input.evaluationStrategy !== null && { evaluationStrategy: input.evaluationStrategy }),
    ...(input.removeVariations !== undefined &&
      input.removeVariations !== null && {
        removeVariations: serializeAws_restJson1VariationNameList(input.removeVariations, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateLaunchCommand = async (
  input: UpdateLaunchCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches/{launch}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  if (input.launch !== undefined) {
    const labelValue: string = input.launch;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: launch.");
    }
    resolvedPath = resolvedPath.replace("{launch}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: launch.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.groups !== undefined &&
      input.groups !== null && { groups: serializeAws_restJson1LaunchGroupConfigList(input.groups, context) }),
    ...(input.metricMonitors !== undefined &&
      input.metricMonitors !== null && {
        metricMonitors: serializeAws_restJson1MetricMonitorConfigList(input.metricMonitors, context),
      }),
    ...(input.randomizationSalt !== undefined &&
      input.randomizationSalt !== null && { randomizationSalt: input.randomizationSalt }),
    ...(input.scheduledSplitsConfig !== undefined &&
      input.scheduledSplitsConfig !== null && {
        scheduledSplitsConfig: serializeAws_restJson1ScheduledSplitsLaunchConfig(input.scheduledSplitsConfig, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProjectCommand = async (
  input: UpdateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateProjectDataDeliveryCommand = async (
  input: UpdateProjectDataDeliveryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/data-delivery";
  if (input.project !== undefined) {
    const labelValue: string = input.project;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: project.");
    }
    resolvedPath = resolvedPath.replace("{project}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: project.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.cloudWatchLogs !== undefined &&
      input.cloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_restJson1CloudWatchLogsDestinationConfig(input.cloudWatchLogs, context),
      }),
    ...(input.s3Destination !== undefined &&
      input.s3Destination !== null && {
        s3Destination: serializeAws_restJson1S3DestinationConfig(input.s3Destination, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1BatchEvaluateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEvaluateFeatureCommandError(output, context);
  }
  const contents: BatchEvaluateFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
    results: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.results !== undefined && data.results !== null) {
    contents.results = deserializeAws_restJson1EvaluationResultsList(data.results, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchEvaluateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExperimentCommandError(output, context);
  }
  const contents: CreateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    experiment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment !== undefined && data.experiment !== null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFeatureCommandError(output, context);
  }
  const contents: CreateFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
    feature: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature !== undefined && data.feature !== null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLaunchCommandError(output, context);
  }
  const contents: CreateLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    launch: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch !== undefined && data.launch !== null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
  }
  const contents: CreateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    project: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project !== undefined && data.project !== null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExperimentCommandError(output, context);
  }
  const contents: DeleteExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.evidently#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.evidently#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFeatureCommandError(output, context);
  }
  const contents: DeleteFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchCommandError(output, context);
  }
  const contents: DeleteLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProjectCommandError(output, context);
  }
  const contents: DeleteProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1EvaluateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EvaluateFeatureCommandError(output, context);
  }
  const contents: EvaluateFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
    details: undefined,
    reason: undefined,
    value: undefined,
    variation: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.details !== undefined && data.details !== null) {
    contents.details = new __LazyJsonString(data.details);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  if (data.value !== undefined && data.value !== null) {
    contents.value = deserializeAws_restJson1VariableValue(__expectUnion(data.value), context);
  }
  if (data.variation !== undefined && data.variation !== null) {
    contents.variation = __expectString(data.variation);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1EvaluateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentCommandError(output, context);
  }
  const contents: GetExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    experiment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment !== undefined && data.experiment !== null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExperimentResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentResultsCommandError(output, context);
  }
  const contents: GetExperimentResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    reports: undefined,
    resultsData: undefined,
    timestamps: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.reports !== undefined && data.reports !== null) {
    contents.reports = deserializeAws_restJson1ExperimentReportList(data.reports, context);
  }
  if (data.resultsData !== undefined && data.resultsData !== null) {
    contents.resultsData = deserializeAws_restJson1ExperimentResultsDataList(data.resultsData, context);
  }
  if (data.timestamps !== undefined && data.timestamps !== null) {
    contents.timestamps = deserializeAws_restJson1TimestampList(data.timestamps, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExperimentResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFeatureCommandError(output, context);
  }
  const contents: GetFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
    feature: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature !== undefined && data.feature !== null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchCommandError(output, context);
  }
  const contents: GetLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    launch: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch !== undefined && data.launch !== null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProjectCommandError(output, context);
  }
  const contents: GetProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    project: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project !== undefined && data.project !== null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExperimentsCommandError(output, context);
  }
  const contents: ListExperimentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    experiments: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiments !== undefined && data.experiments !== null) {
    contents.experiments = deserializeAws_restJson1ExperimentList(data.experiments, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExperimentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFeaturesCommandError(output, context);
  }
  const contents: ListFeaturesCommandOutput = {
    $metadata: deserializeMetadata(output),
    features: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.features !== undefined && data.features !== null) {
    contents.features = deserializeAws_restJson1FeatureSummariesList(data.features, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFeaturesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLaunchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchesCommandError(output, context);
  }
  const contents: ListLaunchesCommandOutput = {
    $metadata: deserializeMetadata(output),
    launches: undefined,
    nextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launches !== undefined && data.launches !== null) {
    contents.launches = deserializeAws_restJson1LaunchesList(data.launches, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLaunchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: ListProjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    projects: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.projects !== undefined && data.projects !== null) {
    contents.projects = deserializeAws_restJson1ProjectSummariesList(data.projects, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutProjectEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutProjectEventsCommandError(output, context);
  }
  const contents: PutProjectEventsCommandOutput = {
    $metadata: deserializeMetadata(output),
    eventResults: undefined,
    failedEventCount: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventResults !== undefined && data.eventResults !== null) {
    contents.eventResults = deserializeAws_restJson1PutProjectEventsResultEntryList(data.eventResults, context);
  }
  if (data.failedEventCount !== undefined && data.failedEventCount !== null) {
    contents.failedEventCount = __expectInt32(data.failedEventCount);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutProjectEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartExperimentCommandError(output, context);
  }
  const contents: StartExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    startedTime: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.startedTime !== undefined && data.startedTime !== null) {
    contents.startedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startedTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartLaunchCommandError(output, context);
  }
  const contents: StartLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    launch: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch !== undefined && data.launch !== null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopExperimentCommandError(output, context);
  }
  const contents: StopExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    endedTime: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endedTime !== undefined && data.endedTime !== null) {
    contents.endedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endedTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StopLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopLaunchCommandError(output, context);
  }
  const contents: StopLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    endedTime: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endedTime !== undefined && data.endedTime !== null) {
    contents.endedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endedTime)));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
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
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExperimentCommandError(output, context);
  }
  const contents: UpdateExperimentCommandOutput = {
    $metadata: deserializeMetadata(output),
    experiment: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment !== undefined && data.experiment !== null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFeatureCommandError(output, context);
  }
  const contents: UpdateFeatureCommandOutput = {
    $metadata: deserializeMetadata(output),
    feature: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature !== undefined && data.feature !== null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchCommandError(output, context);
  }
  const contents: UpdateLaunchCommandOutput = {
    $metadata: deserializeMetadata(output),
    launch: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch !== undefined && data.launch !== null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectCommandError(output, context);
  }
  const contents: UpdateProjectCommandOutput = {
    $metadata: deserializeMetadata(output),
    project: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project !== undefined && data.project !== null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateProjectDataDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectDataDeliveryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectDataDeliveryCommandError(output, context);
  }
  const contents: UpdateProjectDataDeliveryCommandOutput = {
    $metadata: deserializeMetadata(output),
    project: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project !== undefined && data.project !== null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateProjectDataDeliveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectDataDeliveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.evidently#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode !== undefined && data.quotaCode !== null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode !== undefined && data.serviceCode !== null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.fieldList !== undefined && data.fieldList !== null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1CloudWatchLogsDestinationConfig = (
  input: CloudWatchLogsDestinationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.logGroup !== undefined && input.logGroup !== null && { logGroup: input.logGroup }),
  };
};

const serializeAws_restJson1EntityOverrideMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1EvaluationRequest = (input: EvaluationRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityId !== undefined && input.entityId !== null && { entityId: input.entityId }),
    ...(input.evaluationContext !== undefined &&
      input.evaluationContext !== null && { evaluationContext: __LazyJsonString.fromObject(input.evaluationContext) }),
    ...(input.feature !== undefined && input.feature !== null && { feature: input.feature }),
  };
};

const serializeAws_restJson1EvaluationRequestsList = (input: EvaluationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EvaluationRequest(entry, context);
    });
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.data !== undefined && input.data !== null && { data: __LazyJsonString.fromObject(input.data) }),
    ...(input.timestamp !== undefined &&
      input.timestamp !== null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Event(entry, context);
    });
};

const serializeAws_restJson1ExperimentReportNameList = (
  input: (ExperimentReportName | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ExperimentResultRequestTypeList = (
  input: (ExperimentResultRequestType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1GroupToWeightMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1LaunchGroupConfig = (input: LaunchGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.feature !== undefined && input.feature !== null && { feature: input.feature }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.variation !== undefined && input.variation !== null && { variation: input.variation }),
  };
};

const serializeAws_restJson1LaunchGroupConfigList = (input: LaunchGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LaunchGroupConfig(entry, context);
    });
};

const serializeAws_restJson1MetricDefinitionConfig = (input: MetricDefinitionConfig, context: __SerdeContext): any => {
  return {
    ...(input.entityIdKey !== undefined && input.entityIdKey !== null && { entityIdKey: input.entityIdKey }),
    ...(input.eventPattern !== undefined &&
      input.eventPattern !== null && { eventPattern: __LazyJsonString.fromObject(input.eventPattern) }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.unitLabel !== undefined && input.unitLabel !== null && { unitLabel: input.unitLabel }),
    ...(input.valueKey !== undefined && input.valueKey !== null && { valueKey: input.valueKey }),
  };
};

const serializeAws_restJson1MetricGoalConfig = (input: MetricGoalConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredChange !== undefined && input.desiredChange !== null && { desiredChange: input.desiredChange }),
    ...(input.metricDefinition !== undefined &&
      input.metricDefinition !== null && {
        metricDefinition: serializeAws_restJson1MetricDefinitionConfig(input.metricDefinition, context),
      }),
  };
};

const serializeAws_restJson1MetricGoalConfigList = (input: MetricGoalConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MetricGoalConfig(entry, context);
    });
};

const serializeAws_restJson1MetricMonitorConfig = (input: MetricMonitorConfig, context: __SerdeContext): any => {
  return {
    ...(input.metricDefinition !== undefined &&
      input.metricDefinition !== null && {
        metricDefinition: serializeAws_restJson1MetricDefinitionConfig(input.metricDefinition, context),
      }),
  };
};

const serializeAws_restJson1MetricMonitorConfigList = (input: MetricMonitorConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MetricMonitorConfig(entry, context);
    });
};

const serializeAws_restJson1MetricNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OnlineAbConfig = (input: OnlineAbConfig, context: __SerdeContext): any => {
  return {
    ...(input.controlTreatmentName !== undefined &&
      input.controlTreatmentName !== null && { controlTreatmentName: input.controlTreatmentName }),
    ...(input.treatmentWeights !== undefined &&
      input.treatmentWeights !== null && {
        treatmentWeights: serializeAws_restJson1TreatmentToWeightMap(input.treatmentWeights, context),
      }),
  };
};

const serializeAws_restJson1ProjectDataDeliveryConfig = (
  input: ProjectDataDeliveryConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogs !== undefined &&
      input.cloudWatchLogs !== null && {
        cloudWatchLogs: serializeAws_restJson1CloudWatchLogsDestinationConfig(input.cloudWatchLogs, context),
      }),
    ...(input.s3Destination !== undefined &&
      input.s3Destination !== null && {
        s3Destination: serializeAws_restJson1S3DestinationConfig(input.s3Destination, context),
      }),
  };
};

const serializeAws_restJson1S3DestinationConfig = (input: S3DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket !== undefined && input.bucket !== null && { bucket: input.bucket }),
    ...(input.prefix !== undefined && input.prefix !== null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1ScheduledSplitConfig = (input: ScheduledSplitConfig, context: __SerdeContext): any => {
  return {
    ...(input.groupWeights !== undefined &&
      input.groupWeights !== null && {
        groupWeights: serializeAws_restJson1GroupToWeightMap(input.groupWeights, context),
      }),
    ...(input.startTime !== undefined &&
      input.startTime !== null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1ScheduledSplitConfigList = (
  input: ScheduledSplitConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ScheduledSplitConfig(entry, context);
    });
};

const serializeAws_restJson1ScheduledSplitsLaunchConfig = (
  input: ScheduledSplitsLaunchConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.steps !== undefined &&
      input.steps !== null && { steps: serializeAws_restJson1ScheduledSplitConfigList(input.steps, context) }),
  };
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TreatmentConfig = (input: TreatmentConfig, context: __SerdeContext): any => {
  return {
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.feature !== undefined && input.feature !== null && { feature: input.feature }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.variation !== undefined && input.variation !== null && { variation: input.variation }),
  };
};

const serializeAws_restJson1TreatmentConfigList = (input: TreatmentConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TreatmentConfig(entry, context);
    });
};

const serializeAws_restJson1TreatmentNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TreatmentToWeightMap = (input: { [key: string]: number }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return VariableValue.visit(input, {
    boolValue: (value) => ({ boolValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    longValue: (value) => ({ longValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_restJson1VariationConfig = (input: VariationConfig, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.value !== undefined &&
      input.value !== null && { value: serializeAws_restJson1VariableValue(input.value, context) }),
  };
};

const serializeAws_restJson1VariationConfigsList = (input: VariationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1VariationConfig(entry, context);
    });
};

const serializeAws_restJson1VariationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1CloudWatchLogsDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogsDestination => {
  return {
    logGroup: __expectString(output.logGroup),
  } as any;
};

const deserializeAws_restJson1DoubleValueList = (output: any, context: __SerdeContext): number[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
};

const deserializeAws_restJson1EntityOverrideMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    details: output.details !== undefined && output.details !== null ? new __LazyJsonString(output.details) : undefined,
    entityId: __expectString(output.entityId),
    feature: __expectString(output.feature),
    project: __expectString(output.project),
    reason: __expectString(output.reason),
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1VariableValue(__expectUnion(output.value), context)
        : undefined,
    variation: __expectString(output.variation),
  } as any;
};

const deserializeAws_restJson1EvaluationResultsList = (output: any, context: __SerdeContext): EvaluationResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluationResult(entry, context);
    });
};

const deserializeAws_restJson1EvaluationRule = (output: any, context: __SerdeContext): EvaluationRule => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1EvaluationRulesList = (output: any, context: __SerdeContext): EvaluationRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluationRule(entry, context);
    });
};

const deserializeAws_restJson1Experiment = (output: any, context: __SerdeContext): Experiment => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    execution:
      output.execution !== undefined && output.execution !== null
        ? deserializeAws_restJson1ExperimentExecution(output.execution, context)
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    metricGoals:
      output.metricGoals !== undefined && output.metricGoals !== null
        ? deserializeAws_restJson1MetricGoalsList(output.metricGoals, context)
        : undefined,
    name: __expectString(output.name),
    onlineAbDefinition:
      output.onlineAbDefinition !== undefined && output.onlineAbDefinition !== null
        ? deserializeAws_restJson1OnlineAbDefinition(output.onlineAbDefinition, context)
        : undefined,
    project: __expectString(output.project),
    randomizationSalt: __expectString(output.randomizationSalt),
    samplingRate: __expectLong(output.samplingRate),
    schedule:
      output.schedule !== undefined && output.schedule !== null
        ? deserializeAws_restJson1ExperimentSchedule(output.schedule, context)
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    treatments:
      output.treatments !== undefined && output.treatments !== null
        ? deserializeAws_restJson1TreatmentList(output.treatments, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ExperimentExecution = (output: any, context: __SerdeContext): ExperimentExecution => {
  return {
    endedTime:
      output.endedTime !== undefined && output.endedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endedTime)))
        : undefined,
    startedTime:
      output.startedTime !== undefined && output.startedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentList = (output: any, context: __SerdeContext): Experiment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Experiment(entry, context);
    });
};

const deserializeAws_restJson1ExperimentReport = (output: any, context: __SerdeContext): ExperimentReport => {
  return {
    content: output.content !== undefined && output.content !== null ? new __LazyJsonString(output.content) : undefined,
    metricName: __expectString(output.metricName),
    reportName: __expectString(output.reportName),
    treatmentName: __expectString(output.treatmentName),
  } as any;
};

const deserializeAws_restJson1ExperimentReportList = (output: any, context: __SerdeContext): ExperimentReport[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentReport(entry, context);
    });
};

const deserializeAws_restJson1ExperimentResultsData = (output: any, context: __SerdeContext): ExperimentResultsData => {
  return {
    metricName: __expectString(output.metricName),
    resultStat: __expectString(output.resultStat),
    treatmentName: __expectString(output.treatmentName),
    values:
      output.values !== undefined && output.values !== null
        ? deserializeAws_restJson1DoubleValueList(output.values, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentResultsDataList = (
  output: any,
  context: __SerdeContext
): ExperimentResultsData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentResultsData(entry, context);
    });
};

const deserializeAws_restJson1ExperimentSchedule = (output: any, context: __SerdeContext): ExperimentSchedule => {
  return {
    analysisCompleteTime:
      output.analysisCompleteTime !== undefined && output.analysisCompleteTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.analysisCompleteTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Feature = (output: any, context: __SerdeContext): Feature => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    defaultVariation: __expectString(output.defaultVariation),
    description: __expectString(output.description),
    entityOverrides:
      output.entityOverrides !== undefined && output.entityOverrides !== null
        ? deserializeAws_restJson1EntityOverrideMap(output.entityOverrides, context)
        : undefined,
    evaluationRules:
      output.evaluationRules !== undefined && output.evaluationRules !== null
        ? deserializeAws_restJson1EvaluationRulesList(output.evaluationRules, context)
        : undefined,
    evaluationStrategy: __expectString(output.evaluationStrategy),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    valueType: __expectString(output.valueType),
    variations:
      output.variations !== undefined && output.variations !== null
        ? deserializeAws_restJson1VariationsList(output.variations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FeatureSummariesList = (output: any, context: __SerdeContext): FeatureSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FeatureSummary(entry, context);
    });
};

const deserializeAws_restJson1FeatureSummary = (output: any, context: __SerdeContext): FeatureSummary => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    defaultVariation: __expectString(output.defaultVariation),
    evaluationRules:
      output.evaluationRules !== undefined && output.evaluationRules !== null
        ? deserializeAws_restJson1EvaluationRulesList(output.evaluationRules, context)
        : undefined,
    evaluationStrategy: __expectString(output.evaluationStrategy),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FeatureToVariationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1GroupToWeightMap = (output: any, context: __SerdeContext): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectLong(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Launch = (output: any, context: __SerdeContext): Launch => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    execution:
      output.execution !== undefined && output.execution !== null
        ? deserializeAws_restJson1LaunchExecution(output.execution, context)
        : undefined,
    groups:
      output.groups !== undefined && output.groups !== null
        ? deserializeAws_restJson1LaunchGroupList(output.groups, context)
        : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    metricMonitors:
      output.metricMonitors !== undefined && output.metricMonitors !== null
        ? deserializeAws_restJson1MetricMonitorList(output.metricMonitors, context)
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    randomizationSalt: __expectString(output.randomizationSalt),
    scheduledSplitsDefinition:
      output.scheduledSplitsDefinition !== undefined && output.scheduledSplitsDefinition !== null
        ? deserializeAws_restJson1ScheduledSplitsLaunchDefinition(output.scheduledSplitsDefinition, context)
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1LaunchesList = (output: any, context: __SerdeContext): Launch[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Launch(entry, context);
    });
};

const deserializeAws_restJson1LaunchExecution = (output: any, context: __SerdeContext): LaunchExecution => {
  return {
    endedTime:
      output.endedTime !== undefined && output.endedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endedTime)))
        : undefined,
    startedTime:
      output.startedTime !== undefined && output.startedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchGroup = (output: any, context: __SerdeContext): LaunchGroup => {
  return {
    description: __expectString(output.description),
    featureVariations:
      output.featureVariations !== undefined && output.featureVariations !== null
        ? deserializeAws_restJson1FeatureToVariationMap(output.featureVariations, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1LaunchGroupList = (output: any, context: __SerdeContext): LaunchGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchGroup(entry, context);
    });
};

const deserializeAws_restJson1MetricDefinition = (output: any, context: __SerdeContext): MetricDefinition => {
  return {
    entityIdKey: __expectString(output.entityIdKey),
    eventPattern:
      output.eventPattern !== undefined && output.eventPattern !== null
        ? new __LazyJsonString(output.eventPattern)
        : undefined,
    name: __expectString(output.name),
    unitLabel: __expectString(output.unitLabel),
    valueKey: __expectString(output.valueKey),
  } as any;
};

const deserializeAws_restJson1MetricGoal = (output: any, context: __SerdeContext): MetricGoal => {
  return {
    desiredChange: __expectString(output.desiredChange),
    metricDefinition:
      output.metricDefinition !== undefined && output.metricDefinition !== null
        ? deserializeAws_restJson1MetricDefinition(output.metricDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricGoalsList = (output: any, context: __SerdeContext): MetricGoal[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricGoal(entry, context);
    });
};

const deserializeAws_restJson1MetricMonitor = (output: any, context: __SerdeContext): MetricMonitor => {
  return {
    metricDefinition:
      output.metricDefinition !== undefined && output.metricDefinition !== null
        ? deserializeAws_restJson1MetricDefinition(output.metricDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricMonitorList = (output: any, context: __SerdeContext): MetricMonitor[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricMonitor(entry, context);
    });
};

const deserializeAws_restJson1OnlineAbDefinition = (output: any, context: __SerdeContext): OnlineAbDefinition => {
  return {
    controlTreatmentName: __expectString(output.controlTreatmentName),
    treatmentWeights:
      output.treatmentWeights !== undefined && output.treatmentWeights !== null
        ? deserializeAws_restJson1TreatmentToWeightMap(output.treatmentWeights, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Project = (output: any, context: __SerdeContext): Project => {
  return {
    activeExperimentCount: __expectLong(output.activeExperimentCount),
    activeLaunchCount: __expectLong(output.activeLaunchCount),
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    dataDelivery:
      output.dataDelivery !== undefined && output.dataDelivery !== null
        ? deserializeAws_restJson1ProjectDataDelivery(output.dataDelivery, context)
        : undefined,
    description: __expectString(output.description),
    experimentCount: __expectLong(output.experimentCount),
    featureCount: __expectLong(output.featureCount),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    launchCount: __expectLong(output.launchCount),
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectDataDelivery = (output: any, context: __SerdeContext): ProjectDataDelivery => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs !== undefined && output.cloudWatchLogs !== null
        ? deserializeAws_restJson1CloudWatchLogsDestination(output.cloudWatchLogs, context)
        : undefined,
    s3Destination:
      output.s3Destination !== undefined && output.s3Destination !== null
        ? deserializeAws_restJson1S3Destination(output.s3Destination, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectSummariesList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProjectSummary(entry, context);
    });
};

const deserializeAws_restJson1ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    activeExperimentCount: __expectLong(output.activeExperimentCount),
    activeLaunchCount: __expectLong(output.activeLaunchCount),
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    experimentCount: __expectLong(output.experimentCount),
    featureCount: __expectLong(output.featureCount),
    lastUpdatedTime:
      output.lastUpdatedTime !== undefined && output.lastUpdatedTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    launchCount: __expectLong(output.launchCount),
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1TagMap(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PutProjectEventsResultEntry = (
  output: any,
  context: __SerdeContext
): PutProjectEventsResultEntry => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    eventId: __expectString(output.eventId),
  } as any;
};

const deserializeAws_restJson1PutProjectEventsResultEntryList = (
  output: any,
  context: __SerdeContext
): PutProjectEventsResultEntry[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PutProjectEventsResultEntry(entry, context);
    });
};

const deserializeAws_restJson1S3Destination = (output: any, context: __SerdeContext): S3Destination => {
  return {
    bucket: __expectString(output.bucket),
    prefix: __expectString(output.prefix),
  } as any;
};

const deserializeAws_restJson1ScheduledSplit = (output: any, context: __SerdeContext): ScheduledSplit => {
  return {
    groupWeights:
      output.groupWeights !== undefined && output.groupWeights !== null
        ? deserializeAws_restJson1GroupToWeightMap(output.groupWeights, context)
        : undefined,
    startTime:
      output.startTime !== undefined && output.startTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduledSplitsLaunchDefinition = (
  output: any,
  context: __SerdeContext
): ScheduledSplitsLaunchDefinition => {
  return {
    steps:
      output.steps !== undefined && output.steps !== null
        ? deserializeAws_restJson1ScheduledStepList(output.steps, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduledStepList = (output: any, context: __SerdeContext): ScheduledSplit[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduledSplit(entry, context);
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): Date[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
};

const deserializeAws_restJson1Treatment = (output: any, context: __SerdeContext): Treatment => {
  return {
    description: __expectString(output.description),
    featureVariations:
      output.featureVariations !== undefined && output.featureVariations !== null
        ? deserializeAws_restJson1FeatureToVariationMap(output.featureVariations, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1TreatmentList = (output: any, context: __SerdeContext): Treatment[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Treatment(entry, context);
    });
};

const deserializeAws_restJson1TreatmentToWeightMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce((acc: { [key: string]: number }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectLong(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
};

const deserializeAws_restJson1VariableValue = (output: any, context: __SerdeContext): VariableValue => {
  if (__expectBoolean(output.boolValue) !== undefined) {
    return { boolValue: __expectBoolean(output.boolValue) as any };
  }
  if (__limitedParseDouble(output.doubleValue) !== undefined) {
    return { doubleValue: __limitedParseDouble(output.doubleValue) as any };
  }
  if (__expectLong(output.longValue) !== undefined) {
    return { longValue: __expectLong(output.longValue) as any };
  }
  if (__expectString(output.stringValue) !== undefined) {
    return { stringValue: __expectString(output.stringValue) as any };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1Variation = (output: any, context: __SerdeContext): Variation => {
  return {
    name: __expectString(output.name),
    value:
      output.value !== undefined && output.value !== null
        ? deserializeAws_restJson1VariableValue(__expectUnion(output.value), context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VariationsList = (output: any, context: __SerdeContext): Variation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Variation(entry, context);
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
