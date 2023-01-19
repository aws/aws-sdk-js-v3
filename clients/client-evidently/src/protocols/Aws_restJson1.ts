// smithy-typescript generated code
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
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
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
import { CreateSegmentCommandInput, CreateSegmentCommandOutput } from "../commands/CreateSegmentCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "../commands/DeleteExperimentCommand";
import { DeleteFeatureCommandInput, DeleteFeatureCommandOutput } from "../commands/DeleteFeatureCommand";
import { DeleteLaunchCommandInput, DeleteLaunchCommandOutput } from "../commands/DeleteLaunchCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DeleteSegmentCommandInput, DeleteSegmentCommandOutput } from "../commands/DeleteSegmentCommand";
import { EvaluateFeatureCommandInput, EvaluateFeatureCommandOutput } from "../commands/EvaluateFeatureCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "../commands/GetExperimentCommand";
import {
  GetExperimentResultsCommandInput,
  GetExperimentResultsCommandOutput,
} from "../commands/GetExperimentResultsCommand";
import { GetFeatureCommandInput, GetFeatureCommandOutput } from "../commands/GetFeatureCommand";
import { GetLaunchCommandInput, GetLaunchCommandOutput } from "../commands/GetLaunchCommand";
import { GetProjectCommandInput, GetProjectCommandOutput } from "../commands/GetProjectCommand";
import { GetSegmentCommandInput, GetSegmentCommandOutput } from "../commands/GetSegmentCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "../commands/ListExperimentsCommand";
import { ListFeaturesCommandInput, ListFeaturesCommandOutput } from "../commands/ListFeaturesCommand";
import { ListLaunchesCommandInput, ListLaunchesCommandOutput } from "../commands/ListLaunchesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListSegmentReferencesCommandInput,
  ListSegmentReferencesCommandOutput,
} from "../commands/ListSegmentReferencesCommand";
import { ListSegmentsCommandInput, ListSegmentsCommandOutput } from "../commands/ListSegmentsCommand";
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
import { TestSegmentPatternCommandInput, TestSegmentPatternCommandOutput } from "../commands/TestSegmentPatternCommand";
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
  ProjectAppConfigResource,
  ProjectAppConfigResourceConfig,
  ProjectDataDelivery,
  ProjectDataDeliveryConfig,
  ProjectSummary,
  PutProjectEventsResultEntry,
  RefResource,
  ResourceNotFoundException,
  S3Destination,
  S3DestinationConfig,
  ScheduledSplit,
  ScheduledSplitConfig,
  ScheduledSplitsLaunchConfig,
  ScheduledSplitsLaunchDefinition,
  Segment,
  SegmentOverride,
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.requests != null && { requests: serializeAws_restJson1EvaluationRequestsList(input.requests, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.metricGoals != null && {
      metricGoals: serializeAws_restJson1MetricGoalConfigList(input.metricGoals, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.onlineAbConfig != null && {
      onlineAbConfig: serializeAws_restJson1OnlineAbConfig(input.onlineAbConfig, context),
    }),
    ...(input.randomizationSalt != null && { randomizationSalt: input.randomizationSalt }),
    ...(input.samplingRate != null && { samplingRate: input.samplingRate }),
    ...(input.segment != null && { segment: input.segment }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.treatments != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.defaultVariation != null && { defaultVariation: input.defaultVariation }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityOverrides != null && {
      entityOverrides: serializeAws_restJson1EntityOverrideMap(input.entityOverrides, context),
    }),
    ...(input.evaluationStrategy != null && { evaluationStrategy: input.evaluationStrategy }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.variations != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.groups != null && { groups: serializeAws_restJson1LaunchGroupConfigList(input.groups, context) }),
    ...(input.metricMonitors != null && {
      metricMonitors: serializeAws_restJson1MetricMonitorConfigList(input.metricMonitors, context),
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.randomizationSalt != null && { randomizationSalt: input.randomizationSalt }),
    ...(input.scheduledSplitsConfig != null && {
      scheduledSplitsConfig: serializeAws_restJson1ScheduledSplitsLaunchConfig(input.scheduledSplitsConfig, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
    ...(input.appConfigResource != null && {
      appConfigResource: serializeAws_restJson1ProjectAppConfigResourceConfig(input.appConfigResource, context),
    }),
    ...(input.dataDelivery != null && {
      dataDelivery: serializeAws_restJson1ProjectDataDeliveryConfig(input.dataDelivery, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateSegmentCommand = async (
  input: CreateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments";
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.pattern != null && { pattern: __LazyJsonString.fromObject(input.pattern) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "feature", () => input.feature!, "{feature}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "launch", () => input.launch!, "{launch}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
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

export const serializeAws_restJson1DeleteSegmentCommand = async (
  input: DeleteSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments/{segment}";
  resolvedPath = __resolvedPath(resolvedPath, input, "segment", () => input.segment!, "{segment}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "feature", () => input.feature!, "{feature}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.evaluationContext != null && { evaluationContext: __LazyJsonString.fromObject(input.evaluationContext) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.baseStat != null && { baseStat: input.baseStat }),
    ...(input.endTime != null && { endTime: Math.round(input.endTime.getTime() / 1000) }),
    ...(input.metricNames != null && { metricNames: serializeAws_restJson1MetricNameList(input.metricNames, context) }),
    ...(input.period != null && { period: input.period }),
    ...(input.reportNames != null && {
      reportNames: serializeAws_restJson1ExperimentReportNameList(input.reportNames, context),
    }),
    ...(input.resultStats != null && {
      resultStats: serializeAws_restJson1ExperimentResultRequestTypeList(input.resultStats, context),
    }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
    ...(input.treatmentNames != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "feature", () => input.feature!, "{feature}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "launch", () => input.launch!, "{launch}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
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

export const serializeAws_restJson1GetSegmentCommand = async (
  input: GetSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments/{segment}";
  resolvedPath = __resolvedPath(resolvedPath, input, "segment", () => input.segment!, "{segment}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    status: [, input.status!],
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

export const serializeAws_restJson1ListFeaturesCommand = async (
  input: ListFeaturesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/features";
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListLaunchesCommand = async (
  input: ListLaunchesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects/{project}/launches";
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    status: [, input.status!],
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

export const serializeAws_restJson1ListProjectsCommand = async (
  input: ListProjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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

export const serializeAws_restJson1ListSegmentReferencesCommand = async (
  input: ListSegmentReferencesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments/{segment}/references";
  resolvedPath = __resolvedPath(resolvedPath, input, "segment", () => input.segment!, "{segment}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    type: [, __expectNonNull(input.type!, `type`)],
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

export const serializeAws_restJson1ListSegmentsCommand = async (
  input: ListSegmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.events != null && { events: serializeAws_restJson1EventList(input.events, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.analysisCompleteTime != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "launch", () => input.launch!, "{launch}", false);
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.desiredState != null && { desiredState: input.desiredState }),
    ...(input.reason != null && { reason: input.reason }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "launch", () => input.launch!, "{launch}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.desiredState != null && { desiredState: input.desiredState }),
    ...(input.reason != null && { reason: input.reason }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1TestSegmentPatternCommand = async (
  input: TestSegmentPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/test-segment-pattern";
  let body: any;
  body = JSON.stringify({
    ...(input.pattern != null && { pattern: __LazyJsonString.fromObject(input.pattern) }),
    ...(input.payload != null && { payload: __LazyJsonString.fromObject(input.payload) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "experiment", () => input.experiment!, "{experiment}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.metricGoals != null && {
      metricGoals: serializeAws_restJson1MetricGoalConfigList(input.metricGoals, context),
    }),
    ...(input.onlineAbConfig != null && {
      onlineAbConfig: serializeAws_restJson1OnlineAbConfig(input.onlineAbConfig, context),
    }),
    ...(input.randomizationSalt != null && { randomizationSalt: input.randomizationSalt }),
    ...(input.removeSegment != null && { removeSegment: input.removeSegment }),
    ...(input.samplingRate != null && { samplingRate: input.samplingRate }),
    ...(input.segment != null && { segment: input.segment }),
    ...(input.treatments != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "feature", () => input.feature!, "{feature}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.addOrUpdateVariations != null && {
      addOrUpdateVariations: serializeAws_restJson1VariationConfigsList(input.addOrUpdateVariations, context),
    }),
    ...(input.defaultVariation != null && { defaultVariation: input.defaultVariation }),
    ...(input.description != null && { description: input.description }),
    ...(input.entityOverrides != null && {
      entityOverrides: serializeAws_restJson1EntityOverrideMap(input.entityOverrides, context),
    }),
    ...(input.evaluationStrategy != null && { evaluationStrategy: input.evaluationStrategy }),
    ...(input.removeVariations != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "launch", () => input.launch!, "{launch}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.groups != null && { groups: serializeAws_restJson1LaunchGroupConfigList(input.groups, context) }),
    ...(input.metricMonitors != null && {
      metricMonitors: serializeAws_restJson1MetricMonitorConfigList(input.metricMonitors, context),
    }),
    ...(input.randomizationSalt != null && { randomizationSalt: input.randomizationSalt }),
    ...(input.scheduledSplitsConfig != null && {
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.appConfigResource != null && {
      appConfigResource: serializeAws_restJson1ProjectAppConfigResourceConfig(input.appConfigResource, context),
    }),
    ...(input.description != null && { description: input.description }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "project", () => input.project!, "{project}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.cloudWatchLogs != null && {
      cloudWatchLogs: serializeAws_restJson1CloudWatchLogsDestinationConfig(input.cloudWatchLogs, context),
    }),
    ...(input.s3Destination != null && {
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
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.results != null) {
    contents.results = deserializeAws_restJson1EvaluationResultsList(data.results, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchEvaluateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature != null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch != null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project != null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.segment != null) {
    contents.segment = deserializeAws_restJson1Segment(data.segment, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1EvaluateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EvaluateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.details != null) {
    contents.details = new __LazyJsonString(data.details);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  if (data.value != null) {
    contents.value = deserializeAws_restJson1VariableValue(__expectUnion(data.value), context);
  }
  if (data.variation != null) {
    contents.variation = __expectString(data.variation);
  }
  return contents;
};

const deserializeAws_restJson1EvaluateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1GetExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetExperimentResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExperimentResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.details != null) {
    contents.details = __expectString(data.details);
  }
  if (data.reports != null) {
    contents.reports = deserializeAws_restJson1ExperimentReportList(data.reports, context);
  }
  if (data.resultsData != null) {
    contents.resultsData = deserializeAws_restJson1ExperimentResultsDataList(data.resultsData, context);
  }
  if (data.timestamps != null) {
    contents.timestamps = deserializeAws_restJson1TimestampList(data.timestamps, context);
  }
  return contents;
};

const deserializeAws_restJson1GetExperimentResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature != null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch != null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return contents;
};

const deserializeAws_restJson1GetLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project != null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return contents;
};

const deserializeAws_restJson1GetProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.segment != null) {
    contents.segment = deserializeAws_restJson1Segment(data.segment, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSegmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExperimentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiments != null) {
    contents.experiments = deserializeAws_restJson1ExperimentList(data.experiments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListExperimentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFeaturesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.features != null) {
    contents.features = deserializeAws_restJson1FeatureSummariesList(data.features, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFeaturesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListLaunchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLaunchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launches != null) {
    contents.launches = deserializeAws_restJson1LaunchesList(data.launches, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLaunchesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.projects != null) {
    contents.projects = deserializeAws_restJson1ProjectSummariesList(data.projects, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSegmentReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSegmentReferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.referencedBy != null) {
    contents.referencedBy = deserializeAws_restJson1RefResourceList(data.referencedBy, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSegmentReferencesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentReferencesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.segments != null) {
    contents.segments = deserializeAws_restJson1SegmentList(data.segments, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSegmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1PutProjectEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutProjectEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.eventResults != null) {
    contents.eventResults = deserializeAws_restJson1PutProjectEventsResultEntryList(data.eventResults, context);
  }
  if (data.failedEventCount != null) {
    contents.failedEventCount = __expectInt32(data.failedEventCount);
  }
  return contents;
};

const deserializeAws_restJson1PutProjectEventsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectEventsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.startedTime != null) {
    contents.startedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.startedTime)));
  }
  return contents;
};

const deserializeAws_restJson1StartExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch != null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return contents;
};

const deserializeAws_restJson1StartLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endedTime != null) {
    contents.endedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endedTime)));
  }
  return contents;
};

const deserializeAws_restJson1StopExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.endedTime != null) {
    contents.endedTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.endedTime)));
  }
  return contents;
};

const deserializeAws_restJson1StopLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TestSegmentPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestSegmentPatternCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TestSegmentPatternCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.match != null) {
    contents.match = __expectBoolean(data.match);
  }
  return contents;
};

const deserializeAws_restJson1TestSegmentPatternCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestSegmentPatternCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.experiment != null) {
    contents.experiment = deserializeAws_restJson1Experiment(data.experiment, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateExperimentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.feature != null) {
    contents.feature = deserializeAws_restJson1Feature(data.feature, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFeatureCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.launch != null) {
    contents.launch = deserializeAws_restJson1Launch(data.launch, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateLaunchCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project != null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateProjectDataDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectDataDeliveryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateProjectDataDeliveryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.project != null) {
    contents.project = deserializeAws_restJson1Project(data.project, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateProjectDataDeliveryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectDataDeliveryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
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
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
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
    ...(input.logGroup != null && { logGroup: input.logGroup }),
  };
};

const serializeAws_restJson1EntityOverrideMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1EvaluationRequest = (input: EvaluationRequest, context: __SerdeContext): any => {
  return {
    ...(input.entityId != null && { entityId: input.entityId }),
    ...(input.evaluationContext != null && { evaluationContext: __LazyJsonString.fromObject(input.evaluationContext) }),
    ...(input.feature != null && { feature: input.feature }),
  };
};

const serializeAws_restJson1EvaluationRequestsList = (input: EvaluationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EvaluationRequest(entry, context);
    });
};

const serializeAws_restJson1Event = (input: Event, context: __SerdeContext): any => {
  return {
    ...(input.data != null && { data: __LazyJsonString.fromObject(input.data) }),
    ...(input.timestamp != null && { timestamp: Math.round(input.timestamp.getTime() / 1000) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
      return entry;
    });
};

const serializeAws_restJson1GroupToWeightMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1LaunchGroupConfig = (input: LaunchGroupConfig, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.feature != null && { feature: input.feature }),
    ...(input.name != null && { name: input.name }),
    ...(input.variation != null && { variation: input.variation }),
  };
};

const serializeAws_restJson1LaunchGroupConfigList = (input: LaunchGroupConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LaunchGroupConfig(entry, context);
    });
};

const serializeAws_restJson1MetricDefinitionConfig = (input: MetricDefinitionConfig, context: __SerdeContext): any => {
  return {
    ...(input.entityIdKey != null && { entityIdKey: input.entityIdKey }),
    ...(input.eventPattern != null && { eventPattern: __LazyJsonString.fromObject(input.eventPattern) }),
    ...(input.name != null && { name: input.name }),
    ...(input.unitLabel != null && { unitLabel: input.unitLabel }),
    ...(input.valueKey != null && { valueKey: input.valueKey }),
  };
};

const serializeAws_restJson1MetricGoalConfig = (input: MetricGoalConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredChange != null && { desiredChange: input.desiredChange }),
    ...(input.metricDefinition != null && {
      metricDefinition: serializeAws_restJson1MetricDefinitionConfig(input.metricDefinition, context),
    }),
  };
};

const serializeAws_restJson1MetricGoalConfigList = (input: MetricGoalConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MetricGoalConfig(entry, context);
    });
};

const serializeAws_restJson1MetricMonitorConfig = (input: MetricMonitorConfig, context: __SerdeContext): any => {
  return {
    ...(input.metricDefinition != null && {
      metricDefinition: serializeAws_restJson1MetricDefinitionConfig(input.metricDefinition, context),
    }),
  };
};

const serializeAws_restJson1MetricMonitorConfigList = (input: MetricMonitorConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MetricMonitorConfig(entry, context);
    });
};

const serializeAws_restJson1MetricNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OnlineAbConfig = (input: OnlineAbConfig, context: __SerdeContext): any => {
  return {
    ...(input.controlTreatmentName != null && { controlTreatmentName: input.controlTreatmentName }),
    ...(input.treatmentWeights != null && {
      treatmentWeights: serializeAws_restJson1TreatmentToWeightMap(input.treatmentWeights, context),
    }),
  };
};

const serializeAws_restJson1ProjectAppConfigResourceConfig = (
  input: ProjectAppConfigResourceConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.applicationId != null && { applicationId: input.applicationId }),
    ...(input.environmentId != null && { environmentId: input.environmentId }),
  };
};

const serializeAws_restJson1ProjectDataDeliveryConfig = (
  input: ProjectDataDeliveryConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogs != null && {
      cloudWatchLogs: serializeAws_restJson1CloudWatchLogsDestinationConfig(input.cloudWatchLogs, context),
    }),
    ...(input.s3Destination != null && {
      s3Destination: serializeAws_restJson1S3DestinationConfig(input.s3Destination, context),
    }),
  };
};

const serializeAws_restJson1S3DestinationConfig = (input: S3DestinationConfig, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.prefix != null && { prefix: input.prefix }),
  };
};

