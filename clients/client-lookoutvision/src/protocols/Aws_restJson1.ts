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
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  DatasetImageStats,
  DatasetMetadata,
  DatasetSource,
  DetectAnomalyResult,
  GreengrassConfiguration,
  GreengrassOutputDetails,
  ImageSource,
  InputS3Object,
  InternalServerException,
  ModelDescription,
  ModelMetadata,
  ModelPackagingConfiguration,
  ModelPackagingDescription,
  ModelPackagingJobMetadata,
  ModelPackagingOutputDetails,
  ModelPerformance,
  OutputConfig,
  OutputS3Object,
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

export const serializeAws_restJson1CreateDatasetCommand = async (
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
  body = JSON.stringify({
    ...(input.DatasetSource != null && {
      DatasetSource: serializeAws_restJson1DatasetSource(input.DatasetSource, context),
    }),
    ...(input.DatasetType != null && { DatasetType: input.DatasetType }),
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

export const serializeAws_restJson1CreateModelCommand = async (
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.OutputConfig != null && {
      OutputConfig: serializeAws_restJson1OutputConfig(input.OutputConfig, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/json",
    "x-amzn-client-token": input.ClientToken!,
  });
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/2020-11-20/projects";
  let body: any;
  body = JSON.stringify({
    ...(input.ProjectName != null && { ProjectName: input.ProjectName }),
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

export const serializeAws_restJson1DeleteDatasetCommand = async (
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

export const serializeAws_restJson1DeleteModelCommand = async (
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

export const serializeAws_restJson1DeleteProjectCommand = async (
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

export const serializeAws_restJson1DescribeDatasetCommand = async (
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

export const serializeAws_restJson1DescribeModelCommand = async (
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

export const serializeAws_restJson1DescribeModelPackagingJobCommand = async (
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

export const serializeAws_restJson1DescribeProjectCommand = async (
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

export const serializeAws_restJson1DetectAnomaliesCommand = async (
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

export const serializeAws_restJson1ListDatasetEntriesCommand = async (
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

export const serializeAws_restJson1ListModelPackagingJobsCommand = async (
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

export const serializeAws_restJson1ListModelsCommand = async (
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

export const serializeAws_restJson1ListProjectsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1StartModelCommand = async (
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
  body = JSON.stringify({
    ...(input.MaxInferenceUnits != null && { MaxInferenceUnits: input.MaxInferenceUnits }),
    ...(input.MinInferenceUnits != null && { MinInferenceUnits: input.MinInferenceUnits }),
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

export const serializeAws_restJson1StartModelPackagingJobCommand = async (
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
  body = JSON.stringify({
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1ModelPackagingConfiguration(input.Configuration, context),
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.JobName != null && { JobName: input.JobName }),
    ...(input.ModelVersion != null && { ModelVersion: input.ModelVersion }),
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

export const serializeAws_restJson1StopModelCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateDatasetEntriesCommand = async (
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
  body = JSON.stringify({
    ...(input.Changes != null && { Changes: context.base64Encoder(input.Changes) }),
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

export const deserializeAws_restJson1CreateDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DatasetMetadata != null) {
    contents.DatasetMetadata = deserializeAws_restJson1DatasetMetadata(data.DatasetMetadata, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateDatasetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1CreateModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ModelMetadata != null) {
    contents.ModelMetadata = deserializeAws_restJson1ModelMetadata(data.ModelMetadata, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateModelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  if (data.ProjectMetadata != null) {
    contents.ProjectMetadata = deserializeAws_restJson1ProjectMetadata(data.ProjectMetadata, context);
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DeleteDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDatasetCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDatasetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DeleteModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ModelArn != null) {
    contents.ModelArn = __expectString(data.ModelArn);
  }
  return contents;
};

const deserializeAws_restJson1DeleteModelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProjectArn != null) {
    contents.ProjectArn = __expectString(data.ProjectArn);
  }
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DescribeDatasetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDatasetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeDatasetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DatasetDescription != null) {
    contents.DatasetDescription = deserializeAws_restJson1DatasetDescription(data.DatasetDescription, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeDatasetCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DescribeModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ModelDescription != null) {
    contents.ModelDescription = deserializeAws_restJson1ModelDescription(data.ModelDescription, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeModelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DescribeModelPackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeModelPackagingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeModelPackagingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ModelPackagingDescription != null) {
    contents.ModelPackagingDescription = deserializeAws_restJson1ModelPackagingDescription(
      data.ModelPackagingDescription,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeModelPackagingJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DescribeProjectCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProjectCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProjectCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProjectDescription != null) {
    contents.ProjectDescription = deserializeAws_restJson1ProjectDescription(data.ProjectDescription, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeProjectCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1DetectAnomaliesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DetectAnomaliesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DetectAnomaliesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DetectAnomalyResult != null) {
    contents.DetectAnomalyResult = deserializeAws_restJson1DetectAnomalyResult(data.DetectAnomalyResult, context);
  }
  return contents;
};

const deserializeAws_restJson1DetectAnomaliesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1ListDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDatasetEntriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDatasetEntriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DatasetEntries != null) {
    contents.DatasetEntries = deserializeAws_restJson1DatasetEntryList(data.DatasetEntries, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDatasetEntriesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1ListModelPackagingJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelPackagingJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListModelPackagingJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ModelPackagingJobs != null) {
    contents.ModelPackagingJobs = deserializeAws_restJson1ModelPackagingJobsList(data.ModelPackagingJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListModelPackagingJobsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1ListModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListModelsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListModelsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Models != null) {
    contents.Models = deserializeAws_restJson1ModelMetadataList(data.Models, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListModelsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Projects != null) {
    contents.Projects = deserializeAws_restJson1ProjectMetadataList(data.Projects, context);
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
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagList(data.Tags, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1StartModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1StartModelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1StartModelPackagingJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartModelPackagingJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartModelPackagingJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobName != null) {
    contents.JobName = __expectString(data.JobName);
  }
  return contents;
};

const deserializeAws_restJson1StartModelPackagingJobCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1StopModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopModelCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopModelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1StopModelCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lookoutvision#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.lookoutvision#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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

export const deserializeAws_restJson1UpdateDatasetEntriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDatasetEntriesCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateDatasetEntriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  return contents;
};

const deserializeAws_restJson1UpdateDatasetEntriesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.lookoutvision#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lookoutvision#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lookoutvision#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lookoutvision#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lookoutvision#ValidationException":
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ResourceId != null) {
    contents.ResourceId = __expectString(data.ResourceId);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({
    RetryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.QuotaCode != null) {
    contents.QuotaCode = __expectString(data.QuotaCode);
  }
  if (data.ServiceCode != null) {
    contents.ServiceCode = __expectString(data.ServiceCode);
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1DatasetGroundTruthManifest = (
  input: DatasetGroundTruthManifest,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Object != null && { S3Object: serializeAws_restJson1InputS3Object(input.S3Object, context) }),
  };
};

const serializeAws_restJson1DatasetSource = (input: DatasetSource, context: __SerdeContext): any => {
  return {
    ...(input.GroundTruthManifest != null && {
      GroundTruthManifest: serializeAws_restJson1DatasetGroundTruthManifest(input.GroundTruthManifest, context),
    }),
  };
};

const serializeAws_restJson1GreengrassConfiguration = (
  input: GreengrassConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompilerOptions != null && { CompilerOptions: input.CompilerOptions }),
    ...(input.ComponentDescription != null && { ComponentDescription: input.ComponentDescription }),
    ...(input.ComponentName != null && { ComponentName: input.ComponentName }),
    ...(input.ComponentVersion != null && { ComponentVersion: input.ComponentVersion }),
    ...(input.S3OutputLocation != null && {
      S3OutputLocation: serializeAws_restJson1S3Location(input.S3OutputLocation, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagList(input.Tags, context) }),
    ...(input.TargetDevice != null && { TargetDevice: input.TargetDevice }),
    ...(input.TargetPlatform != null && {
      TargetPlatform: serializeAws_restJson1TargetPlatform(input.TargetPlatform, context),
    }),
  };
};

const serializeAws_restJson1InputS3Object = (input: InputS3Object, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1ModelPackagingConfiguration = (
  input: ModelPackagingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Greengrass != null && {
      Greengrass: serializeAws_restJson1GreengrassConfiguration(input.Greengrass, context),
    }),
  };
};

const serializeAws_restJson1OutputConfig = (input: OutputConfig, context: __SerdeContext): any => {
  return {
    ...(input.S3Location != null && { S3Location: serializeAws_restJson1S3Location(input.S3Location, context) }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Tag(entry, context);
    });
};

const serializeAws_restJson1TargetPlatform = (input: TargetPlatform, context: __SerdeContext): any => {
  return {
    ...(input.Accelerator != null && { Accelerator: input.Accelerator }),
    ...(input.Arch != null && { Arch: input.Arch }),
    ...(input.Os != null && { Os: input.Os }),
  };
};

const deserializeAws_restJson1Anomaly = (output: any, context: __SerdeContext): Anomaly => {
  return {
    Name: __expectString(output.Name),
    PixelAnomaly:
      output.PixelAnomaly != null ? deserializeAws_restJson1PixelAnomaly(output.PixelAnomaly, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AnomalyList = (output: any, context: __SerdeContext): Anomaly[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Anomaly(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatasetDescription = (output: any, context: __SerdeContext): DatasetDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DatasetType: __expectString(output.DatasetType),
    ImageStats:
      output.ImageStats != null ? deserializeAws_restJson1DatasetImageStats(output.ImageStats, context) : undefined,
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    ProjectName: __expectString(output.ProjectName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1DatasetEntryList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1DatasetImageStats = (output: any, context: __SerdeContext): DatasetImageStats => {
  return {
    Anomaly: __expectInt32(output.Anomaly),
    Labeled: __expectInt32(output.Labeled),
    Normal: __expectInt32(output.Normal),
    Total: __expectInt32(output.Total),
  } as any;
};

const deserializeAws_restJson1DatasetMetadata = (output: any, context: __SerdeContext): DatasetMetadata => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    DatasetType: __expectString(output.DatasetType),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1DatasetMetadataList = (output: any, context: __SerdeContext): DatasetMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DatasetMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DetectAnomalyResult = (output: any, context: __SerdeContext): DetectAnomalyResult => {
  return {
    Anomalies: output.Anomalies != null ? deserializeAws_restJson1AnomalyList(output.Anomalies, context) : undefined,
    AnomalyMask: output.AnomalyMask != null ? context.base64Decoder(output.AnomalyMask) : undefined,
    Confidence: __limitedParseFloat32(output.Confidence),
    IsAnomalous: __expectBoolean(output.IsAnomalous),
    Source: output.Source != null ? deserializeAws_restJson1ImageSource(output.Source, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GreengrassConfiguration = (
  output: any,
  context: __SerdeContext
): GreengrassConfiguration => {
  return {
    CompilerOptions: __expectString(output.CompilerOptions),
    ComponentDescription: __expectString(output.ComponentDescription),
    ComponentName: __expectString(output.ComponentName),
    ComponentVersion: __expectString(output.ComponentVersion),
    S3OutputLocation:
      output.S3OutputLocation != null
        ? deserializeAws_restJson1S3Location(output.S3OutputLocation, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1TagList(output.Tags, context) : undefined,
    TargetDevice: __expectString(output.TargetDevice),
    TargetPlatform:
      output.TargetPlatform != null
        ? deserializeAws_restJson1TargetPlatform(output.TargetPlatform, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GreengrassOutputDetails = (
  output: any,
  context: __SerdeContext
): GreengrassOutputDetails => {
  return {
    ComponentName: __expectString(output.ComponentName),
    ComponentVersion: __expectString(output.ComponentVersion),
    ComponentVersionArn: __expectString(output.ComponentVersionArn),
  } as any;
};

const deserializeAws_restJson1ImageSource = (output: any, context: __SerdeContext): ImageSource => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ModelDescription = (output: any, context: __SerdeContext): ModelDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    Description: __expectString(output.Description),
    EvaluationEndTimestamp:
      output.EvaluationEndTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EvaluationEndTimestamp)))
        : undefined,
    EvaluationManifest:
      output.EvaluationManifest != null
        ? deserializeAws_restJson1OutputS3Object(output.EvaluationManifest, context)
        : undefined,
    EvaluationResult:
      output.EvaluationResult != null
        ? deserializeAws_restJson1OutputS3Object(output.EvaluationResult, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    MaxInferenceUnits: __expectInt32(output.MaxInferenceUnits),
    MinInferenceUnits: __expectInt32(output.MinInferenceUnits),
    ModelArn: __expectString(output.ModelArn),
    ModelVersion: __expectString(output.ModelVersion),
    OutputConfig:
      output.OutputConfig != null ? deserializeAws_restJson1OutputConfig(output.OutputConfig, context) : undefined,
    Performance:
      output.Performance != null ? deserializeAws_restJson1ModelPerformance(output.Performance, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ModelMetadata = (output: any, context: __SerdeContext): ModelMetadata => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    Description: __expectString(output.Description),
    ModelArn: __expectString(output.ModelArn),
    ModelVersion: __expectString(output.ModelVersion),
    Performance:
      output.Performance != null ? deserializeAws_restJson1ModelPerformance(output.Performance, context) : undefined,
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ModelMetadataList = (output: any, context: __SerdeContext): ModelMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ModelMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ModelPackagingConfiguration = (
  output: any,
  context: __SerdeContext
): ModelPackagingConfiguration => {
  return {
    Greengrass:
      output.Greengrass != null
        ? deserializeAws_restJson1GreengrassConfiguration(output.Greengrass, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ModelPackagingDescription = (
  output: any,
  context: __SerdeContext
): ModelPackagingDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    JobName: __expectString(output.JobName),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    ModelPackagingConfiguration:
      output.ModelPackagingConfiguration != null
        ? deserializeAws_restJson1ModelPackagingConfiguration(output.ModelPackagingConfiguration, context)
        : undefined,
    ModelPackagingJobDescription: __expectString(output.ModelPackagingJobDescription),
    ModelPackagingMethod: __expectString(output.ModelPackagingMethod),
    ModelPackagingOutputDetails:
      output.ModelPackagingOutputDetails != null
        ? deserializeAws_restJson1ModelPackagingOutputDetails(output.ModelPackagingOutputDetails, context)
        : undefined,
    ModelVersion: __expectString(output.ModelVersion),
    ProjectName: __expectString(output.ProjectName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ModelPackagingJobMetadata = (
  output: any,
  context: __SerdeContext
): ModelPackagingJobMetadata => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    JobName: __expectString(output.JobName),
    LastUpdatedTimestamp:
      output.LastUpdatedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTimestamp)))
        : undefined,
    ModelPackagingJobDescription: __expectString(output.ModelPackagingJobDescription),
    ModelPackagingMethod: __expectString(output.ModelPackagingMethod),
    ModelVersion: __expectString(output.ModelVersion),
    ProjectName: __expectString(output.ProjectName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ModelPackagingJobsList = (
  output: any,
  context: __SerdeContext
): ModelPackagingJobMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ModelPackagingJobMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ModelPackagingOutputDetails = (
  output: any,
  context: __SerdeContext
): ModelPackagingOutputDetails => {
  return {
    Greengrass:
      output.Greengrass != null
        ? deserializeAws_restJson1GreengrassOutputDetails(output.Greengrass, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ModelPerformance = (output: any, context: __SerdeContext): ModelPerformance => {
  return {
    F1Score: __limitedParseFloat32(output.F1Score),
    Precision: __limitedParseFloat32(output.Precision),
    Recall: __limitedParseFloat32(output.Recall),
  } as any;
};

const deserializeAws_restJson1OutputConfig = (output: any, context: __SerdeContext): OutputConfig => {
  return {
    S3Location: output.S3Location != null ? deserializeAws_restJson1S3Location(output.S3Location, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OutputS3Object = (output: any, context: __SerdeContext): OutputS3Object => {
  return {
    Bucket: __expectString(output.Bucket),
    Key: __expectString(output.Key),
  } as any;
};

const deserializeAws_restJson1PixelAnomaly = (output: any, context: __SerdeContext): PixelAnomaly => {
  return {
    Color: __expectString(output.Color),
    TotalPercentageArea: __limitedParseFloat32(output.TotalPercentageArea),
  } as any;
};

const deserializeAws_restJson1ProjectDescription = (output: any, context: __SerdeContext): ProjectDescription => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    Datasets:
      output.Datasets != null ? deserializeAws_restJson1DatasetMetadataList(output.Datasets, context) : undefined,
    ProjectArn: __expectString(output.ProjectArn),
    ProjectName: __expectString(output.ProjectName),
  } as any;
};

const deserializeAws_restJson1ProjectMetadata = (output: any, context: __SerdeContext): ProjectMetadata => {
  return {
    CreationTimestamp:
      output.CreationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTimestamp)))
        : undefined,
    ProjectArn: __expectString(output.ProjectArn),
    ProjectName: __expectString(output.ProjectName),
  } as any;
};

const deserializeAws_restJson1ProjectMetadataList = (output: any, context: __SerdeContext): ProjectMetadata[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProjectMetadata(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    Bucket: __expectString(output.Bucket),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
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

const deserializeAws_restJson1TargetPlatform = (output: any, context: __SerdeContext): TargetPlatform => {
  return {
    Accelerator: __expectString(output.Accelerator),
    Arch: __expectString(output.Arch),
    Os: __expectString(output.Os),
  } as any;
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
