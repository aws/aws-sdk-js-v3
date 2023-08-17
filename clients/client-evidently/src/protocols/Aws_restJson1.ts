// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
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
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
  CloudWatchLogsDestinationConfig,
  ConflictException,
  EvaluationRequest,
  EvaluationResult,
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
  LaunchGroupConfig,
  MetricDefinition,
  MetricDefinitionConfig,
  MetricGoal,
  MetricGoalConfig,
  MetricMonitor,
  MetricMonitorConfig,
  OnlineAbConfig,
  Project,
  ProjectAppConfigResourceConfig,
  ProjectDataDeliveryConfig,
  ProjectSummary,
  ResourceNotFoundException,
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
  TreatmentConfig,
  ValidationException,
  VariableValue,
  Variation,
  VariationConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1BatchEvaluateFeatureCommand
 */
export const se_BatchEvaluateFeatureCommand = async (
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
  body = JSON.stringify(
    take(input, {
      requests: (_) => se_EvaluationRequestsList(_, context),
    })
  );
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

/**
 * serializeAws_restJson1CreateExperimentCommand
 */
export const se_CreateExperimentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [],
      metricGoals: (_) => se_MetricGoalConfigList(_, context),
      name: [],
      onlineAbConfig: (_) => _json(_),
      randomizationSalt: [],
      samplingRate: [],
      segment: [],
      tags: (_) => _json(_),
      treatments: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateFeatureCommand
 */
export const se_CreateFeatureCommand = async (
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
  body = JSON.stringify(
    take(input, {
      defaultVariation: [],
      description: [],
      entityOverrides: (_) => _json(_),
      evaluationStrategy: [],
      name: [],
      tags: (_) => _json(_),
      variations: (_) => se_VariationConfigsList(_, context),
    })
  );
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
 * serializeAws_restJson1CreateLaunchCommand
 */
export const se_CreateLaunchCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [],
      groups: (_) => _json(_),
      metricMonitors: (_) => se_MetricMonitorConfigList(_, context),
      name: [],
      randomizationSalt: [],
      scheduledSplitsConfig: (_) => se_ScheduledSplitsLaunchConfig(_, context),
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateProjectCommand
 */
export const se_CreateProjectCommand = async (
  input: CreateProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/projects";
  let body: any;
  body = JSON.stringify(
    take(input, {
      appConfigResource: (_) => _json(_),
      dataDelivery: (_) => _json(_),
      description: [],
      name: [],
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateSegmentCommand
 */
export const se_CreateSegmentCommand = async (
  input: CreateSegmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/segments";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      name: [],
      pattern: (_) => __LazyJsonString.fromObject(_),
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteExperimentCommand
 */
export const se_DeleteExperimentCommand = async (
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

/**
 * serializeAws_restJson1DeleteFeatureCommand
 */
export const se_DeleteFeatureCommand = async (
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

/**
 * serializeAws_restJson1DeleteLaunchCommand
 */
export const se_DeleteLaunchCommand = async (
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

/**
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
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

/**
 * serializeAws_restJson1DeleteSegmentCommand
 */
export const se_DeleteSegmentCommand = async (
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

/**
 * serializeAws_restJson1EvaluateFeatureCommand
 */
export const se_EvaluateFeatureCommand = async (
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
  body = JSON.stringify(
    take(input, {
      entityId: [],
      evaluationContext: (_) => __LazyJsonString.fromObject(_),
    })
  );
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

/**
 * serializeAws_restJson1GetExperimentCommand
 */
export const se_GetExperimentCommand = async (
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

/**
 * serializeAws_restJson1GetExperimentResultsCommand
 */
export const se_GetExperimentResultsCommand = async (
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
  body = JSON.stringify(
    take(input, {
      baseStat: [],
      endTime: (_) => Math.round(_.getTime() / 1000),
      metricNames: (_) => _json(_),
      period: [],
      reportNames: (_) => _json(_),
      resultStats: (_) => _json(_),
      startTime: (_) => Math.round(_.getTime() / 1000),
      treatmentNames: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1GetFeatureCommand
 */
export const se_GetFeatureCommand = async (
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

/**
 * serializeAws_restJson1GetLaunchCommand
 */
export const se_GetLaunchCommand = async (
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

/**
 * serializeAws_restJson1GetProjectCommand
 */
export const se_GetProjectCommand = async (
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

/**
 * serializeAws_restJson1GetSegmentCommand
 */
export const se_GetSegmentCommand = async (
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

/**
 * serializeAws_restJson1ListExperimentsCommand
 */
export const se_ListExperimentsCommand = async (
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

/**
 * serializeAws_restJson1ListFeaturesCommand
 */
export const se_ListFeaturesCommand = async (
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

/**
 * serializeAws_restJson1ListLaunchesCommand
 */
export const se_ListLaunchesCommand = async (
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

/**
 * serializeAws_restJson1ListProjectsCommand
 */
export const se_ListProjectsCommand = async (
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

/**
 * serializeAws_restJson1ListSegmentReferencesCommand
 */
export const se_ListSegmentReferencesCommand = async (
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

/**
 * serializeAws_restJson1ListSegmentsCommand
 */
export const se_ListSegmentsCommand = async (
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

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
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

/**
 * serializeAws_restJson1PutProjectEventsCommand
 */
export const se_PutProjectEventsCommand = async (
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
  body = JSON.stringify(
    take(input, {
      events: (_) => se_EventList(_, context),
    })
  );
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

/**
 * serializeAws_restJson1StartExperimentCommand
 */
export const se_StartExperimentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      analysisCompleteTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
 * serializeAws_restJson1StartLaunchCommand
 */
export const se_StartLaunchCommand = async (
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

/**
 * serializeAws_restJson1StopExperimentCommand
 */
export const se_StopExperimentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      desiredState: [],
      reason: [],
    })
  );
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
 * serializeAws_restJson1StopLaunchCommand
 */
export const se_StopLaunchCommand = async (
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
  body = JSON.stringify(
    take(input, {
      desiredState: [],
      reason: [],
    })
  );
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1TestSegmentPatternCommand
 */
export const se_TestSegmentPatternCommand = async (
  input: TestSegmentPatternCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/test-segment-pattern";
  let body: any;
  body = JSON.stringify(
    take(input, {
      pattern: (_) => __LazyJsonString.fromObject(_),
      payload: (_) => __LazyJsonString.fromObject(_),
    })
  );
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
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
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

/**
 * serializeAws_restJson1UpdateExperimentCommand
 */
export const se_UpdateExperimentCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [],
      metricGoals: (_) => se_MetricGoalConfigList(_, context),
      onlineAbConfig: (_) => _json(_),
      randomizationSalt: [],
      removeSegment: [],
      samplingRate: [],
      segment: [],
      treatments: (_) => _json(_),
    })
  );
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

/**
 * serializeAws_restJson1UpdateFeatureCommand
 */
export const se_UpdateFeatureCommand = async (
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
  body = JSON.stringify(
    take(input, {
      addOrUpdateVariations: (_) => se_VariationConfigsList(_, context),
      defaultVariation: [],
      description: [],
      entityOverrides: (_) => _json(_),
      evaluationStrategy: [],
      removeVariations: (_) => _json(_),
    })
  );
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

/**
 * serializeAws_restJson1UpdateLaunchCommand
 */
export const se_UpdateLaunchCommand = async (
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
  body = JSON.stringify(
    take(input, {
      description: [],
      groups: (_) => _json(_),
      metricMonitors: (_) => se_MetricMonitorConfigList(_, context),
      randomizationSalt: [],
      scheduledSplitsConfig: (_) => se_ScheduledSplitsLaunchConfig(_, context),
    })
  );
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

/**
 * serializeAws_restJson1UpdateProjectCommand
 */
export const se_UpdateProjectCommand = async (
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
  body = JSON.stringify(
    take(input, {
      appConfigResource: (_) => _json(_),
      description: [],
    })
  );
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

/**
 * serializeAws_restJson1UpdateProjectDataDeliveryCommand
 */
export const se_UpdateProjectDataDeliveryCommand = async (
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
  body = JSON.stringify(
    take(input, {
      cloudWatchLogs: (_) => _json(_),
      s3Destination: (_) => _json(_),
    })
  );
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

/**
 * deserializeAws_restJson1BatchEvaluateFeatureCommand
 */
export const de_BatchEvaluateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEvaluateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchEvaluateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    results: (_) => de_EvaluationResultsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1BatchEvaluateFeatureCommandError
 */
const de_BatchEvaluateFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateExperimentCommand
 */
export const de_CreateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateExperimentCommandError
 */
const de_CreateExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateFeatureCommand
 */
export const de_CreateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    feature: (_) => de_Feature(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFeatureCommandError
 */
const de_CreateFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLaunchCommand
 */
export const de_CreateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launch: (_) => de_Launch(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLaunchCommandError
 */
const de_CreateLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateProjectCommand
 */
export const de_CreateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    project: (_) => de_Project(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateProjectCommandError
 */
const de_CreateProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateSegmentCommand
 */
export const de_CreateSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    segment: (_) => de_Segment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSegmentCommandError
 */
const de_CreateSegmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteExperimentCommand
 */
export const de_DeleteExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExperimentCommandError
 */
const de_DeleteExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.evidently#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.evidently#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteFeatureCommand
 */
export const de_DeleteFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFeatureCommandError
 */
const de_DeleteFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLaunchCommand
 */
export const de_DeleteLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLaunchCommandError
 */
const de_DeleteLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteProjectCommand
 */
export const de_DeleteProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteProjectCommandError
 */
const de_DeleteProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteSegmentCommand
 */
export const de_DeleteSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSegmentCommandError
 */
const de_DeleteSegmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1EvaluateFeatureCommand
 */
export const de_EvaluateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EvaluateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_EvaluateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: (_) => new __LazyJsonString(_),
    reason: __expectString,
    value: (_) => de_VariableValue(__expectUnion(_), context),
    variation: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1EvaluateFeatureCommandError
 */
const de_EvaluateFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetExperimentCommand
 */
export const de_GetExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentCommandError
 */
const de_GetExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetExperimentResultsCommand
 */
export const de_GetExperimentResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExperimentResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetExperimentResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    details: __expectString,
    reports: (_) => de_ExperimentReportList(_, context),
    resultsData: (_) => de_ExperimentResultsDataList(_, context),
    timestamps: (_) => de_TimestampList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetExperimentResultsCommandError
 */
const de_GetExperimentResultsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetFeatureCommand
 */
export const de_GetFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    feature: (_) => de_Feature(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetFeatureCommandError
 */
const de_GetFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLaunchCommand
 */
export const de_GetLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launch: (_) => de_Launch(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLaunchCommandError
 */
const de_GetLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetProjectCommand
 */
export const de_GetProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    project: (_) => de_Project(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetProjectCommandError
 */
const de_GetProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetSegmentCommand
 */
export const de_GetSegmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSegmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSegmentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    segment: (_) => de_Segment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSegmentCommandError
 */
const de_GetSegmentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListExperimentsCommand
 */
export const de_ListExperimentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExperimentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExperimentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiments: (_) => de_ExperimentList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListExperimentsCommandError
 */
const de_ListExperimentsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListFeaturesCommand
 */
export const de_ListFeaturesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFeaturesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFeaturesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    features: (_) => de_FeatureSummariesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFeaturesCommandError
 */
const de_ListFeaturesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLaunchesCommand
 */
export const de_ListLaunchesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLaunchesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLaunchesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launches: (_) => de_LaunchesList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLaunchesCommandError
 */
const de_ListLaunchesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListProjectsCommand
 */
export const de_ListProjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    projects: (_) => de_ProjectSummariesList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProjectsCommandError
 */
const de_ListProjectsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSegmentReferencesCommand
 */
export const de_ListSegmentReferencesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentReferencesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSegmentReferencesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    referencedBy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSegmentReferencesCommandError
 */
const de_ListSegmentReferencesCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSegmentsCommand
 */
export const de_ListSegmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSegmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSegmentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    segments: (_) => de_SegmentList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSegmentsCommandError
 */
const de_ListSegmentsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutProjectEventsCommand
 */
export const de_PutProjectEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProjectEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutProjectEventsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    eventResults: _json,
    failedEventCount: __expectInt32,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutProjectEventsCommandError
 */
const de_PutProjectEventsCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartExperimentCommand
 */
export const de_StartExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    startedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartExperimentCommandError
 */
const de_StartExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartLaunchCommand
 */
export const de_StartLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launch: (_) => de_Launch(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartLaunchCommandError
 */
const de_StartLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopExperimentCommand
 */
export const de_StopExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopExperimentCommandError
 */
const de_StopExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StopLaunchCommand
 */
export const de_StopLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    endedTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopLaunchCommandError
 */
const de_StopLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1TestSegmentPatternCommand
 */
export const de_TestSegmentPatternCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TestSegmentPatternCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TestSegmentPatternCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    match: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TestSegmentPatternCommandError
 */
const de_TestSegmentPatternCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.evidently#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
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
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateExperimentCommand
 */
export const de_UpdateExperimentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExperimentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateExperimentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    experiment: (_) => de_Experiment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExperimentCommandError
 */
const de_UpdateExperimentCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateFeatureCommand
 */
export const de_UpdateFeatureCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFeatureCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFeatureCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    feature: (_) => de_Feature(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFeatureCommandError
 */
const de_UpdateFeatureCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLaunchCommand
 */
export const de_UpdateLaunchCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLaunchCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLaunchCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    launch: (_) => de_Launch(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLaunchCommandError
 */
const de_UpdateLaunchCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateProjectCommand
 */
export const de_UpdateProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    project: (_) => de_Project(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectCommandError
 */
const de_UpdateProjectCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateProjectDataDeliveryCommand
 */
export const de_UpdateProjectDataDeliveryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateProjectDataDeliveryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateProjectDataDeliveryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    project: (_) => de_Project(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateProjectDataDeliveryCommandError
 */
const de_UpdateProjectDataDeliveryCommandError = async (
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
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.evidently#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.evidently#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.evidently#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.evidently#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    quotaCode: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    quotaCode: __expectString,
    serviceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_CloudWatchLogsDestinationConfig omitted.

// se_EntityOverrideMap omitted.

/**
 * serializeAws_restJson1EvaluationRequest
 */
const se_EvaluationRequest = (input: EvaluationRequest, context: __SerdeContext): any => {
  return take(input, {
    entityId: [],
    evaluationContext: __LazyJsonString.fromObject,
    feature: [],
  });
};

/**
 * serializeAws_restJson1EvaluationRequestsList
 */
const se_EvaluationRequestsList = (input: EvaluationRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EvaluationRequest(entry, context);
    });
};

/**
 * serializeAws_restJson1Event
 */
const se_Event = (input: Event, context: __SerdeContext): any => {
  return take(input, {
    data: __LazyJsonString.fromObject,
    timestamp: (_) => Math.round(_.getTime() / 1000),
    type: [],
  });
};

/**
 * serializeAws_restJson1EventList
 */
const se_EventList = (input: Event[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Event(entry, context);
    });
};

// se_ExperimentReportNameList omitted.

// se_ExperimentResultRequestTypeList omitted.

// se_GroupToWeightMap omitted.

// se_LaunchGroupConfig omitted.

// se_LaunchGroupConfigList omitted.

/**
 * serializeAws_restJson1MetricDefinitionConfig
 */
const se_MetricDefinitionConfig = (input: MetricDefinitionConfig, context: __SerdeContext): any => {
  return take(input, {
    entityIdKey: [],
    eventPattern: __LazyJsonString.fromObject,
    name: [],
    unitLabel: [],
    valueKey: [],
  });
};

/**
 * serializeAws_restJson1MetricGoalConfig
 */
const se_MetricGoalConfig = (input: MetricGoalConfig, context: __SerdeContext): any => {
  return take(input, {
    desiredChange: [],
    metricDefinition: (_) => se_MetricDefinitionConfig(_, context),
  });
};

/**
 * serializeAws_restJson1MetricGoalConfigList
 */
const se_MetricGoalConfigList = (input: MetricGoalConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricGoalConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1MetricMonitorConfig
 */
const se_MetricMonitorConfig = (input: MetricMonitorConfig, context: __SerdeContext): any => {
  return take(input, {
    metricDefinition: (_) => se_MetricDefinitionConfig(_, context),
  });
};

/**
 * serializeAws_restJson1MetricMonitorConfigList
 */
const se_MetricMonitorConfigList = (input: MetricMonitorConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MetricMonitorConfig(entry, context);
    });
};

// se_MetricNameList omitted.

// se_OnlineAbConfig omitted.

// se_ProjectAppConfigResourceConfig omitted.

// se_ProjectDataDeliveryConfig omitted.

// se_S3DestinationConfig omitted.

/**
 * serializeAws_restJson1ScheduledSplitConfig
 */
const se_ScheduledSplitConfig = (input: ScheduledSplitConfig, context: __SerdeContext): any => {
  return take(input, {
    groupWeights: _json,
    segmentOverrides: _json,
    startTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_restJson1ScheduledSplitConfigList
 */
const se_ScheduledSplitConfigList = (input: ScheduledSplitConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ScheduledSplitConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1ScheduledSplitsLaunchConfig
 */
const se_ScheduledSplitsLaunchConfig = (input: ScheduledSplitsLaunchConfig, context: __SerdeContext): any => {
  return take(input, {
    steps: (_) => se_ScheduledSplitConfigList(_, context),
  });
};

// se_SegmentOverride omitted.

// se_SegmentOverridesList omitted.

// se_TagMap omitted.

// se_TreatmentConfig omitted.

// se_TreatmentConfigList omitted.

// se_TreatmentNameList omitted.

// se_TreatmentToWeightMap omitted.

/**
 * serializeAws_restJson1VariableValue
 */
const se_VariableValue = (input: VariableValue, context: __SerdeContext): any => {
  return VariableValue.visit(input, {
    boolValue: (value) => ({ boolValue: value }),
    doubleValue: (value) => ({ doubleValue: __serializeFloat(value) }),
    longValue: (value) => ({ longValue: value }),
    stringValue: (value) => ({ stringValue: value }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_restJson1VariationConfig
 */
const se_VariationConfig = (input: VariationConfig, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    value: (_) => se_VariableValue(_, context),
  });
};

/**
 * serializeAws_restJson1VariationConfigsList
 */
const se_VariationConfigsList = (input: VariationConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VariationConfig(entry, context);
    });
};

// se_VariationNameList omitted.

// de_CloudWatchLogsDestination omitted.

/**
 * deserializeAws_restJson1DoubleValueList
 */
const de_DoubleValueList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __limitedParseDouble(entry) as any;
    });
  return retVal;
};

// de_EntityOverrideMap omitted.

/**
 * deserializeAws_restJson1EvaluationResult
 */
const de_EvaluationResult = (output: any, context: __SerdeContext): EvaluationResult => {
  return take(output, {
    details: (_: any) => new __LazyJsonString(_),
    entityId: __expectString,
    feature: __expectString,
    project: __expectString,
    reason: __expectString,
    value: (_: any) => de_VariableValue(__expectUnion(_), context),
    variation: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1EvaluationResultsList
 */
const de_EvaluationResultsList = (output: any, context: __SerdeContext): EvaluationResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EvaluationResult(entry, context);
    });
  return retVal;
};

// de_EvaluationRule omitted.

// de_EvaluationRulesList omitted.

/**
 * deserializeAws_restJson1Experiment
 */
const de_Experiment = (output: any, context: __SerdeContext): Experiment => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    execution: (_: any) => de_ExperimentExecution(_, context),
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricGoals: (_: any) => de_MetricGoalsList(_, context),
    name: __expectString,
    onlineAbDefinition: _json,
    project: __expectString,
    randomizationSalt: __expectString,
    samplingRate: __expectLong,
    schedule: (_: any) => de_ExperimentSchedule(_, context),
    segment: __expectString,
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
    treatments: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentExecution
 */
const de_ExperimentExecution = (output: any, context: __SerdeContext): ExperimentExecution => {
  return take(output, {
    endedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentList
 */
const de_ExperimentList = (output: any, context: __SerdeContext): Experiment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Experiment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentReport
 */
const de_ExperimentReport = (output: any, context: __SerdeContext): ExperimentReport => {
  return take(output, {
    content: (_: any) => new __LazyJsonString(_),
    metricName: __expectString,
    reportName: __expectString,
    treatmentName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentReportList
 */
const de_ExperimentReportList = (output: any, context: __SerdeContext): ExperimentReport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentReport(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentResultsData
 */
const de_ExperimentResultsData = (output: any, context: __SerdeContext): ExperimentResultsData => {
  return take(output, {
    metricName: __expectString,
    resultStat: __expectString,
    treatmentName: __expectString,
    values: (_: any) => de_DoubleValueList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ExperimentResultsDataList
 */
const de_ExperimentResultsDataList = (output: any, context: __SerdeContext): ExperimentResultsData[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExperimentResultsData(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExperimentSchedule
 */
const de_ExperimentSchedule = (output: any, context: __SerdeContext): ExperimentSchedule => {
  return take(output, {
    analysisCompleteTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1Feature
 */
const de_Feature = (output: any, context: __SerdeContext): Feature => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVariation: __expectString,
    description: __expectString,
    entityOverrides: _json,
    evaluationRules: _json,
    evaluationStrategy: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    project: __expectString,
    status: __expectString,
    tags: _json,
    valueType: __expectString,
    variations: (_: any) => de_VariationsList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1FeatureSummariesList
 */
const de_FeatureSummariesList = (output: any, context: __SerdeContext): FeatureSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FeatureSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FeatureSummary
 */
const de_FeatureSummary = (output: any, context: __SerdeContext): FeatureSummary => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    defaultVariation: __expectString,
    evaluationRules: _json,
    evaluationStrategy: __expectString,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    project: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_FeatureToVariationMap omitted.

// de_GroupToWeightMap omitted.

/**
 * deserializeAws_restJson1Launch
 */
const de_Launch = (output: any, context: __SerdeContext): Launch => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    execution: (_: any) => de_LaunchExecution(_, context),
    groups: _json,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    metricMonitors: (_: any) => de_MetricMonitorList(_, context),
    name: __expectString,
    project: __expectString,
    randomizationSalt: __expectString,
    scheduledSplitsDefinition: (_: any) => de_ScheduledSplitsLaunchDefinition(_, context),
    status: __expectString,
    statusReason: __expectString,
    tags: _json,
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LaunchesList
 */
const de_LaunchesList = (output: any, context: __SerdeContext): Launch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Launch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LaunchExecution
 */
const de_LaunchExecution = (output: any, context: __SerdeContext): LaunchExecution => {
  return take(output, {
    endedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_LaunchGroup omitted.

// de_LaunchGroupList omitted.

/**
 * deserializeAws_restJson1MetricDefinition
 */
const de_MetricDefinition = (output: any, context: __SerdeContext): MetricDefinition => {
  return take(output, {
    entityIdKey: __expectString,
    eventPattern: (_: any) => new __LazyJsonString(_),
    name: __expectString,
    unitLabel: __expectString,
    valueKey: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1MetricGoal
 */
const de_MetricGoal = (output: any, context: __SerdeContext): MetricGoal => {
  return take(output, {
    desiredChange: __expectString,
    metricDefinition: (_: any) => de_MetricDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MetricGoalsList
 */
const de_MetricGoalsList = (output: any, context: __SerdeContext): MetricGoal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricGoal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MetricMonitor
 */
const de_MetricMonitor = (output: any, context: __SerdeContext): MetricMonitor => {
  return take(output, {
    metricDefinition: (_: any) => de_MetricDefinition(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1MetricMonitorList
 */
const de_MetricMonitorList = (output: any, context: __SerdeContext): MetricMonitor[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MetricMonitor(entry, context);
    });
  return retVal;
};

// de_OnlineAbDefinition omitted.

/**
 * deserializeAws_restJson1Project
 */
const de_Project = (output: any, context: __SerdeContext): Project => {
  return take(output, {
    activeExperimentCount: __expectLong,
    activeLaunchCount: __expectLong,
    appConfigResource: _json,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataDelivery: _json,
    description: __expectString,
    experimentCount: __expectLong,
    featureCount: __expectLong,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    launchCount: __expectLong,
    name: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_ProjectAppConfigResource omitted.

// de_ProjectDataDelivery omitted.

/**
 * deserializeAws_restJson1ProjectSummariesList
 */
const de_ProjectSummariesList = (output: any, context: __SerdeContext): ProjectSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ProjectSummary
 */
const de_ProjectSummary = (output: any, context: __SerdeContext): ProjectSummary => {
  return take(output, {
    activeExperimentCount: __expectLong,
    activeLaunchCount: __expectLong,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    experimentCount: __expectLong,
    featureCount: __expectLong,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    launchCount: __expectLong,
    name: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_PutProjectEventsResultEntry omitted.

// de_PutProjectEventsResultEntryList omitted.

// de_RefResource omitted.

// de_RefResourceList omitted.

// de_S3Destination omitted.

/**
 * deserializeAws_restJson1ScheduledSplit
 */
const de_ScheduledSplit = (output: any, context: __SerdeContext): ScheduledSplit => {
  return take(output, {
    groupWeights: _json,
    segmentOverrides: _json,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduledSplitsLaunchDefinition
 */
const de_ScheduledSplitsLaunchDefinition = (output: any, context: __SerdeContext): ScheduledSplitsLaunchDefinition => {
  return take(output, {
    steps: (_: any) => de_ScheduledStepList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1ScheduledStepList
 */
const de_ScheduledStepList = (output: any, context: __SerdeContext): ScheduledSplit[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ScheduledSplit(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Segment
 */
const de_Segment = (output: any, context: __SerdeContext): Segment => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    experimentCount: __expectLong,
    lastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    launchCount: __expectLong,
    name: __expectString,
    pattern: (_: any) => new __LazyJsonString(_),
    tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SegmentList
 */
const de_SegmentList = (output: any, context: __SerdeContext): Segment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Segment(entry, context);
    });
  return retVal;
};

// de_SegmentOverride omitted.

// de_SegmentOverridesList omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TimestampList
 */
const de_TimestampList = (output: any, context: __SerdeContext): Date[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return __expectNonNull(__parseEpochTimestamp(__expectNumber(entry)));
    });
  return retVal;
};

// de_Treatment omitted.

// de_TreatmentList omitted.

// de_TreatmentToWeightMap omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

/**
 * deserializeAws_restJson1VariableValue
 */
const de_VariableValue = (output: any, context: __SerdeContext): VariableValue => {
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

/**
 * deserializeAws_restJson1Variation
 */
const de_Variation = (output: any, context: __SerdeContext): Variation => {
  return take(output, {
    name: __expectString,
    value: (_: any) => de_VariableValue(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_restJson1VariationsList
 */
const de_VariationsList = (output: any, context: __SerdeContext): Variation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Variation(entry, context);
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