const serializeAws_restJson1ScheduledSplitConfig = (input: ScheduledSplitConfig, context: __SerdeContext): any => {
  return {
    ...(input.groupWeights != null && {
      groupWeights: serializeAws_restJson1GroupToWeightMap(input.groupWeights, context),
    }),
    ...(input.segmentOverrides != null && {
      segmentOverrides: serializeAws_restJson1SegmentOverridesList(input.segmentOverrides, context),
    }),
    ...(input.startTime != null && { startTime: Math.round(input.startTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1ScheduledSplitConfigList = (
  input: ScheduledSplitConfig[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ScheduledSplitConfig(entry, context);
    });
};

const serializeAws_restJson1ScheduledSplitsLaunchConfig = (
  input: ScheduledSplitsLaunchConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.steps != null && { steps: serializeAws_restJson1ScheduledSplitConfigList(input.steps, context) }),
  };
};

const serializeAws_restJson1SegmentOverride = (input: SegmentOverride, context: __SerdeContext): any => {
  return {
    ...(input.evaluationOrder != null && { evaluationOrder: input.evaluationOrder }),
    ...(input.segment != null && { segment: input.segment }),
    ...(input.weights != null && { weights: serializeAws_restJson1GroupToWeightMap(input.weights, context) }),
  };
};

const serializeAws_restJson1SegmentOverridesList = (input: SegmentOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SegmentOverride(entry, context);
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TreatmentConfig = (input: TreatmentConfig, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.feature != null && { feature: input.feature }),
    ...(input.name != null && { name: input.name }),
    ...(input.variation != null && { variation: input.variation }),
  };
};

const serializeAws_restJson1TreatmentConfigList = (input: TreatmentConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TreatmentConfig(entry, context);
    });
};

