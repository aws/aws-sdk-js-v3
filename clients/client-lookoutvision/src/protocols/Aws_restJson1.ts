// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "../commands/CreateDatasetCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "../commands/CreateModelCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "../commands/CreateProjectCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "../commands/DeleteDatasetCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "../commands/DeleteModelCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "../commands/DeleteProjectCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "../commands/DescribeDatasetCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "../commands/DescribeModelCommand";
import {
  DescribeModelPackagingJobCommandInput,
  DescribeModelPackagingJobCommandOutput,
} from "../commands/DescribeModelPackagingJobCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "../commands/DescribeProjectCommand";
import { DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput } from "../commands/DetectAnomaliesCommand";
import { ListDatasetEntriesCommandInput, ListDatasetEntriesCommandOutput } from "../commands/ListDatasetEntriesCommand";
import {
  ListModelPackagingJobsCommandInput,
  ListModelPackagingJobsCommandOutput,
} from "../commands/ListModelPackagingJobsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "../commands/ListModelsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "../commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartModelCommandInput, StartModelCommandOutput } from "../commands/StartModelCommand";
import {
  StartModelPackagingJobCommandInput,
  StartModelPackagingJobCommandOutput,
} from "../commands/StartModelPackagingJobCommand";
import { StopModelCommandInput, StopModelCommandOutput } from "../commands/StopModelCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDatasetEntriesCommandInput,
  UpdateDatasetEntriesCommandOutput,
} from "../commands/UpdateDatasetEntriesCommand";
import { LookoutVisionServiceException as __BaseException } from "../models/LookoutVisionServiceException";
import {
  AccessDeniedException,
  Anomaly,
  ConflictException,
  DatasetDescription,
  DatasetGroundTruthManifest,
  DatasetMetadata,
  DatasetSource,
  DetectAnomalyResult,
  GreengrassConfiguration,
  InputS3Object,
  InternalServerException,
  ModelDescription,
  ModelMetadata,
  ModelPackagingConfiguration,
  ModelPackagingDescription,
  ModelPackagingJobMetadata,
  ModelPerformance,
  OutputConfig,
  PixelAnomaly,
  ProjectDescription,
  ProjectMetadata,
  ResourceNotFoundException,
  S3Location,
  ServiceQuotaExceededException,
  Tag,
  TargetPlatform,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CreateDatasetCommand
 */
export const se_CreateDatasetCommand = async (
  input: CreateDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/datasets";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DatasetSource: (_) => _json(_),
      DatasetType: [],
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
 * serializeAws_restJson1CreateModelCommand
 */
export const se_CreateModelCommand = async (
  input: CreateModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects/{ProjectName}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      KmsKeyId: [],
      OutputConfig: (_) => _json(_),
      Tags: (_) => _json(_),
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
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ProjectName: [],
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
 * serializeAws_restJson1DeleteDatasetCommand
 */
export const se_DeleteDatasetCommand = async (
  input: DeleteDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetType", () => input.DatasetType!, "{DatasetType}", false);
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
 * serializeAws_restJson1DeleteModelCommand
 */
export const se_DeleteModelCommand = async (
  input: DeleteModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ModelVersion",
    () => input.ModelVersion!,
    "{ModelVersion}",
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
 * serializeAws_restJson1DeleteProjectCommand
 */
export const se_DeleteProjectCommand = async (
  input: DeleteProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects/{ProjectName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
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
 * serializeAws_restJson1DescribeDatasetCommand
 */
export const se_DescribeDatasetCommand = async (
  input: DescribeDatasetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetType", () => input.DatasetType!, "{DatasetType}", false);
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
 * serializeAws_restJson1DescribeModelCommand
 */
export const se_DescribeModelCommand = async (
  input: DescribeModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ModelVersion",
    () => input.ModelVersion!,
    "{ModelVersion}",
    false
  );
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
 * serializeAws_restJson1DescribeModelPackagingJobCommand
 */
export const se_DescribeModelPackagingJobCommand = async (
  input: DescribeModelPackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/modelpackagingjobs/{JobName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "JobName", () => input.JobName!, "{JobName}", false);
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
 * serializeAws_restJson1DescribeProjectCommand
 */
export const se_DescribeProjectCommand = async (
  input: DescribeProjectCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects/{ProjectName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
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
 * serializeAws_restJson1DetectAnomaliesCommand
 */
export const se_DetectAnomaliesCommand = async (
  input: DetectAnomaliesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": input.ContentType! || "application/octet-stream",
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/detect";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ModelVersion",
    () => input.ModelVersion!,
    "{ModelVersion}",
    false
  );
  let body: any;
  if (input.Body !== undefined) {
    body = input.Body;
  }
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
 * serializeAws_restJson1ListDatasetEntriesCommand
 */
export const se_ListDatasetEntriesCommand = async (
  input: ListDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetType", () => input.DatasetType!, "{DatasetType}", false);
  const query: any = map({
    labeled: [() => input.Labeled !== void 0, () => input.Labeled!.toString()],
    anomalyClass: [, input.AnomalyClass!],
    createdBefore: [
      () => input.BeforeCreationDate !== void 0,
      () => (input.BeforeCreationDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.AfterCreationDate !== void 0,
      () => (input.AfterCreationDate!.toISOString().split(".")[0] + "Z").toString(),
    ],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    sourceRefContains: [, input.SourceRefContains!],
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
 * serializeAws_restJson1ListModelPackagingJobsCommand
 */
export const se_ListModelPackagingJobsCommand = async (
  input: ListModelPackagingJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/modelpackagingjobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListModelsCommand
 */
export const se_ListModelsCommand = async (
  input: ListModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects/{ProjectName}/models";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1StartModelCommand
 */
export const se_StartModelCommand = async (
  input: StartModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/start";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ModelVersion",
    () => input.ModelVersion!,
    "{ModelVersion}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxInferenceUnits: [],
      MinInferenceUnits: [],
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
 * serializeAws_restJson1StartModelPackagingJobCommand
 */
export const se_StartModelPackagingJobCommand = async (
  input: StartModelPackagingJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/modelpackagingjobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Configuration: (_) => _json(_),
      Description: [],
      JobName: [],
      ModelVersion: [],
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
 * serializeAws_restJson1StopModelCommand
 */
export const se_StopModelCommand = async (
  input: StopModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/models/{ModelVersion}/stop";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ModelVersion",
    () => input.ModelVersion!,
    "{ModelVersion}",
    false
  );
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
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
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.TagKeys, `TagKeys`) != null,
      () => (input.TagKeys! || []).map((_entry) => _entry as any),
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
 * serializeAws_restJson1UpdateDatasetEntriesCommand
 */
export const se_UpdateDatasetEntriesCommand = async (
  input: UpdateDatasetEntriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/2020-11-20/projects/{ProjectName}/datasets/{DatasetType}/entries";
  resolvedPath = __resolvedPath(resolvedPath, input, "ProjectName", () => input.ProjectName!, "{ProjectName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "DatasetType", () => input.DatasetType!, "{DatasetType}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Changes: (_) => context.base64Encoder(_),
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
 * deserializeAws_restJson1CreateDatasetCommand
 */
export const de_CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetMetadata: (_) => de_DatasetMetadata(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDatasetCommandError
 */
const de_CreateDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1CreateModelCommand
 */
export const de_CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelMetadata: (_) => de_ModelMetadata(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateModelCommandError
 */
const de_CreateModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    ProjectMetadata: (_) => de_ProjectMetadata(_, context),
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DeleteDatasetCommand
 */
export const de_DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDatasetCommandError
 */
const de_DeleteDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DeleteModelCommand
 */
export const de_DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteModelCommandError
 */
const de_DeleteModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProjectArn: __expectString,
  });
  Object.assign(contents, doc);
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DescribeDatasetCommand
 */
export const de_DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetDescription: (_) => de_DatasetDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDatasetCommandError
 */
const de_DescribeDatasetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DescribeModelCommand
 */
export const de_DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelDescription: (_) => de_ModelDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeModelCommandError
 */
const de_DescribeModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DescribeModelPackagingJobCommand
 */
export const de_DescribeModelPackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackagingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeModelPackagingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelPackagingDescription: (_) => de_ModelPackagingDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeModelPackagingJobCommandError
 */
const de_DescribeModelPackagingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackagingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DescribeProjectCommand
 */
export const de_DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProjectDescription: (_) => de_ProjectDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProjectCommandError
 */
const de_DescribeProjectCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1DetectAnomaliesCommand
 */
export const de_DetectAnomaliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectAnomaliesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DetectAnomaliesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DetectAnomalyResult: (_) => de_DetectAnomalyResult(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DetectAnomaliesCommandError
 */
const de_DetectAnomaliesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectAnomaliesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1ListDatasetEntriesCommand
 */
export const de_ListDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDatasetEntriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DatasetEntries: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDatasetEntriesCommandError
 */
const de_ListDatasetEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1ListModelPackagingJobsCommand
 */
export const de_ListModelPackagingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListModelPackagingJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ModelPackagingJobs: (_) => de_ModelPackagingJobsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelPackagingJobsCommandError
 */
const de_ListModelPackagingJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagingJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1ListModelsCommand
 */
export const de_ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Models: (_) => de_ModelMetadataList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListModelsCommandError
 */
const de_ListModelsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    NextToken: __expectString,
    Projects: (_) => de_ProjectMetadataList(_, context),
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    Tags: _json,
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1StartModelCommand
 */
export const de_StartModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartModelCommandError
 */
const de_StartModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1StartModelPackagingJobCommand
 */
export const de_StartModelPackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelPackagingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartModelPackagingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartModelPackagingJobCommandError
 */
const de_StartModelPackagingJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelPackagingJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1StopModelCommand
 */
export const de_StopModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StopModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StopModelCommandError
 */
const de_StopModelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
 * deserializeAws_restJson1UpdateDatasetEntriesCommand
 */
export const de_UpdateDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateDatasetEntriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDatasetEntriesCommandError
 */
const de_UpdateDatasetEntriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
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
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
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
    Message: __expectString,
    QuotaCode: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
    QuotaCode: __expectString,
    ServiceCode: __expectString,
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_DatasetGroundTruthManifest omitted.

// se_DatasetSource omitted.

// se_GreengrassConfiguration omitted.

// se_InputS3Object omitted.

// se_ModelPackagingConfiguration omitted.

// se_OutputConfig omitted.

// se_S3Location omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_TargetPlatform omitted.

/**
 * deserializeAws_restJson1Anomaly
 */
const de_Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return take(output, {
    Name: __expectString,
    PixelAnomaly: (_: any) => de_PixelAnomaly(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AnomalyList
 */
const de_AnomalyList = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Anomaly(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatasetDescription
 */
const de_DatasetDescription = (output: any, context: __SerdeContext): DatasetDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetType: __expectString,
    ImageStats: _json,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_DatasetEntryList omitted.

// de_DatasetImageStats omitted.

/**
 * deserializeAws_restJson1DatasetMetadata
 */
const de_DatasetMetadata = (output: any, context: __SerdeContext): DatasetMetadata => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DatasetType: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DatasetMetadataList
 */
const de_DatasetMetadataList = (output: any, context: __SerdeContext): DatasetMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DatasetMetadata(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DetectAnomalyResult
 */
const de_DetectAnomalyResult = (output: any, context: __SerdeContext): DetectAnomalyResult => {
  return take(output, {
    Anomalies: (_: any) => de_AnomalyList(_, context),
    AnomalyMask: context.base64Decoder,
    Confidence: __limitedParseFloat32,
    IsAnomalous: __expectBoolean,
    Source: _json,
  }) as any;
};

// de_GreengrassConfiguration omitted.

// de_GreengrassOutputDetails omitted.

// de_ImageSource omitted.

/**
 * deserializeAws_restJson1ModelDescription
 */
const de_ModelDescription = (output: any, context: __SerdeContext): ModelDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    EvaluationEndTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EvaluationManifest: _json,
    EvaluationResult: _json,
    KmsKeyId: __expectString,
    MaxInferenceUnits: __expectInt32,
    MinInferenceUnits: __expectInt32,
    ModelArn: __expectString,
    ModelVersion: __expectString,
    OutputConfig: _json,
    Performance: (_: any) => de_ModelPerformance(_, context),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ModelMetadata
 */
const de_ModelMetadata = (output: any, context: __SerdeContext): ModelMetadata => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    ModelArn: __expectString,
    ModelVersion: __expectString,
    Performance: (_: any) => de_ModelPerformance(_, context),
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ModelMetadataList
 */
const de_ModelMetadataList = (output: any, context: __SerdeContext): ModelMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelMetadata(entry, context);
    });
  return retVal;
};

// de_ModelPackagingConfiguration omitted.

/**
 * deserializeAws_restJson1ModelPackagingDescription
 */
const de_ModelPackagingDescription = (output: any, context: __SerdeContext): ModelPackagingDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobName: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackagingConfiguration: _json,
    ModelPackagingJobDescription: __expectString,
    ModelPackagingMethod: __expectString,
    ModelPackagingOutputDetails: _json,
    ModelVersion: __expectString,
    ProjectName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ModelPackagingJobMetadata
 */
const de_ModelPackagingJobMetadata = (output: any, context: __SerdeContext): ModelPackagingJobMetadata => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    JobName: __expectString,
    LastUpdatedTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelPackagingJobDescription: __expectString,
    ModelPackagingMethod: __expectString,
    ModelVersion: __expectString,
    ProjectName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ModelPackagingJobsList
 */
const de_ModelPackagingJobsList = (output: any, context: __SerdeContext): ModelPackagingJobMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ModelPackagingJobMetadata(entry, context);
    });
  return retVal;
};

// de_ModelPackagingOutputDetails omitted.

/**
 * deserializeAws_restJson1ModelPerformance
 */
const de_ModelPerformance = (output: any, context: __SerdeContext): ModelPerformance => {
  return take(output, {
    F1Score: __limitedParseFloat32,
    Precision: __limitedParseFloat32,
    Recall: __limitedParseFloat32,
  }) as any;
};

// de_OutputConfig omitted.

// de_OutputS3Object omitted.

/**
 * deserializeAws_restJson1PixelAnomaly
 */
const de_PixelAnomaly = (output: any, context: __SerdeContext): PixelAnomaly => {
  return take(output, {
    Color: __expectString,
    TotalPercentageArea: __limitedParseFloat32,
  }) as any;
};

/**
 * deserializeAws_restJson1ProjectDescription
 */
const de_ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Datasets: (_: any) => de_DatasetMetadataList(_, context),
    ProjectArn: __expectString,
    ProjectName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProjectMetadata
 */
const de_ProjectMetadata = (output: any, context: __SerdeContext): ProjectMetadata => {
  return take(output, {
    CreationTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProjectArn: __expectString,
    ProjectName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProjectMetadataList
 */
const de_ProjectMetadataList = (output: any, context: __SerdeContext): ProjectMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProjectMetadata(entry, context);
    });
  return retVal;
};

// de_S3Location omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TargetPlatform omitted.

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