const serializeAws_restJson1TreatmentNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TreatmentToWeightMap = (input: Record<string, number>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
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
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: serializeAws_restJson1VariableValue(input.value, context) }),
  };
};

const serializeAws_restJson1VariationConfigsList = (input: VariationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VariationConfig(entry, context);
    });
};

const serializeAws_restJson1VariationNameList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1EntityOverrideMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return {
    details: output.details != null ? new __LazyJsonString(output.details) : undefined,
    entityId: __expectString(output.entityId),
    feature: __expectString(output.feature),
    project: __expectString(output.project),
    reason: __expectString(output.reason),
    value:
      output.value != null ? deserializeAws_restJson1VariableValue(__expectUnion(output.value), context) : undefined,
    variation: __expectString(output.variation),
  } as any;
};

const deserializeAws_restJson1EvaluationResultsList = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluationResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EvaluationRule = (output: any, context: __SerdeContext): EvaluationRule => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1EvaluationRulesList = (output: any, context: __SerdeContext): EvaluationRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EvaluationRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Experiment = (output: any, context: __SerdeContext): Experiment => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    execution:
      output.execution != null ? deserializeAws_restJson1ExperimentExecution(output.execution, context) : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    metricGoals:
      output.metricGoals != null ? deserializeAws_restJson1MetricGoalsList(output.metricGoals, context) : undefined,
    name: __expectString(output.name),
    onlineAbDefinition:
      output.onlineAbDefinition != null
        ? deserializeAws_restJson1OnlineAbDefinition(output.onlineAbDefinition, context)
        : undefined,
    project: __expectString(output.project),
    randomizationSalt: __expectString(output.randomizationSalt),
    samplingRate: __expectLong(output.samplingRate),
    schedule:
      output.schedule != null ? deserializeAws_restJson1ExperimentSchedule(output.schedule, context) : undefined,
    segment: __expectString(output.segment),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    treatments:
      output.treatments != null ? deserializeAws_restJson1TreatmentList(output.treatments, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1ExperimentExecution = (output: any, context: __SerdeContext): ExperimentExecution => {
  return {
    endedTime:
      output.endedTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endedTime))) : undefined,
    startedTime:
      output.startedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentList = (output: any, context: __SerdeContext): Experiment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Experiment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentReport = (output: any, context: __SerdeContext): ExperimentReport => {
  return {
    content: output.content != null ? new __LazyJsonString(output.content) : undefined,
    metricName: __expectString(output.metricName),
    reportName: __expectString(output.reportName),
    treatmentName: __expectString(output.treatmentName),
  } as any;
};

const deserializeAws_restJson1ExperimentReportList = (output: any, context: __SerdeContext): ExperimentReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentReport(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentResultsData = (output: any, context: __SerdeContext): ExperimentResultsData => {
  return {
    metricName: __expectString(output.metricName),
    resultStat: __expectString(output.resultStat),
    treatmentName: __expectString(output.treatmentName),
    values: output.values != null ? deserializeAws_restJson1DoubleValueList(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ExperimentResultsDataList = (
  output: any,
  context: __SerdeContext
): ExperimentResultsData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExperimentResultsData(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExperimentSchedule = (output: any, context: __SerdeContext): ExperimentSchedule => {
  return {
    analysisCompleteTime:
      output.analysisCompleteTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.analysisCompleteTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Feature = (output: any, context: __SerdeContext): Feature => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    defaultVariation: __expectString(output.defaultVariation),
    description: __expectString(output.description),
    entityOverrides:
      output.entityOverrides != null
        ? deserializeAws_restJson1EntityOverrideMap(output.entityOverrides, context)
        : undefined,
    evaluationRules:
      output.evaluationRules != null
        ? deserializeAws_restJson1EvaluationRulesList(output.evaluationRules, context)
        : undefined,
    evaluationStrategy: __expectString(output.evaluationStrategy),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    valueType: __expectString(output.valueType),
    variations:
      output.variations != null ? deserializeAws_restJson1VariationsList(output.variations, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FeatureSummariesList = (output: any, context: __SerdeContext): FeatureSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FeatureSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FeatureSummary = (output: any, context: __SerdeContext): FeatureSummary => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    defaultVariation: __expectString(output.defaultVariation),
    evaluationRules:
      output.evaluationRules != null
        ? deserializeAws_restJson1EvaluationRulesList(output.evaluationRules, context)
        : undefined,
    evaluationStrategy: __expectString(output.evaluationStrategy),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FeatureToVariationMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1GroupToWeightMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Launch = (output: any, context: __SerdeContext): Launch => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    execution:
      output.execution != null ? deserializeAws_restJson1LaunchExecution(output.execution, context) : undefined,
    groups: output.groups != null ? deserializeAws_restJson1LaunchGroupList(output.groups, context) : undefined,
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    metricMonitors:
      output.metricMonitors != null
        ? deserializeAws_restJson1MetricMonitorList(output.metricMonitors, context)
        : undefined,
    name: __expectString(output.name),
    project: __expectString(output.project),
    randomizationSalt: __expectString(output.randomizationSalt),
    scheduledSplitsDefinition:
      output.scheduledSplitsDefinition != null
        ? deserializeAws_restJson1ScheduledSplitsLaunchDefinition(output.scheduledSplitsDefinition, context)
        : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1LaunchesList = (output: any, context: __SerdeContext): Launch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Launch(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LaunchExecution = (output: any, context: __SerdeContext): LaunchExecution => {
  return {
    endedTime:
      output.endedTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endedTime))) : undefined,
    startedTime:
      output.startedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedTime)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1LaunchGroup = (output: any, context: __SerdeContext): LaunchGroup => {
  return {
    description: __expectString(output.description),
    featureVariations:
      output.featureVariations != null
        ? deserializeAws_restJson1FeatureToVariationMap(output.featureVariations, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1LaunchGroupList = (output: any, context: __SerdeContext): LaunchGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LaunchGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricDefinition = (output: any, context: __SerdeContext): MetricDefinition => {
  return {
    entityIdKey: __expectString(output.entityIdKey),
    eventPattern: output.eventPattern != null ? new __LazyJsonString(output.eventPattern) : undefined,
    name: __expectString(output.name),
    unitLabel: __expectString(output.unitLabel),
    valueKey: __expectString(output.valueKey),
  } as any;
};

const deserializeAws_restJson1MetricGoal = (output: any, context: __SerdeContext): MetricGoal => {
  return {
    desiredChange: __expectString(output.desiredChange),
    metricDefinition:
      output.metricDefinition != null
        ? deserializeAws_restJson1MetricDefinition(output.metricDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricGoalsList = (output: any, context: __SerdeContext): MetricGoal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricGoal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MetricMonitor = (output: any, context: __SerdeContext): MetricMonitor => {
  return {
    metricDefinition:
      output.metricDefinition != null
        ? deserializeAws_restJson1MetricDefinition(output.metricDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MetricMonitorList = (output: any, context: __SerdeContext): MetricMonitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MetricMonitor(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1OnlineAbDefinition = (output: any, context: __SerdeContext): OnlineAbDefinition => {
  return {
    controlTreatmentName: __expectString(output.controlTreatmentName),
    treatmentWeights:
      output.treatmentWeights != null
        ? deserializeAws_restJson1TreatmentToWeightMap(output.treatmentWeights, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Project = (output: any, context: __SerdeContext): Project => {
  return {
    activeExperimentCount: __expectLong(output.activeExperimentCount),
    activeLaunchCount: __expectLong(output.activeLaunchCount),
    appConfigResource:
      output.appConfigResource != null
        ? deserializeAws_restJson1ProjectAppConfigResource(output.appConfigResource, context)
        : undefined,
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    dataDelivery:
      output.dataDelivery != null
        ? deserializeAws_restJson1ProjectDataDelivery(output.dataDelivery, context)
        : undefined,
    description: __expectString(output.description),
    experimentCount: __expectLong(output.experimentCount),
    featureCount: __expectLong(output.featureCount),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    launchCount: __expectLong(output.launchCount),
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectAppConfigResource = (
  output: any,
  context: __SerdeContext
): ProjectAppConfigResource => {
  return {
    applicationId: __expectString(output.applicationId),
    configurationProfileId: __expectString(output.configurationProfileId),
    environmentId: __expectString(output.environmentId),
  } as any;
};

const deserializeAws_restJson1ProjectDataDelivery = (output: any, context: __SerdeContext): ProjectDataDelivery => {
  return {
    cloudWatchLogs:
      output.cloudWatchLogs != null
        ? deserializeAws_restJson1CloudWatchLogsDestination(output.cloudWatchLogs, context)
        : undefined,
    s3Destination:
      output.s3Destination != null ? deserializeAws_restJson1S3Destination(output.s3Destination, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ProjectSummariesList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProjectSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return {
    activeExperimentCount: __expectLong(output.activeExperimentCount),
    activeLaunchCount: __expectLong(output.activeLaunchCount),
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    experimentCount: __expectLong(output.experimentCount),
    featureCount: __expectLong(output.featureCount),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    launchCount: __expectLong(output.launchCount),
    name: __expectString(output.name),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PutProjectEventsResultEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RefResource = (output: any, context: __SerdeContext): RefResource => {
  return {
    arn: __expectString(output.arn),
    endTime: __expectString(output.endTime),
    lastUpdatedOn: __expectString(output.lastUpdatedOn),
    name: __expectString(output.name),
    startTime: __expectString(output.startTime),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1RefResourceList = (output: any, context: __SerdeContext): RefResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RefResource(entry, context);
    });
  return retVal;
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
      output.groupWeights != null ? deserializeAws_restJson1GroupToWeightMap(output.groupWeights, context) : undefined,
    segmentOverrides:
      output.segmentOverrides != null
        ? deserializeAws_restJson1SegmentOverridesList(output.segmentOverrides, context)
        : undefined,
    startTime:
      output.startTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startTime))) : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduledSplitsLaunchDefinition = (
  output: any,
  context: __SerdeContext
): ScheduledSplitsLaunchDefinition => {
  return {
    steps: output.steps != null ? deserializeAws_restJson1ScheduledStepList(output.steps, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ScheduledStepList = (output: any, context: __SerdeContext): ScheduledSplit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ScheduledSplit(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Segment = (output: any, context: __SerdeContext): Segment => {
  return {
    arn: __expectString(output.arn),
    createdTime:
      output.createdTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdTime)))
        : undefined,
    description: __expectString(output.description),
    experimentCount: __expectLong(output.experimentCount),
    lastUpdatedTime:
      output.lastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedTime)))
        : undefined,
    launchCount: __expectLong(output.launchCount),
    name: __expectString(output.name),
    pattern: output.pattern != null ? new __LazyJsonString(output.pattern) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentList = (output: any, context: __SerdeContext): Segment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Segment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SegmentOverride = (output: any, context: __SerdeContext): SegmentOverride => {
  return {
    evaluationOrder: __expectLong(output.evaluationOrder),
    segment: __expectString(output.segment),
    weights: output.weights != null ? deserializeAws_restJson1GroupToWeightMap(output.weights, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SegmentOverridesList = (output: any, context: __SerdeContext): SegmentOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SegmentOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

const deserializeAws_restJson1Treatment = (output: any, context: __SerdeContext): Treatment => {
  return {
    description: __expectString(output.description),
    featureVariations:
      output.featureVariations != null
        ? deserializeAws_restJson1FeatureToVariationMap(output.featureVariations, context)
        : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1TreatmentList = (output: any, context: __SerdeContext): Treatment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Treatment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TreatmentToWeightMap = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
  return retVal;
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
      output.value != null ? deserializeAws_restJson1VariableValue(__expectUnion(output.value), context) : undefined,
  } as any;
};

const deserializeAws_restJson1VariationsList = (output: any, context: __SerdeContext): Variation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Variation(entry, context);
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
